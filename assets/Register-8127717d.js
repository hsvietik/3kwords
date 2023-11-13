import{s as r,r as w,j as e,c as y,Q as i}from"./index-2f55c5b0.js";import{u as v,a as F,F as S,b as R,o as E,r as k,A}from"./AuthLayout-ef5fa071.js";const I=r.div`
  position: absolute;
  top: 200px;
  right: 20%;
`,P=r.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`,W=r.div`
  position: relative;
`,n=r.input`
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--color-black);
  &:focus,
  &:hover {
    outline: solid 2px var(--color-blue);
  }
`,B=r.button`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`,C=r.button`
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
`,l=r.p`
  margin: 0px;
  padding: 0px;
`;function L(){var c,d,p;const[s,u]=w.useState(!0),x=v(),{register:t,handleSubmit:m,formState:{errors:o},reset:h}=F({defaultValues:{name:"",email:"",password:""},resolver:E(k)}),g=({name:a,email:b,password:j})=>{x(y({name:a,email:b,password:j})).unwrap().then(()=>i.success("Account successfully created!")).catch(f=>f==="Request failed with status code 400"?i.error("This user already exist! Use Log In button"):i.error("Something went wrong, try one nore time!")),h()};return e.jsxs(I,{children:[e.jsx("h3",{children:"Welcome to 3K Words"}),e.jsx("p",{children:"Register your account"}),e.jsxs(P,{onSubmit:m(g),children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(n,{...t("name"),type:"text",id:"name"}),e.jsx(l,{children:(c=o.name)==null?void 0:c.message}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx(n,{...t("email"),type:"email",id:"email"}),e.jsx(l,{children:(d=o.email)==null?void 0:d.message}),e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs(W,{children:[e.jsx(n,{...t("password"),type:s?"password":"text",id:"password"}),e.jsx(B,{onClick:()=>u(a=>!a),children:s&&e.jsx(S,{})||!s&&e.jsx(R,{})})]}),e.jsx(l,{children:(p=o.password)==null?void 0:p.message}),e.jsx(C,{type:"submit",children:"Register"})]})]})}function q(){return e.jsx(A,{children:e.jsx(L,{})})}export{q as default};
