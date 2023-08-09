import Content from "./Components/Content";
import HardSkills from "./Components/HardSkills";
import Splash from "./Components/Splash";
import expContent from "./Content/experience.json";
import eduContent from "./Content/education.json";
import proContent from "./Content/projects.json";

export default function App() {
	return (
		<main className="p-10 flex items-center gap-10 flex-col [&>*]:max-w-screen-md2 [&>*]:w-full min-w-[320px]">
			<Splash />
			<HardSkills />
			<Content h1="Experience" content={expContent} limit={3} />
			<Content h1="Education" content={eduContent} />
			<Content h1="Projects" content={proContent} />
		</main>
	);
}
