function spinWords( letsSpin){
   const receivedString = letsSpin;
   const splitted = receivedString.split(" ");
   console.log(splitted, splitted.length);
   if (splitted.length > 5){
     const reversed = splitted.reverse();
     const joined = reversed.join("");
     return joined;
   }
}

console.log(spinWords('hey fellow warrior'));
