
let anArray = [1,4,3,6,7,3,8,9,1,12,4,5,8]
let max=0;
let i=0

for (let x of anArray){
if( x>=max){
max=anArray[i]
}
i++
}

console.log(max);

