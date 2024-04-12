# URL Shortener

This is a URL shortener project built with Node.js, Express.js, and MongoDB. It allows users to shorten long URLs into shorter ones and redirect to the original URL when the shortened URL is accessed.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
  ```
   git clone https://github.com/g7vind/urlShortner-backend.git
  ```
2. Go to the folder
  ```
  cd urlShortner-backend
  ```
3. Install dependencies
  ```
  npm install
  ```
4. Create a .env file
  ```
  DB = <Your MongoDB Url>
  PORT = <Your Port Number>
  ```
5.To Start server
  ```
  npm run dev
  ```
## Usage

### Shortening a URL

To shorten a URL, send a POST request to `/` with the following JSON payload:

```json
{
  "url": "https://example.com/very/long/url"
}
```
