<script type="text/javascript">
	$("#checkbox-kitchen").click(function() {
		if ($(this).is(':checked')) {
			var htmlStr =
				'<h1> HELLO </h1>';
				
			$.fancybox(htmlStr, {
				'width': 950,
				'height': 1100,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'hideOnContentClick': false
			});
		}
	});
	

	function count-kitchen(){
    
	}
</script>