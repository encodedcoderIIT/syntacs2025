"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Team.module.css";
import { useState } from "react";

export default function TeamPage() {
  // State to track image loading errors
  const [imgError, setImgError] = useState<{ [key: string]: boolean }>({});

  // Handle image error and set placeholder
  const handleImageError = (id: string) => {
    setImgError((prev) => ({ ...prev, [id]: true }));
  };

  const facultyCoordinators = [
    {
      name: "Dr. Neeraj Goel",
      position: "Faculty Coordinator",
      department: "CSE, IIT Ropar",
      image: "/assets/team/neeraj.png",
      email: "neeraj@iitrpr.ac.in",
      website: "https://sites.google.com/view/neerajgoel",
    },
    {
      name: "Dr. Sweta Jain",
      position: "Faculty Coordinator",
      department: "CSE, IIT Ropar",
      image: "/assets/team/sweta.png",
      email: "sweta@iitrpr.ac.in",
      website: "https://sites.google.com/site/shwetajainiisc/home",
    },
  ];

  const studentCoordinators = [
    {
      name: "Suresh",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/suresh.png",
    },
    {
      name: "Raman Kumar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/raman.png",
    },
    {
      name: "Shruti Sharma",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shruti.png",
    },
    {
      name: "Sahil",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/sahil.png",
    },
    {
      name: "Sahil Pathak",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/sahil_pathak.png",
    },
    {
      name: "Kavitha",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/kavitha.png",
    },
    {
      name: "Mudit Sharma",
      department: "JRF, CSE",
      image: "/assets/team/mudit.png",
    },
    {
      name: "Soumya Sarkar",
      department: "JRF, CSE",
      image: "/assets/team/soumya.png",
    },
    {
      name: "Rejoy",
      department: "M.Tech, CSE",
      image: "/assets/team/rejoy.png",
    },
    {
      name: "Vivek Kumar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/vivek.png",
    },
    {
      name: "Yogesh Kumar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/yogesh.png",
    },
    {
      name: "Akanksha",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/akanksha.png",
    },
    {
      name: "Shivam Gupta",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shivam.png",
    },
    {
      name: "Shreya Bansal",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shreya.png",
    },
    {
      name: "Shradha Sharma",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shradha.png",
    },
    {
      name: "Atul",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/atul.png",
    },
    {
      name: "Pravesh",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/pravesh.png",
    },
    {
      name: "Devnath",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/devnath.png",
    },
    {
      name: "Greeshma PG",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/greeshma.png",
    },
    {
      name: "Harshith",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/harshith.png",
    },
    {
      name: "Riya Goel",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/riya.png",
    },
    {
      name: "Harasees Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/harasees.png",
    },
    {
      name: "Rupinder Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/rupinder.png",
    },
    {
      name: "Maninder Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/maninder.png",
    },
    {
      name: "Napendra",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/napendra.png",
    },
    {
      name: "Usma",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/usma.png",
    },
    {
      name: "Malya",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/malya.png",
    },
    {
      name: "Parul",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/parul.png",
    },
    {
      name: "Irshad",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/irshad.png",
    },
    {
      name: "Lownish",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/lownish.png",
    },
    {
      name: "Rahul",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/rahul.png",
    },
    {
      name: "Anjani",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/anjani.png",
    },
    {
      name: "Pavan",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/pavan.png",
    },
  ];

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
                    <a
                      href={`mailto:${faculty.email}`}
                      className="hrefLinkBlue"
                    >
                      {faculty.email}
                    </a>{" "}
                    📧
                    {faculty.website && (
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
