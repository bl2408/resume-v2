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

	return (
		<div className=" py-1 font-medium tracking-tight text-black text-sm flex gap-x-10 gap-y-2 flex-wrap max-2xs:flex-col max-xs:w-full lg:justify-between">
			{socialsList.map((sl) => {
				const { icon, label, link } = sl;

				const item = (
					<>
						<div className="icon">{icon}</div>
						<div>{label}</div>
					</>
				);

				return link ? (
					<a
						key={label}
						href={link}
						target="_blank"
						className="icon-label">
						{item}
					</a>
				) : (
					<div key={label} className="icon-label">
						{item}
					</div>
				);
			})}
		</div>
	);
}
