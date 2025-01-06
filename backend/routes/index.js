import express from "express";
import {
  getVisitedCountries,
  addVisitedCountry,
} from "../controllers/countryController.js";

const router = express.Router();

router.get("/visited", getVisitedCountries);
router.post("/add", addVisitedCountry);

export default router;
