import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/sbi.png';
import logoURL1 from '../public/sci.jpeg';
export default function sponshorship() {
	return (
		<>
			<Head>
				<title>Sponsorship | FOSS Overflow</title>
			</Head>
			<div className="w-100 py-24 flex flex-col justify-center text-center container m-auto max-w-prose px-4">
				<div className="py-10">
					<h1 className="text-4xl md:text-4xl mb-8 font-title font-bold">
                    💎 Platinum Sponsors 💎
					</h1>
					<Image
						width={200}
						height={200}
						className="py-2  rounded-full"
						src={logoURL1}
						alt="scitech"
					/>
				</div>
				<div className="py-10">
					<h1 className="text-4xl md:text-4xl mb-8 font-title font-bold">
                    🏆 Gold Sponsors 🏆
					</h1>
					<Image
						width={300}
						height={100}
						className="py-2"
						src={logoURL}
						alt="sbi"
					/>
				</div>
                <div className="py-10">
					<h1 className="text-4xl md:text-4xl mb-8 font-title font-bold">
                    🛡️ Silver Sponsors 🛡️
					</h1>
                    <h6>
                        Inviting Sponsors!
                    </h6>
				</div>
                <div className="py-10">
					<h1 className="text-4xl md:text-4xl mb-8 font-title font-bold">
					🥉 Bronze Sponsors 🥉
					</h1>
                    <h6>
                        Inviting Sponsors!
                    </h6>
				</div>
			</div>
		</>
	);
}
