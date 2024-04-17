import Netflix from "public/img/netflixProject.webp";
import OnlineStore from "public/img/onlineStoreProject.webp";

export const EducationHistory = [
  {
    yearsActive: "September 2021 - Present",
    university: "Indonesia University of Education",
    program: "Education of System and Information Technology",
    description:
      "Over the final two years of my college experience, I actively participated in diverse student organization initiatives, enhancing my knowledge and skills. As the vice-chairperson of student organization, I spearheaded numerous project endeavors, and I consistently delivered successful outcomes on various final projects.",
  },

  {
    yearsActive: "February 2024 - Present",
    university: " Bangkit Academy led by Google, GoTo, and Traveloka",
    program: "Cloud Computing",
    description:
      "Throughout this program, I delved into learning about cloud computing, encompassing fundamental concepts, architecture, and the application of cloud technology in business solutions. I actively engaged in ILT sessions and capstone projects designed to enhance my technical skills and strategic understanding in this field. Moreover, through Bangkit Academy, I learned about the significance of integrating cloud technology to support digital transformation and innovation across various industry sectors.",
  },

  {
    yearsActive: "June 2018 - June 2021",
    university: " Senior High School of 95, Jakarta",
    program: "Social Science",
    description:
      "During my three years at school, I was active in extracurricular activities and seized opportunities to develop my social skills. Academically, I managed to stay in the top 20% out of 350 students throughout my time in high school and even qualified for university through an invitation-based track (SNMPTN).",
  },
];

export const ProjectPortfolio = [
  {
    projectId: "Project01",
    projectName: "Netflix - UI",
    projectDescription:
      "This Netflix clone project focusing on its user interface. It uses Next.js for the frontend and Tailwind for styling to make the site look good and work well on all devices. Even though it doesn't have its own backend, it pulls in content using the TMDB API. With this, users can see movies, shows, and more in a design like Netflix.",
    projectUrl: "https://netflix-clone-with-next.vercel.app/",
    projectImage: Netflix,
    techStack: ["Next.js", "Tailwind"],
  },

  {
    projectId: "Project02",
    projectName: "Online Store - UI",
    projectDescription:
      "This online store project is entirely focused on frontend development. Utilizing React as the main framework and Tailwind for styling, the website is designed to deliver an optimal user experience across various devices. Even without a dedicated backend, the site efficiently showcases product catalogs, demonstrating smooth navigation and an appealing design for visitors.",
    projectUrl: "https://react-online-store-alpha.vercel.app/",
    projectImage: OnlineStore,
    techStack: ["React", "Tailwind"],
  },
];
