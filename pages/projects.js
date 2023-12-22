import { useState } from 'react';
import Head from 'next/head';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { projectData } from '../content/projects';

function ExternalLink({ href, children, useIcon = true }) {
	return (
		<a
			className="text-blue-500 hover:text-blue-700 inline-flex items-center gap-1"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children} {useIcon && <ExternalLinkIcon width="1rem" />}
		</a>
	);
}

function ListOfLinks({ links, children }) {
	if (!links) return null;
	return (
		<div className="flex gap-2 mt-2">
			<span className="text-base text-gray-800">{children} </span>
			{Object.keys(links).map(key => (
				<ExternalLink href={links[key]} key={key} useIcon={false}>
					{key}
				</ExternalLink>
			))}
		</div>
	);
}

export default function Projects() {
	
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedFilter, setSelectedFilter] = useState('');
  
	const filteredProjects = projectData.filter((item) => {
	  const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
	  const tagMatch = selectedFilter ? item.tags?.includes(selectedFilter) : true;
	  return titleMatch && tagMatch;
	});
  
	const handleSearchChange = (e) => {
	  setSearchTerm(e.target.value);
	};
  
	const handleFilterChange = (e) => {
	  setSelectedFilter(e.target.value);
	};
	return (
		<>
			<Head>
				<title>Projects | FOSS Overflow</title>
			</Head>
			<div className="grid md:grid-cols-2 gap-4 list-none max-w-screen-md mx-auto mt-8 mb-16 px-4">
				<div className="mb-4 relative">
					<input
					type="text"
					placeholder="Search by title..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
					/>
					{searchTerm && (
					<button
						onClick={() => setSearchTerm('')}
						className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
					>
						&#x2715;
					</button>
					)}
				</div>
				<div className="mb-8 text-center relative">
					<select
					value={selectedFilter}
					onChange={handleFilterChange}
					className="border border-gray-300 p-2 rounded-md w-full appearance-none focus:outline-none focus:border-blue-500 transition-all duration-300"
					>
						<option value="">Filter by Tag</option>
						<option value="">None</option>
						<option value="react">React</option>
						<option value="web">Web</option>
						<option value="android">Android</option>
						<option value="nodejs">Node.js</option>
						<option value="python">Python</option>
						<option value="django">Django</option>
						<option value="mysql">MySQL</option>
						<option value="javascript">Javascript</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M5 7l5 5 5-5z" />
						</svg>
					</div>
				</div>
				{filteredProjects.map(item => (
					<div
						href={item.url}
						target="_blank"
						key={item.title}
						className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-4 rounded-md"
					>
						<h2 className="text-lg lg:text-xl mb-2">{item.title}</h2>
						<p className="flex-1 text-base text-gray-800">{item.description}</p>
						<div className="flex gap-3 mt-2">
							{item.wiki && <ExternalLink href={item.wiki}>Wiki</ExternalLink>}
							{item.github && (
								<ExternalLink href={item.github}>GitHub</ExternalLink>
							)}
						</div>
						<ListOfLinks links={item.mentors}>Mentors:</ListOfLinks>
						<ListOfLinks links={item.students}>Students:</ListOfLinks>
						{item.tags?.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-2">
								{item.tags.map(tag => (
									<span
										key={tag}
										className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
									>
										{tag}
									</span>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}
