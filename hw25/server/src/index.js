import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import path from "node:path";
// const mime = require("mime-types");

const app = express();

app.use(cors());
app.use("/api/users", routes.users);

app.listen(3000, () => {
  console.log("Listening port 3000");
});

// app.use(
//   express.static("public", {
//     setHeaders: (res, path) => {
//       const contentType = mime.lookup(path);
//       if (contentType) {
//         res.set("Content-Type", contentType);
//       }
//     },
//   })
// );

// app.get("/styles/main.css", function (req, res) {
//   res.type("text/css");
//   res.sendFile("/path/to/main.css");
// });

// app.use(express.static(path.join(__dirname + "/front")));

// app.use(express.static(path.join(dirname, "/front")));

// app.get("/styles/main.css", function (req, res) {
//   res.sendFile(path.join(dirname, "/front/styles/main.css"));
// });

app.use(express.static("front"));
