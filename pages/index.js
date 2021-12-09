import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/outline';

import { Timeline } from '../components/Timeline';
import { Card } from '../components/Card';
import logoURL from '../public/logo.png';
import { whyApplyData } from '../content/why-apply';
import { eligibilityData } from '../content/eligibility';

export default function Index() {
	return (
		<>
			<Head>
				<title>FOSS Overflow</title>
			</Head>

			<div className="py-24 flex flex-col justify-center text-center container m-auto max-w-prose px-4">
				<h1 className="text-4xl md:text-6xl mb-8 font-title">
					<Image src={logoURL} alt="FOSS Overflow" />
				</h1>
				<p className="text-lg md:text-2xl">
					FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that helps
					students to get started with the world of open source by helping them
					build real world open sourced projects under guidance of awesome
					mentors.
				</p>
			</div>

			<article>
				<div className="prose lg:prose-xl mx-auto px-4">
					<h2>About</h2>

					<p>
						FOSS Overflow is a month-long festival celebrating open source
						culture and is organized by Google Developer Student Clubs and
						OpenLake at IIT Bhilai.
					</p>
					<p>
						Students are paired up with mentors to work on open sourced projects
						and amplify their skills and profile in the process while
						simultaneously bagging cash awards and prizes.
					</p>
					<p>
						The program is designed to prepare students for global open source
						internships like GSoC, LFX, and Outreachy that start shortly after
						the program is over.
					</p>

					<h2>Why should I apply?</h2>
				</div>

				<dl className="grid md:grid-cols-2 gap-10 list-none max-w-prose mx-auto mt-8 mb-16 px-4 text-base lg:text-xl">
					{whyApplyData.map(item => (
						<Card key={item.title} title={item.title} icon={item.icon}>
							{item.description}
						</Card>
					))}
				</dl>

				<div className="prose lg:prose-xl mx-auto px-4">
					<h2>How to Apply?</h2>
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
							The participants are free to discuss with the project mentors or
							the organizing team via Discord while drafting their proposal.
						</li>
					</ul>

					<div className="flex items-center justify-center flex-col md:flex-row">
						<div>
							<Link href="/apply" passHref>
								<a className="mx-auto w-max block bg-gray-900 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-gray-800 ring-offset-2">
									Apply
								</a>
							</Link>
						</div>
						<div>
							<a
								className="w-max block bg-blue-700 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-blue-800 ring-offset-2 my-5 mx-5"
								target="_blank"
								rel="noopener noreferrer"
								href="https://discord.gg/RsPv4TAx3X"
							>
								Join Discord
							</a>
						</div>
					</div>

					<h2>Eligibility</h2>

					<dl className="grid md:grid-cols-2 gap-10 list-none max-w-prose mx-auto mt-8 mb-16 px-4 text-base lg:text-xl">
						{eligibilityData.map(item => (
							<div className="relative" key={item.title}>
								<dt>
									<CheckIcon className="absolute h-6 w-6 text-green-600" />
									<p className="ml-9 text-lg leading-6 font-bold text-black-70">
										{item.title}
									</p>
								</dt>
								<dd className="mt-2 ml-9 text-base text-black-50">
									{item.description}
								</dd>
							</div>
						))}
					</dl>

					<h2>Timeline</h2>
				</div>
			</article>

			<div className="container m-auto max-w-screen-md py-8 overflow-x-hidden">
				<Timeline />
			</div>
		</>
	);
}
