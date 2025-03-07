"use client";

import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import styles from "./Team.module.css";
import { useState } from "react";
import { facultyCoordinators, studentCoordinators } from "./teamData";

export default function TeamPage() {
  // State to track image loading errors
  const [imgError, setImgError] = useState<{ [key: string]: boolean }>({});

  // Handle image error and set placeholder
  const handleImageError = (id: string) => {
    setImgError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <Carousel />
      <div className={styles.container}>
        <div className={styles.cardBody}>
          <h1 className={styles.title}>SYNTACS &apos;25 Team 👥</h1>
          <hr className={styles.divider} />

          <p className={`${styles.text} justifyText`}>
            Meet the dedicated individuals working behind the scenes to make
            SYNTACS 2025 an exceptional academic experience. Our team is
            committed to fostering collaboration and knowledge exchange within
            the research community.
          </p>

          <div id="faculty" className={styles.section}>
            <h2 className={styles.subTitle}>Faculty Coordinators 🎓</h2>
            <div className={styles.keynoteContainer}>
              {facultyCoordinators.map((faculty, index) => (
                <div key={index} className={styles.keynoteCard}>
                  <Image
                    src={
                      imgError[`faculty-${index}`]
                        ? "https://via.placeholder.com/150x150?text=Photo"
                        : faculty.image
                    }
                    alt={faculty.name}
                    width={150}
                    height={150}
                    className={styles.cardImage}
                    onError={() => handleImageError(`faculty-${index}`)}
                  />
                  <div className={styles.cardContent}>
                    <strong>{faculty.name}</strong>
                    <p>{faculty.position}</p>
                    <p>{faculty.department}</p>
                    {faculty.website && faculty.website !== "#" && (
                      <div>
                        <a
                          href={faculty.website}
                          target="_blank"
                          rel="noreferrer"
                          className="hrefLinkBlue"
                        >
                          Website
                        </a>{" "}
                        🌐
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="students" className={styles.section}>
            <h2 className={styles.subTitle}>Student Coordinators 🧑‍🎓</h2>
            <div className={styles.glimpsesContainer}>
              {studentCoordinators.map((student, index) => (
                <div key={index} className={styles.glimpseCard}>
                  <Image
                    src={
                      imgError[`student-${index}`]
                        ? "https://via.placeholder.com/150x150?text=Photo"
                        : student.image
                    }
                    alt={student.name}
                    width={150}
                    height={150}
                    className={styles.glimpseImage}
                    onError={() => handleImageError(`student-${index}`)}
                  />
                  <div className={styles.glimpseText}>
                    <strong>{student.name}</strong>
                    <p>{student.department}</p>
                    {student.linkedin && (
                      <a
                        href={student.linkedin}
                        target={student.linkedin === "#" ? "_self" : "_blank"}
                        rel="noreferrer"
                        className={styles.socialLink}
                        aria-label={`LinkedIn profile of ${student.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomButtons}>
            <Link href="/" className={styles.downloadButton}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
