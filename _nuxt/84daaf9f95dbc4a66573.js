(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{201:function(t,e,n){var content=n(397);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("14363442",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";var r=n(201);n.n(r).a},397:function(t,e,n){(e=n(35)(!1)).push([t.i,"\ntr {\n\theight: 32px !important;\n}\ntd, th {\n\tpadding: 0 0 0 8px !important;\n\theight: 32px !important\n}\ntd:last-child, th:last-child {\n\tpadding: 0 8px !important;\n}\n.row-header {\n\twidth: 100px;\n\twhite-space: nowrap;\n}\n",""]),t.exports=e},422:function(t,e,n){"use strict";n.r(e);n(150),n(50),n(24);var r,c=n(4),o=n(26),l=n(155),d=n(147),x=n(156),v={data:function(){return{headers:[{text:"Case",align:"left",value:"index"},{text:"Count",align:"right",value:"count"},{text:"Time",align:"right",value:"averageTime"},{text:"Insp.",align:"right",value:"averageInspection"},{text:"Exec.",align:"right",value:"averageExecution"}],stats:[],cases:l.a.map((function(t){var e=Object(o.a)(t,2);return{name:e[0],id:e[1],count:0,averageTime:0,averageInspection:0,averageExecution:0}}))}},computed:{},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.d)();case 2:this.stats=t.sent,this.cases=this.cases.map((function(t,n){var r=t.name,c=t.id,o=e.stats.find((function(s){return s.id===n})),l=o?o.times/o.count:1/0,x=o?o.inspectionTimes/o.count:1/0,v=o?o.executionTimes/o.count:1/0;return{index:n,name:r,id:c,count:o?o.count:0,averageTime:l,averageTimeText:Object(d.f)(l),averageInspection:x,averageInspectionText:Object(d.f)(x),averageExecution:v,averageExecutionText:Object(d.f)(v)}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),head:function(){return{title:"CLL Stats"}}},h=(n(396),n(18)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cases,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("th",{staticClass:"row-header text-xs-left"},[null===e.item.id?n("span",[t._v(t._s(e.item.name))]):n("a",{attrs:{href:"http://algdb.net/puzzle/333/cmll/"+e.item.id,target:"_blank",rel:"noopener"}},[t._v("\n\t\t\t\t\t"+t._s(e.item.name)+"\n\t\t\t\t")])]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageTimeText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageInspectionText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageExecutionText))])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);