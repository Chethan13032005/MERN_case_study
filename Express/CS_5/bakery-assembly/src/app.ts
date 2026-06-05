import "reflect-metadata"; 
import { createExpressServer } from "routing-controllers";
import { OrderController } from "./controllers/OrderController";
import { BakingController } from "./controllers/BankingController";

const app = createExpressServer({
  controllers: [OrderController, BakingController],
});

app.listen(3000, () => {
  console.log("Crumb & Craft Bakery server is running on port 3000!");
});