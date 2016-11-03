if (typeof Wol === "undefined")
	Wol = {};
if (typeof Wol.CP === "undefined")
	Wol.CP = {};
Wol.CP.Common = function () {
	var a = {
		g_stringUndefined : "undefined"
	},
	b = {
		LogComponentInteraction : function (f, c, k, h, l, j, i) {
			var g = 7,
			d = Wol.CP.Common.Global;
			if (arguments.length === g) {
				var e = {
					cpci : k,
					cpes : h,
					cpet : l,
					cpev : j
				};
				switch (i) {
				case this.LoggingType.Custom:
					var a = Wol.ContentInstrumentation.Logging.LogCustomBI;
					typeof a !== d.g_stringUndefined && a(c, e, f);
					break;
				case this.LoggingType.Click:
					var b = Wol.ContentInstrumentation.Logging.FireClickEvent;
					typeof b !== d.g_stringUndefined && b(e, f, null, c, null, null)
				}
			}
		},
		LoggingType : {
			Click : "Click",
			Custom : "Custom"
		}
	};
	return {
		BI : b,
		Global : a
	}
}
();

// MS Logo Header Link
$(document).ready(function(){
var fg = document.createDocumentFragment(),
    a = document.createElement('a'),
    href = "https://www.microsoft.com/",
    style = document.createElement('style'),
    headerElement = document.getElementById('hdr-main');

var css = " .injected-logo {    position: relative;    width: 115px;    height: 25px;    top: -104px;    z-index: 100;    display: block;    margin: 0px 10px;    background-image: url(http://c.s-microsoft.com/en-us/CMSImages/mslogo.png?version=856673f8-e6be-0476-6669-d5bf2300391d);    background-size: contain;    background-repeat: no-repeat;} @media screen and (max-width: 62.8688em) {.injected-logo { top:17px;margin:0 5%;position:absolute; }} ";

a.href = href;
a.className = 'injected-logo';

style.type = 'text/css';
if(style.styleSheet) {
                style.styleSheet.cssText = css;
} else {
                style.innerHTML = css;
}

fg.appendChild(a);
fg.appendChild(style);
headerElement.appendChild(fg);
});
