const { Service } = require("typedi");

@Service()
class EmailService {
  async send(to, message) {
    console.log(`Email sent to ${to}: ${message}`);
  }
}

module.exports = EmailService;