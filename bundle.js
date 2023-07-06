(()=>{"use strict";var e={426:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(81),n=a.n(r),s=a(645),i=a.n(s)()(n());i.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  background-color: black;\n  color: white;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  position: relative;\n}\n\n.main {\n  display: flex;\n  gap: 5rem;\n}\n\nh2 {\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.opponent-board div,\n.player-board div {\n  display: flex;\n}\n\n.opponent-board div div,\n.player-board div div {\n  height: 50px;\n  width: 50px;\n  border: solid 1px gray;\n}\n\n.blank {\n  background-color: black;\n}\n\n.occupied {\n  background-color: white;\n}\n\n.missed {\n  background-color: blue;\n}\n\n.hit {\n  background-color: red;\n}\n\ndialog {\n  position: absolute;\n  top: 40%;\n  left: 44%;\n  text-align: center;\n  padding: 2rem;\n}\n\nh3 {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n\nbutton {\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  font-size: 1rem;\n}\n\nbutton:hover {\n  cursor: pointer;\n  color: black;\n  background-color: white;\n}",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",r=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),r&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),r&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,r,n,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,r=0;r<t.length;r++)if(t[r].identifier===e){a=r;break}return a}function r(e,r){for(var s={},i=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var h=a(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=n(p,r);r.byIndex=o,t.splice(o,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function n(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var s=r(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var o=a(s[i]);t[o].references--}for(var c=r(e,n),l=0;l<s.length;l++){var d=a(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{var t={};e.exports=function(e,a){var r=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,n&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var s=a.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,(()=>{var e=a(379),t=a.n(e),r=a(795),n=a.n(r),s=a(569),i=a.n(s),o=a(565),c=a.n(o),l=a(216),d=a.n(l),u=a(589),h=a.n(u),p=a(426),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;class f{constructor(e){this.length=e,this.hits=0,this.location=[]}hit(){this.hits++}isSunk(){return this.length===this.hits}}class y{constructor(){this.rows=[];for(let e=0;e<10;e++){const t=[];for(let a=0;a<10;a++)t.push(a+10*e);this.rows.push(t)}this.cols=[];for(let e=0;e<10;e++){const t=[];for(let a=0;a<100;a+=10)t.push(a+e);this.cols.push(t)}this.occupiedSquares=[],this.placedShips=[],this.placementMode=1,this.hitAttacks=[],this.missedAttacks=[]}placeShip(e,t){if(this.placementMode>0&&!this.rows.some((a=>a.includes(e)&&a.includes(e+t-1))))return;if(this.placementMode<0&&e-10+10*t>99)return;const a=[];if(this.placementMode>0)for(let r=e;r<e+t;r++)a.push(r);if(this.placementMode<0)for(let r=e;r<e+10*t;r+=10)a.push(r);if(a.some((e=>this.occupiedSquares.includes(e))))return;const r=new f(t);return r.location.push(...a),this.placedShips.push(r),this.occupiedSquares.push(...a),!0}receiveAttack(e){this.hitAttacks.includes(e)||this.missedAttacks.includes(e)||(this.occupiedSquares.includes(e)?(this.placedShips.find((t=>t.location.includes(e))).hit(),this.hitAttacks.push(e)):this.missedAttacks.push(e))}allSunk(){return this.placedShips.every((e=>e.isSunk()))}}class v{constructor(e){this.isAI=e,this.gameboard=new y,this.shipsToPlace=[{length:5,placed:!1,id:1},{length:4,placed:!1,id:2},{length:3,placed:!1,id:3},{length:3,placed:!1,id:4},{length:2,placed:!1,id:5},{length:2,placed:!1,id:6}],this.activeShip=this.shipsToPlace[0],this.placing=!0}}class g{constructor(){}static buildPlayerBoard(e,t){t.rows.forEach((t=>{const a=document.createElement("div");t.forEach((e=>{const t=document.createElement("div");t.setAttribute("data-player-square",e),a.append(t)})),e.append(a)}))}static buildOppBoard(e,t){t.rows.forEach((t=>{const a=document.createElement("div");t.forEach((e=>{const t=document.createElement("div");t.setAttribute("data-opp-square",e),a.append(t)})),e.append(a)}))}static renderPlayerBoard(e,t){this.clearSquares(e),e.forEach((e=>{t.occupiedSquares.includes(Number(e.dataset.playerSquare))&&e.classList.add("occupied")})),e.forEach((e=>{t.missedAttacks.includes(Number(e.dataset.playerSquare))&&e.classList.add("missed")})),e.forEach((e=>{t.hitAttacks.includes(Number(e.dataset.playerSquare))&&e.classList.add("hit")}))}static renderOppBoard(e,t){this.clearSquares(e),e.forEach((e=>{t.occupiedSquares.includes(Number(e.dataset.oppSquare))&&e.classList.add("occupied")})),e.forEach((e=>{t.missedAttacks.includes(Number(e.dataset.oppSquare))&&e.classList.add("missed")})),e.forEach((e=>{t.hitAttacks.includes(Number(e.dataset.oppSquare))&&e.classList.add("hit")}))}static clearSquares(e){e.forEach((e=>{e.className="",e.style.backgroundColor="",e.classList.add("blank")}))}static clearDiv(e){for(;e.firstChild;)e.removeChild(e.lastChild)}static placementHover(e,t,a,r){for(let r=e;r<e+a;r++)t[r]&&!t[r].classList.contains("occupied")&&(t[r].style.backgroundColor="green")}static placementHoverOut(e,t,a,r){for(let r=e;r<e+a;r++)t[r]&&!t[r].classList.contains("occupied")&&(t[r].style.backgroundColor="black")}}const b=document.querySelector(".opponent-board"),S=document.querySelector(".player-board"),q=document.querySelector("[data-game-over-modal]"),P=document.querySelector("[data-game-over-text]"),k=document.querySelector("[data-new-game-button]");class E{constructor(){this.aiPlayer=new v(!0),this.humanPlayer=new v(!1),g.buildOppBoard(b,this.aiPlayer.gameboard),g.buildPlayerBoard(S,this.humanPlayer.gameboard),this.oppSquares=Array.from(document.querySelectorAll("[data-opp-square]")),this.playerSquares=Array.from(document.querySelectorAll("[data-player-square]")),this.initPlacementPhase()}initPlacementPhase(){for(;this.aiPlayer.shipsToPlace.some((e=>!e.placed));)this.aiPlayer.shipsToPlace.forEach((e=>{e.placed||(e.placed=this.aiPlayer.gameboard.placeShip(Math.floor(Math.random()*(Math.floor(99)-0)),e.length)),this.aiPlayer.gameboard.placementMode*=-1}));this.activatePlacementSquares()}activateAttackSquares(){this.oppSquares.forEach((e=>{e.addEventListener("click",(e=>{this.playRound(e)}))}))}deactivateAttackSquares(){this.oppSquares.forEach((e=>{e.removeEventListener("click",(e=>{this.playRound(e)}))}))}activatePlacementSquares(){let e=0;this.playerSquares.forEach((t=>{t.addEventListener("click",(t=>{this.humanPlayer.placing&&this.humanPlayer.gameboard.placeShip(Number(t.target.dataset.playerSquare),this.humanPlayer.activeShip.length)&&(g.renderPlayerBoard(this.playerSquares,this.humanPlayer.gameboard),e++,this.humanPlayer.activeShip=this.humanPlayer.shipsToPlace[e],e>5&&(this.humanPlayer.placing=!1,this.activateAttackSquares()))}))})),this.playerSquares.forEach((e=>{e.addEventListener("mouseover",(e=>{this.humanPlayer.placing&&g.placementHover(Number(e.target.dataset.playerSquare),this.playerSquares,this.humanPlayer.activeShip.length,1)}))})),this.playerSquares.forEach((e=>{e.addEventListener("mouseout",(e=>{this.humanPlayer.placing&&g.placementHoverOut(Number(e.target.dataset.playerSquare),this.playerSquares,this.humanPlayer.activeShip.length,1)}))}))}playRound(e){if(this.aiPlayer.gameboard.hitAttacks.includes(Number(e.target.dataset.oppSquare))||this.aiPlayer.gameboard.missedAttacks.includes(Number(e.target.dataset.oppSquare)))return;this.aiPlayer.gameboard.receiveAttack(Number(e.target.dataset.oppSquare)),g.renderOppBoard(this.oppSquares,this.aiPlayer.gameboard),this.aiPlayer.gameboard.allSunk()&&this.gameOver("win");let t=null,a=[...this.humanPlayer.gameboard.hitAttacks,...this.humanPlayer.gameboard.missedAttacks];do{t=Math.floor(Math.random()*(Math.floor(99)-0))}while(a.includes(t));this.humanPlayer.gameboard.receiveAttack(t),g.renderPlayerBoard(this.playerSquares,this.humanPlayer.gameboard),this.humanPlayer.gameboard.allSunk()&&this.gameOver("lose")}gameOver(e){P.textContent="win"===e?"You won!":"You lost!",q.showModal(),k.addEventListener("click",(()=>{g.clearDiv(b),g.clearDiv(S),q.close(),new E}))}}new E})()})();