parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}var s=function(){function i(){t(this,i),this.lights=[document.querySelector(".yellowButton"),document.querySelector(".blueButton"),documentn.querySelector(".redButton"),document.querySelector(".greenButton")],this.timing=300,this.interval=[]}return e(i,[{key:"powerOnLights",value:function(){var t=this;this.toggleLights([0,1,2,3],0);var i=setTimeout(function(){t.toggleLights([0,1,2,3,0,1,2,3,0,1,2,3],150)},this.timing);this.interval.push(i)}},{key:"powerOffLights",value:function(){this.interval.forEach(function(t){clearInterval(t)}),this.toggleLights([0,1,2,3],10,!0)}},{key:"toggleIncorrectLights",value:function(){this.lights.forEach(function(t){t.classList.add("incorrect-background");setTimeout(function(){t.classList.remove("incorrect-background")},200)}),this.interval.push(void 0)}},{key:"toggleCorrectLights",value:function(){this.lights.forEach(function(t){t.classList.add("correct-background");setTimeout(function(){t.classList.remove("correct-background")},200)}),this.interval.push(void 0)}},{key:"toggleLights",value:function(t,i,e){var s=this,n=0;0===i?t.forEach(function(t,i){var e=s.lights[t],n=setTimeout(function(){e.classList.add("button-".concat(e.dataset.num))},0),o=setTimeout(function(){e.classList.remove("button-".concat(e.dataset.num))},s.timing);s.interval.push(n),s.interval.push(o)}):!0===e?t.forEach(function(t){s.lights[t].classList.remove("button-".concat(s.lights[t].dataset.num))}):t.forEach(function(t,e){var o=s.lights[t];console.log(t);var u=setTimeout(function(){o.classList.add("button-".concat(o.dataset.num))},n);n+=i;var r=setTimeout(function(){o.classList.remove("button-".concat(o.dataset.num))},n);n+=i,s.interval.push(u),s.interval.push(r)})}}]),i}(),n=new s,o=function(){function i(){t(this,i),this.count=0,this.on=!1,this.strict=!1,this.start=!1,this.level=1,this.win=!1,this.turn="ai",this.aiPicks=[],this.userPicks=[],this.displayCount=document.querySelector("#displayCount"),this.powerButton=document.querySelector("#powerButton"),this.power=this.power.bind(this),this.reset=this.reset.bind(this),this.interval=[]}return e(i,[{key:"power",value:function(){this.on=!this.on,this.on?(n.powerOnLights(),this.powerButton.style.backgroundColor="green",this.powerButton.textContent="On",this.countDown()):(this.interval.forEach(function(t){clearInterval(t)}),n.powerOffLights(),this.reset(),this.powerButton.style.backgroundColor="red",this.powerButton.textContent="Off")}},{key:"updateCount",value:function(t){this.displayCount.innerHTML=t}},{key:"countDown",value:function(){for(var t=this,i=3,e=0,s=function(){var s=i,n=void 0,o=void 0;n=0===i?setTimeout(function(){t.updateCount(s),o=setTimeout(function(){t.play()},1900)},e):setTimeout(function(){t.updateCount(s)},e),i--,e+=1e3,t.interval.push(n,o)};i>=0;)s()}},{key:"aiPicksColors",value:function(){for(var t=0;t<this.level;t++){if(5===this.level){console.log(this),this.winner();break}this.aiPicks.push(Math.round(3*Math.random()))}n.toggleLights(this.aiPicks,300)}},{key:"play",value:function(){this.start=!0,this.updateCount(0),this.aiPicksColors(),this.turn="user"}},{key:"winner",value:function(){var t=this;this.turn="ai",this.updateCount("win!");var i=setTimeout(function(){console.log(t),t.reset()},1e3);this.interval.push(i)}},{key:"reset",value:function(){var t=this;this.count=0,this.aiPicks=[],this.userPicks=[],this.win=!1,this.level=1,this.turn="ai",this.updateCount(this.count),this.interval.forEach(function(t){clearInterval(t)});var i=setTimeout(function(){t.play()},1500);this.interval.push(i)}},{key:"buttonClick",value:function(t){"ai"!==this.turn&&this.on&&(this.turn="ai",this.userPicks.push(t),this.checkClick(t))}},{key:"checkClick",value:function(t){var i,e=this;this.aiPicks[this.userPicks.length-1]===this.userPicks[this.userPicks.length-1]?(console.log("correct"),n.toggleCorrectLights(),this.aiPicks.length===this.userPicks.length?(this.count++,this.updateCount(this.count),this.level++,this.userPicks=[],i=setTimeout(function(){e.aiPicksColors(),e.turn="user"},500)):this.aiPicks.length>this.userPicks.length&&(this.turn="user")):(n.toggleIncorrectLights(),console.log(this.userPicks,this.aiPicks),this.userPicks.pop(),this.turn="user"),this.interval.push(i)}},{key:"hard",value:function(){console.log("so strict")}}]),i}();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.f6df21c2.js.map