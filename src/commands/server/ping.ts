import Logger from "@UT/logger"
import { Command } from "./Interface"

const log = new Logger("/ping", "blue")

export default async function handle(command: Command) {
	log.log(`udah goblok`)
}
