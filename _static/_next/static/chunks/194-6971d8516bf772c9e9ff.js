"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{6334:function(e,n,t){var r,o,a,i,l,c,s,u,d=t(7294),f=t(1288),b=t(1123);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var m=Object.keys(b.AV),h=(0,f.iv)(r||(r=p(["\n  ","\n"])),(function(e){var n=e.breakPoint,t=e.theme;return n&&Object.keys(n).sort((function(e,n){return m.indexOf(e)-m.indexOf(n)})).map((function(e){return"number"===typeof n[e]?(0,b.bK)(e)(o||(o=p(["\n            flex: 0 0 ","%;\n            max-width: ","%;\n            display: block;"])),100/(0,b.FP)(t)*n[e],100/(0,b.FP)(t)*n[e]):n[e]?(0,b.bK)(e)(a||(a=p(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"]))):(0,b.bK)(e)(i||(i=p(["display: none;"])))}))})),g=(0,f.iv)(l||(l=p(["\n  ","\n"])),(function(e){var n=e.offset,t=e.theme;return n&&Object.keys(n).map((function(e){return(0,b.bK)(e)(c||(c=p(["\n          margin-",": \n          ","%;"])),"rtl"==t.dir?"right":"left",100/(0,b.FP)(t)*n[e])}))})),v=f.ZP.div(s||(s=p(["\n  ","\n"])),(function(e){var n=e.theme,t=e.first,r=e.last,o=e.order;return(0,f.iv)(u||(u=p(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ","px;\n  padding-left: ","px;\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,b.Y_)(n)/2,(0,b.Y_)(n)/2,h,g,t&&"order: -1;",r&&"order: ".concat((0,b.FP)(n)+1,";"),o&&"order: ".concat(o,";"))}));n.Z=function(e){return d.createElement(v,e,e.children)}},6764:function(e,n,t){var r,o,a,i,l,c,s,u,d,f,b=t(7294),p=t(1288),m=t(1123);function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var g=p.ZP.div(r||(r=h(["\n  display: flex;\n  flex-wrap: wrap;\n  ","\n"])),(function(e){return(0,p.iv)(o||(o=h(["\n    margin-right: ","px;\n    margin-left: ","px;\n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  "])),(0,m.Y_)(e.theme)/-2,(0,m.Y_)(e.theme)/-2,e.reverse&&"flex-direction: row-reverse;",e.start&&(0,m.bK)(e.start)(a||(a=h(["\n      justify-content: flex-start;\n    "]))),e.center&&(0,m.bK)(e.center)(i||(i=h(["\n      justify-content: center;\n    "]))),e.end&&(0,m.bK)(e.end)(l||(l=h(["\n      justify-content: flex-end;\n    "]))),e.top&&(0,m.bK)(e.top)(c||(c=h(["\n      align-items: flex-start;\n    "]))),e.middle&&(0,m.bK)(e.middle)(s||(s=h(["\n      align-items: center;\n    "]))),e.bottom&&(0,m.bK)(e.bottom)(u||(u=h(["\n      align-items: flex-end;\n    "]))),e.around&&(0,m.bK)(e.around)(d||(d=h(["\n      justify-content: space-around;\n    "]))),e.between&&(0,m.bK)(e.between)(f||(f=h(["\n      justify-content: space-between;\n    "]))))}));n.Z=function(e){return b.createElement(g,e,e.children)}},9045:function(e,n,t){t.d(n,{O:function(){return v},m:function(){return x}});var r,o,a=t(7294),i=t(1288),l=t(5914);function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=i.ZP.div(r||(r=c(["\n  ","\n"])),(function(e){var n=e.theme,t=e.fullWidth;return(0,i.iv)(o||(o=c(["\n    display: block;\n    background-color: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    .tabs {\n      border-bottom: "," "," ",";\n      display: flex;\n      flex-direction: row;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      ","\n\n      .tab {\n        cursor: pointer;\n        margin-bottom: -1px;\n        text-align: center;\n        position: relative;\n        &.active a::before {\n          display: block;\n        }\n        a {\n          background-color: ",";\n          padding: ",";\n          color: ",";\n          font-family: ",";\n          font-size: ",";\n          font-weight: ",";\n          line-height: ",";\n          text-transform: ",";\n          display: flex;\n          align-items: center;\n          position: relative;\n          text-decoration: none;\n\n          &::before {\n            display: none;\n            position: absolute;\n            content: '';\n            width: 100%;\n            border-radius: 3px;\n            bottom: -2px;\n            left: 0;\n            background-color: ",";\n            height: ",";\n          }\n          .tabs-icon {\n            vertical-align: middle;\n          }\n\n          .tabs-icon + span {\n            margin-",": 0.5rem;\n          }\n        }\n\n        &.active {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &:focus {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &:hover {\n          a {\n            color: ",";\n            background-color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &.disabled {\n          & > * {\n            opacity: 0.5;\n          }\n          cursor: default;\n          pointer-events: none;\n          a {\n            background-color: ",";\n            color: ",";\n            cursor: default;\n            pointer-events: none;\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &.responsive {\n          @media screen and (max-width: ",") {\n            a span {\n              display: none;\n            }\n          }\n        }\n      }\n    }\n    .tab-content {\n      flex: 1;\n      -ms-flex: 1 1 auto;\n      overflow: auto;\n      background-color: ",";\n      color: ",";\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      padding: ",";\n      ","\n    }\n  "])),n.tabsetBackgroundColor,n.tabsetBorderRadius,n.tabsetShadow,n.tabsetDividerWidth,n.tabsetDividerStyle,n.tabsetDividerColor,t&&"justify-content: space-around;",n.tabsetTabBackgroundColor,n.tabsetTabPadding,n.tabsetTabTextColor,n.tabsetTabTextFontFamily,n.tabsetTabTextFontSize,n.tabsetTabTextFontWeight,n.tabsetTabTextLineHeight,n.tabsetTabTextTransform,n.tabsetTabUnderlineColor,n.tabsetTabUnderlineWidth,"rtl"===n.dir?"right":"left",n.tabsetTabActiveBackgroundColor,n.tabsetTabActiveTextColor,n.tabsetTabActiveUnderlineColor,n.tabsetTabFocusBackgroundColor,n.tabsetTabFocusTextColor,n.tabsetTabFocusUnderlineColor,n.tabsetTabHoverTextColor,n.tabsetTabHoverBackgroundColor,n.tabsetTabHoverUnderlineColor,n.tabsetTabDisabledBackgroundColor,n.tabsetTabDisabledTextColor,n.tabsetTabDisabledUnderlineColor,n.tabsetTabTextHideBreakpoint,n.tabsetContentBackgroundColor,n.tabsetContentTextColor,n.tabsetContentTextFontFamily,n.tabsetContentTextFontSize,n.tabsetContentTextFontWeight,n.tabsetContentTextLineHeight,n.tabsetContentPadding,(0,l.q9)(n.tabsetScrollbarColor,n.tabsetScrollbarBackgroundColor,n.tabsetScrollbarWidth))})),u=t(4989),d=t(4090);function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||h(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){if(e){if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v=function(e){return a.createElement("div",{className:"tab-content"},e.children)},x=function(e){var n,t=m(a.useState([]),2),r=t[0],o=t[1],i=m(a.useState(null!==(n=e.activeIndex)&&void 0!==n?n:0),2),l=i[0],c=i[1];return a.useEffect((function(){e.activeIndex&&c(e.activeIndex)}),[e.activeIndex]),a.useEffect((function(){var n=[];a.Children.forEach(e.children,(function(e){(e.props.icon||e.props.title)&&n.push(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props))})),o(n)}),[e.children]),a.createElement(s,{className:e.className,style:e.style,fullWidth:e.fullWidth},a.createElement("ul",{className:"tabs"},r.map((function(n,t){var r=["tab"];return t===l&&r.push("active"),n.responsive&&r.push("responsive"),n.disabled&&r.push("disabled"),n.className&&r.push.apply(r,f(n.className.split(" "))),a.createElement("li",{style:n.style,key:t,className:r.join(" "),onClick:function(){return!n.disabled&&function(n){"function"===typeof e.onSelect&&e.onSelect(n),c(n)}(t)}},a.createElement("a",null,n.icon&&a.createElement(d.S5,{icon:n.icon,className:"tabs-icon"}),n.title&&a.createElement("span",null,n.title)),n.badge&&a.createElement(u.Z,{status:n.badge.status,position:n.badge.position},n.badge.title))}))),a.Children.map(e.children,(function(e,n){if(n===l&&e.props.children)return e})))}},870:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(5893),o=t(7294),a=t(1288),i=t(4942),l=t(3997);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var s={sidebarHeaderGap:"2rem",fontFamilyPrimary:'-apple-system,BlinkMacSystemFont,\n          "Segoe UI",Roboto,"Helvetica Neue",\n          Arial,sans-serif,"Apple Color Emoji",\n          "Segoe UI Emoji","Segoe UI Symbol"'};function u(e,n){switch(e){case"dark":case"cosmic":case"corporate":default:return(0,l.jG)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({dir:n},s))}}var d=t(7967),f=t(9446),b=t(1955),p=t(168),m=t(1664),h=t(1163),g=t(4792),v=t(4090),x=t(3666),y=t(1332),j=t(1241),w=t(8252),k=t(1123);function O(){var e=(0,p.Z)(["\n    .right{\n      display: none;\n    }\n  "]);return O=function(){return e},e}var S=a.ZP.div.withConfig({displayName:"Header__HeaderStyle",componentId:"sc-1nw2gck-0"})(["display:flex;width:100%;justify-content:space-between;"," .right > div{height:auto;display:flex;align-content:center;}.logo{font-size:1.25rem;white-space:nowrap;text-decoration:none;}.left{display:flex;align-items:center;.github{font-size:18px;margin-right:5px;}}"],(0,k.pf)("sm")(O())),C=a.ZP.span.withConfig({displayName:"Header__Label",componentId:"sc-1nw2gck-1"})(["display:flex;align-items:center;"]),P=(0,a.ZP)(g.Z).withConfig({displayName:"Header__SelectStyled",componentId:"sc-1nw2gck-2"})(["min-width:150px;"]),T=function(e){var n=(0,h.useRouter)(),t=function(){return[{value:"default",label:(0,r.jsxs)(C,{children:[(0,r.jsx)(v.P1,{name:"droplet",options:{fill:"#a6c1ff"}}),"Default"]})},{value:"dark",label:(0,r.jsxs)(C,{children:[(0,r.jsx)(v.P1,{name:"droplet",options:{fill:"#192038"}}),"Dark"]})},{value:"cosmic",label:(0,r.jsxs)(C,{children:[(0,r.jsx)(v.P1,{name:"droplet",options:{fill:"#5a37b8"}}),"Cosmic"]})},{value:"corporate",label:(0,r.jsxs)(C,{children:[(0,r.jsx)(v.P1,{name:"droplet",options:{fill:"#3366ff"}}),"Corporate"]}),selected:!0}]};return(0,r.jsx)(d.NC,{fixed:!0,children:(0,r.jsxs)(S,{children:[(0,r.jsx)(y.e,{size:"Medium",actions:[{icon:{name:"menu-2-outline"},url:{onClick:e.toggleSidebar}},{content:(0,r.jsx)(m.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:"ConnectTek"})})},{content:(0,r.jsx)(P,{instanceId:"react-select-input",isSearchable:!1,shape:"SemiRound",placeholder:"Themes",value:t().find((function(n){return n.value===e.theme.value})),options:t(),onChange:function(n){var t=n.value;return e.theme.set(t)}})},{content:(0,r.jsx)(x.zx,{size:"Small",onClick:function(){return e.changeDir()},children:e.dir})}]}),(0,r.jsx)(y.e,{size:"Small",className:"right",actions:[{content:(0,r.jsx)(j.Z,{nextJs:!0,style:{cursor:"pointer"},placement:"bottom",currentPath:n.pathname,items:[{title:"Profile",link:{href:"/modal-overlays/tooltip"}},{title:"Log out",link:{href:"auth/login"}}],Link:m.default,children:(0,r.jsx)(w.Z,{name:"Amjath",title:"Manger",size:"Medium"})})}]})]})})},E=t(7747);function z(){var e=(0,p.Z)(["\n    .main-content {\n        padding: 0.75rem !important;\n      }\n  "]);return z=function(){return e},e}function F(){var e=(0,p.Z)(["\n        padding: 0;\n      "]);return F=function(){return e},e}var N=(0,a.vJ)(["",""],(function(e){var n=e.theme;return(0,a.iv)([""," html{font-size:16px;}.column.small{flex:0.15 !important;}.auth-layout{.main-content{padding:2.5rem;","}}aside.settings-sidebar{transition:transform 0.3s ease;width:19rem;overflow:hidden;transform:translateX(","100%);&.start{transform:translateX(","100%);}&.expanded,&.expanded.start{transform:translateX(0);}.scrollable{width:19rem;padding:3.4rem 0.25rem;}.main-container{width:19rem;transition:width 0.3s ease;overflow:hidden;.scrollable{width:19rem;}}}"," .with-margin{margin:0 0.75rem 2rem 0;}.inline-block{display:inline-block;}.popover-card{margin-bottom:0;width:300px;box-shadow:none;}.btn{color:#fff;text-transform:uppercase;letter-spacing:0.4px;font-weight:500;border:2px solid transparent;&:focus{outline:0;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25);}}.ck-content{min-height:20rem;}"],E.Z,(0,k.pf)("sm")(F()),"rtl"===n.dir&&"-","ltr"===n.dir&&"-",(0,k.pf)("xs")(z()))})),D=t(4868),I=[{title:"Home Page",icon:{name:"home"},link:{href:"/dashboard"}}],Z=function(e){var n=e.children,t=(0,o.useState)("default"),i=t[0],l=t[1],c=(0,o.useState)("ltr"),s=c[0],p=c[1],g=(0,o.useRef)(null),y=(0,h.useRouter)(),j=(0,o.useState)(!1),w=j[0],k=j[1],O=(0,o.useRef)(null),S=(0,o.useState)(!0),C=S[0],P=S[1];(0,o.useEffect)((function(){var e=function(){if("undefined"!==typeof localStorage&&localStorage.getItem("theme"))return localStorage.getItem("theme");var e=(new Date).getHours();return e>6&&e<19?"default":"dark"}();e!==i&&"default"===i&&l(e)}),[]);var E=y.pathname.startsWith("/auth");return(0,r.jsx)(o.Fragment,{children:(0,r.jsx)(a.f6,{theme:u(i,s),children:(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(N,{}),(0,r.jsxs)(d.Ar,{evaIcons:f.Z,dir:s,className:E?"":"auth-layout",children:[!E&&(0,r.jsx)(T,{dir:s,changeDir:function(){p("ltr"===s?"rtl":"ltr")},theme:{set:function(e){l(e),"undefined"!==typeof localStorage&&localStorage.setItem("theme",e)},value:i},toggleSidebar:function(){var e;return null===(e=g.current)||void 0===e?void 0:e.toggle()}}),(0,r.jsxs)(d.kz,{children:[!E&&(0,r.jsxs)(b.Y,{getState:function(e){P("compacted"!==e)},ref:g,property:"start",containerFixed:!0,responsive:!0,className:"menu-sidebar",children:[C&&(0,r.jsx)("header",{children:(0,r.jsx)(x.zx,{size:"Tiny",status:"Primary",onClick:function(){var e;k(!w),null===(e=O.current)||void 0===e||e.toggle()},fullWidth:!0,children:w?(0,r.jsx)(v.P1,{name:"arrow-circle-up"}):(0,r.jsx)(v.P1,{name:"arrow-circle-down"})})}),(0,r.jsx)(b.E,{children:(0,r.jsx)(D.v,{nextJs:!0,className:"sidebar-menu",Link:m.default,ref:O,items:I,currentPath:y.pathname,toggleSidebar:function(){var e;return null===(e=g.current)||void 0===e?void 0:e.hide()}})})]}),(0,r.jsxs)(d.bU,{children:[(0,r.jsx)(d.sQ,{children:(0,r.jsx)(d.rO,{className:"main-content",children:n})}),!E&&(0,r.jsx)(d.D4,{children:"Footer"})]})]})]})]})})})}}}]);