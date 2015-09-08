 $(document).on("pagecreate", "#main", function() 
{
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
						if(value == 0)
						{
							$("#label-"+id_name).addClass('ui-checkbox-off');
							$("#label-"+id_name).removeClass('ui-checkbox-on');
							document.getElementById('checkbox-'+id_name).checked = false;
						}
                        else
						{
							$("#amt-"+id_name).addClass('hasAmount');
						}
                    });
                }
                else 
                {
                    arrRooms[id_name] = 0;
                    localStorage.setItem('room', JSON.stringify(arrRooms));
                    $("#amt-"+id_name).html(0);
                }
            });
        }
    });
 });
 