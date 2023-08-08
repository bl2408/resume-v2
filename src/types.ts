export type IconLabel = {
	icon?: JSX.Element;
	label?: string;
	link?: string;
};

export type ExperienceContent = {
	title: {
		dates: {
			start: string;
			end: string;
		};
		company: string;
		position: string;
		link?: string;
	};
	points?: string[];
};
