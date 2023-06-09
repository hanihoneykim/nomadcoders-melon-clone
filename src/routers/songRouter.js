import express from "express";
import { songUpload, albumArtUpload } from "../middlewares";
import { watch, getUpload, postUpload, getEdit, postEdit, likes, getLp } from "../controllers/songController";

const songRouter = express.Router();

songRouter.get("/:id([0-9a-fd]{24})", watch);
songRouter.route("/upload").get(getUpload).post(songUpload.fields([{name:"song"}, {name:"albumArt"}]), postUpload);
//songRouter.route("/edit").get(getEdit).post(albumUpload.single("album"), postEdit);
songRouter.get("/likes", likes)
songRouter.get("/lp", getLp);

export default songRouter;