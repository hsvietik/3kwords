import{r as y,j as s,l as S,b as f,Q as o}from"./index-764284f7.js";import{u as F,a as b,F as L,H as E,b as d,L as W,S as v,c as H,d as c,e as m,E as u,I,B as R,f as k,g as B,h as C,N,i as P,o as A,l as D,A as q}from"./AuthLayout-b838c6f0.js";import"./iconBase-d640810d.js";import"./index-387d7a00.js";function M(){var i,l;const[e,h]=y.useState(!0),x=F(),{register:t,handleSubmit:p,formState:{errors:n},reset:j}=b({defaultValues:{email:"",password:""},resolver:A(D)}),g=({email:r,password:w})=>{x(f({email:r,password:w})).unwrap().then(a=>{o.success(`Successfully logged in as ${a.user.name}`)}).catch(a=>{a==="Request failed with status code 400"?o.error("Wrong email or password"):o.error("Something went wrong, try one nore time!")}),j()};return s.jsxs(L,{children:[s.jsxs(E,{children:[s.jsx(d,{children:"Welcome to "}),s.jsx(W,{src:S,alt:"3kWords logo"})," ",s.jsx(d,{children:"Words"})]}),s.jsx(v,{children:"Log in to your account"}),s.jsxs(H,{onSubmit:p(g),children:[s.jsx(c,{htmlFor:"email",children:"Email"}),s.jsx(m,{...t("email"),type:"email",id:"email"}),s.jsx(u,{children:(i=n.email)==null?void 0:i.message}),s.jsx(c,{htmlFor:"password",children:"Password"}),s.jsxs(I,{children:[s.jsx(m,{...t("password"),type:e?"password":"text",id:"password"}),s.jsx(R,{type:"button",onClick:()=>h(r=>!r),children:e&&s.jsx(k,{})||!e&&s.jsx(B,{})})]}),s.jsx(u,{children:(l=n.password)==null?void 0:l.message}),s.jsx(C,{type:"submit",children:"Login"})]}),s.jsxs(N,{children:[s.jsx("p",{children:"Don`t have an account?"}),s.jsx(P,{to:"/register",children:"Create"})]})]})}function z(){return s.jsx(q,{children:s.jsx(M,{})})}export{z as default};
