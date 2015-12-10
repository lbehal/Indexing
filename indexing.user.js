// ==UserScript==
// @name         Indexing 
// @namespace    null
// @version      0.1
// @description  Improves CZ indexing
// @author       LB
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js 
// @grant        none
// @include      https://atom.aionindexing.eu/form/item*
// ==/UserScript==
/* jshint -W097 */
'use strict';

$1 = this.jQuery = jQuery.noConflict(true);
var debug = function(x) {    
    console.log(x); 
};

$1("#Form_A100816 > tbody > tr > td.FieldB > span > a").each(function() {    
    var href = $1(this).attr("href");
    debug(href);
    var czhref= href.replace("/SK/", "/CS/").replace("locale=sk","locale=cs");
    debug(czhref);
    $1(this).attr("href", czhref);
     $1(this).text(czhref);
    
});