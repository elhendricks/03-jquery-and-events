// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the select box changes to an option that has a value,
      we should:
      1. Hide all the articles,


      2. Fade in only the articles that match based on the author
        that was selected. Use an "attribute selector" to find
        those articles that match the value, and fade them in
        for the reader. */

      $('#articles article').hide();

      $('[data-author= "' + $(this).val() +'"]').fadeIn();


    } else {
      /* TODO: Otherwise, we should:
      1. Show all the articles.
      2. Except the one article we are using as a template. */

      $('#articles article').not('.template').show();
    }


    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */

  $('#category-filter').on('change', function() {
    if ($(this).val()) {

      $('#articles article').hide();

      $('[data-category= "' + $(this).val() +'"]').fadeIn();

    } else {

      $('articles article').not('.template').show();
    }

    $('#author-filter').val('');

  });
};

articleView.handleMainNav = function () {
  /* TODO: Complete the delegated event handler below to help
  power the tabs feature.
  Clicking any .tab element should:
  1. Hide all the .tab-content sections.
  2. Fade in the single .tab-content section that is associated withthe clicked
  .tab element's data-content attribute. */

  $('.main-nav').on('click', '.tab', function() {
    var $navDataContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $navDataContent).show();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  /* Hide any elements after the first 2 (<p> Tags in case)
  in any article body: */
  $('.article-body *:nth-of-type(n+3)').hide();

  /* TODO: Add a delegated event handler to reveal the remaining
  paragraph.  When a .read-on link is clicked, we can:
  1. Prevent the default action of a link.
  2. Reveal everything in that particular article now.
  3. Hide that read-on link! */
  // STRETCH GOAL!:  change the 'Read On' link to display 'Show Less'
};
var displayed = false;
$('#articles').on('click', '.read-on', function(event) {
  event.preventDefault();
  if (!displayed) {
    $(this).siblings('.article-body').find('*').show();
    $(this).text('Show Less');
    displayed = true;
  } else {
    $('.article-body *:nth-of-type(n+3)').hide();
    $(this).text('Read On');
    displayed = false;
  }
});

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
