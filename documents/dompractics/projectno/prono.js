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
   
    a=(a>1)?""+a:a;
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
    
     a2=(a2>0)?""+a2:a2;
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
    
     a3=(a3>1)?""+a3:a3;
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
//fudgbvjdgv
let pess1=document.querySelector("#pess1")
let lugg1=document.querySelector("#lugg1")
let child1=document.querySelector("#child1")
let dis1=document.querySelector("#dis1")

//image function
let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let bus=0;
img1.addEventListener('click',()=>{
bus=1;
    img1.style.border="4px solid #000";
    img2.style.border="none";
    // console.log(bus)
})
img2.addEventListener('click',()=>{
    bus=2;
    img2.style.border="4px solid #000";
    img1.style.border="none";
    // console.log(bus)
})

sub.addEventListener('click', function(){
    var total=num.innerText;

    var total2=num2.innerText;
   
    var total3=num3.innerText;
    var amt3=total3*80;
    var kmtotal=document.querySelector("#number").value
  if(bus==2)
  {
  if(kmtotal<=100 )
    {      
        var k1=12;
        var t1=250;
        var tt1=150;
        var ch1=80;     
        var amt4=kmtotal*12;
        var amt=total*250;
        var amt2=total2*150;


        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";


    }
    else if(kmtotal<=200 )
    {
        var k1=22;
        var t1=350;
        var tt1=200;
        var ch1=80;  

        var amt4=kmtotal*22;
        var amt=  total*350;
        var amt2=total2*200;
        
        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";
    }
    else if(kmtotal<=300 )
    {
        var k1=31;
        var t1=500;
        var tt1=250;
        var ch1=80; 
        var amt4=kmtotal*31;
        var amt=  total*500;
        var amt2=total2*250;
        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";
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
 totalamount.style.left="30%";
 totalamount.style.transition="all 1.9s"
}
   else if(bus==1)
   {
    if(kmtotal<=100 )
    {      
        var k1=10;
        var t1=210;
        var tt1=130;
        var ch1=80;     
        var amt4=kmtotal*10;
        var amt=total*210;
        var amt2=total2*130;


        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";


    }
    else if(kmtotal<=200 )
    {
        var k1=18;
        var t1=300;
        var tt1=170;
        var ch1=80;  

        var amt4=kmtotal*18;
        var amt=  total*300;
        var amt2=total2*170;
        
        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";
    }
    else if(kmtotal<=300 )
    {
        var k1=26;
        var t1=440;
        var tt1=210;
        var ch1=80; 
        var amt4=kmtotal*26;
        var amt=  total*440;
        var amt2=total2*210;
        pess1.innerText=t1+"*";
        lugg1.innerText=tt1+"*";
        child1.innerText=ch1+"*";
        dis1.innerText=k1+"*";
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
     totalamount.style.left="30%";
     totalamount.style.transition="all 1.9s"
}
else
{
    alert("choose Your Bus")
}
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


// let in1=document.querySelector("#redio1")
// let in2=document.querySelector("#redio2")
// console.log(in1)
// console.log(in2)


//  let get=document.
//    seats35=35;
//    console.log(se)

//    if(se==35)
//    {
//     console.log("True")
//    }
//    else
//    {
//     console.log("false")
//    }
//     console.log(seats35)
    // console.log(seats30)
