import Head from "next/head";

export default function Home() {
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

			<main className="min-h-screen flex flex-col justify-center items-center text-center font-mono">
				<h1 className="text-6xl text-blue-600 mb-6">OpenLake Winter of Code</h1>

				<p className="text-3xl">Coming Soon</p>
			</main>
		</>
	);
}
