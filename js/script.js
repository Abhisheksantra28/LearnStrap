const toggleButton = document.getElementById('toggle_btn');
const navList = document.getElementById('navItems');

toggleButton.addEventListener('click', ()=>{
  navList.classList.toggle('active');
})