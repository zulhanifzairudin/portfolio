import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Project Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          The project you're looking for doesn't exist.
        </p>
        <Link
          href="/projects"
          className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

