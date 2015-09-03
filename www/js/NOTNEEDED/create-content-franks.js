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
											 "box_small_book_wine_size",
										 ], 


								dining_room: [
											  "bookcase_large",
											  "bookcase_small",
											  "cabinet",
											  "dining_table"
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
											"Small_bed"
										 ],
								garage_outside: 
										[
											"bbq",
											"adults_bike",
											"childs_bike",
											"chilly_bin"
										 ],
								sundries: [
											"bean_bag_Large",
											"bench",
											"camp",
											"computer"
										 ]
							};	


var 
     rooms = 0
    ,arrRooms1 = JSON.parse(localStorage.getItem('room'))
    ,number_of_total_rooms = array_list_of_chapters.length
;


/*run thru all chapters*/
for (i_rooms = 0; i_rooms < number_of_total_rooms ; i_rooms++) 
{
    var  
         crnt_chapter = array_list_of_chapters[i_rooms]
        ,i_number_of_rooms = arrRooms1[crnt_chapter]
    ;

    
   if(i_number_of_rooms)
   {
		var j_room_number = 1;

        for(j_room_number; j_room_number <= i_number_of_rooms; j_room_number++) 
        {
            var newPage = $(
                                "<div data-role=page data-url=room-" + crnt_chapter + "-" + j_room_number + ">\n"+
                                     "<div data-role=header data-theme=b data-position=fixed data-id=footer>\n"+
                                        "<p class=header-checklist>Volume calculator and checklist</p>\n"+
                                        "<p id=amount class=meter-cubic>0.00</p>\n"+
                                    "</div>\n"+
                                    "<div data-role=content>\n"+
                                         "<div class=sub_header>\n"+
                                            "<h1 id=sub_header_title></h1>\n"+
                                         "</div>\n"+
                                         "<div class=types class=subheader-checklist>\n"+
                                            "<form class=mini id=all_chapter_articles></form>\n"+
                                         "</div>\n"+
                                    "</div>\n"+
                                    "<div data-role=footer data-position=fixed>\n"+
                                        "<button name=toNext id=toNext class=button-next>NEXT</button>\n"+
                                    "</div>\n"+
                                "</div>\n"+
                                "<span id=popup_win></span>"
                            
                           );
            newPage.appendTo('body');
 console.log($("#sub_header_title").html(crnt_chapter + " " + j_room_number));
            $("#sub_header_title").html(crnt_chapter + " " + j_room_number);

            var 
                 k_all_articles = 0
                ,tmp_amt = ""
                ,tmp_popup_win = ""
                ,tmp_nav_chapter= ""
            ;


            for (k_all_articles ; k_all_articles < obj_chapter_articles[crnt_chapter].length ; k_all_articles++) 
            {  
                var tmp_chapter = obj_chapter_articles[crnt_chapter][k_all_articles];

                tmp_nav_chapter += " <input type='checkbox'  name='checkbox_"+ tmp_chapter +"' onclick='f_checkbox_articles(this.id)'\n"+
                                " id='checkbox-"+tmp_chapter+"' value="+tmp_chapter+">\n"+
                                " <label for='checkbox-"+ tmp_chapter +"'>" + tmp_chapter +  "<span id='amt-"+ tmp_chapter + "'\n"+ 
                                " style='float: right'>0</span></label>";


                tmp_popup_win += " <div data-role='popup' id='popup-num-rooms-"+tmp_chapter+"' style='max-width: 100%;'><div data-role='content'>\n"+
                                 " <h4 id='popup-header'></h4><form name= 'form_pop_"+tmp_chapter+"'>\n"+
                                 " <select name='get-amt-"+tmp_chapter+"' id='get-amt-"+tmp_chapter+"'></select></form>\n"+
                                 " <button type='submit' name='set-amt-"+tmp_chapter+"' id='set-amt-"+tmp_chapter+"'\n"+ 
                                 " form='form_pop_"+tmp_chapter+"'>OK</button> </div></div>";
            }

            $("#all_chapter_articles").html(tmp_nav_chapter);
            $("#popup_win").html(tmp_popup_win);
		}
	}
}









            
//            var newPage = $("<div data-role=page data-url=room-" + crnt_chapter + "-" + j_room_number + "><div data-role=header data-theme=b data-position=fixed data-id=footer><p class=header-checklist>Volume calculator and checklist</p><p id=amount class=meter-cubic>0.00</p></div>" +
//				"<div data-role=content><div class=sub_header><h1 id=sub_header_title-" + crnt_chapter + "-" + j_room_number + "></h1></div><div class=types class=subheader-checklist><span id=all_chapter_articles-" + crnt_chapter + "-" + j_room_number + "></span></div></div>" +
//				"<div data-role=footer data-position=fixed><button name=toNext id=toNext class=button-next>NEXT</button></div></div>");
//			newPage.appendTo('body');

var  j = 0; 
    for (j; j < array_list_of_chapters.length ; j++)
    {       
        var 
             tmp_chapter = array_list_of_chapters[j]
            ,k_all_articles = 0
            ,number_articles = 0
        ;
        
        
        for(var obj in obj_chapter_articles[tmp_chapter]) 
        {
            number_articles++;
        }
        

        for (k_all_articles ; k_all_articles < number_articles ; k_all_articles++) 
        { 
           var 
                 tmp_article=  obj_chapter_articles[tmp_chapter][k_all_articles]
                ,tmp="get-amt-"+tmp_article
                ,i=0
           ;
//            var dropDown = document.getElementById(tmp);
            
//            console.log($("#"+tmp).appendTo(listItem));
            for (i; i<=20; i++) 
            {
                var listItem = document.createElement("option");
                listItem.text = i;
                listItem.value = i;
                
//                $("#"+tmp).appendTo(listItem);
                //dropDown.appendChild(listItem);
            };
        }
     }


    $(function()
    {
        window.f_checkbox_articles = function f_checkbox_articles(ckbx_id) 
        {
             $("#"+ckbx_id).on("change", function() 
             {
                 var id_name = ckbx_id.substring(9);
                 
//                var id_name = $(this).val();
//                 console.log(id_name);
                $("#popup-header").html(id_name);
                 
                if(document.getElementById(ckbx_id).checked) 
                {
                
                    console.log("#popup-num-rooms-"+id_name);
//            console.log("#popup-num-rooms-"+ckbx_id);
                    
                    
                    $("#popup-num-rooms-"+id_name).popup("open");
                    $("#set-amt-"+id_name).on("click", function() 
                    {
                        var 
                             drp = document.getElementById("get-amt-"+id_name)
                            ,value = drp.options[ drp.options.selectedIndex ].value
                        ;  
                        
//                        arrRooms[id_name] = value;
                        
//                        localStorage.setItem('room', JSON.stringify(arrRooms));
                        
//                        console.log(arrRooms);
                            
                        $("#amt-"+id_name).html(value);

                        $("#popup-num-rooms-"+id_name).popup("close");
                        
                    });
                }
            });
        }
    });
