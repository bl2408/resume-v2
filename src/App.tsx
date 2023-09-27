import Content from "./Components/Content";
import HardSkills from "./Components/HardSkills";
import Splash from "./Components/Splash";
import expContent from "./Content/experience.json";
import eduContent from "./Content/education.json";
import proContent from "./Content/projects.json";
import { FileTextIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Footer from "./Components/Footer";

export default function App() {
	return (
		<>
			<nav>
				<a
					href="https://github.com/bl2408/resume-v2"
					target="_blank"
					title="View source">
					<GitHubLogoIcon />
					Source
				</a>
				<button onClick={() => window.print()} title="Print">
					<FileTextIcon />
					Print
				</button>
			</nav>

			<main className="p-10 flex items-center gap-10 print:gap-5 flex-col [&>*]:max-w-screen-md2 [&>*]:w-full min-w-[320px] [&>*]:print:break-inside-avoid-page">
				<Splash />
				<HardSkills />
				<Content h1="Experience" content={expContent} limit={3} />
				<Footer />
				<Splash pageBreaker />
				<Content h1="Education" content={eduContent} limit={3} />
				<Content h1="Projects" content={proContent} />
				<Footer />
			</main>
		</>
	);
}
