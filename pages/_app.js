import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>OpenLake Winter of Code</title>
				<meta
					name="description"
					content="OpenLake Winter of Code helps students understand the paradigm of Open Source contribution and gives them real world software development experience."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
