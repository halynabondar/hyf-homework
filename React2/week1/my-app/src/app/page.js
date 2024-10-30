import styles from "./page.module.css";
import Navbar from "@/app/pages/components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
        <Navbar/>
      <main className={styles.main}>
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
