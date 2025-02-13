"use client";

import Image from "next/image";
import styles from "./SponsorsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

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
        {/* <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/awadh.png"
            alt="iHub Awadh"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div> */}
        {/* <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/abc.png"
            alt="CARDS"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div> */}
        <div className={styles.sponsorItem}>
          <Image
            src="/assets/sponsors/itjrc.png"
            alt="ITJRC"
            width={200}
            height={100}
            className={styles.sponsorImage}
            priority
            loading="eager"
          />
        </div>
      </div>
      <h2 className={`${styles.subTitle} ${styles.marginTop}`}>
        Event Details
      </h2>
      <p className={styles.text}>
        <strong>Date:</strong> 8th March 2025
        <br />
        <strong>Location 📍:</strong> IIT Ropar, Punjab, India
        <br />
        <button
          onClick={() => window.open("/docs/brochure.pdf", "_blank")}
          className={styles.downloadButton}
        >
          <FontAwesomeIcon icon={faFilePdf} className={styles.pdfIcon} /> Event
          Brochure
        </button>
      </p>
    </div>
  );
}
