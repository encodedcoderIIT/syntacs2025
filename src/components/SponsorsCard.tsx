"use client";

import Image from "next/image";
import styles from "./SponsorsCard.module.css";

export default function SponsorsCard() {
  return (
    <div className={styles.sponsorCard}>
      {/* <h3 className={styles.sponsorTitle}>Sponsoring Partners</h3> */}
      <div className={styles.sponsorGrid}>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/iitrpr.png"
            alt="IIT Ropar"
            width={200}
            height={100}
            className={styles.sponsorImage}
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/awadh.png"
            alt="iHub Awadh"
            width={200}
            height={100}
            className={styles.sponsorImage}
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/itjrc.png"
            alt="ITJRC"
            width={200}
            height={100}
            className={styles.sponsorImage}
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/cards.png"
            alt="CARDS"
            width={200}
            height={100}
            className={styles.sponsorImage}
          />
        </div>
      </div>
    </div>
  );
}
