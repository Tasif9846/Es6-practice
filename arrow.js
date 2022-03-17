//function double(num){
//return num*2;
//}
///const double=function double(num){
   // return num*2;
    //}
const double=num=>num*2;
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const total=double(3);
const result=doMath(6,5);
console.log(result);