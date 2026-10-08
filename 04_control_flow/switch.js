// Shortcut :   shift + alt + down arrow , it is used to copy all and paste it below
// use it and check -> First select a block of code and then use above shortcut 




// Switch  


// Syntax:   

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

 switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}       // # output: march 

/*        
       const month = 2

switch (month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("feb");
        break;
    case 3 march":
        console.log("march");
        break;
    case 4 :
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}   
         # output:  feb

  

*/
 
/*
 //  What will happen when we don't use break

const months = 2

switch (months) {
    case 1 :
        console.log("January");
        
    case 2 :
        console.log("feb");
        
    case 3:
        console.log("march");
        
    case 4 :
        console.log("april");

    default:
    console.log("default case match");      
}  
     // output :feb
                march
                april
                default case match

                Therfore break is used to immediately terminate a loop or a switch statement 
*/