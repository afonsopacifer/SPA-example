$(document).ready(function(){

  var navLink = $('#nav .nav-link'), // Links que fazer a requisição
      content = '#content', //Conteudo que é requisitado
      main = $('#main'); //Conteiner que recebe o conteudo

  //Adicionado propriedades a primeira pagina aberta pelo browser
  //--------------------------------------------------------------
  //Definindo o state
  var local = window.location.pathname.split('/').pop();
  window.history.pushState({page: local}, null, "");

  menuFeedback();

  //Requisitando o conteudo
  //--------------------------------------------------------------
  navLink.on('click', function(e){
    var href = $(this).attr('href');
    e.preventDefault();
    //Carregando o especifco requisitado
    main.fadeOut('fast', function(){
      main.load(href+' '+content, function(){
        main.fadeIn('fast');
      });
    });
    //Definindo o state
    window.history.pushState({page: href}, null, href);

    menuFeedback();
  });

  //Garante a navegação as páginas que o usuario já navegou
  //--------------------------------------------------------------
  window.addEventListener('popstate', function(event) {
    //Definindo o state
    if(event.state) {
      var pageState = event.state.page;
    }
    //Carregando o especifco requisitado
    main.fadeOut('fast', function(){
      main.load(pageState+' '+content, function(){
        main.fadeIn('fast');
      });
    });

    menuFeedback();
  });

  //verifica a pagina atual e adiciona a classe .active ao seu link no menu
  //--------------------------------------------------------------
  function menuFeedback() {
    $(this).addClass('active');
    var local = window.location.pathname.split('/').pop();
    navLink.each(function(){
      if ($(this).attr('href') == local ) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  };

});
