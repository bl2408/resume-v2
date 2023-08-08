import Socials from "./Socials";

export default function Splash() {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-left text-[clamp(4.2rem,14vw,8rem)] font-semibold leading-[.9em] tracking-tight text-black pb-2">
				Brian Lambert
			</div>

			<div className="bg-black h-[6px]"></div>
			<Socials />
		</div>
	);
}
