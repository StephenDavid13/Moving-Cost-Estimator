var arrRooms = [0, 0, 0, 0, 0, 0, 0, 0];

function onLoad() {
	arrRooms = localStorage.getItem("room-number"); 
}

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


							dining_room: [
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
								 Hall: [
											"Chair",
											"Coat stand",
											"Dropside",
											"Grandfather clock"
									   ],
								Laundry: [
											"Broom",
											"Closet",
											"Clothes dryer",
											"Ironing board"
										 ],
								Bedroom: [
											"Double Bed \& Matress",
											"Matress Single",
											"King Bed",
											"Small Bed"
										 ],
								Garage_and_outside: 
										[
											"BBQ",
											"Adults Bike",
											"Childs Bike",
											"Chilly Bin"
										 ],
								Sudries: [
											"Bean Bag Large",
											"Bench",
											"Camp",
											"Computer"
										 ]
							};		 

var list_of_chapters = array_list_of_chapters,chapter_articles = obj_chapter_articles; 
var arrRoom1 = localStorage.getItem("room-number")
if(arrRoom1[0]>0) {
	var newPage = $("<div data-role=page data-url=room-kitchen><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
		"<div data-role=content><div class=sub_header><h1 id = sub_header_title-kitchen></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-kitchen></span></div></div>" +
		"<div data-role=footer data-position=fixed><button name=toNext class=button-next>NEXT</button></div></div>");
	newPage.appendTo('body');
	$("#sub_header_title-kitchen").html(list_of_chapters[0]);
	var i = 0,tmp_amt = "", tmp_nav_chapter ="<form class='mini'>";
		for (i ; i < chapter_articles.kitchen.length ; i++)
		{  
			var tmp_chapter = chapter_articles.kitchen[i];
			tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
			tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
		}
	
	tmp_nav_chapter += "</form>";
	$("#all_chapter_articles-kitchen").html(tmp_nav_chapter);
}
var newPage1 = $("<div data-role=page data-url=room-dining><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
	"<div data-role=content><div class=sub_header><h1 id = sub_header_title> </h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles></span></div></div>" +
	"<div data-role=footer data-position=fixed><button name=toNext class=button-next>NEXT</button></div></div>");
newPage1.appendTo('body');
document.getElementById("sub_header_title").innerHTML = list_of_chapters[1];
var i = 0,tmp_amt = "",tmp_nav_chapter ="<form class='mini'>";
for (i ; i < chapter_articles.dining_room.length ; i++)
{  
	var tmp_chapter = chapter_articles.dining_room[i];
	tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
	tmp_nav_chapter += "<label for='checkbox-"+ tmp_chapter +"'> " + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "' style='float: right'>0</span></label>";
}
tmp_nav_chapter += "</form>";
$("#all_chapter_articles").html(tmp_nav_chapter);