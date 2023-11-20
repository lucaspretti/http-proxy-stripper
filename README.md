# HTTP Proxy Stripper NOT WORKING (WIP)

## Introduction

The HTTP Proxy Stripper is a robust and lightweight Node.js application designed to optimize and secure your web browsing experience. Acting as a dynamic web proxy, it specializes in modifying incoming HTTP requests. The core functionality revolves around the removal of certain query parameters that are often used for tracking and marketing analytics, such as Urchin Tracking Module (UTM) parameters. By stripping these parameters, the proxy not only streamlines URL structures but also enhances user privacy and data protection.

## Key Features

- **Dynamic Proxy Capabilities**: The application efficiently handles requests to any server, ensuring flexibility and broad applicability.
- **Selective Query Parameter Removal**: Targets and removes specific query parameters predefined in the `paramsToRemove` array, including:
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_term`
  - `utm_content`
  - `ref`
  - `ref_`
  - `tag`
- **Enhanced User Privacy**: By removing tracking parameters, it helps in maintaining the privacy of the users, preventing unnecessary data exposure.
- **Lightweight and User-Friendly**: Developed using Node.js for minimal resource consumption, and designed for ease of setup and use.
- **Security Enhanced with Helmet**: Implements Helmet for setting various HTTP headers, improving security against common web vulnerabilities.


## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/lucaspretti/http-proxy-stripper
    ```

2. Navigate to the cloned directory:

    ```bash
    cd http-proxy-stripper
    ```

3. Install the necessary packages:

    ```bash
    npm install
    ```

## Running the Proxy Server

To start the proxy server, run the following command:

```bash
node proxy-server.js
```

The server will begin listening on `localhost` at port `3000`, dynamically processing and modifying incoming HTTP requests as configured.


The server will start on `localhost` at port `3000`.

## Configuring Your Browser to Use the Proxy

To route your web traffic through the proxy server, you need to configure your browser's proxy settings. Here's how you can do it for different browsers:

### Google Chrome

1. Go to Settings > Advanced > System > Open your computer’s proxy settings.
2. Under "Manual proxy setup," turn on "Use a proxy server."
3. Enter `localhost` in the "Address" field and `3000` in the "Port" field.
4. Save your changes.

### Mozilla Firefox

1. Go to Options > General > Network Settings.
2. Select "Manual proxy configuration."
3. Enter `localhost` in the "HTTP Proxy" field and `3000` in the "Port" field.
4. Check "Also use this proxy for HTTPS."
5. Click "OK" to save your changes.

### Other Browsers

For other browsers, the steps are similar. You generally need to find the network or proxy settings and then specify `localhost` as the proxy address and `3000` as the port.

## Configuring and Testing

Detailed instructions for configuring your browser or HTTP client to use this proxy are included in the subsequent sections of this README. Once set up, you can test the functionality by navigating to URLs containing the specified query parameters and observing their removal.

## Note

This proxy server is intended for development or internal use. Deploying it in a production environment may require additional security measures.

## License

[MIT License](LICENSE)

