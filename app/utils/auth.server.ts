import type { Prisma, User } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";

import bcrypt from "bcryptjs";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import invariant from "tiny-invariant";

import { prisma } from "~/utils/db.server";
import { sessionStorage } from "~/utils/session.server";

export const DEFAULT_FAILURE_REDIRECT = "/auth/login";
export const DEFAULT_SUCCESS_REDIRECT = "/console";

export const authenticator = new Authenticator<string>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email");
    const password = form.get("password");

    invariant(typeof email === "string", "email must be a string");
    invariant(typeof password === "string", "password must be a string");

    const user = await verifyLogin(email, password);
    if (!user) {
      throw new AuthorizationError("Email/Password combination is incorrect");
    }
    return user.id;
  }),
  FormStrategy.name
);

export const requireUserId = async (
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) => {
  const searchParams = new URLSearchParams([
    ["redirectTo", redirectTo],
    ["loginMessage", "Please login to continue"]
  ]);
  const userId = await authenticator.isAuthenticated(request, {
    failureRedirect: `${DEFAULT_FAILURE_REDIRECT}?${searchParams}`
  });
  return userId;
};

export const getUser = async (
  request: Request,
  select?: Prisma.UserSelect<DefaultArgs>
) => {
  const userId = await authenticator.isAuthenticated(request);
  if (!userId) return null;
  if (select) {
    return await prisma.user.findUnique({ select, where: { id: userId } });
  }
  return { id: userId };
};

export async function verifyLogin(email: User["email"], password: string) {
  const userWithPassword = await prisma.user.findUnique({
    select: { id: true, password: { select: { hash: true } } },
    where: { email }
  });

  if (!userWithPassword || !userWithPassword.password?.hash) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  return { id: userWithPassword.id };
}

export async function signUp(
  email: User["email"],
  firstName: User["firstName"],
  lastName: User["lastName"],
  password: string
) {
  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: {
        create: { hash }
      }
    },
    select: { id: true }
  });

  return { id: user.id };
}
