let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rst-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

let cnt=0;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(turno===true){
            box.innerText='O';
            box.style.color = 'blue';
            turno=false;
            ++cnt;
        }
        else {
            box.innerText='X';
            box.style.color = 'red';
            turno=true; 
            ++cnt;
        }
        box.disabled=true;
         
       checkWinner(cnt);

    });
});

const resetgame = () => {
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disableboxes =() => {
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableboxes =() => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const draw  = () => {
    msg.innerText=`Draw!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = (cnt) => {
    if(cnt===9){
     draw();
    }
    else {
    for( let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        } 
    }
  }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
