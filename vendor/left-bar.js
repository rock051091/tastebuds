		$(document).ready(function(){	

			var $Breakfast_top = $('#Breakfast').offset().top;
			var $lunchDinner_top = $('#lunchDinner').offset().top;
			var $Desserts_top = $('#Desserts').offset().top;
			var $Drinks_top = $('#Drinks').offset().top;
			var $Sides_top = $('#Sides').offset().top;
			
			$('.bgh_item').css({'opacity': '0'});
		
			function leftBarShow(num){
				
				for (var i = 1; i <= 5 ; i++){
					$('.left-bar li').children('a').css({'background-color': '#fff'});
			    	$('.left-bar li').children('span').css({'opacity': '0', 'transform': 'translateX(0)'});
				}

				$('.left-bar li:nth-child(' + num + ') span').css({'opacity': '1', 'transform': 'translateX(120%)'});
				$('.left-bar li:nth-child(' + num + ') a').css({'background-color': '#1e392a'});

			}

			$('.left-bar li').hover(
				function(){
					$(this).children('a').css({'background-color': '#1e392a'});
			    	$(this).children('span').css({'opacity': '1', 'transform': 'translateX(120%)'});
			  	}, function(){

			  		$(this).children('a').css({'background-color': '#fff'});
			    	$(this).children('span').css({'opacity': '0', 'transform': 'translateX(-200%)'});
			  	}
			);

			function menuwheel(){
				var $window_top = $(window).scrollTop(); //取得視窗位置	s

				if($window_top >= $Sides_top - 200){

					leftBarShow(5);
					
					$('#Sides .bgh_item').animate({'opacity': '1'}, 700);

				}else if($window_top >= $Drinks_top - 200){

					leftBarShow(4);

					$('#Drinks .bgh_item').animate({'opacity': '1'}, 700);

				}else if($window_top >= $Desserts_top - 200){

					leftBarShow(3);

					$('#Desserts .bgh_item').animate({'opacity': '1'}, 700);
	
				}else if($window_top >= $lunchDinner_top - 200){

					leftBarShow(2);

					$('#lunchDinner .bgh_item').animate({'opacity': '1'}, 700);

				}else if($window_top >= $Breakfast_top - 200){

					leftBarShow(1);

					$('#Breakfast .bgh_item').animate({'opacity': '1'}, 700);

				}
			}

			menuwheel();
				
			$( window ).scroll(function() { //視窗滾動時

				menuwheel();

			});

		});