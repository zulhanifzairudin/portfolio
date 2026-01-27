export default function Home() {
  const techStack = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'SQL',
    'JavaScript',
    'Java',
    'C',
    'Python',
    'PHP',
    'C#',
    'HTML & CSS',
    '.NET',
    'ASP.NET',
    'TypeScript',
    'Git',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zulhanif Zairudin
            </span>
          </h1>
          <p className="mb-8 text-xl leading-8 text-gray-600 dark:text-gray-300">
          An aspiring computer science graduate learning frontend and backend development, 
          with a strong interest in building real-world applications and understanding 
          industry best practices. I enjoy solving problems and writing clean, 
          maintainable code.
          </p>
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:shadow-md dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="https://github.com/zulhanifzairudin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
