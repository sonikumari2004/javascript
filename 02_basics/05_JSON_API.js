/*  
  JSON stands for JavaScript Object Notation.

It is a lightweight text-based format used to store and exchange structured data.

{
  "name": "Rahul",   -->  keys are written in " "
  "age": 25,
  "city": "Patna",
  "isStudent": false
}

This represents one person with four pieces of information.

 JSON is popular because it is:

    Easy for humans to read
    Easy for programs to parse
    Language-independent
    Lightweight
    Commonly used with web APIs

JSON mainly consists of objects, arrays, keys, and values.

 JSON data types
JSON supports several basic data types.

String
Text is written inside double quotes.

{
  "name": "Rahul"
}

Number
{
  "age": 25,
  "salary": 50000.50
}

Boolean
Only true and false.

{
  "isStudent": true,
  "isEmployed": false
}

Null
Represents the absence of a value.

{
  "middleName": null
}

Array
An array contains multiple values and uses [ ].

{
  "skills": ["Python", "Java", "SQL"]
}

Nested object
JSON objects can contain other objects.

{
  "name": "Rahul",
  "address": {
    "city": "Patna",
    "state": "Bihar",
    "country": "India"
  }
}
*/



// _______________________________________________________________________________________________________

/*  
     API 

API stands for Application Programming Interface.

An API allows one software application to communicate with another software application or service.

Imagine a restaurant.

You
 ↓
Waiter
 ↓
Kitchen
 ↓
Waiter
 ↓
You

The waiter acts somewhat like an API.

You don't go into the kitchen and prepare the food yourself.
Instead:
You request something.
The waiter communicates your request to the kitchen.
The kitchen processes it.
The waiter brings the result back.

Your Application
       ↓
      API
       ↓
Server / Database
       ↓
      API
       ↓
Your Application

 Real-world API example
Suppose you have a weather application.
Your app needs today's weather.
Instead of maintaining weather information itself, it can ask a weather service:

Your App
   |
   | HTTP Request
   ↓
Weather API
   |
   ↓
Weather Server
   |
   ↓
Weather Data
   |
   ↓
JSON Response
   |
   ↓
Your App

The response could look like:
{
  "city": "Patna",
  "temperature": 31,
  "humidity": 65,
  "condition": "Sunny"
}

Your application reads this JSON and displays:
Patna

31°C
Sunny
Humidity: 65%


What is an API endpoint?
An endpoint is a specific URL through which you access a particular API resource.
For example:  https://example.com/api/users


HTTP methods
Web APIs commonly use HTTP methods.
The most important ones are:

  Method	          Purpose
    GET	               Retrieve data
    POST	           Create data
    PUT	              Replace/update data
    PATCH	           Partially update data   
    DELETE	           Delete data

  PATCH is generally used when you want to update only part of an object.


#  JavaScript has a built-in fetch() function for making HTTP requests.


*/