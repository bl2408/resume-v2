import HardSkills from "./Components/HardSkills";
import Splash from "./Components/Splash";

export default function App() {
	return (
		<main className="p-10 flex items-center gap-10 flex-col [&>*]:max-w-7xl [&>*]:w-full">
			<Splash />
			<HardSkills />
		</main>
	);
}
