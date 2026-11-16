// Контактный номер для заказов и ссылок
const PHONE_NUMBER = "77070070414";

// 1. Ассортимент шашлыка (15 позиций с фото)
const shashlikMenu = [
  {
    id: 1,
    name: "Баранина на косточке",
    category: "Баранина",
    price: 1800,
    desc: "Молодая сочная баранина в специях и луковом соке",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Антрекот из баранины",
    category: "Баранина",
    price: 2100,
    desc: "Нежнейшее филе на ребрышке с румяной корочкой",
    img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Люля-кебаб из говядины",
    category: "Говядина",
    price: 1400,
    desc: "Рубленое мясо с курдюком и кавказскими травами",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Говяжья мякоть (вырезка)",
    category: "Говядина",
    price: 1900,
    desc: "Маринованная телятина с легким дымком",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Шашлык из куриного филе",
    category: "Птица",
    price: 1200,
    desc: "Диетическое нежное филе в сливочно-чесночном маринаде",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Куриные крылышки на углях",
    category: "Птица",
    price: 1100,
    desc: "Хрустящая корочка в паприке и пряных специях",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Люля-кебаб из курочки",
    category: "Птица",
    price: 1100,
    desc: "Сочный рубленый люля для любителей легкого мяса",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Утка на мангале",
    category: "Птица",
    price: 1700,
    desc: "Ароматные кусочки утки с гранатовым соусом",
    img: "https://images.unsplash.com/photo-1514944298352-7b2a6549eb9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Свиная шея",
    category: "Свинина",
    price: 1700,
    desc: "Мягкое мясо с идеальным балансом сочности и жирка",
    img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Свиные ребрышки",
    category: "Свинина",
    price: 1600,
    desc: "Томленые на углях ребрышки в авторском маринаде",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Хан-кебаб (печень в сетке)",
    category: "Субпродукты",
    price: 1500,
    desc: "Нежная печень в жировой сетке по-восточному",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Шашлык из красной рыбы",
    category: "Рыба",
    price: 2600,
    desc: "Стейк форели на решетке с долькой лимона",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Овощи на гриле (ассорти)",
    category: "Овощи",
    price: 1200,
    desc: "Баклажан, болгарский перец, помидор с дымком",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Шампиньоны на мангале",
    category: "Овощи",
    price: 1000,
    desc: "Крупные грибы в маринаде со сливочным маслом",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Острый шашлык по-кавказски",
    category: "Острое",
    price: 1850,
    desc: "Вырезка говядины с добавлением аджики и жгучего перца",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  }
];

// 2. Товары для мангала (с фото)
const suppliesMenu = [
  {
    id: 101,
    name: "Мангал складной усиленный",
    category: "Оборудование",
    price: 5500,
    desc: "Толщина стали 2 мм, компактный для багажника",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 102,
    name: "Уголь березовый (3 кг)",
    category: "Топливо",
    price: 1200,
    desc: "Крупная фракция, держит жар до 2.5 часов",
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 103,
    name: "Уголь древесный отборный (5 кг)",
    category: "Топливо",
    price: 1900,
    desc: "Экономичная упаковка для долгого застолья",
    img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 104,
    name: "Решетка-гриль глубокая",
    category: "Инвентарь",
    price: 3200,
    desc: "Нержавеющая сталь с деревянной ручкой",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 105,
    name: "Набор шампуров (6 шт)",
    category: "Инвентарь",
    price: 3000,
    desc: "Широкие шампуры из пищевой нержавеющей стали",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 106,
    name: "Жидкость для розжига (0.5 л)",
    category: "Топливо",
    price: 600,
    desc: "Без запаха парафина и дыма",
    img: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 107,
    name: "Уксус фирменный маринованный",
    category: "Приправы",
    price: 400,
    desc: "Настоящий шашлычный уксус с кольцами лука",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 108,
    name: "Соус томатный Сацебели",
    category: "Соусы",
    price: 500,
    desc: "Классический томатный соус с кинзой и чесноком",
    img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 109,
    name: "Соус белый чесночный",
    category: "Соусы",
    price: 500,
    desc: "На основе айрана, зелени и специй",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 110,
    name: "Лаваш тандырный свежий",
    category: "Выпечка",
    price: 250,
    desc: "Горячая лепешка прямо из тандыра",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  }
];

// Состояние корзины
let cart = [];

// Отрисовка карточек с фото
function renderCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${item.img}" alt="${item.name}" class="card-img" loading="lazy">
        <span class="card-tag">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-bottom">
          <span class="card-price">${item.price.toLocaleString()} ₸</span>
        </div>
        <button class="btn-add" onclick="addToCart(${item.id})">
          <i class="fa-solid fa-plus"></i> В заказ
        </button>
      </div>
    </div>
  `).join("");
}

// Добавление в корзину
window.addToCart = function(id) {
  const allProducts = [...shashlikMenu, ...suppliesMenu];
  const item = allProducts.find(p => p.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.count += 1;
  } else {
    cart.push({ ...item, count: 1 });
  }

  updateCartUI();
};

// Изменение количества
window.changeCount = function(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.count += delta;
  if (item.count <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  updateCartUI();
};

// Обновление интерфейса корзины
function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const container = document.getElementById("cartItemsContainer");
  const totalSumElem = document.getElementById("cartTotalSum");

  const totalCount = cart.reduce((acc, cur) => acc + cur.count, 0);
  const totalSum = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  badge.textContent = totalCount;
  totalSumElem.textContent = `${totalSum.toLocaleString()} ₸`;

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart-text">Корзина пуста. Добавьте мясо или товары!</p>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-thumb">
      <div class="item-info">
        <h4>${item.name}</h4>
        <span>${item.price.toLocaleString()} ₸ × ${item.count}</span>
      </div>
      <div class="item-controls">
        <button onclick="changeCount(${item.id}, -1)">-</button>
        <span>${item.count}</span>
        <button onclick="changeCount(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join("");
}

// Отправка в WhatsApp
function setupWhatsAppCheckout() {
  const sendBtn = document.getElementById("sendWhatsappBtn");
  sendBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Ваша корзина пуста!");
      return;
    }

    let text = "Здравствуйте! Хочу оформить заказ из Шашлычного цеха:%0A%0A";
    let total = 0;

    cart.forEach((item, index) => {
      const subtotal = item.price * item.count;
      total += subtotal;
      text += `${index + 1}. ${item.name} — ${item.count} шт. (${subtotal.toLocaleString()} ₸)%0A`;
    });

    text += `%0A*Итого: ${total.toLocaleString()} ₸*%0A%0AУточните, пожалуйста, время доставки или готовности к самовывозу.`;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  });
}

// Инициализация интерфейса
document.addEventListener("DOMContentLoaded", () => {
  renderCards(shashlikMenu, "shashlikGrid");
  renderCards(suppliesMenu, "suppliesGrid");
  setupWhatsAppCheckout();

  const cartSidebar = document.getElementById("cartSidebar");
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");

  cartToggleBtn.addEventListener("click", () => {
    cartSidebar.classList.add("open");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
  });

  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});