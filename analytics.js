// JAKS Analytics: disabled until the business owner creates a GA4 property.
// Add your own public Google Analytics 4 measurement ID when ready (example: G-XXXXXXXX).
// This is not a secret. Do not insert a personal email or private token here.
const measurementId = '';
const validId = /^G-[A-Z0-9]+$/.test(measurementId);
let enabled = false;
function getPreference(){try{return localStorage.getItem('jaks_ga4_consent')}catch{return null}}
function setPreference(value){try{localStorage.setItem('jaks_ga4_consent',value)}catch{}}
function activate(){
  if(enabled||!validId)return;
  enabled=true;
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());
  window.gtag('config',measurementId,{send_page_view:true});
  const script=document.createElement('script');
  script.async=true;
  script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);
  document.head.appendChild(script);
}
function showConsent(){
  if(!document.body)return;
  const el=document.createElement('aside');
  el.className='consent-banner';
  el.setAttribute('aria-label','Optional website analytics');
  el.innerHTML='<p><strong>Help improve JAKS.</strong> With your permission we use Google Analytics to measure visits and general clicks. We do not send the message you type in our contact form. <a href="'+(document.body.dataset.root||'./')+'privacy/"><u>Details</u></a></p><div class="consent-actions"><button type="button" data-analytics-choice="yes">Accept analytics</button><button type="button" data-analytics-choice="no">Decline</button></div>';
  el.addEventListener('click',e=>{
    const button=e.target.closest('[data-analytics-choice]');if(!button)return;
    const choice=button.dataset.analyticsChoice;setPreference(choice);el.remove();
    if(choice==='yes')activate();
  });
  document.body.appendChild(el);
}
if(validId){
  if(getPreference()==='yes')activate();
  else if(getPreference()===null){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showConsent,{once:true});
    else showConsent();
  }
}
export function trackEvent(name,params={}){
  if(enabled&&typeof window.gtag==='function')window.gtag('event',name,params);
}
document.addEventListener('click',event=>{
  if(!event.target.closest('#reset-analytics-preference'))return;
  try{localStorage.removeItem('jaks_ga4_consent')}catch{}
  location.reload();
});
