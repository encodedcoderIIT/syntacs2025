import Head from "next/head";
import Carousel from "@/components/Carousel";
import styles from "./Venue.module.css";
import placesData from "@/data/nearby-places.json";

export default function Venue() {
  return (
    <div>
      <Head>
        <title>SYNTACS 2025 - Venue</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/image.jpg" type="image/jpeg" />
      </Head>
      <Carousel />
      <div className={styles.container}>
        <div className={styles.cardBody}>
          <h1 className={styles.title}>About IIT Ropar 🗺️</h1>
          <hr className={styles.divider} />
          <div className={styles.aboutCard}>
            <p className={`${styles.text} ${styles.justifyText}`}>
              IIT Ropar is located in the district of Rupnagar, the city
              formerly known as Ropar, which possesses great historical
              importance. The excavations carried out at Rupnagar have proved
              that this town was a seat of well-developed Indus Valley
              Civilization. The city dates back to Harappa - Mohenjo-daro
              civilization located east of Satluj River. Ropar is nested on the
              foothills of the Shivalik ranges, and the institute is very close
              to Sri Anandpur Sahib - the birth place of Sikhism, and several
              scenic hill stations of Himachal Pradesh. There are many national
              institutes and research laboratories in the close vicinity of IIT
              Ropar, including IISER Mohali, NIPER Mohali, PGIMER Chd., CSIR
              CSIO Chd., TBRL DRDO and IMTECH Chd.
            </p>
          </div>

          <div className={styles.directionCard}>
            <h2 className={styles.subTitle}>How To Reach 🛣️</h2>
            <hr className={styles.divider} />
            <div className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13684.267356494109!2d76.473305!3d30.9686169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1697191231534!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className={styles.directionsContainer}>
                <ul className={`${styles.directionsList} justifyText`}>
                  <li>
                    <b style={{ marginTop: "-20px" }}>
                      From Chandigarh Railway Station 🚉:
                    </b>{" "}
                    You can get a pre-paid taxi 🚕 which will cost around ₹1500.
                    Also, you can get state or private bus 🚌 transport from
                    ‘Sector 43’ bus stand of Chandigarh to the Rupnagar bus
                    stand which will cost around ₹80. Then auto-rickshaw 🛺 may
                    cost around ₹250 to reach IIT Ropar from Rupnagar bus stand.
                  </li>
                  <li>
                    <b>From Chandigarh Airport 🛫:</b> You can get a pre-paid
                    taxi which will cost around ₹1500. The taxi can drop you off
                    directly at respective hostel/Guest-house. The taxi or
                    auto-rickshaw would have to make an entry at the IIT Main
                    Gate at the Security.
                  </li>
                  <li>
                    <b>From Rupnagar Railway Station 🚂:</b> An auto-rickshaw
                    may cost around ₹250 to reach IIT till hostel or
                    Guest-house.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.placesCard}>
            <h2 className={styles.subTitle}>Nearby Places to Visit 🧳</h2>
            <hr className={styles.divider} />
            <div className={styles.placesSection}>
              <p className={styles.text}>
                Ropar is situated on the banks of the river Sutlej and is famous
                for its historical significance and natural beauty. Here are
                some of the top tourist attractions in and around Ropar:
              </p>
              <div className={styles.placesGrid}>
                {placesData.places.map((place, index) => (
                  <div
                    key={index}
                    className={styles.placeCard}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${place.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h3 className={styles.placeTitle}>
                      {place.placeName} {place.emoji}
                    </h3>
                    <p className={styles.placeDistance}>{place.distance}</p>
                    <p className={`${styles.placeDetails} justifyText`}>
                      {place.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
