function size() {
    var orderedSize = $("#size-pizza").val();
    console.log(orderedSize);
    return parseInt(orderedSize);
}

function crustType() {
    var orderedCrust = $("#crust").val();
    //console.log(orderedCrust);
    return parseInt(orderedCrust);
}

function toppings() {
    var orderedToppings = $("#pizza-toppings").val();
    console.log(orderedToppings);
    return parseInt(orderedToppings);
}

function getQuantity() {
    var orderedAmount = $("#quantity").val();
    //console.log(orderedAmount);
    return parseInt(orderedAmount);
}

function totalPrice() {
    var Total = (size() + toppings() + crustType()) * getQuantity();
    alert("The total price is Ksh." + (Total));
    alert("Your order will be ready in 15 minutes")
}

function delivery() {
    var Total = (size() + toppings() + crustType()) * getQuantity();
    alert("The total price is Ksh." + (Total));
    prompt("Enter your location")
    alert("Your order will be delivered in 30minutes")
}