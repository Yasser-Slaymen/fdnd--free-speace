import styles from "@/styles/Hva.module.css";
import Image from "next/image";
import Havtamplet from "@/interfaces/Havtamplet";

export default function HavFrontend() {
  return (
    <>
      <Havtamplet>
        <div className={styles.havFrontend}>
          <Image className={styles.havlogo} src="/images/hvalogo.png"width={150} height={40} alt="img" />
          <p className={styles.fdnd}>
            Frontend
            <br />
            Design & Development
          </p>
        </div>
      </Havtamplet>
    </>
  );
}
