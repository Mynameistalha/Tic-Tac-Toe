

const clickBtn=document.querySelectorAll(".box");

let resetBtn=document.querySelector(".restBtn");
let newButton=document.querySelector("#newBtn");
let msgCon=document.querySelector(".msg");
let para=document.querySelector("#msg")

// clickBtn.addEventListener('click',()=>
// {
   


//     let btnClick.textContent=prompt("")

// });
//first we store the multiple win patterns
let turn1=true;
var count=0;

const winPatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame =()=>
    {
        turn1=true;
        boxEnsabled();
        msgCon.classList.add("hide");
    }

clickBtn.forEach((box)=>
{
    box.addEventListener('click',()=>
    {
       
        if(turn1)
{ 
    box.innerText='0';
    box.style.color="red";
    turn1=false;
    count++;
    // clickBtn.style.color.innerText = "red";
} else
{
    box.innerText='X';
    box.style.color="green"
    turn1=true;
    count++;
    // clickBtn.style.color.innerText = "green";
}
box.disabled=true;

checkWinner();
       });
       
    
});
function boxDisabled()
{
    for(let box of clickBtn)
        {
            box.disabled=true;
          
        }

}
function boxEnsabled()
{
    for(let box of clickBtn)
        {
            box.disabled=false;
            box.innerText="";
          
        }

}

const showWinner = (winner)=>
    {
        para.innerText=`Congratulation winner is ${winner}`;
        msgCon.classList.remove("hide");
        boxDisabled();
    }

    // let count=0;
const checkWinner=()=>{
    let winnerFound=false;
    for( pattern of winPatterns)
        {
            // // console.log(pattern);
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(clickBtn[pattern[0]].innerText
            //     ,clickBtn[pattern[1]].innerText,
            //     clickBtn[pattern[2]].innerText);
            //      //here we get the position for check the winner possibility
   let value1=clickBtn[pattern[0]].innerText;
   let value2=clickBtn[pattern[1]].innerText;
   let value3=clickBtn[pattern[2]].innerText;
   
//    count++;

   if(value1 != "" && value2 != "" && value3 != "")
    
     if(value1 === value2 && value2===value3)
        {
            console.log("Winner",value1);
            // box.disabled=true;
            showWinner(value1);

            winnerFound=true;
            break;
            // count++;
            // console.log("Count",count);
        }
        // else if(count===9 && !checkWinner())
        //     {
        //      console.log("Match is Draw There is No Winner Here");
        //     para.innerText="Match is Draw There Is No winner Here";
        //     msgCon.classList.remove("hide");
    
    
        //         }
        
        if ( count === 9 && !winnerFound ) {
            console.log("Match is Draw. There is No Winner Here");
            para.innerText = "Match is Draw. There is No Winner Here";
            msgCon.classList.remove("hide");
        }

        }

     
        

         
}

// const draw=()=>
//     {

//         if(count==9 && !checkWinner())
//         {
//                   console.log("Match is Draw There is No Winner Here");
//         para.innerText="Match is Draw There Is No winner Here";
//         msgCon.classList.remove("hide");


//             }

    
newButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



    
  



