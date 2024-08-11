import express, { Request, Response } from "express"
import Logger from "@UT/logger"
const r = express.Router()
const log = new Logger("Web")

r.all("/", (req: Request, res: Response) => {
	res.send(`Hello1`)
})

r.get("/api", (req: Request, res: Response) => {
	res.send(`Hello2`)
})

export default r