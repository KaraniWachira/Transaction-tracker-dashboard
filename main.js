
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Chocolate', amount: -270 },
    { id: 2, text: 'Wage', amount: 3000 },
    { id: 3, text: 'Book', amount: -190 },
    { id: 4, text: 'Camera', amount: 15000 }
];

let transactions = dummyTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    const sign = transaction[0].amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction[0].amount < 0 ? 'minus' : 'plus'
        )
    item.innerHTML = ` 
    ${transaction[0].text} <span>${sign}${Math.abs(transaction[0].amount)}</span>
    <button class="delete-btn" onClick ="">X </button>  
    `;
    list.appendChild(item);
}

addTransactionDOM(transactions);

// Update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);


//init app
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
    }
}


