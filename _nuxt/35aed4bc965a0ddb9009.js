(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("5c2f958a",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";var o=n(200);n.n(o).a},395:function(t,e,n){(e=n(35)(!1)).push([t.i,"\n.solve {\n\tpadding: 0.3em 0.8em;\n}\n.solve-headline {\n\theight: 22px;\n}\n.solve-times {\n\tfont-size: 10px;\n\tmargin-left: 1em;\n\tvertical-align: text-top;\n}\n.solve-time {\n\tposition: relative\n}\n.solve-time::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: calc(100% - 0.1em);\n\tleft: 0;\n\tright: 0;\n\theight: 2px;\n\tborder-radius: 3px;\n\topacity: 0.6;\n}\n.mode-cfop .solve-time.solve-time-unknown::after {\n\t\tbackground: #2196f3;\n}\n.solve-time.solve-time-f2l1::after, .solve-time.solve-time-f2l2::after, .solve-time.solve-time-f2l3::after, .solve-time.solve-time-f2l4::after {\n\tbackground: #3f51b5;\n}\n.solve-time.solve-time-oll::after {\n\tbackground: #ffeb3b;\n}\n.solve-time.solve-time-pll::after {\n\tbackground: #f44336;\n}\n.solve-time.solve-time-auf::after {\n\tbackground: #d0d0d0;\n}\n.mode-roux .solve-time.solve-time-unknown::after {\n\t\tbackground: #689f38;\n}\n.solve-time.solve-time-block2::after {\n\tbackground: #2e7d32;\n}\n.solve-time.solve-time-cll::after {\n\tbackground: #5d4037;\n}\n.solve-time.solve-time-lseo::after {\n\tbackground: #f57f17;\n}\n.solve-time.solve-time-lsep::after {\n\tbackground: #dd2c00;\n}\n.solve-date {\n\tfont-size: 10px;\n\tmargin-bottom: 0 !important;\n}\n.solve-chip {\n\theight: 14px;\n\tfont-size: 10px;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\tz-index: 0;\n}\n.solve-chip .v-chip__content {\n\t\tpadding: 0 6px;\n}\n",""]),t.exports=e},420:function(t,e,n){"use strict";n.r(e);n(65),n(34),n(25),n(15),n(49),n(24);var o=n(4),r=n(37),l=n(26),data=n(155),c=n(156),v=n(147),f=n(161);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m,h={data:function(){return{isLoading:!0,isDialOpen:!1,isSaveDialogOpen:!1,solves:[],rowsPerPageItems:[50],pagination:{rowsPerPage:50}}},computed:{solvesInfo:function(){return this.solves.map((function(t){var e=[];if(t.isError&&e.push({id:"error",text:"Error",color:"orange darken-4",textColor:"white"}),t._isXcross&&e.push({id:"xcross",text:"XCross",color:"#4A148C",textColor:Object(v.q)("#4A148C")}),null!==t._ollCase){var n=Object(l.a)(data.c[t._ollCase],1)[0];e.push({id:"ollcase",text:n,color:"OLL Skip"===n?"yellow accent-4":"yellow lighten-2",textColor:""})}if(null!==t._pllCase){var o=Object(l.a)(data.d[t._pllCase],1)[0];e.push({id:"pllcase",text:o,color:"PLL Skip"===o?"red accent-4":"red lighten-1",textColor:"white"})}if("number"==typeof t._cllCase){var c=Object(l.a)(data.a[t._cllCase],1)[0];e.push({id:"cllcase",text:c,color:"CLL Skip"===c?"brown darken-4":"brown darken-2",textColor:"white"})}var m=f.a.stagesData[t.mode||"cfop"].map((function(e){var n=e.id;return{id:n,time:Object(v.f)(t["_".concat(n,"Time")])}}));return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t,{infos:e,timeText:Object(v.f)(t.time),dateText:Object(v.d)(t.date),stages:m})}))}},mounted:(m=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.h)();case 2:this.solves=t.sent,this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),methods:{onExport:function(){Object(c.c)()},onDump:function(){Object(c.b)()}},head:function(){return{title:"History"}}},x=(n(394),n(18)),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[t.isLoading?n("v-progress-linear",{attrs:{indeterminate:!0}}):t._e(),t._v(" "),n("v-btn",{style:{bottom:"100px"},attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",small:"",color:"blue darken-2"},on:{click:function(e){t.isSaveDialogOpen=!0}}},[n("v-icon",[t._v("arrow_downward")])],1),t._v(" "),n("v-data-iterator",{attrs:{items:t.solvesInfo,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,"content-tag":"v-layout",row:"",wrap:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return n("v-flex",{attrs:{xs12:"",md6:"",lg4:""}},[n("v-card",{staticClass:"solve",attrs:{to:"/solves/"+e.item.id,nuxt:""}},[n("v-card-text",{staticClass:"pa-0 subheading text-xs-left solve-headline"},[n("strong",[t._v(t._s(e.item.timeText))]),t._v(" "),n("small",{staticClass:"solve-times",class:["mode-"+e.item.mode]},t._l(e.item.stages,(function(e,o){return n("span",{key:e.id},[0!==o?n("span",[t._v(" / ")]):t._e(),t._v(" "),n("span",{staticClass:"solve-time",class:["solve-time-"+e.id]},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.time)+"\n\t\t\t\t\t\t\t")])])})),0)]),t._v(" "),n("v-layout",{staticClass:"solve-date pa-0"},[t._l(e.item.infos,(function(e){return n("v-chip",{key:e.id,staticClass:"solve-chip",style:{backgroundColor:e.color.startsWith("#")?e.color:"",color:e.textColor.startsWith("#")?e.textColor:""},attrs:{color:e.color.startsWith("#")?null:e.color,"text-color":e.textColor.startsWith("#")?null:e.textColor,small:""}},[t._v("\n\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t")])})),t._v(" "),n("v-spacer"),t._v(" "),n("div",[t._v(t._s(e.item.dateText))])],2)],1)],1)}}])}),t._v(" "),n("v-dialog",{attrs:{"max-width":"600"},model:{value:t.isSaveDialogOpen,callback:function(e){t.isSaveDialogOpen=e},expression:"isSaveDialogOpen"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Save history as a file")]),t._v(" "),n("v-card-text",[n("strong",[t._v("Export")]),t._v(" file includes "),n("i",[t._v("time")]),t._v(", "),n("i",[t._v("scramble")]),t._v(" and "),n("i",[t._v("date")]),t._v(" of each solves, delimited by semicolon.\n\t\t\t\tThis format is compatible with "),n("strong",[t._v("TwistyTimer")]),t._v(" and few other apps.\n\t\t\t")]),t._v(" "),n("v-card-text",[n("strong",[t._v("Dump")]),t._v(" file is a JSON file which includes all information of your solves.\n\t\t\t\tYou can programatically process this file or use this as a backup of history.\n\t\t\t\tIn near future this timer will be able to import this file into history tab.\n\t\t\t")]),t._v(" "),n("v-card-actions",{style:{flexWrap:"wrap",justifyContent:"flex-end"}},[n("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:t.onExport}},[t._v("\n\t\t\t\t\tExport (for other timers)\n\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:t.onDump}},[t._v("\n\t\t\t\t\tDump (full data)\n\t\t\t\t")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);