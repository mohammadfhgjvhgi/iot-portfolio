(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99012,e=>{"use strict";let t=(0,e.i(75254).default)("circuit-board",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);e.s(["CircuitBoard",()=>t],99012)},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",()=>t],55436)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",()=>t],48256)},8621,e=>{"use strict";let t=(0,e.i(68834).create)(e=>({activeSection:"",sidebarOpen:!1,searchOpen:!1,readSections:new Set,expandedSections:new Set,theme:"dark",setActiveSection:t=>e(e=>({activeSection:t,readSections:new Set([...e.readSections,t])})),toggleSidebar:()=>e(e=>({sidebarOpen:!e.sidebarOpen})),setSidebarOpen:t=>e({sidebarOpen:t}),toggleSearch:()=>e(e=>({searchOpen:!e.searchOpen})),setSearchOpen:t=>e({searchOpen:t}),markSectionRead:t=>e(e=>({readSections:new Set([...e.readSections,t])})),toggleSectionExpanded:t=>e(e=>{let n=new Set(e.expandedSections);return n.has(t)?n.delete(t):n.add(t),{expandedSections:n}}),toggleTheme:()=>e(e=>{let t="dark"===e.theme?"light":"dark";return"u">typeof document&&(document.documentElement.classList.toggle("dark","dark"===t),localStorage.setItem("guide-theme",t)),{theme:t}}),setTheme:t=>e({theme:t})}));e.s(["useGuideStore",0,t])},26999,41947,95926,e=>{"use strict";let t,n,r,o,a,i;var s,c,l,u,d,p,m,f,g,h=e.i(71645);function y(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}"u">typeof window&&window.document&&window.document.createElement;var b=e.i(20783),v=e.i(18050),S=globalThis?.document?h.useLayoutEffect:()=>{},C=h[" useId ".trim().toString()]||(()=>void 0),w=0;function x(e){let[t,n]=h.useState(C());return S(()=>{e||n(e=>e??String(w++))},[e]),e||(t?`radix-${t}`:"")}h[" useEffectEvent ".trim().toString()],h[" useInsertionEffect ".trim().toString()];var A=h[" useInsertionEffect ".trim().toString()]||S;Symbol("RADIX:SYNC_STATE");var P=e.i(74080),I=Symbol("radix.slottable");function E(e){return h.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===I}var R=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{var n,r;let o,a,i,s=(r=n=`Primitive.${t}`,(o=h.forwardRef((e,t)=>{let{children:n,...r}=e;if(h.isValidElement(n)){var o;let e,a,i=(o=n,(a=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(a=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),s=function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...e)=>{let t=a(...e);return o(...e),t}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props);return n.type!==h.Fragment&&(s.ref=t?(0,b.composeRefs)(t,i):i),h.cloneElement(n,s)}return h.Children.count(n)>1?h.Children.only(null):null})).displayName=`${r}.SlotClone`,a=o,(i=h.forwardRef((e,t)=>{let{children:n,...r}=e,o=h.Children.toArray(n),i=o.find(E);if(i){let e=i.props.children,n=o.map(t=>t!==i?t:h.Children.count(e)>1?h.Children.only(null):h.isValidElement(e)?e.props.children:null);return(0,v.jsx)(a,{...r,ref:t,children:h.isValidElement(e)?h.cloneElement(e,void 0,n):null})}return(0,v.jsx)(a,{...r,ref:t,children:n})})).displayName=`${n}.Slot`,i),c=h.forwardRef((e,n)=>{let{asChild:r,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,v.jsx)(r?s:t,{...o,ref:n})});return c.displayName=`Primitive.${t}`,{...e,[t]:c}},{});function k(e){let t=h.useRef(e);return h.useEffect(()=>{t.current=e}),h.useMemo(()=>(...e)=>t.current?.(...e),[])}var T="dismissableLayer.update",D=h.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),L=h.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...c}=e,l=h.useContext(D),[u,d]=h.useState(null),p=u?.ownerDocument??globalThis?.document,[,m]=h.useState({}),g=(0,b.useComposedRefs)(t,e=>d(e)),S=Array.from(l.layers),[C]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),w=S.indexOf(C),x=u?S.indexOf(u):-1,A=l.layersWithOutsidePointerEventsDisabled.size>0,P=x>=w,I=function(e,t=globalThis?.document){let n=k(e),r=h.useRef(!1),o=h.useRef(()=>{});return h.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){N("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...l.branches].some(e=>e.contains(t));P&&!n&&(o?.(e),i?.(e),e.defaultPrevented||s?.())},p),E=function(e,t=globalThis?.document){let n=k(e),r=h.useRef(!1);return h.useEffect(()=>{let e=e=>{e.target&&!r.current&&N("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;![...l.branches].some(e=>e.contains(t))&&(a?.(e),i?.(e),e.defaultPrevented||s?.())},p);return!function(e,t=globalThis?.document){let n=k(e);h.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{x===l.layers.size-1&&(r?.(e),!e.defaultPrevented&&s&&(e.preventDefault(),s()))},p),h.useEffect(()=>{if(u)return n&&(0===l.layersWithOutsidePointerEventsDisabled.size&&(f=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(u)),l.layers.add(u),M(),()=>{n&&1===l.layersWithOutsidePointerEventsDisabled.size&&(p.body.style.pointerEvents=f)}},[u,p,n,l]),h.useEffect(()=>()=>{u&&(l.layers.delete(u),l.layersWithOutsidePointerEventsDisabled.delete(u),M())},[u,l]),h.useEffect(()=>{let e=()=>m({});return document.addEventListener(T,e),()=>document.removeEventListener(T,e)},[]),(0,v.jsx)(R.div,{...c,ref:g,style:{pointerEvents:A?P?"auto":"none":void 0,...e.style},onFocusCapture:y(e.onFocusCapture,E.onFocusCapture),onBlurCapture:y(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:y(e.onPointerDownCapture,I.onPointerDownCapture)})});function M(){let e=new CustomEvent(T);document.dispatchEvent(e)}function N(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});if(t&&o.addEventListener(e,t,{once:!0}),r)o&&P.flushSync(()=>o.dispatchEvent(a));else o.dispatchEvent(a)}L.displayName="DismissableLayer",h.forwardRef((e,t)=>{let n=h.useContext(D),r=h.useRef(null),o=(0,b.useComposedRefs)(t,r);return h.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,v.jsx)(R.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var j="focusScope.autoFocusOnMount",O="focusScope.autoFocusOnUnmount",F={bubbles:!1,cancelable:!0},_=h.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[s,c]=h.useState(null),l=k(o),u=k(a),d=h.useRef(null),p=(0,b.useComposedRefs)(t,e=>c(e)),m=h.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;h.useEffect(()=>{if(r){let e=function(e){if(m.paused||!s)return;let t=e.target;s.contains(t)?d.current=t:G(d.current,{select:!0})},t=function(e){if(m.paused||!s)return;let t=e.relatedTarget;null!==t&&(s.contains(t)||G(d.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&G(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,m.paused]),h.useEffect(()=>{if(s){W.add(m);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(j,F);s.addEventListener(j,l),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(G(r,{select:t}),document.activeElement!==n)return}(B(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&G(s))}return()=>{s.removeEventListener(j,l),setTimeout(()=>{let t=new CustomEvent(O,F);s.addEventListener(O,u),s.dispatchEvent(t),t.defaultPrevented||G(e??document.body,{select:!0}),s.removeEventListener(O,u),W.remove(m)},0)}}},[s,l,u,m]);let f=h.useCallback(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){var a;let t,r=e.currentTarget,[i,s]=[U(t=B(a=r),a),U(t.reverse(),a)];i&&s?e.shiftKey||o!==s?e.shiftKey&&o===i&&(e.preventDefault(),n&&G(s,{select:!0})):(e.preventDefault(),n&&G(i,{select:!0})):o===r&&e.preventDefault()}},[n,r,m.paused]);return(0,v.jsx)(R.div,{tabIndex:-1,...i,ref:p,onKeyDown:f})});function B(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function U(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function G(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}_.displayName="FocusScope";var W=(a=[],{add(e){let t=a[0];e!==t&&t?.pause(),(a=H(a,e)).unshift(e)},remove(e){a=H(a,e),a[0]?.resume()}});function H(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var V=h.forwardRef((e,t)=>{let{container:n,...r}=e,[o,a]=h.useState(!1);S(()=>a(!0),[]);let i=n||o&&globalThis?.document?.body;return i?P.default.createPortal((0,v.jsx)(R.div,{...r,ref:t}),i):null});V.displayName="Portal";var z=e=>{var t;let n,r,{present:o,children:a}=e,i=function(e){var t,n;let[r,o]=h.useState(),a=h.useRef(null),i=h.useRef(e),s=h.useRef("none"),[c,l]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},h.useReducer((e,t)=>n[e][t]??e,t));return h.useEffect(()=>{let e=q(a.current);s.current="mounted"===c?e:"none"},[c]),S(()=>{let t=a.current,n=i.current;if(n!==e){let r=s.current,o=q(t);e?l("MOUNT"):"none"===o||t?.display==="none"?l("UNMOUNT"):n&&r!==o?l("ANIMATION_OUT"):l("UNMOUNT"),i.current=e}},[e,l]),S(()=>{if(r){let e,t=r.ownerDocument.defaultView??window,n=n=>{let o=q(a.current).includes(CSS.escape(n.animationName));if(n.target===r&&o&&(l("ANIMATION_END"),!i.current)){let n=r.style.animationFillMode;r.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=n)})}},o=e=>{e.target===r&&(s.current=q(a.current))};return r.addEventListener("animationstart",o),r.addEventListener("animationcancel",n),r.addEventListener("animationend",n),()=>{t.clearTimeout(e),r.removeEventListener("animationstart",o),r.removeEventListener("animationcancel",n),r.removeEventListener("animationend",n)}}l("ANIMATION_END")},[r,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:h.useCallback(e=>{a.current=e?getComputedStyle(e):null,o(e)},[])}}(o),s="function"==typeof a?a({present:i.isPresent}):h.Children.only(a),c=(0,b.useComposedRefs)(i.ref,(t=s,(r=(n=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?t.ref:(r=(n=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?t.props.ref:t.props.ref||t.ref));return"function"==typeof a||i.isPresent?h.cloneElement(s,{ref:c}):null};function q(e){return e?.animationName||"none"}z.displayName="Presence";var X=0;function K(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function Z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var $=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),Q="width-before-scroll-bar";function J(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var ee="u">typeof window?h.useLayoutEffect:h.useEffect,et=new WeakMap,en=(void 0===s&&(s={}),(void 0===c&&(c=function(e){return e}),l=[],u=!1,d={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return l.length?l[l.length-1]:null},useMedium:function(e){var t=c(e,u);return l.push(t),function(){l=l.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;l.length;){var t=l;l=[],t.forEach(e)}l={push:function(t){return e(t)},filter:function(){return l}}},assignMedium:function(e){u=!0;var t=[];if(l.length){var n=l;l=[],n.forEach(e),t=l}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),l={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),l}}}}).options=Y({async:!0,ssr:!1},s),d),er=function(){},eo=h.forwardRef(function(e,t){var n,r,o,a,i=h.useRef(null),s=h.useState({onScrollCapture:er,onWheelCapture:er,onTouchMoveCapture:er}),c=s[0],l=s[1],u=e.forwardProps,d=e.children,p=e.className,m=e.removeScrollBar,f=e.enabled,g=e.shards,y=e.sideCar,b=e.noRelative,v=e.noIsolation,S=e.inert,C=e.allowPinchZoom,w=e.as,x=e.gapMode,A=Z(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[i,t],r=function(e){return n.forEach(function(t){return J(t,e)})},(o=(0,h.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,ee(function(){var e=et.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||J(e,null)}),r.forEach(function(e){t.has(e)||J(e,o)})}et.set(a,n)},[n]),a),I=Y(Y({},A),c);return h.createElement(h.Fragment,null,f&&h.createElement(y,{sideCar:en,removeScrollBar:m,shards:g,noRelative:b,noIsolation:v,inert:S,setCallbacks:l,allowPinchZoom:!!C,lockRef:i,gapMode:x}),u?h.cloneElement(h.Children.only(d),Y(Y({},I),{ref:P})):h.createElement(void 0===w?"div":w,Y({},I,{className:p,ref:P}),d))});eo.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eo.classNames={fullWidth:Q,zeroRight:$};var ea=function(e){var t=e.sideCar,n=Z(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return h.createElement(r,Y({},n))};ea.isSideCarExport=!0;var ei=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=g||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var r,o;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},es=function(){var e=ei();return function(t,n){h.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ec=function(){var e=es();return function(t){return e(t.styles,t.dynamic),null}},el={left:0,top:0,right:0,gap:0},eu=function(e){return parseInt(e||"",10)||0},ed=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[eu(n),eu(r),eu(o)]},ep=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return el;var t=ed(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},em=ec(),ef="data-scroll-locked",eg=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(s,"px ").concat(r,";\n  }\n  body[").concat(ef,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat($," {\n    right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(Q," {\n    margin-right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat($," .").concat($," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(Q," .").concat(Q," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ef,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},eh=function(){var e=parseInt(document.body.getAttribute(ef)||"0",10);return isFinite(e)?e:0},ey=function(){h.useEffect(function(){return document.body.setAttribute(ef,(eh()+1).toString()),function(){var e=eh()-1;e<=0?document.body.removeAttribute(ef):document.body.setAttribute(ef,e.toString())}},[])},eb=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ey();var a=h.useMemo(function(){return ep(o)},[o]);return h.createElement(em,{styles:eg(a,!t,o,n?"":"!important")})},ev=!1;if("u">typeof window)try{var eS=Object.defineProperty({},"passive",{get:function(){return ev=!0,!0}});window.addEventListener("test",eS,eS),window.removeEventListener("test",eS,eS)}catch(e){ev=!1}var eC=!!ev&&{passive:!1},ew=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},ex=function(e,t){var n=t.ownerDocument,r=t;do{if("u">typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eA(e,r)){var o=eP(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body)return!1},eA=function(e,t){return"v"===e?ew(t,"overflowY"):ew(t,"overflowX")},eP=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eI=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),s=i*r,c=n.target,l=t.contains(c),u=!1,d=s>0,p=0,m=0;do{if(!c)break;var f=eP(e,c),g=f[0],h=f[1]-f[2]-i*g;(g||h)&&eA(e,c)&&(p+=h,m+=g);var y=c.parentNode;c=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!l&&c!==document.body||l&&(t.contains(c)||t===c))return d&&(o&&1>Math.abs(p)||!o&&s>p)?u=!0:!d&&(o&&1>Math.abs(m)||!o&&-s>m)&&(u=!0),u},eE=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eR=function(e){return[e.deltaX,e.deltaY]},ek=function(e){return e&&"current"in e?e.current:e},eT=0,eD=[];let eL=(p=function(e){var t=h.useRef([]),n=h.useRef([0,0]),r=h.useRef(),o=h.useState(eT++)[0],a=h.useState(ec)[0],i=h.useRef(e);h.useEffect(function(){i.current=e},[e]),h.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ek),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=h.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,a=eE(e),s=n.current,c="deltaX"in e?e.deltaX:s[0]-a[0],l="deltaY"in e?e.deltaY:s[1]-a[1],u=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===u.type)return!1;var p=window.getSelection(),m=p&&p.anchorNode;if(m&&(m===u||m.contains(u)))return!1;var f=ex(d,u);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ex(d,u)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var g=r.current||o;return eI(g,t,e,"h"===g?c:l,!0)},[]),c=h.useCallback(function(e){if(eD.length&&eD[eD.length-1]===a){var n="deltaY"in e?eR(e):eE(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===n[0]&&r[1]===n[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(ek).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=h.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),u=h.useCallback(function(e){n.current=eE(e),r.current=void 0},[]),d=h.useCallback(function(t){l(t.type,eR(t),t.target,s(t,e.lockRef.current))},[]),p=h.useCallback(function(t){l(t.type,eE(t),t.target,s(t,e.lockRef.current))},[]);h.useEffect(function(){return eD.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",c,eC),document.addEventListener("touchmove",c,eC),document.addEventListener("touchstart",u,eC),function(){eD=eD.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,eC),document.removeEventListener("touchmove",c,eC),document.removeEventListener("touchstart",u,eC)}},[]);var m=e.removeScrollBar,f=e.inert;return h.createElement(h.Fragment,null,f?h.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?h.createElement(eb,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},en.useMedium(p),ea);var eM=h.forwardRef(function(e,t){return h.createElement(eo,Y({},e,{ref:t,sideCar:eL}))});eM.classNames=eo.classNames;var eN=new WeakMap,ej=new WeakMap,eO={},eF=0,e_=function(e){return e&&(e.host||e_(e.parentNode))},eB=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=e_(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eO[n]||(eO[n]=new WeakMap);var a=eO[n],i=[],s=new Set,c=new Set(o),l=function(e){!e||s.has(e)||(s.add(e),l(e.parentNode))};o.forEach(l);var u=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eN.get(e)||0)+1,l=(a.get(e)||0)+1;eN.set(e,c),a.set(e,l),i.push(e),1===c&&o&&ej.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return u(t),s.clear(),eF++,function(){i.forEach(function(e){var t=eN.get(e)-1,o=a.get(e)-1;eN.set(e,t),a.set(e,o),t||(ej.has(e)||e.removeAttribute(r),ej.delete(e)),o||e.removeAttribute(n)}),--eF||(eN=new WeakMap,eN=new WeakMap,ej=new WeakMap,eO={})}},eU=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),eB(r,o,n,"aria-hidden")):function(){return null}},eG=Symbol("radix.slottable");function eW(e){return h.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===eG}var eH="Dialog",[eV,ez]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>h.createContext(e));return function(n){let r=n?.[e]||t;return h.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=h.createContext(r),a=n.length;n=[...n,r];let i=t=>{let{scope:n,children:r,...i}=t,s=n?.[e]?.[a]||o,c=h.useMemo(()=>i,Object.values(i));return(0,v.jsx)(s.Provider,{value:c,children:r})};return i.displayName=t+"Provider",[i,function(n,i){let s=i?.[e]?.[a]||o,c=h.useContext(s);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return h.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eH),[eq,eX]=eV(eH),eK=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,s=h.useRef(null),c=h.useRef(null),[l,u]=function({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){let[o,a,i]=function({defaultProp:e,onChange:t}){let[n,r]=h.useState(e),o=h.useRef(n),a=h.useRef(t);return A(()=>{a.current=t},[t]),h.useEffect(()=>{o.current!==n&&(a.current?.(n),o.current=n)},[n,o]),[n,r,a]}({defaultProp:t,onChange:n}),s=void 0!==e,c=s?e:o;{let t=h.useRef(void 0!==e);h.useEffect(()=>{let e=t.current;if(e!==s){let t=s?"controlled":"uncontrolled";console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=s},[s,r])}return[c,h.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&i.current?.(n)}else a(t)},[s,e,a,i])]}({prop:r,defaultProp:o??!1,onChange:a,caller:eH});return(0,v.jsx)(eq,{scope:t,triggerRef:s,contentRef:c,contentId:x(),titleId:x(),descriptionId:x(),open:l,onOpenChange:u,onOpenToggle:h.useCallback(()=>u(e=>!e),[u]),modal:i,children:n})};eK.displayName=eH;var eY="DialogTrigger",eZ=h.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eX(eY,n),a=(0,b.useComposedRefs)(t,o.triggerRef);return(0,v.jsx)(R.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ti(o.open),...r,ref:a,onClick:y(e.onClick,o.onOpenToggle)})});eZ.displayName=eY;var e$="DialogPortal",[eQ,eJ]=eV(e$,{forceMount:void 0}),e0=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eX(e$,t);return(0,v.jsx)(eQ,{scope:t,forceMount:n,children:h.Children.map(r,e=>(0,v.jsx)(z,{present:n||a.open,children:(0,v.jsx)(V,{asChild:!0,container:o,children:e})}))})};e0.displayName=e$;var e1="DialogOverlay",e2=h.forwardRef((e,t)=>{let n=eJ(e1,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eX(e1,e.__scopeDialog);return a.modal?(0,v.jsx)(z,{present:r||a.open,children:(0,v.jsx)(e4,{...o,ref:t})}):null});e2.displayName=e1;var e5=((i=h.forwardRef((e,t)=>{let{children:n,...r}=e;if(h.isValidElement(n)){var o;let e,a,i=(o=n,(a=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(a=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),s=function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...e)=>{let t=a(...e);return o(...e),t}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props);return n.type!==h.Fragment&&(s.ref=t?(0,b.composeRefs)(t,i):i),h.cloneElement(n,s)}return h.Children.count(n)>1?h.Children.only(null):null})).displayName="DialogOverlay.RemoveScroll.SlotClone",t=i,(n=h.forwardRef((e,n)=>{let{children:r,...o}=e,a=h.Children.toArray(r),i=a.find(eW);if(i){let e=i.props.children,r=a.map(t=>t!==i?t:h.Children.count(e)>1?h.Children.only(null):h.isValidElement(e)?e.props.children:null);return(0,v.jsx)(t,{...o,ref:n,children:h.isValidElement(e)?h.cloneElement(e,void 0,r):null})}return(0,v.jsx)(t,{...o,ref:n,children:r})})).displayName="DialogOverlay.RemoveScroll.Slot",n),e4=h.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eX(e1,n);return(0,v.jsx)(eM,{as:e5,allowPinchZoom:!0,shards:[o.contentRef],children:(0,v.jsx)(R.div,{"data-state":ti(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),e3="DialogContent",e7=h.forwardRef((e,t)=>{let n=eJ(e3,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eX(e3,e.__scopeDialog);return(0,v.jsx)(z,{present:r||a.open,children:a.modal?(0,v.jsx)(e6,{...o,ref:t}):(0,v.jsx)(e8,{...o,ref:t})})});e7.displayName=e3;var e6=h.forwardRef((e,t)=>{let n=eX(e3,e.__scopeDialog),r=h.useRef(null),o=(0,b.useComposedRefs)(t,n.contentRef,r);return h.useEffect(()=>{let e=r.current;if(e)return eU(e)},[]),(0,v.jsx)(e9,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:y(e.onFocusOutside,e=>e.preventDefault())})}),e8=h.forwardRef((e,t)=>{let n=eX(e3,e.__scopeDialog),r=h.useRef(!1),o=h.useRef(!1);return(0,v.jsx)(e9,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"===t.detail.originalEvent.type&&(o.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),e9=h.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,s=eX(e3,n),c=h.useRef(null),l=(0,b.useComposedRefs)(t,c);return h.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??K()),document.body.insertAdjacentElement("beforeend",e[1]??K()),X++,()=>{1===X&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),X--}},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,v.jsx)(L,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ti(s.open),...i,ref:l,onDismiss:()=>s.onOpenChange(!1)})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tu,{titleId:s.titleId}),(0,v.jsx)(td,{contentRef:c,descriptionId:s.descriptionId})]})]})}),te="DialogTitle",tt=h.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eX(te,n);return(0,v.jsx)(R.h2,{id:o.titleId,...r,ref:t})});tt.displayName=te;var tn="DialogDescription",tr=h.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eX(tn,n);return(0,v.jsx)(R.p,{id:o.descriptionId,...r,ref:t})});tr.displayName=tn;var to="DialogClose",ta=h.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eX(to,n);return(0,v.jsx)(R.button,{type:"button",...r,ref:t,onClick:y(e.onClick,()=>o.onOpenChange(!1))})});function ti(e){return e?"open":"closed"}ta.displayName=to;var ts="DialogTitleWarning",[tc,tl]=(m={contentName:e3,titleName:te,docsSlug:"dialog"},r=h.createContext(m),(o=e=>{let{children:t,...n}=e,o=h.useMemo(()=>n,Object.values(n));return(0,v.jsx)(r.Provider,{value:o,children:t})}).displayName=ts+"Provider",[o,function(e){let t=h.useContext(r);if(t)return t;if(void 0!==m)return m;throw Error(`\`${e}\` must be used within \`${ts}\``)}]),tu=({titleId:e})=>{let t=tl(ts),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return h.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},td=({contentRef:e,descriptionId:t})=>{let n=tl("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return h.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");t&&n&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null};e.s(["Close",()=>ta,"Content",()=>e7,"Description",()=>tr,"Overlay",()=>e2,"Portal",()=>e0,"Root",()=>eK,"Title",()=>tt,"Trigger",()=>eZ],26999);let tp=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",()=>tp],41947),e.s(["XIcon",()=>tp],95926)},95603,e=>{"use strict";let t=[{id:"overview",icon:"Globe",title:{ar:"نظرة عامة على المشروع",en:"Project Overview"},description:{ar:"تعرف على المشروع وفريق العمل والإحصائيات",en:"Learn about the project, team, and statistics"},content:{ar:`## ما هو المشروع؟

