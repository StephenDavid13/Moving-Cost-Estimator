/* 
 * basic-nav.js is responsible for going to the next or previous page 
 * and is able to notice guester as swiping left and right. 
 */

$(document).on('swipeleft', '.ui-page', function(event){    
	if(event.handled !== true) {
		var nextpage = $.mobile.activePage.next('[data-role="page"]');
		if (nextpage.length > 0) {
			$.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
		}
		event.handled = true;
	}
	return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
	if(event.handled !== true) {  
		var prevpage = $(this).prev('[data-role="page"]');
		if (prevpage.length > 0) {
			$.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
		}
        else {
            window.location = "estimator.html";
        }
		event.handled = true;
	}
	return false;            
});

$(document).on('click', '#toNext', function(event){    
	if(event.handled !== true) {
		var nextpage = $.mobile.activePage.next('[data-role="page"]');
		if (nextpage.length > 0) {
			$.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
		}
		event.handled = true;
	}
	return false;         
});
