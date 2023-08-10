import { SplashProps } from "../types";
import Socials from "./Socials";

export default function Splash({ pageBreaker = false }: SplashProps) {
	return (
		<div
			className={`flex flex-col gap-2 print:gap-1 ${
				pageBreaker && "print:block hidden print:mt-20"
			}`}>
			<div
				className={`text-left text-[clamp(3rem,20vw,5rem)] font-semibold leading-[.9em] tracking-tight text-black   ${
					!pageBreaker
						? "print:text-[2.5rem] pb-2"
						: "print:text-[1.5rem] pb-1"
				}`}>
				Brian Lambert
			</div>

			<div
				className={`bg-black h-[6px] ${
					!pageBreaker ? "print:h-[2px]" : "print:h-[1px]"
				}`}></div>
			<Socials />
		</div>
	);
}
