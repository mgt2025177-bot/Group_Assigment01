const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
    toggle.addEventListener('click',()=>nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))
}
const form=document.getElementById('contactForm');
if(form){
    form.addEventListener('submit',e=>{e.preventDefault();
        const d=new FormData(form);
        const subject=encodeURIComponent('Travel enquiry from '+d.get('name'));
        const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nDestination: ${d.get('destination')}\nTravel month: ${d.get('month')}\nTravelers: ${d.get('travelers')}\n\nMessage:\n${d.get('message')}`);
        document.getElementById('formStatus').textContent='Opening your email app to send this enquiry…';
        window.location.href=`mailto:hello@voyaratravel.com?subject=${subject}&body=${body}`})
    }
