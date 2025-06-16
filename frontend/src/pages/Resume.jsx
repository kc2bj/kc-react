import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto px-4 py-10 font-sans"
    >
      {/* Contact & Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Kris Celeste</h1>
        <h2 className="text-xl text-yellow-800 font-semibold mb-2">Senior UI/UX Designer & Developer</h2>
      </div>

      {/* Professional Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 mt-10">Professional Summary</h3>
        <p className="text-gray-800 dark:text-gray-200">
          Senior UI/UX Designer with 6+ years of experience leading design for complex web applications and custom software solutions. Proven track record of collaborating with stakeholders to deliver user-centered solutions that drive business value. Demonstrated success in conducting user research, creating comprehensive design systems, and mentoring junior designers. Experienced in leading end-to-end UX processes while fostering collaborative partnerships with clients and development teams.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 mt-10">Experience</h3>
        {/* UVA ITS-CACS */}
        <div className="mb-8">
          <div className="font-bold">UVA ITS-CACS <span className="font-normal">/ UX/UI Designer and Web Developer</span></div>
          <div className="pl-4 border-l-4 border-yellow-800 mt-1">
            <div className="text-gray-700 text-sm mb-1 mt-1 dark:text-gray-400">Charlottesville, VA • DEC 2018 – PRESENT</div>
            <div className="mb-2 text-gray-800 dark:text-gray-200">Led UX design initiatives for complex enterprise applications, delivering user-centered solutions that enhanced operational efficiency and user satisfaction.</div>
            <div className="font-semibold mt-3 mb-1">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm mb-3 ml-4">
              <li>Spearheaded UI design for UVA's first generative AI solution (UVA Chat+), leading research, prototyping, and implementation phases</li>
              <li>Generated ~$100,000 in additional revenue through strategic UI/UX service improvements and optimizations during the 2023-2024 fiscal year for CACS</li>
              <li>Led the implementation of design systems and component libraries, improving design consistency and development efficiency for the Vice President for Research's websites</li>
              <li>Conducted comprehensive user research and usability testing, resulting in measurable improvements in user satisfaction and task completion rates for UVA's Claude Moore Health Sciences Library</li>
            </ul>
            <div className="font-semibold mt-4 mb-1">Core Responsibilities:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm ml-4">
              <li>Lead end-to-end UX design processes for complex web applications, from discovery through implementation</li>
              <li>Mentor junior developers and designers, fostering a culture of continuous learning and design excellence</li>
              <li>Collaborate with stakeholders to gather requirements and implement solutions that meet business objectives</li>
              <li>Champion accessibility standards and responsive design principles across all projects</li>
              <li>Provide technical leadership for Drupal CMS projects, ensuring alignment with UX best practices</li>
            </ul>
          </div>
        </div>
        {/* Crutchfield Corporation */}
        <div className="mb-8">
          <div className="font-bold">Crutchfield Corporation <span className="font-normal">/ UX Designer</span></div>
          <div className="pl-4 border-l-4 border-yellow-800 mt-1">
            <div className="text-gray-700 text-sm mb-1 mt-1 dark:text-gray-400">Charlottesville, VA • DEC 2017 – NOV 2018</div>
            <div className="mb-2 text-gray-800 dark:text-gray-200">Conducted in-depth user led UX design initiatives for Crutchfield's e-commerce platform, focusing on improving customer experience and conversion rates.</div>
            <div className="font-semibold mt-3 mb-1">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm mb-3 ml-4">
              <li>Redesigned key user journeys resulting in improved conversion rates and reduced bounce rates</li>
              <li>Implemented data-driven A/B testing program to optimize user experiences</li>
              <li>Created comprehensive design system to ensure consistency across platform</li>
              <li>Led cross-functional collaboration between product, development, and marketing teams</li>
            </ul>
            <div className="font-semibold mt-4 mb-1">Core Responsibilities:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm ml-4">
              <li>Conducted in-depth user research to identify customer needs and pain points</li>
              <li>Created user flows, wireframes, and high-fidelity prototypes</li>
              <li>Implemented and analyzed user testing sessions</li>
              <li>Developed and maintained design documentation and specifications</li>
            </ul>
          </div>
        </div>
        {/* UVA Information Security */}
        <div className="mb-8">
          <div className="font-bold">UVA Information Security <span className="font-normal">/ Communications Specialist</span></div>
          <div className="pl-4 border-l-4 border-yellow-800 mt-1">
            <div className="text-gray-700 text-sm mb-1 mt-1 dark:text-gray-400">Charlottesville, VA • 2016 – 2017</div>
            <div className="mb-2 text-gray-800 dark:text-gray-200">Led digital communications and web presence for UVA's Information Security division, focusing on translating complex cybersecurity concepts into accessible content for the university community. Managed comprehensive communication strategies while collaborating with technical teams to ensure accurate and engaging content delivery.</div>
            <div className="font-semibold mt-3 mb-1">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm mb-3 ml-4">
              <li>Designed and launched new Information Security website improving user engagement</li>
              <li>Led creation of cybersecurity awareness campaign reaching 40,000+ university members</li>
              <li>Streamlined communication processes reducing project delivery time</li>
            </ul>
            <div className="font-semibold mt-4 mb-1">Core Responsibilities:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm ml-4">
              <li>Managed end-to-end website redesign using HTML, CSS, and UX best practices</li>
              <li>Created and implemented comprehensive communication strategies</li>
              <li>Produced multimedia content including videos, graphics, and digital materials</li>
              <li>Collaborated with IT teams to translate technical content for general audiences</li>
            </ul>
          </div>
        </div>
        {/* GMU Orientation & Family Programs */}
        <div className="mb-8">
          <div className="font-bold">George Mason University Orientation & Family Programs <span className="font-normal">/ Communications Officer</span></div>
          <div className="pl-4 border-l-4 border-yellow-800 mt-1">
            <div className="text-gray-700 text-sm mb-1 mt-1 dark:text-gray-400">Fairfax, VA • 2014 – 2016</div>
            <div className="mb-2 text-gray-800 dark:text-gray-200">Directed digital strategy and team management for GMU's Orientation & Family Programs, overseeing all aspects of print and digital communications. Led creative direction while maintaining consistent branding and messaging across multiple platforms and initiatives.</div>
            <div className="font-semibold mt-3 mb-1">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm mb-3 ml-4">
              <li>Increased social media engagement through strategic content planning</li>
              <li>Reduced print costs through digital transformation initiatives</li>
              <li>Successfully managed redesign of Orientation Guide improving student engagement and feedback</li>
            </ul>
            <div className="font-semibold mt-4 mb-1">Core Responsibilities:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm ml-4">
              <li>Led team of designers and content creators for orientation and family engagement communications</li>
              <li>Managed digital presence including websites and social media platforms</li>
              <li>Developed and implemented strategic communication plans</li>
              <li>Coordinated with multiple departments for integrated marketing efforts</li>
            </ul>
          </div>
        </div>
        {/* Freelance Graphic Designer & Marketing Communications Consultant */}
        <div className="mb-8">
          <div className="font-bold">Freelance Graphic Designer & Marketing Communications Consultant <span className="font-normal">/ Northern Virginia & Central Virginia</span></div>
          <div className="pl-4 border-l-4 border-yellow-800 mt-1">
            <div className="text-gray-700 text-sm mb-1 mt-1 dark:text-gray-400">2008 – 2017</div>
            <div className="mb-2 text-gray-800 dark:text-gray-200">Provided comprehensive design services for diverse clients across Virginia, specializing in brand development, responsive web design, and digital marketing solutions. Built long-term client relationships while delivering high-quality design solutions that met business objectives.</div>
            <div className="font-semibold mt-3 mb-1">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm mb-3 ml-4">
              <li>Designed and launched 15+ responsive websites</li>
              <li>Created brand identities for 20+ small businesses</li>
              <li>Developed digital marketing strategies for local organizations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 mt-10">Education & Certifications</h3>
        <div className="mb-2">
          <span className="font-bold">George Mason University</span> / BA<br />
          <span className="text-gray-700 text-sm dark:text-gray-400">2006 - 2010</span><br />
          <span className="text-gray-800 text-sm">Art & Visual Technology w/ Minor in Multimedia</span>
        </div>
        <div>
          <span className="font-bold">MIT CSAIL</span> / Online 6-Week Course<br />
          <span className="text-gray-800 text-sm">Certificate in Human-Computer Interaction for User Experience Design</span><br />
          <span className="text-gray-700 text-sm dark:text-gray-400">Nov 2024</span>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 mt-10">Core Competencies</h3>
        <div className="mb-2">
          <span className="font-bold">Design Leadership & Methods:</span> <span className="text-gray-800 dark:text-gray-200">User Experience (UX) Design • User Research & Usability Testing • Wireframing & Prototyping • Information Architecture • Design System Development • A/B Testing & Analytics</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Technical Skills:</span> <span className="text-gray-800 dark:text-gray-200">Frontend Development (TypeScript, JavaScript, CSS, HTML) • CMS Platforms (Drupal, WordPress) • Responsive Web Design • Accessibility Standards</span>
        </div>
        <div>
          <span className="font-bold">Tools & Platforms:</span> <span className="text-gray-800 dark:text-gray-200">Design Tools: Figma, Adobe Creative Suite • Project Management: Jira, Confluence, Trello • Development Tools: Git, VS Code • Analytics Platforms</span>
        </div>
      </section>

      {/* LinkedIn Button */}
      <div className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/krisceleste/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View LinkedIn Profile
        </a>
      </div>
    </motion.div>
  );
};

export default Resume; 