document.querySelector("#payment").addEventListener("click",payment);
function payment(event){
event.preventDefault();
let n=document.querySelector("#name").value;
let c=document.querySelector("#a").value;
let d=document.querySelector("#b").value;
let s=document.querySelector("#c").value;
let p=document.querySelector("#d").value;
if(n==""||c==""||d==""||s==""||p==""){
    alert("fill all the fields");
}
else{
     alert("your order is accepted");
}
 let promo=new Promise(function (resolve,reject){
   setTimeout(function (){
    if(n!==""||c!==""||d!==""||s!==""||p!==""){
        alert("Your order is being cooked");
    }
   },3000) 
   setTimeout(function (){
    if(n!==""||c!==""||d!==""||s!==""||p!==""){
        alert("Your order is ready");
    }
   },8000) 
   setTimeout(function (){
    if(n!==""||c!==""||d!==""||s!==""||p!==""){
        alert("Order out for delivery ");
    }
   },10000) 
   setTimeout(function (){
    if(n!==""||c!==""||d!==""||s!==""||p!==""){
        alert("Order delivered");
    }
   },12000) 
 })
}