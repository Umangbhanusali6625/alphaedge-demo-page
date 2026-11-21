import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-D_rUT4EX.js";import{f as r,l as i,o as a,u as o}from"./uop-tracker-C3JN7-zF.js";import{A as s,B as c,D as l,E as u,F as d,I as f,L as p,N as m,O as h,P as ee,R as g,T as _,V as te,_t as ne,at as re,c as v,ct as y,d as b,et as x,f as S,ft as C,gt as w,ht as ie,it as ae,j as T,k as E,l as D,lt as oe,m as se,mt as O,nt as k,o as A,ot as ce,p as j,r as le,rt as ue,s as de,st as M,t as fe,tt as pe,u as N,ut as me,vt as he,w as ge}from"./expected-zones-B1w36NYU.js?v=2";var P=e(t(),1),F=n(),_e={oi:`OI`,oiChange:`OI Change`,volume:`Volume`},I=e=>typeof e==`number`&&Number.isFinite(e)?e.toLocaleString(`en-IN`,{maximumFractionDigits:2}):`—`;function L({index:e,expiry:t,mode:n,range:r,seconds:i}){let[a,o]=(0,P.useState)(e===`NIFTY`?75:85),[s,c]=(0,P.useState)(null),[l,u]=(0,P.useState)(``);return(0,P.useEffect)(()=>o(e===`NIFTY`?75:85),[e]),(0,P.useEffect)(()=>{let o=!0,s=!1,l=new AbortController;c(null);async function d(){if(!(!t||s||document.visibilityState===`hidden`)){s=!0;try{let s=new URLSearchParams({index:e,expiry:t,mode:n,range:r,threshold:String(a),seconds:String(i)}),d=await fetch(`/api/pro-strength?`+s,{cache:`no-store`,signal:l.signal}),f=await d.json();if(!d.ok)throw Error(f.error||`Strength data unavailable`);o&&(c(f),u(``))}catch(e){o&&!l.signal.aborted&&u(e instanceof Error?e.message:`Strength unavailable`)}finally{s=!1}}}d();let f=setInterval(()=>void d(),1e4),p=()=>void d();return document.addEventListener(`visibilitychange`,p),()=>{o=!1,l.abort(),clearInterval(f),document.removeEventListener(`visibilitychange`,p)}},[e,t,n,r,a,i]),(0,F.jsxs)(`section`,{className:`strength-board`,children:[(0,F.jsxs)(`header`,{children:[(0,F.jsx)(`b`,{children:`STRONG · WTT / WTB · STT / STB`}),(0,F.jsxs)(`label`,{children:[`Dominance threshold `,(0,F.jsxs)(`select`,{value:a,onChange:e=>o(Number(e.target.value)),children:[(0,F.jsx)(`option`,{value:75,children:`75%`}),(0,F.jsx)(`option`,{value:85,children:`85%`})]})]})]}),(0,F.jsxs)(`small`,{children:[`Current chain · `,n===`ai`?`AI Beta`:`Normal`,` · `,r,` range · `,s?.at?new Date(s.at).toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`}):`—`,` IST`]}),l&&(0,F.jsx)(`p`,{role:`alert`,children:l}),s?.available===!1&&(0,F.jsx)(`p`,{children:s.message}),(0,F.jsxs)(`section`,{className:`tot-current tone-`+(s?.tot?.tone||`pending`),"aria-label":`AI Assistant current scenario`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`small`,{children:`AI ASSISTANT : CURRENT SCENARIO`}),(0,F.jsx)(`strong`,{children:s?.tot?.label||`Awaiting classification`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`span`,{children:[`Resistance: `,(0,F.jsx)(`b`,{children:s?.tot?.resistance||`—`})]}),(0,F.jsxs)(`span`,{children:[`Support: `,(0,F.jsx)(`b`,{children:s?.tot?.support||`—`})]})]}),(0,F.jsx)(`small`,{children:s?.tot?.message||`Waiting for matching pillar data.`})]}),s?.tot&&(0,F.jsxs)(`details`,{className:`tot-matrix`,children:[(0,F.jsxs)(`summary`,{children:[`Scenario matrix · `,s.tot.confirmed?`current combination highlighted`:`awaiting confirmed states`]}),(0,F.jsxs)(`table`,{children:[(0,F.jsx)(`caption`,{children:`Resistance ↓ · Support →`}),(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Resistance / Support`}),s.tot.columns.map(e=>(0,F.jsx)(`th`,{children:e},e))]})}),(0,F.jsx)(`tbody`,{children:s.tot.rows.map(e=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:e.resistance}),e.cells.map(e=>(0,F.jsxs)(`td`,{className:e.active?`tot-selected`:``,"aria-current":e.active?`true`:void 0,children:[e.active?`● `:``,e.label]},e.support))]},e.resistance))})]})]}),(0,F.jsx)(`div`,{className:`strength-sides`,children:[`CE`,`PE`].map(e=>{let t=s?.sides?.[e];return(0,F.jsxs)(`article`,{children:[(0,F.jsxs)(`h3`,{children:[e===`CE`?`CE · Resistance`:`PE · Support`,` `,(0,F.jsx)(`b`,{className:`strength-tag status-`+String(t?.summary||``).toLowerCase(),children:t?.summary||`Awaiting data`})]}),(0,F.jsxs)(`table`,{children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Pillar`}),(0,F.jsx)(`th`,{children:`Max 1`}),(0,F.jsx)(`th`,{children:`Max 2`}),(0,F.jsx)(`th`,{children:`Relative %`}),(0,F.jsx)(`th`,{children:`Status`}),(0,F.jsx)(`th`,{children:`Recorded shift`})]})}),(0,F.jsx)(`tbody`,{children:[`oi`,`oiChange`,`volume`].map(e=>{let n=t?.pillars?.[e],r=t?.shift?.metrics?.[e],i=n?.state===`strong`?`Strong`:n?.state===`tied`?`Co-leading`:n?.state===`weak`?n.direction:`Incomplete / missing`;return(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:_e[e]}),(0,F.jsxs)(`td`,{children:[I(n?.max1?.strike),(0,F.jsx)(`small`,{children:I(n?.max1?.value)})]}),(0,F.jsxs)(`td`,{children:[I(n?.max2?.strike),(0,F.jsx)(`small`,{children:I(n?.max2?.value)})]}),(0,F.jsxs)(`td`,{children:[I(n?.ratio),`%`]}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`b`,{className:`strength-tag status-`+String(i).toLowerCase(),children:i})}),(0,F.jsxs)(`td`,{children:[r?.state===`STT`?`STT ↑`:r?.state===`STB`?`STB ↓`:r?.state===`holding`?`Holding`:`Unconfirmed`,r?.from!=null&&(0,F.jsxs)(`small`,{children:[I(r.from),` → `,I(r.to)]})]})]},e)})})]}),(0,F.jsxs)(`small`,{children:[t?.shift?.label||`Shift history not yet available`,` · compare `,i,`s`]})]},e)})}),(0,F.jsxs)(`details`,{children:[(0,F.jsx)(`summary`,{children:`How to read these labels`}),(0,F.jsx)(`p`,{children:`Strong identifies a dominant pillar at the selected threshold. WTT means weakness towards top; WTB means weakness towards bottom. Equal leaders stay Co-leading.`}),(0,F.jsx)(`p`,{children:`The Resistance / Support summary follows the supplied workbook. Each of the three pillars is also shown independently. STT/STB requires all three Max 1 strikes to shift in the same direction over the selected recorded interval. Gaps, mixed shifts and missing history stay unconfirmed.`}),(0,F.jsx)(`p`,{children:`Scenario follows the supplied Strong / STT / STB table. WTT/WTB alone is not treated as a confirmed STT/STB. Negative OI Change is not a positive buildup candidate.`})]})]})}var R=[`oi`,`oiChange`,`volume`];function ve(e,t){return e.map(e=>({...e,normal:e.normal.metrics[t],ai:e.ai.metrics[t]}))}function z(e,t,n,r,i,a){return u(a,e?.[t]?.ranges?.[n]?.leaders?.[r]?.[i]?.[0]?.value)}function B(e,t,n,r,i=60){let a=e.at(-1),o=a&&[...e].reverse().find(e=>e.at<=a.at-i*1e3&&e.at>=a.at-i*1e3-2e4),s={kind:`waiting`,label:`Building comparable history`,directions:[]};if(!a||!o)return s;let c=e.filter(e=>e.at>=o.at),l=JSON.stringify(a?.[t]?.ranges?.[n]?.strikes);if(c.some((e,r)=>JSON.stringify(e?.[t]?.ranges?.[n]?.strikes)!==l||r>0&&e.at-c[r-1].at>45e3||R.some(n=>e[t].metrics[n].signature!==a[t].metrics[n].signature)))return{...s,label:`Feed gap / strike window changed`};let u=R.map(e=>{let i=c.map(i=>z(i,t,n,r,e,i.contract?.[t]?.[e]));if(i.some(e=>e===null))return`missing`;let a=i.at(-1)-i[0];return Math.abs(a)<.5?`flat`:a>0?`up`:`down`});if(u.includes(`missing`))return{...s,directions:u};let d=u.every(e=>e===`up`),f=u.every(e=>e===`down`);return{kind:d?`strength`:f?`weakness`:`mixed`,label:d?`Strength building`:f?`Weakness`:u.every(e=>e===`flat`)?`Flat / holding`:`Mixed pillars`,directions:u}}var V={oi:`OI`,oiChange:`OI Change`,volume:`Volume`},H=()=>new Date(Date.now()+198e5).toISOString().slice(0,10),U=e=>new Date(e).toLocaleTimeString(`en-IN`,{timeZone:`Asia/Kolkata`,hour12:!1}),W=e=>typeof e==`number`&&Number.isFinite(e)?e.toLocaleString(`en-IN`,{maximumFractionDigits:2}):`—`;function ye({points:e,lines:t,step:n=!1,percent:r=!1,pivots:i=[],crosses:a=[]}){if(!e.length)return(0,F.jsx)(`p`,{className:`pillar-empty`,children:`No recorded observations for this date. Recording starts with the next received session.`});if(!t.some(e=>e.values.some(e=>typeof e==`number`&&Number.isFinite(e))))return(0,F.jsx)(`p`,{className:`pillar-empty`,children:`No comparable values for this mode / strike yet. Missing AI weights or unrecorded contracts stay blank.`});let o=e[0].at,s=e.at(-1).at,c=t.flatMap(e=>e.values).filter(e=>typeof e==`number`&&Number.isFinite(e)),l=n&&c.length?Math.min(...c):r?Math.min(0,...c):Math.min(0,...c,...i.map(e=>e.value)),u=r?Math.max(100,...c):Math.max(0,...c,...i.map(e=>e.value)),d=u-l||1,f=l-d*.06,p=u+d*.06,m=e=>45+(e-o)/Math.max(1,s-o)*795,h=e=>245-(e-f)/(p-f)*215,ee=e=>r?W(e)+`%`:n?W(e):Math.abs(e)>=1e6?W(e/1e6)+`M`:W(e);return(0,F.jsxs)(`div`,{className:`pillar-graph`,children:[(0,F.jsx)(`div`,{className:`pillar-legend`,children:t.map(e=>(0,F.jsxs)(`span`,{style:{color:e.color},children:[e.name,` `,(0,F.jsx)(`b`,{children:ee(e.values.at(-1)??NaN)})]},e.name))}),(0,F.jsxs)(`svg`,{viewBox:`0 0 960 285`,role:`img`,"aria-label":t.map(e=>e.name).join(`, `),children:[[0,1,2,3,4].map(e=>{let t=f+(p-f)*e/4;return(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`line`,{x1:`45`,x2:`840`,y1:h(t),y2:h(t),stroke:`#254055`}),(0,F.jsx)(`text`,{x:`850`,y:h(t)+4,fill:`#aac6d8`,fontSize:`11`,children:ee(t)})]},e)}),(0,F.jsx)(`line`,{x1:`45`,x2:`840`,y1:h(0),y2:h(0),stroke:`#8299ac`,strokeDasharray:`4 4`}),t.map(t=>{let r=``,i=null;for(let a=0;a<e.length;a++){let o=e[a],s=t.values[a],c=!i||o.at-i.at>45e3||o.signature!==i.signature;if(s===null||!Number.isFinite(s)){i=null;continue}r+=(c?` M`:n?` H`:` L`)+m(o.at).toFixed(2)+(c||!n?`,`+h(s).toFixed(2):` V`+h(s).toFixed(2)),i=o}return(0,F.jsx)(`path`,{d:r,fill:`none`,stroke:t.color,strokeWidth:`2`},t.name)}),e.length===1&&t.filter(e=>e.values[0]!==null).map(t=>(0,F.jsx)(`circle`,{cx:m(e[0].at),cy:h(t.values[0]),r:`3`,fill:t.color},t.name)),i.map((e,t)=>(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`line`,{x1:m(e.at),x2:`840`,y1:h(e.value),y2:h(e.value),stroke:`white`,strokeDasharray:e.field===`ce`?`7 3`:`3 3`}),(0,F.jsxs)(`text`,{x:Math.min(650,m(e.at)+3),y:h(e.value)-5,fill:`white`,fontSize:`9`,children:[e.field.toUpperCase(),` DIVERSION`,e.crossedAt?` · CROSSED`:``]})]},t)),a.slice(-5).map((e,t)=>(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`line`,{x1:m(e.at),x2:m(e.at),y1:`30`,y2:`245`,stroke:e.direction===`up`?`#61e6a0`:`#ff8798`,strokeDasharray:`3 5`}),(0,F.jsxs)(`text`,{x:Math.min(650,m(e.at)+4),y:40+t*12,fill:`#d2e8f7`,fontSize:`9`,children:[e.direction===`up`?`↑`:`↓`,` `,U(e.at),` · Spot `,W(e.spot)]})]},t)),[0,.5,1].map(e=>(0,F.jsx)(`text`,{x:45+795*e,y:`274`,textAnchor:e===0?`start`:e===1?`end`:`middle`,fill:`#aac6d8`,fontSize:`10`,children:U(o+(s-o)*e)},e))]})]})}function be({data:e,metricRows:t,index:n,range:r,aiMode:i}){let[a,o]=(0,P.useState)(`oiChange`),[s,c]=(0,P.useState)(`PE`),[l,u]=(0,P.useState)(0),[f,m]=(0,P.useState)(``),[h,ee]=(0,P.useState)(60),[_,te]=(0,P.useState)(null),[ne,re]=(0,P.useState)(``),v=e?.expiry||``,y=new Date((e?.receivedAtMs||Date.now())+198e5).toISOString().slice(0,10),b=f||y,x=i?`ai`:`normal`,S=r,C=(0,P.useMemo)(()=>p((e?.rows||[]).map(e=>e.strike),d(r===`open`?e?.spot?.ohlc?.open:e?.spot?.last_price),r),[e,r]),w=(0,P.useMemo)(()=>g(t.filter(e=>C.includes(e.strike))),[t,C]),ie=[...new Set((e?.rows||[]).filter(e=>e.type===s).map(e=>e.strike))].sort((e,t)=>t-e),ae=w[s].oi[1]?.strike||w[s].oi[0]?.strike||ie[0]||0,T=ie.includes(l)?l:ae;(0,P.useEffect)(()=>{u(0),m(``)},[n,v]),(0,P.useEffect)(()=>{let e=!0,t=!1,r=new AbortController;te(null),re(``);async function i(){if(!(t||!v||!T||document.visibilityState===`hidden`)){t=!0;try{let t=new URLSearchParams({index:n,expiry:v,day:b,side:s,strike:String(T)}),i=await fetch(`/api/pro-pillars?`+t,{cache:`no-store`,signal:r.signal}),a=await i.json();if(!i.ok)throw Error(a.error||`History unavailable`);e&&(te(a),re(``))}catch(t){e&&!r.signal.aborted&&re(t instanceof Error?t.message:`History unavailable`)}finally{t=!1}}}i();let a=setInterval(()=>void i(),15e3),o=()=>void i();return document.addEventListener(`visibilitychange`,o),()=>{e=!1,r.abort(),clearInterval(a),document.removeEventListener(`visibilitychange`,o)}},[n,v,b,s,T]);let E=_?.points||[],D=(0,P.useMemo)(()=>ve(E,a),[_,a]),oe=(0,P.useMemo)(()=>se(D,x,h),[D,x,h]),O=(0,P.useMemo)(()=>j(D,x,h,!1),[D,x,h]),k=(0,P.useMemo)(()=>B(E,x,S,s,h),[_,x,S,s,h]),A=D.at(-1),ce=D.map(e=>({...e,signature:e[x].signature})),le=E.map(e=>({...e,signature:JSON.stringify(e[x].ranges[S].strikes)})),ue=E.map(e=>({...e,signature:JSON.stringify(e[x].ranges[S].strikes)}));function de(){let e=[`Time_IST`,`Index`,`Expiry`,`Mode`,`Range`,`Side`,`Strike`,`Spot`,...R.flatMap(e=>[V[e]+`_raw`,V[e]+`_percent`,V[e]+`_CE_total`,V[e]+`_PE_total`,V[e]+`_PE_minus_CE`,V[e]+`_CE_Max1`,V[e]+`_CE_Max2`,V[e]+`_PE_Max1`,V[e]+`_PE_Max2`])],t=E.map(e=>[new Date(e.at+198e5).toISOString().replace(`T`,` `).slice(0,19),n,v,x,S,s,T,e.spot,...R.flatMap(t=>[e.contract?.[x]?.[t],z(e,x,S,s,t,e.contract?.[x]?.[t]),e[x].metrics[t].ce,e[x].metrics[t].pe,e[x].metrics[t].difference,...[`CE`,`PE`].flatMap(n=>[e[x].ranges[S].leaders[n][t][0]?.strike,e[x].ranges[S].leaders[n][t][1]?.strike])])]),r=e=>`"`+String(e??``).replaceAll(`"`,`""`)+`"`,i=URL.createObjectURL(new Blob([`﻿`+[e,...t].map(e=>e.map(r).join(`,`)).join(`\r
`)],{type:`text/csv;charset=utf-8`})),a=document.createElement(`a`);a.href=i,a.download=`PROACTIVE-${n}-${v}-${b}-${s}-${T}.csv`,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function M(e,t){c(e),u(t)}return(0,F.jsxs)(`section`,{className:`proactive-analysis`,children:[(0,F.jsxs)(`header`,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`b`,{children:`PROACTIVE · THREE PILLARS`}),(0,F.jsxs)(`small`,{children:[i?`AI Beta`:`Normal`,` · `,n,` · `,v,` · `,S===`all`?`All strikes`:S===`open`?`Open ±7`:`LTP ±7`,` ranks`]})]}),(0,F.jsxs)(`label`,{children:[`History date`,(0,F.jsx)(`input`,{type:`date`,value:b,max:H(),onChange:e=>m(e.target.value)})]}),(0,F.jsxs)(`label`,{children:[`Compare`,(0,F.jsx)(`select`,{value:h,onChange:e=>ee(Number(e.target.value)),children:[30,60,180,900].map(e=>(0,F.jsx)(`option`,{value:e,children:e<60?e+` sec`:e/60+` min`},e))})]})]}),(0,F.jsx)(L,{index:n,expiry:v,mode:x,range:S,seconds:h}),(0,F.jsxs)(`small`,{children:[`Current chain ranks · `,y,` · selected range`]}),(0,F.jsx)(`div`,{className:`pillar-cards`,children:[`CE`,`PE`].map(e=>{let n=new Map;for(let r of R){let i=w[e][r][0];if(i&&i.value>0)for(let a of t.filter(t=>t.type===e&&C.includes(t.strike)))(r===`oiChange`?a.oiChange:a.quote?.[r])===i.value&&n.set(a.strike,[...n.get(a.strike)||[],V[r]])}let r=[...n].filter(([,e])=>e.length>=2);return(0,F.jsxs)(`div`,{className:`pillar-card side-`+e.toLowerCase(),children:[(0,F.jsx)(`h3`,{children:e===`CE`?`CE · RESISTANCE`:`PE · SUPPORT`}),r.length?r.map(([t,n])=>(0,F.jsxs)(`button`,{onClick:()=>M(e,t),children:[(0,F.jsxs)(`b`,{children:[t.toLocaleString(`en-IN`),` · `,n.length===3?`STRONG `:``,e===`CE`?`RESISTANCE`:`SUPPORT`]}),(0,F.jsxs)(`small`,{children:[n.join(` + `),` · 100%`]})]},t)):(0,F.jsx)(`p`,{children:`No 2-pillar alignment in the selected range.`}),(0,F.jsxs)(`table`,{children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Pillar`}),(0,F.jsx)(`th`,{children:`Max 1`}),(0,F.jsx)(`th`,{children:`Max 2 candidate`})]})}),(0,F.jsx)(`tbody`,{children:R.map(t=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:V[t]}),[0,1].map(n=>(0,F.jsx)(`td`,{children:(0,F.jsx)(`button`,{onClick:()=>M(e,w[e][t][n]?.strike||0),disabled:!w[e][t][n],children:W(w[e][t][n]?.strike)})},n))]},t))})]}),(0,F.jsx)(`small`,{children:`Max 2 is a candidate; strength requires recorded movement, not strike position alone.`})]},e)})}),(0,F.jsxs)(`div`,{className:`pillar-chart-controls`,children:[R.map(e=>(0,F.jsx)(`button`,{"aria-pressed":a===e,onClick:()=>o(e),children:V[e]},e)),(0,F.jsx)(`button`,{type:`button`,disabled:!E.length,onClick:de,children:`Chart CSV`}),ne&&(0,F.jsx)(`span`,{role:`alert`,children:ne})]}),(0,F.jsxs)(`h3`,{children:[`Overall `,V[a],` · all received strikes`]}),(0,F.jsxs)(`small`,{children:[`Coverage CE `,A?.[x]?.ceCount||0,`/`,A?.expectedCe||0,` · PE `,A?.[x]?.peCount||0,`/`,A?.expectedPe||0]}),(0,F.jsx)(ye,{points:ce,lines:[{name:`CE`,color:`#ff4e63`,values:D.map(e=>e[x].ce)},{name:`PE`,color:`#24d887`,values:D.map(e=>e[x].pe)},{name:`PE − CE`,color:`#4b82ff`,values:D.map(e=>e[x].difference)}],pivots:O.pivots.levels,crosses:O.crosses}),(0,F.jsxs)(`div`,{className:`pillar-commentary state-`+oe.kind,children:[(0,F.jsx)(`b`,{children:oe.label.replaceAll(`OI data`,V[a]+` data`)}),(0,F.jsx)(`p`,{children:oe.commentary.replaceAll(`OI`,V[a])}),O.latestCross&&(0,F.jsxs)(`p`,{children:[O.latestCross.direction===`up`?`↑ PE above CE`:`↓ CE above PE`,` · `,U(O.latestCross.at),` IST · Spot `,W(O.latestCross.spot)]}),(0,F.jsx)(`small`,{children:`Sampled flow describes relative metrics, not proof of buying/selling. Different pillars can disagree.`})]}),(0,F.jsxs)(`h3`,{children:[`Max 1 strike movement · `,V[a]]}),(0,F.jsx)(ye,{points:ue,step:!0,lines:[`CE`,`PE`].map(e=>({name:e,color:e===`CE`?`#ff4e63`:`#24d887`,values:E.map(t=>t[x].ranges[S].leaders[e][a][0]?.strike??null)}))}),(0,F.jsxs)(`div`,{className:`pillar-chart-controls`,children:[(0,F.jsx)(`h3`,{children:`Individual strike pillars`}),(0,F.jsxs)(`select`,{"aria-label":`Pillar option side`,value:s,onChange:e=>{c(e.target.value),u(0)},children:[(0,F.jsx)(`option`,{children:`CE`}),(0,F.jsx)(`option`,{children:`PE`})]}),(0,F.jsx)(`select`,{"aria-label":`Pillar option strike`,value:T,onChange:e=>u(Number(e.target.value)),children:ie.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))}),(0,F.jsx)(`b`,{className:`pillar-movement state-`+k.kind,children:k.label})]}),(0,F.jsx)(ye,{points:le,percent:!0,lines:R.map((e,t)=>({name:V[e]+` %`,color:[`#c668ee`,`#ff8c24`,`#4286ff`][t],values:E.map(t=>z(t,x,S,s,e,t.contract?.[x]?.[e]))}))}),(0,F.jsxs)(`p`,{className:`pillar-explanation`,children:[k.directions.map((e,t)=>V[R[t]]+` `+(e===`up`?`↑`:e===`down`?`↓`:e===`flat`?`↔`:`—`)).join(` · `),(0,F.jsx)(`br`,{}),s===`PE`?`Rising PE pillars build support at this candidate strike.`:`Rising CE pillars build resistance at this candidate strike.`,` A rising Max 2 can challenge Max 1; falling pillars indicate candidate weakness. Mixed/flat remains unconfirmed.`]}),(0,F.jsxs)(`details`,{children:[(0,F.jsx)(`summary`,{children:`Recorded raw pillars and percentages`}),(0,F.jsxs)(`table`,{children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Time IST`}),R.flatMap(e=>[(0,F.jsx)(`th`,{children:V[e]},e),(0,F.jsx)(`th`,{children:`%`},e+`%`)])]})}),(0,F.jsx)(`tbody`,{children:E.slice(-60).map(e=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{children:U(e.at)}),R.flatMap(t=>[(0,F.jsx)(`td`,{children:W(e.contract?.[x]?.[t])},t),(0,F.jsx)(`td`,{children:W(z(e,x,S,s,t,e.contract?.[x]?.[t]))},t+`%`)])]},e.at))})]})]}),(0,F.jsxs)(`footer`,{children:[E.length,` saved observations · 10-second buckets · Refresh restores recorded history. Gaps / coverage changes break chart lines. Earlier unrecorded points stay unavailable.`]})]})}function xe(e,t,n){return e&&Number.isFinite(e.serverAt)&&Number.isFinite(e.elapsedAt)&&Number.isFinite(t)?e.serverAt+Math.max(0,t-e.elapsedAt):n}var G=(e,t=2)=>typeof e==`number`&&Number.isFinite(e)?e.toLocaleString(`en-IN`,{minimumFractionDigits:t,maximumFractionDigits:t}):`—`,Se=e=>G(e,0),Ce=[];function K({preferenceId:e=`viewer`}){let[signalState,setSignalState]=(0,P.useState)(()=>{try{const s=localStorage.getItem('prodesk.market_signal');if(s)return JSON.parse(s);}catch(e){}return{signal:'CALL',qNum:1,manual:false,lastCalcAt:0};}),[baseCsvCache,setBaseCsvCache]=(0,P.useState)(''),[t,n]=(0,P.useState)(!0),[g,se]=(0,P.useState)(!1),[j,_e]=(0,P.useState)(!1),I=(0,P.useRef)(null),[L,R]=(0,P.useState)(!1);(0,P.useEffect)(()=>{fetch('/market-data/ALPHAIQ_ALL_SYSTEMS.csv').then(r=>r.ok?r.text():'').then(txt=>{if(txt&&txt.length>50)setBaseCsvCache(txt);}).catch(()=>{});},[]);(0,P.useEffect)(()=>{let e=()=>{document.fullscreenElement||R(!1)},t=e=>{e.key===`Escape`&&R(!1)};return document.addEventListener(`fullscreenchange`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`fullscreenchange`,e),document.removeEventListener(`keydown`,t)}},[]);async function ve(){if(L){R(!1),document.fullscreenElement===I.current&&await document.exitFullscreen();return}R(!0);try{await I.current?.requestFullscreen()}catch{}}let z=ie(e),[B,V]=(0,P.useState)(`NIFTY`),[H,U]=(0,P.useState)(``),[W,ye]=(0,P.useState)(`ltp`),[K,we]=(0,P.useState)(!0),[q,Te]=(0,P.useState)(null),[Ee,De]=(0,P.useState)(``),[J,Oe]=(0,P.useState)(Date.now()),ke=(0,P.useRef)(0),Ae=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=!0,t=!1,n=new AbortController,r=++ke.current;/* preserved */De(``);async function i(){if(t||document.visibilityState!==`visible`)return;t=!0;let i=new AbortController,a=()=>i.abort();n.signal.addEventListener(`abort`,a,{once:!0});let o=setTimeout(a,8e3);try{let t=new URLSearchParams({index:B,metrics:K?`ai`:`normal`});H&&t.set(`expiry`,H);let n=await fetch(`/api/pro-oi?`+t,{cache:`no-store`,signal:i.signal}),a=await n.json();if(!n.ok)throw Error(a.error||`Data unavailable`);if(e&&r===ke.current){if(Number.isFinite(a.serverAt)){let e=performance.now(),t=Math.max(a.serverAt,xe(Ae.current,e,a.serverAt));Ae.current={serverAt:t,elapsedAt:e},Oe(t)}Te(a),De(``)}}catch(t){e&&!n.signal.aborted&&De(t instanceof Error&&t.name!==`AbortError`?t.message:`Feed delayed. Retrying…`)}finally{t=!1,clearTimeout(o),n.signal.removeEventListener(`abort`,a)}}i();let a=setInterval(()=>void i(),1e3),o=()=>void i();return document.addEventListener(`visibilitychange`,o),()=>{e=!1,n.abort(),clearInterval(a),document.removeEventListener(`visibilitychange`,o)}},[B,H,K]),(0,P.useEffect)(()=>{let e=setInterval(()=>Oe(xe(Ae.current,performance.now(),Date.now())),1e3);return()=>clearInterval(e)},[]);let Y=q?.data,je=Y?.spot?.last_price,X=d(W===`open`?Y?.spot?.ohlc?.open:je);
(0,P.useEffect)(()=>{
  if(!Y||!Y.rows||Y.rows.length===0)return;
  const now=Date.now();
  if(now-(signalState.lastCalcAt||0)<15000&&!signalState.manual)return;
  let spot=Y.spot?.last_price||0;
  let ceChg=0,peChg=0;
  for(let r of Y.rows){
    let c=r.oiChange??r.quote?.oi_change??0;
    if(r.type==='CE')ceChg+=c;
    else if(r.type==='PE')peChg+=c;
  }
  let newSig='CALL';
  if(peChg>ceChg){newSig='CALL';}
  else if(ceChg>peChg){newSig='PUT';}
  else if(spot>0&&Y.spot?.ohlc?.open){newSig=spot>=Y.spot.ohlc.open?'CALL':'PUT';}

  setSignalState(prev=>{
    if(prev.manual&&now-(prev.lastCalcAt||0)<180000)return prev;
    let nextQ=1;
    if(prev.signal===newSig){
      nextQ=prev.qNum>=3?1:(prev.qNum+1);
    }
    const updated={signal:newSig,qNum:nextQ,manual:false,lastCalcAt:now};
    try{localStorage.setItem('prodesk.market_signal',JSON.stringify(updated));}catch(e){}
    return updated;
  });
},[Y,J]);
let Me=q?.sentiment||S(null),Z=!!Y&&!Ee&&Math.abs(J-(Y.receivedAtMs||Y.fetchedAtMs))<15e3&&Y.rows.some(e=>Math.abs(J-Date.parse(e.quote?.timestamp||``))<15e3),Ne=(0,P.useMemo)(()=>T(),[]),Pe=_(Ne,`CE`).filter(e=>e.key!==`premiumGap`),Fe=_(Ne,`PE`).filter(e=>e.key!==`premiumGap`),Q=(0,P.useMemo)(()=>{if(!Y)return[];let e=new Map((q?.aiRows||[]).flatMap(r=>[[r.token,r],[Number(r.token),r],[String(r.token),r],[r.type+":"+r.strike,r]]));return Y.rows.map(t=>{let n=K?(e.get(t.token)||e.get(Number(t.token))||e.get(String(t.token))||e.get(t.type+":"+t.strike)):null;let rawOi=(t.quote?.oi??t.oi??0);let rawVol=(t.quote?.volume??t.volume??0);let rawOc=(t.quote?.oiDiff??t.quote?.oiChange??t.oiChange??0);let oi=(K&&n&&typeof n.oi==="number")?n.oi:rawOi;let vol=(K&&n&&typeof n.volume==="number")?n.volume:rawVol;let oc=(K&&n&&typeof n.oiChange==="number")?n.oiChange:rawOc;let gk=t.greeks||t.quote?.greeks||(t.quote?.iv?{iv:t.quote.iv,delta:t.quote.delta}:null);let qObj=t.quote?{...t.quote,oi:oi,volume:vol,oiDiff:oc,oiChange:oc,iv:gk?.iv,delta:gk?.delta,greeks:gk}:{last_price:50,oi:oi,volume:vol,oiDiff:oc,oiChange:oc,iv:gk?.iv,delta:gk?.delta,greeks:gk};return{...t,greeks:gk,iv:gk?.iv||t.iv,delta:gk?.delta||t.delta,oiChange:oc,oi:oi,volume:vol,quote:qObj}})},[Y,q?.aiRows,K]),Ie=(0,P.useMemo)(()=>new Map(Q.flatMap(e=>[[e.token,e],[Number(e.token),e],[String(e.token),e],[e.type+":"+e.strike,e]])),[Q]),Le=(0,P.useMemo)(()=>{let map=s(Y?.rows||[],Y?.expiry||"",B,Y?.previousAtp);let aug=new Map();for(let[k,v]of map.entries()){aug.set(k,v);aug.set(Number(k),v);aug.set(String(k),v)}for(let r of Y?.rows||[]){let entry=map.get(r.token)||map.get(Number(r.token))||map.get(String(r.token));if(entry)aug.set(r.type+":"+r.strike,entry)}return aug},[Y,B]),Re=new Map(Object.entries(q?.extensions||{}).map(([e,t])=>[Number(e),t])),ze=(0,P.useMemo)(()=>{let e=new Map;for(let t of Y?.rows||[]){let n=e.get(t.strike)||{};t.type===`CE`?n.ce=t:t.type===`PE`&&(n.pe=t),e.set(t.strike,n)}return p([...e.keys()],X,W).map(t=>[t,e.get(t)])},[Y,X,W,B]),Be=(0,P.useMemo)(()=>new Set([`CE`,`PE`].map(e=>r(Y?.heldUop?.[e],Y,e,J)?.strike).filter(e=>typeof e==`number`)),[Y,J]),$=(j&&Be.length>0)?[...new Set([...Be])].sort((e,t)=>t-e).map(e=>[e,{ce:Y?.rows?.find(t=>t.type===`CE`&&t.strike===e),pe:Y?.rows?.find(t=>t.type===`PE`&&t.strike===e)}]):ze,Ve=(0,P.useMemo)(()=>E(Q,ze.map(([e])=>e)),[Q,ze]),He=ae($.map(([e])=>e),je),Ue=k(Y?.spot?.ohlc?.open,Y?.spot?.ohlc?.high),We=k(Y?.spot?.ohlc?.open,Y?.spot?.ohlc?.low);function Ge(){let e=ee(Y?.spot).priceChange;return(0,F.jsx)(me,{className:`chain-spot-marker-row`,children:(0,F.jsx)(M,{colSpan:Pe.length+Fe.length+3,children:(0,F.jsxs)(`div`,{className:`chain-spot-marker-layout`,children:[(0,F.jsxs)(`div`,{className:`spot-side-stack spot-stack-ce`,children:[(0,F.jsx)(he,{data:Y,now:J}),(0,F.jsx)(ne,{data:Y,side:`PE`}),(0,F.jsx)(b,{index:B,reading:Me,side:`CE`,fresh:Z&&Y?.greekMode===`current`,testMode:!1})]}),(0,F.jsxs)(`div`,{className:`spot-day-level spot-day-low`+(We?` open-low`:``),children:[(0,F.jsxs)(`small`,{children:[`LOW`,We&&(0,F.jsx)(`em`,{children:`OPEN = LOW`})]}),(0,F.jsx)(`strong`,{children:G(Y?.spot?.ohlc?.low)})]}),(0,F.jsxs)(`div`,{className:`chain-spot-marker`,children:[(0,F.jsxs)(`span`,{children:[B,` SPOT`]}),(0,F.jsx)(`strong`,{children:G(je)}),(0,F.jsx)(`b`,{className:e==null?``:e>=0?`spot-up`:`spot-down`,children:e==null?``:`${e>=0?`+`:``}${G(e)}`}),(0,F.jsxs)(`small`,{children:[Y?.displayArchive?Y.displayArchive.kind+` · `+new Date(Y.displayArchive.at).toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`,hour12:!1}):Z?`UPDATED`:`SNAPSHOT`,` · ATM `,Se(d(je))]})]}),(0,F.jsxs)(`div`,{className:`spot-day-level spot-day-high`+(Ue?` open-high`:``),children:[(0,F.jsxs)(`small`,{children:[`HIGH`,Ue&&(0,F.jsx)(`em`,{children:`OPEN = HIGH`})]}),(0,F.jsx)(`strong`,{children:G(Y?.spot?.ohlc?.high)})]}),(0,F.jsxs)(`div`,{className:`spot-side-stack spot-stack-pe`,children:[(0,F.jsx)(ne,{data:Y,side:`CE`}),(0,F.jsx)(b,{index:B,reading:Me,side:`PE`,fresh:Z&&Y?.greekMode===`current`,testMode:!1})]})]})})})}let Ke=(0,P.useMemo)(()=>{let e=a(Y,J),t=i(Y?.heldUop,Y,J);for(let n of[`CE`,`PE`]){let r=n===`CE`?t.ce:t.pe;if(!r)continue;let i=o(t,n);e.set(n+`:`+r.strike,{...e.get(n+`:`+r.strike)||{},direction:i.direction,gapPercent:t.gap??void 0,gapAlert:t.condition,heldActive:!0,supportLabel:i.label,supporting:i.supporting})}return e},[Y,J]);function qe(e,t){let target=e?(Ie.get(e.token)||Ie.get(Number(e.token))||Ie.get(String(e.token))||Ie.get(e.type+":"+e.strike)||e):void 0;let n=target?.quote||e?.quote;let gk=target?.greeks||e?.greeks||(n?.iv?{iv:n.iv,delta:n.delta}:null);let atpObj=e?(Le.get(e.token)||Le.get(Number(e.token))||Le.get(String(e.token))||Le.get(e.type+":"+e.strike)):void 0;let atpVal=atpObj?.value??n?.average_price??null;let i=l(target,gk,atpVal);let a=(t==="CE"?Pe:Fe).filter(e=>["open","high","low"].includes(e.key));return(t==="CE"?Pe:Fe).map(col=>{if(a.some(e=>e.key===col.key))return col.key===a[0]?.key?(0,F.jsx)(pe,{chain:Y,index:B,expiry:Y?.expiry||"",row:target||e,side:t,columns:a,now:J,testMode:!1},"ohlc"):null;let o=i[col.key],s=ge.includes(col.key)?col.key:null,c=s?Ve[t][s]:[],rowIdx=target?c.findIndex(row=>row.strike===target.strike):-1,d=c[0]?.value,f=s?u(o,d):null,p=s?h(o,s):col.integer?Se(o):G(o,col.decimals);return(0,F.jsx)(M,{"data-column":col.key,className:`${t==="CE"?"ce-cell":"pe-cell"} ${col.key==="ltp"?"ltp":""} ${col.change&&o!=null?o>=0?"positive":"negative":""}`,children:col.key==="premiumGap"?(0,F.jsx)(v,{index:B,expiry:Y?.expiry||"",row:target||e,now:J,testMode:!1,match:target?Ke.get(t+":"+target.strike):void 0}):col.key==="open"?(0,F.jsx)("span",{className:ue(n),children:p}):col.key==="ivp"?(()=>{let atpPrev=atpObj?.previous,atpCur=atpObj?.value??n?.average_price??null;return(0,F.jsxs)("span",{className:"chain-ivp-stack "+(typeof atpCur=="number"&&typeof atpPrev=="number"?atpCur>atpPrev?"ivp-up":atpCur<atpPrev?"ivp-down":"ivp-equal":"ivp-missing"),children:[(0,F.jsx)("small",{"aria-label":"Previous ATP "+G(atpPrev),children:G(atpPrev)}),(0,F.jsx)("strong",{"aria-label":"Today ATP "+G(atpCur),children:G(atpCur)})]})})():col.key==="iv"||col.key==="delta"?(()=>{let prevGk=m(target||e,Y?.expiry||"",Y?.previousAtp);return(0,F.jsx)(x,{field:col.key,current:i[col.key],previous:prevGk})})():col.key==="ivDelta"?(0,F.jsxs)("span",{className:"chain-iv-delta-stack",children:[(0,F.jsx)("strong",{"aria-label":"IV "+G(i.iv,2)+" percent",children:G(i.iv,2)}),(0,F.jsx)("small",{"aria-label":"Delta "+G(i.delta,3),children:G(i.delta,3)})]}):s?(0,F.jsxs)("span",{className:"chain-metric-stack"+(rowIdx>=0?" chain-max-cell max-"+t.toLowerCase()+" max-rank-"+(rowIdx+1):""),children:[(0,F.jsxs)("strong",{className:"chain-metric-percent",children:[rowIdx>=0&&(0,F.jsx)("span",{className:"chain-rank-badge","aria-label":"Max "+(rowIdx+1),children:rowIdx+1}),f===null?"—":f.toLocaleString("en-IN",{maximumFractionDigits:1})+"%"]}),(0,F.jsx)("small",{className:"chain-metric-raw",children:p})]}):col.key==="ltp"?(0,F.jsxs)("span",{className:"chain-ltp-stack",children:[(0,F.jsx)("strong",{className:"chain-ltp-with-arrow",children:(0,F.jsxs)(D,{index:B,expiry:Y?.expiry||"",row:target||e,now:J,testMode:!1,match:target?Ke.get(t+":"+target.strike):void 0,children:[p,(0,F.jsx)(de,{index:B,expiry:Y?.expiry||"",row:target||e,now:J,testMode:!1,match:target?Ke.get(t+":"+target.strike):void 0})]})}),(0,F.jsxs)("small",{className:"chain-price-changes",children:[(0,F.jsx)("b",{className:i.priceChange==null?"muted":i.priceChange>=0?"positive":"negative","aria-label":"PC "+G(i.priceChange),children:G(i.priceChange)}),(0,F.jsx)("span",{children:"("}),(0,F.jsx)("b",{className:i.poc==null?"muted":i.poc>=0?"positive":"negative","aria-label":"POC "+G(i.poc),children:G(i.poc)}),(0,F.jsx)("span",{children:")"})]})]}):p},col.key)})}return(0,F.jsxs)(`div`,{className:`app layout-desktop pro-oi-page`+(t?` viewer-controls-hidden`:``)+(j?` pro-active-page`:``),"data-display-mode":`desktop`,children:[(0,F.jsxs)(`header`,{className:`pro-oi-header`,children:[(0,F.jsx)(`img`,{src:`/prodesk-logo.png`,alt:`ProDeskView`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h1`,{children:`PRO OI CHAIN`}),(0,F.jsx)(`p`,{children:`(WITH UOP AND INSTITUTIONAL POSITIONAL DATABASE)`})]}),(0,F.jsx)(`span`,{children:`READ ONLY`})]}),(0,F.jsxs)(`main`,{children:[(0,F.jsxs)(`div`,{className:`pro-oi-controls`,children:[(0,F.jsxs)(`label`,{children:[`Index`,(0,F.jsx)(`select`,{value:B,onChange:e=>{V(e.target.value),U(``)},children:[`NIFTY`,`SENSEX`,`BANKNIFTY`].map(e=>(0,F.jsx)(`option`,{children:e},e))})]}),(0,F.jsxs)(`label`,{children:[`Expiry`,(0,F.jsxs)(`select`,{value:H||Y?.expiry||``,onChange:e=>U(e.target.value),children:[!q?.expiries?.length&&(0,F.jsx)(`option`,{value:``,children:`Waiting for feed`}),(q?.expiries||[]).map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))]})]}),(0,F.jsx)(`div`,{role:`group`,"aria-label":`Metric mode`,children:[!1,!0].map(e=>(0,F.jsx)(`button`,{"aria-pressed":K===e,onClick:()=>we(e),children:e?`AI Beta`:`Normal`},String(e)))}),(0,F.jsx)(`div`,{role:`group`,"aria-label":`Strike range`,children:[`ltp`,`open`,`all`].map(e=>(0,F.jsx)(`button`,{"aria-pressed":W===e,onClick:()=>ye(e),children:e===`ltp`?`LTP ±7`:e===`open`?`Open ±7`:`All strikes`},e))}),(0,F.jsxs)(`span`,{className:Z?`positive`:`muted`,children:[Z?`UPDATED`:`SNAPSHOT`,Y?.fetchedAt?` · `+new Date(Y.fetchedAt).toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`,hour12:!1})+` IST`:``]})]}),Ee&&(0,F.jsx)(`div`,{className:`message error`,role:`alert`,children:Ee}),(0,F.jsx)(te,{rows:q?.levels||Ce,children:(0,F.jsxs)(`div`,{ref:I,className:`chain-layout-view viewer-stacked view-`+z.mode+(L?` viewer-chain-expanded`:``),style:z.style,children:[(0,F.jsx)(O,{chainLabel:`PROCHAIN`,chainActive:!j,extraAction:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{type:`button`,"aria-pressed":j,onClick:()=>{_e(!0),z.setMode(`chain`)},children:`PROACTIVE`}),(0,F.jsx)(`button`,{type:`button`,"aria-expanded":!t,onClick:()=>n(!t),children:t?`Show controls`:`Hide controls`}),(0,F.jsx)(`button`,{type:`button`,"aria-expanded":g,onClick:()=>se(!g),children:g?`Hide zones`:`Show zones`})]}),splitLabel:`Chain + UOP below`,mode:z.mode,onChange:e=>{_e(!1),z.setMode(e)},action:(0,F.jsxs)(`div`,{className:`viewer-layout-actions`,children:[
  (0,F.jsxs)(`button`,{
    type:`button`,
    className:`btn-alphaiq-csv`,
    title:`Download AlphaIQ All Systems 59-Column CSV with Market Signal`,
    onClick:()=>{
      try{
        const currentSig=signalState.signal+' Q'+signalState.qNum;
        const now=new Date();
        const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
        const yyyy=parts.find(p=>p.type==='year').value;
        const mm=parts.find(p=>p.type==='month').value;
        const dd=parts.find(p=>p.type==='day').value;
        const dateStr=mm+'/'+dd+'/'+yyyy;
        const fileDate=yyyy+'-'+mm+'-'+dd;
        const fileName='ALPHAIQ_ALL_SYSTEMS_'+fileDate+'.csv';

        let csvData=localStorage.getItem('prodesk.uop_csv_data')||baseCsvCache;
        if(csvData&&csvData.length>50){
          const lines=csvData.split(/\r?\n/).filter(Boolean);
          let header=lines[0].trim();
          const hasSigCol=header.includes('Market Signal');
          if(!hasSigCol) header+=',Market Signal';

          const sym=(B||'NIFTY').toUpperCase();
          const exp=Y?.expiry||'';
          const spot=Y?.spot?.last_price||0;
          const atm=X||(spot>0?Math.round(spot/50)*50:'');
          const u=Y?.universal||Y?.levels?.u||Y?.levels?.U||'';
          const o=Y?.optimal||Y?.levels?.o||Y?.levels?.O||'';
          const p=Y?.participation||Y?.levels?.p||Y?.levels?.P||'';

          const outRows=[header];
          for(let i=1;i<lines.length;i++){
            let row=lines[i].trim();
            if(!row) continue;
            const cols=row.split(',');

            // 100% GUARANTEE: update Date (col index 8) for EVERY single symbol/row to today's live IST date!
            cols[8]=dateStr;

            if(cols[0]===sym){
              if(u) cols[1]=u;
              if(o) cols[2]=o;
              if(p) cols[3]=p;
              if(exp) cols[9]=exp;
              if(atm) cols[11]=atm;
            }

            if(!hasSigCol){
              cols.push(currentSig);
            }else{
              cols[cols.length-1]=currentSig;
            }
            outRows.push(cols.join(','));
          }
          const csvContent='\uFEFF'+outRows.join('\r\n');
          const blob=new Blob([csvContent],{type:'text/csv;charset=utf-8;'});
          const blobUrl=URL.createObjectURL(blob);

          const link=document.createElement('a');
          link.href=blobUrl;
          link.setAttribute('download',fileName);
          link.style.display='none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(()=>URL.revokeObjectURL(blobUrl),2000);
        }else{
          // Direct native browser download to default Downloads section
          const link=document.createElement('a');
          link.href='/market-data/'+fileName;
          link.setAttribute('download',fileName);
          link.style.display='none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }catch(err){
        const link=document.createElement('a');
        link.href='/market-data/ALPHAIQ_ALL_SYSTEMS_2026-11-19.csv';
        link.setAttribute('download','ALPHAIQ_ALL_SYSTEMS_2026-11-19.csv');
        link.style.display='none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    style:{
      background:'#042f2e',
      color:'#2dd4bf',
      border:'1px solid #14b8a6',
      padding:'4px 8px',
      borderRadius:'6px',
      fontSize:'11.5px',
      fontWeight:'700',
      cursor:'pointer',
      display:(typeof window!=='undefined'&&typeof window.__isAdminUser==='function'&&window.__isAdminUser())?'inline-flex':'none',
      alignItems:'center',
      gap:'4px',
      boxShadow:'0 2px 4px rgba(0,0,0,0.4)',
      marginRight:'2px',
      whiteSpace:'nowrap'
    },
    children:[
      (0,F.jsx)('span',{children:'📥'}),
      'AlphaIQ CSV'
    ]
  }),
  (0,F.jsxs)(`button`,{
    type:`button`,
    className:`btn-chain-csv`,
    title:`Download full option chain data with Call/Put signal as CSV`,
    onClick:()=>{
      if(!$||$.length===0){alert('No option chain data available to export.');return;}
      const sym=B||'NIFTY';
      const exp=Y?.expiry||'CURRENT';
      const spot=Y?.spot?.last_price||0;
      const currentSig=signalState.signal+' Q'+signalState.qNum;
      const now=new Date();
      const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
      const yyyy=parts.find(p=>p.type==='year').value;
      const mm=parts.find(p=>p.type==='month').value;
      const dd=parts.find(p=>p.type==='day').value;
      const dateStr=mm+'/'+dd+'/'+yyyy;
      const fileDate=yyyy+'-'+mm+'-'+dd;
      const nowIso=now.toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
      const headers=[
        'DATE','MARKET_SIGNAL','CALL_STATUS','CALL_IVP','CALL_IV_PCT','CALL_DELTA','CALL_OI_CHG','CALL_OI','CALL_VOLUME',
        'CALL_PCLOSE','CALL_OPEN','CALL_HIGH','CALL_LOW','CALL_LTP','STRIKE',
        'PUT_LTP','PUT_LOW','PUT_HIGH','PUT_OPEN','PUT_PCLOSE','PUT_VOLUME','PUT_OI','PUT_OI_CHG',
        'PUT_DELTA','PUT_IV_PCT','PUT_IVP','PUT_STATUS'
      ];
      const csvRows=[];
      csvRows.push(['# PRODESKVIEW - LIVE OPTION CHAIN EXPORT']);
      csvRows.push(['# Symbol: '+sym+' | Expiry: '+exp+' | Spot: '+spot+' | Market Signal: '+currentSig+' | Exported: '+nowIso]);
      csvRows.push(headers);
      $.forEach(([strike,pair])=>{
        const ce=pair?.ce?(Ie.get(pair.ce.token)||Ie.get(pair.ce.type+':'+pair.ce.strike)||pair.ce):null;
        const pe=pair?.pe?(Ie.get(pair.pe.token)||Ie.get(pair.pe.type+':'+pair.pe.strike)||pair.pe):null;
        const ceQ=ce?.quote||{},peQ=pe?.quote||{};
        const ceGk=ce?.greeks||{},peGk=pe?.greeks||{};
        const row=[
          dateStr,
          currentSig,
          ce?.status||(strike===X?'ATM':''),
          ce?.ivp??ceQ.ivp??'—',
          ceGk.iv??ceQ.iv??'—',
          ceGk.delta??ceQ.delta??'—',
          ce?.oiChange??ceQ.oi_change??0,
          ceQ.oi??ce?.oi??0,
          ceQ.volume??ce?.volume??0,
          ceQ.ohlc?.close??ceQ.close??'—',
          ceQ.ohlc?.open??ceQ.open??'—',
          ceQ.ohlc?.high??ceQ.high??'—',
          ceQ.ohlc?.low??ceQ.low??'—',
          ceQ.last_price??ce?.last_price??'—',
          strike,
          peQ.last_price??pe?.last_price??'—',
          peQ.ohlc?.low??peQ.low??'—',
          peQ.ohlc?.high??peQ.high??'—',
          peQ.ohlc?.open??peQ.open??'—',
          peQ.ohlc?.close??peQ.close??'—',
          peQ.volume??pe?.volume??0,
          peQ.oi??pe?.oi??0,
          pe?.oiChange??peQ.oi_change??0,
          peGk.delta??peQ.delta??'—',
          peGk.iv??peQ.iv??'—',
          pe?.ivp??peQ.ivp??'—',
          pe?.status||(strike===X?'ATM':'')
        ];
        csvRows.push(row.map(val=>{
          const s=String(val??'');
          return s.includes(',')||s.includes('"')||s.includes('\n')?'"'+s.replace(/"/g,'""')+'"':s;
        }));
      });
      const csvContent='\uFEFF'+csvRows.map(r=>r.join(',')).join('\r\n');
      const blob=new Blob([csvContent],{type:'text/csv;charset=utf-8;'});
      const blobUrl=URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=blobUrl;
      const cleanExp=String(exp).replace(/[^a-zA-Z0-9_-]/g,'_');
      const cleanSig=currentSig.replace(/\s+/g,'_');
      link.setAttribute('download','PRO_CHAIN_'+sym+'_'+fileDate+'_'+cleanExp+'_'+cleanSig+'.csv');
      link.style.display='none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(()=>URL.revokeObjectURL(blobUrl),2000);
    },
    style:{
      background:'#0f172a',
      color:'#38bdf8',
      border:'1px solid #0284c7',
      padding:'4px 8px',
      borderRadius:'6px',
      fontSize:'11.5px',
      fontWeight:'700',
      cursor:'pointer',
      display:'inline-flex',
      alignItems:'center',
      gap:'4px',
      boxShadow:'0 2px 4px rgba(0,0,0,0.4)',
      marginRight:'2px',
      whiteSpace:'nowrap'
    },
    children:[
      (0,F.jsx)('span',{children:'📥'}),
      'Chain CSV'
    ]
  }),
  (0,F.jsxs)(`button`,{
    type:`button`,
    className:`btn-upload-uop-csv`,
    title:`Upload UOP / AlphaIQ CSV file (Admin Access Required)`,
    onClick:()=>{
      if(typeof window.__promptAdminLogin==='function'){
        window.__promptAdminLogin(()=>{
          const inp=document.getElementById('uop-csv-file-input');
          if(inp){
            inp.click();
          }else{
            const tempInp=document.createElement('input');
            tempInp.type='file';
            
            tempInp.style.display='none';
            tempInp.onchange=(e)=>{
              if(typeof window.__handleUopCsvUpload==='function'){
                window.__handleUopCsvUpload(e.target.files[0]);
              }
            };
            document.body.appendChild(tempInp);
            tempInp.click();
          }
        });
      }else{
        alert('⛔ Access Denied: Only Admin is permitted to upload CSV files.');
      }
    },
    style:{
      background:'#1f2937',
      color:'#9ca3af',
      border:'1px solid #4b5563',
      padding:'4px 8px',
      borderRadius:'6px',
      fontSize:'11.5px',
      fontWeight:'700',
      cursor:'pointer',
      display:(typeof window!=='undefined'&&typeof window.__isAdminUser==='function'&&window.__isAdminUser())?'inline-flex':'none',
      alignItems:'center',
      gap:'4px',
      boxShadow:'0 2px 4px rgba(0,0,0,0.4)',
      marginRight:'4px',
      whiteSpace:'nowrap'
    },
    children:[
      (0,F.jsx)('span',{children:(typeof window.__isAdminUser==='function'&&window.__isAdminUser())?'👑 📤':'🔒'}),
      (typeof window.__isAdminUser==='function'&&window.__isAdminUser())?'Upload UOP (Admin)':'Upload UOP (Admin)'
    ]
  }),
  (0,F.jsxs)(`button`,{
    type:`button`,
    className:`btn-market-signal signal-`+signalState.signal.toLowerCase(),
    title:`Click to cycle signal (CALL Q1-Q3 / PUT Q1-Q3)`,
    onClick:()=>{
      setSignalState(prev=>{
        let nextSig=prev.signal;
        let nextQ=prev.qNum+1;
        if(nextQ>3){
          nextQ=1;
          nextSig=prev.signal==='CALL'?'PUT':'CALL';
        }
        const updated={signal:nextSig,qNum:nextQ,manual:true,lastCalcAt:Date.now()};
        try{localStorage.setItem('prodesk.market_signal',JSON.stringify(updated));}catch(e){}
        return updated;
      });
    },
    style:{
      background:signalState.signal==='CALL'?'linear-gradient(135deg,rgba(20,83,45,0.95),rgba(22,101,52,0.98))':'linear-gradient(135deg,rgba(127,29,29,0.95),rgba(153,27,27,0.98))',
      color:signalState.signal==='CALL'?'#4ade80':'#f87171',
      border:'1.5px solid '+(signalState.signal==='CALL'?'#22c55e':'#ef4444'),
      padding:'4px 10px',
      borderRadius:'6px',
      fontSize:'12px',
      fontWeight:'900',
      letterSpacing:'0.5px',
      cursor:'pointer',
      display:'inline-flex',
      alignItems:'center',
      gap:'5px',
      boxShadow:signalState.signal==='CALL'?'0 0 10px rgba(34,197,94,0.45)':'0 0 10px rgba(239,68,68,0.45)',
      marginRight:'4px',
      whiteSpace:'nowrap'
    },
    children:[
      (0,F.jsx)('span',{style:{fontSize:'10px'},children:signalState.signal==='CALL'?'▲':'▼'}),
      signalState.signal+' Q'+signalState.qNum
    ]
  }),
  (0,F.jsx)(w,{data:Y,toolbar:!0}),
  (0,F.jsx)(`button`,{type:`button`,className:`viewer-fullscreen-toggle`,"aria-pressed":L,onClick:ve,children:L?`Exit Full Screen`:`⛶ Full Screen`})
]})}),(0,F.jsx)(`div`,{className:`chain-workstation with-charts`,children:(0,F.jsx)(`section`,{className:`chain-panel`,children:(0,F.jsxs)(`div`,{className:`chain-synced-row has-charts`,children:[(0,F.jsxs)(`div`,{className:`chain-synced-table`,children:[Y?(0,F.jsx)(C,{chain:Y,now:J,children:(0,F.jsxs)(A,{centerKey:B+`:`+(Y?.expiry||``)+`:`+W+`:`+z.mode+`:`+L+`:`+t+`:`+g+`:`+j,stickyHeader:!0,topContent:(0,F.jsxs)(F.Fragment,{children:[g&&(0,F.jsxs)(`div`,{className:`chain-expected-summary`,children:[(0,F.jsxs)(`div`,{className:`expected-summary-ce`,children:[(0,F.jsx)(`b`,{children:`CALLS · CE`}),(0,F.jsx)(fe,{index:B,data:Y,side:`low`})]}),(0,F.jsxs)(`div`,{className:`expected-summary-pe`,children:[(0,F.jsx)(fe,{index:B,data:Y,side:`high`}),(0,F.jsx)(`b`,{children:`PUTS · PE`})]})]}),(0,F.jsx)(c,{readOnly:!0,index:B,expiry:Y?.expiry||``,onCsv:()=>{}})]}),status:(0,F.jsx)(F.Fragment,{}),layoutMode:`desktop`,preferenceKey:`pro-oi-viewer`,children:[(0,F.jsxs)(re,{children:[(0,F.jsx)(oe,{children:(0,F.jsxs)(me,{children:[Pe.map(e=>(0,F.jsx)(y,{children:e.label},`c`+e.key)),(0,F.jsx)(y,{className:`chain-status-head`,children:`Status`}),(0,F.jsx)(y,{className:`strike-head`,children:`PRICE`}),(0,F.jsx)(y,{className:`chain-status-head`,children:`Status`}),Fe.map(e=>(0,F.jsx)(y,{children:e.label},`p`+e.key))]})}),(0,F.jsxs)(ce,{children:[$.map(([e,t],n)=>{let r=f(t.ce?Ie.get(t.ce.token):void 0,t.pe?Ie.get(t.pe.token):void 0,Ve);return(0,F.jsxs)(P.Fragment,{children:[n===He&&Ge(),(0,F.jsxs)(me,{className:e===X?`atm-row`:``,children:[qe(t.ce,`CE`),(0,F.jsx)(N,{hideBadge:!0,showSupport:!Ne.some(e=>[`open`,`high`,`low`].includes(e)),chain:Y,index:B,expiry:Y.expiry,row:t.ce,side:`CE`,oppositeRow:t.pe,oppositeHsb:t.pe?Y.strategyTracking?.hsb?.[t.pe.token]:void 0,er:Re.get(e)?.eor,es:Re.get(e)?.eos,fixedEr:Y.opening930?.day===new Date(J+198e5).toISOString().slice(0,10)?Y.opening930?.values?.[String(e)]?.eor:null,fixedEs:Y.opening930?.day===new Date(J+198e5).toISOString().slice(0,10)?Y.opening930?.values?.[String(e)]?.eos:null,fixedAt:Y.opening930?.at,hsb:t.ce?Y.strategyTracking?.hsb?.[t.ce.token]:void 0,now:J,testMode:!1}),(0,F.jsxs)(M,{className:`strike-cell`,children:[(0,F.jsxs)(`button`,{className:r?`strike-signal strike-signal-`+r:void 0,children:[Se(e),e===X&&(0,F.jsx)(`small`,{children:`ATM`})]}),(0,F.jsxs)(`span`,{className:`strike-status-badges`,children:[(0,F.jsx)(N,{badgeOnly:!0,chain:Y,index:B,expiry:Y?.expiry||``,row:t.ce,side:`CE`,hsb:t.ce?Y.strategyTracking?.hsb?.[t.ce.token]:void 0,now:J,testMode:!1}),(0,F.jsx)(N,{badgeOnly:!0,chain:Y,index:B,expiry:Y?.expiry||``,row:t.pe,side:`PE`,hsb:t.pe?Y.strategyTracking?.hsb?.[t.pe.token]:void 0,now:J,testMode:!1})]})]}),(0,F.jsx)(N,{hideBadge:!0,showSupport:!Ne.some(e=>[`open`,`high`,`low`].includes(e)),chain:Y,index:B,expiry:Y.expiry,row:t.pe,side:`PE`,oppositeRow:t.ce,oppositeHsb:t.ce?Y.strategyTracking?.hsb?.[t.ce.token]:void 0,er:Re.get(e)?.eor,es:Re.get(e)?.eos,fixedEr:Y.opening930?.day===new Date(J+198e5).toISOString().slice(0,10)?Y.opening930?.values?.[String(e)]?.eor:null,fixedEs:Y.opening930?.day===new Date(J+198e5).toISOString().slice(0,10)?Y.opening930?.values?.[String(e)]?.eos:null,fixedAt:Y.opening930?.at,hsb:t.pe?Y.strategyTracking?.hsb?.[t.pe.token]:void 0,now:J,testMode:!1}),qe(t.pe,`PE`)]})]},e)}),He===$.length&&Ge()]})]}),$.length===0&&(0,F.jsx)(`p`,{className:`no-result`,children:j?`No held active CE or PE for the current session. Prior or exited trades are not displayed as active.`:W!==`all`&&X===null?`Waiting for the selected index’s ${W===`open`?`Open`:`LTP`}. Use All strikes to view the available chain.`:`No available strikes around this ATM.`})]})}):(0,F.jsxs)(`div`,{className:`empty-chain`,children:[(0,F.jsxs)(`h2`,{children:[`Waiting for published `,B,` data`]}),(0,F.jsx)(`p`,{children:`The latest available quotes will appear automatically.`})]}),(0,F.jsx)(`div`,{className:`chain-uop-bottom`,children:(0,F.jsx)(c,{readOnly:!0,direction:`down`,index:B,expiry:Y?.expiry||``,onCsv:()=>{}})}),j&&(0,F.jsx)(be,{data:Y,metricRows:Q,index:B,range:W,aiMode:K})]}),(0,F.jsx)(le,{readOnly:!0,providedRadar:q?.radar,providedTrades:q?.trades||Ce,index:B,data:Y||null,fresh:Z,now:J,email:`pro-oi-viewer`,testMode:!1,sentiment:Me})]})})})]})})]})]})}export{K as default};