import "./style.css";

console.log("Hello, webpack!");

const hamburger = document.getElementById("hamburger-menu");
const menuItems = document.getElementById("menu-items");

hamburger?.addEventListener("click", () => {
  menuItems?.classList.toggle("hidden");
});

const products = [
  {
    id: 1,
    imageUrl: "/products/1.webp",
    discount: "39% OFF",
    title: "Astronomical Telescope D150/F750mm",
    price: 449,
    discountedPrice: 699,
    rating: 5,
  },
  {
    id: 2,
    imageUrl: "/products/2.webp",
    discount: "19% OFF",
    title: "HD Telescope F400D70mm Astronomy",
    price: 649,
    discountedPrice: 759,
    rating: 5,
  },
  {
    id: 3,
    imageUrl: "/products/3.webp",
    discount: "29% OFF",
    title: "PSC 114 – 900 Newtonian Reflector",
    price: 249,
    discountedPrice: 499,
    rating: 5,
  },
];
// Get the container element
const featuredProductsContainer = document.querySelector(".featured-products");

// Loop through the products array and generate HTML for each product
products.forEach((product) => {
  // Create product elements
  const productElement = document.createElement("div");
  productElement.classList.add(
    "relative",
    "flex",
    "w-full",

    "flex-col",
    "overflow-hidden",
    "rounded-lg",
    "border",
    "border-gray-100",
    "bg-white",
    "shadow-md"
  );
  productElement.setAttribute("id", `${product.id}`);

  productElement.innerHTML = `
    <a class="relative mx-5 mt-5 flex h-72 overflow-hidden rounded-xl" href="#">
      <img class="object-cover w-full" src="${
        product.imageUrl
      }" alt="product image" />
      <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">${
        product.discount
      }</span>
    </a>
    <div class="mt-4 px-5 pb-5">
      <a href="#">
        <h5 class="text-xl tracking-tight text-slate-900">${product.title}</h5>
      </a>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-3xl font-bold text-slate-900">$${
            product.price
          }</span>
          <span class="text-sm text-slate-900 line-through">$${
            product.discountedPrice
          }</span>
        </p>
        <div class="flex items-center">
          ${Array(product.rating)
            .fill(
              '<svg aria-hidden="true" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
            )
            .join("")}
          <span class="mr-2 ml-3 rounded bg-yellow-400 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
        </div>
      </div>
      <a href="${product.id}">
        <div onclick="showToast(event)" data-price="${
          product.price
        }" class=" cd-add-to-cart js-cd-add-to-cart flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          Add to cart
        </div>
      </a>
    </div>
  `;

  // Append the product element to the container
  featuredProductsContainer &&
    featuredProductsContainer.appendChild(productElement);
});

// add to cart
const cart = [
  {
    id: 3,
    imageUrl: "/products/3.webp",
    discount: "29% OFF",
    title: "PSC 114 – 900 Newtonian Reflector",
    price: 249,
    discountedPrice: 499,
    rating: 5,
  },
];

const cartContainer = document.querySelector(".cart-products");

