// 1. length: Should return the length of a string
function length(parm) {
    var length = 0;
    for(let a = 0; a < parm.length; a++) {
         length += 1
    }
    
    return length
    
}

console.log("DEBUG Length:" +  length.length);
console.log(length("pizza"));

// 2. slice( ): Returns a piece of a string


function slice(original, start, end) {
    var word = "";
    for(let a = start; a < end; a++) {
        word += original[a];
    }

    return word;
}

console.log("DEBUG Slice")
console.log(slice("pizza", 1, 4))



// 3. replace( ):Replaces the first instance of a matching character in a string









// 4. replaceAll( ): Replaces all instances of a matching character in a string









// 5. concat( ): Merges two strings together








// 6. charAt( ): Lets you access a character from a string









// trim( ): Remove