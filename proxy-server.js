// proxy-server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Configuration
const PORT = 3000;
const HOST = "localhost";
const TARGET_SERVER = "http://your-target-server.com";

// Create Express Server
const app = express();

// Modify and Filter Function
const modifyAndFilter = (proxyReq, req) => {
  if (req.url.includes("?")) {
    // Remove UTM parameters
    req.url = req.url.replace(/utm_[^&]+&?/g, "").replace(/&$/, "");
  }
};

// Proxy Middleware Options
const options = {
  target: TARGET_SERVER,
  changeOrigin: true,
  onProxyReq: modifyAndFilter,
};

// Use the proxy middleware
app.use("/", createProxyMiddleware(options));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
