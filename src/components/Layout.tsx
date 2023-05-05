import Navbar from "./navbar";
import HavFrontend from "./hav";
import Quote from "./quote";
import Microsites from "./microsites";
import { ReactNode } from "react";
import Router from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/HomeHeader.module.css";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [loading]);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  });
  return (
    <div className="content">
      <HavFrontend />
      <Navbar />
      {loading ? (
        <div className={styles.Loading}>
          <section>
            <p>Loading...</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-rotate-clockwise-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
              <line x1="5.63" y1="7.16" x2="5.63" y2="7.17" />
              <line x1="4.06" y1="11" x2="4.06" y2="11.01" />
              <line x1="4.63" y1="15.1" x2="4.63" y2="15.11" />
              <line x1="7.16" y1="18.37" x2="7.16" y2="18.38" />
              <line x1="11" y1="19.94" x2="11" y2="19.95" />
            </svg>
          </section>
        </div>
      ) : (
        children
      )}
      <Microsites />
      <Quote />
    </div>
  );
}
