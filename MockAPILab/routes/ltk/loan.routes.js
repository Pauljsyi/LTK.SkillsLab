const Controller = require("../../controllers/loans.controller");

module.exports = (app) => {
  app.get("/loans", Controller.findLoans);
  app.get("/loan/:id", Controller.findOneLoan);
  app.post("/loan/new", Controller.newLoan);
  // create borrower*
  app.post("/loans/:id/borrower/new", Controller.newBorrower);
  app.patch(
    "/loans/:loanId/borrower/:pairId/update",
    Controller.updateBorrower
  );
  // remove borrower with loanId and pairId
  app.delete(
    "/loans/:loanId/borrower/:pairId/remove",
    Controller.deleteBorrower
  );
  // remove loan with loanID
  app.delete("/loans/:id/remove", Controller.deleteLoan);
};
