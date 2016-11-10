var actress = ['Gene Tierney', 'Jean Harlow', 'Marlene Dietrich', 'Lucille Ball', 'Joanne Woodward', 'Hedy Lamarr', 'Vivien Leigh', 'Veronica Lake', 'Lauren Bacall'];


function renderButtons(){ 

	$('#newBtn').empty();

	for (var i = 0; i < actress.length; i++){

		var a = $('<button>') 
		a.addClass('ladies'); 
		a.addClass('newaction');
		a.addClass('btn');
		a.attr('data-name', actress[i]); 
		a.text(actress[i]); 
		$('#newBtn').append(a);
		}
	}
	
	

	 $('#newBtn').on('click', function() {
	 	$("#gifs").empty();

        var p = $(this).data('actress'); 
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + actress + "&api_key=dc6zaTOxFJmzC&limit=5";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="actress">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var actressPic = $('<img>');
                    actressPic.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p)
                    gifDiv.append(actressPic)

                    $('#gifs').prepend(gifDiv);
                }
            });
    });


       $('#newBtn').on('click', function(){
            var old = $('#box').val().trim();
            topics.push(old);
            renderButtons();
                return false;
    })
 renderButtons();