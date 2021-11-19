import Head from 'next/head';

export default function Apply() {
	return (
		<>
			<Head>
				<title>Apply | FOSS Overflow</title>
			</Head>
			<div className="prose lg:prose-xl mx-auto px-4">
				<h1 className="text-4xl mt-8">Apply</h1>

				<p>
					Students should write a proposal for a project they wish to be a part
					of. Each student may submit upto three proposals. Proposals must
					include what the student wants to implement and how they plan to
					achieve it. The students are free to discuss with the project mentors
					or organizing team while drafting their proposal. Ideal proposals
					should also include tentative implementation details and strategies to
					demonstrate that the applicant shall be able to achieve what they are
					claiming.
				</p>

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
