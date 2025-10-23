import Head from 'next/head';
import Link from 'next/link';

export default function Apply() {
	return (
		<>
			<Head>
				<title>Apply | FOSS Overflow</title>
			</Head>
			<div className="prose lg:prose-xl mx-auto px-4 mt-8">
				<h4 className="text-gray-800">How to apply?</h4>
				<ul>
					<li>
						The participants should write a maximum of 2 proposals for the
						projects that they wish to be a part of.
					</li>
					<li>
						Proposals must include what the participant wants to implement and
						how they plan to achieve it.
					</li>
					<li>
						The participants are free to discuss with the project mentors or the
						organizing team via Discord while drafting their proposal.
					</li>
					<li>
						In case the below embedded form takes time to load, please click on
						the button &#39;Apply Now&#39;
					</li>
				</ul>

				<div className="mx-auto max-w-max">
					<a
						className="w-max block bg-blue-700 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-blue-800 ring-offset-2 my-5 mx-5"
						target="_blank"
						rel="noreferrer noopener"
						href="https://discord.gg/xPR5ZuGWP2"
					>
						Join Discord
					</a>
				</div>
				<div className="mx-auto max-w-max">
					<a
						className="w-max block bg-blue-700 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-blue-800 ring-offset-2 my-5 mx-5"
						target="_blank"
						rel="noreferrer noopener"
						href=""
					>
						Appilcations Open Soon
					</a>
				</div>

				{/* <iframe
					className="mx-auto"
					src="https://docs.google.com/forms/d/e/1FAIpQLSeRkV2KCC4Px-7Zd0em0Bv6mFu6Kar9geCbs1HujyudYa-v2A/viewform?embedded=true"
					width="100%"
					height="1780"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Loading…
				</iframe> */}
			</div>
		</>
	);
}
