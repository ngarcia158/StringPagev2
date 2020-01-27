"use strict"; 

//gets the numbers that were plugged into boxes and sets them equal to a num variable & the output
var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");
var output = document.getElementById("output");

//Finds smallest number
function smallestNum(){
    //Sets the number that we stared into a variable and turns it into an integer
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    //finds the smallest number out of all the numbers plugged in
    var smallest = Math.min(number1, number2, number3, number4, number5, number6);

    //outputs the answer
    output.innerHTML = smallest;
}

//Finds largest number
function largestNumber(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    //finds the largest number out of all the numbers plugged in
    var largest = Math.max(number1, number2, number3, number4, number5, number6);

    output.innerHTML = largest;
}

//Finds middle number
function middleNumber(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    //makes these new variables equal to zero
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;

    //The first variable equals the smallest number
    o1 = Math.min(one, two, three, four, five, six);

    //when it finds which is the smallest number it takes it out of the number pool and moves every number higher than it and moves it down in place of the number we took out
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
    
    
    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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
    
/*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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

    
    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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
   
    

    o5 = (one + two) / 2; //this process then leaves two numbers left and then adds them and divides them to find the middle number of the whole sequnce then outputs what it gets
    output.innerHTML = o5;

}

function order(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    //makes these new variables equal to zero
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    //makes the variable equal to the smallest number
    o1 = Math.min(one, two, three, four, five, six);

    //when it finds which is the smallest number it takes it out of the number pool and moves every number higher than it and moves it down in place of the number we took out
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
    
    

    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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

    
    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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

    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
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
   
    
    /*when it finds which is the smallest number of our new number pool it takes it out of the number pool and moves every number higher than it and moves it down 
    in place of the number we took out*/
    o5 = Math.min(one, two);
 
    if(o5 === one){
        one = two;
    }
    if(o5 === two){
        one = one;
    }
    //sets this variable into the last number left
    o6 = one

    //outputs all the numbers so smallest isfirst inot the largest
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


   //makes sure the second number doesnt equal anything and if it doesnt then the number gets displayed
    if(two !== one){
         output.innerHTML += ", " + two;
    }
    
    

   //makes sure the third number doesnt equal anything and if it doesnt then the number gets displayed
    if(three !== one && three !== two){
        output.innerHTML += ", " + three;
    }


   //makes sure the fourth number doesnt equal anything and if it doesnt then the number gets displayed
    if(four !== one && four !== two && four !== three){
        output.innerHTML += ", " + four;   
     }

   //makes sure the second number doesnt equal anything and if it doesnt then the number gets displayed
    if(five !== one && five !== two && five !== three && five !== four){
        output.innerHTML += ", " + five;
    }

   //makes sure the second number doesnt equal anything and if it doesnt then the number gets displayed
    if(six !== one && six !== two && six !== three && six !== four && six !== five){
        output.innerHTML += ", " + six;
    }

    //outputs outputs all the variables because if any of the variables equal another the variable equals ""
    output.innerHTML = o1 + o2 + o3 + o4 + o5 + o6;
}

function rangeNum(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    //finds the largest number
    var large = Math.max(number1, number2, number3, number4, number5, number6);

    //finds smallest number
    var small = Math.min(number1, number2, number3, number4, number5, number6);

    //subtracts the smallest and largest
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

    //adds all the numbers and divides them by 6 since thats how many there are
    var mean = ((number1 + number2 + number3 + number4 + number5 + number6)) / 6;

    output.innerHTML = mean;
    return true;

}

