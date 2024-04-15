import "./style.css";

console.log("Hello, webpack!");

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
    "max-w-sm",
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
      <div onclick="showToast(event)" class="flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        Add to cart
      </div>
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
