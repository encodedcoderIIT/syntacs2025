import Head from "next/head";
import Carousel from "../../components/Carousel";
import Image from "next/image";
import styles from "./Home.module.css";
import SponsorsCard from "@/components/SponsorsCard";

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
              <h1 className={styles.title}>Welcome to SYNTACS 2025</h1>
              <hr className={styles.divider} />
              <p className={`${styles.text} justifyText`}>
                A <b>SY</b>mposium on <b>N</b>ovel <b>T</b>echnologies and{" "}
                <b>A</b>dvances in <b>CS</b> is a gathering of scholars,
                researchers, and experts in a particular field to share and
                discuss the latest advancements, findings, and innovations in
                their respective areas of study. The [Year] Research Symposium,
                themed &quot;Exploring Frontiers in [Research Field],&quot;
                brought together a diverse group of professionals to engage in
                intellectual exchange, foster collaboration, and push the
                boundaries of knowledge within the chosen domain.
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
              <h2 className={styles.subTitle}>Event Details ⌚</h2>
              <p className={styles.text}>
                <strong>Date:</strong> 8th March 2025
                <br />
                <strong>Location 📍:</strong> IIT Ropar, Punjab, India
              </p>
            </div>
            <div id="sponsors" className={styles.sponsorsSection}>
              <h2 id="sponsors-section-inner" className={styles.subTitle}>
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
                  LinkedIn Profile 🌐
                </a>
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
                  Profile 🌐
                </a>
              </div>
            </div>
          </div>
          <h2 className={styles.subTitle}>Schedule ⌛</h2>
          <p className={styles.text}>
            The detailed schedule of the event can be found on the{" "}
            <a href="/program">Program Page</a>.
          </p>
          <h2 className={styles.subTitle}>Registration 💻</h2>
          <p className={styles.text}>
            All participants must register for the symposium using the form
            available on the <a href="/registration">Registration Page</a>.
          </p>
          <h2 className={styles.subTitle}>Venue 🗺️</h2>
          <p className={styles.text}>
            The event will be held at IIT Ropar. For more details on how to
            reach the venue and nearby places to visit, please refer to the{" "}
            <a href="/venue">Venue Page</a>.
          </p>
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
                Alternate Email 📧:{" "}
                <a href="mailto:office-cse-1@iitrpr.ac.in">
                  office-cse-1@iitrpr.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
