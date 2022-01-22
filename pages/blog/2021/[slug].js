import Head from 'next/head';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { displayDate } from 'lib/displayDate';
import { markdownToHtml } from 'lib/markdownToHtml';

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}

export default function Post({ post }) {
	return (
		<>
			<Head>
				<title>{post.title} | FOSS Overflow</title>
			</Head>
			<article className="prose lg:prose-xl mx-auto mt-12 px-4">
				<h1>{post.title}</h1>
				<p className="text-gray-700">
					{post.author && <>by {post.author}</>}
					{' — '}
					{displayDate(post.date)}
				</p>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</article>
		</>
	);
}
