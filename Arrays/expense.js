const account ={
    name:'Vidit Shah',
    expenses :[],
    income:[],
    addExpense:function(description,amount){
        this.expenses.push({
            description:description,
            amount:amount
        })
    },
    addIncome:function(description,amount){
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary:function(){
        let totalExpense =0;
        let totalIncome =0;
        this.expenses.forEach(expense=>{totalExpense+=expense.amount})
        this.income.forEach(inc =>{totalIncome+=inc.amount})
        let balance = totalIncome - totalExpense;

        return balance
    }

    

    }
account.addIncome('Salary',100)
account.addExpense('Coffee',5)
account.addExpense('Coffee',5)
account.addExpense('Coffee',5)
account.addExpense('Coffee',5)
console.log(account.getAccountSummary())