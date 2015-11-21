$('#main').load('pagina-1.html');

$('.nav-link').click(function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  $('#main').load(href);

  history.pushState(null, null, href);

});
