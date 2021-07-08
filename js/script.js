var enteringInformationSection = document.getElementById("entering-information");
var nameElement = document.getElementById("name");
var surnameElement = document.getElementById("surname");
var kmsElement = document.getElementById("kms");
var ageRangeElement = document.getElementById("age-range");

var submitButtonElement = document.getElementById("submit-button");
var resetButtonElement = document.getElementById("reset-button");

var yourTicketSection = document.getElementById("your-ticket");
var nameDisplayElement = document.getElementById("name-display");
var carriageDisplayElement = document.getElementById("carriage-display");
var trainCodeDisplayElement = document.getElementById("train-code");
var offerDisplayElement = document.getElementById("offer-display");
var priceDisplayElement = document.getElementById("price-display");
var fullPriceDisplayElement = document.getElementById("full-price-display");

var priceConstant = 0.21;

submitButtonElement.addEventListener("click", function () {
    var userName = nameElement.value.toLowerCase();
    var surname = surnameElement.value.toLowerCase();
    var kms = kmsElement.value;
    var ageRange = ageRangeElement.value;
    var carriage = Math.floor(Math.random() * 12) + 1;
    var trainCode = Math.floor(Math.random() * 99999) + 1
    var offer = "Tariffa ordinaria";
    var price = kms * priceConstant;
    var fullPrice = price;

    if (ageRange === "min") {
        price *= .8;
        offer = "Offerta Junior (-20%)"
        fullPriceDisplayElement.classList.remove("invisible");
    }
    if (ageRange === "over65") {
        price *= .6;
        offer = "Offerta Senior (-40%)"
        fullPriceDisplayElement.classList.remove("invisible");
    }

    nameDisplayElement.innerHTML = userName + " " + surname;
    carriageDisplayElement.innerHTML = carriage;
    trainCodeDisplayElement.innerHTML = "#" + trainCode;
    offerDisplayElement.innerHTML = offer;
    priceDisplayElement.innerHTML = price.toFixed(2) + "€";
    fullPriceDisplayElement.innerHTML = fullPrice.toFixed(2) + "€";

    yourTicketSection.classList.remove("invisible");
})

resetButtonElement.addEventListener("click", function () {
    nameElement.value = "";
    surnameElement.value = "";
    kmsElement.value = "10";
    ageRangeElement.value = "mag";
    yourTicketSection.classList.add("invisible");
})