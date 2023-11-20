// File: proxy-server.js

// Import necessary modules
const express = require("express");
const helmet = require("helmet"); // Helmet for security headers
const { createProxyMiddleware } = require("http-proxy-middleware");

// Server configuration
const PORT = 3000;
const HOST = "localhost";

// List of query parameters to be removed from the URL
const paramsToRemove = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
  "ref_",
  "tag",
  // Add any other parameters you want to remove
];

// Create an Express app
const app = express();

// Apply Helmet middleware for basic security
app.use(helmet());

// Function to modify incoming proxy requests
const modifyAndFilter = (proxyReq, req) => {
  try {
    console.log(`Incoming request to: ${req.url}`); // Log the original request URL

    if (req.url.includes("?")) {
      let target = req.headers["x-forwarded-proto"] || "http";
      let url = new URL(req.url, `${target}://${req.headers.host}`);

      // Log before removing params
      console.log(`Original Query Params: ${url.search}`);

      paramsToRemove.forEach((param) => url.searchParams.delete(param));

      req.url = url.pathname + url.search;
      console.log(`Modified URL: ${req.url}`); // Log the modified URL
    }
  } catch (error) {
    console.error(`Error in modifyAndFilter: ${error.message}`);
  }
};

// Proxy middleware options
const options = {
  changeOrigin: true,
  target: (req) => {
    try {
      console.log(`Received request for host: ${req.headers.host}`); // Log the host header

      let targetProto = req.headers["x-forwarded-proto"] || "http";
      if (!req.headers.host) {
        throw new Error("Host header is undefined");
      }

      let target = `${targetProto}://${req.headers.host}`;
      console.log(`Proxying to target: ${target}`);
      return target;
    } catch (error) {
      console.error(`Error determining target: ${error.message}`);
      return "http://fallback-url.com";
    }
  },
  onProxyReq: modifyAndFilter,
};

app.use("*", createProxyMiddleware(options));

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
