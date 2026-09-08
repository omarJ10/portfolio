(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},oc={},Jm={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),ex=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),rx=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),ax=Symbol.for("react.lazy"),Bh=Symbol.iterator;function ox(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,eg={};function ta(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||$m}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tg(){}tg.prototype=ta.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||$m}var Ef=Sf.prototype=new tg;Ef.constructor=Sf;Qm(Ef,ta.prototype);Ef.isPureReactComponent=!0;var zh=Array.isArray,ng=Object.prototype.hasOwnProperty,yf={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:co,type:t,key:s,ref:a,props:r,_owner:yf.current}}function lx(t,e){return{$$typeof:co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===co}function cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cx(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case co:case Jv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Lc(a,0):i,zh(r)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),ol(r,e,n,"",function(u){return u})):r!=null&&(Mf(r)&&(r=lx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(jh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",zh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Lc(s,l);a+=ol(s,e,n,c,r)}else if(c=ox(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Lc(s,l++),a+=ol(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function So(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ux(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},ll={transition:null},dx={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:ll,ReactCurrentOwner:yf};function sg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=ta;Qe.Fragment=$v;Qe.Profiler=ex;Qe.PureComponent=Sf;Qe.StrictMode=Qv;Qe.Suspense=rx;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;Qe.act=sg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)ng.call(e,c)&&!ig.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:co,type:t.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(t){return t={$$typeof:nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tx,_context:t},t.Consumer=t};Qe.createElement=rg;Qe.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:ix,render:t}};Qe.isValidElement=Mf;Qe.lazy=function(t){return{$$typeof:ax,_payload:{_status:-1,_result:t},_init:ux}};Qe.memo=function(t,e){return{$$typeof:sx,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};Qe.unstable_act=sg;Qe.useCallback=function(t,e){return vn.current.useCallback(t,e)};Qe.useContext=function(t){return vn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return vn.current.useEffect(t,e)};Qe.useId=function(){return vn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return vn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Qe.useRef=function(t){return vn.current.useRef(t)};Qe.useState=function(t){return vn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return vn.current.useTransition()};Qe.version="18.3.1";Jm.exports=Qe;var Ke=Jm.exports;const hr=Zv(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=Ke,hx=Symbol.for("react.element"),px=Symbol.for("react.fragment"),mx=Object.prototype.hasOwnProperty,gx=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vx={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)mx.call(e,i)&&!vx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hx,type:t,key:s,ref:a,props:r,_owner:gx.current}}oc.Fragment=px;oc.jsx=ag;oc.jsxs=ag;Zm.exports=oc;var o=Zm.exports,Ou={},og={exports:{}},Fn={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,z){var H=O.length;O.push(z);e:for(;0<H;){var $=H-1>>>1,ge=O[$];if(0<r(ge,z))O[$]=z,O[H]=ge,H=$;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var z=O[0],H=O.pop();if(H!==z){O[0]=H;e:for(var $=0,ge=O.length,Me=ge>>>1;$<Me;){var Ze=2*($+1)-1,De=O[Ze],Ge=Ze+1,J=O[Ge];if(0>r(De,H))Ge<ge&&0>r(J,De)?(O[$]=J,O[Ge]=H,$=Ge):(O[$]=De,O[Ze]=H,$=Ze);else if(Ge<ge&&0>r(J,H))O[$]=J,O[Ge]=H,$=Ge;else break e}}return z}function r(O,z){var H=O.sortIndex-z.sortIndex;return H!==0?H:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,p=null,f=3,m=!1,S=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(O){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=O)i(u),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(u)}}function E(O){if(y=!1,T(O),!S)if(n(c)!==null)S=!0,Y(w);else{var z=n(u);z!==null&&K(E,z.startTime-O)}}function w(O,z){S=!1,y&&(y=!1,d(_),_=-1),m=!0;var H=f;try{for(T(z),p=n(c);p!==null&&(!(p.expirationTime>z)||O&&!U());){var $=p.callback;if(typeof $=="function"){p.callback=null,f=p.priorityLevel;var ge=$(p.expirationTime<=z);z=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(c)&&i(c),T(z)}else i(c);p=n(c)}if(p!==null)var Me=!0;else{var Ze=n(u);Ze!==null&&K(E,Ze.startTime-z),Me=!1}return Me}finally{p=null,f=H,m=!1}}var A=!1,R=null,_=-1,N=5,b=-1;function U(){return!(t.unstable_now()-b<N)}function F(){if(R!==null){var O=t.unstable_now();b=O;var z=!0;try{z=R(!0,O)}finally{z?k():(A=!1,R=null)}}else A=!1}var k;if(typeof v=="function")k=function(){v(F)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,X=I.port2;I.port1.onmessage=F,k=function(){X.postMessage(null)}}else k=function(){g(F,0)};function Y(O){R=O,A||(A=!0,k())}function K(O,z){_=g(function(){O(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){S||m||(S=!0,Y(w))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return O()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=f;f=O;try{return z()}finally{f=H}},t.unstable_scheduleCallback=function(O,z,H){var $=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,O){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=H+ge,O={id:h++,callback:z,priorityLevel:O,startTime:H,expirationTime:ge,sortIndex:-1},H>$?(O.sortIndex=H,e(u,O),n(c)===null&&O===n(u)&&(y?(d(_),_=-1):y=!0,K(E,H-$))):(O.sortIndex=ge,e(c,O),S||m||(S=!0,Y(w))),O},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(O){var z=f;return function(){var H=f;f=z;try{return O.apply(this,arguments)}finally{f=H}}}})(cg);lg.exports=cg;var xx=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=Ke,On=xx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,za={};function Qr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(za[t]=e,t=0;t<e.length;t++)ug.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Gh={};function Ex(t){return Fu.call(Gh,t)?!0:Fu.call(Vh,t)?!1:Sx.test(t)?Gh[t]=!0:(Vh[t]=!0,!1)}function yx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mx(t,e,n,i){if(e===null||typeof e>"u"||yx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,wf);Qt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,wf);Qt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,wf);Qt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Af(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mx(e,n,r,i)&&(n=null),i||r===null?Ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,Pc;function Ta(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Ic=!1;function Dc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function Tx(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case ys:return"Portal";case ku:return"Profiler";case Nf:return"StrictMode";case Bu:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function wx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ax(t){var e=pg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yo(t){t._valueTracker||(t._valueTracker=Ax(t))}function mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=pg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(t,e){e=e.checked,e!=null&&Af(t,"checked",e,!1)}function Gu(t,e){gg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(wa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function vg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mo,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nx=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){Nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function Sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Rx=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(Rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,ks=null,Bs=null;function Kh(t){if(t=ho(t)){if(typeof Zu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=fc(e),Zu(t.stateNode,t.type,e))}}function yg(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function Mg(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,Kh(t),e)for(t=0;t<e.length;t++)Kh(e[t])}}function Tg(t,e){return t(e)}function wg(){}var Uc=!1;function Ag(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return Tg(t,e,n)}finally{Uc=!1,(ks!==null||Bs!==null)&&(wg(),Mg())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ju=!1;if(ji)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Ju=!1}function Cx(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var La=!1,Al=null,Nl=!1,$u=null,bx={onError:function(t){La=!0,Al=t}};function Lx(t,e,n,i,r,s,a,l,c){La=!1,Al=null,Cx.apply(bx,arguments)}function Px(t,e,n,i,r,s,a,l,c){if(Lx.apply(this,arguments),La){if(La){var u=Al;La=!1,Al=null}else throw Error(re(198));Nl||(Nl=!0,$u=u)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ng(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zh(t){if(es(t)!==t)throw Error(re(188))}function Ix(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zh(r),t;if(s===i)return Zh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Rg(t){return t=Ix(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var bg=On.unstable_scheduleCallback,Jh=On.unstable_cancelCallback,Dx=On.unstable_shouldYield,Ux=On.unstable_requestPaint,Dt=On.unstable_now,Ox=On.unstable_getCurrentPriorityLevel,Lf=On.unstable_ImmediatePriority,Lg=On.unstable_UserBlockingPriority,Rl=On.unstable_NormalPriority,Fx=On.unstable_LowPriority,Pg=On.unstable_IdlePriority,lc=null,vi=null;function kx(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:jx,Bx=Math.log,zx=Math.LN2;function jx(t){return t>>>=0,t===0?32:31-(Bx(t)/zx|0)|0}var To=64,wo=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Aa(l):(s&=a,s!==0&&(i=Aa(s)))}else a=n&~r,a!==0?i=Aa(a):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function Vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ii(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Vx(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function Hx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var vt=0;function Dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ug,If,Og,Fg,kg,ed=!1,Ao=[],pr=null,mr=null,gr=null,Ga=new Map,Ha=new Map,lr=[],Wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ho(e),e!==null&&If(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xx(t,e,n,i,r){switch(e){case"focusin":return pr=ua(pr,t,e,n,i,r),!0;case"dragenter":return mr=ua(mr,t,e,n,i,r),!0;case"mouseover":return gr=ua(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ua(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,ua(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Bg(t){var e=kr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=Ng(n),e!==null){t.blockedOn=e,kg(t.priority,function(){Og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=ho(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){cl(t)&&n.delete(e)}function Yx(){ed=!1,pr!==null&&cl(pr)&&(pr=null),mr!==null&&cl(mr)&&(mr=null),gr!==null&&cl(gr)&&(gr=null),Ga.forEach(Qh),Ha.forEach(Qh)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,Yx)))}function Wa(t){function e(r){return da(r,t)}if(0<Ao.length){da(Ao[0],t);for(var n=1;n<Ao.length;n++){var i=Ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&da(pr,t),mr!==null&&da(mr,t),gr!==null&&da(gr,t),Ga.forEach(e),Ha.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)Bg(n),n.blockedOn===null&&lr.shift()}var zs=Xi.ReactCurrentBatchConfig,bl=!0;function qx(t,e,n,i){var r=vt,s=zs.transition;zs.transition=null;try{vt=1,Df(t,e,n,i)}finally{vt=r,zs.transition=s}}function Kx(t,e,n,i){var r=vt,s=zs.transition;zs.transition=null;try{vt=4,Df(t,e,n,i)}finally{vt=r,zs.transition=s}}function Df(t,e,n,i){if(bl){var r=td(t,e,n,i);if(r===null)Xc(t,e,i,Ll,n),$h(t,i);else if(Xx(r,t,e,n,i))i.stopPropagation();else if($h(t,i),e&4&&-1<Wx.indexOf(t)){for(;r!==null;){var s=ho(r);if(s!==null&&Ug(s),s=td(t,e,n,i),s===null&&Xc(t,e,i,Ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xc(t,e,i,null,n)}}var Ll=null;function td(t,e,n,i){if(Ll=null,t=bf(i),t=kr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ng(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ox()){case Lf:return 1;case Lg:return 4;case Rl:case Fx:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var dr=null,Uf=null,ul=null;function jg(){if(ul)return ul;var t,e=Uf,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function ep(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:ep,this.isPropagationStopped=ep,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=kn(na),fo=Pt({},na,{view:0,detail:0}),Zx=kn(fo),Fc,kc,fa,cc=Pt({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(Fc=t.screenX-fa.screenX,kc=t.screenY-fa.screenY):kc=Fc=0,fa=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),tp=kn(cc),Jx=Pt({},cc,{dataTransfer:0}),$x=kn(Jx),Qx=Pt({},fo,{relatedTarget:0}),Bc=kn(Qx),e_=Pt({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=kn(e_),n_=Pt({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=kn(n_),r_=Pt({},na,{data:0}),np=kn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o_[t])?!!e[t]:!1}function Ff(){return l_}var c_=Pt({},fo,{key:function(t){if(t.key){var e=s_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u_=kn(c_),d_=Pt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=kn(d_),f_=Pt({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),h_=kn(f_),p_=Pt({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=kn(p_),g_=Pt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=kn(g_),x_=[9,13,27,32],kf=ji&&"CompositionEvent"in window,Pa=null;ji&&"documentMode"in document&&(Pa=document.documentMode);var __=ji&&"TextEvent"in window&&!Pa,Vg=ji&&(!kf||Pa&&8<Pa&&11>=Pa),rp=" ",sp=!1;function Gg(t,e){switch(t){case"keyup":return x_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function S_(t,e){switch(t){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(sp=!0,rp);case"textInput":return t=e.data,t===rp&&sp?null:t;default:return null}}function E_(t,e){if(Ts)return t==="compositionend"||!kf&&Gg(t,e)?(t=jg(),ul=Uf=dr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!y_[t.type]:e==="textarea"}function Wg(t,e,n,i){yg(i),e=Pl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ia=null,Xa=null;function M_(t){n0(t,0)}function uc(t){var e=Ns(t);if(mg(e))return t}function T_(t,e){if(t==="change")return e}var Xg=!1;if(ji){var zc;if(ji){var jc="oninput"in document;if(!jc){var op=document.createElement("div");op.setAttribute("oninput","return;"),jc=typeof op.oninput=="function"}zc=jc}else zc=!1;Xg=zc&&(!document.documentMode||9<document.documentMode)}function lp(){Ia&&(Ia.detachEvent("onpropertychange",Yg),Xa=Ia=null)}function Yg(t){if(t.propertyName==="value"&&uc(Xa)){var e=[];Wg(e,Xa,t,bf(t)),Ag(M_,e)}}function w_(t,e,n){t==="focusin"?(lp(),Ia=e,Xa=n,Ia.attachEvent("onpropertychange",Yg)):t==="focusout"&&lp()}function A_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Xa)}function N_(t,e){if(t==="click")return uc(e)}function R_(t,e){if(t==="input"||t==="change")return uc(e)}function C_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:C_;function Ya(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function b_(t){var e=Kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qg(n.ownerDocument.documentElement,n)){if(i!==null&&Bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=up(n,s);var a=up(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L_=ji&&"documentMode"in document&&11>=document.documentMode,ws=null,nd=null,Da=null,id=!1;function dp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||ws==null||ws!==wl(i)||(i=ws,"selectionStart"in i&&Bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&Ya(Da,i)||(Da=i,i=Pl(nd,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Vc={},Zg={};ji&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function dc(t){if(Vc[t])return Vc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zg)return Vc[t]=e[n];return t}var Jg=dc("animationend"),$g=dc("animationiteration"),Qg=dc("animationstart"),e0=dc("transitionend"),t0=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){t0.set(t,e),Qr(e,[t])}for(var Gc=0;Gc<fp.length;Gc++){var Hc=fp[Gc],P_=Hc.toLowerCase(),I_=Hc[0].toUpperCase()+Hc.slice(1);wr(P_,"on"+I_)}wr(Jg,"onAnimationEnd");wr($g,"onAnimationIteration");wr(Qg,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(e0,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function hp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Px(i,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;hp(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;hp(r,l,u),s=c}}}if(Nl)throw t=$u,Nl=!1,$u=null,t}function yt(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(i0(e,t,2,!1),n.add(i))}function Wc(t,e,n){var i=0;e&&(i|=4),i0(n,t,i,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Co]){t[Co]=!0,ug.forEach(function(n){n!=="selectionchange"&&(D_.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,Wc("selectionchange",!1,e))}}function i0(t,e,n,i){switch(zg(e)){case 1:var r=qx;break;case 4:r=Kx;break;default:r=Df}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=kr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}Ag(function(){var u=s,h=bf(n),p=[];e:{var f=t0.get(t);if(f!==void 0){var m=Of,S=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=u_;break;case"focusin":S="focus",m=Bc;break;case"focusout":S="blur",m=Bc;break;case"beforeblur":case"afterblur":m=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=h_;break;case Jg:case $g:case Qg:m=t_;break;case e0:m=m_;break;case"scroll":m=Zx;break;case"wheel":m=v_;break;case"copy":case"cut":case"paste":m=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ip}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,T;v!==null;){T=v;var E=T.stateNode;if(T.tag===5&&E!==null&&(T=E,d!==null&&(E=Va(v,d),E!=null&&y.push(Ka(v,E,T)))),g)break;v=v.return}0<y.length&&(f=new m(f,S,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ku&&(S=n.relatedTarget||n.fromElement)&&(kr(S)||S[Vi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(S=n.relatedTarget||n.toElement,m=u,S=S?kr(S):null,S!==null&&(g=es(S),S!==g||S.tag!==5&&S.tag!==6)&&(S=null)):(m=null,S=u),m!==S)){if(y=tp,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=ip,E="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?f:Ns(m),T=S==null?f:Ns(S),f=new y(E,v+"leave",m,n,h),f.target=g,f.relatedTarget=T,E=null,kr(h)===u&&(y=new y(d,v+"enter",S,n,h),y.target=T,y.relatedTarget=g,E=y),g=E,m&&S)t:{for(y=m,d=S,v=0,T=y;T;T=as(T))v++;for(T=0,E=d;E;E=as(E))T++;for(;0<v-T;)y=as(y),v--;for(;0<T-v;)d=as(d),T--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=as(y),d=as(d)}y=null}else y=null;m!==null&&pp(p,f,m,y,!1),S!==null&&g!==null&&pp(p,g,S,y,!0)}}e:{if(f=u?Ns(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var w=T_;else if(ap(f))if(Xg)w=R_;else{w=A_;var A=w_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=N_);if(w&&(w=w(t,u))){Wg(p,w,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Hu(f,"number",f.value)}switch(A=u?Ns(u):window,t){case"focusin":(ap(A)||A.contentEditable==="true")&&(ws=A,nd=u,Da=null);break;case"focusout":Da=nd=ws=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,dp(p,n,h);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":dp(p,n,h)}var R;if(kf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ts?Gg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Vg&&n.locale!=="ko"&&(Ts||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ts&&(R=jg()):(dr=h,Uf="value"in dr?dr.value:dr.textContent,Ts=!0)),A=Pl(u,_),0<A.length&&(_=new np(_,t,null,n,h),p.push({event:_,listeners:A}),R?_.data=R:(R=Hg(n),R!==null&&(_.data=R)))),(R=__?S_(t,n):E_(t,n))&&(u=Pl(u,"onBeforeInput"),0<u.length&&(h=new np("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=R))}n0(p,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Va(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Va(n,s),c!=null&&a.unshift(Ka(n,c,l))):r||(c=Va(n,s),c!=null&&a.push(Ka(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var U_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(U_,`
`).replace(O_,"")}function bo(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(re(425))}function Il(){}var rd=null,sd=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(B_)}:od;function B_(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),hi="__reactFiber$"+ia,Za="__reactProps$"+ia,Vi="__reactContainer$"+ia,ld="__reactEvents$"+ia,z_="__reactListeners$"+ia,j_="__reactHandles$"+ia;function kr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[hi])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[hi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function fc(t){return t[Za]||null}var cd=[],Rs=-1;function Ar(t){return{current:t}}function Mt(t){0>Rs||(t.current=cd[Rs],cd[Rs]=null,Rs--)}function St(t,e){Rs++,cd[Rs]=t.current,t.current=e}var Mr={},un=Ar(Mr),Tn=Ar(!1),Wr=Mr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Dl(){Mt(Tn),Mt(un)}function xp(t,e,n){if(un.current!==Mr)throw Error(re(168));St(un,e),St(Tn,n)}function r0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,wx(t)||"Unknown",r));return Pt({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Wr=un.current,St(un,t),St(Tn,Tn.current),!0}function _p(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=r0(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,Mt(Tn),Mt(un),St(un,t)):Mt(Tn),St(Tn,n)}var Ii=null,hc=!1,qc=!1;function s0(t){Ii===null?Ii=[t]:Ii.push(t)}function V_(t){hc=!0,s0(t)}function Nr(){if(!qc&&Ii!==null){qc=!0;var t=0,e=vt;try{var n=Ii;for(vt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,hc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),bg(Lf,Nr),r}finally{vt=e,qc=!1}}return null}var Cs=[],bs=0,Ol=null,Fl=0,jn=[],Vn=0,Xr=null,Ui=1,Oi="";function Or(t,e){Cs[bs++]=Fl,Cs[bs++]=Ol,Ol=t,Fl=e}function a0(t,e,n){jn[Vn++]=Ui,jn[Vn++]=Oi,jn[Vn++]=Xr,Xr=t;var i=Ui;t=Oi;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ui=1<<32-ii(e)+r|n<<r|i,Oi=s+t}else Ui=1<<s|n<<r|i,Oi=t}function zf(t){t.return!==null&&(Or(t,1),a0(t,1,0))}function jf(t){for(;t===Ol;)Ol=Cs[--bs],Cs[bs]=null,Fl=Cs[--bs],Cs[bs]=null;for(;t===Xr;)Xr=jn[--Vn],jn[Vn]=null,Oi=jn[--Vn],jn[Vn]=null,Ui=jn[--Vn],jn[Vn]=null}var Un=null,Dn=null,At=!1,ei=null;function o0(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Dn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ui,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Dn=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(At){var e=Dn;if(e){var n=e;if(!Sp(t,e)){if(ud(t))throw Error(re(418));e=vr(n.nextSibling);var i=Un;e&&Sp(t,e)?o0(i,n):(t.flags=t.flags&-4097|2,At=!1,Un=t)}}else{if(ud(t))throw Error(re(418));t.flags=t.flags&-4097|2,At=!1,Un=t}}}function Ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Lo(t){if(t!==Un)return!1;if(!At)return Ep(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=Dn)){if(ud(t))throw l0(),Error(re(418));for(;e;)o0(t,e),e=vr(e.nextSibling)}if(Ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Un?vr(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=Dn;t;)t=vr(t.nextSibling)}function qs(){Dn=Un=null,At=!1}function Vf(t){ei===null?ei=[t]:ei.push(t)}var G_=Xi.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Po(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function c0(t){function e(d,v){if(t){var T=d.deletions;T===null?(d.deletions=[v],d.flags|=16):T.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Er(d,v),d.index=0,d.sibling=null,d}function s(d,v,T){return d.index=T,t?(T=d.alternate,T!==null?(T=T.index,T<v?(d.flags|=2,v):T):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,v,T,E){return v===null||v.tag!==6?(v=tu(T,d.mode,E),v.return=d,v):(v=r(v,T),v.return=d,v)}function c(d,v,T,E){var w=T.type;return w===Ms?h(d,v,T.props.children,E,T.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sr&&yp(w)===v.type)?(E=r(v,T.props),E.ref=ha(d,v,T),E.return=d,E):(E=xl(T.type,T.key,T.props,null,d.mode,E),E.ref=ha(d,v,T),E.return=d,E)}function u(d,v,T,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=nu(T,d.mode,E),v.return=d,v):(v=r(v,T.children||[]),v.return=d,v)}function h(d,v,T,E,w){return v===null||v.tag!==7?(v=Hr(T,d.mode,E,w),v.return=d,v):(v=r(v,T),v.return=d,v)}function p(d,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tu(""+v,d.mode,T),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return T=xl(v.type,v.key,v.props,null,d.mode,T),T.ref=ha(d,null,v),T.return=d,T;case ys:return v=nu(v,d.mode,T),v.return=d,v;case sr:var E=v._init;return p(d,E(v._payload),T)}if(wa(v)||la(v))return v=Hr(v,d.mode,T,null),v.return=d,v;Po(d,v)}return null}function f(d,v,T,E){var w=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return w!==null?null:l(d,v,""+T,E);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Eo:return T.key===w?c(d,v,T,E):null;case ys:return T.key===w?u(d,v,T,E):null;case sr:return w=T._init,f(d,v,w(T._payload),E)}if(wa(T)||la(T))return w!==null?null:h(d,v,T,E,null);Po(d,T)}return null}function m(d,v,T,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(T)||null,l(v,d,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Eo:return d=d.get(E.key===null?T:E.key)||null,c(v,d,E,w);case ys:return d=d.get(E.key===null?T:E.key)||null,u(v,d,E,w);case sr:var A=E._init;return m(d,v,T,A(E._payload),w)}if(wa(E)||la(E))return d=d.get(T)||null,h(v,d,E,w,null);Po(v,E)}return null}function S(d,v,T,E){for(var w=null,A=null,R=v,_=v=0,N=null;R!==null&&_<T.length;_++){R.index>_?(N=R,R=null):N=R.sibling;var b=f(d,R,T[_],E);if(b===null){R===null&&(R=N);break}t&&R&&b.alternate===null&&e(d,R),v=s(b,v,_),A===null?w=b:A.sibling=b,A=b,R=N}if(_===T.length)return n(d,R),At&&Or(d,_),w;if(R===null){for(;_<T.length;_++)R=p(d,T[_],E),R!==null&&(v=s(R,v,_),A===null?w=R:A.sibling=R,A=R);return At&&Or(d,_),w}for(R=i(d,R);_<T.length;_++)N=m(R,d,_,T[_],E),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?_:N.key),v=s(N,v,_),A===null?w=N:A.sibling=N,A=N);return t&&R.forEach(function(U){return e(d,U)}),At&&Or(d,_),w}function y(d,v,T,E){var w=la(T);if(typeof w!="function")throw Error(re(150));if(T=w.call(T),T==null)throw Error(re(151));for(var A=w=null,R=v,_=v=0,N=null,b=T.next();R!==null&&!b.done;_++,b=T.next()){R.index>_?(N=R,R=null):N=R.sibling;var U=f(d,R,b.value,E);if(U===null){R===null&&(R=N);break}t&&R&&U.alternate===null&&e(d,R),v=s(U,v,_),A===null?w=U:A.sibling=U,A=U,R=N}if(b.done)return n(d,R),At&&Or(d,_),w;if(R===null){for(;!b.done;_++,b=T.next())b=p(d,b.value,E),b!==null&&(v=s(b,v,_),A===null?w=b:A.sibling=b,A=b);return At&&Or(d,_),w}for(R=i(d,R);!b.done;_++,b=T.next())b=m(R,d,_,b.value,E),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?_:b.key),v=s(b,v,_),A===null?w=b:A.sibling=b,A=b);return t&&R.forEach(function(F){return e(d,F)}),At&&Or(d,_),w}function g(d,v,T,E){if(typeof T=="object"&&T!==null&&T.type===Ms&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Eo:e:{for(var w=T.key,A=v;A!==null;){if(A.key===w){if(w=T.type,w===Ms){if(A.tag===7){n(d,A.sibling),v=r(A,T.props.children),v.return=d,d=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sr&&yp(w)===A.type){n(d,A.sibling),v=r(A,T.props),v.ref=ha(d,A,T),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}T.type===Ms?(v=Hr(T.props.children,d.mode,E,T.key),v.return=d,d=v):(E=xl(T.type,T.key,T.props,null,d.mode,E),E.ref=ha(d,v,T),E.return=d,d=E)}return a(d);case ys:e:{for(A=T.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(d,v.sibling),v=r(v,T.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=nu(T,d.mode,E),v.return=d,d=v}return a(d);case sr:return A=T._init,g(d,v,A(T._payload),E)}if(wa(T))return S(d,v,T,E);if(la(T))return y(d,v,T,E);Po(d,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,T),v.return=d,d=v):(n(d,v),v=tu(T,d.mode,E),v.return=d,d=v),a(d)):n(d,v)}return g}var Ks=c0(!0),u0=c0(!1),kl=Ar(null),Bl=null,Ls=null,Gf=null;function Hf(){Gf=Ls=Bl=null}function Wf(t){var e=kl.current;Mt(kl),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){Bl=t,Gf=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Bl===null)throw Error(re(308));Ls=t,Bl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Br=null;function Xf(t){Br===null?Br=[t]:Br.push(t)}function d0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}function Mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,l=s;do{var f=l.lane,m=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,y=l;switch(f=e,m=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){p=S.call(m,p,f);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(m,p,f):S,f==null)break e;p=Pt({},p,f);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=a,t.lanes=a,t.memoizedState=p}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var po={},xi=Ar(po),Ja=Ar(po),$a=Ar(po);function zr(t){if(t===po)throw Error(re(174));return t}function qf(t,e){switch(St($a,e),St(Ja,t),St(xi,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}Mt(xi),St(xi,e)}function Zs(){Mt(xi),Mt(Ja),Mt($a)}function h0(t){zr($a.current);var e=zr(xi.current),n=Xu(e,t.type);e!==n&&(St(Ja,t),St(xi,n))}function Kf(t){Ja.current===t&&(Mt(xi),Mt(Ja))}var Ct=Ar(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function Zf(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var hl=Xi.ReactCurrentDispatcher,Zc=Xi.ReactCurrentBatchConfig,Yr=0,Lt=null,Bt=null,Xt=null,Vl=!1,Ua=!1,Qa=0,H_=0;function tn(){throw Error(re(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(Yr=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?q_:K_,t=n(i,r),Ua){s=0;do{if(Ua=!1,Qa=0,25<=s)throw Error(re(301));s+=1,Xt=Bt=null,e.updateQueue=null,hl.current=Z_,t=n(i,r)}while(Ua)}if(hl.current=Gl,e=Bt!==null&&Bt.next!==null,Yr=0,Xt=Bt=Lt=null,Vl=!1,e)throw Error(re(300));return t}function Qf(){var t=Qa!==0;return Qa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Lt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Xn(){if(Bt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Xt===null?Lt.memoizedState:Xt.next;if(e!==null)Xt=e,Bt=t;else{if(t===null)throw Error(re(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Xt===null?Lt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function eo(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((Yr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,Lt.lanes|=h,qr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,ai(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Xn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p0(){}function m0(t,e){var n=Lt,i=Xn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,eh(x0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,to(9,v0.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(re(349));Yr&30||g0(n,e,r)}return r}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v0(t,e,n,i){e.value=n,e.getSnapshot=i,_0(e)&&S0(t)}function x0(t,e,n){return n(function(){_0(e)&&S0(t)})}function _0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function S0(t){var e=Gi(t,1);e!==null&&ri(e,t,1,-1)}function wp(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Y_.bind(null,Lt,t),[e.memoizedState,t]}function to(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E0(){return Xn().memoizedState}function pl(t,e,n,i){var r=ui();Lt.flags|=t,r.memoizedState=to(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Jf(i,a.deps)){r.memoizedState=to(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=to(1|e,n,s,i)}function Ap(t,e){return pl(8390656,8,t,e)}function eh(t,e){return pc(2048,8,t,e)}function y0(t,e){return pc(4,2,t,e)}function M0(t,e){return pc(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,T0.bind(null,e,t),n)}function th(){}function A0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function N0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R0(t,e,n){return Yr&21?(ai(n,e)||(n=Ig(),Lt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function W_(t,e){var n=vt;vt=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{vt=n,Zc.transition=i}}function C0(){return Xn().memoizedState}function X_(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))L0(e,n);else if(n=d0(t,e,n,i),n!==null){var r=gn();ri(n,t,i,r),P0(n,e,i)}}function Y_(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))L0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,ai(l,a)){var c=e.interleaved;c===null?(r.next=r,Xf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=d0(t,e,r,i),n!==null&&(r=gn(),ri(n,t,i,r),P0(n,e,i))}}function b0(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function L0(t,e){Ua=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}var Gl={readContext:Wn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},q_={readContext:Wn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=X_.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:th,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=W_.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=ui();if(At){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Yt===null)throw Error(re(349));Yr&30||g0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ap(x0.bind(null,i,s,t),[t]),i.flags|=2048,to(9,v0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Yt.identifierPrefix;if(At){var n=Oi,i=Ui;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=H_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K_={readContext:Wn,useCallback:A0,useContext:Wn,useEffect:eh,useImperativeHandle:w0,useInsertionEffect:y0,useLayoutEffect:M0,useMemo:N0,useReducer:Jc,useRef:E0,useState:function(){return Jc(eo)},useDebugValue:th,useDeferredValue:function(t){var e=Xn();return R0(e,Bt.memoizedState,t)},useTransition:function(){var t=Jc(eo)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:C0,unstable_isNewReconciler:!1},Z_={readContext:Wn,useCallback:A0,useContext:Wn,useEffect:eh,useImperativeHandle:w0,useInsertionEffect:y0,useLayoutEffect:M0,useMemo:N0,useReducer:$c,useRef:E0,useState:function(){return $c(eo)},useDebugValue:th,useDeferredValue:function(t){var e=Xn();return Bt===null?e.memoizedState=t:R0(e,Bt.memoizedState,t)},useTransition:function(){var t=$c(eo)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:C0,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Sr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ri(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Sr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ri(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Sr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(ri(e,t,i,n),fl(e,t,i))}};function Np(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,i)||!Ya(r,s):!0}function I0(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=wn(e)?Wr:un.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=wn(e)?Wr:un.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=Tx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function D0(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,wd=i),md(t,e)},n}function U0(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new J_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var $_=Xi.ReactCurrentOwner,Mn=!1;function mn(t,e,n,i){e.child=t===null?u0(e,null,n,i):Ks(e,t.child,n,i)}function Pp(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=$f(t,e,n,i,s,r),n=Qf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(At&&n&&zf(e),e.flags|=1,mn(t,e,i,r),e.child)}function Ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O0(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(a,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function O0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ya(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return gd(t,e,n,i,r)}function F0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Is,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Is,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(Is,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(Is,Pn),Pn|=i;return mn(t,e,r,n),e.child}function k0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var s=wn(n)?Wr:un.current;return s=Ys(e,s),js(e,r),n=$f(t,e,n,i,s,r),i=Qf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(At&&i&&zf(e),e.flags|=1,mn(t,e,n,r),e.child)}function Dp(t,e,n,i,r){if(wn(n)){var s=!0;Ul(e)}else s=!1;if(js(e,r),e.stateNode===null)ml(t,e),I0(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=wn(n)?Wr:un.current,u=Ys(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&Rp(e,a,i,u),ar=!1;var f=e.memoizedState;a.state=f,zl(e,i,a,r),c=e.memoizedState,l!==i||f!==c||Tn.current||ar?(typeof h=="function"&&(hd(e,n,h,i),c=e.memoizedState),(l=ar||Np(e,n,l,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,f0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:$n(e.type,l),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Wn(c):(c=wn(n)?Wr:un.current,c=Ys(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Rp(e,a,i,c),ar=!1,f=e.memoizedState,a.state=f,zl(e,i,a,r);var S=e.memoizedState;l!==p||f!==S||Tn.current||ar?(typeof m=="function"&&(hd(e,n,m,i),S=e.memoizedState),(u=ar||Np(e,n,u,i,f,S,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,S,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),a.props=i,a.state=S,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){k0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&_p(e,n,!1),Hi(t,e,s);i=e.stateNode,$_.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,l,s)):mn(t,e,l,s),e.memoizedState=i.state,r&&_p(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),qf(t,e.containerInfo)}function Up(t,e,n,i,r){return qs(),Vf(r),e.flags|=256,mn(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function z0(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Ct,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=xc(a,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=xd,t):nh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Q_(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Er(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=Hr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&Vf(i),Ks(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(re(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=xd,s);if(!(e.mode&1))return Io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(re(419)),i=Qc(s,i,void 0),Io(t,e,a,i)}if(l=(a&t.childLanes)!==0,Mn||l){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),ri(i,t,r,-1))}return lh(),i=Qc(Error(re(421))),Io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=vr(r.nextSibling),Un=e,At=!0,ei=null,t!==null&&(jn[Vn++]=Ui,jn[Vn++]=Oi,jn[Vn++]=Xr,Ui=t.id,Oi=t.overflow,Xr=e),e=nh(e,i.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function j0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:B0(e),qs();break;case 5:h0(e);break;case 1:wn(e.type)&&Ul(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?z0(t,e,n):(St(Ct,Ct.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);St(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,F0(t,e,n)}return Hi(t,e,n)}var V0,Sd,G0,H0;V0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};G0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(xi.current);var s=null;switch(n){case"input":r=Vu(t,r),i=Vu(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}Yu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&yt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};H0=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tS(t,e,n){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return wn(e.type)&&Dl(),nn(e),null;case 3:return i=e.stateNode,Zs(),Mt(Tn),Mt(un),Zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Rd(ei),ei=null))),Sd(t,e),nn(e),null;case 5:Kf(e);var r=zr($a.current);if(n=e.type,t!==null&&e.stateNode!=null)G0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return nn(e),null}if(t=zr(xi.current),Lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)yt(Na[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Wh(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Yh(i,s),yt("invalid",i)}Yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,l,t),r=["children",""+l]):za.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":yo(i),Xh(i,s,!0);break;case"textarea":yo(i),qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[hi]=e,t[Za]=i,V0(t,e,!1,!1),e.stateNode=t;e:{switch(a=qu(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)yt(Na[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Wh(t,i),r=Vu(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":Yh(t,i),r=Wu(t,i),yt("invalid",t);break;default:r=i}Yu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Eg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_g(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ja(t,c):typeof c=="number"&&ja(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?c!=null&&s==="onScroll"&&yt("scroll",t):c!=null&&Af(t,s,c,a))}switch(n){case"input":yo(t),Xh(t,i,!1);break;case"textarea":yo(t),qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)H0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=zr($a.current),zr(xi.current),Lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return nn(e),null;case 13:if(Mt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Dn!==null&&e.mode&1&&!(e.flags&128))l0(),qs(),e.flags|=98560,s=!1;else if(s=Lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[hi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ei!==null&&(Rd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?zt===0&&(zt=3):lh())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return Zs(),Sd(t,e),t===null&&qa(e.stateNode.containerInfo),nn(e),null;case 10:return Wf(e.type._context),nn(e),null;case 17:return wn(e.type)&&Dl(),nn(e),null;case 19:if(Mt(Ct),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)pa(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=jl(t),a!==null){for(e.flags|=128,pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>$s&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return nn(e),null}else 2*Dt()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=Ct.current,St(Ct,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function nS(t,e){switch(jf(e),e.tag){case 1:return wn(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),Mt(Tn),Mt(un),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(Mt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Ct),null;case 4:return Zs(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Do=!1,on=!1,iS=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){It(t,e,i)}}var Fp=!1;function rS(t,e){if(rd=bl,t=Kg(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(l=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},bl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,g=S.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(E){It(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return S=Fp,Fp=!1,S}function Oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W0(t){var e=t.alternate;e!==null&&(t.alternate=null,W0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[Za],delete e[ld],delete e[z_],delete e[j_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X0(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Zt=null,Qn=!1;function Qi(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:on||Ps(n,e);case 6:var i=Zt,r=Qn;Zt=null,Qi(t,e,n),Zt=i,Qn=r,Zt!==null&&(Qn?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(Qn?(t=Zt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Wa(t)):Yc(Zt,n.stateNode));break;case 4:i=Zt,r=Qn,Zt=n.stateNode.containerInfo,Qn=!0,Qi(t,e,n),Zt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ed(n,e,a),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!on&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){It(n,e,l)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Qi(t,e,n),on=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function Bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(i){var r=hS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Zt=l.stateNode,Qn=!1;break e;case 3:Zt=l.stateNode.containerInfo,Qn=!0;break e;case 4:Zt=l.stateNode.containerInfo,Qn=!0;break e}l=l.return}if(Zt===null)throw Error(re(160));Y0(s,a,r),Zt=null,Qn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){It(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q0(e,t),e=e.sibling}function q0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),oi(t),i&4){try{Oa(3,t,t.return),gc(3,t)}catch(y){It(t,t.return,y)}try{Oa(5,t,t.return)}catch(y){It(t,t.return,y)}}break;case 1:qn(e,t),oi(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(qn(e,t),oi(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(y){It(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gg(r,s),qu(l,a);var u=qu(l,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?Eg(r,p):h==="dangerouslySetInnerHTML"?_g(r,p):h==="children"?ja(r,p):Af(r,h,p,u)}switch(l){case"input":Gu(r,s);break;case"textarea":vg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(y){It(t,t.return,y)}}break;case 6:if(qn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){It(t,t.return,y)}}break;case 3:if(qn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(y){It(t,t.return,y)}break;case 4:qn(e,t),oi(t);break;case 13:qn(e,t),oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=Dt())),i&4&&Bp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||h,qn(e,t),on=u):qn(e,t),oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(p=ye=h;ye!==null;){switch(f=ye,m=f.child,f.tag){case 0:case 11:case 14:case 15:Oa(4,f,f.return);break;case 1:Ps(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(y){It(i,n,y)}}break;case 5:Ps(f,f.return);break;case 22:if(f.memoizedState!==null){jp(p);continue}}m!==null?(m.return=f,ye=m):jp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Sg("display",a))}catch(y){It(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){It(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qn(e,t),oi(t),i&4&&Bp(t);break;case 21:break;default:qn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=kp(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=kp(t);Md(t,l,a);break;default:throw Error(re(161))}}catch(c){It(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){ye=t,K0(t)}function K0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Do;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||on;l=Do;var u=on;if(Do=a,(on=c)&&!u)for(ye=r;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?Vp(r):c!==null?(c.return=a,ye=c):Vp(r);for(;s!==null;)ye=s,K0(s),s=s.sibling;ye=r,Do=l,on=u}zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):zp(t)}}function zp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Wa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}on||e.flags&512&&yd(e)}catch(f){It(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function jp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Vp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(c){It(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){It(e,r,c)}}var s=e.return;try{yd(e)}catch(c){It(e,s,c)}break;case 5:var a=e.return;try{yd(e)}catch(c){It(e,a,c)}}}catch(c){It(e,e.return,c)}if(e===t){ye=null;break}var l=e.sibling;if(l!==null){l.return=e.return,ye=l;break}ye=e.return}}var aS=Math.ceil,Hl=Xi.ReactCurrentDispatcher,ih=Xi.ReactCurrentOwner,Hn=Xi.ReactCurrentBatchConfig,ot=0,Yt=null,kt=null,$t=0,Pn=0,Is=Ar(0),zt=0,no=null,qr=0,vc=0,rh=0,Fa=null,En=null,sh=0,$s=1/0,Li=null,Wl=!1,wd=null,_r=null,Uo=!1,fr=null,Xl=0,ka=0,Ad=null,gl=-1,vl=0;function gn(){return ot&6?Dt():gl!==-1?gl:gl=Dt()}function Sr(t){return t.mode&1?ot&2&&$t!==0?$t&-$t:G_.transition!==null?(vl===0&&(vl=Ig()),vl):(t=vt,t!==0||(t=window.event,t=t===void 0?16:zg(t.type)),t):1}function ri(t,e,n,i){if(50<ka)throw ka=0,Ad=null,Error(re(185));uo(t,n,i),(!(ot&2)||t!==Yt)&&(t===Yt&&(!(ot&2)&&(vc|=n),zt===4&&cr(t,$t)),An(t,i),n===1&&ot===0&&!(e.mode&1)&&($s=Dt()+500,hc&&Nr()))}function An(t,e){var n=t.callbackNode;Gx(t,e);var i=Cl(t,t===Yt?$t:0);if(i===0)n!==null&&Jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jh(n),e===1)t.tag===0?V_(Gp.bind(null,t)):s0(Gp.bind(null,t)),k_(function(){!(ot&6)&&Nr()}),n=null;else{switch(Dg(i)){case 1:n=Lf;break;case 4:n=Lg;break;case 16:n=Rl;break;case 536870912:n=Pg;break;default:n=Rl}n=iv(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(gl=-1,vl=0,ot&6)throw Error(re(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=Cl(t,t===Yt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=ot;ot|=2;var s=$0();(Yt!==t||$t!==e)&&(Li=null,$s=Dt()+500,Gr(t,e));do try{cS();break}catch(l){J0(t,l)}while(!0);Hf(),Hl.current=s,ot=r,kt!==null?e=0:(Yt=null,$t=0,e=zt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Nd(t,r))),e===1)throw n=no,Gr(t,0),cr(t,i),An(t,Dt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!oS(r)&&(e=Yl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Nd(t,s))),e===1))throw n=no,Gr(t,0),cr(t,i),An(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Fr(t,En,Li);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=sh+500-Dt(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=od(Fr.bind(null,t,En,Li),e);break}Fr(t,En,Li);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ii(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aS(i/1960))-i,10<i){t.timeoutHandle=od(Fr.bind(null,t,En,Li),i);break}Fr(t,En,Li);break;case 5:Fr(t,En,Li);break;default:throw Error(re(329))}}}return An(t,Dt()),t.callbackNode===n?Z0.bind(null,t):null}function Nd(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=En,En=n,e!==null&&Rd(e)),t}function Rd(t){En===null?En=t:En.push.apply(En,t)}function oS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~rh,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if(ot&6)throw Error(re(327));Vs();var e=Cl(t,0);if(!(e&1))return An(t,Dt()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Nd(t,i))}if(n===1)throw n=no,Gr(t,0),cr(t,e),An(t,Dt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,En,Li),An(t,Dt()),null}function ah(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&($s=Dt()+500,hc&&Nr())}}function Kr(t){fr!==null&&fr.tag===0&&!(ot&6)&&Vs();var e=ot;ot|=1;var n=Hn.transition,i=vt;try{if(Hn.transition=null,vt=1,t)return t()}finally{vt=i,Hn.transition=n,ot=e,!(ot&6)&&Nr()}}function oh(){Pn=Is.current,Mt(Is)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F_(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Zs(),Mt(Tn),Mt(un),Zf();break;case 5:Kf(i);break;case 4:Zs();break;case 13:Mt(Ct);break;case 19:Mt(Ct);break;case 10:Wf(i.type._context);break;case 22:case 23:oh()}n=n.return}if(Yt=t,kt=t=Er(t.current,null),$t=Pn=e,zt=0,no=null,rh=vc=qr=0,En=Fa=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Br=null}return t}function J0(t,e){do{var n=kt;try{if(Hf(),hl.current=Gl,Vl){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Yr=0,Xt=Bt=Lt=null,Ua=!1,Qa=0,ih.current=null,n===null||n.return===null){zt=1,no=e,kt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=$t,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=bp(a);if(m!==null){m.flags&=-257,Lp(m,a,l,s,e),m.mode&1&&Cp(s,u,e),e=m,c=u;var S=e.updateQueue;if(S===null){var y=new Set;y.add(c),e.updateQueue=y}else S.add(c);break e}else{if(!(e&1)){Cp(s,u,e),lh();break e}c=Error(re(426))}}else if(At&&l.mode&1){var g=bp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Lp(g,a,l,s,e),Vf(Js(c,l));break e}}s=c=Js(c,l),zt!==4&&(zt=2),Fa===null?Fa=[s]:Fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=D0(s,c,e);Mp(s,d);break e;case 1:l=c;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_r===null||!_r.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=U0(s,l,e);Mp(s,E);break e}}s=s.return}while(s!==null)}ev(n)}catch(w){e=w,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function $0(){var t=Hl.current;return Hl.current=Gl,t===null?Gl:t}function lh(){(zt===0||zt===3||zt===2)&&(zt=4),Yt===null||!(qr&268435455)&&!(vc&268435455)||cr(Yt,$t)}function Yl(t,e){var n=ot;ot|=2;var i=$0();(Yt!==t||$t!==e)&&(Li=null,Gr(t,e));do try{lS();break}catch(r){J0(t,r)}while(!0);if(Hf(),ot=n,Hl.current=i,kt!==null)throw Error(re(261));return Yt=null,$t=0,zt}function lS(){for(;kt!==null;)Q0(kt)}function cS(){for(;kt!==null&&!Dx();)Q0(kt)}function Q0(t){var e=nv(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?ev(t):kt=e,ih.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,kt=null;return}}else if(n=tS(n,e,Pn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);zt===0&&(zt=5)}function Fr(t,e,n){var i=vt,r=Hn.transition;try{Hn.transition=null,vt=1,uS(t,e,n,i)}finally{Hn.transition=r,vt=i}return null}function uS(t,e,n,i){do Vs();while(fr!==null);if(ot&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hx(t,s),t===Yt&&(kt=Yt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,iv(Rl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var a=vt;vt=1;var l=ot;ot|=4,ih.current=null,rS(t,n),q0(n,t),b_(sd),bl=!!rd,sd=rd=null,t.current=n,sS(n),Ux(),ot=l,vt=a,Hn.transition=s}else t.current=n;if(Uo&&(Uo=!1,fr=t,Xl=r),s=t.pendingLanes,s===0&&(_r=null),kx(n.stateNode),An(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=wd,wd=null,t;return Xl&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===Ad?ka++:(ka=0,Ad=t):ka=0,Nr(),null}function Vs(){if(fr!==null){var t=Dg(Xl),e=Hn.transition,n=vt;try{if(Hn.transition=null,vt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,Xl=0,ot&6)throw Error(re(331));var r=ot;for(ot|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ye=u;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:Oa(8,h,s)}var p=h.child;if(p!==null)p.return=h,ye=p;else for(;ye!==null;){h=ye;var f=h.sibling,m=h.return;if(W0(h),h===u){ye=null;break}if(f!==null){f.return=m,ye=f;break}ye=m}}}var S=s.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){a=ye;var T=a.child;if(a.subtreeFlags&2064&&T!==null)T.return=a,ye=T;else e:for(a=v;ye!==null;){if(l=ye,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gc(9,l)}}catch(w){It(l,l.return,w)}if(l===a){ye=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,ye=E;break e}ye=l.return}}if(ot=r,Nr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{vt=n,Hn.transition=e}}return!1}function Hp(t,e,n){e=Js(n,e),e=D0(t,e,1),t=xr(t,e,1),e=gn(),t!==null&&(uo(t,1,e),An(t,e))}function It(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=Js(n,t),t=U0(e,t,1),e=xr(e,t,1),t=gn(),e!==null&&(uo(e,1,t),An(e,t));break}}e=e.return}}function dS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&($t&n)===n&&(zt===4||zt===3&&($t&130023424)===$t&&500>Dt()-sh?Gr(t,0):rh|=n),An(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):e=1);var n=gn();t=Gi(t,e),t!==null&&(uo(t,e,n),An(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,eS(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,At&&e.flags&1048576&&a0(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Ys(e,un.current);js(e,n),r=$f(null,e,i,t,r,n);var s=Qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,At&&s&&zf(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mS(i),t=$n(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=Dp(null,e,i,t,n);break e;case 11:e=Pp(null,e,i,t,n);break e;case 14:e=Ip(null,e,i,$n(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Dp(t,e,i,r,n);case 3:e:{if(B0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,f0(t,e),zl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(re(423)),e),e=Up(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(re(424)),e),e=Up(t,e,i,n,r);break e}else for(Dn=vr(e.stateNode.containerInfo.firstChild),Un=e,At=!0,ei=null,n=u0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Hi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return h0(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ad(i,r)?a=null:s!==null&&ad(i,s)&&(e.flags|=32),k0(t,e),mn(t,e,a,n),e.child;case 6:return t===null&&dd(e),null;case 13:return z0(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pp(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,St(kl,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!Tn.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=ki(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),fd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Wn(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Ip(t,e,i,r,n);case 15:return O0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),ml(t,e),e.tag=1,wn(i)?(t=!0,Ul(e)):t=!1,js(e,n),I0(e,i,r),pd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return j0(t,e,n);case 22:return F0(t,e,n)}throw Error(re(156,e.tag))};function iv(t,e){return bg(t,e)}function pS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new pS(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Cf)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")ch(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ms:return Hr(n.children,r,s,e);case Nf:a=8,r|=8;break;case ku:return t=Gn(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case Bu:return t=Gn(13,n,e,r),t.elementType=Bu,t.lanes=s,t;case zu:return t=Gn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case hg:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:a=10;break e;case fg:a=9;break e;case Rf:a=11;break e;case Cf:a=14;break e;case sr:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Gn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=hg,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,s,a,l,c){return t=new gS(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function vS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rv(t){if(!t)return Mr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(wn(n))return r0(t,n,e)}return e}function sv(t,e,n,i,r,s,a,l,c){return t=uh(n,i,!0,t,r,s,a,l,c),t.context=rv(null),n=t.current,i=gn(),r=Sr(n),s=ki(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,uo(t,r,i),An(t,i),t}function _c(t,e,n,i){var r=e.current,s=gn(),a=Sr(r);return n=rv(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,a),t!==null&&(ri(t,r,a,s),fl(t,r,a)),a}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dh(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function xS(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}Sc.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));_c(t,e,null,null)};Sc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){_c(null,t,null,null)}),e[Vi]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&Bg(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ql(a);s.call(u)}}var a=sv(e,i,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=a,t[Vi]=a.current,qa(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=ql(c);l.call(u)}}var c=uh(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=c,t[Vi]=c.current,qa(t.nodeType===8?t.parentNode:t),Kr(function(){_c(e,c,n,i)}),c}function yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=ql(a);l.call(c)}}_c(e,a,t,r)}else a=_S(n,e,t,r,i);return ql(a)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(Pf(e,n|1),An(e,Dt()),!(ot&6)&&($s=Dt()+500,Nr()))}break;case 13:Kr(function(){var i=Gi(t,1);if(i!==null){var r=gn();ri(i,t,1,r)}}),dh(t,1)}};If=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=gn();ri(e,t,134217728,n)}dh(t,134217728)}};Og=function(t){if(t.tag===13){var e=Sr(t),n=Gi(t,e);if(n!==null){var i=gn();ri(n,t,e,i)}dh(t,e)}};Fg=function(){return vt};kg=function(t,e){var n=vt;try{return vt=t,e()}finally{vt=n}};Zu=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(re(90));mg(i),Gu(i,r)}}}break;case"textarea":vg(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};Tg=ah;wg=Kr;var SS={usingClientEntryPoint:!1,Events:[ho,Ns,fc,yg,Mg,ah]},ma={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rg(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||xS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{lc=Oo.inject(ES),vi=Oo}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(re(200));return vS(t,e,null,n)};Fn.createRoot=function(t,e){if(!hh(t))throw Error(re(299));var n=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,qa(t.nodeType===8?t.parentNode:t),new fh(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Rg(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return Kr(t)};Fn.hydrate=function(t,e,n){if(!Ec(e))throw Error(re(200));return yc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=sv(e,null,t,1,n??null,r,!1,s,a),t[Vi]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};Fn.render=function(t,e,n){if(!Ec(e))throw Error(re(200));return yc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(re(40));return t._reactRootContainer?(Kr(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};Fn.unstable_batchedUpdates=ah;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return yc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(t){console.error(t)}}ov(),og.exports=Fn;var yS=og.exports,Yp=yS;Ou.createRoot=Yp.createRoot,Ou.hydrateRoot=Yp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="186",MS=0,qp=1,TS=2,_l=1,lv=2,Ra=3,Zr=0,Nn=1,pi=2,Bi=0,Ba=1,Cd=2,Kp=3,Zp=4,wS=5,Es=100,AS=101,NS=102,RS=103,CS=104,bS=200,LS=201,PS=202,IS=203,cv=204,uv=205,DS=206,US=207,OS=208,FS=209,kS=210,BS=211,zS=212,jS=213,VS=214,bd=0,Ld=1,Pd=2,io=3,Id=4,Dd=5,Ud=6,Od=7,dv=0,GS=1,HS=2,_i=0,fv=1,hv=2,pv=3,mh=4,mv=5,gv=6,vv=7,xv=300,Jr=301,Qs=302,iu=303,ru=304,Mc=306,ro=1e3,Fi=1001,Fd=1002,Jt=1003,WS=1004,Fo=1005,ln=1006,su=1007,jr=1008,In=1009,_v=1010,Sv=1011,so=1012,gh=1013,Ei=1014,mi=1015,yi=1016,vh=1017,xh=1018,ao=1020,Ev=35902,yv=35899,Mv=1021,Tv=1022,ni=1023,Wi=1026,Vr=1027,wv=1028,_h=1029,$r=1030,Sh=1031,Eh=1033,Sl=33776,El=33777,yl=33778,Ml=33779,kd=35840,Bd=35841,zd=35842,jd=35843,Vd=36196,Gd=37492,Hd=37496,Wd=37488,Xd=37489,Kl=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,$d=37812,Qd=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,cf=36492,uf=36494,df=36495,ff=36283,hf=36284,Zl=36285,pf=36286,XS=3200,mf=0,YS=1,ur="",zn="srgb",Jl="srgb-linear",$l="linear",mt="srgb",au=7680,qS=519,KS=512,ZS=513,JS=514,yh=515,$S=516,QS=517,Mh=518,eE=519,tE=35044,Jp="300 es",gi=2e3,oo=2001;function nE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iE(){const t=Ql("canvas");return t.style.display="block",t}const $p={};function Qp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Av(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=Av(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Av(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Gs(...t){const e=t.join(" ");e in $p||($p[e]=!0,Oe(...t))}function rE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sE={[bd]:Ld,[Pd]:Ud,[Id]:Od,[io]:Dd,[Ld]:bd,[Ud]:Pd,[Od]:Id,[Dd]:io};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=Math.PI/180,ec=180/Math.PI;function mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function aE(t,e){return(t%e+e)%e}function lu(t,e,n){return(1-n)*t+n*e}function ga(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ih=class Ih{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;let $e=Ih;class ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],S=s[a+2],y=s[a+3];if(p!==y||c!==f||u!==m||h!==S){let g=c*f+u*m+h*S+p*y;g<0&&(f=-f,m=-m,S=-S,y=-y,g=-g);let d=1-l;if(g<.9995){const v=Math.acos(g),T=Math.sin(v);d=Math.sin(d*v)/T,l=Math.sin(l*v)/T,c=c*d+f*l,u=u*d+m*l,h=h*d+S*l,p=p*d+y*l}else{c=c*d+f*l,u=u*d+m*l,h=h*d+S*l,p=p*d+y*l;const v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],S=s[a+3];return e[n]=l*S+h*p+c*m-u*f,e[n+1]=c*S+h*f+u*p-l*m,e[n+2]=u*S+h*m+l*f-c*p,e[n+3]=h*S-l*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),p=l(s/2),f=c(i/2),m=c(r/2),S=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*S,this._y=u*m*p-f*h*S,this._z=u*h*S+f*m*p,this._w=u*h*p-f*m*S;break;case"YXZ":this._x=f*h*p+u*m*S,this._y=u*m*p-f*h*S,this._z=u*h*S-f*m*p,this._w=u*h*p+f*m*S;break;case"ZXY":this._x=f*h*p-u*m*S,this._y=u*m*p+f*h*S,this._z=u*h*S+f*m*p,this._w=u*h*p-f*m*S;break;case"ZYX":this._x=f*h*p-u*m*S,this._y=u*m*p+f*h*S,this._z=u*h*S-f*m*p,this._w=u*h*p+f*m*S;break;case"YZX":this._x=f*h*p+u*m*S,this._y=u*m*p+f*h*S,this._z=u*h*S-f*m*p,this._w=u*h*p-f*m*S;break;case"XZY":this._x=f*h*p-u*m*S,this._y=u*m*p-f*h*S,this._z=u*h*S+f*m*p,this._w=u*h*p+f*m*S;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+l+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dh=class Dh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-l*h,this.y=i+c*h+l*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;let V=Dh;const cu=new V,em=new ra,Uh=class Uh{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],S=i[8],y=r[0],g=r[3],d=r[6],v=r[1],T=r[4],E=r[7],w=r[2],A=r[5],R=r[8];return s[0]=a*y+l*v+c*w,s[3]=a*g+l*T+c*A,s[6]=a*d+l*E+c*R,s[1]=u*y+h*v+p*w,s[4]=u*g+h*T+p*A,s[7]=u*d+h*E+p*R,s[2]=f*y+m*v+S*w,s[5]=f*g+m*T+S*A,s[8]=f*d+m*E+S*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=h*a-l*u,f=l*c-h*s,m=u*s-a*c,S=n*p+i*f+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=p*y,e[1]=(r*u-h*i)*y,e[2]=(l*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*c)*y,e[5]=(r*s-l*n)*y,e[6]=m*y,e[7]=(i*c-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uu.makeScale(e,n)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uu.makeRotation(-e)),this}translate(e,n){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uh.prototype.isMatrix3=!0;let ke=Uh;const uu=new ke,tm=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const t={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jl]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const nt=oE();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class lE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=Ql("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cE=0;class Th{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(du(r[a].image)):s.push(du(r[a]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let uE=0;const fu=new V;class cn extends ts{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Fi,r=Fi,s=ln,a=jr,l=ni,c=In,u=cn.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=mo(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=xv;cn.DEFAULT_ANISOTROPY=1;const Oh=class Oh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],S=c[9],y=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(S+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(u+1)/2,E=(m+1)/2,w=(d+1)/2,A=(h+f)/4,R=(p+y)/4,_=(S+g)/4;return T>E&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=R/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-S)*(g-S)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-S)/v,this.y=(p-y)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;let bt=Oh;class dE extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new cn(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Th(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends dE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fE extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ac=class ac{constructor(e,n,i,r,s,a,l,c,u,h,p,f,m,S,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,h,p,f,m,S,y,g)}set(e,n,i,r,s,a,l,c,u,h,p,f,m,S,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=S,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,S=l*h,y=l*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+S*u,n[5]=f-y*u,n[9]=-l*c,n[2]=y-f*u,n[6]=S+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,S=u*h,y=u*p;n[0]=f+y*l,n[4]=S*l-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-l,n[2]=m*l-S,n[6]=y+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,S=u*h,y=u*p;n[0]=f-y*l,n[4]=-a*p,n[8]=S+m*l,n[1]=m+S*l,n[5]=a*h,n[9]=y-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,S=l*h,y=l*p;n[0]=c*h,n[4]=S*u-m,n[8]=f*u+y,n[1]=c*p,n[5]=y*u+f,n[9]=m*u-S,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,S=l*c,y=l*u;n[0]=c*h,n[4]=y-f*p,n[8]=S*p+m,n[1]=p,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=m*p+S,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*c,m=a*u,S=l*c,y=l*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+y,n[5]=a*h,n[9]=m*p-S,n[2]=S*p-m,n[6]=l*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,pE)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),er.crossVectors(i,bn),er.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),er.crossVectors(i,bn)),er.normalize(),ko.crossVectors(bn,er),r[0]=er.x,r[4]=ko.x,r[8]=bn.x,r[1]=er.y,r[5]=ko.y,r[9]=bn.y,r[2]=er.z,r[6]=ko.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],S=i[2],y=i[6],g=i[10],d=i[14],v=i[3],T=i[7],E=i[11],w=i[15],A=r[0],R=r[4],_=r[8],N=r[12],b=r[1],U=r[5],F=r[9],k=r[13],I=r[2],X=r[6],Y=r[10],K=r[14],O=r[3],z=r[7],H=r[11],$=r[15];return s[0]=a*A+l*b+c*I+u*O,s[4]=a*R+l*U+c*X+u*z,s[8]=a*_+l*F+c*Y+u*H,s[12]=a*N+l*k+c*K+u*$,s[1]=h*A+p*b+f*I+m*O,s[5]=h*R+p*U+f*X+m*z,s[9]=h*_+p*F+f*Y+m*H,s[13]=h*N+p*k+f*K+m*$,s[2]=S*A+y*b+g*I+d*O,s[6]=S*R+y*U+g*X+d*z,s[10]=S*_+y*F+g*Y+d*H,s[14]=S*N+y*k+g*K+d*$,s[3]=v*A+T*b+E*I+w*O,s[7]=v*R+T*U+E*X+w*z,s[11]=v*_+T*F+E*Y+w*H,s[15]=v*N+T*k+E*K+w*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],S=e[3],y=e[7],g=e[11],d=e[15],v=c*m-u*f,T=l*m-u*p,E=l*f-c*p,w=a*m-u*h,A=a*f-c*h,R=a*p-l*h;return n*(y*v-g*T+d*E)-i*(S*v-g*w+d*A)+r*(S*T-y*w+d*R)-s*(S*E-y*A+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-l*u)-i*(s*h-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],S=e[12],y=e[13],g=e[14],d=e[15],v=n*l-i*a,T=n*c-r*a,E=n*u-s*a,w=i*c-r*l,A=i*u-s*l,R=r*u-s*c,_=h*y-p*S,N=h*g-f*S,b=h*d-m*S,U=p*g-f*y,F=p*d-m*y,k=f*d-m*g,I=v*k-T*F+E*U+w*b-A*N+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=(l*k-c*F+u*U)*X,e[1]=(r*F-i*k-s*U)*X,e[2]=(y*R-g*A+d*w)*X,e[3]=(f*A-p*R-m*w)*X,e[4]=(c*b-a*k-u*N)*X,e[5]=(n*k-r*b+s*N)*X,e[6]=(g*E-S*R-d*T)*X,e[7]=(h*R-f*E+m*T)*X,e[8]=(a*F-l*b+u*_)*X,e[9]=(i*b-n*F-s*_)*X,e[10]=(S*A-y*E+d*v)*X,e[11]=(p*E-h*A-m*v)*X,e[12]=(l*N-a*U-c*_)*X,e[13]=(n*U-i*N+r*_)*X,e[14]=(y*T-S*w-g*v)*X,e[15]=(h*w-p*T+f*v)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,h=a+a,p=l+l,f=s*u,m=s*h,S=s*p,y=a*h,g=a*p,d=l*p,v=c*u,T=c*h,E=c*p,w=i.x,A=i.y,R=i.z;return r[0]=(1-(y+d))*w,r[1]=(m+E)*w,r[2]=(S-T)*w,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(f+d))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(S+T)*R,r[9]=(g-v)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ls.set(r[0],r[1],r[2]).length();const l=ls.set(r[4],r[5],r[6]).length(),c=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const u=1/a,h=1/l,p=1/c;return Kn.elements[0]*=u,Kn.elements[1]*=u,Kn.elements[2]*=u,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=p,Kn.elements[9]*=p,Kn.elements[10]*=p,n.setFromRotationMatrix(Kn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=gi,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let S,y;if(c)S=s/(a-s),y=a*s/(a-s);else if(l===gi)S=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===oo)S=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=gi,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let S,y;if(c)S=1/(a-s),y=a/(a-s);else if(l===gi)S=-2/(a-s),y=-(a+s)/(a-s);else if(l===oo)S=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=S,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ac.prototype.isMatrix4=!0;let Nt=ac;const ls=new V,Kn=new Nt,hE=new V(0,0,0),pE=new V(1,1,1),er=new V,ko=new V,bn=new V,im=new Nt,rm=new ra;class Tr{constructor(e=0,n=0,i=0,r=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const sm=new V,cs=new ra,Ai=new Nt,Bo=new V,va=new V,gE=new V,vE=new ra,am=new V(1,0,0),om=new V(0,1,0),lm=new V(0,0,1),cm={type:"added"},xE={type:"removed"},us={type:"childadded",child:null},hu={type:"childremoved",child:null};class jt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new V,n=new Tr,i=new ra,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ke}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bo.copy(e):Bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(va,Bo,this.up):Ai.lookAt(Bo,va,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ai),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),us.child=e,this.dispatchEvent(us),us.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xE),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,vE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),S=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.DEFAULT_UP=new V(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class di extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,S=.005;u.inputState.pinching&&f>m+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},zo={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=aE(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=Rv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return nt.workingToColorSpace(sn.copy(this),e),Math.round(it(sn.r*255,0,255))*65536+Math.round(it(sn.g*255,0,255))*256+Math.round(it(sn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const p=a-l;switch(u=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=zn){nt.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(zo);const i=lu(tr.h,zo.h,n),r=lu(tr.s,zo.s,n),s=lu(tr.l,zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new tt;tt.NAMES=Rv;class Ah{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=n}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class SE extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new V,Ni=new V,gu=new V,Ri=new V,ds=new V,fs=new V,um=new V,vu=new V,xu=new V,_u=new V,Su=new bt,Eu=new bt,yu=new bt;class ti{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ni.subVectors(i,n),gu.subVectors(e,n);const a=Zn.dot(Zn),l=Zn.dot(Ni),c=Zn.dot(gu),u=Ni.dot(Ni),h=Ni.dot(gu),p=a*u-l*l;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-l*h)*f,S=(a*h-l*c)*f;return s.set(1-m-S,S,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(l,Ri.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Su.setScalar(0),Eu.setScalar(0),yu.setScalar(0),Su.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),yu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Su,s.x),a.addScaledVector(Eu,s.y),a.addScaledVector(yu,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ni.subVectors(e,n),Zn.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Zn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;ds.subVectors(r,i),fs.subVectors(s,i),vu.subVectors(e,i);const c=ds.dot(vu),u=fs.dot(vu);if(c<=0&&u<=0)return n.copy(i);xu.subVectors(e,r);const h=ds.dot(xu),p=fs.dot(xu);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ds,a);_u.subVectors(e,s);const m=ds.dot(_u),S=fs.dot(_u);if(S>=0&&m<=S)return n.copy(s);const y=m*u-c*S;if(y<=0&&u>=0&&S<=0)return l=u/(u-S),n.copy(i).addScaledVector(fs,l);const g=h*S-m*p;if(g<=0&&p-h>=0&&m-S>=0)return um.subVectors(s,r),l=(p-h)/(p-h+(m-S)),n.copy(r).addScaledVector(um,l);const d=1/(g+y+f);return a=y*d,l=f*d,n.copy(i).addScaledVector(ds,a).addScaledVector(fs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Vo.subVectors(this.max,xa),hs.subVectors(e.a,xa),ps.subVectors(e.b,xa),ms.subVectors(e.c,xa),nr.subVectors(ps,hs),ir.subVectors(ms,ps),Lr.subVectors(hs,ms);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Lr.z,Lr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Lr.z,0,-Lr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Lr.y,Lr.x,0];return!Mu(n,hs,ps,ms,Vo)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,hs,ps,ms,Vo))?!1:(Go.crossVectors(nr,ir),n=[Go.x,Go.y,Go.z],Mu(n,hs,ps,ms,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new V,new V,new V,new V,new V,new V,new V,new V],Jn=new V,jo=new go,hs=new V,ps=new V,ms=new V,nr=new V,ir=new V,Lr=new V,xa=new V,Vo=new V,Go=new V,Pr=new V;function Mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const l=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),c=e.dot(Pr),u=n.dot(Pr),h=i.dot(Pr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Ot=new V,Ho=new $e;let EE=0;class Si extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tE,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ho.fromBufferAttribute(this,n),Ho.applyMatrix3(e),this.setXY(n,Ho.x,Ho.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ga(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bv extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const yE=new go,_a=new V,Tu=new V;class Tc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Tu)),this.expandByPoint(_a.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ME=0;const Bn=new Nt,wu=new jt,gs=new V,Ln=new go,Sa=new go,Wt=new V;class Rn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nE(e)?bv:Cv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];Sa.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(Ln.min,Sa.min),Ln.expandByPoint(Wt),Wt.addVectors(Ln.max,Sa.max),Ln.expandByPoint(Wt)):(Ln.expandByPoint(Sa.min),Ln.expandByPoint(Sa.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Wt.fromBufferAttribute(l,u),c&&(gs.fromBufferAttribute(e,u),Wt.add(gs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Si(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let _=0;_<i.count;_++)l[_]=new V,c[_]=new V;const u=new V,h=new V,p=new V,f=new $e,m=new $e,S=new $e,y=new V,g=new V;function d(_,N,b){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,N),p.fromBufferAttribute(i,b),f.fromBufferAttribute(s,_),m.fromBufferAttribute(s,N),S.fromBufferAttribute(s,b),h.sub(u),p.sub(u),m.sub(f),S.sub(f);const U=1/(m.x*S.y-S.x*m.y);isFinite(U)&&(y.copy(h).multiplyScalar(S.y).addScaledVector(p,-m.y).multiplyScalar(U),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-S.x).multiplyScalar(U),l[_].add(y),l[N].add(y),l[b].add(y),c[_].add(g),c[N].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,N=v.length;_<N;++_){const b=v[_],U=b.start,F=b.count;for(let k=U,I=U+F;k<I;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new V,E=new V,w=new V,A=new V;function R(_){w.fromBufferAttribute(r,_),A.copy(w);const N=l[_];T.copy(N),T.sub(w.multiplyScalar(w.dot(N))).normalize(),E.crossVectors(A,N);const U=E.dot(c[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,U)}for(let _=0,N=v.length;_<N;++_){const b=v[_],U=b.start,F=b.count;for(let k=U,I=U+F;k<I;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,l=new V,c=new V,u=new V,h=new V,p=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const S=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),l.add(h),c.add(h),u.add(h),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,p=l.normalized,f=new u.constructor(c.length*h);let m=0,S=0;for(let y=0,g=c.length;y<g;y++){l.isInterleavedBufferAttribute?m=c[y]*l.data.stride+l.offset:m=c[y]*h;for(let d=0;d<h;d++)f[S++]=u[m++]}return new Si(f,h,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new V,TE=new V,wE=new ke;class or{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Au.subVectors(i,n).cross(TE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Au),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wE.getNormalMatrix(e),r=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let AE=0;class sa extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Ba,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cv,this.blendDst=uv,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=au,this.stencilZFail=au,this.stencilZPass=au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new or().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new V,Nu=new V,Wo=new V,Xo=new V;class Nh{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),Xo.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wo),l=Xo.dot(this.direction),c=-Xo.dot(Wo),u=Xo.lengthSq(),h=Math.abs(1-a*a);let p,f,m,S;if(h>0)if(p=a*c-l,f=a*l-c,S=s*h,p>=0)if(f>=-S)if(f<=S){const y=1/h;p*=y,f*=y,m=p*(p+a*f+2*l)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f<=-S?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=S?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Nu).addScaledVector(Wo,f),m}intersectSphere(e,n){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,l=this.direction,c=l.x,u=l.y,h=l.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,S=n.x-a.x,y=n.y-a.y,g=n.z-a.z,d=i.x-a.x,v=i.y-a.y,T=i.z-a.z,E=Math.abs(c),w=Math.abs(u),A=Math.abs(h);let R,_,N,b,U,F,k,I,X,Y,K,O;if(E>=w&&E>=A?(N=c,F=p,X=S,O=d,c>=0?(R=u,_=h,b=f,U=m,k=y,I=g,Y=v,K=T):(R=h,_=u,b=m,U=f,k=g,I=y,Y=T,K=v)):w>=A?(N=u,F=f,X=y,O=v,u>=0?(R=h,_=c,b=m,U=p,k=g,I=S,Y=T,K=d):(R=c,_=h,b=p,U=m,k=S,I=g,Y=d,K=T)):(N=h,F=m,X=g,O=T,h>=0?(R=c,_=u,b=p,U=f,k=S,I=y,Y=d,K=v):(R=u,_=c,b=f,U=p,k=y,I=S,Y=v,K=d)),N===0)return null;const z=R/N,H=_/N,$=1/N,ge=b-z*F,Me=U-H*F,Ze=k-z*X,De=I-H*X,Ge=Y-z*O,J=K-H*O,ne=Ge*De-J*Ze,he=ge*J-Me*Ge,Ie=Ze*Me-De*ge;if(r){if(ne<0||he<0||Ie<0)return null}else if((ne<0||he<0||Ie<0)&&(ne>0||he>0||Ie>0))return null;const Ee=ne+he+Ie;if(Ee===0)return null;const je=$*(ne*F+he*X+Ie*O);return(Ee>0?je<0:je>0)?null:this.at(je/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rh extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dm=new Nt,Ir=new Nh,Yo=new Tc,fm=new V,qo=new V,Ko=new V,Zo=new V,Ru=new V,Jo=new V,hm=new V,$o=new V;class ze extends jt{constructor(e=new Rn,n=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Jo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],p=s[c];h!==0&&(Ru.fromBufferAttribute(p,e),a?Jo.addScaledVector(Ru,h):Jo.addScaledVector(Ru.sub(n),h))}n.add(Jo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Yo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Yo,fm)===null||Ir.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let S=0,y=f.length;S<y;S++){const g=f[S],d=a[g.materialIndex],v=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,w=T;E<w;E+=3){const A=l.getX(E),R=l.getX(E+1),_=l.getX(E+2);r=Qo(this,d,e,i,u,h,p,A,R,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=S,d=y;g<d;g+=3){const v=l.getX(g),T=l.getX(g+1),E=l.getX(g+2);r=Qo(this,a,e,i,u,h,p,v,T,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,y=f.length;S<y;S++){const g=f[S],d=a[g.materialIndex],v=Math.max(g.start,m.start),T=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,w=T;E<w;E+=3){const A=E,R=E+1,_=E+2;r=Qo(this,d,e,i,u,h,p,A,R,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=S,d=y;g<d;g+=3){const v=g,T=g+1,E=g+2;r=Qo(this,a,e,i,u,h,p,v,T,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function NE(t,e,n,i,r,s,a,l){let c;if(e.side===Nn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Zr,l),c===null)return null;$o.copy(l),$o.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($o);return u<n.near||u>n.far?null:{distance:u,point:$o.clone(),object:t}}function Qo(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,qo),t.getVertexPosition(c,Ko),t.getVertexPosition(u,Zo);const h=NE(t,e,n,i,qo,Ko,Zo,hm);if(h){const p=new V;ti.getBarycoord(hm,qo,Ko,Zo,p),r&&(h.uv=ti.getInterpolatedAttribute(r,l,c,u,p,new $e)),s&&(h.uv1=ti.getInterpolatedAttribute(s,l,c,u,p,new $e)),a&&(h.normal=ti.getInterpolatedAttribute(a,l,c,u,p,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new V,materialIndex:0};ti.getNormal(qo,Ko,Zo,f.normal),h.face=f,h.barycoord=p}return h}class RE extends cn{constructor(e=null,n=1,i=1,r,s,a,l,c,u=Jt,h=Jt,p,f){super(null,a,l,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new Tc,CE=new $e(.5,.5),el=new V;class Ch{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,a=new or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],S=s[8],y=s[9],g=s[10],d=s[11],v=s[12],T=s[13],E=s[14],w=s[15];if(r[0].setComponents(u-a,m-h,d-S,w-v).normalize(),r[1].setComponents(u+a,m+h,d+S,w+v).normalize(),r[2].setComponents(u+l,m+p,d+y,w+T).normalize(),r[3].setComponents(u-l,m-p,d-y,w-T).normalize(),i)r[4].setComponents(c,f,g,E).normalize(),r[5].setComponents(u-c,m-f,d-g,w-E).normalize();else if(r[4].setComponents(u-c,m-f,d-g,w-E).normalize(),n===gi)r[5].setComponents(u+c,m+f,d+g,w+E).normalize();else if(n===oo)r[5].setComponents(c,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=CE.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lv extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new Nt,gf=new Nh,tl=new Tc,nl=new V;class bE extends jt{constructor(e=new Rn,n=new Lv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;pm.copy(r).invert(),gf.copy(e.ray).applyMatrix4(pm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let S=f,y=m;S<y;S++){const g=u.getX(S);nl.fromBufferAttribute(p,g),mm(nl,g,c,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let S=f,y=m;S<y;S++)nl.fromBufferAttribute(p,S),mm(nl,S,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function mm(t,e,n,i,r,s,a){const l=gf.distanceSqToPoint(t);if(l<n){const c=new V;gf.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pv extends cn{constructor(e=[],n=Jr,i,r,s,a,l,c,u,h){super(e,n,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vs extends cn{constructor(e,n,i,r,s,a,l,c,u){super(e,n,i,r,s,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends cn{constructor(e,n,i=Ei,r,s,a,l=Jt,c=Jt,u,h=Wi,p=1){if(h!==Wi&&h!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class LE extends lo{constructor(e,n=Ei,i=Jr,r,s,a=Jt,l=Jt,c,u=Wi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Iv extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wt extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;S("z","y","x",-1,-1,i,n,e,a,s,0),S("z","y","x",1,-1,i,n,-e,a,s,1),S("x","z","y",1,1,e,i,n,r,a,2),S("x","z","y",1,-1,e,i,-n,r,a,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(p,2));function S(y,g,d,v,T,E,w,A,R,_,N){const b=E/R,U=w/_,F=E/2,k=w/2,I=A/2,X=R+1,Y=_+1;let K=0,O=0;const z=new V;for(let H=0;H<Y;H++){const $=H*U-k;for(let ge=0;ge<X;ge++){const Me=ge*b-F;z[y]=Me*v,z[g]=$*T,z[d]=I,u.push(z.x,z.y,z.z),z[y]=0,z[g]=0,z[d]=A>0?1:-1,h.push(z.x,z.y,z.z),p.push(ge/R),p.push(1-H/_),K+=1}}for(let H=0;H<_;H++)for(let $=0;$<R;$++){const ge=f+$+X*H,Me=f+$+X*(H+1),Ze=f+($+1)+X*(H+1),De=f+($+1)+X*H;c.push(ge,Me,De),c.push(Me,Ze,De),O+=6}l.addGroup(m,O,N),m+=O,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pi extends Rn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let S=0;const y=[],g=i/2;let d=0;v(),a===!1&&(e>0&&T(!0),n>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(m,2));function v(){const E=new V,w=new V;let A=0;const R=(n-e)/i;for(let _=0;_<=s;_++){const N=[],b=_/s,U=b*(n-e)+e;for(let F=0;F<=r;F++){const k=F/r,I=k*c+l,X=Math.sin(I),Y=Math.cos(I);w.x=U*X,w.y=-b*i+g,w.z=U*Y,p.push(w.x,w.y,w.z),E.set(X,R,Y).normalize(),f.push(E.x,E.y,E.z),m.push(k,1-b),N.push(S++)}y.push(N)}for(let _=0;_<r;_++)for(let N=0;N<s;N++){const b=y[N][_],U=y[N+1][_],F=y[N+1][_+1],k=y[N][_+1];(e>0||N!==0)&&(h.push(b,U,k),A+=3),(n>0||N!==s-1)&&(h.push(U,F,k),A+=3)}u.addGroup(d,A,0),d+=A}function T(E){const w=S,A=new $e,R=new V;let _=0;const N=E===!0?e:n,b=E===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,g*b,0),f.push(0,b,0),m.push(.5,.5),S++;const U=S;for(let F=0;F<=r;F++){const I=F/r*c+l,X=Math.cos(I),Y=Math.sin(I);R.x=N*Y,R.y=g*b,R.z=N*X,p.push(R.x,R.y,R.z),f.push(0,b,0),A.x=X*.5+.5,A.y=Y*.5*b+.5,m.push(A.x,A.y),S++}for(let F=0;F<r;F++){const k=w+F,I=U+F;E===!0?h.push(I,I+1,k):h.push(I+1,I,k),_+=3}u.addGroup(d,_,E===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,p=e/l,f=n/c,m=[],S=[],y=[],g=[];for(let d=0;d<h;d++){const v=d*f-a;for(let T=0;T<u;T++){const E=T*p-s;S.push(E,-v,0),y.push(0,0,1),g.push(T/l),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<l;v++){const T=v+u*d,E=v+u*(d+1),w=v+1+u*(d+1),A=v+1+u*d;m.push(T,E,A),m.push(E,w,A)}this.setIndex(m),this.setAttribute("position",new qt(S,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class tc extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const h=[],p=new V,f=new V,m=[],S=[],y=[],g=[];for(let d=0;d<=i;d++){const v=[],T=d/i,E=a+T*l,w=e*Math.cos(E),A=Math.sqrt(e*e-w*w);let R=0;d===0&&a===0?R=.5/n:d===i&&c===Math.PI&&(R=-.5/n);for(let _=0;_<=n;_++){const N=_/n,b=r+N*s;p.x=-A*Math.cos(b),p.y=w,p.z=A*Math.sin(b),S.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),g.push(N+R,1-T),v.push(u++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const T=h[d][v+1],E=h[d][v],w=h[d+1][v],A=h[d+1][v+1];(d!==0||a>0)&&m.push(T,E,A),(d!==i-1||c<Math.PI)&&m.push(E,w,A)}this.setIndex(m),this.setAttribute("position",new qt(S,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bh extends Rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],h=[],p=[],f=new V,m=new V,S=new V;for(let y=0;y<=i;y++){const g=a+y/i*l;for(let d=0;d<=r;d++){const v=d/r*s;m.x=(e+n*Math.cos(g))*Math.cos(v),m.y=(e+n*Math.cos(g))*Math.sin(v),m.z=n*Math.sin(g),u.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),S.subVectors(m,f).normalize(),h.push(S.x,S.y,S.z),p.push(d/r),p.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=r;g++){const d=(r+1)*y+g-1,v=(r+1)*(y-1)+g-1,T=(r+1)*(y-1)+g,E=(r+1)*y+g;c.push(d,v,E),c.push(v,T,E)}this.setIndex(c),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(gm(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(gm(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function gm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function PE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const IE={clone:ea,merge:pn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=PE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OE extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FE extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wc extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cu=new Nt,vm=new V,xm=new V;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(vm),xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===oo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),n.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const il=new V,rl=new ra,li=new V;class Uv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(il,rl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,li.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(il,rl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new V,_m=new $e,Sm=new $e;class yn extends Uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ec*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,_m,Sm),n.subVectors(Sm,_m)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ou*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class BE extends Lh{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=ec*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class zE extends wc{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new BE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class jE extends Lh{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class VE extends wc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ph extends Uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GE extends Lh{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Em extends wc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new GE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class HE extends wc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const xs=-90,_s=1;class WE extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(xs,_s,e,n);r.layers=this.layers,this.add(r);const s=new yn(xs,_s,e,n);s.layers=this.layers,this.add(s);const a=new yn(xs,_s,e,n);a.layers=this.layers,this.add(a);const l=new yn(xs,_s,e,n);l.layers=this.layers,this.add(l);const c=new yn(xs,_s,e,n);c.layers=this.layers,this.add(c);const u=new yn(xs,_s,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class XE extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ym=new Nt;class YE{constructor(e,n,i=0,r=1/0){this.ray=new Nh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):at("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ym),this}intersectObject(e,n=!0,i=[]){return vf(e,this,i,n),i.sort(Mm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vf(e[r],this,i,n);return i.sort(Mm),i}}function Mm(t,e){return t.distance-e.distance}function vf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,l=s.length;a<l;a++)vf(s[a],e,n,!0)}}class qE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Fh=class Fh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Fh.prototype.isMatrix2=!0;let Tm=Fh;function wm(t,e,n,i){const r=KE(i);switch(n){case Mv:return t*e;case wv:return t*e/r.components*r.byteLength;case _h:return t*e/r.components*r.byteLength;case $r:return t*e*2/r.components*r.byteLength;case Sh:return t*e*2/r.components*r.byteLength;case Tv:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case Eh:return t*e*4/r.components*r.byteLength;case Sl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Gd:case Wd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hd:case Kl:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cf:case uf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ff:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zl:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KE(t){switch(t){case In:case _v:return{byteLength:1,components:1};case so:case Sv:case yi:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case Ei:case gh:case mi:return{byteLength:4,components:1};case Ev:case yv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZE(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,l),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,S)=>m.start-S.start);let f=0;for(let m=1;m<p.length;m++){const S=p[f],y=p[m];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,S=p.length;m<S;m++){const y=p[m];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,By=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ky=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:JE,alphahash_pars_fragment:$E,alphamap_fragment:QE,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:ry,batching_pars_vertex:sy,batching_vertex:ay,begin_vertex:oy,beginnormal_vertex:ly,bsdfs:cy,iridescence_fragment:uy,bumpmap_pars_fragment:dy,clipping_planes_fragment:fy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:vy,color_pars_vertex:xy,color_vertex:_y,common:Sy,cube_uv_reflection_fragment:Ey,defaultnormal_vertex:yy,displacementmap_pars_vertex:My,displacementmap_vertex:Ty,emissivemap_fragment:wy,emissivemap_pars_fragment:Ay,colorspace_fragment:Ny,colorspace_pars_fragment:Ry,envmap_fragment:Cy,envmap_common_pars_fragment:by,envmap_pars_fragment:Ly,envmap_pars_vertex:Py,envmap_physical_pars_fragment:Gy,envmap_vertex:Iy,fog_vertex:Dy,fog_pars_vertex:Uy,fog_fragment:Oy,fog_pars_fragment:Fy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:By,lights_lambert_fragment:zy,lights_lambert_pars_fragment:jy,lights_pars_begin:Vy,lights_toon_fragment:Hy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:Yy,lights_physical_fragment:qy,lights_physical_pars_fragment:Ky,lights_fragment_begin:Zy,lights_fragment_maps:Jy,lights_fragment_end:$y,lightprobes_pars_fragment:Qy,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:aM,map_particle_pars_fragment:oM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:dM,morphnormal_vertex:fM,morphtarget_pars_vertex:hM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:vM,normal_pars_vertex:xM,normal_vertex:_M,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:TM,opaque_fragment:wM,packing:AM,premultiplied_alpha_fragment:NM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:bM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:DM,shadowmap_vertex:UM,shadowmask_pars_fragment:OM,skinbase_vertex:FM,skinning_pars_vertex:kM,skinning_vertex:BM,skinnormal_vertex:zM,specularmap_fragment:jM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:HM,transmission_fragment:WM,transmission_pars_fragment:XM,uv_pars_fragment:YM,uv_pars_vertex:qM,uv_vertex:KM,worldpos_vertex:ZM,background_vert:JM,background_frag:$M,backgroundCube_vert:QM,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:rT,distance_vert:sT,distance_frag:aT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:dT,meshbasic_frag:fT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:_T,meshphong_frag:ST,meshphysical_vert:ET,meshphysical_frag:yT,meshtoon_vert:MT,meshtoon_frag:TT,points_vert:wT,points_frag:AT,shadow_vert:NT,shadow_frag:RT,sprite_vert:CT,sprite_frag:bT},ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},fi={basic:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:pn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:pn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:pn([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:pn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:pn([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:pn([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:pn([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:pn([ve.lights,ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fi.physical={uniforms:pn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const sl={r:0,b:0,g:0},LT=new Nt,Fv=new ke;Fv.set(-1,0,0,0,1,0,0,0,1);function PT(t,e,n,i,r,s){const a=new tt(0);let l=r===!0?0:1,c,u,h=null,p=0,f=null;function m(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const E=v.backgroundBlurriness>0;T=e.get(T,E)}return T}function S(v){let T=!1;const E=m(v);E===null?g(a,l):E&&E.isColor&&(g(E,1),T=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(v,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===Mc)?(u===void 0&&(u=new ze(new wt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:ea(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Fv),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==mt,(h!==E||p!==E.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,p=E.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ze(new Di(2,2),new Mi({name:"BackgroundMaterial",uniforms:ea(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,T){v.getRGB(sl,Dv(t)),n.buffers.color.setClear(sl.r,sl.g,sl.b,T,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:S,addToRenderList:y,dispose:d}}function IT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(U,F,k,I,X){let Y=!1;const K=p(U,I,k,F);s!==K&&(s=K,u(s.object)),Y=m(U,I,k,X),Y&&S(U,I,k,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(U,F,k,I),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function h(U){return t.deleteVertexArray(U)}function p(U,F,k,I){const X=I.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const K=U.isInstancedMesh===!0?U.id:0;let O=Y[K];O===void 0&&(O={},Y[K]=O);let z=O[k.id];z===void 0&&(z={},O[k.id]=z);let H=z[X];return H===void 0&&(H=f(c()),z[X]=H),H}function f(U){const F=[],k=[],I=[];for(let X=0;X<n;X++)F[X]=0,k[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:U,attributes:{},index:null}}function m(U,F,k,I){const X=s.attributes,Y=F.attributes;let K=0;const O=k.getAttributes();for(const z in O)if(O[z].location>=0){const $=X[z];let ge=Y[z];if(ge===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),$===void 0||$.attribute!==ge||ge&&$.data!==ge.data)return!0;K++}return s.attributesNum!==K||s.index!==I}function S(U,F,k,I){const X={},Y=F.attributes;let K=0;const O=k.getAttributes();for(const z in O)if(O[z].location>=0){let $=Y[z];$===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const ge={};ge.attribute=$,$&&$.data&&(ge.data=$.data),X[z]=ge,K++}s.attributes=X,s.attributesNum=K,s.index=I}function y(){const U=s.newAttributes;for(let F=0,k=U.length;F<k;F++)U[F]=0}function g(U){d(U,0)}function d(U,F){const k=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;k[U]=1,I[U]===0&&(t.enableVertexAttribArray(U),I[U]=1),X[U]!==F&&(t.vertexAttribDivisor(U,F),X[U]=F)}function v(){const U=s.newAttributes,F=s.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==U[k]&&(t.disableVertexAttribArray(k),F[k]=0)}function T(U,F,k,I,X,Y,K){K===!0?t.vertexAttribIPointer(U,F,k,X,Y):t.vertexAttribPointer(U,F,k,I,X,Y)}function E(U,F,k,I){y();const X=I.attributes,Y=k.getAttributes(),K=F.defaultAttributeValues;for(const O in Y){const z=Y[O];if(z.location>=0){let H=X[O];if(H===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const $=H.normalized,ge=H.itemSize,Me=e.get(H);if(Me===void 0)continue;const Ze=Me.buffer,De=Me.type,Ge=Me.bytesPerElement,J=De===t.INT||De===t.UNSIGNED_INT||H.gpuType===gh;if(H.isInterleavedBufferAttribute){const ne=H.data,he=ne.stride,Ie=H.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)d(z.location+Ee,ne.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)g(z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Ee=0;Ee<z.locationSize;Ee++)T(z.location+Ee,ge/z.locationSize,De,$,he*Ge,(Ie+ge/z.locationSize*Ee)*Ge,J)}else{if(H.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)d(z.location+ne,H.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ne=0;ne<z.locationSize;ne++)g(z.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let ne=0;ne<z.locationSize;ne++)T(z.location+ne,ge/z.locationSize,De,$,ge*Ge,ge/z.locationSize*ne*Ge,J)}}else if(K!==void 0){const $=K[O];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(z.location,$);break;case 3:t.vertexAttrib3fv(z.location,$);break;case 4:t.vertexAttrib4fv(z.location,$);break;default:t.vertexAttrib1fv(z.location,$)}}}}v()}function w(){N();for(const U in i){const F=i[U];for(const k in F){const I=F[k];for(const X in I){const Y=I[X];for(const K in Y)h(Y[K].object),delete Y[K];delete I[X]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const k in F){const I=F[k];for(const X in I){const Y=I[X];for(const K in Y)h(Y[K].object),delete Y[K];delete I[X]}}delete i[U.id]}function R(U){for(const F in i){const k=i[F];for(const I in k){const X=k[I];if(X[U.id]===void 0)continue;const Y=X[U.id];for(const K in Y)h(Y[K].object),delete Y[K];delete X[U.id]}}}function _(U){for(const F in i){const k=i[F],I=U.isInstancedMesh===!0?U.id:0,X=k[I];if(X!==void 0){for(const Y in X){const K=X[Y];for(const O in K)h(K[O].object),delete K[O];delete X[Y]}delete k[I],Object.keys(k).length===0&&delete i[F]}}}function N(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function DT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function UT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ni&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const _=R===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&R!==mi&&!_&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Oe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:E,maxSamples:w,samples:A}}function OT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new or,l=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const S=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||S===null||S.length===0||s&&!g)s?h(null):u();else{const v=s?0:i,T=v*4;let E=d.clippingState||null;c.value=E,E=h(S,f,T,m);for(let w=0;w!==T;++w)E[w]=n[w];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,S){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=c.value,S!==!0||g===null){const d=m+y*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let T=0,E=m;T!==y;++T,E+=4)a.copy(p[T]).applyMatrix4(v,l),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Ds=4,FT=6,kT=20,BT=256,Ea=new Ph,Am=new tt;let bu=null,Lu=0,Pu=0,Iu=!1;const zT=new V,Ur=new V;class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=zT}=s;bu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Lu,Pu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:yi,format:ni,colorSpace:Jl,depthBuffer:!1},r=Rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jT(s)),this._blurMaterial=GT(s,e,n),this._ggxMaterial=VT(s,e,n)}return r}_compileMaterial(e){const n=new ze(new Rn,e);this._renderer.compile(n,Ea)}_sceneToCubeUV(e,n,i,r,s){const c=new yn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Am),p.toneMapping=_i,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new wt,new Rh({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(Am),d=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,u[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):E===1?(c.up.set(0,0,u[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,u[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const w=this._cubeSize;Ss(r,E*w,T>2?w:0,w,w),p.setRenderTarget(r),d&&p.render(y,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Ss(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=u*1.25,m=p*f,{_lodMax:S}=this,y=this._sizeLods[i],g=3*y*(i>S-Ds?i-S+Ds:0),d=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=S-n,Ss(s,g,d,3*y,2*y),r.setRenderTarget(s),r.render(l,Ea),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=S-i,Ss(e,g,d,3*y,2*y),r.setRenderTarget(e),r.render(l,Ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;const u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-Ds?r-this._lodMax+Ds:0),f=4*(this._cubeSize-h);Ss(n,p,f,3*h,2*h),a.setRenderTarget(n),a.render(c,Ea)}}function jT(t){const e=[],n=[];let i=t;const r=t-Ds+1+FT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,f=6,m=3,S=new Float32Array(m*f*p),y=new Float32Array(m*f*p);for(let d=0;d<p;d++){const v=d%3*2/3-1,T=d>2?0:-1,E=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];S.set(E,m*f*d);for(let w=0;w<f;w++){const A=h[w*2]*2-1,R=h[w*2+1]*2-1;d===0?Ur.set(1,R,A):d===1?Ur.set(-A,1,-R):d===2?Ur.set(-A,R,1):d===3?Ur.set(-1,R,-A):d===4?Ur.set(-A,-1,R):Ur.set(A,R,-1),Ur.toArray(y,(d*f+w)*m)}}const g=new Rn;g.setAttribute("position",new Si(S,m)),g.setAttribute("outputDirection",new Si(y,m)),n.push(new ze(g,null)),i>Ds&&i--}return{lodMeshes:n,sizeLods:e}}function Rm(t,e,n){const i=new si(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function VT(t,e,n){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function GT(t,e,n){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Cm(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function bm(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kv extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wt(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Bi});s.uniforms.tEquirect.value=n;const a=new ze(r,s),l=n.minFilter;return n.minFilter===jr&&(n.minFilter=ln),new WE(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function HT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===iu||m===ru)if(e.has(f)){const S=e.get(f).texture;return l(S,f.mapping)}else{const S=f.image;if(S&&S.height>0){const y=new kv(S.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",u),l(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,S=m===iu||m===ru,y=m===Jr||m===Qs;if(S||y){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Nm(t)),g=S?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return S&&v&&v.height>0||y&&v&&c(v)?(i===null&&(i=new Nm(t)),g=S?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function l(f,m){return m===iu?f.mapping=Jr:m===ru&&(f.mapping=Qs),f}function c(f){let m=0;const S=6;for(let y=0;y<S;y++)f[y]!==void 0&&m++;return m===S}function u(f){const m=f.target;m.removeEventListener("dispose",u);const S=e.get(m);S!==void 0&&(e.delete(m),S.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const S=n.get(m);S!==void 0&&(n.delete(m),S.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function WT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gs("WebGLRenderer: "+i+" extension not supported."),r}}}function XT(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,S=p.attributes.position;let y=0;if(S===void 0)return;if(m!==null){const v=m.array;y=m.version;for(let T=0,E=v.length;T<E;T+=3){const w=v[T+0],A=v[T+1],R=v[T+2];f.push(w,A,A,R,R,w)}}else{const v=S.array;y=S.version;for(let T=0,E=v.length/3-1;T<E;T+=3){const w=T+0,A=T+1,R=T+2;f.push(w,A,A,R,R,w)}}const g=new(S.count>=65535?bv:Cv)(f,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function YT(t,e,n){let i;function r(p){i=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let y=0;for(let g=0;g<m;g++)y+=f[g];n.update(y,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function qT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KT(t,e,n){const i=new WeakMap,r=new bt;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let N=function(){R.dispose(),i.delete(l),l.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const m=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let T=0;m===!0&&(T=1),S===!0&&(T=2),y===!0&&(T=3);let E=l.attributes.position.count*T,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*p),R=new Nv(A,E,w,p);R.type=mi,R.needsUpdate=!0;const _=T*4;for(let b=0;b<p;b++){const U=g[b],F=d[b],k=v[b],I=E*w*4*b;for(let X=0;X<U.count;X++){const Y=X*_;m===!0&&(r.fromBufferAttribute(U,X),A[I+Y+0]=r.x,A[I+Y+1]=r.y,A[I+Y+2]=r.z,A[I+Y+3]=0),S===!0&&(r.fromBufferAttribute(F,X),A[I+Y+4]=r.x,A[I+Y+5]=r.y,A[I+Y+6]=r.z,A[I+Y+7]=0),y===!0&&(r.fromBufferAttribute(k,X),A[I+Y+8]=r.x,A[I+Y+9]=r.y,A[I+Y+10]=r.z,A[I+Y+11]=k.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new $e(E,w)},i.set(l,f),l.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let y=0;y<u.length;y++)m+=u[y];const S=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ZT(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function l(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const JT={[fv]:"LINEAR_TONE_MAPPING",[hv]:"REINHARD_TONE_MAPPING",[pv]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[gv]:"AGX_TONE_MAPPING",[vv]:"NEUTRAL_TONE_MAPPING",[mv]:"CUSTOM_TONE_MAPPING"};function $T(t,e,n,i,r,s){const a=new si(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const u=new Rn;u.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qt([0,2,0,0,2,0],2));const h=new OE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ze(u,h),f=new Ph(-1,1,1,-1,0,1);let m=null,S=null,y=!1,g,d=null,v=[],T=!1;this.setSize=function(E,w){a.setSize(E,w),l!==null&&l.setSize(E,w),c!==null&&c.setSize(E,w);for(let A=0;A<v.length;A++){const R=v[A];R.setSize&&R.setSize(E,w)}},this.setEffects=function(E){v=E,T=v.length>0&&v[0].isRenderPass===!0;const w=a.width,A=a.height;v.length>0&&l===null&&(l=new si(w,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new si(w,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){const _=v[R];_.setSize&&_.setSize(w,A)}},this.begin=function(E,w){if(y||E.toneMapping===_i&&v.length===0)return!1;if(d=w,w!==null){const A=w.width,R=w.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return T===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=_i,!0},this.hasRenderPass=function(){return T},this.end=function(E,w){E.toneMapping=g,y=!0;let A=a,R=l;for(let _=0;_<v.length;_++){const N=v[_];N.enabled!==!1&&(N.render(E,R,A,w),N.needsSwap!==!1&&(A=R,R=R===l?c:l))}if(m!==E.outputColorSpace||S!==E.toneMapping){m=E.outputColorSpace,S=E.toneMapping,h.defines={},nt.getTransfer(m)===mt&&(h.defines.SRGB_TRANSFER="");const _=JT[S];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(d),E.render(p,f),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const Bv=new cn,xf=new lo(1,1),zv=new Nv,jv=new fE,Vv=new Pv,Lm=[],Pm=[],Im=new Float32Array(16),Dm=new Float32Array(9),Um=new Float32Array(4);function aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nc(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function e1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function i1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Um.set(i),t.uniformMatrix2fv(this.addr,!1,Um),Gt(n,i)}}function r1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Gt(n,i)}}function s1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Gt(n,i)}}function a1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function o1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function u1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function p1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xf.compareFunction=n.isReversedDepthBuffer()?Mh:yh,s=xf):s=Bv,n.setTexture2D(e||s,r)}function m1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jv,r)}function g1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vv,r)}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zv,r)}function x1(t){switch(t){case 5126:return QT;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return v1}}function _1(t,e){t.uniform1fv(this.addr,e)}function S1(t,e){const n=aa(e,this.size,2);t.uniform2fv(this.addr,n)}function E1(t,e){const n=aa(e,this.size,3);t.uniform3fv(this.addr,n)}function y1(t,e){const n=aa(e,this.size,4);t.uniform4fv(this.addr,n)}function M1(t,e){const n=aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function T1(t,e){const n=aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function w1(t,e){const n=aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function A1(t,e){t.uniform1iv(this.addr,e)}function N1(t,e){t.uniform2iv(this.addr,e)}function R1(t,e){t.uniform3iv(this.addr,e)}function C1(t,e){t.uniform4iv(this.addr,e)}function b1(t,e){t.uniform1uiv(this.addr,e)}function L1(t,e){t.uniform2uiv(this.addr,e)}function P1(t,e){t.uniform3uiv(this.addr,e)}function I1(t,e){t.uniform4uiv(this.addr,e)}function D1(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=xf:a=Bv;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function U1(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||jv,s[a])}function O1(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Vv,s[a])}function F1(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||zv,s[a])}function k1(t){switch(t){case 5126:return _1;case 35664:return S1;case 35665:return E1;case 35666:return y1;case 35674:return M1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return N1;case 35668:case 35672:return R1;case 35669:case 35673:return C1;case 5125:return b1;case 36294:return L1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return F1}}class B1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=x1(n.type)}}class z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k1(n.type)}}class j1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Om(t,e){t.seq.push(e),t.map[e.id]=e}function V1(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),a=Du.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Om(n,u===void 0?new B1(l,t,e):new z1(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new j1(l),Om(n,p)),n=p}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);V1(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const G1=37297;let H1=0;function W1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const km=new ke;function X1(t){nt._getMatrix(km,nt.workingColorSpace,t);const e=`mat3( ${km.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+W1(t.getShaderSource(e),l)}else return s}function Y1(t,e){const n=X1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[fv]:"Linear",[hv]:"Reinhard",[pv]:"Cineon",[mh]:"ACESFilmic",[gv]:"AgX",[vv]:"Neutral",[mv]:"Custom"};function K1(t,e){const n=q1[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const al=new V;function Z1(){nt.getLuminanceCoefficients(al);const t=al.x.toFixed(4),e=al.y.toFixed(4),n=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function $1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Ca(t){return t!==""}function zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(ew,nw)}const tw=new Map;function nw(t,e){let n=qe[e];if(n===void 0){const i=tw.get(e);if(i!==void 0)n=qe[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _f(n)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(t){return t.replace(iw,rw)}function rw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sw={[_l]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function aw(t){return sw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ow={[Jr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function lw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ow[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const cw={[Qs]:"ENVMAP_MODE_REFRACTION"};function uw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":cw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dw={[dv]:"ENVMAP_BLENDING_MULTIPLY",[GS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function fw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":dw[t.combine]||"ENVMAP_BLENDING_NONE"}function hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=aw(n),u=lw(n),h=uw(n),p=fw(n),f=hw(n),m=J1(n),S=$1(s),y=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ca).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ca).join(`
`),d.length>0&&(d+=`
`)):(g=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),d=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?qe.tonemapping_pars_fragment:"",n.toneMapping!==_i?K1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Y1("linearToOutputTexel",n.outputColorSpace),Z1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),a=_f(a),a=zm(a,n),a=jm(a,n),l=_f(l),l=zm(l,n),l=jm(l,n),a=Vm(a),l=Vm(l),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=v+g+a,E=v+d+l,w=Fm(r,r.VERTEX_SHADER,T),A=Fm(r,r.FRAGMENT_SHADER,E);r.attachShader(y,w),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(U){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(w)||"",I=r.getShaderInfoLog(A)||"",X=F.trim(),Y=k.trim(),K=I.trim();let O=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,A);else{const H=Bm(r,w,"vertex"),$=Bm(r,A,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+H+`
`+$)}else X!==""?Oe("WebGLProgram: Program Info Log:",X):(Y===""||K==="")&&(z=!1);z&&(U.diagnostics={runnable:O,programLog:X,vertexShader:{log:Y,prefix:g},fragmentShader:{log:K,prefix:d}})}r.deleteShader(w),r.deleteShader(A),_=new Tl(r,y),N=Q1(r,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let N;this.getAttributes=function(){return N===void 0&&R(this),N};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,G1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}let mw=0;class gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vw(e),n.set(e,i)),i}}class vw{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}}function xw(t){return t===$r||t===Kl||t===Zl}function _w(t,e,n,i,r,s){const a=new wh,l=new gw,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,N,b,U,F,k){const I=U.fog,X=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||Y,K),z=O&&O.mapping===Mc?O.image.height:null,H=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=$!==void 0?$.length:0;let Me=0;X.morphAttributes.position!==void 0&&(Me=1),X.morphAttributes.normal!==void 0&&(Me=2),X.morphAttributes.color!==void 0&&(Me=3);let Ze,De,Ge,J;if(H){const pt=fi[H];Ze=pt.vertexShader,De=pt.fragmentShader}else{Ze=_.vertexShader,De=_.fragmentShader;const pt=l.getVertexShaderStage(_),ct=l.getFragmentShaderStage(_);l.update(_,pt,ct),Ge=pt.id,J=ct.id}const ne=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Ee=F.isBatchedMesh===!0,je=!!_.map,Rt=!!_.matcap,Ve=!!O,rt=!!_.aoMap,ht=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,Ut=!!_.displacementMap,en=!!_.emissiveMap,xt=!!_.metalnessMap,Et=!!_.roughnessMap,P=_.anisotropy>0,Ht=_.clearcoat>0,lt=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,B=_.sheen>0,W=_.transmission>0,Z=P&&!!_.anisotropyMap,se=Ht&&!!_.clearcoatMap,ce=Ht&&!!_.clearcoatNormalMap,Q=Ht&&!!_.clearcoatRoughnessMap,te=x&&!!_.iridescenceMap,ae=x&&!!_.iridescenceThicknessMap,Se=B&&!!_.sheenColorMap,oe=B&&!!_.sheenRoughnessMap,de=!!_.specularMap,Ne=!!_.specularColorMap,Le=!!_.specularIntensityMap,Fe=W&&!!_.transmissionMap,D=W&&!!_.thicknessMap,ue=!!_.gradientMap,ee=!!_.alphaMap,le=_.alphaTest>0,xe=!!_.alphaHash,ie=!!_.extensions;let Ce=_i;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=t.toneMapping);const Ae={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:Ze,fragmentShader:De,defines:_.defines,customVertexShaderID:Ge,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:Rt,envMap:Ve,envMapMode:Ve&&O.mapping,envMapCubeUVHeight:z,aoMap:rt,lightMap:ht,bumpMap:He,normalMap:Je,displacementMap:Ut,emissiveMap:en,normalMapObjectSpace:Je&&_.normalMapType===YS,normalMapTangentSpace:Je&&_.normalMapType===mf,packedNormalMap:Je&&_.normalMapType===mf&&xw(_.normalMap.format),metalnessMap:xt,roughnessMap:Et,anisotropy:P,anisotropyMap:Z,clearcoat:Ht,clearcoatMap:se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Q,dispersion:lt,retroreflection:C,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:ae,sheen:B,sheenColorMap:Se,sheenRoughnessMap:oe,specularMap:de,specularColorMap:Ne,specularIntensityMap:Le,transmission:W,transmissionMap:Fe,thicknessMap:D,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Ba&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:le,alphaHash:xe,combine:_.combine,mapUv:je&&S(_.map.channel),aoMapUv:rt&&S(_.aoMap.channel),lightMapUv:ht&&S(_.lightMap.channel),bumpMapUv:He&&S(_.bumpMap.channel),normalMapUv:Je&&S(_.normalMap.channel),displacementMapUv:Ut&&S(_.displacementMap.channel),emissiveMapUv:en&&S(_.emissiveMap.channel),metalnessMapUv:xt&&S(_.metalnessMap.channel),roughnessMapUv:Et&&S(_.roughnessMap.channel),anisotropyMapUv:Z&&S(_.anisotropyMap.channel),clearcoatMapUv:se&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:oe&&S(_.sheenRoughnessMap.channel),specularMapUv:de&&S(_.specularMap.channel),specularColorMapUv:Ne&&S(_.specularColorMap.channel),specularIntensityMapUv:Le&&S(_.specularIntensityMap.channel),transmissionMapUv:Fe&&S(_.transmissionMap.channel),thicknessMapUv:D&&S(_.thicknessMap.channel),alphaMapUv:ee&&S(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Je||P),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(je||ee),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:he,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Me,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ce,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:en&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pi,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(_){const N=[];if(_.shaderID?N.push(_.shaderID):(N.push(_.customVertexShaderID),N.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)N.push(b),N.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(d(N,_),v(N,_),N.push(t.outputColorSpace)),N.push(_.customProgramCacheKey),N.join()}function d(_,N){_.push(N.precision),_.push(N.outputColorSpace),_.push(N.envMapMode),_.push(N.envMapCubeUVHeight),_.push(N.mapUv),_.push(N.alphaMapUv),_.push(N.lightMapUv),_.push(N.aoMapUv),_.push(N.bumpMapUv),_.push(N.normalMapUv),_.push(N.displacementMapUv),_.push(N.emissiveMapUv),_.push(N.metalnessMapUv),_.push(N.roughnessMapUv),_.push(N.anisotropyMapUv),_.push(N.clearcoatMapUv),_.push(N.clearcoatNormalMapUv),_.push(N.clearcoatRoughnessMapUv),_.push(N.iridescenceMapUv),_.push(N.iridescenceThicknessMapUv),_.push(N.sheenColorMapUv),_.push(N.sheenRoughnessMapUv),_.push(N.specularMapUv),_.push(N.specularColorMapUv),_.push(N.specularIntensityMapUv),_.push(N.transmissionMapUv),_.push(N.thicknessMapUv),_.push(N.combine),_.push(N.fogExp2),_.push(N.sizeAttenuation),_.push(N.morphTargetsCount),_.push(N.morphAttributeCount),_.push(N.numSunLights),_.push(N.numDirLights),_.push(N.numPointLights),_.push(N.numSpotLights),_.push(N.numSpotLightMaps),_.push(N.numHemiLights),_.push(N.numRectAreaLights),_.push(N.numSunLightShadows),_.push(N.numDirLightShadows),_.push(N.numPointLightShadows),_.push(N.numSpotLightShadows),_.push(N.numSpotLightShadowsWithMaps),_.push(N.numLightProbes),_.push(N.shadowMapType),_.push(N.toneMapping),_.push(N.numClippingPlanes),_.push(N.numClipIntersection),_.push(N.depthPacking)}function v(_,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const N=m[_.type];let b;if(N){const U=fi[N];b=IE.clone(U.uniforms)}else b=_.uniforms;return b}function E(_,N){let b=h.get(N);return b!==void 0?++b.usedTimes:(b=new pw(t,N,_,r),u.push(b),h.set(N,b)),b}function w(_){if(--_.usedTimes===0){const N=u.indexOf(_);u[N]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){l.remove(_)}function R(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:R}}function Sw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Ew(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,S,y,g,d){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:S,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:d},t[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=S,v.materialVariant=a(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=g,v.group=d),e++,v}function c(f,m,S,y,g,d,v){v.reversedDepth===!0&&(g=-g);const T=l(f,m,S,y,g,d);S.transmission>0?i.push(T):S.transparent===!0?r.push(T):n.push(T)}function u(f,m,S,y,g,d){const v=l(f,m,S,y,g,d);S.transmission>0?i.unshift(v):S.transparent===!0?r.unshift(v):n.unshift(v)}function h(f,m){n.length>1&&n.sort(f||Ew),i.length>1&&i.sort(m||Hm),r.length>1&&r.sort(m||Hm)}function p(){for(let f=e,m=t.length;f<m;f++){const S=t[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function yw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Wm,t.set(i,[a])):r>=s.length?(a=new Wm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new tt};break;case"SpotLight":n={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ww=0;function Aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nw(t){const e=new Mw,n=Tw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Nt,a=new Nt;function l(u){let h=0,p=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,S=0,y=0,g=0,d=0,v=0,T=0,E=0,w=0,A=0,R=0,_=0,N=0,b=0;u.sort(Aw);for(let F=0,k=u.length;F<k;F++){const I=u[F],X=I.color,Y=I.intensity,K=I.distance;let O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$r?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*Y,p+=X.g*Y,f+=X.b*Y;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],Y);b++}else if(I.isSunLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,$=n.get(I);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[S]=$,i.sunShadowMap[S]=O;const ge=H.getViewportCount();for(let Me=0;Me<ge;Me++)i.sunShadowMatrix[y+Me]=H.getMatrix(Me),i.sunShadowCascade[y+Me]=H._cascadeData[Me];y+=ge,S++}i.sun[m]=z,m++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,$=n.get(I);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=z,g++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(X).multiplyScalar(Y),z.distance=K,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[v]=z;const H=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,H.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[v]=H.matrix,I.castShadow){const $=n.get(I);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=O,R++}v++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(X).multiplyScalar(Y),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=z,T++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const H=I.shadow,$=n.get(I);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,i.pointShadow[d]=$,i.pointShadowMap[d]=O,i.pointShadowMatrix[d]=I.shadow.matrix,A++}i.point[d]=z,d++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Y),z.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[E]=z,E++}}T>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const U=i.hash;(U.sunLength!==m||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==T||U.hemiLength!==E||U.numSunShadows!==S||U.numDirectionalShadows!==w||U.numPointShadows!==A||U.numSpotShadows!==R||U.numSpotMaps!==_||U.numLightProbes!==b)&&(i.sun.length=m,i.directional.length=g,i.spot.length=v,i.rectArea.length=T,i.point.length=d,i.hemi.length=E,i.sunShadow.length=S,i.sunShadowMap.length=S,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-N,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=b,U.sunLength=m,U.directionalLength=g,U.pointLength=d,U.spotLength=v,U.rectAreaLength=T,U.hemiLength=E,U.numSunShadows=S,U.numDirectionalShadows=w,U.numPointShadows=A,U.numSpotShadows=R,U.numSpotMaps=_,U.numLightProbes=b,i.version=ww++)}function c(u,h){let p=0,f=0,m=0,S=0,y=0,g=0;const d=h.matrixWorldInverse;for(let v=0,T=u.length;v<T;v++){const E=u[v];if(E.isSunLight){const w=i.sun[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),p++}else if(E.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(E.isSpotLight){const w=i.spot[S];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),S++}else if(E.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:i}}function Xm(t){const e=new Nw(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Rw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Xm(t),e.set(r,[l])):s>=a.length?(l=new Xm(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Pw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Ym=new Nt,ya=new V,Uu=new V;function Iw(t,e,n){let i=new Ch;const r=new $e,s=new $e,a=new bt,l=new FE,c=new kE,u={},h=n.maxTextureSize,p={[Zr]:Nn,[Nn]:Zr,[pi]:pi},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Cw,fragmentShader:bw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const S=new Rn;S.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ze(S,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let d=this.type;this.render=function(A,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===lv&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_l);const N=t.getRenderTarget(),b=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=d!==this.type;k&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=A.length;I<X;I++){const Y=A[I],K=Y.shadow;if(K===void 0){Oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const O=K.getFrameExtents();r.multiply(O),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,K.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=z,K.map===null||k===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ra){if(Y.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new si(r.x,r.y,{format:$r,type:yi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new lo(r.x,r.y,mi),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=Wi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Jt,K.map.depthTexture.magFilter=Jt}else Y.isPointLight?(K.map=new kv(r.x),K.map.depthTexture=new LE(r.x,Ei)):(K.map=new si(r.x,r.y),K.map.depthTexture=new lo(r.x,r.y,Ei)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=Wi,this.type===_l?(K.map.depthTexture.compareFunction=z?Mh:yh,K.map.depthTexture.minFilter=ln,K.map.depthTexture.magFilter=ln):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Jt,K.map.depthTexture.magFilter=Jt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const H=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Y.isPointLight!==!0&&K.updateMatrices(Y,_);for(let $=0;$<H;$++){const ge=K.getCamera($);if(Y.isPointLight){const Me=K.camera,Ze=K.matrix,De=Y.distance||Me.far;De!==Me.far&&(Me.far=De,Me.updateProjectionMatrix()),ya.setFromMatrixPosition(Y.matrixWorld),Me.position.copy(ya),Uu.copy(Me.position),Uu.add(Lw[$]),Me.up.copy(Pw[$]),Me.lookAt(Uu),Me.updateMatrixWorld(),Ze.makeTranslation(-ya.x,-ya.y,-ya.z),Ym.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ym,Me.coordinateSystem,Me.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,$),t.clear();else{$===0&&(t.setRenderTarget(K.map),t.clear());const Me=K.getViewport($);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),F.viewport(a)}i=K.getFrustum($),E(R,_,ge,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Ra&&v(K,_),K.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(N,b,U)};function v(A,R){const _=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new si(r.x,r.y,{format:$r,type:yi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,_,f,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,_,m,y,null)}function T(A,R,_,N){let b=null;const U=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=_.isPointLight===!0?c:l,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=b.uuid,k=R.uuid;let I=u[F];I===void 0&&(I={},u[F]=I);let X=I[k];X===void 0&&(X=b.clone(),I[k]=X,R.addEventListener("dispose",w)),b=X}if(b.visible=R.visible,b.wireframe=R.wireframe,N===Ra?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:p[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=t.properties.get(b);F.light=_}return b}function E(A,R,_,N,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ra)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=e.update(A),I=A.material;if(Array.isArray(I)){const X=k.groups;for(let Y=0,K=X.length;Y<K;Y++){const O=X[Y],z=I[O.materialIndex];if(z&&z.visible){const H=T(A,z,N,b);A.onBeforeShadow(t,A,R,_,k,H,O),t.renderBufferDirect(_,null,k,H,A,O),A.onAfterShadow(t,A,R,_,k,H,O)}}}else if(I.visible){const X=T(A,I,N,b);A.onBeforeShadow(t,A,R,_,k,X,null),t.renderBufferDirect(_,null,k,X,A,null),A.onAfterShadow(t,A,R,_,k,X,null)}}const F=A.children;for(let k=0,I=F.length;k<I;k++)E(F[k],R,_,N,b)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in u){const N=u[_],b=A.target.uuid;b in N&&(N[b].dispose(),delete N[b])}}}function Dw(t,e){function n(){let D=!1;const ue=new bt;let ee=null;const le=new bt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!D&&(t.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){D=xe},setClear:function(xe,ie,Ce,Ae,pt){pt===!0&&(xe*=Ae,ie*=Ae,Ce*=Ae),ue.set(xe,ie,Ce,Ae),le.equals(ue)===!1&&(t.clearColor(xe,ie,Ce,Ae),le.copy(ue))},reset:function(){D=!1,ee=null,le.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,ee=null,le=null,xe=null;return{setReversed:function(ie){if(ue!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Ae=xe;xe=null,this.setClear(Ae)}},getReversed:function(){return ue},setTest:function(ie){ie?ne(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!D&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(ue&&(ie=sE[ie]),le!==ie){switch(ie){case bd:t.depthFunc(t.NEVER);break;case Ld:t.depthFunc(t.ALWAYS);break;case Pd:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case Dd:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=ie}},setLocked:function(ie){D=ie},setClear:function(ie){xe!==ie&&(xe=ie,ue&&(ie=1-ie),t.clearDepth(ie))},reset:function(){D=!1,ee=null,le=null,xe=null,ue=!1}}}function r(){let D=!1,ue=null,ee=null,le=null,xe=null,ie=null,Ce=null,Ae=null,pt=null;return{setTest:function(ct){D||(ct?ne(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(ct){ue!==ct&&!D&&(t.stencilMask(ct),ue=ct)},setFunc:function(ct,dn,fn){(ee!==ct||le!==dn||xe!==fn)&&(t.stencilFunc(ct,dn,fn),ee=ct,le=dn,xe=fn)},setOp:function(ct,dn,fn){(ie!==ct||Ce!==dn||Ae!==fn)&&(t.stencilOp(ct,dn,fn),ie=ct,Ce=dn,Ae=fn)},setLocked:function(ct){D=ct},setClear:function(ct){pt!==ct&&(t.clearStencil(ct),pt=ct)},reset:function(){D=!1,ue=null,ee=null,le=null,xe=null,ie=null,Ce=null,Ae=null,pt=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,S=[],y=null,g=!1,d=null,v=null,T=null,E=null,w=null,A=null,R=null,_=new tt(0,0,0),N=0,b=!1,U=null,F=null,k=null,I=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,O=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=O>=2);let H=null,$={};const ge=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Ze=new bt().fromArray(ge),De=new bt().fromArray(Me);function Ge(D,ue,ee,le){const xe=new Uint8Array(4),ie=t.createTexture();t.bindTexture(D,ie),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ee;Ce++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ue+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ie}const J={};J[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ne(t.DEPTH_TEST),a.setFunc(io),He(!1),Je(qp),ne(t.CULL_FACE),rt(Bi);function ne(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function he(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function Ie(D,ue){return f[D]!==ue?(t.bindFramebuffer(D,ue),f[D]=ue,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ee(D,ue){let ee=S,le=!1;if(D){ee=m.get(ue),ee===void 0&&(ee=[],m.set(ue,ee));const xe=D.textures;if(ee.length!==xe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ce=xe.length;ie<Ce;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=xe.length,le=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,le=!0);le&&t.drawBuffers(ee)}function je(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const Rt={[Es]:t.FUNC_ADD,[AS]:t.FUNC_SUBTRACT,[NS]:t.FUNC_REVERSE_SUBTRACT};Rt[RS]=t.MIN,Rt[CS]=t.MAX;const Ve={[bS]:t.ZERO,[LS]:t.ONE,[PS]:t.SRC_COLOR,[cv]:t.SRC_ALPHA,[kS]:t.SRC_ALPHA_SATURATE,[OS]:t.DST_COLOR,[DS]:t.DST_ALPHA,[IS]:t.ONE_MINUS_SRC_COLOR,[uv]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[US]:t.ONE_MINUS_DST_ALPHA,[BS]:t.CONSTANT_COLOR,[zS]:t.ONE_MINUS_CONSTANT_COLOR,[jS]:t.CONSTANT_ALPHA,[VS]:t.ONE_MINUS_CONSTANT_ALPHA};function rt(D,ue,ee,le,xe,ie,Ce,Ae,pt,ct){if(D===Bi){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),D!==wS){if(D!==d||ct!==b){if((v!==Es||w!==Es)&&(t.blendEquation(t.FUNC_ADD),v=Es,w=Es),ct)switch(D){case Ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.ONE,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",D);break}else switch(D){case Ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Kp:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zp:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",D);break}T=null,E=null,A=null,R=null,_.set(0,0,0),N=0,d=D,b=ct}return}xe=xe||ue,ie=ie||ee,Ce=Ce||le,(ue!==v||xe!==w)&&(t.blendEquationSeparate(Rt[ue],Rt[xe]),v=ue,w=xe),(ee!==T||le!==E||ie!==A||Ce!==R)&&(t.blendFuncSeparate(Ve[ee],Ve[le],Ve[ie],Ve[Ce]),T=ee,E=le,A=ie,R=Ce),(Ae.equals(_)===!1||pt!==N)&&(t.blendColor(Ae.r,Ae.g,Ae.b,pt),_.copy(Ae),N=pt),d=D,b=!1}function ht(D,ue){D.side===pi?he(t.CULL_FACE):ne(t.CULL_FACE);let ee=D.side===Nn;ue&&(ee=!ee),He(ee),D.blending===Ba&&D.transparent===!1?rt(Bi):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const le=D.stencilWrite;l.setTest(le),le&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),en(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){U!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),U=D)}function Je(D){D!==MS?(ne(t.CULL_FACE),D!==F&&(D===qp?t.cullFace(t.BACK):D===TS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),F=D}function Ut(D){D!==k&&(K&&t.lineWidth(D),k=D)}function en(D,ue,ee){D?(ne(t.POLYGON_OFFSET_FILL),(I!==ue||X!==ee)&&(I=ue,X=ee,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,ee))):he(t.POLYGON_OFFSET_FILL)}function xt(D){D?ne(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Et(D){D===void 0&&(D=t.TEXTURE0+Y-1),H!==D&&(t.activeTexture(D),H=D)}function P(D,ue,ee){ee===void 0&&(H===null?ee=t.TEXTURE0+Y-1:ee=H);let le=$[ee];le===void 0&&(le={type:void 0,texture:void 0},$[ee]=le),(le.type!==D||le.texture!==ue)&&(H!==ee&&(t.activeTexture(ee),H=ee),t.bindTexture(D,ue||J[D]),le.type=D,le.texture=ue)}function Ht(){const D=$[H];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function lt(){try{t.compressedTexImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function x(){try{t.texSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function B(){try{t.texSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function se(){try{t.texStorage2D(...arguments)}catch(D){at("WebGLState:",D)}}function ce(){try{t.texStorage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Q(){try{t.texImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function te(){try{t.texImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function ae(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function Se(D,ue){p[D]!==ue&&(t.pixelStorei(D,ue),p[D]=ue)}function oe(D){Ze.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function de(D){De.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),De.copy(D))}function Ne(D,ue){let ee=u.get(ue);ee===void 0&&(ee=new WeakMap,u.set(ue,ee));let le=ee.get(D);le===void 0&&(le=t.getUniformBlockIndex(ue,D.name),ee.set(D,le))}function Le(D,ue){const le=u.get(ue).get(D);c.get(ue)!==le&&(t.uniformBlockBinding(ue,le,D.__bindingPointIndex),c.set(ue,le))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},H=null,$={},f={},m=new WeakMap,S=[],y=null,g=!1,d=null,v=null,T=null,E=null,w=null,A=null,R=null,_=new tt(0,0,0),N=0,b=!1,U=null,F=null,k=null,I=null,X=null,Ze.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ne,disable:he,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:je,setBlending:rt,setMaterial:ht,setFlipSided:He,setCullFace:Je,setLineWidth:Ut,setPolygonOffset:en,setScissorTest:xt,activeTexture:Et,bindTexture:P,unbindTexture:Ht,compressedTexImage2D:lt,compressedTexImage3D:C,texImage2D:Q,texImage3D:te,pixelStorei:Se,getParameter:ae,updateUBOMapping:Ne,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:ce,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:oe,viewport:de,reset:Fe}}function Uw(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,x){return S?new OffscreenCanvas(C,x):Ql("canvas")}function g(C,x,B){let W=1;const Z=lt(C);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(W*Z.width),ce=Math.floor(W*Z.height);f===void 0&&(f=y(se,ce));const Q=x?y(se,ce):f;return Q.width=se,Q.height=ce,Q.getContext("2d").drawImage(C,0,0,se,ce),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+ce+")."),Q}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function d(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(C,x,B,W,Z,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8),B===t.UNSIGNED_SHORT&&ce&&(Q=ce.R16_EXT),B===t.SHORT&&ce&&(Q=ce.R16_SNORM_EXT)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),x===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8),B===t.UNSIGNED_SHORT&&ce&&(Q=ce.RG16_EXT),B===t.SHORT&&ce&&(Q=ce.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),x===t.RGB&&(B===t.UNSIGNED_SHORT&&ce&&(Q=ce.RGB16_EXT),B===t.SHORT&&ce&&(Q=ce.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),x===t.RGBA){const te=se?$l:nt.getTransfer(Z);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=te===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ce&&(Q=ce.RGBA16_EXT),B===t.SHORT&&ce&&(Q=ce.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(C,x){let B;return C?x===null||x===Ei||x===ao?B=t.DEPTH24_STENCIL8:x===mi?B=t.DEPTH32F_STENCIL8:x===so&&(B=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===ao?B=t.DEPTH_COMPONENT24:x===mi?B=t.DEPTH_COMPONENT32F:x===so&&(B=t.DEPTH_COMPONENT16),B}function A(C,x){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),N(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),U(x)}function N(C){const x=i.get(C);if(x.__webglInit===void 0)return;const B=C.source,W=m.get(B);if(W){const Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(C),Object.keys(W).length===0&&m.delete(B)}i.remove(C)}function b(C){const x=i.get(C);t.deleteTexture(x.__webglTexture);const B=C.source,W=m.get(B);delete W[x.__cacheKey],a.memory.textures--}function U(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)t.deleteFramebuffer(x.__webglFramebuffer[W]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let W=0,Z=B.length;W<Z;W++){const se=i.get(B[W]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(B[W])}i.remove(C)}let F=0;function k(){F=0}function I(){return F}function X(C){F=C}function Y(){const C=F;return C>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function K(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function O(C,x){const B=i.get(C);if(C.isVideoTexture&&P(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const W=C.image;if(W===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function z(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){he(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function H(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){he(B,C,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function $(C,x){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ie(B,C,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}const ge={[ro]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},Me={[Jt]:t.NEAREST,[WS]:t.NEAREST_MIPMAP_NEAREST,[Fo]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[su]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},Ze={[KS]:t.NEVER,[eE]:t.ALWAYS,[ZS]:t.LESS,[yh]:t.LEQUAL,[JS]:t.EQUAL,[Mh]:t.GEQUAL,[$S]:t.GREATER,[QS]:t.NOTEQUAL};function De(C,x){if(x.type===mi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===su||x.magFilter===Fo||x.magFilter===jr||x.minFilter===ln||x.minFilter===su||x.minFilter===Fo||x.minFilter===jr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,ge[x.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ge[x.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ge[x.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Fo&&x.minFilter!==jr||x.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const W=x.source;let Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));const se=K(x);if(se!==C.__cacheKey){Z[se]===void 0&&(Z[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[se].usedTimes++;const ce=Z[C.__cacheKey];ce!==void 0&&(Z[C.__cacheKey].usedTimes--,ce.usedTimes===0&&b(x)),C.__cacheKey=se,C.__webglTexture=Z[se].texture}return B}function J(C,x,B){return Math.floor(Math.floor(C/B)/x)}function ne(C,x,B,W){const se=C.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,W,x.data);else{se.sort((Se,oe)=>Se.start-oe.start);let ce=0;for(let Se=1;Se<se.length;Se++){const oe=se[ce],de=se[Se],Ne=oe.start+oe.count,Le=J(de.start,x.width,4),Fe=J(oe.start,x.width,4);de.start<=Ne+1&&Le===Fe&&J(de.start+de.count-1,x.width,4)===Le?oe.count=Math.max(oe.count,de.start+de.count-oe.start):(++ce,se[ce]=de)}se.length=ce+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Se=0,oe=se.length;Se<oe;Se++){const de=se[Se],Ne=Math.floor(de.start/4),Le=Math.ceil(de.count/4),Fe=Ne%x.width,D=Math.floor(Ne/x.width),ue=Le,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Fe,D,ue,ee,B,W,x.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function he(C,x,B){let W=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=t.TEXTURE_3D);const Z=Ge(C,x),se=x.source;n.bindTexture(W,C.__webglTexture,t.TEXTURE0+B);const ce=i.get(se);if(se.version!==ce.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=nt.getPrimaries(nt.workingColorSpace),le=x.colorSpace===ur?null:nt.getPrimaries(x.colorSpace),xe=x.colorSpace===ur||ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let te=g(x.image,!1,r.maxTextureSize);te=Ht(x,te);const ae=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let oe=E(x.internalFormat,ae,Se,x.normalized,x.colorSpace,x.isVideoTexture);De(W,x);let de;const Ne=x.mipmaps,Le=x.isVideoTexture!==!0,Fe=ce.__version===void 0||Z===!0,D=se.dataReady,ue=A(x,te);if(x.isDepthTexture)oe=w(x.format===Vr,x.type),Fe&&(Le?n.texStorage2D(t.TEXTURE_2D,1,oe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,oe,te.width,te.height,0,ae,Se,null));else if(x.isDataTexture)if(Ne.length>0){Le&&Fe&&n.texStorage2D(t.TEXTURE_2D,ue,oe,Ne[0].width,Ne[0].height);for(let ee=0,le=Ne.length;ee<le;ee++)de=Ne[ee],Le?D&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ae,Se,de.data):n.texImage2D(t.TEXTURE_2D,ee,oe,de.width,de.height,0,ae,Se,de.data);x.generateMipmaps=!1}else Le?(Fe&&n.texStorage2D(t.TEXTURE_2D,ue,oe,te.width,te.height),D&&ne(x,te,ae,Se)):n.texImage2D(t.TEXTURE_2D,0,oe,te.width,te.height,0,ae,Se,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,oe,Ne[0].width,Ne[0].height,te.depth);for(let ee=0,le=Ne.length;ee<le;ee++)if(de=Ne[ee],x.format!==ni)if(ae!==null)if(Le){if(D)if(x.layerUpdates.size>0){const xe=wm(de.width,de.height,x.format,x.type);for(const ie of x.layerUpdates){const Ce=de.data.subarray(ie*xe/de.data.BYTES_PER_ELEMENT,(ie+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,ae,Ce)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ae,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,oe,de.width,de.height,te.depth,0,de.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ae,Se,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,oe,de.width,de.height,te.depth,0,ae,Se,de.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Le&&Fe&&n.texStorage2D(t.TEXTURE_2D,ue,oe,Ne[0].width,Ne[0].height);for(let ee=0,le=Ne.length;ee<le;ee++)de=Ne[ee],x.format!==ni?ae!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ae,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,oe,de.width,de.height,0,de.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ae,Se,de.data):n.texImage2D(t.TEXTURE_2D,ee,oe,de.width,de.height,0,ae,Se,de.data)}else if(x.isDataArrayTexture)if(Le){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,oe,te.width,te.height,te.depth),D)if(x.layerUpdates.size>0){const ee=wm(te.width,te.height,x.format,x.type);for(const le of x.layerUpdates){const xe=te.data.subarray(le*ee/te.data.BYTES_PER_ELEMENT,(le+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,te.width,te.height,1,ae,Se,xe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,Se,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,oe,te.width,te.height,te.depth,0,ae,Se,te.data);else if(x.isData3DTexture)Le?(Fe&&n.texStorage3D(t.TEXTURE_3D,ue,oe,te.width,te.height,te.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,Se,te.data)):n.texImage3D(t.TEXTURE_3D,0,oe,te.width,te.height,te.depth,0,ae,Se,te.data);else if(x.isFramebufferTexture){if(Fe)if(Le)n.texStorage2D(t.TEXTURE_2D,ue,oe,te.width,te.height);else{let ee=te.width,le=te.height;for(let xe=0;xe<ue;xe++)n.texImage2D(t.TEXTURE_2D,xe,oe,ee,le,0,ae,Se,null),ee>>=1,le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(x),ee.onpaint=le=>{const xe=le.changedElements;for(const ie of p)xe.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const xe=t.RGBA,ie=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ie,Ce,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Le&&Fe){const ee=lt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ue,oe,ee.width,ee.height)}for(let ee=0,le=Ne.length;ee<le;ee++)de=Ne[ee],Le?D&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ae,Se,de):n.texImage2D(t.TEXTURE_2D,ee,oe,ae,Se,de);x.generateMipmaps=!1}else if(Le){if(Fe){const ee=lt(te);n.texStorage2D(t.TEXTURE_2D,ue,oe,ee.width,ee.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Se,te)}else n.texImage2D(t.TEXTURE_2D,0,oe,ae,Se,te);d(x)&&v(W),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ie(C,x,B){if(x.image.length!==6)return;const W=Ge(C,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const se=i.get(Z);if(Z.version!==se.__version||W===!0){n.activeTexture(t.TEXTURE0+B);const ce=nt.getPrimaries(nt.workingColorSpace),Q=x.colorSpace===ur?null:nt.getPrimaries(x.colorSpace),te=x.colorSpace===ur||ce===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let ie=0;ie<6;ie++)!ae&&!Se?oe[ie]=g(x.image[ie],!0,r.maxCubemapSize):oe[ie]=Se?x.image[ie].image:x.image[ie],oe[ie]=Ht(x,oe[ie]);const de=oe[0],Ne=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Fe=E(x.internalFormat,Ne,Le,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ue=se.__version===void 0||W===!0,ee=Z.dataReady;let le=A(x,de);De(t.TEXTURE_CUBE_MAP,x);let xe;if(ae){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Fe,de.width,de.height);for(let ie=0;ie<6;ie++){xe=oe[ie].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const Ae=xe[Ce];x.format!==ni?Ne!==null?D?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ae.width,Ae.height,Ne,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Fe,Ae.width,Ae.height,0,Ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ae.width,Ae.height,Ne,Le,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Fe,Ae.width,Ae.height,0,Ne,Le,Ae.data)}}}else{if(xe=x.mipmaps,D&&ue){xe.length>0&&le++;const ie=lt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Se){D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,oe[ie].width,oe[ie].height,Ne,Le,oe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,oe[ie].width,oe[ie].height,0,Ne,Le,oe[ie].data);for(let Ce=0;Ce<xe.length;Ce++){const pt=xe[Ce].image[ie].image;D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,pt.width,pt.height,Ne,Le,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Fe,pt.width,pt.height,0,Ne,Le,pt.data)}}else{D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Le,oe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Ne,Le,oe[ie]);for(let Ce=0;Ce<xe.length;Ce++){const Ae=xe[Ce];D?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ne,Le,Ae.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Fe,Ne,Le,Ae.image[ie])}}}d(x)&&v(t.TEXTURE_CUBE_MAP),se.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ee(C,x,B,W,Z,se){const ce=s.convert(B.format,B.colorSpace),Q=s.convert(B.type),te=E(B.internalFormat,ce,Q,B.normalized,B.colorSpace),ae=i.get(x),Se=i.get(B);if(Se.__renderTarget=x,!ae.__hasExternalTextures){const oe=Math.max(1,x.width>>se),de=Math.max(1,x.height>>se);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,se,te,oe,de,x.depth,0,ce,Q,null):n.texImage2D(Z,se,te,oe,de,0,ce,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Et(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,Se.__webglTexture,0,xt(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,Se.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(C,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),x.depthBuffer){const W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,se=w(x.stencilBuffer,Z),ce=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(x),se,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(x),se,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,se,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const W=x.textures;for(let Z=0;Z<W.length;Z++){const se=W[Z],ce=s.convert(se.format,se.colorSpace),Q=s.convert(se.type),te=E(se.internalFormat,ce,Q,se.normalized,se.colorSpace);Et(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(x),te,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(x),te,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,te,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(C,x,B){const W=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),De(t.TEXTURE_CUBE_MAP,x.depthTexture);const ae=s.convert(x.depthTexture.format),Se=s.convert(x.depthTexture.type);let oe;x.depthTexture.format===Wi?oe=t.DEPTH_COMPONENT24:x.depthTexture.format===Vr&&(oe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,oe,x.width,x.height,0,ae,Se,null)}}else O(x.depthTexture,0);const se=Z.__webglTexture,ce=xt(x),Q=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,te=x.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wi)Et(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,se,0);else if(x.depthTexture.format===Vr)Et(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(C){const x=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Rt(x.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Rt(x.__webglFramebuffer[0],C,0):Rt(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=t.createRenderbuffer(),je(x.__webglDepthbuffer[W],C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,se)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),je(x.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(C,x,B){const W=i.get(C);x!==void 0&&Ee(W.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ve(C)}function ht(C){const x=C.texture,B=i.get(C),W=i.get(x);C.addEventListener("dispose",_);const Z=C.textures,se=C.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let te=0;te<x.mipmaps.length;te++)B.__webglFramebuffer[Q][te]=t.createFramebuffer()}else B.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Q]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Q=0,te=Z.length;Q<te;Q++){const ae=i.get(Z[Q]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const te=Z[Q];B.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const ae=s.convert(te.format,te.colorSpace),Se=s.convert(te.type),oe=E(te.internalFormat,ae,Se,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),de=xt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,oe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),je(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),De(t.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Ee(B.__webglFramebuffer[Q][te],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else Ee(B.__webglFramebuffer[Q],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let Q=0,te=Z.length;Q<te;Q++){const ae=Z[Q],Se=i.get(ae);let oe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Se.__webglTexture),De(oe,ae),Ee(B.__webglFramebuffer,C,ae,t.COLOR_ATTACHMENT0+Q,oe,0),d(ae)&&v(oe)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,W.__webglTexture),De(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Ee(B.__webglFramebuffer[te],C,x,t.COLOR_ATTACHMENT0,Q,te);else Ee(B.__webglFramebuffer,C,x,t.COLOR_ATTACHMENT0,Q,0);d(x)&&v(Q),n.unbindTexture()}C.depthBuffer&&Ve(C)}function He(C){const x=C.textures;for(let B=0,W=x.length;B<W;B++){const Z=x[B];if(d(Z)){const se=T(C),ce=i.get(Z).__webglTexture;n.bindTexture(se,ce),v(se),n.unbindTexture()}}}const Je=[],Ut=[];function en(C){if(C.samples>0){if(Et(C)===!1){const x=C.textures,B=C.width,W=C.height;let Z=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),Q=x.length>1;if(Q)for(let ae=0;ae<x.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const Se=i.get(x[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,B,W,0,0,B,W,Z,t.NEAREST),c===!0&&(Je.length=0,Ut.length=0,Je.push(t.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Je.push(se),Ut.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let ae=0;ae<x.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const Se=i.get(x[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function xt(C){return Math.min(r.maxSamples,C.samples)}function Et(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Ht(C,x){const B=C.colorSpace,W=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Jl&&B!==ur&&(nt.getTransfer(B)===mt?(W!==ni||Z!==In)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",B)),x}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ow(t,e){function n(i,r=ur){let s;const a=nt.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===vh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ev)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_v)return t.BYTE;if(i===Sv)return t.SHORT;if(i===so)return t.UNSIGNED_SHORT;if(i===gh)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===yi)return t.HALF_FLOAT;if(i===Mv)return t.ALPHA;if(i===Tv)return t.RGB;if(i===ni)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===wv)return t.RED;if(i===_h)return t.RED_INTEGER;if(i===$r)return t.RG;if(i===Sh)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===Sl||i===El||i===yl||i===Ml)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Bd||i===zd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===Hd||i===Wd||i===Xd||i===Kl||i===Yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Gd)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return s.COMPRESSED_R11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kl)return s.COMPRESSED_RG11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===Kd||i===Zd||i===Jd||i===$d||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ef)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===af)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===of)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cf||i===uf||i===df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cf)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ff||i===hf||i===Zl||i===pf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ff)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Iv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mi({vertexShader:Fw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends ts{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,S=null;const y=typeof XRWebGLBinding<"u",g=new Bw,d={},v=n.getContextAttributes();let T=null,E=null;const w=[],A=[],R=new $e;let _=null,N=null;const b=new yn;b.viewport=new bt;const U=new yn;U.viewport=new bt;const F=[b,U],k=new XE;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=w[J];return ne===void 0&&(ne=new pu,w[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=w[J];return ne===void 0&&(ne=new pu,w[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=w[J];return ne===void 0&&(ne=new pu,w[J]=ne),ne.getHandSpace()};function Y(J){const ne=A.indexOf(J.inputSource);if(ne===-1)return;const he=w[ne];he!==void 0&&(he.update(J.inputSource,J.frame,u||a),he.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",O);for(let J=0;J<w.length;J++){const ne=A[J];ne!==null&&(A[J]=null,w[J].disconnect(ne))}I=null,X=null,g.reset();for(const J in d)delete d[J];if(e.setRenderTarget(T),m=null,f=null,p=null,r=null,E=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),N!==null){const J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",K),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,Ee=null;v.depth&&(Ee=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=v.stencil?Vr:Wi,Ie=v.stencil?ao:Ei);const je={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new si(f.textureWidth,f.textureHeight,{format:ni,type:In,depthTexture:new lo(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new si(m.framebufferWidth,m.framebufferHeight,{format:ni,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(J){for(let ne=0;ne<J.removed.length;ne++){const he=J.removed[ne],Ie=A.indexOf(he);Ie>=0&&(A[Ie]=null,w[Ie].disconnect(he))}for(let ne=0;ne<J.added.length;ne++){const he=J.added[ne];let Ie=A.indexOf(he);if(Ie===-1){for(let je=0;je<w.length;je++)if(je>=A.length){A.push(he),Ie=je;break}else if(A[je]===null){A[je]=he,Ie=je;break}if(Ie===-1)break}const Ee=w[Ie];Ee&&Ee.connect(he)}}const z=new V,H=new V;function $(J,ne,he){z.setFromMatrixPosition(ne.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const Ie=z.distanceTo(H),Ee=ne.projectionMatrix.elements,je=he.projectionMatrix.elements,Rt=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),rt=(Ee[9]+1)/Ee[5],ht=(Ee[9]-1)/Ee[5],He=(Ee[8]-1)/Ee[0],Je=(je[8]+1)/je[0],Ut=Rt*He,en=Rt*Je,xt=Ie/(-He+Je),Et=xt*-He;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Et),J.translateZ(xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const P=Rt+xt,Ht=Ve+xt,lt=Ut-Et,C=en+(Ie-Et),x=rt*Ve/Ht*P,B=ht*Ve/Ht*P;J.projectionMatrix.makePerspective(lt,C,x,B,P,Ht),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,he=J.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(he=g.depthFar)),k.near=U.near=b.near=ne,k.far=U.far=b.far=he,(I!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,X=k.far),k.layers.mask=J.layers.mask|6,b.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const Ie=J.parent,Ee=k.cameras;ge(k,Ie);for(let je=0;je<Ee.length;je++)ge(Ee[je],Ie);Ee.length===2?$(k,b,U):k.projectionMatrix.copy(b.projectionMatrix),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),Me(J,k,Ie)};function Me(J,ne,he){he===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ec*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return d[J]};let Ze=null;function De(J,ne){if(h=ne.getViewerPose(u||a),S=ne,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ie=!1;he.length!==k.cameras.length&&(k.cameras.length=0,Ie=!0);for(let Ve=0;Ve<he.length;Ve++){const rt=he[Ve];let ht=null;if(m!==null)ht=m.getViewport(rt);else{const Je=p.getViewSubImage(f,rt);ht=Je.viewport,Ve===0&&(e.setRenderTargetTextures(E,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(E))}let He=F[Ve];He===void 0&&(He=new yn,He.layers.enable(Ve),He.viewport=new bt,F[Ve]=He),He.matrix.fromArray(rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ht.x,ht.y,ht.width,ht.height),Ve===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ie===!0&&k.cameras.push(He)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const Ve=p.getDepthInformation(he[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,r.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let Ve=0;Ve<he.length;Ve++){const rt=he[Ve].camera;if(rt){let ht=d[rt];ht||(ht=new Iv,d[rt]=ht);const He=p.getCameraImage(rt);ht.sourceTexture=He}}}}for(let he=0;he<w.length;he++){const Ie=A[he],Ee=w[he];Ie!==null&&Ee!==void 0&&Ee.update(Ie,ne,u||a)}Ze&&Ze(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),S=null}const Ge=new Ov;Ge.setAnimationLoop(De),this.setAnimationLoop=function(J){Ze=J},this.dispose=function(){}}}const jw=new Nt,Gv=new ke;Gv.set(-1,0,0,0,1,0,0,0,1);function Vw(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Dv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,T,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,E)):d.isMeshMatcapMaterial?(s(g,d),S(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&l(g,d)):d.isPointsMaterial?c(g,d,v,T):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Nn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Nn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),T=v.envMap,E=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gv),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function l(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,v,T){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=T*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gw(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){const A=w.program;i.uniformBlockBinding(E,A)}function u(E,w){let A=r[E.id];A===void 0&&(g(E),A=h(E),r[E.id]=A,E.addEventListener("dispose",v));const R=w.program;i.updateUBOMapping(E,R);const _=e.render.frame;s[E.id]!==_&&(f(E),s[E.id]=_)}function h(E){const w=p();E.__bindingPointIndex=w;const A=t.createBuffer(),R=E.__size,_=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,A),A}function p(){for(let E=0;E<l;E++)if(a.indexOf(E)===-1)return a.push(E),E;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=r[E.id],A=E.uniforms,R=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,N=A.length;_<N;_++){const b=A[_];if(Array.isArray(b))for(let U=0,F=b.length;U<F;U++)m(b[U],_,U,R);else m(b,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(E,w,A,R){if(y(E,w,A,R)===!0){const _=E.__offset,N=E.value;if(Array.isArray(N)){let b=0;for(let U=0;U<N.length;U++){const F=N[U],k=d(F);S(F,E.__data,b),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(b+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(N,E.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,E.__data)}}function S(E,w,A){typeof E=="number"||typeof E=="boolean"?w[0]=E:E.isMatrix3?(w[0]=E.elements[0],w[1]=E.elements[1],w[2]=E.elements[2],w[3]=0,w[4]=E.elements[3],w[5]=E.elements[4],w[6]=E.elements[5],w[7]=0,w[8]=E.elements[6],w[9]=E.elements[7],w[10]=E.elements[8],w[11]=0):ArrayBuffer.isView(E)?w.set(new E.constructor(E.buffer,E.byteOffset,w.length)):E.toArray(w,A)}function y(E,w,A,R){const _=E.value,N=w+"_"+A;if(R[N]===void 0)return typeof _=="number"||typeof _=="boolean"?R[N]=_:ArrayBuffer.isView(_)?R[N]=_.slice():R[N]=_.clone(),!0;{const b=R[N];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return R[N]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(E){const w=E.uniforms;let A=0;const R=16;for(let N=0,b=w.length;N<b;N++){const U=Array.isArray(w[N])?w[N]:[w[N]];for(let F=0,k=U.length;F<k;F++){const I=U[F],X=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,K=X.length;Y<K;Y++){const O=X[Y],z=d(O),H=A%R,$=H%z.boundary,ge=H+$;A+=$,ge!==0&&R-ge<z.storage&&(A+=R-ge),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=z.storage}}}const _=A%R;return _>0&&(A+=R-_),E.__size=A,E.__cache={},this}function d(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(w.boundary=16,w.storage=E.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",E),w}function v(E){const w=E.target;w.removeEventListener("dispose",v);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function T(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:u,dispose:T}}const Hw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function Ww(){return ci===null&&(ci=new RE(Hw,16,16,$r,yi),ci.name="DFG_LUT",ci.minFilter=ln,ci.magFilter=ln,ci.wrapS=Fi,ci.wrapT=Fi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Xw{constructor(e={}){const{canvas:n=iE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const y=m,g=new Set([Eh,Sh,_h]),d=new Set([In,Ei,so,ao,vh,xh]),v=new Uint32Array(4),T=new Int32Array(4),E=new V;let w=null,A=null;const R=[],_=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1,F=null,k=null,I=null,X=null;this._outputColorSpace=zn;let Y=0,K=0,O=null,z=-1,H=null;const $=new bt,ge=new bt;let Me=null;const Ze=new tt(0);let De=0,Ge=n.width,J=n.height,ne=1,he=null,Ie=null;const Ee=new bt(0,0,Ge,J),je=new bt(0,0,Ge,J);let Rt=!1;const Ve=new Ch;let rt=!1,ht=!1;const He=new Nt,Je=new V,Ut=new bt,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Et(){return O===null?ne:1}let P=i;function Ht(M,L){return n.getContext(M,L)}let lt,C,x,B,W,Z,se,ce,Q,te,ae,Se,oe,de,Ne,Le,Fe,D,ue,ee,le,xe,ie;try{const M={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ph}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",dn,!1),P===null){const L="webgl2";if(P=Ht(L,M),P===null)throw Ht(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(M){throw n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",dn,!1),at("WebGLRenderer: "+M.message),M}function Ce(){lt=new WT(P),lt.init(),le=new Ow(P,lt),C=new UT(P,lt,e,le),x=new Dw(P,lt),C.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),k=P.createFramebuffer(),I=P.createFramebuffer(),X=P.createFramebuffer(),B=new qT(P),W=new Sw,Z=new Uw(P,lt,x,W,C,le,B),se=new HT(b),ce=new ZE(P),xe=new IT(P,ce),Q=new XT(P,ce,B,xe),te=new ZT(P,Q,ce,xe,B),D=new KT(P,C,Z),Ne=new OT(W),ae=new _w(b,se,lt,C,xe,Ne),Se=new Vw(b,W),oe=new yw,de=new Rw(lt),Fe=new PT(b,se,x,te,S,c),Le=new Iw(b,te,C),ie=new Gw(P,B,C,x),ue=new DT(P,lt,B),ee=new YT(P,lt,B),B.programs=ae.programs,b.capabilities=C,b.extensions=lt,b.properties=W,b.renderLists=oe,b.shadowMap=Le,b.state=x,b.info=B}y!==In&&(N=new $T(y,n.width,n.height,l,r,s));const Ae=new zw(b,P);this.xr=Ae,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(Ge,J,!1))},this.getSize=function(M){return M.set(Ge,J)},this.setSize=function(M,L,q=!0){if(Ae.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=M,J=L,n.width=Math.floor(M*ne),n.height=Math.floor(L*ne),q===!0&&(n.style.width=M+"px",n.style.height=L+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Ge*ne,J*ne).floor()},this.setDrawingBufferSize=function(M,L,q){Ge=M,J=L,ne=q,n.width=Math.floor(M*q),n.height=Math.floor(L*q),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(y===In){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,L,q,G){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,L,q,G),x.viewport($.copy(Ee).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(je)},this.setScissor=function(M,L,q,G){M.isVector4?je.set(M.x,M.y,M.z,M.w):je.set(M,L,q,G),x.scissor(ge.copy(je).multiplyScalar(ne).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(M){x.setScissorTest(Rt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){Ie=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,q=!0){let G=0;if(M){let j=!1;if(O!==null){const pe=O.texture.format;j=g.has(pe)}if(j){const pe=O.texture.type,_e=d.has(pe),me=Fe.getClearColor(),Te=Fe.getClearAlpha(),Re=me.r,Be=me.g,Xe=me.b;_e?(v[0]=Re,v[1]=Be,v[2]=Xe,v[3]=Te,P.clearBufferuiv(P.COLOR,0,v)):(T[0]=Re,T[1]=Be,T[2]=Xe,T[3]=Te,P.clearBufferiv(P.COLOR,0,T))}else G|=P.COLOR_BUFFER_BIT}L&&(G|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",dn,!1),Fe.dispose(),oe.dispose(),de.dispose(),W.dispose(),se.dispose(),te.dispose(),xe.dispose(),ie.dispose(),ae.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",br),Ae.removeEventListener("sessionend",We),Ti.stop()};function pt(M){M.preventDefault(),Qp("WebGLRenderer: Context Lost."),U=!0}function ct(){Qp("WebGLRenderer: Context Restored."),U=!1;const M=B.autoReset,L=Le.enabled,q=Le.autoUpdate,G=Le.needsUpdate,j=Le.type;Ce(),B.autoReset=M,Le.enabled=L,Le.autoUpdate=q,Le.needsUpdate=G,Le.type=j}function dn(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fn(M){const L=M.target;L.removeEventListener("dispose",fn),ns(L)}function ns(M){Yn(M),W.remove(M)}function Yn(M){const L=W.get(M).programs;L!==void 0&&(L.forEach(function(q){ae.releaseProgram(q)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,q,G,j,pe){L===null&&(L=en);const _e=j.isMesh&&j.matrixWorld.determinantAffine()<0,me=wi(M,L,q,G,j);x.setMaterial(G,_e);let Te=q.index,Re=1;if(G.wireframe===!0){if(Te=Q.getWireframeAttribute(q),Te===void 0)return;Re=2}const Be=q.drawRange,Xe=q.attributes.position;let we=Be.start*Re,st=(Be.start+Be.count)*Re;pe!==null&&(we=Math.max(we,pe.start*Re),st=Math.min(st,(pe.start+pe.count)*Re)),Te!==null?(we=Math.max(we,0),st=Math.min(st,Te.count)):Xe!=null&&(we=Math.max(we,0),st=Math.min(st,Xe.count));const be=st-we;if(be<0||be===1/0)return;xe.setup(j,G,me,q,Te);let Ue,Pe=ue;if(Te!==null&&(Ue=ce.get(Te),Pe=ee,Pe.setIndex(Ue)),j.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Et()),Pe.setMode(P.LINES)):Pe.setMode(P.TRIANGLES);else if(j.isLine){let et=G.linewidth;et===void 0&&(et=1),x.setLineWidth(et*Et()),j.isLineSegments?Pe.setMode(P.LINES):j.isLineLoop?Pe.setMode(P.LINE_LOOP):Pe.setMode(P.LINE_STRIP)}else j.isPoints?Pe.setMode(P.POINTS):j.isSprite&&Pe.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const et=j._multiDrawStarts,fe=j._multiDrawCounts,ft=j._multiDrawCount,Ye=Te?ce.get(Te).bytesPerElement:1,ut=W.get(G).currentProgram.getUniforms();for(let hn=0;hn<ft;hn++)ut.setValue(P,"_gl_DrawID",hn),Pe.render(et[hn]/Ye,fe[hn])}else if(j.isInstancedMesh)Pe.renderInstances(we,be,j.count);else if(q.isInstancedBufferGeometry){const et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,fe=Math.min(q.instanceCount,et);Pe.renderInstances(we,be,fe)}else Pe.render(we,be)};function vo(M,L,q,G){F!==null&&M.isNodeMaterial&&F.setObject(G,M),rt===!0&&Ne.setState(M,q,!1),M.transparent===!0&&M.side===pi&&M.forceSinglePass===!1?(M.side=Nn,M.needsUpdate=!0,Zi(M,L,G),M.side=Zr,M.needsUpdate=!0,Zi(M,L,G),M.side=pi):Zi(M,L,G)}this.compile=function(M,L,q=null){q===null&&(q=M),F!==null&&F.renderStart(M,L,q),A=de.get(q),A.init(L),_.push(A),q.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),M!==q&&M.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),ht=this.localClippingEnabled,rt=Ne.init(this.clippingPlanes,ht),rt===!0&&Ne.setGlobalState(this.clippingPlanes,L),F!==null&&Le.render(A.state.shadowsArray,q,L);const G=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const pe=j.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){const me=pe[_e];vo(me,q,L,j),G.add(me)}else vo(pe,q,L,j),G.add(pe)}),A=_.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(M,L,q=null){const G=this.compile(M,L,q);return new Promise(j=>{function pe(){if(G.forEach(function(_e){const Te=W.get(_e).currentProgram;(Te===void 0||Te.isReady())&&G.delete(_e)}),G.size===0){j(M);return}setTimeout(pe,10)}lt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Yi=null;function Cr(M){Yi&&Yi(M)}function br(){Ti.stop()}function We(){Ti.start()}const Ti=new Ov;Ti.setAnimationLoop(Cr),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){Yi=M,Ae.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},Ae.addEventListener("sessionstart",br),Ae.addEventListener("sessionend",We),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,L);const q=Ae.enabled===!0&&Ae.isPresenting===!0,G=N!==null&&(O===null||q)&&N.begin(b,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,L,O),A=de.get(M,_.length),A.init(L),A.state.textureUnits=Z.getTextureUnits(),_.push(A),He.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ve.setFromProjectionMatrix(He,gi,L.reversedDepth),ht=this.localClippingEnabled,rt=Ne.init(this.clippingPlanes,ht),w=oe.get(M,R.length),w.init(),R.push(w),Ae.enabled===!0&&Ae.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&qi(_e,L,-1/0,b.sortObjects)}qi(M,L,0,b.sortObjects),w.finish(),F!==null&&F.updateLights(A.state.lightsArray),b.sortObjects===!0&&w.sort(he,Ie),xt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,xt&&Fe.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ne.beginShadows();const j=A.state.shadowsArray;if(Le.render(j,M,L),rt===!0&&Ne.endShadows(),(G&&N.hasRenderPass())===!1){const _e=w.opaque,me=w.transmissive;if(A.setupLights(),L.isArrayCamera){const Te=L.cameras;if(me.length>0)for(let Re=0,Be=Te.length;Re<Be;Re++){const Xe=Te[Re];Kt(_e,me,M,Xe)}xt&&Fe.render(M);for(let Re=0,Be=Te.length;Re<Be;Re++){const Xe=Te[Re];oa(w,M,Xe,Xe.viewport)}}else me.length>0&&Kt(_e,me,M,L),xt&&Fe.render(M),oa(w,M,L)}O!==null&&K===0&&(Z.updateMultisampleRenderTarget(O),Z.updateRenderTargetMipmap(O)),G&&N.end(b),M.isScene===!0&&M.onAfterRender(b,M,L),xe.resetDefaultState(),z=-1,H=null,_.pop(),_.length>0?(A=_[_.length-1],Z.setTextureUnits(A.state.textureUnits),rt===!0&&Ne.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function qi(M,L,q,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ve)){G&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(He);const _e=te.update(M),me=M.material;me.visible&&w.push(M,_e,me,q,Ut.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ve))){const _e=te.update(M),me=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ut.copy(_e.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(He)),Array.isArray(me)){const Te=_e.groups;for(let Re=0,Be=Te.length;Re<Be;Re++){const Xe=Te[Re],we=me[Xe.materialIndex];we&&we.visible&&w.push(M,_e,we,q,Ut.z,Xe,L)}}else me.visible&&w.push(M,_e,me,q,Ut.z,null,L)}}const pe=M.children;for(let _e=0,me=pe.length;_e<me;_e++)qi(pe[_e],L,q,G)}function oa(M,L,q,G){const{opaque:j,transmissive:pe,transparent:_e}=M;A.setupLightsView(q),rt===!0&&Ne.setGlobalState(b.clippingPlanes,q),G&&x.viewport($.copy(G)),j.length>0&&Ki(j,L,q),pe.length>0&&Ki(pe,L,q),_e.length>0&&Ki(_e,L,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Kt(M,L,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const we=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new si(1,1,{generateMipmaps:!0,type:we?yi:In,minFilter:jr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const pe=A.state.transmissionRenderTarget[G.id],_e=G.viewport||$;pe.setSize(_e.z*b.transmissionResolutionScale,_e.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),Te=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();b.setRenderTarget(pe),b.getClearColor(Ze),De=b.getClearAlpha(),De<1&&b.setClearColor(16777215,.5),b.clear(),xt&&Fe.render(q);const Be=b.toneMapping;b.toneMapping=_i;const Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),rt===!0&&Ne.setGlobalState(b.clippingPlanes,G),Ki(M,q,G),Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let st=0,be=L.length;st<be;st++){const Ue=L[st],{object:Pe,geometry:et,material:fe,group:ft}=Ue;if(fe.side===pi&&Pe.layers.test(G.layers)){const Ye=fe.side;fe.side=Nn,fe.needsUpdate=!0,xo(Pe,q,G,et,fe,ft),fe.side=Ye,fe.needsUpdate=!0,we=!0}}we===!0&&(Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe))}b.setRenderTarget(me,Te,Re),b.setClearColor(Ze,De),Xe!==void 0&&(G.viewport=Xe),b.toneMapping=Be}function Ki(M,L,q){const G=L.isScene===!0?L.overrideMaterial:null;for(let j=0,pe=M.length;j<pe;j++){const _e=M[j],{object:me,geometry:Te,group:Re}=_e;let Be=_e.material;Be.allowOverride===!0&&G!==null&&(Be=G),me.layers.test(q.layers)&&xo(me,L,q,Te,Be,Re)}}function xo(M,L,q,G,j,pe){F!==null&&j.isNodeMaterial&&F.setObject(M,j),M.onBeforeRender(b,L,q,G,j,pe),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(b,L,q,G,M,pe),j.transparent===!0&&j.side===pi&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,b.renderBufferDirect(q,L,G,j,M,pe),j.side=Zr,j.needsUpdate=!0,b.renderBufferDirect(q,L,G,j,M,pe),j.side=pi):b.renderBufferDirect(q,L,G,j,M,pe),M.onAfterRender(b,L,q,G,j,pe)}function Zi(M,L,q){L.isScene!==!0&&(L=en);const G=W.get(M),j=A.state.lights,pe=A.state.shadowsArray,_e=j.state.version,me=ae.getParameters(M,j.state,pe,L,q,A.state.lightProbeGridArray),Te=ae.getProgramCacheKey(me);let Re=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const Be=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=se.get(M.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",fn),Re=new Map,G.programs=Re);let Xe=Re.get(Te);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===_e)return _o(M,me),Xe}else me.uniforms=ae.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,q,me),M.onBeforeCompile(me,b),Xe=ae.acquireProgram(me,Te),Re.set(Te,Xe),G.uniforms=me.uniforms;const we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Ne.uniform),_o(M,me),G.needsLights=bc(M),G.lightsStateVersion=_e,G.needsLights&&(we.ambientLightColor.value=j.state.ambient,we.lightProbe.value=j.state.probe,we.sunLights.value=j.state.sun,we.sunLightShadows.value=j.state.sunShadow,we.directionalLights.value=j.state.directional,we.directionalLightShadows.value=j.state.directionalShadow,we.spotLights.value=j.state.spot,we.spotLightShadows.value=j.state.spotShadow,we.rectAreaLights.value=j.state.rectArea,we.ltc_1.value=j.state.rectAreaLTC1,we.ltc_2.value=j.state.rectAreaLTC2,we.pointLights.value=j.state.point,we.pointLightShadows.value=j.state.pointShadow,we.hemisphereLights.value=j.state.hemi,we.sunShadowMatrix.value=j.state.sunShadowMatrix,we.sunShadowCascade.value=j.state.sunShadowCascade,we.directionalShadowMatrix.value=j.state.directionalShadowMatrix,we.spotLightMatrix.value=j.state.spotLightMatrix,we.spotLightMap.value=j.state.spotLightMap,we.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function is(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Tl.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function _o(M,L){const q=W.get(M);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function Rc(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(L.matrixWorld);for(let q=0,G=M.length;q<G;q++){const j=M[q];if(j.texture!==null&&j.boundingBox.containsPoint(E))return j}return null}function wi(M,L,q,G,j){L.isScene!==!0&&(L=en),Z.resetTextureUnits();const pe=L.fog,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,me=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nt.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=se.get(G.envMap||_e,Te),Be=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,be=!!q.morphAttributes.color;let Ue=_i;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ue=b.toneMapping);const Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=Pe!==void 0?Pe.length:0,fe=W.get(G),ft=A.state.lights;if(rt===!0&&(ht===!0||M!==H)){const _t=M===H&&G.id===z;Ne.setState(G,M,_t)}let Ye=!1;G.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==ft.state.version||fe.outputColorSpace!==me||j.isBatchedMesh&&fe.batching===!1||!j.isBatchedMesh&&fe.batching===!0||j.isBatchedMesh&&fe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&fe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&fe.instancing===!1||!j.isInstancedMesh&&fe.instancing===!0||j.isSkinnedMesh&&fe.skinning===!1||!j.isSkinnedMesh&&fe.skinning===!0||j.isInstancedMesh&&fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&fe.instancingMorph===!1&&j.morphTexture!==null||fe.envMap!==Re||G.fog===!0&&fe.fog!==pe||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Ne.numPlanes||fe.numIntersection!==Ne.numIntersection)||fe.vertexAlphas!==Be||fe.vertexTangents!==Xe||fe.morphTargets!==we||fe.morphNormals!==st||fe.morphColors!==be||fe.toneMapping!==Ue||fe.morphTargetsCount!==et||!!fe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,fe.__version=G.version);let ut=fe.currentProgram;Ye===!0&&(ut=Zi(G,L,j),F&&G.isNodeMaterial&&F.onUpdateProgram(G,ut,fe));let hn=!1,_n=!1,Cn=!1;const dt=ut.getUniforms(),Tt=fe.uniforms;if(x.useProgram(ut.program)&&(hn=!0,_n=!0,Cn=!0),G.id!==z&&(z=G.id,_n=!0),fe.needsLights){const _t=Rc(A.state.lightProbeGridArray,j);fe.lightProbeGrid!==_t&&(fe.lightProbeGrid=_t,_n=!0)}if(hn||H!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",M.projectionMatrix),dt.setValue(P,"viewMatrix",M.matrixWorldInverse);const $i=dt.map.cameraPosition;$i!==void 0&&$i.setValue(P,Je.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,_n=!0,Cn=!0)}if(fe.needsLights&&(ft.state.sunShadowMap.length>0&&dt.setValue(P,"sunShadowMap",ft.state.sunShadowMap,Z),ft.state.directionalShadowMap.length>0&&dt.setValue(P,"directionalShadowMap",ft.state.directionalShadowMap,Z),ft.state.spotShadowMap.length>0&&dt.setValue(P,"spotShadowMap",ft.state.spotShadowMap,Z),ft.state.pointShadowMap.length>0&&dt.setValue(P,"pointShadowMap",ft.state.pointShadowMap,Z)),j.isSkinnedMesh){dt.setOptional(P,j,"bindMatrix"),dt.setOptional(P,j,"bindMatrixInverse");const _t=j.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),dt.setValue(P,"boneTexture",_t.boneTexture,Z))}j.isBatchedMesh&&(dt.setOptional(P,j,"batchingTexture"),dt.setValue(P,"batchingTexture",j._matricesTexture,Z),dt.setOptional(P,j,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",j._indirectTexture,Z),dt.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",j._colorsTexture,Z));const Ji=q.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&D.update(j,q,ut),(_n||fe.receiveShadow!==j.receiveShadow)&&(fe.receiveShadow=j.receiveShadow,dt.setValue(P,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Tt.envMapIntensity.value=L.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Ww()),_n){if(dt.setValue(P,"toneMappingExposure",b.toneMappingExposure),fe.needsLights&&Cc(Tt,Cn),pe&&G.fog===!0&&Se.refreshFogUniforms(Tt,pe),Se.refreshMaterialUniforms(Tt,G,ne,J,A.state.transmissionRenderTarget[M.id]),fe.needsLights&&fe.lightProbeGrid){const _t=fe.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Tl.upload(P,is(fe),Tt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Tl.upload(P,is(fe),Tt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(P,"center",j.center),dt.setValue(P,"modelViewMatrix",j.modelViewMatrix),dt.setValue(P,"normalMatrix",j.normalMatrix),dt.setValue(P,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const _t=G.uniformsGroups;for(let $i=0,ss=_t.length;$i<ss;$i++){const kh=_t[$i];ie.update(kh,ut),ie.bind(kh,ut)}}return ut}function Cc(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function bc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,L,q){const G=W.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=L,W.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const q=W.get(M);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,q=0){O=M,Y=L,K=q;let G=null,j=!1,pe=!1;if(M){const me=W.get(M);if(me.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,me.__webglFramebuffer),$.copy(M.viewport),ge.copy(M.scissor),Me=M.scissorTest,x.viewport($),x.scissor(ge),x.setScissorTest(Me),z=-1;return}else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(me.__hasExternalTextures)Z.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&W.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const Re=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?G=Re[L][q]:G=Re[L],j=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?G=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[q]:G=Re,$.copy(M.viewport),ge.copy(M.scissor),Me=M.scissorTest}else $.copy(Ee).multiplyScalar(ne).floor(),ge.copy(je).multiplyScalar(ne).floor(),Me=Rt;if(q!==0&&(G=k),x.bindFramebuffer(P.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport($),x.scissor(ge),x.setScissorTest(Me),j){const me=W.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,q)}else if(pe){const me=L;for(let Te=0;Te<M.textures.length;Te++){const Re=W.get(M.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Re.__webglTexture,q,me)}}else if(M!==null&&q!==0){const me=W.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,q)}z=-1};function rs(M){const L=W.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=C.textureFormatReadable(M.format),L.__typeReadable=C.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,q,G,j,pe,_e,me=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){x.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Re=M.textures[me],Be=Re.format,Xe=Re.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me);const we=rs(Re);if(we.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&q>=0&&q<=M.height-j&&P.readPixels(L,q,G,j,le.convert(Be),le.convert(Xe),pe)}finally{const Re=O!==null?W.get(O).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,L,q,G,j,pe,_e,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(L>=0&&L<=M.width-G&&q>=0&&q<=M.height-j){x.bindFramebuffer(P.FRAMEBUFFER,Te);const Re=M.textures[me],Be=Re.format,Xe=Re.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me);const we=rs(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,st),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(L,q,G,j,le.convert(Be),le.convert(Xe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const be=O!==null?W.get(O).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,be);const Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rE(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,st),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(st),P.deleteSync(Ue),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,q=0){const G=Math.pow(2,-q),j=Math.floor(M.image.width*G),pe=Math.floor(M.image.height*G),_e=L!==null?L.x:0,me=L!==null?L.y:0;Z.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,_e,me,j,pe),x.unbindTexture()},this.copyTextureToTexture=function(M,L,q=null,G=null,j=0,pe=0){let _e,me,Te,Re,Be,Xe,we,st,be;const Ue=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(q!==null)_e=q.max.x-q.min.x,me=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Be=q.min.y,Xe=q.isBox3?q.min.z:0;else{const Tt=Math.pow(2,-j);_e=Math.floor(Ue.width*Tt),me=Math.floor(Ue.height*Tt),M.isDataArrayTexture?Te=Ue.depth:M.isData3DTexture?Te=Math.floor(Ue.depth*Tt):Te=1,Re=0,Be=0,Xe=0}G!==null?(we=G.x,st=G.y,be=G.z):(we=0,st=0,be=0);const Pe=le.convert(L.format),et=le.convert(L.type);let fe;L.isData3DTexture?(Z.setTexture3D(L,0),fe=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),fe=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),fe=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const ft=x.getParameter(P.UNPACK_ROW_LENGTH),Ye=x.getParameter(P.UNPACK_IMAGE_HEIGHT),ut=x.getParameter(P.UNPACK_SKIP_PIXELS),hn=x.getParameter(P.UNPACK_SKIP_ROWS),_n=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(P.UNPACK_SKIP_ROWS,Be),x.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);const Cn=M.isDataArrayTexture||M.isData3DTexture,dt=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const Tt=W.get(M),Ji=W.get(L),_t=W.get(Tt.__renderTarget),$i=W.get(Ji.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,_t.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let ss=0;ss<Te;ss++)Cn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(M).__webglTexture,j,Xe+ss),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(L).__webglTexture,pe,be+ss)),P.blitFramebuffer(Re,Be,_e,me,we,st,_e,me,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||W.has(M)){const Tt=W.get(M),Ji=W.get(L);x.bindFramebuffer(P.READ_FRAMEBUFFER,I),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,X);for(let _t=0;_t<Te;_t++)Cn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.__webglTexture,j,Xe+_t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tt.__webglTexture,j),dt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ji.__webglTexture,pe,be+_t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ji.__webglTexture,pe),j!==0?P.blitFramebuffer(Re,Be,_e,me,we,st,_e,me,P.COLOR_BUFFER_BIT,P.NEAREST):dt?P.copyTexSubImage3D(fe,pe,we,st,be+_t,Re,Be,_e,me):P.copyTexSubImage2D(fe,pe,we,st,Re,Be,_e,me);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(fe,pe,we,st,be,_e,me,Te,Pe,et,Ue.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(fe,pe,we,st,be,_e,me,Te,Pe,Ue.data):P.texSubImage3D(fe,pe,we,st,be,_e,me,Te,Pe,et,Ue):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pe,we,st,_e,me,Pe,et,Ue.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pe,we,st,Ue.width,Ue.height,Pe,Ue.data):P.texSubImage2D(P.TEXTURE_2D,pe,we,st,_e,me,Pe,et,Ue);x.pixelStorei(P.UNPACK_ROW_LENGTH,ft),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),x.pixelStorei(P.UNPACK_SKIP_PIXELS,ut),x.pixelStorei(P.UNPACK_SKIP_ROWS,hn),x.pixelStorei(P.UNPACK_SKIP_IMAGES,_n),pe===0&&L.generateMipmaps&&P.generateMipmap(fe),x.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){Y=0,K=0,O=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}let an=null;function Ma(){if(typeof window>"u")return null;if(!an){const t=window.AudioContext||window.webkitAudioContext;t&&(an=new t)}return an&&an.state==="suspended"&&an.resume().catch(()=>{}),an}const gt={enabled:!0,toggle(){return this.enabled=!this.enabled,this.enabled},playLampClick(t=!0){if(!this.enabled)return;const e=Ma();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain(),s=e.createBiquadFilter();i.type=t?"triangle":"sine",i.frequency.setValueAtTime(t?1800:1200,n),i.frequency.exponentialRampToValueAtTime(140,n+.04),s.type="bandpass",s.frequency.setValueAtTime(t?2200:1600,n),s.Q.setValueAtTime(3.5,n),r.gain.setValueAtTime(.4,n),r.gain.exponentialRampToValueAtTime(.001,n+.045),i.connect(s),s.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.05),setTimeout(()=>{if(!this.enabled||!an)return;const a=an.currentTime,l=an.createOscillator(),c=an.createGain();l.type="square",l.frequency.setValueAtTime(240,a),l.frequency.exponentialRampToValueAtTime(60,a+.025),c.gain.setValueAtTime(.18,a),c.gain.exponentialRampToValueAtTime(.001,a+.025),l.connect(c),c.connect(an.destination),l.start(a),l.stop(a+.03)},28)},playDrawerSlide(t=!0){if(!this.enabled)return;const e=Ma();if(!e)return;const n=e.currentTime,i=e.sampleRate*.45,r=e.createBuffer(1,i,e.sampleRate),s=r.getChannelData(0);for(let u=0;u<i;u++)s[u]=(Math.random()*2-1)*Math.exp(-u/(e.sampleRate*.28));const a=e.createBufferSource();a.buffer=r;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(t?450:700,n),l.frequency.exponentialRampToValueAtTime(t?750:350,n+.4),l.Q.setValueAtTime(2.2,n);const c=e.createGain();c.gain.setValueAtTime(.001,n),c.gain.linearRampToValueAtTime(.28,n+.08),c.gain.exponentialRampToValueAtTime(.001,n+.44),a.connect(l),l.connect(c),c.connect(e.destination),a.start(n),setTimeout(()=>{if(!this.enabled||!an)return;const u=an.currentTime,h=an.createOscillator(),p=an.createGain();h.type="triangle",h.frequency.setValueAtTime(140,u),h.frequency.exponentialRampToValueAtTime(30,u+.08),p.gain.setValueAtTime(.3,u),p.gain.exponentialRampToValueAtTime(.001,u+.08),h.connect(p),p.connect(an.destination),h.start(u),h.stop(u+.09)},380)},playPaperTurn(){if(!this.enabled)return;const t=Ma();if(!t)return;const e=t.currentTime,n=.22,i=Math.floor(t.sampleRate*n),r=t.createBuffer(1,i,t.sampleRate),s=r.getChannelData(0);for(let u=0;u<i;u++)s[u]=(Math.random()*2-1)*Math.sin(u/i*Math.PI);const a=t.createBufferSource();a.buffer=r;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1100,e),l.frequency.linearRampToValueAtTime(1600,e+n),l.Q.setValueAtTime(1.8,e);const c=t.createGain();c.gain.setValueAtTime(.18,e),c.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(l),l.connect(c),c.connect(t.destination),a.start(e)},playDossierOpen(){if(!this.enabled)return;this.playPaperTurn();const t=Ma();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(95,e),n.frequency.exponentialRampToValueAtTime(45,e+.15),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.16)},playSoftClick(){if(!this.enabled)return;const t=Ma();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(900,e),n.frequency.exponentialRampToValueAtTime(300,e+.015),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.015),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.02)}};function Yw({viewState:t,onStateChange:e,lampOn:n,setLampOn:i,motionEnabled:r=!0}){const s=Ke.useRef(null),a=Ke.useRef(null),l=Ke.useRef(null),c=Ke.useRef(null),u=Ke.useRef(null),h=Ke.useRef(null),p=Ke.useRef(null),f=Ke.useRef(null),m=Ke.useRef(null),S=Ke.useRef(null),y=Ke.useRef(null),g=Ke.useRef(null),d=Ke.useRef(null),v=Ke.useRef(new V(-2.8,2.3,3.8)),T=Ke.useRef(new V(-2.8,2.3,3.8)),E=Ke.useRef(new V(.35,.9,-.4)),w=Ke.useRef(new V(.35,.9,-.4)),A=Ke.useRef(0),R=Ke.useRef(0),_=Ke.useRef(-1),N=Ke.useRef(-1),b=Ke.useRef({x:0,y:0,targetX:0,targetY:0}),U=Ke.useRef(new YE),F=Ke.useRef(new $e(-999,-999));return Ke.useEffect(()=>{t==="overview"?(T.current.set(-2.8,2.3,3.8),w.current.set(.35,.9,-.4),R.current=0,N.current=-1):t==="cabinet"?(T.current.set(.4,1.7,2),w.current.set(1.15,1.35,-.3),R.current=.85,N.current=-1):t==="desk_folder"?(T.current.set(-.25,2.2,1.45),w.current.set(-.18,.85,.05),R.current=0,N.current=.885):t==="dossier_open"&&(T.current.set(-.15,2.05,.95),w.current.set(-.15,.85,.22),R.current=0,N.current=-1)},[t]),Ke.useEffect(()=>{p.current&&f.current&&m.current&&(n?(p.current.intensity=1.3,S.current&&(S.current.intensity=.9),f.current.material.emissive.setHex(16771743),f.current.material.emissiveIntensity=1.6,m.current.material.emissive.setHex(1793066),m.current.material.emissiveIntensity=.45):(p.current.intensity=0,S.current&&(S.current.intensity=0),f.current.material.emissive.setHex(1118481),f.current.material.emissiveIntensity=0,m.current.material.emissive.setHex(334347),m.current.material.emissiveIntensity=.05))},[n]),Ke.useEffect(()=>{const k=s.current;if(!k)return;const I=k.clientWidth,X=k.clientHeight,Y=new SE;Y.background=new tt(659212),Y.fog=new Ah(659212,.12),a.current=Y;const K=new yn(42,I/X,.1,30);K.position.copy(v.current),K.lookAt(E.current),l.current=K;const O=new Xw({antialias:!0,alpha:!1,powerPreference:"high-performance"});O.setSize(I,X),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.shadowMap.enabled=!0,O.shadowMap.type=lv,O.toneMapping=mh,O.toneMappingExposure=1.15,k.appendChild(O.domElement),c.current=O;const z=new HE(2635824,.9);Y.add(z);const H=new Em(10863280,.75);H.position.set(-3.5,5,2.5),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,H.shadow.camera.near=1,H.shadow.camera.far=12,H.shadow.bias=-5e-4,Y.add(H);const $=new Em(4021320,.35);$.position.set(4,3,-1),Y.add($);const ge=new Ft({color:1317654,roughness:.85,metalness:.1}),Me=new Ft({color:3286041,roughness:.65,metalness:.08}),Ze=new Ft({color:2240037,roughness:.55,metalness:.45}),De=new Ft({color:13936723,roughness:.28,metalness:.88}),Ge=new Ft({color:1783847,roughness:.7,metalness:.05});new Ft({color:15063230,roughness:.88,metalness:.02});const J=new Di(16,16),ne=document.createElement("canvas");ne.width=512,ne.height=512;const he=ne.getContext("2d");he.fillStyle="#111713",he.fillRect(0,0,512,512),he.strokeStyle="rgba(40, 55, 45, 0.4)",he.lineWidth=2;for(let be=0;be<=512;be+=64)he.beginPath(),he.moveTo(be,0),he.lineTo(be,512),he.stroke(),he.beginPath(),he.moveTo(0,be),he.lineTo(512,be),he.stroke();const Ie=new vs(ne);Ie.wrapS=ro,Ie.wrapT=ro,Ie.repeat.set(4,4);const Ee=new Ft({map:Ie,roughness:.6,metalness:.2}),je=new ze(J,Ee);je.rotation.x=-Math.PI/2,je.receiveShadow=!0,Y.add(je);const Rt=new ze(new Di(16,7),ge);Rt.position.set(0,3.5,-2.5),Rt.receiveShadow=!0,Y.add(Rt);const Ve=new ze(new Di(14,7),ge);Ve.position.set(-6.5,3.5,1.5),Ve.rotation.y=Math.PI/2,Ve.receiveShadow=!0,Y.add(Ve);const rt=new wt(16,.08,.08),ht=new ze(rt,Me);ht.position.set(0,1.8,-2.46),Y.add(ht);const He=document.createElement("canvas");He.width=512,He.height=128;const Je=He.getContext("2d");Je.fillStyle="#16231b",Je.fillRect(0,0,512,128),Je.strokeStyle="#c49a45",Je.lineWidth=4,Je.strokeRect(6,6,500,116),Je.fillStyle="#e8d4a5",Je.font='bold 36px "Space Mono", monospace',Je.textAlign="center",Je.fillText("ARCHIVE / 001",256,52),Je.font='16px "Space Mono", monospace',Je.fillStyle="#9cb8a5",Je.fillText("DEPARTMENT OF AUTONOMOUS SYSTEMS & MLOPS",256,92);const Ut=new vs(He),en=new Ft({map:Ut,roughness:.5,metalness:.3}),xt=new ze(new wt(2.4,.6,.04),en);xt.position.set(1.15,2.75,-2.46),Y.add(xt);const Et=document.createElement("canvas");Et.width=380,Et.height=70;const P=Et.getContext("2d");P.fillStyle="#111713",P.fillRect(0,0,380,70),P.strokeStyle="#3d5244",P.strokeRect(4,4,372,62),P.fillStyle="#82a890",P.font='bold 15px "Space Mono", monospace',P.textAlign="center",P.fillText("AUTHORIZED CLEARANCE ONLY",190,32),P.font='11px "Space Mono", monospace',P.fillStyle="#5c7866",P.fillText("ALL REASONING WORK LEAVES A TRACE",190,52);const Ht=new vs(Et),lt=new ze(new wt(1.4,.3,.02),new Ft({map:Ht,roughness:.6}));lt.position.set(-.6,2.2,-2.47),Y.add(lt);const C=new di;C.position.set(1.15,0,-.2);const x=1.05,B=2.1,W=1.2,Z=new ze(new wt(x,B,W),Ze);Z.position.set(0,B/2,0),Z.castShadow=!0,Z.receiveShadow=!0,C.add(Z);const se=.44,ce=.06,Q=(be,Ue)=>{const Pe=document.createElement("canvas");Pe.width=256,Pe.height=72;const et=Pe.getContext("2d");return et.fillStyle="#eadeca",et.fillRect(0,0,256,72),et.fillStyle="#222",et.font='bold 20px "Space Mono", monospace',et.textAlign="center",et.fillText(be,128,34),et.font='10px "Space Mono", monospace',et.fillStyle="#555",et.fillText(Ue,128,56),new vs(Pe)},te=[{title:"SYSTEM LOGS",sub:"SECTION 01 / PIPELINES"},{title:"ZAIN EL OMAR JALLED",sub:"FILE NO. OJ-001 / DOSSIER"},{title:"AI ARCHIVE",sub:"SECTION 03 / AGENTS & RAG"},{title:"FIELD TELEMETRY",sub:"SECTION 04 / METRICS"}];for(let be=0;be<4;be++){const Ue=.32+be*(se+ce),Pe=new di;Pe.position.set(0,Ue,W/2);const et=new ze(new wt(x-.08,se,.06),Ze);et.castShadow=!0,Pe.add(et);const fe=new ze(new wt(.55,.22,.04),De);fe.position.set(0,.04,.035),Pe.add(fe);const ft=new Rh({map:Q(te[3-be].title,te[3-be].sub)}),Ye=new ze(new Di(.48,.16),ft);Ye.position.set(0,.04,.058),Pe.add(Ye);const ut=new ze(new wt(.34,.05,.06),De);if(ut.position.set(0,-.11,.05),ut.castShadow=!0,Pe.add(ut),be===2){const hn=new ze(new wt(x-.14,se-.08,W-.15),new Ft({color:1778718,roughness:.8}));hn.position.set(0,0,-1.05/2),Pe.add(hn);const _n=[14666672,13679259,12888970,14865600,14074534];for(let Cn=0;Cn<8;Cn++){const dt=new ze(new wt(x-.22,.32,.02),new Ft({color:_n[Cn%_n.length],roughness:.85}));dt.position.set(0,.06,-.15-Cn*.1),dt.rotation.x=-.08+Math.random()*.04,Pe.add(dt);const Tt=new ze(new wt(.18,.06,.02),new Ft({color:15457479,roughness:.85}));Tt.position.set(-.25+Cn%3*.25,.24,-.15-Cn*.1),Pe.add(Tt)}Pe.name="interactive_drawer",y.current=Pe}C.add(Pe)}Y.add(C);const ae=new ze(new wt(.85,1.6,.9),Ze);ae.position.set(-.6,.8,-1.8),ae.castShadow=!0,Y.add(ae);const Se=new di;Se.position.set(-.45,0,.35);const oe=2.4,de=.09,Ne=1.3,Le=new ze(new wt(oe,de,Ne),Me);Le.position.set(0,.82,0),Le.castShadow=!0,Le.receiveShadow=!0,Se.add(Le);const Fe=new wt(.08,.82,.08);[[-oe/2+.1,.41,-Ne/2+.1],[oe/2-.1,.41,-Ne/2+.1],[-oe/2+.1,.41,Ne/2-.1],[oe/2-.1,.41,Ne/2-.1]].forEach(be=>{const Ue=new ze(Fe,Me);Ue.position.set(...be),Ue.castShadow=!0,Se.add(Ue);const Pe=new ze(new wt(.09,.06,.09),De);Pe.position.set(be[0],.03,be[2]),Se.add(Pe)});const ue=1.6,ee=.95,le=new ze(new wt(ue,.015,ee),Ge);le.position.set(-.05,.87,.02),le.receiveShadow=!0,Se.add(le);const xe=new ze(new wt(ue+.02,.01,ee+.02),De);xe.position.set(-.05,.865,.02),Se.add(xe);const ie=new di;ie.position.set(-.72,.87,-.28);const Ce=new Ft({color:14604494,roughness:.35}),Ae=new ze(new Pi(.07,.065,.13,24),Ce);Ae.position.y=.065,Ae.castShadow=!0,ie.add(Ae);const pt=new ze(new Pi(.065,.065,.01,24),new Ft({color:1576972,roughness:.15,metalness:.2}));pt.position.y=.12,ie.add(pt);const ct=new bh(.04,.012,12,24,Math.PI),dn=new ze(ct,Ce);dn.rotation.z=-Math.PI/2,dn.position.set(-.075,.065,0),ie.add(dn),Se.add(ie);const fn=new ze(new Pi(.008,.008,.28,12),new Ft({color:12884549,roughness:.5}));fn.rotation.z=Math.PI/2.1,fn.rotation.y=.4,fn.position.set(-.25,.885,.42),Se.add(fn);const ns=document.createElement("canvas");ns.width=256,ns.height=96;const Yn=ns.getContext("2d");Yn.fillStyle="#f5efe0",Yn.fillRect(0,0,256,96),Yn.fillStyle="#222",Yn.font='bold 16px "Space Mono", monospace',Yn.textAlign="center",Yn.fillText("MAKE IT WORK.",128,38),Yn.font='12px "Space Mono", monospace',Yn.fillStyle="#555",Yn.fillText("THEN MAKE IT SCALE.",128,62);const vo=new vs(ns),Yi=new ze(new Di(.24,.1),new Ft({map:vo,roughness:.9}));Yi.rotation.x=-Math.PI/2,Yi.rotation.z=-.15,Yi.position.set(-.55,.88,.18),Se.add(Yi);const Cr=new di;Cr.position.set(.02,-1,.05);const br=document.createElement("canvas");br.width=1024,br.height=1360;const We=br.getContext("2d");We.fillStyle="#cfba96",We.fillRect(0,0,1024,1360),We.strokeStyle="#4a3722",We.lineWidth=6,We.strokeRect(32,32,960,1296),We.strokeStyle="#735b3e",We.lineWidth=2,We.strokeRect(44,44,936,1272),We.fillStyle="#111111",We.font='bold 26px "Space Mono", monospace',We.fillText("DEPARTMENT OF INTELLIGENT SYSTEMS & MLOPS",70,110),We.font='bold 20px "Space Mono", monospace',We.fillStyle="#222222",We.fillText("DOSSIER NO: OJ-001 / CLEARANCE LEVEL 3",70,150),We.strokeStyle="#8a1818",We.lineWidth=6,We.strokeRect(70,210,360,80),We.fillStyle="#8a1818",We.font='bold 42px "Space Mono", monospace',We.fillText("DECLASSIFIED",95,268),We.fillStyle="#000000",We.font='bold 76px "Newsreader", "Playfair Display", Georgia, serif',We.fillText("Zain El Omar",70,440),We.font='bold 84px "Newsreader", "Playfair Display", Georgia, serif',We.fillText("JALLED",70,530),We.font='bold 28px "Space Mono", monospace',We.fillStyle="#111111",We.fillText("DATA SCIENCE & ML ENGINEER",70,600),We.font='bold 24px "Space Mono", monospace',We.fillStyle="#1a1a1a",We.fillText("AUTONOMOUS AGENTS · RAG · MLOPS",70,710),We.fillText("BASE OF OPERATIONS: TUNISIA",70,755),We.fillText("STATUS: AVAILABLE FOR PFE / ENGINEERING",70,800),We.fillStyle="#000000",We.fillRect(70,870,884,5),We.fillStyle="#143820",We.font='bold 26px "Space Mono", monospace',We.fillText("CLICK TO OPEN FULL DOSSIER RECORD ↗",70,960);const Ti=new vs(br),qi=new ze(new wt(.68,.012,.92),new Ft({map:Ti,roughness:.98,metalness:0}));qi.castShadow=!0,qi.receiveShadow=!0,qi.name="interactive_folder",Cr.add(qi);const oa=new ze(new wt(.24,.01,.08),new Ft({color:14666672,roughness:.95}));oa.position.set(.18,.001,-.48),Cr.add(oa),Se.add(Cr),g.current=Cr;const Kt=new di;Kt.position.set(.58,.87,-.22),Kt.name="interactive_lamp",h.current=Kt;const Ki=new ze(new Pi(.12,.14,.04,32),De);Ki.position.y=.02,Ki.castShadow=!0,Kt.add(Ki);const xo=new Pi(.016,.016,.44,16),Zi=new ze(xo,De);Zi.position.set(0,.24,0),Zi.castShadow=!0,Kt.add(Zi);const is=new ze(new wt(.02,.06,.16),De);is.position.set(0,.45,.07),is.rotation.x=.4,Kt.add(is);const _o=new Pi(.1,.1,.34,32,1,!1,0,Math.PI),Rc=new Ft({color:538648,emissive:1793066,emissiveIntensity:.45,roughness:.35,metalness:.1,side:pi}),wi=new ze(_o,Rc);wi.rotation.z=Math.PI/2,wi.rotation.y=Math.PI,wi.position.set(0,.45,.14),wi.castShadow=!0,wi.name="interactive_lamp_shade",Kt.add(wi),m.current=wi;const Cc=new tc(.035,16,16),bc=new Ft({color:16774864,emissive:16771743,emissiveIntensity:1.6,roughness:.1}),rs=new ze(Cc,bc);rs.position.set(0,.44,.14),Kt.add(rs),f.current=rs;const M=new VE(16757337,1.3,5.5,1.8);M.position.set(0,.42,.14),M.castShadow=!0,M.shadow.mapSize.width=1024,M.shadow.mapSize.height=1024,M.shadow.bias=-.001,Kt.add(M),p.current=M;const L=new zE(16761464,.9,4,Math.PI/3.2,.45,1.5);L.position.set(0,.44,.14),L.target.position.set(-.4,-.87,.2),L.castShadow=!0,Kt.add(L),Kt.add(L.target),S.current=L;const q=new ze(new Pi(.003,.003,.14,8),De);q.position.set(.08,.35,.14),Kt.add(q);const G=new ze(new tc(.012,8,8),De);G.position.set(.08,.27,.14),Kt.add(G),Se.add(Kt),Y.add(Se);const j=100,pe=new Rn,_e=new Float32Array(j*3);for(let be=0;be<j;be++)_e[be*3]=(Math.random()-.5)*3.5,_e[be*3+1]=.85+Math.random()*2.2,_e[be*3+2]=(Math.random()-.5)*2.5;pe.setAttribute("position",new Si(_e,3));const me=new Lv({color:16768921,size:.022,transparent:!0,opacity:.45,blending:Cd}),Te=new bE(pe,me);Y.add(Te),d.current=Te;const Re=be=>{const Ue=k.getBoundingClientRect(),Pe=(be.clientX-Ue.left)/Ue.width*2-1,et=-((be.clientY-Ue.top)/Ue.height*2-1);if(F.current.set(Pe,et),r&&(b.current.targetX=Pe*.35,b.current.targetY=et*.25),l.current&&a.current){U.current.setFromCamera(F.current,l.current);const fe=U.current.intersectObjects(a.current.children,!0);let ft=!1;for(let Ye of fe){let ut=Ye.object;for(;ut;){if(ut.name==="interactive_lamp"||ut.name==="interactive_lamp_shade"||ut.name==="interactive_drawer"||ut.name==="interactive_folder"){ft=!0;break}ut=ut.parent}if(ft)break}k.style.cursor=ft?"pointer":"default"}},Be=be=>{if(!l.current||!a.current)return;const Ue=k.getBoundingClientRect(),Pe=(be.clientX-Ue.left)/Ue.width*2-1,et=-((be.clientY-Ue.top)/Ue.height*2-1),fe=new $e(Pe,et);U.current.setFromCamera(fe,l.current);const ft=U.current.intersectObjects(a.current.children,!0);for(let Ye of ft){let ut=Ye.object;for(;ut;){if(ut.name==="interactive_lamp"||ut.name==="interactive_lamp_shade"){i(hn=>{const _n=!hn;return gt.playLampClick(_n),_n});return}if(ut.name==="interactive_drawer"){t==="overview"?(gt.playDrawerSlide(!0),e("cabinet")):t==="cabinet"&&(gt.playPaperTurn(),e("desk_folder"));return}if(ut.name==="interactive_folder"){gt.playDossierOpen(),e("dossier_open");return}ut=ut.parent}}};k.addEventListener("mousemove",Re),k.addEventListener("click",Be);const Xe=()=>{if(!k||!c.current||!l.current)return;const be=k.clientWidth,Ue=k.clientHeight;l.current.aspect=be/Ue,l.current.updateProjectionMatrix(),c.current.setSize(be,Ue)};window.addEventListener("resize",Xe);let we=new qE;const st=()=>{u.current=requestAnimationFrame(st);const be=we.getDelta(),Ue=we.getElapsedTime();b.current.x+=(b.current.targetX-b.current.x)*.05,b.current.y+=(b.current.targetY-b.current.y)*.05;const Pe=.045;v.current.lerp(T.current,Pe),E.current.lerp(w.current,Pe),K.position.x=v.current.x+(r?b.current.x*.4:0),K.position.y=v.current.y+(r?b.current.y*.25:0),K.position.z=v.current.z;const et=new V(E.current.x+(r?b.current.x*.15:0),E.current.y+(r?b.current.y*.15:0),E.current.z);if(K.lookAt(et),y.current&&(A.current+=(R.current-A.current)*.06,y.current.position.z=W/2+A.current),g.current&&(_.current+=(N.current-_.current)*.08,g.current.position.y=_.current),d.current){const fe=d.current.geometry.attributes.position.array;for(let ft=0;ft<j;ft++)fe[ft*3+1]-=be*.04,fe[ft*3+1]<.85&&(fe[ft*3+1]=2.8),fe[ft*3]+=Math.sin(Ue*.4+ft)*6e-4;d.current.geometry.attributes.position.needsUpdate=!0}O.render(Y,K)};return st(),()=>{u.current&&cancelAnimationFrame(u.current),k.removeEventListener("mousemove",Re),k.removeEventListener("click",Be),window.removeEventListener("resize",Xe),O.domElement&&k.contains(O.domElement)&&k.removeChild(O.domElement),O.dispose()}},[r]),o.jsx("div",{ref:s,className:"archive-canvas-container"})}function qw({soundEnabled:t,setSoundEnabled:e,motionEnabled:n,setMotionEnabled:i,onOpenFileIndex:r,onOpenReadingView:s}){const a=()=>{const c=gt.toggle();e(c),c&&gt.playSoftClick()},l=()=>{i(c=>!c),gt.playSoftClick()};return o.jsxs("header",{className:"archive-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsx("div",{className:"monogram-badge",title:"Zain El Omar JALLED Archive",children:o.jsx("span",{className:"monogram-letters",children:"zj"})}),o.jsxs("div",{className:"header-identity",children:[o.jsx("div",{className:"identity-name",children:"Zain El Omar JALLED"}),o.jsx("div",{className:"identity-dept",children:"Independent ML & Systems Archive"})]})]}),o.jsxs("div",{className:"header-right",children:[o.jsxs("div",{className:"header-status-pill",children:[o.jsx("span",{className:"status-blip"}),o.jsx("span",{className:"status-label",children:"VISITOR ACCESS"})]}),o.jsxs("button",{className:"header-ctrl-btn",onClick:a,title:t?"Mute sound effects":"Enable sound effects",children:["SOUND ",o.jsx("span",{className:"ctrl-state",children:t?"ON":"OFF"})]}),o.jsxs("button",{className:"header-ctrl-btn",onClick:l,title:n?"Disable motion drift":"Enable motion drift",children:["MOTION ",o.jsx("span",{className:"ctrl-state",children:n?"ON":"OFF"})]}),o.jsx("button",{className:"header-ctrl-btn",onClick:()=>{gt.playSoftClick(),s()},title:"Open full text reading view",children:"READING VIEW ↗"}),o.jsxs("button",{className:"header-index-btn",onClick:()=>{gt.playSoftClick(),r()},children:[o.jsx("span",{children:"FILE INDEX"}),o.jsx("span",{className:"index-icon",children:"☰"})]})]})]})}function Kw({viewState:t,onStateChange:e}){if(t==="dossier_open")return null;const n=()=>{gt.playDrawerSlide(!0),e("cabinet")},i=()=>{gt.playPaperTurn(),e("desk_folder")},r=()=>{gt.playDossierOpen(),e("dossier_open")};return o.jsxs("div",{className:"archive-hero-overlay",children:[o.jsxs("div",{className:"hero-content-panel",children:[t==="overview"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"hero-dept-tag",children:[o.jsx("span",{className:"plus-sym",children:"+"})," DEPARTMENT OF INTELLIGENT SYSTEMS & MLOPS"]}),o.jsxs("h1",{className:"hero-main-title",children:["Zain El Omar",o.jsx("br",{}),o.jsx("span",{className:"hero-title-sub",children:"JALLED."}),o.jsx("br",{}),o.jsx("span",{className:"hero-title-italic",children:"Data Science & ML."})]}),o.jsxs("p",{className:"hero-description",children:["Some work deserves a closer look.",o.jsx("br",{}),"Engineering autonomous LLM agents, scalable RAG architectures, and resilient MLOps pipelines.",o.jsx("br",{}),"The evidence is inside."]}),o.jsx("div",{className:"hero-cta-wrap",children:o.jsxs("button",{className:"archive-action-btn",onClick:n,children:[o.jsx("span",{children:"OPEN THE ARCHIVE"}),o.jsx("span",{className:"btn-arrow",children:"↗"})]})}),o.jsxs("div",{className:"hero-meta-strip",children:[o.jsx("span",{className:"meta-item",children:"FILE NO. OJ-001"}),o.jsx("span",{className:"meta-sep",children:"/"}),o.jsx("span",{className:"meta-item",children:"AI & AGENTS"}),o.jsx("span",{className:"meta-sep",children:"/"}),o.jsx("span",{className:"meta-item",children:"MLOPS"}),o.jsx("span",{className:"meta-sep",children:"/"}),o.jsx("span",{className:"meta-item",children:"DATA SCIENCE"})]}),o.jsxs("div",{className:"hero-room-badge",children:[o.jsx("span",{className:"badge-num",children:"01"}),o.jsxs("div",{className:"badge-details",children:[o.jsx("span",{className:"badge-title",children:"THE ARCHIVE ROOM"}),o.jsx("span",{className:"badge-sub",children:"LOOK AROUND. FOLLOW YOUR CURIOSITY."})]})]})]}),t==="cabinet"&&o.jsxs("div",{className:"hero-step-fade",children:[o.jsx("div",{className:"hero-dept-tag",children:"PERSONNEL RECORD / OJ-001"}),o.jsxs("h1",{className:"hero-main-title",children:["You found the",o.jsx("br",{}),o.jsx("span",{className:"hero-title-italic",children:"file."})]}),o.jsx("p",{className:"hero-description",children:"One engineer. A portfolio of autonomous agents, on-device vision, and high-throughput production infrastructure."}),o.jsxs("div",{className:"hero-cta-wrap",children:[o.jsxs("button",{className:"archive-action-btn",onClick:i,children:[o.jsx("span",{children:"TAKE THE DOSSIER"}),o.jsx("span",{className:"btn-arrow",children:"↗"})]}),o.jsx("button",{className:"archive-back-btn",onClick:()=>{gt.playDrawerSlide(!1),e("overview")},children:"← STEP BACK"})]})]}),t==="desk_folder"&&o.jsxs("div",{className:"hero-step-fade",children:[o.jsx("div",{className:"hero-dept-tag",children:"CLEARED FOR PUBLIC ACCESS"}),o.jsxs("h1",{className:"hero-main-title",children:["A closer",o.jsx("br",{}),o.jsx("span",{className:"hero-title-italic",children:"look."})]}),o.jsx("p",{className:"hero-description",children:"Go on. Open the folder. The work speaks for itself."}),o.jsxs("div",{className:"hero-cta-wrap",children:[o.jsxs("button",{className:"archive-action-btn pulse-glow",onClick:r,children:[o.jsx("span",{children:"OPEN THE FILE"}),o.jsx("span",{className:"btn-arrow",children:"↗"})]}),o.jsx("button",{className:"archive-back-btn",onClick:()=>{gt.playDrawerSlide(!0),e("cabinet")},children:"← RETURN TO CABINET"})]})]})]}),o.jsxs("footer",{className:"archive-footer-bar",children:[o.jsxs("div",{className:"footer-status-left",children:[o.jsx("span",{className:"live-dot"}),o.jsxs("span",{children:[t==="overview"&&"ARCHIVE ONLINE / AWAITING YOUR CURIOSITY",t==="cabinet"&&"CABINET ACCESSED / PERSONNEL DRAWER UNLOCKED",t==="desk_folder"&&"DOSSIER RETRIEVED / INSPECTION READY"]})]}),o.jsx("div",{className:"footer-status-center",children:"CLICK TO EXPLORE · DRAG TO LOOK · CLICK LAMP TO TOGGLE LIGHT"}),o.jsxs("div",{className:"footer-status-right",children:[o.jsx("span",{children:"36.80° N / 10.18° E"}),o.jsx("span",{className:"geo-code",children:"TN"})]})]})]})}const Hv=""+new URL("profile-DcajcGm_.jpg",import.meta.url).href,Us=""+new URL("Zain_el_omar_JALLED-D25Beu66.pdf",import.meta.url).href;var Wv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qm=hr.createContext&&hr.createContext(Wv),Zw=["attr","size","title"];function Jw(t,e){if(t==null)return{};var n=$w(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function $w(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nc.apply(this,arguments)}function Km(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ic(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Km(Object(n),!0).forEach(function(i){Qw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Qw(t,e,n){return e=eA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eA(t){var e=tA(t,"string");return typeof e=="symbol"?e:e+""}function tA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xv(t){return t&&t.map((e,n)=>hr.createElement(e.tag,ic({key:n},e.attr),Xv(e.child)))}function Rr(t){return e=>hr.createElement(nA,nc({attr:ic({},t.attr)},e),Xv(t.child))}function nA(t){var e=n=>{var{attr:i,size:r,title:s}=t,a=Jw(t,Zw),l=r||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),hr.createElement("svg",nc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:c,style:ic(ic({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&hr.createElement("title",null,s),t.children)};return qm!==void 0?hr.createElement(qm.Consumer,null,n=>e(n)):e(Wv)}function Yv(t){return Rr({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function qv(t){return Rr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function rc(t){return Rr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function Os(t){return Rr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(t)}function sc(t){return Rr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function Ws(t){return Rr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function Kv(t){return Rr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function iA(t){return Rr({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function rA({activeTab:t,setActiveTab:e,onCloseDossier:n,onOpenReadingView:i}){const[r,s]=Ke.useState(!1),[a,l]=Ke.useState({name:"",email:"",message:""}),c=[{id:"subject",number:"01",label:"The subject",pages:"01 - 02"},{id:"service",number:"02",label:"Service record",pages:"03 - 04"},{id:"internhunter",number:"03",label:"InternHunter AI",pages:"05 - 06"},{id:"agrismart",number:"04",label:"AgriSmart",pages:"07 - 08"},{id:"mlops",number:"05",label:"End-to-End MLOps",pages:"09 - 10"},{id:"certifications",number:"06",label:"Certifications",pages:"11 - 12"},{id:"contact",number:"07",label:"Open a channel",pages:"13 - 14"}],u=c.findIndex(y=>y.id===t),h=c[u]||c[0],p=()=>{u>0&&(gt.playPaperTurn(),e(c[u-1].id))},f=()=>{u<c.length-1&&(gt.playPaperTurn(),e(c[u+1].id))},m=y=>{y!==t&&(gt.playPaperTurn(),e(y))},S=y=>{y.preventDefault(),gt.playSoftClick(),s(!0)};return o.jsxs("div",{className:"dossier-overlay-container",children:[o.jsxs("div",{className:"dossier-book-wrapper",children:[o.jsx("aside",{className:"dossier-side-tabs","aria-label":"Dossier Chapters",children:c.map(y=>o.jsxs("button",{className:`dossier-tab-btn ${t===y.id?"active":""}`,onClick:()=>m(y.id),children:[o.jsx("span",{className:"tab-idx",children:y.number}),o.jsx("span",{className:"tab-lbl",children:y.label})]},y.id))}),o.jsxs("div",{className:"dossier-pages-spread",children:[t==="subject"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / PERSONNEL RECORD"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"SUBJECT IDENTIFICATION"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Zain El Omar",o.jsx("br",{}),o.jsx("span",{className:"serif-italic",children:"JALLED."})]}),o.jsxs("div",{className:"subject-photo-meta-grid",children:[o.jsxs("div",{className:"photo-tape-frame",children:[o.jsx("div",{className:"tape-strip top-tape"}),o.jsx("img",{src:Hv,alt:"Zain El Omar JALLED",className:"subject-portrait-img"}),o.jsx("div",{className:"tape-strip btm-tape"}),o.jsx("span",{className:"photo-caption",children:"SUBJECT / OJ-001"})]}),o.jsxs("div",{className:"subject-meta-fields",children:[o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"DESIGNATION"}),o.jsx("div",{className:"meta-val highlight",children:"Data Science Engineer"}),o.jsx("div",{className:"meta-sub",children:"ML Engineering | MLOps"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"BASE OF OPERATIONS"}),o.jsx("div",{className:"meta-val",children:"Tunisia"}),o.jsx("div",{className:"meta-sub",children:"Available Worldwide / Remote"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"STATUS"}),o.jsx("div",{className:"meta-val status-avail",children:"Available for PFE / Hire"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"CURRICULUM VITAE"}),o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"dossier-inline-link",children:["Download PDF Dossier ",o.jsx(Os,{className:"link-icon"})]})]})]})]}),o.jsxs("div",{className:"subject-creed-quote",children:["An engineer's logic.",o.jsx("br",{}),"A builder's obsession."]}),o.jsx("div",{className:"stamp-box declassified-stamp",children:"DECLASSIFIED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"01"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / SUBJECT ASSESSMENT"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"THE ENGINEER BEHIND THE SYSTEMS"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Curiosity.",o.jsx("br",{}),o.jsx("span",{className:"serif-italic",children:"Then code."})]}),o.jsx("h3",{className:"section-motto",children:"Building intelligent systems that thrive in production."}),o.jsxs("p",{className:"dossier-body-text",children:["Final-year Data Science engineering student at ",o.jsx("strong",{children:"ESPRIT"})," with a solid foundation in software engineering from ",o.jsx("strong",{children:"ISET Rades"}),". Hands-on experience architecting LLM-powered autonomous agents, enterprise RAG systems, machine learning pipelines, and containerized microservices."]}),o.jsx("p",{className:"dossier-body-text",children:"Skilled across Python, LangChain, LangGraph, FastAPI, Docker, and MLflow, coupled with battle-tested production experience in mobile architecture and infrastructure telemetry monitoring."}),o.jsxs("div",{className:"dossier-callout-box",children:[o.jsx("div",{className:"callout-label",children:"KNOWN FOR"}),o.jsx("div",{className:"callout-heading",children:"End-to-end ownership."}),o.jsx("div",{className:"callout-text",children:"Practical AI. Autonomous agent workflows. Production-grade MLOps rigor that connects machine learning models to real-world infrastructure."})]}),o.jsxs("div",{className:"dossier-sub-section",children:[o.jsx("div",{className:"sub-section-title",children:"Beyond the terminal"}),o.jsx("p",{className:"sub-section-desc",children:"A passion for exploring frontier generative AI, optimizing edge inference, and designing resilient distributed data pipelines that turn raw data into actionable decisions."})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"FIELD TESTED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"02"})]})]})]}),t==="service"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / SERVICE HISTORY"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"A RECORD OF BUILDING & SHIPPING"}),o.jsxs("h2",{className:"subject-editorial-title",children:["In the ",o.jsx("span",{className:"serif-italic",children:"field."})]}),o.jsxs("div",{className:"service-records-list",children:[o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"JUL – SEPT 2026"}),o.jsx("span",{className:"badge-onsite",children:"ON-SITE"})]}),o.jsx("div",{className:"service-role",children:"Infrastructure Monitoring Intern"}),o.jsx("div",{className:"service-company",children:"Delice Danone · Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Built an end-to-end Zabbix 7.0 / Hyper-V monitoring pipeline using Docker and PostgreSQL with VM auto-discovery (LLD)."}),o.jsx("li",{children:"Implemented custom PowerShell UserParameters, PSK encryption, SLA triggers, and alerting dashboards."}),o.jsx("li",{children:"Developed a Python metrics collector pulling live Zabbix API telemetry into SQLite for infrastructure anomaly detection."})]})]}),o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"DEC 2025 – PRESENT"}),o.jsx("span",{className:"badge-remote",children:"REMOTE"})]}),o.jsx("div",{className:"service-role",children:"Mobile Developer (Part-time)"}),o.jsx("div",{className:"service-company",children:"Kinko Booking · Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Developed and maintained production mobile features in Flutter applying clean architecture."}),o.jsx("li",{children:"Integrated Firebase Cloud Messaging, GoRouter navigation, and RESTful API data flows."}),o.jsx("li",{children:"Contributed via Git CI/CD, supporting automated testing and release pipelines."})]})]}),o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"JUN – AUG 2025"}),o.jsx("span",{className:"badge-onsite",children:"ON-SITE"})]}),o.jsx("div",{className:"service-role",children:"Data Engineering Intern"}),o.jsx("div",{className:"service-company",children:"Proservices Training Company · Ariana, Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Designed PostgreSQL analytics backend capturing engagement metrics for 100+ active users with optimized indexing."}),o.jsx("li",{children:"Built scalable RESTful services using NestJS and MVVM architecture."})]})]})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"03"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL CAPABILITIES"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"TOOLS OF THE TRADE"}),o.jsxs("h2",{className:"subject-editorial-title",children:["The ",o.jsx("span",{className:"serif-italic",children:"toolkit."})]}),o.jsxs("div",{className:"toolkit-categories",children:[o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"01 / AI & AGENTS"}),o.jsx("div",{className:"tk-title",children:"Autonomous Reasoning & Grounded RAG"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"Python"}),o.jsx("span",{children:"LangChain"}),o.jsx("span",{children:"LangGraph"}),o.jsx("span",{children:"RAG"}),o.jsx("span",{children:"Autonomous Agents"}),o.jsx("span",{children:"pgvector"}),o.jsx("span",{children:"Prompt Engineering"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"02 / MACHINE LEARNING & DL"}),o.jsx("div",{className:"tk-title",children:"Modeling, Transfer Learning & Vision"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"PyTorch"}),o.jsx("span",{children:"TensorFlow"}),o.jsx("span",{children:"Scikit-learn"}),o.jsx("span",{children:"MobileNetV2"}),o.jsx("span",{children:"SMOTE"}),o.jsx("span",{children:"Stable Diffusion"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"03 / MLOPS & INFRASTRUCTURE"}),o.jsx("div",{className:"tk-title",children:"Observability, Containers & CI/CD"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"MLflow"}),o.jsx("span",{children:"Docker"}),o.jsx("span",{children:"Docker Compose"}),o.jsx("span",{children:"Nginx"}),o.jsx("span",{children:"CI/CD"}),o.jsx("span",{children:"Zabbix 7.0"}),o.jsx("span",{children:"Elasticsearch"}),o.jsx("span",{children:"Kibana"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"04 / DATA & SYSTEMS"}),o.jsx("div",{className:"tk-title",children:"Pipelines, Storage & Cloud Services"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"MongoDB"}),o.jsx("span",{children:"Oracle SQL"}),o.jsx("span",{children:"SQLite"}),o.jsx("span",{children:"Sentinel-2 GEE"}),o.jsx("span",{children:"FastAPI"}),o.jsx("span",{children:"Linux"})]})]})]}),o.jsxs("div",{className:"academic-record-box",children:[o.jsx("div",{className:"academic-title",children:"ACADEMIC RECORD"}),o.jsxs("div",{className:"academic-item",children:[o.jsx("strong",{children:"Engineering Degree in Computer Science – Data Science"}),o.jsx("span",{children:"ESPRIT · 2024 – Present"})]}),o.jsxs("div",{className:"academic-item",children:[o.jsx("strong",{children:"Bachelor Degree in Information Technology"}),o.jsx("span",{children:"ISET Rades · 2021 – 2024"})]})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"04"})]})]})]}),t==="internhunter"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 01"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"AUTONOMOUS DISCOVERY AGENT / PERSONAL PROJECT"}),o.jsxs("h2",{className:"project-editorial-title",children:["InternHunter AI",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"From hours of manual searching to automated multi-step discovery."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"workflow_graph.py — LangGraph Engine"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"})," = StateGraph(AgentState)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"web_search"'}),", search_platforms)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"semantic_rank"'}),", chroma_matcher)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"report"'}),", dispatch_notion_telegram)"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Discovery Cycle: 5 platforms checked · 14 opportunities matched"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"An autonomous discovery agent that continuously monitors European & French job platforms, evaluates job requirements against semantic resume vectors, and dispatches structured alerts."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"Python"}),o.jsx("span",{children:"LangGraph"}),o.jsx("span",{children:"Groq / Llama 3"}),o.jsx("span",{children:"ChromaDB"}),o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"Notion API"}),o.jsx("span",{children:"Telegram"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect Repository on GitHub ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"05"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 01 / INTERNHUNTER AI"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Navigating fragmented hiring platforms across Europe consumes over 2 hours daily, riddled with noisy keyword searches, manual status logging, and delayed applications."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Architectural Innovations"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Stateful Multi-step Graph:"})," Built with LangGraph, featuring conditional branching, state checkpoints, and recovery mechanisms across search and parsing stages."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Sub-second LLM Reasoning:"})," Powered by Groq-accelerated Llama 3 for structured extraction, job criteria grading, and personalized fit justification."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Vector Similarity Matching:"})," ChromaDB embedding retrieval compares job descriptions against candidate skills and preferences."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Automated Dispatch & Storage:"})," Synchronizes new discoveries into PostgreSQL, pushes actionable alerts to Telegram, and organizes application status in Notion."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"PROVEN OUTCOME"}),o.jsx("div",{className:"callout-heading",children:"95% reduction in search time."}),o.jsx("div",{className:"callout-text",children:"Reduced manual search time from 2+ hours daily to near-zero by automating continuous discovery across 5+ platforms."})]}),o.jsx("div",{className:"stamp-box verified-stamp",children:"VERIFIED AGENT"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"06"})]})]})]}),t==="agrismart"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 02"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"SOLUTION ARCHITECT / TEAM OF 6"}),o.jsxs("h2",{className:"project-editorial-title",children:["AgriSmart",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"AI-powered precision agriculture platform with edge vision & RAG."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"architecture_services.yml — AgriSmart"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"services:"})," [irrigation_rag, crop_vision, satellite_gee, auth, gateway, telemetry]"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"model:"})," MobileNetV2-Int8-TFLite (87,000+ images)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"vector_store:"})," pgvector (PostgreSQL 16)"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Edge Inference Latency: 2.1s (offline) · Nginx Gateway 200 OK"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"A distributed agricultural microservice platform featuring an offline mobile crop disease detector, a grounded RAG irrigation advisor, and satellite geospatial analytics."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"6x FastAPI"}),o.jsx("span",{children:"MobileNetV2 TFLite"}),o.jsx("span",{children:"LangChain"}),o.jsx("span",{children:"pgvector"}),o.jsx("span",{children:"Sentinel-2"}),o.jsx("span",{children:"Docker"}),o.jsx("span",{children:"Nginx"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect Microservices Repository ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"07"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 02 / AGRISMART"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Farmers in remote areas suffer from unpredictable water availability and crop disease outbreaks without reliable high-bandwidth internet connectivity."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Solution Architecture & Contributions"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Microservice Mesh:"})," Architected 6 decoupled FastAPI services, unified with Nginx reverse proxy and orchestrated with Docker Compose."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Grounded RAG Assistant:"})," LangChain pipeline with pgvector embedding store and Llama 3 to answer agronomic queries grounded in scientific soil & irrigation data."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"On-Device Edge Vision:"})," Quantized MobileNetV2 into TFLite Int8 trained on 87K+ disease images, achieving sub-3s inference completely offline on mobile devices."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Geospatial Crop Analytics:"})," Integrated Sentinel-2 imagery via Google Earth Engine API for vegetative health index (NDVI) monitoring."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"SCALE & LEADERSHIP"}),o.jsx("div",{className:"callout-heading",children:"Sub-3s offline inference."}),o.jsx("div",{className:"callout-text",children:"Led onboarding and architectural guidelines for a team of 6 engineers while delivering sub-3s offline disease detection on 87K+ images."})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"FIELD DEPLOYED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"08"})]})]})]}),t==="mlops"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 03"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"PRODUCTION MACHINE LEARNING / CLASSIFICATION"}),o.jsxs("h2",{className:"project-editorial-title",children:["End-to-End MLOps",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"Drug classification pipeline with MLflow tracking and ELK observability."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"mlflow_experiment_run.log — Production"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"model:"})," RandomForestClassifier(n_estimators=200)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"sampling:"})," SMOTE(ratio=balanced, k_neighbors=5)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"telemetry:"})," Elasticsearch + Kibana daemon active"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Metrics: F1-Score: 0.89 · Inference Latency: 74ms · Status: SERVING"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"An enterprise machine learning pipeline featuring balanced training on imbalanced medical datasets, automated artifact versioning, low-latency REST serving, and live infrastructure telemetry."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"Scikit-Learn"}),o.jsx("span",{children:"SMOTE"}),o.jsx("span",{children:"MLflow"}),o.jsx("span",{children:"FastAPI"}),o.jsx("span",{children:"Docker Compose"}),o.jsx("span",{children:"Elasticsearch"}),o.jsx("span",{children:"Kibana"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect MLOps Pipeline Repository ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"09"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 03 / MLOPS DRUG CLASSIFIER"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Real-world medical datasets suffer from extreme class imbalances. In addition, production models often suffer silent degradation without centralized logging, experiment lineage, and performance telemetry."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Engineering Implementation"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Imbalanced Learning:"})," Integrated Synthetic Minority Over-sampling Technique (SMOTE) with a Random Forest ensemble, boosting minority class recall and achieving a ",o.jsx("strong",{children:"0.89 F1-score"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Experiment Registry:"})," Managed hyperparameter tuning, model artifacts, and evaluation metrics through an MLflow tracking server."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Microsecond-scale Serving:"})," Built a lightweight FastAPI microservice delivering inference responses under 100ms."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Production Observability:"})," Containerized the ML inference service and wired logs into Elasticsearch and Kibana for real-time monitoring of inference volume and drift."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"METRIC HIGHLIGHT"}),o.jsx("div",{className:"callout-heading",children:"0.89 F1 · Sub-100ms Latency."}),o.jsx("div",{className:"callout-text",children:"Containerized stack with automated monitoring, ensuring reproducible experiments and continuous model health observability."})]}),o.jsx("div",{className:"stamp-box declassified-stamp",children:"VERIFIED MLOPS"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"10"})]})]})]}),t==="certifications"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / ACCREDITATIONS"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"OFFICIAL CREDENTIALS & CERTIFICATIONS"}),o.jsxs("h2",{className:"subject-editorial-title",children:["NVIDIA ",o.jsx("span",{className:"serif-italic",children:"Deep Learning."})]}),o.jsxs("div",{className:"cert-cards-container",children:[o.jsxs("div",{className:"cert-card-vintage",children:[o.jsxs("div",{className:"cert-badge-row",children:[o.jsx("span",{className:"cert-issuer",children:"NVIDIA DEEP LEARNING INSTITUTE"}),o.jsx("span",{className:"cert-date",children:"APR 2026"})]}),o.jsx("div",{className:"cert-title",children:"Applications of AI for Anomaly Detection"}),o.jsx("div",{className:"cert-topics",children:"Autoencoders · Anomaly Scoring · Network Intrusion Detection · Threshold Calibration"}),o.jsxs("div",{className:"cert-verified-stamp",children:[o.jsx(rc,{className:"chk-icon"})," VERIFIED CREDENTIAL"]})]}),o.jsxs("div",{className:"cert-card-vintage",children:[o.jsxs("div",{className:"cert-badge-row",children:[o.jsx("span",{className:"cert-issuer",children:"NVIDIA DEEP LEARNING INSTITUTE"}),o.jsx("span",{className:"cert-date",children:"FEB 2026"})]}),o.jsx("div",{className:"cert-title",children:"Fundamentals of Deep Learning"}),o.jsx("div",{className:"cert-topics",children:"Convolutional Neural Networks (CNNs) · Transfer Learning · GPU-Accelerated Training"}),o.jsxs("div",{className:"cert-verified-stamp",children:[o.jsx(rc,{className:"chk-icon"})," VERIFIED CREDENTIAL"]})]})]}),o.jsx("div",{className:"cert-note-box",children:"Certified in GPU-accelerated neural network architectures, anomaly modeling, and production model deployment workflows by NVIDIA."}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"11"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / ACADEMIC BACKGROUND"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"HIGHER EDUCATION & DEGREES"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Academic ",o.jsx("span",{className:"serif-italic",children:"record."})]}),o.jsxs("div",{className:"education-timeline-vintage",children:[o.jsxs("div",{className:"edu-entry",children:[o.jsx("div",{className:"edu-years",children:"2024 – PRESENT"}),o.jsx("div",{className:"edu-degree",children:"Engineering Degree in Computer Science – Data Science"}),o.jsx("div",{className:"edu-school",children:"Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)"}),o.jsx("p",{className:"edu-desc",children:"Specialized in AI & Autonomous Agents, Machine Learning Pipelines, High-Performance Computing, Distributed Systems, and Cloud-Native MLOps."})]}),o.jsxs("div",{className:"edu-entry",children:[o.jsx("div",{className:"edu-years",children:"2021 – 2024"}),o.jsx("div",{className:"edu-degree",children:"Bachelor Degree in Information Technology"}),o.jsx("div",{className:"edu-school",children:"Higher Institute of Technological Studies of Rades (ISET Rades)"}),o.jsx("p",{className:"edu-desc",children:"Foundational curriculum covering algorithms, data structures, relational database systems, software architecture, and network security."})]})]}),o.jsxs("div",{className:"dossier-callout-box",children:[o.jsx("div",{className:"callout-label",children:"GOAL & AVAILABILITY"}),o.jsx("div",{className:"callout-heading",children:"PFE Internship & Engineering."}),o.jsx("div",{className:"callout-text",children:"Seeking an impactful graduation project (PFE) or full-time position in Data Science, Machine Learning Engineering, or MLOps starting in 2026."})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"12"})]})]})]}),t==="contact"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"dossier-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / DIRECT CHANNELS"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"COMMUNICATION DISPATCH"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Establish ",o.jsx("span",{className:"serif-italic",children:"contact."})]}),o.jsx("p",{className:"dossier-body-text",children:"Available for technical inquiries, PFE opportunities, research collaborations, or discussions on autonomous agents and MLOps infrastructure."}),o.jsxs("div",{className:"contact-channels-grid",children:[o.jsxs("a",{href:"mailto:omar.jalled@esprit.tn",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(sc,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"ACADEMIC / OFFICIAL EMAIL"}),o.jsx("span",{className:"ch-val",children:"omar.jalled@esprit.tn"})]})]}),o.jsxs("a",{href:"mailto:jalledomar2001@gmail.com",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(sc,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"PERSONAL EMAIL"}),o.jsx("span",{className:"ch-val",children:"jalledomar2001@gmail.com"})]})]}),o.jsxs("a",{href:"tel:+21629763231",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(Kv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"TELEPHONE / WHATSAPP"}),o.jsx("span",{className:"ch-val",children:"+216 29 763 231"})]})]}),o.jsxs("a",{href:"https://linkedin.com/in/omar-jalled",target:"_blank",rel:"noopener noreferrer",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(qv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"LINKEDIN PROFILE"}),o.jsx("span",{className:"ch-val",children:"linkedin.com/in/omar-jalled"})]})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(Yv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"GITHUB REPOSITORIES"}),o.jsx("span",{className:"ch-val",children:"github.com/omarJ10"})]})]})]}),o.jsx("div",{className:"cv-download-prominent",children:o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"cv-download-btn-full",children:[o.jsx(Os,{})," DOWNLOAD OFFICIAL RESUME (PDF)"]})}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"13"})]})]}),o.jsxs("div",{className:"dossier-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TRANSMISSION CONSOLE"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"ENCRYPTED TELEMETRY DISPATCH"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Send a ",o.jsx("span",{className:"serif-italic",children:"dispatch."})]}),r?o.jsxs("div",{className:"dispatch-success-box",children:[o.jsx("div",{className:"success-badge",children:"TRANSMISSION RECEIVED"}),o.jsx("h3",{className:"success-heading",children:"Signal logged in archive."}),o.jsx("p",{className:"success-msg",children:"Thank you for reaching out. I have received your message dispatch and will respond promptly to your coordinates."}),o.jsx("button",{className:"reset-form-btn",onClick:()=>{s(!1),l({name:"",email:"",message:""})},children:"SEND ANOTHER TRANSMISSION"})]}):o.jsxs("form",{className:"dispatch-form",onSubmit:S,children:[o.jsxs("div",{className:"form-group-archive",children:[o.jsx("label",{children:"SENDER IDENTITY / NAME"}),o.jsx("input",{type:"text",required:!0,placeholder:"e.g. Marie Curie",value:a.name,onChange:y=>l({...a,name:y.target.value})})]}),o.jsxs("div",{className:"form-group-archive",children:[o.jsx("label",{children:"RETURN FREQUENCY / EMAIL"}),o.jsx("input",{type:"email",required:!0,placeholder:"e.g. marie@research-lab.org",value:a.email,onChange:y=>l({...a,email:y.target.value})})]}),o.jsxs("div",{className:"form-group-archive",children:[o.jsx("label",{children:"MESSAGE PAYLOAD"}),o.jsx("textarea",{required:!0,rows:"4",placeholder:"Discussing an autonomous agent project, PFE opportunity, or MLOps architecture...",value:a.message,onChange:y=>l({...a,message:y.target.value})})]}),o.jsxs("button",{type:"submit",className:"dispatch-submit-btn",children:[o.jsx("span",{children:"TRANSMIT DISPATCH"}),o.jsx("span",{className:"submit-arrow",children:"↗"})]})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"TRANSMISSION READY"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"14"})]})]})]})]})]}),o.jsxs("div",{className:"dossier-bottom-bar",children:[o.jsxs("button",{className:"dossier-return-btn",onClick:()=>{gt.playDossierOpen(),n()},children:[o.jsx("span",{className:"return-arrow",children:"⌃"}),o.jsx("span",{children:"RETURN FILE"})]}),o.jsxs("div",{className:"dossier-page-flipper",children:[o.jsx("button",{className:"flip-btn",onClick:p,disabled:u===0,title:"Previous pages",children:"←"}),o.jsxs("span",{className:"flip-counter",children:[h.pages," / 14"]}),o.jsx("button",{className:"flip-btn",onClick:f,disabled:u===c.length-1,title:"Next pages",children:"→"})]}),o.jsxs("button",{className:"dossier-reading-mode-btn",onClick:()=>{gt.playSoftClick(),i()},children:[o.jsx("span",{children:"READING VIEW"}),o.jsx("span",{className:"reading-arrow",children:"↗"})]})]})]})}function sA({isOpen:t,onClose:e,onSelectChapter:n,onOpenReadingView:i}){if(!t)return null;const r=[{id:"subject",number:"01",title:"The subject",desc:"Personnel record, assessment, and core creed"},{id:"service",number:"02",title:"Service record & toolkit",desc:"Delice Danone, Kinko, Proservices, and skills"},{id:"internhunter",number:"03",title:"InternHunter AI",desc:"Autonomous LangGraph discovery agent"},{id:"agrismart",number:"04",title:"AgriSmart Platform",desc:"Edge vision, 6 FastAPI services & RAG"},{id:"mlops",number:"05",title:"End-to-End MLOps Pipeline",desc:"SMOTE classification, MLflow & ELK telemetry"},{id:"certifications",number:"06",title:"Certifications & degrees",desc:"NVIDIA credentials and ESPRIT/ISET degrees"},{id:"contact",number:"07",title:"Open a channel",desc:"Direct communications, email, phone & message form"}];return o.jsx("div",{className:"archive-modal-backdrop",onClick:e,children:o.jsxs("div",{className:"file-index-card",onClick:s=>s.stopPropagation(),children:[o.jsxs("div",{className:"index-card-header",children:[o.jsx("div",{className:"index-card-tag",children:"ARCHIVE OJ-001 / DIRECTORY"}),o.jsx("button",{className:"index-close-btn",onClick:()=>{gt.playSoftClick(),e()},"aria-label":"Close directory",children:"✕"})]}),o.jsx("h2",{className:"index-card-title",children:"Follow the evidence."}),o.jsx("p",{className:"index-card-sub",children:"Choose a chapter to open the dossier."}),o.jsx("div",{className:"index-chapters-list",children:r.map(s=>o.jsxs("button",{className:"index-chapter-row",onClick:()=>{gt.playPaperTurn(),n(s.id),e()},children:[o.jsxs("div",{className:"row-left",children:[o.jsx("span",{className:"row-num",children:s.number}),o.jsxs("div",{className:"row-texts",children:[o.jsx("span",{className:"row-title",children:s.title}),o.jsx("span",{className:"row-desc",children:s.desc})]})]}),o.jsx("span",{className:"row-arrow",children:"↗"})]},s.id))}),o.jsx("div",{className:"index-card-footer",children:o.jsx("button",{className:"open-full-reading-link",onClick:()=>{gt.playSoftClick(),e(),i()},children:"Open the complete reading view ↗"})})]})})}function aA({isOpen:t,onClose:e}){return t?o.jsx("div",{className:"reading-view-modal-backdrop",onClick:e,children:o.jsxs("div",{className:"reading-view-container-card",onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{className:"reading-view-topbar",children:[o.jsxs("div",{className:"rv-top-left",children:[o.jsx("h2",{className:"rv-top-title",children:"The complete dossier."}),o.jsx("div",{className:"rv-top-sub",children:"Zain El Omar JALLED · Data Science Engineer | ML Engineering | MLOps"})]}),o.jsxs("div",{className:"rv-top-right",children:[o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"rv-download-cv-btn",children:[o.jsx(Os,{})," Download Official CV"]}),o.jsx("button",{className:"rv-close-btn",onClick:()=>{gt.playSoftClick(),e()},title:"Close reading view",children:o.jsx(iA,{})})]})]}),o.jsxs("div",{className:"reading-view-scroll-body",children:[o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / PERSONNEL RECORD"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"SUBJECT IDENTIFICATION"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Zain El Omar",o.jsx("br",{}),o.jsx("span",{className:"serif-italic",children:"JALLED."})]}),o.jsxs("div",{className:"subject-photo-meta-grid",children:[o.jsxs("div",{className:"photo-tape-frame",children:[o.jsx("div",{className:"tape-strip top-tape"}),o.jsx("img",{src:Hv,alt:"Zain El Omar JALLED",className:"subject-portrait-img"}),o.jsx("div",{className:"tape-strip btm-tape"}),o.jsx("span",{className:"photo-caption",children:"SUBJECT / OJ-001"})]}),o.jsxs("div",{className:"subject-meta-fields",children:[o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"DESIGNATION"}),o.jsx("div",{className:"meta-val highlight",children:"Data Science Engineer"}),o.jsx("div",{className:"meta-sub",children:"ML Engineering | MLOps"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"BASE OF OPERATIONS"}),o.jsx("div",{className:"meta-val",children:"Tunisia"}),o.jsx("div",{className:"meta-sub",children:"Available Worldwide / Remote"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"STATUS"}),o.jsx("div",{className:"meta-val status-avail",children:"Available for PFE / Hire"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"CURRICULUM VITAE"}),o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"dossier-inline-link",children:["Download PDF Dossier ",o.jsx(Os,{className:"link-icon"})]})]})]})]}),o.jsxs("div",{className:"subject-creed-quote",children:["An engineer's logic.",o.jsx("br",{}),"A builder's obsession."]}),o.jsx("div",{className:"stamp-box declassified-stamp",children:"DECLASSIFIED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"01"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / SUBJECT ASSESSMENT"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"THE ENGINEER BEHIND THE SYSTEMS"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Curiosity.",o.jsx("br",{}),o.jsx("span",{className:"serif-italic",children:"Then code."})]}),o.jsx("h3",{className:"section-motto",children:"Building intelligent systems that thrive in production."}),o.jsxs("p",{className:"dossier-body-text",children:["Final-year Data Science engineering student at ",o.jsx("strong",{children:"ESPRIT"})," with a solid foundation in software engineering from ",o.jsx("strong",{children:"ISET Rades"}),". Hands-on experience architecting LLM-powered autonomous agents, enterprise RAG systems, machine learning pipelines, and containerized microservices."]}),o.jsx("p",{className:"dossier-body-text",children:"Skilled across Python, LangChain, LangGraph, FastAPI, Docker, and MLflow, coupled with battle-tested production experience in mobile architecture and infrastructure telemetry monitoring."}),o.jsxs("div",{className:"dossier-callout-box",children:[o.jsx("div",{className:"callout-label",children:"KNOWN FOR"}),o.jsx("div",{className:"callout-heading",children:"End-to-end ownership."}),o.jsx("div",{className:"callout-text",children:"Practical AI. Autonomous agent workflows. Production-grade MLOps rigor that connects machine learning models to real-world infrastructure."})]}),o.jsxs("div",{className:"dossier-sub-section",children:[o.jsx("div",{className:"sub-section-title",children:"Beyond the terminal"}),o.jsx("p",{className:"sub-section-desc",children:"A passion for exploring frontier generative AI, optimizing edge inference, and designing resilient distributed data pipelines that turn raw data into actionable decisions."})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"FIELD TESTED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"02"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / SERVICE HISTORY"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"A RECORD OF BUILDING & SHIPPING"}),o.jsxs("h2",{className:"subject-editorial-title",children:["In the ",o.jsx("span",{className:"serif-italic",children:"field."})]}),o.jsxs("div",{className:"service-records-list",children:[o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"JUL – SEPT 2026"}),o.jsx("span",{className:"badge-onsite",children:"ON-SITE"})]}),o.jsx("div",{className:"service-role",children:"Infrastructure Monitoring Intern"}),o.jsx("div",{className:"service-company",children:"Delice Danone · Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Built an end-to-end Zabbix 7.0 / Hyper-V monitoring pipeline using Docker and PostgreSQL with VM auto-discovery (LLD)."}),o.jsx("li",{children:"Implemented custom PowerShell UserParameters, PSK encryption, SLA triggers, and alerting dashboards."}),o.jsx("li",{children:"Developed a Python metrics collector pulling live Zabbix API telemetry into SQLite for infrastructure anomaly detection."})]})]}),o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"DEC 2025 – PRESENT"}),o.jsx("span",{className:"badge-remote",children:"REMOTE"})]}),o.jsx("div",{className:"service-role",children:"Mobile Developer (Part-time)"}),o.jsx("div",{className:"service-company",children:"Kinko Booking · Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Developed and maintained production mobile features in Flutter applying clean architecture."}),o.jsx("li",{children:"Integrated Firebase Cloud Messaging, GoRouter navigation, and RESTful API data flows."}),o.jsx("li",{children:"Contributed via Git CI/CD, supporting automated testing and release pipelines."})]})]}),o.jsxs("div",{className:"service-entry",children:[o.jsxs("div",{className:"service-header-row",children:[o.jsx("span",{className:"service-date",children:"JUN – AUG 2025"}),o.jsx("span",{className:"badge-onsite",children:"ON-SITE"})]}),o.jsx("div",{className:"service-role",children:"Data Engineering Intern"}),o.jsx("div",{className:"service-company",children:"Proservices Training Company · Ariana, Tunisia"}),o.jsxs("ul",{className:"service-bullets",children:[o.jsx("li",{children:"Designed PostgreSQL analytics backend capturing engagement metrics for 100+ active users with optimized indexing."}),o.jsx("li",{children:"Built scalable RESTful services using NestJS and MVVM architecture."})]})]})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"03"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL CAPABILITIES"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"TOOLS OF THE TRADE"}),o.jsxs("h2",{className:"subject-editorial-title",children:["The ",o.jsx("span",{className:"serif-italic",children:"toolkit."})]}),o.jsxs("div",{className:"toolkit-categories",children:[o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"01 / AI & AGENTS"}),o.jsx("div",{className:"tk-title",children:"Autonomous Reasoning & Grounded RAG"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"Python"}),o.jsx("span",{children:"LangChain"}),o.jsx("span",{children:"LangGraph"}),o.jsx("span",{children:"RAG"}),o.jsx("span",{children:"Autonomous Agents"}),o.jsx("span",{children:"pgvector"}),o.jsx("span",{children:"Prompt Engineering"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"02 / MACHINE LEARNING & DL"}),o.jsx("div",{className:"tk-title",children:"Modeling, Transfer Learning & Vision"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"PyTorch"}),o.jsx("span",{children:"TensorFlow"}),o.jsx("span",{children:"Scikit-learn"}),o.jsx("span",{children:"MobileNetV2"}),o.jsx("span",{children:"SMOTE"}),o.jsx("span",{children:"Stable Diffusion"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"03 / MLOPS & INFRASTRUCTURE"}),o.jsx("div",{className:"tk-title",children:"Observability, Containers & CI/CD"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"MLflow"}),o.jsx("span",{children:"Docker"}),o.jsx("span",{children:"Docker Compose"}),o.jsx("span",{children:"Nginx"}),o.jsx("span",{children:"CI/CD"}),o.jsx("span",{children:"Zabbix 7.0"}),o.jsx("span",{children:"Elasticsearch"}),o.jsx("span",{children:"Kibana"})]})]}),o.jsxs("div",{className:"toolkit-block",children:[o.jsx("div",{className:"tk-number",children:"04 / DATA & SYSTEMS"}),o.jsx("div",{className:"tk-title",children:"Pipelines, Storage & Cloud Services"}),o.jsxs("div",{className:"tk-pills",children:[o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"MongoDB"}),o.jsx("span",{children:"Oracle SQL"}),o.jsx("span",{children:"SQLite"}),o.jsx("span",{children:"Sentinel-2 GEE"}),o.jsx("span",{children:"FastAPI"}),o.jsx("span",{children:"Linux"})]})]})]}),o.jsxs("div",{className:"academic-record-box",children:[o.jsx("div",{className:"academic-title",children:"ACADEMIC RECORD"}),o.jsxs("div",{className:"academic-item",children:[o.jsx("strong",{children:"Engineering Degree in Computer Science – Data Science"}),o.jsx("span",{children:"ESPRIT · 2024 – Present"})]}),o.jsxs("div",{className:"academic-item",children:[o.jsx("strong",{children:"Bachelor Degree in Information Technology"}),o.jsx("span",{children:"ISET Rades · 2021 – 2024"})]})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"04"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 01"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"AUTONOMOUS DISCOVERY AGENT / PERSONAL PROJECT"}),o.jsxs("h2",{className:"project-editorial-title",children:["InternHunter AI",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"From hours of manual searching to automated multi-step discovery."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"workflow_graph.py — LangGraph Engine"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"})," = StateGraph(AgentState)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"web_search"'}),", search_platforms)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"semantic_rank"'}),", chroma_matcher)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"graph"}),".add_node(",o.jsx("span",{className:"term-str",children:'"report"'}),", dispatch_notion_telegram)"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Discovery Cycle: 5 platforms checked · 14 opportunities matched"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"An autonomous discovery agent that continuously monitors European & French job platforms, evaluates job requirements against semantic resume vectors, and dispatches structured alerts."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"Python"}),o.jsx("span",{children:"LangGraph"}),o.jsx("span",{children:"Groq / Llama 3"}),o.jsx("span",{children:"ChromaDB"}),o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"Notion API"}),o.jsx("span",{children:"Telegram"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect Repository on GitHub ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"05"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 01 / INTERNHUNTER AI"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Navigating fragmented hiring platforms across Europe consumes over 2 hours daily, riddled with noisy keyword searches, manual status logging, and delayed applications."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Architectural Innovations"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Stateful Multi-step Graph:"})," Built with LangGraph, featuring conditional branching, state checkpoints, and recovery mechanisms across search and parsing stages."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Sub-second LLM Reasoning:"})," Powered by Groq-accelerated Llama 3 for structured extraction, job criteria grading, and personalized fit justification."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Vector Similarity Matching:"})," ChromaDB embedding retrieval compares job descriptions against candidate skills and preferences."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Automated Dispatch & Storage:"})," Synchronizes new discoveries into PostgreSQL, pushes actionable alerts to Telegram, and organizes application status in Notion."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"PROVEN OUTCOME"}),o.jsx("div",{className:"callout-heading",children:"95% reduction in search time."}),o.jsx("div",{className:"callout-text",children:"Reduced manual search time from 2+ hours daily to near-zero by automating continuous discovery across 5+ platforms."})]}),o.jsx("div",{className:"stamp-box verified-stamp",children:"VERIFIED AGENT"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"06"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 02"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"SOLUTION ARCHITECT / TEAM OF 6"}),o.jsxs("h2",{className:"project-editorial-title",children:["AgriSmart",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"AI-powered precision agriculture platform with edge vision & RAG."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"architecture_services.yml — AgriSmart"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"services:"})," [irrigation_rag, crop_vision, satellite_gee, auth, gateway, telemetry]"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"model:"})," MobileNetV2-Int8-TFLite (87,000+ images)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"vector_store:"})," pgvector (PostgreSQL 16)"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Edge Inference Latency: 2.1s (offline) · Nginx Gateway 200 OK"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"A distributed agricultural microservice platform featuring an offline mobile crop disease detector, a grounded RAG irrigation advisor, and satellite geospatial analytics."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"6x FastAPI"}),o.jsx("span",{children:"MobileNetV2 TFLite"}),o.jsx("span",{children:"LangChain"}),o.jsx("span",{children:"pgvector"}),o.jsx("span",{children:"Sentinel-2"}),o.jsx("span",{children:"Docker"}),o.jsx("span",{children:"Nginx"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect Microservices Repository ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"07"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 02 / AGRISMART"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Farmers in remote areas suffer from unpredictable water availability and crop disease outbreaks without reliable high-bandwidth internet connectivity."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Solution Architecture & Contributions"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Microservice Mesh:"})," Architected 6 decoupled FastAPI services, unified with Nginx reverse proxy and orchestrated with Docker Compose."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Grounded RAG Assistant:"})," LangChain pipeline with pgvector embedding store and Llama 3 to answer agronomic queries grounded in scientific soil & irrigation data."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"On-Device Edge Vision:"})," Quantized MobileNetV2 into TFLite Int8 trained on 87K+ disease images, achieving sub-3s inference completely offline on mobile devices."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Geospatial Crop Analytics:"})," Integrated Sentinel-2 imagery via Google Earth Engine API for vegetative health index (NDVI) monitoring."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"SCALE & LEADERSHIP"}),o.jsx("div",{className:"callout-heading",children:"Sub-3s offline inference."}),o.jsx("div",{className:"callout-text",children:"Led onboarding and architectural guidelines for a team of 6 engineers while delivering sub-3s offline disease detection on 87K+ images."})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"FIELD DEPLOYED"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"08"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / OPERATION 03"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"PRODUCTION MACHINE LEARNING / CLASSIFICATION"}),o.jsxs("h2",{className:"project-editorial-title",children:["End-to-End MLOps",o.jsx("span",{className:"title-dot",children:"."})]}),o.jsx("div",{className:"project-tagline",children:"Drug classification pipeline with MLflow tracking and ELK observability."}),o.jsxs("div",{className:"project-preview-card",children:[o.jsxs("div",{className:"preview-top-bar",children:[o.jsx("span",{className:"p-dot red"}),o.jsx("span",{className:"p-dot yellow"}),o.jsx("span",{className:"p-dot green"}),o.jsx("span",{className:"preview-title",children:"mlflow_experiment_run.log — Production"})]}),o.jsxs("div",{className:"preview-terminal-content",children:[o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"model:"})," RandomForestClassifier(n_estimators=200)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"sampling:"})," SMOTE(ratio=balanced, k_neighbors=5)"]}),o.jsxs("div",{className:"term-line",children:[o.jsx("span",{className:"term-kw",children:"telemetry:"})," Elasticsearch + Kibana daemon active"]}),o.jsxs("div",{className:"term-line-status",children:[o.jsx("span",{className:"term-green",children:"✓"})," Metrics: F1-Score: 0.89 · Inference Latency: 74ms · Status: SERVING"]})]})]}),o.jsx("div",{className:"project-summary-box",children:"An enterprise machine learning pipeline featuring balanced training on imbalanced medical datasets, automated artifact versioning, low-latency REST serving, and live infrastructure telemetry."}),o.jsxs("div",{className:"project-tech-badges",children:[o.jsx("span",{children:"Scikit-Learn"}),o.jsx("span",{children:"SMOTE"}),o.jsx("span",{children:"MLflow"}),o.jsx("span",{children:"FastAPI"}),o.jsx("span",{children:"Docker Compose"}),o.jsx("span",{children:"Elasticsearch"}),o.jsx("span",{children:"Kibana"})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"project-github-link",children:["Inspect MLOps Pipeline Repository ",o.jsx(Ws,{className:"ext-icon"})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"09"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TECHNICAL BRIEF"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"CASE FILE 03 / MLOPS DRUG CLASSIFIER"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Inside the ",o.jsx("span",{className:"serif-italic",children:"operation."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"The problem"}),o.jsx("p",{className:"brief-p",children:"Real-world medical datasets suffer from extreme class imbalances. In addition, production models often suffer silent degradation without centralized logging, experiment lineage, and performance telemetry."})]}),o.jsxs("div",{className:"brief-section",children:[o.jsx("div",{className:"brief-h",children:"Engineering Implementation"}),o.jsxs("ul",{className:"brief-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Imbalanced Learning:"})," Integrated Synthetic Minority Over-sampling Technique (SMOTE) with a Random Forest ensemble, boosting minority class recall and achieving a ",o.jsx("strong",{children:"0.89 F1-score"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Experiment Registry:"})," Managed hyperparameter tuning, model artifacts, and evaluation metrics through an MLflow tracking server."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Microsecond-scale Serving:"})," Built a lightweight FastAPI microservice delivering inference responses under 100ms."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Production Observability:"})," Containerized the ML inference service and wired logs into Elasticsearch and Kibana for real-time monitoring of inference volume and drift."]})]})]}),o.jsxs("div",{className:"dossier-callout-box highlight-box",children:[o.jsx("div",{className:"callout-label",children:"METRIC HIGHLIGHT"}),o.jsx("div",{className:"callout-heading",children:"0.89 F1 · Sub-100ms Latency."}),o.jsx("div",{className:"callout-text",children:"Containerized stack with automated monitoring, ensuring reproducible experiments and continuous model health observability."})]}),o.jsx("div",{className:"stamp-box declassified-stamp",children:"VERIFIED MLOPS"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"10"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / ACCREDITATIONS"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"OFFICIAL CREDENTIALS & CERTIFICATIONS"}),o.jsxs("h2",{className:"subject-editorial-title",children:["NVIDIA ",o.jsx("span",{className:"serif-italic",children:"Deep Learning."})]}),o.jsxs("div",{className:"cert-cards-container",children:[o.jsxs("div",{className:"cert-card-vintage",children:[o.jsxs("div",{className:"cert-badge-row",children:[o.jsx("span",{className:"cert-issuer",children:"NVIDIA DEEP LEARNING INSTITUTE"}),o.jsx("span",{className:"cert-date",children:"APR 2026"})]}),o.jsx("div",{className:"cert-title",children:"Applications of AI for Anomaly Detection"}),o.jsx("div",{className:"cert-topics",children:"Autoencoders · Anomaly Scoring · Network Intrusion Detection · Threshold Calibration"}),o.jsxs("div",{className:"cert-verified-stamp",children:[o.jsx(rc,{className:"chk-icon"})," VERIFIED CREDENTIAL"]})]}),o.jsxs("div",{className:"cert-card-vintage",children:[o.jsxs("div",{className:"cert-badge-row",children:[o.jsx("span",{className:"cert-issuer",children:"NVIDIA DEEP LEARNING INSTITUTE"}),o.jsx("span",{className:"cert-date",children:"FEB 2026"})]}),o.jsx("div",{className:"cert-title",children:"Fundamentals of Deep Learning"}),o.jsx("div",{className:"cert-topics",children:"Convolutional Neural Networks (CNNs) · Transfer Learning · GPU-Accelerated Training"}),o.jsxs("div",{className:"cert-verified-stamp",children:[o.jsx(rc,{className:"chk-icon"})," VERIFIED CREDENTIAL"]})]})]}),o.jsx("div",{className:"cert-note-box",children:"Certified in GPU-accelerated neural network architectures, anomaly modeling, and production model deployment workflows by NVIDIA."}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"11"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / ACADEMIC BACKGROUND"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"HIGHER EDUCATION & DEGREES"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Academic ",o.jsx("span",{className:"serif-italic",children:"record."})]}),o.jsxs("div",{className:"education-timeline-vintage",children:[o.jsxs("div",{className:"edu-entry",children:[o.jsx("div",{className:"edu-years",children:"2024 – PRESENT"}),o.jsx("div",{className:"edu-degree",children:"Engineering Degree in Computer Science – Data Science"}),o.jsx("div",{className:"edu-school",children:"Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)"}),o.jsx("p",{className:"edu-desc",children:"Specialized in AI & Autonomous Agents, Machine Learning Pipelines, High-Performance Computing, Distributed Systems, and Cloud-Native MLOps."})]}),o.jsxs("div",{className:"edu-entry",children:[o.jsx("div",{className:"edu-years",children:"2021 – 2024"}),o.jsx("div",{className:"edu-degree",children:"Bachelor Degree in Information Technology"}),o.jsx("div",{className:"edu-school",children:"Higher Institute of Technological Studies of Rades (ISET Rades)"}),o.jsx("p",{className:"edu-desc",children:"Foundational curriculum covering algorithms, data structures, relational database systems, software architecture, and network security."})]})]}),o.jsxs("div",{className:"dossier-callout-box",children:[o.jsx("div",{className:"callout-label",children:"GOAL & AVAILABILITY"}),o.jsx("div",{className:"callout-heading",children:"PFE Internship & Engineering."}),o.jsx("div",{className:"callout-text",children:"Seeking an impactful graduation project (PFE) or full-time position in Data Science, Machine Learning Engineering, or MLOps starting in 2026."})]}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"12"})]})]})]}),o.jsxs("div",{className:"rv-spread-wrapper",children:[o.jsxs("div",{className:"rv-page left-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / DIRECT CHANNELS"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"COMMUNICATION DISPATCH"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Establish ",o.jsx("span",{className:"serif-italic",children:"contact."})]}),o.jsx("p",{className:"dossier-body-text",children:"Available for technical inquiries, PFE opportunities, research collaborations, or discussions on autonomous agents and MLOps infrastructure."}),o.jsxs("div",{className:"contact-channels-grid",children:[o.jsxs("a",{href:"mailto:omar.jalled@esprit.tn",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(sc,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"ACADEMIC / OFFICIAL EMAIL"}),o.jsx("span",{className:"ch-val",children:"omar.jalled@esprit.tn"})]})]}),o.jsxs("a",{href:"mailto:jalledomar2001@gmail.com",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(sc,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"PERSONAL EMAIL"}),o.jsx("span",{className:"ch-val",children:"jalledomar2001@gmail.com"})]})]}),o.jsxs("a",{href:"tel:+21629763231",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(Kv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"TELEPHONE / WHATSAPP"}),o.jsx("span",{className:"ch-val",children:"+216 29 763 231"})]})]}),o.jsxs("a",{href:"https://linkedin.com/in/omar-jalled",target:"_blank",rel:"noopener noreferrer",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(qv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"LINKEDIN PROFILE"}),o.jsx("span",{className:"ch-val",children:"linkedin.com/in/omar-jalled"})]})]}),o.jsxs("a",{href:"https://github.com/omarJ10",target:"_blank",rel:"noopener noreferrer",className:"contact-channel-item",children:[o.jsx("div",{className:"ch-icon-wrap",children:o.jsx(Yv,{})}),o.jsxs("div",{className:"ch-info",children:[o.jsx("span",{className:"ch-label",children:"GITHUB REPOSITORIES"}),o.jsx("span",{className:"ch-val",children:"github.com/omarJ10"})]})]})]}),o.jsx("div",{className:"cv-download-prominent",children:o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"cv-download-btn-full",children:[o.jsx(Os,{})," DOWNLOAD OFFICIAL RESUME (PDF)"]})}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"13"})]})]}),o.jsxs("div",{className:"rv-page right-page",children:[o.jsxs("div",{className:"page-header-strip",children:[o.jsx("span",{className:"hdr-code",children:"OJ-001 / TRANSMISSION CONSOLE"}),o.jsx("span",{className:"hdr-tag",children:"PUBLIC RELEASE"})]}),o.jsx("div",{className:"subject-id-subhead",children:"ENCRYPTED TELEMETRY DISPATCH"}),o.jsxs("h2",{className:"subject-editorial-title",children:["Direct ",o.jsx("span",{className:"serif-italic",children:"dispatch."})]}),o.jsx("p",{className:"dossier-body-text",children:"For rapid correspondence, send an encrypted transmission directly to Zain El Omar JALLED."}),o.jsxs("div",{className:"dossier-callout-box",children:[o.jsx("div",{className:"callout-label",children:"RESPONSE PROTOCOL"}),o.jsx("div",{className:"callout-heading",children:"24-hour turnaround."}),o.jsx("div",{className:"callout-text",children:"Direct transmissions are routed directly to mobile telemetry and reviewed daily."})]}),o.jsx("div",{className:"stamp-box field-tested-stamp",children:"CHANNEL READY"}),o.jsxs("div",{className:"page-footer-strip",children:[o.jsx("span",{children:"ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE"}),o.jsx("span",{className:"page-num",children:"14"})]})]})]})]}),o.jsxs("div",{className:"rv-bottom-bar",children:[o.jsx("span",{children:"ARCHIVE OJ-001 · CLASSIFIED PERSONNEL DOSSIER"}),o.jsxs("a",{href:Us,download:"Zain_el_omar_JALLED.pdf",className:"rv-bottom-download-link",children:[o.jsx(Os,{})," Download Complete CV PDF"]})]})]})}):null}function oA(){const[t,e]=Ke.useState("overview"),[n,i]=Ke.useState("subject"),[r,s]=Ke.useState(!0),[a,l]=Ke.useState(!0),[c,u]=Ke.useState(!0),[h,p]=Ke.useState(!1),[f,m]=Ke.useState(!1);Ke.useEffect(()=>{const y=g=>{g.key==="Escape"&&(f?(m(!1),gt.playSoftClick()):h?(p(!1),gt.playSoftClick()):t==="dossier_open"?(e("desk_folder"),gt.playDossierOpen()):t==="desk_folder"?(e("cabinet"),gt.playDrawerSlide(!0)):t==="cabinet"&&(e("overview"),gt.playDrawerSlide(!1)))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[f,h,t]);const S=y=>{i(y),e("dossier_open")};return o.jsxs("div",{className:"archive-app-root",children:[o.jsx(Yw,{viewState:t,onStateChange:e,lampOn:r,setLampOn:s,motionEnabled:c}),o.jsx("div",{className:"archive-vignette"}),o.jsx(qw,{soundEnabled:a,setSoundEnabled:l,motionEnabled:c,setMotionEnabled:u,onOpenFileIndex:()=>p(!0),onOpenReadingView:()=>m(!0)}),o.jsx(Kw,{viewState:t,onStateChange:e}),t==="dossier_open"&&o.jsx(rA,{activeTab:n,setActiveTab:i,onCloseDossier:()=>e("desk_folder"),onOpenReadingView:()=>m(!0)}),o.jsx(sA,{isOpen:h,onClose:()=>p(!1),onSelectChapter:S,onOpenReadingView:()=>m(!0)}),o.jsx(aA,{isOpen:f,onClose:()=>m(!1)})]})}Ou.createRoot(document.getElementById("root")).render(o.jsx(hr.StrictMode,{children:o.jsx(oA,{})}));
