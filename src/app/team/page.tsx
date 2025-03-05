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
      image: "/assets/team/neeraj.jpg",
      email: "neeraj@iitrpr.ac.in",
      website: "https://cse.iitrpr.ac.in/neeraj/",
    },
    {
      name: "Dr. Balwinder Sodhi",
      position: "Faculty Co-Coordinator",
      department: "CSE, IIT Ropar",
      image: "/assets/team/sodhi.png",
      email: "sodhi@iitrpr.ac.in",
      website: "https://cse.iitrpr.ac.in/sodhi/",
    },
  ];

  const studentCoordinators = [
    {
      name: "Suresh",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/suresh.jpg",
    },
    {
      name: "Raman Kymar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/raman.png",
    },
    {
      name: "Shruti Sharma",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shruti.jpg",
    },
    {
      name: "Sahil",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/sahil.jpg",
    },
    {
      name: "Sahil Pathak",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/sahil_pathak.jpg",
    },
    {
      name: "Kavitha",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/kavitha.jpg",
    },
    {
      name: "Mudit Sharma",
      department: "JRF, CSE",
      image: "/assets/team/mudit.jpg",
    },
    {
      name: "Soumya Sarkar",
      department: "JRF, CSE",
      image: "/assets/team/soumya.jpg",
    },
    {
      name: "Rejoy",
      department: "M.Tech, CSE",
      image: "/assets/team/rejoy.jpg",
    },
    {
      name: "Vivek Kumar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/vivek.jpg",
    },
    {
      name: "Yogesh Kumar",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/yogesh.jpg",
    },
    {
      name: "Akanksha",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/akanksha.jpg",
    },
    {
      name: "Shivam Gupta",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shivam.jpg",
    },
    {
      name: "Shreya Bansal",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shreya.jpg",
    },
    {
      name: "Shradha Sharma",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/shradha.jpg",
    },
    {
      name: "Atul",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/atul.jpg",
    },
    {
      name: "Pravesh",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/pravesh.jpg",
    },

    {
      name: "Devnath",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/devnath.jpg",
    },
    {
      name: "Greeshma PG",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/greeshma.jpg",
    },
    {
      name: "Harshith",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/harshith.jpg",
    },
    {
      name: "Riya Goel",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/riya.jpg",
    },
    {
      name: "Harasees Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/herasees.jpg",
    },
    {
      name: "Rupinder Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/rupinder.jpg",
    },
    {
      name: "Maninder Kaur",
      department: "Ph.D. Scholar, CSE",
      image: "/assets/team/maninder.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SYNTACS 2025 Team</h1>
      <p className={styles.intro}>
        Meet the dedicated individuals working behind the scenes to make SYNTACS
        2025 an exceptional academic experience. Our team is committed to
        fostering collaboration and knowledge exchange within the research
        community.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Faculty Coordinators</h2>
        <div className={styles.teammembers}>
          {facultyCoordinators.map((faculty, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.photoContainer}>
                <Image
                  src={
                    imgError[`faculty-${index}`]
                      ? "https://via.placeholder.com/200x200?text=Photo"
                      : faculty.image
                  }
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className={styles.photo}
                  onError={() => handleImageError(`faculty-${index}`)}
                />
              </div>
              <div className={styles.details}>
                <h3 className={styles.name}>{faculty.name}</h3>
                <p className={styles.position}>{faculty.position}</p>
                <p className={styles.department}>{faculty.department}</p>
                <p className={styles.contact}>
                  <a href={`mailto:${faculty.email}`} className={styles.link}>
                    {faculty.email}
                  </a>
                </p>
                {faculty.website && (
                  <p className={styles.website}>
                    <a
                      href={faculty.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Personal Website
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Student Coordinators</h2>
        <div className={styles.studentGrid}>
          {studentCoordinators.map((student, index) => (
            <div key={index} className={styles.studentCard}>
              <div className={styles.studentPhotoContainer}>
                <Image
                  src={
                    imgError[`student-${index}`]
                      ? "https://via.placeholder.com/150x150?text=Photo"
                      : student.image
                  }
                  alt={student.name}
                  width={150}
                  height={150}
                  className={styles.studentPhoto}
                  onError={() => handleImageError(`student-${index}`)}
                />
              </div>
              <h3 className={styles.studentName}>{student.name}</h3>
              <p className={styles.studentDepartment}>{student.department}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.bottomButtons}>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
