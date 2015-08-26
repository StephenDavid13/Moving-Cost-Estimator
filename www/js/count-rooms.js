 $(document).on("pagecreate", "#main", function() 
{
    var list_of_chapters = [
										"kitchen",
										"dining-room", 
										"lounge", 
										"hall", 
										"laundry",
										"bedroom",
										"garage-outside"
                                     ]
    var  j = 0; 
    for (j; j < list_of_chapters.length ; j++)
    {       
        var tmp_chapter = list_of_chapters[j];
        var tmp="get-amt-"+tmp_chapter;
        
        var dropDown = document.getElementById(tmp);
        
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
                var val = $(this).val();
                $("#popup-header").html(val);
                 
                if(document.getElementById(ckbx_id).checked) 
                {
                    var id_name = ckbx_id.substring(9);

                    $("#popup-num-rooms-"+id_name).popup("open");
                    $("#set-amt-"+id_name).on("click", function() 
                    {
                        var drp = document.getElementById("get-amt-"+id_name);

                        var value = drp.options[ drp.options.selectedIndex ].value;

                        $("#amt-"+id_name).html(value);
                        //arrRooms[k] = value;

                        $("#popup-num-rooms-"+id_name).popup("close");
                    });
                }
            });
        }
    });
     
 });
 