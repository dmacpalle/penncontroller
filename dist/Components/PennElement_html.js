!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=69)}({69:function(t,e){window.PennController._AddElementType("Html",function(t){function e(t,e){var n=$("label.error[for=__ALL_FIELDS__]");if(n.length>0)n.addClass("Form-error-text").text(e);else{var r=$("label.error[for="+escape(t)+"]");r.length>0?r.addClass("Form-error-text").text(e):alert(e)}}function n(){for(var t=this.jQueryElement[0],e=$(t).find("input[type=text]"),n=$(t).find("textarea"),r=0;r<n.length;++r)e.push(n[r]);for(r=0;r<e.length;++r){var a=$(e[r]);if(a.hasClass("obligatory")&&(!a.attr("value")||a.attr("value").match(/^\s*$/)))return!1}var i=$(t).find("input[type=checkbox]");for(r=0;r<i.length;++r){var o=$(i[r]);if(!o.attr("checked")&&o.hasClass("obligatory"))return!1}var s=$(t).find("input[type=radio]"),l={};for(r=0;r<s.length;++r){var h=$(s[r]);h.attr("name")&&(l[h.attr("name")]||(l[h.attr("name")]=[]),l[h.attr("name")].push(h))}for(var u in l){var c=!1,f=!1;for(r=0;r<l[u].length;++r)l[u][r].hasClass("obligatory")&&(c=!0),l[u][r].attr("checked")&&(f=!0);if(c&&!f)return!1}return!0}this.immediate=function(t,e){this.html=e},this.uponCreation=function(t){CHUNKS_DICT.hasOwnProperty(this.html)?this.jQueryElement=$("<div>").html(htmlCodeToDOM({include:this.html})):this.jQueryElement=$("<div>").html(this.html),this.log=!1,this.checkboxWarningMessage="You must check the %name% checkbox to continue.",this.inputWarningMessage="You ‘%name%’ field is obligatory.",this.radioWarningMessage="You must select an option for ‘%name%’.",t()},this.end=function(){if(this.log){for(var e=this.jQueryElement[0],n=$(e).find("input[type=text]"),r=$(e).find("textarea"),a=0;a<r.length;++a)n.push(r[a]);for(a=0;a<n.length;++a){var i=$(n[a]);t.controllers.running.save(this.type,this.id,csv_url_encode(i.attr("value")),csv_url_encode(i.attr("name")),Date.now(),"text input")}var o=$(e).find("input[type=checkbox]");for(a=0;a<o.length;++a){var s=$(o[a]);t.controllers.running.save(this.type,this.id,s.attr("name"),s.attr("checked")?"checked":"unchecked",Date.now(),"checkbox")}var l=$(e).find("input[type=radio]"),h={};for(a=0;a<l.length;++a){var u=$(l[a]);u.attr("name")&&(h[u.attr("name")]||(h[u.attr("name")]=[]),h[u.attr("name")].push(u))}for(var c in h){var f,g=!1;for(a=0;a<h[c].length;++a)h[c][a].attr("checked")&&(g=!0,f=a);g&&t.controllers.running.save(this.type,this.id,h[c][0].attr("name"),h[c][f].attr("value"),Date.now(),"radio button")}}},this.value=function(){return n.apply(this)},this.actions={warn:function(t){for(var n=this.jQueryElement[0],r=$(n).find("input[type=text]"),a=$(n).find("textarea"),i=0;i<a.length;++i)r.push(a[i]);for(i=0;i<r.length;++i){var o=$(r[i]);!o.hasClass("obligatory")||o.attr("value")&&!o.attr("value").match(/^\s*$/)||e(o.attr("name"),inputWarningMessage.replace(/%name%/gi,o.attr("name")))}var s=$(n).find("input[type=checkbox]");for(i=0;i<s.length;++i){var l=$(s[i]);!l.attr("checked")&&l.hasClass("obligatory")&&e(l.attr("name"),checkboxWarningMessage.replace(/%name%/gi,l.attr("name")))}var h=$(n).find("input[type=radio]"),u={};for(i=0;i<h.length;++i){var c=$(h[i]);c.attr("name")&&(u[c.attr("name")]||(u[c.attr("name")]=[]),u[c.attr("name")].push(c))}for(var f in u){var g=!1,p=!1;for(i=0;i<u[f].length;++i)u[f][i].hasClass("obligatory")&&(g=!0),u[f][i].attr("checked")&&(p=!0);g&&!p&&e(u[f][0].attr("name"),radioWarningMessage.replace(/%name%/gi,u[f][0].attr("name")))}t()}},this.settings={checkboxWarning:function(t,e){this.checkboxWarningMessage=e,t()},inputWarning:function(t,e){this.inputWarningMessage=e,t()},log:function(t){this.log=!0,t()},radioWarning:function(t,e){this.radioWarningMessage=e,t()}},this.test={complete:function(){return n.apply(this)}}})}});