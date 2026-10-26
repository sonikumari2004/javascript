/*
       project 3

    let date = new Date()
    console.log(date.toLocaleTimeString()) 
     # output :  12:17:32 PM 
     now for 12:17:33 PM
             12:17:34 PM   --> for next time agin we have to run the code again and again .
            therefore we need a method that runs automatically after one sec to print the time. like -->  12:17:32 PM
                            12:17:33 PM
                            12:17:34 PM
                            12:17:35 PM  -->  setInterval() is such type of method


   If we have to make a digital clock, which is changing every second


   What is setInterval() in JavaScript?
setInterval() is a built-in JavaScript function that runs a piece of code repeatedly after a fixed time interval.

For example, you can use it to update a clock every second, refresh data automatically, or show a countdown timer.

Basic syntax:
         setInterval(function, delay);

   function — the code you want to execute repeatedly.
    delay — the time interval in milliseconds.
    1000 milliseconds = 1 second.

    Ex:   setInterval(() => {
        console.log("Hello Ankit")}, 2000)

    --> means after 2000 millisecond (2sec). it will continuously print  Hello Ankit
                        Hello Ankit
                        Hello Ankit
                        Hello Ankit
                        ....


 EXAMPLE: To make digital clock
  setInterval(() => {
     let date = new Date();
     clock.innerHTML = date.toLocaleTimeString()
    }, 1000)
*/


