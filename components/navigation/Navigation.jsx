import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../navigation/Navigation.module.css";

export default function Navigation({ navigationLinks }) {
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

        <Link href={navigationLinks.contactUs.href}>
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  );
}
