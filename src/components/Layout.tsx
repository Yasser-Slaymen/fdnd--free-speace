import Navbar from "./navbar";
import { ReactNode } from "react";
interface LayoutProps {
    children: ReactNode;
}
export default function Layout ({ children }:LayoutProps){
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

