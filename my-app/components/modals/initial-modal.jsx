import { useForm } from "react-hook-form";
import *  as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  

  const formSchema = z.object({
name:z.string().min(3,{
    message: "Name must be at least 3 characters long"
}),
},
  
  const InitialModal = () => {
    const form = useForm({
      defaultValues: {
        name: "",
        imageUrl: ""
      }

    });
  
    return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default InitialModal;
  