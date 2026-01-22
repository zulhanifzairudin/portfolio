// Color mapping for common technologies
const techColors: Record<string, { bg: string; text: string }> = {
  'Next.js': { bg: 'bg-black', text: 'text-white' },
  'React': { bg: 'bg-cyan-500', text: 'text-white' },
  'TypeScript': { bg: 'bg-blue-600', text: 'text-white' },
  'JavaScript': { bg: 'bg-yellow-400', text: 'text-black' },
  'Node.js': { bg: 'bg-green-600', text: 'text-white' },
  'Tailwind CSS': { bg: 'bg-sky-500', text: 'text-white' },
  'PostgreSQL': { bg: 'bg-blue-700', text: 'text-white' },
  'Firebase': { bg: 'bg-orange-500', text: 'text-white' },
  'Material-UI': { bg: 'bg-blue-500', text: 'text-white' },
  'Redux': { bg: 'bg-purple-600', text: 'text-white' },
  'Stripe': { bg: 'bg-indigo-600', text: 'text-white' },
  'Chart.js': { bg: 'bg-pink-500', text: 'text-white' },
  'OpenWeather API': { bg: 'bg-teal-500', text: 'text-white' },
};

// Fallback colors for unknown technologies
const fallbackColors = [
  { bg: 'bg-blue-100', text: 'text-blue-800', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-300' },
  { bg: 'bg-purple-100', text: 'text-purple-800', darkBg: 'dark:bg-purple-900/30', darkText: 'dark:text-purple-300' },
  { bg: 'bg-pink-100', text: 'text-pink-800', darkBg: 'dark:bg-pink-900/30', darkText: 'dark:text-pink-300' },
  { bg: 'bg-green-100', text: 'text-green-800', darkBg: 'dark:bg-green-900/30', darkText: 'dark:text-green-300' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800', darkBg: 'dark:bg-yellow-900/30', darkText: 'dark:text-yellow-300' },
  { bg: 'bg-indigo-100', text: 'text-indigo-800', darkBg: 'dark:bg-indigo-900/30', darkText: 'dark:text-indigo-300' },
  { bg: 'bg-red-100', text: 'text-red-800', darkBg: 'dark:bg-red-900/30', darkText: 'dark:text-red-300' },
  { bg: 'bg-teal-100', text: 'text-teal-800', darkBg: 'dark:bg-teal-900/30', darkText: 'dark:text-teal-300' },
];

export function getTechColor(tech: string): string {
  const color = techColors[tech];
  if (color) {
    return `${color.bg} ${color.text}`;
  }
  // Use hash-based selection for consistent colors
  const hash = tech.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const fallback = fallbackColors[hash % fallbackColors.length];
  return `${fallback.bg} ${fallback.text} ${fallback.darkBg} ${fallback.darkText}`;
}

