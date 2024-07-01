"use client";
import { useState, useEffect } from "react";
import { useModal } from "../../hooks/use-model-store";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ServerWithMembersWithProfiles } from "@/types";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../user-avatar";
import {
  Check,
  MoreVertical,
  Shield,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";

const roleIconMap = {
  Guest: null,
  Moderator: <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  Admin: <ShieldCheck className="h-4 w-4 ml-2 text-red-500" />,
};

const ManageMembers = () => {
  const { isOpen, onClose, onOpen, type, data } = useModal();
  const isModalOpen = isOpen && type === "members";
  const { server } = data as { server: ServerWithMembersWithProfiles };

  const { loadingId, setLoadingId } = useState("");
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col items-center gap-4 justify-center">
            <DialogTitle>Manage Members</DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
              {server?.members?.length} Members
            </DialogDescription>
          </div>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6 ">
          {server?.members?.map((member) => {
            return (
              <div key={member.id} className="flex items-center  gap-x-2 mb-6">
                <UserAvatar src={member.profile.imageUrl} />
                <div className="flex flex-col gap-y-1  ">
                  <div className="text-sm font-semibold  flex items-center gap-x-1">
                    {member.profile.name}
                    {roleIconMap[member.role]}
                  </div>
                  <p className="text-xs text-zinc-500 ">
                    {member.profile.email}
                  </p>
                </div>
                {server.profileId !== member.profileId &&
                  loadingId !== member.id && (
                 <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical className="h-6 w-6 text-zinc-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="left">
                        <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="flex items-center">
                        <ShieldQuestion className="w-4 h-4 mr-2"/>
                        <span>Role</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Shield className="w-4 h-4 mr-2" /> 
                                    Guest
                                    {member.role === "Guest" && <Check className="w-4 h-4 ml-2 text-green-500" />}
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                 </DropdownMenu>
                  )}
              </div>
            );
          })}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ManageMembers;
