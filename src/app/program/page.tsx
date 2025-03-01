import Carousel from "@/components/Carousel";
import Head from "next/head";
import styles from "./Program.module.css";
import Image from "next/image";

export const metadata = {
  title: "Program Schedule | SYNTACS 2025",
  description:
    "View the complete program schedule for SYNTACS 2025, including keynote speeches by Dr. Debabrata Nayak (PwC India) and Prof. Yogesh Simmhan (IISc Bangalore), poster sessions, and demos.",
};

export default function Program() {
  return (
    <div>
      <Head>
        <title>SYNTACS 2025 - Program</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/image.jpg" type="image/jpeg" />
      </Head>
      <Carousel />
      <div className={styles.programContainer}>
        <div className={styles.cardBody}>
          <h1 className={styles.title}>Program ⌛</h1>
          <hr className={styles.divider} />
          <div className={styles.scheduleCard}>
            {/* <h2 className={styles.scheduleTitle}>Event Schedule</h2> */}
            <div className={styles.scheduleWrapper}>
              <table className={styles.programTable}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">8:15-09:00</th>
                    <td>Registration/High-Tea</td>
                    <td>Senate Hall</td>
                  </tr>
                  <tr>
                    <th scope="row">09:00-09:30</th>
                    <td>Inauguration</td>
                    <td>Senate Hall</td>
                  </tr>
                  <tr>
                    <th scope="row">09:30-10:30</th>
                    <td>
                      <a href="#keynote1">Talk by Dr. Debabrata Nayak</a>
                      <br />
                      (Director, PwC India)
                    </td>
                    <td>Senate Hall</td>
                  </tr>
                  <tr>
                    <th scope="row">10:30-11:00</th>
                    <td>Tea break</td>
                    <td>S. Ramanujan Block</td>
                  </tr>
                  <tr>
                    <th scope="row">10:30-13:00</th>
                    <td>Demos and Posters Session 1</td>
                    <td>
                      Open CS area + Reception + Labs,
                      <br />
                      S. Ramanujan Block
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">13:00-14:00</th>
                    <td>Lunch + Networking</td>
                    <td>Behind S. Ramanujan Block</td>
                  </tr>
                  <tr>
                    <th scope="row">14:00-16:30</th>
                    <td>Demos and Posters Session 2</td>
                    <td>
                      Open CS area + Reception + Labs,
                      <br />
                      S. Ramanujan Block
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">16:00-16:30</th>
                    <td>Tea Break</td>
                    <td>S. Ramanujan Block</td>
                  </tr>
                  <tr>
                    <th scope="row">16:30-17:30</th>
                    <td>
                      <a href="#keynote2">Talk by Prof. Yogesh Simmhan</a>
                      <br />
                      (Professor, IISc, Bangalore)
                    </td>
                    <td>Senate Hall</td>
                  </tr>
                  <tr>
                    <th scope="row">17:30-18:30</th>
                    <td>Panel Discussion</td>
                    <td>Senate Hall</td>
                  </tr>
                  <tr>
                    <th scope="row">18:30-18:45</th>
                    <td>Closing Ceremony</td>
                    <td>Senate Hall</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className={styles.divider} />
          <section className={styles.details}>
            <div id="keynote1" className={styles.keynoteCard}>
              <div className={styles.keynoteImageCol}>
                <Image
                  src="/assets/speakers/debabrata.jpg"
                  alt="Dr. Debabrata Nayak"
                  width={150}
                  height={150}
                  className={styles.speakerImage}
                />
              </div>
              <div className={styles.keynoteContentCol}>
                <h4 className={styles.subTitle}>Talk by Dr. Debabrata Nayak</h4>
                <p className={`${styles.text} justifyText`}>
                  Dr. Debabrata Nayak is a seasoned management professional with
                  over 18 years of experience in senior leadership roles,
                  specializing in Strategic IT Solutions, Service Delivery,
                  Wireless & Network Communications, and Security. Renowned for
                  formulating robust IT strategies, driving business continuity,
                  and setting security roadmaps, alongside presenting 62
                  research papers at international forums like IEEE, he is
                  skilled in managing cross-functional teams, executing critical
                  research projects, and harmonizing technical needs with
                  business objectives through effective project planning and
                  execution. Known for blending technical expertise with
                  strategic vision to deliver business excellence and
                  innovation.
                </p>
              </div>
            </div>

            <div id="keynote2" className={styles.keynoteCard}>
              <div className={styles.keynoteImageCol}>
                <Image
                  src="/assets/speakers/yogesh.jpg"
                  alt="Prof. Yogesh Simmhan"
                  width={150}
                  height={150}
                  className={styles.speakerImage}
                />
              </div>
              <div className={styles.keynoteContentCol}>
                <h4 className={styles.subTitle}>
                  Talk by Prof. Yogesh Simmhan
                </h4>
                <p className={`${styles.text} justifyText`}>
                  Yogesh Simmhan, an Associate Professor in the Department of
                  Computational and Data Sciences at IISc Bangalore and a Swarna
                  Jayanti Fellow, specializes in scalable software platforms and
                  algorithms for Distributed Systems, including Cloud and Edge
                  Computing, Temporal Graph Processing, and Scalable Machine
                  Learning for Big Data and IoT. With over 100 peer-reviewed
                  publications and numerous accolades like the IEEE TCSC Award
                  for Excellence in Scalable Computing (2020) and multiple Best
                  Paper Awards, he is a prominent figure in his field. A
                  Distinguished Member of ACM and IEEE, he also serves on
                  editorial boards of leading journals and the ACM India
                  Executive Council.
                </p>
              </div>
            </div>
          </section>

          {/* Alumni meet secttion */}
          {/* <hr className={styles.divider} />
          <h4 id="alumni" className={styles.subTitle}>
            Alumni Meet
          </h4>
          <hr className={styles.divider} />
          <div className={styles.alumniGrid}>
            <div className={styles.alumniCard}>
              <Image
                width={100}
                height={100}
                src="/assets/alumni-1.jpg"
                alt="alumni-1"
                className={styles.alumniImg}
              />
              <div className={styles.alumniBody}>
                <h5 className={styles.alumniTitle}>Alumni-1</h5>
                <p className={styles.alumniText}>
                  <small className={styles.textMuted}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore fuga ea cumque vel sint esse, voluptatibus modi!
                    Porro dolore quidem, corrupti, error ad repellat debitis
                    assumenda veniam aliquid culpa odit!
                  </small>
                </p>
              </div>
            </div>
            <div className={styles.alumniCard}>
              <Image
                width={100}
                height={100}
                src="/assets/alumni-2.jpg"
                alt="alumni-2"
                className={styles.alumniImg}
              />
              <div className={styles.alumniBody}>
                <h5 className={styles.alumniTitle}>Alumni-2</h5>
                <p className={styles.alumniText}>
                  <small className={styles.textMuted}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores nesciunt ipsum excepturi ea provident unde facere
                    nisi rerum esse repudiandae temporibus quaerat atque,
                    accusantium maiores, voluptates eius quidem, animi velit.
                  </small>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
