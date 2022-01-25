const message = document.querySelector('.message');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output')

let heads = 0;
let tails = 0;

btn.addEventListener('click', ()=>{
if(Math.random() > 0.50){
output.innerHTML = `Head ${heads}` 
output.classList.add('head-active')
output.classList.remove('tail-active')
heads++
}else{
output.innerHTML = `Tail ${tails}`
output.classList.add('tail-active')
output.classList.remove('head-active')
tails++
}
})
