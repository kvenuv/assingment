
var first$name='john';
let last_name="mock";
console.log(first$name+" "+last_name);

function makefullname(fn,ln) {
console.log(firstname+" "+lastname);
}

//operators.

const year=2024;
const dob=1991;
const age=year-dob;
const ageafter=age+12;
console.log("my age is",age);
console.log(`my age after 10 years is ${ageafter}`);


//assignment operators 


let x=5+3;
 x+=14;
console.log(x);


let apple=35-3;
 apple-=5;
 console.log("i need",apple,"apples");

let xyz=510/10;
 xyz*=2;
 console.log(xyz);

xyz/=45;
console.log(xyz);

//incrementing and decrementing operators

let a=2;
 a++;
 console.log(a);
 console.log(++a);
 console.log(a--);
 console.log(--a);
 console.log(a--);
 console.log(--a);


//comparision operators

console.log(8==10);
console.log(8!=10);
console.log(14==="14");
console.log(11!=="23");
console.log(2<3);
console.log(4>6);
console.log(3<=4);
console.log(5>=5);

//operator precedence...

let A =7+3-6/4*2;
console.log(A);

let mack=2-(3+6)*2/2;
console.log(mack);

let john=8+(1*0)-1*(9*9)/8;
console.log(john);

//strings and template literals..

let name1= "mack";
let Age1 = 25;
let proffesion = "employee";
let corporate = "comapany"
let statement=name1 +" is an " + proffesion+" of that " + Age1+" years old " +corporate;
console.log(statement);

//decision statements using if,else statements....

const Age2= 24;
if(Age2>=18) console.log("she was elgible to apply the driving licence");

const Age3= 14;
if(Age3>=18) console.log("she is not elgible to apply the driving licence");
else{
 const yearsleft=19-Age3;
 console.log(`she has to wait for few  ${yearsleft} more years `);
}

const marks= 80;
if(marks>=35) {
 console.log("promoted");
} 
else if(marks<40 && marks>=45) {
 console.log("pass");
}
else if(marks<35 && marks>=40) {
 console.log("pass");
}
else if(marks<20 && marks>=30) {
 console.log("fail");
}
else if(marks<35) {
 console.log("fail");
}


const day= "sunday";
switch (day){

 case"monday": 
     console.log("yes");
     break;
 case"tuesday": 
     console.log("no");
     break;
  case"wednesday": 
     console.log("yes");
     break;
 case"thursday": 
     console.log("no");
     break;
  case"sunday": 
     console.log("yes");
     break;

}

// user inputs along with switch-case and functions

function bikename_cc(cc) {
    let bike;

    switch (cc) {
        case '125':
            bike = "shine";
            break;

        case '100':
            bike = 'rx';
            break;

        case '220':
            bike = 'pulsar';
            break;

        case '350':
            bike = 'bullet';
            break;

        case 650:
            bike = 'gt';
            break;

        default:
            bike = "sry out of stock";
    }

    return bike;
}


const yes=1;
const no=0;

console.log(yes&&no);
console.log(yes||no);
console.log(yes&&!no);
console.log(!yes||no);


console.log((yes&&no)&&(yes||no));
console.log((yes&&no)||(yes||no));




// conditional (ternary) operator

let my_age=22;

(my_age>=24) ? console.log('u r eligible to drive a chopper') : console.log('u r not eligible');


// type conversion and coercion:

// type conversion - changing the data type.

const yeAr = '1990';
console.log(typeof(yeAr)); 
console.log(Number(yeAr), yeAr); 
const yeaR = Number(yeAr);
console.log(typeof(yeaR)); 


// coercion -- combination of strings and numbers

console.log('I\'m venu and i am ' + 23 +' years old.')

// + --> concatenation - adding two stmts or a string and a number..

let number2= 35 +5;
console.log(number2);

let n='25'+ 1;
console.log(n);

// truthy and falsy values

console.log(Boolean('mack'));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean());
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean(" "));



// difference  between var let and const

var wxyz=20;
console.log(wxyz);
wxyz=45;
console.log(wxyz);

var wxyz=56;
console.log(wxyz);

wxyz=87;
console.log(wxyz);


let abcd= 25;
console.log(abcd);

let abcde;
abcde=76;
console.log(abcde);

// strict mode

asd=46;
console.log(asd); 

"use strict";

let abc=1;
console.log(abc); 

const passtest=false;
let has_licence=true;

if (passtest) has_licence=true; 

// functions

// function name() --> definig a function(without arguments)
// function name(arg1, arg2) --> defining a function with arguments
// name() --> calling a func
// name(par1, par2) --> calling a func with parameters for the arguments.

// example:

function bike(sport, cruiser) {
    const blend = `Custom blend with ${sport} sport bikes and ${cruiser} cruiser bikes.`;
    return blend;
}

const result = bike(2, 3);
console.log(result);



// func declaration and function expression

// declaration

function calcAge(dob) {
return 2024-dob;
}

const user_age=calcAge(1998);
console.log(user_age);



function calcAge(dob) {
return 2024-dob;
}

const user_age2=calcAge(1996);
console.log(user_age2);

// function expression

console.log(user_age, user_age2);



// arrow functions --> used for faster executions (executes a num of milli sec faster than functions)

// any function can be converted to variable and vice versa.

// example-1
const yrs= user_dob => 2024-user_dob;
const user_age3=yrs(1976);
console.log(user_age3);

// example-3

const retireInYears=(birthYear, Name) => {
const age_now=2024-birthYear;
const retirement=65-age_now;
return `${Name} will retire in ${retirement} years.`;
}
console.log(retireInYears(1968,'Mr.Rao'));

//functioncalling another function

function cutBikeParts(bike) {
    return bike * 2; 
}

function bikeAssembler(sportBikes, cruiserBikes) {
    const sportParts = cutBikeParts(sportBikes);
    const cruiserParts = cutBikeParts(cruiserBikes);

    const assembly = `Assembled with ${sportParts} parts of sport bikes and ${cruiserParts} parts of cruiser bikes`;
    return assembly;
}

// // Reviewing Functions
const calcage = function (birthYear) {
    return 2035 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 60 - age;


    if (retirement > 0) {
        // console.log(`${firstName} retires in ${retirement} years`);
        return `${firstName} retires in ${retirement} years`;
    } else {
        // console.log(`${firstName} has already retired`);
        return `${firstName} has already retired`;
    }
}


console.log(yearsUntilRetirement(1991, 'James'));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement(2047, 'Juke'));

// Introduction To Arrays

const friend1 = "Mack";
const friend2 = "mock";
const friend3 = "Peter";

const friends = ["Mack", "mock", "Peter"];
console.log(friends);
console.log(friends[2]);


const years = new Array(5262, 8473, 6346, 3676, 5526);
console.log(years);
console.log(years[4]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, firstName , 2037 - 1991, "Teacher", friends];
console.log(jonas[3]);


const calcyear = (birthYear) => {
    return 6037 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);

console.log(age1, age2, age3);


