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
    let visible=0;
    cards.forEach(card=>{card.hidden=!((category==='all'||card.dataset.category===category)&&card.dataset.search.includes(query));if(!card.hidden)visible++;});
    count.textContent=`${visible} ${type}${visible===1?'':'s'}`;
    scope.querySelector('.empty-state').hidden=visible!==0;
  };
  bar.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;bar.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});update();}));
  input.addEventListener('input',update);
  scope.querySelector('[data-clear-filters]')?.addEventListener('click',()=>{input.value='';bar.querySelector('[data-filter="all"]').click();input.focus();});
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
  if(params.get('intent')==='product'||params.has('product'))chooseIntent('product');
  if(params.has('product'))select.value=params.get('product');
  form.addEventListener('input',()=>{draft.hidden=true;form.elements.name.setCustomValidity('');form.elements.message.setCustomValidity('');});
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const data=new FormData(form);
    const name=String(data.get('name')||'').trim();
    const message=String(data.get('message')||'').trim();
    if(!name||!message){if(!name)form.elements.name.setCustomValidity('Please enter your name.');if(!message)form.elements.message.setCustomValidity('Please describe your project or product request.');form.reportValidity();return;}
    const text=[`Hi JAKS Engineering Lab, my name is ${name}.`,`Inquiry: ${data.get('intent')==='product'?'Product quote':'Engineering project'}`,data.get('company')?`Company: ${data.get('company')}`:'',data.get('intent')==='product'?`Product: ${select.selectedOptions[0]?.textContent||'Not selected'}`:'',`Details: ${message}`,data.get('timing')?`Timing: ${data.get('timing')}`:'',data.get('constraints')?`Quantity / constraints: ${data.get('constraints')}`:''].filter(Boolean).join('\n');
    try{
      const response=await fetch(root+'contact-config.json');
      if(!response.ok)throw new Error('Contact configuration unavailable');
      const config=await response.json();
      const number=String(config.whatsappNumber).replace(/\D/g,'');
      document.querySelector('#draft-text').textContent=text;
      document.querySelector('#draft-whatsapp').href=`https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      document.querySelector('#draft-status').textContent='No message has been sent. You choose when to send it.';
      const button=document.querySelector('#copy-draft');button.textContent='Copy message';button.onclick=()=>copy(text,button,document.querySelector('#draft-status'));
      draft.hidden=false;
    }catch{
      document.querySelector('#draft-text').textContent=text;
      document.querySelector('#draft-whatsapp').hidden=true;
      document.querySelector('#draft-status').textContent='WhatsApp setup could not be loaded. Copy this draft manually and use the contact number shown on the page.';
      draft.hidden=false;
    }
  });
}
