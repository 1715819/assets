import{j as c,J as u,h as m,r as d,R as e,C as p,V as f,D as g,E,I as h,A as C}from"./vendor.34ce6ff0.js";import{j as b,b as j}from"./index.e1680784.js";import"./index.efdc97f3.js";const x=()=>{const{t}=c(),l=u(),o=m(),[r,i]=d.exports.useState(""),n=()=>{b(r),j.post("login").then(s=>{const a=s.data;a.code===200?(o({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),l.push("settings/0")):o({title:t(a.message),status:"error",duration:3e3,isClosable:!0})})};return e.createElement(p,{p:"4",h:"full"},e.createElement(f,{w:{base:"full",md:"50%"}},e.createElement(g,{isRequired:!0},e.createElement(E,null,t("password")),e.createElement(h,{type:"password",value:r,onChange:s=>i(s.target.value),onKeyUp:s=>{s.key==="Enter"&&n()}})),e.createElement(C,{onClick:n},t("login"))))};export{x as default};