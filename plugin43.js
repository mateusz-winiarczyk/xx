!function r(a,i,s){function o(t,n){if(!i[t]){if(!a[t]){var e="function"==typeof require&&require;if(!n&&e)return e(t,!0);if(l)return l(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}e=i[t]={exports:{}},a[t][0].call(e.exports,function(n){return o(a[t][1][n]||n)},e,e.exports,r,a,i,s)}return i[t].exports}for(var l="function"==typeof require&&require,n=0;n<s.length;n++)o(s[n]);return o}({1:[function(n,t,e){var r=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=styles.css.map */\n";n("browserify-css").createStyle(r,{href:"__tmp_minerva_plugin/css/styles.css"},{insertAt:"bottom"}),t.exports=r},{"browserify-css":3}],2:[function(n,t,e){"use strict";n("../css/styles.css");var r;n=window.minerva.plugins.registerPlugin({pluginName:"plugin-random-name-1",pluginVersion:"1.5.1",pluginUrl:"https://raw.githubusercontent.com/mateusz-winiarczyk/xx/main/plugin43.js"}).element,r=n,n=document.createElement("div"),r.append(n),n.innerHTML='<div class="panel panel-default card panel-events mb-2">\n  <div class="panel-heading card-header">Events (Select an element in the map)</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight (icon)</button>\n<hr>\n<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>\n<div class="panel panel-default card panel-randomly-picked mb-2">\n  <div class="panel-heading card-header">Randomly picked object</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>\n<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>\n<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight (surface)</button>\n<hr>\n<h4>Query UniProt API</h4>\n<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block" \n  title="Queries UniProt using the element selected from the map">Retrieve from UniProt</button>\n<div class="panel panel-default card panel-uniprot">\n  <div class="panel-heading card-header">Uniprot records for the selected element</div>\n  <div class="panel-body card-body">\n      <code></code>\n  </div>\n</div>\n<hr>\n<h4>Query Minerva API</h4>\n<form class="form-horizontal">\n  <div class="form-group row">\n      <label class="col-sm-2 control-label">Address</label>\n      <div class="col-sm-10">\n          <input class="input-minerva-address form-control" value="https://minerva-dev.lcsb.uni.lu/minerva">\n      </div>\n  </div>\n  <div class="form-group row">\n      <label class="col-sm-2 control-label">Project ID</label>\n      <div class="col-sm-10">\n          <input class="input-minerva-projectid form-control" value="sample">\n      </div>\n  </div>                        \n</form>\n<button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n<div class="panel panel-default card panel-minerva">\n  <div class="panel-heading card-header">Names of element</div>\n  <div class="panel-body card-body">                \n  </div>\n</div>'},{"../css/styles.css":1}],3:[function(n,t,e){"use strict";function s(n,t){var e=document.head||document.getElementsByTagName("head")[0],r=a[a.length-1];if((t=t||{}).insertAt=t.insertAt||"bottom","top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),a.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}var a=[];t.exports={createLink:function(n,t){var e,r,a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("link");for(e in i.href=n,i.rel="stylesheet",t)t.hasOwnProperty(e)&&(r=t[e],i.setAttribute("data-"+e,r));a.appendChild(i)},createStyle:function(n,t,e){e=e||{};var r,a,i=document.createElement("style");for(r in i.type="text/css",t)t.hasOwnProperty(r)&&(a=t[r],i.setAttribute("data-"+r,a));i.sheet?(i.innerHTML=n,i.sheet.cssText=n,s(i,{insertAt:e.insertAt})):i.styleSheet?(s(i,{insertAt:e.insertAt}),i.styleSheet.cssText=n):(i.appendChild(document.createTextNode(n)),s(i,{insertAt:e.insertAt}))}}},{}]},{},[2]);
