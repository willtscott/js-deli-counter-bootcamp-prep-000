
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, Ada. You are number "+katzDeliLine.length+" in line." }
  
function nowServing(line) {
  if(line.length<1) { 
    return "There is nobody waiting to be served!" }
  else {
    return "Currently serving " + line.shift() + "." }
} 
