const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const IntakeForm = require("./models/intake-form");

const port = 80;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello");
});

app.post("/intake-form", (req, res) => {
	const email = req.body.email;
	const company = req.body.company;
	const hasOptions = req.body.hasOptions;
	const country = req.body.country;
	const state = req.body.state;
	const startDate = req.body.startDate;
	const stillWorkThere = req.body.stillWorkThere;
	const finishData = req.body.finishData;
	const fairMarketValue = req.body.fairMarketValue;
	const knowlatestPreferredPrice = req.body.knowlatestPreferredPrice;
	const lastPreferredPrice = req.body.lastPreferredPrice;
	const grantOverView = req.body.grantOverView;
	const hasShares = req.body.hasShares;
	const sharesCount = req.body.sharesCount;
	const sharesPrice = req.body.sharesPrice;
	const annualIncome = req.body.annualIncome;
	const formData = new IntakeForm({
		email,
		company,
		hasOptions,
		country,
		state,
		startDate,
		stillWorkThere,
		finishData,
		fairMarketValue,
		knowlatestPreferredPrice,
		lastPreferredPrice,
		grantOverView,
		hasShares,
		sharesCount,
		sharesPrice,
		annualIncome
	});
	formData.save();
	res.status(200).json({
		message: "success"
	});
});

mongoose
	.connect(
		"mongodb://tcp:tcpAdmin123@cluster0-shard-00-00-fmigc.mongodb.net:27017,cluster0-shard-00-01-fmigc.mongodb.net:27017,cluster0-shard-00-02-fmigc.mongodb.net:27017/tcp-sandbox?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
		{ useNewUrlParser: true }
	)
	.then(result => {
		console.log("DB connectd");
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch(err => {
		console.log(err);
	});
