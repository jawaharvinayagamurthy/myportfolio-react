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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

// 4. Images (sorted alphabetically)
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

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
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
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
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        <strong className="text-stone-100">Innovative Engineer & Project Leader </strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        "Engineering AI-driven automated solutions, data science, and machine learning to power the future.”
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
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
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        As an <strong className="text-stone-100">SDET</strong>, I specialize in creating automated test frameworks,
        ensuring that software applications, firmware, and enterprise systems meet rigorous quality standards. My focus
        spans across functional, security, and performance testing, where I integrate automation to streamline the
        testing process and improve efficiency. With a deep understanding of cybersecurity principles, I also ensure
        that products are not only functional but secure, safeguarding against vulnerabilities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        In <strong className="text-stone-100">Project and Program Management</strong>, I lead cross-functional teams to
        successfully deliver complex projects from initiation through execution, ensuring alignment between development,
        testing, and security. My leadership emphasizes efficient task delegation, resource management, and seamless
        coordination among stakeholders. With a strong blend of technical expertise and organizational skills, I
        consistently manage risks, timelines, and expectations to deliver secure, high-quality software solutions. By
        integrating strategic oversight with communication, I ensure that projects are completed on time, within budget,
        and meet all technical and business requirements.
      </p>
    </>
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
    {label: 'Specialization', text: 'SDET, Project/Program Manager', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Texas', Icon: AcademicCapIcon},
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
        name: 'Tools - Selenium/Appium/Cucumber',
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
      {
        name: 'BrowserStack/LambdaTest',
        level: 9,
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
    name: 'Cloud Computing',
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
    description: 'This is a description of the recent work.'
  },
  {
    title: 'Gaming and Internet Services',
    image: porfolioImage2,
    description: 'This is a description of the recent work.'
  },
  {
    title: 'Router Development and Testing',
    image: porfolioImage3,
    description: 'This is a description of the recent work.'
  },
  {
    title: 'Central Office Engineering and CDMA Network',
    image: porfolioImage4,
    description: 'This is a description of the recent work.'
  },
  {
    title: 'Network Management and VoIP System and Applications',
    image: porfolioImage5,
    description: 'This is a description of the recent work.'
  },
  {
    title: 'Voicemail Management and Network Protocols',
    image: porfolioImage6,
    description: 'This is a description of the recent work.'
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
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'May 1990',
    location: 'University of Madras, Chennai, India',
    title: 'B.E. Electronics and Communication',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2014 - Present',
    location: 'California, USA',
    title: 'Senior SDET / Test Architect and Manager',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Jan 2014 - Dec 2014',
    location: 'California, USA',
    title: 'SDET - Firmware and Application',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
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
      type: ContactType.Instagram,
      text: '@jawaharvinayagamurthy',
      href: 'https://www.instagram.com/jawaharvinayagamurthy/',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jawaharvinayagamurthy'},
];
