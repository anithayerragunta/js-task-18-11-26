//part1
//1
function numbers(a,b){
    console.log(a+b);
}
numbers(2,3);

//2
function multiply(a,b,c){
    console.log(a*b*c);
}
multiply(8,9,2)

//3
function sub(a,b){
    return a-b;
}
var result = sub(5,3)
console.log(result);

//4
function welcome(){
    console.log("welcome")
}
function greet(f){
    f()
}
greet(welcome)

//5
function tc(){
    console.log("Task Completed")
}
function wc(a){
    a()
}
wc(tc)

//6
function sub(a,b){
    console.log(a-b)
}
function add(a,b,op){
    console.log(a+b)
    op(a,b)
}
add(5,2,sub)


//7
function mul(a,b){
    console.log(a*b)
}
function add(a,b,se){
    console.log(a+b)
    se(a,b)
}
add(5,4,mul)

//8
function one (){
    console.log("one")
}
function two(){
    console.log("two")
}
function main(a,b,on,tw){
    on()
    tw()
}
main(2,3,one,two)

//9
var ac = () => {
    console.log("Arrow callback")
}

function main_ac(f){
    f()
}
main_ac(ac)

//10
function hello(){
    console.log("hello")
}
function greet(f){
    f()
}
greet(hello)

//part2
//11
function* studentNames(){
    yield "Anitha";
    yield "Deepu";
    yield "mouni";
    yield "rakshi";
    yield "Abhi";
}

//12
let students = studentNames()
console.log(students.next().value)
console.log(students.next().value)
console.log(students.next().value)

//13
function* numbers(){
    yield 10
    yield 20
    yield 30
    yield 40
}

//14
var nums = numbers()
for(let i=0;i<4; i++){
    console.log(nums.next().value)
}

//15
function* wish(){
    yield "Good Morning";
    yield "Good Afternoon";
    yield "Good Night";
}
var wishes = wish()
console.log(wishes.next().value)

//16
function* cashback() {
    yield "You received cashback of 5 Rupees";
    yield "You received cashback of 2 Rupees";
    yield "You received cashback of 3%";
}

for (let message of cashback()) {
    console.log(message);
}

//Part 3
//17
function studentInfo(name, department="ECE"){
    console.log(`${name} from ${department}`)
}
studentInfo("Anitha")

//18
function employeeInfo(name, des="Trainee"){
    console.log(`${name} works as ${des}`)
}
employeeInfo("Anitha")

//19
function employeeDetails(name, salary, company="stackly"){
    console.log(name, salary, company)
}
employeeDetails("Anitha", 40000)

//20
employeeDetails("Anitha", 40000, "Cap Gemini")
employeeDetails("Anitha", 40000)

//21
function prodInfo(name, price=100){
    console.log(name, price)
}
prodInfo("Bottle", 200)

//22
function addition(a,b,c){
    console.log(a+b+c);
}
addition(10,20,30)

//23
function addition(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
addition(10)(20)(30);

//24
function employeeDetails(name){
    return function(role){
        return function(salary){
            console.log(name,role,salary)
        }
    }
}
employeeDetails("anitha")("developer")(200000)

//25
function multi(a){
    return function(b){
        return function(c){
            console.log(a*b*c)
        }
    }
}
multi(5)(6)(7)

//26
function employeeInfo(name,role,salary){
    console.log(name,role,salary)
}
employeeInfo("anitha","developer",200000)

//27
//normal function
function addition(a,b,c){
    console.log(a+b+c);
}
addition(10,20,30)

//currying function
function addition(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
addition(10)(20)(30);
//the output of a normal function and currying function are same.

//part-5
//28
let arr1 = [1 ,2,3,4,5]
let arr2 = [6,7,8,9,1]
let output = [...arr1,...arr2]
console.log(output)

//29
let fruit1 = ["apple","kiwi","banana","grapes","cherry"]
let fruit2 = ["orange","guava","papaya","monkfruit","dragonfruit"]
let totalfruits = [...fruit1,...fruit2]
console.log(totalfruits)

//30
let numb1 = [2,3,4]
let numb2 = [...numb1]
console.log(numb2)

//31
var employee1 ={
    name : "ammu",
    department: "HR",
    age: 23
}
var employee2 = {
    name : "uday",
    department:"developer"
}
var result = {
    ...employee1,
    ...employee2
};
console.log(result); 

//32
var rose ={
    color : "red",
    petals: true,
    sepals: true
}
var kiwi = {
    weight : 0.3,
}
var result = {
    ...rose,
    ...kiwi
};
console.log(result);

//33
var employee1 ={
    name : "ammu",
    department: "HR",
}
var employee2 = {
    name : "uday",
    department:"developer"
}
var result = {
    ...employee1,
    ...employee2
};
console.log(result);  //second object overwritten first one

//part6
//34
function add(a,b,...numbers){
    console.log(a,b,...numbers)
}
add(10,20,30,40,50);

//35
function display(...numbers) {
    console.log(numbers);
}

display(10, 20, 30, 40, 50, 60, 70, 80)

//36
var nums =[1,2,3,4,5,6,7]
var [a,b,c] = nums
console.log(a,b,c)

//37
var stu = {
    stu_name: "Anitha",
    age:23,
    place:"chennai"
}

let {stu_name,age,place} = stu;
console.log(stu_name, age, place)

//38
function nums_fun(a,b,...numbers){
    console.log(a,b,...numbers)
}
nums_fun(10,20,30,40,50);

//39
var nums=[1,2,3,4,5,6,7,8,9,10]
var nums2=[...nums]
console.log(nums2)

//40
function print_all(a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c)
}
print_all("orange", true, 2,[56, 12],61,23,4,5)

//Mini Project
//1
var studentNames =["Anitha", "Rakshi", "Mouni"]

//2
var stu1 = {
    name: studentNames[0],
    age: 22,
    roll_num:13,
    class: 12,
    loc: "chennai"
}
var stu2 = {
    name: studentNames[1],
    age: 23,
    roll_num: 24,
}

//3
var first2Students = {...stu1, ...stu2}
console.log(first2Students)

//4
function collect_marks(...marks){
    console.log(marks)
}
collect_marks(89,97,78,90,85)

//5
function print_details(name, age, roll_number){
    console.log(name,age,roll_number)
}

function student_info(student, print_func){
    print_func(student["name"], student["age"], student["roll_num"])
}

student_info(stu1,print_details)

//6
function deptDetails(student, dept="ECE"){
    console.log(student.name)
    console.log(dept)
}

deptDetails(stu1)

//7
function printName(name){
    return function printAge(age){
        return function printDept(dept="CSE"){
            console.log(name, age, dept)
        }
    }
}
printName("Anitha")(22)("ECE")
