var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { abort, pipe } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          abortDelay: ABORT_DELAY,
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        },
        onShellError(error) {
          reject(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { abort, pipe } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          abortDelay: ABORT_DELAY,
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        },
        onShellError(error) {
          reject(error);
        },
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3LUBTAH5.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { href: tailwind_default, rel: "stylesheet" },
  { href: "/favicon.ico", rel: "icon" },
  { href: "/site.webmanifest", rel: "manifest" },
  {
    href: "/favicons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180"
  },
  {
    href: "/favicons/favicon-32x32.png",
    rel: "icon",
    sizes: "32x32",
    type: "image/png"
  },
  {
    href: "/favicons/favicon-16x16.png",
    rel: "icon",
    sizes: "16x16",
    type: "image/png"
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { content: "width=device-width,initial-scale=1", name: "viewport" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/auth.form.tsx
var auth_form_exports = {};
__export(auth_form_exports, {
  FormLoginForm: () => FormLoginForm,
  action: () => action
});
import { conform, useForm } from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { AuthorizationError as AuthorizationError2 } from "remix-auth";
import { FormStrategy as FormStrategy2 } from "remix-auth-form";
import { z } from "zod";

// app/components/form.tsx
import { useInputEvent } from "@conform-to/react";
import { useId, useRef } from "react";

// app/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

// app/utils/misc.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDateRange(start, end) {
  let startDate = typeof start == "string" ? new Date(start) : start, endDate = typeof end == "string" ? new Date(end) : end;
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "short",
    // timeZoneName: "short",
    weekday: "short"
    // year: "numeric"
  }).formatRange(startDate, endDate);
}
function getOrdinal(n) {
  let ord = "th";
  return n % 10 == 1 && n % 100 != 11 ? ord = "st" : n % 10 == 2 && n % 100 != 12 ? ord = "nd" : n % 10 == 3 && n % 100 != 13 && (ord = "rd"), ord;
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-10 py-2 px-4",
        lg: "h-11 px-8 rounded-md",
        sm: "h-9 px-3 rounded-md"
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      }
    }
  }
), Button = React.forwardRef(
  ({ asChild = !1, className, size, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ className, size, variant })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React2 from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Checkbox = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  CheckboxPrimitive.Root,
  {
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ref,
    ...props,
    children: /* @__PURE__ */ jsxDEV4(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsxDEV4("svg", { viewBox: "0 0 8 8", children: /* @__PURE__ */ jsxDEV4(
          "path",
          {
            d: "M1,4 L3,6 L7,2",
            fill: "none",
            stroke: "currentcolor",
            strokeWidth: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/checkbox.tsx",
            lineNumber: 29,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ui/checkbox.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/checkbox.tsx",
        lineNumber: 25,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/checkbox.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/components/ui/input.tsx
import * as React3 from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
    "input",
    {
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      type,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import * as React4 from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV6(
  LabelPrimitive.Root,
  {
    className: cn(labelVariants(), className),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 18,
    columnNumber: 3
  },
  this
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/components/form.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ErrorList({
  errors,
  id
}) {
  let errorsToRender = errors?.filter(Boolean);
  return errorsToRender?.length ? /* @__PURE__ */ jsxDEV7("ul", { className: "flex flex-col gap-1", id, children: errorsToRender.map((e) => /* @__PURE__ */ jsxDEV7("li", { className: "text-[10px] text-red-600", children: e }, e, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this) : null;
}
function Field({
  className,
  errors,
  inputProps,
  labelProps
}) {
  let fallbackId = useId(), id = inputProps.id ?? fallbackId, errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ jsxDEV7("div", { className, children: [
    /* @__PURE__ */ jsxDEV7(Label, { htmlFor: id, ...labelProps }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Input,
      {
        "aria-describedby": errorId,
        "aria-invalid": errorId ? !0 : void 0,
        id,
        ...inputProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/form.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ jsxDEV7(ErrorList, { errors, id: errorId }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 56,
      columnNumber: 20
    }, this) : null }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function CheckboxField({
  buttonProps,
  className,
  errors,
  labelProps
}) {
  let fallbackId = useId(), buttonRef = useRef(null), control = useInputEvent({
    // Retrieve the checkbox element by name instead as Radix does not expose the internal checkbox element
    onFocus: () => buttonRef.current?.focus(),
    // See https://github.com/radix-ui/primitives/discussions/874
    ref: () => buttonRef.current?.form?.elements.namedItem(buttonProps.name ?? "")
  }), id = buttonProps.id ?? buttonProps.name ?? fallbackId, errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ jsxDEV7("div", { className, children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV7(
        Checkbox,
        {
          "aria-describedby": errorId,
          "aria-invalid": errorId ? !0 : void 0,
          id,
          ref: buttonRef,
          ...buttonProps,
          onBlur: (event) => {
            control.blur(), buttonProps.onBlur?.(event);
          },
          onCheckedChange: (state) => {
            control.change(Boolean(state.valueOf())), buttonProps.onCheckedChange?.(state);
          },
          onFocus: (event) => {
            control.focus(), buttonProps.onFocus?.(event);
          },
          type: "button"
        },
        void 0,
        !1,
        {
          fileName: "app/components/form.tsx",
          lineNumber: 119,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        "label",
        {
          htmlFor: id,
          ...labelProps,
          className: "text-body-xs self-center text-muted-foreground"
        },
        void 0,
        !1,
        {
          fileName: "app/components/form.tsx",
          lineNumber: 139,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/form.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ jsxDEV7(ErrorList, { errors, id: errorId }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 146,
      columnNumber: 20
    }, this) : null }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function SubmitButton({
  state = "idle",
  submittingText = "Submitting...",
  ...props
}) {
  return /* @__PURE__ */ jsxDEV7(
    Button,
    {
      ...props,
      className: props.className,
      disabled: props.disabled || state !== "idle",
      children: /* @__PURE__ */ jsxDEV7("span", { children: state !== "idle" ? submittingText : props.children }, void 0, !1, {
        fileName: "app/components/form.tsx",
        lineNumber: 166,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/form.tsx",
      lineNumber: 161,
      columnNumber: 5
    },
    this
  );
}

// app/utils/auth.server.ts
import bcrypt from "bcryptjs";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import invariant2 from "tiny-invariant";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";

// app/utils/singleton.server.ts
function singleton(name, value) {
  let yolo = global;
  return yolo.__singletons ??= {}, yolo.__singletons[name] ??= value(), yolo.__singletons[name];
}

// app/utils/db.server.ts
var prisma = singleton("prisma", () => new PrismaClient());
prisma.$connect();

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import invariant from "tiny-invariant";
invariant(
  typeof process.env.SESSION_SECRET == "string",
  "Set SESSION_SECRET environment variable."
);
var sessionStorage = createCookieSessionStorage({
  cookie: {
    httpOnly: !0,
    // for security reasons, make this cookie http only
    name: "__session",
    // use any name you want here
    path: "/",
    // remember to add this so the cookie will work in all routes
    sameSite: "lax",
    // this helps with CSRF
    secrets: [process.env.SESSION_SECRET],
    // replace this with an actual secret
    secure: !1
    // enable this in prod only
  }
}), { commitSession, destroySession, getSession } = sessionStorage;

// app/utils/auth.server.ts
var authenticator = new Authenticator(sessionStorage);
authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email"), password = form.get("password");
    invariant2(typeof email == "string", "email must be a string"), invariant2(typeof password == "string", "password must be a string");
    let user = await verifyLogin(email, password);
    if (!user)
      throw new AuthorizationError("Email/Password combination is incorrect");
    return user.id;
  }),
  FormStrategy.name
);
var requireUserId = async (request, redirectTo = new URL(request.url).pathname) => {
  let searchParams = new URLSearchParams([
    ["redirectTo", redirectTo],
    ["loginMessage", "Please login to continue"]
  ]);
  return await authenticator.isAuthenticated(request, {
    failureRedirect: `/console/login?${searchParams}`
  });
};
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    select: { id: !0, password: { select: { hash: !0 } } },
    where: { email }
  });
  return !userWithPassword || !userWithPassword.password?.hash || !await bcrypt.compare(
    password,
    userWithPassword.password.hash
  ) ? null : { id: userWithPassword.id };
}

// app/utils/cookies.server.ts
import { createCookie } from "@remix-run/node";
var redirectToCookie = createCookie("redirect-to", {
  httpOnly: !0,
  maxAge: 60,
  // 1 minute because it makes no sense to keep it for a long time
  path: "/",
  sameSite: "lax",
  secure: !1
});

// app/routes/auth.form.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var LoginFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Must be a valid email"),
  password: z.string({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters long")
}), action = async ({ request }) => {
  let formData = await request.formData(), submission = parse(formData, {
    schema: LoginFormSchema
  });
  if (!submission.value || submission.intent !== "submit")
    return json(
      {
        status: "error",
        submission
      },
      { status: 400 }
    );
  let redirectTo = await redirectToCookie.parse(request.headers.get("Cookie")) ?? "/";
  try {
    await authenticator.authenticate(FormStrategy2.name, request, {
      context: { formData },
      successRedirect: redirectTo,
      throwOnError: !0
    });
  } catch (error) {
    if (error instanceof AuthorizationError2)
      return json(
        {
          status: "error",
          submission
        },
        { status: 400 }
      );
    throw error;
  }
  return json({ status: "success", submission });
};
function FormLoginForm({ formError }) {
  let loginFetcher = useFetcher(), [form, fields] = useForm({
    constraint: getFieldsetConstraint(LoginFormSchema),
    id: "form-login-form",
    lastSubmission: loginFetcher.data?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: LoginFormSchema });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ jsxDEV8(
    loginFetcher.Form,
    {
      action: "/auth/form",
      method: "post",
      ...form.props,
      className: "mb-8 flex flex-col sm:mb-4",
      children: [
        /* @__PURE__ */ jsxDEV8(
          Field,
          {
            errors: fields.email.errors,
            inputProps: conform.input(fields.email),
            labelProps: { children: "Email", htmlFor: fields.email.id }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.form.tsx",
            lineNumber: 77,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Field,
          {
            errors: fields.password.errors,
            inputProps: conform.input(fields.password, { type: "password" }),
            labelProps: { children: "Password", htmlFor: fields.password.id }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.form.tsx",
            lineNumber: 82,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(ErrorList, { errors: formError ? [formError] : [] }, void 0, !1, {
          fileName: "app/routes/auth.form.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(ErrorList, { errors: form.errors, id: form.errorId }, void 0, !1, {
          fileName: "app/routes/auth.form.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(
          SubmitButton,
          {
            className: "px-6 py-2",
            state: loginFetcher.state,
            type: "submit",
            children: "Login"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.form.tsx",
            lineNumber: 89,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/auth.form.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/brand-logos.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Instagram({ className }) {
  return /* @__PURE__ */ jsxDEV9(
    "svg",
    {
      className,
      fill: "currentColor",
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxDEV9("title", { children: "Instagram" }, void 0, !1, {
          fileName: "app/components/brand-logos.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" }, void 0, !1, {
          fileName: "app/components/brand-logos.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/brand-logos.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}

// app/images/logo.png
var logo_default = "/build/_assets/logo-RVN5BKY4.png";

// app/components/header.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Header({ className }) {
  return /* @__PURE__ */ jsxDEV10(
    "header",
    {
      className: cn(
        "flex w-full flex-col items-center justify-center gap-1.5 rounded-md bg-white p-6 drop-shadow-md md:flex-row md:gap-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV10("img", { alt: "Corgis of NYC", className: "h-40", src: logo_default }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-col items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV10("h1", { className: "text-center text-3xl font-bold leading-tight text-gray-900", children: "NYC Corgi Meetups" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-semibold leading-tight text-gray-700", children: "Follow us on Instagram" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { className: "flex items-center gap-2 text-xl font-semibold leading-tight text-gray-700", children: [
            /* @__PURE__ */ jsxDEV10(Instagram, { className: "h-8 w-auto text-inherit" }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV10(
              "a",
              {
                className: "text-blue-700 hover:underline",
                href: "https://www.instagram.com/corgis_of_nyc/",
                children: "@corgis_of_nyc"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.tsx",
                lineNumber: 23,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/header.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Corgis of NYC: NYC Corgi Meetups" },
  { content: "Welcome to Corgis of NYC", name: "description" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV11("div", { className: "flex min-h-screen min-w-full items-center justify-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 px-12 py-6", children: /* @__PURE__ */ jsxDEV11(Header, { className: "md:max-w-max md:flex-col md:gap-1.5" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => Layout
});
import { Link, Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Layout() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "flex min-h-screen min-w-full flex-col justify-start gap-4 bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 p-4 md:px-12 md:pt-6 lg:px-36", children: [
    /* @__PURE__ */ jsxDEV12(Header, {}, void 0, !1, {
      fileName: "app/routes/_public+/_layout.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("main", { className: "flex grow", children: /* @__PURE__ */ jsxDEV12(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_public+/_layout.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public+/_layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("footer", { className: "flex items-center justify-between rounded-md bg-black p-4 text-sm font-bold text-white", children: [
      /* @__PURE__ */ jsxDEV12("div", { children: /* @__PURE__ */ jsxDEV12(
        "a",
        {
          className: "flex items-center gap-2 underline-offset-4 hover:underline",
          href: "https://www.instagram.com/corgis_of_nyc/",
          rel: "noreferrer",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsxDEV12(Instagram, { className: "h-6 w-auto text-inherit" }, void 0, !1, {
              fileName: "app/routes/_public+/_layout.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this),
            "@corgis_of_nyc"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_public+/_layout.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_public+/_layout.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("ul", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV12("li", { children: /* @__PURE__ */ jsxDEV12(Link, { className: "underline-offset-4 hover:underline", to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/routes/_public+/_layout.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public+/_layout.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("li", { children: /* @__PURE__ */ jsxDEV12(Link, { className: "underline-offset-4 hover:underline", to: "/coc", children: "Code of Conduct" }, void 0, !1, {
          fileName: "app/routes/_public+/_layout.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public+/_layout.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public+/_layout.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/_layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/_layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta2
});
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Corgis of NYC: About" },
  { content: "Welcome to Corgis of NYC", name: "description" }
];
function About() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md", children: [
    /* @__PURE__ */ jsxDEV13("h2", { className: "flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700", children: "About" }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "We are the Corgis of NYC, a monthly meetup group, where little (chonk) legs come together in the big city." }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: [
      "Shortly after bringing home our floof",
      " ",
      /* @__PURE__ */ jsxDEV13(
        "a",
        {
          className: "text-blue-600 underline-offset-4 hover:underline",
          href: "https://www.instagram.com/franklin_corgi_nyc/",
          rel: "noreferrer",
          target: "_blank",
          children: "Franklin"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public+/about.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      " ",
      "during COVID, we began to look for ways to socialize him with other corgis. We had heard of meetup groups in the city pre-COVID, but hadn't been able to find anything active."
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: [
      /* @__PURE__ */ jsxDEV13("strong", { children: "Enter phase 1." }, void 0, !1, {
        fileName: "app/routes/_public+/about.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      " We started our own Instagram page called",
      " ",
      /* @__PURE__ */ jsxDEV13(
        "a",
        {
          className: "text-blue-600 underline-offset-4 hover:underline",
          href: "https://www.instagram.com/corgis_of_nyc/",
          rel: "noreferrer",
          target: "_blank",
          children: "The Corgis of NYC"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public+/about.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ),
      ", having no idea where it would go. We told all of our corgi friends in the dog park on the UES, and shared our newly created @Corgis_of_NYC page on Franklin's account."
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "Not knowing what we were doing, we hosted the first meetup in Central Park, after off-leash hours in April of 2021 (and got yelled at by a CP employee). We were shocked to see so many people\u2015complete strangers to us at the time\u2015come out to this meetup. Everyone expressed how grateful they were to find out that Corgi meetups were happening again. In what felt like a blink of an eye, it took off from there." }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "Our vision was for this to be a corgi community, run by the community itself, where we suggest a few dates and locations based on feedback from other Corgi parents. We conduct a poll on Instagram with a few options and whichever date and location has the most votes gets chosen. It has been almost entirely grown through word-of-mouth, as we hardly post on the account except for the stories to vote for date and place (and then repost stories after the meetup with all of our tagged photos)." }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "Here we are now 2 years later, and we see at least 100 corgis come out each month." }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: [
      /* @__PURE__ */ jsxDEV13("strong", { children: "Enter phase 2." }, void 0, !1, {
        fileName: "app/routes/_public+/about.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      " We have launched this website, thanks to the amazing efforts of Atticus the Corgi and his father \u{1F64C}."
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "Our polling results on Instagram for where and when to host our meetups have become hard to interpret, so we are hoping the deployment of this website will help to make sure only those that really plan to attend cast their votes." }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { children: "Looking forward to continue celebrating corgi meetups with our corgi community!" }, void 0, !1, {
      fileName: "app/routes/_public+/about.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/about.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/coc.tsx
var coc_exports = {};
__export(coc_exports, {
  default: () => CodeOfConduct,
  meta: () => meta3
});
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Corgis of NYC: Code of Conduct" },
  { content: "Welcome to Corgis of NYC", name: "description" }
];
function CodeOfConduct() {
  return /* @__PURE__ */ jsxDEV14("div", { className: "flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md", children: [
    /* @__PURE__ */ jsxDEV14("h2", { className: "flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700", children: "Code of Conduct" }, void 0, !1, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { children: [
      "Lorem ipsum dolor sit amet. Et magnam voluptas et tempore voluptasUt voluptate qui perferendis esse ea porro earum ut earum veniam. Cum quia dignissimos",
      " ",
      /* @__PURE__ */ jsxDEV14("strong", { children: "Id aliquam sed dolorem molestiae eum accusamus fugit" }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      " id velit distinctio et omnis quae est natus fugiat. Aut internos sapiente",
      " ",
      /* @__PURE__ */ jsxDEV14("em", { children: "Sed eveniet quo eveniet omnis At dolore adipisci" }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      " et voluptates assumenda sit maiores cumque. Et earum enimAut delectus qui modi laboriosam in sequi atque.",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("ol", { children: [
      /* @__PURE__ */ jsxDEV14("li", { children: "Aut dolore quia aut veritatis numquam qui magnam corrupti. " }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("li", { children: "Ut dolorem consequatur At quos incidunt. " }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("li", { children: "Et blanditiis tempore et aperiam consequuntur. " }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("li", { children: [
        "Et nemo error et molestiae tempora qui asperiores rerum sit expedita accusamus.",
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { children: [
      "Nam facere enim",
      " ",
      /* @__PURE__ */ jsxDEV14("strong", { children: "Ab blanditiis qui praesentium saepe aut reprehenderit quis" }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      ". Sit dolor ipsaEos quia cum officiis fugit quo numquam beatae et quia nostrum. Aut dolor rerum et sapiente odit ",
      /* @__PURE__ */ jsxDEV14("em", { children: "A tempora" }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 41,
        columnNumber: 51
      }, this),
      ".",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("blockquote", { cite: "https://www.loremipzum.com", children: [
      "Quo quia mollitia ab consequatur voluptas sed illum soluta eum dignissimos incidunt est dolorum quia?",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { children: [
      "Est eveniet dolore in provident aliquamin delectus id rerum possimus est quasi consequatur. Qui nihil recusandae nam explicabo minusNon maxime est aliquid nihil et ratione quod sit porro quasi aut porro dolor. Vel pariatur sequi est autem delectus",
      " ",
      /* @__PURE__ */ jsxDEV14("em", { children: "Ut voluptatem qui omnis debitis qui rerum dolorem aut quis provident" }, void 0, !1, {
        fileName: "app/routes/_public+/coc.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      ". Non recusandae quisEt culpa non internos nisi in dolorem veniam sit tenetur exercitationem ex odit sunt.",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/coc.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/coc.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/join.tsx
var join_exports2 = {};
__export(join_exports2, {
  default: () => Join,
  meta: () => meta4
});

// app/routes/resources+/join.tsx
var join_exports = {};
__export(join_exports, {
  JoinForm: () => JoinForm,
  action: () => action2
});
import {
  conform as conform2,
  list,
  useFieldList,
  useFieldset,
  useForm as useForm2
} from "@conform-to/react";
import { getFieldsetConstraint as getFieldsetConstraint2, parse as parse2 } from "@conform-to/zod";
import { json as json2, redirect } from "@remix-run/node";
import { useFetcher as useFetcher2 } from "@remix-run/react";
import { format } from "date-fns";
import { useRef as useRef2 } from "react";
import { z as z2 } from "zod";
import { Fragment, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var CorgiSchema = z2.object({
  birthDate: z2.string().transform((value) => value ? new Date(value) : void 0).pipe(
    z2.date().max(/* @__PURE__ */ new Date(), { message: "Date should be before today" }).optional()
  ),
  instagram: z2.string().optional(),
  isVisible: z2.string().default("").transform((value) => value === "on"),
  name: z2.string().min(1, { message: "Name is required" })
}), JoinFormSchema = z2.object({
  corgis: z2.array(CorgiSchema).min(1),
  email: z2.string().min(1, { message: "Email is required" }).email(),
  firstName: z2.string().min(1, { message: "First Name is required" }),
  lastName: z2.string().min(1, { message: "Last Name is required" }),
  phoneNumber: z2.string().min(5, { message: "Phone number is required" }).max(15, "Phone number should not be longer than 15 characters"),
  readCOC: z2.string({
    required_error: "You must read and agree to the Code of Conduct."
  }).transform((value) => value === "on"),
  zipCode: z2.string().min(5, { message: "Zip Code is required" })
}), action2 = async ({ request }) => {
  let formData = await request.formData(), submission = parse2(formData, {
    schema: JoinFormSchema
  });
  if (!submission.value)
    return json2(
      {
        status: "error",
        submission
      },
      { status: 400 }
    );
  if (submission.intent !== "submit")
    return json2({ status: "idle", submission });
  let { corgis, ...data } = submission.value, member = await prisma.member.create({
    data: {
      ...data,
      corgis: {
        create: corgis
      }
    },
    select: { id: !0 }
  });
  return redirect(`/join/welcome/${member.id}`);
};
function JoinForm({ className }) {
  let joinFetcher = useFetcher2(), [
    form,
    { corgis, email, firstName, lastName, phoneNumber, readCOC, zipCode }
  ] = useForm2({
    constraint: getFieldsetConstraint2(JoinFormSchema),
    id: "join-form",
    lastSubmission: joinFetcher.data?.submission,
    onValidate({ formData }) {
      return parse2(formData, { schema: JoinFormSchema });
    },
    shouldRevalidate: "onBlur"
  }), corgiList = useFieldList(form.ref, corgis);
  return /* @__PURE__ */ jsxDEV15(
    joinFetcher.Form,
    {
      action: "/resources/join",
      method: "post",
      ...form.props,
      className: cn(className),
      children: [
        /* @__PURE__ */ jsxDEV15("h3", { className: "mb-1.5 text-xl font-semibold leading-tight text-gray-700", children: "Tell us about yourself" }, void 0, !1, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "md:flex md:w-full md:justify-evenly md:gap-4", children: [
          /* @__PURE__ */ jsxDEV15(
            Field,
            {
              className: "md:grow",
              errors: firstName.errors,
              inputProps: conform2.input(firstName),
              labelProps: { children: "First Name", htmlFor: firstName.id }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 116,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(
            Field,
            {
              className: "md:grow",
              errors: lastName.errors,
              inputProps: conform2.input(lastName),
              labelProps: { children: "Last Name", htmlFor: lastName.id }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 122,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "md:flex md:w-full md:justify-evenly md:gap-4", children: [
          /* @__PURE__ */ jsxDEV15(
            Field,
            {
              className: "md:grow",
              errors: email.errors,
              inputProps: conform2.input(email, { type: "email" }),
              labelProps: { children: "Email", htmlFor: email.id }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 130,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(
            Field,
            {
              className: "md:grow",
              errors: phoneNumber.errors,
              inputProps: conform2.input(phoneNumber, { type: "tel" }),
              labelProps: {
                children: "Phone Number",
                htmlFor: phoneNumber.id
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 136,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(
            Field,
            {
              errors: zipCode.errors,
              inputProps: conform2.input(zipCode),
              labelProps: { children: "Zip Code", htmlFor: zipCode.id }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 145,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15("h3", { className: "mb-1.5 text-xl font-semibold leading-tight text-gray-700", children: [
          "Tell us about your ",
          corgiList.length > 1 ? "corgis" : "corgi"
        ] }, void 0, !0, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 151,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15("ul", { children: corgiList.map((corgi, index) => /* @__PURE__ */ jsxDEV15("li", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV15(CorgiFieldset, { ...corgi }, void 0, !1, {
            fileName: "app/routes/resources+/join.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          corgiList.length > 1 ? /* @__PURE__ */ jsxDEV15(
            Button,
            {
              className: "absolute bottom-2 right-2 text-xs",
              size: "sm",
              variant: "destructive",
              ...list.remove(corgis.name, { index }),
              children: "Remove"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/resources+/join.tsx",
              lineNumber: 159,
              columnNumber: 15
            },
            this
          ) : null
        ] }, corgi.key, !0, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 154,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15(
          Button,
          {
            className: "my-3 w-full sm:w-auto",
            size: "sm",
            variant: "secondary",
            ...list.append(corgis.name),
            children: "I have another corgi"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resources+/join.tsx",
            lineNumber: 171,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15(
          CheckboxField,
          {
            buttonProps: conform2.input(readCOC, { type: "checkbox" }),
            errors: readCOC.errors,
            labelProps: {
              children: /* @__PURE__ */ jsxDEV15(Fragment, { children: [
                "I have read and agree to the",
                " ",
                /* @__PURE__ */ jsxDEV15(
                  "a",
                  {
                    className: "text-blue-600 underline-offset-4 hover:underline",
                    href: "./coc",
                    target: "_blank",
                    children: "Code of Conduct"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/resources+/join.tsx",
                    lineNumber: 186,
                    columnNumber: 15
                  },
                  this
                ),
                "."
              ] }, void 0, !0, {
                fileName: "app/routes/resources+/join.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this),
              htmlFor: readCOC.id
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resources+/join.tsx",
            lineNumber: 179,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15(SubmitButton, { className: "w-full sm:w-auto", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 199,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/resources+/join.tsx",
      lineNumber: 106,
      columnNumber: 5
    },
    this
  );
}
function CorgiFieldset(config) {
  let ref = useRef2(null), { birthDate, instagram, isVisible, name } = useFieldset(ref, config);
  return /* @__PURE__ */ jsxDEV15("fieldset", { className: "rounded-md border border-input p-2", ref, children: [
    /* @__PURE__ */ jsxDEV15(
      Field,
      {
        errors: name.errors,
        inputProps: conform2.input(name),
        labelProps: { children: "Name", htmlFor: name.id }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/join.tsx",
        lineNumber: 210,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15("div", { className: "md:flex md:w-full md:justify-evenly md:gap-4", children: [
      /* @__PURE__ */ jsxDEV15(
        Field,
        {
          className: "md:grow",
          errors: birthDate.errors,
          inputProps: {
            ...conform2.input(birthDate, { type: "date" }),
            max: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
          },
          labelProps: {
            children: "Birth Date",
            htmlFor: birthDate.id
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 216,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV15(
        Field,
        {
          className: "md:grow",
          errors: instagram.errors,
          inputProps: conform2.input(instagram),
          labelProps: { children: "Instagram", htmlFor: instagram.id }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/resources+/join.tsx",
          lineNumber: 228,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/resources+/join.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15(
      CheckboxField,
      {
        buttonProps: conform2.input(isVisible, { type: "checkbox" }),
        errors: isVisible.errors,
        labelProps: {
          children: "Show corgi in catalog?",
          htmlFor: isVisible.id
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/join.tsx",
        lineNumber: 235,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/join.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/join.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Corgis of NYC: Join" },
  { content: "Welcome to Corgis of NYC", name: "description" }
];
function Join() {
  return /* @__PURE__ */ jsxDEV16("div", { className: "flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md", children: [
    /* @__PURE__ */ jsxDEV16("h2", { className: "flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700", children: "Join the pack" }, void 0, !1, {
      fileName: "app/routes/_public+/join.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(JoinForm, { className: "my-2" }, void 0, !1, {
      fileName: "app/routes/_public+/join.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/join.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/join_.welcome.$memberId.tsx
var join_welcome_memberId_exports = {};
__export(join_welcome_memberId_exports, {
  default: () => Welcome,
  loader: () => loader,
  meta: () => meta5
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Corgis of NYC: Welcome" },
  { content: "Welcome to Corgis of NYC", name: "description" }
], loader = async ({ params }) => {
  let { memberId } = params, member = await prisma.member.findUnique({
    select: { corgis: { select: { name: !0 } }, firstName: !0 },
    where: { id: memberId }
  });
  if (!member)
    throw new Response("Not Found", {
      status: 404
    });
  return json3({ member });
};
function Welcome() {
  let { member } = useLoaderData(), getCorgiNames = (corgis) => {
    if (corgis.length === 1)
      return ` and ${corgis[0].name}`;
    let len = corgis.length;
    return ", " + corgis.map(
      (corgi, index) => index === len - 1 ? `and ${corgi.name}` : corgi.name
    ).join(", ");
  };
  return /* @__PURE__ */ jsxDEV17("div", { className: "flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md", children: [
    /* @__PURE__ */ jsxDEV17("h2", { className: "flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700", children: [
      "Welcome ",
      member.firstName,
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/join_.welcome.$memberId.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("p", { children: [
      "We're excited to have you",
      getCorgiNames(member.corgis),
      " join our community. Be sure to follow us on",
      " ",
      /* @__PURE__ */ jsxDEV17(
        "a",
        {
          className: "text-blue-700 hover:underline",
          href: "https://www.instagram.com/corgis_of_nyc/",
          children: "Instagram"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public+/join_.welcome.$memberId.tsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      ),
      " ",
      "and check back for fun events."
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/join_.welcome.$memberId.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/join_.welcome.$memberId.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/_public+/vote.$eventId.tsx
var vote_eventId_exports = {};
__export(vote_eventId_exports, {
  default: () => VoteEventId,
  loader: () => loader2,
  meta: () => meta6
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/routes/resources+/vote.tsx
var vote_exports = {};
__export(vote_exports, {
  VoteForm: () => VoteForm,
  action: () => action3
});
import {
  useFieldList as useFieldList2,
  useFieldset as useFieldset2,
  useForm as useForm3
} from "@conform-to/react";
import { getFieldsetConstraint as getFieldsetConstraint3, parse as parse3 } from "@conform-to/zod";
import { json as json4 } from "@remix-run/node";
import { useFetcher as useFetcher3 } from "@remix-run/react";
import { useRef as useRef3 } from "react";
import { z as z3 } from "zod";

// app/components/ranked-choice.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function Ballot({
  children,
  className
}) {
  return /* @__PURE__ */ jsxDEV18(
    "ul",
    {
      className: cn(
        "mb-4 max-w-max rounded-t-md border border-b-0 border-blue-600",
        className
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ranked-choice.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
function BallotHeader({ numChoices }) {
  let [, ...choices] = [...Array(numChoices + 1).keys()];
  return /* @__PURE__ */ jsxDEV18("li", { className: "flex justify-between bg-blue-600 text-white", children: [
    /* @__PURE__ */ jsxDEV18("div", {}, void 0, !1, {
      fileName: "app/components/ranked-choice.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex uppercase", children: choices.map((item) => /* @__PURE__ */ jsxDEV18(
      "div",
      {
        className: "flex w-10 flex-col items-center px-1 sm:w-14 sm:px-2",
        children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "text-xl font-black leading-tight sm:text-2xl", children: [
            item,
            /* @__PURE__ */ jsxDEV18("sup", { className: "top-[-.75em] text-[50%]", children: getOrdinal(item) }, void 0, !1, {
              fileName: "app/components/ranked-choice.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ranked-choice.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-[.5rem] font-light leading-snug sm:text-xs", children: "choice" }, void 0, !1, {
            fileName: "app/components/ranked-choice.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ]
      },
      item,
      !0,
      {
        fileName: "app/components/ranked-choice.tsx",
        lineNumber: 29,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ranked-choice.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ranked-choice.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/ui/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var badgeVariants = cva3(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
      }
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDEV19("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, !1, {
    fileName: "app/components/ui/badge.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/ui/radio-group.tsx
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React5 from "react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var RadioGroup = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  RadioGroupPrimitive.Root,
  {
    className: cn("grid gap-2", className),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/radio-group.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  this
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React5.forwardRef(({ children, className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  RadioGroupPrimitive.Item,
  {
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ref,
    ...props,
    children: /* @__PURE__ */ jsxDEV20(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxDEV20(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }, void 0, !1, {
      fileName: "app/components/ui/radio-group.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/radio-group.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/radio-group.tsx",
    lineNumber: 31,
    columnNumber: 5
  },
  this
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// app/routes/resources+/vote.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var DateVoteSchema = z3.object({
  dateOptionId: z3.string(),
  rank: z3.string({ required_error: "All options must have a choice." }).pipe(z3.coerce.number())
}), LocationVoteSchema = z3.object({
  locationId: z3.string(),
  rank: z3.string({ required_error: "All options must have a choice." }).pipe(z3.coerce.number())
}), VoteFormSchema = z3.object({
  dateVotes: z3.array(DateVoteSchema).min(4).superRefine((val, ctx) => (val.forEach((element, index) => {
    val.findIndex(
      (item) => item.rank === element.rank && item.dateOptionId !== element.dateOptionId
    ) !== -1 && ctx.addIssue({
      code: z3.ZodIssueCode.custom,
      message: `Cannot have multiple ${element.rank}${getOrdinal(
        element.rank
      )} choices`,
      path: [index, "rank"]
    });
  }), z3.never)),
  eventId: z3.string(),
  locationVotes: z3.array(LocationVoteSchema).min(4).superRefine((val, ctx) => (val.forEach((element, index) => {
    val.findIndex(
      (item) => item.rank === element.rank && item.locationId !== element.locationId
    ) !== -1 && ctx.addIssue({
      code: z3.ZodIssueCode.custom,
      message: `Cannot have multiple ${element.rank}${getOrdinal(
        element.rank
      )} choices`,
      path: [index, "rank"]
    });
  }), z3.never)),
  memberId: z3.string()
});
async function action3({ request }) {
  let formData = await request.formData(), submission = parse3(formData, {
    schema: VoteFormSchema
  });
  if (!submission.value)
    return json4(
      {
        status: "error",
        submission
      },
      { status: 400 }
    );
  if (submission.intent !== "submit")
    return json4({ status: "idle", submission });
  let { dateVotes, eventId, locationVotes, memberId } = submission.value, dateUpserts = dateVotes.map(({ dateOptionId, rank }) => prisma.dateVote.upsert({
    create: { dateOptionId, eventId, memberId, rank },
    update: { rank },
    where: {
      eventId_memberId_dateOptionId: {
        dateOptionId,
        eventId,
        memberId
      }
    }
  })), locationUpserts = locationVotes.map(({ locationId, rank }) => prisma.locationVote.upsert({
    create: { eventId, locationId, memberId, rank },
    update: { rank },
    where: {
      eventId_memberId_locationId: {
        eventId,
        locationId,
        memberId
      }
    }
  }));
  return await prisma.$transaction([...dateUpserts, ...locationUpserts]), json4({ status: "success", submission });
}
function VoteForm({
  event,
  member
}) {
  let voteFetcher = useFetcher3(), defaultDates = event.dateOptions.map((option) => ({
    dateOptionId: option.id
  })), defaultLocations = event.locationOptions.map((option) => ({
    locationId: option.locationId
  })), [form, { dateVotes, eventId, locationVotes, memberId }] = useForm3({
    constraint: getFieldsetConstraint3(VoteFormSchema),
    defaultValue: { eventId: event.id, memberId: member.id },
    id: "vote-form",
    lastSubmission: voteFetcher.data?.submission,
    onValidate({ formData }) {
      return parse3(formData, { schema: VoteFormSchema });
    },
    shouldRevalidate: "onBlur"
  }), dateVotesList = useFieldList2(form.ref, {
    ...dateVotes,
    defaultValue: dateVotes.defaultValue ?? defaultDates
  }), locationVotesList = useFieldList2(form.ref, {
    ...locationVotes,
    defaultValue: locationVotes.defaultValue ?? defaultLocations
  }), dateVotesErrors = [
    ...new Set(
      dateVotesList.map(({ error }) => error)
    )
  ], locationVotesErrors = [
    ...new Set(
      locationVotesList.map(({ error }) => error)
    )
  ];
  return /* @__PURE__ */ jsxDEV21(voteFetcher.Form, { action: "/resources/vote", method: "post", ...form.props, children: [
    /* @__PURE__ */ jsxDEV21("input", { name: eventId.name, type: "hidden", value: eventId.defaultValue }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("input", { name: memberId.name, type: "hidden", value: memberId.defaultValue }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("h3", { className: "mb-2 text-xl font-semibold leading-tight text-gray-700", children: "Choose a date" }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Ballot, { className: "mx-auto sm:mx-0", children: [
      /* @__PURE__ */ jsxDEV21(BallotHeader, { numChoices: 4 }, void 0, !1, {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      dateVotesList.map((dateVote, index) => /* @__PURE__ */ jsxDEV21("li", { children: /* @__PURE__ */ jsxDEV21(
        DateVoteFieldset,
        {
          config: dateVote,
          dateOption: event.dateOptions[index]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/resources+/vote.tsx",
          lineNumber: 216,
          columnNumber: 13
        },
        this
      ) }, dateVote.key, !1, {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(ErrorList, { errors: dateVotesErrors }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("h3", { className: "my-2 text-xl font-semibold leading-tight text-gray-700", children: "Choose a location" }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Ballot, { className: "mx-auto sm:mx-0", children: [
      /* @__PURE__ */ jsxDEV21(BallotHeader, { numChoices: 4 }, void 0, !1, {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      locationVotesList.map((locationVote, index) => /* @__PURE__ */ jsxDEV21("li", { children: /* @__PURE__ */ jsxDEV21(
        LocationVoteFieldset,
        {
          config: locationVote,
          locationOption: event.locationOptions[index]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/resources+/vote.tsx",
          lineNumber: 231,
          columnNumber: 13
        },
        this
      ) }, locationVote.key, !1, {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(ErrorList, { errors: locationVotesErrors }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(ErrorList, { errors: form.errors, id: form.errorId }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    voteFetcher.data?.status === "success" ? /* @__PURE__ */ jsxDEV21("div", { className: "font-bold text-green-600", children: "Success" }, void 0, !1, {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 241,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ jsxDEV21(
      SubmitButton,
      {
        className: "mt-2 w-full sm:w-auto",
        state: voteFetcher.state,
        submittingText: "Submitting",
        children: "Submit"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 243,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 206,
    columnNumber: 5
  }, this);
}
function DateVoteFieldset({
  config,
  dateOption
}) {
  let ref = useRef3(null), { dateOptionId, rank } = useFieldset2(ref, config);
  return rank.errors && console.log("rank", {
    error: rank.error,
    errors: rank.errors,
    name: rank.name
  }), /* @__PURE__ */ jsxDEV21("fieldset", { ref, children: [
    /* @__PURE__ */ jsxDEV21(
      "input",
      {
        name: dateOptionId.name,
        type: "hidden",
        value: dateOptionId.defaultValue
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 272,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV21(
      BallotOption,
      {
        option: formatDateRange(dateOption.startDate, dateOption.endDate),
        ...rank
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 277,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 271,
    columnNumber: 5
  }, this);
}
function LocationVoteFieldset({
  config,
  locationOption
}) {
  let ref = useRef3(null), { locationId, rank } = useFieldset2(ref, config);
  return /* @__PURE__ */ jsxDEV21("fieldset", { ref, children: [
    /* @__PURE__ */ jsxDEV21(
      "input",
      {
        name: locationId.name,
        type: "hidden",
        value: locationId.defaultValue
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 305,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV21(
      BallotOption,
      {
        option: /* @__PURE__ */ jsxDEV21(LocationOption, { location: locationOption.location }, void 0, !1, {
          fileName: "app/routes/resources+/vote.tsx",
          lineNumber: 311,
          columnNumber: 17
        }, this),
        ...rank
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 310,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 304,
    columnNumber: 5
  }, this);
}
function LocationOption({
  location
}) {
  let name = location.website ? /* @__PURE__ */ jsxDEV21(
    "a",
    {
      className: "text-blue-700 hover:underline",
      href: location.website,
      rel: "noreferrer",
      target: "_blank",
      children: location.name
    },
    void 0,
    !1,
    {
      fileName: "app/routes/resources+/vote.tsx",
      lineNumber: 329,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ jsxDEV21("span", { children: location.name }, void 0, !1, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 338,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV21(Fragment2, { children: [
    name,
    /* @__PURE__ */ jsxDEV21(
      Badge,
      {
        className: cn(
          "ml-1.5 hidden sm:inline-block",
          getBoroughColor(location.zipData.borough)
        ),
        title: location.zipData.neighborhood,
        children: location.zipData.borough
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 343,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 341,
    columnNumber: 5
  }, this);
}
function BallotOption({
  numChoices = 4,
  option,
  ...config
}) {
  let [, ...choices] = [...Array(numChoices + 1).keys()];
  return /* @__PURE__ */ jsxDEV21("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxDEV21(
      "div",
      {
        className: cn(
          "grow border-b border-b-blue-600 p-1 text-sm sm:text-base",
          config.errors?.length && "underline decoration-red-600 decoration-wavy"
        ),
        children: option
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 369,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV21(
      RadioGroup,
      {
        className: "flex gap-0",
        defaultValue: config.defaultValue,
        name: config.name,
        required: config.required,
        children: choices.map((choice) => /* @__PURE__ */ jsxDEV21(
          Label,
          {
            className: "flex w-10 items-center justify-center border-b border-l border-blue-600 px-1 sm:w-14 sm:px-2",
            children: [
              /* @__PURE__ */ jsxDEV21("span", { className: "sr-only", children: `${choice}${getOrdinal(
                choice
              )} Choice` }, void 0, !1, {
                fileName: "app/routes/resources+/vote.tsx",
                lineNumber: 389,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV21(
                RadioGroupItem,
                {
                  className: config.errors ? "checked:ring checked:ring-red-600" : void 0,
                  value: choice.toString()
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/resources+/vote.tsx",
                  lineNumber: 392,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          choice,
          !0,
          {
            fileName: "app/routes/resources+/vote.tsx",
            lineNumber: 385,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources+/vote.tsx",
        lineNumber: 378,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/resources+/vote.tsx",
    lineNumber: 368,
    columnNumber: 5
  }, this);
}
var getBoroughColor = (borough) => {
  let color = "bg-black";
  switch (borough) {
    case "Bronx":
      color = "bg-[#00933c]";
      break;
    case "Brooklyn":
      color = "bg-[#ff6319]";
      break;
    case "Manhattan":
      color = "bg-[#0039a6]";
      break;
    case "Queens":
      color = "bg-[#fccc0a] text-black";
      break;
    case "Staten Island":
      color = "bg-[#ee352e]";
      break;
  }
  return color;
};

// app/routes/_public+/vote.$eventId.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  let { eventId } = params, event = await prisma.event.findUnique({
    select: {
      dateOptions: {
        orderBy: { startDate: "asc" },
        select: { endDate: !0, id: !0, startDate: !0 }
      },
      id: !0,
      locationOptions: {
        select: {
          location: {
            select: {
              name: !0,
              website: !0,
              zipCode: !0,
              zipData: { select: { borough: !0, neighborhood: !0 } }
            }
          },
          locationId: !0
        }
      },
      name: !0
    },
    where: { id: eventId }
  });
  return event ? json5({ event, member: { id: "3023392b-01b0-47d9-9c31-54d0ec4ac331" } }) : new Response("Not Found", { status: 404 });
}, meta6 = ({ data }) => [
  {
    title: `Corgis of NYC: Cast your votes for ${data.event.name}`
  }
];
function VoteEventId() {
  let { event, member } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV22("div", { className: "flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md", children: [
    /* @__PURE__ */ jsxDEV22("h2", { className: "mb-2 flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700", children: [
      "Cast your votes for ",
      event.name
    ] }, void 0, !0, {
      fileName: "app/routes/_public+/vote.$eventId.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV22(VoteForm, { event, member }, void 0, !1, {
      fileName: "app/routes/_public+/vote.$eventId.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public+/vote.$eventId.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/console+/_layout.tsx
var layout_exports2 = {};
__export(layout_exports2, {
  default: () => ConsoleLayout
});
import { Outlet as Outlet3 } from "@remix-run/react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function ConsoleLayout() {
  return /* @__PURE__ */ jsxDEV23(Outlet3, {}, void 0, !1, {
    fileName: "app/routes/console+/_layout.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/console+/_auth+/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader3
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/ui/card.tsx
import * as React6 from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var Card = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  "div",
  {
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  "h3",
  {
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  "p",
  {
    className: cn("text-sm text-muted-foreground", className),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24("div", { className: cn("p-6 pt-0", className), ref, ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  "div",
  {
    className: cn(" flex items-center p-6 pt-0", className),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/routes/console+/_auth+/login.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var loader3 = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
  let url = new URL(request.url), redirectTo = url.searchParams.get("redirectTo"), loginMessage = url.searchParams.get("loginMessage"), headers = new Headers();
  redirectTo && headers.append("Set-Cookie", await redirectToCookie.serialize(redirectTo));
  let session = await getSession(request.headers.get("cookie")), error = session.get(authenticator.sessionErrorKey), errorMessage = null;
  return typeof error?.message == "string" && (errorMessage = error.message), headers.append("Set-Cookie", await commitSession(session)), json6({ formError: errorMessage, loginMessage }, { headers });
};
function Login() {
  let data = useLoaderData3();
  return /* @__PURE__ */ jsxDEV25(Fragment3, { children: /* @__PURE__ */ jsxDEV25("main", { children: /* @__PURE__ */ jsxDEV25(Card, { className: "w-3/4", children: [
    /* @__PURE__ */ jsxDEV25(CardHeader, { children: /* @__PURE__ */ jsxDEV25(CardTitle, { className: "text-crl-deep-purple", children: "Login" }, void 0, !1, {
      fileName: "app/routes/console+/_auth+/login.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/console+/_auth+/login.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV25(CardContent, { children: [
      data.loginMessage ? /* @__PURE__ */ jsxDEV25("div", { className: "text-sm text-red-500", children: data.loginMessage }, void 0, !1, {
        fileName: "app/routes/console+/_auth+/login.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this) : null,
      /* @__PURE__ */ jsxDEV25(FormLoginForm, { formError: data.formError }, void 0, !1, {
        fileName: "app/routes/console+/_auth+/login.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/console+/_auth+/login.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/console+/_auth+/login.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/console+/_auth+/login.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/console+/_auth+/login.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/console+/_auth+/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/console" });
};

// app/routes/console+/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => Index2,
  loader: () => loader5
});
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
async function loader5({ request }) {
  return await requireUserId(request);
}
function Index2() {
  return /* @__PURE__ */ jsxDEV26("div", { children: /* @__PURE__ */ jsxDEV26("h1", { children: "Welcome to the Corgi Console" }, void 0, !1, {
    fileName: "app/routes/console+/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/console+/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RAM2FMQQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BFPUSGFU.js", "/build/_shared/chunk-UUWW32VG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XURPA53Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6IFVHWRL.js", imports: ["/build/_shared/chunk-TK3XY6Y4.js", "/build/_shared/chunk-46X525EH.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public+/_layout": { id: "routes/_public+/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/_layout-BB55TI4Z.js", imports: ["/build/_shared/chunk-TK3XY6Y4.js", "/build/_shared/chunk-46X525EH.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public+/about": { id: "routes/_public+/about", parentId: "routes/_public+/_layout", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/about-L22KO6TM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public+/coc": { id: "routes/_public+/coc", parentId: "routes/_public+/_layout", path: "coc", index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/coc-S4OYFJMQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public+/join": { id: "routes/_public+/join", parentId: "routes/_public+/_layout", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/join-DE6CQJKQ.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-RM6PWNL7.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public+/join_.welcome.$memberId": { id: "routes/_public+/join_.welcome.$memberId", parentId: "routes/_public+/_layout", path: "join/welcome/:memberId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/join_.welcome.$memberId-RUXPDG3N.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_public+/vote.$eventId": { id: "routes/_public+/vote.$eventId", parentId: "routes/_public+/_layout", path: "vote/:eventId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public+/vote.$eventId-4UTGPWAA.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-RM6PWNL7.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.form": { id: "routes/auth.form", parentId: "root", path: "auth/form", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.form-T2MPMEEI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/console+/_auth+/login": { id: "routes/console+/_auth+/login", parentId: "routes/console+/_layout", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/console+/_auth+/login-R3VW6FZR.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-RM6PWNL7.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-46X525EH.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/console+/_auth+/logout": { id: "routes/console+/_auth+/logout", parentId: "routes/console+/_layout", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/console+/_auth+/logout-PTNPHAQY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/console+/_index": { id: "routes/console+/_index", parentId: "routes/console+/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/console+/_index-IHJNAPSG.js", imports: ["/build/_shared/chunk-JSCKBFOW.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/console+/_layout": { id: "routes/console+/_layout", parentId: "root", path: "console", index: void 0, caseSensitive: void 0, module: "/build/routes/console+/_layout-VXK5MAYO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/resources+/join": { id: "routes/resources+/join", parentId: "root", path: "resources/join", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/join-VB35ZIV6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/resources+/vote": { id: "routes/resources+/vote", parentId: "root", path: "resources/vote", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/vote-S5ZRML7D.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "7c3c006d", hmr: { runtime: "/build/_shared/chunk-UUWW32VG.js", timestamp: 1696781383425 }, url: "/build/manifest-7C3C006D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth.form": {
    id: "routes/auth.form",
    parentId: "root",
    path: "auth/form",
    index: void 0,
    caseSensitive: void 0,
    module: auth_form_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_public+/_layout": {
    id: "routes/_public+/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_public+/about": {
    id: "routes/_public+/about",
    parentId: "routes/_public+/_layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/_public+/coc": {
    id: "routes/_public+/coc",
    parentId: "routes/_public+/_layout",
    path: "coc",
    index: void 0,
    caseSensitive: void 0,
    module: coc_exports
  },
  "routes/_public+/join": {
    id: "routes/_public+/join",
    parentId: "routes/_public+/_layout",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports2
  },
  "routes/_public+/join_.welcome.$memberId": {
    id: "routes/_public+/join_.welcome.$memberId",
    parentId: "routes/_public+/_layout",
    path: "join/welcome/:memberId",
    index: void 0,
    caseSensitive: void 0,
    module: join_welcome_memberId_exports
  },
  "routes/_public+/vote.$eventId": {
    id: "routes/_public+/vote.$eventId",
    parentId: "routes/_public+/_layout",
    path: "vote/:eventId",
    index: void 0,
    caseSensitive: void 0,
    module: vote_eventId_exports
  },
  "routes/console+/_layout": {
    id: "routes/console+/_layout",
    parentId: "root",
    path: "console",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports2
  },
  "routes/console+/_auth+/login": {
    id: "routes/console+/_auth+/login",
    parentId: "routes/console+/_layout",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/console+/_auth+/logout": {
    id: "routes/console+/_auth+/logout",
    parentId: "routes/console+/_layout",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/console+/_index": {
    id: "routes/console+/_index",
    parentId: "routes/console+/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/resources+/join": {
    id: "routes/resources+/join",
    parentId: "root",
    path: "resources/join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/resources+/vote": {
    id: "routes/resources+/vote",
    parentId: "root",
    path: "resources/vote",
    index: void 0,
    caseSensitive: void 0,
    module: vote_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
