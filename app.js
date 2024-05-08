let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#mssg");
const gencompchoice =()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
};
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win!");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice = ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});