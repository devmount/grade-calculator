(function(t){function e(e){for(var s,n,o=e[0],l=e[1],u=e[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container grid-lg"},[t._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-6 col-md-12"},[a("h3",{staticClass:"text-center"},[t._v("Konfiguration")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",[t._v("Punkte")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-6"},[a("div",{staticClass:"input-group",class:{"has-error":t.error.possible}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Möglich")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.possible,expression:"input.possible"}],staticClass:"form-input input-lg",attrs:{type:"number",step:"0.5",placeholder:"z.B. 20"},domProps:{value:t.input.possible},on:{input:function(e){e.target.composing||t.$set(t.input,"possible",e.target.value)}}})])]),a("div",{staticClass:"column col-12 mt-2"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Ergebnis")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.reached,expression:"input.reached"}],staticClass:"form-input input-lg",class:{"is-error":t.error.reached},attrs:{type:"number",step:"0.5",placeholder:"z.B. 18"},domProps:{value:t.input.reached},on:{input:function(e){e.target.composing||t.$set(t.input,"reached",e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.config.points,expression:"config.points"}],staticClass:"form-select select-lg",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.config,"points",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"r"}},[t._v("Erreichte Punkte")]),a("option",{attrs:{value:"e"}},[t._v("Fehler")])])])])]),a("h5",{staticClass:"mt-3"},[t._v("Maßstab")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-12 mb-2"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Voreinstellung")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.config.preset,expression:"config.preset"}],staticClass:"form-select select-lg",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.config,"preset",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Keine")]),a("option",{attrs:{value:"96,80,60,45,16"}},[t._v("96, 80, 60, 45, 16 — Allgemein")]),a("option",{attrs:{value:"99,95,90,85,80"}},[t._v("99, 95, 90, 85, 80 — Diktat")]),a("option",{attrs:{value:"95,90,85,80,75"}},[t._v("95, 90, 85, 80, 75 — 5% Schritte")]),a("option",{attrs:{value:"90,80,70,60,50"}},[t._v("90, 80, 70, 60, 50 — 10% Schritte")])])])]),a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1",class:{"has-error":t.error.grade1}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 1 ab")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.grade1,expression:"input.grade1"}],staticClass:"form-input input-lg",attrs:{type:"number",placeholder:"z.B. 10"},domProps:{value:t.input.grade1},on:{input:function(e){e.target.composing||t.$set(t.input,"grade1",e.target.value)}}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])]),a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1",class:{"has-error":t.error.grade2}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 2 ab")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.grade2,expression:"input.grade2"}],staticClass:"form-input input-lg",attrs:{type:"number",placeholder:"z.B. 10"},domProps:{value:t.input.grade2},on:{input:function(e){e.target.composing||t.$set(t.input,"grade2",e.target.value)}}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])]),a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1",class:{"has-error":t.error.grade3}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 3 ab")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.grade3,expression:"input.grade3"}],staticClass:"form-input input-lg",attrs:{type:"number",placeholder:"z.B. 10"},domProps:{value:t.input.grade3},on:{input:function(e){e.target.composing||t.$set(t.input,"grade3",e.target.value)}}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])]),a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1",class:{"has-error":t.error.grade4}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 4 ab")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.grade4,expression:"input.grade4"}],staticClass:"form-input input-lg",attrs:{type:"number",placeholder:"z.B. 10"},domProps:{value:t.input.grade4},on:{input:function(e){e.target.composing||t.$set(t.input,"grade4",e.target.value)}}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])]),a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1",class:{"has-error":t.error.grade5}},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 5 ab")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.grade5,expression:"input.grade5"}],staticClass:"form-input input-lg",attrs:{type:"number",placeholder:"z.B. 10"},domProps:{value:t.input.grade5},on:{input:function(e){e.target.composing||t.$set(t.input,"grade5",e.target.value)}}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])])]),a("div",{staticClass:"columns"},[t._m(1),a("div",{staticClass:"column col-4"},[a("button",{staticClass:"btn btn-primary float-right btn-lg",on:{click:t.calculateGrade}},[t._v("Start "),a("i",{staticClass:"icon icon-arrow-right"})])])])])])]),a("div",{staticClass:"column col-6 col-md-12"},[a("h3",{staticClass:"text-center"},[t._v("Ergebnis")]),t.result?a("div",{staticClass:"card output"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-2"},[a("h5",[t._v("Note")]),a("span",{staticClass:"label grade"},[t._v(t._s(t.grade))])]),a("div",{staticClass:"column col-10"},[a("h5",[t._v("Erbrachte Leistung")]),a("meter",{staticClass:"meter",attrs:{value:t.percent,optimum:t.input.grade1,min:"0",max:"100",low:t.input.grade5,high:t.input.grade2}},[t._v(t._s(t.percent)+"%")])]),a("div",{staticClass:"column col-12 mt-3"},[a("h5",[t._v("Punkteverteilung")]),a("div",{staticClass:"timeline"},t._l(t.scale,(function(e,s){return a("div",{key:s,staticClass:"timeline-item",attrs:{id:"timeline-example-1"}},[a("div",{staticClass:"timeline-left"},[a("a",{staticClass:"timeline-icon",class:{"icon-lg":s==t.grade},attrs:{href:"#timeline-example-1"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:s==t.grade,expression:"i == grade"}],staticClass:"icon icon-arrow-right"})])]),a("div",{staticClass:"timeline-content"},[a("span",{staticClass:"label mr-2"},[t._v(t._s(s))]),t._v(" "+t._s(e[0])+" - "+t._s(e[1])+"\n                    ")])])})),0)])])])]):a("div",{staticClass:"empty output"},[t._m(2),a("p",{staticClass:"empty-title h5"},[t._v("Noch kein Ergebnis verfügbar")]),t._m(3)])])]),t._m(4)]),t._m(5)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-12 text-center mb-2"},[a("h1",[t._v("Noten-Rechner")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column col-8"},[a("div",{staticClass:"input-group mb-1"},[a("span",{staticClass:"input-group-addon addon-lg"},[t._v("Note 6 ab")]),a("input",{staticClass:"form-input input-lg",attrs:{value:"0",type:"number",disabled:""}}),a("span",{staticClass:"input-group-addon addon-lg"},[t._v("%")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty-icon"},[a("i",{staticClass:"icon icon-3x icon-stop"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"empty-subtitle"},[t._v("Fülle das Formular aus und klicke auf "),a("span",{staticClass:"text-italic"},[t._v("Start")]),t._v(","),a("br"),t._v("um die Note zu berechnen.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns mt-3 pb-5"},[a("div",{staticClass:"column col-12"},[a("p",[t._v("Alle Angaben und Ergebnisse ohne Gewähr")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container grid-lg"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-12 text-center text-gray"},[a("p",[a("span",{staticClass:"d-block"},[t._v("Version 0.2.3")]),a("i",{staticClass:"icon icon-resize-horiz"}),t._v(" with love by "),a("a",{attrs:{href:"https://twitter.com/devmount",target:"_blank"}},[t._v("Andreas Müller")]),t._v(".\n            "),a("i",{staticClass:"icon icon-download ml-1"}),t._v(" on "),a("a",{attrs:{href:"https://github.com/devmount/grade-calculator",target:"_blank"}},[t._v("GitHub")]),t._v(".\n          ")])])])])])}],n=(a("28a5"),{name:"app",data:function(){return{input:{possible:"",reached:"",grade1:"",grade2:"",grade3:"",grade4:"",grade5:""},config:{points:"r",preset:""},error:{possible:!1,reached:!1,grade1:"",grade2:"",grade3:"",grade4:"",grade5:""},result:!1,grade:0,percent:0,scale:{1:[],2:[],3:[],4:[],5:[],6:[]}}},watch:{"config.preset":function(t){if(""!=t){var e=t.split(",");this.input.grade1=e[0],this.input.grade2=e[1],this.input.grade3=e[2],this.input.grade4=e[3],this.input.grade5=e[4]}else this.input.grade1="",this.input.grade2="",this.input.grade3="",this.input.grade4="",this.input.grade5=""}},methods:{calculateGrade:function(){if(this.error.possible=""===this.input.possible,this.error.reached=""===this.input.reached,this.error.grade1=""===this.input.grade1,this.error.grade2=""===this.input.grade2,this.error.grade3=""===this.input.grade3,this.error.grade4=""===this.input.grade4,this.error.grade5=""===this.input.grade5,!this.error.possible&&!this.error.reached&&!this.error.grade1&&!this.error.grade2&&!this.error.grade3&&!this.error.grade4&&!this.error.grade5){this.result=!0,this.percent="r"==this.config.points?(this.input.reached/this.input.possible*100).toFixed(2):(100*(1-this.input.reached/this.input.possible)).toFixed(2);var t=Math.round(this.percent);t<this.input.grade5?this.grade="6":t>=this.input.grade5&&t<this.input.grade4?this.grade="5":t>=this.input.grade4&&t<this.input.grade3?this.grade="4":t>=this.input.grade3&&t<this.input.grade2?this.grade="3":t>=this.input.grade2&&t<this.input.grade1?this.grade="2":t>=this.input.grade1&&(this.grade="1");for(var e=[this.input.grade1,this.input.grade2,this.input.grade3,this.input.grade4,this.input.grade5,0],a=1;a<=6;a++)1==a?this.scale[a].push(this.input.possible):this.scale[a].push(Math.round(this.input.possible*e[a-2]/100)-1),6==a?this.scale[a].push(0):this.scale[a].push(Math.round(this.input.possible*e[a-1]/100))}}}}),o=n,l=(a("5c0b"),a("2877")),u=Object(l["a"])(o,i,r,!1,null,null,null),c=u.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("e332"),i=a.n(s);i.a},e332:function(t,e,a){}});
//# sourceMappingURL=app.777b5634.js.map