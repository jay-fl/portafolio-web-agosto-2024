"use client";

import Footer from "@/components/shared/footer";
import Sidebar from "@/components/shared/sidebar";
import ButtonIcon from "@/components/ui/button-icon";
import { ReactNode } from "react";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-5 bottom-5 z-30 bg-primary p-4 rounded-full"
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
