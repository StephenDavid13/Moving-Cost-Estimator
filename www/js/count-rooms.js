$(document).on("pagecreate", "#main", function() {
	var dropDown = document.getElementById("get-amt-kitchen")
	for (i=0; i<=20; i++) {
		var listItem = document.createElement("option");
		listItem.text = i;
		listItem.value = i;
		dropDown.appendChild(listItem);
	}
	$("#checkbox-kitchen").on("change", function() {
		var val = $(this).val();
		$("#popup-header-kitchen").html(val);
		if(document.getElementById('checkbox-kitchen').checked) {
			$("#popup-kitchen").popup("open");
			
			$("#set-amt-kitchen").on("click", function() {
				var drp = document.getElementById("get-amt-kitchen");
				var value = drp.options[ drp.options.selectedIndex ].value;
				$("#amt-kitchen").html(value);
				$("#popup-kitchen").popup("close");
			});
		}
	});
});