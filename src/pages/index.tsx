import styles from "@/styles/Index.module.css";
import HomeFirst from "@/components/homFirst";
import HomeSecond from "@/components/homeSecond";
import HomeThird from "@/components/HomeThird";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
      </main>
    </>
  );
}
