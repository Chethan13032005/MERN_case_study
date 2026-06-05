import express from "express";
import cors from "cors";

// Import custom middleware
import { 
  logDischargeRequest, 
  doctorSignoffCheck, 
  pharmacyReview, 
  followupCheck, 
  errorHandler 
} from "./middlewares/discharge.js";

const app = express();

app.use(express.json()); 
app.use(cors());         

// Apply the global logger
app.use(logDischargeRequest);


app.post(
  "/discharge",
  doctorSignoffCheck,
  pharmacyReview,
  followupCheck,
  (req, res) => {
    req.dischargeLog.push({ step: "dischargeComplete", time: new Date().toISOString() });
    res.json({
      status: "Discharge complete",
      patient: req.body.patientName || "Unknown Patient",
      log: req.dischargeLog,
    });
  }
);


app.use(errorHandler);

app.listen(3000, () => {
  console.log("CityCare Hospital system running on http://localhost:3000");
});