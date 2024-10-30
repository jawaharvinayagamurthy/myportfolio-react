import React, {FC, memo} from 'react';

const RecentWork: FC = memo(() => (
    <div className="three-column-layout">
        <div>
        <h3 className="font-bold">Testing Application</h3>
        <ul className="bullet-list-disc">
          <li>Established testing processes for enterprise software management.</li>
          <li>Developed test strategies and executed plans, improving test coverage by 90%.</li>
          <li>Implemented automated testing across Android, iOS, AR wearables, and web platforms using Python, JavaScript, and Selenium.</li>
          <li>Conducted automated API testing with curl scripts, Groovy, and Postman.</li>
          <li>Integrated BrowserStack, LambdaTest, and TestNG for enhanced device coverage.</li>
          <li>Streamlined CI/CD with Jenkins for daily and release-based test runs.</li>
          <li>Created automated frameworks using Postman and RestAssured for efficient API validation.</li>
          <li>Optimized SQL queries, improving execution times and database performance.</li>
          <li>Developed automated test scripts with Cucumber and TestNG for mobile and web applications.</li>
          <li>Conducted load, stress, scalability, and reliability testing using JMeter and LoadRunner.</li>
          <li>Designed scalable applications with Kubernetes and managed infrastructure with Terraform.</li>
          <li>Performed localization testing for 17 languages and generated reports.</li>
          <li>Conducted UI and usability testing for cross-platform applications.</li>
          <li>Improved bug management processes with JIRA and facilitated cross-team collaboration.</li>
          <li>Utilized Generative AI for automated test script generation based on user stories.</li>
        </ul>
        </div>
        <div>
        <h3 className="font-bold">Testing Firmware</h3>
        <ul className="bullet-list-disc">
          <li>Ported and integrated Android (AOSP) on Qualcomm and Nvidia Jetson hardware, debugging the Android Init process and Kernel modules.</li>
          <li>Resolved issues in TI Controller, Power Management, Wi-Fi, Bluetooth, Display, Camera, Audio/Video, Voice, Gesture, Controllers, and Sensors for Android OS.</li>
          <li>Implemented interface logic between EPU and HMD controllers via Type C USB and conducted board-level boot-up testing to debug functional issues.</li>
          <li>Developed a Python application for functional testing of display, camera, and gesture features, while validating microprocessor and sensor integration in smart glasses.</li>
          <li>Verified Bluetooth and Wi-Fi communication interfaces for reliable connectivity, and optimized power efficiency and thermal management of silicon components to extend battery life.</li>
          <li>Assessed display timing, signal integrity, and optics performance to ensure low-latency visual output across varying lighting conditions.</li>
          <li>Conducted penetration testing and security audits for compliance with OWASP and GDPR, executing both manual and automated security tests focusing on authentication and data encryption.</li>
          <li>Developed and tested firmware for embedded systems under stress conditions and implemented automated firmware burning processes to streamline production workflows.</li>
        </ul>
        </div>
        <div>
        <h3 className="font-bold">Project Management</h3>
        <ul className="bullet-list-disc">
          <li>Developed and tracked project plans and risk management strategies for enterprise application development.</li>
          <li>Contributed to requirements and design reviews, ensuring alignment with project goals.</li>
          <li>Maintained knowledge of Application Rules System for user access, security, and configuration policies.</li>
          <li>Oversaw Technical Management Service Desk to address production issues.</li>
          <li>Managed front-end development, focusing on user-friendly interfaces for web and mobile applications.</li>
          <li>Leveraged AWS for robust application development, emphasizing Big Data and Data Security.</li>
          <li>Engaged with business partners to align with objectives and updated IT leadership on activities.</li>
          <li>Coordinated with IT units (Backend, Web, Operations) to ensure system consistency.</li>
          <li>Managed local and offshore teams of 10 engineers to deliver quality products on time and within budget.</li>
        </ul>
        </div>
    </div>
));

const GamingandInternetServices: FC = memo(() => (
    <div>
        <h3 className="font-bold">Development and Testing</h3>
        <ul className="bullet-list-disc">
          <li>Implemented both white box and black box testing that contributed to the overall reliability and performance of gaming products and Internet services.</li>
          <li>Conducted rigorous automated testing and logged bugs for gaming consoles and controllers, contributing to the enhancement of product quality using Python and shell scripts.</li>
          <li>Developed automation framework streamlining the testing process, improving efficiency and reducing manual test effort.</li>
          <li>Monitored spam emails on production servers and formulated rules using regex to prevent spam, testing these filters before loading them into production environments that helped maintain the integrity of production environments and enhanced user security using Python and shell scripts.</li>
        </ul>
      </div>
));

const RouterandNetworkProtocols: FC = memo(() => (
    <div>
        <h3 className="font-bold">Development and Testing</h3>
        <ul className="bullet-list-disc">
          <li>Led firmware porting to Linux and RTOS platforms, ensuring compatibility and functionality.</li>
          <li>Conducted comprehensive testing of firmware across various environments, identifying and resolving bugs to optimize performance.</li>
          <li>Developed application wrappers for router interfaces, including LAN/WAN, TR-069, TR-104, and QoS components.</li>
          <li>Created interface communication components between layers 1, 2, and 3 for eNodeB using C/C++.</li>
          <li>Designed and executed test strategies, enhancing product reliability and functionality.</li>
          <li>Developed factory test systems to ensure efficient quality control during production.</li>
          <li>Managed teams of up to 15 engineers, streamlining product development, delivery, and deployment processes.</li>
          <li>Enhanced applications for DSL routers, access points, and VoIP gateways, using C/C++ and multithreading on Linux.</li>
        </ul>
    </div>
));

