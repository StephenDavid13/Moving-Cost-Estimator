
        $(document).on('swipeleft', '.ui-page', function(event)
        {    
            if(event.handled !== true) 
            {
                var nextpage = $.mobile.activePage.next('[data-role="page"]');
                if (nextpage.length > 0) 
                {
                    $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
                    document.getElementById("chapter").innerHTML = list_of_chapterschapters[i_loc];
                    document.getElementById("sub_header_title").innerHTML = "Rooms you want to move: " + list_of_chapterschapters[i_loc];
                    i_loc += 1;
                    
                    var text = '<ol>';
                    var i = 0;
                    for (i ; i < chapter_articles.kitchen.length ; i++)
                    {
                        text = text + "<li class= 'file'>" + chapter_articles.kitchen[i] + "</li>";
                    }
                    text = text +'</ol>';

                    document.getElementById('all_chapter_articles').innerHTML = text;
                }
                event.handled = true;
            }
            return false;         
        });

        $(document).on('swiperight', '.ui-page', function(event)
        {     
            if(event.handled !== true) 
            {  
                var prevpage = $(this).prev('[data-role="page"]');
                if (prevpage.length > 0) 
                {
                    i_loc -= 1;
                    $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
                    document.getElementById("chapter").innerHTML = list_of_chapterschapters[i_loc];
                    document.getElementById("sub_header_title").innerHTML = list_of_chapterschapters[i_loc];
                    
                    var text = '<ol>';
                    var i = 0;
                    for (i ; i < chapter_articles.kitchen.length ; i++)
                    {
                        text = text + "<li class= 'file'>" + chapter_articles.kitchen[i] + "</li>";
                    }
                    text = text +'</ol>';

                    document.getElementById('all_chapter_articles').innerHTML=text;
                }
                event.handled = true;
            }
            return false;            
        })
      