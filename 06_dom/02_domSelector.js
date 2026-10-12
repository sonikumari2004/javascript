/* 
    DOM SELECTORS :  These are the methods used to select HTML elements so that we can access or change them using javaScript

  important doms selectors 

  1. getElementById("id_name") --> Selects an element by its unique id
  ex:  document.getElementById("heading"). ---> it will return the element with id="heading"

2. getElementsByClassName("class_name")   ==>.  Note-1:  here to get element by class we have used getElementByClassName() , not getElementsByClass(). 
If getElementsByClass() is used it will give undefined.
Note-2: getElementById()
        getElementByClassName()  --> element (wrong),  elements(correct)
        getElementsByClassName  --> correct syntax
 It  is because each element have their unique id , but multiple elements can share same class.
 
 document.getElementById("title").classname -->. It will return the claa name of element have id = title

 3. getElementsByTagName()  --> selects elemnts using their HTML tag name

4. document.queryselector()  -->  Selects the first element matching a CSS selector

5. document.queryselectorAll()   -->  Selects all elements matching a CSS selector

*/


/*
    Understand CSS selector symbols

  symbol            Meaning               Example  
   #                 ID                   #heading
   .                class                  .info
   no symbol        HTML tag              p ,h1

   Remember:   #heading is a CSS selector,  while getElementById("title") takes just the ID without #
   
 example:   If want to get the element whose id = 'title'
 then method1-  use document.getElementById()
      method2-  document.queryselector('#title')  --> it will give the element 


   like get element we can also set elements

   <p id = "amp" class = "para">  Hello! Ankit </p>

   now if we want to change class name like, from para to greet, then use set
            document.getElementById("amp").setAttribute('para' , 'greet')  -> class name will be changed to greet

     NOTE:  set  always overwrite the name , means phle para tha but aab greet ho gya .  if want to do greet para -->  then   document.getElementById("amp").setAttribute('para' , 'greet para')     
 
*/


/*
HOW TO GET THE HTML CONTENT USING DOM SELECTORS

a) textContent
b) innerText
c) innerHTML

textContent: The textContent property returns all the text inside an element, including text inside hidden elements, but it does not return HTML tags. When you set textContent, the browser treats the value as plain text rather than HTML. For example:
      <div id="demo">
  Hello <b>World</b>
  <span style="display: none">Hidden</span>
</div>

    const demo = document.getElementById("demo");

    console.log(demo.textContent);
    // Output: Hello World Hidden

    demo.textContent = "<b>Hello</b>";
    // Displays the literal text: <b>Hello</b>


innerText: The innerText property returns the text as it is rendered and displayed to the user. Unlike textContent, it generally excludes text hidden using CSS, such as display: none. When you set innerText, the browser inserts plain text instead of interpreting HTML tags. For example, using the same HTML above:
     console.log(demo.innerText);
    // Output: Hello World
    // Hidden is excluded because its span is hidden.

    demo.innerText = "<b>Hello</b>";
    // Displays the literal text: <b>Hello</b>


 innerHTML: The innerHTML property returns the HTML markup inside an element, including its tags and text. When you set innerHTML, the browser parses the supplied value as HTML and creates the corresponding elements. 
 For example:
      console.log(demo.innerHTML);
    // Returns the HTML markup inside the div,
    // including the <b> and <span> tags.

    demo.innerHTML = "<b>Hello</b>";
    // Displays Hello in bold.

*/

/* 
   querySelectorAll() is used to select all HTML elements that match a CSS selector. However, the output of querySelectorAll() is not an array; it is a NodeList. A NodeList is a collection of DOM nodes (HTML elements, in this case) that you can access using indexes, just like an array.
   for ex: 
       <p class="text">Hello</p>
        <p class="text">World</p>
        <p class="text">JavaScript</p>

    const elements = document.querySelectorAll(".text");
    console.log(elements);
    Output:
    NodeList(3) [p.text, p.text, p.text]  --> it look likes an array but it is not an array . It is a nodelist 

  This means that elements contains three matching paragraph elements. You can access them using indexes such as elements[0], elements[1], and elements[2], and use elements.length to find the number of elements.

    Remember: querySelectorAll() gives you a static NodeList, not an array. You can loop through it using forEach(), or convert it into an array when you need methods such as map() or filter().

    */