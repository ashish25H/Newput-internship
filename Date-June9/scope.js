//global scope
let gl = 'global';
var varGl = 'Global Var';

//block scope
{
    let a = 'Block Scope';
    var n = 'var variable';
    console.log(`inside block ${a} ${n}`);
}

// console.log(`outside the block ${n} ${a}`);

//function scope

(function x() {
    let b = 'function_scope';
    var u = 'var';
    console.log(`Inside the function scope ${b} ${u}`);
}
)();


console.log(`outside the function ${u} ${b}`);

