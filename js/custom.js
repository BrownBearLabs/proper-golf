jQuery(document).ready(function(){


// ------------------------------------------------------------------------------------------- //
// Superfish Drop-Down Menu //
// ------------------------------------------------------------------------------------------- //

		jQuery('#navigation .menu').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 300,
			autoArrows: false,
			dropShadows: false
		});


// ------------------------------------------------------------------------------------------- //
// Home Page Slider //
// ------------------------------------------------------------------------------------------- //

		jQuery('#home-slider').slides({
			preload: true,
			preloadImage: 'images/loading.gif',
			play: 4000,
			generatePagination: true,
			generateNextPrev: true,
			next: 'slider-next',
			prev: 'slider-prev',
			effect: 'fade',
			crossfade: true,
			autoHeight: true,
			bigTarget: false
		});
		
		
// ------------------------------------------------------------------------------------------- //
// Project Details Slider //
// ------------------------------------------------------------------------------------------- //

		jQuery('#project-slider').slides({
			preload: true,
			preloadImage: 'images/loading.gif',
			play: 4000,
			generatePagination: true,
			generateNextPrev: true,
			next: 'slider-next',
			prev: 'slider-prev',
			effect: 'fade',
			crossfade: true,
			autoHeight: true,
			bigTarget: true
		});
	
	
// ------------------------------------------------------------------------------------------- //
// Slider Navigation Hover Effect //
// ------------------------------------------------------------------------------------------- //

		var slider_nav = jQuery('.slider-next, .slider-prev');
		jQuery('.slider-container').hover(function(){
			jQuery(slider_nav).fadeIn(200);
			},function(){
			jQuery(slider_nav).fadeOut(400);
		});
	
	
// ------------------------------------------------------------------------------------------- //
// Recent Work / Partners / Clients Carousel //
// ------------------------------------------------------------------------------------------- //

		jQuery('#recent-work-carousel, #partners-carousel').jcarousel({
			wrap: 'circular',
			scroll: 1
		});
	
					
// ------------------------------------------------------------------------------------------- //
// Carousel / Post Navigation Hover Effect //
// ------------------------------------------------------------------------------------------- //

		var nav_hover = jQuery('.jcarousel-next-horizontal, .jcarousel-prev-horizontal, a.post-next, a.post-prev');
		jQuery(nav_hover).append('<span></span>');
		jQuery('.jcarousel-next-horizontal span, .jcarousel-prev-horizontal span, a.post-next span, a.post-prev span').hide();
		jQuery(nav_hover).hover(function() {
			jQuery(this).children('span').fadeIn(400);
		}, function() {
			jQuery(this).children('span').fadeOut(400);
		});


// ------------------------------------------------------------------------------------------- //
// HTML5 Placeholder //
// ------------------------------------------------------------------------------------------- //

		if(!Modernizr.input.placeholder){

			jQuery('[placeholder]').focus(function() {
			  var input = jQuery(this);
			  if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			  }
			}).blur(function() {
			  var input = jQuery(this);
			  if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			  }
			}).blur();
			jQuery('[placeholder]').parents('form').submit(function() {
			  jQuery(this).find('[placeholder]').each(function() {
				var input = jQuery(this);
				if (input.val() == input.attr('placeholder')) {
				  input.val('');
				}
			  })
			});
			
		}
	

