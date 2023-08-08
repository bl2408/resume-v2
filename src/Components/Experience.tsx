import {
	CalendarIcon,
	ExternalLinkIcon,
	MinusIcon,
} from "@radix-ui/react-icons";
import { ExperienceContent } from "../types";
import content from "../Content/experience.json";

export default function Experience() {
	const limit = 3;
	return (
		<section>
			<h1>Experience</h1>
			{(limit > 0 ? content.slice(0, limit) : content).map((item) => (
				<ExpContent {...item} key={item.title.company} />
			))}
		</section>
	);
}
const ExpContent = ({ title, points }: ExperienceContent) => {
	const { position, company, link, dates } = title;

	return (
		<>
			<div className="[&_svg]:inline-block mb-4">
				<h1 className="mb-1 no-underline">{position}</h1>

				<div className="flex items-baseline gap-x-10 content-center mb-3">
					<h2 className="mb-0">{company}</h2>
					{link ? (
						<a
							href={`https://${link}`}
							target="_blank"
							className="text-sm italic">
							{link} <ExternalLinkIcon />
						</a>
					) : null}
				</div>
				<div className="text-sm italic flex items-center gap-x-2">
					<CalendarIcon /> {dates.start} <MinusIcon /> {dates.end}
				</div>
			</div>
			<ul className="mb-4">{points?.map((pt) => <li>{pt}</li>)}</ul>
		</>
	);
};
