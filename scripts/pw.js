var hamburgerMenu = document.querySelector(".hamburgerContainer");
var menuBar = document.querySelector("#menuBar");
var menu = document.querySelector("#menu");
var category = document.querySelector(".category");
var theBody = document.querySelector(".theBody");
var toggleMenu = document.querySelector(".toggleMenu");
var innerMenu = document.querySelector(".innerMenu");
var varDropdownOnclick = document.querySelectorAll(".dropdownOnclick");
var varHar = document.querySelectorAll(".har");



togglePlusMinus();
hamburger();

function hamburger(){
	// this function is to cross the hamburger bars.
	hamburgerMenu.addEventListener("click", function(){
		this.classList.toggle("change");
		innerMenu.classList.toggle("responsive");
	});
}
// the plus extending sub menu
function togglePlusMinus(){
	for(var i =0; i<varDropdownOnclick.length; i++){
			varDropdownOnclick[0].onclick =function(){
				var varHamProductsDropDown = document.getElementById("hamProductsDropDown");
				varHamProductsDropDown.classList.toggle("classHamDropDown");
				varHar[0].classList.toggle("har");
			}
			varDropdownOnclick[1].onclick =function(){
				var varHamBavDropDown = document.getElementById("hamBavDropDown");
				varHamBavDropDown.classList.toggle("classHamDropDown");
				varHar[1].classList.toggle("har");	
			}
			varDropdownOnclick[2].onclick =function(){
				var varHamChoDropDown = document.getElementById("hamChoDropDown");
				varHamChoDropDown.classList.toggle("classHamDropDown");
				varHar[2].classList.toggle("har");				
			}
			varDropdownOnclick[3].onclick =function(){
				var varHamCigDropDown = document.getElementById("hamCigDropDown");
				varHamCigDropDown.classList.toggle("classHamDropDown");
				varHar[3].classList.toggle("har");				
			}
			varDropdownOnclick[4].onclick =function(){
				var varHamOtherdropDown = document.getElementById("hamOtherDropDown");
				varHamOtherdropDown.classList.toggle("classHamDropDown");
				varHar[4].classList.toggle("har");				
			}
	}
};


