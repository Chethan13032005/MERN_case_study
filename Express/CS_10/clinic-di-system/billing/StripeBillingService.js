const { Service } = require("typedi");

@Service()
class StripeBillingService {
  async charge(patient, amount) {
    console.log(`Charged $${amount} to ${patient} via Stripe`);
  }
}

module.exports = StripeBillingService;