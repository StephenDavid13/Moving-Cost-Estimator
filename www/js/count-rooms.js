 $(document).on("pagecreate", "#main", function() 
{
    var list_of_chapters = [
										"kitchen",
										"dining_room", 
										"lounge", 
										"hall", 
										"laundry",
										"bedroom",
										"garage_outside",
                                        "sundries"
                                     ]
    var  j = 0; 
    for (j; j < list_of_chapters.length ; j++)
    {       
        var tmp_chapter = list_of_chapters[j];
        var tmp="get-amt-"+tmp_chapter;
        
        var dropDown = document.getElementById(tmp);
             console.log(dropDown);
             console.log(tmp);
   
        
        var i=0;
        for (i; i<=20; i++) 
        {
            var listItem = document.createElement("option");
            listItem.text = i;
            listItem.value = i;
            
            dropDown.appendChild(listItem);
        };
     }

     
    $(function()
    {
        window.f_checkbox = function f_checkbox(ckbx_id) 
        {
             $("#"+ckbx_id).on("change", function() 
             {
                var id_name = $(this).val();
                 
                $("#popup-header").html(id_name);
                 
                if(document.getElementById(ckbx_id).checked) 
                {
                    $("#popup-num-rooms-"+id_name).popup("open");
                    $("#set-amt-"+id_name).on("click", function() 
                    {
                        var 
                             drp = document.getElementById("get-amt-"+id_name)
                            ,value = drp.options[ drp.options.selectedIndex ].value
                        ;  
                        
                        arrRooms[id_name] = value;
                        
                        localStorage.setItem('room', JSON.stringify(arrRooms));
                        
                        console.log(arrRooms);
                            
                        $("#amt-"+id_name).html(value);

                        $("#popup-num-rooms-"+id_name).popup("close");
                        
                    });
                }
            });
        }
    });
 });
 
