import styles from "@/styles/Home.module.css";
import HomeFirst from "@/components/homFirst";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Hallo</h1>
        <HomeFirst/>
      </main>
    </>
  );
}
