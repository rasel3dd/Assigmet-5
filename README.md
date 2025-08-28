1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans- getElementById is a single element selector,
getElementsByclassName is select css class selector,
querySelector is the first element that matches a CSS selector
querySelectorAll is a static nodeList of all matches

2) How do you create and insert a new element into the DOM?
Ans-document.createElement(" ");

 3) What is Event Bubbling and how does it work?
Ans-Event bubbling is the process where a triggered dom event propagates from the target element upwards through its ancestors  to the root of the document.

4) What is Event Delegation in JavaScript? Why is it useful?
   Ans-Event delegation is using bubbling to handle events at a higher level  instead of attaching to every child.
   
5) What is the difference between preventDefault() and stopPropagation() methods?
   Ans- preventDefault() - is stops the default browser behavior.
   stopPropagation()- is stops the event from bubbling up to parents.