// ------------------------------------------------------------------------------------------- //
// Animated Scroll To Top //
// ------------------------------------------------------------------------------------------- //

		// hide #scroll-top first
		jQuery("#scroll-top").hide();
		
		// fade in #scroll-top
		jQuery(function () {
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 150) {
					jQuery('#scroll-top').fadeIn();
				} else {
					jQuery('#scroll-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			jQuery('#scroll-top a').click(function () {
				jQuery('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
			
			jQuery('#scroll-top a').append('<span></span>');
			jQuery('#scroll-top a span').hide();
			jQuery('#scroll-top a').hover(function() {
				jQuery(this).children('span').fadeIn(400);
			}, function() {
				jQuery(this).children('span').fadeOut(400);
				return false;
			});
		});
		
		// Divider Top
		jQuery(".divider a.top").click(function() {
			jQuery('html, body').animate({scrollTop:0}, 'slow'); 
			return false;
		});


// ------------------------------------------------------------------------------------------- //
// Twitter Plugin Settings //
// ------------------------------------------------------------------------------------------- //

	var twitter_name = 'mojothemes';
	
	//Sidebar Twitter Count 3
	jQuery("#sidebar .twitter-wrap").tweet({
		username : twitter_name,
		count : 3,
		template : "{join}{text}{time}",
		loading_text: "Loading tweets..."
	}).bind("loaded",function(){jQuery(this).find("a").attr("target","_blank");});

	//Footer Twitter Count 1
	jQuery("#footer .twitter-wrap").tweet({
		username : twitter_name,
		count : 1,
		template : "{join}{text}{time}",
		loading_text: "Loading tweets..."
	}).bind("loaded",function(){jQuery(this).find("a").attr("target","_blank");});


// ------------------------------------------------------------------------------------------- //
// Flickr Plugin Settings //
// ------------------------------------------------------------------------------------------- //

		jQuery('.flickr-wrap').jflickrfeed({
			limit: 8,
			qstrings: {
				id: '35220169@N04'
				},
			itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
		});

	
// ------------------------------------------------------------------------------------------- //
// Google Map Plugin Settings //
// ------------------------------------------------------------------------------------------- //

		jQuery('.google-map').gMap({
				markers: [
					{
					address : 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia',
					html: '_address',
					title: "envato"
					}
				],
				address: 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia',
				zoom: 16,
				scrollwheel: false
			});


// ------------------------------------------------------------------------------------------- //
// Social Media Icons Hover Effect //
// ------------------------------------------------------------------------------------------- //

		jQuery('.social-wrap img, .team-member-social img').fadeTo(0, 1);
		jQuery('.social-wrap img, .team-member-social img').hover(function() {
			jQuery(this).stop().fadeTo(400, 0.5); 
		}, function() {
			jQuery(this).stop().fadeTo(400, 1); 

		});
	

// ------------------------------------------------------------------------------------------- //
// Portfolio Hover Effect //
// ------------------------------------------------------------------------------------------- //
 
		function portfolio_hover(){
			//Set the height according to the portfolio image
			height = jQuery('.portfolio-item .post-image img').height();
			
			jQuery('.portfolio-style-1 .portfolio-item .post-info').css('top',-height);
			jQuery('.portfolio-style-1 .portfolio-item').hover(function(){
				jQuery(".post-info", this).stop().animate({'top':'0px'},{queue:false,duration:300});
			}, function() {
				jQuery(".post-info", this).stop().animate({'top':-height},{queue:false,duration:800});
			});

			jQuery('.portfolio-item .portfolio-icons').css('bottom', '-45px');
			jQuery('.portfolio-item').hover(function(){
				jQuery(".portfolio-icons", this).stop().animate({'bottom':'5px'},{queue:false,duration:300});
			}, function() {
				jQuery(".portfolio-icons", this).stop().animate({'bottom':'-45px'},{queue:false,duration:300});
			});
			
			// For each image
			jQuery('.portfolio-item .post-image').each(function() {
				// If the image has a class of 'post-image' and the children element doesn't have a 'mask-overlay' class
				if(jQuery(this).attr('class') == 'post-image' && jQuery(this).children().attr('class') !== 'mask-overlay') {
					jQuery(this).css('cursor', 'default')
					jQuery(this).prepend('<span class="mask-overlay"></span>');
				}
			});
			
			jQuery('.portfolio-item').each(function(){
				jQuery(this).find('.mask-overlay').css('opacity','0');
				jQuery(this).hover(function(){
					jQuery(this).find('.mask-overlay').stop().animate({'opacity': 0.3});	
				}, function(){
					jQuery(this).find('.mask-overlay').stop().animate({'opacity': 0});
				});
			});	
			return false;
		}
		
		portfolio_hover();

// ------------------------------------------------------------------------------------------- //
// Image Hover Effect //
// ------------------------------------------------------------------------------------------- //

		var image_hover = jQuery('a.image-icon-zoom, a.image-icon-link, a.image-icon-play, a.image-no-link');
		jQuery(image_hover).each(function(){
			if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {} else {
				if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9) {
					jQuery(this).hover(function(){
						jQuery(this).find('.image-overlay').css("visibility", "visible");
					},function(){
						jQuery(this).find('.image-overlay').css("visibility", "hidden");
					}).children('img').before('<span class="mask-overlay"></span>').after('<span class="image-overlay"></span>');
				} else{
				jQuery(this).hover(function(){
						jQuery(this).find('.image-overlay').stop().animate({
							opacity: '1'
						},"fast");
					},function(){
						jQuery(this).find('.image-overlay').stop().animate({
							opacity: '0'
						},"fast");
					}).children('img').before('<span class="mask-overlay"></span>').after(jQuery('<span class="image-overlay"></span>').css({opacity: '0',visibility:'visible'}));
				}
				
				jQuery(this).find('.mask-overlay').css('opacity','0');
				jQuery(this).hover(function(){
					jQuery(this).find('.mask-overlay').stop().animate({'opacity': 0.3});	
				}, function(){
					jQuery(this).find('.mask-overlay').stop().animate({'opacity': 0});
				});
			}
		});
		jQuery('.image-no-link').click(function(){
			return false;
		});

	
// ------------------------------------------------------------------------------------------- //
// prettyPhoto Plugin Settings //
// ------------------------------------------------------------------------------------------- //

		function prettyPhoto(){
			if (jQuery('a.image-icon-zoom').attr('data-rel') == undefined || jQuery('a.image-icon-zoom').attr('data-rel') == '') {
				jQuery("a.image-icon-zoom").attr("data-rel","prettyPhoto");}
				
			if (jQuery('a.image-icon-play').attr('data-rel') == undefined || jQuery('a.image-icon-play').attr('data-rel') == '') {
				jQuery("a.image-icon-play").attr("data-rel","prettyPhoto");}
				
			jQuery(".portfolio-container > .portfolio-item .post-image span").children("a.image-hover").attr("data-rel","prettyPhoto[gal]");
			
			jQuery(".portfolio-container > .portfolio-item .post-image span").children("a.video-hover").attr("data-rel","prettyPhoto[gal]");
			
			jQuery(".portfolio-container > .portfolio-item .post-image span").children("a.link-hover").removeAttr("data-rel");
									
			jQuery("a.image-no-link").removeAttr("data-rel");
			
			jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
				animation_speed: 'fast', // fast/slow/normal 
				opacity: 0.70, // Value between 0 and 1 
				show_title: true, // true/false 
				allow_resize: true, // Resize the photos bigger than viewport. true/false 
				default_width: 500,
				default_height: 344,
				theme: 'pp_default', // light_rounded / dark_rounded / light_square / dark_square / facebook 
				overlay_gallery: false, // If set to true, a gallery will overlay the fullscreen image on mouse over 
				deeplinking: false, // Allow prettyPhoto to update the url to enable deeplinking. 
				social_tools: false
			})
			return false;
		}
		
		prettyPhoto();
		
	
