import Slider from 'react-slick';
import styles from './css/testimonal.module.css';
import { Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import harsh from '../public/harsh.jpeg';
import speaker2 from '../public/speaker2.jpeg';
import speaker3 from '../public/speaker3.jpeg';

const PreviousBtn = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
		</div>
	);
};
const NextBtn = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
		</div>
	);
};

const Testimonial = () => {
	return (
		<div
			className={styles.testimonial}
			style={{ display: 'flex', justifyContent: 'center', marginTop: 50 , marginBottom: 25}}
		>
			<div style={{ width: '50%', textAlign: 'center' }}>
				<h1 className="texthead leading-relaxed font-[600] mb-10 ">
					Message from{' '}
					<span className="bg-opacity-20 text-[#28A9E2] bg-[#28A9E2] px-1 py-1">
						Speakers
					</span>
				</h1>
				<Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
					<Card
						img="https://i.ibb.co/KWcfBw0/harsh.jpg"
						message="Open platforms historically undergo a lot of scrutiny, but there are a lot of advantages to having an open source platform from a security standpoint."
						author="Harsh Mishra, Open Soure Engineer @LocalStack"
					/>
					<Card
						img="https://i.ibb.co/wWJ0RSc/speaker2.jpg"
						message="The open source nature of the Internet is both a blessing and a curse, because just as much as we can watch what's happening around the world, we can also be watched."
						author="Sonal Goyal, Founder @Zingg.AI"
					/>
					<Card
						img="https://i.ibb.co/z2P4k4J/speaker3.jpg"
						message="Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts."
						author="Chinmay Naik, Founder @One2N"
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
