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


selectView();


function radioFunction(){
	for(var i =0; i<allLis.length; i++){
		// The all items radio button
		if(whichRadio[0].checked === true){	
			if (allLis[i].classList.contains("bestMatch")) {
				itemsToView[0].classList.remove("selected");
				itemsToView[1].classList.remove("selected");	
				bestMatch[i].classList.add("itemLis");
				countOfItems.textContent = itemLi.length +" из " + allLis.length;
			}
			// this statement is for first radio button, so when we click it,
			// it should show only first 12 items. like the first view icon
			if(allLis[i].className === "itemLis allLis"){
				allLis[i].classList.replace("itemLis", "notDisplayed");
			}
	
		}
		// The mayo radio button
		if(whichRadio[1].checked === true){
			allLis[i].classList.remove("itemLis");
			// Once the radios are selected then deselect the View Icons 
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Майонез") ) {	
				allLis[i].classList.add("mayo");
				// Count of items to dispay
				var mayoCount = document.querySelectorAll(".mayo");
				countOfItems.textContent = mayoCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[1].checked === false){
			allLis[i].classList.remove("mayo");		
		}
		// The Matzoon radio button
		if(whichRadio[2].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Мацони") ) {	
				allLis[i].classList.add("matzoon");
				// Count of items to dispay
				var matzoonCount = document.querySelectorAll(".matzoon");
				countOfItems.textContent = matzoonCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[2].checked === false){
			allLis[i].classList.remove("matzoon");		
		}
		// The milk radio button
		if(whichRadio[3].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Молоко") ) {	
				allLis[i].classList.add("milk");
				// Count of items to dispay
				var milkCount = document.querySelectorAll(".milk");
				countOfItems.textContent = milkCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[3].checked === false){
			allLis[i].classList.remove("milk");		
		}
		// The condensed milk radio button
		if(whichRadio[4].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Сгущён") ) {	
				allLis[i].classList.add("condensedMilk");
				// Count of items to dispay
				var conMilkCount = document.querySelectorAll(".condensedMilk");
				countOfItems.textContent = conMilkCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[4].checked === false){
			allLis[i].classList.remove("condensedMilk");		
		}
		// The cheese radio button
		if(whichRadio[5].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Сыр") ) {	
				allLis[i].classList.add("cheese");
				// Count of items to dispay
				var chzCount = document.querySelectorAll(".cheese");
				countOfItems.textContent = chzCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[5].checked === false){
			allLis[i].classList.remove("cheese");		
		}
		// The whip cream radio button
		if(whichRadio[6].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Сливки") ) {	
				allLis[i].classList.add("whipCream");
				// Count of items to dispay
				var whipCount = document.querySelectorAll(".whipCream");
				countOfItems.textContent = whipCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[6].checked === false){
			allLis[i].classList.remove("whipCream");		
		}
		// The butter radio button
		if(whichRadio[7].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Масло") ) {	
				allLis[i].classList.add("butter");
				// Count of items to dispay
				var butterCount = document.querySelectorAll(".butter");
				countOfItems.textContent = butterCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[7].checked === false){
			allLis[i].classList.remove("butter");		
		}
		// The butter radio button
		if(whichRadio[8].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Сметана") ) {	
				allLis[i].classList.add("sourCream");
				// Count of items to dispay
				var sourCount = document.querySelectorAll(".sourCream");
				countOfItems.textContent = sourCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[8].checked === false){
			allLis[i].classList.remove("sourCream");		
		}
		// The butter radio button
		if(whichRadio[9].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Творог") ) {	
				allLis[i].classList.add("tvorog");
				// Count of items to dispay
				var tvorogCount = document.querySelectorAll(".tvorog");
				countOfItems.textContent = tvorogCount.length+ " Результатов";
		 	}
		 }
		if(whichRadio[9].checked === false){
			allLis[i].classList.remove("tvorog");		
		}
	}		
}


function selectView(){
	for(var i=0; i<itemsToView.length; i++){
		itemsToView[i].addEventListener("click", function(){
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			this.classList.add("selected");
			// Loop through all <li>x
			for( var j=0; j<allLis.length; j++){
				// If the icon View 1 ix selected
				if(itemsToView[0].classList.contains("selected")){
					countOfItems.textContent = itemLi.length +" из " + allLis.length;
					// if these 2 "itemLis allLis" are presented in HTML then do:
					if(allLis[j].className !== "itemLis bestMatch allLis"){
						allLis[j].classList.remove("mayo");
						allLis[j].classList.remove("matzoon");
						allLis[j].classList.remove("milk");
						allLis[j].classList.remove("condensedMilk");
						allLis[j].classList.remove("cheese");
						allLis[j].classList.remove("whipCream");
						allLis[j].classList.remove("butter");
						allLis[j].classList.remove("sourCream");
						allLis[j].classList.remove("tvorog");
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
						console.log("diplay")
						allLis[j].classList.add("itemLis");
						allLis[j].classList.remove("mayo");
						allLis[j].classList.remove("matzoon");
						allLis[j].classList.remove("milk");
						allLis[j].classList.remove("condensedMilk");
						allLis[j].classList.remove("cheese");
						allLis[j].classList.remove("whipCream");
						allLis[j].classList.remove("butter");
						allLis[j].classList.remove("sourCream");
						allLis[j].classList.remove("tvorog");
						// Deselect all radioButtons
						for(var k = 0; k<whichRadio.length; k++){
							whichRadio[k].checked = false;
						}	
					}
				}	
			} 
		})
	}
}
