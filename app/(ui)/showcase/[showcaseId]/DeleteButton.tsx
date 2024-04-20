"use client";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { removeImages } from "@/actions/updatingShowcase.action";

const DeleteButton = ({
  image,
  showCaseId,
}: {
  image: string;
  showCaseId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await removeImages(showCaseId, image);
    alert("Image deleted successfully."); // Consider using a more integrated notification system
    setIsOpen(false); // Close the dialog after action
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this image? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDelete}>Delete</Button>
          <Button
            className="text-white"
            onClick={() => setIsOpen(false)}
            variant="outline"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
