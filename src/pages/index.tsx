import styles from "@/styles/Index.module.css";
import HomeFirst from "@/components/homFirst";
import HomeSecond from "@/components/homeSecond";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeFirst/>
        <HomeSecond/>
      </main>
    </>
  );
}
