let ankit=document.querySelector(".ankit")

let hy=document.querySelector("#hy")
document.body.style.backgroundColor="gray"
ankit.style.display="flex"
ankit.style.textDecoration="none"
ankit.style.fontWeight="700"
ankit.style.fontFamily="math"
ankit.style.fontSize="50px"
ankit.style.textShadow="5px 5px 5px #000"
ankit.style.justifyContent="center"
ankit.style.gap="10px"
hy.style.textDecoration="none"

console.log(ankit.innerHTML)
console.log(ankit.textContent)
console.log(ankit.innerText)

hy.className="sky"
console.log(ankit.className="hello")
// console.log(ankit.innerHTML)

let img=document.querySelector("img")

let btn=document.querySelector("button")

img.style.width="412px"
btn.style.margin="10px"
btn.style.borderRadius="5px"
var i=1;
document.body.style.display="flex"
document.body.style.justifyContent="center"
document.body.style.alignItems="center"
document.body.style.flexDirection="column"
let video=document.querySelector(".video")

btn.onclick=function gls()
{
     if(i==1)
     {
        img.setAttribute("src" , "https://tse4.mm.bing.net/th?id=OIP.JtbUMnrNb82ria4fnwsmBQHaEK&pid=Api&P=0&h=180")
         i=2;
         img.style.transition="1.5s"
         video.style.left="-0.5%"
         video.style.transition="1.5s"
     }
     else
     {
        img.setAttribute("src" , "https://tse4.mm.bing.net/th?id=OIP.XGQEfPyxjErCtNLXGF45cAHaEK&pid=Api&P=0&h=180")
        i=1;
        img.style.transition=".9s" 
        video.style.left="-100%"
        video.style.transition="2.1s"
     }
}

