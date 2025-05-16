const defaultAbout = "Hello! I'm M Sohaib, a passionate full stack developer.";
const defaultSkills = ["HTML","CSS","Bootstrap","JavaScript","PHP","Laravel","MySQL","Git","GitHub"];
function loadContent() {
  document.getElementById('about-text').innerText = localStorage.getItem('aboutText')||defaultAbout;
  let skills = JSON.parse(localStorage.getItem('skillsList'))||defaultSkills;
  let container = document.getElementById('skills-list'); container.innerHTML='';
  skills.forEach(skill=>{
    let col=document.createElement('div'); col.className='col-md-3';
    let card=document.createElement('div'); card.className='skill-card';
    card.innerText=skill; card.addEventListener('mouseenter',()=>card.classList.add('outshine'));
    card.addEventListener('mouseleave',()=>card.classList.remove('outshine'));
    col.appendChild(card); container.appendChild(col);
  });
}
document.addEventListener('DOMContentLoaded',loadContent);