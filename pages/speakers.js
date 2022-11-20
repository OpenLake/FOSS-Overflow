import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/justin.jpeg';
import logoURL1 from '../public/filip.jpeg';
import logoURL2 from '../public/amitsheth.jpg';
export default function sponshorship() {
	return (
		<>
			<Head>
				<title>Speakers | FOSS Overflow</title>
			</Head>
			<div className="w-100 py-24 flex flex-col justify-center text-center container m-auto max-w-prose px-4">
				<div className="py-10">
					<h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
						Prof. Amit Sheth
					</h1>
					<Image
						width={350}
						height={350}
						className="py-2 rounded-full"
						src={logoURL2}
						alt="filip"
					/>
					<p className="text-lg md:text-2xl">
						Amit Sheth is a computer scientist at University of South Carolina
						in Columbia, South Carolina. He is the founding Director of the
						Artificial Intelligence Institute, and a Professor of Computer
						Science and Engineering. From 2007 to June 2019, he was the Lexis
						Nexis Ohio Eminent Scholar, director of the Ohio Center of
						Excellence in Knowledge-enabled Computing, and a Professor of
						Computer Science at Wright State University. Sheth&#39;s work has been
						cited by over 48,800 publications.He has an h-index of 114, which
						puts him among the top 100 computer scientists with the highest
						h-index. Prior to founding the Kno.e.sis Center, he served as the
						director of the Large Scale Distributed Information Systems Lab at
						the University of Georgia in Athens, Georgia.
					</p>
				</div>

				<div className="py-10">
					<h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
						Prof. Justin Cappos
					</h1>
					<Image
						width={350}
						height={350}
						className="py-2 rounded-full"
						src={logoURL}
						alt="filip"
					/>
					<p className="text-lg md:text-2xl">
						Justin Cappos is a computer scientist and cybersecurity expert whose
						data-security software has been adopted by a number of widely used
						open-source projects. His research centers on software update
						systems, security, and virtualization, with a focus on real-world
						security problems. Now an associate professor in the Department of
						Computer Science and Engineering at NYU Tandon, he has introduced a
						number of new software products and system protocols as head of the
						school&#39;s Secure Systems Laboratory. Recognizing the practical impact
						of his work, Popular Science selected Cappos as one of its Brilliant
						10 in 2013, naming him as one of 10 brilliant scientists under 40.
					</p>
				</div>

				<div className="py-10">
					<h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
						Filip Bech-Larsen
					</h1>
					<Image
						width={350}
						height={350}
						className="py-2 rounded-full"
						src={logoURL1}
						alt="filip"
					/>
					<p className="text-lg md:text-2xl">
						Filip, a technology enthusiast by heart, has been working with the
						web for more than 10 years. He is currently the CTO of Umbraco CMS.
						Previously, he&#39;s served as the CTO of Colibo, the Head of Technology
						at IMPACT, and as a senior and lead developer at Skybrud.dk (now
						Limbo) and Wildside A/S respectively. Since 2016 he&#39;s been a part of
						the Google Developers Experts Program. He&#39;s deeply passionate
						towards talking about Software Development and has delivered more
						than 60+ sessions to date. He writes blogs and speaks at conferences
						and user-groups and also organises a local user- group - AarhusJS.
					</p>
				</div>
			</div>
		</>
	);
}
