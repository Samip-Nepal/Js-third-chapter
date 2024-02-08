//for in loop

const student ={
    Name:"Samip",
    Surname:"Nepal",
    age:21,
    type:"Normal",
    isreading:true,
};
for (let  key in student) {
    console.log("Keys=", key);
}

//for of loop
let size=0;
let str="Samipnepal"
for(let val of str){
console.log("val=",val);
size++;
}
console.log(size);


