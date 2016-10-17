$(document).ready(function(){
$.emajl();
// IE PNG transparency fix
if($.browser.msie && navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && ((navigator.appVersion.indexOf("MSIE 5.5") !=-1) || (navigator.appVersion.indexOf("MSIE 6.0") !=-1))){
$("div.datum").each(function(){
var bgIMG = $(this).css('background-image');
if(bgIMG.indexOf(".png")!=-1){
var iebg = bgIMG.split('url("')[1].split('")')[0];
$(this).css('background-image', 'none');
$(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
}});
$("div.navigacija").css("margin-left","-12px");}
// svaki drugi red tablice u drugu boju pozadine
$("tr:nth-child(odd)").css("background-color","#DAEAFF");
// oznacava trenutnu stranicu u navigaciji
// $('.navigacija ul li a[href$="' + location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1) + '"]').addClass("trenutnaStranica");

});
jQuery.extend({	// stare metode prebacene u $.namespace
emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a> >>> mailto:user_name@domain
$("a.emajl").each(function(){
$(this).attr("href",$(this).attr("href").replace(/([^A]+)AT([\w]+)/,"mailto:$1@$2"));
if(!$(this).text()) $(this).text($(this).attr("href").substr(7));
});}
})