document.addEventListener('DOMContentLoaded',()=>{
  let aboutInput=document.getElementById('about-input'), skillsInput=document.getElementById('skills-input');
  aboutInput.value=localStorage.getItem('aboutText')||'';
  skillsInput.value=(JSON.parse(localStorage.getItem('skillsList'))||[]).join(', ');
  document.getElementById('admin-form').addEventListener('submit',e=>{
    e.preventDefault();
    localStorage.setItem('aboutText',aboutInput.value);
    let skillsArr=skillsInput.value.split(',').map(s=>s.trim()).filter(s=>s);
    localStorage.setItem('skillsList',JSON.stringify(skillsArr));
    alert('Saved! Refresh to see.');
  });
  document.getElementById('reset-btn').addEventListener('click',()=>{
    localStorage.removeItem('aboutText'); localStorage.removeItem('skillsList');
    aboutInput.value=''; skillsInput.value=''; alert('Reset!');
  });
});