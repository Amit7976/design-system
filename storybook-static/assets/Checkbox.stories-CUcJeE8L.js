import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";/* empty css            */const a=({id:o,label:v,size:t="medium",defaultChecked:z=!1,disabled:i=!1,error:n=!1,errorMessage:c=""})=>{const S={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},M={small:"text-sm",medium:"text-base",large:"text-lg"};return e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{htmlFor:o,className:`inline-flex items-center gap-2 cursor-pointer ${M[t]} ${i?"opacity-50 cursor-not-allowed":""}`,children:[e.jsx("input",{type:"checkbox",id:o,role:"checkbox",defaultChecked:z,disabled:i,className:`${S[t]} accent-blue-600 dark:accent-blue-400rounded border-gray-300 dark:border-gray-600focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400${n?"border-red-500 ring-red-500":""}`}),v]}),n&&c&&e.jsx("span",{className:"text-sm text-red-500 dark:text-red-400",children:c})]})};a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const D={title:"Data Entry/Checkbox",component:a,tags:["autodocs"],args:{label:"Accept Terms & Conditions",id:"checkbox"},parameters:{docs:{description:{component:`
                The **Checkbox** component supports multiple sizes, states, accessibility, theming, and keyboard navigation.
                👉 To see dark mode in action, toggle your browser theme or use the 'dark' background in Storybook.
        `}}},argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},defaultChecked:{control:"boolean"},error:{control:"boolean"},errorMessage:{control:"text"}}},r={args:{size:"medium",label:"Subscribe to newsletter",defaultChecked:!0,disabled:!1,error:!1,errorMessage:""}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{id:"small",label:"Small",size:"small"}),e.jsx(a,{id:"medium",label:"Medium",size:"medium"}),e.jsx(a,{id:"large",label:"Large",size:"large"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{id:"default",label:"Default"}),e.jsx(a,{id:"checked",label:"Checked",defaultChecked:!0}),e.jsx(a,{id:"error",label:"With error",error:!0,errorMessage:"Field is required"}),e.jsx(a,{id:"disabled",label:"Disabled",disabled:!0}),e.jsx(a,{id:"disabledChecked",label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})},d={args:{size:"medium",label:"Subscribe to newsletter",defaultChecked:!1,disabled:!1,error:!1,errorMessage:""},parameters:{backgrounds:{default:"dark"}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Subscribe to newsletter",
    defaultChecked: true,
    disabled: false,
    error: false,
    errorMessage: ""
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
            <Checkbox id="small" label="Small" size="small" />\r
            <Checkbox id="medium" label="Medium" size="medium" />\r
            <Checkbox id="large" label="Large" size="large" />\r
        </div>
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,h,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
            <Checkbox id="default" label="Default" />\r
            <Checkbox id="checked" label="Checked" defaultChecked />\r
            <Checkbox id="error" label="With error" error errorMessage="Field is required" />\r
            <Checkbox id="disabled" label="Disabled" disabled />\r
            <Checkbox id="disabledChecked" label="Disabled Checked" disabled defaultChecked />\r
        </div>
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,y,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Subscribe to newsletter",
    defaultChecked: false,
    disabled: false,
    error: false,
    errorMessage: ""
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const N=["Playground","Sizes","States","DarkModeExample"];export{d as DarkModeExample,r as Playground,s as Sizes,l as States,N as __namedExportsOrder,D as default};
