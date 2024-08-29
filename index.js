import { config } from "dotenv";
config();
import app from "./app.js";
import connectionTodb from "./config/dbconnect.js";

const PORT = process.env.PORT || 5014;

app.listen(PORT, async () => {
  await connectionTodb();
  console.log(`Port is running successfully at http://localhost:${PORT}`);
});
