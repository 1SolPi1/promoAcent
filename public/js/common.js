$(document).ready(function() {
	
	//слайдер

	$('.list_category').slick({
		arrows: true,
		dots: false,
		slidesToShow: 6,
		variableWidth: false,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	}); 

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHM'});

	$(window).load(function () {
		$(function () {
			var elem_name = document.getElementsByClassName('.name_question');
			var len_name = elem_name.length;
			for (var i = 0; i < len_name; i++) {
				$clamp(elem_name[i], {clamp: 2});
			}
		});
	});
$(".text_question p").each(function(i) {
		var size = 190,
		newsContent= $(this),
		newsText = newsContent.text();
		if(newsText.length > size){
			newsContent.html(newsText.slice(0, size));
		}
	});

	$(".name_question_min").each(function(i) {
		var size = 100,
		newsContent= $(this),
		newsText = newsContent.text();
		if(newsText.length > size){
			newsContent.html(newsText.slice(0, size) + '<a href="#">читать полностью</a>');
		}
	});
	{
		if ($(window).width() < 480) { 
			$(".name_question_min").each(function(i) {
				var size = 50,
				newsContent= $(this),
				newsText = newsContent.text();
				if(newsText.length > size){
					newsContent.html(newsText.slice(0, size) + '<a href="#">читать полностью</a>');
				}
			});
		}
	}

	 // стайлер для select
	

	//Попап менеджер FancyBox
	$(".fancybox").fancybox();

});