import express from "express";
import path from "path";
//express.route
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.static(PUBLIC_DIR));

app.get("/", (req, res) => {
  const indexHTML = path.join(PUBLIC_DIR, "index.html");
  res.sendFile(indexHTML);
});
app.get("/server_img/carousel", (req, res) => {
  const images = [1, 2, 3].map(
    (el) => `/server_img/carousel/carousel_${el}.png`
  );
  res.send(images);
});

app.get("/server_img/carousel/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  res.send(`<img src='/server_img/carousel/${itemId}.png'>`);
});

app.listen(PORT, () => {
  console.log("server is running!!!");
});
