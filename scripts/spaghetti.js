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
			if(aName[i].textContent.includes("спагетти") ) {	
				allLis[i].classList.add("spaghetti");
				// Count of items to dispay
				var varSpaghetti = document.querySelectorAll(".spaghetti");
				countOfItems.textContent = varSpaghetti.length+ " Результатов";
		 	}
		 }
		if(whichRadio[1].checked === false){
			allLis[i].classList.remove("spaghetti");		
		}
		// The Matzoon radio button
		if(whichRadio[2].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("спирали") ||
			   aName[i].textContent.includes("Макарон") || 
			   aName[i].textContent.includes("рожки") ) {	
				allLis[i].classList.add("macaroni");
			// Count of items to dispay
				var varMacaroni = document.querySelectorAll(".macaroni");
				countOfItems.textContent = varMacaroni.length+ " Результатов";
		 	}
		 }
		if(whichRadio[2].checked === false){
			allLis[i].classList.remove("macaroni");		
		}
		// The milk radio button
		if(whichRadio[3].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("лапша") ) {	
				allLis[i].classList.add("noodle");
				// Count of items to dispay
				var varNoodle = document.querySelectorAll(".noodle");
				countOfItems.textContent = varNoodle.length+ " Результатов";
		 	}
		 }
		if(whichRadio[3].checked === false){
			allLis[i].classList.remove("noodle");		
		}
		// The condensed milk radio button
		if(whichRadio[4].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("Роллтон") ||
				aName[i].textContent.includes("Галина") || 
				aName[i].textContent.includes("Биг") ||
				aName[i].textContent.includes("Доширак") ) {	
				allLis[i].classList.add("dasherak");
				// Count of items to dispay
				var varDasherak = document.querySelectorAll(".dasherak");
				countOfItems.textContent = varDasherak.length+ " Результатов";
		 	}
		 }
		if(whichRadio[4].checked === false){
			allLis[i].classList.remove("dasherak");		
		}
		// The cheese radio button
		if(whichRadio[5].checked === true){
			allLis[i].classList.remove("itemLis");
			itemsToView[0].classList.remove("selected");
			itemsToView[1].classList.remove("selected");
			if(aName[i].textContent.includes("вермишель") ) {	
				allLis[i].classList.add("vermicelli");
				// Count of items to dispay
				var varVermicelli = document.querySelectorAll(".vermicelli");
				countOfItems.textContent = varVermicelli.length+ " Результатов";
		 	}
		 }
		if(whichRadio[5].checked === false){
			allLis[i].classList.remove("vermicelli");		
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
					// Count of items presented in the page
					countOfItems.textContent = itemLi.length +" из " + allLis.length;
					// if these 2 "itemLis allLis" are presented in HTML then do:
					if(allLis[j].className !== "itemLis bestMatch allLis"){
						allLis[j].classList.remove("spaghetti");
						allLis[j].classList.remove("macaroni");
						allLis[j].classList.remove("noodle");
						allLis[j].classList.remove("dasherak");
						allLis[j].classList.remove("vermicelli");
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
					// Count of items presented in the page
					countOfItems.textContent = allLis.length +" из " + allLis.length;
					allLis[j].classList.replace("notDisplayed","itemLis");
					if(allLis[j].className == "itemLis" || "allLis" || "bestMatch"){
						console.log("diplay")
						allLis[j].classList.add("itemLis");
						allLis[j].classList.remove("spaghetti");
						allLis[j].classList.remove("macaroni");
						allLis[j].classList.remove("noodle");
						allLis[j].classList.remove("dasherak");
						allLis[j].classList.remove("vermicelli");
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