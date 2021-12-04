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
						The participants should write a maximum of 3 proposals for the
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
				</ul>

				<div className="mx-auto max-w-max">
					<Link href="https://discord.gg/NavkU8fw" passHref>
						<a className="mx-auto w-max block bg-blue-700 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-blue-800 ring-offset-2 my-5 mx-5">
							Join Discord
						</a>
					</Link>
				</div>

				<iframe
					className="mx-auto"
					src="https://docs.google.com/forms/d/e/1FAIpQLSfI3O9Tqs4b1IA5PaVWGTTtw5GEvzuitEw8Xmq5Yme-wEDRLQ/viewform?embedded=true"
					width="100%"
					height="1780"
				>
					Loading…
				</iframe>
			</div>
		</>
	);
}
