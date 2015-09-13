/*
 * Count_rooms.js saves the clicked checkbox value and checked a checkbox in depending on the value
 * Is responsible for the main site checkboxes.
 */

// if the page is created
$(document).on("pagecreate", "#main", function() 
{
    $(function()
    {
        window.f_checkbox = function f_checkbox(ckbx_id) 
        {	 // if any changes occured
             $("#"+ckbx_id).on("change", function() 
             {  // get the value of this clicked checkbox
                var id_name = $(this).val();
                 // set a name into the popup window
                $("#popup-header").html(id_name);
                // if checkbox was checked
                if(document.getElementById(ckbx_id).checked) 
                {
                    // open a popup window
                    $("#popup-num-rooms-"+id_name).popup("open");
                    // if ok popup btn was clicked 
                    $("#set-amt-"+id_name).on("vclick", function() 
                    {
                        var 
                             drp = document.getElementById("get-amt-"+id_name)
                            ,value = drp.options[ drp.options.selectedIndex ].value
                        ;  
                        // save the value into the global variable 
                        gl_all_rooms_amt[id_name] = value;
                        
						localStorage.setItem('room', JSON.stringify(gl_all_rooms_amt));
                        // display the value on the site
                        $("#amt-"+id_name).html(value);
                        // close the pop up window
                        $("#popup-num-rooms-"+id_name).popup("close");
						// if the choosen value is 0 uncheck the checkbox
                        if(value === 0)
						{
							$("#label-"+id_name).addClass('ui-checkbox-off');
							$("#label-"+id_name).removeClass('ui-checkbox-on');
                            $("#amt-"+id_name).removeClass('hasAmount');
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
                    gl_all_rooms_amt[id_name] = 0;
                    localStorage.setItem('room', JSON.stringify(gl_all_rooms_amt));
                    $("#amt-"+id_name).html(0);
                    $("#label-"+id_name).addClass('ui-checkbox-off');
                    $("#label-"+id_name).removeClass('ui-checkbox-on');
                    $("#amt-"+id_name).removeClass('hasAmount');
                }
            });
        }
    });
 });
 
