const e=document.querySelector(".power-led"),t=document.querySelector(".power-switch .button"),s=document.querySelector(".eyes"),o=document.querySelector(".screen"),n=[];t.addEventListener("click",(()=>{e.classList.toggle("on"),e.classList.contains("on")?(n.splice(0),o.classList.remove("off"),c(["cd manz.dev","npm install","npm run dev"])):(s.classList.add("off"),o.innerHTML="",n.forEach((e=>clearTimeout(e))),n.splice(0))}));const c=e=>{let t=750;o.innerHTML="$ ",e.forEach((e=>{t+=750;for(let c=0;c<e.length;c++){const s=setTimeout((()=>{o.innerHTML+=e[c]}),t);n.push(s),t+=50+~~(50*Math.random())}t+=750;const s=setTimeout((()=>o.innerHTML+="<br>$ "),t);n.push(s)})),t+=500;const c=setTimeout((()=>{const e=setTimeout((()=>s.classList.remove("off")),500);n.push(e),o.classList.add("off")}),t);n.push(c)};
