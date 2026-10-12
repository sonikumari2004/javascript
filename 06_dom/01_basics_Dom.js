
/*  
DOM ---> Document Object Model  
  DOM is a structure that allows JavaScript to access and change the elements of a webpage.

  The browser takes the HTML code and creates a tree-like structure of all these elements. That structure is called the DOM.

  How does the DOM work?
Think of the DOM as a family tree.

                         document
                             |
                            html

 Page information <-head             body   ->   Visible content
                            |              
    Heading              Paragraph             Button

  Each HTML element becomes a node in this tree. JavaScript can use these nodes to find and change elements.

    How does JavaScript use the DOM?

JavaScript can change the heading using the DOM:
    document.getElementById("title").textContent = "Welcome!";

   What happens?

Before: The webpage displays Hello!
JavaScript finds the heading through the DOM.
JavaScript changes its text.
After: The webpage displays Welcome!
You don't need to reload the whole webpage to make this text change.
*/