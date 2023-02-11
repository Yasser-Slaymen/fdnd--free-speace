import { useState } from "react";
import Link from "next/link";
const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-square-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-align-center"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="6" y1="18" x2="18" y2="18" />
            </svg>
          </span>
        )}
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
