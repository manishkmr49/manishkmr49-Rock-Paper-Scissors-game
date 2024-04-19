let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let win_modal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let score = JSON.parse(localStorage.getItem("sc"));
let point = document.getElementById("point");
if(score)
{
    point.innerText = score;
}
let count = 0;
let random = Math.floor(Math.random()*3);

con.forEach((element,index) =>
{
    element.addEventListener("click",()=>{
        user.style.opacity = "1";
        triangle.style.display = "none";
        con.forEach(item =>
        {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");

        setTimeout(() =>{
            machine.style.opacity = "1";
            setTimeout(() =>{
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            },150);

            setTimeout(() =>{
                if(index==0 && random ==2 || index==1 && random == 0 || index == 2 && random == 1)
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "You Win";
                    count = score;
                    count++;
                    point.innerText = count;
                    localStorage.setItem("sc",JSON.stringify(count));
                }
                else if(random == index)
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "It's Draw";
                }
                else
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "You Loose";
                    count = 0;
                    point.innerText = count;
                    localStorage.setItem("sc",JSON.stringify(count));
                }
            },800);
            
        },200);
    });
});

play.addEventListener("click",() =>{
    window.location.reload();
});

let ruleBtn = document.querySelector(".btn-rule");
let rule_modal = document.querySelector(".rule-modal");
let rule_image = document.querySelector(".rule-img");
let close = document.querySelector(".close");
ruleBtn.addEventListener("click",() =>{
    rule_modal.style.display = "flex";
    setTimeout(() =>{
        rule_image.style.transform = "translateY(0)";

    },300);
});

close.addEventListener("click",() =>{
    rule_image.style.transform = "translateY(-200%)";
    setTimeout(()=>{
        rule_modal.style.display = "none";
    },250);
})

