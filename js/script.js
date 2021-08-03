function size() {
    var sizeordered = $("#size").val();
    //console.log(sizeordered);
    return parseInt(sizeordered);
}

function crust() {
    var crusttype = $("#crust").val();
    //console.log(crusttype);
    return parseInt(crusttype);
}

function toppings() {
    var toppingschoosen = $("#toppings").val();
    console.log(toppingschoosen);
    return parseInt(toppingschoosen);
}

function amount() {
    var orderedAmount = $("#amount").val();
    //console.log(orderedAmount);
    return parseInt(orderedAmount);
}

function price() {
    var Total = (size() + toppings() + crust()) * amount();
    alert("The total amount is Ksh." + (Total));
    alert("Your order is being worked on. It will take 15 minutes!")
}

function delivery() {
    var Total = (size() + toppings() + crust()) * amount();
    alert("The total amount is Ksh." + (Total));
    prompt("Enter the location you want the pizza to be delivered to.")
    alert("The pizza will be delivered in 45 minutes.")
}