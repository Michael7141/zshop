/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

interface SidebarContextStore {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const SidebarContext = createContext<SidebarContextStore>({
  isOpen: false,
  setIsOpen: () => {},
});
