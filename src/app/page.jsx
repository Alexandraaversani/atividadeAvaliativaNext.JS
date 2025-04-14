import Header from "./components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Header />
    </div>
  );
}