const COEandCDMANetwork: FC = memo(() => (
    <div>
        <h3 className="font-bold">Development and Testing</h3>
        <ul className="bullet-list-disc">
          <li>Enhanced and maintained applications for Carrier Distribution System (CDS) and GPS components in CDMA networks.</li>
          <li>Managed bug fixes, feature enhancements, and testing for application download server, location-based server, transaction manager, billing systems, and carrier transaction systems.</li>
          <li>Upgraded BREW components, including Application Download Server, Carrier Transaction Manager, and 1x EVDO system.</li>
          <li>Installed and upgraded location-based server (GIS) and mediaFLO systems in CDMA networks.</li>
          <li>Tested change requests for bug fixes and enhancements in pre-production environments.</li>
          <li>Developed and maintained applications and tools for monitoring and managing central office equipment.</li>
          <li>Enhanced features for COEP Web Interface, COE TSF, COE COPS, and COE D&E components, ensuring seamless network integration.</li>
          <li>Provided technical support, bug fixes, and testing for central office applications.</li>
        </ul>
    </div>
));

const NetworkManagementandVoIP: FC = memo(() => (
    <div>
        <h3 className="font-bold">Development and Testing</h3>
        <ul className="bullet-list-disc">
          <li>Ported and integrated stock portfolio application.</li>
          <li>Developed NMS modules to support COPS protocols for dynamic QoS policy management in VoIP applications.</li>
          <li>Implemented data collection mechanisms to gather VoIP performance metrics, analyze traffic, and optimize QoS policies.</li>
          <li>Developed a policy engine within NMS for interpreting COPS messages and enforcing network policies.</li>
          <li>Integrated VoIP monitoring and configuration into NMS, enhancing QoS management and troubleshooting.</li>
          <li>Conducted regression testing to validate seamless NMS, COPS, and VoIP system integration.</li>
          <li>Developed directory services applications (white/yellow pages) for WEB, WAP, SMS, and portal users.</li>
          <li>Created front-end for wireless devices using micro-browsers for internet access.</li>
          <li>Tested protocol layers in the WAP stack for functionality and integration.</li>
        </ul>
    </div>
));

const VoicemailManagementandNetwork : FC = memo(() => (
    <div>
        <h3 className="font-bold">Development and Testing</h3>
        <ul className="bullet-list-disc">
          <li>Developed interfaces, APIs, and voicemail notification protocols for seamless VMS integration with backbone telecom switch servers.</li>
          <li>Integrated HLR functionalities into switch servers for subscriber profile management, authentication, and location tracking using MAP signaling.</li>
          <li>Designed and implemented APIs for VMS, HLR, and Voicemail Simulator integration, ensuring synchronization with telecom switch servers.</li>
          <li>Developed a VoiceMail Simulator tool to validate system performance under various conditions and scenarios.</li>
          <li>Conducted comprehensive functional, performance, and scalability testing for the integrated system.</li>
          <li>Developed and tested ISDN applications and products, porting Japanese OKI switches to Euro ISDN standards.</li>
          <li>Designed and implemented data link layer protocols like Ethernet MAC, VLAN, and PPP, optimizing for high-performance network communication.</li>
          <li>Developed network layer protocols (IP, MPLS, OSPF, BGP) for efficient data routing, ensuring protocol scalability and security.</li>
        </ul>
    </div>
));

const AboutMe : FC = memo(() => (
  <div className="text-stone-100 text-justify" style={{fontSize: '16px'}}>
      <p>
        In <strong className="text-stone-100">Testing and Automation</strong>, I am dedicated to elevating quality 
        engineering through the development of innovative testing frameworks that harmoniously integrate manual 
        and automated testing methodologies. With a strong foundation in functional, security, and performance 
        testing, I leverage cutting-edge AI-driven tools and ETL-based testing for data-centric applications, 
        ensuring not only flawless functionality but also the integrity and reliability of data. My commitment 
        to cybersecurity empowers me to safeguard products against vulnerabilities, ensuring that every application 
        I work on is not only high-performing but also resilient and secure.
      </p>
      <p>
        In <strong className="text-stone-100">Project and Program Management</strong>, I excel in transforming 
        complex challenges into streamlined successes. Leading cross-functional teams, I orchestrate project 
        lifecycles from inception to completion, ensuring seamless collaboration between development, testing, 
        and security. My leadership is characterized by strategic foresight, effective delegation, and a focus 
        on cultivating a collaborative culture that drives innovation. By adeptly managing risks, timelines, and 
        stakeholder expectations, I consistently deliver high-quality software solutions that not only meet but 
        exceed technical and business objectives. Through strategic communication and oversight, I ensure that 
        projects are completed on time, within budget, and achieve lasting impact.
      </p>
  </div>
));

export  {
    RecentWork, 
    GamingandInternetServices,
    RouterandNetworkProtocols,
    COEandCDMANetwork,
    NetworkManagementandVoIP,
    VoicemailManagementandNetwork,
    AboutMe
};