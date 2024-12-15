// currying

// function sum(a){
//     return function(b){
//         return function(c){
//            return a + b + c;
//         }
//     }
// }

function sum(...argsA){
    return function(...argsB){
        console.log("...a",...a);
        console.log('...b',...b);
          if(b){
        let newA = 
        return sum(a+b)
      }else{
        return a;
      }
    }
}

sum(1,2,3,4)(5,6,7);

// let currSum = sum(3)(5);

// console.log("currSum", currSum());

// console.log(sum(2)(3)(5)());

// function sum(...a){
//     // let argsSum = [...a].reduce((a,b)=> a + b)

//     console.log("argsSum",...a);
//  return function(...b){
//     // let argsSumB = [...b].reduce((a,b)=> a + b)

//     console.log("argsSumB",...b);
//     if(!b){
//         return [...a].reduce(a,b => a + b,0);
//     }
//     return sum(...a,...b);
//  }   
// }

// console.log(sum(2,5)(3,4,6)(5,9,10)(29)(22)())