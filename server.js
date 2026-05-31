const path = require("node:path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

app.disable("x-powered-by");

app.use(
  express.static(distPath, {
    extensions: ["html"],
    immutable: true,
    maxAge: "1y",
  }),
);

app.use((_request, response) => {
  response.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Resume website listening on port ${port}`);
});
