/* Nada por aqui, por enquanto 👾*/

// dfeDark Mode

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "🌚" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "🌞" );
    }
}); 
function darkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }