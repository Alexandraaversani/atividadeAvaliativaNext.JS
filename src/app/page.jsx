import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
