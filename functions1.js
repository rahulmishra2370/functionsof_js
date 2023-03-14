function sumofnumbers( a, b)
{
    return a+b;
}

console.log(sumofnumbers(5,7))

function printhi()
{
    console.log("this is a function is used to demostrate to print something without taking any input init")
}

console.log(printhi())
printhi()//here console will you output of statement written in the body

// the parametre which we give to our function in brackets will be acting as a local variable for the function it has value outside the function scope
// the values which we give while the invokement of the function willl also act a local parametre for the function...

// lets talk about arrow function
/*synatx fucntiontpe functionname =(here we pass parametre if any)=>
   {

     }  */

     // using arrow fumction above examples

     let printhi1=()=>{
        console.log("yo boi its me same stament in console using arrow function")
        return "yo boi"
        
     }

   printhi1()
   console.log(printhi1())


   // calc average using the arrow  function

   const avgofnumbers=(a,b)=>{
         
    //return (a+b)/2
      let avg=(a+b)/2
      return avg
   }
   console.log(avgofnumbers(2,3))