let humanScore=0;
let machineScore=0;
let count=0;

let selector=document.querySelector(".rock")
let paperSelector=document.querySelector(".paper")
let scissorSelector=document.querySelector(".scissor")
let player=document.querySelector(".player")
let machine=document.querySelector(".machine")
let resetButton=document.querySelector(".reset")
let endButton=document.querySelector(".end")


selector.onclick=function(){
    checkCount()
    count+=1;
    humanScore=humanScore+1;
    player.innerHTML=`Your Score : ${humanScore}`
    MachineScoreSetter();
}

paperSelector.onclick=function(){
    checkCount()
    count+=1;
    humanScore=humanScore+2;
    player.innerHTML=`Your Score : ${humanScore}`
    MachineScoreSetter();
}
scissorSelector.onclick=function(){
    checkCount()
    count+=1;
    humanScore=humanScore+3;
    player.innerHTML=`Your Score : ${humanScore}`
    MachineScoreSetter();
}

function MachineScoreSetter(){
    machineScore+=Math.floor(Math.random() * (4 - 1)) + 1;

    machine.innerHTML=`Computer's score : ${machineScore}`

}

resetButton.onclick=function(){
    humanScore=0;
    machineScore=0;
    player.innerHTML=`Your Score : ${humanScore}`
    machine.innerHTML=`Computer's score : ${machineScore}`
}

endButton.onclick=
function(){
    if(humanScore>machineScore){
        alert("You Win!")
    }
    else if(humanScore===machineScore){
        alert("Tie!")
    }
    else{
        alert("You Loose!!")
    }
    resetButton.onclick()
}

function checkCount(){
    if(count===3){
        endButton.onclick()
    }
    else{
        return
    }
}