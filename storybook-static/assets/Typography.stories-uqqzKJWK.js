import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";/* empty css            */const s={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl"},p={thin:"font-thin",light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",black:"font-black"},m={primary:"text-gray-900 dark:text-gray-100",secondary:"text-gray-700 dark:text-gray-300",tertiary:"text-gray-500 dark:text-gray-400",white:"text-white",black:"text-black","gray-900":"text-gray-900","gray-700":"text-gray-700","gray-500":"text-gray-500","gray-300":"text-gray-300"},c={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},d={tight:"tracking-tight",normal:"tracking-normal",wide:"tracking-wide",wider:"tracking-wider",widest:"tracking-widest"},u=({as:t="p",variant:l="p",size:e="base",weight:g="normal",color:y="primary",align:h="left",spacing:f="normal",id:v,title:x,className:b="",children:k})=>{const w=t,T=[l,s[e],p[g],m[y],c[h],d[f],b].filter(Boolean).join(" ");return r.jsx(w,{id:v,title:x,className:T,children:k})};u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'p'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof sizeMap",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"base"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'}]},description:"",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"keyof typeof weightMap",elements:[{name:"literal",value:"thin"},{name:"literal",value:"light"},{name:"literal",value:"normal"},{name:"literal",value:"medium"},{name:"literal",value:"semibold"},{name:"literal",value:"bold"},{name:"literal",value:"black"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colorMap",elements:[{name:"literal",value:"primary"},{name:"literal",value:"secondary"},{name:"literal",value:"tertiary"},{name:"literal",value:"white"},{name:"literal",value:"black"},{name:"literal",value:'"gray-900"'},{name:"literal",value:'"gray-700"'},{name:"literal",value:'"gray-500"'},{name:"literal",value:'"gray-300"'}]},description:"",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"keyof typeof alignMap",elements:[{name:"literal",value:"left"},{name:"literal",value:"center"},{name:"literal",value:"right"},{name:"literal",value:"justify"}]},description:"",defaultValue:{value:"'left'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"keyof typeof spacingMap",elements:[{name:"literal",value:"tight"},{name:"literal",value:"normal"},{name:"literal",value:"wide"},{name:"literal",value:"wider"},{name:"literal",value:"widest"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "caption" | "helper"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"p"'},{name:"literal",value:'"label"'},{name:"literal",value:'"caption"'},{name:"literal",value:'"helper"'}]},description:"",defaultValue:{value:"'p'",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:""}}};const z={title:"Design System/Typography",component:u,tags:["autodocs"],args:{children:"The quick brown fox jumps over the lazy dog",darkMode:!1},parameters:{docs:{description:{component:`
      The Typography component is used for all text elements in the design system.
      
      ## Usage Examples

      
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="paragraph" size="lg" weight="medium">
        Large paragraph with medium weight
      </Typography>
      <Typography variant="label" color="primary" spacing="wide">
        Label with wide letter spacing
      </Typography>
      
      
      ## Naming Conventions
      You can control:
      - *variant*: h1 to h6, paragraph, label, caption, helper
      - *size*: xs, sm, base, lg, xl, etc.
      - *weight*: light, normal, medium, semibold, bold
      - *color*: primary, secondary, danger, muted, etc.
      - *spacing*: tighter, normal, wide, etc.
      - *align*: left, center, right
      
      
      ## Accessibility Notes

      - Use the \`variant\` prop to control text style (e.g., h1, paragraph, label).
      - Optionally override the rendered HTML tag using the \`as\` prop.
      - Supports full **accessibility** and semantic rendering.
      - To properly preview **dark mode**, make sure your browser or system theme is set to dark — the component uses Tailwind's \`dark:\` variants which depend on that setting.
            `}}},argTypes:{darkMode:{control:"boolean",description:"Toggle dark mode background and text"},variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","paragraph","label","caption","helper"]},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","label","small","div"]},size:{control:"select",options:Object.keys(s)},weight:{control:"select",options:Object.keys(p)},color:{control:"select",options:Object.keys(m)},align:{control:"select",options:Object.keys(c)},spacing:{control:"select",options:Object.keys(d)}},decorators:[(t,l)=>{const e=l.args.darkMode;return r.jsx("div",{style:{backgroundColor:e?"#111827":"#ffffff",color:e?"#f9fafb":"#111827",padding:"2rem",minHeight:"100vh",transition:"all 0.3s ease"},children:r.jsx(t,{})})}]},a={args:{variant:"p",as:"p",size:"base",color:"primary",weight:"normal",spacing:"normal",align:"left",title:"Typography Playground",darkMode:!1}};var i,n,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "p",
    as: "p",
    size: "base",
    color: 'primary',
    weight: "normal",
    spacing: "normal",
    align: "left",
    title: "Typography Playground",
    darkMode: false
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const V=["Playground"];export{a as Playground,V as __namedExportsOrder,z as default};
