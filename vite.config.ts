import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	console.log(
		"USING BASE: " +
			(env.BUILD_BASE === "ghpages"
				? "/resume-v2/"
				: !env.BUILD_BASE
				? "/"
				: env.BUILD_BASE)
	);
	return {
		base:
			env.BUILD_BASE === "ghpages"
				? "/resume-v2/"
				: !env.BUILD_BASE
				? "/"
				: env.BUILD_BASE,
		plugins: [react()],
		build: {
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return id
								.toString()
								.split("node_modules/")[1]
								.split("/")[0]
								.toString();
						}
					},
				},
			},
		},
	};
});
