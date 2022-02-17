const numbers = [1,2,3,4,5,6,7,8,9,10];
function evenNumbers(numbers) { 
  let res = []; 
for(number of numbers){
  if(number % 2 === 0){
    res.push(number);
  } 
};
return res;
}
const filtered = evenNumbers(numbers);
console.log(filtered);