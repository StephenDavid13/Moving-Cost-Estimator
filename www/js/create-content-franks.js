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

var 
     list_of_chapters = array_list_of_chapters
    ,chapter_articles = obj_chapter_articles
    ,rooms = 0
;


var arrRooms1 = JSON.parse(localStorage.getItem('room'));

console.log(arrRooms1);

for (i_rooms = 0; i_rooms < array_list_of_chapters.length; i_rooms++) 
{
    var number_of_rooms : arrRooms1[array_list_of_chapters[i_rooms]];
    var crnt_chapter = array_list_of_chapters[i_rooms];
        
   if(arrRooms1[array_list_of_chapters[i_rooms]])
   {
		var j_room_number = 0;

        for(j_room_number; j_room_number < number_of_rooms; j_room_number++) 
        {
            
            var newPage = $("<div data-role=page data-url=room-" + curnt_chapter + "-" + j_room_number + "><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-" + curnt_chapter + "-" + j_room_number + "></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-" + curnt_chapter + "-" + j_room_number + "></span></div></div>" +
				"<div data-role=footer data-position=fixed><button name=toNext id=toNext class=button-next>NEXT</button></div></div>");
			newPage.appendTo('body');
            
            
			$("#sub_header_title-" + curnt_chapter + "-" + j_room_number).html(curnt_chapter + " " + j_room_number);
			var 
                 k_all_articles = 0
                ,tmp_amt = ""
                ,tmp_nav_chapter ="<form class='mini'>"
            ;
            
            for (k_all_articles ; j_all_articles < chapter_articles[curnt_chapter].length ; k_all_articles++) 
            {  
                var tmp_chapter = chapter_articles[curnt_chapter][k_all_articles];
                tmp_nav_chapter += "<input type='checkbox' name='checkbox-"+ curnt_chapter +"' id='checkbox-"+curnt_chapter+"'  >";
                tmp_nav_chapter += "<label for='checkbox-"+ curnt_chapter +"'> " + curnt_chapter +  "<span id='amt-"+ curnt_chapter + "' style='float: right'>0</span></label>";
            }
             
			tmp_nav_chapter += "</form>";
			$("#all_chapter_articles-" + curnt_chapter + "-" + j_room_number).html(tmp_nav_chapter);
		}
	}
}