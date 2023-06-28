import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // Create a user
  const hash = await bcrypt.hash("password1234", 10);
  const user = await prisma.user.create({
    data: {
      email: "aydrian@gmail.com",
      firstName: "Aydrian",
      lastName: "Howard",
      password: {
        create: {
          hash
        }
      }
    },
    select: { id: true }
  });

  // Create locations
  await prisma.location.createMany({
    data: [
      {
        createdBy: user.id,
        name: "Bull Moose Dog Run",
        website:
          "https://www.nycgovparks.org/parks/theodore-roosevelt-park/facilities/dogareas",
        zipCode: "10024"
      },
      {
        createdBy: user.id,
        name: "Riverside Dog Run 72",
        website: "https://riversideparknyc.org/dog-run-72/",
        zipCode: "10023"
      },
      {
        createdBy: user.id,
        name: "Washington Square Park Dog Run",
        website: "http://wspdogrun.org/",
        zipCode: "10012"
      },
      {
        createdBy: user.id,
        name: "Tompkin's Square Dog Run",
        website: "https://www.tompkinssquaredogrun.com/",
        zipCode: "10009"
      },
      {
        createdBy: user.id,
        name: "Hillside Dog Park",
        website: "https://www.nycgovparks.org/parks/hillside-park",
        zipCode: "11201"
      },
      {
        createdBy: user.id,
        name: "McCarren Park Dog Run",
        website:
          "https://www.nycgovparks.org/parks/mccarren-park/facilities/dogareas",
        zipCode: "11211"
      },
      {
        createdBy: user.id,
        name: "Triborough Bridge Dog Run",
        website:
          "https://www.nycgovparks.org/parks/triborough-bridge-playground-c/facilities/dogareas",
        zipCode: "11102"
      },
      {
        createdBy: user.id,
        name: "Hunter's Point Dog Run",
        website:
          "https://www.nycgovparks.org/parks/hunters-point-south-park/facilities/dogareas",
        zipCode: "11101"
      },
      {
        createdBy: user.id,
        name: "Sir Williams Dog Run",
        website: "https://www.forttryonparktrust.org/sir-williams-dog-run/",
        zipCode: "10040"
      }
    ]
  });

  const event = await prisma.event.create({
    data: {
      createdBy: user.id,
      name: "Test Meetup"
    },
    select: { id: true }
  });

  await prisma.eventDateOption.createMany({
    data: [
      {
        endDate: new Date("2023-07-08"),
        eventId: event.id,
        startDate: new Date("2023-07-08")
      },
      {
        endDate: new Date("2023-07-09"),
        eventId: event.id,
        startDate: new Date("2023-07-09")
      },
      {
        endDate: new Date("2023-07-15"),
        eventId: event.id,
        startDate: new Date("2023-07-15")
      },
      {
        endDate: new Date("2023-07-16"),
        eventId: event.id,
        startDate: new Date("2023-07-16")
      }
    ]
  });

  const locations = await prisma.location.findMany({
    select: { id: true },
    take: 4
  });

  const data = locations.map((location) => ({
    eventId: event.id,
    locationId: location.id
  }));

  await prisma.eventLocationOption.createMany({
    data
  });
}

seed();
