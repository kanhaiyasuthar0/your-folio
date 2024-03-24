// import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Button from "../generics/Button";
import Link from "next/link";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function CustomModal({ quotation }: { quotation: string }) {
  return (
    <Dialog open>
      {/* <DialogTrigger asChild>
        <button>Open</button>
      </DialogTrigger> */}
      <DialogContent className="w-screen">
        <DialogHeader>
          <DialogTitle className="text-white bg-indigo-600 p-3 rounded">
            Viewing Mode
          </DialogTitle>
          <DialogDescription>Viewing quotation</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <iframe
            src={
              "https://drive.google.com/file/d/16ddrpF9itQQDz_RoiFoAr8_oxBehcQKN/view?usp=sharing"
            }
            height={400}
            width={400}
          ></iframe>
        </div>
        <DialogFooter>
          <DialogClose>
            <Link href={"/admin/dashboard"}>
              <Button text="Close"></Button>
            </Link>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
