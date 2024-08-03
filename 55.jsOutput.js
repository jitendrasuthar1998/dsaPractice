let demoFunction;
let a = 9;

function init(){
    let a = 5;

    demoFunction = function(){
        console.log(a);
    }
}

init();
demoFunction();