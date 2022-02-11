let data = [
  {
    id: 1,
    image: './assets/img/pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    price: 69000,
    description: 'Đế Mỏng, Viền Phô Mai, Không topping',
  },
  {
    id: 2,
    image: './assets/img/pizza1.png',
    name: 'Pizza Hải Sản Pesto Xanh',
    quantity: 2,
    price: 99000,
    description:
      'Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh',
  },
  {
    id: 3,
    image: './assets/img/pizza2.png',
    name: 'Pizza Hải Sản Cao Cấp',
    quantity: 1,
    price: 179000,
    description: 'Tôm, cua, mực và nghêu với sốt Marinara',
  },
  {
    id: 4,
    image: './assets/img/pizza3.png',
    name: 'Pizza Thịt Nguội Kiểu Canada',
    quantity: 3,
    price: 149000,
    description: 'Sự kết hợp giữa thịt nguội và bắp ngọt',
  },
  {
    id: 5,
    image: './assets/img/pizza4.png',
    name: 'Pizza Thịt Xông Khói',
    quantity: 4,
    price: 169000,
    description:
      'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',
  },
  {
    id: 6,
    image: './assets/img/chicken.png',
    name: 'Đùi Gà Tẩm Bột Chiên Giòn (6pcs)',
    quantity: 5,
    price: 279000,
    description: 'Đùi Gà phủ một lớp bột chiên giòn rụm',
  },
  {
    id: 7,
    image: './assets/img/pasta.png',
    name: 'Mì Ý Tôm Sốt Kem Cà Chua',
    quantity: 10,
    price: 279000,
    description:
      'Sự tươi ngon của tôm kết hợp với sốt kem cà chua',
  },
];

let productList = data.map(function (product) {
  return `
              <div class="product-item">
                <img class="product-img" src=${
                  product.image
                } />
                <div class="product-info">
                  <div class="product-detail">
                    <p class="product-name">${
                      product.name
                    }</p>
                    <p class="product-quantity">
                    <span class="color-orange product-volumeBtn product-volumeBtnDe"> - </span>${product.quantity}<span class="color-orange product-volumeBtn product-volumeBtnIn"> + </span>
                    </p>
                    <p class="product-des">
                      ${product.description}
                    </p>
                  </div>
                  <div class="price-and-clear">
                    <div class="clear" onclick='deleteItem(${
                      product.id
                    })'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x-circle"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                    </div>
                    <div class="product-price">
                      ${(
                        product.price * product.quantity
                      ).toLocaleString('de-DE')}
                      <span class="color-orange">đ</span>
                    </div>
                  </div>
                </div>
              </div>
      `;
});

let totalPrice = data.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity;
}, 0);

const deleteItem = (id) => {
  data = data.filter((product) => product.id != id);
  console.log(data);
};

totalPrice = totalPrice.toLocaleString('de-DE');
totalPrice += `<span class="color-orange"> đ</span>`;
let htmlObj = document.querySelector('.product-list');
htmlObj.innerHTML =
  productList.length === 0
    ? `Giỏ hàng trống`
    : productList.join('\n') + htmlObj.innerHTML;
document.querySelector('.total').innerHTML = totalPrice;
