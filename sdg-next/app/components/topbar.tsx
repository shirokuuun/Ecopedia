"use client"; // Needed if using Next.js App Router or client-side JS
import { useState } from "react";
import styles from "./topbar.module.css";
import Link from "next/link";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.topbar}>
      <div
        className={styles.menuToggle}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        &#9776;
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/sdg-shelves">SDG Shelves</Link>
        <Link href="/article">Article Page</Link>
        <Link href="/impact">Impact Tracker</Link>
      </div>
    </nav>
  );
}
