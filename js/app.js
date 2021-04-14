"use strict";

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
//     Location: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     custmersNum: [],
//     avgCustmers: function(){
//         for(let i = 0 ; i < workingHours.length ; i++)
//         this.custmersNum.push(Math.ceil(Math.random() * (this.max - this.min) + this.min));
//         console.log(this.custmersNum);
//     },
//     cookiesNum: [],
//     cookiesPurchased: function(){
//     for(let j = 0 ; j < workingHours.length ; j++)
//     this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
//     console.log(this.cookiesNum);
//     },
//     sum: 0,
//     cookiesSum: function(){
//     for (let k = 0; k < this.cookiesNum.length; k++) {
//         this.sum = this.sum + this.cookiesNum[k]
//     }
//     },
//     render: function(){
//     let div = document.getElementById('Cites');
//     let h2E1 = document.createElement('h2');
//     div.appendChild(h2E1);
//     h2E1.textContent = this.Location;
//     let ulE1 = document.createElement('ul');
//     h2E1.appendChild(ulE1);
//     for (let i = 0; i < this.cookiesNum.length; i++) {
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
//     }
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `Total: ${this.sum} cookies`;
//     }
// }
// seattle.avgCustmers();
// seattle.cookiesPurchased();
// seattle.cookiesSum();
// seattle.render();

// const tokyo = {
//     Location: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     custmersNum: [],
//     avgCustmers: function(){
//         for(let i = 0 ; i < workingHours.length ; i++)
//         this.custmersNum.push(Math.ceil(Math.random() * (this.max - this.min) + this.min));
//         console.log(this.custmersNum);
//     },
//     cookiesNum: [],
//     cookiesPurchased: function(){
//     for(let j = 0 ; j < workingHours.length ; j++)
//     this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
//     console.log(this.cookiesNum);
//     },
//     sum: 0,
//     cookiesSum: function(){
//     for (let k = 0; k < this.cookiesNum.length; k++) {
//         this.sum = this.sum + this.cookiesNum[k]
//     }
//     },
//     render: function(){
//     let div = document.getElementById('Cites');
//     let h2E1 = document.createElement('h2');
//     div.appendChild(h2E1);
//     h2E1.textContent = this.Location;
//     let ulE1 = document.createElement('ul');
//     h2E1.appendChild(ulE1);
//     for (let i = 0; i < this.cookiesNum.length; i++) {
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
//     }
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `Total: ${this.sum} cookies`;
//     }
// }
// tokyo.avgCustmers();
// tokyo.cookiesPurchased();
// tokyo.cookiesSum();
// tokyo.render();

// const dubai = {
//     Location: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     custmersNum: [],
//     avgCustmers: function(){
//         for(let i = 0 ; i < workingHours.length ; i++)
//         this.custmersNum.push(Math.ceil(Math.random() * (this.max - this.min) + this.min));
//         console.log(this.custmersNum);
//     },
//     cookiesNum: [],
//     cookiesPurchased: function(){
//     for(let j = 0 ; j < workingHours.length ; j++)
//     this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
//     console.log(this.cookiesNum);
//     },
//     sum: 0,
//     cookiesSum: function(){
//     for (let k = 0; k < this.cookiesNum.length; k++) {
//         this.sum = this.sum + this.cookiesNum[k]
//     }
//     },
//     render: function(){
//     let div = document.getElementById('Cites');
//     let h2E1 = document.createElement('h2');
//     div.appendChild(h2E1);
//     h2E1.textContent = this.Location;
//     let ulE1 = document.createElement('ul');
//     h2E1.appendChild(ulE1);
//     for (let i = 0; i < this.cookiesNum.length; i++) {
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
//     }
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `Total: ${this.sum} cookies`;
//     }
// }
// dubai.avgCustmers();
// dubai.cookiesPurchased();
// dubai.cookiesSum();
// dubai.render();

// const paris = {
//     Location: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     custmersNum: [],
//     avgCustmers: function(){
//         for(let i = 0 ; i < workingHours.length ; i++)
//         this.custmersNum.push(Math.ceil(Math.random() * (this.max - this.min) + this.min));
//         console.log(this.custmersNum);
//     },
//     cookiesNum: [],
//     cookiesPurchased: function(){
//     for(let j = 0 ; j < workingHours.length ; j++)
//     this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
//     console.log(this.cookiesNum);
//     },
//     sum: 0,
//     cookiesSum: function(){
//     for (let k = 0; k < this.cookiesNum.length; k++) {
//         this.sum = this.sum + this.cookiesNum[k]
//     }
//     },
//     render: function(){
//     let div = document.getElementById('Cites');
//     let h2E1 = document.createElement('h2');
//     div.appendChild(h2E1);
//     h2E1.textContent = this.Location;
//     let ulE1 = document.createElement('ul');
//     h2E1.appendChild(ulE1);
//     for (let i = 0; i < this.cookiesNum.length; i++) {
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
//     }
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `Total: ${this.sum} cookies`;
//     }
// }
// paris.avgCustmers();
// paris.cookiesPurchased();
// paris.cookiesSum();
// paris.render();

