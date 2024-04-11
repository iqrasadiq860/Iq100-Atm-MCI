#!/usr/bin/env node
import inquirer from "inquirer";
console.log('======ATM MACHINE======');
var mybalance = 10000;
let myPin = 35368;
let answer = await inquirer.prompt([
    {
        type: 'string',
        name: 'cardholdername',
        message: 'wellcome to iqra sadiq'
    }
]);
if (answer.cardholdername === 'iqrasadiq') {
    console.log('wellcome to iqra sadiq');
}
console.log(answer.cardholdername);
let Pin = await inquirer.prompt([
    {
        type: 'number',
        name: 'pincode',
        message: 'enter your 4digit pincode'
    },
]);
if (Pin.pincode === myPin) {
    console.log('correct pincode');
    let account = await inquirer.prompt([
        {
            type: 'list',
            name: 'accounttype',
            message: 'select your account type',
            choices: ['current', 'saving']
        }
    ]);
    let operation = await inquirer.prompt([
        { type: 'list',
            name: 'transaction',
            message: 'enter your transaction ',
            choices: ['cash withdraw', 'check balance', 'fastcash']
        }
    ]);
    if (operation.transaction === 'cash withdraw') {
        let amountans = await inquirer.prompt([
            {
                type: 'number',
                name: 'amount',
                message: 'enter your amount number'
            }
        ]);
        if (amountans.amount > mybalance) {
            console.log('insufficient balance');
        }
        else {
            mybalance -= amountans.amount;
            console.log(`${amountans.amount}withdraw successfuly`);
            console.log(`the remaining balance is ${mybalance}`);
        }
    }
    else if (operation.transaction === 'check balance') {
        console.log(`your account balance is ${mybalance}`);
    }
}
else {
    console.log('invalid pincode');
}
