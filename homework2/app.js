function Taggle(){
    document.body.classList.toggle('body')
    document.querySelector('.btn').classList.toggle('btn2')
    console.log('true')
}
document.querySelector('.div_dark').addEventListener('click',Taggle)
