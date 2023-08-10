export type IconLabel = {
	icon?: JSX.Element | string;
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
	limit?: number;
	h1: string;
	content: ContentStructure[];
};

export type SplashProps = {
	pageBreaker?: boolean;
};

export type PageNumberProps = {
	page: number;
	of: number;
	breaker?: boolean;
};
