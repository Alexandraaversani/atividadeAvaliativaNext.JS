import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
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
          <CategoriesSection />
          <section className={styles.feedSection}>
            <div className={styles.feedHeader}>
                <h2 className={styles.sectionTitle}>Memes Populares</h2>
                <div className={styles.feedFilters}>
                    <button className={`${styles.filterButton} ${styles.active}`}>
                        Recentes
                    </button>
                    <button className={styles.filterButton}>Mais curtidos</button>
                    <button className={styles.filterButton}>Mais comentados</button>
                </div>
            </div>
          <div className={styles.feedGrid}>
            <Feed
              title={"Programador às 3 da manhã"}
              description={"Quando o código finalmente funciona depois de 5 horas debugando"}
              image={"https://i.imgur.com/JbIMvq2.jpg"}
              likes={452}
              comments={87}
              author={"DevMaster"}
              authorAvatar={"https://i.pravatar.cc/150?img=11"}
              category={"Programação"}
            />
            <Feed
              title={"Vida de estudante"}
              description={"Eu entrando na prova sem estudar"}
              image={"https://i.imgur.com/DpEHvFs.jpg"}
              likes={231}
              comments={56}
              author={"StudyGuru"}
              authorAvatar={"https://i.pravatar.cc/150?img=12"}
              category={"Escola"}
            />
            <Feed
              title={"Reunião que poderia ser um e-mail"}
              description={"Minha cara depois de 2 horas de reunião"}
              image={"https://i.imgur.com/a1hJwXc.jpg"}
              likes={631}
              comments={103}
              author={"CorporateJoker"}
              authorAvatar={"https://i.pravatar.cc/150?img=13"}
              category={"Trabalho"}
            />
            <Feed
              title={"Quando a internet cai"}
              description={"POV: Você no meio de uma partida importante"}
              image={"https://i.imgur.com/uGdnlGj.jpg"}
              likes={842}
              comments={152}
              author={"GamerLife"}
              authorAvatar={"https://i.pravatar.cc/150?img=14"}
              category={"Games"}
            />
            <Feed
              title={"Segunda-feira chegando"}
              description={"Ninguém está pronto para isso"}
              image={"https://i.imgur.com/aNDyAyC.jpg"}
              likes={753}
              comments={91}
              author={"WeekendWarrior"}
              authorAvatar={"https://i.pravatar.cc/150?img=15"}
              category={"Trabalho"}
            />
            <Feed
              title={"Minha vida amorosa"}
              description={"Expectativa vs Realidade"}
              image={"https://i.imgur.com/gMy6q9Y.jpg"}
              likes={523}
              comments={78}
              author={"RomanceExpert"}
              authorAvatar={"https://i.pravatar.cc/150?img=16"}
              category={"Relacionamentos"}
            />
          </div>
          <button className={styles.loadMoreButton}>
                Carregar mais memes
            </button>
        </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
