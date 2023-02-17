import styles from "@/styles/Navbar.module.css";
import HamburgerMenu from "./hmburgermenu";
import Linknav from "@/interfaces/Link";
import Image from "next/image";

export default function Navbar() {
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
          <Linknav link="/frontender" content="Inhoud van de opleiding" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav link="/frontender" content="Mogelijke beroepen" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
        <li>
          <Linknav link="/frontender" content="Toelatingseisen" />
          <Image src="/images/nav1.png" width={20} height={15} alt="img" />
        </li>
      </ul>
    </nav>
  );
}
