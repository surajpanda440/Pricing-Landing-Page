const buttonChange = document.querySelector('.select');
const circle = document.querySelector('#btnCircle');
let firstPrice = document.querySelector('.price-p1')
let secondPrice = document.querySelector('.price-p2')
let thirdPrice = document.querySelector('.price-p3')
let isLeftPosition = false;



buttonChange.addEventListener('click', () => {
    if (isLeftPosition) {
        circle.style.transform = 'translateX(16px)';
        firstPrice.innerHTML = '19.99'
        secondPrice.innerHTML = '24.99'
        thirdPrice.innerHTML = '39.99'
    } else {
        circle.style.transform = 'translateX(-16px)';
        firstPrice.innerHTML = '199.99'
        secondPrice.innerHTML = '249.99'
        thirdPrice.innerHTML = '399.99'
    }
    
    isLeftPosition = !isLeftPosition;
});










    