import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import { getAllPosts } from '../lib/api';
import { displayDate } from '../lib/displayDate';

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'author']);

	return {
		props: { allPosts },
	};
}



export default function Blog({ allPosts }) {
    const years = allPosts.map(post => new Date(post.date).getFullYear());
    const uniqueYears = ['All', ...new Set(years)];

    const [selectedYear, setSelectedYear] = useState('All');

    const filteredPosts = selectedYear === 'All'
        ? allPosts
        : allPosts.filter(post => new Date(post.date).getFullYear() === parseInt(selectedYear));

    return (
        <>
			<Head>
				<title>Blog | FOSS Overflow</title>
			</Head>
			<div className='max-w-screen-md m-auto cursor-pointer'>

            <div className="flex gap-4">
                {uniqueYears.map(year => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`p-2 rounded-lg w-48 my-5 ${
                            year === selectedYear ? 'bg-blue-75 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <ul className="flex flex-col gap-4">
                {filteredPosts.map(post => (
                    <li key={post.slug}>
                        <Link href="/blog/2021/[slug]" as={`/blog/2021/${post.slug}`} passHref>
                            <a className="block shadow-sm bg-white p-4 rounded-lg text-xl">
                                {post.title}
                                <div className="text-gray-500 text-base">
                                    by {post.author} - {displayDate(post.date)}
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
			</div>
        </>
    );
}