// ------------------------------------------------------------------------------------------- //
// QuickSand plugin Settings //
// ------------------------------------------------------------------------------------------- //

		// Clone applications to get a second collection
		var $data = jQuery(".portfolio-container").clone();
		
		//NOTE: Only filter on the main portfolio page, not on the subcategory pages
		jQuery('.portfolio-filter a').click(function() {
			jQuery(".portfolio-filter a").removeClass("selected");	
			// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
			var filterClass=jQuery(this).attr('id');
			
			if (filterClass == 'all') {
				var $filteredData = $data.find('.portfolio-item');
			} else {
				var $filteredData = $data.find('.portfolio-item[data-type~=' + filterClass + ']');
			}
			jQuery(".portfolio-container").quicksand($filteredData, {
				duration: 800,
				easing: 'easeInOutQuad',
				adjustHeight: 'dynamic',
				enhancement: function() {
					portfolio_hover();
					prettyPhoto();
				}
			});		
			jQuery(this).addClass("selected"); 			
			return false;
		});

	
// ------------------------------------------------------------------------------------------- //
// HTML5 Grayscale Image Hover //
// ------------------------------------------------------------------------------------------- //
	
		// Grayscale w canvas method
		function grayscale(src){
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			var imgObj = new Image();
			imgObj.src = src;
			canvas.width = imgObj.width;
			canvas.height = imgObj.height; 
			ctx.drawImage(imgObj, 0, 0); 
			var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
			for(var y = 0; y < imgPixels.height; y++){
				for(var x = 0; x < imgPixels.width; x++){
					var i = (y * 4) * imgPixels.width + x * 4;
					var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
					imgPixels.data[i] = avg; 
					imgPixels.data[i + 1] = avg; 
					imgPixels.data[i + 2] = avg;
				}
			}
			ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
			return canvas.toDataURL();
		}
			
		// On window load. This waits until images have loaded which is essential
		jQuery(window).load(function(){
			
			// Fade in images so there isn't a color "pop" document load and then on window load
			jQuery(".partners-wrap img").fadeIn(300);
			
			// clone image
			jQuery('.partners-wrap img').each(function(){
				var el = jQuery(this);
				el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
					var el = jQuery(this);
					el.parent().css({"width":this.width,"height":this.height});
					el.dequeue();
				});
				this.src = grayscale(this.src);
			});
			
			// Fade image 
			jQuery('.partners-wrap img').mouseover(function(){
				jQuery(this).parent().find('img:first').stop().animate({opacity:1}, 200);
			})
			jQuery('.img_grayscale').mouseout(function(){
				jQuery(this).stop().animate({opacity:0}, 400);
			});		
		});
		
	
