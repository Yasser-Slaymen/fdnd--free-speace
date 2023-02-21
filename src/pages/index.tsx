import styles from "@/styles/Index.module.css";
import HomeFirst from "@/components/homFirst";
import HomeSecond from "@/components/homeSecond";
import HomeThird from "@/components/HomeThird";
import HomeHeader from "@/components/homeHeader";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeHeader/>
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
      </main>
    </>
  );
}
