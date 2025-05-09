import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getadminJobs, getAllJob, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/getadminjobs").get(isAuthenticated, getadminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
   
export default router;