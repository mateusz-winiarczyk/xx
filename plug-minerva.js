!function r(a,i,o){function d(n,e){if(!i[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}},a[n][0].call(t.exports,function(e){return d(a[n][1][e]||e)},t,t.exports,r,a,i,o)}return i[n].exports}for(var l="function"==typeof require&&require,e=0;e<o.length;e++)d(o[e]);return d}({1:[function(e,n,t){var r=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=styles.css.map */\n";e("browserify-css").createStyle(r,{href:"__tmp_minerva_plugin/css/styles.css"},{insertAt:"bottom"}),n.exports=r},{"browserify-css":3}],2:[function(e,n,t){"use strict";e("../css/styles.css");var r;e=window.minerva.plugins.registerPlugin({pluginName:"plug-minerva",pluginVersion:"1.3.1",pluginUrl:"https://raw.githubusercontent.com/mateusz-winiarczyk/xx/main/plug-minerva.js"}).element,r=e,document.querySelector(".btn-focus").addEventListener("click",function(){console.log("click")}),e=document.createElement("div"),r.append(e),e.innerHTML='              <div class="panel panel-default card panel-events mb-2">\n  <div class="panel-heading card-header">Events (Select an element in the map)</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight (icon)</button>\n<hr>\n<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>\n<div class="panel panel-default card panel-randomly-picked mb-2">\n  <div class="panel-heading card-header">Randomly picked object</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight (surface)</button>\n<hr>\n<h4>Query UniProt API</h4>\n<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block" \n  title="Queries UniProt using the element selected from the map">Retrieve from UniProt</button>\n<div class="panel panel-default card panel-uniprot">\n  <div class="panel-heading card-header">Uniprot records for the selected element</div>\n  <div class="panel-body card-body">\n      <code></code>\n  </div>\n</div>\n<hr>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n<div class="panel panel-default card panel-minerva">\n  <div class="panel-heading card-header">Names of element</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<div class="panel panel-default card panel-events mb-2">\n  <div class="panel-heading card-header">Events (Select an element in the map)</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight (icon)</button>\n<hr>\n<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>\n<div class="panel panel-default card panel-randomly-picked mb-2">\n  <div class="panel-heading card-header">Randomly picked object</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight (surface)</button>\n<hr>\n<h4>Query UniProt API</h4>\n<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block" \n  title="Queries UniProt using the element selected from the map">Retrieve from UniProt</button>\n<div class="panel panel-default card panel-uniprot">\n  <div class="panel-heading card-header">Uniprot records for the selected element</div>\n  <div class="panel-body card-body">\n      <code></code>\n  </div>\n</div>\n<hr>\n<h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4><h4>Query Minerva API</h4>\n<h4>Query Minerva API</h4>\n<button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n<div class="panel panel-default card panel-minerva">\n  <div class="panel-heading card-header">Names of element</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n'},{"../css/styles.css":1}],3:[function(e,n,t){"use strict";function o(e,n){var t=document.head||document.getElementsByTagName("head")[0],r=a[a.length-1];if((n=n||{}).insertAt=n.insertAt||"bottom","top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),a.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}var a=[];n.exports={createLink:function(e,n){var t,r,a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("link");for(t in i.href=e,i.rel="stylesheet",n)n.hasOwnProperty(t)&&(r=n[t],i.setAttribute("data-"+t,r));a.appendChild(i)},createStyle:function(e,n,t){t=t||{};var r,a,i=document.createElement("style");for(r in i.type="text/css",n)n.hasOwnProperty(r)&&(a=n[r],i.setAttribute("data-"+r,a));i.sheet?(i.innerHTML=e,i.sheet.cssText=e,o(i,{insertAt:t.insertAt})):i.styleSheet?(o(i,{insertAt:t.insertAt}),i.styleSheet.cssText=e):(i.appendChild(document.createTextNode(e)),o(i,{insertAt:t.insertAt}))}}},{}]},{},[2]);
