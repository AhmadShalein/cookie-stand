"use strict";

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Stores = [];
let container = document.getElementById('Cites');
let tableEl = document.createElement('table');
let totalOfTotal = 0;

function Store (location,min,max,avg){
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
    for(let i = 0 ; i < workingHours.length ; i++){
    this.customers.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
    }
}
Store.prototype.cookiesPurchased = function () {
    for(let j = 0 ; j < workingHours.length ; j++){
    this.cookies.push(Math.floor(this.customers[j] * this.avg));
    }
}
Store.prototype.cookiesSum = function () {
    let sum = 0;
    for (let i = 0; i < workingHours.length; i++) {
        sum = sum + this.cookies[i];
    }
}

function headerTable(){
    let headerEl = document.createElement('tr');
    container.appendChild(tableEl);
    tableEl.appendChild(headerEl);
    let thEl = document.createElement('th');
    headerEl.appendChild(thEl);
    thEl.textContent = 'Location';

    for(let i = 0 ; i < workingHours.length ; i++){
        let thEl2 = document.createElement('th');
        headerEl.appendChild(thEl2);
        thEl2.textContent = workingHours[i];
    }
    let thEl3 = document.createElement('th');
    headerEl.appendChild(thEl3);
    thEl3.textContent = 'Daily Location Total'
}
headerTable();

Store.prototype.render = function(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.location;

    for(let s = 0 ; s < workingHours.length ; s++){
        let td3 = document.createElement('td');
        trEl.appendChild(td3);
        td3.textContent = this.cookies[s];
    }
    console.log(this.cookies);
}

    function footerTable(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let td3 = document.createElement('td');
    trEl.appendChild(td3);
    td3.textContent = "Totals";

    for(let i = 0 ; i < workingHours.length; i++){
        let td4 = document.createElement('td');
        trEl.appendChild(td4);
        let count = 0;
        for (let j = 0 ; j < Stores.length ; j++){
            count += Stores[j].cookies[i];
        }
        totalOfTotal += count;
        td4.textContent = count;
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
