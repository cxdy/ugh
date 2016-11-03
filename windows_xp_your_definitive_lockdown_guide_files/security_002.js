var cmPageURL; if(self == top) cmPageURL = document.location.href; else cmPageURL = document.referrer;
var cmifr = (self==top ? '' : 'env=ifr;');
document.write('<scr'+'ipt language="javascript" src="http://a.collective-media.net/cmadj/ns.windowssecurity/security;ppos=atf;kw=;tile=2;sz=300x250,336x280;net=ns;ord=4182243376479362;'+cmifr+'ord1=' +Math.floor(Math.random() * 1000000) + ';cmpgurl='+escape(escape(cmPageURL))+'?">');  document.write('</scr'+'ipt>');
