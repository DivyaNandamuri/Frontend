//callbacks
function sum(a,b){
    return a+b;
}

function displayResult(data){
    console.log('sum of two numbers is:', data);
}
displayResult(sum(1,2));

//setTimeout  - execute the function with some delay
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000);


//setInterval, clearInterval - execute the function repeatedly after certain intervals 
// and to stop the execution use clearTimeout
const intervalId = setInterval(() => {
    console.log("This message is shown after 3 seconds");
  }, 3000);

  setTimeout(() =>{
    clearInterval(intervalId)
  }, 10000);