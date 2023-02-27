function $$(a){return document.querySelector(a);}

var itemCounter = $$("#itemCounter");
var minusBtn = $$("#minusBtn");
var plusBtn = $$("#plusBtn");

var keepInCart = $$("#keepInCart");
var deleteItem = $$("#deleteItem");

var productCard = $$("#productCard");

var qty = 1;

function addCounter(){
    qty++;
    itemCounter.innerHTML = qty;
}
plusBtn.addEventListener('click', addCounter);

function minusCounter(){
    qty--;
    itemCounter.innerHTML = qty;

    if(qty <1){
        minusBtn.style.display="none";
        itemCounter.style.display="none";
        plusBtn.style.display="none";

        deleteItem.style.display="block";
        keepInCart.style.display="block";

    }
}
minusBtn.addEventListener('click', minusCounter);

keepInCart.addEventListener('click', ()=>{
    qty = 1;
    itemCounter.innerHTML = qty;

    deleteItem.style.display="none";
    keepInCart.style.display="none";

    minusBtn.style.display="block";
    itemCounter.style.display="block";
    plusBtn.style.display="block";

});

deleteItem.addEventListener('click', () =>{
    productCard.innerHTML = "<span class='ml-2'>No items in cart</span>";
});