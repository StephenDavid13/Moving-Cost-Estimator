$(document).on("pagecreate", "#main", function() {	
	var dropDown = document.getElementById("get-amt");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown.appendChild(listItem);
	}
	
	$("#checkbox-kitchen").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-kitchen').checked) {
			$("#popup-num-rooms").popup("open");
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-kitchen").html(value);
				arrRooms[0] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-dining").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-dining').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-dining").html(value);
				arrRooms[1] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-lounge").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-lounge').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-lounge").html(value);
				arrRooms[2] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-hall").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-hall').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-hall").html(value);
				arrRooms[3] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-laundry").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-laundry').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-laundry").html(value);
				arrRooms[4] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-bedroom").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-bedroom').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-bedroom").html(value);
				arrRooms[5] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-garage").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-garage').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-garage").html(value);
				arrRooms[6] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
	
	$("#checkbox-sundries").on("change", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-sundries').checked) {
			$("#popup-num-rooms").popup("open");
			
			$("#set-amt").on("click", function() {
				var drp = document.getElementById("get-amt");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-sundries").html(value);
				arrRooms[7] = value;
				$("#popup-num-rooms").popup("close");
			});
		}
	});
});