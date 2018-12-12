var itemLi = document.querySelectorAll(".itemLis");
var countOfItems = document.querySelector(".count");
var h1 = document.querySelector("h1");
var itemsToView = document.querySelectorAll(".fas");
// var itemLi = document.querySelectorAll(".notDisplayed");
var allLis = document.querySelectorAll(".allLis");
var li = document.querySelectorAll("li");
var sort = document.querySelector(".sortField");
var itemsUL = document.querySelector(".itemsUL");
var varProductTypeUl = document.querySelector(".productTypeUl"); 
var hamburgerMenu = document.querySelector(".hamburgerContainer"); 
var productTypeContainer = document.querySelector(".productTypeContainer"); 
var sortViewDiv = document.querySelector(".sortViewDiv");
var itemList = document.querySelector(".itemList"); 
var varMayo = document.querySelector(".mayoOnly");
var aName = document.querySelectorAll(".aName");
var varMatzoon = document.querySelector("#matzoonOnly");
var bestMatch = document.querySelectorAll(".bestMatch");
var varMilk = document.querySelector(".milkOnly"); 
var varProductTypeDiv = document.querySelector(".productTypeDiv");
var dontDisplay = document.querySelectorAll(".notDisplayed");
var whichRadio = document.getElementsByName("productTypes");
var price = document.querySelectorAll(".amt");

// Show the number of items in the page
countOfItems.textContent = itemLi.length +" из " + allLis.length;

hamburger();



// The low and high sort function. The call back of this fucntion is on HTML file onChange="lowHighPrice()" attribute
function lowHighPrice(){
	if(sort.value === "high"){
		itemsUL.classList.add("high");
		itemsUL.classList.remove("itemsUL");
	}
	else if (sort.value === "low"){
		itemsUL.classList.remove("high");
		itemsUL.classList.add("itemsUL");
	}
}


// this function is to cross the hamburger bars.
function hamburger(){
	hamburgerMenu.addEventListener("click", function(){
		this.classList.toggle("change");
		varProductTypeUl.classList.toggle("responsive");
		sortViewDiv.classList.toggle("viewtoTheRight");
		itemList.classList.toggle("toTheRight");
		
	});
};


// function sortList(a,b) {
//     return a + b;
// }
// function hig(){
// 	var arr = [];
// 	for(var i =0; i<price.length; i++){
// 		 arr.push(price[i].textContent);
	
		
// 	}
// var rep =[];
// for (var j=0;j<arr.length; j++){

// var remo = arr[j].replace(/[^0-9\.]+/g, "");
// var par = parseInt(remo, 10);
// rep.push(par);
// rep.sort(sortList);

// } 
// console.log(rep);
// }

// // latest version
// var price = document.querySelectorAll(".amt");
// function high(){
// 	var arr = [];
// 	for(var i =0; i<price.length; i++){
// 		 arr.push(price[i].textContent);
	
		
// 	}
// var rep =[];
// for (var j=0;j<arr.length; j++){

// var remo = arr[j].replace(/[^0-9\.]+/g, "");
// var par = parseInt(remo, 10);
// rep.push(par);
// rep.sort((a, b) => b - a);
// }
// console.log(rep)
// return rep;

// } 

// The final function for sort
	function compare(a,b){
		// Change the String Data of <li>s to Integer Data of <li>s
		// parseInt: is changing String to Integer.
		// a.childNodes[0].data: means taking the the data of <li>s.
		 parseInt(a.childNodes[0].data , 10);
     	 parseInt(b.childNodes[0].data , 10);
     	// Comparing <li>s  
    	return a - b;
    };
   
function sortList(){
	// chose the <ul>
	var ul=document.getElementsByClassName('itemsUL')[0];
	// Set to False is it won't clone new <ul>.
    var new_ul = ul.cloneNode(false);

	// Add all lis to an array
    var lis = [];
    // i = ul children. Meaning <li>s
    for(var i = ul.childNodes.length; i--;){
    	// if the <ul> children === "LI"s. do below: 
        if(ul.childNodes[i].nodeName === 'LI')
        	// push them to an empty Array(lis[])
            lis.push(ul.childNodes[i]);
    }
    //	if we click the Low to High option do below:
    if(sort.value === "low"){
    	// sort all <li>s with (compare) function. Defined line: 281
      	lis.sort(compare);
      	for(var i = 0; i < lis.length; i++)
      		// In new <ul> add lis array. 
        	new_ul.appendChild(lis[i]);
        	// Replace old ul with new ul. Syntax: replacedNode = parentNode.replaceChild(newChild, oldChild);
        	ul.parentNode.replaceChild(new_ul, ul);
      }
      // Same process but reverse. NOTE: THIS METHOD IS NOT COMPLETE NEED MOR RESEARCH 
      else if (sort.value === "high"){
      	lis.sort(compare);
      	for(var i = 0; i < lis.length; i++) 
        new_ul.appendChild(lis[i]);
        ul.parentNode.replaceChild(new_ul, ul);
    

  }
};



