(function(e){function t(t){for(var n,o,a=t[0],h=t[1],l=t[2],u=0,p=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,a=1;a<i.length;a++){var h=i[a];0!==r[h]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=h;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),r=i.n(n);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pokedex",attrs:{id:"pokedex"}},e._l(e.pokedex,(function(t){return i("div",{key:t.name},[i("h2",[e._v(e._s(t.name))]),i("img",{attrs:{src:e.imageSrc+t.index+".png"}}),i("h3",[e._v("National Index #"+e._s(t.index))]),i("p",[e._v(e._s(t.description))]),i("ul",{staticClass:"stats"},[i("li",[i("strong",[e._v("Height:")]),e._v(" "+e._s(e._f("inchToFeet")(t.height)))]),i("li",[i("strong",[e._v("Weight:")]),e._v(" "+e._s(t.weight))])]),t.types.length<=1?i("h3",[e._v("Type:")]):i("h3",[e._v("Types:")]),i("ul",{staticClass:"poketype"},e._l(t.types,(function(t){return i("li",{key:t,class:t},[e._v(e._s(t))])})),0)])})),0)},s=[],o=(i("99af"),{imageSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/",pokedex:[{name:"Bulbasaur",index:"001",description:"Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",height:28,weight:15.2,types:["grass"]},{name:"Ivysaur",index:"002",description:"There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",height:39,weight:28.7,types:["grass","poison"]},{name:"Venusaur",index:"003",description:"There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",height:79,weight:220.5,types:["grass","poison"]},{name:"Charmander",index:"004",description:"The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",height:24,weight:18.7,types:["fire"]},{name:"Charmeleon",index:"005",description:"Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",height:43,weight:41.9,types:["fire"]},{name:"Charizard",index:"006",description:"Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",height:67,weight:199.5,types:["fire","flying"]},{name:"Squirtle",index:"007",description:"Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",height:20,weight:19.8,types:["water"]},{name:"Wartortle",index:"008",description:"Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",height:39,weight:49.6,types:["water"]},{name:"Blastoise",index:"009",description:"Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",height:63,weight:188.5,types:["water"]},{name:"Caterpie",index:"010",description:"Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",height:12,weight:6.4,types:["bug"]},{name:"Metapod",index:"011",description:"The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",height:28,weight:21.8,types:["bug"]},{name:"Butterfree",index:"012",description:"Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",height:43,weight:70.5,types:["bug","flying"]}]}),a={name:"App",data:function(){return o},filters:{inchToFeet:function(e){var t=Math.floor(e/12),i=e%12;return"".concat(t,"' ").concat(i,'"')}}},h=a,l=(i("034f"),i("2877")),c=Object(l["a"])(h,r,s,!1,null,null,null),u=c.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.42596e9f.js.map