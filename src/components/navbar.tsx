import styles from "@/styles/Navbar.module.css";
import HamburgerMenu from "./hmburgermenu";
import Linknav from "@/interfaces/Link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav_pc}>
      <section className="log_hmburg">
        <section className={styles.logo}>FDND</section>
        <HamburgerMenu />
      </section>

      <ul className="list-itemsPc">
        <li>
          <Linknav link="/" content="Home" />
          <Image
            className="nav-img"
            src="/images/naf.png"
            width={25}
            height={20}
            alt="img"
          />
        </li>
        <li>
          <Image src="/images/icons.png" width={20} height={15} alt="img" />
          <Linknav link="/frontender" content="Frontend worden" />
        </li>
        <li>
          <Linknav link="/frontender" content="Inhoud van de opleiding" />
        </li>
        <li>
          <Linknav link="/frontender" content="Mogelijke beroepen" />
        </li>
        <li>
          <Linknav link="/frontender" content="Toelatingseisen" />
        </li>
      </ul>
    </nav>
  );
}
