import { IconLabel } from "../types";
import { cloneElement } from "react";

export default function HardSkills() {
	const skillsLanguages: IconLabel[] = [
		{
			icon: "devicon-html5-plain",
			label: "HTML",
		},
		{
			icon: "devicon-css3-plain",
			label: "CSS",
		},
		{
			icon: "devicon-javascript-plain",
			label: "Javascript",
		},
		{
			icon: "devicon-typescript-plain",
			label: "Typescript",
		},

		{
			icon: "devicon-ruby-plain",
			label: "Ruby",
		},
		{
			icon: "devicon-php-plain",
			label: "PHP",
		},
		{
			icon: "devicon-csharp-plain",
			label: "C#",
		},
	];

	const skillsFrameworks: IconLabel[] = [
		{
			icon: "devicon-react-plain",
			label: "React",
		},
		{
			icon: "devicon-nextjs-plain",
			label: "NextJS",
		},
		{
			icon: "devicon-tailwindcss-plain",
			label: "Tailwind",
		},
		{
			icon: "devicon-rails-plain",
			label: "Rails",
		},
		{
			icon: "devicon-wordpress-plain",
			label: "Wordpress",
		},
	];
	const skillsOther: IconLabel[] = [
		{
			icon: "devicon-git-plain",
			label: "Git",
		},
		{
			icon: "devicon-github-plain",
			label: "Github",
		},
		{
			icon: "devicon-amazonwebservices-original",
			label: "AWS",
		},
		{
			icon: "devicon-unity-original",
			label: "Unity",
		},
		{
			icon: "devicon-photoshop-plain",
			label: "Photoshop",
		},
		{
			label: "Lightroom",
		},
	];

	const skillsDB: IconLabel[] = [
		{
			icon: "devicon-mysql-plain",
			label: "Mysql",
		},
		{
			icon: "devicon-postgresql-plain",
			label: "PostgreSQL",
		},
		{
			icon: "devicon-sqlite-plain",
			label: "SQLite",
		},
	];

	const createItems = (arr: IconLabel[]) => {
		return (
			<div className="grid grid-cols-[repeat(auto-fit,140px)] gap-x-3 gap-y-0">
				{arr.map((skill) => {
					const { icon, label } = skill;
					const item = (
						<div className="icon-label" key={label}>
							<div className="icon grayscale">
								{icon &&
									(typeof icon !== "string" ? (
										cloneElement(icon, {
											size: 16,
											color: "black",
										})
									) : (
										<i className={icon}></i>
									))}
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
		<section>
			<h1>Hard skills</h1>
			<h2>Languages</h2>
			{createItems(skillsLanguages)}
			<h2>Databases</h2>
			{createItems(skillsDB)}
			<h2>Frameworks</h2>
			{createItems(skillsFrameworks)}
			<h2>Other</h2>
			{createItems(skillsOther)}
		</section>
	);
}
