 $(document).on("pagecreate", "#main", function() 
{
    for (var j_room = 0; j_room < gl_room_info.length ; j_room++)
    {       
        var 
             tmp_room_id = gl_room_info[j_room].room_id
            ,tmp="get-amt-"+tmp_room_id
            ,dropDown = document.getElementById(tmp)
        ;
        
        for (var i_ckbx = 0; i_ckbx <= 20 ; i_ckbx++) 
        {
            var listItem = document.createElement("option");
            listItem.text = i_ckbx;
            listItem.value = i_ckbx;
            
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
                        
                        $("#amt-"+id_name).html(value);

                        $("#popup-num-rooms-"+id_name).popup("close");
                        
                    });
                }
            });
        }
    });
 });
 
