#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const currency: any = {
    USD: 1,  // Base currency
    EUR: 94,
    GBP: 80,
    CAD: 1.38,
    AUD: 1.54,
    JPY: 153,
    INR: 83,
    NZD: 1.70,
    SGD: 1.37,
    CNY: 7.24,
    MYR: 4.79,
    AED: 3.67,
    KRW: 139,
    TRY: 32.43,
    SAR: 3.75,
    PKR: 277,
    IQD: 131,
    BDT: 110,
    LKR: 300,
    QAR: 3.67,
    AFN: 71,
    IDR: 161,
    IRR: 420,
    OMR: 38,
    CHF: 91

}
let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: chalk.bold.cyanBright("Enter from currency"),
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "NZD", "SGD", "CNY", "MYR", "AED", "KRW", "TRY", "SAR", "PKR", "IQD", "BDT", "LRK", "QAR", "AFN", "IDR", "IRR", "OMR", "CHF"]
        },
        {
            name: "to",
            type: "list",
            message: chalk.blue("Enter to currency"),
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "NZD", "SGD", "CNY", "MYR", "AED", "KRW", "TRY", "SAR", "PKR", "IQD", "BDT", "LRK", "QAR", "AFN", "IDR", "IRR", "OMR", "CHF"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.yellowBright("Enter your amount")
        }
    ]
);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.greenBright(convertedAmount));