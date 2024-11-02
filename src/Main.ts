// Select Elements From Html (Start)
let search = document.querySelector('#search') as HTMLInputElement;
let btn = document.querySelector('#btn') as HTMLButtonElement;
let rowData = document.querySelector('#rowData') as HTMLDivElement;
let contact = document.querySelector('.contact') as HTMLDivElement;
let container = document.querySelector('.container') as HTMLDivElement;
let Circle_Top = document.getElementById('Circle-Top') as HTMLButtonElement;
let header = document.getElementById('header') as HTMLDivElement;
let loading_screen = document.querySelector('.loading-screen')as HTMLDivElement;

// Part 1

// Get Coctail By Name 1
let arr:any = [];
async function GetAllPopularProductsBySearch(Query:string):Promise<void>
{
   try{
    loading_screen.classList.replace('d-none','d-flex');
    let response:Response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Query}`);
    let finallData:any = await response.json();
    arr = finallData.drinks;        
    DisplayAllPopularProducts();
   }
   catch(error){
     window.alert(error);
   }
   finally{
    loading_screen.classList.replace('d-flex','d-none');
   }
};
btn.addEventListener('click',function(){
   if(search.value === ''){
    search.focus();
    search.classList.add('is-invalid');
   }
   else{
       search.classList.remove('is-invalid');
    GetAllPopularProductsBySearch(search.value);
    search.value = ``;
   }
});

document.addEventListener('keyup',function(e){
  if(e.key === 'Enter' && search.value != ''){
    GetAllPopularProductsBySearch(search.value);
    search.value = ``;
    search.blur();
  }
});

// Function Display Coctail 1

function DisplayAllPopularProducts():void{

    let cartona:string = ``;
    contact.classList.add('py-5');
    container.classList.add('py-5');
    header.classList.remove('d-none');
    for(let i = 0; i < arr.length; i++){
      cartona+= `
      <div class="col-md-4">
      <div class="inner-popular animate__animated animate__flipInY overflow-hidden position-relative">
      <img src="${arr[i].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
      <div onclick="DisplayProductDetails(${i})" class="black-layer">Open</div>
      </div>
      </div>
      
      `;
    }
    
    rowData.innerHTML = cartona;
    let TheElement = document.getElementById('contact') as HTMLDivElement;
    let offsetElementTop = TheElement.offsetTop;
    window.scrollTo({top:offsetElementTop-40,behavior:'smooth'});
};


// Function Display Details Coctail 2

function DisplayProductDetails(III:number):void{
  contact.classList.add('pt-5','mt-5');
  container.classList.add('pt-5','mt-5');
  header.classList.add('d-none');
  let cartona:string = `
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
  window.scrollTo({top:0,behavior:'smooth'});
};


// Part 2
// Get Randome CocTails 2
let arr2:any = [];
async function RandomeCocTail():Promise<void>
{
   try{
    loading_screen.classList.replace('d-none','d-flex');
    let response:Response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    let finallData:any = await response.json();
    arr2 = finallData.drinks;  
      
    DisplayAllCoctailRandom();
   }
   catch(error){
     window.alert(error);
   }
   finally{
    loading_screen.classList.replace('d-flex','d-none');
   }
};

// Function Display Coctail 3

function DisplayAllCoctailRandom():void{

  let cartona:string = ``;
  contact.classList.add('py-5');
  container.classList.add('py-5');
  header.classList.remove('d-none');
  for(let i = 0; i < arr2.length; i++){
    cartona+= `
    <div class="col-md-4">
    <div class="inner-popular animate__animated animate__flipInY overflow-hidden position-relative">
    <img src="${arr2[i].strDrinkThumb}" alt="photo for Product" class="w-100 rounded-5  object-fit-cover">
    <div onclick="DisplayCoctailRandomeDetails(${i})" class="black-layer">Open</div>
    </div>
    </div>
    
    `;
  }
  
  rowData.innerHTML = cartona;
  let TheElement = document.getElementById('contact') as HTMLDivElement;
  let offsetElementTop = TheElement.offsetTop;
  window.scrollTo({top:offsetElementTop-40,behavior:'smooth'});
};

// Function Display Details Coctail 4

function DisplayCoctailRandomeDetails(III:number):void{
  contact.classList.add('pt-5','mt-5');
  container.classList.add('pt-5','mt-5');
  header.classList.add('d-none');
  let cartona:string = `
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
  window.scrollTo({top:0,behavior:'smooth'});
};


// -----------------------------------The End---------------------------------

// Function Show Circle Top
window.addEventListener('scroll',function(){
  if(this.scrollY >= 900)
  {
    Circle_Top.classList.remove('d-none');
  }
  else{
    Circle_Top.classList.add('d-none');

  }
});

Circle_Top.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
});






