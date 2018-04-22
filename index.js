
function takeANumber(line, name){
  line.push(name);
  return "Welcome, Ada. You are number "+line.length+" in line." }
  
function nowServing(line) {
  if(line.length<1) { 
    return "There is nobody waiting to be served!" }
  else {
    return "Currently serving " + line.shift() + "." }
} 

function currentLine(line){
  if(line.length<1){
    return "The line is currently empty." }
  else {
    var val = "The line is currently: ";
    for(let i=1; i<=line.length; i++) {
      val += i+". "+line[i-1];
      if(i<=line.length-1) {
        val+=", " }
    }
    return val;
  } 
}
  
    

