$(document).ready(function(){
  var inp = document.querySelector('.SearchQueryTextInput input'),
      btn = document.querySelector('.SearchQuerySubmit button'),
      localeMatch = location.href.match(/\.com\/(.+)\/windows/);

  var specialCaseLocalsDic = {
    'ar-xm': 'ar-sa',
    'en-hk': 'en-us',
    'en-id': 'id-id',
    'es-cl': 'en-us',
    'es-co': 'en-us',
    'es-xl': 'es-mx',
    'fr-xf': 'fr-fr',
    'is-is': 'en-us',
    'lt-lt': 'en-us',
    'sr-latn-rs': 'en-us'
  };

  var specialCaseLocalesMatch = function(localeCodeString) {
    if (specialCaseLocalsDic[localeCodeString]) {
      return specialCaseLocalsDic[localeCodeString];
    }
    else {
      return localeCodeString;
    }
  };

  var locale = localeMatch ? specialCaseLocalesMatch(localeMatch[1].toLowerCase()) : 'en-us';

  var apiSearchPath = ["https://www.microsoft.com/",locale,"/search/result.aspx?q="].join('');

  if (inp && btn) {
    inp.onkeypress = function(e){
     if (e.keyCode === 13) {
       e.preventDefault();e.stopPropagation();
       location.href = encodeURI([apiSearchPath,e.target.value].join(''));
     }
    };
    btn.onclick = function(e){
      var inpVal = inp.value;
      if ("" !== inpVal) {
         e.preventDefault();e.stopPropagation();
         location.href = encodeURI([apiSearchPath,inpVal].join(''));
      }
    };
  }
});