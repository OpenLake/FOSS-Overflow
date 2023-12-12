import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foss from '../public/foss.jpeg';
import bg1 from '../public/bg1.jpeg';
import bg2 from '../public/bg2.jpeg';

const Carousel = dynamic(
	() => import('react-responsive-carousel').then(module => module.Carousel),
	{
		ssr: false, // Disable server-side rendering
	},
);

const Image = dynamic(() => import('next/image'), { ssr: false });

const topimages = [foss, bg1, bg2];

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleResize(); // Call handleResize initially to set the initial window size

		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // Empty dependency array ensures that effect runs only on mount and unmount

	return windowSize;
};

const MyCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const windowSize = useWindowSize();

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide =>
				prevSlide === topimages.length - 1 ? 0 : prevSlide + 1,
			);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const imageHeight = windowSize.width < 768 ? 400 : 700; // Adjust the height for smaller screens
	const imagewidth = windowSize.width < 768 ? 600 : 400; // Adjust the height for smaller screens

	return (
		<Carousel
			selectedItem={currentSlide}
			showStatus={false}
			showThumbs={false}
			autoPlay
			infiniteLoop
			interval={6000}
			renderIndicator={false}
		>
			{topimages.map((image, index) => (
				<div key={index} className="relative bg-cover bg-center">
					<Image
						src={image}
						className=""
						height={imageHeight}
						width={windowSize.width}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
			))}
		</Carousel>
	);
};

export default MyCarousel;
