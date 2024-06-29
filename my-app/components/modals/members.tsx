"use client";
import { useState, useEffect } from "react";
import { useModal } from "../../hooks/use-model-store";
import axios from "axios";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ServerWithMembersWithProfiles } from "@/types";

const ManageMembers = () => {
    const { isOpen, onClose, onOpen, type, data } = useModal();
    const isModalOpen = isOpen && type === "members";
    const {server} =  data as { server: ServerWithMembersWithProfiles };
    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <div className="flex flex-col items-center gap-4 justify-center">
                        <DialogTitle>Manage Members</DialogTitle>
                    </div>
                </DialogHeader>
                <DialogDescription className="text-center text-zinc-500">
                    {server?.members?.length} Members
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default ManageMembers;