(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4766],{1419:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/crud",function(){return n(4580)}])},4030:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(1438),a=n(2951),o=n(1752),i=n.n(o),l=function(){function e(){(0,r.Z)(this,e),this.contextPath=i()().publicRuntimeConfig.contextPath}return(0,a.Z)(e,[{key:"getProductsSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch(this.contextPath+"/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}()},4580:function(e,t,n){"use strict";n.r(t);var r=n(1799),a=n(9815),o=n(5893),i=n(1752),l=n.n(i),s=n(9403),c=n(8650),u=n(2896),d=n(3861),p=n(6062),m=n(1176),f=n(6094),h=n(2552),g=n(9710),y=n(5969),b=n(4420),v=n(5537),x=n(3643),j=n(7294),N=n(4030);t.default=function(){var e={id:null,name:"",image:null,description:"",category:null,price:0,quantity:0,rating:0,inventoryStatus:"INSTOCK"},t=(0,j.useState)(null),n=t[0],i=t[1],P=(0,j.useState)(!1),w=P[0],C=P[1],S=(0,j.useState)(!1),E=S[0],O=S[1],k=(0,j.useState)(!1),F=k[0],I=k[1],R=(0,j.useState)(e),z=R[0],D=R[1],K=(0,j.useState)(null),_=K[0],A=K[1],T=(0,j.useState)(!1),Z=T[0],H=T[1],L=(0,j.useState)(null),U=L[0],V=L[1],q=(0,j.useRef)(null),M=(0,j.useRef)(null),W=l()().publicRuntimeConfig.contextPath;(0,j.useEffect)((function(){(new N.M).getProducts().then((function(e){return i(e)}))}),[]);var X=function(){D(e),H(!1),C(!0)},Y=function(){H(!1),C(!1)},B=function(){O(!1)},J=function(){I(!1)},Q=function(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].id===e){t=r;break}return t},G=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<5;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},$=function(){M.current.exportCSV()},ee=function(){I(!0)},te=function(e){var t=(0,r.Z)({},z);t.category=e.value,D(t)},ne=function(e,t){var n=e.target&&e.target.value||"",a=(0,r.Z)({},z);a["".concat(t)]=n,D(a)},re=function(e,t){var n=e.value||0,a=(0,r.Z)({},z);a["".concat(t)]=n,D(a)},ae=(0,o.jsxs)("div",{className:"flex flex-column md:flex-row md:justify-content-between md:align-items-center",children:[(0,o.jsx)("h5",{className:"m-0",children:"Manage Products"}),(0,o.jsxs)("span",{className:"block mt-2 md:mt-0 p-input-icon-left",children:[(0,o.jsx)("i",{className:"pi pi-search"}),(0,o.jsx)(f.o,{type:"search",onInput:function(e){return V(e.target.value)},placeholder:"Search..."})]})]}),oe=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.z,{label:"Cancel",icon:"pi pi-times",className:"p-button-text",onClick:Y}),(0,o.jsx)(s.z,{label:"Save",icon:"pi pi-check",className:"p-button-text",onClick:function(){if(H(!0),z.name.trim()){var t=(0,a.Z)(n),o=(0,r.Z)({},z);if(z.id)t[Q(z.id)]=o,q.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3});else o.id=G(),o.code=G(),o.image="product-placeholder.svg",t.push(o),q.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3});i(t),C(!1),D(e)}}})]}),ie=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.z,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:B}),(0,o.jsx)(s.z,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:function(){var t=n.filter((function(e){return e.id!==z.id}));i(t),O(!1),D(e),q.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})]}),le=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.z,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:J}),(0,o.jsx)(s.z,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:function(){var e=n.filter((function(e){return!_.includes(e)}));i(e),I(!1),A(null),q.current.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})]});return(0,o.jsx)("div",{className:"grid crud-demo",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)(b.F,{ref:q}),(0,o.jsx)(v.o,{className:"mb-4",left:function(){return(0,o.jsx)(j.Fragment,{children:(0,o.jsxs)("div",{className:"my-2",children:[(0,o.jsx)(s.z,{label:"New",icon:"pi pi-plus",className:"p-button-success mr-2",onClick:X}),(0,o.jsx)(s.z,{label:"Delete",icon:"pi pi-trash",className:"p-button-danger",onClick:ee,disabled:!_||!_.length})]})})},right:function(){return(0,o.jsxs)(j.Fragment,{children:[(0,o.jsx)(p.p,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",className:"mr-2 inline-block"}),(0,o.jsx)(s.z,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:$})]})}}),(0,o.jsxs)(u.w,{ref:M,value:n,selection:_,onSelectionChange:function(e){return A(e.value)},dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],className:"datatable-responsive",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:U,emptyMessage:"No products found.",header:ae,responsiveLayout:"scroll",children:[(0,o.jsx)(c.s,{selectionMode:"multiple",headerStyle:{width:"4rem"}}),(0,o.jsx)(c.s,{field:"code",header:"Code",sortable:!0,body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Code"}),e.code]})},headerStyle:{minWidth:"15rem"}}),(0,o.jsx)(c.s,{field:"name",header:"Name",sortable:!0,body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Name"}),e.name]})},headerStyle:{minWidth:"15rem"}}),(0,o.jsx)(c.s,{header:"Image",body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Image"}),(0,o.jsx)("img",{src:"".concat(W,"/demo/images/product/").concat(e.image),alt:e.image,className:"shadow-2",width:"100"})]})}}),(0,o.jsx)(c.s,{field:"price",header:"Price",body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Price"}),(t=e.price,t.toLocaleString("en-US",{style:"currency",currency:"USD"}))]});var t},sortable:!0}),(0,o.jsx)(c.s,{field:"category",header:"Category",sortable:!0,body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Category"}),e.category]})},headerStyle:{minWidth:"10rem"}}),(0,o.jsx)(c.s,{field:"rating",header:"Reviews",body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Reviews"}),(0,o.jsx)(y.i,{value:e.rating,readOnly:!0,cancel:!1})]})},sortable:!0}),(0,o.jsx)(c.s,{field:"inventoryStatus",header:"Status",body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"p-column-title",children:"Status"}),(0,o.jsx)("span",{className:"product-badge status-".concat(e.inventoryStatus.toLowerCase()),children:e.inventoryStatus})]})},sortable:!0,headerStyle:{minWidth:"10rem"}}),(0,o.jsx)(c.s,{body:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.z,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success mr-2",onClick:function(){return function(e){D((0,r.Z)({},e)),C(!0)}(e)}}),(0,o.jsx)(s.z,{icon:"pi pi-trash",className:"p-button-rounded p-button-warning",onClick:function(){return function(e){D(e),O(!0)}(e)}})]})},headerStyle:{minWidth:"10rem"}})]}),(0,o.jsxs)(d.V,{visible:w,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",footer:oe,onHide:Y,children:[z.image&&(0,o.jsx)("img",{src:"".concat(W,"/demo/images/product/").concat(z.image),alt:z.image,width:"150",className:"mt-0 mx-auto mb-5 block shadow-2"}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsx)("label",{htmlFor:"name",children:"Name"}),(0,o.jsx)(f.o,{id:"name",value:z.name,onChange:function(e){return ne(e,"name")},required:!0,autoFocus:!0,className:(0,x.AK)({"p-invalid":Z&&!z.name})}),Z&&!z.name&&(0,o.jsx)("small",{className:"p-invalid",children:"Name is required."})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsx)("label",{htmlFor:"description",children:"Description"}),(0,o.jsx)(h.g,{id:"description",value:z.description,onChange:function(e){return ne(e,"description")},required:!0,rows:3,cols:20})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsx)("label",{className:"mb-3",children:"Category"}),(0,o.jsxs)("div",{className:"formgrid grid",children:[(0,o.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,o.jsx)(g.E,{inputId:"category1",name:"category",value:"Accessories",onChange:te,checked:"Accessories"===z.category}),(0,o.jsx)("label",{htmlFor:"category1",children:"Accessories"})]}),(0,o.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,o.jsx)(g.E,{inputId:"category2",name:"category",value:"Clothing",onChange:te,checked:"Clothing"===z.category}),(0,o.jsx)("label",{htmlFor:"category2",children:"Clothing"})]}),(0,o.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,o.jsx)(g.E,{inputId:"category3",name:"category",value:"Electronics",onChange:te,checked:"Electronics"===z.category}),(0,o.jsx)("label",{htmlFor:"category3",children:"Electronics"})]}),(0,o.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,o.jsx)(g.E,{inputId:"category4",name:"category",value:"Fitness",onChange:te,checked:"Fitness"===z.category}),(0,o.jsx)("label",{htmlFor:"category4",children:"Fitness"})]})]})]}),(0,o.jsxs)("div",{className:"formgrid grid",children:[(0,o.jsxs)("div",{className:"field col",children:[(0,o.jsx)("label",{htmlFor:"price",children:"Price"}),(0,o.jsx)(m.R,{id:"price",value:z.price,onValueChange:function(e){return re(e,"price")},mode:"currency",currency:"USD",locale:"en-US"})]}),(0,o.jsxs)("div",{className:"field col",children:[(0,o.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),(0,o.jsx)(m.R,{id:"quantity",value:z.quantity,onValueChange:function(e){return re(e,"quantity")},integeronly:!0})]})]})]}),(0,o.jsx)(d.V,{visible:E,style:{width:"450px"},header:"Confirm",modal:!0,footer:ie,onHide:B,children:(0,o.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,o.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),z&&(0,o.jsxs)("span",{children:["Are you sure you want to delete ",(0,o.jsx)("b",{children:z.name}),"?"]})]})}),(0,o.jsx)(d.V,{visible:F,style:{width:"450px"},header:"Confirm",modal:!0,footer:le,onHide:J,children:(0,o.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,o.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),z&&(0,o.jsx)("span",{children:"Are you sure you want to delete the selected products?"})]})})]})})})}},2552:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var r=n(7294),a=n(411),o=n(7074),i=n(3643);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=r.memo(r.forwardRef((function(e,t){var n=r.useRef(t),c=r.useRef(0),u=function(e){var t=n.current;t&&i.p7.isVisible(t)&&(c.current||(c.current=t.scrollHeight,t.style.overflow="hidden"),(c.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",c.current=t.scrollHeight))},d=n.current&&n.current.value,p=r.useMemo((function(){return i.gb.isNotEmpty(e.value)||i.gb.isNotEmpty(e.defaultValue)||i.gb.isNotEmpty(d)}),[e.value,e.defaultValue,d]);r.useEffect((function(){i.gb.combinedRefs(n,t)}),[n,t]),r.useEffect((function(){e.autoResize&&u(!0)}),[e.autoResize]);var m=i.gb.isNotEmpty(e.tooltip),f=i.gb.findDiffKeys(e,s.defaultProps),h=(0,i.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":p,"p-inputtextarea-resizable":e.autoResize},e.className);return r.createElement(r.Fragment,null,r.createElement("textarea",l({ref:n},f,{className:h,onFocus:function(t){e.autoResize&&u(),e.onFocus&&e.onFocus(t)},onBlur:function(t){e.autoResize&&u(),e.onBlur&&e.onBlur(t)},onKeyUp:function(t){e.autoResize&&u(),e.onKeyUp&&e.onKeyUp(t)},onKeyDown:function(t){e.onKeyDown&&e.onKeyDown(t),e.keyfilter&&a.F.onKeyPress(t,e.keyfilter,e.validateOnly)},onInput:function(t){e.autoResize&&u(),e.onInput&&e.onInput(t);var n=t.target;i.gb.isNotEmpty(n.value)?i.p7.addClass(n,"p-filled"):i.p7.removeClass(n,"p-filled")},onPaste:function(t){e.onPaste&&e.onPaste(t),e.keyfilter&&a.F.onPaste(t,e.keyfilter,e.validateOnly)}})),m&&r.createElement(o.u,l({target:n,content:e.tooltip},e.tooltipOptions)))})));s.displayName="InputTextarea",s.defaultProps={__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1}},5969:function(e,t,n){"use strict";n.d(t,{i:function(){return p}});var r=n(7294),a=n(7074),o=n(3643);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function c(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=r.memo(r.forwardRef((function(e,t){var n=r.useRef(null),l=!e.disabled&&!e.readOnly,s=l?0:null,c=function(t,n){l&&e.onChange&&e.onChange({originalEvent:t,value:n,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:n}}),t.preventDefault()},u=function(t){l&&e.onChange&&e.onChange({originalEvent:t,value:null,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:null}}),t.preventDefault()},m=function(e){"Enter"===e.key&&u(e)};r.useImperativeHandle(t,(function(){return{props:e,getElement:function(){return n.current}}}));var f=o.gb.isNotEmpty(e.tooltip),h=o.gb.findDiffKeys(e,p.defaultProps),g=(0,o.AK)("p-rating",{"p-disabled":e.disabled,"p-readonly":e.readOnly},e.className),y=function(){if(e.cancel){var t=o.Cz.getJSXIcon(e.cancelIcon,d({className:"p-rating-icon p-rating-cancel"},e.cancelIconProps),{props:e});return r.createElement("div",{className:"p-rating-item p-rating-cancel-item",onClick:u,tabIndex:s,onKeyDown:m},t)}return null}(),b=Array.from({length:e.stars},(function(e,t){return t+1})).map((function(t){var n=t<=e.value,a=(0,o.AK)("p-rating-item",{"p-rating-item-active":n}),i=n?{type:e.onIcon,props:e.onIconProps}:{type:e.offIcon,props:e.offIconProps},l=o.Cz.getJSXIcon(i.type,d({className:"p-rating-icon"},i.props),{props:e});return r.createElement("div",{key:t,className:a,tabIndex:s,onClick:function(e){return c(e,t)},onKeyDown:function(e){return function(e,t){"Enter"===e.key&&c(e,t)}(e,t)}},l)}));return r.createElement(r.Fragment,null,r.createElement("div",i({ref:n,id:e.id,className:g,style:e.style},h),y,b),f&&r.createElement(a.u,i({target:n,content:e.tooltip},e.tooltipOptions)))})));p.displayName="Rating",p.defaultProps={__TYPE:"Rating",id:null,value:null,disabled:!1,readOnly:!1,stars:5,cancel:!0,style:null,className:null,tooltip:null,tooltipOptions:null,onChange:null,onIcon:"pi pi-star-fill",offIcon:"pi pi-star",cancelIcon:"pi pi-ban",cancelIconProps:null,onIconProps:null,offIconProps:null}},5537:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(7294),a=n(3643);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=r.memo(r.forwardRef((function(e,t){var n=r.useRef(null),l=a.gb.findDiffKeys(e,i.defaultProps),s=(0,a.AK)("p-toolbar p-component",e.className),c=a.gb.getJSXElement(e.left,e),u=a.gb.getJSXElement(e.right,e);return r.useImperativeHandle(t,(function(){return{props:e,getElement:function(){return n.current}}})),r.createElement("div",o({id:e.id,ref:n,className:s,style:e.style,role:"toolbar"},l),r.createElement("div",{className:"p-toolbar-group-left"},c),r.createElement("div",{className:"p-toolbar-group-right"},u))})));i.displayName="Toolbar",i.defaultProps={__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null}},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943);var a=n(3375);var o=n(1566);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[5257,8725,1635,2727,4420,6062,6998,9774,2888,179],(function(){return t=1419,e(e.s=t);var t}));var t=e.O();_N_E=t}]);