cart.forEach((item) => {
  const cartItemHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
        <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
          <div class="img-box"><img src="${
            item.imageUrl
          }" alt="product image" class="xl:w-[140px]"></div>
          <div class="pro-data w-full max-w-sm ">
            <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">${
              item.title
            }</h5>
            <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">Perfumes</p>
            <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
              ${item.discount ? `<span>${item.discount}</span>` : ""}
              $${item.price}
            </h6>
          </div>
        </div>
        <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
          <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">$${
            item.price
          }</h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <button class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
              <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </button>
            <input type="text" class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1">
            <button class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
              <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">$${
            item.price
          }</h6>
        </div>
      </div>
    `;
  cartContainer && cartContainer.insertAdjacentHTML("beforeend", cartItemHTML);
});
(function () {
  // Add to Cart Interaction - by CodyHouse.co
  var cart = document.getElementsByClassName("js-cd-cart");
  if (cart.length > 0) {
    var cartAddBtns = document.getElementsByClassName("js-cd-add-to-cart"),
      cartBody = cart[0].getElementsByClassName("cd-cart__body")[0],
      cartList = cartBody.getElementsByTagName("ul")[0],
      cartListItems = cartList.getElementsByClassName("cd-cart__product"),
      cartTotal = cart[0]
        .getElementsByClassName("cd-cart__checkout")[0]
        .getElementsByTagName("span")[0],
      cartCount = cart[0].getElementsByClassName("cd-cart__count")[0],
      cartCountItems = cartCount.getElementsByTagName("li"),
      cartUndo = cart[0].getElementsByClassName("cd-cart__undo")[0],
      productId = 0, //this is a placeholder -> use your real product ids instead
      cartTimeoutId = false,
      animatingQuantity = false;
    initCartEvents();

    function initCartEvents() {
      // add products to cart
      for (var i = 0; i < cartAddBtns.length; i++) {
        (function (i) {
          cartAddBtns[i].addEventListener("click", addToCart);
        })(i);
      }

      // open/close cart
      cart[0]
        .getElementsByClassName("cd-cart__trigger")[0]
        .addEventListener("click", function (event) {
          event.preventDefault();
          toggleCart();
        });

      cart[0].addEventListener("click", function (event) {
        if (event.target == cart[0]) {
          // close cart when clicking on bg layer
          toggleCart(true);
        } else if (event.target.closest(".cd-cart__delete-item")) {
          // remove product from cart
          event.preventDefault();
          removeProduct(event.target.closest(".cd-cart__product"));
        }
      });

      // update product quantity inside cart
      cart[0].addEventListener("change", function (event) {
        if (event.target.tagName.toLowerCase() == "select") quickUpdateCart();
      });

      //reinsert product deleted from the cart
      cartUndo.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() == "a") {
          event.preventDefault();
          if (cartTimeoutId) clearInterval(cartTimeoutId);
          // reinsert deleted product
          var deletedProduct = cartList.getElementsByClassName(
            "cd-cart__product--deleted"
          )[0];
          Util.addClass(deletedProduct, "cd-cart__product--undo");
          deletedProduct.addEventListener("animationend", function cb() {
            deletedProduct.removeEventListener("animationend", cb);
            Util.removeClass(
              deletedProduct,
              "cd-cart__product--deleted cd-cart__product--undo"
            );
            deletedProduct.removeAttribute("style");
            quickUpdateCart();
          });
          Util.removeClass(cartUndo, "cd-cart__undo--visible");
        }
      });
    }

    function addToCart(event) {
      event.preventDefault();
      if (animatingQuantity) return;
      var cartIsEmpty = Util.hasClass(cart[0], "cd-cart--empty");
      //update cart product list
      addProduct(this);
      //update number of items
      updateCartCount(cartIsEmpty);
      //update total price
      updateCartTotal(this.getAttribute("data-price"), true);
      //show cart
      Util.removeClass(cart[0], "cd-cart--empty");
    }

    function toggleCart(bool) {
      // toggle cart visibility
      var cartIsOpen =
        typeof bool === "undefined"
          ? Util.hasClass(cart[0], "cd-cart--open")
          : bool;

      if (cartIsOpen) {
        Util.removeClass(cart[0], "cd-cart--open");
        //reset undo
        if (cartTimeoutId) clearInterval(cartTimeoutId);
        Util.removeClass(cartUndo, "cd-cart__undo--visible");
        removePreviousProduct(); // if a product was deleted, remove it definitively from the cart

        setTimeout(function () {
          cartBody.scrollTop = 0;
          //check if cart empty to hide it
          if (Number(cartCountItems[0].innerText) == 0)
            Util.addClass(cart[0], "cd-cart--empty");
        }, 500);
      } else {
        Util.addClass(cart[0], "cd-cart--open");
      }
    }

    function addProduct(target) {
      // this is just a product placeholder
      // you should insert an item with the selected product info
      // replace productId, productName, price and url with your real product info
      // you should also check if the product was already in the cart -> if it is, just update the quantity
      productId = productId + 1;

      products.forEach((product) => {
        var productAdded = `<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="${product.imageUrl}" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Product Name</a></h3><span class="cd-cart__price">$${product.price}</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
        ${product.id} +
        '">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
        productId +
        '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>`;
        cartList.insertAdjacentHTML("beforeend", productAdded);
      });
    }

    function removeProduct(product) {
      if (cartTimeoutId) clearInterval(cartTimeoutId);
      removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart

      var topPosition = product.offsetTop,
        productQuantity = Number(
          product.getElementsByTagName("select")[0].value
        ),
        productTotPrice =
          Number(
            product
              .getElementsByClassName("cd-cart__price")[0]
              .innerText.replace("$", "")
          ) * productQuantity;

      product.style.top = topPosition + "px";
      Util.addClass(product, "cd-cart__product--deleted");

      //update items count + total price
      updateCartTotal(productTotPrice, false);
      updateCartCount(true, -productQuantity);
      Util.addClass(cartUndo, "cd-cart__undo--visible");

      //wait 8sec before completely remove the item
      cartTimeoutId = setTimeout(function () {
        Util.removeClass(cartUndo, "cd-cart__undo--visible");
        removePreviousProduct();
      }, 8000);
    }

    function removePreviousProduct() {
      // definitively removed a product from the cart (undo not possible anymore)
      var deletedProduct = cartList.getElementsByClassName(
        "cd-cart__product--deleted"
      );
      if (deletedProduct.length > 0) deletedProduct[0].remove();
    }

    function updateCartCount(emptyCart, quantity) {
      if (typeof quantity === "undefined") {
        var actual = Number(cartCountItems[0].innerText) + 1;
        var next = actual + 1;

        if (emptyCart) {
          cartCountItems[0].innerText = actual;
          cartCountItems[1].innerText = next;
          animatingQuantity = false;
        } else {
          Util.addClass(cartCount, "cd-cart__count--update");

          setTimeout(function () {
            cartCountItems[0].innerText = actual;
          }, 150);

          setTimeout(function () {
            Util.removeClass(cartCount, "cd-cart__count--update");
          }, 200);

          setTimeout(function () {
            cartCountItems[1].innerText = next;
            animatingQuantity = false;
          }, 230);
        }
      } else {
        var actual = Number(cartCountItems[0].innerText) + quantity;
        var next = actual + 1;

        cartCountItems[0].innerText = actual;
        cartCountItems[1].innerText = next;
        animatingQuantity = false;
      }
    }

    function updateCartTotal(price, bool) {
      cartTotal.innerText = bool
        ? (Number(cartTotal.innerText) + Number(price)).toFixed(2)
        : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
    }

    function quickUpdateCart() {
      var quantity = 0;
      var price = 0;

      for (var i = 0; i < cartListItems.length; i++) {
        if (!Util.hasClass(cartListItems[i], "cd-cart__product--deleted")) {
          var singleQuantity = Number(
            cartListItems[i].getElementsByTagName("select")[0].value
          );
          quantity = quantity + singleQuantity;
          price =
            price +
            singleQuantity *
              Number(
                cartListItems[i]
                  .getElementsByClassName("cd-cart__price")[0]
                  .innerText.replace("$", "")
              );
        }
      }

      cartTotal.innerText = price.toFixed(2);
      cartCountItems[0].innerText = quantity;
      cartCountItems[1].innerText = quantity + 1;
    }
  }
})();

