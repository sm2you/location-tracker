const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware setup
app.use(cors()); // Accept requests from any origin
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// ✅ Serve location.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "location.html"));
});

// ✅ Handle location POST request
app.post("/location-handler", (req, res) => {
  console.log("📬 Request body:", req.body);

  const { latitude, longitude } = req.body;
  if (!latitude || !longitude) {
    return res.status(400).send("❌ Missing location data");
  }

  console.log(`📍 Location received: ${latitude}, ${longitude}`);
  res.status(200).send("✅ Location received!");
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


