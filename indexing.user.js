// ==UserScript==
// @name         Indexing 
// @namespace    Indexing
// @version 1.5
// @description  Improves CZ indexing
// @author       LB
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js 
// @grant        none
// @include      https://atom.aionindexing.eu/form/item*
// @downloadURL https://raw.githubusercontent.com/lbehal/Indexing/master/indexing.user.js
// ==/UserScript==
/* jshint -W097 */

$1 = this.jQuery = jQuery.noConflict(true);
var debug = function(x) {    
    console.log(x); 
};

$1("#Form_A100816 > tbody > tr > td.FieldB > span > a").each(function() {    
    var href = $1(this).attr("href");
    debug(href);
    var czhref= href.replace("/SK/", "/CS/").replace("locale=sk","locale=cs");
    debug("changed to :"+ czhref);
    $1(this).attr("href", czhref);
     $1(this).text(czhref);
    
});
if(window.location.href.indexOf("eur-document") != -1)
{
	$1("div.SiteTitle").each(
		function()
		{
			var zoomSelect = $(`<div><span>Zoom</span><select onchange="{$('div.PageBox')[0].style.zoom = this.value;$($('div.PageBox')[0]).css('line-height','150%');}">
     <option value="1" selected="selected">100%</option>
     <option value="1.5">150%</option>
     <option value="2">200%</option>
</select></div>`);
				zoomSelect.insertBefore($(this));
			});
}
