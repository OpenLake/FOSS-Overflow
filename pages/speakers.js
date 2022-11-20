import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/filip.jpeg';
import logoURL1 from '../public/justin.jpeg';
export default function sponshorship(){
    return (
        <>
            <Head>
                <title>Speakers | FOSS Overflow</title>
            </Head>
            <div className="w-80 py-24 flex flex-col justify-center text-center container m-auto max-w-prose px-4">
            <h1 className="text-4xl md:text-6xl mb-8 font-title">
					<Image  src={logoURL} alt="filip" />
                    Dr.Filip bech
			</h1>
            <h1 className="text-4xl md:text-6xl mb-8 font-title">
					<Image src={logoURL1} alt="justin" />
                    Prof. Justin Cappos
			</h1>
            </div>
            
        </>
       
    )
}
