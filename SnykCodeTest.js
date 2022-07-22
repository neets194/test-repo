jQuery(document).ready(function() {
// Perform Glossary Popover Functionality
  jQuery(".main-content").on("click", ".glossary-term", function (e) {
    var $this = jQuery(this);
    e.preventDefault();

    var glossaryTerm = jQuery(this).attr('data-term');

    if (!$this.attr("data-content")) {
      console.log(ajaxurl);
      var response = jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        dataType: "json",
        data: {
          action: "return_glossary_term",
          term: glossaryTerm
        }
      });

      response.done(function(data, textStatus, jqXHR) {
          $this.attr("title", data.title);
          $this.attr("data-content", data.content.replace(/(<([^>]+)>)/ig,""));
          $this.popover();
          $this.popover('show');
      });

      response.fail(function(jqXHR, textStatus, error) {
        console.log("AJAX REQUEST FAILED");
      });
    }
  });

  // Image Maps
  jQuery(".imagehotspotter_spot").on('click touchend', function (e) {
    e.preventDefault();

    var $this = jQuery(this);
    var title = $this.attr("data-title");
    var $modal = jQuery("#hot-spotter-content");
    var $modalTitle = $modal.find(".modal-title");
    var $modalBody = $modal.find(".modal-body");

    // Remove any existing content from the modal
    $modalTitle.empty();
    $modalBody.empty();

    // Pass in title to Ajax Request
    var response = jQuery.ajax({
      type: "POST",
      url: ajaxurl,
      dataType: "json",
      data: {
        action: "return_image_map_content",
        title: title
      }
    });

    response.done(function(data, textStatus, jqXHR) {
      $modalTitle.append(data.title);
      $modalBody.append(data.content);
      $modal.modal({backdrop: true});
    });

    response.fail(function(jqXHR, textStatus, error) {
      console.log("AJAX REQUEST FAILED");
    });
  });

// Glossary filter
    if (jQuery("body").hasClass("page-template-glossary_blog-php")) {

    jQuery("#glossary > .term").each(function() {
      jQuery(this).addClass("glossary-" + jQuery(this).children("h3").text().charAt(0));
    });

    jQuery('#glossary > #01no-results').hide();

    var resetDirectory = function () {
      jQuery("#glossary > .term").show();
    };


    (function filterDirectory () {

      function setActiveChar(el){
        jQuery("#directory > a").removeClass("active");
        jQuery(el).addClass("active");
      }

      jQuery("#directory > a").on("click", function() {
        if (jQuery(this).hasClass("active")){ return false; }
        jQuery('#glossary > #01no-results').hide();
        var href = jQuery(this).attr("href").toString();

        if (href === "#all") {
          setActiveChar(this);
          resetDirectory();
          jQuery('#glossary > #01no-results').hide();
        }
        else {
          setActiveChar(this);
          var character = href.slice(1);
          var lowerCharacter = href.slice(1).toLowerCase();
          console.log(character);
          console.log(lowerCharacter)
          var terms = jQuery("#glossary > .term[class$='" + character + "']").show();
          jQuery("#glossary > .term:not([class$='" + character + "'])").hide();
          var lowerTerms =jQuery("#glossary > .term[class$='" + lowerCharacter + "']").show();

          if(character == "N") {
            if(terms.length){
                jQuery('#glossary > #01no-results').hide();
            }
          }


          if(!terms.length){
            if(!lowerTerms.length){
              jQuery('#glossary > #01no-results').show();
            }
          }
        }
      });
    })();
  }

  //sortable tables
  if ($('#sortable').length) {
    $('table[id*=sortable]').DataTable( {
        responsive: true
    } );
  }

  if ($('.table')) {
    $('.table-bordered').css('height', 'auto');
  }

  if ($('table')) {
    $('table').css('height', 'auto');
  }

// Smooth scroll to anchors
// jQuery("a[href^='#']").click(function(e) {
//   e.preventDefault();

//   var hrefTemp = jQuery(this).attr("href");
//   console.log(hrefTemp);
  
