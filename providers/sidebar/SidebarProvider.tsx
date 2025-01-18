"use client";

import React, { useState } from "react";

import { SidebarContext } from "./sidebar.context";

interface Props {
  children: React.ReactNode;
}
export default function SidebarProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarToggle = () => setIsOpen(!isOpen);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen: handleSidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}
