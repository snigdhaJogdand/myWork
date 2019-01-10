import { Component, OnInit } from '@angular/core';
import { promise, error } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const z = 10;
    function varr() {
      var m = 42;
      console.log(" inside function test " + m); // 42
      function nestedTest() {
        console.log("inside the nested test " + m); // 42
      }
      nestedTest();
      console.log("value of constant variable is " + z);
    }
    //console.log(m);//var will not be valid here

    function lett() {
      for (let i = 0; i < 3; i++) {
        let m2 = 42;
        console.log("value of i is " + i);
        console.log("value of m2 is : " + m2);
      }
      console.log("value of constant variable is " + z);

      //console.log(m2); 
      //console.log(i);
    }
    varr();
    lett();
    console.log("value of constant variable is " + z);
    //z=2; this value cant be updated !!
/*
      for (let i = 0; i <= 5; i++) {
        setTimeout(() => console.log("let wala loop " + i), i * 1000);
      }

      for (var j = 0; j <= 5; j++) {
       setTimeout(() => console.log("var wala loop " + j), j * 1000);
      }
*/

//closure
function init() {
  var t=2;  
  function displayName() { 
   console.log("value of t is :"+t);
  }
  displayName();    
}
init();


//THIS FUNCTION 
function myobj()
{
  var a=10;
  this.b=20;
}
var c = new myobj()
{
  console.log("a is ::"+c.a);//"undefined" coz a has its access within  the function
  console.log("b is ::"+c.b);//"20" coz var used with this can be used with every instance nd thus it can be used outside the function too.
  console.log(this); //abc copmponent
}

var obj ={
  f:function(one, two) //the value of "this" changes depending on how it is called , by whomw it is called nd who is calling it
  {
    console.log(this===obj);
    console.log(this === window);
    console.log(this);
    console.log(one +two );
  }
}
console.log("without context");
obj.f(2,7); 
console.log("with call context");
obj.f.call(window,6,6);
console.log("with apply context");
obj.f.apply(window,[9,10]);
console.log("with bind context");
var b=obj.f.bind(window);
b(2,2);
//there are three methods that change the context of the this variable :-
// 1. CALL 2. APPLY 3. BIND
//"CALL" can have as many as arguments
//"APPLY" can have have only two (one the CONTEXT VALUE and another an array that can carry the arguments if any )
//"BIND" has only one argument and it returns the bound function that will execute the given function with the given context value defined in the bind arg



//PROMISES
//EXAMPLE 1
let p=new Promise(function(resolve,reject)
{
  let pp=true;
  if(pp)
  {
    resolve(' "clean" ');
  }
  else{
    reject(' "garbage" ');
  }
});

p.then(function(c)
{
  console.log('the value OF PROMISE EXAMPLE 1 is  '+c);
}).catch(function(r)
{
  console.log('the value OF PROMISE EXAMPLE 1 is '+r);
});


//EXAMPLE 2
let clean=function()
{
return new Promise(function(resolve,reject)
{
  if(1)
  {
    resolve('CLEANED !!!!');
  }
  else 
  {
    reject('not');
  }

});
}
let garbage=function()
{
return new Promise(function(resolve,reject)
{
  resolve('garbage !!!!');
});
}

clean().then(function()
{
  return garbage();
}).then(function()
{
console.log('PROMISE EXAMPLE 2 "finished!!!" ');
}).catch(function()
{
  console.log('PROMISE EXAMPLE 2 "not finished!!" ');
});

//EXAMPLE 3  

var a =new Promise(function(resolve,reject)
{ var data='abcd';
resolve(data);
});

var y =new Promise(function(resolve,reject){
if(1){  resolve();}
else{ reject(); }
});

a.then(function(data)
{
  console.log("PROMISE example 3 is : "+data);
} );
y.then(function(){
  console.log('PROMISE example 3 "sucess" ');
}).catch(function(){
  console.log('PROMISE example 3 "failure"  ');
});




//AWAIT  EXAMPLE 1 
async function f() {
  let promise = new Promise(function(resolve, reject) 
   {
    setTimeout(() => resolve("AWAIT EXAMPLE NUMBER 1 !"), 3000)
  });

  let result = await promise; // wait till the promise resolves (*)
  console.log(result); // "done!"
}
f();


//AWAIT EXAMPLE 2
async function s()
{
  let o=new Promise(function(resolve,reject)
{
  resolve("AWAIT EXAMPLE 2 ");
});
let j=await o;
console.log(j);
}
s();

// AWAIT EXAMPLE 3 WITH THE FOR LOOP
async function ss()
{
  let f=new Promise(function(resolve,reject){
    console.log('AWAIT EXAMPLE 3 :: "the for loop values are :::" ');
    for(let i=10;i<=13;i++){
    console.log(i);
    resolve();
    }
  });
 await(f);
}
ss();


//AWAIT EXAMPLE 4 WITH TRY AND CATCH
async function sss()
{
  let o=new Promise(function(resolve,reject)
  {
        if(0)
        {
        console.log('AWAIT EXAMPLE 4 OF TRY CATCH ::: "sucess babe" !');
        resolve();
        }
        reject();
       });
try{ await(o);}
 catch{ console.log('AWAIT EXAMPLE 4 OF TRY CATCH ::: "error hai yr" '); }
 }  
sss();

//AWAIT FUNCTION 5 
async function f2() {
  var y = await 20;
  console.log("AWAIT EXAMPLE 5 "+y);
}
f2();

//AWAIT EXAMPLE 5 
function abcd(x)
{
 return new Promise(function(resolve,reject)
 {
     resolve(x);

 });
}
async function example5()
  { 
       var x=await abcd(10);
       console.log(x);
       
  }
  example5();
 
  

async function example6()
  { 
    try{
      var s=await Promise.reject(70);
      }
    catch(error)
    { console.log(error); }
  }
  example6();




  async function example7()
  { 
    try{
      var s=await Promise.resolve(70);
      console.log('hey!!');
      }
    catch(error)
    { console.log(error); }
  }
  example7();



  function abcde()
{
 return new Promise(function(resolve,reject)
 {
     reject('rejected (reject) !');

 });
}
  async function example8()
  { 
    var s=await abcde().catch((error)=>{console.log(error);})
  }
  example8();




}
}
