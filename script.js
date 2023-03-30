function addition() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "The sum of " +num1+ " and " +num2+ " is "+ (num1+num2);
}

function subtraction() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "The diiference of " +num1+ " and " +num2+ " is " + (num1-num2);
}

function multiplication() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "The product of " +num1+ " and " +num2+ " is " + (num1*num2);
}

function division() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "The quotient of " +num1+ " and " +num2+ " is " + (num1/num2);
}

function remainder() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "The remainder of " +num1+ " and " +num2+ " is " + (num1%num2);
}

