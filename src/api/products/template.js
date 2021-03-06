const productListingWrapper = document.querySelector('.product-listing-wrapper');


//Добавление товаров на страницу
function addProductItems() {
    let out = '';
    API.products.forEach(function(item, id) {
        out +='<div class="product-item">';
        out +=   '<img class="product-item__img" alt="' + item.title + '" src="' + item.img + '"/>';
        out +=    '<div class="product-item__wrapper">';
        out +=        '<h2 class="product-item__title">' + item.title + '</h2>';
        out +=        '<span class="product-item__price">' + (item.price).toLocaleString('ru').replace(/,/g, '.') + ' руб.</span>';
        out +=    '</div>'
        out +=    '<div class="product-item__wrapper product-btn__wrapper">';
        out +=        '<button data-number="' + id + '" data-type="buy" class="product-item__btn product-item__btn_buy">Заказать</button>';
        out +=        '<button data-number="' + id + '" data-type="cart" class="product-item__btn product-item__btn_cart">В корзину</button>';
        out +=    '</div>';
        out +='</div>';
    });
    productListingWrapper.insertAdjacentHTML('beforeEnd', out);
}


//Добавление модального окна с заказом на страницу
function addModalBuy() {
    out = '';
    out +='<div class="modal-buy">';
    out +=   '<button class="modal-close modal-buy__btn-close" data-type="buy">&#10006;</button>';
    out +=   '<h2 class="modal-buy__title">'+ API.products[productNumber].title + '</h2>';
    out +=   '<div class="modal-buy__item-wrapper">';
    out +=        '<div class="modal-buy__item">';
    out +=            '<img class="modal-buy__img" src="' + API.products[productNumber].img + '" alt="' + API.products[productNumber].title + '">';
    out +=            '<span class="modal-buy__price">' + (API.products[productNumber].price).toLocaleString('ru').replace(/,/g, '.') + ' руб.' + '</span>';
    out +=            '<label for="comment" class="modal-buy__form-title">Ваш телефон *:</label>';
    out +=        '</div>';
    out +=        '<div class="modal-buy__item">';
    out +=            '<div class="modal-buy__form-wrapper">';
    out +=                '<label for="comment" class="modal-buy__form-title">Комментарий к заказу:</label>';
    out +=                '<form id="form-comment" action="POST">';
    out +=                    '<textarea id="comment" class="modal-buy__form modal-buy__form_comment" name="Comment" rows="7"></textarea>';
    out +=                '</form>';
    out +=            '</div>';
    out +=            '<input form="form-comment" class="modal-buy__form modal-buy__form_tel" name="Phone" type="tel">';
    out +=            '<input form="form-comment" class="modal-buy__form_submit" type="submit" value="Отправить">';
    out +=        '</div>';
    out +=    '</div>';
    out +='</div>';
    productListingWrapper.insertAdjacentHTML('beforeEnd', out);
}


//Добавление модального окна с корзиной на страницу
function addModalCart() {
    out = '';
    out +='<div class="modal-cart">';
    out +=    '<h2 class="modal-cart__notice">Вы добавили в корзину:</h2>';
    out +=    '<div class="modal-cart__item-wrapper">';
    out +=        '<div class="modal-cart__item">';
    out +=            '<img class="modal-cart__img"src="' + API.products[productNumber].img + '" alt="' + API.products[productNumber].title + '">';
    out +=        '</div>';
    out +=        '<div class="modal-cart__item">';
    out +=            '<h3 class="modal-cart__title">'+ API.products[productNumber].title + '</h3>';
    out +=            '<span class="modal-cart__price">' + (API.products[productNumber].price).toLocaleString('ru').replace(/,/g, '.') + ' руб.' + '</span>';
    out +=        '</div>';
    out +=        '<div class="modal-cart__item">';
    out +=            '<button class="modal-close modal-cart__btn-close" data-type="cart">&#10006;</button>';
    out +=        '</div>';
    out +=    '</div>';
    out +=    '<a href="#" class="modal-cart__btn">Перейти в корзину</a>';
    out +='</div>';
    productListingWrapper.insertAdjacentHTML('beforeEnd', out);
}

//Отказался от использования интерполяции в пользу совместимости с IE 11