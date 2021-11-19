import Head from 'next/head';
import '../styles/globals.css';

const title = 'FOSS Overflow';
const description =
	'FOSS Overflow helps students understand the paradigm of Open Source contribution and gives them real world software development experience.';
const baseURL = 'https://fossoverflow.dev';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={`${baseURL}/icon.png`} />
				<meta property="og:url" content={baseURL} />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
