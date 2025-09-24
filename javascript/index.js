// console.log("my name is rohan sirohi");
// console.log(5+3);
// console.log("a="+a);
// var a=23;

// let a=40;
// if(a>10){
//     let a=300;
//     console.log("a inside:"+a);
// }else{
//     console.log("Else condition")
// }
// console.log("a outside="+a);

// let a="20";
// if(a===20){
//     console.log("Equal data");
// }
// else{
//     console.log("Not equal data");
// }

// const name="Rohan";
// console.log("hi...."+name);
// const data=`Hello...`${name};
// console.log(data);

// function msg(name){
//     return name+"Welcome to js";
// }
// const data=msg("Ram ");
// console.log(data);

// function as an expression
// const data=function(name){
//     return name+"Welcome to js";
// }
// const msg1=data("Rohan ");
// console.log(msg1);
// const data=(myname)=>{
//     return myname+"Welcome to js";
// }
// const result=data("Rohan ");
// console.log(result);
// function greeting(msg="Hello"){
//     console.log( "rohan"+msg);
// }
// greeting();
function selectlanguage(lang){
   let data;
   if(lang=="java"){

   
    function javaCompiler(){
        return "java language selected";
    }
    data=javaCompiler();
   }else if(lang=="python"){
    function cCompiler(){
        return "c language selected";
    }
    data=cCompiler();
   }
   else{
    data="no such compiler found";
   }
   return data;
}
console.log(selectlanguage("dango"));