# HTTP Proxy Stripper

This repository contains a Node.js application that acts as a lightweight web proxy. Its primary function is to modify incoming HTTP requests by stripping Urchin Tracking Module (UTM) parameters before they reach the server.

## Features

- Proxy server to intercept and modify HTTP requests.
- Removal of UTM parameters from query strings.
- Easy to set up and integrate.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone [URL_OF_THIS_REPO]
    ```

2. Navigate to the cloned directory:

    ```bash
    cd http-proxy-stripper
    ```

3. Install the necessary packages:

    ```bash
    npm install
    ```

## Configuration

In the `proxy-server.js` file, update the `TARGET_SERVER` constant to the URL of your target server:

```javascript
const TARGET_SERVER = "http://your-target-server.com";
