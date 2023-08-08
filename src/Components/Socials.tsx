import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	GlobeIcon,
	LinkedInLogoIcon,
	MobileIcon,
	SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { IconLabel } from "../types";

export default function Socials() {
	const socialsList: IconLabel[] = [
		{
			icon: <EnvelopeClosedIcon />,
			label: "hi@brianlambert.dev",
			link: "mailto:hi@brianlambert.dev",
		},
		{ icon: <MobileIcon />, label: "0430 538 384", link: "tel:0430538384" },
		{
			icon: <GlobeIcon />,
			label: "brianlambert.dev",
			link: "https://www.brianlambert.dev",
		},
		{
			icon: <GitHubLogoIcon />,
			label: "@bl2408",
			link: "https://github.com/bl2408",
		},
		{
			icon: <LinkedInLogoIcon />,
			label: "/ bl24",
			link: "https://www.linkedin.com/in/bl24/",
		},
		{ icon: <SewingPinFilledIcon />, label: "Melbourne, Vic" },
	];
	const styleClass = "flex item-center content-center h-[28px] gap-3 p-1";

	return (
		<div className="first-letter:px-4 py-1 font-medium tracking-tight text-black text-base flex gap-x-10 gap-y-2 flex-wrap max-xs:flex-col max-xs:w-full">
			{socialsList.map((sl) => {
				const { icon, label, link } = sl;

				const item = (
					<>
						<div className="[&>svg]:w-full [&>svg]:h-full">
							{icon}
						</div>
						<div>{label}</div>
					</>
				);

				return link ? (
					<a href={link} target="_blank" className={styleClass}>
						{item}
					</a>
				) : (
					<div className={styleClass}>{item}</div>
				);
			})}
		</div>
	);
}
