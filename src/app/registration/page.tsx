import Head from "next/head";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import styles from "./Registration.module.css";

export default function Registration() {
  return (
    <div>
      <Head>
        <title>SYNTACS 2025 - Registration</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/image.jpg" type="image/jpeg" />
      </Head>
      <Carousel />
      <div className={styles.container}>
        <div className={styles.cardBody}>
          <h1 className={styles.title}>Registration 💻</h1>
          <hr className={styles.divider} />
          <div className={styles.cardsContainer}>
            <div className={`${styles.card}`} id="register-request">
              <p className={styles.text}>
                All participants must mandatorily register for the symposium
                using the form below by <b>TBA</b>:
              </p>
              <p className={styles.text}>
                <a
                  href="/register"
                  target="_blank"
                  rel="noreferrer"
                  className="hrefLinkBlue"
                >
                  syntacs2025.site/register
                </a>
              </p>
              <div className={styles.text}>
                <h3 className={styles.subTitle}>Event Highlights 🎯</h3>
                <ul className={styles.highlightsList}>
                  <li>🎤 Keynote Talks </li>
                  <li>🖼️ Poster Presentations </li>
                  <li>🏢 Industry Interactions </li>
                  <li> 🗣️Panel Discussion </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.card} ${styles.qrCodeCard}`}>
              <div className={styles.imageContainer}>
                <Image
                  width={200}
                  height={200}
                  src="/assets/registration-qr.png"
                  alt="Registration QR Code"
                  className={styles.qrImage}
                />
              </div>
            </div>
          </div>
          <h2 className={styles.subTitle}>Contact 📩</h2>
          <p className={styles.text}>
            In case of any issues, kindly contact us at{" "}
            <a href="mailto:cse.events@iitrpr.ac.in" className="hrefLinkBlue">
              cse.events@iitrpr.ac.in
            </a>
            <br />
            Alternatively, you can reach us at{" "}
            <a href="mailto:office-cse-1@iitrpr.ac.in" className="hrefLinkBlue">
              office-cse-1@iitrpr.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
