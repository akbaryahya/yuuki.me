import os from "os"
import Logger from "@UT/logger"

const log = new Logger("Library")

export function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000 * ms)
	})
}

export function getLocalIpAddress(): string {
	const networkInterfaces = os.networkInterfaces()
	for (const ifaceName in networkInterfaces) {
		const iface = networkInterfaces[ifaceName]
		if (iface == undefined) {
			return "?"
		}
		for (const entry of iface) {
			if (!entry.internal && entry.family === "IPv4") {
				return entry.address
			}
		}
	}
	return "Unknown"
}