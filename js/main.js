// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });

    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });

    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }

    // show the big header image
    main.initImgs();
  },

  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

          // 2fc73a3a967e97599c9763d05e564189
	  // set an initial image
	  var imgInfo = main.getImgInfo();
	  var src = imgInfo.src;
	  var desc = imgInfo.desc;
  	  main.setImg(src, desc);

	  // For better UX, prefetch the next image so that it will already be loaded when we want to show it
  	  var getNextImg = function() {
	    var imgInfo = main.getImgInfo();
	    var src = imgInfo.src;
	    var desc = imgInfo.desc;

		var prefetchImg = new Image();
  		prefetchImg.src = src;
		// if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

  		setTimeout(function(){
                  var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
  		  $(".intro-header.big-img").prepend(img);
  		  setTimeout(function(){ img.css("opacity", "1"); }, 50);

		  // after the animation of fading in the new image is done, prefetch the next one
  		  //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		  setTimeout(function() {
		    main.setImg(src, desc);
			img.remove();
  			getNextImg();
		  }, 1000);
  		  //});
  		}, 6000);
  	  };

	  // If there are multiple images, cycle through them
	  if (main.numImgs > 1) {
  	    getNextImg();
	  }
    }
  },

  getImgInfo : function() {
  	var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
	var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

	return {
	  src : src,
	  desc : desc
	}
  },

  setImg : function(src, desc) {
	$(".intro-header.big-img").css("background-image", 'url(' + src + ')');
	if (typeof desc !== typeof undefined && desc !== false) {
	  $(".img-desc").text(desc).show();
	} else {
	  $(".img-desc").hide();
	}
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);

function togglePosts(category) {
  $("#" + category).toggle()
}

$( document ).ready(function() {

  // ---------------------------------
  //  "Subscribe to newsletter" logic
  // ---------------------------------

  if (localStorage.getItem('subscribed') !== 'true') {
    $("#subscribe-div").show();
  }

  if (localStorage.getItem('subscribe-newsletter-maximized') == undefined) {
    localStorage.setItem('subscribe-newsletter-maximized', true);
  }

  var setSubscribeNewsletter = function(maximized) {
    if(maximized) {
      $('.subscribe-newsletter').removeClass('minimized');
      $('.subscribe-newsletter .subscribe-toggle').text('⌄');
    }
    else {
      $('.subscribe-newsletter').addClass('minimized');
      $('.subscribe-newsletter .subscribe-toggle').text('⌃');
    }
    localStorage.setItem('subscribe-newsletter-maximized', maximized);
  };

  var toggleSubscribeNewsletter = function() {
    setSubscribeNewsletter(localStorage['subscribe-newsletter-maximized'] != 'true');
  };

  setSubscribeNewsletter(localStorage['subscribe-newsletter-maximized'] == 'true');

  $('.subscribe-newsletter .subscribe-toggle').click(function() {
    toggleSubscribeNewsletter();
  });

  $('#submit-newsletter').on('click', function(e) {
    $(this).prop('disabled', true);

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test($('#mce-EMAIL').val())) {
      $("#already-subscribed").hide();
      $('#terms-not-accepted').hide();
      $('#invalid-email-message').show();
      $(this).prop( 'disabled', false );
      return false;
    }

    if(!$('#mce-TERMS')[0].checked) {
      $("#already-subscribed").hide();
      $('#invalid-email-message').hide();
      $('#terms-not-accepted').show();
      $(this).prop( 'disabled', false );
      return false;
    }

    $.ajax({
      url: '//geartranslations.us10.list-manage.com/subscribe/post-json?u=5e0a31131f04ee72c5575a1ea&amp;id=f2ed9f5348&c=?',
      data: $('#subscribe-newsletter').serialize(),
      dataType: 'jsonp',
      jsonp: 'c'
    }).done(function(data){
      if (data.result == 'success') {
        localStorage.setItem('subscribed', true);
        $('#invalid-email-message').hide();
        $('#terms-not-accepted').hide();
        $('#already-subscribed').hide();
        $("#thank-you").show();
        setTimeout(function(){
          $("#subscribe-div").hide();
        }, 1000);
      }
      else {
        $('#invalid-email-message').hide();
        $('#terms-not-accepted').hide();
        $("#already-subscribed").show();
        $('#submit-newsletter').prop( 'disabled', false );
      }
    });

    e.preventDefault();
  });
});
