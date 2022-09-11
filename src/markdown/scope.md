## scope in js 
Scope determines the accessibility of variables, objects, and functions from different parts
There are multipule type of scope like global scope , block scope , functional scope

<Code language="javascript">
function name(){
// Functional scope
}

{
// Block scope
}

var a = 5;
console.log(a) // it's a global scope it can be accessbale in any part of the code
</Code>
`var` is functional scope but `let` and `const` are block scoped
### Ex

<Code language="javascript">
{
var a = 5;
let b = 22;
const c = 30;

console.log(b) // 22 bec it's block scope
console.log(c) // 30 bec it's block scope
}
console.log(a) // 5
console.log(b) // b is not defined
console.log(c) //c is not defined
</Code>