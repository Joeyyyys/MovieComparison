(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}})();const p=[{criticScore:88,audienceScore:83,domestic:635763484,genre:"comedy",title:"Barbie"},{criticScore:59,audienceScore:95,domestic:574934330,genre:"action",title:"Mario Bros"},{criticScore:96,audienceScore:94,domestic:381311319,genre:"adventure",title:"Spiderverse"},{criticScore:82,audienceScore:94,domestic:358995815,genre:"action",title:"GOTG Vol. 3"},{criticScore:93,audienceScore:91,domestic:324130510,genre:"drama",title:"Oppenheimer"},{criticScore:67,audienceScore:94,domestic:298172056,genre:"adventure",title:"The Little Mermaid"},{criticScore:76,audienceScore:92,domestic:283067859,genre:"action",title:"Avatar 2"},{criticScore:46,audienceScore:82,domestic:214506909,genre:"action",title:"Ant-Man"},{criticScore:94,audienceScore:93,domestic:187131806,genre:"action",title:"John Wick 4"},{criticScore:69,audienceScore:88,domestic:174480468,genre:"adventure",title:"Indiana Jones 5"},{criticScore:96,audienceScore:94,domestic:172135383,genre:"action",title:"Mission Impossible 7"},{criticScore:52,audienceScore:91,domestic:157066392,genre:"action",title:"Transformers Beast"},{criticScore:88,audienceScore:96,domestic:156248615,genre:"drama",title:"Creed 3"},{criticScore:74,audienceScore:93,domestic:154426697,genre:"adventure",title:"Elemental"},{criticScore:56,audienceScore:84,domestic:145960660,genre:"action",title:"Fast X"},{criticScore:99,audienceScore:98,domestic:131997540,genre:"concert",title:"Taylor Swift Eras"},{criticScore:95,audienceScore:94,domestic:124312675,genre:"adventure",title:"Puss In Boots 2"},{criticScore:96,audienceScore:90,domestic:118610556,genre:"adventure",title:"TMNT"},{criticScore:76,audienceScore:91,domestic:108161389,genre:"horror",title:"Scream 6"},{criticScore:93,audienceScore:78,domestic:95043350,genre:"horror",title:"M3gan"},{criticScore:91,audienceScore:93,domestic:93277026,genre:"adventure",title:"D&D"},{criticScore:75,audienceScore:94,domestic:91746064,genre:"action",title:"The Equalizer 3"},{criticScore:52,audienceScore:73,domestic:85588302,genre:"horror",title:"The Nun 2"},{criticScore:28,audienceScore:73,domestic:82600317,genre:"action",title:"Meg 2"},{criticScore:38,audienceScore:70,domestic:82156962,genre:"horror",title:"Insidious"},{criticScore:78,audienceScore:92,domestic:72432543,genre:"action",title:"Blue Beetle"},{criticScore:37,audienceScore:84,domestic:67625828,genre:"comedy",title:"Haunted Mansion"},{criticScore:84,audienceScore:76,domestic:67233054,genre:"horror",title:"Evil Dead Rise"},{criticScore:66,audienceScore:71,domestic:64388510,genre:"comedy",title:"Cocaine Bear"},{criticScore:70,audienceScore:97,domestic:64267657,genre:"comedy",title:"A Man Called Otto"}];let h=p;Chart.defaults.color="white";const d=(e,c,i,r,t)=>{const o=document.querySelector("#default-movies"),n=document.createElement("li"),s=document.createElement("h2"),u=document.createElement("p"),m=document.createElement("p"),g=document.createElement("p"),S=document.createElement("p");s.textContent=e,u.textContent=`Critic Score: ${c}`,m.textContent=`Audience Score: ${i}`,g.textContent=`Domestic Total: ${r}`,S.textContent=`Genre: ${t}`,n.append(s,u,m,g,S),o.append(n)},y=()=>{try{p.forEach(e=>d(e.title,e.criticScore,e.audienceScore,e.domestic,e.genre))}catch(e){console.log(e)}},E=(e,c)=>{localStorage.setItem(e,JSON.stringify(c))},C=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(c){console.log(c)}},a=()=>C("movies")||[],l=e=>{E("movies",e)},L=e=>{l([e,...a()])},O=()=>{a().length===0&&l(h)},M=e=>{e.preventDefault();const c=new FormData(e.target),i=c.get("movie-title"),r=c.get("critic-score"),t=c.get("audience-score"),o=c.get("domestic-gross-sales"),n=c.get("genre");if(!i||!r||!t||!o||!n){alert("Please complete all fields before submitting.");return}const s={title:i,criticScore:r,audienceScore:t,domestic:o,genre:n};d(s.title,s.criticScore,s.audienceScore,s.domestic,s.genre),L(s),e.target.reset()},w=()=>{try{a().forEach(e=>{d(e.title,e.criticScore,e.audienceScore,e.domestic,e.genre)})}catch(e){console.log(e)}},I=()=>{l(h);const e=document.querySelector("#default-movies");e.innerHTML="",y()},b=()=>{const e=document.getElementById("domestic-graph"),c=[...a()].sort((i,r)=>r.domestic-i.domestic);new Chart(e,{type:"bar",data:{labels:c.map(i=>i.title),datasets:[{label:"Domestic Gross",data:c.map(i=>i.domestic),borderWidth:1}]},options:{scales:{y:{beginAtZero:!0,ticks:{color:"white"}},x:{ticks:{color:"white"}}}}})},v=()=>{const e=document.getElementById("genres-total-gross-graph"),c=a(),i=[...new Set(c.map(t=>t.genre))],r=new Map;c.forEach(t=>{r.has(t.genre)?r.set(t.genre,r.get(t.genre)+parseInt(t.domestic)):r.set(t.genre,parseInt(t.domestic))}),new Chart(e,{type:"doughnut",data:{labels:i,datasets:[{label:"Total Gross of Genre",data:Array.from(r.values()),hoverOffset:4,backgroundColor:["rgb(31, 119, 180)","rgb(255, 127, 14)","rgb(44, 160, 44)","rgb(214, 39, 40)","rgb(148, 103, 189)","rgb(140, 86, 75)","rgb(227, 119, 194)","rgb(127, 127, 127)","rgb(188, 189, 34)"]}]},options:{}})},f=()=>{Chart.helpers.each(Chart.instances,e=>{e.destroy()}),b(),v()},T=()=>{O(),y(),w();const e=document.querySelector("#new-movie-adder");e.addEventListener("submit",M);const c=document.querySelector("#default-button");c.addEventListener("click",I),b(),v(),e.addEventListener("submit",f),c.addEventListener("click",f)};T();