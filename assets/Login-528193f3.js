import{s as r,j as o,l as g,Q as e}from"./index-db5a31d9.js";import{u as b,a as f,o as w,l as j,A as v}from"./AuthLayout-45573614.js";const y=r.div`
  position: absolute;
  top: 200px;
  right: 20%;
`,S=r.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`;r.div`
  position: relative;
`;const l=r.input`
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--color-black);
  &:focus,
  &:hover {
    outline: solid 2px var(--color-blue);
  }
`;r.button`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`;const F=r.button`
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
`,d=r.p`
  margin: 0px;
  padding: 0px;
`;function k(){var n,a;const c=b(),{register:t,handleSubmit:p,formState:{errors:i},reset:u}=f({defaultValues:{email:"",password:""},resolver:w(j)}),m=({email:h,password:x})=>{c(g({email:h,password:x})).unwrap().then(s=>{e.success(`Successfully logged in as ${s.user.name}`)}).catch(s=>{s==="Request failed with status code 400"?e.error("Wrong email or password"):e.error("Something went wrong, try one nore time!")}),u()};return o.jsxs(y,{children:[o.jsx("h3",{children:"Log into your account"}),o.jsxs(S,{onSubmit:p(m),children:[o.jsx("label",{htmlFor:"email",children:"Email"}),o.jsx(l,{...t("email"),type:"email",id:"email"}),o.jsx(d,{children:(n=i.email)==null?void 0:n.message}),o.jsx("label",{htmlFor:"password",children:"Password"}),o.jsx(l,{...t("password"),type:"password",id:"password"}),o.jsx(d,{children:(a=i.password)==null?void 0:a.message}),o.jsx(F,{type:"submit",children:"Login"})]})]})}function A(){return o.jsx(v,{children:o.jsx(k,{})})}export{A as default};
