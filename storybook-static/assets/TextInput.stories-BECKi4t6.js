import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{c as N}from"./createLucideIcon-DcZF83Y9.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],U=N("circle-alert",Q);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],j=N("search",X),M=({id:D,name:H,type:_="text",value:F,placeholder:$,onChange:C,onBlur:V,onFocus:W,disabled:l=!1,error:d=!1,errorMessage:p,size:u="md",iconLeft:c,iconRight:i,className:P="",ariaLabel:A})=>{const B="w-full rounded-md border px-3 py-2 text-sm outline-none transition-all bg-white dark:bg-zinc-900",O=u==="sm"?"text-sm py-1.5":u==="lg"?"text-lg py-3":"text-base py-2",G=d?"border-red-500 text-red-600 placeholder:text-red-400 focus:ring-red-500 focus:border-red-500":"border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500",J=l?"opacity-50 cursor-not-allowed":"hover:border-gray-400 dark:hover:border-zinc-500",K=(c?"pl-10 ":"")+(i?"pr-10 ":"");return e.jsxs("div",{className:"relative w-full",children:[c&&e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 pointer-events-none",children:c}),e.jsx("input",{id:D,name:H,type:_,value:F,placeholder:$,onChange:C,onBlur:V,onFocus:W,disabled:l,"aria-label":A,className:`${B} ${O} ${G} ${J} ${K} ${P}`}),i&&e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 pointer-events-none",children:i}),d&&p&&e.jsx("p",{className:"mt-1 text-sm text-red-600 dark:text-red-500",role:"alert",children:p})]})};M.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Data Entry/TextInput",component:M,tags:["autodocs"],args:{placeholder:"Enter text",size:"md",disabled:!1,error:!1},argTypes:{size:{control:"select",options:["sm","md","lg"]},error:{control:"boolean"},disabled:{control:"boolean"},iconLeft:{control:!1},iconRight:{control:!1}},parameters:{docs:{description:{component:`
The \`TextInput\` component is used for standard text entry.
Supports various states (focus, error, disabled), sizes, dark mode, and accessibility.

**Note**: To properly view dark mode styles, switch your browser or system theme to dark mode.
        `}}}},r={args:{placeholder:"Type here..."}},a={args:{iconLeft:e.jsx(j,{size:16}),placeholder:"Search..."}},t={args:{iconRight:e.jsx(j,{size:16}),placeholder:"Search..."}},s={args:{error:!0,errorMessage:"This field is required",iconRight:e.jsx(U,{size:16})}},n={args:{disabled:!0,placeholder:"Disabled input"}},o={args:{placeholder:"Dark mode input"},parameters:{backgrounds:{default:"dark"}}};var m,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Type here..."
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    iconLeft: <Search size={16} />,
    placeholder: "Search..."
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,T,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    iconRight: <Search size={16} />,
    placeholder: "Search..."
  }
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,k,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: "This field is required",
    iconRight: <AlertCircle size={16} />
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,q,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var w,z,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Dark mode input"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ae=["Playground","WithLeftIcon","WithRightIcon","ErrorState","Disabled","DarkModeExample"];export{o as DarkModeExample,n as Disabled,s as ErrorState,r as Playground,a as WithLeftIcon,t as WithRightIcon,ae as __namedExportsOrder,re as default};
