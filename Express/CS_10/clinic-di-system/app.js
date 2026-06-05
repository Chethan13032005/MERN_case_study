require("reflect-metadata")

const express = require("express")

const AppointmentService = require("./appointments/AppointmentService")
const SMSService = require("./notifications/SMSService")
const StripeBillingService = require("./billing/StripeBillingService")

const app = express()

app.use(express.json())

/* dependency injection */
const notifier = new SMSService()
const billing = new StripeBillingService()

const appointmentService = new AppointmentService(
  notifier,
  billing
)

app.post("/appointments", async (req, res) => {

  const { patient, time, amount } = req.body

  const result = await appointmentService.bookAppointment(
    patient,
    time,
    amount
  )

  res.json(result)

})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})