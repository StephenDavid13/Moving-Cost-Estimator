var array_list_of_chapters = [
								"Kitchen",
								"Dining Room", 
								"Lounge", 
								"Hall", 
								"Laundry",
								"Bedroom",
								"Garage \& Outside",
								"Sundries"
							 ];

var obj_chapter_articles =  {
								kitchen: [                                     
											 "Fridge/freezer large", 
											 "Fridge/freezer small",
											 "Fridge Double Door",
											 "Fridge large",
											 "Fridge small",
											 "Fridge bar",
											 "Freezer",
											 "Freezer chest",
											 "Dishwasher",
											 "Microwave",
											 "Table large",
											 "Table small",
											 "Kitchen chair",
											 "High chair",
											 "Bar stool",
											 "Cabinet",
											 "Cabinet crystal",
											 "Cabinet china large",
											 "Cabinet china small",
											 "Cabinet dresser",
											 "Cupboard",
											 "Tea chest",
											 "Tea chest half",
											 "Picture large",
											 "Picture small",
											 "Tidy rack",
											 "Vegie rack",
											 "Box large (tea chest size)",
											 "Box small (book/wine size)",
										 ], 


								dining: [
											  "Bookcase large",
											  "Bookcase small",
											  "Cabinet",
											  "Dining Table"
										 ],
								lounge: [
											 "Armchair", 
											 "Bar", 
											 "Bean bag small", 
											 "Billard table"
										],
								 hall: [
											"Chair",
											"Coat stand",
											"Dropside",
											"Grandfather clock"
									   ],
								laundry: [
											"Broom",
											"Closet",
											"Clothes dryer",
											"Ironing board"
										 ],
								bedroom: [
											"Double Bed \& Matress",
											"Matress Single",
											"King Bed",
											"Small Bed"
										 ],
								garage: 
										[
											"BBQ",
											"Adults Bike",
											"Childs Bike",
											"Chilly Bin"
										 ],
								sundries: [
											"Bean Bag Large",
											"Bench",
											"Camp",
											"Computer"
										 ]
							};		 



function f_checkbox_articles(article_id)
{

    
}



var list_of_chapters = array_list_of_chapters,chapter_articles = obj_chapter_articles;
var rooms = 0;
var arrRoom1 = localStorage.getItem("room-number");
console.log(arrRoom1);
for(rooms=0; rooms<15; rooms+=2) {
	console.log(rooms + ": " + arrRoom1[rooms]);
	if(arrRoom1[rooms]>0) {
		var i = 1;
		for(i=1; i<=arrRoom1[rooms]; i++) {
			var newPage = $("<div data-role=page data-url=room-" + (rooms/2) + "-" + i + "><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-" + rooms + "-" + i + "></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-" + rooms + "-" + i + "></span></div></div>" +
				"<div data-role=footer data-position=fixed><button name=toNext id=toNext class=button-next>NEXT</button></div></div>");
			newPage.appendTo('body');
			$("#sub_header_title-" + rooms + "-" + i).html(list_of_chapters[(rooms/2)] + " " + i);
			var j = 0,tmp_amt = "", tmp_nav_chapter ="<form class='mini'>";
			switch((rooms/2)) {
				case 0:
					for (j ; j < chapter_articles.kitchen.length ; j++) {  
						var tmp_chapter = chapter_articles.kitchen[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' onclick='f_checkbox_articles(this.id)' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 1:
					for (j ; j < chapter_articles.dining.length ; j++) {  
						var tmp_chapter = chapter_articles.dining[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 2:
					for (j ; j < chapter_articles.lounge.length ; j++) {  
						var tmp_chapter = chapter_articles.lounge[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 3:
					for (j ; j < chapter_articles.hall.length ; j++) {  
						var tmp_chapter = chapter_articles.hall[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 4:
					for (j ; j < chapter_articles.laundry.length ; j++) {  
						var tmp_chapter = chapter_articles.laundry[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 5:
					for (j ; j < chapter_articles.bedroom.length ; j++) {  
						var tmp_chapter = chapter_articles.bedroom[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 6:
					for (j ; j < chapter_articles.garage.length ; j++) {  
						var tmp_chapter = chapter_articles.garage[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
				case 7:
					for (j ; j < chapter_articles.sundries.length ; j++) {  
						var tmp_chapter = chapter_articles.sundries[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
						tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
					}
					break;
			}
			
			tmp_nav_chapter += "</form>";
			$("#all_chapter_articles-" + rooms + "-" + i).html(tmp_nav_chapter);
		}
	}
}