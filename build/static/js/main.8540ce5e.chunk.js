(this["webpackJsonpbird-watch-frontend"]=this["webpackJsonpbird-watch-frontend"]||[]).push([[0],{25:function(e,t,n){e.exports=n(49)},30:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),l=n.n(o),c=(n(30),n(2)),u=n(19),i=n(20),s=n(5),m=n(6),d=n.n(m),b=function(){return d.a.get("/").then((function(e){return e.data}))},h=function(e){return d.a.post("/",e).then((function(e){return e.data}))};function p(){var e=Object(u.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return p=function(){return e},e}var E=i.a.div(p());function f(e){var t=e.columns,n=e.data,a=Object(s.b)({columns:t,data:n},s.a),o=a.getTableProps,l=a.getTableBodyProps,c=a.headerGroups,u=a.rows,i=a.prepareRow,m=u.slice(0,20);return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",o(),r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),r.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),r.a.createElement("tbody",l(),m.map((function(e,t){return i(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("br",null),r.a.createElement("div",null,"Showing the first 20 results of ",u.length," rows"))}var g=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),u=Object(c.a)(l,2),i=u[0],s=u[1],m=Object(a.useState)(""),d=Object(c.a)(m,2),p=d[0],g=d[1],v=Object(a.useState)(""),w=Object(c.a)(v,2),y=w[0],O=w[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var j=r.a.useMemo((function(){return[{Header:"Name",accessor:"name"},{Header:"Rarity",accessor:"rarity"},{Header:"Notes",accessor:"notes"},{Header:"Date",accessor:"timestamp"}]}),[]),S=r.a.useMemo((function(){return n}),[n]);return r.a.createElement(E,null,r.a.createElement("pre",null,r.a.createElement("code",null,"Clicking on the header sorts the column in ascending or decending order !")),r.a.createElement("h1",null,"Bird Observation Table"),r.a.createElement(f,{columns:j,data:S}),r.a.createElement("h2",null,"Add new observation"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:i,rarity:p,notes:y,timestamp:new Date};h(t).then((function(e){o(n.concat(e)),s(""),g(""),O("")})).catch((function(e){s(""),g(""),O("")}))}},r.a.createElement("div",null,r.a.createElement("h3",null,"Name"),r.a.createElement("input",{value:i,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("h3",null,"Rarity"),r.a.createElement("select",{name:"rarity",value:p,onChange:function(e){g(e.target.value)}},r.a.createElement("option",{value:"common"},"Common"),r.a.createElement("option",{value:"rare"},"Rare"),r.a.createElement("option",{value:"extremely rare"},"Extremely Rare"))),r.a.createElement("h3",null,"Notes"),r.a.createElement("textarea",{rows:"5",cols:"25",value:y,onChange:function(e){O(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8540ce5e.chunk.js.map