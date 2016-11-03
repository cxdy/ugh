var cmPageURL; if(self == top) cmPageURL = document.location.href; else cmPageURL = document.referrer;
var cmifr = (self==top ? '' : 'env=ifr;');
document.write('<scr'+'ipt language="javascript" src="http://a.collective-media.net/cmadj/ns.windowssecurity/general;ppos=atf;kw=;tile=1;dcopt=ist;sz=728x90;net=ns;ord=4182243376479362;'+cmifr+'ord1=' +Math.floor(Math.random() * 1000000) + ';cmpgurl='+escape(escape(cmPageURL))+'?">');  document.write('</scr'+'ipt>');
