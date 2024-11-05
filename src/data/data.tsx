//data.tsx
// 1. React and core hooks/libraries
import {memo, useEffect, useState} from 'react';

// 2. Third-party libraries (sorted alphabetically)
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// 3. Custom components (sorted alphabetically)
import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';

// 4. Images (sorted alphabetically)
import heroImage from '../images/iam-sky.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial-sky.jpg';
//import testimonialImage from '../images/testimonial.webp';

// 5. Data definitions and types (sorted alphabetically)
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

// 6. Project Portfolio
import {
  RecentWork, 
  GamingandInternetServices,
  RouterandNetworkProtocols,
  COEandCDMANetwork,
  NetworkManagementandVoIP,
  VoicemailManagementandNetwork,
  AboutMe
} from '../components/Sections/ProjectWork'; 

// 6. Academics
import {
  MSCourseWork, 
  BECourseWork,
  CertificatePMP,
  CertificateData,
  CertificateCyber,
  CertificateAI
} from '../components/Sections/Education'; 

// 7. Experience
import { 
  Experience1,
  Experience10,
  Experience2,
  Experience3,
  Experience4,
  Experience5,
  Experience6,
  Experience7,
  Experience8,
  Experience9
 } from '../components/Sections/Experience';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio of Jawahar Vinayagamurthy',
  description: 'Innovative Engineer & Project Leader',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'overview',
  Contact: 'reachMe',
  Portfolio: 'projects',
  Resume: 'experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jawahar Vinayagamurthy`,
  description: (<>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        <strong className="text-gold">Innovative Engineer & Project Leader </strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify glow-text">
        "Engineering AI-driven automated solutions, data science, and machine learning to power the future.”
      </p></>
  ),
  actions: [
    {
      href: `/assets/resume.pdf`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    /*{
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },*/
  ],
};

/**
 * About section
 */
