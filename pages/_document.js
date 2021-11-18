import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="theme-color" content="#eff6ff" />
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
						rel="stylesheet"
					/>
					<script
						data-host="https://microanalytics.io"
						data-dnt="false"
						src="https://microanalytics.io/js/script.js"
						id="ZwSg9rf6GA"
						async
						defer
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
