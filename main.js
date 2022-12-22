let base = [
    {id: 1, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair', header: 'Rp 2.500.000',head:'Rp 3.500.000'},
    {id: 2, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair', header: 'Rp 2.500.000',head:'Rp 3.500.000'},
    {id: 3, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair', header: 'Rp 2.500.000',head:'Rp 3.500.000'},
    {id: 4, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair',header: 'Rp 2.500.000',head:'Rp 3.500.000' },
    {id: 5, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair',header: 'Rp 2.500.000',head:'Rp 3.500.000'}, 
    {id: 6, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair',header: 'Rp 2.500.000',head:'Rp 3.500.000'}, 
    {id: 7, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair' ,header: 'Rp 2.500.000',head:'Rp 3.500.000'},
    {id: 8, img: './img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair' ,header: 'Rp 2.500.000',head:'Rp 3.500.000'}
]

let row = document.querySelector('.row')

const addCardsiInRow = () => {

    base.forEach((item)=>{
    row.innerHTML += `<div class="card" id='${item.id}'>
    <img class="card__img" src='./${item.img}' alt="${item.subtitle}">
    <h2 class="card__title">${item.title}</h2>
    <p class='card__subtitle'>${item.subtitle}</p>
    <ul class='card__header'>${item.header}</ul>
    <ul-one class='card__head'>${item.head}</ul-one>
    <button type='button' class = 'btn'>delete</button>
    </div>`
    
})
}
addCardsiInRow()


const buttons = document.querySelectorAll('.btn');

function handleClick(h1) {
 const currentButton = h1.currentTarget;
currentButton.parentElement.remove();
}
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})
