const arr = [1,2,3,4,5,6,7,8]

const SquareArr = (arr)=>{
return arr.map((elem)=>{
    return elem * elem
})

}

const result = SquareArr(arr)
console.log(result)
