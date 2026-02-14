/* for of the json 

    "Key" : "Value"
    Json is only Strings, Numbers, Arrays, Objects, true, false, null
    JSON = JavaScript Object Notation

    ---Learn from W3 school---

    JSON Syntax Rules

    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays

    Example of JSON

    {
      "employees": [
        { "firstName":"John", "lastName":"Doe" },
        { "firstName":"Anna", "lastName":"Smith" },
        { "firstName":"Peter", "lastName":"Jones" }
      ]
    }

    Accessing JSON

    You can access the JSON data as you would access any JavaScript object or array.

    Example

    var obj = {
      "employees": [
        { "firstName":"John", "lastName":"Doe" },
        { "firstName":"Anna", "lastName":"Smith" },
        { "firstName":"Peter", "lastName":"Jones" }
      ]
    };

    // Display first name of first object
    document.getElementById("demo").innerHTML = obj.employees[0].firstName;

    ---End of W3 school---

*/

const text = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;