function activateSearch() {
    if ($('searchform')) {
        $('s').value = 'Suche starten...'; // Default text in the search box
        var o = document.createElement('div'); // Old search results div
        var n = document.createElement('div'); // New search results div
        $('searchform').onsubmit = function() { doSearch();return false; };
        $('s').onfocus = focusS; // Function to clear the default search box text on focus
        var s = $('search-results');
        var f = $('searchform');
        o.id = 'old-search-results';
        n.id = 'current-search-results';
        s.appendChild(n);
        s.appendChild(o);
        o.style.display = 'none';
        n.style.display = 'none';
        is_searching = false;
    }
}

function doSearch() {
    // If we're already loading, don't do anything
    if (is_searching) return false; 
    s = $F('s');
    // Same if the search is blank
    if (s == '' || s == 'Suche starten...') return false; 
    is_searching = true;
    c = $('current-search-results');
    o = $('old-search-results');
    b = $('searchbutton');
    b.value = 'Loading';
    b.disabled = true;
    o.innerHTML = c.innerHTML;
    c.style.display = 'none';
    o.style.display = 'block';
    // Setup the parameters and make the ajax call
    pars = 's=' + escape(s) + '&ajax';
    var myAjax = new Ajax.Request('http://www.taktlos.com/', 
          {method: 'get', parameters: pars, onComplete:doSearchResponse});
}

function doSearchResponse(response) {
    $('current-search-results').innerHTML = response.responseText;
    new Effect.BlindUp('old-search-results',{duration:.8});
    new Effect.BlindDown('current-search-results',{duration:.8, afterFinish:resetForm});
}

function resetForm() {
    s = $('searchbutton');
    s.value = "\>>>";
    s.disabled = false;
    is_searching = false;
}

function focusS() {
    if ($F('s') == 'Suche starten...') $('s').value = '';
}

Event.observe(window, 'load', activateSearch, false);