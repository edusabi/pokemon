import styles from "./PageLoader.module.css";
import logo from "../../assets/logo2.png";

const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.stars}></div>

      <div className={styles.content}>
        <img src={logo} alt="PokeVerse" className={styles.logo} />
        <span className={styles.text}>Carregando...</span>
      </div>
    </div>
  );
};

export default PageLoader;