//   var position = jQuery(jQuery(this).attr("href")).offset().top;

//   jQuery("body, html").animate({
//     scrollTop: position
//   } /* speed */ );
// });

// jQuery("a").click(function(e) { 
//   if (this.hash != "") {
//     e.preventDefault();
//     var hash = this.hash;

//     jQuery("html, body").animate({
//       scrollTop: jQuery(hash).offset().top
//     }, 800, function () {
//       window.location.hash = hash;
//     });
//   }
// });


// Glossary add active class to glossary letter
jQuery( ".glossary-anchor" ).each(function(index) {
  // Remove and add classes on click
  jQuery(this).on("click", function(){
    jQuery( ".glossary-anchor" ).removeClass("active");
    jQuery(this).addClass("active");
  });
});

// Remove add classes on scroll
if ( jQuery('.glossary-A').length != 0 ) {
  jQuery(window).on( 'scroll', function(){
    if ( jQuery('.glossary-A').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-A").addClass("active");
    }
    if ( jQuery('.glossary-B').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-B").addClass("active");
    }
    if ( jQuery('.glossary-C').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-C").addClass("active");
    }
    if ( jQuery('.glossary-D').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-D").addClass("active");
    }
    if ( jQuery('.glossary-E').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-E").addClass("active");
    }
    if ( jQuery('.glossary-F').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-F").addClass("active");
    }
    if ( jQuery('.glossary-G').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-G").addClass("active");
    }
    if ( jQuery('.glossary-H').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-H").addClass("active");
    }
    if ( jQuery('.glossary-I').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-I").addClass("active");
    }
    if ( jQuery('.glossary-J').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-J").addClass("active");
    }
    if ( jQuery('.glossary-K').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-K").addClass("active");
    }
    if ( jQuery('.glossary-L').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-L").addClass("active");
    }
    if ( jQuery('.glossary-M').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-M").addClass("active");
    }
    if ( jQuery('.glossary-N').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-N").addClass("active");
    }
    if ( jQuery('.glossary-O').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-O").addClass("active");
    }
    if ( jQuery('.glossary-P').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-P").addClass("active");
    }
    if ( jQuery('.glossary-Q').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-Q").addClass("active");
    }
    if ( jQuery('.glossary-R').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-R").addClass("active");
    }
    if ( jQuery('.glossary-S').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-S").addClass("active");
    }
    if ( jQuery('.glossary-T').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-T").addClass("active");
    }
    if ( jQuery('.glossary-U').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-U").addClass("active");
    }
    if ( jQuery('.glossary-V').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-V").addClass("active");
    }
    if ( jQuery('.glossary-W').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-W").addClass("active");
    }
    if ( jQuery('.glossary-X').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-X").addClass("active");
    }
    if ( jQuery('.glossary-Y').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-Y").addClass("active");
    }
    if ( jQuery('.glossary-Z').offset().top <= jQuery(window).scrollTop() ) {
      jQuery( ".glossary-anchor" ).removeClass("active");
      jQuery(".glossary-Z").addClass("active");
    }
  });
}

//START DT Edits, Story ID: 79302896
  // Series Navigation
  (function() {
    var current = jQuery('.serieslist-li-current');
    jQuery(".serieslist-ul > li > a").empty();
    jQuery(".serieslist-ul .previous a").prepend("<i class='fa fa-angle-left'></i>");
    jQuery(".serieslist-ul .next a").prepend("<i class='fa fa-angle-right'></i>");
    jQuery(".serieslist-ul .serieslist-li a").each(function (index) {
      index++;
      console.log(index);
      jQuery(this).prepend(index);
    });

    if (!jQuery(".series-nav-right a").length) {
      jQuery(".previous-next").hide();
      jQuery(".previous-next").prev().hide();
    }
  })();

