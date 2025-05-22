"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleLinkClick = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Add click handlers to all nav links
    const navLinks = menuRef.current?.getElementsByTagName("a");
    if (navLinks) {
      Array.from(navLinks).forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (navLinks) {
        Array.from(navLinks).forEach((link) => {
          link.removeEventListener("click", handleLinkClick);
        });
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={`${styles.brand}`}>
          <div className={styles.logoContainer}>
            <Image
              src="/assets/syntacs-brand.png"
              alt="SYNTACS 2025 Logo"
              className={styles.logo}
              width={60}
              height={50}
              style={{ display: "inline", width: "auto" }}
            />
            {/* <span>SYNTACS 2025</span> */}
          </div>
        </Link>
        <button
          ref={buttonRef}
          className={styles.menuButton}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <div
          ref={menuRef}
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
            {/* <li className={styles.dropdown}>
              <button className={styles.dropdownToggle}>
                Gallery 📸 <span className={styles.dropdownArrow}>▼</span>
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="/gallery/2024" className={styles.dropdownItem}>
                  SYNTACS 2024
                </Link>
                <Link href="/gallery/2025" className={styles.dropdownItem}>
                  SYNTACS 2025
                </Link>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
