export type IconLabel = {
	icon?: JSX.Element;
	label?: string;
	link?: string;
};

export type ContentStructure = {
	title: {
		dates: {
			start: string;
			end: string;
		};
		heading: string;
		subHeading: string;
		link?: string;
	};
	points?: string[];
};

export type ContentProps = {
	h1: string;
	content: ContentStructure[];
};
