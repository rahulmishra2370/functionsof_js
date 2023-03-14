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
/*synatx fucntiontype functionname =(here we pass parametre if any)=>
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


   const marks={
     
    english:90,
    maths:100,
    phy:88,
    chem:78
   }
//   for(let i=0;i<Object.keys(marks).length;i++)
  // {
//    console.log(Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]])

     
//}

for(let keys in marks)
{
    console.log("the marks in"+" "+keys+" "+"are"+ " "+ marks[keys])
}



console.log("its line 69")


const meanofFive=(a,b,c,d,e)=>
{
    let avg=(a+b+c+d+e)/5
    return avg
}

console.log("average of 5 numbers are "+""+meanofFive(1,2,3,4,5))