**مشاريع للأنظمة الذكية** (Smart Systems Lab) هو موقع إلكتروني بورتفوليو احترافي لفريق هندسي من فلسطين يعمل في مجال إنترنت الأشياء (IoT) والأتمتة الذكية. الموقع يعرض:

- **4 مشاريع IoT حقيقية** منفذة بأنظمة متعددة المعالجات
- **6 خدمات** رئيسية يقدمها الفريق
- **نظام ثنائي اللغة** (العربية والإنجليزية) مع دعم كامل لـ RTL
- **دردشة ذكية** بوضعين: محلي (FAQ) + ذكاء اصطناعي (NVIDIA NIM)
- **تقرير أمان** شامل مع نتيجة 92/100
- **مدونة تقنية** مع مقالات مفصلة
- **دليل مطور شامل** مع 17 قسماً متعدد الصفحات

## فريق العمل

| الاسم | الدور | المسؤولية |
|------|------|----------|
| **عمار مشارقة** (Ammar Masharqa) | مؤسس ومدير العمليات | الإدارة، التواصل مع العملاء، التنسيق اللوجستي |
| **محمد عقيلي** (Mohammad Aqli) | المؤسس والمهندس الرئيسي | تصميم الأنظمة المدمجة، البرمجة، التركيب، معمارية الأنظمة |

## الرابط المباشر

