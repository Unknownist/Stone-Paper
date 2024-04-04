let userScore=0;
let compScore=0;

let choices=document.querySelectorAll('.choice')
let msg=document.querySelector('#msg')
let iscore=document.querySelector('#You')
let cscore=document.querySelector('#Comp')

const GencompChoice= ()=>{
    let options=['rock','paper','scissors']
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
    }



    const compChoice=GencompChoice()

    const ShowWinner=(userWin)=>{
        if (userWin==true){
            msg.innerText='You Win!'
            userScore++
            iscore.innerText= userScore;
            msg.style.backgroundColor='green'
        }
        else{
            msg.innerText="You Lose."
            compScore++
            cscore.innerText=compScore
            msg.style.backgroundColor='red'
        }
    }




const drawGame= ()=>{
    console.log("Draw");
    msg.innerText='Draw.'
    msg.style.backgroundColor='gray'

}


const playgame=(choiceId)=>{
    console.log('user choice is ',choiceId);
    console.log('comp choice is',compChoice);


    if(choiceId=== compChoice){
     drawGame()
}
else{
    let userWin=true;
      if(choiceId==='rock'){
        userWin= compChoice==='paper'?false:true
      }
      else if(choiceId==='paper'){
        userWin=compChoice==='scissors'?false:true
      }
    else{
        userWin=compChoice==='rock'?false:true
      }
     ShowWinner(userWin)
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const choiceId=choice.getAttribute('id')
        playgame(choiceId)

    })
})
