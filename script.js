document.getElementById('menuToggle')?.addEventListener('click',()=>{
  document.getElementById('menu').classList.toggle('open');
});

document.getElementById('contactForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  const name=document.getElementById('contactName').value;
  const type=document.getElementById('contactType').value;
  const msg=document.getElementById('contactMessage').value;
  const text=`Hola JAKS, tengo un proyecto.%0A%0ANombre:${name}%0ATipo:${type}%0AMensaje:${msg}`;
  window.open(`https://wa.me/18452704608?text=${text}`,'_blank');
});