- **GitHub Pages:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`
- **basePath في الإنتاج:** \`/iot-portfolio\`

## الإحصائيات الحالية

| المقياس | القيمة |
|--------|--------|
| المشاريع المنفذة | 4+ |
| ساعات العمل | 100+ |
| المشاكل المُحلّة | 20+ |
| أعضاء المجتمع | 800+ |
| نتيجة الأمان | 92/100 |
| مكونات الصفحة | 20+ |
| واجهات المستخدم UI | 40+ |
| مكونات shadcn/ui | 55+ |`,en:`## What is the Project?

**Smart Systems Lab** is a professional portfolio website for an engineering team from Palestine working in the field of Internet of Things (IoT) and smart automation. The website showcases:

- **4 real IoT projects** implemented with multi-processor systems
- **6 main services** offered by the team
- **Bilingual system** (Arabic and English) with full RTL support
- **Smart chatbot** with two modes: local (FAQ) + AI (NVIDIA NIM)
- **Comprehensive security report** with a score of 92/100
- **Technical blog** with detailed articles
- **Comprehensive developer guide** with 17 multi-page sections

## Team

| Name | Role | Responsibility |
|------|------|----------------|
| **Ammar Masharqa** | Co-founder & Operations Manager | Management, client communication, logistics coordination |
| **Mohammad Aqli** | Co-founder & Lead Engineer | Embedded system design, programming, installation, system architecture |

## Direct Link

- **GitHub Pages:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`
- **Production basePath:** \`/iot-portfolio\`

## Current Statistics

| Metric | Value |
|--------|-------|
| Projects Completed | 4+ |
| Working Hours | 100+ |
| Issues Resolved | 20+ |
| Community Members | 800+ |
| Security Score | 92/100 |
| Page Components | 20+ |
| UI Components | 40+ |
| shadcn/ui Components | 55+ |`},subsections:[{id:"what-is-project",title:{ar:"ما هو المشروع؟",en:"What is the Project?"}},{id:"team",title:{ar:"فريق العمل",en:"Team"}},{id:"links",title:{ar:"الرابط المباشر",en:"Direct Link"}},{id:"stats",title:{ar:"الإحصائيات",en:"Statistics"}}]},{id:"architecture",icon:"LayoutDashboard",title:{ar:"الهيكل التقني والبنية",en:"Technical Structure"},description:{ar:"بنية المجلدات والمعمارية وخريطة المسارات",en:"Directory structure, architecture, and route map"},content:{ar:`## بنية المجلدات

\`\`\`
iot-portfolio/
├── .env.example              # متغيرات البيئة النموذجية
├── agent-ctx/                # سياق العمل (للعوامل)
├── db/                      # مجلد قاعدة البيانات SQLite
├── docs/                     # مخرجات البناء (GitHub Pages)
│   ├── images/               # صور المشروع
│   └── _next/                # أصول Next.js
├── docs/404/                 # صفحة 404
├── mini-services/            # الخدمات المصغرة (مثل websocket)
├── prisma/
│   └── schema.prisma         # مخطط قاعدة البيانات
├── public/
│   ├── images/               # صور (logo, hero-banner, sensors, wiring, etc.)
│   ├── logo.svg
│   ├── robots.txt
│   └── sw.js                 # Service Worker
├── src/
│   ├── app/
│   │   ├── globals.css       # الأنماط العامة + التأثيرات
│   │   ├── layout.tsx        # التخطيط الرئيسي (خط IBM Plex Arabic، SEO)
│   │   ├── page.tsx          # الصفحة الرئيسية (دليل المطور، ~520 سطر)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # خريطة الموقع SEO
│   │   ├── not-found.tsx     # صفحة 404
│   │   ├── api/              # API Routes
│   │   │   ├── route.ts      # API رئيسي
│   │   │   ├── contact/route.ts
│   │   │   ├── ai-chat/route.ts
│   │   │   ├── search/route.ts
│   │   │   └── newsletter/route.ts
│   │   └── docs/
│   │       └── [slug]/
│   │           ├── page.tsx  # صفحة الوثائق (generateStaticParams)
│   │           └── DocsClientPage.tsx
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # الدردشة الذكية (FAQ + NVIDIA AI)
│   │   ├── guide/
│   │   │   ├── Sidebar.tsx       # الشريط الجانبي للدليل
│   │   │   ├── SearchDialog.tsx  # بحث Cmd+K
│   │   │   ├── GuideRenderer.tsx # محلل Markdown للدليل
│   │   │   └── AnimatedCounter.tsx # عداد متحرك
│   │   ├── layout/
│   │   │   ├── SiteLayout.tsx  # التخطيط العام (رأس + تذييل + شريط جانبي)
│   │   │   ├── SiteHeader.tsx  # رأس الصفحة
│   │   │   └── SiteFooter.tsx  # تذييل الصفحة
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # مكونات shadcn/ui (55+ مكون)
│   ├── data/
│   │   ├── guide-sections.ts # بيانات أقسام الدليل (17 قسماً)
│   │   └── faq.json          # بيانات الشات (18 سؤال)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # عميل Prisma
│       ├── language.ts       # إدارة اللغة (Zustand)
│       ├── guide-store.ts    # حالة الدليل (Zustand)
│       ├── icon-map.tsx      # خريطة الأيقونات
│       └── utils.ts          # أدوات مساعدة (cn, etc.)
├── Caddyfile                 # إعدادات البوابة (Port 81)
├── components.json           # إعدادات shadcn/ui
├── eslint.config.mjs
├── next.config.ts            # تكوين Next.js (dev vs prod)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts        # إعدادات Tailwind CSS
├── tsconfig.json
└── worklog.md                # سجل العمل
\`\`\`

## البنية المعمارية

\`\`\`
┌──────────────────────────────────────────────────┐
│              Caddy Gateway (:81)                │
│  (Port forwarding via XTransformPort query)     │
└────────────────────┬─────────────────────────────┘
                     │
          ┌────────▼──────────┐
          │  Next.js (:3000)  │
          │                    │
          │  ┌──────────────┐  │
          │  │ App Router   │  │  ← Multi-page routing
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │layout/ │ │  │  ← SiteLayout, SiteHeader, SiteFooter
          │  │  │guide/  │ │  │  ← Sidebar, GuideRenderer, SearchDialog
          │  │  │chat    │ │  │  ← ChatBot
          │  │  │ui/     │ │  │  ← shadcn/ui (55+)
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language + guide theme)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← guide-sections.ts, faq.json
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  API Routes  │  │  ← contact, ai-chat, search, newsletter
          │  └──────────────┘  │
          └────────────────────┘
                     │
          ┌────────▼──────────┐
          │  External APIs     │
          │  ┌────────────┐  │
          │  │ NVIDIA NIM   │  │
          │  │ (LLM Chat) │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Formspree    │  │
          │  │ (Contact)   │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Plausible   │  │
          │  │ (Analytics) │  │
          │  └────────────┘  │
          └──────────────────┘
\`\`\`

## خريطة المسارات (Route Map)

الموقع يستخدم Next.js App Router مع مسارات متعددة:

| الصفحة | المسار | المكون/الملف |
|-------|--------|-------------|
| الرئيسية (الدليل) | \`/\` | \`src/app/page.tsx\` |
| صفحة الوثائق | \`/docs/[slug]\` | \`src/app/docs/[slug]/page.tsx\` |
| صفحة 404 | \`/404\` | \`src/app/not-found.tsx\` |
| API - اتصال | \`/api/contact\` | \`src/app/api/contact/route.ts\` |
| API - دردشة AI | \`/api/ai-chat\` | \`src/app/api/ai-chat/route.ts\` |
| API - بحث | \`/api/search\` | \`src/app/api/search/route.ts\` |
| API - نشرة | \`/api/newsletter\` | \`src/app/api/newsletter/route.ts\` |

صفحات الدليل تُولّد تلقائياً عبر \`generateStaticParams\` من \`guideSections\` (17 صفحة).`,en:`## Directory Structure

\`\`\`
iot-portfolio/
├── .env.example              # Example environment variables
├── agent-ctx/                # Agent working context
├── db/                      # SQLite database folder
├── docs/                     # Build output (GitHub Pages)
│   ├── images/               # Project images
│   └── _next/                # Next.js assets
├── docs/404/                 # 404 page
├── mini-services/            # Micro-services (e.g., websocket)
├── prisma/
│   └── schema.prisma         # Database schema
├── public/
│   ├── images/               # Images (logo, hero-banner, sensors, wiring, etc.)
│   ├── logo.svg
│   ├── robots.txt
│   └── sw.js                 # Service Worker
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles + effects
│   │   ├── layout.tsx        # Main layout (IBM Plex Arabic font, SEO)
│   │   ├── page.tsx          # Home page (developer guide landing, ~520 lines)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # SEO sitemap
│   │   ├── not-found.tsx     # 404 page
│   │   ├── api/              # API Routes
│   │   │   ├── route.ts      # Main API route
│   │   │   ├── contact/route.ts
│   │   │   ├── ai-chat/route.ts
│   │   │   ├── search/route.ts
│   │   │   └── newsletter/route.ts
│   │   └── docs/
│   │       └── [slug]/
│   │           ├── page.tsx  # Docs page (generateStaticParams)
│   │           └── DocsClientPage.tsx
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # Smart chat (FAQ + NVIDIA AI)
│   │   ├── guide/
│   │   │   ├── Sidebar.tsx       # Guide sidebar navigation
│   │   │   ├── SearchDialog.tsx  # Cmd+K search
│   │   │   ├── GuideRenderer.tsx # Markdown renderer for guide
│   │   │   └── AnimatedCounter.tsx # Animated counter
│   │   ├── layout/
│   │   │   ├── SiteLayout.tsx  # Overall layout (header + footer + sidebar)
│   │   │   ├── SiteHeader.tsx  # Page header
│   │   │   └── SiteFooter.tsx  # Page footer
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # shadcn/ui components (55+)
│   ├── data/
│   │   ├── guide-sections.ts # Guide section data (17 sections)
│   │   └── faq.json          # Chat data (18 questions)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # Prisma client
│       ├── language.ts       # Language management (Zustand)
│       ├── guide-store.ts    # Guide state (Zustand)
│       ├── icon-map.tsx      # Icon mapping
│       └── utils.ts          # Utility functions (cn, etc.)
├── Caddyfile                 # Gateway config (Port 81)
├── components.json           # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts            # Next.js config (dev vs prod)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json
└── worklog.md                # Work log
\`\`\`

## System Architecture

\`\`\`
┌──────────────────────────────────────────────────┐
│              Caddy Gateway (:81)                │
│  (Port forwarding via XTransformPort query)     │
└────────────────────┬─────────────────────────────┘
                     │
          ┌────────▼──────────┐
          │  Next.js (:3000)  │
          │                    │
          │  ┌──────────────┐  │
          │  │ App Router   │  │  ← Multi-page routing
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │layout/ │ │  │  ← SiteLayout, SiteHeader, SiteFooter
          │  │  │guide/  │ │  │  ← Sidebar, GuideRenderer, SearchDialog
          │  │  │chat    │ │  │  ← ChatBot
          │  │  │ui/     │ │  │  ← shadcn/ui (55+)
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language + guide theme)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← guide-sections.ts, faq.json
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  API Routes  │  │  ← contact, ai-chat, search, newsletter
          │  └──────────────┘  │
          └────────────────────┘
                     │
          ┌────────▼──────────┐
          │  External APIs     │
          │  ┌────────────┐  │
          │  │ NVIDIA NIM   │  │
          │  │ (LLM Chat) │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Formspree    │  │
          │  │ (Contact)   │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Plausible   │  │
          │  │ (Analytics) │  │
          │  └────────────┘  │
          └──────────────────┘
\`\`\`

## Route Map

The site uses Next.js App Router with multiple routes:

| Page | Route | Component/File |
|------|-------|----------------|
| Home (Guide Landing) | \`/\` | \`src/app/page.tsx\` |
| Docs Page | \`/docs/[slug]\` | \`src/app/docs/[slug]/page.tsx\` |
| 404 Page | \`/404\` | \`src/app/not-found.tsx\` |
| API - Contact | \`/api/contact\` | \`src/app/api/contact/route.ts\` |
| API - AI Chat | \`/api/ai-chat\` | \`src/app/api/ai-chat/route.ts\` |
| API - Search | \`/api/search\` | \`src/app/api/search/route.ts\` |
| API - Newsletter | \`/api/newsletter\` | \`src/app/api/newsletter/route.ts\` |

Guide pages are auto-generated via \`generateStaticParams\` from \`guideSections\` (17 pages).`},subsections:[{id:"directory-structure",title:{ar:"بنية المجلدات",en:"Directory Structure"}},{id:"system-architecture",title:{ar:"البنية المعمارية",en:"System Architecture"}},{id:"route-map",title:{ar:"خريطة المسارات",en:"Route Map"}}]},{id:"technologies",icon:"Cpu",title:{ar:"التقنيات والمكتبات",en:"Tech Stack"},description:{ar:"التقنيات والمكتبات وأدوات التطوير المستخدمة",en:"Technologies, libraries, and development tools used"},content:{ar:`## الحزمة التقنية

| التقنية | الإصدار | الاستخدام |
|---------|--------|----------|
| **Next.js** | 16.1.1 | إطار العمل الرئيسي (App Router) |
| **React** | 19.0 | مكتبة واجهة المستخدم |
| **TypeScript** | 5 | لغة البرمجة |
| **Tailwind CSS** | 4 | إطار الأنماط |
| **Framer Motion** | 12.23.2 | الرسوم والانتقالات |
| **Zustand** | 5.0.6 | إدارة الحالة (لغة + سمة الدليل) |
| **Prisma** | 6.11.1 | ORM وقاعدة البيانات |
| **shadcn/ui** | أحدث | مكتبة مكونات UI |
| **Lucide React** | 0.525.0 | أيقونات SVG |

## المكتبات الإضافية

| المكتبة | الاستخدام |
|---------|---------|
| \`react-syntax-highlighter\` | عرض أكواد C++ في المشاريع |
| \`sonner\` | إشعارات Toast |
| \`z-ai-web-dev-sdk\` | ذكاء اصطناعي (في backend فقط) |
| \`react-markdown\` | عرض محتوى المدونة |
| \`next-themes\` | دعم الوضع الداكن (مُعرّف لكن لم يُفعّل) |
| \`plausible\` | تحليلات الزوار |
| \`formspree\` | نموذج الاتصال (backend proxy) |
| \`cloudflare turnstile\` | تحقق من الروبوتات (في نموذج الاتصال) |

## أدوات التطوير

\`\`\`bash
bun run dev        # تشغيل خادم التطوير (Port 3000)
bun run lint        # فحص الكود بـ ESLint
bun run db:push     # مزامنة مخطط Prisma
bun run db:generate # توليد عميل Prisma
\`\`\``,en:`## Core Stack

| Technology | Version | Usage |
|-----------|---------|-------|
| **Next.js** | 16.1.1 | Main framework (App Router) |
| **React** | 19.0 | UI library |
| **TypeScript** | 5 | Programming language |
| **Tailwind CSS** | 4 | Styling framework |
| **Framer Motion** | 12.23.2 | Animations and transitions |
| **Zustand** | 5.0.6 | State management (language + guide theme) |
| **Prisma** | 6.11.1 | ORM and database |
| **shadcn/ui** | Latest | UI component library |
| **Lucide React** | 0.525.0 | SVG icons |

## Additional Libraries

| Library | Usage |
|---------|-------|
| \`react-syntax-highlighter\` | Display C++ code in projects |
| \`sonner\` | Toast notifications |
| \`z-ai-web-dev-sdk\` | AI (backend only) |
| \`react-markdown\` | Blog content rendering |
| \`next-themes\` | Dark mode support (defined but not activated) |
| \`plausible\` | Visitor analytics |
| \`formspree\` | Contact form (backend proxy) |
| \`cloudflare turnstile\` | Bot verification (in contact form) |

## Development Tools

\`\`\`bash
bun run dev        # Start development server (Port 3000)
bun run lint        # Lint code with ESLint
bun run db:push     # Sync Prisma schema
bun run db:generate # Generate Prisma client
\`\`\``},subsections:[{id:"core-stack",title:{ar:"الحزمة التقنية",en:"Core Stack"}},{id:"additional-libraries",title:{ar:"المكتبات الإضافية",en:"Additional Libraries"}},{id:"dev-tools",title:{ar:"أدوات التطوير",en:"Dev Tools"}}]},{id:"configuration",icon:"Settings",title:{ar:"التكوين والنشر",en:"Configuration & Deployment"},description:{ar:"تكوين Next.js ورؤوس الأمان وسياسة المحتوى",en:"Next.js config, security headers, and content policy"},content:{ar:`## تكوين Next.js (\`next.config.ts\`)

هذا الملف **حرج** بشكل ديناميكي حسب البيئة:

\`\`\`typescript
const isDev = process.env.NODE_ENV === "development";

// البيئة المشتركة (تطوير):
const devConfig = { trailingSlash: true, images: { unoptimized: true } };

// البيئة الإنتاجية (GitHub Pages):
const prodConfig = {
  ...devConfig,
  output: "export",           // تصدير ثابت (SSG)
  basePath: "/iot-portfolio",  // مسار GitHub Pages
  distDir: "docs",           // مجلد المخرجات
};
\`\`\`

**النتيجة:**
- **التطوير:** \`http://localhost:3000/\` (بدون basePath)
- **الإنتاج:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`

## رؤوس الأمان (Security Headers)

مُعرّفة في \`next.config.ts\` لكل المسارات:

| الرأس | القيمة | الغرض |
|-------|-------|-------|
| \`X-Frame-Options\` | \`DENY\` | منع التضمين في إطارات |
| \`X-Content-Type-Options\` | \`nosniff\` | منع MIME sniffing |
| \`Referrer-Policy\` | \`strict-origin-when-cross-origin\` | تحكم في الإحالة |
| \`Permissions-Policy\` | \`camera=(), microphone=(), geolocation=()\` | حصر الصلاحيات |
| \`Content-Security-Policy\` | شاملة (انظر الملف) | حماية المحتوى |
| \`X-Powered-By\` | مُزال | إخفاء بصمة الإطار |
| \`strict-transport-security\` | مُفعّل | HTTPS فقط |

## Content Security Policy (CSP) المفصّل

\`\`\`
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https://*.githubusercontent.com;
connect-src 'self' https://formspree.io https://integrate.api.nvidia.com https://plausible.io https://challenges.cloudflare.com https://esm.sh;
frame-src https://challenges.cloudflare.com;
\`\`\``,en:`## Next.js Configuration (\`next.config.ts\`)

This file is **critical** and dynamically adjusts based on the environment:

\`\`\`typescript
const isDev = process.env.NODE_ENV === "development";

// Shared config (development):
const devConfig = { trailingSlash: true, images: { unoptimized: true } };

// Production config (GitHub Pages):
const prodConfig = {
  ...devConfig,
  output: "export",           // Static export (SSG)
  basePath: "/iot-portfolio",  // GitHub Pages path
  distDir: "docs",           // Output directory
};
\`\`\`

**Result:**
- **Development:** \`http://localhost:3000/\` (no basePath)
- **Production:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`

## Security Headers

Defined in \`next.config.ts\` for all routes:

| Header | Value | Purpose |
|--------|-------|---------|
| \`X-Frame-Options\` | \`DENY\` | Prevent framing |
| \`X-Content-Type-Options\` | \`nosniff\` | Prevent MIME sniffing |
| \`Referrer-Policy\` | \`strict-origin-when-cross-origin\` | Referrer control |
| \`Permissions-Policy\` | \`camera=(), microphone=(), geolocation=()\` | Restrict permissions |
| \`Content-Security-Policy\` | Comprehensive (see file) | Content protection |
| \`X-Powered-By\` | Removed | Hide framework fingerprint |
| \`strict-transport-security\` | Enabled | HTTPS only |

## Detailed Content Security Policy (CSP)

\`\`\`
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https://*.githubusercontent.com;
connect-src 'self' https://formspree.io https://integrate.api.nvidia.com https://plausible.io https://challenges.cloudflare.com https://esm.sh;
frame-src https://challenges.cloudflare.com;
\`\`\``},subsections:[{id:"next-config",title:{ar:"تكوين Next.js",en:"Next.js Configuration"}},{id:"security-headers",title:{ar:"رؤوس الأمان",en:"Security Headers"}},{id:"content-security-policy",title:{ar:"سياسة أمان المحتوى",en:"Content Security Policy"}}]},{id:"design",icon:"Palette",title:{ar:"التصميم والأنماط",en:"UI/UX Design"},description:{ar:"نظام الألوان والتأثيرات البصرية والأنيميشن",en:"Color system, visual effects, and animations"},content:{ar:`## نظام الألوان (Color System)

### الألوان الأساسية
\`\`\`css
--background: #0a0f1a;    /* خلفية رئيسية */
--foreground: #e8edf5;    /* نص رئيسي */
--card: #0f1628;          /* خلفية البطاقات */
--border: #1e2d4d;        /* حدود */
--muted-foreground: #7a8ba8; /* نص ثانوي */
--primary: #00ff66;         /* اللون الرئيسي (أخضر نيون) */
--primary-foreground: #0a0f1a;
\`\`\`

### ألوان النيون

| الاسم | الكود | الاستخدام |
|------|-----|---------|
| نيون أخضر | \`#00ff66\` | العناصر التفاعلية، الأزرار الرئيسية |
| نيون سماوي | \`#00e5ff\` | التبديل بين اللغات، العناصر الثانوية |
| نيون عنبري | \`#ffab00\` | التحذيرات، القسم الثالث |
| نيون أحمر | \`#ff3d5a\` | الأخطاء، الإنذارات |
| نيون بنفسجي | \`#b44dff\` | الميزات الخاصة، الأقسام الإبداعية |

## التأثيرات البصرية المخصصة (CSS Classes)

| الكلاس | التأثير |
|-------|--------|
| \`.glass-dark\` | خلفية شفافة داكنة مع blur |
| \`.glass-card-dark\` | بطاقة زجاجية مع حدود خضراء خفيفة |
| \`.gradient-neon\` | تدرج لون أخضر→سماوي |
| \`.gradient-neon-text\` | نص بتدرج لون (background-clip: text) |
| \`.gradient-mesh-dark\` | خلفية متدرجة دائرية |
| \`.neon-border\` | حدود مع توهج نيون |
| \`.card-hover\` | تأثير hover (رفع + ظل) |
| \`.neon-text\` | نص مع ظل نيون أخضر |
| \`.neon-text-cyan\` | نص مع ظل نيون سماوي |
| \`.circuit-bg\` | خلفية نمط دائرة كهربائية |
| \`.terminal-text\` | خط مونوسب مع لون أخضر |

## أنيميشن CSS

| الكلاس | الأنيميشن |
|-------|-----------|
| \`.animate-pulse-neon\` | نبض نيون متدرج |
| \`.animate-float\` | طفو لطيف (6s) |
| \`.animate-float-delayed\` | طفو متأخر (6s + 2s) |
| \`.animate-shimmer\` | لمعان متحرك |
| \`.animate-pulse-ring\` | حلقة نبض متوسعة |
| \`.animate-cta-glow\` | توهج CTA |

## مؤشرات LED

| الكلاس | الشكل |
|-------|-------|
| \`.led-on\` | دائرة خضراء متوهجة |
| \`.led-off\` | دائرة رمادية معتمة |
| \`.led-amber\` | دائرة برتقالي متوهجة |
| \`.led-red\` | دائرة حمراء متوهجة |

## نظام الاستجابة (Responsive Design)

| النقطة | xs | sm | md | lg | xl |
|-------|----|----|----|----|-----|
| النص الرئيسي H1 | 3xl | 5xl | 7xl | - | - |
| شبكة البطاقات (المشاريع) | 1 col | 1 col | 2 col | - | - |
| شبكة الخدمات | 1 col | 1 col | 2 col | 3 col | 3 col |
| شبكة المجموعات | 1 col | - | 2 col | - | 4 col |
| شبكة الموارد | 1 col | 1 col | 2 col | 3 col | 3 col |
| الأقسام الداخلية | py-12 | py-16 | py-20 | - | - |`,en:`## Color System

### Base Colors
\`\`\`css
--background: #0a0f1a;    /* Main background */
--foreground: #e8edf5;    /* Main text */
--card: #0f1628;          /* Card background */
--border: #1e2d4d;        /* Borders */
--muted-foreground: #7a8ba8; /* Secondary text */
--primary: #00ff66;         /* Primary color (neon green) */
--primary-foreground: #0a0f1a;
\`\`\`

### Neon Colors

| Name | Code | Usage |
|------|------|-------|
| Neon Green | \`#00ff66\` | Interactive elements, primary buttons |
| Neon Cyan | \`#00e5ff\` | Language toggle, secondary elements |
| Neon Amber | \`#ffab00\` | Warnings, third section |
| Neon Red | \`#ff3d5a\` | Errors, alerts |
| Neon Purple | \`#b44dff\` | Special features, creative sections |

## Custom Visual Effects (CSS Classes)

| Class | Effect |
|-------|--------|
| \`.glass-dark\` | Dark transparent background with blur |
| \`.glass-card-dark\` | Glass card with light green borders |
| \`.gradient-neon\` | Green→cyan gradient |
| \`.gradient-neon-text\` | Gradient text (background-clip: text) |
| \`.gradient-mesh-dark\` | Radial gradient background |
| \`.neon-border\` | Border with neon glow |
| \`.card-hover\` | Hover effect (lift + shadow) |
| \`.neon-text\` | Text with neon green shadow |
| \`.neon-text-cyan\` | Text with neon cyan shadow |
| \`.circuit-bg\` | Circuit board pattern background |
| \`.terminal-text\` | Monospace font with green color |

## CSS Animations

| Class | Animation |
|-------|-----------|
| \`.animate-pulse-neon\` | Gradient neon pulse |
| \`.animate-float\` | Gentle float (6s) |
| \`.animate-float-delayed\` | Delayed float (6s + 2s) |
| \`.animate-shimmer\` | Moving shimmer |
| \`.animate-pulse-ring\` | Expanding pulse ring |
| \`.animate-cta-glow\` | CTA glow effect |

## LED Indicators

| Class | Appearance |
|-------|-----------|
| \`.led-on\` | Glowing green circle |
| \`.led-off\` | Dark gray circle |
| \`.led-amber\` | Glowing orange circle |
| \`.led-red\` | Glowing red circle |

## Responsive Design

| Breakpoint | xs | sm | md | lg | xl |
|-----------|----|----|----|----|-----|
| Main H1 text | 3xl | 5xl | 7xl | - | - |
| Card grid (Projects) | 1 col | 1 col | 2 col | - | - |
| Services grid | 1 col | 1 col | 2 col | 3 col | 3 col |
| Groups grid | 1 col | - | 2 col | - | 4 col |
| Resources grid | 1 col | 1 col | 2 col | 3 col | 3 col |
| Section padding | py-12 | py-16 | py-20 | - | - |`},subsections:[{id:"color-system",title:{ar:"نظام الألوان",en:"Color System"}},{id:"visual-effects",title:{ar:"التأثيرات البصرية",en:"Visual Effects"}},{id:"animations",title:{ar:"الأنيميشن",en:"Animations"}},{id:"led-indicators",title:{ar:"مؤشرات LED",en:"LED Indicators"}},{id:"responsive-design",title:{ar:"نظام الاستجابة",en:"Responsive Design"}}]},{id:"components",icon:"Layers",title:{ar:"قائمة المكونات",en:"Components"},description:{ar:"مكونات التخطيط والدليل والشات و shadcn/ui",en:"Layout, guide, chatbot, and shadcn/ui components"},content:{ar:`## مكونات التخطيط (\`layout/\`)

| المكون | الملف | الوصف |
|--------|------|-------|
| **SiteLayout** | \`layout/SiteLayout.tsx\` | التخطيط العام الذي يغلف كل الصفحات — يتضمن SiteHeader + الشريط الجانبي + SiteFooter + ChatBot |
| **SiteHeader** | \`layout/SiteHeader.tsx\` | رأس الصفحة مع تبديل اللغة، زر البحث ⌘K، وتبديل السمة (داكن/فاتح) |
| **SiteFooter** | \`layout/SiteFooter.tsx\` | تذييل الصفحة مع روابط سريعة ومعلومات حقوق النشر |

## مكونات الدليل (\`guide/\`)

| المكون | الملف | الوصف |
|--------|------|-------|
| **Sidebar** | \`guide/Sidebar.tsx\` | الشريط الجانبي للتنقل بين أقسام الدليل الـ 17، مع دعم ثنائي اللغة وتتبع القسم النشط |
| **SearchDialog** | \`guide/SearchDialog.tsx\` | حوار البحث السريع ⌘K — يبحث في عناوين الأقسام والمحتوى |
| **GuideRenderer** | \`guide/GuideRenderer.tsx\` | محلل محتوى Markdown — يحول المحتوى النصي لكل من العربية والإنجليزية إلى HTML مع تنسيق الجداول والأكواد |
| **AnimatedCounter** | \`guide/AnimatedCounter.tsx\` | عداد متحرك للأرقام — يستخدم في الصفحة الرئيسية لإحصائيات المشاريع والأمان والمكونات |

## مكون الدردشة (\`chat/\`)

**الملف:** \`chat/ChatBot.tsx\`

**وضعان مزدوج:**

1. **الوضع المحلي (FAQ):**
   - يطابق كلمات المستخدم مع 18 سؤال مُعرّف في \`src/data/faq.json\`
   - خوارزمية مطابقة تعتمد على طول الكلمة \xd7 2 (أهمية الكلمة)
   - استجابة باللغة السؤال تلقائياً (يكتشف العربية عبر Unicode)
   - إذا لم يجد إجابة ← يعرض رابط تليجرام

2. **وضع الذكاء الاصطناعي (AI):**
   - يتصل مباشرة بـ NVIDIA NIM API (\`meta/llama-3.1-405b-instruct\`)
   - يرسل آخر 6 رسائل من تاريخ المحادثة كـ context
   - System prompt متعد حسب اللغة (عربي/إنجليزي)
   - \`max_tokens: 150\` للإجابات المختصرة
   - \`temperature: 0.2\` للاستقرار
   - وقت انتظار: 8 ثوان

3. **المميزات:**
   - زر تبديل ⚡ بين الوضعين (يستمر نفس تاريخ المحادثة)
   - زر مسح المحادثة 🗑️
   - مؤشر كتابة "يفكر..." مع نقاط متحركة
   - رابط تليجرام تلقائي عند فشل AI
   - Fallback ذكي: إذا فشل AI ← يعود للوضع المحلي

## مكونات أخرى

| المكون | الملف | الوصف |
|--------|------|-------|
| **ServiceWorkerRegistrar** | \`ServiceWorkerRegistrar.tsx\` | تسجيل Service Worker لتفعيل PWA و Offline Support |

## مكونات الصفحة الرئيسية

الصفحة الرئيسية (\`src/app/page.tsx\`) هي صفحة هبوط الدليل (~520 سطر) وتتضمن:
- قسم Hero مع عنوان الدليل وإحصائيات متحركة (17 قسماً، 4+ مشاريع، 92/100 أمان)
- شبكة روابط سريعة لاستكشاف الأقسام (9 أقسام مميزة)
- بطاقات المميزات (ثنائي اللغة، داكن، بحث ⌘K، متجاوب)
- لوحة معلومات المشروع (معلومات المستودع، Lighthouse، النشر)
- بطاقة الميزات المفعّلة (14 ميزة)
- خارطة الطريق (4 مراحل)

## مكونات UI (shadcn/ui)

مُثبّت 55+ مكون من مكتبة shadcn/ui في \`src/components/ui/\`. تشمل:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip`,en:`## Layout Components (\`layout/\`)

| Component | File | Description |
|-----------|------|-------------|
| **SiteLayout** | \`layout/SiteLayout.tsx\` | Overall layout wrapping all pages — includes SiteHeader + Sidebar + SiteFooter + ChatBot |
| **SiteHeader** | \`layout/SiteHeader.tsx\` | Page header with language toggle, ⌘K search button, and theme toggle (dark/light) |
| **SiteFooter** | \`layout/SiteFooter.tsx\` | Page footer with quick links and copyright info |

## Guide Components (\`guide/\`)

| Component | File | Description |
|-----------|------|-------------|
| **Sidebar** | \`guide/Sidebar.tsx\` | Sidebar navigation for the 17 guide sections, with bilingual support and active section tracking |
| **SearchDialog** | \`guide/SearchDialog.tsx\` | Quick search dialog ⌘K — searches across section titles and content |
| **GuideRenderer** | \`guide/GuideRenderer.tsx\` | Markdown content renderer — converts text content for both Arabic and English to formatted HTML with tables and code blocks |
| **AnimatedCounter** | \`guide/AnimatedCounter.tsx\` | Animated number counter — used on the home page for project, security, and component statistics |

## Chat Component (\`chat/\`)

**File:** \`chat/ChatBot.tsx\`

**Dual Mode:**

1. **Local Mode (FAQ):**
   - Matches user words with 18 questions defined in \`src/data/faq.json\`
   - Matching algorithm based on word length \xd7 2 (word importance)
   - Auto-responds in the question's language (detects Arabic via Unicode)
   - If no answer found → shows Telegram link

2. **AI Mode:**
   - Connects directly to NVIDIA NIM API (\`meta/llama-3.1-405b-instruct\`)
   - Sends last 6 messages from chat history as context
   - Multi-language system prompt (Arabic/English)
   - \`max_tokens: 150\` for concise answers
   - \`temperature: 0.2\` for stability
   - Timeout: 8 seconds

3. **Features:**
   - ⚡ Toggle button between modes (preserves chat history)
   - 🗑️ Clear chat button
   - "Thinking..." typing indicator with animated dots
   - Automatic Telegram link on AI failure
   - Smart Fallback: if AI fails → returns to local mode

## Other Components

| Component | File | Description |
|-----------|------|-------------|
| **ServiceWorkerRegistrar** | \`ServiceWorkerRegistrar.tsx\` | Registers Service Worker for PWA and Offline Support |

## Home Page Components

The home page (\`src/app/page.tsx\`) is a guide landing page (~520 lines) that includes:
- Hero section with guide title and animated statistics (17 sections, 4+ projects, 92/100 security)
- Quick links grid to explore sections (9 featured sections)
- Feature cards (Bilingual, Dark, Search ⌘K, Responsive)
- Project information dashboard (repo info, Lighthouse, deployment)
- Enabled features card (14 active features)
- Roadmap (4 phases)

## UI Components (shadcn/ui)

55+ components from shadcn/ui installed in \`src/components/ui/\`. Includes:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip`},subsections:[{id:"layout-components",title:{ar:"مكونات التخطيط",en:"Layout Components"}},{id:"guide-components",title:{ar:"مكونات الدليل",en:"Guide Components"}},{id:"chatbot-component",title:{ar:"مكون الدردشة",en:"ChatBot Component"}},{id:"ui-components",title:{ar:"مكونات UI",en:"UI Components"}}]},{id:"state-management",icon:"Database",title:{ar:"إدارة الحالة",en:"State Management"},description:{ar:"نظام اللغة، حالة الدليل، ودعم RTL والخطوط",en:"Language system, guide state, RTL support, and fonts"},content:{ar:`## نظام اللغة — Zustand Store

**الملف:** \`src/lib/language.ts\`

\`\`\`typescript
interface LanguageState {
  lang: 'ar' | 'en';
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (ar: string, en: string) => string;  // دالة الترجمة
  isRTL: () => boolean;
}
\`\`\`

**الاستخدام:**
\`\`\`typescript
const { lang, toggle, t, isRTL } = useLang();

// الترجمة
const title = t("مرحباً", "Welcome"); // يتحدث تلقائياً مع تغيير اللغة

// RTL
const isRTL = isRTL(); // true = عربي, false = إنجليزي

// تبديل اللغة
<button onClick={toggle}>
  {lang === 'ar' ? 'EN' : 'عربي'}
</button>
\`\`\`

## حالة الدليل — Zustand Store

**الملف:** \`src/lib/guide-store.ts\`

يدير حالة الدليل بما في ذلك:
- **السمة (Theme):** \`'dark' | 'light'\` — يتحكم بالسمة البصرية للدليل
- **القسم النشط:** تتبع القسم الحالي المعروض

\`\`\`typescript
const { theme } = useGuideStore();
const isLight = theme === "light";
\`\`\`

## خريطة الأيقونات

**الملف:** \`src/lib/icon-map.tsx\`

يربط أسماء الأيقونات (string) بمكونات Lucide React الفعلية. يُستخدم في الشريط الجانبي والصفحة الرئيسية لعرض أيقونات الأقسام ديناميكياً.

\`\`\`typescript
import { SectionIcon } from "@/lib/icon-map";
<SectionIcon name="Globe" className="h-5 w-5" />
\`\`\`

## الاتجاهات

| الطريقة | الكود | الوصف |
|--------|------|-------|
| \`t(ar, en)\` | دالة ترجمة مختصرة | تعيد النص حسب اللغة الحالية |
| \`lang\` | \`'ar' | 'en'\` | اللغة الحالية |
| \`isRTL()\` | \`boolean\` | هل اتجاه النص من اليمين لليمين؟ |
| \`toggle()\` | \`void\` | تبديل بين العربية والإنجليزية |
| \`setLang(l)\` | \`void\` | تعيين لغة معينة |

## دعم RTL/LTR

- **التخطيط الرئيسي** يبدأ بـ \`dir="rtl"\` افتراضياً
- كل مكون يستخدم \`dir={isRTL() ? "rtl" : "ltr"}\` للنصوص
- بعض النصوص التقنية (مثل أسماء المتحكمات) تُعرض دائماً من اليسار لليمين (\`dir="ltr"\`)
- CSS خاص: \`[dir="rtl"] .lucide-chevron-down { transition: transform 0.2s; }\`

## الخطوط

\`\`\`css
font-family: var(--font-ibm-plex-arabic), system-ui, sans-serif;
\`\`\`

الخط: **IBM Plex Sans Arabic** (من Google Fonts)
- الأوزان: 400, 600, 700
- يدعم العربية والإنجليزية
- \`display: swap\` للأداء`,en:`## Language System — Zustand Store

**File:** \`src/lib/language.ts\`

\`\`\`typescript
interface LanguageState {
  lang: 'ar' | 'en';
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (ar: string, en: string) => string;  // Translation function
  isRTL: () => boolean;
}
\`\`\`

**Usage:**
\`\`\`typescript
const { lang, toggle, t, isRTL } = useLang();

// Translation
const title = t("مرحباً", "Welcome"); // Automatically updates when language changes

// RTL
const isRTL = isRTL(); // true = Arabic, false = English

// Language toggle
<button onClick={toggle}>
  {lang === 'ar' ? 'EN' : 'عربي'}
</button>
\`\`\`

## Guide State — Zustand Store

**File:** \`src/lib/guide-store.ts\`

Manages guide state including:
- **Theme:** \`'dark' | 'light'\` — controls the visual theme of the guide
- **Active Section:** tracks the currently displayed section

\`\`\`typescript
const { theme } = useGuideStore();
const isLight = theme === "light";
\`\`\`

## Icon Map

**File:** \`src/lib/icon-map.tsx\`

Maps icon names (string) to actual Lucide React components. Used in the sidebar and home page to dynamically render section icons.

\`\`\`typescript
import { SectionIcon } from "@/lib/icon-map";
<SectionIcon name="Globe" className="h-5 w-5" />
\`\`\`

## API Methods

| Method | Code | Description |
|--------|------|-------------|
| \`t(ar, en)\` | Translation shorthand | Returns text based on current language |
| \`lang\` | \`'ar' | 'en'\` | Current language |
| \`isRTL()\` | \`boolean\` | Is the text direction right-to-left? |
| \`toggle()\` | \`void\` | Toggle between Arabic and English |
| \`setLang(l)\` | \`void\` | Set a specific language |

## RTL/LTR Support

- **Main layout** starts with \`dir="rtl"\` by default
- Every component uses \`dir={isRTL() ? "rtl" : "ltr"}\` for text
- Some technical texts (like microcontroller names) are always displayed left-to-right (\`dir="ltr"\`)
- Special CSS: \`[dir="rtl"] .lucide-chevron-down { transition: transform 0.2s; }\`

## Fonts

\`\`\`css
font-family: var(--font-ibm-plex-arabic), system-ui, sans-serif;
\`\`\`

Font: **IBM Plex Sans Arabic** (from Google Fonts)
- Weights: 400, 600, 700
- Supports Arabic and English
- \`display: swap\` for performance`},subsections:[{id:"language-system",title:{ar:"نظام اللغة",en:"Language System"}},{id:"guide-state",title:{ar:"حالة الدليل",en:"Guide State"}},{id:"rtl-support",title:{ar:"دعم RTL/LTR",en:"RTL/LTR Support"}},{id:"fonts",title:{ar:"الخطوط",en:"Fonts"}}]},{id:"database",icon:"Database",title:{ar:"قاعدة البيانات",en:"Database"},description:{ar:"مخطط Prisma واتصال قاعدة البيانات والبيانات الثابتة",en:"Prisma schema, DB connection, and static data"},content:{ar:`## المخطط (\`prisma/schema.prisma\`)

3 نماذج فقط (الموقع يستخدم ملفات JSON للبيانات الثابتة):

\`\`\`prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CourseEnrollment {
  id        String   @id @default(cuid())
  userEmail String
  courseId  String
  progress  Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userEmail, courseId])
}
\`\`\`

## الاتصال بقاعدة البيانات

\`\`\`typescript
import { db } from '@/lib/db';
// db is a PrismaClient singleton

// استخدام:
const messages = await db.contactMessage.findMany();
await db.contactMessage.create({ data: {...} });
\`\`\`

## البيانات الثابتة

| الملف | المحتوى | الاستخدام |
|------|---------|---------|
| \`src/data/guide-sections.ts\` | 17 قسم دليل مع محتوى ثنائي اللغة | بيانات الدليل وتوليد الصفحات |
| \`src/data/faq.json\` | 18 سؤال مع كلمات مفتاحية | مصدر بيانات الشات |`,en:`## Schema (\`prisma/schema.prisma\`)

Only 3 models (the site uses JSON files for static data):

\`\`\`prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CourseEnrollment {
  id        String   @id @default(cuid())
  userEmail String
  courseId  String
  progress  Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userEmail, courseId])
}
\`\`\`

## Database Connection

\`\`\`typescript
import { db } from '@/lib/db';
// db is a PrismaClient singleton

// Usage:
const messages = await db.contactMessage.findMany();
await db.contactMessage.create({ data: {...} });
\`\`\`

## Static Data

| File | Content | Usage |
|------|---------|-------|
| \`src/data/guide-sections.ts\` | 17 guide sections with bilingual content | Guide data and page generation |
| \`src/data/faq.json\` | 18 questions with keywords | Chatbot data source |`},subsections:[{id:"prisma-schema",title:{ar:"مخطط Prisma",en:"Prisma Schema"}},{id:"db-connection",title:{ar:"الاتصال بقاعدة البيانات",en:"Database Connection"}},{id:"static-data",title:{ar:"البيانات الثابتة",en:"Static Data"}}]},{id:"ai-chatbot",icon:"Bot",title:{ar:"الذكاء الاصطناعي",en:"AI ChatBot"},description:{ar:"معمارية الدردشة وإعدادات NVIDIA و System Prompts",en:"Chat architecture, NVIDIA config, and system prompts"},content:{ar:`## معمارية الدردشة

\`\`\`
┌──────────────┐    ┌──────────────┐
│  المستخدم     │    │  ChatBot.tsx  │
│  (input)     │───►│              │
└──────────────┘    └──────┬──────┘
                            │
                     ▼
              ┌─────────────────────┐
              │  كشف في FAQ JSON   │
              └──────┬──────────┘ │
                     │        │        │
               score > 2?     │        │
              ┌────▼────┐   │  No    │
              │ FAQ answer │    │match │
              └─────────┘   └──┬───┘
                              │
                     ▼
              ┌─────────────────────┐
              │  وضع AI مُفعّل؟    │
              │  (زر ⚡)           │
              └──────┬──────────┘ │
              Yes │              │ No
               │              │
               ▼              ▼
        ┌──────────┐  ┌──────────────┐
        │ NVIDIA   │  │ رابط تليجرام │
        │ NIM API  │  │ (fallback)    │
        └──────────┘  └──────────────┘
\`\`\`

## إعدادات NVIDIA

\`\`\`typescript
const NVIDIA_DIRECT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY;
const MODEL = "meta/llama-3.1-405b-instruct";
\`\`\`

## System Prompts

**عربي:**
\`\`\`
أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق
'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق.
إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).
\`\`\`

**إنجليزي:**
\`\`\`
You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'.
Answer only based on the team's services and projects. Don't fabricate.
If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).
\`\`\``,en:`## Chat Architecture

\`\`\`
┌──────────────┐    ┌──────────────┐
│    User       │    │  ChatBot.tsx  │
│  (input)     │───►│              │
└──────────────┘    └──────┬──────┘
                            │
                     ▼
              ┌─────────────────────┐
              │  Search in FAQ JSON │
              └──────┬──────────┘ │
                     │        │        │
               score > 2?     │        │
              ┌────▼────┐   │  No    │
              │ FAQ answer │    │match │
              └─────────┘   └──┬───┘
                              │
                     ▼
              ┌─────────────────────┐
              │  AI mode enabled?   │
              │  (⚡ button)        │
              └──────┬──────────┘ │
              Yes │              │ No
               │              │
               ▼              ▼
        ┌──────────┐  ┌──────────────┐
        │ NVIDIA   │  │ Telegram Link│
        │ NIM API  │  │ (fallback)   │
        └──────────┘  └──────────────┘
\`\`\`

## NVIDIA Configuration

\`\`\`typescript
const NVIDIA_DIRECT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY;
const MODEL = "meta/llama-3.1-405b-instruct";
\`\`\`

## System Prompts

**Arabic:**
\`\`\`
أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق
'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق.
إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).
\`\`\`

**English:**
\`\`\`
You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'.
Answer only based on the team's services and projects. Don't fabricate.
If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).
\`\`\``},subsections:[{id:"chat-architecture",title:{ar:"معمارية الدردشة",en:"Chat Architecture"}},{id:"nvidia-config",title:{ar:"إعدادات NVIDIA",en:"NVIDIA Configuration"}},{id:"system-prompts",title:{ar:"System Prompts",en:"System Prompts"}}]},{id:"security",icon:"ShieldCheck",title:{ar:"الأمان والحماية",en:"Security"},description:{ar:"نتيجة الأمان والإصلاحات الأمنية المنفذة",en:"Security score and implemented security fixes"},content:{ar:`## نتيجة الأمان الإجمالية: 92/100

| أداة الاختبار | النتيجة | التفاصيل |
|-------------|--------|---------|
| Lighthouse (Google) | 75/100 | أداء: 75، SEO: 100، أفضل ممارسات: 96، سهولة الوصول: 94 |
| Security Headers | 100/100 | جميع الرؤوس الأمنية مُطبّقة بنجاح |
| Nuclei (ProjectDiscovery) | 100/100 | لم يتم اكتشاف ثغرات |
| OWASP Top 10 | 100/100 | جميع الفئات آمنة أو تم إصلاحها |

## الإصلاحات الأمنية المنفذة

- 17 إصلاح أمني تم تنفيذها
- 7 تحسينات SEO (sitemap, manifest, robots, OG tags, etc.)
- إزالة X-Powered-By
- منع إعادة التوجيه (DTR/RTS)
- كشف ملفات تعريضة مكشوفة`,en:`## Overall Security Score: 92/100

| Testing Tool | Score | Details |
|-------------|-------|---------|
| Lighthouse (Google) | 75/100 | Performance: 75, SEO: 100, Best Practices: 96, Accessibility: 94 |
| Security Headers | 100/100 | All security headers successfully implemented |
| Nuclei (ProjectDiscovery) | 100/100 | No vulnerabilities detected |
| OWASP Top 10 | 100/100 | All categories secure or fixed |

## Implemented Security Fixes

- 17 security fixes implemented
- 7 SEO improvements (sitemap, manifest, robots, OG tags, etc.)
- Removed X-Powered-By header
- Prevented redirect attacks (DTR/RTS)
- Detected exposed configuration files`},subsections:[{id:"security-score",title:{ar:"نتيجة الأمان",en:"Security Score"}},{id:"security-fixes",title:{ar:"الإصلاحات الأمنية",en:"Security Fixes"}}]},{id:"deployment",icon:"Rocket",title:{ar:"النشر",en:"Deployment"},description:{ar:"بيئة التطوير والبنناء والتحسينات",en:"Dev environment, build, and optimizations"},content:{ar:`## بيئة التطوير (localhost:3000)

\`\`\`bash
bun run dev
\`\`\`

## البناء والنشر (GitHub Pages)

\`\`\`bash
# البناء (يُنشئ ملف docs/)
NEXT_PUBLIC=true bun run build

# النسخ (مجلد docs/ يتم رفعه تلقائياً عبر git)
git add docs/
git commit -m "deploy: v2.0"
git push
\`\`\`

## SEO

- **sitemap.xml:** مُولّد تلقائياً عبر \`src/app/sitemap.ts\`
- **manifest.webmanifest:** PWA manifest مع أيقون + لون خلفية
- **robots.txt:** يسمح بالزحف مع رابط الخريطة
- **Open Graph:** عنوان + وصف + صورة
- **Twitter Card:** ملخص + صورة
- **metadataBase:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio\`

## PWA (Progressive Web App)

- **Service Worker:** \`public/sw.js\` — تخزين مسبق لملفات
- **Registrar:** \`ServiceWorkerRegistrar.tsx\` — تسجيل SW عند التحميل
- **Manifest:** \`src/app/manifest.ts\` — اسم التطبيق، أيقونات، لون خلفية
- **Install Prompt:** مُفعّل عبر script في \`layout.tsx\`

## تحليلات (Plausible)

- مدمج في \`layout.tsx\` عبر \`<Script>\`
- تتبع أحداث Plausible مخصصة:
  - \`Contact Click\` (platform: telegram/whatsapp/facebook)
  - \`Chat Opened\` (زر الدردشة)
  - \`Calculator Quote Request\`
  - \`Form Submit Attempt\`
  - \`Blog Post Viewed\` (slug)

## Cloudflare Turnstile

- مدمج في نموذج الاتصال لحماية من الروبوتات
- يُحمّل النموذج من الإرسال بدون رمز صالح
- المفتاح: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``,en:`## Development Environment (localhost:3000)

\`\`\`bash
bun run dev
\`\`\`

## Build and Deploy (GitHub Pages)

\`\`\`bash
# Build (creates docs/ folder)
NEXT_PUBLIC=true bun run build

# Deploy (docs/ folder is pushed automatically via git)
git add docs/
git commit -m "deploy: v2.0"
git push
\`\`\`

## SEO

- **sitemap.xml:** Auto-generated via \`src/app/sitemap.ts\`
- **manifest.webmanifest:** PWA manifest with icon + background color
- **robots.txt:** Allows crawling with sitemap link
- **Open Graph:** Title + description + image
- **Twitter Card:** Summary + image
- **metadataBase:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio\`

## PWA (Progressive Web App)

- **Service Worker:** \`public/sw.js\` — Pre-caches files
- **Registrar:** \`ServiceWorkerRegistrar.tsx\` — Registers SW on load
- **Manifest:** \`src/app/manifest.ts\` — App name, icons, background color
- **Install Prompt:** Enabled via script in \`layout.tsx\`

## Analytics (Plausible)

- Integrated in \`layout.tsx\` via \`<Script>\`
- Custom Plausible events tracking:
  - \`Contact Click\` (platform: telegram/whatsapp/facebook)
  - \`Chat Opened\` (chat button)
  - \`Calculator Quote Request\`
  - \`Form Submit Attempt\`
  - \`Blog Post Viewed\` (slug)

## Cloudflare Turnstile

- Integrated in the contact form for bot protection
- Blocks form submission without valid token
- Key: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``},subsections:[{id:"dev-environment",title:{ar:"بيئة التطوير",en:"Dev Environment"}},{id:"production-build",title:{ar:"البناء والنشر",en:"Production Build"}},{id:"seo",title:{ar:"SEO",en:"SEO"}},{id:"pwa",title:{ar:"PWA",en:"PWA"}},{id:"analytics",title:{ar:"التحليلات",en:"Analytics"}},{id:"turnstile",title:{ar:"Cloudflare Turnstile",en:"Cloudflare Turnstile"}}]},{id:"environment-vars",icon:"Key",title:{ar:"متغيرات البيئة",en:"Environment Variables"},description:{ar:"المتغيرات المطلوبة والاختيارية",en:"Required and optional environment variables"},content:{ar:`## متغيرات مطلوبة (\`.env.local\`)

\`\`\`bash
# === الذكاء الاصطناعي ===
NEXT_PUBLIC_NVIDIA_API_KEY=nvapi-xxx  # مفتاح NVIDIA NIM

# === نموذج الاتصال ===
NEXT_PUBLIC_FORMSPREE_ID=xyzabc  # معرف Formspree

# === Cloudflare Turnstile ===
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # مفتاح اختبار

# === تحليلات ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=iot-portfolio.example.com  # نطاق Plausible
\`\`\`

## متغيرات اختيارية

\`\`\`bash
# أسم النطاق (لـ metadataBase)
NEXT_PUBLIC_SITE_URL=https://mohammadfhgjvhgi.github.io/iot-portfolio

# تفعيل React Strict Mode (معطوق حالياً)
REACT_STRICT_MODE=true
\`\`\``,en:`## Required Variables (\`.env.local\`)

\`\`\`bash
# === AI ===
NEXT_PUBLIC_NVIDIA_API_KEY=nvapi-xxx  # NVIDIA NIM key

# === Contact Form ===
NEXT_PUBLIC_FORMSPREE_ID=xyzabc  # Formspree ID

# === Cloudflare Turnstile ===
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # Test key

# === Analytics ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=iot-portfolio.example.com  # Plausible domain
\`\`\`

## Optional Variables

\`\`\`bash
# Domain name (for metadataBase)
NEXT_PUBLIC_SITE_URL=https://mohammadfhgjvhgi.github.io/iot-portfolio

# Enable React Strict Mode (currently disabled)
REACT_STRICT_MODE=true
\`\`\``},subsections:[{id:"required-vars",title:{ar:"متغيرات مطلوبة",en:"Required Variables"}},{id:"optional-vars",title:{ar:"متغيرات اختيارية",en:"Optional Variables"}}]},{id:"troubleshooting",icon:"Wrench",title:{ar:"المشاكل والحلول",en:"Troubleshooting"},description:{ar:"مشاكل Lighthouse و DTR/RTS و RFID والتطبيق",en:"Lighthouse, DTR/RTS, RFID, and app issues"},content:{ar:`## Lighthouse Performance (النتيجة: 75/100)

| المشكلة | السبب | الحل المقترح |
|--------|-------|-------------|
| JavaScript كبير | وضع التطوير | التقليل في الإنتاج (\`next build\`) |
| JavaScript غير مستخدم | Next.js devtools | التقليل في الإنتاج |
| وقت التفاعل بطيء (7.2s) | حجم الصفحة + JS | تقسيم الكود + Lazy Loading |
| LCP كبير (4.0s) | صورة البطل | تحسين صورة + lazy loading |

## مشاكل DTR/RTS

**المشكلة:** إعادة ضبط DTR/RTS تقطع الاتصال التسلسلي مع Arduino Bridge.

**الحلول المُنفذ:**
- خط أنابيب \`urllib\` غير قابل للحجب (Non-blocking)
- منع إعادة الضبط \`DTR/RTS\` في اتصال USB
- استخدام جسر UART مخصص (Arduino Uno كجسر)

## مشكلة RFID يتجمد

**المشكلة:** قارئ RFID (MFRC522) يتجمد ولا يستجيب بعد عدة محاولات فاشلة.

**الحلول المُنفذ (Anti-Freeze Algorithm):**
\`\`\`c++
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 ثانية

// بعد 3 محاولات فاشلة متتالية:
SPI.end();
delay(100);
SPI.begin();
mfrc522.PCD_Init();
consecutiveFails = 0;
\`\`\`

## مشاكل التطبيق الصغير

1. **المشكلة:** \`reactStrictMode: false\` — تم تعطيله لتجنب التحذيرات
2. **الحل:** ملف TypeScript مع \`ignoreBuildErrors: true\` في \`next.config.ts\`
3. **الحل البديل:** استخدام TypeScript صارم + إزالة الأكواد غير المستخدمة`,en:`## Lighthouse Performance (Score: 75/100)

| Issue | Cause | Suggested Solution |
|-------|-------|-------------------|
| Large JavaScript | Development mode | Reduced in production (\`next build\`) |
| Unused JavaScript | Next.js devtools | Reduced in production |
| Slow interaction time (7.2s) | Page size + JS | Code splitting + Lazy Loading |
| High LCP (4.0s) | Hero image | Image optimization + lazy loading |

## DTR/RTS Issues

**Problem:** DTR/RTS reset interrupts serial connection with Arduino Bridge.

**Implemented Solutions:**
- Non-blocking \`urllib\` pipeline
- Prevented \`DTR/RTS\` reset in USB connection
- Custom UART bridge (Arduino Uno as bridge)

## RFID Freeze Issue

**Problem:** RFID reader (MFRC522) freezes and stops responding after several failed attempts.

**Implemented Solutions (Anti-Freeze Algorithm):**
\`\`\`c++
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 seconds

// After 3 consecutive failed attempts:
SPI.end();
delay(100);
SPI.begin();
mfrc522.PCD_Init();
consecutiveFails = 0;
\`\`\`

## App Issues

1. **Problem:** \`reactStrictMode: false\` — Disabled to avoid warnings
2. **Solution:** TypeScript with \`ignoreBuildErrors: true\` in \`next.config.ts\`
3. **Alternative Solution:** Use strict TypeScript + remove unused code`},subsections:[{id:"lighthouse-performance",title:{ar:"أداء Lighthouse",en:"Lighthouse Performance"}},{id:"dtr-rts",title:{ar:"مشاكل DTR/RTS",en:"DTR/RTS Issues"}},{id:"rfid-freeze",title:{ar:"تجمد RFID",en:"RFID Freeze"}},{id:"app-issues",title:{ar:"مشاكل التطبيق",en:"App Issues"}}]},{id:"roadmap",icon:"Map",title:{ar:"خريطة الطريق",en:"Roadmap"},description:{ar:"الأولويات والميزات المقترحة والتحسينات المستقبلية",en:"Priorities, proposed features, and future improvements"},content:{ar:`## أولوية عالية

- [ ] إصلاح Lighthouse Performance (الوصول لـ 90+)
- [ ] إضافة صور حقيقية للمشاريع والفريق
- [ ] إضافة فيديوهات قصيرة للمشاريع
- [ ] تحسين سرعة التحميل على الهاتف

## ميزات مقترحة

- [ ] صفحة مستقلة لمحمد (\`/mohammad\`)
- [ ] صفحة معمارية (\`/architecture\`)
- [ ] صفحة أمان (\`/security\`)
- [ ] نظام تعليقات/مدونات حقيقية
- [x] دعم وضع Dark/Light كامل
- [ ] تحويل SearchDialog للبحث في المحتوى الكامل

## تحسينات تقنية

- [x] تحويل إلى App Router متعدد الصفحات (تم: \`/docs/[slug]\`)
- [ ] إضافة Image Optimization (sharp)
- [ ] إضافة ISR (Incremental Static Regeneration)
- [ ] تحسين Font Loading
- [ ] تقليل bundle size

## محتوى مقترح

- [ ] المزيد من مقالات المدونة
- [ ] دروس تفاعلية خطوة بخطوة
- [ ] صفحة أسئلة شائعة موسعة (مع إجابات تفاعلية)
- [ ] معرض تفاعلي للمشاريع (Before/After)`,en:`## High Priority

- [ ] Fix Lighthouse Performance (reach 90+)
- [ ] Add real photos for projects and team
- [ ] Add short project videos
- [ ] Improve mobile loading speed

## Proposed Features

- [ ] Dedicated page for Mohammad (\`/mohammad\`)
- [ ] Architecture page (\`/architecture\`)
- [ ] Security page (\`/security\`)
- [ ] Real comments/blog system
- [x] Full Dark/Light mode support
- [ ] Convert SearchDialog to full content search

## Technical Improvements

- [x] Convert to multi-page App Router (done: \`/docs/[slug]\`)
- [ ] Add Image Optimization (sharp)
- [ ] Add ISR (Incremental Static Regeneration)
- [ ] Improve Font Loading
- [ ] Reduce bundle size

## Content Plans

- [ ] More blog articles
- [ ] Interactive step-by-step tutorials
- [ ] Expanded FAQ page (with interactive answers)
- [ ] Interactive project gallery (Before/After)`},subsections:[{id:"high-priority",title:{ar:"أولوية عالية",en:"High Priority"}},{id:"proposed-features",title:{ar:"ميزات مقترحة",en:"Proposed Features"}},{id:"tech-improvements",title:{ar:"تحسينات تقنية",en:"Tech Improvements"}},{id:"content-plans",title:{ar:"محتوى مقترح",en:"Content Plans"}}]},{id:"external-links",icon:"ExternalLink",title:{ar:"الجهات الخارجية",en:"External Links"},description:{ar:"قنوات التواصل والروابط التقنية وأدوات التطوير",en:"Communication channels, tech links, and dev tools"},content:{ar:`## قنوات التواصل

| المنصة | الرابط | الاستخدام |
|--------|-------|---------|
| تليجرام 1 | \`https://t.me/Mashari3_AI_Arduino\` | المجموعة الرئيسية (500+ عضو) |
| تليجرام 2 | \`https://t.me/Arsuino1\` | المجموعة Arduino (300+ عضو) |
| فيسبوك | \`https://www.facebook.com/share/1HnZactzYD/\` | صفحة الفيسبوك |
| واتساب | \`https://wa.me/972569303043\` | اتصال مباشر |
| Formspree | \`https://formspree.io/f/YOUR_ID\` | نموذج الاتصال |

## روابط تقنية

| المورد | الرابط | الوصف |
|--------|-------|-------|
| Next.js Docs | \`https://nextjs.org/docs\` | إطار العمل |
| Tailwind CSS | \`https://tailwindcss.com/docs\` | إطار الأنماط |
| shadcn/ui | \`https://ui.shadcn.com/\` | مكتبة المكونات |
| Framer Motion | \`https://www.framer.com/motion/\` | الرسوم |
| Lucide Icons | \`https://lucide.dev/\` | أيقونات |
| Zustand | \`https://zustand-demo.pmnd.rs/\` | إدارة الحالة |
| Prisma | \`https://www.prisma.io/docs/\` | ORM |

## أدوات التطوير المستخدمة

| الأداة | الاستخدام |
|--------|---------|
| VS Code | محرر الكود الأساسي |
| bun | مدير الحزم والمتصفح |
| ESLint | فحص الكود |
| Chrome DevTools | تصحيح الأخطاء |
| GitHub Desktop | إدارة الإصدارات |
| Lighthouse | فحص الأداء والأمان |
| Plausible | تحليلات الزوار`,en:`## Communication Channels

| Platform | Link | Usage |
|----------|------|-------|
| Telegram 1 | \`https://t.me/Mashari3_AI_Arduino\` | Main group (500+ members) |
| Telegram 2 | \`https://t.me/Arsuino1\` | Arduino group (300+ members) |
| Facebook | \`https://www.facebook.com/share/1HnZactzYD/\` | Facebook page |
| WhatsApp | \`https://wa.me/972569303043\` | Direct contact |
| Formspree | \`https://formspree.io/f/YOUR_ID\` | Contact form |

## Technical Links

| Resource | Link | Description |
|----------|------|-------------|
| Next.js Docs | \`https://nextjs.org/docs\` | Framework |
| Tailwind CSS | \`https://tailwindcss.com/docs\` | Styling framework |
| shadcn/ui | \`https://ui.shadcn.com/\` | Component library |
| Framer Motion | \`https://www.framer.com/motion/\` | Animations |
| Lucide Icons | \`https://lucide.dev/\` | Icons |
| Zustand | \`https://zustand-demo.pmnd.rs/\` | State management |
| Prisma | \`https://www.prisma.io/docs/\` | ORM |

## Development Tools Used

| Tool | Usage |
|------|-------|
| VS Code | Primary code editor |
| bun | Package manager and runner |
| ESLint | Code linting |
| Chrome DevTools | Debugging |
| GitHub Desktop | Version control |
| Lighthouse | Performance and security auditing |
| Plausible | Visitor analytics`},subsections:[{id:"communication-channels",title:{ar:"قنوات التواصل",en:"Communication Channels"}},{id:"tech-links",title:{ar:"روابط تقنية",en:"Tech Links"}},{id:"dev-tools",title:{ar:"أدوات التطوير",en:"Dev Tools"}}]},{id:"quick-reference",icon:"Zap",title:{ar:"ملخص سريع",en:"Quick Reference"},description:{ar:"دليل سريع للعمل على المشروع والملفات المهمة",en:"Quick guide for working on the project and important files"},content:{ar:`## عند العمل على المشروع:

1. **تشغيل:** \`bun run dev\` (Port 3000)
2. **فحص:** \`bun run lint\` قبل كل commit
3. **تعديل \`globals.css\`** إذا أردت تعديل الأنماط أو التأثيرات
4. **تعديل الصفحة الرئيسية:** \`src/app/page.tsx\` (~520 سطر، صفحة هبوط الدليل)
5. **أضف مكون جديد:** في \`src/components/layout/\` أو \`src/components/guide/\` ثم استورده
6. **تعديل محتوى الدليل:** \`src/data/guide-sections.ts\` (17 قسم)
7. **اللغة:** استخدم \`t("عربي", "English")\` لكل نص
8. **RTL:** أضف \`dir={isRTL() ? "rtl" : "ltr"}\` للعناصر
9. **CSS:** استخدم الأصناف (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) لتوحيد موحد
10. **النشر:** \`NEXT_PUBLIC=true bun run build\` ثم \`git push\`

## اختصارات سريعة:

\`\`\`bash
# إعادة إنشاء قاعدة البيانات
bun run db:push

# إعادة توليد عميل Prisma
bun run db:generate

# تشغيل lint
bun run lint
\`\`\`

## ملاحظات مهمة

### تحذيرات

- **لا تضف ملفات .env في git** — استخدم \`.env.local\` و \`.gitignore\`
- **لا تضف \`basePath\` يدوياً** في الكود — يتم تعيينه تلقائياً حسب البيئة
- **لا تستخدم \`<img>\` بدون \`alt\`** — يفشل accessibility
- **لا تستخدم \`any\` في TypeScript** — يجب تحديد الأنواع
- **لا تُعدّل CSS في \`globals.css\`** بدون سبب — ضعها في \`@layer\`

### أفضل الممارسات

- استخدم \`useInView\` من Framer Motion بدلاً من \`useEffect\` للكشف ظهور العناصر
- استخدم \`AnimatePresence\` للعناصر التي تظهر وتختفي
- استخدم \`glass-card-dark\` كبطاقة أساسية للبطاقات
- استخدم \`text-[10px]\` / \`text-xs\` / \`text-sm\` للتدرجات المتدرجة
- أضف \`max-w-6xl\` أو \`max-w-7xl\` للحد الأقصى للعرض
- استخدم \`gap-3 sm:gap-4 lg:gap-6\` للفواصل بين العناصر

### نصائح للكتابة

- استخدم التعليقات \`/* === */\` لفصل الأقسام في الكود
- استخدم \`dir={isRTL() ? "rtl" : "ltr"}\` للنصوص ثنائية
- استخدم التدرج اللون عبر \`style={{ color: "#00ff66" }}\` بدلاً من className
- استخدم \`aria-label\` لكل زر تفاعلي
- استخدم \`type LucideIcon\` لأيقونات SVG في البيانات
- استخدم \`as const\` للكائنات الثابتة في المتغيرات

## تاريخ التغييرات الرئيسية

| التاريخ | التغيير |
|--------|---------|
| v1.0 | إطلاق المشروع مع الهيكل الأساسي |
| v1.1 | إضافة Start Here, Groups Links, Resource Library, Latest Additions |
| v1.2 | إضافة BlogSection, LiveActivity, DynamicElements |
| v1.3 | إضافة SearchDialog (Cmd+K), FAQ Section |
| v2.0 | تحديث الإحصائيات (92/100)، إضافة التحديات، تحسين التصميم |
| v2.1 | إعادة هيكلة: إزالة portfolio/ و platform/، إضافة layout/ و guide/، تحويل إلى App Router متعدد الصفحات (/docs/[slug])، دليل المطور الشامل (17 قسم) |`,en:`## When Working on the Project:

1. **Run:** \`bun run dev\` (Port 3000)
2. **Lint:** \`bun run lint\` before every commit
3. **Edit \`globals.css\`** if you want to modify styles or effects
4. **Edit the home page:** \`src/app/page.tsx\` (~520 lines, guide landing page)
5. **Add a new component:** in \`src/components/layout/\` or \`src/components/guide/\` then import it
6. **Edit guide content:** \`src/data/guide-sections.ts\` (17 sections)
7. **Language:** Use \`t("عربي", "English")\` for every text
8. **RTL:** Add \`dir={isRTL() ? "rtl" : "ltr"}\` to elements
9. **CSS:** Use classes (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) for consistency
10. **Deploy:** \`NEXT_PUBLIC=true bun run build\` then \`git push\`

## Quick Shortcuts:

\`\`\`bash
# Recreate database
bun run db:push

# Regenerate Prisma client
bun run db:generate

# Run lint
bun run lint
\`\`\`

## Important Notes

### Warnings

- **Never add .env files to git** — use \`.env.local\` and \`.gitignore\`
- **Never add \`basePath\` manually** in code — it is set automatically based on environment
- **Never use \`<img>\` without \`alt\`** — fails accessibility
- **Never use \`any\` in TypeScript** — always specify types
- **Don't modify CSS in \`globals.css\`** without reason — put it in \`@layer\`

### Best Practices

- Use \`useInView\` from Framer Motion instead of \`useEffect\` for detecting element visibility
- Use \`AnimatePresence\` for elements that appear and disappear
- Use \`glass-card-dark\` as the base card class
- Use \`text-[10px]\` / \`text-xs\` / \`text-sm\` for gradual sizing
- Add \`max-w-6xl\` or \`max-w-7xl\` for max width
- Use \`gap-3 sm:gap-4 lg:gap-6\` for spacing between elements

### Coding Tips

- Use \`/* === */\` comments to separate sections in code
- Use \`dir={isRTL() ? "rtl" : "ltr"}\` for bilingual text
- Use inline color via \`style={{ color: "#00ff66" }}\` instead of className
- Use \`aria-label\` for every interactive button
- Use \`type LucideIcon\` for SVG icons in data
- Use \`as const\` for static objects in variables

## Major Changes History

| Version | Change |
|---------|--------|
| v1.0 | Initial project launch with base structure |
| v1.1 | Added Start Here, Groups Links, Resource Library, Latest Additions |
| v1.2 | Added BlogSection, LiveActivity, DynamicElements |
| v1.3 | Added SearchDialog (Cmd+K), FAQ Section |
| v2.0 | Updated statistics (92/100), added challenges, improved design |
| v2.1 | Refactored: removed portfolio/ and platform/, added layout/ and guide/, converted to multi-page App Router (/docs/[slug]), comprehensive developer guide (17 sections) |`},subsections:[{id:"working-on-project",title:{ar:"العمل على المشروع",en:"Working on the Project"}},{id:"important-files",title:{ar:"ملفات مهمة",en:"Important Files"}},{id:"coding-standards",title:{ar:"معايير الكتابة",en:"Coding Standards"}}]},{id:"project-info",icon:"Database",title:{ar:"معلومات المشروع",en:"Project Information"},description:{ar:"معلومات المستودع والإعدادات والحالة والمتطلبات المستقبلية",en:"Repository info, settings, status, and future requirements"},content:{ar:`## معلومات المستودع

| العنصر | التفاصيل |
|--------|---------|
| **رابط المستودع** | [github.com/mohammadfhgjvhgi/iot-portfolio](https://github.com/mohammadfhgjvhgi/iot-portfolio) |
| **الفرع الحالي** | \`main\` |
| **آخر تحديث** | يونيو 2025 |
| **الترخيص** | خاص — جميع الحقوق محفوظة |
| **حجم المشروع** | ~20,000 سطر كود |
| **عدد الملفات** | 100+ ملف |

## الإعدادات الحالية

### رابط الموقع المنشور

| البيئة | الرابط |
|--------|--------|
| **الإنتاج (GitHub Pages)** | \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\` |
| **التطوير المحلي** | \`http://localhost:3000/\` |

### المنصة والنشر

| العنصر | القيمة |
|--------|--------|
| **المنصة** | GitHub Pages (Static Export) |
| **آلية النشر** | GitHub Actions (\`.github/workflows/deploy.yml\`) |
| **مجلد المخرجات** | \`docs/\` |
| **basePath** | \`/iot-portfolio\` |

### إصدارات التبعيات

| الحزمة | الإصدار |
|--------|--------|
| **Next.js** | 16.1.1 |
| **React** | 19.0 |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 4.x |
| **Framer Motion** | 12.23.2 |
| **Zustand** | 5.0.6 |
| **Prisma** | 6.11.1 |
| **shadcn/ui** | أحدث |
| **Lucide React** | 0.525.0 |

## الحالة الحالية

### Lighthouse Score (تقديري)

| الفئة | النتيجة | الحالة |
|-------|---------|--------|
| **Performance** | 92/100 | ✅ ممتاز |
| **Accessibility** | 95/100 | ✅ ممتاز |
| **Best Practices** | 92/100 | ✅ ممتاز |
| **SEO** | 100/100 | ✅ مثالي |
| **Security** | 92/100 | ✅ ممتاز |

### الميزات المفعّلة

- ✅ نظام ثنائي اللغة (عربي/إنجليزي) مع RTL كامل
- ✅ دردشة ذكية مزدوجة الوضع (FAQ محلي + AI NVIDIA NIM)
- ✅ نموذج اتصال مع Formspree + Cloudflare Turnstile
- ✅ تقرير أمان شامل (4 أدوات فحص)
- ✅ دليل مطور شامل (17 قسم متعدد الصفحات)
- ✅ بحث شامل (⌘K)
- ✅ تبديل السمة (داكن/فاتح)
- ✅ PWA مع Service Worker (Offline Support)
- ✅ Plausible Analytics (تحليلات خفيفة)
- ✅ تصميم متجاوب (Mobile-First)
- ✅ SEO شامل (sitemap, manifest, robots.txt, meta tags)
- ✅ أنيميشن Framer Motion

### المشاكل المعروفة

- ⚠️ ملف GitHub Actions يحتاج إنشاء يدوي عبر واجهة GitHub (نقص صلاحية PAT)
- ⚠️ الصور المنتجة بالـ AI قد تحتاج تحسين للإنتاج

### الميزات المعطّلة

- ❌ المصادقة عبر NextAuth (مُثبّت لكن غير مُفعّل)
- ❌ قاعدة البيانات (Prisma مُثبّت لكن غير مستخدم في الإنتاج)

## المتطلبات المستقبلية

### الميزات المخطط إضافتها

| الأولوية | الميزة | الحالة |
|----------|--------|--------|
| 🔴 عالية | إصلاح GitHub Actions Workflow | مخطط |
| 🟡 متوسطة | إضافة صفحة المدونة كمسار منفصل | تحت المراجعة |
| 🟡 متوسطة | نظام إدارة المحتوى (CMS) | قيد الدراسة |
| 🟢 منخفضة | دعم لغات إضافية (العبرية) | فكرة |
| 🟢 منخفضة | لوحة تحكم إدارية | فكرة |

### التحسينات المطلوبة

| المجال | التحسين | الأولوية |
|--------|---------|----------|
| **الأداء** | تحسين حجم الحزمة (Code Splitting) | عالية |
| **الأداء** | تحسين الصور (WebP, Lazy Loading) | عالية |
| **الأمان** | تفعيل Turnstile في بيئة الإنتاج | عالية |
| **SEO** | إضافة structured data (JSON-LD) | متوسطة |
| **UX** | تحسين سرعة التحميل الأولي | متوسطة |
| **المحتوى** | إضافة مشاريع جديدة | متوسطة |
| **المحتوى** | ترجمة جميع المقالات للعربية | منخفضة |

### أولويات التطوير

1. **المرحلة 1** (فوري): إصلاح CI/CD
2. **المرحلة 2** (قصير المدى): تحسين الأداء + الأمان + SEO
3. **المرحلة 3** (متوسط المدى): محتوى جديد + CMS
4. **المرحلة 4** (طويل المدى): لوحة تحكم + لغات إضافية

## ملاحظات إضافية

### بيئة التطوير

- **مدير الحزم:** Bun (بديل Node.js أسرع)
- **محرر الكود:** VS Code + ES7+ React Snippets
- **التحكم بالإصدارات:** Git + GitHub
- **نظام التشغيل:** متعدد المنصات

### مسارات مهمة

| المسار | الوصف |
|--------|-------|
| \`src/app/page.tsx\` | الصفحة الرئيسية (دليل المطور، ~520 سطر) |
| \`src/app/docs/[slug]/page.tsx\` | صفحات الوثائق (generateStaticParams) |
| \`src/app/docs/[slug]/DocsClientPage.tsx\` | المكون العميل لصفحات الوثائق |
| \`src/components/layout/\` | مكونات التخطيط (SiteLayout, SiteHeader, SiteFooter) |
| \`src/components/guide/\` | مكونات الدليل (Sidebar, SearchDialog, GuideRenderer, AnimatedCounter) |
| \`src/components/chat/ChatBot.tsx\` | الدردشة الذكية |
| \`src/data/guide-sections.ts\` | بيانات أقسام الدليل (17 قسم) |
| \`src/data/faq.json\` | بيانات الشات (18 سؤال) |
| \`next.config.ts\` | تكوين Next.js (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### تلميحات للمطورين

- الموقع يستخدم Next.js App Router مع مسارات متعددة
- الصفحة الرئيسية هي صفحة هبوط الدليل — صفحات المحتوى في \`/docs/[slug]\`
- استخدم \`useLang()\` hook للوصول إلى دالة الترجمة \`t(ar, en)\`
- استخدم \`useGuideStore()\` hook للوصول إلى حالة الدليل والسمة
- استخدم \`isRTL()\` للتحقق من اتجاه النص
- فئة CSS مخصصة: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- ألوان النيون: أخضر \`#00ff66\`، سماوي \`#00e5ff\`، عنبري \`#ffab00\`، بنفسجي \`#b44dff\`
- شغّل \`bun run dev\` للتطوير و \`bun run lint\` للفحص`,en:`## Repository Information

| Item | Details |
|------|---------|
| **Repository URL** | [github.com/mohammadfhgjvhgi/iot-portfolio](https://github.com/mohammadfhgjvhgi/iot-portfolio) |
| **Current Branch** | \`main\` |
| **Last Updated** | June 2025 |
| **License** | Private — All rights reserved |
| **Project Size** | ~20,000 lines of code |
| **File Count** | 100+ files |

## Current Settings

### Published Site URL

| Environment | URL |
|-------------|-----|
| **Production (GitHub Pages)** | \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\` |
| **Local Development** | \`http://localhost:3000/\` |

### Platform & Deployment

| Item | Value |
|------|-------|
| **Platform** | GitHub Pages (Static Export) |
| **Deployment Method** | GitHub Actions (\`.github/workflows/deploy.yml\`) |
| **Output Directory** | \`docs/\` |
| **basePath** | \`/iot-portfolio\` |

### Dependency Versions

| Package | Version |
|---------|---------|
| **Next.js** | 16.1.1 |
| **React** | 19.0 |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 4.x |
| **Framer Motion** | 12.23.2 |
| **Zustand** | 5.0.6 |
| **Prisma** | 6.11.1 |
| **shadcn/ui** | Latest |
| **Lucide React** | 0.525.0 |

## Current Status

### Lighthouse Score (Estimated)

| Category | Score | Status |
|----------|-------|--------|
| **Performance** | 92/100 | ✅ Excellent |
| **Accessibility** | 95/100 | ✅ Excellent |
| **Best Practices** | 92/100 | ✅ Excellent |
| **SEO** | 100/100 | ✅ Perfect |
| **Security** | 92/100 | ✅ Excellent |

### Enabled Features

- ✅ Bilingual system (Arabic/English) with full RTL support
- ✅ Dual-mode smart chat (Local FAQ + AI NVIDIA NIM)
- ✅ Contact form with Formspree + Cloudflare Turnstile
- ✅ Comprehensive security report (4 scanning tools)
- ✅ Comprehensive developer guide (17 multi-page sections)
- ✅ Full-text search (⌘K)
- ✅ Theme toggle (dark/light)
- ✅ PWA with Service Worker (Offline Support)
- ✅ Plausible Analytics (lightweight analytics)
- ✅ Responsive design (Mobile-First)
- ✅ Comprehensive SEO (sitemap, manifest, robots.txt, meta tags)
- ✅ Framer Motion animations

### Known Issues

- ⚠️ GitHub Actions workflow needs manual creation via GitHub UI (PAT lacks workflow scope)
- ⚠️ AI-generated images may need optimization for production

### Disabled Features

- ❌ NextAuth authentication (installed but not activated)
- ❌ Database (Prisma installed but unused in production)

## Future Requirements

### Planned Features

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Fix GitHub Actions Workflow | Planned |
| 🟡 Medium | Add blog as separate route | Under Review |
| 🟡 Medium | Content Management System (CMS) | Under Study |
| 🟢 Low | Additional language support (Hebrew) | Idea |
| 🟢 Low | Admin dashboard | Idea |

### Required Improvements

| Area | Improvement | Priority |
|------|-------------|----------|
| **Performance** | Bundle size optimization (Code Splitting) | High |
| **Performance** | Image optimization (WebP, Lazy Loading) | High |
| **Security** | Activate Turnstile in production | High |
| **SEO** | Add structured data (JSON-LD) | Medium |
| **UX** | Improve initial load speed | Medium |
| **Content** | Add new projects | Medium |
| **Content** | Translate all articles to Arabic | Low |

### Development Priorities

1. **Phase 1** (Immediate): Fix CI/CD
2. **Phase 2** (Short-term): Performance + Security + SEO improvements
3. **Phase 3** (Mid-term): New content + CMS
4. **Phase 4** (Long-term): Admin dashboard + Additional languages

## Additional Notes

### Development Environment

- **Package Manager:** Bun (faster Node.js alternative)
- **Code Editor:** VS Code + ES7+ React Snippets
- **Version Control:** Git + GitHub
- **Operating System:** Cross-platform

### Important Paths

| Path | Description |
|------|-------------|
| \`src/app/page.tsx\` | Home page (developer guide landing, ~520 lines) |
| \`src/app/docs/[slug]/page.tsx\` | Docs pages (generateStaticParams) |
| \`src/app/docs/[slug]/DocsClientPage.tsx\` | Client component for docs pages |
| \`src/components/layout/\` | Layout components (SiteLayout, SiteHeader, SiteFooter) |
| \`src/components/guide/\` | Guide components (Sidebar, SearchDialog, GuideRenderer, AnimatedCounter) |
| \`src/components/chat/ChatBot.tsx\` | Smart chatbot |
| \`src/data/guide-sections.ts\` | Guide section data (17 sections) |
| \`src/data/faq.json\` | Chat data (18 questions) |
| \`next.config.ts\` | Next.js configuration (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### Developer Tips

- The site uses Next.js App Router with multiple routes
- The home page is a guide landing page — content pages are at \`/docs/[slug]\`
- Use \`useLang()\` hook for translation function \`t(ar, en)\`
- Use \`useGuideStore()\` hook for guide state and theme
- Use \`isRTL()\` to check text direction
- Custom CSS classes: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- Neon colors: Green \`#00ff66\`, Cyan \`#00e5ff\`, Amber \`#ffab00\`, Purple \`#b44dff\`
- Run \`bun run dev\` for development and \`bun run lint\` for linting`},subsections:[{id:"repo-info",title:{ar:"معلومات المستودع",en:"Repository Information"}},{id:"current-settings",title:{ar:"الإعدادات الحالية",en:"Current Settings"}},{id:"current-status",title:{ar:"الحالة الحالية",en:"Current Status"}},{id:"future-requirements",title:{ar:"المتطلبات المستقبلية",en:"Future Requirements"}},{id:"additional-notes",title:{ar:"ملاحظات إضافية",en:"Additional Notes"}}]}];e.s(["guideSections",0,t])},60289,66992,e=>{"use strict";var t=e.i(75254);let n=(0,t.default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["LayoutDashboard",()=>n],60289);let r=(0,t.default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",()=>r],66992)},39616,e=>{"use strict";let t=(0,e.i(75254).default)("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Settings",()=>t],39616)},47780,e=>{"use strict";let t=(0,e.i(75254).default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);e.s(["Palette",()=>t],47780)},52008,e=>{"use strict";let t=(0,e.i(75254).default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);e.s(["Layers",()=>t],52008)},81418,9912,e=>{"use strict";var t=e.i(75254);let n=(0,t.default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>n],81418);let r=(0,t.default)("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);e.s(["Rocket",()=>r],9912)},95116,e=>{"use strict";let t=(0,e.i(75254).default)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);e.s(["Wrench",()=>t],95116)},10980,e=>{"use strict";let t=(0,e.i(75254).default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["BookOpen",()=>t],10980)},97625,68054,e=>{"use strict";var t=e.i(75254);let n=(0,t.default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",()=>n],97625);let r=(0,t.default)("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);e.s(["Terminal",()=>r],68054)},74875,e=>{"use strict";let t=(0,e.i(75254).default)("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["HelpCircle",()=>t],74875)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},58041,31245,e=>{"use strict";var t=e.i(75254);let n=(0,t.default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",()=>n],58041);let r=(0,t.default)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);e.s(["Bot",()=>r],31245)},34161,e=>{"use strict";let t=(0,e.i(75254).default)("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);e.s(["Key",()=>t],34161)},73526,e=>{"use strict";let t=(0,e.i(75254).default)("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);e.s(["Map",()=>t],73526)},88653,e=>{"use strict";e.i(47167);var t=e.i(18050),n=e.i(71645),r=e.i(31178),o=e.i(47414),a=e.i(74008),i=e.i(21476),s=e.i(72846),c=n,l=e.i(37806);function u(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class d extends c.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=(0,s.isHTMLElement)(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:r,anchorX:o,root:a}){let i=(0,c.useId)(),s=(0,c.useRef)(null),p=(0,c.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=(0,c.useContext)(l.MotionConfigContext),f=function(...e){return n.useCallback(function(...e){return t=>{let n=!1,r=e.map(e=>{let r=u(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():u(e[t],null)}}}}(...e),e)}(s,e.props?.ref??e?.ref);return(0,c.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:c,right:l}=p.current;if(r||!s.current||!e||!t)return;let u="left"===o?`left: ${c}`:`right: ${l}`;s.current.dataset.motionPopId=i;let d=document.createElement("style");m&&(d.nonce=m);let f=a??document.head;return f.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${u}px !important;
            top: ${n}px !important;
          }
        `),()=>{f.contains(d)&&f.removeChild(d)}},[r]),(0,t.jsx)(d,{isPresent:r,childRef:s,sizeRef:p,children:c.cloneElement(e,{ref:f})})}let m=({children:e,initial:r,isPresent:a,onExitComplete:s,custom:c,presenceAffectsLayout:l,mode:u,anchorX:d,root:m})=>{let g=(0,o.useConstant)(f),h=(0,n.useId)(),y=!0,b=(0,n.useMemo)(()=>(y=!1,{id:h,initial:r,isPresent:a,custom:c,onExitComplete:e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;s&&s()},register:e=>(g.set(e,!1),()=>g.delete(e))}),[a,g,s]);return l&&y&&(b={...b}),(0,n.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[a]),n.useEffect(()=>{a||g.size||!s||s()},[a]),"popLayout"===u&&(e=(0,t.jsx)(p,{isPresent:a,anchorX:d,root:m,children:e})),(0,t.jsx)(i.PresenceContext.Provider,{value:b,children:e})};function f(){return new Map}var g=e.i(64978);let h=e=>e.key||"";function y(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}let b=({children:e,custom:i,initial:s=!0,onExitComplete:c,presenceAffectsLayout:l=!0,mode:u="sync",propagate:d=!1,anchorX:p="left",root:f})=>{let[b,v]=(0,g.usePresence)(d),S=(0,n.useMemo)(()=>y(e),[e]),C=d&&!b?[]:S.map(h),w=(0,n.useRef)(!0),x=(0,n.useRef)(S),A=(0,o.useConstant)(()=>new Map),P=(0,n.useRef)(new Set),[I,E]=(0,n.useState)(S),[R,k]=(0,n.useState)(S);(0,a.useIsomorphicLayoutEffect)(()=>{w.current=!1,x.current=S;for(let e=0;e<R.length;e++){let t=h(R[e]);C.includes(t)?(A.delete(t),P.current.delete(t)):!0!==A.get(t)&&A.set(t,!1)}},[R,C.length,C.join("-")]);let T=[];if(S!==I){let e=[...S];for(let t=0;t<R.length;t++){let n=R[t],r=h(n);C.includes(r)||(e.splice(t,0,n),T.push(n))}return"wait"===u&&T.length&&(e=T),k(y(e)),E(S),null}let{forceRender:D}=(0,n.useContext)(r.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:R.map(e=>{let n=h(e),r=(!d||!!b)&&(S===R||C.includes(n));return(0,t.jsx)(m,{isPresent:r,initial:(!w.current||!!s)&&void 0,custom:i,presenceAffectsLayout:l,mode:u,root:f,onExitComplete:r?void 0:()=>{if(P.current.has(n)||(P.current.add(n),!A.has(n)))return;A.set(n,!0);let e=!0;A.forEach(t=>{t||(e=!1)}),e&&(D?.(),k(x.current),d&&v?.(),c&&c())},anchorX:p,children:e},n)})})};e.s(["AnimatePresence",()=>b],88653)}]);