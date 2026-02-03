import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Muhammad Zulhanif Zairudin
          </h1>
        </div>

        {/* Contact Information */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Contact Information</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+60143924292" className="hover:text-blue-400 transition-colors">
                (+60) 143924292
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <a href="mailto:muhammadzulhanif0802@gmail.com" className="hover:text-blue-400 transition-colors">
                muhammadzulhanif0802@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/zulhanif-zairudin-852942220/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://portfolio-blue-iota-85.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Portfolio
            </a>
            <a
              href="https://github.com/zulhanifzairudin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Academic */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Academic</h2>
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                <span className="text-sm text-gray-400">October 2022 - July 2025</span>
              </div>
              <p className="mb-3 text-gray-300">Lancaster University, United Kingdom</p>
              <p className="mb-3 text-sm text-gray-400">Relevant Modules: Software Development, Software Design, Databases, Operating Systems, Distributed Systems, Computer Networks, Artificial Intelligence, Security and Risk</p>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">International Baccalaureate Diploma Program (IBDP)</h3>
                <span className="text-sm text-gray-400">September 2020 - May 2022</span>
              </div>
              <p className="mb-3 text-gray-300">MARA College Banting</p>
              <p className="mb-3 text-sm text-gray-400"></p>
            </div>
          </div>
        </div>


        {/* Work Experience */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Technology Consultant Intern</h3>
                <span className="text-sm text-gray-400">July 2024 - August 2024</span>
              </div>
              <p className="mb-3 text-gray-300">Ernst and Young, Kuala Lumpur, Malaysia</p>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Contributed to the implementation and deployment of SAP-based e-invoicing systems for enterprise clients, supporting large-scale digital transformation of finance and invoice workflows.</li>
                <li>Designed and executed end-to-end system testing and user acceptance testing (UAT), ensuring functional correctness, data integrity, and regulatory compliance of SAP e-invoicing platforms.</li>
                <li>Built and maintained large-scale test datasets (1,000+ records) to simulate real-world invoicing scenarios (invoices, debit/credit notes and memos), validating edge cases and complex workflow behavior.</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Web Developer</h3>
                <span className="text-sm text-gray-400">July 2023 - September 2023</span>
              </div>
              <p className="mb-3 text-gray-300">Freelance, Remote</p>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Delivered a production-ready educational website for a primary school teacher, improving digital delivery of lesson content and increasing student engagement through interactive learning experiences.</li>
                <li>Translated user requirements into clear UI flows and interactive features, iterating with stakeholder feedback to refine usability and content structure.</li>
                <li>Engineered responsive, mobile-friendly interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and smooth performance.</li>
                <li>Took ownership of the full development lifecycle (requirements gathering, design, development, testing, deployment), meeting tight deadlines and maintaining high code quality.</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">IT Support & Marketing Intern</h3>
                <span className="text-sm text-gray-400">July 2023 - September 2023</span>
              </div>
              <p className="mb-3 text-gray-300">Talita Laptop, Penang, Malaysia</p>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Provided technical support and hardware upgrades for 50+ laptops, troubleshooting issues and improving system performance for customers.</li>
                <li>Designed promotional materials and engaged with 100+ customers, boosting product awareness and user experience.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Extracurricular Activities</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Google Kick Start 2020</h3>
              <p className="mb-2 text-sm text-gray-400">2020</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Participated in Google Kick Start 2020 coding competition and managed to get into round E.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Model United Nations Conference 2020</h3>
              <p className="mb-2 text-sm text-gray-400">2020</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Represented Mexico in the SOCHUM committee, collaborating with global delegates on social and humanitarian issues.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C', 'C#', 'JavaScript', 'TypeScript', 'PHP', 'SQL'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Frontend & Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Webflow', 'Lottie-web'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Backend & Full-Stack Development</h3>
              <div className="flex flex-wrap gap-2">
                {['ASP.NET Core', 'FastAPI', 'PHP', 'MySQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Game & GUI Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'Java Swing', 'Java2D'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Linux', 'VS Code', 'Visual Studio', 'SSMS'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Language</h3>
              <div className="flex flex-wrap gap-2">
                {['English (Fluent)', 'Malay (Fluent)'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Leadership Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white">Event Coordinator</h3>
                <span className="text-sm text-gray-400">October 2024 - December 2024</span>
              </div>
              <p className="mb-3 text-gray-300">Mini Malaysia (Lancaster University Malaysian Society), United Kingdom</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Coordinated and delegated team activities for an international cultural event, managing over 50 team members to showcase Malaysia's unique heritage, crafts, and traditions to a global audience.</li>
                <li>Organized and led planning meetings, event logistics, and stakeholder communication, ensuring seamless execution of activities, exhibitions, and cultural presentations attended by hundreds of international visitors.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteering Experience */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Volunteering Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white">Student Ambassador - Interactive Peers</h3>
                <span className="text-sm text-gray-400">February 2021 - February 2022</span>
              </div>
              <p className="mb-3 text-gray-300">MARA College Banting</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Supported 200+ students with inquiries on university applications, mental health, and wellbeing, providing guidance, resources, and follow-up to ensure effective peer support.</li>
                <li>Planned and executed 10+ workshops and speaker sessions, coordinating logistics, promotion, and scheduling to engage the student community and enhance learning and development programs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Projects</h2>
          <div className="space-y-8">
            <div>
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white mb-2">Portfolio Website</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                    <span key={tech} className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Designed and developed a portfolio website using Next.js and React, focusing on clean UI and smooth client-side navigation.</li>
                <li>Built UI components in React with a fast feedback loop during development, allowing quick testing and refinement of features.</li>
                <li>Built dynamic project pages using data from local JSON files, allowing new projects to be added by editing data instead of rewriting components.</li>
              </ul>
            </div>

            <div>
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white mb-2">Fynecta Landing - Webflow to Next.js Migration</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Webflow', 'Lottie Web'].map((tech) => (
                    <span key={tech} className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Migrated a production Webflow site into a modern Next.js application, preserving animations, layout structure, and multi-page navigation while improving maintainability and performance.</li>
                <li>Refactored static HTML/CSS into reusable React components with TypeScript, improving code organization, making the codebase cleaner and easier to update as new pages and features were added.</li>
                <li>Implemented client-side routing, asset optimization, and animation re-initialization (Lottie), ensuring smooth user experience and consistent behavior across pages and devices.</li>
              </ul>
            </div>

            <div>
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white mb-2">Payroll Management System</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['C#', '.NET', 'React', 'SQL Server', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                    <span key={tech} className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Enterprise-grade payroll management system built with .NET 8, React, and SQL Server, following Clean Architecture principles for maintainable and testable code.</li>
                <li>Handles employee CRUD, working day management, skills, and salary calculations including birthday bonuses, with full RESTful API and responsive frontend UI.</li>
                <li>Implements Dapper for data access, unit testing with xUnit, global exception handling, and Swagger/OpenAPI documentation for backend endpoints.</li>
              </ul>
            </div>

            <div>
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white mb-2">Book Library Management System</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['PHP', 'MySQL', 'HTML', 'CSS'].map((tech) => (
                    <span key={tech} className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Developed a full-stack, database-driven web application using PHP and MySQL to manage library records, implementing complete CRUD functionality for books and categories.</li>
                <li>Designed and implemented server-side validation and input sanitization to prevent common vulnerabilities (e.g., SQL injection, duplicate records), improving data integrity and application security.</li>
                <li>Implemented relational database design and SQL queries for common operations, improving data consistency and application performance.</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
            >
              View All Projects
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
