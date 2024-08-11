import express, { Request, Response } from "express"
import Logger from "@UT/logger"
const r = express.Router()
const log = new Logger("Web")

r.all("/", (req: Request, res: Response) => {
	//const t = req.t
	res.render("index", {
		title: "Home",
		description: "tes",
		keyword: "yuuki",
		index: true
	})
})

r.get("/api", (req: Request, res: Response) => {
	res.send(`TODO`)
})

export default r