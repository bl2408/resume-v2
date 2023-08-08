import Experience from "./Components/Experience";
import HardSkills from "./Components/HardSkills";
import Splash from "./Components/Splash";

export default function App() {
	return (
		<main className="p-10 flex items-center gap-10 flex-col [&>*]:max-w-5xl [&>*]:w-full min-w-[320px]">
			<Splash />
			<HardSkills />
			<Experience />
		</main>
	);
}
