import Head from "next/head";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import styles from "./Registration.module.css";
import GoogleForm from "@/components/GoogleForm";
import { JSX } from "react";

export default function Registration() {
  const formLinks = {
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfKxHY9nVM-lcNQCmRWsp7BIVyuJemSlnWK1gZc--zj_PlpMw/viewform?embedded=true",
    industryRegistration:
      "https://docs.google.com/forms/d/e/1FAIpQLSdTSdPvrpK1WjPcZpiH1nN_JZhUOMBbcX3mzo7KJfv8A6DMxA/viewform?embedded=true",
  };

  // Convert the object values into an array
  const linksArray = Object.values(formLinks);
  const formsToRender: JSX.Element[] = [];

  // Loop over the array of links
  for (let i = 0; i < linksArray.length; i++) {
    formsToRender.push(
      <div className={styles.contactCard} key={i}>
        <GoogleForm formUrl={linksArray[i]} />
      </div>
    );
  }

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
                using the form below by{" "}
                <b>
                  24<sup>th</sup> Feb, 2025
                </b>
                :
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
              <p className={styles.text}>
                For industry participants, kindly register using the form below
                by the same deadline: <br />
                <a
                  href="/industryRegister"
                  target="_blank"
                  rel="noreferrer"
                  className="hrefLinkBlue"
                >
                  syntacs2025.site/industryRegister
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
          {/* Render the forms */}
          {/* {formsToRender} */}
          <div className={styles.contactCard}>
            <h2 className={styles.subTitle}>Contact 📩</h2>
            <p className={styles.text}>
              In case of any issues, kindly contact us at{" "}
              <a href="mailto:cse.events@iitrpr.ac.in" className="hrefLinkBlue">
                cse.events@iitrpr.ac.in
              </a>
              <br />
              Alternatively, you can reach us at{" "}
              <a
                href="mailto:office-cse-1@iitrpr.ac.in"
                className="hrefLinkBlue"
              >
                office-cse-1@iitrpr.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
