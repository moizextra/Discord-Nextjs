"use client"
import CreateServerModal from "../modals/create-server";
import { useState,useEffect } from "react";
import InviteServerModal from "../modals/invite-modal";

export const ModalProvider=()=>{
    const [isMounted,setIsMounted]=useState(false);
    useEffect(() => {
   setIsMounted(true);
    }, [])
    if(!isMounted){
        return null;
    }
    
    return (
        <>
        <CreateServerModal/>
        <InviteServerModal/>
        </>
    )
}