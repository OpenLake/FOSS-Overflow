import Slider from 'react-slick';
import styles from './css/testimonal.module.css';
import { Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const PreviousBtn = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			{/* <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} /> */}
		</div>
	);
};
const NextBtn = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			{/* <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} /> */}
		</div>
	);
};

const Testimonial = () => {
	return (
		<div
			className={styles.testimonial}
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: 50,
				marginBottom: 25,
			}}
		>
			<div style={{ width: '50%', textAlign: 'center' }}>
				<h1 className="texthead leading-relaxed font-[600] mb-10 ">
					Message from{' '}
					<span className="bg-opacity-20 text-[#28A9E2] bg-[#28A9E2] px-1 py-1">
						Speakers
					</span>
				</h1>
				<Slider
					autoplay={true}
					prevArrow={<PreviousBtn />}
					nextArrow={<NextBtn />}
					dots
				>
					<Card
						img="./gunj_2026.jpg"
						message="Open platforms historically undergo a lot of scrutiny, but there are a lot of advantages to having an open source platform from a security standpoint."
						author="Gunj Joshi, Quantum Research @IBM"
					/>
					<Card
						img="./anand_2026.png"
						message="The open source nature of the Internet is both a blessing and a curse, because just as much as we can watch what's happening around the world, we can also be watched."
						author="Anand Panchbhai, Co-Founder & Executive Director Logy.AI"
					/>
				</Slider>
			</div>
		</div>
	);
};

const Card = ({ img, message, author }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				textAlign: 'center',
				color: 'gray',
			}}
		>
			<Avatar
				imgProps={{ style: { borderRadius: '50%' } }}
				src={img}
				style={{
					width: 120,
					height: 120,
					border: '1px solid lightgray',
					padding: 7,
					marginBottom: 20,
				}}
			/>
			<p>{message}</p>
			<p style={{ fontStyle: 'italic', marginTop: 25 }}>
				<span style={{ fontWeight: 500, color: '#28A9E2' }}>{author}</span>
			</p>
		</div>
	);
};

export default Testimonial;
