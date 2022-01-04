function display(){
     
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src="https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg";
    let price = document.createElement("p");
    price.textContent = Math.floor(Math.random() * 300);
    let btn = document.createElement("button");
    btn.textContent = "proceed for payment";
    btn.addEventListener("click",pay);
    function pay(){
        window.location.href="checkout.html"
    }
    div.append(image,price,btn);
    document.querySelector("#show").append(div);
}
display();