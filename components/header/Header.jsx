import styles from "../header/Header.module.css";

export default function Header({ header }) {
  return (
    <header className={styles["header"]}>
      <div className={styles["banner-image"]}>
        <img src={header["bannerImage"]} alt="Banner Image" />
      </div>
      <div className={styles["banner-heading"]}>
        <h1>{header.heading}</h1>
        <p>{header.subHeading}</p>
      </div>
    </header>
  );
}
