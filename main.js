let toggle_btn = document.querySelector('#nav-toggle')
let items = document.querySelector('.nav-items')

toggle_btn.addEventListener('click', () => {
    console.log(items)
    items.classList.toggle('shown')
})