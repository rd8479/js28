const domnode=[]
const dommodeMain=document.querySelector(`.box1>img`)
for(let i=1; i<=5;i++){
    domnode.push(document.querySelector(`.box2>img:nth-child(${i})`))
}
for(let i=0;i<5;i++){
    function changPicture(){
        dommodeMain.setAttribute('src',domnode[i].getAttribute('src'))
        domnode[i].classList.add('hover')
        document.querySelector('.div_div').classList.remove('div_div')
    }
    function fixed(){
        domnode[i].classList.remove('hover')
    }
    domnode[i].addEventListener('mouseover',changPicture)
    domnode[i].addEventListener('mouseout',fixed)
}
