var a=[3,44,38,5,47,15,36,26,27,2,46];
function Sort(e) {
   if(e.length <= 1) {
      return e;}
      else {
      var middle = Math.floor(0.5*e.length);// 5
      var left = e.slice(0,middle);// 3,44,38,5,47
      var right = e.slice(middle,e.length);// 15,36,26,27,2,46
      return Q(Sort(left),Sort(right));
   }
}
 function Q(L,R) {
        var result = [];
        var i = 0, j = 0;
        while(i < L.length && j < R.length) {
        if(L[i] > R[j]) {
          result.push(R[j]);
          j++;
        }
        else {
          result.push(L[i]);
          i++;
        }
      }
      for(;i < L.length; i++) {
         result.push(L[i]);
       } 
      for(;j < R.length; j++) {
        result.push(R[j]);
      } 
      return result;
    }
    console.log(Sort(a)); 