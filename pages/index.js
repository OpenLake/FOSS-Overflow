import { Timeline } from '../components/Timeline';
import { Card } from '../components/Card';
import Image from 'next/image';
import logoURL from '../public/logo.png';
import { UserGroupIcon } from '@heroicons/react/outline';
import { whyApplyData } from '../content/why-apply';

export default function Index() {
	return (
		<>
			<title>FOSS Overflow</title>

			<div className="min-h-screen flex flex-col justify-center text-center container m-auto max-w-prose px-4">
				<h1 className="text-4xl md:text-6xl mb-8 font-title">
					<Image src={logoURL} alt="FOSS Overflow" />
				</h1>
				<p className="text-2xl">
					A program by OpenLake that helps students understand the paradigm of
					Open Source contribution and gives them real world software
					development experience.
				</p>
			</div>

			<article>
				<div className="prose lg:prose-xl mx-auto px-4">
					<h2>About</h2>

					<p>
						FOSS Overflow is a month-long festival celebrating open source and
						innovation organized by Google Developer Student Clubs and OpenLake
						at IIT Bhilai. Intensely sprawling over 4 weeks, it aims to give
						hands-on experience of open source development to students with
						little to medium level of experience on the subject. Students are
						paired up with mentors to work on open sourced projects and amplify
						their skills and profile in the process while simultaneously bagging
						cash awards and prizes. The endeavour is designed to ameliorate the
						participants outlook and preparedness for global programs like GSoC,
						LFX and Outreachy among others.
					</p>

					<h2>Why should I apply?</h2>
				</div>

				<ul className="grid md:grid-cols-2 gap-10 list-none max-w-prose mx-auto mt-8 mb-16 px-4 text-base lg:text-xl">
					{whyApplyData.map(item => (
						<li key={item.title}>
							<Card title={item.title} icon={item.icon}>
								{item.description}
							</Card>
						</li>
					))}
				</ul>

				<div className="prose lg:prose-xl mx-auto px-4">
					<h2>How to Apply?</h2>

					<p>
						Students should write a proposal for a project they wish to be a
						part of. Each student may submit upto three proposals. Proposals
						must include what the student wants to implement and how they plan
						to achieve it. The students are free to discuss with the project
						mentors or organizing team while drafting their proposal. Ideal
						proposals should also include tentative implementation details and
						strategies to demonstrate that the applicant shall be able to
						achieve what they are claiming.
					</p>

					<h2>Timeline</h2>
				</div>
			</article>

			<div className="container m-auto max-w-screen-md py-8 overflow-x-hidden">
				<Timeline />
			</div>
		</>
	);
}
