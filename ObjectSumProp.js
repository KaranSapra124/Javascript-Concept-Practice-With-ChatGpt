const ObjCalc = (Obj) => {
  const Val = Object.values(Obj);
  const sum = Val.reduce((acc, elem) => acc + elem, 0);
  return sum;
};

const result = ObjCalc({ a: 10, b: 20, c: 30 });
console.log(result); // Should return 60
