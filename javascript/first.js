// var a = "78sai";
// var b = "34ram";
// document.write(parseInt(a)+parseInt(b))
// console.log("hello");

// creating objects

// var details={
// 	name:"K.swami",
// 	email:"swami.k@apssdc.in",
// 	experience:"5 years in apssdc",
// 	courses:["webdesign using reactjs","python","data analysis"]
// }

// for loop for object

// for (var i = 0; i < details.courses.length; i++) {
// 	document.writeln(details.courses[i]+"<br>")
// }
// document.write(details.name,"<br>");

// for-in loop 

// var a = "Apssdc React";
// for(var i in a){
// 	document.writeln(a[i]+"<br>");
// }


// for (var i in details){
// 	document.write(details[i]+"<br>")
// }

// for of loop we use can only strings,arrays not the objects

// for (var i of details.courses){
// 	document.writeln(i);
// }
// var s = "123456"

// for (var i of s){
// 	document.write(i);
// }

// user defined functions
// function add(){
// 	var details={
// 	name:"K.swami",
// 	email:"swami.k@apssdc.in",
// 	experience:"5 years in apssdc",
// 	courses:["webdesign using reactjs","python","data analysis"]
// }
// for (var i in details){
// 	document.write(details[i]+"<br>")
// }
// }
// add();
// add();

// function Change(){
// 	var b=document.getElementById("para");
//     b.textContent="hello";
// }

// // Arrow function

// function sai(a,b){
// 	alert(a+b);
// }
// sai(99,1);

// var sai=(a,b)=>{
// alert(a-b);
// }
// sai(40,5);

// if function without params
// ()=>{
// }

// differences between var,let,const

// var r1=10;
// var r1=40; //reAssign
// document.write(r1,"<br>");
// {
// 	var r1=20;
// 	document.write(r1,"<br>");
// }
// document.write(r1,"<br>");

// let r=10;
// {
// 	let r=20;
// 	document.write(r,"<br>");
// }
// document.write(r,"<br>");

// const r2=10;
// {
// 	const r2=20;
// 	document.write(r2,"<br>");
// }
// document.write(r2,"<br>");

// example for class
// class  Square{
// constructor(height,width){
// this.h=height;
// this.w=width;
// }
// }
// var a=new Square("40cm","40cm")
// document.write(a.h);

// Rest and spread (...paaram name)

// Rest parameter(...paramname)

// function addition(p1,p2,...s){
// 	document.write(p1+p2,"<br>")
// 	document.write(s[5]);

// }
// addition(1,2,3,4,5,6,7,8,8,9,98);

//spread parameter(...paramname)

// const array1=[1,2,3];
// const array2=[...array1];
// array2.push(4,5,6,7);
// document.write(array2)


// var n=["a","b","c","c"];
// var[name1,name2,name3]=n;
// document.write(name3);

//interpolation
var n="i have one";
var m=`i have the
 
  Ram is 

 number ${n}`;
document.write(m);
