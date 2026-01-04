import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Timeline } from '../components/Timeline';
import { Card } from '../components/Card';
import logoURL from '../public/logo.png';
import { whyApplyData } from '../content/why-apply';
import { eligibilityData } from '../content/eligibility';
import fossu from '../public/fossu.png';
import openlake from '../public/openlake.png';
import fossclub from '../public/fossclub.png';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowSize;
};

export default function Index() {
	const comm = [openlake, fossclub];
	const windowSize = useWindowSize();

	const imageHeightsci = windowSize.width < 768 ? 50 : 65;
	const imagewidthsci = windowSize.width < 768 ? 50 : 75;
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
			<div className="bg-blue-50 my-8 text-center py-8 w-full shadow-lg rounded-lg">
				<div className="text-2xl text-gray-700 font-semibold my-6">
					Powered by numerous startups and embraced by countless open-source
					enthusiasts nationwide.
				</div>

				<div className="flex flex-wrap justify-center items-center gap-8 my-6">
					<Image
						src={fossu}
						alt="sponsor"
						width={imagewidthsci}
						height={imageHeightsci}
						className="transition-transform transform hover:scale-105"
					/>
				</div>

				<div className="text-2xl text-gray-700 font-semibold my-6">
					Community Partners
				</div>
				{/* <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {comm.map((sponsor, index) => (
          <div
            key={index}
            className="rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            style={{
              width: windowSize.width < 768 ? '60px' : '100px',
              height: windowSize.width < 768 ? '60px' : '100px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={sponsor}
              alt={`community sponsor ${index + 1}`}
              layout="responsive"
              width={100}
              height={100}
              className='object-cover'
            />
          </div>
        ))}
      </div> */}
				<div className="flex flex-wrap justify-center gap-6 md:gap-12">
					{comm.map((sponsor, index) => (
						<div
							key={index}
							className="rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
							style={{
								width: windowSize.width < 768 ? '60px' : '100px',
								height: windowSize.width < 768 ? '60px' : '100px',
							}}
						>
							<Image
								src={sponsor}
								alt={`community sponsor ${index + 1}`}
								fill
								className="object-cover rounded-full"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="prose lg:prose-xl mx-auto px-4">
				<h2>Why should I apply?</h2>

				<dl className="grid md:grid-cols-2 gap-10 list-none max-w-prose mx-auto mt-8 mb-16 px-4 text-base lg:text-xl">
					{whyApplyData.map(item => (
						<Card key={item.title} title={item.title} icon={item.icon}>
							{item.description}
						</Card>
					))}
				</dl>
			</div>
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
						The participants are free to discuss with the project mentors or the
						organizing team via Discord while drafting their proposal.
					</li>
				</ul>

				<div className="flex items-center justify-center flex-col md:flex-row">
					<div>
						<Link
							href="/apply"
							passHref
							className="mx-auto w-max block bg-gray-900 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-gray-800 ring-offset-2"
						>
							Apply
						</Link>
					</div>
					<div>
						<a
							className="w-max block bg-blue-700 no-underline text-white text-xl py-4 px-10 rounded-full focus-visible:ring-2 hover:ring-2 ring-blue-800 ring-offset-2 my-5 mx-5"
							target="_blank"
							rel="noopener noreferrer"
							href="https://discord.gg/xPR5ZuGWP2"
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
			<div className="container m-auto max-w-screen-md py-8 overflow-x-hidden">
        	<Timeline />
			</div>
		</>
	);
}
