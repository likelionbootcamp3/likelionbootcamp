## Prerequisites

- Nodejs: Môi trường để chạy server
- Postman: Test API

## Setup project

### 1. Khởi tạo project

```bash
npm init -y
```

### 2. Cài đặt các packages

```bash

// Web framework for NodeJs
npm install express

// Sucrase is an alternative to Babel that allows super-fast development builds
npm install -D sucrase nodemon
```

- express is fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org/).
- sucrase is an alternative to Babel that allows super-fast development builds
- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### 3. Nodemon + Sucrase

- Tạo file `nodemon.json` và copy nội dung bên dưới vào:

```json
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

### 4. Tạo server

- Tạo file `index.js` trong folder `src`

```bash
mkdir src
touch src/index.js
```

- Thêm đoạn script dưới vào `index.js`

```js
import express from "express";

// Create server instance
const app = express();

// Define the routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Run server on port 3030
app.listen(3030);
```

### 5. Chạy server

- Thay đổi `script` trong `package.json`

```js
"scripts": {
	"dev": "nodemon src/index.js"
}
```

- Chạy server

```bash
npm run dev
```
