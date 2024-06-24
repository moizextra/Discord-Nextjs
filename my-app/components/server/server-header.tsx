
"use client"

import { ServerWithMembersWithProfiles } from "@/types"
import { Roles } from "@prisma/client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDownIcon, LogOut, Plus, Settings, Trash, User,MessageCirclePlus } from "lucide-react"

interface ServerHeaderProps {
     server:ServerWithMembersWithProfiles,
     role?:Roles
}
const ServerHeader = ({
    server,
    role
}:ServerHeaderProps) => {
    const isAdmin = role == Roles.Admin
    const isModerator = isAdmin || role == Roles.Moderator
    console.log(role)
  return (
   <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none" asChild>
    <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 ">{server.name}
    <ChevronDownIcon className="h-5 w-5 ml-auto"/>
    </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
    { isModerator && (
        <DropdownMenuItem>
            Invite People 
            <MessageCirclePlus className="w-4 h-4 ml-auto" />
        </DropdownMenuItem>

    )}
    { isAdmin && (
        <DropdownMenuItem>
           Server Settings
           <Settings className="w-4 h-4 ml-auto"/>
        </DropdownMenuItem>

    )}
    { isModerator && (
        <DropdownMenuItem>
           Manage Members
           <User className="w-4 h-4 ml-auto"/>
        </DropdownMenuItem>

    )}
    { isModerator && (
        <DropdownMenuItem>
           Create Channels
           <Plus className="w-4 h-4 ml-auto"/>
        </DropdownMenuItem>

    )}

    {
        isModerator &&
        <DropdownMenuSeparator/>
    }

    {
        isAdmin && (
            <DropdownMenuItem className="text-rose-500">
                Delete Server
           <Trash className="w-4 h-4 ml-auto"/>

            </DropdownMenuItem>
        )
    }
    {
        !isAdmin && (
            <DropdownMenuItem className="text-rose-500">
                Leave Server
           <LogOut className="w-4 h-4 ml-auto"/>

            </DropdownMenuItem>
        )
    }
    </DropdownMenuContent>

   </DropdownMenu>
  )
}

export default ServerHeader