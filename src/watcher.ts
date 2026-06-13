import { watch } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process"
import { setStringPrototypes } from "./utils/stringMethods.ts"

setStringPrototypes();

async function runWatcher() {
	const dirname = join(__dirname, "../");
	
	spawn("npm run start:server", { cwd: dirname, stdio: "inherit", shell: true });


	const watcher = watch(dirname, { recursive: true });
	
	for await (const { eventType, filename} of watcher) {
		if(filename.endsWith(".js")) continue;
		console.log(eventType, " - ", filename);
		spawn("npm run build && npm run start:server", { cwd: dirname, stdio: "inherit", shell: true });
	}
}

runWatcher();
