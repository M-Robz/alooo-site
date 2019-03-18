/* ------------- Open and close navigation menu items ------------- */

// COMPATIBILITY: dummy onclick property of #pageContainer permits event delegation to non-interactive elements in Safari Mobile 7.0+ (https://developer.mozilla.org/en-US/docs/Web/Events/click)

var lastSubNav; // the most recently opened subNav menu

// open or close subNav menu when main navItem clicked
function toggleSubNav(menuID) {
	var newSubNav = document.getElementById(menuID);
	
	if (newSubNav.style.visibility == 'hidden') {
	// show newSubNav if hidden
	
		// hide lastSubNav if defined
		if (lastSubNav) lastSubNav.style.visibility = 'hidden';
		
		// make newSubNav visible
		newSubNav.style.visibility = 'visible';
		
		// add listener for click on pageContainer
		document.getElementById('pageContainer').addEventListener('click', menuClickOut);
		
	} else {
	// hide newSubNav if visible
		
		newSubNav.style.visibility = 'hidden';
		
	}
	
	lastSubNav = newSubNav;
}

// close subNav menu on mouse out
function closeSubNav(menuID) {
	document.getElementById(menuID).style.visibility = 'hidden';
}

// if document clicked outside main menu, close subNav and hide main menu in mobile version
function menuClickOut(event) {
	var mainNav = document.getElementsByTagName('NAV')[0];
	
	if (event.target != mainNav && event.target.parentNode.className != 'menuButton' && event.target.parentNode.parentNode.className != 'menuButton' && event.target.parentNode.className != 'navItem' && event.target.className != 'subNav') {
		
		// remove listener, hide lastSubNav if defined, and hide main menu in mobile version
		document.getElementById('pageContainer').removeEventListener('click', menuClickOut);
		if (lastSubNav) lastSubNav.style.visibility = 'hidden';
		mainNav.className = '';
	}
}

// show or hide main menu in mobile version
function toggleMainNavVis() {
	var mainNav = document.getElementsByTagName('NAV')[0];
	
	if (mainNav.className != 'visible') {
	//show menu if hidden and add listener
	
		mainNav.className = 'visible';
		document.getElementById('pageContainer').addEventListener('click', menuClickOut);
		
	} else {
	// hide menu and subNav if open, and remove listener
		
		mainNav.className = '';
		lastSubNav.style.visibility = 'hidden';
		document.getElementById('pageContainer').removeEventListener('click', menuClickOut);
		
	}
}
