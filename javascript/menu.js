let url = "https://www.themealdb.com/api/json/v1/1/random.php";
async function makerequest() {
  let res = await fetch(url);
  let response = await res.json();
  console.log(response);
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src =
    "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg";
  let price = document.createElement("p");
  price.textContent = Math.floor(Math.random() * 300);
  let btn = document.createElement("button");
  btn.textContent = "add to cart";
  btn.addEventListener("click", total);
  let count = 0;
  function total() {
    count++;
    document.querySelector("#item").innerHTML = count;
  }
  let b=document.createElement("button");
  b.textContent="Go to cart";
  b.addEventListener("click", car);
  function car() {
    window.location.href = "cart.html";
  }
  div.append(img, price, btn,b);
  document.querySelector("#prod").append(div);
}
makerequest();
function cart() {
  window.location.href = "cart.html";
}