let minus=document.querySelector(".minus");
let num=document.querySelector(".num");
let plus=document.querySelector(".plus");
var a=1;
plus.addEventListener('click', function(){
   a++;
   a=(a<10)?"0"+a:a;
   num.innerText=a;
})
minus.addEventListener('click', function(){
    if(a>1)
    {
        a--;
    }
   
    a=(a>1)?"0"+a:a;
    num.innerText=a;
 })

//bhjcbhdagsg
let minus2=document.querySelector(".minus2");
let num2=document.querySelector(".num2");
let plus2=document.querySelector(".plus2");
var a2=1;
 plus2.addEventListener('click', function(){
    a2++;
    a2=(a2<10)?"0"+a2:a2;
    num2.innerText=a2;
 })
 minus2.addEventListener('click', function(){
     if(a2>0)
     {
         a2--;
     }
    
     a2=(a2>0)?"0"+a2:a2;
     num2.innerText=a2;
  })


  //no3
  let minus3=document.querySelector(".minus3");
let num3=document.querySelector(".num3");
let plus3=document.querySelector(".plus3");
var a3=1;
 plus3.addEventListener('click', function(){
    a3++;
    a3=(a3<10)?"0"+a3:a3;
    num3.innerText=a3;
 })
 minus3.addEventListener('click', function(){
     if(a3>0)
     {
         a3--;
     }
    
     a3=(a3>1)?"0"+a3:a3;
     num3.innerText=a3;
  })
//  let karan=document.querySelector(".karan")
// karan.addEventListener('click', function(){
//     let number=document.querySelector("#number").value
//     console.log(innerHTML=number)
// })
let sub=document.querySelector("#submit")
let p=document.querySelector("#p")
let totalamount=document.querySelector(".totalamt")
let km=document.querySelector("#number")
let pess=document.querySelector("#pess")
let lugg=document.querySelector("#lugg")
let child=document.querySelector("#child")
let dis=document.querySelector("#dis")
sub.addEventListener('click', function(){
    var total=num.innerText;

    var total2=num2.innerText;
   
    var total3=num3.innerText;
    var amt3=total3*80;
    var kmtotal=document.querySelector("#number").value
 if(kmtotal<=100 )
    {
        var amt4=kmtotal*12;
        var amt=total*250;
        var amt2=total2*150;
    }
    else if(kmtotal<=200 )
    {
        var amt4=kmtotal*22;
        var amt=  total*350;
        var amt2=total2*200;
    }
    else if(kmtotal<=300 )
    {
        var amt4=kmtotal*31;
        var amt=  total*500;
        var amt2=total2*250;
    }

    else
    {
        alert("Sorry Enter valid Disstance")
    }
    
    var maintotal=amt+amt2+amt3+amt4;
     p.innerText="₹"+maintotal;
     pess.innerText=amt;
     lugg.innerText=amt2;
     child.innerText=amt3;
     dis.innerText=amt4;
     totalamount.style.left="37%";
     totalamount.style.transition="all .9s"
})

// var kmtotal=document.querySelector("#number").value
// console.log(kmtotal)
// sub.addEventListener('click', function(){
//     if(kmtotal <= 100)
//     {
//         var kmtotal=document.querySelector("#number").value
//         var amt4=kmtotal*12;
//         p.innerText="₹"+amt4; 
//         console.log(kmtotal)
//         // p.innerText="₹"+maintotal;
//              totalamount.style.left="40%";
//     }
//     else if(kmtotal<=200)
//     {
//         var kmtotal=document.querySelector("#number").value
//         var amt4=kmtotal*20;
//         p.innerText="₹"+amt4; 
//     }
//     else if(kmtotal<=300)
//     {
//         var kmtotal=document.querySelector("#number").value
//         var amt4=kmtotal*29;
//         p.innerText="₹"+amt4;  
//     }
//     else
//     {
//         // var kmtotal=document.querySelector("#number").value
//         // var amt4=kmtotal*20;
//         // p.innerText="₹"+amt4; 
//         alert("Enter under 300km")
//     }
// })









let cross=document.querySelector(".cross")
cross.addEventListener('click',()=>{
    totalamount.style.left="-100%";
})

