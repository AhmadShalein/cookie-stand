"use strict";

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
    Location: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    custmersNum: [],
    avgCustmers: function(){
        for(let i = 0 ; i < workingHours.length ; i++)
        this.custmersNum.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        console.log(this.custmersNum);
    },
    cookiesNum: [],
    cookiesPurchased: function(){
    for(let j = 0 ; j < workingHours.length ; j++)
    this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
    console.log(this.cookiesNum);
    },
    sum: 0,
    cookiesSum: function(){
    for (let k = 0; k < this.cookiesNum.length; k++) {
        this.sum = this.sum + this.cookiesNum[k]
    }
    },
    creatingSalmonCookies: function(){
    let body = document.getElementById('bodyContainer');
    let h2StoreOne = document.createElement('h2');
    body.appendChild(h2StoreOne);
    h2StoreOne.textContent = this.Location;
    let ulStoreOne = document.createElement('ul');
    h2StoreOne.appendChild(ulStoreOne);
    for (let i = 0; i < this.cookiesNum.length; i++) {
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
    }
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `Total: ${this.sum} cookies`;
    }
}
seattle.avgCustmers();
seattle.cookiesPurchased();
seattle.cookiesSum();
seattle.creatingSalmonCookies();

const tokyo = {
    Location: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    custmersNum: [],
    avgCustmers: function(){
        for(let i = 0 ; i < workingHours.length ; i++)
        this.custmersNum.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        console.log(this.custmersNum);
    },
    cookiesNum: [],
    cookiesPurchased: function(){
    for(let j = 0 ; j < workingHours.length ; j++)
    this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
    console.log(this.cookiesNum);
    },
    sum: 0,
    cookiesSum: function(){
    for (let k = 0; k < this.cookiesNum.length; k++) {
        this.sum = this.sum + this.cookiesNum[k]
    }
    },
    creatingSalmonCookies: function(){
    let body = document.getElementById('bodyContainer');
    let h2StoreOne = document.createElement('h2');
    h2StoreOne.textContent = this.Location;
    body.appendChild(h2StoreOne);
    let ulStoreOne = document.createElement('ul');
    h2StoreOne.appendChild(ulStoreOne);
    for (let i = 0; i < this.cookiesNum.length; i++) {
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
    }
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `Total: ${this.sum} cookies`;
    }
}
tokyo.avgCustmers();
tokyo.cookiesPurchased();
tokyo.cookiesSum();
tokyo.creatingSalmonCookies();

const dubai = {
    Location: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    custmersNum: [],
    avgCustmers: function(){
        for(let i = 0 ; i < workingHours.length ; i++)
        this.custmersNum.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        console.log(this.custmersNum);
    },
    cookiesNum: [],
    cookiesPurchased: function(){
    for(let j = 0 ; j < workingHours.length ; j++)
    this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
    console.log(this.cookiesNum);
    },
    sum: 0,
    cookiesSum: function(){
    for (let k = 0; k < this.cookiesNum.length; k++) {
        this.sum = this.sum + this.cookiesNum[k]
    }
    },
    creatingSalmonCookies: function(){
    let body = document.getElementById('bodyContainer');
    let h2StoreOne = document.createElement('h2');
    body.appendChild(h2StoreOne);
    h2StoreOne.textContent = this.Location;    
    let ulStoreOne = document.createElement('ul');
    h2StoreOne.appendChild(ulStoreOne);
    for (let i = 0; i < this.cookiesNum.length; i++) {
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
    }
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `Total: ${this.sum} cookies`;
    }
}
dubai.avgCustmers();
dubai.cookiesPurchased();
dubai.cookiesSum();
dubai.creatingSalmonCookies();

const paris = {
    Location: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    custmersNum: [],
    avgCustmers: function(){
        for(let i = 0 ; i < workingHours.length ; i++)
        this.custmersNum.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        console.log(this.custmersNum);
    },
    cookiesNum: [],
    cookiesPurchased: function(){
    for(let j = 0 ; j < workingHours.length ; j++)
    this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
    console.log(this.cookiesNum);
    },
    sum: 0,
    cookiesSum: function(){
    for (let k = 0; k < this.cookiesNum.length; k++) {
        this.sum = this.sum + this.cookiesNum[k]
    }
    },
    creatingSalmonCookies: function(){
    let body = document.getElementById('bodyContainer');
    let h2StoreOne = document.createElement('h2');
    body.appendChild(h2StoreOne);
    h2StoreOne.textContent = this.Location;
    let ulStoreOne = document.createElement('ul');
    h2StoreOne.appendChild(ulStoreOne);
    for (let i = 0; i < this.cookiesNum.length; i++) {
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
    }
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `Total: ${this.sum} cookies`;
    }
}
paris.avgCustmers();
paris.cookiesPurchased();
paris.cookiesSum();
paris.creatingSalmonCookies();

const lima = {
    Location: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    custmersNum: [],
    avgCustmers: function(){
        for(let i = 0 ; i < workingHours.length ; i++)
        this.custmersNum.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        console.log(this.custmersNum);
    },
    cookiesNum: [],
    cookiesPurchased: function(){
    for(let j = 0 ; j < workingHours.length ; j++)
    this.cookiesNum.push(Math.floor(this.custmersNum[j] * this.avg));
    console.log(this.cookiesNum);
    },
    sum: 0,
    cookiesSum: function(){
    for (let k = 0; k < this.cookiesNum.length; k++) {
        this.sum = this.sum + this.cookiesNum[k]
    }
    },
    creatingSalmonCookies: function(){
    let body = document.getElementById('bodyContainer');
    let h2StoreOne = document.createElement('h2');
    body.appendChild(h2StoreOne);
    h2StoreOne.textContent = this.Location;
    let ulStoreOne = document.createElement('ul');
    h2StoreOne.appendChild(ulStoreOne);
    for (let i = 0; i < this.cookiesNum.length; i++) {
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `${workingHours[i]}: ${this.cookiesNum[i]} cookies`;
    }
        let liStoreOne = document.createElement('li')
        ulStoreOne.appendChild(liStoreOne);
        liStoreOne.textContent = `Total: ${this.sum} cookies`;
    }
}
lima.avgCustmers();
lima.cookiesPurchased();
lima.cookiesSum();
lima.creatingSalmonCookies();
