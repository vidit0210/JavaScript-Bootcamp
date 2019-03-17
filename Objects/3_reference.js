let myAccount ={name:"vidit",expenses:0,income:0};
let AddExpense  = (account,amount)=>{
    account.expenses = account.expenses + amount;
}
let AddINcome = (account,income)=>{
    account.income = account.income + income;
}
let ResetAccount = (Account)=>{
    Account.expenses=0;
    Account.income=0;
}

let getAccountSummary = (account)=>{
    console.log(`Owner ${account.name} \n  expenses ${account.expenses} Income: ${account.income} `)
}
AddExpense(myAccount,100)
AddINcome(myAccount,1000)
getAccountSummary(myAccount)
ResetAccount(myAccount)
getAccountSummary(myAccount)
