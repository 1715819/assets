import{s as i,t,u as o,v as n,w as F,x as f,y as c,z as u,A as p,C as d,D as m,E as k,H as B,J as g,K as E,L as b}from"./index.ef2c5285.js";import{a as y}from"./index.esm.98dfe7da.js";import{I as j}from"./index.2bdca551.js";const w={"dmg,ipa":d,"exe,msi":m,"zip,gz,rar,7z,tar,jar,xz":k,apk:y,db:B,md:g,epub:E,iso:b},_=(a,r)=>{if(a!==1){for(const[l,s]of Object.entries(w))if(l.split(",").includes(r.toLowerCase()))return s}switch(a){case 1:return j;case 2:return r==="doc"||r==="docx"?f:r==="xls"||r==="xlsx"?c:r==="ppt"||r==="pptx"?u:p;case 3:return F;case 4:return n;case 5:return o;case 6:return t;default:return i}};function e(a){var r,l,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a))for(r=0;r<a.length;r++)a[r]&&(l=e(a[r]))&&(s&&(s+=" "),s+=l);else for(r in a)a[r]&&(s&&(s+=" "),s+=r);return s}function z(){for(var a=0,r,l,s="";a<arguments.length;)(r=arguments[a++])&&(l=e(r))&&(s&&(s+=" "),s+=l);return s}var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{h as a,z as c,_ as g};