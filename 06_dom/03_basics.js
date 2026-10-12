/*
   
<ul>
    <li class = "list-item"> one </li>
    <li class = "list-item"> two</li>
    <li class = "list-item"> three</li>
    <li class = "list-item"> four</li>

</ul>

--> suppose all one,two,three, four  are written in white color
And we want to change it colors to orange

step1:
get the element whose class name is list-item
  document.getElementByClassName('list-item')
step2: loop it but the error occurs because of below reason

It return the HTML collection [......] --> which is neither a node list nor an array
Hence here forEach() , bhi work nhi krega for looping because forEach() work for node list or array. So for looping it 1st we will convert it into an array ==> using synatx:
                Array.from() , note capital 'A' in Array

Array.from(tempClassList)   --> retruns array 

const myConvertedArray = Array.from(tempClassList) 

now we can use forEach()

myConvertedArray.forEach( (li) => {
    // change the text color
    li.style.color = 'orange'
    })

  ## Remember the process how we change or modify the elements using querySelector

Select all the h2 headings , change it color, background color and text 
  Ex:   html
        javascript
        css
        python
        java         --> All therse are h2 heading with class name , class = "my-headline"


   const myH2 = document.querySelectorAll('.my-headline') -> dot is used because it is class name
   
   now myH2 , contains all the heading with classname my-heading

   use loop onto it and then make all the required changes

   myH2.forEach( (li) => {
     li.syle.color = 'red';
     li.style.backgroungColor = 'green';
     li.innerText = "Soni"
    
    })
*/