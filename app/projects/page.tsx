'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  const projects = projectsData as Project[];
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Get all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === 'all') {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
  }, [projects, selectedTech]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of projects I've built using modern technologies
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-8 flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <label
              htmlFor="tech-filter"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Filter by Technology:
            </label>
            <select
              id="tech-filter"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects found with the selected technology.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

