(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,g=e.priority,h=void 0!==g&&g,j=e.loading,A=e.lazyRoot,k=void 0===A?null:A,C=e.lazyBoundary,E=e.className,M=e.quality,R=e.width,L=e.height,I=e.style,P=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,B=e.placeholder,D=void 0===B?"empty":B,U=e.blurDataURL,W=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=m||T||c.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[T]),F=W,Z=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(Z=F.layout),delete F.layout);var V=S;if("loader"in F){if(F.loader){var K=F.loader;V=function(e){e.config;var t=v(e,["config"]);return K(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var J=_(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(U=U||J.blurDataURL,G=J.src,(!Z||"fill"!==Z)&&(L=L||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!h&&("lazy"===j||"undefined"===typeof j);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Q=!1);b.has(t)&&(Q=!1);y&&(f=!0);var X,Y=o(l.useState(!1),2),$=Y[0],ee=Y[1],te=o(s.useIntersection({rootRef:k,rootMargin:C||"200px",disabled:!Q}),3),ne=te[0],re=te[1],oe=te[2],ie=!Q||re,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},se=z(R),de=z(L),fe=z(M);0;var pe=Object.assign({},I,ce),ge="blur"!==D||$?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===Z)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var ve=de/se,he=isNaN(ve)?"100%":"".concat(100*ve,"%");"responsive"===Z?(ae.display="block",ae.position="relative",ue=!0,le.paddingTop=he):"intrinsic"===Z?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ue=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===Z&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};ie&&(ye=x({config:H,src:t,unoptimized:f,layout:Z,width:se,quality:fe,sizes:n,loader:V}));var me=t;0;var be,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var _e=(r(be={},we,ye.srcSet),r(be,je,ye.sizes),be),xe=l.default.useLayoutEffect,ze=l.useRef(N),Se=l.useRef(t);l.useEffect((function(){ze.current=N}),[N]),xe((function(){Se.current!==t&&(oe(),Se.current=t)}),[oe,t]);var Ae=p({isLazy:Q,imgAttributes:ye,heightInt:de,widthInt:se,qualityInt:fe,layout:Z,className:E,imgStyle:pe,blurStyle:ge,loading:j,config:H,unoptimized:f,placeholder:D,loader:V,srcString:me,onLoadingCompleteRef:ze,setBlurComplete:ee,setIntersection:ne,isVisible:ie,noscriptSizes:n},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ae},ue?l.default.createElement("span",{style:le},X?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,l.default.createElement(O,Object.assign({},Ae))),h?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},_e))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function v(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||{},y=h.experimentalUnoptimized,m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(k(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(r);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,i(c));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,r,o,i){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,a=e.imgStyle,u=e.blurStyle,c=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,g=e.config,h=e.unoptimized,y=e.loader,m=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,j=e.onLoad,_=e.onError,z=(e.isVisible,e.noscriptSizes),S=v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":o,className:i,style:p({},a,u),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,f,0,s,m,b)}),[w,f,o,s,m,b]),onLoad:function(e){A(e.currentTarget,f,0,s,m,b),j&&j(e)},onError:function(e){"blur"===s&&b(!0),_&&_(e)}})),(c||"blur"===s)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},S,x({config:g,src:f,unoptimized:h,layout:o,width:n,quality:r,sizes:z,loader:y}),{decoding:"async","data-nimg":o,style:a,className:i,loading:d}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),l=n(2725),u=n(3462),c=n(1018),s=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof i.default.useTransition,g={};function v(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;g[t+"%"+n+(o?"%"+o:"")]=!0}}var h=i.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,y=e.children,m=e.prefetch,b=e.passHref,w=e.replace,j=e.soft,_=e.shallow,x=e.scroll,z=e.locale,S=e.onClick,A=e.onMouseEnter,O=e.legacyBehavior,k=void 0===O?!0!==Boolean(!1):O,C=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=y,!k||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var E=!1!==m,M=r(p?i.default.useTransition():[],2)[1],R=i.default.useContext(u.RouterContext),L=i.default.useContext(c.AppRouterContext);L&&(R=L);var I,P=i.default.useMemo((function(){var e=r(a.resolveHref(R,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?a.resolveHref(R,h):n||t}}),[R,o,h]),q=P.href,N=P.as,B=i.default.useRef(q),D=i.default.useRef(N);k&&(I=i.default.Children.only(n));var U=k?I&&"object"===typeof I&&I.ref:t,W=r(s.useIntersection({rootMargin:"200px"}),3),T=W[0],H=W[1],F=W[2],Z=i.default.useCallback((function(e){D.current===N&&B.current===q||(F(),D.current=N,B.current=q),T(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[N,U,q,F,T]);i.default.useEffect((function(){var e=H&&E&&a.isLocalURL(q),t="undefined"!==typeof z?z:R&&R.locale,n=g[q+"%"+N+(t?"%"+t:"")];e&&!n&&v(R,q,N,{locale:t})}),[N,q,H,z,E,R]);var V={ref:Z,onClick:function(e){k||"function"!==typeof S||S(e),k&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,u,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[i?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:u})};s?s(d):d()}}(e,R,q,N,w,j,_,x,z,L?M:void 0)},onMouseEnter:function(e){k||"function"!==typeof A||A(e),k&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),a.isLocalURL(q)&&v(R,q,N,{priority:!0})}};if(!k||b||"a"===I.type&&!("href"in I.props)){var K="undefined"!==typeof z?z:R&&R.locale,G=R&&R.isLocaleDomain&&d.getDomainLocale(N,K,R.locales,R.domainLocales);V.href=G||f.addBasePath(l.addLocale(N,K,R&&R.defaultLocale))}return k?i.default.cloneElement(I,V):i.default.createElement("a",Object.assign({},C,V),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=o.useRef(),d=r(o.useState(!1),2),f=d[0],p=d[1],g=r(o.useState(null),2),v=g[0],h=g[1];o.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),c||f)return;return v&&v.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},u.push(n),l.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[v,c,n,t,f]);var y=o.useCallback((function(){p(!1)}),[]);return[h,f,y]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var i=o.default.createContext(null);t.AppRouterContext=i;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);