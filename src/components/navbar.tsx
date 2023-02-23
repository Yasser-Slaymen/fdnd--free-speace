import styles from "@/styles/Navbar.module.css";
import HamburgerMenu from "./hmburgermenu";
import Linknav from "@/interfaces/Link";
import Image from "next/image";
// import { useState } from "react";

export default function Navbar() {
  // set the initial text color to black
  // const [textColor, setTextColor] = useState("yellow");

  // click function to change the text color to red
  // const handleClick = () => {
  //   setTextColor("red");
  //   console.log("clicked");
  // };
  //  onClick={handleClick}
  //  style={{ color: textColor }}
  // click

  return (
    <nav className={styles.nav_pc}>
      <section className="log_hmburg">
        <section className={styles.logo}>fdnd</section>
        <HamburgerMenu />
      </section>

      <ul className="list-itemsPc">
        <li>
          <Linknav link="/" content="Home" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav link="/frontender" content="Frontend worden" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav
            link="/inhoudVanOpleiding"
            content="Inhoud van de opleiding"
          />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav link="/frontender" content="Je bouwt netwerk op" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav link="/inhoudVanOpleiding" content="Toelatingseisen" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
      </ul>
    </nav>
  );
}
