var P=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var k=(n,a,o)=>a in n?P(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,m=(n,a)=>{for(var o in a||(a={}))F.call(a,o)&&k(n,o,a[o]);if(S)for(var o of S(a))G.call(a,o)&&k(n,o,a[o]);return n},f=(n,a)=>B(n,D(a));import{h as H,j as I,R as e,k as J,r as N,n as x,q as z,A as c,av as R,aw as _,ax as A,ay as d,az as L,aA as p,aB as K,aC as V,aD as W,aE as X,aF as $,aG as Q,aH as U,z as Y,M as Z,E as ee,G as te,J as ae,K as le,N as ne,al as re,O as se}from"./vendor.442eedbd.js";import{b as C}from"./index.d1593548.js";import{F as v}from"./form-item.7e5ad589.js";import{c as oe,r as ce}from"./copy-clip.08e8f9de.js";import"./index.82b0ea61.js";const O={id:0,name:"",type:"",root_folder:"",status:"",index:0};function ue(n){switch(n){case"string":return"";case"bool":return!1;case"select":return"";case"number":return 0}}const ie=[{name:"name",label:"name",type:"string",required:!0},{name:"index",label:"index",type:"number",required:!0,description:"for sort"}],Ce=()=>{const n=H(),{t:a}=I(),[o,w]=e.useState([]),[b,T]=e.useState({}),[r,u]=e.useState(O),[y,g]=e.useState(!1),[j,h]=e.useState(!1),i=J(),q=()=>{C.get("drivers").then(t=>{const l=t.data;l.code!==200?n({title:a(l.message),status:"error",duration:3e3,isClosable:!0}):T(l.data)})},E=()=>{h(!0),C.get("accounts").then(t=>{h(!1);const l=t.data;l.code!==200?n({title:a(l.message),status:"error",duration:3e3,isClosable:!0}):w(l.data)})};return N.exports.useEffect(()=>{E(),q()},[]),e.createElement(x,{w:"full"},e.createElement(z,null,e.createElement(c,{onClick:()=>{u(O),g(!1),i.onOpen()}},a("Add")),e.createElement(c,{colorScheme:"orange",isLoading:j,onClick:()=>{E()}},a("Refresh"))),e.createElement(x,{overflowX:"auto"},e.createElement(R,{w:"full"},e.createElement(_,null,e.createElement(A,null,e.createElement(d,null,a("name")),e.createElement(d,null,a("type")),e.createElement(d,null,a("root_folder")),e.createElement(d,null,a("index")),e.createElement(d,null,a("status")),e.createElement(d,null,a("operation")))),e.createElement(L,null,o.map(t=>e.createElement(A,{key:t.id},e.createElement(p,null,t.name),e.createElement(p,null,t.type),e.createElement(p,null,t.root_folder),e.createElement(p,null,t.index),e.createElement(p,null,t.status),e.createElement(p,{whiteSpace:"nowrap"},e.createElement(c,{onClick:()=>{u(t),g(!0),i.onOpen()}},a("Edit")),e.createElement(c,{ml:1,colorScheme:"green",onClick:()=>{const l=JSON.stringify(t,(s,M)=>{if(s!=="id")return M},2);oe(l),n({title:a("Copied"),status:"success",duration:3e3,isClosable:!0})}},a("Copy")),e.createElement(K,null,e.createElement(V,null,e.createElement(c,{ml:"1",colorScheme:"red"},a("Delete"))),e.createElement(W,{whiteSpace:"normal"},e.createElement(X,null),e.createElement($,null),e.createElement(Q,null,a("Confirmation!")),e.createElement(U,null,e.createElement(Y,{mb:"1"},a('Are you sure you want to delete "{{name}}" ?',{name:t.name})),e.createElement(c,{colorScheme:"red",onClick:()=>{C.delete("account",{params:{id:t.id}}).then(l=>{const s=l.data;s.code!==200?n({title:a(s.message),status:"error",duration:3e3,isClosable:!0}):(n({title:a(s.message),status:"success",duration:3e3,isClosable:!0}),E())})}},a("Confirm"))))))))))),e.createElement(Z,{isOpen:i.isOpen,onClose:i.onClose,size:"6xl"},e.createElement(ee,null),e.createElement(te,null,e.createElement(ae,null,a(y?"Save":"Add")),e.createElement(le,null),e.createElement(ne,{pb:6},e.createElement(re,{minChildWidth:"250px",spacing:"2"},e.createElement(v,{type:"select",readOnly:y,required:!0,label:a("type"),value:r.type,values:Object.keys(b),onChange:t=>{const l=m({},r);l.type=t;for(const s of b[t])Object.keys(l).includes(s.name)||(l[s.name]=ue(s.type));u(l)}}),ie.map(t=>{var l;return e.createElement(v,{key:t.name,type:t.type,label:t.label,value:r[t.name],description:t.description,required:t.required,values:(l=t.values)==null?void 0:l.split(","),onChange:s=>{t.type!=="bool"?u(f(m({},r),{[t.name]:s})):u(f(m({},r),{[t.name]:!r[t.name]}))}})}),r.type&&b[r.type].map(t=>{var l;return e.createElement(v,{key:t.name,type:t.type,label:t.label,value:r[t.name],description:t.description,required:t.required,values:(l=t.values)==null?void 0:l.split(","),onChange:s=>{t.type!=="bool"?u(f(m({},r),{[t.name]:s})):u(f(m({},r),{[t.name]:!r[t.name]}))}})}))),e.createElement(se,null,e.createElement(c,{mr:3,colorScheme:"gray",onClick:i.onClose},a("Cancel")),e.createElement(c,{mr:3,colorScheme:"green",onClick:()=>{ce().then(t=>{try{const l=JSON.parse(t);r.id&&(l.id=r.id),u(l)}catch(l){n({title:a("Invalid JSON"),status:"error",duration:3e3,isClosable:!0})}})}},a("Paste")),e.createElement(c,{onClick:()=>{console.log(r),C.post(`account/${y?"save":"create"}`,r).then(t=>{const l=t.data;l.code!==200?(n({title:a(l.message),status:"error",duration:3e3,isClosable:!0}),y||(E(),i.onClose())):(n({title:a(l.message),status:"success",duration:3e3,isClosable:!0}),E(),i.onClose())})}},a("Save"))))))};export{Ce as default};