const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


// ✅ Serve location.html at root
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/location.html");
});

// ✅ Handle location POST request
app.post("/location-handler", (req, res) => {
  console.log("📬 Request body:", req.body);
  const { latitude, longitude } = req.body;
  console.log(`📍 Location received: ${latitude}, ${longitude}`);
  res.status(200).send("Location received");
});


// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
