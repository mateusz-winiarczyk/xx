!function r(s,a,i){function o(e,t){if(!a[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(p)return p(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=a[e]={exports:{}},s[e][0].call(n.exports,function(t){return o(s[e][1][t]||t)},n,n.exports,r,s,a,i)}return a[e].exports}for(var p="function"==typeof require&&require,t=0;t<i.length;t++)o(i[t]);return o}({1:[function(t,e,n){var r=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=styles.css.map */\n";t("browserify-css").createStyle(r,{href:"__tmp_minerva_plugin/css/styles.css"},{insertAt:"bottom"}),e.exports=r},{"browserify-css":3}],2:[function(t,e,n){"use strict";t("../css/styles.css");var r,s;console.log("pluginScript",pluginScript),t=window.minerva.plugins.registerPlugin({pluginName:"test-plugin-w",pluginVersion:"9.9.3",pluginUrl:"https://raw.githubusercontent.com/mateusz-winiarczyk/xx/main/test-plugin-w.js"}).element,r=t,t=document.createElement("div"),r.append(t),t.innerHTML='<div class="p-6 flex flex-wrap justify-center gap-4 font-sans antialiased">\n  <button id="toggle-button" type="button">Toggle</button>\n  <div class="overflow-x-auto" id="table-plugin">\n  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">\n    <thead class="ltr:text-left rtl:text-right">\n      <tr>\n        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>\n        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>\n        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>\n        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>\n      </tr>\n    </thead>\n\n    <tbody class="divide-y divide-gray-200">\n      <tr>\n        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>\n      </tr>\n\n      <tr>\n        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>\n      </tr>\n\n      <tr>\n        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>\n        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n',t=document.querySelector("#toggle-button"),s=document.querySelector("#table-plugin"),t.addEventListener("click",function(){s.classList.toggle("hidden")})},{"../css/styles.css":1}],3:[function(t,e,n){"use strict";function i(t,e){var n=document.head||document.getElementsByTagName("head")[0],r=s[s.length-1];if((e=e||{}).insertAt=e.insertAt||"bottom","top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}var s=[];e.exports={createLink:function(t,e){var n,r,s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");for(n in a.href=t,a.rel="stylesheet",e)e.hasOwnProperty(n)&&(r=e[n],a.setAttribute("data-"+n,r));s.appendChild(a)},createStyle:function(t,e,n){n=n||{};var r,s,a=document.createElement("style");for(r in a.type="text/css",e)e.hasOwnProperty(r)&&(s=e[r],a.setAttribute("data-"+r,s));a.sheet?(a.innerHTML=t,a.sheet.cssText=t,i(a,{insertAt:n.insertAt})):a.styleSheet?(i(a,{insertAt:n.insertAt}),a.styleSheet.cssText=t):(a.appendChild(document.createTextNode(t)),i(a,{insertAt:n.insertAt}))}}},{}]},{},[2]);
