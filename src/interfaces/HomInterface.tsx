import { ReactNode } from "react";
interface HomeProps {
  children: ReactNode;
}
export default function HomeInterfaces({ children }: HomeProps) {
  return <>{children}</>;
}
