
let op=document.querySelectorAll(".option")
let mesg=document.querySelector(".msgs")
op.forEach((p)=>
p.addEventListener("click",()=>{
 userchoice=p.getAttribute("id")
 playgames(userchoice)
})
)
const playgames=(userchoice)=>
{
    console.log(`user option  is ${userchoice}`)
    let comchoice=computerchoice()
    console.log(`computer option is ${comchoice}`)
    if(userchoice===comchoice){
        console.log(`draw`)
        mesg.innerText="draw"
        mesg.style.background="white"
        mesg.style.color="black"
        
    }
    else{
        uwin=true
        if(userchoice==="rock")
        { 
            uwin=comchoice==="paper"?false:true
            
        }
        else if(userchoice==="paper")
        {
            uwin=comchoice==="scissor"?false:true
        }
        else{
            uwin=comchoice==="rock"?false:true
        }
        winner(userchoice,comchoice)
    }
}
let winner=(userchoice,comchoice)=>{
    if(uwin){
        console.log("user is the winner")
          mesg.innerText=`user wins ${userchoice} beats ${comchoice} `
          mesg.style.width="250px"
          mesg.style.background="green"
          mesg.style.color="white"
        
          
    }
    else{
        console.log("computer is the winner ")
        mesg.innerText=`comp wins ${comchoice} beats ${userchoice} `
        mesg.style.width="250px"
             mesg.style.background="red"
             mesg.style.color="white"
             
    }
}
let computerchoice=()=>{
    const c_options=["rock","paper","scissor"]
    cid=Math.floor(Math.random() * 3)
    return c_options[cid]
}