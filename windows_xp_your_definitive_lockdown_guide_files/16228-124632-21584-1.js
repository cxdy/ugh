var mojopro2 = window.location.protocol;
if (mojopro2 == "https:") {
mojosrc = "https://secure.img-cdn.mediaplex.com/0/documentwrite.js";
}
else
  {
mojosrc = "http://img-cdn.mediaplex.com/0/documentwrite.js";
  };
var jssrc = '<scr' + 'ipt type="text/javascript" src="' + mojosrc + '"></scr' + 'ipt>';
if( window.DocumentWrite ){
    DocumentWrite( jssrc );
}
  else {
    document.write( jssrc );
};
//-->
 
(function(){
var mojopro = window.location.protocol;
if (mojopro == "https:") {
mojopro = "https://secure.img-cdn.mediaplex.com/0/";
}
else  {
mojopro = "http://img-cdn.mediaplex.com/0/";
  };  
var mpvce = '<mpvce/>';
if (mpvce == 1) {
mpvclick = encodeURIComponent("http://ad.doubleclick.net/click;h=v8/3b2c/3/0/*/v;238151162;0-0;0;32643151;4307-300/250;41408925/41426712/1;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y;~okv=;net=ns;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y-na.z61_1-na.14-na.z71_1-pk.cl-pk.co-pk.bq-pk.bs-bk.khw-mm.ai1-mm.aj5-mm.ar1-mm.as5-mm.at1-mm.au5;;ppos=atf;kw=;tile=2;cmw=owl;sz=300x250,336x280;net=ns;ord1=593855;contx=itsesecu;an=;dc=w;btg=cl.37;btg=cl.p30;btg=cl.c12;btg=ex.16;btg=ex.3;btg=ex.40;~aopt=2/0/52/0;~sscs=?");
mpvc = mpvclick;
}
else if (mpvce == 2) {
mpvclick2 = encodeURIComponent("http://ad.doubleclick.net/click;h=v8/3b2c/3/0/*/v;238151162;0-0;0;32643151;4307-300/250;41408925/41426712/1;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y;~okv=;net=ns;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y-na.z61_1-na.14-na.z71_1-pk.cl-pk.co-pk.bq-pk.bs-bk.khw-mm.ai1-mm.aj5-mm.ar1-mm.as5-mm.at1-mm.au5;;ppos=atf;kw=;tile=2;cmw=owl;sz=300x250,336x280;net=ns;ord1=593855;contx=itsesecu;an=;dc=w;btg=cl.37;btg=cl.p30;btg=cl.c12;btg=ex.16;btg=ex.3;btg=ex.40;~aopt=2/0/52/0;~sscs=?");
mpvc = encodeURIComponent(mpvclick2);
}
else
  {
mpvc = ("http://ad.doubleclick.net/click%3Bh%3Dv8/3b2c/3/0/%2a/v%3B238151162%3B0-0%3B0%3B32643151%3B4307-300/250%3B41408925/41426712/1%3Bu%3D%2Cns-10303614708_1308544024%2C114c44608b09b5b%2Citsesecu%2Cax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y%3B%7Eokv%3D%3Bnet%3Dns%3Bu%3D%2Cns-10303614708_1308544024%2C114c44608b09b5b%2Citsesecu%2Cax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y-na.z61_1-na.14-na.z71_1-pk.cl-pk.co-pk.bq-pk.bs-bk.khw-mm.ai1-mm.aj5-mm.ar1-mm.as5-mm.at1-mm.au5%3B%3Bppos%3Datf%3Bkw%3D%3Btile%3D2%3Bcmw%3Dowl%3Bsz%3D300x250%2C336x280%3Bnet%3Dns%3Bord1%3D593855%3Bcontx%3Ditsesecu%3Ban%3D%3Bdc%3Dw%3Bbtg%3Dcl.37%3Bbtg%3Dcl.p30%3Bbtg%3Dcl.c12%3Bbtg%3Dex.16%3Bbtg%3Dex.3%3Bbtg%3Dex.40%3B%7Eaopt%3D2/0/52/0%3B%7Esscs%3D%3f");
  }; 
var mpcke = '<mpcke/>';
if (mpcke == 1) {
mpcclick = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F16228-124632-21584-1%3Fmpt%3D8253733");
mpck = "http://" + mpcclick;
}
else if (mpcke == 2) {
mpcclick2 = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F16228-124632-21584-1%3Fmpt%3D8253733");
mpck = "http://" + encodeURIComponent(mpcclick2);
}
else
  {
mpck = ("http://altfarm.mediaplex.com%2Fad%2Fck%2F16228-124632-21584-1%3Fmpt%3D8253733");
  };
var mp_swver = 0, mp_html = "";
if( navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ) {
  if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
    mp_swver = (navigator.plugins["Shockwave Flash"].description.split( " " ))[2];
  }
} else if ( navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && ( navigator.userAgent.indexOf("Windows") >= 0 ) ) {
var mp_axo,e;
  for( var mp_i = 11; mp_i > 6; mp_i-- ) {
    try {
    mp_axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + mp_i );
    mp_swver = mp_i;
    break;
    } catch (e) {}
  }
}
if( mp_swver >= 6 ) {
  mp_html =  '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
  mp_html += ' codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" id="7763189" name="movie7763189" width="300" height="250">';
  if( mp_swver > 5 ) {
    mp_html += '<param name="FlashVars" value="clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
    mp_html += '<param name="movie" value="' + mojopro + '16228/124632/Lumension_IWL_300x250_A01.swf">';
    mp_html += '<param name="wmode" value="opaque">';
    mp_html += '<param name="allowscriptaccess" value="always">';
  } 
  else {
    mp_html += '<param name="movie" value="' + mojopro + '16228/124632/Lumension_IWL_300x250_A01.swf?clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
  	mp_html += '<param name="wmode" value="opaque">';
  	mp_html += '<param name="allowscriptaccess" value="always">';
  }
  if( mp_swver > 5 ) {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" name="16228/124632/Lumension_IWL_300x250_A01." src="' + mojopro + '16228/124632/Lumension_IWL_300x250_A01.swf" FlashVars="clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  else {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" NAME="16228/124632/Lumension_IWL_300x250_A01." src="' + mojopro + '16228/124632/Lumension_IWL_300x250_A01.swf?clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  mp_html += ' swLiveConnect="false" width="300" height="250" type="application/x-shockwave-flash" pluginspage="">';
  mp_html += '</embed>';
  mp_html += '</object>';
  if( window.DocumentWrite )
    DocumentWrite( mp_html );
  else
    document.write( mp_html );
} else if( !( navigator.appName && navigator.appName.indexOf("Netscape") >= 0 && navigator.appVersion.indexOf("2.") >= 0 ) ) {
  document.write('<a href="http://ad.doubleclick.net/click;h=v8/3b2c/3/0/*/v;238151162;0-0;0;32643151;4307-300/250;41408925/41426712/1;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y;~okv=;net=ns;u=,ns-10303614708_1308544024,114c44608b09b5b,itsesecu,ax.-cl.37-cl.p30-cl.c12-ex.16-ex.3-ex.40-ex.57-ex.49-ex.7-ex.8-ex.4a-ex.3r-ex.fb-ex.da-ex.bt-ex.32-ex.4-ex.4z-ex.20-na.lr-na.z1f-na.12-na.39-na.z173_y-na.lo-na.z27_g-na.z32_y-na.z37_m-na.z38_m-na.z54_y-na.z61_1-na.14-na.z71_1-pk.cl-pk.co-pk.bq-pk.bs-bk.khw-mm.ai1-mm.aj5-mm.ar1-mm.as5-mm.at1-mm.au5;;ppos=atf;kw=;tile=2;cmw=owl;sz=300x250,336x280;net=ns;ord1=593855;contx=itsesecu;an=;dc=w;btg=cl.37;btg=cl.p30;btg=cl.c12;btg=ex.16;btg=ex.3;btg=ex.40;~aopt=2/0/52/0;~sscs=?http://altfarm.mediaplex.com/ad/ck/16228-124632-21584-1?mpt=8253733" target="_blank"><img src="http://img-cdn.mediaplex.com/0/16228/124632/Lumension_IWL_300x250_A01.jpg" width="300" height="250" border="0" alt=""></a>');
}
})();
//-->

