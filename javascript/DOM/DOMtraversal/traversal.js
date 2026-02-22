// Traverse the DOM


// 1. parentElement 
var a = document.querySelector('ul');
var parent = a.parentElement;
console.log(parent);

//2. previousElementSibling

console.log(document.querySelector('.hero').previousElementSibling)


//3. child
var child = document.querySelector('ul')
console.log(child.children);

//4. child Node
var child = document.querySelector('ul')
console.log(child.childNodes);
console.log(child.childNodes[0]);