// ------------------------------------------------------------------------------------------- //
// Elements //
// ------------------------------------------------------------------------------------------- //

		// Toggles //
		//---------------------------------------------------------------- //
		var toggles = jQuery(".toggle-title");
		jQuery(".toggle-content").hide();
		toggles.toggle(
			function(){
				jQuery(this).addClass('toggle-active');
				jQuery(this).siblings('.toggle-content').slideDown("fast");
			},
			function(){
				jQuery(this).removeClass('toggle-active');
				jQuery(this).siblings('.toggle-content').slideUp("fast");
		});
		
		
		// Tabs //
		//---------------------------------------------------------------- //
		jQuery(".tabs-container").each(function($){
			var $history = jQuery(this).attr('data-history');
			if($history!=undefined && $history == 'true'){
				$history = true;
			}else {
				$history = false;
			}
			var $initialIndex = jQuery(this).attr('data-initialIndex');
			if($initialIndex==undefined){
				$initialIndex = 0;
			}
			jQuery("ul.tabs",this).tabs("div.tab-content > div", {tabs:'a', effect: 'fade', fadeOutSpeed: -200, history: $history, initialIndex: $initialIndex});
		});
		
		
		// Accordion //
		//---------------------------------------------------------------- //
		jQuery(".accordion").each(function(){
			var $initialIndex = jQuery(this).attr('data-initialIndex');
			if($initialIndex==undefined){
				$initialIndex = 0;
			}
			jQuery(this).tabs("div.accordion-content", {tabs: '.accordion-title', effect: 'slide',initialIndex: $initialIndex});
		});
	
	
// ------------------------------------------------------------------------------------------- //
// Contact Form //
// ------------------------------------------------------------------------------------------- //

		jQuery('form.contact-form').submit(function() {
			jQuery('form.contact-form .error').remove();
			var hasError = false;
			jQuery('.requiredField').each(function() {
				if(jQuery.trim(jQuery(this).val()) == '') {
					 var labelText = jQuery(this).prev('label').text();
					 jQuery(this).parent().append('<div class="error">Please enter your '+labelText+'</div>');
					 hasError = true;
				 } else if(jQuery(this).hasClass('email')) {
					 var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					 if(!emailReg.test(jQuery.trim(jQuery(this).val()))) {
					 var labelText = jQuery(this).prev('label').text();
					 jQuery(this).parent().append('<div class="error">You entered an invalid '+labelText+'</div>');
					 hasError = true;
					 }
				 }
			});
		if(!hasError) {
			jQuery('form.contact-form.submit').fadeOut('normal', function() {
				jQuery(this).parent().append('');
			});
		var formInput = jQuery(this).serialize();
			jQuery.ajax({
				type: "POST",
				url: "contact_form.php",
				data: formInput,
				success: function(result) {
					jQuery('.contact-form').slideUp('slow', function(){
						jQuery('div#result').html(result);
						jQuery('div#result').slideDown('slow');
					});
				}
			});
		}

		return false;

		});
		
				
});



