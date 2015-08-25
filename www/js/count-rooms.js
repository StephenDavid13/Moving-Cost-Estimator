 $(document).on("pagecreate", "#main", function() 
{
    for (i ; i < list_of_chapters.length ; i++)
    {  
        var tmp_chapter = list_of_chapters[i];
        
        var dropDown = document.getElementById("get-amt-"+tmp_chapter);

        for (i=0; i<=20; i++) 
        {
            var listItem = document.createElement("option");
            listItem.text = i;
            listItem.value = i;
            dropDown.appendChild(listItem);
        };


        $("#checkbox-"+tmp_chapter).on("change", function() 
        {
            var val = $(this).val();
            $("#popup-header").html(val);
            if(document.getElementById("checkbox-"+tmp_chapter).checked) 
            {
                $("#popup-num-rooms").popup("open");
                $("#set-amt-"+tmp_chapter).on("click", function() 
                {
                    var drp = document.getElementById("get-amt-"+tmp_chapter);
                    var value = drp.options[ drp.options.selectedIndex ].value;
                    $("#amt-"+tmp_chapter).html(value);
                    $("#popup-num-rooms").popup("close");
                });
            }
        });
     }
 });
     
     
//	
//	$("#checkbox-dining").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-dining').checked) {
//			$("#popup-num-rooms").popup("open");
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-dining").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-lounge").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-lounge').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-lounge").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-hall").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-hall').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-hall").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-laundry").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-laundry').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-laundry").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-bedroom").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-bedroom').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-bedroom").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-garage").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-garage').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-garage").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//	});
//	
//	$("#checkbox-sundries").on("change", function() {
//		var val = $(this).val();
//		$("#popup-header").html(val);
//		if(document.getElementById('checkbox-sundries').checked) {
//			$("#popup-num-rooms").popup("open");
//			
//			$("#set-amt").on("click", function() {
//				var drp = document.getElementById("get-amt");
//				var value = drp.options[ drp.options.selectedIndex ].value;
//				$("#amt-sundries").html(value);
//				$("#popup-num-rooms").popup("close");
//			});
//		}
//  });
//	
//});