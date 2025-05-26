let h2=document.querySelector("h2");
let boxes=document.querySelectorAll(".box");
let chance=document.querySelector('.chance');
let border=document.querySelector(".border");

let flag=0; //0=O, 1=X

function check() {
  let board = Array.from(boxes).map(box => {
    let content = box.textContent.trim();  
    return content === "O" || content === "X" ? content : "";
  });

  let count=0;
  for(let i=0 ; i<=8 ; i++)
  {
    if(board[i]!="")
        count++;
  }

  if(count===9)
  {
    alert("Game is a Tie");
    return true;
  }

  const wins = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]           
  ];

  for (let combo of wins) {
    const [a, b, c] = combo;
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      alert(`${board[a]} wins!`);
      return true; 
    }
  }

  return false;  
}


boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    let cont=1;
    if(box.innerHTML==='<h1 class="inn">O</h1>' || box.innerHTML==='<h1 class="inn">X</h1>')
    {
        alert("Can't place it there. Please chose another box");
        cont=0;
    }

    if(cont)
    {
        if(flag==0)
        {
            box.innerHTML='<h1 class="inn">O</h1>';
            box.style.backgroundColor="#f0b1ee";
            h2.innerHTML='Chance of X';
            flag=1;
            chance.style.border="5px solid #ed2de7"
        }

        else
        {
            box.innerHTML='<h1 class="inn">X</h1>';
            h2.innerHTML='Chance of O';
            box.style.backgroundColor="#ed2de7";
            flag=0;
            chance.style.border="5px solid #f0b1ee"
        }
    }
    setTimeout(() => {
    if (check() === true) {
        setTimeout(() => {
        boxes.forEach((box) => {
            box.innerHTML = "";
            box.style.backgroundColor = "beige";   
            border.style.border="5px solid #256ac4"         
        });
        }, 100); 
    }
    }, 50); 
    });
});