const gallery=[
    {src:"pic1.jpg",
	 alt:"Image1"},
	{src:"pic2.jpg",
	 alt:"Image2"},
	{src:"pic3.jpg", 
	alt:"Image3"}];
function CtoF(temp){
let F=(temp*9/5)+32;
return F;
}
function greetingHandler(){
let currentHour=new Date().getHours();
let greeting   ;
if(currentHour<12){greeting="Good Morn!";}
 else if(currentHour<19){greeting="Good Afternoon!";}
 else if(currentHour<24){greeting="Good Even!";}
 else {greeting="Welcome!";}
const weatherCondition="Sunny";
const userLocation="India";
let temperature=0;
let celsiusText=`${greeting}the weatherCondition is ${weatherCondition} in ${userLocation} with a temperature of ${temperature.toFixed(2)}C outside.`;
let fahrenheitText=`${greeting}the weatherCondition is ${weatherCondition} in ${userLocation} with a temperature of ${CtoF(temperature).toFixed(2)}F outside.`;

document.querySelector("p#greet").innerHTML=greeting;
document.querySelector("p#weather").innerHTML=weatherCondition;
document.querySelector("p#loca").innerHTML=userLocation;
document.querySelector("p#temp").innerHTML=temperature;
document.querySelector("p#wea").innerHTML=celsiusText;
document.querySelector(".weather-group").addEventListener("click",function(e)
{
	if(e.target.id == "celsius"){
      document.querySelector("p#wea").innerHTML=celsiusText;
        }
    else if(e.target.id == "fahrenheit"){
	document.querySelector("p#wea").innerHTML=fahrenheitText;
}
});
}
function clockHandler(){
setInterval(function(){
let localTime=new Date();
document.querySelector("span[data-time=hours]").textContent= localTime.getHours().toString().padStart(2,"0");
document.querySelector("span[data-time=minutes]").textContent= localTime.getMinutes().toString().padStart(2,"0");
document.querySelector("span[data-time=seconds]").textContent= localTime.getSeconds().toString().padStart(2,"0");}
,1000);}

function galleryHandler(){
	let mainImage=document.querySelector("#gall>img");
let thumbnails=document.querySelector("#gall .thumbnails"); 
 mainImage.src=gallery[0].src;
 mainImage.alt=gallery[0].alt;
gallery.forEach(function(image,index){
let thumb=document.createElement("img");
thumb.src=image.src;
thumb.alt=image.alt;
thumb.dataset.arrayIndex=index;
thumb.dataset.selected=index === 0? true: false;
thumb.addEventListener("click",function(e)
{ let selectedIndex=e.target.dataset.arrayIndex;
  let selectedImage=gallery[selectedIndex];
  mainImage.src=selectedImage.src;
  mainImage.alt=selectedImage.alt;
  thumbnails.querySelectorAll("img").forEach(function(img){
	  img.dataset.selected=false;});
	  e.target.dataset.selected=true;})
thumbnails.appendChild(thumb);});
}
/*<div class="product-item">
<img src="./images/pic4.jpg" alt="Picture1">
<div class="product-details">
<h3 class="product-title">Astrofiction</h3>
<p class="product-author">John Doe</p>
<p class="price-title">Price</p>
<p class="product-price">$ 49.90</p>
</div>*/

const product=[
{title:"Astrofiction",
author:"John Doe",
price:49.9,
image:"./images/pic4.jpg"},
{title:"Space Odissey",
author:"Marie Anne",
price:35,
image:"./images/pic2.jpg"},
{title:"Doomed City",
author:"Jason Cobert",
price:12,
image:"./images/pic3.jpg"},


];
function populateProducts(productList)
{let prosec=document.querySelector(".products-area");
   prosec.textContent="";
	productList.forEach(function(product,index){
	let	productElm=document.createElement("div");
	productElm.classList.add("product-item");
	
	let proImage=document.createElement("img");
	proImage.src=product.image;
	proImage.alt="Image for"+product.title;
	let prodet=document.createElement("div");
	prodet.classList.add(".product-details");
	let productTitle=document.createElement("h3");
	productTitle.classList.add("product-title");
	productTitle.textContent=product.title;
	let productAuthor=document.createElement("p");
    productAuthor.classList.add("product-author");
	productAuthor.textContent=product.author;
	let priceTitle=document.createElement("p");
    priceTitle.classList.add("price-title");
	priceTitle.textContent="Price" ;
	prodet.append(priceTitle);
	let productPrice=document.createElement("p");
    productPrice.classList.add("product-price");
	productPrice.textContent="$"+product.price ;
	prodet.append(productPrice);
	prodet.append(priceTitle);
	prodet.append(productAuthor);
	prodet.append(productTitle);
	productElm.append(proImage); 
	productElm.append (prodet); 
	prosec.append(productElm);
	
	});	}
function productsHandler(){
	
	let freeProducts=product.filter(function(item){
		return !item.price || item.price<=0;
	});
	let paidProducts=product.filter(function(item){
		return item.price>0;
	});
	console.log("free:", freeProducts);
	console.log("paid:", paidProducts);
    populateProducts(product);
	
	//document.querySelector(".products-filter label[for=all] span.product-amount").textContent=product.length;  
	document.querySelector(".products-filter label[for=paid] span.product-amount").textContent=paidProducts.length;  
	//document.querySelector(".products-filter label[for=free] span.product-amount").textContent=freeProducts.length; 
let productsFilter=document.querySelector(".products-filter");
productsFilter.addEventListener("click",function(e){
	if(e.target.id=="all"){
	populateProducts(product);}
	else if(e.target.id=="paid"){
	populateProducts(paidProducts);}
	else if(e.target.id=="free"){
	populateProducts(freeProducts);}
	
});	
}
 function footerHandler(){
	try{ let currentYear=new Date().getFullYear();
	document.querySelector("footer").textContent=`${currentYear}-All Rights Reserved.`}
	 catch(err){console.log(err.message);}
 }
 
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();
navigator.geolocation.getCurrentPosition((position)=>{
	fetch("")
	.then(response=>response.json())
	.then(data=>console.log(data));
});