// Utility function
function Util() {}

/* 
	class manipulation functions
*/
Util.hasClass = function (el, className) {
  if (el.classList) return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};

Util.addClass = function (el, className) {
  var classList = className.split(" ");
  if (el.classList) el.classList.add(classList[0]);
  else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
};

Util.removeClass = function (el, className) {
  var classList = className.split(" ");
  if (el.classList) el.classList.remove(classList[0]);
  else if (Util.hasClass(el, classList[0])) {
    var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(" "));
};

Util.toggleClass = function (el, className, bool) {
  if (bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.setAttributes = function (el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/* 
  DOM manipulation
*/
Util.getChildrenByClassName = function (el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className))
      childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

/* 
	Animate height of an element
*/
Util.setHeight = function (start, to, element, duration, cb) {
  var change = to - start,
    currentTime = null;

  var animateHeight = function (timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = parseInt((progress / duration) * change + start);
    // console.log(val);
    element.setAttribute("style", "height:" + val + "px;");
    if (progress < duration) {
      window.requestAnimationFrame(animateHeight);
    } else {
      cb();
    }
  };

  //set the height of the element before starting animation -> fix bug on Safari
  element.setAttribute("style", "height:" + start + "px;");
  window.requestAnimationFrame(animateHeight);
};

/* 
	Smooth Scroll
*/

Util.scrollTo = function (final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
    currentTime = null;

  var animateScroll = function (timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final - start, duration);
    window.scrollTo(0, val);
    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
  if (!element) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute("tabindex", "-1");
    element.focus();
  }
};

/* 
  Misc
*/

Util.getIndexInArray = function (array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function (property, value) {
  if ("CSS" in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return jsProperty in document.body.style;
  }
};

/* 
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

//Custom Event() constructor
if (typeof window.CustomEvent !== "function") {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/* 
	Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
