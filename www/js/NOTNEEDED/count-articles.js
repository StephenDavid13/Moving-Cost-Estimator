$(document).on("pagecreate", "#aside_estimator", function() 
{
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


    
//$( function()
//{
//    window.f_set_checkbox_articles = function f_set_checkbox_articles(rooms_to_create) 
//    {
        console.log("done3");
        var  j = 0; 
//        for (j; j < rooms_to_create.length ; j++)
        for (j; j < array_list_of_chapters.length ; j++)
        {       
            var 
//                 tmp_chapter = rooms_to_create[j]
                 tmp_chapter = array_list_of_chapters[j]
                ,k_all_articles = 0
                ,number_articles = 0
            ;

 console.log("done2");
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
                var dropDown = document.getElementById(tmp);
                     console.log(dropDown);

                for (i; i<=20; i++) 
                {
                    var listItem = document.createElement("option");
                    listItem.text = i;
                    listItem.value = i;

//                    dropDown.appendChild(listItem);
                    console.log("done");
                };
            }
         }
//    }/* function */
//});
    
    


    $(function()
    {
        window.f_checkbox_articles = function f_checkbox_articles(ckbx_id) 
        {
             $("#"+ckbx_id).on("change", function() 
             {
                 var id_name = ckbx_id.substring(9);
                 
                $("#popup-header").html(id_name);
                 
                if(document.getElementById(ckbx_id).checked) 
                {
                    console.log("#popup-num-rooms-"+id_name);
                    $("#popup-num-rooms-"+id_name).popup("open");
                    $("#set-amt-"+id_name).on("click", function() 
                    {
                        var 
                             drp = document.getElementById("get-amt-"+id_name)
                            ,value = drp.options[ drp.options.selectedIndex ].value
                        ;  
                        
//                        arrRooms[id_name] = value;
                        
//                        localStorage.setItem('room', JSON.stringify(arrRooms));
                        
                        $("#amt-"+id_name).html(value);

                        $("#popup-num-rooms-"+id_name).popup("close");
                        
                    });
                }
            });
        }
    });
});