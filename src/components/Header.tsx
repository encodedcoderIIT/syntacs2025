"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={`${styles.brand} ${styles.navLink}`}>
          SYNTACS 2025
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className={styles.menuIcon}></span>
        </button>
        <div
          id="navbarNav"
          className={`${styles.navbarMenu} ${menuOpen ? styles.open : ""}`}
        >
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home 🏠
              </Link>
            </li>
            <li>
              <Link href="/registration" className={styles.navLink}>
                Registration 💻
              </Link>
            </li>
            <li>
              <Link href="/program" className={styles.navLink}>
                Program ⌛
              </Link>
            </li>
            <li>
              <Link href="/venue" className={styles.navLink}>
                Venue 🗺️
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
