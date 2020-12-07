const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ROUTES

//Views Routes *handle-bars*
app.get("/", (req, res) => {
    res.render("index");
})

//API Routes
app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

app.post("/api/test", (req, res) => {
	console.log(req.body);
});

app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
});
