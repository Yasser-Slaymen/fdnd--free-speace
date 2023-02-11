import { useState } from "react";
import Link from "next/link";
const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "close" : "Open"}
        <img src="../images/Frame.png" alt="" />
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li>
            <Link href="/">H</Link>
            </li>
            <li>
            <Link href="/frontender">Fr</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default HamburgerMenu;
