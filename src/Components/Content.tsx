import {
	CalendarIcon,
	ExternalLinkIcon,
	MinusIcon,
} from "@radix-ui/react-icons";
import { ContentProps, ContentStructure } from "../types";

export default function Content({ h1, content, limit }: ContentProps) {
	return (
		<section>
			<h1>{h1}</h1>
			{(limit && limit > 0 ? content.slice(0, limit) : content).map(
				(item) => (
					<ContentView {...item} key={item.title.heading} />
				)
			)}
		</section>
	);
}
const ContentView = ({ title, points }: ContentStructure) => {
	const { heading, link, dates } = title;

	const subHeading = title.subHeading;

	return (
		<>
			<div className="[&_svg]:inline-block mb-3">
				<h1 className="mb-1 no-underline">{heading}</h1>

				<div className="flex items-baseline gap-x-10 content-center mb-3 print:mb-2">
					{subHeading && <h2 className="mb-0">{subHeading}</h2>}
					{link ? (
						<a
							href={`https://${link}`}
							target="_blank"
							className="text-sm print:text-xs italic">
							{link.split("/")[0]} <ExternalLinkIcon />
						</a>
					) : null}
				</div>
				<div className="text-sm print:text-xs italic flex items-center gap-x-2 [&_svg]:print:w-[12px]">
					<CalendarIcon /> {dates.start} <MinusIcon /> {dates.end}
				</div>
			</div>
			<ul className="mb-[10px]">
				{points?.map((pt, i) => <li key={`${heading}pt${i}`}>{pt}</li>)}
			</ul>
		</>
	);
};
