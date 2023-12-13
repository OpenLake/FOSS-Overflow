import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Timeline } from '../components/Timeline';
import { Card } from '../components/Card';
import logoURL from '../public/logo.png';
import { whyApplyData } from '../content/why-apply';
import { eligibilityData } from '../content/eligibility';
import scif from '../public/scif.png';
import orkes from '../public/orkes.png';
import fossu from '../public/fossu.png';
import quinef from '../public/quinef.png';
import dsc from '../public/dsc.png';
import openlake from '../public/openlake.png';
import fossclub from '../public/fossclub.png';
import image from '../public/image.png';
import imagec from '../public/imagec.png';

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

		handleResize(); // Call handleResize initially to set the initial window size

		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // Empty dependency array ensures that effect runs only on mount and unmount

	return windowSize;
};

export default function Index() {
	const sponsors = [scif, orkes, fossu, quinef];
	const comm = [dsc,openlake];
	const windowSize = useWindowSize();


	const imageHeightsci = windowSize.width < 768 ? 50 : 130;
	const imagewidthsci = windowSize.width < 768 ? 50 : 100; 

	const imageHeightorkes = windowSize.width < 768 ? 50 : 130;
	const imagewidthorkes = windowSize.width < 768 ? 75 : 180;
	
	const imghquine = windowSize.width < 768 ? 50 : 24;
	const imgwquine = windowSize.width < 768 ? 75 : 140;
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
					FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that
					helps students to get started with the world of open source by helping
					them build real world open sourced projects under guidance of awesome
					mentors.
				</p>
			</div>
			<div className="bg-blue-100 my-4 text-center py-4 w-full">
				<div className="text-xl text-gray-600 font-medium my-4">
					Powered by numerous startups and embraced by countless open-source enthusiasts nationwide.
				</div>
				<div className="flex justify-evenly">
						<Image	
							src={scif}
							alt="sponsor"
							width={imageHeightsci}
							height={imagewidthsci}
						/>
						<Image	
							src={orkes}
							alt="sponsor"
							width={imagewidthorkes}
							height={imageHeightorkes}
						/>
						<Image
							src={image}
							alt="sponsor"
							width={imgwquine}
							height={imghquine}
						/>
						<Image
							src={fossu}
							alt="sponsor"
							width={imagewidthsci}
							height={imageHeightsci}
						/>
						<Image
							src={imagec}
							alt="sponsor"
							width={imagewidthsci}
							height={imageHeightsci}
					    />
				</div>
				<div className="text-xl text-gray-600 font-medium my-4">
					Community Partners
				</div>
				<div className="flex justify-center gap-8 md:gap-20">
					{comm.map((sponsor, index) => (
						<Image
							key={index}
							src={sponsor}
							alt="sponsor"
							width={50}
							height={50}
						/>
					))}
				</div>
			</div>

			<div className="prose lg:prose-xl mx-auto px-4">
				<h2 className="mx-auto text-center px-4">About</h2>
				<div className="mx-auto text-center px-4">
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
							href="https://discord.gg/bUkG3br637"
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

