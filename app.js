var taskNum = 0;
while (
  taskNum < 1 ||
  taskNum > 14 ||
  taskNum === "" ||
  taskNum === null ||
  taskNum != Number(taskNum)
) {
  taskNum = prompt("Enter task number:");
  if (taskNum === null || taskNum === "") {
    alert("Please enter some value!");
  } else if (taskNum != Number(taskNum)) {
    alert("This is not a number!");
  } else if (taskNum < 1 || taskNum > 14) {
    alert("There is no such task!");
  }
}

taskNum = Number(taskNum);

//Question 1
if (taskNum === 1) {
  function tellTime() {
    document.write(new Date());
  }
  tellTime();
}

//Question 2
else if (taskNum === 2) {
  function greetUser(firstName, lastName) {
    if (firstName == Number(firstName) || lastName == Number(lastName)) {
      return null;
    }
    alert("Greetings, " + firstName + " " + lastName + ".");
  }
  var firstName = "Muhammad";
  var lastName = "Adil";
  greetUser(firstName, lastName);
}

//Question 3
else if (taskNum === 3) {
  function sum(num1, num2) {
    var sum = +num1 + +num2;
    return sum;
  }
  var num1 = "";
  while (num1 === null || num1 === "" || num1 != Number(num1)) {
    num1 = prompt("Enter 1st number:");
    if (num1 === null || num1 === "") {
      alert("Please enter a number!");
    } else if (num1 != Number(num1)) {
      alert("This isn't a number!");
    }
  }
  var num2 = "";
  while (num2 === null || num2 === "" || num2 != Number(num2)) {
    num2 = prompt("Enter 2nd number:");
    if (num2 === null || num2 === "") {
      alert("Please enter a number!");
    } else if (num2 != Number(num2)) {
      alert("This isn't a number!");
    }
  }
  var result = sum(num1, num2);
  alert(num1 + " + " + num2 + " = " + result);
}

//Question 4
else if (taskNum === 4) {
  function calculate(num1, num2, operator) {
    if (num1 != Number(num1) || num2 != Number(num2)) {
      return null;
    }
    if (operator == 1) {
      var result = num1 % num2;
      if (result % 1 != 0) {
        result = result.toFixed(2);
        if (result == 0) {
          result.toFixed();
        }
      }
      return result;
    } else if (operator == 2) {
      var result = num1 / num2;
      if (result % 1 != 0) {
        result = result.toFixed(2);
      }
      return result;
    } else if (operator == 3) {
      var result = num1 * num2;
      return result;
    } else if (operator == 4) {
      var result = +num1 + +num2;
      return result;
    } else if (operator == 5) {
      var result = num1 - num2;
      return result;
    } else {
      return undefined;
    }
  }
  var num1 = "";
  while (num1 === null || num1 === "" || num1 != Number(num1)) {
    num1 = prompt("Enter 1st Number:");
    if (num1 === null || num1 === "") {
      alert("Please enter a number!");
    } else if (num1 != Number(num1)) {
      alert("This isn't a number!");
    }
  }
  var num2 = "";
  while (num2 === null || num2 === "" || num2 != Number(num2)) {
    num2 = prompt("Enter 2nd Number:");
    if (num2 === null || num2 === "") {
      alert("Please enter a number!");
    } else if (num2 != Number(num2)) {
      alert("This isn't a number!");
    }
  }
  var operator = "";
  while (
    operator === null ||
    operator === "" ||
    operator != Number(operator) ||
    (operator == 1 && num2 == 0) ||
    (operator == 2 && num2 == 0)
  ) {
    operator = prompt(
      "Choose an operation:\n1:Modulus\n2:Division\n3:Multiplication\n4:Addition\n5:Subtraction"
    );
    if (operator === null || operator === "") {
      alert("Please enter a number!");
    } else if (operator != Number(operator)) {
      alert("This isn't a number!");
    } else if ((operator == 1 && num2 == 0) || (operator == 2 && num2 == 0)) {
      alert("Division by 0 is undefined!");
    }
  }
  var result = calculate(num1, num2, operator);
  if (operator == 1) {
    document.write(num1 + " % " + num2 + " = " + result);
  } else if (operator == 2) {
    document.write(num1 + " / " + num2 + " = " + result);
  } else if (operator == 3) {
    document.write(num1 + " * " + num2 + " = " + result);
  } else if (operator == 4) {
    document.write(num1 + " + " + num2 + " = " + result);
  } else if (operator == 5) {
    document.write(num1 + " - " + num2 + " = " + result);
  } else {
    alert("The operation is not defined!");
  }
}

