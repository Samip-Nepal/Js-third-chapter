//Pratice qn2
let a=10;
 let b=prompt("Tell any number");
while(b!=a){
b=prompt("Your guess number is wrong try again");
}
console.log("Your guess is correct");



//Pratice qn 1
for (let i= 0; i <=100; i++) {
    if(i%2===0){
        console.log(i);
    }   
}






//for in loop

const student ={
    Name:"Samip",
    Surname:"Nepal",
    age:21,
    type:"Normal",
    isreading:true,
};
for (let  key in student) {
    console.log("Keys value=", student [key]);
}

//for of loop
let size=0;
let str="Samipnepal"
for(let val of str){
console.log("val=",val);
size++;
}
console.log(size);