export const AboutComponent = memo(() => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null; // Skip rendering on the server to avoid hydration errors
  }
  return (
      <AboutMe/>
  );
});
export default AboutComponent;
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: <AboutComponent />, // Refer to the functional component to handle dynamic rendering
  aboutItems: [
    {label: 'Location', text: 'Mountain House, CA, USA', Icon: MapIcon},
    {label: 'Experience', text: '25 years', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Asian Indian', Icon: FlagIcon},
    {label: 'Specialization', text: 'Testing / Management', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Texas at San Antonio, USA', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'H1B Visa Type', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Test Technology Stack',
    skills: [
      {
        name: 'Web',
        level: 9,
      },
      {
        name: 'Mobile',
        level: 8,
      },
      {
        name: 'API',
        level: 8,
      },
      {
        name: 'Smart Glasses',
        level: 9,
      },
    ],
  },
  {
    name: 'Project Management Tools',
    skills: [
      {
        name: 'MS Project',
        level: 8,
      },
      {
        name: 'MS Visio',
        level: 6,
      },
      {
        name: 'JIRA',
        level: 8,
      },
      {
        name: 'Asana',
        level: 3,
      },
    ],
  },
  {
    name: 'Test Automation',
    skills: [
      {
        name: 'Scripts - Python/JavaScript/TypeScript/Shell',
        level: 7,
      },
      {
        name: 'Tools - Selenium/Appium/Cypress/Cucumber',
        level: 7,
      },
      {
        name: 'Framework - TestNG/JUnit/BDD',
        level: 6,
      },
      {
        name: 'API Testing - Postman/REST Assured',
        level: 6,
      },
      {
        name: 'Performance - JMeter/LoadRunner',
        level: 6,
      },
      {
        name: 'Test Management - TestRail/JIRA',
        level: 8,
      },
    ],
  },
  {
    name: 'Version Control and CI/CD',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'GitHub',
        level: 9,
      },
      {
        name: 'GitLab',
        level: 9,
      },
      {
        name: 'Jenkins',
        level: 9,
      },
      {
        name: 'Maven',
        level: 5,
      },
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      {
        name: 'SQL',
        level: 3,
      },
      {
        name: 'ETL',
        level: 3,
      },
      {
        name: 'Data Pipeline Tools - Apache/Airflow, AWS Glue',
        level: 2,
      },
      {
        name: 'Data Lakes - AWS S3',
        level: 2,
      },
    ],
  },
  {
    name: 'Cloud Computing and Test Tools',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'GCP',
        level: 5,
      },
      {
        name: 'MS Azure',
        level: 4,
      },
      {
        name: 'BrowserStack/LambdaTest',
        level: 9,
      },
    ],
  },
  {
    name: 'AI Engineering',
    skills: [
      {
        name: 'ML Basics - Regression/Classification/Clustering',
        level: 3,
      },
      {
        name: 'AI Concepts - ML/Deep Learning/Neural Networks',
        level: 3,
      },
      {
        name: 'Libraries - NumPy/Pandas/Scikit-Learn/TensorFlow/PyTorch',
        level: 3,
      },
      {
        name: 'Data Visualization - MatplotLib/Seaborn',
        level: 3,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Telugu',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 5,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Recent Work',
    image: porfolioImage1,
    description: <RecentWork />
  },
  {
    title: 'Gaming and Internet Services',
    image: porfolioImage2,
    description:<GamingandInternetServices />
  },
  {
    title: 'Router and Network Protocols',
    image: porfolioImage3,
    description: <RouterandNetworkProtocols/>
  },
  {
    title: 'Central Office Engineering and CDMA Network',
    image: porfolioImage4,
    description: <COEandCDMANetwork/>
  },
  {
    title: 'Network Management and VoIP System and Applications',
    image: porfolioImage5,
    description: <NetworkManagementandVoIP/>
  },
  {
    title: 'Voicemail Management and Network Protocols',
    image: porfolioImage6,
    description: <VoicemailManagementandNetwork/>
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 1995',
    location: 'University of Texas at San Antonio, TX, USA',
    title: 'M.S. Electrical Engineering',
    content: <MSCourseWork/>  
  },
  {
    date: 'May 1990',
    location: 'University of Madras, Chennai, India',
    title: 'B.E. Electronics and Communication',
    content: <BECourseWork/>
  },
];

export const certification: TimelineItem[] = [
  {
    date: 'April 2024',
    title: 'PMP Certification',
    location: '',
    content: <CertificatePMP/>
  },
  {
    date: 'June 2024',
    title: 'Data Engineering Professional Certification',
    location: '',
    content: <CertificateData/> 
  },
  {
    date: 'August 2024',
    title: 'Cybersecurity Analyst Professional Certification',
    location: '',
    content: <CertificateCyber/> 
  },
  {
    date: 'September 2024',
    title: 'AI Engineering Professional Certification',
    location: '',
    content: <CertificateAI/> 
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2014 - Present',
    location: 'California, USA',
    title: 'Senior SDET / Test Architect and Manager',
    content: <Experience1/>,
  },
  {
    date: 'Jan 2014 - Dec 2014',
    location: 'California, USA',
    title: 'SDET - Firmware and Application',
    content: <Experience2/>,
  },
  {
    date: 'Oct 2010 - Jan 2014',
    location: 'Bengaluru, India',
    title: 'Senior Project Manager',
    content: <Experience3/>,
  },
  {
    date: 'Jan 2006 - Sep 2010',
    location: 'Bengaluru, India',
    title: 'Senior Project Manager',
    content: <Experience4/>,

  },
  {
    date: 'Jan 2005 - Dec 2005',
    location: 'Mumbai, India',
    title: 'Technical Project Manager',
    content: <Experience5/>,

  },
  {
    date: 'Oct 2002 - Dec 2004',
    location: 'Chennai, India',
    title: 'Project Manager',
    content: <Experience6/>,

  },
  {
    date: 'April 2001 - Sep 2002',
    location: 'Chennai, India',
    title: 'Program Manager',
    content: <Experience7/>,

  },
  {
    date: 'Sep 1999 - March 2001',
    location: 'Chennai, India',
    title: 'Software Specialist',
    content: <Experience8/>,

  },
  {
    date: 'Aug 1997 - Aug 1999',
    location: 'Chennai, India',
    title: 'Software Engineer II',
    content: <Experience9/>,

  },
  {
    date: 'Sep 1995 - July 1997',
    location: 'Chennai, India',
    title: 'Software Engineer',
    content: <Experience10/>,

  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'From Manager',
      text: "Jawahar Vinayagamurthy's exceptional technical expertise and leadership have consistently delivered high-quality results on time, driving our team's success in complex projects.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'From Peer Colleague',
      text: 'Working alongside Jawahar Vinayagamurthy has been a learning experience, as his problem-solving skills and attention to detail continually raise the bar for our team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'From Customer',
      text: "Jawahar Vinayagamurthy's dedication to understanding our needs and delivering innovative solutions has significantly improved our operational efficiency and product quality.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'ReachMe',
  description: 'Connect with me for collaboration, opportunities, or to discuss my work!',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@jawaharvinayagamurthy',
      href: 'mailto:jawahar.vinayagamurthy@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mountain House, California, USA',
      href: 'https://www.google.ca/maps/place/Mountain-House,+CA,+USA/@37.74605,-121.54335,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: '@jawaharvinayagamurthy',
      href: 'https://www.linkedin.com/in/jawahar-vinayagamurthy-660770103/',
    },
    {
      type: ContactType.Github,
      text: 'jawaharvinayagamurthy',
      href: 'https://github.com/jawaharvinayagamurthy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jawaharvinayagamurthy'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jawahar-vinayagamurthy-660770103/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jawaharvinayagamurthy'},
];
