import{R as i,s as l,r as S,j as r,c as O,Q as g}from"./index-db5a31d9.js";import{u as F,a as R,o as k,r as N,A as P}from"./AuthLayout-45573614.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=i.createContext&&i.createContext(v),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)n.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t};function j(e){return e&&e.map(function(n,t){return i.createElement(n.tag,c({key:t},n.attr),j(n.child))})}function w(e){return function(n){return i.createElement(I,c({attr:c({},e.attr)},n),j(e.child))}}function I(e){var n=function(t){var s=e.attr,a=e.size,u=e.title,m=_(e,["attr","size","title"]),d=a||t.size||"1em",o;return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),i.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,m,{className:o,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&i.createElement("title",null,u),e.children)};return y!==void 0?i.createElement(y.Consumer,null,function(t){return n(t)}):n(v)}function M(e){return w({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"}}]})(e)}function T(e){return w({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"}}]})(e)}const L=l.div`
  position: absolute;
  top: 200px;
  right: 20%;
`,B=l.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`,W=l.div`
  position: relative;
`,p=l.input`
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--color-black);
  &:focus,
  &:hover {
    outline: solid 2px var(--color-blue);
  }
`,A=l.button`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`,D=l.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  background-color: var(--color-blue);
  transition: background-color var(--transition);
  &:focus,
  &:hover {
    background-color: var(--color-pink);
  }
`,x=l.p`
  margin: 0px;
  padding: 0px;
`;function U(){var o,f,b;const[e,n]=S.useState(!0),t=F(),{register:s,handleSubmit:a,formState:{errors:u},reset:m}=R({defaultValues:{name:"",email:"",password:""},resolver:k(N)}),d=({name:h,email:C,password:z})=>{t(O({name:h,email:C,password:z})).unwrap().then(()=>g.success("Account successfully created!")).catch(E=>E==="Request failed with status code 400"?g.error("This user already exist! Use Log In button"):g.error("Something went wrong, try one nore time!")),m()};return r.jsxs(L,{children:[r.jsx("h3",{children:"Welcome to 3K Words"}),r.jsx("p",{children:"Register your account"}),r.jsxs(B,{onSubmit:a(d),children:[r.jsx("label",{htmlFor:"name",children:"Name"}),r.jsx(p,{...s("name"),type:"text",id:"name"}),r.jsx(x,{children:(o=u.name)==null?void 0:o.message}),r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx(p,{...s("email"),type:"email",id:"email"}),r.jsx(x,{children:(f=u.email)==null?void 0:f.message}),r.jsx("label",{htmlFor:"password",children:"Password"}),r.jsxs(W,{children:[r.jsx(p,{...s("password"),type:e?"password":"text",id:"password"}),r.jsx(A,{onClick:()=>n(h=>!h),children:e&&r.jsx(M,{})||!e&&r.jsx(T,{})})]}),r.jsx(x,{children:(b=u.password)==null?void 0:b.message}),r.jsx(D,{type:"submit",children:"Register"})]})]})}function K(){return r.jsx(P,{children:r.jsx(U,{})})}export{K as default};
