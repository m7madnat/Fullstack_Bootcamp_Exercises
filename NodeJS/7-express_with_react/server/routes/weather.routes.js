import { Router } from "express";
import { getWeather } from "../controllers/weather.controllers.js";
export const router = Router();

router.get("/api/weather/:location", getWeather);