"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let search = document.querySelector('#search');
let btn = document.querySelector('#btn');
let rowData = document.querySelector('#rowData');
let contact = document.querySelector('.contact');
let container = document.querySelector('.container');
let Circle_Top = document.getElementById('Circle-Top');
let header = document.getElementById('header');
let loading_screen = document.querySelector('.loading-screen');
let arr = [];
function GetAllPopularProductsBySearch(Query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            loading_screen.classList.replace('d-none', 'd-flex');
            let response = yield fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Query}`);
            let finallData = yield response.json();
            arr = finallData.drinks;
            DisplayAllPopularProducts();
        }
        catch (error) {
            window.alert(error);
        }
        finally {
            loading_screen.classList.replace('d-flex', 'd-none');
        }
    });
}
;
btn.addEventListener('click', function () {
    if (search.value === '') {
        search.focus();
        search.classList.add('is-invalid');
    }
    else {
        search.classList.remove('is-invalid');
        GetAllPopularProductsBySearch(search.value);
        search.value = ``;
    }
});
document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' && search.value != '') {
        GetAllPopularProductsBySearch(search.value);
        search.value = ``;
        search.blur();
    }
});
function DisplayAllPopularProducts() {
    let cartona = ``;
    contact.classList.add('py-5');
    container.classList.add('py-5');
    header.classList.remove('d-none');
    for (let i = 0; i < arr.length; i++) {
        cartona += `
      <div class="col-md-4">
      <div class="inner-popular animate__animated animate__flipInY overflow-hidden position-relative">
      <img src="${arr[i].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
      <div onclick="DisplayProductDetails(${i})" class="black-layer">Open</div>
      </div>
      </div>
      
      `;
    }
    rowData.innerHTML = cartona;
    let TheElement = document.getElementById('contact');
    let offsetElementTop = TheElement.offsetTop;
    window.scrollTo({ top: offsetElementTop - 40, behavior: 'smooth' });
}
;
function DisplayProductDetails(III) {
    contact.classList.add('pt-5', 'mt-5');
    container.classList.add('pt-5', 'mt-5');
    header.classList.add('d-none');
    let cartona = `
  <div class="col-md-6 pt-5 animate__animated animate__fadeInDownBig">
  <button onclick="DisplayAllPopularProducts()" id="back" class="btn btn-lg rounded-5 my-5">Back to previous products</button>
      <div class="inner-Details text-white">
        <h4 class="text-warning">Drink Name</h4>
        <!-- Drink Name -->
         <p class="fs-5 text-black fw-semibold">${arr[III].strDrink}</p>
         <h4 class="text-warning">Category Name</h4>
         <!-- Category -->
          <p class="fs-5 text-black fw-semibold">${arr[III].strCategory}</p>
          <h4 class="text-warning">The type of cup used to serve the drink</h4>
          <!-- Category Glass -->
          <p class="fs-5 text-black fw-semibold">${arr[III].strGlass}</p>
          <h4 class="text-warning">Instructions and preparation</h4>
          <!-- Instructions and preparation -->
           <p class="fs-5 text-black fw-semibold">${arr[III].strInstructions}</p>
      </div>
    </div>
    <div class="col-md-6 pt-5  animate__animated animate__fadeInDownBig">
      <div class="inner-Details pt-5">
        <img src="${arr[III].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
      </div>
    </div>
  `;
    rowData.innerHTML = cartona;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
;
let arr2 = [];
function RandomeCocTail() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            loading_screen.classList.replace('d-none', 'd-flex');
            let response = yield fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
            let finallData = yield response.json();
            arr2 = finallData.drinks;
            DisplayAllCoctailRandom();
        }
        catch (error) {
            window.alert(error);
        }
        finally {
            loading_screen.classList.replace('d-flex', 'd-none');
        }
    });
}
;
function DisplayAllCoctailRandom() {
    let cartona = ``;
    contact.classList.add('py-5');
    container.classList.add('py-5');
    header.classList.remove('d-none');
    for (let i = 0; i < arr2.length; i++) {
        cartona += `
    <div class="col-md-4">
    <div class="inner-popular animate__animated animate__flipInY overflow-hidden position-relative">
    <img src="${arr2[i].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
    <div onclick="DisplayCoctailRandomeDetails(${i})" class="black-layer">Open</div>
    </div>
    </div>
    
    `;
    }
    rowData.innerHTML = cartona;
    let TheElement = document.getElementById('contact');
    let offsetElementTop = TheElement.offsetTop;
    window.scrollTo({ top: offsetElementTop - 40, behavior: 'smooth' });
}
;
function DisplayCoctailRandomeDetails(III) {
    contact.classList.add('pt-5', 'mt-5');
    container.classList.add('pt-5', 'mt-5');
    header.classList.add('d-none');
    let cartona = `
  <div class="col-md-6 pt-5 animate__animated animate__fadeInDownBig">
  <button onclick="DisplayAllPopularProducts()" id="back" class="btn btn-lg rounded-5 my-5">Back to previous products</button>
      <div class="inner-Details text-white">
        <h4 class="text-warning">Drink Name</h4>
        <!-- Drink Name -->
         <p class="fs-5 text-black fw-semibold">${arr2[III].strDrink}</p>
         <h4 class="text-warning">Category Name</h4>
         <!-- Category -->
          <p class="fs-5 text-black fw-semibold">${arr2[III].strCategory}</p>
          <h4 class="text-warning">The type of cup used to serve the drink</h4>
          <!-- Category Glass -->
          <p class="fs-5 text-black fw-semibold">${arr2[III].strGlass}</p>
          <h4 class="text-warning">Instructions and preparation</h4>
          <!-- Instructions and preparation -->
           <p class="fs-5 text-black fw-semibold">${arr2[III].strInstructions}</p>
      </div>
    </div>
    <div class="col-md-6 pt-5  animate__animated animate__fadeInDownBig">
      <div class="inner-Details pt-5">
        <img src="${arr2[III].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
      </div>
    </div>
  `;
    rowData.innerHTML = cartona;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
;
window.addEventListener('scroll', function () {
    if (this.scrollY >= 900) {
        Circle_Top.classList.remove('d-none');
    }
    else {
        Circle_Top.classList.add('d-none');
    }
});
Circle_Top.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
