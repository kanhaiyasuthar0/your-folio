"use client";
import React from "react";
import Button from "@/components/generics/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { addImagesToShowcase } from "@/actions/updatingShowcase.action";

const AddImagesToShowcaseForm = ({ showcaseId }: { showcaseId: string }) => {
  // This function will handle the form submission
  async function submitImagesToShowcase(event: any) {
    console.log("🚀 ~ submitImagesToShowcase ~ event:", event);
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(event.target);
    try {
      await addImagesToShowcase(showcaseId, formData);
      alert("Images successfully added!");
    } catch (error) {
      console.error("Failed to add images:", error);
      alert("Failed to add images");
    }
  }

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <Card className="w-full max-w-sm bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>Add Images to Showcase</CardTitle>
        <CardDescription>
          Upload new images to the specified showcase.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitImagesToShowcase} className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="showcaseId">Showcase ID</Label>
            <Input
              type="text"
              name="showcaseId"
              required
              defaultValue={showcaseId}
              disabled
              className="form-input"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="images">Select Images</Label>
            <Input
              type="file"
              name="images"
              id="images"
              multiple
              required
              className="form-input"
            />
          </div>
          <Button text="Submit" />
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-end space-x-2"></CardFooter> */}
    </Card>
    // </div>
  );
};

export default AddImagesToShowcaseForm;
