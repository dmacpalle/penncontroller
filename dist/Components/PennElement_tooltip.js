!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=61)}({61:function(t,e){window.PennController._AddElementType("Tooltip",function(t){function e(){this.jQueryElement.remove(),this.frame&&this.frame instanceof jQuery&&this.frame.remove()}this.immediate=function(t,e,i){this.initialText=e,this.initialLabel=i},this.uponCreation=function(t){this.text=this.initialText,"string"==typeof this.initialLabel&&this.initialLabel.length?this.label=this.initialLabel:this.label="OK",this.jQueryElement=$("<div>").html(this.text),this.jQueryLabel=$("<a>").html(this.label),this.validations=[],this.frame=$("<div>").addClass("PennController-"+this.type+"-tooltip-frame"),this.jQueryElement.addClass("PennController-"+this.type+"-tooltip"),this.jQueryElement.css({background:"floralwhite",position:"relative"}),this.jQueryLabel.css({border:"dotted 1px gray",cursor:"pointer",position:"absolute",bottom:"2px",right:"2px"}),this.wasValidated=!1,this.disabled=!1,this.log=!1,this.validate=(()=>{this.disabled||(this.wasValidated=!0,this.validations.push(["Validate","Validate",Date.now(),"NULL"]),e.apply(this))}),t()},this.end=function(){if(this.jQueryElement&&this.jQueryElement instanceof jQuery&&e.apply(this),this.log)for(let e in this.validations)t.controllers.running.save(this.type,this.id,...this.validations[e])},this.value=function(){return this.wasValidated},this.actions={print:function(e,i){if(i&&i.hasOwnProperty("_element")&&i._element.jQueryElement instanceof jQuery&&(i=i._element.jQueryElement),this.jQueryElement.append(this.jQueryLabel),this.jQueryLabel.click(()=>{this.noClicks||this.validate()}),this.jQueryElement.css("text-align","left"),i instanceof jQuery){i.before(this.jQueryElement);let t=i.width(),s=i.height();this.jQueryElement.css({position:"absolute",display:"inline-block",overflow:"scroll","margin-top":s,"margin-left":t,"z-index":9999,padding:"1px"});let n=this.jQueryElement.width(),l=this.jQueryElement.height();"string"==typeof this.relativePosition&&(this.relativePosition.match(/top/i)?this.jQueryElement.css("margin-top",-1*l):this.relativePosition.match(/middle/i)&&this.jQueryElement.css("margin-top",.5*(s-l)),this.relativePosition.match(/left/i)?this.jQueryElement.css("margin-left",-1*n):this.relativePosition.match(/center/i)&&this.jQueryElement.css("margin-left",.5*(t-n))),this.frameParent&&i.before(this.frame.css({position:"absolute",display:"inline-block",width:t,height:s,border:this.frameParent,"z-index":100,"pointer-events":"none"}));let r=i.css("top"),a=i.css("left");"0px"==r&&(r="auto"),"0px"==a&&(a="auto"),this.jQueryElement.css({left:a,top:r}),this.frame.css({left:a,top:r}),this.jQueryElement.addClass("PennController-"+this.type),"none"!=this.jQueryLabel.css("display")&&this.jQueryElement.css("padding-bottom","20px"),e()}else this.jQueryElement.css({position:"relative",left:"",top:"",margin:0,display:"inline-block"}),"none"!=this.jQueryLabel.css("display")&&this.jQueryElement.css("padding-bottom","20px"),t.elements.standardCommands.actions.print.apply(this,[e,i])},remove:function(t){e.apply(this),t()},wait:function(t,e){if("first"==e&&this.wasValidated)t();else{let i=!1,s=this.validate;this.validate=(()=>{s.apply(this),i||(e instanceof Object&&e._runPromises&&e.success?e._runPromises().then(e=>{"success"==e&&(i=!0,t())}):(i=!0,t()))})}}},this.settings={disable:function(t){this.disabled=!0,this.jQueryElement.addClass("PennController-"+this.type+"-disabled"),t()},enable:function(t){this.disabled=!1,this.jQueryElement.removeClass("PennController-"+this.type+"-disabled"),t()},frame:function(t,e){"string"==typeof e&&e.length?this.frameParent=e:this.frameParent="dotted 1px gray",t()},key:function(e,i,s){Number(i)>0?t.controllers.running.safeBind($(document),"keydown",t=>{this.jQueryElement.parent().length&&t.which==i&&this.validate()}):"string"==typeof i&&t.controllers.running.safeBind($(document),"keydown",t=>{if(!this.jQueryElement.parent().length)return;let e={188:"44",109:"45",190:"46",191:"47",192:"96",220:"92",222:"39",221:"93",219:"91",173:"45",187:"61",186:"59",189:"45"},s={96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"},n=t.which;e.hasOwnProperty(n)&&(n=e[n]),!t.shiftKey&&n>=65&&n<=90?n=String.fromCharCode(n+32):t.shiftKey&&s.hasOwnProperty(n)&&(n=s[n]),i.toUpperCase().includes(String.fromCharCode(n).toUpperCase())&&this.validate()}),s&&(this.noClicks=!0,this.jQueryLabel.css("cursor",""),this.initialLabel||this.jQueryLabel.css("display","none")),e()},label:function(t,e){this.label=e,this.jQueryLabel.html(e),t()},log:function(t,...e){this.log=!0,t()},position:function(t,e){this.relativePosition=e,t()},text:function(t,e){this.text=e,this.jQueryElement.html(e),t()}}})}});