"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function actionPath(key: string) {
  revalidatePath(key);
}
