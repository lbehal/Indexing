// ==UserScript==
// @name         Indexing 
// @namespace    Indexing
// @version 2.0
// @description  Improves CZ indexing
// @author       LB
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require      https://raw.githubusercontent.com/lbehal/Eurlex/master/tooltipster.bundle.min.js
// @resource     tooltipster_css https://raw.githubusercontent.com/lbehal/Eurlex/master/tooltipster.bundle.min.css
// @resource     tooltipster_css2 https://raw.githubusercontent.com/lbehal/Eurlex/master/tooltipster-sideTip-shadow.min.css
// @require      https://raw.githubusercontent.com/lbehal/Eurlex/master/tooltipster-scrollableTip.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @include      https://atom.aionindexing.eu/form/item*
// @downloadURL https://raw.githubusercontent.com/lbehal/Indexing/master/indexing.user.js
// ==/UserScript==
/* jshint -W097 */

var cm_CssSrc = GM_getResourceText("tooltipster_css");
    GM_addStyle (cm_CssSrc);
	var cm_CssSrc2 = GM_getResourceText("tooltipster_css2");
    GM_addStyle (cm_CssSrc2);
var idMatch = new RegExp("ftnref");
function escapeRegExp(str) {
	const regexpSize = /.*?(ftn.*)$/;
	const match = str.match(regexpSize);
		return match[1];
	}
//add tooltip to all notereference links
    $("a").each(function() {
     if(idMatch.test(this.name))//this is correct link.
     {
         $(this).addClass("tooltips"); //mark this with tooltip class so we can show a tooltip with tooltipster plugin
         var hrefid = escapeRegExp($(this).attr('href'));//#docWrapper_1__ftn267
         $(this).attr('data-tooltip-content', "#"+hrefid);
     }
    });

    $('.tooltips').tooltipster({
        plugins: ['sideTip', 'scrollableTip'],
		theme: 'tooltipster-shadow',
        contentCloning: true,
        trigger: 'custom',
		interactive: true,
        triggerOpen: {
            mouseenter: true
        },
        triggerClose: {
            click: true,
            scroll: true
        }
    });

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
			var zoomSelect = $1(`<div style='margin: 5px;'><span>Zoom</span><label><input type='radio' name='editList' value='1' checked />100%</label>
<label><input type='radio' name='editList' value='1.25' />125%</label>
<label><input type='radio' name='editList' value='1.3' />130%</label>
<label><input type='radio' name='editList' value='1.4' />140%</label>
<label><input type='radio' name='editList' value='1.5' />150%</label>
<label><input type='radio' name='editList' value='1.75' />175%</label>
<label><input type='radio' name='editList' value='2' />200%</label>
</div>`);
			zoomSelect.insertBefore($1(this));
		});

	$1(document).on('click', '[name="editList"]', function () {

		$1('div.PageBox')[0].style.zoom =$1(this).val();
		$1($1('div.PageBox')[0]).css('line-height','150%');
	});
}
$1("p.MsoFootnoteText[style*='margin-right:-']").each(function() {
	$1(this).attr('style', '');
});

