const express = require("express");
const bcrypt = require("bcrypt");
const mock_db = require("./mock_db");
const url_shortener = require("./url_shortener");
const app = express();
const port = 3000;

app.get("/generate", async (req, res) => {
	const url = req.query.long_url;
	const generated = await url_shortener.generate(url);
	if (generated == null) {
		res.send("Not a valid url!");
		return;
	}
	mock_db.add(url, generated);
	res.send({ site: [url, generated] });
});

app.get("/s/:short_url", (req, res) => {
	const short_url = req.params.short_url;
	const url = mock_db.get(short_url);
	res.redirect(url);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
