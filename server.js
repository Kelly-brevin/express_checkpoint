const express = require("express");
const path = require("path");
const webRoutes = require("./routes/web");
const checkWorkingHours = require("./middleware/timecheck");

const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Apply middleware
app.use(checkWorkingHours);

// Use routes
app.use("/", webRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
