import {
	AmazonwebservicesOriginal,
	CsharpPlain,
	Css3Plain,
	GitPlain,
	GithubOriginal,
	Html5Plain,
	JavascriptPlain,
	MysqlPlain,
	NextjsOriginal,
	PhotoshopPlain,
	PhpPlain,
	PostgresqlPlain,
	RailsPlain,
	ReactOriginal,
	RubyOriginal,
	SqlitePlain,
	TailwindcssPlain,
	TypescriptPlain,
	UnityOriginal,
	WordpressPlain,
} from "devicons-react";
import { IconLabel } from "../types";
import { cloneElement } from "react";

export default function HardSkills() {
	const skillsLanguages: IconLabel[] = [
		{
			icon: <Html5Plain />,
			label: "HTML",
		},
		{
			icon: <Css3Plain />,
			label: "CSS",
		},
		{
			icon: <JavascriptPlain />,
			label: "Javascript",
		},
		{
			icon: <TypescriptPlain />,
			label: "Typescript",
		},

		{
			icon: <RubyOriginal />,
			label: "Ruby",
		},
		{
			icon: <PhpPlain />,
			label: "PHP",
		},
		{
			icon: <CsharpPlain />,
			label: "C#",
		},
	];

	const skillsFrameworks: IconLabel[] = [
		{
			icon: <ReactOriginal />,
			label: "React",
		},
		{
			icon: <NextjsOriginal />,
			label: "NextJS",
		},
		{
			icon: <TailwindcssPlain />,
			label: "Tailwind",
		},
		{
			icon: <RailsPlain />,
			label: "Rails",
		},
		{
			icon: <WordpressPlain />,
			label: "Wordpress",
		},
	];
	const skillsOther: IconLabel[] = [
		{
			icon: <GitPlain />,
			label: "Git",
		},
		{
			icon: <GithubOriginal />,
			label: "Github",
		},
		{
			icon: <AmazonwebservicesOriginal />,
			label: "AWS",
		},
		{
			icon: <UnityOriginal />,
			label: "Unity",
		},
		{
			icon: <PhotoshopPlain />,
			label: "Photoshop",
		},
		{
			label: "Lightroom",
		},
	];

	const skillsDB: IconLabel[] = [
		{
			icon: <MysqlPlain />,
			label: "Mysql",
		},
		{
			icon: <PostgresqlPlain />,
			label: "PostgreSQL",
		},
		{
			icon: <SqlitePlain />,
			label: "SQLite",
		},
	];

	const createItems = (arr: IconLabel[]) => {
		return (
			<div className="grid grid-cols-[repeat(auto-fit,140px)] gap-x-3 gap-y-0">
				{arr.map((skill) => {
					const { icon, label } = skill;
					const item = (
						<div className="icon-label">
							<div className="icon grayscale">
								{icon &&
									cloneElement(icon, {
										size: 16,
										color: "black",
									})}
							</div>
							<div className="text-neutral-600">{label}</div>
						</div>
					);
					return item;
				})}
			</div>
		);
	};

	return (
		<section className="[&_h1]:mb-4 [&_h2]:mb-1">
			<h1 className="underline">Hard skills</h1>
			<div className="[&>div]:mb-7 border-l-[2px] ml-1 border-neutral-300 pl-5 sm:pl-10">
				<h2>Languages</h2>
				{createItems(skillsLanguages)}
				<h2>Databases</h2>
				{createItems(skillsDB)}
				<h2>Frameworks</h2>
				{createItems(skillsFrameworks)}
				<h2>Other</h2>
				{createItems(skillsOther)}
			</div>
		</section>
	);
}
