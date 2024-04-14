
let form=document.querySelector("form");
let card=document.querySelector(".countainer");
let card2=document.querySelector(".thanks");
let dismiss=document.getElementById("dismiss")
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    card.classList.add("hide");
    card2.classList.add("show");
    card2.classList.remove("hide");
})
dismiss.addEventListener("click",(e)=>
{
    e.preventDefault();
    card.classList.remove("hide")
    card.classList.add("show")
    card2.classList.add("hide")
})

