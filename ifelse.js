function main(marks) {
    let result;
   
  
    if (marks>=90){
      result="A grade";
    }
    else if (marks>=80 && marks<=89){
          result='B grade';
    }
      else if (marks>=70 && marks<=79){
          result='C grade';
    }
    else if (marks>=60 && marks<=69){
          result='D grade';
    }
  
      else{
          result="F grade";
      }
    return result;
  }
  
  let mark=95;
  console.log(main(mark))
  
// let x=0;

// if(x++){
//     console.log("value of x is NOT zero")

// }
// else if(x==0){
//     console.log("value of x is zero")
// }
// else{
//      console.log("both condition are false")
// }