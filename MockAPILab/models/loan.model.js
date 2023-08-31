const mongoose = require("mongoose");
// const BorrowerSchema = require("./borrower.model");

const BorrowerSchema = new mongoose.Schema({
  pairId: Number,
  firstName: String,
  lastName: String,
  phone: String,
});

const LoanSchema = new mongoose.Schema({
  loanId: Number,
  borrowers: [BorrowerSchema],
});

// {
// 	loanId: int,
// 	borrowers: [
// 		{
// 			pairId: int
// 			firstName: 'string',
// 			lastName: 'string',
// 			phone: 'string',

// 		},
// 	]
// }

const Loan = mongoose.model("Loan", LoanSchema);
const Borrower = mongoose.model("Borrower", BorrowerSchema);

module.exports = { Loan, Borrower };
