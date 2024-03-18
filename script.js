const icons = document.querySelectorAll(".hover");
icons.forEach(icon => {
    icon.addEventListener('mouseover',mouseOver)
});
function mouseOver(event){
    event.target.style.backgroundColor = '#2b89d5';

}
icons.forEach(icon => {
    icon.addEventListener('mouseout',mouseOut)
});
function mouseOut(event){
    event.target.style.backgroundColor = '#3d8fd2';
    
}

const hovers = document.querySelectorAll(".hover2");
hovers.forEach(hover =>{
    hover.addEventListener('mouseover',hoverEffect)
});
function hoverEffect(event){
    event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.188)';
}
hovers.forEach(hover=>{
    hover.addEventListener('mouseout',hoverEffectOut)
});
function hoverEffectOut(event){
    event.target.style.backgroundColor = 'white'
}

const hoverBs = document.querySelectorAll('.hoverb');
hoverBs.forEach(hover=>{
    hover.addEventListener('mouseover',hoverBIn);
});
hoverBs.forEach(hover =>{
    hover.addEventListener('mouseout',hoverBOut);
});
function hoverBIn(event){
    event.target.style.backgroundColor='#3072a8';
}
function hoverBOut(event){
    event.target.style.backgroundColor='#3d8fd2';
}