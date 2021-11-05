import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Star } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { timelineData } from '../content/timeline';

const useStyles = makeStyles(theme => ({
	timelineCustom: {
		'&::before': {
			background: theme.palette.text.primary,
		},
		'& .vertical-timeline-element-icon': {
			color: '#000',
			boxShadow: theme.shadows[2],
		},
	},
}));

export function Timeline() {
	const classes = useStyles();
	return (
		<>
			<main className="container m-auto max-w-screen-md py-8">
				<VerticalTimeline lineColor="#000">
					{timelineData.map(({ date, title, description, icon }) => (
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
							icon={<Star />}
						>
							<h3 className="vertical-timeline-element-title">{title}</h3>
							<h4 className="vertical-timeline-element-subtitle">{date}</h4>
							<p>{description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</main>
		</>
	);
}
