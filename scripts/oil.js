var itemLi = document.querySelectorAll(".itemLis");
var countOfItems = document.querySelector(".count");
var h1 = document.querySelector("h1");
var allLis = document.querySelectorAll(".allLis");
var sort = document.querySelector(".sortField");
var itemsUL = document.querySelector(".itemsUL");
var itemsToView = document.querySelectorAll(".fas");
var whichRadio = document.getElementsByName("productTypes");
var bestMatch = document.querySelectorAll(".bestMatch");
var aName = document.querySelectorAll(".aName");
var hamburgerMenu = document.querySelector(".hamburgerContainer"); 
var varProductTypeUl = document.querySelector(".productTypeUl"); 
var sortViewDiv = document.querySelector(".sortViewDiv");
var itemList = document.querySelector(".itemList"); 


selectView();
hamburger();



countOfItems.textContent = itemLi.length +" из " + allLis.length;

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
};
function selectView(){
	for(var i=0; i<itemsToView.length; i++){
		itemsToView[i].addEventListener("click", function(){
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			this.classList.add("selected");
			// Loop through all <li>x
			for( var j=0; j<allLis.length; j++){
				// If the icon View 1 is selected
				if(itemsToView[0].classList.contains("selected")){
					countOfItems.textContent = itemLi.length +" из " + allLis.length;
					// if these 3 "itemLis allLis" are  NOT presented in HTML then do:
					if(allLis[j].className !== "itemLis bestMatch allLis"){
						allLis[j].classList.remove("bake");
						allLis[j].classList.remove("sun");
						allLis[j].classList.remove("corn");
						allLis[j].classList.remove("olive");
						allLis[j].classList.remove("spred");
						allLis[j].classList.remove("clarButter");
						allLis[j].classList.remove("refined");
						allLis[j].classList.remove("frie");
						// Deselect all the radioButtons
						for(var k = 0; k<whichRadio.length; k++){
							whichRadio[k].checked = false;
						}
						// Add class to BestMatch class. So it show 12 items
						for(var best = 0; best<bestMatch.length; best++){
							bestMatch[best].classList.add("itemLis");
						}
					}
					// if these 2 classes are presented in the page then do that. 
					// This is when all the items are presented in the page and we want to show only 12 of them.
					if(allLis[j].className === "itemLis allLis"){
						allLis[j].classList.replace("itemLis", "notDisplayed");
					}
				}
				if(itemsToView[1].classList.contains("selected")){
					countOfItems.textContent = allLis.length +" из " + allLis.length;
					allLis[j].classList.replace("notDisplayed","itemLis");
					if(allLis[j].className == "itemLis" || "allLis" || "bestMatch"){
						allLis[j].classList.add("itemLis");
						allLis[j].classList.remove("bake");
						allLis[j].classList.remove("sun");
						allLis[j].classList.remove("corn");
						allLis[j].classList.remove("olive");
						allLis[j].classList.remove("spred");
						allLis[j].classList.remove("clarButter");
						allLis[j].classList.remove("refined");
						allLis[j].classList.remove("frie");
						// Deselect all radioButtons
						for(var k = 0; k<whichRadio.length; k++){
							whichRadio[k].checked = false;
						}
					}
				}	
			} 
		})
	}
};
function radioFunction(){
	for(var i =0; i<allLis.length; i++){
		// The all items radio button
		if(whichRadio[0].checked === true){	
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if (allLis[i].classList.contains("bestMatch")) {	
				bestMatch[i].classList.add("itemLis");
				countOfItems.textContent = itemLi.length +" из " + allLis.length;

			}
			// this statement is for first radio button, so when we click it,
			// it should show only first 12 items. like the first view icon
			if(allLis[i].className === "itemLis allLis"){
				allLis[i].classList.replace("itemLis", "notDisplayed");
			}
		}
		// The Matzoon radio button
		if(whichRadio[1].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("вып") ) {	
				allLis[i].classList.add("bake");
				var varBake = document.querySelectorAll(".bake");
				countOfItems.textContent = varBake.length+ " Результатов";
		 	}
		 }
		if(whichRadio[1].checked === false){
			allLis[i].classList.remove("bake");		
		}
		// The milk radio button
		if(whichRadio[2].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Кукуруз") ) {	
				allLis[i].classList.add("corn");
				var varCorn = document.querySelectorAll(".corn");
				countOfItems.textContent = varCorn.length+ " Результатов";
		 	}
		 }
		if(whichRadio[2].checked === false){
			allLis[i].classList.remove("corn");		
		}
		// The condensed milk radio button
		if(whichRadio[3].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Оливковое") ) {	
				allLis[i].classList.add("olive");
				var varOlive = document.querySelectorAll(".olive");
				countOfItems.textContent = varOlive.length+ " Результатов";
		 	}
		 }
		if(whichRadio[3].checked === false){
			allLis[i].classList.remove("olive");		
		}
		// The mayo radio button
		if(whichRadio[4].checked === true){
			allLis[i].classList.remove("itemLis");
			// Once the radios are selected then deselect the View Icons 
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("подсол") ) {	
				allLis[i].classList.add("sun");
				var varsun = document.querySelectorAll(".sun");
				countOfItems.textContent = varsun.length+ " Результатов";
		 	}
		 }
		if(whichRadio[4].checked === false){
			allLis[i].classList.remove("sun");		
		}
		// The cheese radio button
		if(whichRadio[5].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Спред") ) {	
				allLis[i].classList.add("spred");
				var varSpred = document.querySelectorAll(".spred");
				countOfItems.textContent = varSpred.length+ " Результатов";
		 	}
		 }
		if(whichRadio[5].checked === false){
			allLis[i].classList.remove("spred");		
		}
		// The whip cream radio button
		if(whichRadio[6].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Топленое") ) {	
				allLis[i].classList.add("clarButter");
				var varClarButter = document.querySelectorAll(".clarButter");
				countOfItems.textContent = varClarButter.length+ " Результатов";
		 	}
		 }
		if(whichRadio[6].checked === false){
			allLis[i].classList.remove("clarButter");		
		}
		// The butter radio button
		if(whichRadio[7].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("раф") ) {	
				allLis[i].classList.add("refined");
				var varRefind = document.querySelectorAll(".refined");
				countOfItems.textContent = varRefind.length+ " Результатов";
		 	}
		 }
		if(whichRadio[7].checked === false){
			allLis[i].classList.remove("refined");		
		}
		// The butter radio button
		if(whichRadio[8].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Фритюрное") ) {	
				allLis[i].classList.add("frie");
				var varFrie = document.querySelectorAll(".frie");
				countOfItems.textContent = varFrie.length+ " Результатов";
		 	}
		 }
		if(whichRadio[8].checked === false){
			allLis[i].classList.remove("frie");		
		}
	}		
};
// this function is to cross the hamburger bars.
function hamburger(){
	hamburgerMenu.addEventListener("click", function(){
		this.classList.toggle("change");
		varProductTypeUl.classList.toggle("responsive");
		sortViewDiv.classList.toggle("toTheRight");
		itemList.classList.toggle("toTheRight");
		
	});
}
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