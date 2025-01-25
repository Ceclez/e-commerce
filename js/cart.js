document.addEventListener('DOMContentLoaded', function() {
    let cart_icon = document.querySelector('.header__icon--cart') ,
        cart_container = document.querySelector('.cart__container') ;

    cart_icon.addEventListener('click', function(event) {
        event.stopPropagation() ;
        if (cart_container.style.display === 'none' || cart_container.style.display === '') {
            cart_container.style.display = 'flex' ;
        } else {
            cart_container.style.display = 'none' ;
        }
    }) ;
})
//Funcionamiento del carrito de compras