//Question 5
else if (taskNum === 5) {
  function square(num) {
    if (num != Number(num)) {
      return null;
    }
    return num * num;
  }
  var number = 8;
  document.write("Number: " + number + "<br />");
  document.write("Square: " + square(number));
}

//Question 6
else if (taskNum === 6) {
  function getFactorial(num) {
    if (num != Number(num) || num < 0) {
      return undefined;
    }
    var factorial = 1;
    if (num == 0 || num == 1) {
      return factorial;
    }
    factorial = num;
    for (var i = num - 1; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  }
  var number = "";
  while (
    number === "" ||
    number === null ||
    number != Number(number) ||
    number.indexOf(".") != -1
  ) {
    number = prompt("Enter an integer to find its factorial: ");
    if (number === "" || number === null) {
      alert("Please enter an integer!");
    } else if (number != Number(number)) {
      alert("This isn't a number!");
    } else if (number.indexOf(".") != -1) {
      alert("This program does not support decimals!");
    }
  }
  var factorial = getFactorial(number);
  document.write("The factorial of " + number + " is " + factorial + ".");
}

//Question 7
else if (taskNum === 7) {
  function count(start, end) {
    if (start > end || start != Number(start) || end != Number(end)) {
      return null;
    }
    for (var i = start; i <= end; i++) {
      document.write(i + "<br />");
    }
  }
  var start = 1;
  var end = 50;
  count(start, end);
}

//Question 8
else if (taskNum === 8) {
  function calculateHypotenuse(base, perpendicular) {
    if (
      base <= 0 ||
      perpendicular <= 0 ||
      base != Number(base) ||
      perpendicular != Number(perpendicular)
    ) {
      return null;
    }
    function calculateSquare(base, perpendicular) {
      base = base ** 2;
      perpendicular = perpendicular ** 2;
      return [base, perpendicular];
    }
    sqrValues = calculateSquare(base, perpendicular);
    var sqrBase = sqrValues[0];
    var sqrPerpendicular = sqrValues[1];
    var hypotenuse = Math.sqrt(sqrBase + sqrPerpendicular);
    if (hypotenuse % 1 === 0) {
    				return hypotenuse;
    }
    else {
    				return hypotenuse.toFixed(2);
    }
  }
  var base = 6;
  var perpendicular = 8;
  var hypotenuse = calculateHypotenuse(base, perpendicular);
  document.write("Base: " + base + "<br />");
  document.write("Perpendicular: " + perpendicular + "<br />");
  document.write("Hypotenuse: " + hypotenuse + "<br />");
}

//Question 9
else if (taskNum === 9) {
  function calcTriangleArea(width, height) {
    if (
      width <= 0 ||
      height <= 0 ||
      width != Number(width) ||
      height != Number(height)
    ) {
      return null;
    }
    var area = width * height;
    if (area % 1 == 0) {
      return area;
    } else {
      return area.toFixed(2);
    }
  }
  var area = calcTriangleArea(15, 20);
  document.write("<h1>Values As Arguments</h1>");
  document.write("<p>Area of triangle is " + area + "</p>");
  var width = 15.3,
    height = 20.7;
  area = calcTriangleArea(width, height);
  document.write("<h1>Variables As Arguments</h1>");
  document.write("<p>Area of triangle is " + area + "</p>");
}

//Question 10
else if (taskNum === 10) {
  function isPalindrome(value) {
    if (typeof value === "number") {
      return null;
    }
    var reversedValue = "";
    for (var i = value.length - 1; i >= 0; i--) {
      reversedValue += value[i];
    }
    return value === reversedValue;
  }
  var string = "madam";
  var palindromeCheck = isPalindrome(string);
  if (palindromeCheck) {
    document.write(string + " is palindrome.");
  } else if (palindromeCheck === null) {
    alert("You entered a number!");
  } else {
    document.write(string + " is not palindrome.");
  }
}

//Question 11
else if (taskNum === 11) {
  function capAllWords(str) {
    if (str === null || str === "") {
      return undefined;
    }
    if (str.indexOf(" ") === -1) {
      str = str[0].toUpperCase() + str.slice(1);
      return str;
    }
    cappedStr = "";
    length = str.length;
    for (var i = 0; i < length; i++) {
      cappedStr += str[0].toUpperCase() + str.slice(1, str.indexOf(" ") + 1);
      if (str[str.indexOf(" ") + 1] == undefined) {
      				return cappedStr;
      }
      str = str.slice(str.indexOf(" ") + 1);
      if (str.indexOf(" ") === -1) {
        cappedStr += str[0].toUpperCase() + str.slice(1);
        return cappedStr;
      }
    }
  }
  var string = "";
  while (string === "" || string === null || string == Number(string)) {
    string = prompt("Enter a string to capitalize its words: ");
    if (string === "" || string === null) {
      alert("You entered nothing!");
    } else if (string == Number(string)) {
      alert("Your input has no words!");
    }
  }
  var titleCaseStr = capAllWords(string);
  document.write("<b>Your Input:</b> " + string + "<br />");
  document.write("<b>Title Case String:</b> " + titleCaseStr);
}

//Question 12
else if (taskNum === 12) {
  function getLongestStr(str) {
    if (typeof str === "number") {
      return null;
    }
    if (str.indexOf(" ") === -1) {
      return str;
    }
    var longestStr = "";
    var length = str.length;
    for (var i = 0; i < length; i++) {
      if (str.slice(0, str.indexOf(" ")).length > longestStr.length) {
        longestStr = str.slice(0, str.indexOf(" "));
      }
      str = str.slice(str.indexOf(" ") + 1);
      if (str.indexOf(" ") === -1) {
        if (str.length > longestStr.length) {
          longestStr = str;
          return longestStr;
        } else {
          return longestStr;
        }
      }
    }
  }
  var string = "";
  while (string === "" || string === null || string == Number(string)) {
    string = prompt("Enter text to find its longest section:");
    if (string === "" || string === null) {
      alert("Please enter some text!");
    } else if (string == Number(string)) {
      alert("Your input has no words!");
    }
  }
  var longestString = getLongestStr(string);
  document.write("<b>Your Input:</b> " + string + "<br />");
  document.write("<b>Longest Section</b>: " + longestString);
}

//Question 13
else if (taskNum === 13) {
  function countOccurrence(str, chr) {
    if (
      typeof str === "number" ||
      typeof chr === "number" ||
      string.indexOf(" ") !== -1 ||
      chr.length !== 1
    ) {
      return null;
    }
    var chrCount = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === chr) {
        chrCount += 1;
      }
    }
    return chrCount;
  }
  var string = "Unobtainable";
  var character = "a";
  var occurrence = countOccurrence(string, character);
  if (occurrence !== null) {
    document.write(
      "The character " +
        "'" +
        character +
        "'" +
        " appears in the word " +
        string +
        " " +
        occurrence +
        " time(s)."
    );
  } else {
    alert("You entered an invalid value!");
  }
}

//Question 14
else if (taskNum === 14) {
  function calcCircumference(radius) {
    if (radius != Number(radius) || radius <= 0) {
      return null;
    }
    var circumference = 2 * Math.PI * radius;
    if (circumference % 1 == 0) {
      return circumference;
    } else {
      return circumference.toFixed(2);
    }
  }
  function calcArea(radius) {
    if (radius != Number(radius) || radius <= 0) {
      return null;
    }
    var area = Math.PI * radius ** 2;
    if (area % 1 == 0) {
      return area;
    } else {
      return area.toFixed(2);
    }
  }
  var radius = 8.5;
  var circumference = calcCircumference(radius);
  var area = calcArea(radius);
  if (radius > 0) {
    document.write("Radius: " + radius + "<br />");
    document.write("Circumference: " + circumference + "<br />");
    document.write("Area: " + area);
  } else {
    alert("Invalid Radius!");
  }
}
