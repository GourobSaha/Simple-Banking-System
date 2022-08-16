document.getElementById('btn-deposit').addEventListener('click', function () {
    //get the deposit amount and converting into number
    let depositField = document.getElementById('deposit-amount');
    let newDeposit = parseFloat(depositField.value);

    //calculating total deposit with previous deposit
    let preDepositElement = document.getElementById('total-deposit');
    let preDeposit = parseFloat(preDepositElement.innerText);
    let currentDepositTotal = preDeposit + newDeposit;

    //calculating total balance with new deposit
    let preBalanceElement = document.getElementById('total-balance');
    let preBalance = parseFloat(preBalanceElement.innerText);
    let currentBalanceTotal = preBalance + newDeposit;

    //updating the value of new deposit and new balance
    preDepositElement.innerText = currentDepositTotal;
    preBalanceElement.innerText = currentBalanceTotal;


    depositField.value = '';
})


document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get the withdraw amount and converting into number
    let withdrawField = document.getElementById('withdraw-amount');
    let newWithdraw = parseFloat(withdrawField.value);

    //calculating total withdraw with previous withdraw
    let preWithdrawElement = document.getElementById('total-withdraw');
    let preWithdraw = parseFloat(preWithdrawElement.innerText);
    let currentWithdrawTotal = preWithdraw + newWithdraw;

    //calculating total balance with new withdraw
    let preBalanceElement = document.getElementById('total-balance');
    let preBalance = parseFloat(preBalanceElement.innerText);
    let currentBalanceTotal = preBalance - newWithdraw;

    // if the balance goes below 00 it will show an alert
    if (currentBalanceTotal < 0) {
        currentWithdrawTotal = 0;
        alert('You do not have enough balance');
        return;
    }
    else {
        preWithdrawElement.innerText = currentWithdrawTotal;
        preBalanceElement.innerText = currentBalanceTotal;
    }


    withdrawField.value = '';
})