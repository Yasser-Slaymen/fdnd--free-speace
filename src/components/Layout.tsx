import Navbar from "./navbar";
import HavFrontend from "./hav";
import Quote from "./quote"
import Microsites from "./microsites";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="content">
      <HavFrontend />
      <Navbar />
      {children}
      <Microsites />
      <Quote/>
    </div>
  );
}
