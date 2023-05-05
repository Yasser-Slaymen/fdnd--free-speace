import styles from "@/styles/Navbar.module.css";
import HamburgerMenu from "./hmburgermenu";
import Linknav from "@/interfaces/Link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.nav_pc}>
      <section className="log_hmburg">
        <section className={styles.logo}>fdnd</section>
        <HamburgerMenu />
      </section>

      <ul className="list-itemsPc">
        <li>
          <Linknav
            link="/"
            content="Home"
            className={router.pathname === "/" ? "active-link" : "nav-link"}
          />
        </li>
        <li>
          <Linknav
            link="/frontender"
            content="Frontender worden"
            className={
              router.pathname === "/frontender" ? "active-link" : "nav-link"
            }
          />
        </li>
        <li>
          <Linknav
            link="/inhoudVanOpleiding"
            content="Inhoud van de opleiding"
            className={
              router.pathname === "/inhoudVanOpleiding"
                ? "active-link"
                : "nav-link"
            }
          />
        </li>
        <li>
          <Linknav
            link="/bouwtNetwerkOp"
            content="Je bouwt netwerk op"
            className={
              router.pathname === "/bouwtNetwerkOp" ? "active-link" : "nav-link"
            }
          />
        </li>
        <li>
          <Linknav
            link="/inhoudVanOpleiding"
            content="Toelatingseisen"
            className={
              router.pathname === "/inhoudVanOpleiding"
                ? "active-link"
                : "nav-link"
            }
          />
        </li>
      </ul>
    </nav>
  );
}
