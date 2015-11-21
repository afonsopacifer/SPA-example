$('#main').load('pagina-1.html');


$('.nav-link').on('click', function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  $('#main').load(href);

  history.pushState({page: href}, null, href);

});

window.addEventListener('popstate', function(event) {
  if(event.state) {
    var content = event.state.page;
  }
  $('#main').load(content);
});
