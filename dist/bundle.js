(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.main {\n  display: flex;\n  gap: 5rem;\n}\n\n.opponent-board,\n.player-board {\n  display: flex;\n  border: solid 1px black;\n}\n\n.opponent-board div div,\n.player-board div div {\n  height: 50px;\n  width: 50px;\n  border: solid 1px black;\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],d=s[u]||0,l="".concat(u," ").concat(d);s[u]=d+1;var p=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),u=0;u<s.length;u++){var d=n(s[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),i=n.n(s),a=n(565),c=n.n(a),u=n(216),d=n.n(u),l=n(589),p=n.n(l),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class v{constructor(e){this.length=e,this.hits=0,this.location=[]}hit(){this.hits++}isSunk(){return this.length===this.hits}}class m{constructor(){this.rows=[];for(let e=0;e<10;e++){const t=[];for(let n=0;n<10;n++)t.push(n+10*e);this.rows.push(t)}this.cols=[];for(let e=0;e<10;e++){const t=[];for(let n=0;n<100;n+=10)t.push(n+e);this.cols.push(t)}this.occupiedSquares=[],this.placedShips=[],this.placementMode=1,this.hitAttacks=[],this.missedAttacks=[]}placeShip(e,t){if(!this.rows.some((n=>n.includes(e)&&n.includes(e+t))))return;const n=[];for(let r=e;r<e+t;r++)n.push(r);if(n.some((e=>this.occupiedSquares.includes(e))))return;const r=new v(t);r.location.push(...n),this.placedShips.push(r),this.occupiedSquares.push(...n)}receiveAttack(e){this.hitAttacks.includes(e)||this.missedAttacks.includes(e)||(this.occupiedSquares.includes(e)?(this.placedShips.find((t=>t.location.includes(e))).hit(),this.hitAttacks.push(e)):this.missedAttacks.push(e))}allSunk(){return this.placedShips.every((e=>e.isSunk()))}}class y{constructor(e){this.isAI=e,this.gameboard=new m}}class b{constructor(){}static renderBoard(e,t){t.rows.forEach((t=>{const n=document.createElement("div");t.forEach((e=>{const t=document.createElement("div");n.append(t)})),e.append(n)}))}}const g=document.querySelector(".opponent-board"),x=document.querySelector(".player-board"),S=new y(!0),w=new y(!1);console.log(g),b.renderBoard(g,S.gameboard),b.renderBoard(x,w.gameboard)})()})();