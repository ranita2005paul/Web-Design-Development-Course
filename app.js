let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let inp=document.querySelector("input");
    alert(`Your search: ${inp.value}`);
});