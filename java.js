let startGame=document.querySelector(".span")
let divStart=document.querySelector(".start-game")
let helloMsg=document.querySelector(".name > p")


function theStart(){
    setTimeout(function(){
        tabs.forEach((el)=>{
        el.classList.add("rotate")
        })
    },500)
    setTimeout(function(){
    tabs.forEach((el)=>{
        el.classList.remove("rotate")
    })
},1400)}

startGame.addEventListener("click",function(){
    divStart.remove()
    let name= window.prompt("whate is your name")
    name===null || name.length===0?helloMsg.innerHTML=`Unknown Name`:helloMsg.innerHTML=`Hello : ${name}`;
    theStart()
})

let tabs=document.querySelectorAll(".memory-tabs > div");
let theClass=[];
let rongTries=[];
let youWin=0;
let k=[]
tabs.forEach(function(e){
    e.addEventListener("click",function(){
        k.push(this.classList[0])
        k.push(this.dataset.technology)
        if(k.length>=4){
        if(k[0]===k[2] && k[1]===`${k[3]}-` || k[3]===`${k[1]}-`){
            youWin=youWin+1
        }
        }
        k.length=0


})})

tabs.forEach((el)=>{
    el.style.order=Math.floor(Math.random()*tabs.length)
    el.addEventListener("click",function(){
    this.classList.add("rotate")
    theClass.push(Array.from(el.classList)[0])
    if(theClass.length>=2){
        if(theClass[0]!==theClass[1]){
        tabs.forEach((ele)=>{
            if(ele.classList[0]===theClass[0] || ele.classList[1]===theClass[1]){
            let p= setTimeout(function(){
                    el.classList.remove("rotate")
                    ele.classList.remove("rotate")
                },800)
                rongTries.push(p)
            }
        })
    }else{
        youWin=youWin+1
     }
        theClass.length=0
        }
    endGame=(rongTries.length)/2
    document.querySelector(".worngTries > span").innerHTML=endGame;
    if(endGame>=20){
        document.querySelector(".end-game").style.display="block"
        rongTries.length=0;
    }
    document.querySelector(".end-game >span").addEventListener("click",()=>{
    document.querySelector(".end-game").style.display="none"
    document.querySelector(".worngTries > span").innerHTML=0;
    el.classList.remove("rotate")
    el.style.order=Math.floor(Math.random()*tabs.length)
    theStart()
    youWin=0;
    })
    if(youWin>=10){
        document.querySelector(".you-win").style.display="block";
        youWin=0;
    }
    document.querySelector(".win").addEventListener("click",()=>{
        document.querySelector(".you-win").style.display="none"
        el.style.order=Math.floor(Math.random()*tabs.length)
        document.querySelector(".worngTries > span").innerHTML=0;
        rongTries.length=0;
        theStart()
        youWin=0;
        })
})

})

