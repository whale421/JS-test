let s = Symbol();

let obj = {
  [s]: function (arg) { 
      return '123';
   }
};

console.log(obj[s](123));