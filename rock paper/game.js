const but=()=>{
let myboolean=confirm("Shell we play rock,paper,scissors");
myboolean?game(): alert("Okey May be next Time");
};

const game=()=>{
 while(true)
 {
  let choice=prompt("Enter rock,paper or scissors");
    choice??alert("I think you have changed- your mind may be next time");
    choice=form(choice);

  if(choice == "")
  {
    alert("You can't enter any choice plese enter correct choice");
  } 
  else if(choice == 'rock'||choice == 'paper' ||choice== 'scissors')
  {
    let com=['rock','paper','scissors'];
    let out=Math.floor(Math.random()*com.length);
    let random=com[out];
    let result=choice === random?"Tie game!"   
    :choice === com[1] &&random ===com[0]?"computer win the game!"    
    :choice === com[2]&&random === com[0]?"computer win the game!"
    :choice === com[0]&&random ===com[1]?"computer win the game!"
    :choice === com[1]&&random ===com[2]?"computer win the game!" 
    :"you win the game!"; 
    alert(result);
    let play=playAgain();
    if(play == true){ }
    else{
     alert("Okey Thank You For Playing Game !");
      break;
    }
  }
  else 
    {
      alert("You enter wrong choice please enter correct choice");
    }
 }
}

 const form=(choice)=>{
  choice=choice.toLowerCase().trim();
  return choice;
 }
 
 const playAgain=()=>{
  let playAgain= confirm("Play Again!");
  return playAgain;
 }
    
 








  