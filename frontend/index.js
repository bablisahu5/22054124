require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const registerRoute = require("./routes/register");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4500;
if (!process.env.MONGO_URI) {
  console.error(" MONGO_URI is missing in .env file");
  process.exit(1); 
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected Successfully!"))
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
    process.exit(1); 
  });
app.use((req, res, next) => {
  console.log(`🛠 Incoming Request: ${req.method} ${req.url}`);
  next();
});

app.use("/api", registerRoute);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});