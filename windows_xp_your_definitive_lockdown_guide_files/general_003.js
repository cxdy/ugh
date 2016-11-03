var cmPageURL; if(self == top) cmPageURL = document.location.href; else cmPageURL = document.referrer;
var cmifr = (self==top ? '' : 'env=ifr;');
document.write('<scr'+'ipt language="javascript" src="http://a.collective-media.net/cmadj/ns.windowssecurity/general;ppos=btf;kw=;tile=3;sz=120x600,160x600;net=ns;ord=4182243376479362;'+cmifr+'ord1=' +Math.floor(Math.random() * 1000000) + ';cmpgurl='+escape(escape(cmPageURL))+'?">');  document.write('</scr'+'ipt>');
