import styles from "../navigation/Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navigation({ navigationLinks }) {
  console.log(navigationLinks.links[0].display);
  return (
    <div id="nav" className={styles["navbar"]}>
      <div>
        <img
          src={navigationLinks.logo.src}
          alt={navigationLinks.logo.alt}
          className={styles["logo"]}
        />
      </div>
      <div className={styles["nav-links"]}>
        {navigationLinks.links.map((link) => {
          return (
            <Link href={link.href} key={link.id}>
              <a>{link.display}</a>
            </Link>
          );
        })}

        <a href="#contact">ContactUs</a>
      </div>
    </div>
  );
}
