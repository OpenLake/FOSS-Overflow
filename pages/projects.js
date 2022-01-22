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
	return (
		<>
			<Head>
				<title>Projects | FOSS Overflow</title>
			</Head>
			<div className="grid md:grid-cols-2 gap-4 list-none max-w-screen-md mx-auto mt-8 mb-16 px-4">
				{projectData.map(item => (
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
