"use client";

import Image from "next/image";
import styles from "./SponsorsCard.module.css";

export default function SponsorsCard() {
  return (
    <div className={styles.sponsorCard}>
      <div className={styles.sponsorGrid}>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/iitrpr.png"
            alt="IIT Ropar"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/awadh.png"
            alt="iHub Awadh"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/cards.png"
            alt="iHub Awadh"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div>
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/itjrc.png"
            alt="iHub Awadh"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
