const { Loan, Borrower } = require("../models/loan.model");

module.exports.findLoans = (req, res) => {
  Loan.find().then((loans) => {
    res.json({ loans });
  });
};

module.exports.findOneLoan = (req, res) => {
  const loanId = req.params.id;
  console.log(loanId);
  const loan = Loan.findOne({ loanId })
    .then((loan) => {
      res.json({ loan });
    })
    .catch((err) => {
      res.json({ message: "something went wrong", error: err });
    });
};

module.exports.newLoan = async (req, res) => {
  await Loan.create(req.body)
    .then((newlyCreatedLoan) => {
      res.json({ loan: newlyCreatedLoan });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

module.exports.newBorrower = async (req, res) => {
  const newBorrower = new Borrower(req.body);
  Borrower.create(req.body);
  const loanId = req.params.id;
  try {
    const loan = await Loan.findOne({ loanId });
    loan.borrowers.push(newBorrower);
    const savedLoan = await loan.save();
    return res.json({ loan: savedLoan });
  } catch (error) {
    console.error("error", error);
    res.status(404).json({ error });
  }
};

module.exports.updateBorrower = async (req, res) => {
  const body = req.body;
  const { loanId, pairId } = req.params;

  try {
    const updatedB = await Loan.findOneAndUpdate(
      { loanId },
      {
        $set: {
          borrowers: [body],
        },
      }
    );
    res.json({ message: "updated", updatedB });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteBorrower = async (req, res) => {
  const { loanId, pairId } = req.params;
  console.log(loanId, pairId);
  try {
    const loan = await Loan.findOneAndUpdate(
      { loanId },
      { $pull: { borrowers: { pairId } } }
    );
    res.json({ message: "deleted Borrower Successfully" });
  } catch (error) {
    console.log("error deletion", error);
  }
};

module.exports.deleteLoan = async (req, res) => {
  const loanId = req.params.id;
  await Loan.deleteOne({ loanId })
    .then((deleted) => res.json({ deleted }))
    .catch((error) => {
      console.log(error);
      res.json({ message: "deletion error", error });
    });
};
