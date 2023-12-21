// alert("Wellcome to our ultra pppp ro website ")

let hy=document.getElementsByClassName("hy")
console.log(hy)

let an=document.getElementById("ankit");
console.log(an)

let tagname=document.getElementsByTagName("span")
console.log(tagname);

let b=document.getElementsByName("h3")
console.log(b)

let c=document.querySelector(".h6")
c.style.color="#fff"
console.log(c)

let e=document.querySelectorAll(".hy")
console.log(e)
document.body.style.backgroundColor="gray";


let obj={
    Name:"Karan Thakur",
    class:"+2",
    rollno:52,
    school:"GSSS Dasehra",

}
console.log(obj)

console.log(obj.Name)
for(let j in obj)
{
    console.log(j)
}
console.log("PRINT WITH VALUE>>>>.")


for(let i in obj)
{
    console.log(i,obj[i])
}


let array=[["dnvie","bfudyb"],"unfbf",857]

for(let x of array)
{
    console.log(x)
}


let container=document.querySelector(".container")
let king=document.querySelector(".king")
let hr=document.querySelector("#hr")

let naam={
    color:"gold",
    fontWeight:"800",
    fontSize:"50px",
    // boxShadow:"4px 4px 4px #fff",
    // display:"flex",
    textShadow:"3px 0px 4px gold",
    textAlign:"center",
    margin:"0",
    marginTop:"40px",
    fontFamily:"math"
}
  

let con={
    backgroundColor:"black",
    borderRadius:"5px",
    boxShadow:"5px 5px 5px #000",
    width:"100%",
    flexDirection:"column",
    alignItems:"center",
    height:"150px",
    // display:"flex"

}

  let hrstyle={
    backgroundColor:"gold",
    height:"5px",
    margin:"0px",
    boxShadow:"4px 4px 4px gold"
  }


for(let y in naam)
{
   king.style[y]=naam[y]
}
for(let k in con)
{
   container.style[k]=con[k]
}
for(let h in hrstyle)
{
    hr.style[h]=hrstyle[h]
}


let btncontainer=document.querySelector(".btncontainer")
let btn=document.querySelector("#btn")
let butt={
    border:"none",
    height:"50px",
    width:"200px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"25px",
    backgroundColor:"#0815aa",
    borderRadius:"5px",
    marginTop:"10px",
    fontWeight:"800"
  }
  for(let bon in butt)
{
    btn.style[bon]=butt[bon]
}
function here()
{
    let kohli=document.createElement("a");
    kohli.textContent="Wellcome";
    king.replaceChild(kohli,king.firstElementChild);
}