// Logging Every Discharge Request
export function logDischargeRequest(req, res, next) {
  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "requestReceived", time: new Date().toISOString() });
  next();
}

// Checking Doctor Sign-Off
export function doctorSignoffCheck(req, res, next) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({ error: "Doctor sign-off required before discharge." });
  }
  req.dischargeLog.push({ step: "doctorSignoff", time: new Date().toISOString() });
  next();
}

// Checking Pharmacy Review
export function pharmacyReview(req, res, next) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({ error: "Pharmacy review required before discharge." });
  }
  req.dischargeLog.push({ step: "pharmacyReview", time: new Date().toISOString() });
  next();
}

// Checking Follow-Up Scheduling
export function followupCheck(req, res, next) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({ error: "Follow-up appointment must be scheduled." });
  }
  req.dischargeLog.push({ step: "followupCheck", time: new Date().toISOString() });
  next();
}

// Centralized Error Handling
export function errorHandler(err, req, res, next) {
  console.error("Discharge log:", req.dischargeLog);
  res.status(500).json({ error: err.message || "Internal server error" });
}