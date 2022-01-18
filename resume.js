var nav=document.querySelectorAll('.nav_menu a');

for(var i=1;i<nav.length-1;i++){
    nav[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
    
        var interval=setInterval(function(){
            var targetSectionCoordinate=targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinate.top)
            if(targetSectionCoordinate.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,20);
        },7);
    });  
}


// skill bars Animation
var skillsContainer=document.getElementsByClassName('skill_progress');
var progressBars=document.querySelectorAll('.skill_progress > div');
window.addEventListener('scroll',checkScroll);
var animationDone= [false,false,false,false,false,false];


function initialiseBars(){
    for(let i=0;i<progressBars.length;i++){
        progressBars[i].style.width = 0 +'%'
    }
}
initialiseBars();

function fillBars(i){
    let targetWidth=progressBars[i].getAttribute('data-bar-width');
    let currentWidth=0;
    let interval=setInterval(function(){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        progressBars[i].style.width = currentWidth + '%';
    },15);
}
function checkScroll(){
    for(let i=0;i<skillsContainer.length;i++){
        var coordinates = skillsContainer[i].getBoundingClientRect();
        if(!animationDone[i] && coordinates.top < window.innerHeight){
            animationDone[i]= true;
            fillBars(i);
        }
        else if(coordinates.top >= window.innerHeight){
            animationDone[i]= false;
        }
    }
}

/*   Not working

var menu_list=document.getElementById('menu_list');
var menu_a=document.querySelectorAll('#menu_list a');
function list(){
    menu_list.style.height='80 px';
    menu_list.style.width='120 px';
    menu_list.style.backgroundColor='rgb(14, 139, 177)';
}
*/