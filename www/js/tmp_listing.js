//IMPORTANT DO NOT DELETE. Code for room titles in listing area //
				for(var index_list = 0; index_list < gl_listing_text.length; index_list++) 
                {
                    var i = index_list +1;
                    
                    document.getElementById("listing").value +=  gl_listing_text[index_list].room_name_nbr + "\n"+ gl_listing_text[index_list].list + "\n";
                    
                    console.log(index_list + ":" +gl_listing_text[index_list].room_name_nbr + "\n"+ gl_listing_text[index_list].list + "\n");
                    
                    while((i < gl_listing_text.length) && (gl_listing_text[index_list].room_nbr == gl_listing_text[i].room_nbr))
                    {
                        document.getElementById("listing").value += gl_listing_text[i_item].list + "\n";
                        i++;
                    }
                    
                    if(i > index_list)
                    {
                        index_list = i-1;
                    }
                }
// IMPORTANT //   