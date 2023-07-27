

const UpperStr = "Evil is a name of a foeman, as I live."



const Palindrome_Checker =(TestStr)=>{
   const Str = TestStr.toUpperCase()
  for(var i = 0; i < Str.length;){
       for(var j = Str.length-1; j > 0;){
      if(Str[i] === Str[j] && i !== j && Str[i] !== " " && Str[i] !== "," && Str[j] !== " " && Str[j] !== "," && Str[i] !== "." && Str[j] !== "."){
        //   console.log(true , Str[i] , Str[j] , i , j);
           i++;
           j--
      }
     else if(Str[i] === " " || Str[i] === "," || Str[i] === "." ){
          i++
      }
      else if(Str[j] === " " || Str[j] === "," || Str[i] === "."){
          j--
      }
      else if(i == j ){
          return console.log(true)
      }
          else{
          return console.log(false)
      }
      
  }
  }
}

Palindrome_Checker(UpperStr)
