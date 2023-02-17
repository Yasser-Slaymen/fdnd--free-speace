import styles from "@/styles/Index.module.css";
import HomeFirst from "@/components/homFirst";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeFirst/>
      </main>
    </>
  );
}