// Sidebar scroll-fix feature
/*if ( jQuery('.branding').height() > jQuery(window).height() ) {
  var headerScroll = document.getElementById("header").scrollHeight;
  var fixmeTop = headerScroll - jQuery(window).height();
  jQuery(window).scroll(function() {
      var currentScroll = jQuery(window).scrollTop();
      if (currentScroll >= fixmeTop) {
          jQuery('.branding').css({
              position: 'fixed',
              bottom: '0',
              top: 'auto',
          });
      } else {
          jQuery('.branding').css({
              position: 'absolute',
              top: '0',
              bottom: 'auto',
          });
      }
  });
}*/

// Sidebar and main content same height
if ( jQuery('#header').height() > jQuery('#main-content').height() ) {
  var headerHeight = jQuery('#header').height();
  jQuery('#main-content').height(headerHeight);
}

jQuery(document).ready(function(){
  jQuery('.secondary-page-navigation .page_item').each(function(){
    var about_string = jQuery(this).find('a').text();
    var about_result = about_string.replace(/^About\s/i, "");

    jQuery(this).find('a').text(about_result.charAt(0).toUpperCase() + about_result.substr(1));
  });
});

//EXAND ALL BUTTONS
var $collapseId = jQuery('.panel-group').attr('id');
var active = true;

jQuery('#collapse-init').attr('data-target', $collapseId);
jQuery('#collapse-init').attr('data-toggle', 'collapse');

jQuery('#collapse-init').click(function () {
  if (active) {
    active = false;
    jQuery('.panel-collapse').collapse('show');
    jQuery('.panel-title').attr('data-toggle', '');
    jQuery(this).text('Collapse All');
  } else {
    active = true;
    jQuery('.panel-collapse').collapse('hide');
    jQuery('.panel-title').attr('data-toggle', 'collapse');
    jQuery(this).text('Expand All');
  }
});

//LANGUAGE SELECTOR
function languageSelector() {
  document.getElementById("languageDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    document.getElementById("languageDropdown").classList.remove('show');
  }
}

if (!(jQuery("body").hasClass("page-template-page-media-tier-release-notes-php"))) {
  const accordions = document.querySelectorAll(".accordion");
  const accordionToggle = document.querySelectorAll(".accordion-toggle");

  accordionToggle.forEach(toggle => {
    toggle.addEventListener("click", () => {
      accordions.forEach(accordion => {
        if (accordion.dataset.accordion == toggle.dataset.accordionToggle) {
          accordion.classList.toggle("active");
        } else {
        accordion.classList.remove("active");
        }
      })
    })
  })
}

  // ajax pagination
  var page = 2;
  var loadmore = 'on';
  var url = window.location.pathname; 
  jQuery(document).on('scroll resize', function() {
    if (jQuery(window).scrollTop() + jQuery(window).height() + 60 > jQuery(document).height()) {
      if (loadmore == 'on') {
        loadmore = 'off';
        jQuery('#spinner').css('display', 'block');
        jQuery('#lazyload').append(jQuery('<div class="page" id="p' + page + '">').load(url + 'page/' + page + ' .page > *', function() {
          page++;
          loadmore = 'on';
          jQuery('#spinner').css('display', 'none');
        }));
      }
    }
  });
  jQuery( document ).ajaxComplete(function( event, xhr, options ) {
    if (xhr.responseText.indexOf('class="page"') == -1) {
      loadmore = 'off';
    }
  });

  //remove margin from p tag with an "anchor" child
  jQuery("a.anchor").parent("p").css("margin", "0");
  //remove margin from p tag with empty span child
  jQuery("span:empty").parent("p").css("margin", "0");

  // Add "Opens the xxxxxxxx article" to the title
  jQuery('.pf-content a:not(".accordion-toggle, .imagehotspotter_spot, .video-playlist-item")').each(function() {
    var titleText = jQuery(this).attr('title');
    var siteDomain = location.host;
    var linkUrl = jQuery(this).prop('href');

    if (typeof titleText !== typeof undefined && titleText !== false && titleText.indexOf("Opens") !== 0) {
      if (linkUrl.indexOf(siteDomain) >= 0) {
        jQuery(this).prop('title', 'Opens the ' + titleText + ' article');
      } else {
        jQuery(this).prop('title', 'Opens ' + titleText);
      }
    }
  });



});