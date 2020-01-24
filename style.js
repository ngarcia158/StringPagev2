"use strict";

var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");

var output = document.getElementById("output");

function smallestNum(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var smallest = Math.min(number1, number2, number3, number4, number5, number6);

    output.innerHTML = smallest;
}

function largestNumber(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var largest = Math.max(number1, number2, number3, number4, number5, number6);

    output.innerHTML = largest;
}


function order(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(one, two, three, four, five, six);

    if(o1 === one){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === four){
        one = one;
        two = two;
        three = three;
        four = five;
        five = six
    }
    else if(o1 === five){
        one = one;
        two = two;
        three = three;
        four = four;
        five = six
    }
    else if(o1 === six){
        one = one;
        two = two;
        three = three;
        four = four;
        five = five;
    }    
    
    //-------------

    o2 = Math.min(one, two, three, four, five);

    if(o2 === one){
        one = two;
        two = three;
        three = four;
        four = five;
    }

    else if(o2 === two){
        one = one;
        two = three;
        three = four;
        four = five;
    }
    else if(o2 === three){
        one = one;
        two = two;
        three = four;
        four = five;
    }
    else if(o2 === four){
        one = one;
        two = two;
        three = three;
        four = five;
    }
    else if(o2 === five){
        one = one;
        two = two;
        three = three;
        four = four;
    }

    //---------------------
    
    o3 = Math.min(one, two, three, four);
 
    if(o3 === one){
        one = two;
        two = three;
        three = four;
    }
    if(o3 === two){
        one = one;
        two = three;
        three = four;
    }
    if(o3 === three){
        one = one;
        two = two;
        three = four;
    }
    if(o3 === four){
        one = one;
        two = two;
        three = three;
    }

    //----------------------------

    o4 = Math.min(one, two, three);


    if(o4 === one){
        one = two;
        two = three;
    }
    if(o4 === two){
        one = one;
        two = three;
    }
    if(o4 === three){
        one = one;
        two = two;
    }
   
    //----------------------------

    o5 = Math.min(one, two);
 
    if(o5 === one){
        one = two;
    }
    if(o5 === two){
        one = one;
    }
    o6 = one
    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;

}




function unique(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    
    output.innerHTML= one;


    //////////////////////////////////////

    
    if(two !== one){
         output.innerHTML += ", " + two;
    }
    
    

    //////////////////////////////////////

    if(three !== one && three !== two){
        output.innerHTML += ", " + three;
    }


    //////////////////////////////////////

    if(four !== one && four !== two && four !== three){
        output.innerHTML += ", " + four;    }

        //////////////////////////////////////

    if(five !== one && five !== two && five !== three && five !== four){
        output.innerHTML += ", " + five;
    }

    //////////////////////////////////////

    if(six !== one && six !== two && six !== three && six !== four && six !== five){
        output.innerHTML += ", " + six;
    }


    //////////////////////////////////////

    output.innerHTML = o1 + o2 + o3 + o4 + o5 + o6;
}

function rangeNum(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var large = Math.max(number1, number2, number3, number4, number5, number6);
    var small = Math.min(number1, number2, number3, number4, number5, number6);

    output.innerHTML = large - small;
    return true;
}

function mean(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var mean = ((number1 + number2 + number3 + number4 + number5 + number6)) / 6;

    output.innerHTML = mean;
    return true;

}
function middleNumber(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;

    o1 = Math.min(one, two, three, four, five, six);

    if(o1 === one){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six
    }
    else if(o1 === four){
        one = one;
        two = two;
        three = three;
        four = five;
        five = six
    }
    else if(o1 === five){
        one = one;
        two = two;
        three = three;
        four = four;
        five = six
    }
    else if(o1 === six){
        one = one;
        two = two;
        three = three;
        four = four;
        five = five;
    }    
    
    //-------------

    o2 = Math.max(one, two, three, four, five);

    if(o2 === one){
        one = two;
        two = three;
        three = four;
        four = five;
    }

    else if(o2 === two){
        one = one;
        two = three;
        three = four;
        four = five;
    }
    else if(o2 === three){
        one = one;
        two = two;
        three = four;
        four = five;
    }
    else if(o2 === four){
        one = one;
        two = two;
        three = three;
        four = five;
    }
    else if(o2 === five){
        one = one;
        two = two;
        three = three;
        four = four;
    }

    //---------------------
    
    o3 = Math.min(one, two, three, four);
 
    if(o3 === one){
        one = two;
        two = three;
        three = four;
    }
    if(o3 === two){
        one = one;
        two = three;
        three = four;
    }
    if(o3 === three){
        one = one;
        two = two;
        three = four;
    }
    if(o3 === four){
        one = one;
        two = two;
        three = three;
    }

    //----------------------------

    o4 = Math.max(one, two, three);


    if(o4 === one){
        one = two;
        two = three;
    }
    if(o4 === two){
        one = one;
        two = three;
    }
    if(o4 === three){
        one = one;
        two = two;
    }
   
    //----------------------------

    o5 = (one + two) / 2;
    output.innerHTML = o5;

}