var language = window.navigator.userLanguage || window.navigator.language;
alert(language);

if (language.startsWith('pt')) {
    $.get( "translation/pt_BR.html", function( data ) {
        document.getElementById('markdown-thing').innerHTML = data;
    });
}
