import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StarIcon } from '@heroicons/react/outline';
import { timelineData } from '../content/timeline';

export function Timeline() {
	return (
		<VerticalTimeline lineColor="black">
			{timelineData.map(({ date, title, description }, idx) => (
				<VerticalTimelineElement
					key={idx}
					iconClassName="bg-blue-600 text-white shadow-md"
					textClassName="shadow-md rounded-lg"
					icon={<StarIcon />}
				>
					<h3 className="text-xl">{title}</h3>
					<h4 className="text-md">{date}</h4>
					{description && <p className="text-md font-normal">{description}</p>}
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}
