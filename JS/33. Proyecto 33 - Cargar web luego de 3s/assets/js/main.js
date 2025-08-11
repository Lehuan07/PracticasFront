
let numberAcount = document.querySelector(".header__number");
let money = document.querySelector(".header__money");

let containersIcos = document.querySelectorAll(".item__ico");
let titles = document.querySelectorAll(".item__title");
let dates = document.querySelectorAll(".item__text");
let bills = document.querySelectorAll(".item__bill");
let totals = document.querySelectorAll(".item__total");

let bgLoads = document.querySelectorAll(".bg__load")
let bgTexts = document.querySelectorAll(".bg__text")

function setInfo(){
    numberAcount.innerHTML = "CU99 98654 52315 225648J"
    money.innerHTML = "$5.000"

    titles.forEach(title =>{
        title.innerHTML = "Empresa";
    })

    dates.forEach(date =>{
        date.innerHTML = "20/08/25";
    })

    bills.forEach(bill =>{
        bill.innerHTML = "-$400";
    })

    totals.forEach(total =>{
        total.innerHTML = "$5000";
    })

    containersIcos.forEach(containersIco =>{
        containersIco.innerHTML = `<i class="fa-solid fa-credit-card"></i>`;
    })

    bgLoads.forEach(bgLoad =>{
        bgLoad.classList.remove("bg__load")
    })

        bgTexts.forEach(bgText =>{
        bgText.classList.remove("bg__text")
    })
}

setTimeout(setInfo, 3000);

