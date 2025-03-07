export interface FacultyMember {
  name: string;
  position: string;
  department: string;
  image: string;
  email: string;
  website: string;
}

export interface StudentCoordinator {
  name: string;
  department: string;
  image: string;
  linkedin?: string; // Optional LinkedIn URL
}

export const facultyCoordinators: FacultyMember[] = [
  {
    name: "Dr. Neeraj Goel",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/neeraj.png",
    email: "neeraj@iitrpr.ac.in",
    website: "https://sites.google.com/view/neerajgoel",
  },
  {
    name: "Dr. Shweta Jain",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/sweta.png",
    email: "sweta@iitrpr.ac.in",
    website: "https://sites.google.com/site/shwetajainiisc/home",
  },
  {
    name: "Dr. T.V. Kalyan",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/kalyan.png",
    email: "kalyan@iitrpr.ac.in",
    website: "https://sites.google.com/view/kalyantv",
  },
  {
    name: "Dr. Shashi Shekhar Jha",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/shashi.png",
    email: "shashi@iitrpr.ac.in",
    website: "https://sites.google.com/view/shashi-iitrpr/",
  },
  {
    name: "Dr. Sudeepta Mishra",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/sudeepta.png",
    email: "sudeepta@iitrpr.ac.in",
    website: "#",
  },
  {
    name: "Dr. Sukrit Gupta",
    position: "Faculty Coordinator",
    department: "CSE, IIT Ropar",
    image: "/assets/team/faculty/sukrit.png",
    email: "sukrit@iitrpr.ac.in",
    website: "https://iitrpr.irins.org/profile/527457",
  },
];

export const studentCoordinators: StudentCoordinator[] = [
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
    name: "Midde Kavitha",
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
    name: "Rejoy Chakraborty",
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
    name: "Akanksha Chuchra",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/akanksha.png",
    linkedin: "https://in.linkedin.com/in/akankshachuchra",
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
    name: "Usma Niyaz",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/usma.png",
  },
  {
    name: "Malya Singh",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/malya.png",
  },
  {
    name: "Parul Kukrety",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/parul.png",
    linkedin: "https://in.linkedin.com/in/parul-kukrety-209287242",
  },
  {
    name: "Irshad Ali",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/irshad.png",
  },
  {
    name: "Lownish Rai Sookha",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/lownish.png",
    linkedin: "https://in.linkedin.com/in/lownish-rai-sookha-220294149",
  },
  {
    name: "Anjani",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/anjani.png",
  },
  {
    name: "Napendra",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/napendra.png",
  },
  {
    name: "Rahul",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/rahul.png",
  },
  {
    name: "Pavan",
    department: "Ph.D. Scholar, CSE",
    image: "/assets/team/pavan.png",
  },
];
