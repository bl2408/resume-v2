import Socials from "./Socials";

export default function Splash() {
	return (
		<div className="relative grid w-full place-items-center p-10">
			<div className="w-full pb-20 lg:max-w-[80%]">
				<div className="text-left text-[clamp(4.2rem,14vw,8rem)] font-semibold leading-[.9em] tracking-tight text-black pb-2">
					Brian Lambert
				</div>

				<div className="flex flex-col gap-8 border-t-[6px] border-black items-end">
					<Socials />
				</div>
			</div>
		</div>
	);
}
