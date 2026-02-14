import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 font-sans"
    >
      {/* Header: name + headline */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-espresso-cream">
          Kris Celeste
        </h1>
        <p className="text-lg text-espresso-leaf dark:text-espresso-leaf font-semibold mt-1 mb-2">
          UX Engineer · Technical Lead–Level Problem Solver · Drupal & Cloud Architecture · Founder, iAM Group, LLC
        </p>
        <p className="text-sm text-neutral-600 dark:text-espresso-muted">
          UI/UX Designer & Web Developer at UVA Information Technology Services · Charlottesville, Virginia
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        {/* Left: Summary + Experience (2/3) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-espresso-cream border-b border-neutral-200 dark:border-neutral-700 pb-2">
              Professional Summary
            </h2>
            <p className="text-neutral-700 dark:text-espresso-cream/90 leading-relaxed">
              For me, UX is equal parts design, engineering, and humanity. I've spent 15+ years leading design and development for complex systems—from enterprise applications to generative AI products. I combine user research, design systems, and production-ready frontend architecture to deliver solutions that scale and stay accessible.
            </p>
            <p className="text-sm text-neutral-500 dark:text-espresso-muted mt-2">
              Total experience: 16+ years
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-espresso-cream border-b border-neutral-200 dark:border-neutral-700 pb-2">
              Experience
            </h2>

            {/* UVA ITS - Current */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                UVA Information Technology Services (UVA ITS)
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / UI/UX Designer & Web Developer</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Dec 2018 – Present · Charlottesville, VA</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3 space-y-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  Led UX design initiatives for complex enterprise applications, delivering user-centered solutions that enhanced operational efficiency and user satisfaction.
                </p>
                <div>
                  <span className="font-semibold text-neutral-800 dark:text-espresso-cream text-sm">Design:</span>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm mt-1 space-y-0.5 ml-2">
                    <li>Led UX/UI design for UVA's first generative AI solution (UVA Chat+)</li>
                    <li>Conducted comprehensive user research and usability testing</li>
                    <li>Created and maintained design systems and component libraries</li>
                    <li>Generated ~$100k revenue through UX/UI improvements</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 dark:text-espresso-cream text-sm">Development:</span>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm mt-1 space-y-0.5 ml-2">
                    <li>Implemented responsive frontend architecture using TypeScript</li>
                    <li>Built reusable component libraries in multiple frameworks</li>
                    <li>Developed accessible HTML/CSS frameworks</li>
                    <li>Built and managed Drupal applications</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 dark:text-espresso-cream text-sm">Core responsibilities:</span>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm mt-1 space-y-0.5 ml-2">
                    <li>Lead end-to-end UX design processes</li>
                    <li>Develop frontend architecture and implementations</li>
                    <li>Write production-ready HTML, CSS, and JavaScript</li>
                    <li>Mentor junior developers</li>
                    <li>Champion accessibility standards and responsive design</li>
                    <li>Provide technical leadership for Drupal CMS projects</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 dark:text-espresso-cream text-sm">Recognition:</span>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm mt-1 space-y-0.5 ml-2">
                    <li>Culture Ambassador for UVA ITS, representing the Custom Applications team (2-year term, 2025–2026)</li>
                    <li>Nominee for the UVA ITS Award for Continuous Innovation, 2025</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Crutchfield */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                Crutchfield Corporation
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / UX Designer</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Dec 2017 – Nov 2018</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  UX design for e-commerce, focusing on customer experience and conversion. Design · Specialist level.
                </p>
              </div>
            </div>

            {/* UVA ITS - Communications */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                UVA Information Technology Services
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Communications Specialist</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Nov 2016 – Nov 2017 · Charlottesville, VA</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3 space-y-2">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  Led digital communications and web presence for UVA's Information Security division, translating complex cybersecurity concepts into accessible content for the university community.
                </p>
                <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm space-y-0.5 ml-2">
                  <li>Designed and launched new Information Security website improving user engagement</li>
                  <li>Led cybersecurity awareness campaign reaching 40,000+ university members</li>
                  <li>Streamlined communication processes reducing project delivery time</li>
                </ul>
              </div>
            </div>

            {/* GMU Communications Officer */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                George Mason University
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Communications Officer</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Oct 2014 – Oct 2016</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  Marketing · Specialist level. Digital strategy and communications for orientation and family programs.
                </p>
              </div>
            </div>

            {/* Freelance */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                Self-Employed
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Freelance Graphic Designer & Marketing Communications Consultant</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Jul 2008 – Oct 2017</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3 space-y-2">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  Comprehensive design services across Virginia: brand development, responsive web design, and digital marketing. Built long-term client relationships and met business objectives.
                </p>
                <ul className="list-disc list-inside text-neutral-700 dark:text-espresso-cream/90 text-sm space-y-0.5 ml-2">
                  <li>Designed and launched 15+ responsive websites</li>
                  <li>Created brand identities for 20+ small businesses</li>
                  <li>Developed digital marketing strategies for local organizations</li>
                </ul>
              </div>
            </div>

            {/* Centerpointe Church */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                Centerpointe Church at Fair Oaks
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Communications Director</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Aug 2011 – Sep 2014</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">
                  Marketing · Director level.
                </p>
              </div>
            </div>

            {/* Outside the Lab */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                Outside the Lab
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Graphic Designer</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Apr 2009 – Aug 2010</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">Design · Specialist level.</p>
              </div>
            </div>

            {/* GMU Graphic Designer */}
            <div className="mb-8">
              <div className="font-bold text-neutral-900 dark:text-espresso-cream">
                George Mason University
                <span className="font-normal text-neutral-700 dark:text-espresso-cream/90"> / Graphic Designer</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-espresso-muted mt-0.5">Jun 2008 – Aug 2010</div>
              <div className="pl-4 border-l-4 border-espresso-leaf dark:border-espresso-leaf mt-3">
                <p className="text-neutral-700 dark:text-espresso-cream/90 text-sm">Design · Specialist level.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Education, Certifications, Skills (1/3) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-espresso-cream border-b border-neutral-200 dark:border-neutral-700 pb-2">
              Education
            </h2>
            <div>
              <div className="font-bold text-neutral-900 dark:text-espresso-cream text-sm">
                George Mason University
              </div>
              <div className="text-neutral-700 dark:text-espresso-cream/90 text-sm mt-0.5">
                Bachelor of Arts (BA), Design · Minor in Multimedia Design, Art and Visual Technology
              </div>
              <div className="text-neutral-500 dark:text-espresso-muted text-xs mt-1">
                2005 – 2010 · Fairfax, VA
              </div>
            </div>
          </section>

          {/* Licenses & Certifications */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-espresso-cream border-b border-neutral-200 dark:border-neutral-700 pb-2">
              Licenses & Certifications
            </h2>
            <div>
              <div className="font-bold text-neutral-900 dark:text-espresso-cream text-sm">
                Human-Computer Interaction (HCI) for User Experience Design
              </div>
              <div className="text-neutral-700 dark:text-espresso-cream/90 text-sm mt-0.5">
                MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)
              </div>
              <div className="text-neutral-500 dark:text-espresso-muted text-xs mt-1">
                Issued Nov 2024
              </div>
              <a
                href="https://mitcsail.credential.getsmarter.com/963c43ed-6621-4e17-8866-856b7b850b22?trk=public_profile_certification-title"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-espresso-leaf dark:text-espresso-leaf hover:underline"
              >
                View certificate
              </a>
            </div>
          </section>

          {/* Skills / Core competencies */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-espresso-cream border-b border-neutral-200 dark:border-neutral-700 pb-2">
              Skills
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-neutral-800 dark:text-espresso-cream">Design & UX:</span>
                <p className="text-neutral-700 dark:text-espresso-cream/90 mt-0.5">
                  UX design · UI design · User research · Usability testing · Design systems · Responsive design · Accessibility
                </p>
              </div>
              <div>
                <span className="font-semibold text-neutral-800 dark:text-espresso-cream">Technical:</span>
                <p className="text-neutral-700 dark:text-espresso-cream/90 mt-0.5">
                  TypeScript · JavaScript · HTML · CSS · Drupal · CMS · Frontend architecture · Technical leadership
                </p>
              </div>
              <div>
                <span className="font-semibold text-neutral-800 dark:text-espresso-cream">Other:</span>
                <p className="text-neutral-700 dark:text-espresso-cream/90 mt-0.5">
                  Communications · Digital marketing · Brand development · Project delivery · Best practices
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* LinkedIn CTA */}
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center">
        <a
          href="https://www.linkedin.com/in/krisceleste"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-espresso-leaf px-6 py-3 text-white font-medium no-underline hover:opacity-90 transition"
        >
          View full profile on LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;
