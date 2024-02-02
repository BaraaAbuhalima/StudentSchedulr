const liss=document.querySelector('#minnav');
const ic= document.querySelector('#menu-icon');
const alll=document.querySelector("*");
const doc=document.querySelector("body");

alll.addEventListener('click',e=>{
    console.log("allll");
    liss.style.display='none';
})
ic.addEventListener("click",e=>{
    console.log("ic");
    e.stopPropagation();
    if (getComputedStyle(liss).display === "none") liss.style.display='flex';
    else liss.style.display='none';

})
window.addEventListener("resize",e=> {
    console.log("size");
    liss.style.display='none';
});