function mode(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    //makes all these new variables equal to one
    var count1 = 1;
    var count2 = 1;
    var count3 = 1;
    var count4 = 1;
    var count5 = 1;
    var count6 = 1;


    //if number 1 equals any other number the count varialbe goes up by one
    if(number1 === number2){
        count1++;
    }
    if(number1 === number3){
        count1++
    }
    if(number1 === number4){
        count1++
    }
    if(number1 === number5){
        count1++
    }
    if(number1 === number6){
        count1++
    }

    //if number 2 equals any other number the count varialbe goes up by one
    if(number2 === number3){
        count2++
    }
    if(number2 === number4){
        count2++
    }
    if(number2 === number5){
        count2++
    }
    if(number2 === number6){
        count2++
    }

    //if number 3 equals any other number the count varialbe goes up by one
    if(number3 === number4){
        count3++
    }
    if(number3 === number5){
        count3++
    }
    if(number3 === number6){
        count3++
    }

    //if number 4 equals any other number the count varialbe goes up by one
    if(number4 === number5){
        count4++
    }
    if(number4 === number6){
        count4++
    }

    //if number 5 equals any other number the count varialbe goes up by one
    if(number5 === number6){
        count6++
    }

    //variable max equals the biggest number in the set
    var max = Math.max(count1,count2,count3,count4,count5,count6);

    //if any of the counts equal the max and don't equal any of the others it is displayed as the mode
    if(count1 === max && count1 !== count2 && count1 !== count3 && count1 !== count4 && count1 !== count5 && count1 !== count6){
        output.innerHTML = number1;
    }
    else if(count2 === max && count2 !== count1 && count2 !== count3 && count2 !== count4 && count2 !== count5 && count2 !== count6){
        output.innerHTML = number2;
    }
    else if(count3 === max && count3 !== count1 && count3 !== count2 && count3 !== count4 && count3 !== count5 && count3 !== count6){
        output.innerHTML = number3;
    }
    else if(count4 === max && count4 !== count1 && count4 !== count3 && count4 !== count2 && count4 !== count5 && count4 !== count6){
        output.innerHTML = number4;
    }
    else if(count5 === max && count5 !== count1 && count5 !== count3 && count5 !== count4 && count5 !== count2 && count5 !== count6){
        output.innerHTML = number5;
    }
    else if(count6 === max && count6 !== count1 && count6 !== count3 && count6 !== count4 && count6 !== count5 && count6 !== count2){
        output.innerHTML = number6;
    }

    //if there are two numbers have the same max then "there is no mode" is displayed
    else{
        output.innerHTML = "There is no mode"
    }

}

function duplicate(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    //sets the output as an empty string
    output.innerHTML = "";

    //if number one does not equal any other number the iutput stays as an empty string
    if(one !== two && one !== three && one !== four && one !== five && one !== six){
        output.innerHTML += "";
    }
    //otherwise it displays one but if theres a number behindd it it adds a comma 
    else{
        if(output.innerHTML === ""){
            output.innerHTML = one;
        }
        else{
            output.innerHTML += ", " + one;
        }
    }
    //////////////////////////////////////

    //if number one does not equal any other number the iutput stays as an empty string
    if(two !== three && two !== four && two !== five && two !== six){
        output.innerHTML += "";
    }
    else{
        //otherwise it displays one but if theres a number behindd it it adds a comma 
        if(output.innerHTML === ""){
            output.innerHTML = two;
        }
        else{
            output.innerHTML += ", " + two;
        }
    }
    //////////////////////////////////////

    //if number one does not equal any other number the iutput stays as an empty string
    if(three !== four && three !== five && three !== six){
        output.innerHTML += "";
    }
    else{
        //otherwise it displays one but if theres a number behindd it it adds a comma 
        if(output.innerHTML === ""){
            output.innerHTML = three;
        }
        else{
            output.innerHTML += ", " + three;
        }
    }
    //////////////////////////////////////

    //if number one does not equal any other number the iutput stays as an empty string
    if(four !== five && four !== six){
        output.innerHTML += "";
    }
    else{
    //otherwise it displays one but if theres a number behindd it it adds a comma 
        if(output.innerHTML === ""){
            output.innerHTML = four;
        }
        else{
            output.innerHTML = ", " + four;
        }
    }
    
    /////////////////////////////////////

    //if number one does not equal any other number the iutput stays as an empty string
    if(five !== six){
        output.innerHTML += "";
    }
    else{
        //otherwise it displays one but if theres a number behindd it it adds a comma 
        if(output.innerHTML === ""){
            output.innerHTML = five;
        }
        else{
            output.innerHTML += ", " + five;
        }
    }
 
   
}