import Head from "next/head";
import Carousel from "@/components/Carousel";
import styles from "./Venue.module.css";

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
          <p className={`${styles.text} justifyText`}>
            IIT Ropar is located in the district of Rupnagar, the city formerly
            known as Ropar, which possesses great historical importance. The
            excavations carried out at Rupnagar have proved that this town was a
            seat of well-developed Indus Valley Civilization. The city dates
            back to Harappa - Mohenjo-daro civilization located east of Satluj
            River. Ropar is nested on the foothills of the Shivalik ranges, and
            the institute is very close to Sri Anandpur Sahib - the birth place
            of Sikhism, and several scenic hill stations of Himachal Pradesh.
            There are many national institutes and research laboratories in the
            close vicinity of IIT Ropar, including IISER Mohali, NIPER Mohali,
            PGIMER Chd., CSIR CSIO Chd., TBRL DRDO and IMTECH Chd.
          </p>

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
                  <b>From Chandigarh Railway Station 🚉:</b> You can get a
                  pre-paid taxi 🚕 which will cost around ₹1500. Also, you can
                  get state or private bus 🚌 transport from ‘Sector 43’ bus
                  stand of Chandigarh to the Rupnagar bus stand which will cost
                  around ₹80. Then auto-rickshaw 🛺 may cost around ₹250 to
                  reach IIT Ropar from Rupnagar bus stand.
                </li>
                <li>
                  <b>From Chandigarh Airport 🛫:</b> You can get a pre-paid taxi
                  which will cost around ₹1500. The taxi can drop you off
                  directly at respective hostel/Guest-house. The taxi or
                  auto-rickshaw would have to make an entry at the IIT Main Gate
                  at the Security.
                </li>
                <li>
                  <b>From Rupnagar Railway Station 🚂:</b> An auto-rickshaw may
                  cost around ₹250 to reach IIT till hostel or Guest-house.
                </li>
              </ul>
            </div>
          </div>

          <h2 className={styles.subTitle}>Nearby Places to Visit 🧳</h2>
          <hr className={styles.divider} />
          <div className={styles.placesSection}>
            <p className={styles.text}>
              Ropar is situated on the banks of the river Sutlej and is famous
              for its historical significance and natural beauty. Here are some
              of the top tourist attractions in and around Ropar:
            </p>
            <ul className={styles.placesList}>
              <li>
                <b>Chandigarh 🏙️:</b> Chandigarh is a beautiful city located
                near Ropar and is known for its well-planned architecture,
                gardens, and museums. The city is also home to several important
                landmarks, such as the Rock Garden, Sukhna Lake, and the Capitol
                Complex. (47 KM)
              </li>

              <li>
                <b>Ropar Wetland 🚾:</b> The Ropar Wetland is a popular bird
                sanctuary and a beautiful natural reserve that is home to a
                variety of migratory birds. It is also a great spot for boating
                and picnics. (11 KM)
              </li>

              <li>
                <b>Archaeological Museum 🗿:</b> The Archaeological Museum in
                Ropar is a must-visit for history enthusiasts. It houses several
                ancient artifacts and relics that offer a glimpse into the
                region&apos;s rich past. (5 KM)
              </li>

              <li>
                <b>Virasat-e-Khalsa 🖼️:</b> Virasat-e-Khalsa is a museum located
                in Anandpur Sahib, near Ropar, that showcases the history and
                culture of the Sikh religion. The museum is a popular tourist
                spot and is known for its unique architecture. (45 KM)
              </li>

              <li>
                <b>Bhakra Nangal Dam 🌊:</b> The Bhakra Nangal Dam is another
                popular tourist attraction located near Ropar. It is one of the
                largest gravity dams in the world and is a major source of
                hydroelectric power in northern India. (79 KM)
              </li>

              <li>
                <b>Naina Devi Temple 🛕:</b> Naina Devi Temple is a sacred Hindu
                temple located near Ropar. It is believed to be the site where
                the eyes of the Hindu goddess Sati fell, according to Hindu
                mythology. The temple is a popular pilgrimage site and is known
                for its beautiful architecture and scenic views. (68 KM)
              </li>

              <li>
                In addition, it is 4-6 hours drive away from the popular hill
                stations such as Shimla 🚞, Manali ⛰️, Dharamshala 🪂, Dehradoon
                🌄, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
