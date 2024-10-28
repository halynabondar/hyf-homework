import styles from "./page.module.css";
import AstronomyPicture from "@/app/pages/nasa/[picture]/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
