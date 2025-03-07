"use client";

import Image from "next/image";
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
