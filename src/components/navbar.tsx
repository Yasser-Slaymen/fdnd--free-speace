import styles from "@/styles/Navbar.module.css";
import HamburgerMenu from "./hmburgermenu";
import Linknav from "@/interfaces/Link";
import Image from "next/image";
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
          <Image
            className={styles.list_img}
            src="/images/Vector.png"
            width={8}
            height={7}
            alt="img"
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
          <Image
            className={styles.list_img}
            src="/images/Vector.png"
            width={7}
            height={7}
            alt="img"
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
          <Image
            className={styles.list_img}
            src="/images/Vector.png"
            width={7}
            height={7}
            alt="img"
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
          <Image
            className={styles.list_img}
            src="/images/Vector.png"
            width={7}
            height={7}
            alt="img"
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
          <Image
            className={styles.list_img}
            src="/images/Vector.png"
            width={7}
            height={7}
            alt="img"
          />
        </li>
      </ul>
    </nav>
  );
}
