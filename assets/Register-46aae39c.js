import{r as L,j as s,l as R,c as W,Q as u}from"./index-b76a81d6.js";import{u as C,a as k,F as v,H as A,b as p,L as H,S as I,c as N,d as o,e as n,E as i,I as g,B as y,f as w,g as f,h as B,N as P,i as D,o as M,r as Q,A as T}from"./AuthLayout-c559e591.js";function U(){var l,d,m,x;const[e,c]=L.useState(!0),S=C(),{register:a,handleSubmit:F,formState:{errors:t},reset:E}=k({defaultValues:{name:"",email:"",password:""},resolver:M(Q)}),b=({name:r,email:h,password:j})=>{console.log({name:r,email:h,password:j}),S(W({name:r,email:h,password:j})).unwrap().then(()=>u.success("Account successfully created!")).catch(()=>u.error("Something went wrong, try one nore time!")),E()};return s.jsxs(v,{children:[s.jsxs(A,{children:[s.jsx(p,{children:"Welcome to "}),s.jsx(H,{src:R,alt:"3kWords logo"})," ",s.jsx(p,{children:"Words"})]}),s.jsx(I,{children:"Create your account"}),s.jsxs(N,{onSubmit:F(b),children:[s.jsx(o,{htmlFor:"name",children:"Name"}),s.jsx(n,{...a("name"),type:"text",id:"name"}),s.jsx(i,{children:(l=t.name)==null?void 0:l.message}),s.jsx(o,{htmlFor:"email",children:"Email"}),s.jsx(n,{...a("email"),type:"email",id:"email"}),s.jsx(i,{children:(d=t.email)==null?void 0:d.message}),s.jsx(o,{htmlFor:"password",children:"Password"}),s.jsxs(g,{children:[s.jsx(n,{...a("password"),type:e?"password":"text",id:"password"}),s.jsx(y,{onClick:()=>c(r=>!r),children:e&&s.jsx(w,{})||!e&&s.jsx(f,{})})]}),s.jsx(i,{children:(m=t.password)==null?void 0:m.message}),s.jsx(o,{htmlFor:"confirm",children:"Confirm password"}),s.jsxs(g,{children:[s.jsx(n,{...a("confirm"),type:e?"password":"text",id:"confirm"}),s.jsx(y,{onClick:()=>c(r=>!r),children:e&&s.jsx(w,{})||!e&&s.jsx(f,{})})]}),s.jsx(i,{children:(x=t.password)==null?void 0:x.message}),s.jsx(B,{type:"submit",children:"Register"})]}),s.jsxs(P,{children:[s.jsx("p",{children:"Already have an account?"}),s.jsx(D,{to:"/login",children:"Log In"})]})]})}function z(){return s.jsx(T,{children:s.jsx(U,{})})}export{z as default};