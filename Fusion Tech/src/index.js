let courseCotent=document.getElementById('course-content')
let courseArrow=document.getElementById('course-arrow')
// let showCourses=()=>{
//     courseArrow.classList.toggle('arrow-rotate')
//     courseCotent.classList.toggle('show-courses')
// }

window.onclick=(e)=>{
    let courseCotent=document.getElementById('course-content')
    if(e.target.matches('#course-btn')||e.target.matches('#course-icon')||e.target.matches('#course-arrow')||e.target.matches('#course-content')||e.target.matches('#course-text'))
    {
        courseArrow.classList.toggle('arrow-rotate')
        courseCotent.classList.toggle('show-courses')
    }
    else
    {
        courseCotent.classList.remove('show-courses')
    }
}

let vid= document.getElementById('vid')
let iF=document.getElementById('vid-player')

let closeIframe=()=>{
    iF.src=''
    vid.style.visibility='hidden'
}

let openJstack=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/8KaJRw-rfn8'
}

let openJ2EE=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/l1Y-mFWpVm0'
}

let openMeanStack=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/usqwC2MIho8'
}

let openMernStack=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/INyYiwK58mc?t=11'
}

let openPyStack=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/nW1QQj7XBVM'
}

let openC=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/kJkB_Tggk8U'
}

let openSTest=()=>{
    vid.style.visibility='visible'
    iF.src='https://www.youtube.com/embed/cDQ34z0oqnQ'
}
