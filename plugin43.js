!function r(a,i,s){function o(e,t){if(!i[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(l)return l(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=i[e]={exports:{}},a[e][0].call(n.exports,function(t){return o(a[e][1][t]||t)},n,n.exports,r,a,i,s)}return i[e].exports}for(var l="function"==typeof require&&require,t=0;t<s.length;t++)o(s[t]);return o}({1:[function(t,e,n){var r=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=styles.css.map */\n";t("browserify-css").createStyle(r,{href:"__tmp_minerva_plugin/css/styles.css"},{insertAt:"bottom"}),e.exports=r},{"browserify-css":3}],2:[function(t,e,n){"use strict";t("../css/styles.css");var r;t=window.minerva.plugins.registerPlugin({pluginName:"plugin-x",pluginVersion:"1.5.1",pluginUrl:"https://raw.githubusercontent.com/mateusz-winiarczyk/xx/main/plugin43.js"}).element,r=t,t=document.createElement("div"),r.append(t),t.innerHTML='              <div class="panel panel-default card panel-events mb-2">\n  <div class="panel-heading card-header">Events (Select an element in the map)</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight (icon)</button>\n<hr>\n<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>\n<div class="panel panel-default card panel-randomly-picked mb-2">\n  <div class="panel-heading card-header">Randomly picked object</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight (surface)</button>\n<hr>\n<h4>Query UniProt API</h4>\n<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block" \n  title="Queries UniProt using the element selected from the map">Retrieve from UniProt</button>\n<div class="panel panel-default card panel-uniprot">\n  <div class="panel-heading card-header">Uniprot records for the selected element</div>\n  <div class="panel-body card-body">\n      <code></code>\n  </div>\n</div>\n<hr>\n<h4>Query Minerva API</h4>\n<button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n<div class="panel panel-default card panel-minerva">\n  <div class="panel-heading card-header">Names of element</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>'},{"../css/styles.css":1}],3:[function(t,e,n){"use strict";function s(t,e){var n=document.head||document.getElementsByTagName("head")[0],r=a[a.length-1];if((e=e||{}).insertAt=e.insertAt||"bottom","top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}var a=[];e.exports={createLink:function(t,e){var n,r,a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("link");for(n in i.href=t,i.rel="stylesheet",e)e.hasOwnProperty(n)&&(r=e[n],i.setAttribute("data-"+n,r));a.appendChild(i)},createStyle:function(t,e,n){n=n||{};var r,a,i=document.createElement("style");for(r in i.type="text/css",e)e.hasOwnProperty(r)&&(a=e[r],i.setAttribute("data-"+r,a));i.sheet?(i.innerHTML=t,i.sheet.cssText=t,s(i,{insertAt:n.insertAt})):i.styleSheet?(s(i,{insertAt:n.insertAt}),i.styleSheet.cssText=t):(i.appendChild(document.createTextNode(t)),s(i,{insertAt:n.insertAt}))}}},{}]},{},[2]);
