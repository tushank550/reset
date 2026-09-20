const screens=[...document.querySelectorAll(".screen")];
function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo(0,0)}
document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.next)));

const reset=document.getElementById("resetButton");
reset.addEventListener("click",()=>{
  reset.disabled=true;
  reset.style.transform="scale(.93)";
  setTimeout(()=>show("loading"),220);
  ["c1","c2","c3","c4"].forEach((id,i)=>{
    setTimeout(()=>{
      const el=document.getElementById(id);
      el.classList.add("done");
      el.querySelector("i").textContent="✓";
      if(i===3)setTimeout(()=>{show("finale");celebrate()},600);
    },700+i*700);
  });
});

function celebrate(){
  const box=document.querySelector(".confetti");
  for(let i=0;i<55;i++){
    const p=document.createElement("span");
    p.className="piece";
    p.style.left="50%";p.style.top="42%";
    p.style.setProperty("--x",`${(Math.random()-.5)*100}vw`);
    p.style.setProperty("--y",`${(Math.random()-.15)*95}vh`);
    p.style.setProperty("--d",`${1.2+Math.random()*1.5}s`);
    p.style.background=["#e7a7b4","#d9c2e6","#f3c8ad","#c5d9c8","#edc8d0"][Math.floor(Math.random()*5)];
    p.style.animationDelay=`${Math.random()*.25}s`;
    box.appendChild(p);
    setTimeout(()=>p.remove(),3300);
  }
}

document.getElementById("replay").addEventListener("click",()=>{
  document.querySelectorAll(".checks div").forEach(el=>{el.classList.remove("done");el.querySelector("i").textContent="○"});
  reset.disabled=false;reset.style.transform="";
  show("intro");
});
