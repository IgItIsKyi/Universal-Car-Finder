var Loan_Term = document.getElementById('Loan-Term');
var Interest_Rate = document.getElementById('Interest-Rate');
var Down_Payment = document.getElementById('Down-Payment');
var Sales_Tax = document.getElementById('Sales-Tax');
var result = document.getElementById('result');

document.getElementById('Calculate').addEventListener("click", 
function(){
    res.value = parseInt(Loan_Term.value) +parseInt(Interest_Rate.value) 
    + parseInt(Down_Payment.value) + parseInt(Sales_Tax.value)
});