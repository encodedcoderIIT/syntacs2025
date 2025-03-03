import styles from "./Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>QUICK FINDS</h3>
          <ul className={styles.footerList}>
            <li>
              <Link href="https://iitrpr.ac.in/" target="_blank">
                IIT Ropar
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1oFeyY-JxaXzPH0hWT1HTMEA_nOtyz1g1w2XYEwTC9_Y/edit?pli=1&amp;tab=t.0"
                target="_blank"
              >
                Bus Timing
              </Link>
            </li>
            <li>
              <Link href="/team" target="_blank">
                SYNTACS 2025 Team
              </Link>
            </li>
            <li>
              <Link href="/program" className={styles.navLink}>
                Program Schedule
              </Link>
            </li>
            <li>
              <Link href="/venue" className={styles.navLink}>
                Venue
              </Link>
            </li>
            <li>
              <Link href="/venue#how-to-reach" className={styles.navLink}>
                How to Reach
              </Link>
            </li>
            <li>
              <Link href="/venue#nearby-places" className={styles.navLink}>
                Near by Places
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>CONTACT DETAILS</h3>
          <address className={styles.contactInfo}>
            <ul className={styles.footerList}>
              <li>
                <Link href="https://cse.iitrpr.ac.in/" target="_blank">
                  CSE IIT Ropar
                </Link>
              </li>
            </ul>
            <p>S. Ramanujan Block</p>
            <p>Department of Computer Science and Engineering,</p>
            <p>Indian Institute of Technology Ropar,</p>
            <p>Rupnagar, Punjab - 140001, India</p>
            <div className={styles.socialLinks}>
              <h4>Follow IIT Ropar:</h4>
              <div className={styles.socialIcons}>
                <Link
                  href="https://www.youtube.com/@cseiitrpr"
                  aria-label="YouTube"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link
                  href="https://x.com/cseiitrpr"
                  aria-label="X (Twitter)"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  href="https://www.instagram.com/cseiitropar"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/cseiitrpr/"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </address>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>How to Reach IIT Ropar</h3>
          <ul className={styles.footerList}>
            <li>
              {/* <p>
                <Link
                  href="https://www.google.co.in/maps/dir/Rupnagar+Old+Bus+Stand,+Chhota+Khera,+Basant+Nagar,+Rupnagar,+Punjab/Indian+institute+of+Technology+Ropar,+Bara+Phool,+Punjab/@30.9620135,76.4693569,13z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3905543310e70e63:0x63397d7938035537!2m2!1d76.5338308!2d30.9669692!1m5!1m1!1s0x390554d4ffffffff:0xb81f1e2708c91100!2m2!1d76.4731998!2d30.9709183?shorturl=1"
                  target="_blank"
                >
                  📍 How to Reach IIT Ropar
                </Link>
              </p> */}
              <p className="mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13684.267356494109!2d76.473305!3d30.9686169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1697191231534!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2025, IIT Ropar</p>
        <p>
          Designed by{" "}
          <Link
            href="https://encodedcoder.com"
            target="_blank"
            className={styles.designer}
          >
            encodedcoder
          </Link>
        </p>
      </div>
    </footer>
  );
}
