// Sophos Tracker v2.0
// Why hello there! This script automatically adds analytics tracking to documentation/downloads/podcasts/rss etc
var domain = document.domain;
$(document).ready(
		function ()
 {
$("a[href$='pdf'], [href$='rtf'], [href$='ppt'], [href$='pptx'], [href$='doc'], [href$='docx'], [href$='txt'], [href$='mp3'], [href$='wmv'], [href$='mov'], [href$='xml'], [href$='exe'], [href$='zip'], [href$='rar'], [href$='dmg'], [href$='tar.Z'], [href$='tar.gz'], [href$='ashx'], [href$='tgz']").click(function()
 	{ var href = this.href;
					var rexp = /https?:\/\/([^\/]+)/;
					var array = rexp.exec ( href );
					var linkDomain = array[1];
					var sophosDomains = /(.*)sophos\.(.*)/;
if( $(this).attr('onclick') != null ) {
		 if ($(this).attr('onclick').indexOf("trackPageview") < 0 )
		 {track = 0;}
		 else {track = 1;}
		 switch (track)
		 {case 0 : 
		 {     	    
					if (sophosDomains.test(linkDomain))
						{
							var tld = this.href.split(".");
							var tld2 = tld[tld.length-2].split("/")[0];;
							var URI = this.href.split( "."+tld2)[1];
	                        _gaq.push(['_trackPageview', URI ]); _gaq.push(['o._trackPageview', URI ]);			 }
		else
						{							
							break;	 }	
							}
		case 1 : { break;	 }	  }
		}
		else	   {
					if (sophosDomains.test(linkDomain))
						{
							var tld = this.href.split(".");
							var tld2 = tld[tld.length-2].split("/")[0];;
							var URI = this.href.split( "."+tld2)[1];
	                        _gaq.push(['_trackPageview', URI ]); _gaq.push(['o._trackPageview', URI ]);			 }
		else { }	
	 }	 
	});
	});