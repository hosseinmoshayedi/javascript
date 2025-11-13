// json data
var data =
{
    "product_groups": [
        {
            "group_id": 1,
            "group_title": "ساندویچ",
            "group_image": "images/burger.jpg",
            "group_page": "pages/sandwich.html",
            "group_products": [
                {
                    "product_id": 1,
                    "product_name": "ژامبون مرغ تنوری",
                    "product_price": 165000,
                    "product_image": "images/sandwich3.jpg",
                    "product_content": [
                        "ژامبون مرغ",
                        "قارچ",
                        "پنیر",
                        "سس مخصوص"
                    ]
                },
                {
                    "product_id": 2,
                    "product_name": "هات داگ مخصوص",
                    "product_price": 145000,
                    "product_image": "images/sandwich1.jpeg",
                    "product_content": [
                        "هات داگ",
                        "قارچ",
                        "پنیر",
                        "کاهو",
                        "خیارشور",
                        "گوجه"
                    ]
                },
                {
                    "product_id": 3,
                    "product_name": "چیز برگر",
                    "product_price": 176000,
                    "product_image": "images/burger7.png",
                    "product_content": [
                        "همبرگر90 درصد",
                        "پنیر گودا",
                        "سس مخصوص",
                        "گوجه"
                    ]
                },
                {
                    "product_id": 4,
                    "product_name": "رویال برگر",
                    "product_price": 193000,
                    "product_image": "images/burger4.png",
                    "product_content": [
                        "همبرگر 90 درصد",
                        "ژامبون گوشت",
                        "قارچ",
                        "پنیر"
                    ]
                }
            ]
        },
        {
            "group_id": 2,
            "group_title": "پیتزا",
            "group_image": "images/pizza.jpg",
            "group_page": "pages/pizza.html",
            "group_products": [{
                "product_id": 5,
                "product_name": "پیتزا فیله مرغ",
                "product_price": 165000,
                "product_image": "images/pizza1.png",
                "product_content": [
                    "فیله مرغ",
                    "قارچ",
                    "فلفل دلمه",
                    "پنیر",
                    "گوجه",
                    "ذرت"
                ]
            }, {
                "product_id": 6,
                "product_name": "پیتزا پنجره ای مخصوص",
                "product_price": 185000,
                "product_image": "images/pizza7.png",
                "product_content": [
                    "ژامبون بره",
                    "قارچ",
                    "پنیر",
                    "گوشت چرخ کرده",
                    "فلفل دلمه"
                ]
            }, {
                "product_id": 7,
                "product_name": "پیتزا پپرونی",
                "product_price": 173000,
                "product_image": "images/pizza5.png",
                "product_content": [
                    "کالباس پپرونی",
                    "قارچ",
                    "پنیر",
                    "فلفل دلمه"
                ]
            }]
        },
        {
            "group_id": 3,
            "group_title": "کباب",
            "group_image": "images/kabab.png",
            "group_page": "pages/kabab.html",
            "group_products": [{
                "product_id": 8,
                "product_name": "کوبیده",
                "product_price": 110000,
                "product_image": "images/kabab-koubide.jpeg",
                "product_content": [
                    "گوشت چرخ کرده",
                    "پیاز",
                    "نمک",
                    "جوش شیرین"
                ]
            }, {
                "product_id": 9,
                "product_name": "برگ",
                "product_price": 175,
                "product_image": "images/kabab-barg.jpeg",
                "product_content": [
                    "گوشت گوسفندی",
                    "نمک",
                    "آبلیمو"
                ]
            }]
        }
    ]
};

// navigation bar
const nav = document.getElementById("nav-container");
window.addEventListener('scroll', () => {
    if (window.innerWidth < 992) {
        if (scrollY > 400) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    } else {
        if (scrollY > 175) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    }
});

// read from json data
const cards = document.getElementsByClassName('card');
for (let i = 0; i < data.product_groups.length; i++) {
    let card = cards[i];
    card.querySelector('img').src = data.product_groups[i].group_image;
    card.querySelector('a').innerText = data.product_groups[i].group_title;
    card.querySelector('.card-footer').addEventListener('click', event=>{
        open(data.product_groups[i].group_page, "_blanck");
    });
    card.addEventListener('mouseenter', mouseIn, false);
    card.addEventListener('mouseleave', mouseLeave, false);
}

// card events functions
function mouseIn() {
    let cardFooter = this.querySelector('.card-footer');
    cardFooter.style.transform = "rotate(0deg)";

    let text = cardFooter.querySelector('a');
    text.style.transform = "rotate(0deg) scale(1) translateX(calc(50% + 1rem))";

    text.style.marginRight = "50%";
}

function mouseLeave() {
    let cardFooter = this.querySelector('.card-footer');
    cardFooter.style.transform = "";

    let text = cardFooter.querySelector('a');
    text.style.transform = "";

    text.style.marginRight = "";
}

// online shop button
function goToShop() {
    location.href = "#menu";
}