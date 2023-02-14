let Principal = document.getElementById('Principal');
let Loan_Term = document.getElementById('Loan-Term');
let Interest_Rate = document.getElementById('Interest-Rate');
let Down_Payment = document.getElementById('Down-Payment');
let Sales_Tax = document.getElementById('Sales-Tax');
let result = document.getElementById('result');
let n = 12;
let Monthly_pay = 0;

document.getElementById('Calculate').addEventListener("click", 
function()
{ 


        Monthly_pay = ( parseFloat(Principal.value) - parseFloat(Down_Payment.value) )* ( (parseFloat(Interest_Rate.value) / 100) / n ) 
        / (1 - (1 + (parseFloat(Interest_Rate.value) / 100) / n )**(-n * (parseFloat(Loan_Term.value)/n)) )
       
        if(Number.isNaN(Monthly_pay))
        {
            return document.getElementById("result").value =  "Fill in the blanks"
            
        }
            document.getElementById("result").value =  Monthly_pay
            
});

document.getElementById('Reset_1').addEventListener("click",
function()
{
    document.getElementById("Principal").value = "";
    document.getElementById("Loan-Term").value = "";
    document.getElementById("Interest-Rate").value = "";
    document.getElementById("Down-Payment").value = "";
    document.getElementById("Sales-Tax").value = "";
    document.getElementById("result").value = "";
});