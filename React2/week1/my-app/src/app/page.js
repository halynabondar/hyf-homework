import Image from "next/image";
import styles from "./page.module.css";
import AstronomyPicture from "../../pages/nasa/[picture]/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AstronomyPicture />
      </main>
    </div>
  );
}
