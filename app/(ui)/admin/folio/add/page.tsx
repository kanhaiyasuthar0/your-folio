"use client";
import { submitFolio } from "@/actions/submitFolio.action";
import Button from "@/components/generics/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { Input, Textarea } from "@chakra-ui/react";
// import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import React, { FormEvent } from "react";
// import { useFormState } from "react-dom";

const AddFolio = () => {
  // const [state, formAction] = useFormState(submitProfile, null);

  async function submitAction(formData: FormData) {
    await submitFolio(formData);
    // revalidatePath("/showcase");
    // revalidatePath(`/showcase/folioUsers/`);
    revalidatePath("/admin/folio");
    redirect("/admin/folio");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Add a New Folio
        </h2>
        <form className="space-y-6 text-white" action={submitAction}>
          <div className="grid grid-cols-1 gap-4">
            <Input
              type="text"
              name="title"
              required
              placeholder="Title"
              className="form-input"
            />
            <Textarea
              name="description"
              rows={4}
              required
              placeholder="Description"
              className="form-textarea"
            ></Textarea>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input required name="images" id="picture" type="file" />
            </div>
            {/* <input
              type="file"
              name="images"
              multiple
              required
              className="form-input"
            /> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="address.street"
              required
              placeholder="Street"
              className="form-input"
            />
            <Input
              type="text"
              name="address.city"
              required
              placeholder="City"
              className="form-input"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input
              type="text"
              name="address.state"
              required
              placeholder="State"
              className="form-input"
            />
            <Input
              type="text"
              name="address.zipCode"
              required
              placeholder="Zip Code"
              className="form-input"
            />
            <Input
              type="text"
              name="address.country"
              required
              placeholder="Country"
              className="form-input"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="tags"
              placeholder="Tags (comma-separated)"
              className="form-input"
            />
            <Input
              type="text"
              name="category"
              placeholder="Category"
              className="form-input"
            />
            <Input
              type="date"
              name="completionDate"
              required
              placeholder="Completion Date"
              className="form-input"
            />
            <Select name="status">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            {/* <select name="status" required className="form-select">
              <option value=""></option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <select name="visibility" required className="form-select">
              <option value="">Visibility</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select> */}
            <Input
              type="text"
              name="budget"
              placeholder="Budget"
              className="form-input"
            />
            <Input
              type="text"
              name="client-name"
              placeholder="Client name"
              className="form-input"
            />
            <Input
              type="text"
              name="client-phone"
              placeholder="Client Phone"
              className="form-input"
            />
          </div>
          <Button text="Submit"></Button>
        </form>
      </div>
    </div>
  );
};

export default AddFolio;
