"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();
export async function create(formData: FormData) {
  "use server";
  try {
    const input = formData.get("input") as string;

    await prisma.todo.create({
      data: {
        title: input,
      },
    });
  } catch (error) {
    return "Failed to Create";
  }
  revalidatePath("/");
}

export async function edit(formData: FormData) {
  "use server";
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}
