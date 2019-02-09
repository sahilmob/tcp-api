const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema({
	email: String,
	company: String,
	hasOptions: String,
	country: String,
	state: String,
	startDate: String,
	stillWorkThere: String,
	finishData: String,
	fairMarketValue: String,
	knowlatestPreferredPrice: String,
	lastPreferredPrice: String,
	grantOverView: [
		{
			vestedOption: String,
			strikePrice: String,
			grantType: String
		}
	],
	hasShares: String,
	sharesCount: String,
	sharesPrice: String,
	annualIncome: String
});

module.exports = mongoose.model("form", formSchema);
