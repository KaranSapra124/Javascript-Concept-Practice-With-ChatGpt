const Duplicacy =(arr,arr1)=>{
  for(let i = 0;i < arr.length;i++){
      if(arr1.includes(arr[i])){ //If arr1 includes elem of arr
          TestArr.push(arr[i])
      }
  }
  return TestArr
}
