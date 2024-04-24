"use server";

import { db } from "@/db/drizzle";
import { waitlistModel } from "@/model/waitlist.model";
import { nanoid } from "nanoid";

export const addUserToWaitlist = async (email: string) => {
  try {
    const addUser = await db
      .insert(waitlistModel)
      .values({
        id: nanoid(10),
        email: email,
      })
      .returning();

    return {
      status: 200,
      response: addUser,
    };
  } catch (error) {
    console.log("Error occured while adding user to waitlist:\n", error);
    return {
      status: 500,
      response: (error as { message: string }).message,
    };
  }
};
