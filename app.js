const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || "4000";

const router = express.Router();

app.use(express.static(path.join(__dirname, "public")));

const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

router.get("/", (req, res) => {
  res.render("index", {});
});

router.get("/services", (req, res) => {
  res.render("services", {});
});

router.get("/gallery", (req, res) => {
  res.render("gallery", {});
});

router.get("/community", (req, res) => {
  res.render("community", {});
});

router.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
