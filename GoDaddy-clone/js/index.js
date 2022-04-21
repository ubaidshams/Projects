let signInDrop=()=>{
    let signInMenu=document.getElementById("sign-in-drop")
    signInMenu.classList.toggle("show-sign-in")
}


window.onclick=(e)=>{
    if(!e.target.matches('#signBtn'))
    {
        var signInMenu=document.getElementById('sign-in-drop')
        if(signInMenu.classList.contains('show-sign-in'))
        {
            signInMenu.classList.remove('show-sign-in')
        }
    }
     if(!e.target.matches('.drop-btn'))
    {
        var telContent=document.getElementById('tel-drop-content')
        telContent.className='tel-drop-content'
    }
}

let dropTelContent=()=>{
    let telContent=document.getElementById("tel-drop-content")
    telContent.className='show-tel-content'
}

let openHow=()=>
{
    let vid= document.getElementById('vid')
    vid.style.visibility='visible'
    let iF=document.getElementById('vid-player')
    iF.src='https://www.youtube.com/embed/p_p-oTCMmnc'
}

let closeIFrame=()=>{
    let iF=document.getElementById('vid-player')
    iF.src=''
    let vid=document.getElementById('vid')
    vid.style.visibility='hidden'
}

let openWhy=()=>
{
    let vid= document.getElementById('vid')
    vid.style.visibility='visible'
    let iF=document.getElementById('vid-player')
    iF.src='https://www.youtube.com/embed/nhjiUpgoptw'
}

let openWhat=()=>
{
    let vid= document.getElementById('vid')
    vid.style.visibility='visible'
    let iF=document.getElementById('vid-player')
    iF.src='https://www.youtube.com/embed/6kfaxkgqIfc'
}

let showAns1=()=>{
    let ans1=document.getElementById('ans1')
    ans1.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate')
    irotate.classList.toggle('ques-i-rotate')
}
let showAns2=()=>{
    let ans2=document.getElementById('ans2')
    ans2.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-2')
    irotate.classList.toggle('ques-i-rotate')
}

let showAns3=()=>{
    let ans3=document.getElementById('ans3')
    ans3.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-3')
    irotate.classList.toggle('ques-i-rotate')
}

let showAns4=()=>{
    let ans4=document.getElementById('ans4')
    ans4.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-4')
    irotate.classList.toggle('ques-i-rotate')
}


let showAns5=()=>{
    let ans5=document.getElementById('ans5')
    ans5.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-5')
    irotate.classList.toggle('ques-i-rotate')
}


let showAns6=()=>{
    let ans6=document.getElementById('ans6')
    ans6.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-6')
    irotate.classList.toggle('ques-i-rotate')
}

let showAns7=()=>{
    let ans7=document.getElementById('ans7')
    ans7.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-7')
    irotate.classList.toggle('ques-i-rotate')
}


let showAns8=()=>{
    let ans8=document.getElementById('ans8')
    ans8.classList.toggle('show-ans')
    let irotate=document.getElementById('ques-rotate-8')
    irotate.classList.toggle('ques-i-rotate')
}

(function(){window.addEventListener("load",()=>{const t=document.querySelector(".testimonial-items-container"),r=document.getElementById("next-btn"),e=()=>document.querySelectorAll(".testimonial-item"),o=()=>{n>i.length-4||(n++,t.classList.add("slide-transition"),f())},s=()=>{n<=0||(n--,t.classList.add("slide-transition"),f())},f=()=>{t.style.transform=n>=i.length-2?0:`translateX(${-h*n}px)`},u=document.getElementById("prev-btn");let i=document.querySelectorAll(".testimonial-item"),n=1,h=i[n].offsetWidth;t.addEventListener("transitionend",()=>{i=e(),n>=i.length-3?r.classList.add("next-btn-passive"):r.classList.remove("next-btn-passive"),n<=0?u.classList.add("prev-btn-passive"):u.classList.remove("prev-btn-passive")});r.addEventListener("click",()=>{o()});u.addEventListener("click",()=>{s()})})})()