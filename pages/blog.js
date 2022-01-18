import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '../lib/api';
import { displayDate } from '../lib/displayDate';

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'author']);

	return {
		props: { allPosts },
	};
}

export default function Blog({ allPosts }) {
	return (
		<>
			<Head>
				<title>Blog | FOSS Overflow</title>
			</Head>

			<div className="max-w-screen-md m-auto cursor-pointer">
				<ul>
					{allPosts.map(post => (
						<li key={post.slug}>
							<Link
								href="/blog/2021/[slug]"
								as={`/blog/2021/${post.slug}`}
								passHref
							>
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
