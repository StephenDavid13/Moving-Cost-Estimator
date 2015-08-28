


var array_list_of_chapters = [
								"kitchen",
								"dining_room", 
								"lounge", 
								"hall", 
								"laundry",
								"bedroom",
								"garage_outside",
								"sundries"
							 ];

var obj_chapter_articles =  {
								kitchen: [                                     
											 "fridge_freezer_large", 
											 "fridge_freezer_small",
											 "fridge_double_door",
											 "fridge_large",
											 "fridge_small",
											 "fridge_bar",
											 "freezer",
											 "freezer_chest",
											 "dishwasher",
											 "microwave",
											 "table_large",
											 "table_small",
											 "kitchen_chair",
											 "high_chair",
											 "bar_stool",
											 "cabinet",
											 "cabinet_crystal",
											 "cabinet_china_large",
											 "cabinet_china_small",
											 "cabinet_dresser",
											 "cupboard",
											 "tea_chest",
											 "tea_chest_half",
											 "picture_large",
											 "picture_small",
											 "tidy_rack",
											 "vegie_rack",
											 "box_large_tea_chest_size",
											 "box_small_book_wine_size"
										 ], 


								dining_room: [
											  "bookcase_large",
											  "bookcase_small",
											  "cabinet",
											  "dining_Table"
										 ],
								lounge: [
											 "armchair", 
											 "bar", 
											 "bean_bag_small", 
											 "billard_table"
										],
								 hall: [
											"chair",
											"coat_stand",
											"dropside",
											"grandfather_clock"
									   ],
								laundry: [
											"broom",
											"closet",
											"clothes_dryer",
											"ironing_board"
										 ],
								bedroom: [
											"double_bed_matress",
											"matress_single",
											"king_bed",
											"small_bed"
										 ],
								garage_outside: 
										[
											"bbq",
											"adults_bike",
											"childs_bike",
											"chilly_bin"
										 ],
								sundries: [
											"bean_bag_large",
											"bench",
											"camp",
											"computer"
										 ]
							};		 

var 
     list_of_chapters = array_list_of_chapters
    ,chapter_articles = obj_chapter_articles
    ,rooms = 0
;



            
	


var arrRooms1 = JSON.parse(localStorage.getItem('room'));

console.log(arrRooms1);

/*run thru all chapters*/
for (i_rooms = 0; i_rooms < array_list_of_chapters.length; i_rooms++) 
{
    var number_of_rooms = arrRooms1[array_list_of_chapters[i_rooms]];
    var crnt_room = array_list_of_chapters[i_rooms];
        
    if(number_of_rooms)
   {
		var j_room_number = 0;

        for(j_room_number; j_room_number < number_of_rooms; j_room_number++) 
        {
            var m_room_number = + j_room_number+1;
            var newPage = $("<div data-role=page data-url=room-" + crnt_room + "-" + j_room_number + "><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-" + crnt_room + "-" + j_room_number + "></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-" + crnt_room + "-" + j_room_number + "></span></div></div>" +
				"<div data-role=footer data-position=fixed><button name=toNext id=toNext class=button-next>NEXT</button></div></div>");
			newPage.appendTo('body');
            
			$("#sub_header_title-" + crnt_room + "-" + j_room_number).html(crnt_room + " " + j_room_number);
			var 
                 k_all_articles = 0
                ,tmp_amt = ""
                ,tmp_nav_chapter ="<form class='mini'>"
                ,tmp_popup_win = ""
            ;
            
            for (k_all_articles=0 ; k_all_articles < chapter_articles[crnt_room].length ; k_all_articles++) 
            {  
                var tmp_article  = chapter_articles[crnt_room][k_all_articles];
             
                tmp_nav_chapter += "<input type='checkbox' name=checkbox_article onclick='f_checkbox_articles(this.id)' id='checkbox-"+tmp_article+"' value="+tmp_article+">";
			    tmp_nav_chapter += "<label for='checkbox-"+tmp_article+"'>"+tmp_article+"<span id='amt-"+tmp_article+"' style='float: right'>0</span></label>";
                
                
//                console.log("1 'checkbox-"+tmp_article+"'");
                
                tmp_popup_win += "<div data-role='popup' id='popup-num-rooms-"+tmp_article+"' style='max-width: 100%;'><div data-role='content'>";
            
                tmp_popup_win += "<h4 id='popup-header'></h4><form name= 'form_pop_"+tmp_article+"'>";
            
                tmp_popup_win += "<select name='get-amt-"+tmp_article+"' id='get-amt-"+tmp_article+"'></select></form>";
            
                tmp_popup_win += "<button type='submit' name='set-amt-"+tmp_article+"' id='set-amt-"+tmp_article+"' form='form_pop_"+tmp_article+"'>OK</button>";
            
                tmp_popup_win +="</div></div>";
                
                
                
                
                
                $("#popup_win-" + tmp_article ).html(tmp_popup_win);
                
            }
            

             
			tmp_nav_chapter += "</form>";
            
    		$("#all_chapter_articles-" + crnt_room + "-" + j_room_number).html(tmp_nav_chapter);
            
		
            
            		
		}
	}
}