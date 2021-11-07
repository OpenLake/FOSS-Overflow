import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>FOSSIL</title>
				<meta
					name="description"
					content="FOSSIL helps students understand the paradigm of Open Source contribution and gives them real world software development experience."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