// const lima = {
//     Location: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     custmersNum: [],
//     avgCustmers: function(){
//         for(let i = 0 ; i < workingHours.length ; i++)
//         this.custmersNum.push(Math.ceil(Math.random() * (this.max - this.min) + this.min));
//         console.log(this.custmersNum);
//     },
//     cookiesNum: [],
//     cookiesPurchased: function(){
//     for(let j = 0 ; j < workingHours.length ; j++)
//     this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
//     console.log(this.cookiesNum);
//     },
//     sum: 0,
//     cookiesSum: function(){
//     for (let k = 0; k < this.cookiesNum.length; k++) {
//         this.sum = this.sum + this.cookiesNum[k]
//     }
//     },
//     render: function(){
//     let div = document.getElementById('Cites');
//     let h2E1 = document.createElement('h2');
//     div.appendChild(h2E1);
//     h2E1.textContent = this.Location;
//     let ulE1 = document.createElement('ul');
//     h2E1.appendChild(ulE1);
//     for (let i = 0; i < this.cookiesNum.length; i++) {
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
//     }
//         let liE1 = document.createElement('li')
//         ulE1.appendChild(liE1);
//         liE1.textContent = `Total: ${this.sum} cookies`;
//     }
// }
// lima.avgCustmers();
// lima.cookiesPurchased();
// lima.cookiesSum();
// lima.render();

let Stores = [];
let container = document.getElementById('Cites');
let tableEl = document.createElement('table');
let totalOfTotal = 0;

function Store(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = [];
    this.cookies = [];
    this.sum = 0;
    Stores.push(this);
    console.log('Stores Array', Stores);

}
Store.prototype.avgCustomers = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.customers.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
    }
}
Store.prototype.cookiesPurchased = function () {
    for (let j = 0; j < workingHours.length; j++) {
        this.cookies.push(Math.floor(this.customers[j] * this.avg));
    }
}
Store.prototype.cookiesSum = function () {

}

function headerTable() {
    let headerEl = document.createElement('tr');
    container.appendChild(tableEl);
    tableEl.appendChild(headerEl);
    let thEl = document.createElement('th');
    headerEl.appendChild(thEl);
    thEl.textContent = '';

    for (let i = 0; i < workingHours.length; i++) {
        let thEl2 = document.createElement('th');
        headerEl.appendChild(thEl2);
        thEl2.textContent = workingHours[i];
    }
    let thEl3 = document.createElement('th');
    headerEl.appendChild(thEl3);
    thEl3.textContent = 'Daily Location Total'
}
headerTable();

Store.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.location;

    for (let s = 0; s < workingHours.length; s++) {
        let td3 = document.createElement('td');
        trEl.appendChild(td3);
        td3.textContent = this.cookies[s];
    }
    for (let i = 0; i < workingHours.length; i++) {
        this.sum += this.cookies[i];
    }
    let td6 = document.createElement('td');
    trEl.appendChild(td6);
    td6.textContent = this.sum;
    console.log(this.cookies);
}

function footerTable() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let td3 = document.createElement('td');
    trEl.appendChild(td3);
    td3.textContent = "Totals";

    for (let i = 0; i < workingHours.length; i++) {
        let td4 = document.createElement('td');
        trEl.appendChild(td4);
        let countOne = 0;
        for (let j = 0; j < Stores.length; j++) {
            countOne += Stores[j].cookies[i];
        }
        totalOfTotal += countOne;
        td4.textContent = countOne;
        console.log(totalOfTotal);
    }
    let td5 = document.createElement('td');
    trEl.appendChild(td5);
    td5.textContent = totalOfTotal;
}
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

for (var i = 0; i < Stores.length; i++) {
    Stores[i].avgCustomers();
    Stores[i].cookiesPurchased();
    Stores[i].cookiesSum();
    Stores[i].render();
}
footerTable();

const form = document.getElementById('cookiesForm');

form.addEventListener('submit',handleSubmitting);

function handleSubmitting(event){
    event.preventDefault();
    console.log(event);

    let cityField = event.target.cityField.value;
    let min = parseInt(event.target.min.value);
    let max = parseInt(event.target.max.value);
    let avg = parseFloat(event.target.avg.value);

    tableEl.removeChild(tableEl.lastChild);
    let newStore = new Store(cityField,min,max,avg);
    newStore.avgCustomers();
    newStore.cookiesPurchased();
    newStore.cookiesSum();
    newStore.render();
    footerTable();
    console.log(cityField,min,max,avg);
}
