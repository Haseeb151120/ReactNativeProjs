
//1
let check_avail = prod => prod.qty > 0 ? "Available": "Not-Available";


//2
let shoppingCart = [ 
    {Name: "Book" , qty: 3, price: 200},
    {Name: "Pen" , qty: 0, price: 10},
    {Name: "Pencil" , qty: 5, price: 5},
    {Name: "Eraser" , qty: 0, price: 15}
]

let cartCalculator = cart =>{
    let totalBill = 0;
    for (let items in shoppingCart){
        totalBill += items.price * items.qty;
    }
    return totalBill
}

console.log(cartCalculator(shoppingCart))



//3

let fullname(fname,lname ) => fname + " " + lname;
console.log(fullname("ahmed", "khan"));

//4

let Member =person => {
    let arr[];
    for(let i of person){
        if(i.age > 16){
            arr.push(i);
        } 
    }
    return arr;
}

let mem = [{name: "ali", age: 20}, {name: "ahmed", age: 15}, {name: "khan", age: 25}];
console.log(Member(mem));

//5

let averageReview = review =>{
    let total =0;
    for(let i of review){
        total += i;
    }
    return total / review.length;
}

let review= [{name:"ali", rating:4 }, {name:"ahmed", rating:5}, {name:"khan", rating:3}];
console.log(averageReview(review));

//6
let emp = [
     {id: "1", name: "ali"},
     {id: "2", name: "ahmed"},
     {id: "3", name: "khan"}
];

let findSameId = (id,emp)=>{
    for(let i of emp){
        if(i.id==id){
            return i;
        }
    }
}
console.log(findSameId("2",emp));

//7


let students = [
    {name:"ali", marks: 60},
    {name:"ahmed", marks: 40},
    {name:"rehan", marks: 80},

];

//7

let sortStudents = students => {
    const pass = [];
    const fail = [];
    for (let i in students){
        if (students[i].marks >= 50){
            pass.push(students[i]);
        } else{
            fail.push(students[i]);
        }
    }
    return { pass, fail };
}

console.log(sortStudents(students));

//9

let shop = cart => {
    let total = 0;
    for(let i of cart){
        total=i.qty*i.price;
        if(total > 5000){
            total = total - (total * 0.1);
        }
    }
    return total;
}
let cart= [{name: "shirt", qty: 10, price: 600}, {name: "pant", qty: 5, price: 800}];
console.log(shop(cart));



