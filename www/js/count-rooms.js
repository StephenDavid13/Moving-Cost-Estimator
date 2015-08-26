$(document).on("pagecreate", "#main", function() {
	var select_kitchen = $("<select name=get-amt-kitchen id=get-amt-kitchen></select>");
	var select_dining = $("<select name=get-amt-dining id=get-amt-dining></select>");
	var select_lounge = $("<select name=get-amt-lounge id=get-amt-lounge></select>");
	var select_hall = $("<select name=get-amt-hall id=get-amt-hall></select>");
	var select_laundry = $("<select name=get-amt-laundry id=get-amt-laundry></select>");
	var select_bedroom = $("<select name=get-amt-bedroom id=get-amt-bedroom></select>");
	var select_garage = $("<select name=get-amt-garage id=get-amt-garage></select>");
	var select_sundries = $("<select name=get-amt-sundries id=get-amt-sundries></select>");

	select_kitchen.appendTo('#popup_form');
	select_dining.appendTo('#popup_form');
	select_lounge.appendTo('#popup_form');
	select_hall.appendTo('#popup_form');
	select_laundry.appendTo('#popup_form');
	select_bedroom.appendTo('#popup_form');
	select_garage.appendTo('#popup_form');
	select_sundries.appendTo('#popup_form');
	
	$("#get-amt-kitchen").hide();
	$("#get-amt-dining").hide();
	$("#get-amt-lounge").hide();
	$("#get-amt-hall").hide();
	$("#get-amt-laundry").hide();
	$("#get-amt-bedroom").hide();
	$("#get-amt-garage").hide();
	$("#get-amt-sundries").hide();
	
	var dropDown_kitchen = document.getElementById("get-amt-kitchen");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_kitchen.appendChild(listItem);
	}
	
	var dropDown_dining = document.getElementById("get-amt-dining");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_dining.appendChild(listItem);
	}
	
	var dropDown_lounge = document.getElementById("get-amt-lounge");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_lounge.appendChild(listItem);
	}
	
	var dropDown_hall = document.getElementById("get-amt-hall");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_hall.appendChild(listItem);
	}
	
	var dropDown_laundry = document.getElementById("get-amt-laundry");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_laundry.appendChild(listItem);
	}
	
	var dropDown_bedroom = document.getElementById("get-amt-bedroom");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_bedroom.appendChild(listItem);
	}
	
	var dropDown_garage = document.getElementById("get-amt-garage");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_garage.appendChild(listItem);
	}
	
	var dropDown_sundries = document.getElementById("get-amt-sundries");
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown_sundries.appendChild(listItem);
	}
	
	$("#checkbox-kitchen").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-kitchen').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-kitchen").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-kitchen').checked) {
					var drp = document.getElementById("get-amt-kitchen");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-kitchen").html(value);
					arrRooms[0] = value;
					$("#get-amt-kitchen").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-kitchen").html(0);
			arrRooms[0] = unchecked;
		}
	});
	
	$("#checkbox-dining").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-dining').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-dining").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-dining').checked) {
					var drp = document.getElementById("get-amt-dining");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-dining").html(value);
					arrRooms[1] = value;
					$("#get-amt-dining").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-dining").html(0);
			arrRooms[1] = unchecked;
		}
	});

	$("#checkbox-lounge").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-lounge').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-lounge").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-lounge').checked) {
					var drp = document.getElementById("get-amt-lounge");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-lounge").html(value);
					arrRooms[2] = value;
					$("#get-amt-lounge").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-lounge").html(0);
			arrRooms[2] = unchecked;
		}
	});
	
	$("#checkbox-hall").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-hall').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-hall").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-hall').checked) {
					var drp = document.getElementById("get-amt-hall");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-hall").html(value);
					arrRooms[3] = value;
					$("#get-amt-hall").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-hall").html(0);
			arrRooms[3] = unchecked;
		}
	});
	
	$("#checkbox-laundry").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-laundry').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-laundry").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-laundry').checked) {
					var drp = document.getElementById("get-amt-laundry");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-laundry").html(value);
					arrRooms[4] = value;
					$("#get-amt-laundry").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-laundry").html(0);
			arrRooms[4] = unchecked;
		}
	});
	
	$("#checkbox-bedroom").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-bedroom').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-bedroom").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-bedroom').checked) {
					var drp = document.getElementById("get-amt-bedroom");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-bedroom").html(value);
					arrRooms[5] = value;
					$("#get-amt-bedroom").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-bedroom").html(0);
			arrRooms[5] = unchecked;
		}
	});
	
	$("#checkbox-garage").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-garage').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-garage").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-garage').checked) {
					var drp = document.getElementById("get-amt-garage");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-garage").html(value);
					arrRooms[6] = value;
					$("#get-amt-garage").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-garage").html(0);
			arrRooms[6] = unchecked;
		}
	});
	
	$("#checkbox-sundries").on("click", function() {
		var val = $(this).val();
		$("#popup-header").html(val);
		if(document.getElementById('checkbox-sundries').checked) {
			$("#popup-num-rooms").popup("open");
			$("#get-amt-sundries").show();
			$("#set-amt").on("click", function() {
				if(document.getElementById('checkbox-sundries').checked) {
					var drp = document.getElementById("get-amt-sundries");
					var value = drp.options[ drp.options.selectedIndex ].value;
					$("#amt-sundries").html(value);
					arrRooms[7] = value;
					$("#get-amt-sundries").hide();
					$("#popup-num-rooms").popup("close");
				}
			});
		}
		else {
			var unchecked = 0;
			$("#amt-sundries").html(0);
			arrRooms[7] = unchecked;
		}
	});
});