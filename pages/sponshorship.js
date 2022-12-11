import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/sbi.png';
import logoURL1 from '../public/sci.jpeg';
import logoURL2 from '../public/logy.png';
import logoURL3 from '../public/aspire.png';
import logoURL4 from '../public/dsc.jpeg';
import logoURL5 from '../public/cosmo.jpeg';
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
						className="py-2 px-4  rounded-full"
						src={logoURL1}
						alt="scitech"
					/>
					<Image
						width={400}
						height={200}
						className="py-2 px-4"
						src={logoURL4}
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
					<Image
						width={300}
						height={300}
						className="py-2"
						src={logoURL5}
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
                    
		     <Image
						width={300}
						height={300}
						className="py-2"
						src={logoURL2}
						alt="logy"
					/>
				</div>
				<div className="py-10">
					<h1 className="text-4xl md:text-4xl mb-8 font-title font-bold">
					 Community Partners
					</h1>
                    
		     <Image
						width={300}
						height={200}
						className="py-2"
						src={logoURL3}
						alt="logy"
					/>
				</div>
			</div>
		</>
	);
}
