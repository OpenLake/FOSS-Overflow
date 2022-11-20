import Head from 'next/head';
import Image from 'next/image';
import logoURL from '../public/sbi.png';
import logoURL1 from '../public/sci.jpeg';
export default function sponshorship(){
    return (
        <>
            <Head>
                <title>Sponshorship | FOSS Overflow</title>
            </Head>
            <div className="w-80 py-24 flex flex-col justify-center text-center container m-auto max-w-prose px-4">
            <h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
                    PLATINUM SPONSHORS
                    <Image  src={logoURL} alt="filip" />
                    
			</h1>
            <h1 className="text-4xl md:text-3xl mb-8 font-title font-bold">
                    GOLD SPONSHORS
                    <Image className="rounded-full" src={logoURL1} alt="justin" />
                    
			</h1>
            </div>
            
        </>
       
    )
}