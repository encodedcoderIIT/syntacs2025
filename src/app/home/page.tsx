"use client";

import Head from "next/head";
import Carousel from "../../components/Carousel";
import Image from "next/image";
import styles from "./Home.module.css";
import SponsorsCard from "@/components/SponsorsCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const GlimpsesImages = 40;

export const metadata = {
  title: "Home | SYNTACS 2025",
  description:
    "Welcome to SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science at IIT Ropar, featuring keynotes by Dr. Debabrata Nayak and Prof. Yogesh Simmhan.",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>SYNTACS 2025 - Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/image.jpg" type="image/jpeg" />
      </Head>
      <Carousel />
      <div className={styles.container}>
        <div className={styles.cardBody}>
          <div className={styles.topSection}>
            <div id="about" className={styles.aboutSection}>
              <h1 className={styles.title}>Welcome to SYNTACS &apos;25</h1>
              <hr className={styles.divider} />
              <Image
                src="/assets/banner.png"
                alt="SYNTACS 2025 Banner"
                width={800}
                height={400}
                className={styles.bannerImage}
              />
              <p className={`${styles.text} justifyText`}>
                IIT Ropar&apos;s Computer Science and Engineering department
                proudly introduces SYNTACS, <b>SY</b>mposium on <b>N</b>ovel{" "}
                <b>T</b>
                echnologies and <b>A</b>dvances in <b>C</b>omputer <b>S</b>
                cience, a Research Scholars Day aimed at fostering collaboration
                and knowledge exchange within the academic community. This event
                serves as a platform to bring together research scholars from
                diverse backgrounds, creating an environment conducive to
                networking and collaboration.
              </p>
              <p className={`${styles.text} justifyText`}>
                Organized by CSE IIT Ropar, SYNTACS will feature insightful
                talks by two prominent speakers, providing attendees with
                valuable insights into cutting-edge research and industry
                trends. The event will also include engaging poster sessions and
                demo sessions, offering scholars an opportunity to showcase
                their work and receive constructive feedback. We extend a warm
                invitation to all researchers to join us in this enriching
                experience, broaden your professional network, and make the most
                of SYNTACS - a day full of learning and collaborative
                opportunities.
              </p>
            </div>
            <div id="sponsors" className={styles.sponsorsSection}>
              <h2
                id="sponsors-section-inner"
                className={styles.subTitle}
                style={{ marginTop: "-1px" }}
              >
                Sponsoring Partners 🫱🏼‍🫲🏾
              </h2>
              <SponsorsCard />
            </div>
          </div>

          <h2 className={styles.subTitle}>Keynote Speakers 🎙️</h2>
          <div className={styles.keynoteContainer}>
            <div className={styles.keynoteCard}>
              <Image
                src="/assets/speakers/debabrata.jpg"
                alt="Dr. Debabrata Nayak"
                width={150}
                height={150}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <strong>Dr. Debabrata Nayak</strong>
                <p>Director, Huawei, PwC India</p>
                <a
                  href="https://in.linkedin.com/in/dr-debabrata-nayak-a3828126"
                  target="_blank"
                  rel="noreferrer"
                  className="hrefLinkBlue"
                >
                  LinkedIn Profile
                </a>{" "}
                🌐
              </div>
            </div>
            <div className={styles.keynoteCard}>
              <Image
                src="/assets/speakers/yogesh.jpg"
                alt="Prof. Yogesh Simmhan"
                width={150}
                height={150}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <strong>Prof. Yogesh Simmhan</strong>
                <p>Professor, IISc Bangalore</p>
                <a
                  href="https://cds.iisc.ac.in/faculty/simmhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="hrefLinkBlue"
                >
                  Profile
                </a>
                🌐
              </div>
            </div>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.infoCard}>
              <h2 className={styles.subTitle}>Schedule ⌛</h2>
              <p className={styles.text}>
                The detailed schedule of the event can be found on the{" "}
                <a href="/program">Program Page</a>.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.subTitle}>Registration 💻</h2>
              <p className={styles.text}>
                All participants must register for the symposium using the form
                available on the <a href="/registration">Registration Page</a>.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.subTitle}>Venue 🗺️</h2>
              <p className={styles.text}>
                The event will be held at IIT Ropar. For more details on how to
                reach the venue and nearby places to visit, please refer to the{" "}
                <a href="/venue">Venue Page</a>.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.subTitle}>Contact 📩</h2>
              <div className={styles.text}>
                For any issues or queries, please contact us at:
                <ul>
                  <li>
                    Email 📧:{" "}
                    <a href="mailto:cse.events@iitrpr.ac.in">
                      cse.events@iitrpr.ac.in
                    </a>
                  </li>
                  <li>
                    Alternate 📧:{" "}
                    <a href="mailto:office-cse-1@iitrpr.ac.in">
                      office-cse-1@iitrpr.ac.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.glimpsesContainer}>
            <h2 className={styles.subTitle}>SYNTACS &apos;24 Glimpses 📸</h2>
            <div className={styles.glimpsesContainer}>
              {Array.from({ length: GlimpsesImages }, (_, index) => (
                <div key={index} className={styles.glimpseCard}>
                  <Image
                    src={`/assets/glimpses/2024_${index + 1}.jpg`}
                    alt={`Glimpse ${index + 1}`}
                    width={300}
                    height={200}
                    className={styles.glimpseImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
