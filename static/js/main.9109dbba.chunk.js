(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);a(0);var n=a(4),c=a.n(n),l=(a(15),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))}),r=(a(16),a(6),a(1)),i=function(e){var t=e.name,a=e.callBack,n=e.disabled;return Object(r.jsx)("button",{disabled:n,className:"btn",onClick:function(){a()},children:t})},s=a(10),u=function(e){var t=e.titleValue,a=e.maxValue;e.minValue,Object(s.a)(e,["titleValue","maxValue","minValue"]);return Object(r.jsx)("h1",{style:+t>=a?{color:"red"}:{color:"black"},className:"counterTitle",children:t})},o=a(3),b=a(2),j={titleValue:"5",minValue:0,maxValue:10},d=function(e){Object.assign({},e);var t=Object(o.b)(),a=Object(o.c)((function(e){return e.counter})),n=a.titleValue,c=a.maxValue,l=a.minValue,s=!(+n<c),b=+n!==c,j=c<=l||c<0||l<0;return Object(r.jsxs)("div",{className:"counterWrapper",children:[Object(r.jsx)(u,{titleValue:n,maxValue:c,minValue:l}),Object(r.jsxs)("div",{className:"counterWrapperBtn",children:[Object(r.jsx)(i,{name:"inc",callBack:function(){t(function(e){return{type:"INCREMENT",payload:{titleValue:e}}}(+n))},disabled:s}),Object(r.jsx)(i,{name:"reset",callBack:function(){t({type:"RESET"})},disabled:b})]}),Object(r.jsxs)("div",{children:[c<=l||c<0||l<0?Object(r.jsx)("div",{className:"errorSpan",children:"data is incorrect"}):null,Object(r.jsx)("div",{className:c<=l||c<0||l<0?"errorClass":"normalClass",children:Object(r.jsxs)("div",{className:"formWrapper",children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsxs)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:[Object(r.jsx)("span",{style:{display:"inline-block",paddingRight:"10px",color:"#0008ff"},children:"Max:"}),Object(r.jsx)("input",{className:"input",onChange:function(e){t({type:"MAX_VALUE_CHANGE",payload:{newNumber:+e.currentTarget.value}}),t({type:"ERROR"})},value:c,type:"number"})]}),Object(r.jsxs)("label",{style:{display:"block"},children:[Object(r.jsx)("span",{style:{display:"inline-block",paddingRight:"10px",color:"#0008ff"},children:"Min:"}),Object(r.jsx)("input",{className:"input",onChange:function(e){t({type:"START_VALUE_CHANGE",payload:{newNumber:+e.currentTarget.value}}),t({type:"ERROR"})},value:l,type:"number"})]})]}),Object(r.jsx)(i,{name:"set",callBack:function(){t({type:"MIN-TITLE",payload:{newNumber:l}})},disabled:j})]})})]})]})};var p=function(){return Object(r.jsx)("div",{className:"appWrapper",children:Object(r.jsx)(d,{})})},m=a(8),O=Object(m.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return Object(b.a)(Object(b.a)({},e),{},{titleValue:+t.payload.titleValue+1+""});case"RESET":return Object(b.a)(Object(b.a)({},e),{},{titleValue:""+e.minValue});case"START_VALUE_CHANGE":return Object(b.a)(Object(b.a)({},e),{},{minValue:t.payload.newNumber});case"MAX_VALUE_CHANGE":return Object(b.a)(Object(b.a)({},e),{},{maxValue:t.payload.newNumber});case"MIN-TITLE":return Object(b.a)(Object(b.a)({},e),{},{titleValue:""+t.payload.newNumber});case"ERROR":return Object(b.a)(Object(b.a)({},e),{},{titleValue:"PRESS SET!!!"});default:return e}}}),x=Object(m.b)(O,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(t){return}}());x.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("app-state",t)}catch(a){}}({counter:x.getState().counter})})),c.a.render(Object(r.jsx)(o.a,{store:x,children:Object(r.jsx)(p,{})}),document.getElementById("root")),l()},6:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.9109dbba.chunk.js.map