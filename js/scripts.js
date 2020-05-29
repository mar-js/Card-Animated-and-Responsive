const sizes     = document.querySelectorAll('.size')
const colors    = document.querySelectorAll('.color')
const shoes     = document.querySelectorAll('.shoe')
const gradients = document.querySelectorAll('.gradient')
const shoeBg    = document.querySelector('.product')

let prevColor = 'blue'
let animationEnd = true

colors.forEach(c => c.addEventListener('click', ()=>{
    if(!animationEnd) return
    let primary      = c.getAttribute('primary')
    let color        = c.getAttribute('color')
    let shoe         = document.querySelector(`.shoe[color="${color}"]`)
    let gradient     = document.querySelector(`.gradient[color="${color}"]`)
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`)

    colors.forEach(c => c.classList.remove('active'))
    c.classList.add('active')

    let secondary = document.documentElement.style.setProperty('--primary', primary)

    shoes.forEach(s => s.classList.remove('show'))
    shoe.classList.add('show')

    gradients.forEach(g => g.classList.remove('first', 'second'))
    gradient.classList.add('first')
    prevGradient.classList.add('second')

    prevColor = color
    animationEnd = false

    gradient.addEventListener('animationend', ()=>{
        animationEnd = true
    })
}))


sizes.forEach(size => size.addEventListener('click', ()=>{    
    sizes.forEach(size => size.classList.remove('active'))
    size.classList.add('active')
}))

let x = window.matchMedia('(max-width: 675px)')

window.addEventListener('resize', ()=>{
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight
        shoeBg.style.height = `${shoeHeight}px`
    }else{
        shoeBg.style.height = 'height: 40.5rem'
    }
})

document.addEventListener('DOMContentLoaded', (e)=>{
    e = new CustomEvent('resize');
    window.dispatchEvent(e);
 });