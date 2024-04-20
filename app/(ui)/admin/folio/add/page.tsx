"use client";

import actionPath from "@/actions/revalidator.action";
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
import { useFormState } from "react-dom";

const AddFolio = () => {
  // const [state, formAction] = useFormState(submitProfile, null);
  // const [state, formAction] = useFormState(submitAction, null);

  async function submitAction(formData: FormData): Promise<any> {
    await submitFolio(formData);
    await actionPath("/showcase");
    // revalidatePath(`/showcase/folioUsers/`);
    await actionPath("/admin/folio");
    redirect("/admin/folio");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Add a New Folio
        </h2>
        <form className="space-y-6" action={submitAction}>
          <div className="grid grid-cols-1 gap-6 text-white">
            <Input
              type="text"
              name="title"
              required
              placeholder="Title"
              className="form-input rounded-lg bg-gray-100 border-none text-red focus:ring-2 focus:ring-blue-300"
            />
            <Textarea
              name="description"
              rows={4}
              required
              placeholder="Description"
              className="form-textarea rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="grid grid-cols-1 gap-4">
              <Label htmlFor="picture" className="text-gray-700">
                Upload Picture(s)
              </Label>
              <Input
                required
                name="images"
                id="picture"
                type="file"
                multiple
                className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white">
            <Input
              type="text"
              name="address.street"
              required
              placeholder="Street"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="address.city"
              required
              placeholder="City"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="address.state"
              required
              placeholder="State"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="address.zipCode"
              required
              placeholder="Zip Code"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="address.country"
              required
              placeholder="Country"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 text-white">
            <Select
              name="status"
              // className="w-full rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            >
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white">
            <Input
              type="text"
              name="tags"
              placeholder="Tags (comma-separated)"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="category"
              placeholder="Category"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="date"
              name="completionDate"
              required
              placeholder="Completion Date"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="budget"
              placeholder="Budget (optional)"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="client-name"
              placeholder="Client Name (optional)"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <Input
              type="text"
              name="client-phone"
              placeholder="Client Phone (optional)"
              className="form-input rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <Button
            text="Submit"
            // className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default AddFolio;
