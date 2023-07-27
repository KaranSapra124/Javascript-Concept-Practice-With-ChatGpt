
const PrimeChecker =(N)=>{
   
 for(var i = N-1; i > 1;i--){
 if(N%i===0){
     return false;
 }
 }
 return true
}
