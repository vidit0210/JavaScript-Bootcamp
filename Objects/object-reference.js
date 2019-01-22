let myAccount = {
    name: 'Vidit',
    expenses: 0,
    income: 0

}
let otherAccount = myAccount
otherAccount.income = 1000
//Even myAccount Statement will be changed  
let addExpense = (account, amount) => {

    account.expenses = account.expenses + amount
}
console.log(myAccount)
//AddIncome - account ,income
//resetAccount-income =0,expesnes =0
//getAccount Gets Summary of the Account

let AddIncome = (_acount, _income) => {
    _acount.income = _acount.income + _income
}
let resetAccount = (_account) => {
    _account.expenses = 0;
    _account.income = 0;
}

let getAccountSummary = (_account) => {
    let balance = _account.income - _account.expenses
    return `Account for ${_account.name} has balance $${balance} `
}
AddIncome(myAccount, 2000)
AddIncome(myAccount, 1000)
addExpense(myAccount, 200)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))