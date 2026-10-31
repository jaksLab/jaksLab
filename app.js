const root=document.body.dataset.root || './';

const menu=document.querySelector('#menu-toggle');
const nav=document.querySelector('#site-nav');
function closeMenu(){nav?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open menu');}
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});

document.querySelectorAll('[data-filter-scope]').forEach(scope=>{
  const bar=scope.querySelector('[data-filter-for]');
  const type=bar.dataset.filterFor;
  const cards=[...scope.querySelectorAll(`[data-${type}]`)];
  const input=scope.querySelector('[data-search-input]');
  const count=scope.querySelector('[data-result-count]');
  let category='all';
  const update=()=>{
    const query=input.value.trim().toLowerCase();
    const status=scope.querySelector('[data-status-filter]')?.value||'all';
    let visible=0;
    cards.forEach(card=>{card.hidden=!((category==='all'||card.dataset.category===category)&&(status==='all'||card.dataset.status===status)&&card.dataset.search.includes(query));if(!card.hidden)visible++;});
    count.textContent=`${visible} ${type}${visible===1?'':'s'}`;
    scope.querySelector('.empty-state').hidden=visible!==0;
  };
  bar.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;bar.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});update();}));
  input.addEventListener('input',update);
  scope.querySelector('[data-status-filter]')?.addEventListener('change',update);
  scope.querySelector('[data-clear-filters]')?.addEventListener('click',()=>{input.value='';const status=scope.querySelector('[data-status-filter]');if(status)status.value='all';bar.querySelector('[data-filter="all"]').click();input.focus();});
});

async function copy(text,button,status){
  try{await navigator.clipboard.writeText(text);button.textContent='Copied';if(status)status.textContent='Copied to clipboard. Nothing has been posted.';}
  catch{if(status)status.textContent='Copy is unavailable here. Select the text above and copy it manually.';}
}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',()=>copy(button.dataset.copy,button,button.parentElement.querySelector('.copy-status'))));

const form=document.querySelector('#inquiry-form');
if(form){
  const intentButtons=[...document.querySelectorAll('[data-intent]')];
  const productField=document.querySelector('#product-field');
  const select=form.elements.product;
  const draft=document.querySelector('#message-draft');
  function chooseIntent(intent){form.elements.intent.value=intent;productField.hidden=intent!=='product';select.required=intent==='product';intentButtons.forEach(b=>{const selected=b.dataset.intent===intent;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});draft.hidden=true;}
  intentButtons.forEach(button=>button.addEventListener('click',()=>chooseIntent(button.dataset.intent)));
  const params=new URLSearchParams(location.search);
  if(['engineering','product','career'].includes(params.get('intent')))chooseIntent(params.get('intent'));
  if(params.has('product')||params.has('volume'))chooseIntent('product');
  if(params.has('volume'))form.elements.constraints.placeholder='Order quantity, customization and required date';
  if(params.has('product'))select.value=params.get('product');
  form.addEventListener('input',()=>{draft.hidden=true;form.elements.name.setCustomValidity('');form.elements.message.setCustomValidity('');});
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const data=new FormData(form);
    const name=String(data.get('name')||'').trim();
    const message=String(data.get('message')||'').trim();
    if(!name||!message){if(!name)form.elements.name.setCustomValidity('Please enter your name.');if(!message)form.elements.message.setCustomValidity('Please describe your project or product request.');form.reportValidity();return;}
    const text=[`Hi JAKS Engineering Lab, my name is ${name}.`,`Inquiry: ${data.get('intent')==='product'?'Product / volume order':data.get('intent')==='career'?'Professional opportunity':'Engineering project'}`,data.get('company')?`Company: ${data.get('company')}`:'',data.get('intent')==='product'?`Product: ${select.selectedOptions[0]?.textContent||'Not selected'}`:'',`Details: ${message}`,data.get('timing')?`Timing: ${data.get('timing')}`:'',data.get('constraints')?`Quantity / constraints: ${data.get('constraints')}`:''].filter(Boolean).join('\n');
    document.querySelector('#draft-text').textContent=text;
    const subject=data.get('intent')==='career'?'Professional opportunity — Jonathan Tapia':data.get('intent')==='product'?'JAKS product / volume quote':'JAKS engineering project';
    document.querySelector('#draft-email').href=`mailto:jaks2520@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    document.querySelector('#draft-whatsapp').href=`https://wa.me/18452704608?text=${encodeURIComponent(text)}`;
    document.querySelector('#draft-status').textContent='No message has been sent. Choose email or WhatsApp to review and send your message.';
    const button=document.querySelector('#copy-draft');button.textContent='Copy message';button.onclick=()=>copy(text,button,document.querySelector('#draft-status'));
    draft.hidden=false;
    draft.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
  });
}

// Interest-based navigation: content remains usable without JavaScript.
document.querySelectorAll('[data-path]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-path]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-path-panel]').forEach(panel=>{panel.hidden=panel.dataset.pathPanel!==button.dataset.path;});
}));

// Native dialog preserves focus and Escape behavior for image exploration.
const zoomable=document.querySelectorAll('.project-cover-detail img, .gallery-grid img, .product-media-stack img');
if(zoomable.length){
  const dialog=document.createElement('dialog');dialog.className='image-dialog';
  const close=document.createElement('button');close.type='button';close.className='button button-small';close.textContent='Close image ×';
  const image=document.createElement('img');dialog.append(close,image);document.body.append(dialog);
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  zoomable.forEach(source=>{
    const button=document.createElement('button');button.type='button';button.className='image-zoom';button.setAttribute('aria-label','Enlarge image: '+source.alt);
    source.parentNode.insertBefore(button,source);button.append(source);
    button.addEventListener('click',()=>{image.src=source.currentSrc||source.src;image.alt=source.alt;dialog.showModal();});
  });
}
