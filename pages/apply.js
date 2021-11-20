import Head from 'next/head';

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
						organizing team while drafting their proposal.
					</li>
				</ul>

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
