(async function() {
    let myYes = 0;
    let user = document.getElementById("sar");
    let button = document.getElementById("btn");
    let amount = document.getElementById("amount");
    let balance = document.getElementById("balance");
    let expend = document.getElementById("expenditure");
   

    button.addEventListener("click", () => {
        myYes = user.value;
        
        if (isNaN(myYes) || myYes <= 0) {
            
        } else {
            
            amount.innerHTML = myYes;
            balance.innerText = myYes - expend.innerText;
            user.value = "";
        }

        let disableButtons = (bool) => {
        let editButtons = document.getElementsByClassName("edit");
        Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
  };
        let button = document.getElementById("formButton");

            button.addEventListener("click", function() {
            let due = document.getElementById("dueDate").value;
            let Recurring = document.getElementById("Recurring").value;
            let total = document.getElementById("TolAmt").value;
            let tax = document.getElementById("tax").value;
            let category = document.getElementById("Category").value;

 
    console.log("Due Date: " + due);
    console.log("Recurring: " + Recurring);
    console.log("Total Amount: " + total + " pkr");
    console.log("Amount incl. tax: " + tax + " pkr");
    console.log("Category: " + category);
});
let addButton = document.getElementById("formButton");
let List = document.getElementById("list");
let money = document.getElementById("balance");
let ex = document.getElementById("expenditure");


addButton.addEventListener("click", function() {
    let dueDate = document.getElementById("dueDate").value;
    let Recurring = document.getElementById("Recurring").value;
    let totalAmount = parseFloat(document.getElementById("TolAmt").value);
    let taxAmount = parseFloat(document.getElementById("tax").value);
    let category = document.getElementById("Category").value;

    let expenseAmount = totalAmount + taxAmount;


    let expenseItem = document.createElement("li");
    expenseItem.textContent = "Due Date: " + dueDate + " | Recurring: " + Recurring + " | Total Amount: " + totalAmount + " pkr | Amount encl.tax: " + taxAmount + " pkr | Category: " + category;


    List.appendChild(expenseItem);

    let currentBalance = parseFloat(money.textContent);
    let newBalance = currentBalance - expenseAmount;
    money.textContent = newBalance;
     
    let currExpend = parseFloat(ex.textContent);
    let newExpend = currExpend + expenseAmount;
    ex.textContent = newExpend;
    
   


    document.getElementById("dueDate").value = "";
    document.getElementById("Recurring").value = "";
    document.getElementById("TolAmt").value = "";
    document.getElementById("tax").value = "";
    document.getElementById("Category").value = "";
});
    });
})();

