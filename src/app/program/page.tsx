import Carousel from "@/components/Carousel";
import Head from "next/head";
import Image from "next/image";
import styles from "./Program.module.css";

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
          <div className={styles.schedule}>
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
                  <th scope="row">9.15-10.00</th>
                  <td>Registration/High-Tea</td>
                  <td>Senate Hall</td>
                </tr>
                <tr>
                  <th scope="row">10.00-10.30</th>
                  <td>Inauguration</td>
                  <td>Senate Hall</td>
                </tr>
                <tr>
                  <th scope="row">10.30-11.30</th>
                  <td>
                    <a href="#keynote1">Talk by Dr. Debabrata Nayak</a>
                    <br />
                    (Director, Huawei and PwC India)
                  </td>
                  <td>Senate Hall</td>
                </tr>
                <tr>
                  <th scope="row">11.30-12.00</th>
                  <td>Tea break</td>
                  <td>Senate Hall</td>
                </tr>
                <tr>
                  <th scope="row">12.00-12.50</th>
                  <td>Research Highlights - 1</td>
                  <td>Senate Hall</td>
                </tr>
                <tr>
                  <th scope="row">12.50-14.00</th>
                  <td>Lunch + Networking + Posters</td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">14.00-14.50</th>
                  <td>Research Highlights - 2</td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">14.50-15.50</th>
                  <td>
                    <a href="#keynote2">Prof. Yogesh Simmhan</a>
                    <br />
                    (Professor, IISc, Bangalore)
                  </td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">15.50-16.30</th>
                  <td>Poster + Tea + Networking</td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">16.30-17.30</th>
                  <td>Panel Discussion</td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">17.30-18.00</th>
                  <td>Concluding Remarks</td>
                  <td>S. Ramanujan Block</td>
                </tr>
                <tr>
                  <th scope="row">18.30-19.30</th>
                  <td>
                    <a href="#alumni">Alumni Meet</a>
                  </td>
                  <td>S. Ramanujan Block</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className={styles.divider} />
          <section className={styles.details}>
            <h4 id="keynote1" className={styles.subTitle}>
              Talk by Dr. Debabrata Nayak
            </h4>
            <hr className={styles.divider} />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              doloribus quisquam ducimus saepe architecto voluptatem quia
              quibusdam vitae officia eveniet amet harum repudiandae expedita,
              dignissimos ex vero iusto aspernatur aliquid?
            </p>
            <hr className={styles.divider} />
            <h4 id="keynote2" className={styles.subTitle}>
              Prof. Yogesh Simmhan
            </h4>
            <hr className={styles.divider} />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum expedita quaerat inventore rerum sit dicta tenetur,
              modi cupiditate, maxime mollitia, optio in numquam esse vel
              voluptate voluptatibus perferendis amet obcaecati.
            </p>
          </section>
          <hr className={styles.divider} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
