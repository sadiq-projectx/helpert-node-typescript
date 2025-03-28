import dotenv from "dotenv";
dotenv.config();
import { createApp } from "./createApp";

const PORT = process.env.PORT || 3011;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
