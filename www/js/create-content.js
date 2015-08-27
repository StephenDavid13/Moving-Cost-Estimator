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

var list_of_chapters = array_list_of_chapters,chapter_articles = obj_chapter_articles;
var rooms = 0;
var arrRoom1 = localStorage.getItem("room-number")

for(rooms=0; rooms<15; rooms+=2) {
	console.log(rooms + ": " + arrRoom1[rooms]);
	if(arrRoom1[rooms]>0) {
		var i = 1;
		for(i=1; i<=arrRoom1[rooms]; i++) {
			var newPage = $("<div data-role=page data-url=room-" + rooms + "-" + i + "><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-" + rooms + "-" + i + "></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-" + rooms + "-" + i + "></span></div></div>" +
				"<div data-role=footer data-position=fixed><button name=toNext id=toNext class=button-next>NEXT</button></div></div>");
			newPage.appendTo('body');
			$("#sub_header_title-" + rooms + "-" + i).html(list_of_chapters[(rooms/2)] + " " + i);
			var j = 0,tmp_amt = "", tmp_nav_chapter ="<form class='mini'>";
			switch((rooms/2)) {
				case 0:
					for (j ; j < chapter_articles.kitchen.length ; j++) {  
						var tmp_chapter = chapter_articles.kitchen[j];
						tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ tmp_chapter +"' id='checkbox-"+tmp_chapter+"'  >";
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

var quotePage = $("<div data-role=page data-url=quote><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-quote>Get A Quote</h1></div><div class=types class=subheader-checklist><span id=quote_form></span></div></div>" +
				"<div data-role=footer data-position=fixed><button type=submit name=toNext id=toNext class=button-submit>SUBMIT QUOTE</button></div></div>");
quotePage.appendTo('body');

var tmp_quote ="<form class='mini quote'>";
tmp_quote += "<label for=find-us>How did you find us?</label><select name=find-us id=find-us><option value=Google>Google</option><option value=Customer>I'm a customer</option><option value=Friend>Referred by a Friend</option>";
tmp_quote += "<option value=Social-Media>Social Media, Facebook etc.</option><option value=TradeMe>TradeMe</option><option value=Yellow>Yellow, Finda, Localist</option><option value=Truck>Our Trucks and Vans</option>";
tmp_quote += "<option value=Others>Others</option></select><br />";

tmp_quote += "<label for=full-name>Full Name*</label><input type=text name=full-name><br />";
tmp_quote += "<label for=phone>Phone*</label><input type=number name=phone><br />";
tmp_quote += "<label for=email>Email*</label><input type=email name=email><br />";
tmp_quote += "<label for=confirm-email>Confirm Email*</label><input type=email name=confirm-email><br />";

tmp_quote += "<label for=region>Region</label><select name=region id=region><option value=Auckland>Auckland</option><option value=Northland>Northland</option><option value=Coromandel>Coromandel</option>";
tmp_quote += "<option value=Waikato>Waikato</option><option value=Bay-of-Plenty>Bay of Plenty</option><option value=East-Coast>East Coast</option><option value=Central-Plateau>Central Plateau</option>";
tmp_quote += "<option value=Manawatu-Wanganui>Manawatu - Wanganui</option><option value=Wairarapa>Wairarapa</option><option value=Wellington>Wellington</option> <option value=Nelson>Nelson</option>";
tmp_quote += "<option value=Marlborough>Marlborough</option><option value=West-Coast>West Coast</option><option value=Canterbury>Canterbury</option><option value=Otago>Otago</option><option value=Fiordland>Fiordland</option>";
tmp_quote += "<option value=Southland>Southland</option></select><br />";

tmp_quote += "<label for=pickup>Pickup Address*</label><input type=text name=pickup><br />";
tmp_quote += "<label for=delivery-name>Delivery Address*</label><input type=text name=delivery><br />";
tmp_quote += "<label for=notes>Notes</label><input type=text name=notes placeholder='Tell us about access, heavy items etc.'><br />";

$("#quote_form").html(tmp_quote);