_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[97],{"/UaR":function(e,t,n){"use strict";n.r(t);var r=n("jg1C"),i=(n("ERkP"),n("zTMU")),a=n("QnPE"),o=n("h7YW"),l=[i.a],c=[o.default];t.default=function(){return Object(r.jsx)(a.a,{components:l,examples:c,readme:'# `@visx/wordcloud`\n\n<a title="@visx/wordcloud npm downloads" href="https://www.npmjs.com/package/@visx/wordcloud">\n  <img src="https://img.shields.io/npm/dm/@visx/wordcloud.svg?style=flat-square" />\n</a>\n\nWord clouds are visual representations of text data in which each word\'s value is indicated by its\nfont size or color.\n\n## Installation\n\n```\nnpm install --save @visx/wordcloud\n```\n',visxPackage:"wordcloud"})}},"/bzO":function(e,t,n){"use strict";function r(e,t){var n,r=0,i=(e=e.slice()).length-1,a=e[r],o=e[i];return o<a&&(n=r,r=i,i=n,n=a,a=o,o=n),e[r]=t.floor(a),e[i]=t.ceil(o),e}n.d(t,"a",(function(){return r}))},"75In":function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var r=n("PB0s"),i=n("VBI3"),a=n("/bzO"),o=n("2+fR"),l=n("W1cA");function c(e){return Math.log(e)}function u(e){return Math.exp(e)}function s(e){return-Math.log(-e)}function d(e){return-Math.exp(-e)}function f(e){return isFinite(e)?+("1e"+e):e<0?0:e}function p(e){return function(t){return-e(-t)}}function h(e){var t,n,o=e(c,u),l=o.domain,h=10;function m(){return t=function(e){return e===Math.E?Math.log:10===e&&Math.log10||2===e&&Math.log2||(e=Math.log(e),function(t){return Math.log(t)/e})}(h),n=function(e){return 10===e?f:e===Math.E?Math.exp:function(t){return Math.pow(e,t)}}(h),l()[0]<0?(t=p(t),n=p(n),e(s,d)):e(c,u),o}return o.base=function(e){return arguments.length?(h=+e,m()):h},o.domain=function(e){return arguments.length?(l(e),m()):l()},o.ticks=function(e){var i,a=l(),o=a[0],c=a[a.length-1];(i=c<o)&&(f=o,o=c,c=f);var u,s,d,f=t(o),p=t(c),m=null==e?10:+e,g=[];if(!(h%1)&&p-f<m){if(f=Math.floor(f),p=Math.ceil(p),o>0){for(;f<=p;++f)for(s=1,u=n(f);s<h;++s)if(!((d=u*s)<o)){if(d>c)break;g.push(d)}}else for(;f<=p;++f)for(s=h-1,u=n(f);s>=1;--s)if(!((d=u*s)<o)){if(d>c)break;g.push(d)}2*g.length<m&&(g=Object(r.a)(o,c,m))}else g=Object(r.a)(f,p,Math.min(p-f,m)).map(n);return i?g.reverse():g},o.tickFormat=function(e,r){if(null==r&&(r=10===h?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),e===1/0)return r;null==e&&(e=10);var a=Math.max(1,h*e/o.ticks().length);return function(e){var i=e/n(Math.round(t(e)));return i*h<h-.5&&(i*=h),i<=a?r(e):""}},o.nice=function(){return l(Object(a.a)(l(),{floor:function(e){return n(Math.floor(t(e)))},ceil:function(e){return n(Math.ceil(t(e)))}}))},o}function m(){var e=h(Object(o.d)()).domain([1,10]);return e.copy=function(){return Object(o.a)(e,m()).base(e.base())},l.b.apply(e,arguments),e}},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),l=n("O94r"),c=n.n(l),u=["top","left","transform","className","children","innerRef"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){var t=e.top,n=void 0===t?0:t,r=e.left,i=void 0===r?0:r,a=e.transform,l=e.className,d=e.children,f=e.innerRef,p=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,u);return o.a.createElement("g",s({ref:f,className:c()("visx-group",l),transform:a||"translate("+i+", "+n+")"},p),d)}d.propTypes={top:i.a.number,left:i.a.number,transform:i.a.string,className:i.a.string,children:i.a.node,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])}},O3m4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ERkP"),i=n.n(r),a=n("j1R1"),o=["dx","dy","textAnchor","innerRef","innerTextRef","verticalAnchor","angle","lineHeight","scaleToFit","capHeight","width"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={overflow:"visible"};function u(e){var t=e.dx,n=void 0===t?0:t,r=e.dy,u=void 0===r?0:r,s=e.textAnchor,d=void 0===s?"start":s,f=e.innerRef,p=e.innerTextRef,h=(e.verticalAnchor,e.angle,e.lineHeight),m=void 0===h?"1em":h,g=(e.scaleToFit,e.capHeight,e.width,function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o)),y=g.x,b=void 0===y?0:y,x=g.fontSize,v=Object(a.a)(e),w=v.wordsByLines,j=v.startDy,O=v.transform;return i.a.createElement("svg",{ref:f,x:n,y:u,fontSize:x,style:c},w.length>0?i.a.createElement("text",l({ref:p,transform:O},g,{textAnchor:d}),w.map((function(e,t){return i.a.createElement("tspan",{key:t,x:b,dy:0===t?j:m},e.words.join(" "))}))):null)}},gmJU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/wordcloud",function(){return n("/UaR")}])},h7YW:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("jg1C"),i=(n("ERkP"),n("UaBx")),a=n("i9k6"),o=n("fFFM");n.d(t,"packageJson",(function(){return o}));var l={background:"#e4e3d8"},c={color:"#111"};function u(){return Object(r.jsx)(a.a,{title:"Wordcloud",description:"<Wordcloud />",exampleRenderer:function(e){return Object(r.jsx)(i.a,{width:e.width,height:e.height})},exampleUrl:"/wordcloud",tileStyles:l,detailsStyles:c,detailsHeight:0})}},hdX1:function(e,t,n){"use strict";var r=n("ViZ6"),i=n.n(r);t.a=i()((function(e,t){try{var n=document.getElementById("__react_svg_text_measurement_id");if(!n){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(n=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(n),document.body.appendChild(r)}return Object.assign(n.style,t),n.textContent=e,n.getComputedTextLength()}catch(i){return null}}),(function(e,t){return e+"_"+JSON.stringify(t)}))},i2hO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("75In"),i=n("xx0A"),a=Object(i.b)("domain","range","reverse","base","clamp","interpolate","nice","round");function o(e){return a(Object(r.a)(),e)}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=f;var r=u(n("aWzz")),i=u(n("FGHv")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n("ERkP")),o=n("Br7l"),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=[];function f(e){var t=e.className,n=e.children,r=e.debounceTime,c=void 0===r?300:r,u=e.ignoreDimensions,f=void 0===u?d:u,p=e.parentSizeStyles,h=void 0===p?{width:"100%",height:"100%"}:p,m=e.enableDebounceLeadingCall,g=void 0===m||m,y=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l),b=(0,a.useRef)(null),x=(0,a.useRef)(0),v=(0,a.useState)({width:0,height:0,top:0,left:0}),w=v[0],j=v[1],O=(0,a.useMemo)((function(){var e=Array.isArray(f)?f:[f];return(0,i.default)((function(t){j((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),c,{leading:g})}),[c,g,f]);return(0,a.useEffect)((function(){var e=new o.ResizeObserver((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,i=t.width,a=t.height;x.current=window.requestAnimationFrame((function(){O({width:i,height:a,top:r,left:n})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(x.current),e.disconnect(),null!=O&&O.cancel&&O.cancel()}}),[O]),a.default.createElement("div",s({style:h,ref:b,className:t},y),n(s({},w,{ref:b.current,resize:O})))}f.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("zjfJ"),i=n("jg1C"),a=n("yFcC"),o=n.n(a),l=n("ERkP"),c=n.n(l),u=n("jvFD"),s=n.n(u),d=n("i6Tx"),f=n.n(d);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){var t,n,a=e.description,l=e.detailsHeight,u=void 0===l?76:l,d=e.detailsStyles,h=e.exampleProps,m=e.exampleRenderer,g=e.exampleUrl,y=e.tileStyles,b=e.title;return Object(i.jsxs)(i.Fragment,{children:[(t=g,n=Object(i.jsxs)("div",{style:y,className:"jsx-713312509 gallery-tile",children:[Object(i.jsx)("div",{className:"jsx-713312509 image",children:Object(i.jsx)(f.a,{children:function(e){var t=e.width,n=e.height;return c.a.createElement(m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(b||a?u:0)},h))}})}),(b||a)&&Object(i.jsxs)("div",{style:d,className:"jsx-713312509 details",children:[b&&Object(i.jsx)("div",{className:"jsx-713312509 title",children:b}),a&&Object(i.jsx)("div",{className:"jsx-713312509 description",children:Object(i.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),t?Object(i.jsx)(s.a,{href:t,children:n}):n),Object(i.jsx)(o.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{h.displayName="GalleryTile",h.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:h.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(m){}},j1R1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),i=n("leIH"),a=n.n(i),o=n("hdX1"),l=["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"];function c(e){return"number"===typeof e}function u(e){return"number"===typeof e&&Number.isFinite(e)||"string"===typeof e}function s(e){var t=e.verticalAnchor,n=void 0===t?"end":t,i=e.scaleToFit,s=void 0!==i&&i,d=e.angle,f=e.width,p=e.lineHeight,h=void 0===p?"1em":p,m=e.capHeight,g=void 0===m?"0.71em":m,y=e.children,b=e.style,x=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l),v=x.x,w=void 0===v?0:v,j=x.y,O=void 0===j?0:j,k=!u(w)||!u(O),P=Object(r.useMemo)((function(){return{wordsWithWidth:(null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(e){return{word:e,wordWidth:Object(o.a)(e,b)||0}})),spaceWidth:Object(o.a)("\xa0",b)||0}}),[y,b]),_=P.wordsWithWidth,E=P.spaceWidth,M=Object(r.useMemo)((function(){return k?[]:f||s?_.reduce((function(e,t){var n=t.word,r=t.wordWidth,i=e[e.length-1];if(i&&(null==f||s||(i.width||0)+r+E<f))i.words.push(n),i.width=i.width||0,i.width+=r+E;else{var a={words:[n],width:r};e.push(a)}return e}),[]):[{words:null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[k,f,s,y,_,E]),S=Object(r.useMemo)((function(){return k?"":"start"===n?a()("calc("+g+")"):"middle"===n?a()("calc("+(M.length-1)/2+" * -"+h+" + ("+g+" / 2))"):a()("calc("+(M.length-1)+" * -"+h+")")}),[k,n,g,M.length,h]),R=Object(r.useMemo)((function(){var e=[];if(k)return"";if(c(w)&&c(O)&&c(f)&&s&&M.length>0){var t=M[0].width||1,n="shrink-only"===s?Math.min(f/t,1):f/t,r=n,i=w-n*w,a=O-r*O;e.push("matrix("+n+", 0, 0, "+r+", "+i+", "+a+")")}return d&&e.push("rotate("+d+", "+w+", "+O+")"),e.length>0?e.join(" "):""}),[k,w,O,f,s,M,d]);return{wordsByLines:M,startDy:S,transform:R}}},zjfJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["gmJU",0,2,1,3,4,5,8,9,10,12,44]]]);