import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/justin.jpeg';
import mainlogo from '../public/mainlogo.png';
import foss from '../public/foss.jpeg';
import { useSnapCarousel } from 'react-snap-carousel';
import React, { useRef, useState, useEffect } from 'react';
import Testimonial from 'components/Testimonals';
import MyCarousel from 'components/Carousel';

const programs = [
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'Well get you directly seated and inside for you to enjoy the show.',
	},
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'Well get you directly seated and inside for you to enjoy the show.',
	},
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'Well get you directly seated and inside for you to enjoy the show.',
	},
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'Well get you directly seated and inside for you to enjoy the show.',
	},
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'Well get you directly seated and inside for you to enjoy the show.',
	},
	{
		date: 'Apr 14',
		image: logoURL,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		content:
			'We will get you directly seated and inside for you to enjoy the show.',
	},
];

export default function Sponshorship() {
	const { scrollRef, next, prev } = useSnapCarousel();
	return (
		<>
			<Head>
				<title>Speakers | FOSS Overflow</title>
			</Head>
			<div className="relative h-screen">
				{/* Image covering the top */}
				<div>
					<MyCarousel />
				</div>
				<div className="md:flex items-center mt-[-12] hidden justify-center">
					{/* Three boxes at the bottom */}
					<div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-r from-blue-100 to-blue-200 rounded mx-auto md:mx-2">
						<div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
							<div className="align-middle my-auto items-center">
								<div className="bg-blue-400 font-semibold rounded-full text-center w-fit px-3 py-2 md:px-5 md:py-4 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
									32
								</div>
							</div>
							<div>
								<div className="text-black mb-2 text-sm md:text-[18px] font-normal">
									Workshops Conducted
								</div>
								<div className="text-gray-700 text-sm md:text-lg font-normal">
									Sessions conducted by our mentors for the community.
								</div>
							</div>
						</div>
					</div>
					<div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-r from-blue-100 to-blue-200 rounded mx-auto md:mx-2">
						<div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
							<div className="align-middle my-auto items-center">
								<div className="bg-blue-400 font-semibold rounded-full text-center w-fit px-3 py-2 md:px-5 md:py-4 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
									16
								</div>
							</div>
							<div>
								<div className="text-black mb-2 text-sm md:text-[18px] font-normal">
									Hackathons Conducted
								</div>
								<div className="text-gray-700 text-sm md:text-lg font-normal">
									Sessions conducted by our <br />
									mentors for the community.
								</div>
							</div>
						</div>
					</div>
					<div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-r from-blue-100 to-blue-200 rounded mx-auto md:mx-2">
						<div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
							<div className="align-middle my-auto items-center">
								<div className="bg-blue-400 font-semibold rounded-full text-center w-fit px-3 py-2 md:px-5 md:py-4 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
									16
								</div>
							</div>
							<div>
								<div className="text-black mb-2 text-sm md:text-[18px] font-normal">
									Foss Overflow
								</div>
								<div className="text-gray-700 text-sm md:text-lg font-normal">
									India’s largest open source
									<br />
									hackathon.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center text-2xl md:text-6xl font-medium md:mt-12 mt-4 font-serif">
					Meet Our Speakers
				</div>
				<div className='flex md:mx-48 justify-evenly items-center align-middle'>
					<div
						ref={scrollRef}
						className="md:mx-48 mt-16 mx-8 md:gap-12 gap-12 md:justify center justify-between"
						style={{
							display: 'flex',
							overflow: 'hidden',
							scrollSnapType: 'x mandatory',
						}}
					>
						{programs.map((program, i) => {
							return (
								<div key={i} className="">
									<div className="md:w-[350px] w-[320px]">
										<Image
											className="w-full h-[308px] object-cover"
											src={logoURL}
											alt=""
										/>
									</div>
									<div className="flex w-[320px] md:w-[350px] justify-between px-4 py-2 bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
										<div>
											<div className="text-white text-sm text-center md:text-lg font-bold">
												{program.title}
											</div>
											<div className="text-gray-400 text-center text-sm font-normal">
												{program.content}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div>
						<button
							className="p-2 z-50 bg-gray-800 text-white rounded-full absolute left-10"
							style={{ marginLeft: '1rem' }}
							onClick={() => prev()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-chevron-left"
							>
								<polyline points="15 18 9 12 15 6"></polyline>
							</svg>
						</button>
					</div>
					<div>
						<button
							className="p-2 cursor-pointer bg-gray-800 text-white rounded-full absolute right-10"
							style={{ marginRight: '1rem' }}
							onClick={() => next()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-chevron-right"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</button>
					</div>
				</div>

				<div>
					<Testimonial />
				</div>
			</div>
		</>
	);
}
