import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/ana1.png';
import logoURL1 from '../public/sat.png';
export default function sponshorship() {
	return (
		<>
			<Head>
				<title>Speakers | FOSS Overflow</title>
			</Head>
			<div className="w-100 py-12 flex flex-col justify-center text-center container m-auto max-w-prose md:flex-row md:w-150 ">
				<div className="px-40">
					<h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
						Ananya Hooda
					</h1>
					<Image
						width={350}
						height={350}
						className="py-2 rounded-full"
						src={logoURL}
						alt="Ananya"
					/>
					<p className="text-lg md:text-2xl">
						Phone no. - +91 70727196556
					</p>
                    <p className="text-lg md:text-2xl">
                        Email ID  - ananyah@iitbhilai.ac.in
					</p>
				</div>
                <div className="px-40">
					<h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
						Satvik Vemuganti
					</h1>
					<Image
						width={250}
						height={250}
						className="py-2 rounded-full"
						src={logoURL1}
						alt="satvik"
					/>
					<p className="text-lg md:text-2xl">
						Phone no. - +91 7013962027
					</p>
                    <p className="text-lg md:text-2xl">
                        Email ID  - vemugantisesha@iitbhilai.ac.in
					</p>
				</div>
            </div>
		</>
	);
}
