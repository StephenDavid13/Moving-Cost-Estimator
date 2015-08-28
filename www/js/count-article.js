$(document).on("pagecreate", "#main", function() 
{
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

//    var  j_number_articles = $.map(obj_chapter_articles, function(n, i) { return i; }).length;

    
    var  
         j_rooms = 0 
        ,my_articles = []
        ,number_of_articles
        ,number_of_rooms
    ;
 
    for (var room in obj_chapter_articles) 
    {
        my_articles.push(room);
    }
    
    number_of_rooms = my_articles.length;
    
//    console.log(number_of_rooms);
    for (j_rooms; j_rooms <  number_of_rooms; j_rooms++)
    {   
        
//                  console.log(j_rooms);
                
        var 
             crnt_room = my_articles[j_rooms]
            ,i_articles = 0
        ;
        
        number_of_articles = obj_chapter_articles[crnt_room].length;
        
        for (i_articles; i_articles <  number_of_articles ; i_articles++)
        {       
            var 
                 tmp_article = chapter_articles[crnt_room][i_articles]
                ,tmp = "get-amt-"+tmp_article
                ,dropDown = document.getElementById("get-amt-"+tmp_article)
                ,i_item = 0
            ;
            
//            console.log(tmp + " : " + dropDown);
            
            for (i_item; i_item <= 20; i_item++) 
            {
                var 
                    listItem = document.createElement("option")
                ;

                listItem.text = i_item;
                listItem.value = i_item;
                dropDown.appendChild(listItem);
            }
        }
    }


//        var tmp_chapter = list_of_chapters[j];
//        var tmp="get-amt-"+tmp_chapter;
//        
//        var dropDown = document.getElementById(tmp);
        


     
    $(function()
    {
            console.log(ckbx_id);
        window.f_checkbox_articles = function f_checkbox_articles(ckbx_id) 
        {
            
             $("#"+ckbx_id).on("change", function() 
             {
                var val = $(this).val();
                $("#popup-header").html(val);
                 
                if(document.getElementById(ckbx_id).checked) 
                {
                    var id_name = ckbx_id.substring(9);

                    $("#popup-num-rooms-"+id_name).popup("open");
                    $("#set-amt-"+id_name).on("click", function() 
                    {
                        var 
                             drp = document.getElementById("get-amt-"+id_name)
                            ,value = drp.options[ drp.options.selectedIndex ].value
                        ;  
                        
                        arrRooms[id_name] = value;
                        
                        localStorage.setItem('room', JSON.stringify(arrRooms));
                        
                        $("#amt-"+id_name).html(value);

                        $("#popup-num-rooms-"+id_name).popup("close");
                        
                    });
                }
            });
        }
    });
});

