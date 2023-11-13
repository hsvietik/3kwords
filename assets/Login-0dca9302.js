import{s as r,r as j,j as o,l as w,Q as n}from"./index-2f55c5b0.js";import{u as f,a as y,F as v,b as S,o as F,l as E,A as k}from"./AuthLayout-ef5fa071.js";const L=r.div`
  position: absolute;
  top: 200px;
  right: 20%;
`,R=r.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`,c=r.input`
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--color-black);
  &:focus,
  &:hover {
    outline: solid 2px var(--color-blue);
  }
`,I=r.button`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`,P=r.div`
  position: relative;
`,A=r.button`
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
`,p=r.p`
  margin: 0px;
  padding: 0px;
`;function B(){var l,d;const[s,u]=j.useState(!0),x=f(),{register:i,handleSubmit:m,formState:{errors:a},reset:h}=y({defaultValues:{email:"",password:""},resolver:F(E)}),g=({email:e,password:b})=>{x(w({email:e,password:b})).unwrap().then(t=>{n.success(`Successfully logged in as ${t.user.name}`)}).catch(t=>{t==="Request failed with status code 400"?n.error("Wrong email or password"):n.error("Something went wrong, try one nore time!")}),h()};return o.jsxs(L,{children:[o.jsx("h3",{children:"Log into your account"}),o.jsxs(R,{onSubmit:m(g),children:[o.jsx("label",{htmlFor:"email",children:"Email"}),o.jsx(c,{...i("email"),type:"email",id:"email"}),o.jsx(p,{children:(l=a.email)==null?void 0:l.message}),o.jsx("label",{htmlFor:"password",children:"Password"}),o.jsxs(P,{children:[o.jsx(c,{...i("password"),type:s?"password":"text",id:"password"}),o.jsx(I,{onClick:()=>u(e=>!e),children:s&&o.jsx(v,{})||!s&&o.jsx(S,{})})]}),o.jsx(p,{children:(d=a.password)==null?void 0:d.message}),o.jsx(A,{type:"submit",children:"Login"})]})]})}function q(){return o.jsx(k,{children:o.jsx(B,{})})}export{q as default};
