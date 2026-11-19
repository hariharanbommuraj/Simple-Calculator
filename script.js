
function calculate(operation){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result;

    if (num1 === "" || num2  === "") {
        document.getElementById("result").innerHTML = 
             "Please enter both numbers!";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (operation === "add") { 
        result = num1 + num2;

    }

    else if (operation === "subtract") {
        result = num1 - num2;
    }

    else if (operation === "multiply") {
        result = num1 * num2;
    }

    else if (operation === "divide") {
        
        if (num2 === 0 ) {
            document.getElementById("result").innerHTML = 
                "Cannot divide by zero!";

            return;
        }

        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = 
        "Result: " + result;
    
}