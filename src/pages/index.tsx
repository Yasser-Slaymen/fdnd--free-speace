import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Hallo</h1>
        <Image src="/images/icons.png" width={20} height={20} alt="img" />
      </main>
    </>
  );
}
