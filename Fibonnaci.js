const num = [0,1]
var i = 0;
var j = 1;
var sum = num[i] + num[j]; //Sum initial value
const FiboMaker =(N)=>{
    
while(sum < N){
  
      if(sum < N){
     
     num.push(num[i] + num[j]) //pushing sum
     sum = num[i] + num[j] 
     if(sum > N){ //pop element from array if its big then N
         num.pop()
     }
     i++;
     j++;
  }
 

}
return num
}

