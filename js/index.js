$(window).scroll(function() {
      var scroll = $(window).scrollTop();
      //>=, not <=


        if (scroll >= 100) {
          //clearHeader, not clearheader - caps H
          $(".navbar").addClass("bg-light");
          $("ul").css({
            'height': 75,
            'padding-top': 6
          });
          $("a").css("color", 'black');
          $(".brand").css("display", 'block');
          $('.nav-link').css({
            'color': 'black'
          });
          $('li').removeClass("hov");
          $('li').addClass("hov2");
          $('nav').addClass("shadow");
        } else {
          $(".navbar").removeClass("bg-light");
          $("ul").css('height', 200);
          $("ul").css('padding-top', 80);
          $("a").css("color", 'white');
          $(".brand").css("display", 'none');
          $('li').removeClass("hov2");
          $('li').addClass("hov");
          $('nav').removeClass("shadow");

        }

      if ($(window).width() < 992) {
        $("ul").css({
          'height': 350,
          'padding-top': 0
        });
        $(".navbar").addClass("bg-light");
        $("a").css("color", 'black');
      }
      
      }); $(document).ready(function() {
      $('section[data-type="parallax"]').each(function() {
        var $bgobj = $(this);
        $(window).scroll(function() {
          var yPos = $(window).scrollTop();
          $bgobj.css('background-position', '0 -' + (yPos * 0.2) + 'px');
        });
      });
    });

    $('#myList a').on('click', function(e) {
      e.preventDefault()
      $(this).tab('show')
    })


    $(document).ready(function() {
      $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 80
          }, 800, function() {
            window.location.hash = hash - 300;
          });
        }
      });
    });

    $(document).ready(function() {
      $(".up").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function() {
            window.location.hash = hash;
          });
        }
      });
    });
