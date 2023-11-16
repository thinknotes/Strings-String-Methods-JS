// 1. length: Should return the length of a string


//length function 
function length(parm) {
    var length = 0;
    for(let a = 0; a < parm.length; a++) { //Make sure length is less then parmarther
         length += 1
    }
    
    return length
    
}

//output
console.log("DEBUG Length:" +  length.length);
console.log(length("pizza"));

// 2. slice( ): Returns a piece of a string


//slice function
function slice(original, start, end) { // checks to make sure that orignal word is there and checks to both start and end numbers have been inputed before outputing
    var word = "";
    for(let a = start; a < end; a++) {
        word += original[a];
    }

    return word;
}


//output
console.log("DEBUG Slice");
console.log(slice("pizza", 1, 4));



// 3. replace( ):Replaces the first instance of a matching character in a string


//replace function 
function replace(word, symbol, letter) {   
    let newWord = "";
    let frist = false;
    for(let a = 0; a < word.length; a++) { 
      if(word.charAt(a) === letter && !frist) {          //make sure word and letter are equal before running
         newWord += symbol;
         frist = true;
      
      } else {
        newWord += word.charAt(a);
      }
    }

    return newWord;
}

//build chartAt function to be used in replace
function charAt(string, index) {
   if(index >= 0 && index < string.length) {      //check index and string 
     return string[index]
   } else {
        return "";
   }
}


//output
console.log("DEBUG Replace");
console.log(replace("pizza ","*", "z"));


// 4. replaceAll( ): Replaces all instances of a matching character in a string


//replaceAll function 
function replaceAll(orginal, replace) {
     let frist = false;
     let newResult = "";

     for(let a = 0; a < orginal.length; a++) {
        if(charAt(orginal, a) === replace && !frist) {
             newResult += replace;
             frist = true;
        } else {
            newResult += charAt(orginal);
        }
     }
}

console.log("DEBUG ReplaceALL")

//variables for replace to use
var Name = "Hi Hi Hi No No";
var betterName = Name.replaceAll("Hi", "Winner");

//output
console.log(betterName);

// 5. concat( ): Merges two strings together


//concat function 
function concat(string1, string2) { //takes two seprate strings
   var joined = string1 + string2; //combines both strings into one
   return joined;
}



console.log("DEBUG Concat")

//variables for concat to use 
var fristName = "Apple";
var lastName = "Pie";
var fullName = concat(fristName, lastName);

//output
console.log(fullName);

// 6. charAt( ): Lets you access a character from a string

//chartAt function
function charAt(string, index) {
    if(index >= 0 && index < string.length) { //checks index and string length before outputing result
      return string[index];
    } else {
         return "";
    }
 }


 // text to be formated
 var text = "I went to London in the summer of 2017";  
 var formatText = text.charAt(text.length-1);

 //output
 console.log("DEBUG CharAt");
 console.log(formatText);





