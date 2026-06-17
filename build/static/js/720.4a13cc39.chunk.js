/*! For license information please see 720.4a13cc39.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarketplace_app_boilerplate=self.webpackChunkmarketplace_app_boilerplate||[]).push([[720],{3720:(e,t,i)=>{i.r(t);var o=i(5648);const r=(e,t)=>{typeof customElements<"u"&&!customElements.get(e)&&customElements.define(e,t)};r("sfx-uploader",o.h),r("sfx-drop-zone",o.b),r("sfx-import-divider",o.e),r("sfx-source-pills",o.f),r("sfx-file-list",o.d),r("sfx-file-item",o.c),r("sfx-success-card",o.g),r("sfx-actions-bar",o.S),r("sfx-url-dialog",o.s),r("sfx-camera-dialog",o.t),r("sfx-screen-cast-dialog",o.u)},5648:(e,t,i)=>{i.d(t,{$:()=>ls,A:()=>lt,B:()=>pt,D:()=>ft,E:()=>ht,F:()=>dt,G:()=>ct,H:()=>Qr,I:()=>As,J:()=>Ss,K:()=>ts,L:()=>Ie,M:()=>Ps,N:()=>ps,O:()=>fs,Q:()=>ws,R:()=>gs,S:()=>hn,T:()=>ys,V:()=>us,W:()=>as,X:()=>os,Y:()=>rs,Z:()=>Ls,_:()=>Fs,a0:()=>Cr,a1:()=>Pr,a2:()=>br,b:()=>Ds,c:()=>Zs,d:()=>Ws,e:()=>Ns,f:()=>Hr,g:()=>sn,h:()=>An,o:()=>jr,s:()=>bn,t:()=>_n,u:()=>Cn,w:()=>je,x:()=>ut,y:()=>De,z:()=>Ir});var o=i(6386),r=i(1272),s=i(8556),n=i(8516);const{I:a}=s._$LH,l=e=>void 0===e.strings,d=()=>document.createComment(""),c=(e,t,i)=>{const o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(d(),r),s=o.insertBefore(d(),r);i=new a(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,n=s!==e;if(n){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==r||n){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,r),e=t}}}return i},p=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return e._$AI(t,i),e},u={},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return e._$AH=t},f=e=>{e._$AR(),e._$AA.remove()},g=(e,t,i)=>{const o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},m=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const r=[],s=[];let n=0;for(const a of e)r[n]=o?o(a,n):n,s[n]=i(a,n),n++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,t){let[i,o,r]=t;const n=(e=>e._$AH)(e),{values:a,keys:l}=this.dt(i,o,r);if(!Array.isArray(n))return this.ut=l,a;const d=this.ut??=[],u=[];let m,v,b=0,x=n.length-1,y=0,w=a.length-1;for(;b<=x&&y<=w;)if(null===n[b])b++;else if(null===n[x])x--;else if(d[b]===l[y])u[y]=p(n[b],a[y]),b++,y++;else if(d[x]===l[w])u[w]=p(n[x],a[w]),x--,w--;else if(d[b]===l[w])u[w]=p(n[b],a[w]),c(e,u[w+1],n[b]),b++,w--;else if(d[x]===l[y])u[y]=p(n[x],a[y]),c(e,n[b],n[x]),x--,y++;else if(void 0===m&&(m=g(l,y,w),v=g(d,b,x)),m.has(d[b]))if(m.has(d[x])){const t=v.get(l[y]),i=void 0!==t?n[t]:null;if(null===i){const t=c(e,n[b]);p(t,a[y]),u[y]=t}else u[y]=p(i,a[y]),c(e,n[b],i),n[t]=null;y++}else f(n[x]),x--;else f(n[b]),b++;for(;y<=w;){const t=c(e,u[w+1]);p(t,a[y]),u[y++]=t}for(;b<=x;){const e=n[b++];null!==e&&f(e)}return this.ut=l,h(e,u),s.Jb}});var v=i(7072);class b extends n.Xe{constructor(e){if(super(e),this.it=s.Ld,e.type!==n.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.Ld||null==e)return this._t=void 0,this.it=e;if(e===s.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}b.directiveName="unsafeHTML",b.resultType=1;const x=(0,n.XM)(b);class y extends b{}y.directiveName="unsafeSVG",y.resultType=2;const w=(0,n.XM)(y);var _=i(7346);const k=e=>"string"==typeof e,S=()=>{let e,t;const i=new Promise(((i,o)=>{e=i,t=o}));return i.resolve=e,i.reject=t,i},$=e=>null==e?"":String(e),C=/###/g,P=e=>e&&e.includes("###")?e.replace(C,"."):e,U=e=>!e||k(e),L=(e,t,i)=>{const o=k(t)?t.split("."):t;let r=0;for(;r<o.length-1;){if(U(e))return{};const t=P(o[r]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++r}return U(e)?{}:{obj:e,k:P(o[r])}},z=(e,t,i)=>{const{obj:o,k:r}=L(e,t,Object);if(void 0!==o||1===t.length)return void(o[r]=i);let s=t[t.length-1],n=t.slice(0,t.length-1),a=L(e,n,Object);for(;void 0===a.obj&&n.length;)s=`${n[n.length-1]}.${s}`,n=n.slice(0,n.length-1),a=L(e,n,Object),null!=a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=i},R=(e,t)=>{const{obj:i,k:o}=L(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,o))return i[o]},E=(e,t,i)=>{for(const o in t)"__proto__"!==o&&"constructor"!==o&&(o in e?k(e[o])||e[o]instanceof String||k(t[o])||t[o]instanceof String?i&&(e[o]=t[o]):E(e[o],t[o],i):e[o]=t[o]);return e},F=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},T=e=>k(e)?e.replace(/[&<>"'\/]/g,(e=>O[e])):e;const j=[" ",",","?","!",";"],I=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}(20),B=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const o=t.split(i);let r=e;for(let s=0;s<o.length;){if(!r||"object"!=typeof r)return;let e,t="";for(let n=s;n<o.length;++n)if(n!==s&&(t+=i),t+=o[n],e=r[t],void 0!==e){if(["string","number","boolean"].includes(typeof e)&&n<o.length-1)continue;s+=n-s+1;break}r=e}return r},M=e=>null==e?void 0:e.replace(/_/g,"-"),D={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,o;null==(o=null==(i=null==console?void 0:console[e])?void 0:i.apply)||o.call(i,console,t)}};class A{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||D,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(e=e.map((e=>k(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g," "):e)),k(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new A(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new A(this.logger,e)}}var H=new A;class N{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)})),this}off(e,t){if(this.observers[e]){if(!t)return void delete this.observers[e];this.observers[e].delete(t)}}once(e,t){var i=this;const o=function(){t(...arguments),i.off(e,o)};return this.on(e,o),this}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach((e=>{let[t,o]=e;for(let r=0;r<o;r++)t(...i)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((t=>{let[o,r]=t;for(let s=0;s<r;s++)o(e,...i)}))}}class q extends N{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};var r,s;const n=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,a=void 0!==o.ignoreJSONStructure?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.includes(".")?l=e.split("."):(l=[e,t],i&&(Array.isArray(i)?l.push(...i):k(i)&&n?l.push(...i.split(n)):l.push(i)));const d=R(this.data,l);return!d&&!t&&!i&&e.includes(".")&&(e=l[0],t=l[1],i=l.slice(2).join(".")),!d&&a&&k(i)?B(null==(s=null==(r=this.data)?void 0:r[e])?void 0:s[t],i,n):d}addResource(e,t,i,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const s=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator;let n=[e,t];i&&(n=n.concat(s?i.split(s):i)),e.includes(".")&&(n=e.split("."),o=t,t=n[1]),this.addNamespaces(t),z(this.data,n,o),r.silent||this.emit("added",e,t,i,o)}addResources(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const r in i)(k(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,r){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},n=[e,t];e.includes(".")&&(n=e.split("."),o=i,i=t,t=n[1]),this.addNamespaces(t);let a=R(this.data,n)||{};s.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?E(a,i,r):a={...a,...i},z(this.data,n,a),s.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var V={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,o,r){return e.forEach((e=>{var s;t=(null==(s=this.processors[e])?void 0:s.process(t,i,o,r))??t})),t}};const K=Symbol("i18next/PATH_KEY");function Y(e,t){const{[K]:i}=e(function(){const e=[],t=Object.create(null);let i;return t.get=(o,r)=>{var s;return null==(s=null==i?void 0:i.revoke)||s.call(i),r===K?e:(e.push(r),i=Proxy.revocable(o,t),i.proxy)},Proxy.revocable(Object.create(null),t).proxy}()),o=(null==t?void 0:t.keySeparator)??".",r=(null==t?void 0:t.nsSeparator)??":",s="strict"===(null==t?void 0:t.enableSelector);if(i.length>1&&r){const e=null==t?void 0:t.ns,n=s?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(n&&(s?n:n.length>1?n.slice(1):[]).includes(i[0]))return`${i[0]}${r}${i.slice(1).join(o)}`}return i.join(o)}const W=e=>!k(e)&&"boolean"!=typeof e&&"number"!=typeof e;class X extends N{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,t,i)=>{e.forEach((e=>{t[e]&&(i[e]=t[e])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=H.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}};if(null==e)return!1;const i=this.resolve(e,t);if(void 0===(null==i?void 0:i.res))return!1;const o=W(i.res);return!(!1===t.returnObjects&&o)}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const s=i&&e.includes(i),n=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,i)=>{t=t||"",i=i||"";const o=j.filter((e=>!t.includes(e)&&!i.includes(e)));if(0===o.length)return!0;const r=I.getRegExp(`(${o.map((e=>"?"===e?"\\?":e)).join("|")})`);let s=!r.test(e);if(!s){const t=e.indexOf(i);t>0&&!r.test(e.substring(0,t))&&(s=!0)}return s})(e,i,o);if(s&&!n){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:k(r)?[r]:r};const s=e.split(i);(i!==o||i===o&&this.options.ns.includes(s[0]))&&(r=s.shift()),e=s.join(o)}return{key:e,namespaces:k(r)?[r]:r}}translate(e,t,i){let o="object"==typeof t?{...t}:t;if("object"!=typeof o&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof o&&(o={...o}),o||(o={}),null==e)return"";"function"==typeof e&&(e=Y(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map((e=>"function"==typeof e?Y(e,{...this.options,...o}):String(e)));const r=void 0!==o.returnDetails?o.returnDetails:this.options.returnDetails,s=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,{key:n,namespaces:a}=this.extractFromKey(e[e.length-1],o),l=a[a.length-1];let d=void 0!==o.nsSeparator?o.nsSeparator:this.options.nsSeparator;void 0===d&&(d=":");const c=o.lng||this.language,p=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===(null==c?void 0:c.toLowerCase()))return p?r?{res:`${l}${d}${n}`,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(o)}:`${l}${d}${n}`:r?{res:n,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(o)}:n;const u=this.resolve(e,o);let h=null==u?void 0:u.res;const f=(null==u?void 0:u.usedKey)||n,g=(null==u?void 0:u.exactUsedKey)||n,m=void 0!==o.joinArrays?o.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=void 0!==o.count&&!k(o.count),x=X.hasDefaultValue(o),y=b?this.pluralResolver.getSuffix(c,o.count,o):"",w=o.ordinal&&b?this.pluralResolver.getSuffix(c,o.count,{ordinal:!1}):"",_=b&&!o.ordinal&&0===o.count,S=_&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${y}`]||o[`defaultValue${w}`]||o.defaultValue;let $=h;v&&!h&&x&&($=S);const C=W($),P=Object.prototype.toString.apply($);if(!(v&&$&&C)||["[object Number]","[object Function]","[object RegExp]"].includes(P)||k(m)&&Array.isArray($))if(v&&k(m)&&Array.isArray(h))h=h.join(m),h&&(h=this.extendTranslation(h,e,o,i));else{let t=!1,r=!1;!this.isValidLookup(h)&&x&&(t=!0,h=S),this.isValidLookup(h)||(r=!0,h=n);const a=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&r?void 0:h,p=x&&S!==h&&this.options.updateMissing;if(r||t||p){if(this.logger.log(p?"updateKey":"missingKey",c,l,b&&!p?`${n}${this.pluralResolver.getSuffix(c,o.count,o)}`:n,p?S:h),s){const e=this.resolve(n,{...o,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let o=0;o<t.length;o++)e.push(t[o]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(o.lng||this.language):e.push(o.lng||this.language);const i=(e,t,i)=>{var r;const s=x&&i!==h?i:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,s,p,o):null!=(r=this.backendConnector)&&r.saveMissing&&this.backendConnector.saveMissing(e,l,t,s,p,o),this.emit("missingKey",e,l,t,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach((e=>{const t=this.pluralResolver.getSuffixes(e,o);_&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach((t=>{i([e],n+t,o[`defaultValue${t}`]||S)}))})):i(e,n,S))}h=this.extendTranslation(h,e,o,u,i),r&&h===n&&this.options.appendNamespaceToMissingKey&&(h=`${l}${d}${n}`),(r||t)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${d}${n}`:n,t?h:void 0,o))}else{if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,$,{...o,ns:a}):`key '${n} (${this.language})' returned an object instead of string.`;return r?(u.res=e,u.usedParams=this.getUsedParamsDetails(o),u):e}if(s){const e=Array.isArray($),t=e?[]:{},i=e?g:f;for(const r in $)if(Object.prototype.hasOwnProperty.call($,r)){const e=`${i}${s}${r}`;t[r]=x&&!h?this.translate(e,{...o,defaultValue:W(S)?S[r]:void 0,joinArrays:!1,ns:a}):this.translate(e,{...o,joinArrays:!1,ns:a}),t[r]===e&&(t[r]=$[r])}h=t}}return r?(u.res=h,u.usedParams=this.getUsedParamsDetails(o),u):h}extendTranslation(e,t,i,o,r){var s,n,a=this;if(null!=(s=this.i18nFormat)&&s.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const s=k(e)&&(void 0!==(null==(n=null==i?void 0:i.interpolation)?void 0:n.skipOnVariables)?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(s){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let d=i.replace&&!k(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,i.lng||this.language||o.usedLng,i),s){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return(null==r?void 0:r[0])!==o[0]||i.context?a.translate(...o,t):(a.logger.warn(`It seems you are nesting recursively key: ${o[0]} in key: ${t[0]}`),null)}),i)),i.interpolation&&this.interpolator.reset()}const l=i.postProcess||this.options.postProcess,d=k(l)?[l]:l;return null!=e&&null!=d&&d.length&&!1!==i.applyPostProcessor&&(e=V.handle(d,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t,i,o,r,s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k(e)&&(e=[e]),Array.isArray(e)&&(e=e.map((e=>"function"==typeof e?Y(e,{...this.options,...n}):e))),e.forEach((e=>{if(this.isValidLookup(t))return;const a=this.extractFromKey(e,n),l=a.key;i=l;let d=a.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const c=void 0!==n.count&&!k(n.count),p=c&&!n.ordinal&&0===n.count,u=void 0!==n.context&&(k(n.context)||"number"==typeof n.context)&&""!==n.context,h=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach((e=>{var a,d;this.isValidLookup(t)||(s=e,!this.checkedLoadedFor[`${h[0]}-${e}`]&&null!=(a=this.utils)&&a.hasLoadedNamespace&&!(null!=(d=this.utils)&&d.hasLoadedNamespace(s))&&(this.checkedLoadedFor[`${h[0]}-${e}`]=!0,this.logger.warn(`key "${i}" for languages "${h.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach((i=>{var s;if(this.isValidLookup(t))return;r=i;const a=[l];if(null!=(s=this.i18nFormat)&&s.addLookupKeys)this.i18nFormat.addLookupKeys(a,l,i,e,n);else{let e;c&&(e=this.pluralResolver.getSuffix(i,n.count,n));const t=`${this.options.pluralSeparator}zero`,o=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(n.ordinal&&e.startsWith(o)&&a.push(l+e.replace(o,this.options.pluralSeparator)),a.push(l+e),p&&a.push(l+t)),u){const i=`${l}${this.options.contextSeparator||"_"}${n.context}`;a.push(i),c&&(n.ordinal&&e.startsWith(o)&&a.push(i+e.replace(o,this.options.pluralSeparator)),a.push(i+e),p&&a.push(i+t))}}let d;for(;d=a.pop();)this.isValidLookup(t)||(o=d,t=this.getResource(i,e,d,n))})))}))})),{res:t,usedKey:i,exactUsedKey:o,usedLng:r,usedNS:s}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};var r;return null!=(r=this.i18nFormat)&&r.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!k(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const e of t)delete o[e]}return o}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith("defaultValue")&&void 0!==e[t])return!0;return!1}}class G{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=H.create("languageUtils")}getScriptPartFromCode(e){if(!(e=M(e))||!e.includes("-"))return null;const t=e.split("-");return 2===t.length||(t.pop(),"x"===t[t.length-1].toLowerCase())?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(!(e=M(e))||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(k(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const i=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const i=this.getScriptPartFromCode(e);if(this.isSupportedCode(i))return t=i;const o=this.getLanguagePartFromCode(e);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find((e=>e===o||!(!e.includes("-")&&!o.includes("-"))&&!!(e.includes("-")&&!o.includes("-")&&e.slice(0,e.indexOf("-"))===o||e.startsWith(o)&&o.length>1)))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),k(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),o=[],r=e=>{e&&(this.isSupportedCode(e)?o.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return k(e)&&(e.includes("-")||e.includes("_"))?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):k(e)&&r(this.formatLanguageCode(e)),i.forEach((e=>{o.includes(e)||r(this.formatLanguageCode(e))})),o}}const J={zero:0,one:1,two:2,few:3,many:4,other:5},Z={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Q{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=H.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=M("dev"===e?"en":e),o=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:o});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let s;try{s=new Intl.PluralRules(i,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Z;if(!e.match(/-|_/))return Z;const i=this.languageUtils.getLanguagePartFromCode(e);s=this.getRule(i,t)}return this.pluralRulesCache[r]=s,s}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(null==i?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,i).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort(((e,t)=>J[e]-J[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):[]}getSuffix(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const ee=function(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=((e,t,i)=>{const o=R(e,i);return void 0!==o?o:R(t,i)})(e,t,i);return!s&&r&&k(i)&&(s=B(e,i,o),void 0===s&&(s=B(t,i,o))),s},te=e=>e.replace(/\$/g,"$$$$");class ie{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;this.logger=H.create("interpolator"),this.options=e,this.format=(null==(t=null==e?void 0:e.interpolation)?void 0:t.format)||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:r,prefixEscaped:s,suffix:n,suffixEscaped:a,formatSeparator:l,unescapeSuffix:d,unescapePrefix:c,nestingPrefix:p,nestingPrefixEscaped:u,nestingSuffix:h,nestingSuffixEscaped:f,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:T,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==o&&o,this.prefix=r?F(r):s||"{{",this.suffix=n?F(n):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=d?"":c?F(c):"-",this.unescapeSuffix=this.unescapePrefix?"":d?F(d):"",this.nestingPrefix=p?F(p):u||F("$t("),this.nestingSuffix=h?F(h):f||F(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>(null==e?void 0:e.source)===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var r;let s,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=e=>{if(!e.includes(this.formatSeparator)){const r=ee(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(r,void 0,i,{...o,...t,interpolationkey:e}):r}const r=e.split(this.formatSeparator),s=r.shift().trim(),n=r.join(this.formatSeparator).trim();return this.format(ee(t,l,s,this.options.keySeparator,this.options.ignoreJSONStructure),n,i,{...o,...t,interpolationkey:s})};this.resetRegExp(),!this.escapeValue&&"string"==typeof e&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=(null==o?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=void 0!==(null==(r=null==o?void 0:o.interpolation)?void 0:r.skipOnVariables)?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>te(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?te(this.escape(e)):te(e)}].forEach((t=>{for(a=0;s=t.regex.exec(e);){const i=s[1].trim();if(n=d(i),void 0===n)if("function"==typeof c){const t=c(e,s,o);n=k(t)?t:""}else if(o&&Object.prototype.hasOwnProperty.call(o,i))n="";else{if(p){n=s[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),n=""}else!k(n)&&!this.useRawValueToEscape&&(n=$(n));const r=t.safeValue(n);if(e=e.replace(s[0],r),p?(t.regex.lastIndex+=n.length,t.regex.lastIndex-=s[0].length):t.regex.lastIndex=0,a++,a>=this.maxReplaces)break}})),e}nest(e,t){let i,o,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=(e,t)=>{const i=this.nestingOptionsSeparator;if(!e.includes(i))return e;const o=e.split(new RegExp(`${F(i)}[ ]*{`));let s=`{${o[1]}`;e=o[0],s=this.interpolate(s,r);const n=s.match(/'/g),a=s.match(/"/g);(((null==n?void 0:n.length)??0)%2===0&&!a||((null==a?void 0:a.length)??0)%2!==0)&&(s=s.replace(/'/g,'"'));try{r=JSON.parse(s),t&&(r={...t,...r})}catch(l){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,l),`${e}${i}${s}`}return r.defaultValue&&r.defaultValue.includes(this.prefix)&&delete r.defaultValue,e};for(;i=this.nestingRegexp.exec(e);){let a=[];r={...s},r=r.replace&&!k(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;const l=/{.*}/.test(i[1])?i[1].lastIndexOf("}")+1:i[1].indexOf(this.formatSeparator);if(-1!==l&&(a=i[1].slice(l).split(this.formatSeparator).map((e=>e.trim())).filter(Boolean),i[1]=i[1].slice(0,l)),o=t(n.call(this,i[1].trim(),r),r),o&&i[0]===e&&!k(o))return o;k(o)||(o=$(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),o=""),a.length&&(o=a.reduce(((e,t)=>this.format(e,t,s.lng,{...s,interpolationkey:i[1].trim()})),o.trim())),e=e.replace(i[0],o),this.regexp.lastIndex=0}return e}}const oe=e=>{const t={};return(i,o,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const n=o+JSON.stringify(s);let a=t[n];return a||(a=e(M(o),r),t[n]=a),a(i)}},re=e=>(t,i,o)=>e(M(i),o)(t);class se{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=H.create("formatter"),this.options=e,this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?oe:re;this.formats={number:i(((e,t)=>{const i=new Intl.NumberFormat(e,{...t});return e=>i.format(e)})),currency:i(((e,t)=>{const i=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>i.format(e)})),datetime:i(((e,t)=>{const i=new Intl.DateTimeFormat(e,{...t});return e=>i.format(e)})),relativetime:i(((e,t)=>{const i=new Intl.RelativeTimeFormat(e,{...t});return e=>i.format(e,t.range||"day")})),list:i(((e,t)=>{const i=new Intl.ListFormat(e,{...t});return e=>i.format(e)}))}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=oe(t)}format(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!t||null==e)return e;const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&!r[0].includes(")")&&r.find((e=>e.includes(")")))){const e=r.findIndex((e=>e.includes(")")));r[0]=[r[0],...r.splice(1,e)].join(this.formatSeparator)}return r.reduce(((e,t)=>{var r;const{formatName:s,formatOptions:n}=(e=>{let t=e.toLowerCase().trim();const i={};if(e.includes("(")){const o=e.split("(");t=o[0].toLowerCase().trim();const r=o[1].slice(0,-1);"currency"!==t||r.includes(":")?"relativetime"!==t||r.includes(":")?r.split(";").forEach((e=>{if(e){const[t,...o]=e.split(":"),r=o.join(":").trim().replace(/^'+|'+$/g,""),s=t.trim();i[s]||(i[s]=r),"false"===r&&(i[s]=!1),"true"===r&&(i[s]=!0),isNaN(r)||(i[s]=parseInt(r,10))}})):i.range||(i.range=r.trim()):i.currency||(i.currency=r.trim())}return{formatName:t,formatOptions:i}})(t);if(this.formats[s]){let t=e;try{const a=(null==(r=null==o?void 0:o.formatParams)?void 0:r[o.interpolationkey])||{},l=a.locale||a.lng||o.locale||o.lng||i;t=this.formats[s](e,l,{...n,...o,...a})}catch(a){this.logger.warn(a)}return t}return this.logger.warn(`there was no format function for ${s}`),e}),e)}}class ne extends N{constructor(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};var r,s;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=H.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],null==(s=null==(r=this.backend)?void 0:r.init)||s.call(r,i,o.backend,o)}queueLoad(e,t,i,o){const r={},s={},n={},a={};return e.forEach((e=>{let o=!0;t.forEach((t=>{const n=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[n]=2:this.state[n]<0||(1===this.state[n]?void 0===s[n]&&(s[n]=!0):(this.state[n]=1,o=!1,void 0===s[n]&&(s[n]=!0),void 0===r[n]&&(r[n]=!0),void 0===a[t]&&(a[t]=!0)))})),o||(n[e]=!0)})),(Object.keys(r).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(r),pending:Object.keys(s),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(a)}}loaded(e,t,i){const o=e.split("|"),r=o[0],s=o[1];t&&this.emit("failedLoading",r,s,t),!t&&i&&this.store.addResourceBundle(r,s,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const n={};this.queue.forEach((i=>{((e,t,i,o)=>{const{obj:r,k:s}=L(e,t,Object);r[s]=r[s]||[],r[s].push(i)})(i.loaded,[r],s),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(i,e),t&&i.errors.push(t),0===i.pendingCount&&!i.done&&(Object.keys(i.loaded).forEach((e=>{n[e]||(n[e]={});const t=i.loaded[e];t.length&&t.forEach((t=>{void 0===n[e][t]&&(n[e][t]=!0)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",n),this.queue=this.queue.filter((e=>!e.done))}read(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!e.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:r,callback:s});this.readingCalls++;const n=(n,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}n&&a&&o<this.maxRetries?setTimeout((()=>{this.read(e,t,i,o+1,2*r,s)}),r):s(n,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(e,t,n);try{const i=a(e,t);i&&"function"==typeof i.then?i.then((e=>n(null,e))).catch(n):n(null,i)}catch(l){n(l)}}prepareLoading(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();k(e)&&(e=this.languageUtils.toResolveHierarchy(e)),k(t)&&(t=[t]);const r=this.queueLoad(e,t,i,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=e.split("|"),o=i[0],r=i[1];this.read(o,r,"read",void 0,void 0,((i,s)=>{i&&this.logger.warn(`${t}loading namespace ${r} for language ${o} failed`,i),!i&&s&&this.logger.log(`${t}loaded namespace ${r} for language ${o}`,s),this.loaded(e,i,s)}))}saveMissing(e,t,i,o,r){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};var a,l,d,c,p;if(null==(l=null==(a=this.services)?void 0:a.utils)||!l.hasLoadedNamespace||null!=(c=null==(d=this.services)?void 0:d.utils)&&c.hasLoadedNamespace(t)){if(null!=i&&""!==i){if(null!=(p=this.backend)&&p.create){const a={...s,isUpdate:r},l=this.backend.create.bind(this.backend);if(l.length<6)try{let r;r=5===l.length?l(e,t,i,o,a):l(e,t,i,o),r&&"function"==typeof r.then?r.then((e=>n(null,e))).catch(n):n(null,r)}catch(u){n(u)}else l(e,t,i,o,n,a)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}else this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const ae=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),k(e[1])&&(t.defaultValue=e[1]),k(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach((e=>{t[e]=i[e]}))}return t},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),le=e=>(k(e.ns)&&(e.ns=[e.ns]),k(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),k(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),de=()=>{};class ce extends N{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=le(e),this.services={},this.logger=H,this.modules={external:[]},(e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t=>{"function"==typeof e[t]&&(e[t]=e[t].bind(e))}))})(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof t&&(i=t,t={}),null==t.defaultNS&&t.ns&&(k(t.ns)?t.defaultNS=t.ns:t.ns.includes("translation")||(t.defaultNS=t.ns[0]));const o=ae();this.options={...o,...this.options,...le(t)},this.options.interpolation={...o.interpolation,...this.options.interpolation},void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler);const r=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?H.init(r(this.modules.logger),this.options):H.init(null,this.options),t=this.modules.formatter?this.modules.formatter:se;const i=new G(this.options);this.store=new q(this.options.resources,this.options);const o=this.services;o.logger=H,o.resourceStore=this.store,o.languageUtils=i,o.pluralResolver=new Q(i,{prepend:this.options.pluralSeparator}),t&&(o.formatter=r(t),o.formatter.init&&o.formatter.init(o,this.options),this.options.interpolation.format=o.formatter.format.bind(o.formatter)),o.interpolator=new ie(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new ne(r(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",(function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];e.emit(t,...o)})),this.modules.languageDetector&&(o.languageDetector=r(this.modules.languageDetector),o.languageDetector.init&&o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=r(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new X(this.services,this.options),this.translator.on("*",(function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];e.emit(t,...o)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,i||(i=de),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const s=S(),n=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(t),i(e,t)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?n():setTimeout(n,0),s}loadResources(e){var t,i;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de;const r=k(e)?e:this.language;if("function"==typeof e&&(o=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===(null==r?void 0:r.toLowerCase())&&(!this.options.preload||0===this.options.preload.length))return o();const e=[],s=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&(e.includes(t)||e.push(t))}))};r?s(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>s(e))),null==(i=null==(t=this.options.preload)?void 0:t.forEach)||i.call(t,(e=>s(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(e)}))}else o(null)}reloadResources(e,t,i){const o=S();return"function"==typeof e&&(i=e,e=void 0),"function"==typeof t&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=de),this.services.backendConnector.reload(e,t,(e=>{o.resolve(),i(e)})),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&V.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!["cimode","dev"].includes(e)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!["cimode","dev"].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const o=S();this.emit("languageChanging",e);const r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},s=(s,n)=>{n?this.isLanguageChangingTo===e&&(r(n),this.translator.changeLanguage(n),this.isLanguageChangingTo=void 0,this.emit("languageChanged",n),this.logger.log("languageChanged",n)):this.isLanguageChangingTo=void 0,o.resolve((function(){return i.t(...arguments)})),t&&t(s,(function(){return i.t(...arguments)}))},n=t=>{var i,o;!e&&!t&&this.services.languageDetector&&(t=[]);const n=k(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(k(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),null==(o=null==(i=this.services.languageDetector)?void 0:i.cacheUserLanguage)||o.call(i,a)),this.loadResources(a,(e=>{s(e,a)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e):n(this.services.languageDetector.detect()),o}getFixedT(e,t,i,o){var r=this;const s=null==o?void 0:o.scopeNs,n=function(e,t){let o;for(var a=arguments.length,l=new Array(a>2?a-2:0),d=2;d<a;d++)l[d-2]=arguments[d];o="object"!=typeof t?r.options.overloadTranslationOptionHandler([e,t].concat(l)):{...t},o.lng=o.lng||n.lng,o.lngs=o.lngs||n.lngs;const c=void 0!==o.ns&&null!==o.ns;o.ns=o.ns||n.ns,""!==o.keyPrefix&&(o.keyPrefix=o.keyPrefix||i||n.keyPrefix);const p={...r.options,...o};Array.isArray(s)&&!c&&(p.ns=s),"function"==typeof o.keyPrefix&&(o.keyPrefix=Y(o.keyPrefix,p));const u=r.options.keySeparator||".";let h;return o.keyPrefix&&Array.isArray(e)?h=e.map((e=>("function"==typeof e&&(e=Y(e,p)),`${o.keyPrefix}${u}${e}`))):("function"==typeof e&&(e=Y(e,p)),h=o.keyPrefix?`${o.keyPrefix}${u}${e}`:e),r.t(h,o)};return k(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var e;return null==(e=this.translator)?void 0:e.translate(...arguments)}exists(){var e;return null==(e=this.translator)?void 0:e.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const s=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||0===i||2===i};if(t.precheck){const e=t.precheck(this,s);if(void 0!==e)return e}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(i,e)&&(!o||s(r,e)))}loadNamespaces(e,t){const i=S();return this.options.ns?(k(e)&&(e=[e]),e.forEach((e=>{this.options.ns.includes(e)||this.options.ns.push(e)})),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=S();k(e)&&(e=[e]);const o=this.options.preload||[],r=e.filter((e=>!o.includes(e)&&this.services.languageUtils.isSupportedCode(e)));return r.length?(this.options.preload=o.concat(r),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}dir(e){var t,i;if(e||(e=this.resolvedLanguage||((null==(t=this.languages)?void 0:t.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}const o=(null==(i=this.services)?void 0:i.languageUtils)||new G(ae());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].includes(o.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){const e=new ce(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0);return e.createInstance=ce.createInstance,e}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},r=new ce(o);if((void 0!==e.debug||void 0!==e.prefix)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach((e=>{r[e]=this[e]})),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const e=Object.keys(this.store.data).reduce(((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce(((i,o)=>(i[o]={...e[t][o]},i)),e[t]),e)),{});r.store=new q(e,o),r.services.resourceStore=r.store}if(e.interpolation){const t={...ae().interpolation,...this.options.interpolation,...e.interpolation},i={...o,interpolation:t};r.services.interpolator=new ie(i)}return r.translator=new X(r.services,o),r.translator.on("*",(function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];r.emit(e,...i)})),r.init(o,t),r.translator.options=o,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pe=ce.createInstance();pe.createInstance,pe.dir,pe.init,pe.loadResources,pe.reloadResources,pe.use,pe.changeLanguage,pe.getFixedT,pe.t,pe.exists,pe.setDefaultNamespace,pe.hasLoadedNamespace,pe.loadNamespaces,pe.loadLanguages;const ue=["__proto__","constructor","prototype"];function he(e){return!("string"!=typeof e||0===e.length||e.length>128||ue.indexOf(e)>-1||e.indexOf("..")>-1||e.indexOf("\\")>-1||/[?#%\s@]/.test(e)||/[\x00-\x1F\x7F]/.test(e))}function fe(e){return!(!he(e)||e.indexOf("/")>-1)}const ge={lng:fe,ns:function(e){return he(e)}};function me(e){return"string"!=typeof e?e:e.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function ve(){return"function"==typeof XMLHttpRequest||"object"==typeof XMLHttpRequest}const be=/\{\{(.+?)\}\}/g;function xe(e,t){let i=!1;const o=e.replace(be,((e,o)=>{const r=o.trim();if(ue.indexOf(r)>-1)return e;const s=t[r];if(null==s)return e;const n=ge[r]||fe,a=String(s).split("+");for(const t of a)if(!n(t))return i=!0,e;return a.join("+")}));return i?null:o}const ye=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let we;"function"==typeof fetch?we=fetch:ye&&"function"==typeof ye.fetch&&(we=ye.fetch);const _e=ve()&&ye?ye.XMLHttpRequest:void 0,ke="function"==typeof ActiveXObject&&ye?ye.ActiveXObject:void 0,Se=["__proto__","constructor","prototype"],$e=(e,t)=>{if(t&&"object"==typeof t){let i="";for(const e of Object.keys(t))Se.indexOf(e)>-1||(i+="&"+encodeURIComponent(e)+"="+encodeURIComponent(t[e]));if(!i)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+i.slice(1)}return e},Ce=(e,t,i,o)=>{const r=e=>{if(!e.ok)return i(e.statusText||"Error",{status:e.status});e.text().then((t=>{i(null,{status:e.status,data:t})})).catch(i)};if(o){const s=o(e,t);if(s instanceof Promise)return void s.then(r).catch(i)}"function"==typeof fetch?fetch(e,t).then(r).catch(i):we(e,t).then(r).catch(i)},Pe=(e,t,i,o)=>("function"==typeof i&&(o=i,i=void 0),o=o||(()=>{}),we&&0!==t.indexOf("file:")?((e,t,i,o)=>{e.queryStringParams&&(t=$e(t,e.queryStringParams));const r={..."function"==typeof e.customHeaders?e.customHeaders():e.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),i&&(r["Content-Type"]="application/json");const s="function"==typeof e.requestOptions?e.requestOptions(i):e.requestOptions,n={method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:r,...e._omitFetchOptions?{}:s},a="function"==typeof e.alternateFetch&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{Ce(t,n,o,a)}catch(l){if(!s||0===Object.keys(s).length||!l.message||l.message.indexOf("not implemented")<0)return o(l);try{Object.keys(s).forEach((e=>{delete n[e]})),Ce(t,n,o,a),e._omitFetchOptions=!0}catch(d){o(d)}}})(e,t,i,o):ve()||"function"==typeof ActiveXObject?((e,t,i,o)=>{i&&"object"==typeof i&&(i=$e("",i).slice(1)),e.queryStringParams&&(t=$e(t,e.queryStringParams));try{const r=_e?new _e:new ke("MSXML2.XMLHTTP.3.0");r.open(i?"POST":"GET",t,1),e.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!e.withCredentials,i&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let s=e.customHeaders;if(s="function"==typeof s?s():s,s)for(const e of Object.keys(s))Se.indexOf(e)>-1||r.setRequestHeader(e,s[e]);r.onreadystatechange=()=>{r.readyState>3&&o(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(i)}catch(x){console&&console.log(x)}})(e,t,i,o):void o(new Error("No fetch and no xhr implementation found!")));var Ue=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=t,this.allOptions=i,this.type="backend",this.init(e,t,i)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.services=e,this.options={loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:e=>JSON.parse(e),stringify:JSON.stringify,parsePayload:(e,t,i)=>({[t]:i||""}),parseLoadPayload:(e,t)=>{},request:Pe,reloadInterval:!(typeof window<"u")&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"},...this.options||{},...t},this.allOptions=i,this.services&&this.options.reloadInterval){const e=setInterval((()=>this.reload()),this.options.reloadInterval);"object"==typeof e&&"function"==typeof e.unref&&e.unref()}}readMulti(e,t,i){this._readAny(e,e,t,t,i)}read(e,t,i){this._readAny([e],e,[t],t,i)}_readAny(e,t,i,o,r){let s=this.options.loadPath;"function"==typeof this.options.loadPath&&(s=this.options.loadPath(e,i)),s=function(e){return function(e){return!!e&&"function"==typeof e.then}(e)?e:Promise.resolve(e)}(s),s.then((s=>{if(!s)return r(null,{});const n=xe(s,{lng:e.join("+"),ns:i.join("+")});if(null==n){const t=e.map(me).join(", "),o=i.map(me).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value \u2014 refusing to build request URL for languages=["+t+"] namespaces=["+o+"]"),!1)}this.loadUrl(n,r,t,o)}))}loadUrl(e,t,i,o){const r="string"==typeof i?[i]:i,s="string"==typeof o?[o]:o,n=this.options.parseLoadPayload(r,s),a=me(function(e){if("string"!=typeof e||0===e.length)return e;try{const t=new URL(e);return t.username||t.password?(t.username="",t.password="",t.toString()):e}catch{return e.replace(/(\/\/)[^/@\s]+@/g,"$1")}}(e));this.options.request(this.options,e,n,((e,r)=>{if(r&&(r.status>=500&&r.status<600||!r.status))return t("failed loading "+a+"; status code: "+r.status,!0);if(r&&r.status>=400&&r.status<500)return t("failed loading "+a+"; status code: "+r.status,!1);if(!r&&e&&e.message){const i=e.message.toLowerCase();if(["failed","fetch","network","load"].find((e=>i.indexOf(e)>-1)))return t("failed loading "+a+": "+me(e.message),!0)}if(e)return t(e,!1);let s,n;try{s="string"==typeof r.data?this.options.parse(r.data,i,o):r.data}catch{n="failed parsing "+a+" to json"}if(n)return t(n,!1);t(null,s)}))}create(e,t,i,o,r){if(!this.options.addPath)return;"string"==typeof e&&(e=[e]);const s=this.options.parsePayload(t,i,o);let n=0;const a=[],l=[];e.forEach((i=>{let o=this.options.addPath;"function"==typeof this.options.addPath&&(o=this.options.addPath(i,t));const d=xe(o,{lng:i,ns:t});if(null==d)return n+=1,void(r&&n===e.length&&r(a,l));this.options.request(this.options,d,s,((t,i)=>{n+=1,a.push(t),l.push(i),n===e.length&&"function"==typeof r&&r(a,l)}))}))}reload(){const{backendConnector:e,languageUtils:t,logger:i}=this.services,o=e.language;if(o&&"cimode"===o.toLowerCase())return;const r=[],s=e=>{t.toResolveHierarchy(e).forEach((e=>{r.indexOf(e)<0&&r.push(e)}))};s(o),this.allOptions.preload&&this.allOptions.preload.forEach((e=>s(e))),r.forEach((t=>{this.allOptions.ns.forEach((o=>{e.read(t,o,"read",null,null,((r,s)=>{r&&i.warn(`loading namespace ${o} for language ${t} failed`,r),!r&&s&&i.log(`loaded namespace ${o} for language ${t}`,s),e.loaded(`${t}|${o}`,r,s)}))}))}))}};Ue.type="backend";const Le="f7b2366e-fcb6-4f1a-8f23-8de48422989a",ze="uploader";let Re=null;const Ee=new Set;function Fe(){for(const e of Ee)e()}const Oe=new class{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&"true"===localStorage.getItem("sfxUploaderTranslationsMissingKeysEnabled"),this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,o)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout((()=>this._renderCurl()),this.debounceDelay),Reflect.set(e,t,i,o))})}handleMissingKey(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ze;if(!this.enabled)return;const o=`${i}:${e}`;this._missingKeys[o]={value:t,ns:i}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`\ncurl 'https://neo.wordplex.io/api/import/request-translations' \\\n  --data-raw '{"grid_uuid":"${Le}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map((e=>{let[t,{value:i,ns:o}]=e;return{key:o&&t.startsWith(`${o}:`)?t.slice(o.length+1):t,lang:"en",default:i}}))).replaceAll("'","'\\''")}}'\n    `),console.groupEnd()}},Te=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,((e,i)=>String(t[i]??""))),je=(e,t,i)=>{if("string"==typeof t)return Te(t,i??{});if("object"==typeof t&&null!==t){const i=t,o=i.count;if(void 0!==o){const t=String((1===o?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??e);return Te(t,i)}return Te(String(i.defaultValue??e),i)}return e},Ie=(e,t,i)=>{const o=Re;return o&&o.isInitialized?"string"==typeof t?o.t(e,t,i??{}):o.t(e,t??{}):je(e,t,i)},Be=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`));class Me extends v.Xe{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==v.pX.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return o.Jb}update(e,t){let[i]=t;if(i===this._lastStyles)return o.Jb;this._lastStyles=i;const{style:r}=e.element,s=i??{};for(const o of this._appliedProps)(!(o in s)||null==s[o]||""===s[o])&&(r.removeProperty(Be(o)),this._appliedProps.delete(o));for(const[o,n]of Object.entries(s))null!=n&&""!==n?(r.setProperty(Be(o),n),this._appliedProps.add(o)):this._appliedProps.has(o)&&(r.removeProperty(Be(o)),this._appliedProps.delete(o));return o.Jb}}const De=(0,v.XM)(Me);const Ae=o.YP`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,He=o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Ae}</svg>`;class Ne{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying)return void(this._pendingState={...this._pendingState||{},...e});const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach((e=>e(this.state,t)))}finally{this._notifying=!1}if(this._pendingState){const e=this._pendingState;this._pendingState=null,this.setState(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function qe(e,t,i){const o=e.getState().files,r=o.get(t);if(!r)return;const s=new Map(o);s.set(t,{...r,...i}),e.setState({files:s})}function Ve(e,t){const i=new Map(e.getState().files);i.set(t.id,t),e.setState({files:i})}function Ke(e,t){const i=e.getState().files;if(!i.has(t))return;const o=new Map(i);o.delete(t),e.setState({files:o})}class Ye{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe((()=>{this.host.requestUpdate()}))}hostDisconnected(){var e;null==(e=this.unsubscribe)||e.call(this)}}const We="SAME_ASSET_EXISTS_SKIP_UPLOAD",Xe="ERROR_SHA1_CONFLICT";function Ge(e){return(null==e?void 0:e.code)===We||(null==e?void 0:e.code)===Xe}function Je(e,t){return{...e,status:"success",file:e.file??{uuid:e.existing_file_uuid??"",name:t.name,extension:t.name.split(".").pop()??"",type:t.type,size:t.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Ze(e,t){var i,o,r,s,n;return(null==(o=null==(i=null==e?void 0:e.info)?void 0:i.msg)?void 0:o.trim())||(null==(r=null==e?void 0:e.msg)?void 0:r.trim())||(null==(s=null==e?void 0:e.hint)?void 0:s.trim())||(null==(n=null==e?void 0:e.message)?void 0:n.trim())||t}const Qe=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function et(e){return!!e&&(null!=e.ref&&""!==e.ref||null!=e.position)}function tt(e){const t={};return null!=(null==e?void 0:e.ref)&&""!==e.ref&&(t.ref=e.ref),null!=(null==e?void 0:e.position)&&(t.position=e.position),t}function it(e,t){const i={...e??{}};for(const o of Object.keys(t)){const e=t[o];void 0===e?delete i[o]:i[o]=e}return i}function ot(e,t){const i=new XMLHttpRequest;let o=!1;const r=function(e,t,i){let o=`${e.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(t)}`;if(i)for(const[r,s]of Object.entries(i))null!=s&&(o+=`&${encodeURIComponent(r)}=${encodeURIComponent(s)}`);return o}(t.apiBase,t.folder,t.extraParams);i.open("POST",r);for(const[n,a]of Object.entries(t.authHeaders))i.setRequestHeader(n,a);i.upload.addEventListener("progress",(e=>{e.lengthComputable&&!o&&t.onProgress(e.loaded,e.total)})),i.addEventListener("load",(()=>{if(o)return;let r;try{r=JSON.parse(i.responseText)}catch{return void t.onError(new Error(`Invalid JSON response (HTTP ${i.status})`))}i.status>=200&&i.status<300&&"success"===r.status?t.onComplete(r):Ge(r)?t.onComplete(Je(r,e)):t.onError(new Error(Ze(r,`Upload failed (HTTP ${i.status})`)))})),i.addEventListener("error",(()=>{o||t.onError(new Error("Network error \u2014 check your connection"))}));const s=new FormData;if(e.file){const t={name:e.name,type:e.type};s.append("info[files[]]",JSON.stringify(t)),Object.keys(e.meta).length>0&&s.append("meta[files[]]",JSON.stringify(e.meta)),e.tags.length>0&&s.append("tags[files[]]",JSON.stringify(e.tags)),et(e.product)&&s.append("product[files[]]",JSON.stringify(tt(e.product))),s.append("files[]",e.file,e.name)}return i.send(s),{abort(){o=!0,i.abort()}}}function rt(e){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":e}}function st(e){return e.replace(/\/+$/,"")}const nt={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function at(e){return nt[e]??e}function lt(e,t){const i=st(e),o=btoa(JSON.stringify({origin:window.location.origin}));return`${i}/${at(t)}/connect?state=${encodeURIComponent(o)}`}async function dt(e,t,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4?arguments[4]:void 0;const s=st(e),n=o?`/${o}`:"",a=at(t),l=await fetch(`${s}/${a}/list${n}`,{method:"GET",headers:rt(i),credentials:"same-origin",signal:r});if(401===l.status)throw new ft;if(!l.ok){const e=await l.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function ct(e,t,i,o){const r=st(e),s=await fetch(`${r}/${i}`,{method:"GET",headers:rt(t),credentials:"same-origin",signal:o});if(401===s.status)throw new ft;if(!s.ok){const e=await s.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function pt(e,t,i,o,r,s){const n=[];return await async function o(r,a){let l=null,d=!0;do{if(null!=s&&s.aborted)throw new DOMException("Aborted","AbortError");const c=d?await dt(e,t,i,r,s):await ct(e,i,l,s);d=!1,l=c.nextPagePath;for(const e of c.items){if(null!=s&&s.aborted)throw new DOMException("Aborted","AbortError");if(e.isFolder){const t=a?`${a}/${e.name}`:e.name;await o(e.requestPath,t)}else n.push({...e,relativeFolder:a})}}while(l)}(o,r),n}async function ut(e,t,i,o){const r=st(e),s=at(t),n=o?`q=${encodeURIComponent(i)}&${o}`:`q=${encodeURIComponent(i)}`,a=await fetch(`${r}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const e=await a.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function ht(e,t,i){const o=st(e),r=at(t),s=await fetch(`${o}/${r}/logout`,{method:"GET",headers:rt(i),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}class ft extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function gt(e,t,i){let o=`${e.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(t)}`;if(i)for(const[r,s]of Object.entries(i))null!=s&&(o+=`&${encodeURIComponent(r)}=${encodeURIComponent(s)}`);return o}function mt(e,t){const i={name:e.name,type:e.type,"filerobot-folder":t};return e.meta&&Object.keys(e.meta).length>0&&(i.meta=JSON.stringify(e.meta)),e.tags&&e.tags.length>0&&(i.tags=JSON.stringify(e.tags)),et(e.product)&&(i.product=JSON.stringify(tt(e.product))),i}function vt(e){const t=`${function(e){var t;const i=(null==(t=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(e))?void 0:t[1])??e;return`${/^https:\/\//i.test(e)?"wss":"ws"}://${i}`}(e.companionUrl)}/api/${e.token}`;let i;try{i=new WebSocket(t)}catch{return e.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const r=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=t=>{var s,n,a;if(!o)try{const o=JSON.parse(t.data);switch(o.action){case"progress":{const t=o.payload,i=t.bytesUploaded??0,r=t.bytesTotal??(e.expectedSize||1);e.onProgress(i,r);break}case"success":{const t=o.payload;if(r(),i.close(),null!=(s=t.response)&&s.responseText)try{const i=JSON.parse(t.response.responseText);return"success"===i.status?void e.onComplete(i):Ge(i)?void e.onComplete(Je(i,e.uploadFile)):void e.onError(new Error(Ze(i,"Upload failed")))}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{const t=o.payload;r(),i.close();let s=(null==(n=t.error)?void 0:n.message)||"Upload failed";if(null!=(a=t.response)&&a.responseText)try{s=Ze(JSON.parse(t.response.responseText),s)}catch{}e.onError(new Error(s));break}}}catch{}},i.onerror=()=>{o||(r(),e.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(r(),e.onError(new Error("Upload progress connection closed unexpectedly")))},i}function bt(e){if(e){e.onmessage=null,e.onerror=null,e.onclose=null;try{e.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}e.close()}}function xt(e,t){const i=e.remoteInfo;if(!i)return t.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let o=!1,r=null;const s=gt(t.apiBase,t.folder,t.extraParams),n=mt(e,t.folder);return(i.pickerAccessToken?async function(e,t,i,o,r,s,n){const a=e.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:t,platform:"drive",fileId:i,endpoint:o,headers:r,size:s,metadata:n})});if(!l.ok){const e=await l.text().catch((()=>""));throw new Error(`Google Picker upload failed (${l.status}): ${e}`)}return l.json()}(i.companionUrl,i.pickerAccessToken,i.fileId,s,t.authHeaders,i.size,n):async function(e,t,i,o,r){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const n=st(e),a=at(t),l=s?`${n}/search/${a}/get/${o}`:`${n}/${a}/get/${o}`,d=s?{Accept:"application/json","Content-Type":"application/json"}:rt(i),c=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...r,httpMethod:r.httpMethod??"POST",useFormData:r.useFormData??!0,fieldname:r.fieldname??"files[]"})});if(401===c.status)throw new ft;if(!c.ok){const e=await c.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Companion upload failed (HTTP ${c.status})`)}return c.json()}(i.companionUrl,i.provider,i.token,i.requestPath,{fileId:i.fileId,endpoint:s,headers:t.authHeaders,size:i.size,metadata:n},!i.token)).then((s=>{o||(r=vt({companionUrl:i.companionUrl,token:s.token,uploadFile:e,expectedSize:i.size,onProgress:(e,i)=>{o||t.onProgress(e,i)},onComplete:e=>{o||t.onComplete(e)},onError:e=>{o||t.onError(e)}}))})).catch((e=>{o||t.onError(e instanceof Error?e:new Error(String(e)))})),{abort(){o=!0,bt(r),r=null}}}function yt(e,t){const i=e.remoteUrl;if(!i)return t.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let o=!1,r=null;const s=new AbortController,n=gt(t.apiBase,t.folder,t.extraParams);return async function(e,t,i){const o=st(e),r=await fetch(`${o}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:t}),signal:i});if(!r.ok){const e=await r.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Could not fetch URL metadata (HTTP ${r.status})`)}return r.json()}(t.companionUrl,i,s.signal).then((r=>{var a;if(o)return null;null==(a=t.onMeta)||a.call(t,{name:r.name,type:r.type,size:r.size});const l=mt(e,t.folder);return r.name&&(l.name=r.name),r.type&&(l.type=r.type),async function(e,t,i,o){const r=st(e),s=await fetch(`${r}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:t,...i,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:o});if(!s.ok){const e=await s.json().catch((()=>null));throw new Error((null==e?void 0:e.message)||`Companion URL upload failed (HTTP ${s.status})`)}return s.json()}(t.companionUrl,i,{fileId:e.id,endpoint:n,headers:t.authHeaders,size:r.size,metadata:l},s.signal).then((e=>({result:e,size:r.size})))})).then((i=>{o||!i||(r=vt({companionUrl:t.companionUrl,token:i.result.token,uploadFile:e,expectedSize:i.size,onProgress:(e,i)=>{o||t.onProgress(e,i)},onComplete:e=>{o||t.onComplete(e)},onError:e=>{o||t.onError(e)}}))})).catch((e=>{o||e&&"AbortError"===e.name||t.onError(e instanceof Error?e:new Error(String(e)))})),{abort(){o=!0,s.abort(),bt(r),r=null}}}function wt(e){return wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(e)}function _t(e,t,i){return t=Ct(t),function(e,t){if(t&&("object"===wt(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,St()?Reflect.construct(t,i||[],Ct(e).constructor):t.apply(e,i))}function kt(e){var t="function"==typeof Map?new Map:void 0;return kt=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch{return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(St())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,t);var r=new(e.bind.apply(e,o));return i&&$t(r,i.prototype),r}(e,arguments,Ct(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),$t(i,e)},kt(e)}function St(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(St=function(){return!!e})()}function $t(e,t){return $t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$t(e,t)}function Ct(e){return Ct=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ct(e)}var Pt=function(e){function t(e){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=_t(this,t,[e])).originalRequest=r,i.originalResponse=s,i.causingError=o,null!=o&&(e+=", caused by ".concat(o.toString())),null!=r){var n=r.getHeader("X-Request-ID")||"n/a",a=r.getMethod(),l=r.getURL(),d=s?s.getStatus():"n/a",c=s?s.getBody()||"":"n/a";e+=", originated from request (method: ".concat(a,", url: ").concat(l,", response code: ").concat(d,", response text: ").concat(c,", request id: ").concat(n,")")}return i.message=e,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$t(e,t)}(t,e),function(e,t,i){return Object.defineProperty(e,"prototype",{writable:!1}),e}(t)}(kt(Error));function Ut(e){return Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(e)}function Lt(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,zt(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function zt(e){var t=function(e,t){if("object"!=Ut(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=Ut(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==Ut(t)?t:t+""}var Rt=function(){return Lt((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}),[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,t){return Promise.resolve(null)}}])}();const Et="function"==typeof Buffer,Ft=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),Ot=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),Tt=(e=>{let t={};return e.forEach(((e,i)=>t[e]=i)),t})(Ot),jt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,It=String.fromCharCode.bind(String),Bt=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_"))),Mt=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),Dt=e=>{let t,i,o,r,s="";const n=e.length%3;for(let a=0;a<e.length;){if((i=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255||(r=e.charCodeAt(a++))>255)throw new TypeError("invalid character found");t=i<<16|o<<8|r,s+=Ot[t>>18&63]+Ot[t>>12&63]+Ot[t>>6&63]+Ot[63&t]}return n?s.slice(0,n-3)+"===".substring(n):s},At="function"==typeof btoa?e=>btoa(e):Et?e=>Buffer.from(e,"binary").toString("base64"):Dt,Ht=Et?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let i=0,o=e.length;i<o;i+=4096)t.push(It.apply(null,e.subarray(i,i+4096)));return At(t.join(""))},Nt=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?It(192|t>>>6)+It(128|63&t):It(224|t>>>12&15)+It(128|t>>>6&63)+It(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return It(240|t>>>18&7)+It(128|t>>>12&63)+It(128|t>>>6&63)+It(128|63&t)},qt=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Vt=e=>e.replace(qt,Nt),Kt=Et?e=>Buffer.from(e,"utf8").toString("base64"):Ft?e=>Ht(Ft.encode(e)):e=>At(Vt(e)),Yt=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Bt(Kt(e)):Kt(e)},Wt=e=>{if(e=e.replace(/\s+/g,""),!jt.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,i,o,r=[];for(let s=0;s<e.length;)t=Tt[e.charAt(s++)]<<18|Tt[e.charAt(s++)]<<12|(i=Tt[e.charAt(s++)])<<6|(o=Tt[e.charAt(s++)]),64===i?r.push(It(t>>16&255)):64===o?r.push(It(t>>16&255,t>>8&255)):r.push(It(t>>16&255,t>>8&255,255&t));return r.join("")},Xt=Yt;var Gt,Jt,Zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ei,ti,ii,oi={};var ri=function(){if(ii)return ti;ii=1;var e=(Jt||(Jt=1,Gt=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}),Gt),t=function(){if(ei)return oi;ei=1;var e=Object.prototype.hasOwnProperty;function t(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function i(e){try{return encodeURIComponent(e)}catch{return null}}return oi.stringify=function(t,o){o=o||"";var r,s,n=[];for(s in"string"!=typeof o&&(o="?"),t)if(e.call(t,s)){if(!(r=t[s])&&(null===r||void 0===r||isNaN(r))&&(r=""),s=i(s),r=i(r),null===s||null===r)continue;n.push(s+"="+r)}return n.length?o+n.join("&"):""},oi.parse=function(e){for(var i,o=/([^=?#&]+)=?([^&]*)/g,r={};i=o.exec(e);){var s=t(i[1]),n=t(i[2]);null===s||null===n||s in r||(r[s]=n)}return r},oi}(),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,o=/[\n\r\t]/g,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(e){return(e||"").toString().replace(i,"")}var d=[["#","hash"],["?","query"],function(e,t){return u(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function p(e){var t,i=(typeof window<"u"?window:typeof Zt<"u"?Zt:typeof self<"u"?self:{}).location||{},o={},s=typeof(e=e||i);if("blob:"===e.protocol)o=new f(unescape(e.pathname),{});else if("string"===s)for(t in o=new f(e,{}),c)delete o[t];else if("object"===s){for(t in e)t in c||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=r.test(e.href))}return o}function u(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function h(e,t){e=(e=l(e)).replace(o,""),t=t||{};var i,r=n.exec(e),s=r[1]?r[1].toLowerCase():"",a=!!r[2],d=!!r[3],c=0;return a?d?(i=r[2]+r[3]+r[4],c=r[2].length+r[3].length):(i=r[2]+r[4],c=r[2].length):d?(i=r[3]+r[4],c=r[3].length):i=r[4],"file:"===s?c>=2&&(i=i.slice(2)):u(s)?i=r[4]:s?a&&(i=i.slice(2)):c>=2&&u(t.protocol)&&(i=r[4]),{protocol:s,slashes:a||u(s),slashesCount:c,rest:i}}function f(i,r,s){if(i=(i=l(i)).replace(o,""),!(this instanceof f))return new f(i,r,s);var n,c,g,m,v,b,x=d.slice(),y=typeof r,w=this,_=0;for("object"!==y&&"string"!==y&&(s=r,r=null),s&&"function"!=typeof s&&(s=t.parse),n=!(c=h(i||"",r=p(r))).protocol&&!c.slashes,w.slashes=c.slashes||n&&r.slashes,w.protocol=c.protocol||r.protocol||"",i=c.rest,("file:"===c.protocol&&(2!==c.slashesCount||a.test(i))||!c.slashes&&(c.protocol||c.slashesCount<2||!u(w.protocol)))&&(x[3]=[/(.*)/,"pathname"]);_<x.length;_++)"function"!=typeof(m=x[_])?(g=m[0],b=m[1],g!==g?w[b]=i:"string"==typeof g?~(v="@"===g?i.lastIndexOf(g):i.indexOf(g))&&("number"==typeof m[2]?(w[b]=i.slice(0,v),i=i.slice(v+m[2])):(w[b]=i.slice(v),i=i.slice(0,v))):(v=g.exec(i))&&(w[b]=v[1],i=i.slice(0,v.index)),w[b]=w[b]||n&&m[3]&&r[b]||"",m[4]&&(w[b]=w[b].toLowerCase())):i=m(i,w);s&&(w.query=s(w.query)),n&&r.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==r.pathname)&&(w.pathname=function(e,t){if(""===e)return t;for(var i=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=i.length,r=i[o-1],s=!1,n=0;o--;)"."===i[o]?i.splice(o,1):".."===i[o]?(i.splice(o,1),n++):n&&(0===o&&(s=!0),i.splice(o,1),n--);return s&&i.unshift(""),("."===r||".."===r)&&i.push(""),i.join("/")}(w.pathname,r.pathname)),"/"!==w.pathname.charAt(0)&&u(w.protocol)&&(w.pathname="/"+w.pathname),e(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(~(v=w.auth.indexOf(":"))?(w.username=w.auth.slice(0,v),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=w.auth.slice(v+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(w.auth)),w.auth=w.password?w.username+":"+w.password:w.username),w.origin="file:"!==w.protocol&&u(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString()}return f.prototype={set:function(i,o,r){var n=this;switch(i){case"query":"string"==typeof o&&o.length&&(o=(r||t.parse)(o)),n[i]=o;break;case"port":n[i]=o,e(o,n.protocol)?o&&(n.host=n.hostname+":"+o):(n.host=n.hostname,n[i]="");break;case"hostname":n[i]=o,n.port&&(o+=":"+n.port),n.host=o;break;case"host":n[i]=o,s.test(o)?(o=o.split(":"),n.port=o.pop(),n.hostname=o.join(":")):(n.hostname=o,n.port="");break;case"protocol":n.protocol=o.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(o){var a="pathname"===i?"/":"#";n[i]=o.charAt(0)!==a?a+o:o}else n[i]=o;break;case"username":case"password":n[i]=encodeURIComponent(o);break;case"auth":var l=o.indexOf(":");~l?(n.username=o.slice(0,l),n.username=encodeURIComponent(decodeURIComponent(n.username)),n.password=o.slice(l+1),n.password=encodeURIComponent(decodeURIComponent(n.password))):n.username=encodeURIComponent(decodeURIComponent(o))}for(var c=0;c<d.length;c++){var p=d[c];p[4]&&(n[p[1]]=n[p[1]].toLowerCase())}return n.auth=n.password?n.username+":"+n.password:n.username,n.origin="file:"!==n.protocol&&u(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){(!e||"function"!=typeof e)&&(e=t.stringify);var i,o=this,r=o.host,n=o.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var a=n+(o.protocol&&o.slashes||u(o.protocol)?"//":"");return o.username?(a+=o.username,o.password&&(a+=":"+o.password),a+="@"):o.password?(a+=":"+o.password,a+="@"):"file:"!==o.protocol&&u(o.protocol)&&!r&&"/"!==o.pathname&&(a+="@"),(":"===r[r.length-1]||s.test(o.hostname)&&!o.port)&&(r+=":"),a+=r+o.pathname,(i="object"==typeof o.query?e(o.query):o.query)&&(a+="?"!==i.charAt(0)?"?"+i:i),o.hash&&(a+=o.hash),a}},f.extractProtocol=h,f.location=p,f.trimLeft=l,f.qs=t,ti=f}();const si=Qt(ri);function ni(){ni=function(){return t};var e,t={},i=Object.prototype,o=i.hasOwnProperty,r=Object.defineProperty||function(e,t,i){e[t]=i.value},s="function"==typeof Symbol?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch{d=function(e,t,i){return e[t]=i}}function c(e,t,i,o){var s=t&&t.prototype instanceof v?t:v,n=Object.create(s.prototype),a=new z(o||[]);return r(n,"_invoke",{value:C(e,i,a)}),n}function p(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(o){return{type:"throw",arg:o}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",f="executing",g="completed",m={};function v(){}function b(){}function x(){}var y={};d(y,n,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(R([])));_&&_!==i&&o.call(_,n)&&(y=_);var k=x.prototype=v.prototype=Object.create(y);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){function i(r,s,n,a){var l=p(e[r],e,s);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==di(c)&&o.call(c,"__await")?t.resolve(c.__await).then((function(e){i("next",e,n,a)}),(function(e){i("throw",e,n,a)})):t.resolve(c).then((function(e){d.value=e,n(d)}),(function(e){return i("throw",e,n,a)}))}a(l.arg)}var s;r(this,"_invoke",{value:function(e,o){function r(){return new t((function(t,r){i(e,o,t,r)}))}return s=s?s.then(r,r):r()}})}function C(t,i,o){var r=u;return function(s,n){if(r===f)throw Error("Generator is already running");if(r===g){if("throw"===s)throw n;return{value:e,done:!0}}for(o.method=s,o.arg=n;;){var a=o.delegate;if(a){var l=P(a,o);if(l){if(l===m)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===u)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=f;var d=p(t,i,o);if("normal"===d.type){if(r=o.done?g:h,d.arg===m)continue;return{value:d.arg,done:o.done}}"throw"===d.type&&(r=g,o.method="throw",o.arg=d.arg)}}}function P(t,i){var o=i.method,r=t.iterator[o];if(r===e)return i.delegate=null,"throw"===o&&t.iterator.return&&(i.method="return",i.arg=e,P(t,i),"throw"===i.method)||"return"!==o&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var s=p(r,t.iterator,i.arg);if("throw"===s.type)return i.method="throw",i.arg=s.arg,i.delegate=null,m;var n=s.arg;return n?n.done?(i[t.resultName]=n.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function U(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(U,this),this.reset(!0)}function R(t){if(t||""===t){var i=t[n];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function i(){for(;++r<t.length;)if(o.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}throw new TypeError(di(t)+" is not iterable")}return b.prototype=x,r(k,"constructor",{value:x,configurable:!0}),r(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S($.prototype),d($.prototype,a,(function(){return this})),t.AsyncIterator=$,t.async=function(e,i,o,r,s){void 0===s&&(s=Promise);var n=new $(c(e,i,o,r),s);return t.isGeneratorFunction(i)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},S(k),d(k,l,"Generator"),d(k,n,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var o in t)i.push(o);return i.reverse(),function e(){for(;i.length;){var o=i.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=R,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(o,r){return a.type="throw",a.arg=t,i.next=o,r&&(i.method="next",i.arg=e),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var n=this.tryEntries[s],a=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=o.call(n,"catchLoc"),d=o.call(n,"finallyLoc");if(l&&d){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var n=s?s.completion:{};return n.type=e,n.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),L(i),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var o=i.completion;if("throw"===o.type){var r=o.arg;L(i)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,i,o){return this.delegate={iterator:R(t),resultName:i,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}function ai(e,t,i,o,r,s,n){try{var a=e[s](n),l=a.value}catch(d){return void i(d)}a.done?t(l):Promise.resolve(l).then(o,r)}function li(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o,r,s,n,a=[],l=!0,d=!1;try{if(s=(i=i.call(e)).next,0!==t)for(;!(l=(o=s.call(i)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(c){d=!0,r=c}finally{try{if(!l&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(d)throw r}}return a}}(e,t)||ci(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function di(e){return di="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},di(e)}function ci(e,t){if(e){if("string"==typeof e)return pi(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return pi(e,t)}}function pi(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function ui(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function hi(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ui(Object(i),!0).forEach((function(t){fi(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ui(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function fi(e,t,i){return(t=mi(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function gi(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,mi(o.key),o)}}function mi(e){var t=function(e,t){if("object"!=di(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=di(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==di(t)?t:t+""}var vi="tus-v1",bi="ietf-draft-03",xi="ietf-draft-05",yi={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Ui,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:vi},wi=function(){function e(t,i){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),"resume"in i&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=i,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return function(e,t,i){return t&&gi(e.prototype,t),i&&gi(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(e,[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then((function(t){return e._urlStorage.findUploadsByFingerprint(t)}))}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,t=this.file;if(t)if([vi,bi,xi].includes(this.options.protocol))if(this.options.endpoint||this.options.uploadUrl||this.url){var i=this.options.retryDelays;if(null==i||"[object Array]"===Object.prototype.toString.call(i)){if(this.options.parallelUploads>1)for(var o=0,r=["uploadUrl","uploadSize","uploadLengthDeferred"];o<r.length;o++){var s=r[o];if(this.options[s])return void this._emitError(new Error("tus: cannot use the ".concat(s," option when parallelUploads is enabled")))}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1)return void this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length)return void this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"))}this.options.fingerprint(t,this.options).then((function(i){return e._fingerprint=i,e._source?e._source:e.options.fileReader.openFile(t,e.options.chunkSize)})).then((function(t){if(e._source=t,e.options.uploadLengthDeferred)e._size=null;else if(null!=e.options.uploadSize){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size))return void e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(e._size=e._source.size,null==e._size)return void e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));e.options.parallelUploads>1||null!=e._parallelUploadUrls?e._startParallelUpload():e._startSingleUpload()})).catch((function(t){e._emitError(t)}))}else this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"))}else this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));else this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));else this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,r=0;this._parallelUploads=[];var s=null!=this._parallelUploadUrls?this._parallelUploadUrls.length:this.options.parallelUploads,n=null!==(t=this.options.parallelUploadBoundaries)&&void 0!==t?t:function(e,t){for(var i=Math.floor(e/t),o=[],r=0;r<t;r++)o.push({start:i*r,end:i*(r+1)});return o[t-1].end=e,o}(this._source.size,s);this._parallelUploadUrls&&n.forEach((function(e,t){e.uploadUrl=i._parallelUploadUrls[t]||null})),this._parallelUploadUrls=new Array(n.length);var a,l=n.map((function(t,s){var a=0;return i._source.slice(t.start,t.end).then((function(l){var d=l.value;return new Promise((function(l,c){var p=hi(hi({},i.options),{},{uploadUrl:t.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:hi(hi({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:l,onError:c,onProgress:function(e){r=r-a+e,a=e,i._emitProgress(r,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[s]=u.url,i._parallelUploadUrls.filter((function(e){return!!e})).length===n.length&&i._saveUploadInUrlStorage()}}),u=new e(d,p);u.start(),i._parallelUploads.push(u)}))}))}));Promise.all(l).then((function(){(a=i._openRequest("POST",i.options.endpoint)).setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var e=_i(i.options.metadata);return""!==e&&a.setHeader("Upload-Metadata",e),i._sendRequest(a,null)})).then((function(e){if(ki(e.getStatus(),200)){var t=e.getHeader("Location");null!=t?(i.url=Li(i.options.endpoint,t),"Created upload at ".concat(i.url),i._emitSuccess(e)):i._emitHttpError(a,e,"tus: invalid or missing Location header")}else i._emitHttpError(a,e,"tus: unexpected response while creating upload")})).catch((function(e){i._emitError(e)}))}},{key:"_startSingleUpload",value:function(){return this._aborted=!1,null!=this.url?("Resuming upload from previous URL: ".concat(this.url),void this._resumeUpload()):null!=this.options.uploadUrl?("Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,void this._resumeUpload()):void this._createUpload()}},{key:"abort",value:function(t){var i=this;if(null!=this._parallelUploads){var o,r=function(e,t){var i=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=ci(e))||t){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,a=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return n=e.done,e},e:function(e){a=!0,s=e},f:function(){try{!n&&null!=i.return&&i.return()}finally{if(a)throw s}}}}(this._parallelUploads);try{for(r.s();!(o=r.n()).done;){o.value.abort(t)}}catch(s){r.e(s)}finally{r.f()}}return null!==this._req&&this._req.abort(),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),t&&null!=this.url?e.terminate(this.url,this.options).then((function(){return i._removeFromUrlStorage()})):Promise.resolve()}},{key:"_emitHttpError",value:function(e,t,i,o){this._emitError(new Pt(i,o,e,t))}},{key:"_emitError",value:function(e){var t=this;if(!this._aborted){if(null!=this.options.retryDelays)if(null!=this._offset&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),Pi(e,this._retryAttempt,this.options)){var i=this.options.retryDelays[this._retryAttempt++];return this._offsetBeforeRetry=this._offset,void(this._retryTimeout=setTimeout((function(){t.start()}),i))}if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}}},{key:"_emitSuccess",value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),"function"==typeof this.options.onSuccess&&this.options.onSuccess({lastResponse:e})}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,i){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,i)}},{key:"_createUpload",value:function(){var e=this;if(this.options.endpoint){var t=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?t.setHeader("Upload-Defer-Length","1"):t.setHeader("Upload-Length","".concat(this._size));var i,o=_i(this.options.metadata);""!==o&&t.setHeader("Upload-Metadata",o),this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,i=this._addChunkToRequest(t)):((this.options.protocol===bi||this.options.protocol===xi)&&t.setHeader("Upload-Complete","?0"),i=this._sendRequest(t,null)),i.then((function(i){if(ki(i.getStatus(),200)){var o=i.getHeader("Location");if(null!=o)return e.url=Li(e.options.endpoint,o),"Created upload at ".concat(e.url),"function"==typeof e.options.onUploadUrlAvailable&&e.options.onUploadUrlAvailable(),0===e._size?(e._emitSuccess(i),void e._source.close()):void e._saveUploadInUrlStorage().then((function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(t,i):(e._offset=0,e._performUpload())}));e._emitHttpError(t,i,"tus: invalid or missing Location header")}else e._emitHttpError(t,i,"tus: unexpected response while creating upload")})).catch((function(i){e._emitHttpError(t,null,"tus: failed to create upload",i)}))}else this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=this._openRequest("HEAD",this.url);this._sendRequest(t,null).then((function(i){var o=i.getStatus();if(!ki(o,200))return 423===o?void e._emitHttpError(t,i,"tus: upload is currently locked; retry later"):(ki(o,400)&&e._removeFromUrlStorage(),e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitHttpError(t,i,"tus: unable to resume upload (new upload cannot be created without an endpoint)"));var r=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(r))e._emitHttpError(t,i,"tus: invalid or missing offset value");else{var s=Number.parseInt(i.getHeader("Upload-Length"),10);!Number.isNaN(s)||e.options.uploadLengthDeferred||e.options.protocol!==vi?("function"==typeof e.options.onUploadUrlAvailable&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then((function(){if(r===s)return e._emitProgress(s,s),void e._emitSuccess(i);e._offset=r,e._performUpload()}))):e._emitHttpError(t,i,"tus: invalid or missing length value")}})).catch((function(i){e._emitHttpError(t,null,"tus: failed to resume upload",i)}))}},{key:"_performUpload",value:function(){var e,t=this;this._aborted||(this.options.overridePatchMethod?(e=this._openRequest("POST",this.url)).setHeader("X-HTTP-Method-Override","PATCH"):e=this._openRequest("PATCH",this.url),e.setHeader("Upload-Offset","".concat(this._offset)),this._addChunkToRequest(e).then((function(i){ki(i.getStatus(),200)?t._handleUploadResponse(e,i):t._emitHttpError(e,i,"tus: unexpected response while uploading chunk")})).catch((function(i){t._aborted||t._emitHttpError(e,null,"tus: failed to upload chunk at offset ".concat(t._offset),i)})))}},{key:"_addChunkToRequest",value:function(e){var t=this,i=this._offset,o=this._offset+this.options.chunkSize;return e.setProgressHandler((function(e){t._emitProgress(i+e,t._size)})),this.options.protocol===vi?e.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===xi&&e.setHeader("Content-Type","application/partial-upload"),(o===Number.POSITIVE_INFINITY||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(i,o).then((function(i){var o=i.value,r=i.done,s=null!=o&&o.size?o.size:0;t.options.uploadLengthDeferred&&r&&(t._size=t._offset+s,e.setHeader("Upload-Length","".concat(t._size)));var n=t._offset+s;return!t.options.uploadLengthDeferred&&r&&n!==t._size?Promise.reject(new Error("upload was configured with a size of ".concat(t._size," bytes, but the source is done after ").concat(n," bytes"))):null===o?t._sendRequest(e):((t.options.protocol===bi||t.options.protocol===xi)&&e.setHeader("Upload-Complete",r?"?1":"?0"),t._emitProgress(t._offset,t._size),t._sendRequest(e,o))}))}},{key:"_handleUploadResponse",value:function(e,t){var i=Number.parseInt(t.getHeader("Upload-Offset"),10);if(!Number.isNaN(i))return this._emitProgress(i,this._size),this._emitChunkComplete(i-this._offset,i,this._size),this._offset=i,i===this._size?(this._emitSuccess(t),void this._source.close()):void this._performUpload();this._emitHttpError(e,t,"tus: invalid or missing offset value")}},{key:"_openRequest",value:function(e,t){var i=Si(e,t,this.options);return this._req=i,i}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch((function(t){e._emitError(t)})),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||null!==this._urlStorageKey)return Promise.resolve();var t={size:this._size,metadata:this.options.metadata,creationTime:(new Date).toString()};return this._parallelUploads?t.parallelUploadUrls=this._parallelUploadUrls:t.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,t).then((function(t){e._urlStorageKey=t}))}},{key:"_sendRequest",value:function(e){return $i(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=Si("DELETE",t,i);return $i(o,null,i).then((function(e){if(204!==e.getStatus())throw new Pt("tus: unexpected response while terminating upload",null,o,e)})).catch((function(r){if(r instanceof Pt||(r=new Pt("tus: failed to terminate upload",r,o,null)),!Pi(r,0,i))throw r;var s=i.retryDelays[0],n=i.retryDelays.slice(1),a=hi(hi({},i),{},{retryDelays:n});return new Promise((function(e){return setTimeout(e,s)})).then((function(){return e.terminate(t,a)}))}))}}])}();function _i(e){return Object.entries(e).map((function(e){var t=li(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(Xt(String(o)))})).join(",")}function ki(e,t){return e>=t&&e<t+100}function Si(e,t,i){var o=i.httpStack.createRequest(e,t);i.protocol===bi?o.setHeader("Upload-Draft-Interop-Version","5"):i.protocol===xi?o.setHeader("Upload-Draft-Interop-Version","6"):o.setHeader("Tus-Resumable","1.0.0");for(var r=i.headers||{},s=0,n=Object.entries(r);s<n.length;s++){var a=li(n[s],2),l=a[0],d=a[1];o.setHeader(l,d)}if(i.addRequestId){var c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));o.setHeader("X-Request-ID",c)}return o}function $i(e,t,i){return Ci.apply(this,arguments)}function Ci(){return Ci=function(e){return function(){var t=this,i=arguments;return new Promise((function(o,r){var s=e.apply(t,i);function n(e){ai(s,o,r,n,a,"next",e)}function a(e){ai(s,o,r,n,a,"throw",e)}n(void 0)}))}}(ni().mark((function e(t,i,o){var r;return ni().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof o.onBeforeRequest){e.next=3;break}return e.next=3,o.onBeforeRequest(t);case 3:return e.next=5,t.send(i);case 5:if(r=e.sent,"function"!=typeof o.onAfterResponse){e.next=9;break}return e.next=9,o.onAfterResponse(t,r);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)}))),Ci.apply(this,arguments)}function Pi(e,t,i){return!(null==i.retryDelays||t>=i.retryDelays.length||null==e.originalRequest)&&(i&&"function"==typeof i.onShouldRetry?i.onShouldRetry(e,t,i):Ui(e))}function Ui(e){var t=e.originalResponse?e.originalResponse.getStatus():0;return(!ki(t,400)||409===t||423===t)&&function(){var e=!0;return typeof navigator<"u"&&!1===navigator.onLine&&(e=!1),e}()}function Li(e,t){return new si(t,e).toString()}wi.defaultOptions=yi;var zi=function(){return typeof navigator<"u"&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()};function Ri(e){return new Promise((function(t,i){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var e=o.response;t(e)},o.onerror=function(e){i(e)},o.open("GET",e),o.send()}))}function Ei(e){return Ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(e)}function Fi(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Oi(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oi(e){var t=function(e,t){if("object"!=Ei(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=Ei(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==Ei(t)?t:t+""}var Ti=function(){return Fi((function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._file=t,this.size=t.size}),[{key:"slice",value:function(e,t){if(typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u"))return function(e){return new Promise((function(t,i){var o=new FileReader;o.onload=function(){var e=new Uint8Array(o.result);t({value:e})},o.onerror=function(e){i(e)},o.readAsArrayBuffer(e)}))}(this._file.slice(e,t));var i=this._file.slice(e,t),o=t>=this.size;return Promise.resolve({value:i,done:o})}},{key:"close",value:function(){}}])}();function ji(e){return ji="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(e)}function Ii(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Bi(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bi(e){var t=function(e,t){if("object"!=ji(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=ji(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==ji(t)?t:t+""}function Mi(e){return void 0===e?0:void 0!==e.size?e.size:e.length}var Di=function(){return Ii((function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}),[{key:"slice",value:function(e,t){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,t)}},{key:"_readUntilEnoughDataOrDone",value:function(e,t){var i=this,o=t<=this._bufferOffset+Mi(this._buffer);if(this._done||o){var r=this._getDataFromBuffer(e,t),s=null==r&&this._done;return Promise.resolve({value:r,done:s})}return this._reader.read().then((function(o){var r=o.value;return o.done?i._done=!0:void 0===i._buffer?i._buffer=r:i._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var i=new e.constructor(e.length+t.length);return i.set(e),i.set(t,e.length),i}throw new Error("Unknown data type")}(i._buffer,r),i._readUntilEnoughDataOrDone(e,t)}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var i=0===Mi(this._buffer);return this._done&&i?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])}();function Ai(e){return Ai="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ai(e)}function Hi(){Hi=function(){return t};var e,t={},i=Object.prototype,o=i.hasOwnProperty,r=Object.defineProperty||function(e,t,i){e[t]=i.value},s="function"==typeof Symbol?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch{d=function(e,t,i){return e[t]=i}}function c(e,t,i,o){var s=t&&t.prototype instanceof v?t:v,n=Object.create(s.prototype),a=new z(o||[]);return r(n,"_invoke",{value:C(e,i,a)}),n}function p(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(o){return{type:"throw",arg:o}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",f="executing",g="completed",m={};function v(){}function b(){}function x(){}var y={};d(y,n,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(R([])));_&&_!==i&&o.call(_,n)&&(y=_);var k=x.prototype=v.prototype=Object.create(y);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){function i(r,s,n,a){var l=p(e[r],e,s);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==Ai(c)&&o.call(c,"__await")?t.resolve(c.__await).then((function(e){i("next",e,n,a)}),(function(e){i("throw",e,n,a)})):t.resolve(c).then((function(e){d.value=e,n(d)}),(function(e){return i("throw",e,n,a)}))}a(l.arg)}var s;r(this,"_invoke",{value:function(e,o){function r(){return new t((function(t,r){i(e,o,t,r)}))}return s=s?s.then(r,r):r()}})}function C(t,i,o){var r=u;return function(s,n){if(r===f)throw Error("Generator is already running");if(r===g){if("throw"===s)throw n;return{value:e,done:!0}}for(o.method=s,o.arg=n;;){var a=o.delegate;if(a){var l=P(a,o);if(l){if(l===m)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===u)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=f;var d=p(t,i,o);if("normal"===d.type){if(r=o.done?g:h,d.arg===m)continue;return{value:d.arg,done:o.done}}"throw"===d.type&&(r=g,o.method="throw",o.arg=d.arg)}}}function P(t,i){var o=i.method,r=t.iterator[o];if(r===e)return i.delegate=null,"throw"===o&&t.iterator.return&&(i.method="return",i.arg=e,P(t,i),"throw"===i.method)||"return"!==o&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var s=p(r,t.iterator,i.arg);if("throw"===s.type)return i.method="throw",i.arg=s.arg,i.delegate=null,m;var n=s.arg;return n?n.done?(i[t.resultName]=n.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function U(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(U,this),this.reset(!0)}function R(t){if(t||""===t){var i=t[n];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function i(){for(;++r<t.length;)if(o.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}throw new TypeError(Ai(t)+" is not iterable")}return b.prototype=x,r(k,"constructor",{value:x,configurable:!0}),r(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S($.prototype),d($.prototype,a,(function(){return this})),t.AsyncIterator=$,t.async=function(e,i,o,r,s){void 0===s&&(s=Promise);var n=new $(c(e,i,o,r),s);return t.isGeneratorFunction(i)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},S(k),d(k,l,"Generator"),d(k,n,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var o in t)i.push(o);return i.reverse(),function e(){for(;i.length;){var o=i.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=R,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(o,r){return a.type="throw",a.arg=t,i.next=o,r&&(i.method="next",i.arg=e),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var n=this.tryEntries[s],a=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=o.call(n,"catchLoc"),d=o.call(n,"finallyLoc");if(l&&d){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var n=s?s.completion:{};return n.type=e,n.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),L(i),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var o=i.completion;if("throw"===o.type){var r=o.arg;L(i)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,i,o){return this.delegate={iterator:R(t),resultName:i,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}function Ni(e,t,i,o,r,s,n){try{var a=e[s](n),l=a.value}catch(d){return void i(d)}a.done?t(l):Promise.resolve(l).then(o,r)}function qi(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Vi(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vi(e){var t=function(e,t){if("object"!=Ai(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=Ai(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==Ai(t)?t:t+""}var Ki=function(){return qi((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}),[{key:"openFile",value:function(){var e=function(e){return function(){var t=this,i=arguments;return new Promise((function(o,r){var s=e.apply(t,i);function n(e){Ni(s,o,r,n,a,"next",e)}function a(e){Ni(s,o,r,n,a,"throw",e)}n(void 0)}))}}(Hi().mark((function e(t,i){var o;return Hi().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(zi()&&t&&typeof t.uri<"u")){e.next=11;break}return e.prev=1,e.next=4,Ri(t.uri);case 4:return o=e.sent,e.abrupt("return",new Ti(o));case 8:throw e.prev=8,e.t0=e.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(e.t0));case 11:if(!("function"==typeof t.slice&&typeof t.size<"u")){e.next=13;break}return e.abrupt("return",Promise.resolve(new Ti(t)));case 13:if("function"!=typeof t.read){e.next=18;break}if(i=Number(i),Number.isFinite(i)){e.next=17;break}return e.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return e.abrupt("return",Promise.resolve(new Di(t,i)));case 18:return e.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,i){return e.apply(this,arguments)}}()}])}();function Yi(e){return Yi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(e)}function Wi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xi(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Gi(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Gi(e){var t=function(e,t){if("object"!=Yi(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=Yi(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==Yi(t)?t:t+""}var Ji=function(){return Xi((function e(){Wi(this,e)}),[{key:"createRequest",value:function(e,t){return new Zi(e,t)}},{key:"getName",value:function(){return"XHRHttpStack"}}])}(),Zi=function(){return Xi((function e(t,i){Wi(this,e),this._xhr=new XMLHttpRequest,this._xhr.open(t,i,!0),this._method=t,this._url=i,this._headers={}}),[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,t){this._xhr.setRequestHeader(e,t),this._headers[e]=t}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(t){t.lengthComputable&&e(t.loaded)})}},{key:"send",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(i,o){e._xhr.onload=function(){i(new Qi(e._xhr))},e._xhr.onerror=function(e){o(e)},e._xhr.send(t)}))}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])}(),Qi=function(){return Xi((function e(t){Wi(this,e),this._xhr=t}),[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])}();function eo(e){return eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eo(e)}function to(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,io(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function io(e){var t=function(e,t){if("object"!=eo(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=eo(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==eo(t)?t:t+""}var oo=!1;try{oo="localStorage"in window;var ro="tusSupport",so=localStorage.getItem(ro);localStorage.setItem(ro,so),null===so&&localStorage.removeItem(ro)}catch(l){if(l.code!==l.SECURITY_ERR&&l.code!==l.QUOTA_EXCEEDED_ERR)throw l;oo=!1}var no=oo,ao=function(){return to((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}),[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var t=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(t)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,t){var i=Math.round(1e12*Math.random()),o="tus::".concat(e,"::").concat(i);return localStorage.setItem(o,JSON.stringify(t)),Promise.resolve(o)}},{key:"_findEntries",value:function(e){for(var t=[],i=0;i<localStorage.length;i++){var o=localStorage.key(i);if(0===o.indexOf(e))try{var r=JSON.parse(localStorage.getItem(o));r.urlStorageKey=o,t.push(r)}catch{}}return t}}])}();function lo(e){return lo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lo(e)}function co(e,t,i){return i&&function(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,bo(o.key),o)}}(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function po(e,t,i){return t=ho(t),function(e,t){if(t&&("object"===lo(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,uo()?Reflect.construct(t,i||[],ho(e).constructor):t.apply(e,i))}function uo(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(uo=function(){return!!e})()}function ho(e){return ho=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ho(e)}function fo(e,t){return fo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},fo(e,t)}function go(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function mo(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?go(Object(i),!0).forEach((function(t){vo(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):go(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function vo(e,t,i){return(t=bo(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function bo(e){var t=function(e,t){if("object"!=lo(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=lo(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==lo(t)?t:t+""}var xo=mo(mo({},wi.defaultOptions),{},{httpStack:new Ji,fileReader:new Ki,urlStorage:no?new ao:new Rt,fingerprint:function(e,t){return zi()?Promise.resolve(function(e,t){var i=e.exif?function(e){var t=0;if(0===e.length)return t;for(var i=0;i<e.length;i++){t=(t<<5)-t+e.charCodeAt(i),t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",i,t.endpoint].join("/")}(e,t)):Promise.resolve(["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))}}),yo=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),po(this,t,[e,i=mo(mo({},xo),i)])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fo(e,t)}(t,e),co(t,0,[{key:"terminate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=mo(mo({},xo),t),wi.terminate(e,t)}}])}(wi);function wo(e,t){const{tusConfig:i}=t,o=t.apiBase.replace(/\/+$/,""),r=i.endpoint||"https://eu-on-24001.connector.filerobot.com/files",s=i.jsonBase||"https://eu-on-24001.connector.filerobot.com/json",n=i.chunkSize??5242880,a=!1!==i.resumable,l=i.parallelChunks??1,d=i.retryDelays??[0,1e3,3e3,5e3],c=o.split("/").pop()||"";let p=!1,u=!1,h=!1;const f={name:e.name,type:e.type,"filerobot-folder":t.folder};et(e.product)&&(f.product=JSON.stringify(tt(e.product)));const g=new yo(e.file,{endpoint:r,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:f,fingerprint:async()=>`tus-${e.id}-${r}`,onBeforeRequest(e){const i=t.getAuthHeaders?t.getAuthHeaders():t.authHeaders;for(const[t,o]of Object.entries(i))e.setHeader(t,o);e.setHeader("X-Filerobot-Token",c)},onUploadUrlAvailable(){g.url&&t.onUploadUrlAvailable&&!h&&(h=!0,t.onUploadUrlAvailable(g.url))},onProgress(e,i){!u&&!p&&t.onProgress(e,i)},onSuccess(){var i;if(u)return;b();const o=g.url||"",r=null==(i=o.match(/files\/([^/?]+)/))?void 0:i[1];r?async function(e,t,i){const o=`${e.replace(/\/+$/,"")}/${t}`,r=i>1e8?13e3:6e3,s=3;for(let n=0;n<=s;n++){n>0&&await new Promise((e=>setTimeout(e,r)));const e=await fetch(o);if(404===e.status&&n<s)continue;if(!e.ok)throw new Error(`Failed to fetch file record (HTTP ${e.status})`);const t=await e.json();if(Ge(t))return t;if(t.file)return{status:"success",file:t.file};if("success"===t.status)return t;if(!(n<s))throw new Error(Ze(t,"File record not available after upload"))}throw new Error("File record not available after upload")}(s,r,e.size).then((i=>{u||t.onComplete(Ge(i)?Je(i,e):i)})).catch((e=>{u||t.onError(e)})):t.onComplete({status:"success",file:{uuid:"",name:e.name,extension:e.name.split(".").pop()||"",type:e.type,size:e.size,url:{public:o,cdn:o},meta:e.meta,tags:e.tags,info:{},created_at:(new Date).toISOString(),modified_at:(new Date).toISOString()}})},onError(e){u||(b(),function(e){var t;if(e instanceof Pt){const i=null==(t=e.originalRequest)?void 0:t.getUnderlyingObject();return i&&"number"==typeof i.readyState&&"number"==typeof i.status?0!==i.readyState&&4!==i.readyState||0===i.status:null==e.originalResponse&&null!=e.causingError}return!1}(e)?t.onError(new Error("Network error during upload \u2014 check your connection or firewall settings")):t.onError(e instanceof Error?e:new Error(String(e))))},onShouldRetry(e,t,i){var o;const r=null==(o=e.originalResponse)?void 0:o.getStatus();return 429===r||!(r&&r>400&&r<500&&409!==r)}});let m=null,v=null;typeof window<"u"&&(m=()=>{var e;!p&&!u&&(p=!0,g.abort(!1),null==(e=t.onPause)||e.call(t))},v=()=>{var e;p&&!u&&(p=!1,g.start(),null==(e=t.onResume)||e.call(t))},window.addEventListener("offline",m),window.addEventListener("online",v));const b=()=>{m&&window.removeEventListener("offline",m),v&&window.removeEventListener("online",v)},x=()=>{try{g.start()}catch(e){b(),t.onError(e instanceof Error?e:new Error(String(e)))}};return a?g.findPreviousUploads().then((e=>{e.length>0&&!u&&g.resumeFromPreviousUpload(e[0]),u||x()})):x(),{abort(){u=!0,p=!1,b(),g.abort(!0)},pause(){!p&&!u&&(p=!0,g.abort(!1))},resume(){p&&!u&&(p=!1,g.start())},isPaused:()=>p}}const _o="_sfxRelativePath",ko=8,So=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function $o(e,t){if(t){try{return void Object.defineProperty(e,_o,{value:t,configurable:!0,enumerable:!1,writable:!1})}catch{}try{Object.defineProperty(e,_o,{value:t,configurable:!0,enumerable:!1,writable:!0})}catch{e[_o]=t}}}function Co(e){const t=e[_o];if("string"==typeof t&&t)return t;const i=e.webkitRelativePath;if("string"==typeof i&&i)return i;const o=e.relativePath;return"string"==typeof o?o:""}function Po(e){if(!e)return"";const t=e.replace(/^\/+/,"").replace(/\/+$/,""),i=t.lastIndexOf("/");return-1===i?"":t.slice(0,i)}async function Uo(e){var t;const i=e.items;if(!(i&&i.length>0&&"function"==typeof i[0].webkitGetAsEntry))return{files:Array.from(e.files??[]),hadDirectories:!1};const o=[];let r=!1;for(const n of Array.from(i)){if("file"!==n.kind)continue;const e=null==(t=n.webkitGetAsEntry)?void 0:t.call(n);e&&(e.isDirectory&&(r=!0),o.push(e))}if(0===o.length)return{files:Array.from(e.files??[]),hadDirectories:!1};const s=[];return await Lo(o,"",s),{files:s,hadDirectories:r}}async function Lo(e,t,i){for(let o=0;o<e.length;o+=ko){const r=e.slice(o,o+ko);await Promise.all(r.map((e=>zo(e,t,i))))}}async function zo(e,t,i){try{if(e.isFile){const o=await function(e){return new Promise((t=>{e.file((e=>t(e)),(()=>t(null)))}))}(e);if(!o)return;return $o(o,t?`${t}/${o.name}`:o.name),void i.push(o)}if(e.isDirectory){if(function(e){return!!e&&(!!e.startsWith(".")||So.has(e))}(e.name))return;const o=t?`${t}/${e.name}`:e.name,r=await function(e){return new Promise((t=>{const i=e.createReader(),o=[],r=()=>{i.readEntries((e=>{0!==e.length?(o.push(...e),r()):t(o)}),(i=>{console.warn("[sfx-uploader] directory read failed for",null==e?void 0:e.name,i),t(o)}))};r()}))}(e);await Lo(r,o,i)}}catch(o){console.warn("[sfx-uploader] folder traversal skipped an entry:",(null==e?void 0:e.name)??e,o)}}class Ro{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe((()=>this.processQueue())),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())"idle"===i.status?(qe(this.store,i.id,{status:"queued"}),t=!0):"queued"===i.status&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||"error"!==t.status&&"failed"!==t.status||(qe(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())("error"===t.status||"failed"===t.status)&&qe(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),qe(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),qe(this.store,e,{status:"uploading"})):qe(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Eo(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),qe(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Eo(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),qe(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),null==(e=this.unsubscribe)||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=t-this.activeUploads.size;if(i<=0)return;const o=[...e.files.values()].filter((e=>"queued"===e.status)).sort(((e,t)=>e.retryCount!==t.retryCount?t.retryCount-e.retryCount:e.addedAt-t.addedAt)).slice(0,i);for(const r of o){const e=this.pausedUploads.get(r.id);e?(this.pausedUploads.delete(r.id),e.resume(),this.activeUploads.set(r.id,e),qe(this.store,r.id,{status:"uploading"})):this.startUpload(r)}}startUpload(e){var t,i;const o=null==(i=(t=this.config).resolveUploadParams)?void 0:i.call(t,e),r=!!o&&Object.keys(o).length>0,s=!r&&!e.remoteInfo&&!e.remoteUrl&&function(e,t){if(!t||!e.file)return!1;const i=t.sizeThreshold??10485760;return e.size>=i}(e,this.config.tusConfig);qe(this.store,e.id,{status:"uploading",error:null,isTus:s});let n=0,a=Date.now(),l=0;const d=function(e,t){const i=(e??"").replace(/\/+$/,""),o=(t??"").replace(/^\/+/,"").replace(/\/+$/,"");return o?i?`${i}/${o}`:o:e??""}(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:d,extraParams:r?o:void 0,onComplete:t=>this.handleComplete(e.id,t),onError:t=>this.handleError(e.id,t)},p=(t,i)=>{const o=Date.now(),r=(o-a)/1e3;if(r>0){const e=(t-n)/r;l=0===l?e:.3*e+.7*l}n=t,a=o;const s=i>0?Math.min(t/i*100,100):0;qe(this.store,e.id,{progress:s,bytesUploaded:t,speed:l}),this.updateTotalProgress()};let u;if(e.remoteInfo)u=xt(e,{...c,onProgress:p});else if(e.remoteUrl){if(!this.config.companionUrl)return qe(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),void this.processQueue();u=yt(e,{...c,onProgress:p,companionUrl:this.config.companionUrl,onMeta:t=>{qe(this.store,e.id,{size:t.size,type:t.type||e.type})}})}else if(s){const t=wo(e,{...c,onProgress:p,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:t=>{qe(this.store,e.id,{tusUploadUrl:t})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,t),qe(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,t),qe(this.store,e.id,{status:"uploading"})}});u=t}else u=ot(e,{...c,onProgress:p});this.activeUploads.set(e.id,u)}handleComplete(e,t){var i,o,r,s,n,a,l,d,c,p,u;this.activeUploads.delete(e);const h=this.store.getState().files.get(e),f=(null==(i=null==h?void 0:h.previewUrl)?void 0:i.startsWith("blob:"))??!1,g=(null==(r=null==(o=t.file)?void 0:o.url)?void 0:r.cdn)??(null==(n=null==(s=t.file)?void 0:s.url)?void 0:n.cdn_permalink)??(null==(l=null==(a=t.file)?void 0:a.url)?void 0:l.permalink)??null,m={status:"complete",progress:100,response:t,alreadyExisted:Ge(t)};if(h&&g&&h.type.startsWith("image/")&&!f){const e=(null==(p=(c=this.config).transformPreviewUrl)?void 0:p.call(c,g,null==(d=t.file)?void 0:d.url))??g;e&&(m.previewUrl=e)}const v=null==(u=t.file)?void 0:u.size,b="number"==typeof v?v:null==v?void 0:v.bytes;"number"==typeof b&&(m.size=b),qe(this.store,e,m),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,r=i.retryCount+1;if(r<=o.maxRetries){const s=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);qe(this.store,e,{status:"retrying",error:t.message,retryCount:r});const n=setTimeout((()=>{this.retryTimers.delete(e),qe(this.store,e,{status:"queued"}),this.processQueue()}),s);this.retryTimers.set(e,n)}else qe(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var t;null==(t=this.activeUploads.get(e))||t.abort(),this.activeUploads.delete(e);const i=this.retryTimers.get(e);i&&(clearTimeout(i),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,i=0,o=0,r=0,s=0;for(const n of e.values())"rejected"===n.status||"cancelled"===n.status||(s++,t+=n.size,i+="complete"===n.status?n.size:Math.min(n.bytesUploaded,n.size),r+="complete"===n.status?100:n.progress,"uploading"===n.status&&(o+=n.speed));this.store.setState({totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:s>0?Math.min(r/s,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some((e=>"queued"===e.status||"uploading"===e.status||"retrying"===e.status||"paused"===e.status))&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Eo(e){return"queued"===e||"uploading"===e||"retrying"===e||"paused"===e}function Fo(e,t){return`${(t||"https://api.filerobot.com").replace(/\/+$/,"")}/${e}`}function Oo(e,t){const i={};switch(e.mode){case"security-template":if(!t)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");i["X-Filerobot-Key"]=t;break;case"sass-key":i["X-Filerobot-Key"]=e.sassKey}return e.airboxPuid&&(i["X-Filerobot-Airbox-Puid"]=e.airboxPuid),i}async function To(e,t){const i=Fo(e.container,t);if("security-template"===e.mode){const o=await async function(e,t,i){const o=`${Fo(e,i)}/key/${encodeURIComponent(t)}`,r=new AbortController,s=setTimeout((()=>r.abort()),3e4);try{const e=await fetch(o,{signal:r.signal});if(clearTimeout(s),!e.ok)throw new Error(`SASS key exchange failed (HTTP ${e.status})`);const t=await e.json();if("error"===t.status)throw new Error(`SASS key exchange failed: ${t.msg||"Unknown error"}`);return t.key}catch(n){throw clearTimeout(s),n instanceof DOMException&&"AbortError"===n.name?new Error("SASS key exchange timed out"):n}}(e.container,e.securityTemplateId,t);return{apiBase:i,headers:Oo(e,o),sassKey:o}}return{apiBase:i,headers:Oo(e)}}const jo=300,Io=.85;function Bo(e){return"low"===e?.6:"high"===e?.85:.75}async function Mo(e){const t=await async function(e){if("function"==typeof createImageBitmap)try{const t=await createImageBitmap(e);return{source:t,width:t.width,height:t.height,close:()=>t.close()}}catch{}return new Promise(((t,i)=>{const o=new Image,r=URL.createObjectURL(e);o.onload=()=>{t({source:o,width:o.naturalWidth,height:o.naturalHeight,close:()=>URL.revokeObjectURL(r)})},o.onerror=()=>{URL.revokeObjectURL(r),i(new Error("Image decode failed"))},o.src=r}))}(e);try{const e=t.width>jo?jo/t.width:1,i=Math.max(1,Math.round(t.width*e)),o=Math.max(1,Math.round(t.height*e)),r=document.createElement("canvas");r.width=i,r.height=o;const s=r.getContext("2d");if(!s)throw new Error("Canvas 2D not supported");return s.drawImage(t.source,0,0,i,o),await new Promise(((e,t)=>{r.toBlob((i=>i?e(i):t(new Error("Canvas toBlob failed"))),"image/jpeg",Io)}))}finally{t.close()}}async function Do(e,t){var i,o;const r=new AbortController,s=setTimeout((()=>r.abort()),3e4),n=()=>r.abort();null==(i=t.signal)||i.addEventListener("abort",n);const a=r.signal,l=()=>{if(a.aborted)throw new DOMException("Aborted","AbortError")};try{l();const i=await async function(e,t){var i,o,r;if(e.file)return e.file;const s=e.previewUrl||(null==(r=null==(o=null==(i=e.response)?void 0:i.file)?void 0:o.url)?void 0:r.cdn)||e.remoteUrl||"";if(!s)throw new Error("No image source for similarity check");const n=await fetch(s,{signal:t});if(!n.ok)throw new Error(`Failed to load image (HTTP ${n.status})`);return n.blob()}(e,a);l();const o=await Mo(i);l();const r=`${(t.endpoint||"https://ai.scaleflex.com").replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(t.threshold))}`,s=new FormData;s.append("file",o,function(e){return`${(e||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}(e.name));const n=await fetch(r,{method:"POST",headers:{"Filerobot-Token":t.container,"Filerobot-Key":t.sassKey},body:s,signal:a});if(!n.ok)throw new Error(`Similarity check failed (HTTP ${n.status})`);const d=await n.json();if("error"===d.status)throw new Error(`Similarity check failed: ${d.msg||"Unknown error"}`);return(d.similar_assets??[]).map((e=>{let[t,i,o]=e;return{uuid:t,score:i,url:o}}))}finally{clearTimeout(s),null==(o=t.signal)||o.removeEventListener("abort",n)}}const Ao="sfx-uploader:last-upload:";function Ho(e){var t,i,o,r,s,n,a,l,d;const{file:c,previewUrl:p,...u}=e;let h=null;return"complete"===e.status&&(h=e.previewUrl&&!e.previewUrl.startsWith("blob:")?e.previewUrl:(null==(o=null==(i=null==(t=e.response)?void 0:t.file)?void 0:i.url)?void 0:o.permalink)??(null==(n=null==(s=null==(r=e.response)?void 0:r.file)?void 0:s.url)?void 0:n.cdn_permalink)??(null==(d=null==(l=null==(a=e.response)?void 0:a.file)?void 0:l.url)?void 0:d.cdn)??null),{...u,previewUrl:h}}const No={save(e,t){if(0===t.length)return void this.clear(e);!function(e,t){try{sessionStorage.setItem(Ao+e,JSON.stringify(t))}catch{}}(e,{__schemaVersion:1,savedAt:Date.now(),files:t.map(Ho)})},load(e){const t=function(e){try{const t=sessionStorage.getItem(Ao+e);if(!t)return null;const i=JSON.parse(t);return 1!==(null==i?void 0:i.__schemaVersion)?null:i}catch{return null}}(e);return t?t.files.map((e=>({...e,file:null,previewUrl:e.previewUrl??null}))):null},exists(e){try{return null!=sessionStorage.getItem(Ao+e)}catch{return!1}},clear(e){try{sessionStorage.removeItem(Ao+e)}catch{}}},qo="sfx-file-added",Vo="sfx-file-removed",Ko="sfx-file-rejected",Yo="sfx-upload-started",Wo="sfx-upload-progress",Xo="sfx-upload-complete",Go="sfx-upload-error",Jo="sfx-upload-retry",Zo="sfx-upload-paused",Qo="sfx-upload-resumed",er="sfx-all-complete",tr="sfx-folder-complete",ir="sfx-total-progress",or="sfx-before-upload",rr="sfx-open",sr="sfx-close",nr="sfx-cancel",ar="sfx-minimize",lr="sfx-restore",dr="sfx-panel-shown",cr="sfx-complete-action",pr="sfx-file-preview",ur="sfx-fill-metadata",hr="sfx-metadata-schema",fr="sfx-file-locate",gr="sfx-file-copy-cdn";let mr=0;function vr(){return`file-${Date.now()}-${++mr}`}function br(e){if(!Number.isFinite(e)||e<=0)return"0 B";const t=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1),o=e/Math.pow(1024,i);return`${0===i?o:o.toFixed(1)} ${t[i]}`}function xr(e){if(!isFinite(e)||e<=0)return"0s";const t=Math.round(e);if(t<60)return`${t}s`;const i=Math.floor(t/60);if(i>99){const e=Math.floor(i/60),t=i%60;return t>0?`${e}h ${t}m`:`${e}h`}const o=t%60;return o>0?`${i}m ${o}s`:`${i}m`}function yr(e){var t;const i=(null==(t=e.name.split(".").pop())?void 0:t.toLowerCase())??"";return e.type.startsWith("image/")?"image":e.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(i)?"vid":e.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(i)?"audio":"application/pdf"===e.type||"pdf"===i?"pdf":["xls","xlsx","csv","tsv","ods"].includes(i)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(i)?"doc":["ppt","pptx","key","odp"].includes(i)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(i)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(i)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(i)?"markup":["ttf","otf","woff","woff2","eot"].includes(i)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(i)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(i)?"binary":["sql","db","sqlite","mdb"].includes(i)?"data":"gen"}const wr=new Set([".ds_store","thumbs.db","desktop.ini"]);function _r(e){const t=(e.split(/[\\/]/).pop()??e).toLowerCase();return!!t.startsWith(".ds_store")||wr.has(t)}const kr="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Sr={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function $r(e){const t="_default"===e?"GENERIC":e.toUpperCase();return`${kr}${t}.svg?vh=${Sr[e]}`}function Cr(e){const t=(null==e?void 0:e.toLowerCase().replaceAll(".",""))||"";return $r(t in Sr?t:"_default")}function Pr(){return $r("_default")}const Ur={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Lr(e){var t;const i=(null==(t=e.split(".").pop())?void 0:t.toLowerCase())??"";return Ur[i]||""}function zr(e){return"image/heic"===e||"image/heif"===e}function Rr(e){return new Promise((t=>{const i=document.createElement("video");i.preload="metadata",i.muted=!0,i.playsInline=!0;const o=URL.createObjectURL(e);let r=!1;const s=()=>{r||(r=!0,t(null)),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o)};i.addEventListener("seeked",(()=>{try{const e=document.createElement("canvas");e.width=i.videoWidth||320,e.height=i.videoHeight||240;const s=e.getContext("2d");if(s)return s.drawImage(i,0,0,e.width,e.height),void e.toBlob((e=>{r||(r=!0,t(e?URL.createObjectURL(e):null),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o))}),"image/jpeg",.7)}catch{}s()}),{once:!0}),i.addEventListener("error",(()=>s()),{once:!0}),setTimeout((()=>s()),5e3),i.src=o,i.addEventListener("loadeddata",(()=>{i.currentTime=.1}),{once:!0})}))}function Er(e){return"max-files"===(null==e?void 0:e.code)}function Fr(e,t,i){var o,r;if(null!=t.maxFileSize&&e.size>0&&e.size>t.maxFileSize){const e=(t.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:Ie("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:e})}}if(null!=t.maxTotalFilesSize&&e.size>0){let o=e.size;for(const e of i.values())"rejected"!==e.status&&"cancelled"!==e.status&&(o+=e.size);if(o>t.maxTotalFilesSize)return{code:"max-total-size",message:Ie("totalSizeLimitExceeded","Total file size limit exceeded")}}if(null!=t.maxNumberOfFiles){let e=0;for(const t of i.values())"rejected"!==t.status&&"cancelled"!==t.status&&e++;if(e>=t.maxNumberOfFiles)return{code:"max-files",message:Ie("maxFilesAllowed","Maximum {{count}} files allowed",{count:t.maxNumberOfFiles})}}if(null!=t.allowedFileTypes){const i=t.allowedFileTypes,r="."+((null==(o=e.name.split(".").pop())?void 0:o.toLowerCase())??"");if(!i.some((t=>t.startsWith(".")?r===t.toLowerCase():t.endsWith("/*")?e.type.startsWith(t.slice(0,-1)):e.type===t)))return{code:"type-not-allowed",message:Ie("fileTypeNotAllowed","File type not allowed")}}if(null!=t.blockedFileTypes){const i=t.blockedFileTypes,o="."+((null==(r=e.name.split(".").pop())?void 0:r.toLowerCase())??"");if(i.some((t=>t.startsWith(".")?o===t.toLowerCase():t.endsWith("/*")?e.type.startsWith(t.slice(0,-1)):e.type===t)))return{code:"type-blocked",message:Ie("fileTypeBlocked","File type is blocked")}}return null}function Or(e){return e.allowedFileTypes?e.allowedFileTypes.join(","):""}const Tr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function jr(e){return e.filter((e=>e in Tr)).map((e=>Tr[e]))}function Ir(e){return e.brandStyle?o.dy`<span
    class=${(0,_.$)({"brand-ico":!0,"brand-ico--transparent":"transparent"===e.brandStyle.background})}
    ${De(e.brandStyle)}
  >${x(e.brandHtml)}</span>`:x(e.brandHtml)}var Br=Object.defineProperty,Mr=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Br(t,i,s),s};const Dr=[{id:"device",labelKey:"myDevice",label:"My Device",icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:'<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:'<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',iconColor:"#ea580c"}],Ar=class extends o.oi{constructor(){super(...arguments),this.t=je,this.sources=Dr}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return o.dy`
      ${this.sources.map((e=>o.dy`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Ir(e):o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `))}
    `}};Ar.styles=o.iv`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 24px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    button:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0) scale(0.98);
    }

    :host > button > svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    :host > button > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }
  `;let Hr=Ar;function Nr(e,t,i){const o=function(e,t){let i=e.get(t);return i||(i={hidden:!1,required:!1,contributingDependencyUuids:[]},e.set(t,i)),i}(e,i.targetCkey);switch(function(e,t){e.contributingDependencyUuids.includes(t)||e.contributingDependencyUuids.push(t)}(o,t.uuid),i.type){case"hide":o.hidden=!0;break;case"require":o.required=!0;break;case"allow_values":{const e=i.allowedValues??[];o.allowedValues=void 0===o.allowedValues?[...e]:function(e,t){if(0===e.length||0===t.length)return[];const i=new Set(e);return t.filter((e=>i.has(e)))}(o.allowedValues,e);break}case"set_values":{const e=i.setValues??[];if(0===e.length)break;void 0===o.setValue&&(o.setValue=1===e.length?e[0]:e);break}}}function qr(e,t){for(const i of t.actions)Nr(e,t,i)}Mr([(0,r.Cb)({attribute:!1})],Hr.prototype,"t"),Mr([(0,r.Cb)({type:Array})],Hr.prototype,"sources");const Vr=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function Kr(e,t){if(0===e.formatMimetypes.length)return!0;const i=function(e){const t=new Set;if(!e)return t;const i=e.toLowerCase(),[o]=i.split("/");return"image"===o?t.add("image"):"video"===o?t.add("video"):"audio"===o?t.add("audio"):"application"===o&&t.add("document"),Vr.has(i)&&t.add("archive"),t}(t);return e.formatMimetypes.some((e=>i.has(e)))}function Yr(e){return null==e||!(!Array.isArray(e)&&"string"!=typeof e)&&0===e.length}function Wr(e){return"boolean"==typeof e?e:"true"===e||"false"!==e&&null}function Xr(e){return null==e?[]:Array.isArray(e)?e.map(String):[String(e)]}function Gr(e,t){if(e.length!==t.length)return!1;const i=new Set(e);for(const o of t)if(!i.has(o))return!1;return!0}function Jr(e,t){if(0===e.length||0===t.length)return!1;const i=new Set(e);for(const o of t)if(i.has(o))return!0;return!1}function Zr(e,t){const i=t[e.triggerCkey],o=e.triggerValues;switch(e.triggerCondition){case"is_true":return!0===Wr(i);case"is_false":return!1===Wr(i);case"is_empty":return Yr(i);case"is_not_empty":return!Yr(i);case"is_in":return Jr(Xr(i),o);case"is_not_in":return!!Yr(i)||!Jr(Xr(i),o);case"is":return Gr(Xr(i),o);case"is_not":return!Gr(Xr(i),o);default:return!1}}function Qr(e,t,i){const o={},r=new Set;for(const a of t.fields)r.add(a.ckey),a.key in e.meta&&(o[a.ckey]=e.meta[a.key]);const s=i.filter((e=>r.has(e.triggerCkey))),n=function(e,t){const i=new Map;for(const o of t)o.active&&Kr(o,e.mime)&&Zr(o,e.meta)&&qr(i,o);return i}({mime:e.mime,meta:o},s);for(const a of t.groups){const e=a.ckey?n.get(a.ckey):void 0;if(null!=e&&e.hidden)for(const t of a.fields){const i=n.get(t.ckey);if(i){i.hidden=!0;for(const t of e.contributingDependencyUuids)i.contributingDependencyUuids.includes(t)||i.contributingDependencyUuids.push(t)}else n.set(t.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...e.contributingDependencyUuids]})}}return n}function es(e,t){const i=Array.isArray(t)?t:[t];switch(e.type){case"boolean":{const e=i[0];return"true"===e||"false"!==e&&null}case"select-one":return i[0]??null;case"multi-select":return i.length>0?i:null;default:return 1===i.length?i[0]:i}}function ts(e,t,i){var o,r;return!!(null!=(o=i.get(e.ckey))&&o.hidden||null!=t&&t.ckey&&null!=(r=i.get(t.ckey))&&r.hidden)}function is(e,t,i){if(0===i.size)return e;let o=null;for(const r of t.groups)for(const t of r.fields)ts(t,r,i)&&t.key in e&&(o||(o={...e}),delete o[t.key]);return o??e}const os="product.ref",rs="product.position",ss="__product__",ns=new Set([os,rs]);function as(e){return ns.has(e)}function ls(e){return e===os?"ref":e===rs?"position":null}function ds(e){return[{key:os,ckey:os,uuid:"product-ref",title:e("productRefLabel","Product reference"),type:"text",placeholder:e("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:rs,ckey:rs,uuid:"product-position",title:e("productPositionLabel","Position"),type:"numeric",placeholder:e("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function cs(e,t){const i=function(e){return{uuid:ss,isRoot:!1,name:e("productFieldsLabel","Product"),fields:ds(e)}}(t);let o=-1;for(let l=0;l<e.groups.length;l++)e.groups[l].isRoot&&(o=l);const r=o+1,s=[...e.groups.slice(0,r),i,...e.groups.slice(r)],n=s.flatMap((e=>e.fields)),a=new Map(n.map((e=>[e.key,e])));return{...e,groups:s,fields:n,fieldsByKey:a}}function ps(e,t,i){var o;if(((null==(o=null==i?void 0:i.requiredFields)?void 0:o.includes(e.ckey))||e.required)&&us(t))return`${e.title} is required`;if(us(t))return null;if(e.key===os)return"string"!=typeof t||Qe.test(t)?"Reference contains invalid characters":null;if(e.key===rs){const e=Number(t);return Number.isFinite(e)&&Number.isInteger(e)?null:"Position must be an integer"}switch(e.type){case"numeric":{const e=Number(t);if(!Number.isFinite(e))return"Must be a valid number";if(!Number.isInteger(e))return"Must be an integer";if(e<-1999999999||e>1999999999)return"Value out of range (\xb11,999,999,999)";break}case"decimal2":{const e=Number(t);if(!Number.isFinite(e))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(t)))return"Maximum 2 decimal places";if(e<-9999999999.99||e>9999999999.99)return"Value out of range (\xb19,999,999,999.99)";break}case"geopoint":{const e=t,i=""!==e.latitude&&null!=e.latitude,o=""!==e.longitude&&null!=e.longitude;if(i!==o)return"Both latitude and longitude are required";if(i&&o){const t=Number(e.latitude),i=Number(e.longitude);if(!Number.isFinite(t)||t<-90||t>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(i)||i<-180||i>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":try{const e=new URL(t);if(!["http:","https:"].includes(e.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}}if(e.validation&&"string"==typeof t)try{if(!new RegExp(e.validation).test(t))return"Value does not match expected format"}catch{}return null}function us(e){return null==e||(Array.isArray(e)||"string"==typeof e?0===e.length:"object"==typeof e?!Object.values(e).some((e=>null!=e&&""!==e)):!e)}const hs="FTYPE_LANGUAGES";function fs(e,t){if(!e.regional_variants_group_uuid)return;const i=null==t?void 0:t.regionalFilters;return i&&e.regional_variants_group_uuid in i?i[e.regional_variants_group_uuid]:null==t?void 0:t.language}function gs(e,t,i,o){if(!e.regional_variants_group_uuid||!t)return;const r=t.find((t=>t.uuid===e.regional_variants_group_uuid));if(!r)return;const s=(null==i?void 0:i[r.uuid])??o,n=r.variants.find((e=>e.api_value===s));return n?`${r.label}: ${n.label}`:void 0}function ms(e,t){var i;const o={};for(const r of e??[]){if(null==(i=r.variants)||!i.length)continue;const e=r.type===hs?vs(r.variants,t):void 0;o[r.uuid]=e??r.variants[0].api_value}return o}function vs(e,t){var i;if(!t)return;const o=t.toLowerCase(),r=o.split("-")[0];let s,n;for(const a of e){const e=null==(i=a.api_value)?void 0:i.toLowerCase();if(e){if(e===o)return a.api_value;!s&&e===r&&(s=a.api_value),!n&&e.split("-")[0]===r&&(n=a.api_value)}}return s??n}const bs=new Set(["asset-attachments","attachments-assets","integer-list"]),xs=new Set(["face_matcher"]);function ys(e){return bs.has(e)}function ws(e){return bs.has(e.type)||xs.has(e.ckey)}function _s(e){return null==e?[]:Array.isArray(e)?e.map(String):[String(e)]}function ks(e,t){if(e.length!==t.length)return!1;const i=new Set(e);for(const o of t)if(!i.has(o))return!1;return!0}function Ss(e,t){const i=[];for(const[o,r]of t){if(r.hidden)continue;const t=_s(e[o]);if(0!==t.length){if(void 0!==r.allowedValues){const e=new Set(r.allowedValues),s=t.filter((t=>!e.has(t)));s.length>0&&i.push({ckey:o,kind:"allow_values",conflictingValues:s,dependencyUuids:[...r.contributingDependencyUuids]})}if(void 0!==r.setValue){ks(t,Array.isArray(r.setValue)?r.setValue:[r.setValue])||i.push({ckey:o,kind:"set_values",conflictingValues:t,dependencyUuids:[...r.contributingDependencyUuids]})}}}return i}const $s=new Set(["idle","queued","rejected"]);function Cs(e){return!us(e)}function Ps(e,t){var i;return!ws(e)&&(!(null==(i=null==t?void 0:t.requiredFields)||!i.includes(e.ckey))||!!e.required)}function Us(e){return[...e.values()].filter((e=>$s.has(e.status)))}function Ls(e,t){return!1!==t.enforceRequiredBeforeUpload&&(!0===t.enforceRequiredBeforeUpload||(void 0!==e.forceFillingOnUpload?e.forceFillingOnUpload:!!(t.requiredFields&&t.requiredFields.length>0)||e.fields.some((e=>!!e.required))))}function zs(e,t,i){if(!t)return Ps(e,i);const o=t.get(e.ckey);return(null==o||!o.hidden)&&(!(null==o||!o.required)||Ps(e,i))}function Rs(e,t,i){const o=new Map;if(!i||0===i.length){for(const t of e)o.set(t.id,null);return o}for(const r of e)o.set(r.id,Qr({mime:r.type??"",meta:r.meta},t,i));return o}function Es(e,t,i){var o;const r=e.get(t.id);return r&&r.has(i)?r.get(i):null==(o=t.meta)?void 0:o[i]}function Fs(e,t,i,o,r){const s=new Set,n=Us(t);if(0===n.length)return s;const a=n.map((t=>function(e,t,i){const o=t.get(e.id);if(!o||0===o.size)return e;const r={...e.meta};for(const s of i.fields)o.has(s.key)&&(r[s.key]=o.get(s.key));return{...e,meta:r}}(t,e,i))),l=Rs(a,i,r);for(const d of i.fields)n.some(((t,i)=>{const r=l.get(a[i].id)??null;return!!zs(d,r,o)&&!Cs(Es(e,t,d.key))}))&&s.add(d.key);return s}function Os(e){let t=e;for(;t;)if(t instanceof ShadowRoot)t=t.host;else{if(t instanceof HTMLDialogElement&&t.open)return t;if(t instanceof Element&&t.shadowRoot){const e=t.shadowRoot.querySelector("dialog[open]");if(e instanceof HTMLDialogElement)return e}t=t.parentNode}return document.body}var Ts=Object.defineProperty,js=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Ts(t,i,s),s};const Is=new CSSStyleSheet;var Bs;Is.replaceSync("\n  [data-sfx-more-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }\n  [data-sfx-more-dropdown] .sfx-more-dropdown { position:fixed; background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.14),0 2px 8px rgba(0,0,0,0.06); border:1px solid #e8edf5; padding:6px; min-width:210px; max-height:340px; overflow-y:auto; z-index:99999; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .18s ease,visibility .18s ease,transform .18s ease; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }\n  [data-sfx-more-dropdown] .sfx-more-dropdown.open { opacity:1; visibility:visible; pointer-events:all; }\n  [data-sfx-more-dropdown] .sfx-more-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:6px; border:none; background:none; width:100%; font-size:13px; font-weight:500; color:#1e293b; cursor:pointer; transition:background .15s; font-family:inherit; white-space:nowrap; }\n  [data-sfx-more-dropdown] .sfx-more-item:hover { background:#f5f7fa; }\n  [data-sfx-more-dropdown] .sfx-more-item-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n  [data-sfx-more-dropdown] .sfx-more-item-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; }\n  [data-sfx-more-dropdown] .sfx-more-item .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n  [data-sfx-more-dropdown] .sfx-more-item .brand-ico svg { fill:white; stroke:none; stroke-width:0; }\n  [data-sfx-more-dropdown] .sfx-more-item .canva-ico { width:22px; height:22px; }\n  [data-sfx-more-dropdown] .sfx-more-item .canva-ico svg { width:22px; height:22px; }\n");const Ms=(Bs=class extends o.oi{constructor(){super(...arguments),this.t=je,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=3,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,1===this._dragCounter&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&Uo(t).then((e=>{let{files:t,hadDirectories:i}=e;t.length>0?this._emitFiles(t,i):i&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))}))},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=e.clientX-i.left+"px",this._rippleEl.style.top=e.clientY-i.top+"px",this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const e=o.webkitRelativePath;e&&$o(o,e)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var t;if(!this.isConnected||0===this.offsetWidth)return;const i=null==(t=e.clipboardData)?void 0:t.items;if(!i)return;const o=[];for(const r of i)if("file"===r.kind){const e=r.getAsFile();e&&o.push(e)}o.length>0&&(e.preventDefault(),this._emitFiles(o))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&(null!=(t=this._portalContainer)&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{"Escape"===e.key&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout((()=>this._updateVisiblePills()),100)}}browse(){var e,t;"folder"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files")&&this.directory&&this.multi?null==(e=this.folderInput)||e.click():null==(t=this.fileInput)||t.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Os(this).appendChild(this._portalContainer),this._injectDropdownStyles()),(0,o.sY)(o.dy`<div class="sfx-more-dropdown open">
          ${e.map((e=>o.dy`
              <button
                class="sfx-more-item"
                @click=${t=>this._onMoreItemClick(e,t)}
              >
                <div class="sfx-more-item-ico">
                  ${e.brandHtml?Ir(e):e.iconColor?o.dy`<svg
                        viewBox="0 0 24 24"
                        ${De({color:e.iconColor})}
                      >
                        ${w(e.icon)}
                      </svg>`:o.YP`<svg viewBox="0 0 24 24">${w(e.icon)}</svg>`}
                </div>
                ${e.labelKey?this.t(e.labelKey,e.label):e.label}
              </button>
            `))}
        </div>`,this._portalContainer),requestAnimationFrame((()=>this._positionDropdown()))}else this._portalContainer&&((0,o.sY)(o.Ld,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var e;const t=null==(e=this._portalContainer)?void 0:e.getRootNode();t&&(t.adoptedStyleSheets.includes(Is)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,Is]))}_positionDropdown(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".more-wrap > button"),o=null==(t=this._portalContainer)?void 0:t.querySelector(".sfx-more-dropdown");if(!i||!o)return;const r=i.getBoundingClientRect(),s=o.scrollHeight,n=o.offsetWidth,a=r.top,l=window.innerHeight-r.bottom;o.style.top=a>=s+8||a>l?r.top-s-8+"px":`${r.bottom+8}px`;let d=r.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),o.style.left=`${d}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;"cards"===this.sourcesLayout?this._visiblePills=e<=480?2:e<=768?3:5:this._visiblePills=e<=768?1:3}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver((e=>{var t;const i=((null==(t=e[0])?void 0:t.contentRect.width)??this.getBoundingClientRect().width)>=Bs._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")})),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&((0,o.sY)(o.Ld,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return o.dy`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Ir(e):o.dy`<span
              class="pill-ico"
              ${De(e.iconColor?{color:e.iconColor}:null)}
            >
              ${o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return o.dy`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?o.dy`<span class="card-ico">${Ir(e)}</span>`:o.dy`<span
              class="card-ico"
              ${De(e.iconColor?{color:e.iconColor}:null)}
            >
              ${o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return o.dy`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="src-card"
          @click=${e=>this._toggleMore(e)}
        >
          <span class="card-ico muted">
            <svg class="fill-icon" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">${this.t("more","More")}</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return o.dy`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="more-pill"
          @click=${e=>this._toggleMore(e)}
        >
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return o.dy`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role="button"
          tabindex="0"
          aria-label=${this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${this._onKeyDown}
        >
          <div class="dz-glow"></div>
          <div class="rings">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="core">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>

          ${!this.compact&&this.directory&&this.multi?o.dy`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${e=>{e.stopPropagation(),this.browse("folder")}}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:o.dy`<div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>`}
          ${!this.compact&&this.sources.length>0?o.dy`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${"cards"===this.sourcesLayout?o.dy`
                      <div class="sources-cards">
                        ${t.map((e=>this._renderCard(e)))}
                        ${i.length>0?this._renderMoreCard():o.Ld}
                      </div>
                    `:o.dy`
                      <div class="sources-grid">
                        ${t.map((e=>this._renderPill(e)))}
                        ${i.length>0?this._renderMoreDropdown():o.Ld}
                      </div>
                    `}
              `:o.Ld}
          ${this.compact&&this.sources.length>0?o.dy`
                <div class="sources-row">
                  ${this.sources.map((e=>o.dy`
                      <button
                        class="src-ico"
                        ${De(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}
                        data-tip=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
                      >
                        ${e.brandHtml?Ir(e):o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
                      </button>
                    `))}
                </div>
              `:o.Ld}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||o.Ld}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?o.dy`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:o.Ld}
      </div>
    `}},Bs.styles=o.iv`
    :host {
      display: flex;
      flex-shrink: 1;
      flex: 1;
      min-height: 0;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }

    :host([compact]) {
      flex: 0 0 auto;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      flex: 1;
    }

    :host([mode="inline"]) .drop-zone {
      height: 100%;
    }

    /* Inner clickable content area — only this triggers file browse on click */
    .dz-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      padding: 50px 40px;
      border-radius: 12px;
      user-select: none;
      background: var(--sfx-up-bg, #fff);
      position: relative;
      outline: none;
      transition: background 0.22s;
    }

    .dz-content:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over .dz-content {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    .drop-zone.compact .dz-content {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      background: none;
      border-radius: 0;
    }

    @keyframes compactIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Legacy radial glow element — kept hidden for back-compat.
       The real glow is now drawn as a pseudo-element of .rings so
       it is always centered on the cloud icon regardless of the
       drop-zone's size (previously .dz-glow was pinned to top: 20px
       which misaligned when the drop-zone stretched vertically). */
    .dz-glow {
      display: none;
    }

    /* --- Rings --- */
    .rings {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      flex-shrink: 0;
      overflow: visible;
    }

    .drop-zone:not(.compact) .rings::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(
        circle at center,
        rgba(37, 99, 235, 0.04) 0%,
        rgba(37, 99, 235, 0.02) 40%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .compact .rings {
      display: none;
    }

    /* --- Core icon --- */
    .core {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px rgba(37, 99, 235, 0.15);
    }

    .core svg {
      width: 26px;
      height: 26px;
    }

    .dz-content:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      /* Match the icon's 24px bottom margin so the title has equal breathing
         room above (icon → title) and below (title → divider). */
      margin-bottom: 24px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    /* "folder" link merged into the title — styled like the "browse" span. */
    .title button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }
    .title button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .folder-pick {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
      transition: opacity 0.15s;
    }
    .folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }
    .compact .folder-pick {
      display: none;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.15s;
      margin-bottom: 24px;
    }

    .compact .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- "or Import From" divider --- */
    .import-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 420px;
      margin-bottom: 20px;
    }

    .import-divider::before,
    .import-divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border, #e2e8f0);
    }

    .import-divider span {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      letter-spacing: 0.3px;
    }

    .compact .import-divider {
      display: none;
    }

    /* --- Source pills grid (expanded mode) --- */
    .sources-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      min-height: 92px;
    }

    .compact .sources-grid {
      display: none;
    }

    .src-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      height: 38px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    .src-pill:active {
      transform: translateY(0) scale(0.98);
    }

    .src-pill .pill-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .src-pill .pill-ico svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill .pill-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-pill .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source cards grid (expanded mode, cards layout) --- */
    .sources-cards {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 760px;
    }

    .compact .sources-cards {
      display: none;
    }

    .sources-cards > .more-wrap {
      display: contents;
    }

    .sources-cards > .more-wrap > .src-card {
      /* restore flex item behaviour lost by display:contents on the wrapper */
      flex: 1;
      min-width: 88px;
      max-width: 140px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 8px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 140px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-card:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 4px 14px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-2px);
    }

    .src-card:active {
      transform: translateY(0) scale(0.97);
    }

    .src-card .card-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
    }

    .src-card .card-ico.muted {
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .src-card .card-ico svg {
      width: 28px;
      height: 28px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-card .card-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-card .card-label {
      font-size: 10px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .src-card .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 7px;
    }

    .src-card .brand-ico svg {
      width: 24px;
      height: 24px;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* Google Drive has transparent background — show SVG at full card-ico size */
    .src-card .brand-ico--transparent {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico--transparent svg {
      width: 28px;
      height: 28px;
    }

    .src-card .canva-ico {
      width: 32px;
      height: 32px;
    }

    .src-card .canva-ico svg {
      width: 32px;
      height: 32px;
    }

    /* --- "More" pill + dropdown --- */
    .more-wrap {
      position: relative;
    }

    .more-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .more-pill:hover,
    .more-wrap.open .more-pill {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .more-pill:hover {
      transform: translateY(-1px);
    }

    .more-pill svg {
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }

    .more-chevron {
      width: 12px;
      height: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }

    .more-wrap.open .more-chevron {
      transform: rotate(180deg);
      color: currentColor;
    }

    /* Dropdown uses position:fixed to escape overflow:hidden ancestors */
    .more-dropdown {
      position: fixed;
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.14),
        0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        opacity 0.18s ease,
        visibility 0.18s ease,
        transform 0.18s ease;
    }

    .more-dropdown.above {
      transform: translateY(-6px);
    }

    .more-dropdown.below {
      transform: translateY(6px);
    }

    .more-wrap.open .more-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateY(0);
    }

    .more-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      background: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      transition: background 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }

    .more-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-item .more-item-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .more-item-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .more-item .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* --- Brand icon container (for provider logos) --- */
    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .src-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }

    .src-ico .brand-ico svg {
      width: 12px;
      height: 12px;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico .canva-ico,
    .more-item .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-ico .canva-ico svg,
    .more-item .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source icons row (compact mode) --- */
    .sources-row {
      display: none;
    }

    .compact .sources-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
      position: relative;
      z-index: 20;
    }

    .src-divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 4px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-surface, #f8fafc);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico > svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      color: var(--sfx-up-primary, #2563eb);
    }

    .src-ico::after {
      content: attr(data-tip);
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-border, #e5e7eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 3px 8px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 50;
      font-family: inherit;
    }

    .src-ico:hover::after {
      opacity: 1;
      visibility: visible;
    }

    /* --- Ripple --- */
    .ripple {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
    }

    .ripple.go {
      animation: ripple 0.55s ease-out forwards;
    }

    /* --- Hidden input --- */
    input[type="file"] {
      display: none;
    }

    @keyframes slowSpin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ripple {
      from {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.18;
      }
      to {
        transform: translate(-50%, -50%) scale(12);
        opacity: 0;
      }
    }

    .drop-zone:focus-visible,
    .src-pill:focus-visible,
    .src-card:focus-visible,
    .more-pill:focus-visible,
    .src-ico:focus-visible,
    .more-item:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (max-width: 480px) {
      .drop-zone:not(.compact) {
        padding: 32px 20px;
      }
      .title {
        font-size: 16px;
      }
      .rings {
        width: 90px;
        height: 90px;
      }
      .core {
        width: 44px;
        height: 44px;
      }
      .core svg {
        width: 20px;
        height: 20px;
      }
    }

    /* Inline mode on a TRULY wide host (e.g. full-screen) — frame the empty
       drop-zone as a bounded bordered card so it doesn't float lost in a
       sea of whitespace. The data-wide attribute is set imperatively by a
       ResizeObserver in the component (see _onHostResize). Threshold is
       1200px of host width, which only the full-screen example reliably
       hits — embedded inline uploaders (Home demo, Sources Layout, plain
       inline) are all narrower and stay untouched. Modal mode is always
       excluded via the [mode="inline"] selector. */
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) {
      flex: 1 1 auto;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      align-self: center;
      margin-inline: auto;
      padding: 64px 48px;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 24px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .subtitle {
      font-size: 15px;
      margin-bottom: 28px;
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
      }
      .ripple.go {
        animation: none;
      }
      .drop-zone.compact {
        animation: none;
      }
    }

    /* Mobile responsive — placed at the END of the stylesheet so these
       overrides win the cascade against the base .src-pill, .title,
       .drop-zone rules declared earlier above. */
    @media (max-width: 768px) {
      :host {
        max-width: 100vw;
      }
      .drop-zone:not(.compact) {
        padding: 32px 16px;
      }
      .import-divider {
        max-width: 100%;
        margin-bottom: 14px;
      }
      .sources-grid {
        max-width: 100%;
        min-height: 0;
      }
      .src-pill {
        padding: 9px 14px;
        font-size: 13px;
      }
      .title {
        font-size: 18px;
      }
    }

    /* Galaxy Z Fold / Samsung S8+ / iPhone SE — extra narrow. */
    @media (max-width: 400px) {
      .drop-zone:not(.compact) {
        padding: 24px 12px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `,Bs._WIDE_THRESHOLD_PX=1200,Bs);js([(0,r.Cb)({attribute:!1})],Ms.prototype,"t"),js([(0,r.Cb)({type:Boolean,reflect:!0})],Ms.prototype,"compact"),js([(0,r.Cb)({type:Boolean,attribute:"external-drag-over"})],Ms.prototype,"externalDragOver"),js([(0,r.Cb)({type:String})],Ms.prototype,"accept"),js([(0,r.Cb)({type:Boolean})],Ms.prototype,"multi"),js([(0,r.Cb)({type:Boolean})],Ms.prototype,"directory"),js([(0,r.Cb)({type:Array})],Ms.prototype,"sources"),js([(0,r.Cb)({type:String,attribute:"sources-layout"})],Ms.prototype,"sourcesLayout"),js([(0,r.Cb)({type:String,reflect:!0})],Ms.prototype,"mode"),js([(0,r.SB)()],Ms.prototype,"_dragOver"),js([(0,r.SB)()],Ms.prototype,"_moreOpen"),js([(0,r.SB)()],Ms.prototype,"_visiblePills"),js([(0,r.IO)(".ripple")],Ms.prototype,"_rippleEl"),js([(0,r.IO)("input[data-sfx-dz-files]")],Ms.prototype,"fileInput"),js([(0,r.IO)("input[data-sfx-dz-folder]")],Ms.prototype,"folderInput");let Ds=Ms;class As{constructor(e){this._unsubscribe=null,this._host=e,e.addController(this)}hostConnected(){this._unsubscribe=function(e){return Ee.add(e),()=>Ee.delete(e)}((()=>this._host.requestUpdate()))}hostDisconnected(){var e;null==(e=this._unsubscribe)||e.call(this),this._unsubscribe=null}}const Hs=class extends o.oi{constructor(){super(...arguments),this._i18nController=new As(this)}render(){return o.dy`
      <div class="line"></div>
      <div class="label">${Ie("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Hs.styles=o.iv`
    :host {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 0;
    }

    .line {
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .label {
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #cbd5e1);
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
    }
  `;let Ns=Hs;var qs=Object.defineProperty,Vs=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&qs(t,i,s),s};const Ks=new CSSStyleSheet;Ks.replaceSync("\n  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; pointer-events:all; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item { display:flex; align-items:center; gap:10px; width:100%; padding:8px 12px; border:none; background:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; transition:background .15s; font-family:inherit; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item:hover { background:#f5f7fa; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg.fill-icon { fill:currentColor; stroke:none; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico svg { fill:white; stroke:none; stroke-width:0; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico { width:22px; height:22px; }\n  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico svg { width:22px; height:22px; }\n  @keyframes sfxTileDropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }\n");const Ys=class extends o.oi{constructor(){super(...arguments),this.t=je,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var t;if(null!=(t=this._portalContainer)&&t.contains(e.target))return;const i=this.renderRoot.querySelector(".drop-tile-more-wrap"),o=e.composedPath();i&&o.includes(i)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{"Escape"===e.key&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");null==e||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");null==t||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const e=o.webkitRelativePath;e&&$o(o,e)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),"device"!==t.id)this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}));else{const e=this.renderRoot.querySelector('input[type="file"]');null==e||e.click()}}_addGlobalListeners(){requestAnimationFrame((()=>document.addEventListener("click",this._outsideClickHandler,!0))),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Os(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),(0,o.sY)(o.dy`<div class="sfx-tile-dropdown">
        ${e.map((e=>o.dy`
          <button
            class="sfx-tile-dropdown-item"
            @click=${t=>this._onMoreSourceClick(t,e)}
          >
            <span class="sfx-tile-dropdown-ico" ${De(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}>
              ${e.brandHtml?Ir(e):o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
            </span>
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `))}
      </div>`,this._portalContainer),requestAnimationFrame((()=>this._positionPortal()))}_positionPortal(){var e;const t=this.renderRoot.querySelector(".drop-tile-more"),i=null==(e=this._portalContainer)?void 0:e.querySelector(".sfx-tile-dropdown");if(!t||!i)return;const o=t.getBoundingClientRect(),r=i.scrollHeight,s=i.offsetWidth,n=o.top,a=window.innerHeight-o.bottom;i.style.top=n>=r+6||n>a?o.top-r-6+"px":`${o.bottom+6}px`;let l=o.right-s;l=Math.max(8,Math.min(l,window.innerWidth-s-8)),i.style.left=`${l}px`}_closePortal(){this._portalContainer&&((0,o.sY)(o.Ld,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var e;const t=null==(e=this._portalContainer)?void 0:e.getRootNode();t&&(t.adoptedStyleSheets.includes(Ks)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,Ks]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return o.dy`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">${this.t("dropOrClickTo","Drop or click to")} <span>${this.t("browse","browse")}</span></div>
          ${this.directory&&this.multi?o.dy`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:o.Ld}
          ${t.length>0?o.dy`
            <div class="drop-tile-sources">
              ${t.map((e=>o.dy`
                <button
                  class="drop-tile-src"
                  ${De(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}
                  title=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                  @click=${t=>this._onSourceClick(t,e)}
                >
                  ${e.brandHtml?Ir(e):o.YP`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${w(e.icon)}</svg>`}
                </button>
              `))}
              ${i.length>0?o.dy`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${e=>this._toggleMore(e)}>···</button>
                </div>
              `:o.Ld}
            </div>
          `:o.Ld}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept||o.Ld} @change=${this._onFileInput} />
        ${this.directory&&this.multi?o.dy`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />`:o.Ld}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter((e=>this.searchResults.has(e))).length,i=e?Math.round(t/e*100):0,r=e>0&&t===e;return o.dy`
      ${e>1&&!this.previewOpen?o.dy`
            <div class="similar-banner search">
              ${r?o.dy`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>`:o.dy`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b>${r?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets\u2026")}</b>
                <span>${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span>
                <div class="search-bar"><div class="search-bar-fill" ${De({width:`${i}%`})}></div></div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${r?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:o.Ld}
      <div class="grid">
        ${this.showDropTile&&"review"!==this.mode?this._renderDropTile():o.Ld}
        ${m(this.files,(e=>e.id),((e,t)=>{const i=this.searchResults.get(e.id);return o.dy`<sfx-file-item .t=${this.t} .file=${e} .mode=${this.mode} .allowRename=${this.allowRename} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(e.id)} .selectionActive=${this.selectedIds.size>0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(e.id)} .similarCount=${(null==i?void 0:i.length)??-1} .similarResults=${i??[]} ${De({"--tile-index":String(t)})}></sfx-file-item>`}))}
      </div>
    `}};Ys.styles=o.iv`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
      scrollbar-gutter: stable;
    }

    :host::-webkit-scrollbar {
      width: var(--sfx-scrollbar-w, 12px);
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border-left: var(--sfx-scrollbar-inset-left, 3px) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, 3px) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 224px), 1fr));
      gap: 12px;
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Instruction / progress banner. Sticky to the top of the scrolling grid so
       it stays reachable (Select all / Check / Cancel / progress) when there are
       many assets and the list is long. Two-layer background so the banner
       stays fully opaque even when the host project sets --accent to a
       translucent colour: solid bg underneath, primary tint on top. z-index
       must clear in-tile overlays (max z-index inside a tile is 11). */
    .similar-banner {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 var(--sfx-grid-pad-r, 8px) 12px var(--sfx-grid-pad-l, 16px);
      padding: 8px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--sfx-up-primary-bg, #eff6ff),
        var(--sfx-up-primary-bg, #eff6ff)
      );
      border: 1px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .similar-banner-ico {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .similar-banner-ico svg { width: 16px; height: 16px; }

    .similar-banner-txt { flex: 1; min-width: 0; }
    .similar-banner-txt b {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #37414b;
    }
    .similar-banner-txt span {
      font-size: 12px;
      font-weight: 400;
      color: #5b6e82;
    }

    .similar-select-count {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 24px;
      padding: 0 8px;
      border-radius: 999px;
      background: var(--sfx-up-surface, #eef2ff);
      color: var(--sfx-up-primary, #2563eb);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
    }
    .similar-select-count.full {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .similar-select-all {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
    }

    .similar-select-all input {
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      margin: 0;
      border: none;
      border-radius: 6px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: inset 0 0 0 1.5px #ccd6de;
      cursor: pointer;
      position: relative;
      top: 1px;
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
    }

    .similar-select-all input:checked {
      background: var(--sfx-up-primary, #2563eb);
      box-shadow: inset 0 0 0 1.5px var(--sfx-up-primary, #2563eb);
    }

    .similar-select-all input:checked::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3.5px;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* --- Similarity search progress banner --- */
    .search-ring {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      border-top-color: var(--sfx-up-primary, #2563eb);
      animation: simBannerSpin 0.7s linear infinite;
    }

    @keyframes simBannerSpin { to { transform: rotate(360deg); } }

    .search-done-ico {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--sfx-up-success, #16a34a);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .search-done-ico svg { width: 14px; height: 14px; }

    .search-bar {
      height: 6px;
      border-radius: 3px;
      background: var(--sfx-up-bg, #fff);
      overflow: hidden;
      margin-top: 7px;
    }
    .search-bar-fill {
      height: 100%;
      border-radius: 3px;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .search-cancel {
      flex: 0 0 auto;
      height: 32px;
      padding: 0 14px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-secondary, #475569);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .search-cancel:hover { background: var(--sfx-up-border-light, #f1f5f9); }

    /* Mobile: 2 cols at <=768, 1 col at <=440. Use viewport @media not
       container queries — container queries fire on local file-list width
       which is narrow in desktop preview mode, breaking desktop layout. */
    @media (max-width: 768px) {
      :host {
        scrollbar-gutter: auto;
        padding-bottom: 0;
      }
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 4px 12px 16px;
      }
    }

    @media (max-width: 440px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }

    /* --- Drop tile (first card in grid) — mirrors file-item structure
       so its natural height matches a file card at any column width */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover,
    :host([drag-active]) .drop-tile {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    /* Preview area — flex:1 absorbs remaining row height so drop-tile total
       always matches the file-card height (info bar handles its own size).
       container-type lets the inner rings/icon scale with tile width via cqi.
       Padding-block gives the rings breathing room so they never hug the
       top edge even when the cell is short. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 14px 8px 6px;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — natural height stays close to the file-card .info area.
       Bottom padding is trimmed so the preview has more room for the rings
       when the cell is short. */
    .drop-tile-info {
      padding: 8px 12px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    /* Rings scale with tile width (cqi) and shrink if the preview area is
       too short — that's why we drop flex-shrink and use max-height. */
    .drop-tile-rings {
      width: clamp(40px, 22cqi, 100px);
      height: clamp(40px, 22cqi, 100px);
      max-height: 100%;
      aspect-ratio: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: tileSpin 20s linear infinite;
    }

    .drop-tile-ring:nth-child(2) {
      inset: 8px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    @keyframes tileSpin {
      to { transform: rotate(360deg); }
    }

    .drop-tile-core {
      width: clamp(32px, 14cqi, 52px);
      height: clamp(32px, 14cqi, 52px);
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
      transition: all 0.2s ease;
    }

    .drop-tile:hover .drop-tile-core {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    .drop-tile-core svg {
      width: clamp(16px, 7cqi, 26px);
      height: clamp(16px, 7cqi, 26px);
    }

    .drop-tile-text {
      font-size: clamp(12px, 3.5cqi, 15px);
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.2;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-folder-pick {
      font-size: clamp(11px, 3cqi, 13px);
      color: var(--sfx-up-text-muted, #94a3b8);
      text-align: center;
      margin-top: 2px;
    }
    .drop-tile-folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s;
    }
    .drop-tile-folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .drop-tile-sources {
      display: flex;
      gap: clamp(3px, 1.2cqi, 8px);
      margin-top: 8px;
    }

    .drop-tile-src {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .drop-tile-src:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .drop-tile-src svg {
      width: clamp(20px, 6cqi, 24px);
      height: clamp(20px, 6cqi, 24px);
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .drop-tile-src svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .drop-tile-src .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-src .brand-ico svg {
      width: 20px;
      height: 20px;
      stroke: none;
      stroke-width: 0;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .drop-tile-more:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .more-dropdown {
      position: absolute;
      top: 36px;
      right: 0;
      background: #fff;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 10;
      min-width: 180px;
      animation: dropIn 0.15s ease;
    }

    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .more-dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      transition: background 0.15s;
      font-family: inherit;
    }

    .more-dropdown-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-dropdown-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-dropdown-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .more-dropdown-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .more-dropdown-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .more-dropdown-ico .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .more-dropdown-ico .canva-ico {
      width: 22px;
      height: 22px;
    }

    .more-dropdown-ico .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    input[type="file"] {
      display: none;
    }

    /* Single full-width drop-tile (mobile, 1-col grid): base clamp() rules
       already size rings/core/svg smoothly (max caps are tight enough that
       the full-width tile doesn't balloon). We only bump the source buttons
       here so they're tappable on a large card. */
    @media (max-width: 440px) {
      .drop-tile-info {
        padding: 16px 12px 24px;
        gap: 6px;
      }
      .drop-tile-src,
      .drop-tile-more {
        width: 48px;
        height: 48px;
        border-radius: 10px;
      }
      .drop-tile-src svg {
        width: 22px;
        height: 22px;
      }
      .drop-tile-src .brand-ico {
        width: 32px;
        height: 32px;
      }
      .drop-tile-src .brand-ico svg {
        width: 24px;
        height: 24px;
      }
      .drop-tile-sources {
        gap: 10px;
        margin-top: 12px;
      }
    }
  `;let Ws=Ys;Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"t"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"files"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"showDropTile"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"sources"),Vs([(0,r.Cb)({type:String})],Ws.prototype,"accept"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"multi"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"directory"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"allowRename"),Vs([(0,r.Cb)({type:String})],Ws.prototype,"mode"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"showLocateButton"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"showCopyCdnButton"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"showCheckSimilar"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"selectMode"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"selectedIds"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"allSelected"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"selectionFull"),Vs([(0,r.Cb)({type:Number})],Ws.prototype,"maxSelection"),Vs([(0,r.Cb)({type:Boolean})],Ws.prototype,"previewOpen"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"searchRunIds"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"searchActiveIds"),Vs([(0,r.Cb)({attribute:!1})],Ws.prototype,"searchResults"),Vs([(0,r.SB)()],Ws.prototype,"_moreOpen"),Vs([(0,r.SB)()],Ws.prototype,"_dropTileMaxVisible");var Xs=Object.defineProperty,Gs=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Xs(t,i,s),s};const Js=class extends o.oi{constructor(){super(...arguments),this.t=je,this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect();let t=e.right+12;t+240>window.innerWidth-8&&(t=e.left-240-12),this._simPopLeft=Math.max(8,t),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-280-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout((()=>{this.style.zIndex="50",this._simPopover=!0}),150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout((()=>this._simPopoverClose()),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this.style.zIndex=""}}updated(e){var t,i,o,r,s;if(e.has("file"))if(this._dims="",null!=(i=null==(t=this.file)?void 0:t.previewUrl)&&i.startsWith("blob:")){const e=this.file.previewUrl,t=new Image;t.onload=()=>{var i;(null==(i=this.file)?void 0:i.previewUrl)===e&&(this._dims=`${t.naturalWidth}\xd7${t.naturalHeight}`)},t.src=e}else if(null!=(s=null==(r=null==(o=this.file)?void 0:o.response)?void 0:r.file)&&s.info){const e=this.file.response.file.info;e.img_w&&e.img_h&&(this._dims=`${e.img_w}\xd7${e.img_h}`)}}disconnectedCallback(){super.disconnectedCallback(),null!=this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),null!=this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),null!=this._copiedTimer&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this.file&&this._emit("check-similar-single",{file:this.file})}_toggleSimilar(e){e.stopPropagation(),(!this.selectionFull||this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){this._emit("similar-results-select",{fileId:this.file.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var t,i,o,r;e.stopPropagation();const s=null==(r=null==(o=null==(i=null==(t=this.file)?void 0:t.response)?void 0:i.file)?void 0:o.url)?void 0:r.cdn;if(s){try{await navigator.clipboard.writeText(s)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:s}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout((()=>{this._copied=!1,this._copiedTimer=null}),1400)}}render(){var e,t;const i=this.file;if(!i)return o.Ld;const r=yr(i),s="complete"===i.status,n="uploading"===i.status,a="paused"===i.status,l="error"===i.status||"failed"===i.status,d="rejected"===i.status,c="review"===this.mode,p=c||this.reviewPick||!this.allowRename,u=function(e){const t=e.lastIndexOf(".");return t>=0?e.slice(t+1).toUpperCase():""}(i.name),h="image"===r&&!zr(i.type),f=this.selectMode&&h&&!c,g=this.similarCount>=0,m=f&&!g&&""===this.similarStatus,v=!c&&!s&&!n&&!a&&!l&&"rejected"!==i.status&&"searching"!==this.similarStatus&&!this.reviewPick,b=v,x=["tile",s?"done":"",n?"uploading":"",a?"paused":"",d?"rejected":"",c?"review":"",m?"selectable":"",m&&this.isSelected?"selected":"",!this.selectionActive||h||c?"":"select-dimmed",b?"cs-overlay":"","queued"===this.similarStatus?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return o.dy`
      <div
        class=${x}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:m?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${i.previewUrl?o.dy`<img class="preview-img" src=${i.previewUrl} alt="" />`:o.dy`
                <div class="preview-bg ${r}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Cr(u)}
                    alt="${u?this.t("extFile","{{ext}} file",{ext:u}):this.t("file","File")}"
                    @error=${e=>{const t=e.target,i=Pr();!t.dataset.fallback&&t.src!==i&&(t.dataset.fallback="1",t.src=i)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${"searching"===this.similarStatus?o.dy`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching\u2026")}</div>
                </div>
              `:o.Ld}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?o.dy`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:o.dy`<span class="sim-result-badge none">${this.t("noSimilar","No similar")}</span>`:o.Ld}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${m?o.dy`
                <span
                  class="similar-cb ${this.isSelected?"checked":""} ${this.selectionFull&&!this.isSelected?"disabled":""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?"true":"false"}
                  aria-disabled=${this.selectionFull&&!this.isSelected?"true":"false"}
                  aria-label=${this.t("selectImage","Select image")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `:o.Ld}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${v?o.dy`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?o.dy`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar","View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span>
                        </button>
                      `:0===this.similarCount?o.dy`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound","No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&h?o.dy`
                            <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t("checkSimilar","Check similar")}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <circle cx="11" cy="11" r="7"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <span class="cs-label">${this.t("checkSimilar","Check similar")}</span>
                            </button>
                          `:o.Ld}
                </div>
              `:o.Ld}

          <!-- Review-mode hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Both buttons fade in on tile hover, only for completed
               files with a response.file. Each inner button has its own
               gate — Locate needs uuid, Copy CDN needs url.cdn — so an
               already-existed-but-missing-uuid edge case won't render a
               dead button. -->
          ${c&&s&&null!=(e=i.response)&&e.file&&(this.showLocateButton||this.showCopyCdnButton)?o.dy`
                <div class="review-actions">
                  ${this.showLocateButton&&i.response.file.uuid?o.dy`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24">${Ae}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:o.Ld}
                  ${this.showCopyCdnButton&&null!=(t=i.response.file.url)&&t.cdn?o.dy`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?o.dy`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:o.dy`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:o.Ld}
                </div>
              `:o.Ld}

          <!-- Spinner overlay (uploading = spinner, paused = pause icon) -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          <!-- Done badge -->
          ${s?o.dy`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:o.Ld}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${c&&l?o.dy`<div class="failed-badge" title=${i.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:o.Ld}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${c||"uploading"!==i.status&&"paused"!==i.status?o.Ld:o.dy`
                <div class="progress">
                  <div class="progress-fill" ${De({transform:`scaleX(${Math.min(i.progress,100)/100})`})}></div>
                </div>
              `}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(l||d)&&i.error&&!c?o.dy`<div class="error-badge" title=${i.error}>${i.error}</div>`:o.Ld}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${s&&i.alreadyExisted?o.dy`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:o.Ld}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${l||d||s&&i.alreadyExisted||null==i.duration||!(i.duration>0)?o.Ld:o.dy`<div class="duration-badge">${this._formatDuration(i.duration)}</div>`}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${c||this.reviewPick?o.Ld:o.dy`
        <div class="actions">
          ${n&&i.isTus?o.dy`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:o.Ld}
          ${a?o.dy`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:o.Ld}
          ${l?o.dy`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:o.Ld}
          <button class="act-btn del" @click=${this._remove} title=${this.t("remove","Remove")} aria-label=${this.t("removeFile","Remove file")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
        `}

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${i.name} title=${i.name}
            aria-label=${this.t("fileName","File name")}
            ?readonly=${p}
            @change=${p?o.Ld:this._rename} @click=${e=>e.stopPropagation()} />
          <div class="meta">${u||""}${i.size?` \xb7 ${br(i.size)}`:""}${this._dims?` \xb7 ${this._dims}`:""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
    `}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return o.Ld;const e=[...this.similarResults].sort(((e,t)=>t.score-e.score)),t=e[0],i=e.length,r=e.slice(1),s=r.slice(0,3),n=r.length-s.length,a=Math.round(100*t.score);return o.dy`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${De({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?o.dy`<img src=${t.url} alt="" />`:o.Ld}
          <span class="pop-best ${t.score>=.85?"high":""}">${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${r.length?o.dy`<div class="pop-thumbs">
                ${s.map((e=>o.dy`<img src=${e.url} alt="" />`))}
                ${n>0?o.dy`<span class="pop-more">+${n}</span>`:o.Ld}
              </div>`:o.dy`<span></span>`}
          <span class="pop-open">
            ${1===i?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:i})}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`}};Js.styles=o.iv`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      /* Query container so the hover actions can adapt to the TILE width (not
         the viewport). On .preview — never on .tile — because container-type
         makes the element a containing block for fixed-positioned descendants,
         which would break the .sim-popover (position: fixed) living on .tile. */
      container-type: inline-size;
      container-name: sfx-tile-media;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
    }

    .preview-img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .preview-bg.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-bg.doc { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.audio { background: linear-gradient(135deg, #fdf4ff, #fae8ff); }
    .preview-bg.sheet { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .preview-bg.slide { background: linear-gradient(135deg, #fff7ed, #ffedd5); }
    .preview-bg.zip { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
    .preview-bg.code { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .preview-bg.markup { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); }
    .preview-bg.font { background: linear-gradient(135deg, #faf5ff, #f3e8ff); }
    .preview-bg.design { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
    .preview-bg.binary { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }
    .preview-bg.data { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
    .preview-bg.gen { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-img {
      max-width: 72px;
      max-height: 72px;
      object-fit: contain;
    }

    .duration-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.3;
      pointer-events: none;
      z-index: 2;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }

    .name-input {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin-bottom: 2px;
      min-width: 0;
      font-size: 12px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: border-color 0.15s, background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input[readonly] {
      cursor: default;
    }
    .name-input[readonly]:hover,
    .name-input[readonly]:focus {
      border-color: transparent;
      background: transparent;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    /* Reveal on hover or KEYBOARD focus only (:has(:focus-visible)) — a mouse
       click sets :focus but not :focus-visible, so actions don't linger/stick
       after clicking the tile. */
    .tile:hover .actions,
    .tile:focus-visible .actions,
    .tile:has(:focus-visible) .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions { opacity: 1; }
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.15s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    /* Centered hover actions wrapper (Details + optional Check similar).
       Flex column with stretch so both buttons share one width. */
    .center-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 5;
    }

    .tile:hover .center-actions,
    .tile:focus-visible .center-actions,
    .tile:has(:focus-visible) .center-actions {
      opacity: 1;
    }

    @media (hover: none) {
      .center-actions { opacity: 1; }
    }

    .preview-btn,
    .check-similar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      box-sizing: border-box;
      /* Fixed height so both buttons match regardless of border width. */
      height: 32px;
      padding: 0 16px;
      /* Fixed width so every button is identical across ALL tiles, regardless
         of how short the label is ("No similar" / "Details") — extra empty
         space is intentional, by design. Sized to fit the longest label
         ("View N similar"). max-width keeps it inside genuinely narrow tiles,
         where the container query below collapses it to an icon. */
      width: 160px;
      max-width: 100%;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
    }

    .cs-label {
      /* Don't grow: keep the label at its natural width so the icon + text sit
         together as one group, centered in the button (rather than the icon
         pinned left with the text floating). Still shrinks + ellipsizes in
         narrow tiles. */
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* In narrow tiles the fixed 160px button can be wider than the media area.
       Let the button shrink to the container width minus a small inset so it
       doesn't reach the tile edges and the label can still ellipsize. */
    @container sfx-tile-media (max-width: 208px) {
      .preview-btn,
      .check-similar-btn {
        width: calc(100% - 24px);
        padding: 0 8px;
      }
    }

    /* Details — white, borderless (transparent border keeps the same box
       height as Check similar), blue text. On hover it stays white and scales
       up slightly (no blue fill, no darkening). Same look in both modes. */
    .preview-btn {
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* Hover feedback via shadow, NOT scale — scaling one button would make it
       wider than its sibling; both must stay the same width. */
    .preview-btn:hover {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-primary, #2563eb);
    }

    /* Check similar — filled primary, visually distinct from Details */
    .check-similar-btn {
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    /* Hover feedback via a stronger glow, NOT scale, so width stays identical
       to the Details button. */
    .check-similar-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 12px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.45));
    }

    /* "No similar found" — muted/neutral, NOT an action to re-run; clicking it
       just opens the panel's empty-state message. */
    .check-similar-btn.no-similar,
    .check-similar-btn.no-similar:hover {
      background: var(--sfx-up-bg, #fff);
      border-color: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-muted, #94a3b8);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .preview-btn svg,
    .check-similar-btn svg {
      width: 13px;
      height: 13px;
    }

    /* Asset-picker style: on hover a dark semi-transparent overlay covers the
       preview, with the Details / Check similar buttons sitting on top. Only
       when the feature is enabled (cs-overlay) — normal mode is untouched. */
    .tile.cs-overlay .preview::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s ease;
      pointer-events: none;
      z-index: 2;
    }

    .tile.cs-overlay:hover .preview::after {
      background: rgba(0, 0, 0, 0.45);
    }

    /* --- Similar-image selection mode (asset-picker look) --- */
    .tile.selectable { cursor: pointer; }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed { opacity: 0.5; }

    /* Checkbox: hidden by default, revealed on tile hover/keyboard focus so the
       UI stays clean until the user is ready to pick. Always visible once
       checked — selected state must remain glanceable. */
    .similar-cb {
      position: absolute;
      top: 8px;
      left: 8px;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
      opacity: 0;
      transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb { opacity: 1; }
    }

    .similar-cb svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s ease; }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg { opacity: 1; }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled { cursor: not-allowed; }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled { opacity: 0.4; }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued { opacity: 0.55; transition: opacity 0.15s ease; }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover { opacity: 1; }

    /* Searching: dark overlay + spinner over the preview. */
    .sim-search-overlay {
      position: absolute;
      inset: 0;
      z-index: 8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.55);
      color: #fff;
    }
    .sim-search-overlay .sim-spinner {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      animation: spinRing 0.7s linear infinite;
    }
    .sim-search-overlay .sim-label {
      font-size: 11px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Checked: result badge "N similar" / "No similar" (top-left). Doubles as
       the "checked" indicator — no separate green check. */
    .sim-result-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 8;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 24px;
      padding: 0 10px;
      border-radius: 999px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      box-shadow: 0 2px 6px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.22));
      pointer-events: none;
      transition: opacity 0.15s ease;
    }
    .sim-result-badge svg { width: 12px; height: 12px; }
    .sim-result-badge.none {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      box-shadow: none;
    }
    /* Hide the resting badge whenever the centered Details / View-similar
       buttons show (hover OR keyboard focus) so they never overlap. */
    .tile:hover .sim-result-badge,
    .tile:focus-visible .sim-result-badge,
    .tile:has(:focus-visible) .sim-result-badge { opacity: 0; }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick { cursor: pointer; }
    .tile.review-pick:hover .sim-result-badge { opacity: 1; }
    .tile.review-pick .name-input { pointer-events: none; }

    /* --- Hover preview popover (best match) --- */
    .sim-popover {
      position: fixed;
      width: 240px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
      z-index: 10000;
      overflow: hidden;
      cursor: pointer;
      animation: simPopIn 0.12s ease;
    }
    @keyframes simPopIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
    .sim-popover .pop-hero { position: relative; aspect-ratio: 16 / 10; background: var(--sfx-up-surface, #eef); }
    .sim-popover .pop-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sim-popover .pop-best {
      position: absolute; top: 8px; left: 8px; font-size: 11px; font-weight: 700;
      padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high { color: var(--sfx-up-success, #16a34a); }
    .sim-popover .pop-body { padding: 11px 13px 8px; }
    .sim-popover .pop-t { font-size: 12.5px; font-weight: 600; color: var(--sfx-up-text, #1e293b); }
    .sim-popover .pop-s { font-size: 11.5px; color: var(--sfx-up-text-muted, #94a3b8); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sim-popover .pop-foot { padding: 0 13px 12px; display: flex; align-items: center; justify-content: space-between; }
    .sim-popover .pop-thumbs { display: inline-flex; }
    .sim-popover .pop-thumbs img { width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; object-fit: cover; margin-left: -8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }
    .sim-popover .pop-thumbs img:first-child { margin-left: 0; }
    .sim-popover .pop-more {
      width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb); color: #fff; font-size: 9.5px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open { font-size: 11.5px; font-weight: 600; color: var(--sfx-up-primary, #2563eb); display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
    .sim-popover .pop-open svg { width: 12px; height: 12px; }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done badge --- */
    .done-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
    }

    .done-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: failed badge (mirrors done-badge) --- */
    .failed-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-error, #dc2626);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
      color: #fff;
    }

    .failed-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: stacked hover actions (Locate / Copy CDN) --- */
    .review-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 6;
      pointer-events: none;
    }

    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .review-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
                  box-shadow 0.18s ease,
                  background 0.15s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18),
                  0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22),
                  0 1px 3px rgba(15, 23, 42, 0.1);
    }

    .review-action:active {
      transform: scale(1.02);
    }

    .review-action svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Secondary — white card style (matches Preview in design system) */
    .review-action.secondary {
      background: rgba(255, 255, 255, 0.96);
      color: var(--sfx-up-text, #1e293b);
    }

    /* Primary — solid blue (matches + Select in design system) */
    .review-action.primary {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .review-action.primary:hover {
      background: var(--sfx-up-primary-hover, #1d4ed8);
    }

    /* Brief green flash after a successful clipboard copy */
    .review-action.copied {
      background: #16a34a !important;
      color: #fff;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- "Already uploaded" note (neutral, not an error) --- */
    .exists-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-text, #1e293b) 72%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .exists-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring { display: none; }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon { display: flex; }

    .act-btn.pause:hover {
      background: var(--warning-10, #fef3c7);
      color: var(--sfx-up-warning, #d97706);
    }

    .act-btn.resume:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.92) translateY(14px);
      }
      60% {
        opacity: 1;
      }
      80% {
        transform: scale(1.02) translateY(-2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    .tile:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .act-btn:focus-visible,
    .preview-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .spin-ring { animation: none; }
    }
  `;let Zs=Js;Gs([(0,r.Cb)({attribute:!1})],Zs.prototype,"t"),Gs([(0,r.Cb)({attribute:!1})],Zs.prototype,"file"),Gs([(0,r.Cb)({type:String})],Zs.prototype,"mode"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"allowRename"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"showLocateButton"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"showCopyCdnButton"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"showCheckSimilar"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"selectMode"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"isSelected"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"selectionActive"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"selectionFull"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"previewOpen"),Gs([(0,r.Cb)({type:String})],Zs.prototype,"similarStatus"),Gs([(0,r.Cb)({type:Number})],Zs.prototype,"similarCount"),Gs([(0,r.Cb)({attribute:!1})],Zs.prototype,"similarResults"),Gs([(0,r.Cb)({type:Boolean})],Zs.prototype,"reviewPick"),Gs([(0,r.SB)()],Zs.prototype,"_dims"),Gs([(0,r.SB)()],Zs.prototype,"_simPopover"),Gs([(0,r.SB)()],Zs.prototype,"_copied");const Qs=o.iv`
  .btn,
  .btn-ghost,
  .btn-primary,
  .btn-sec,
  .btn-retry,
  .btn-upload,
  .btn-danger {
    height: 36px;
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn svg,
  .btn-ghost svg,
  .btn-primary svg,
  .btn-sec svg,
  .btn-retry svg,
  .btn-upload svg,
  .btn-danger svg {
    width: 14px;
    height: 14px;
  }

  .btn-ghost {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: 1.5px solid var(--sfx-up-border, #e2e8f0);
  }

  .btn-ghost:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
    border-color: var(--sfx-up-border, #d1dff0);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,en=o.iv`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var tn=Object.defineProperty,on=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&tn(t,i,s),s};const rn=class extends o.oi{constructor(){super(...arguments),this.t=je,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this.showMinimize=!1,this.canLocate=!1,this._maxThumbs=7,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?4:7;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_locate(){this.dispatchEvent(new CustomEvent("locate-file",{bubbles:!0,composed:!0}))}_locateButton(e){return o.dy`<button
      class=${e?"btn-primary":"btn-ghost"}
      @click=${this._locate}
      aria-label=${this.t("locate","Locate")}
    >${He}${this.t("locate","Locate")}</button>`}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}_minimize(){this.dispatchEvent(new CustomEvent("minimize-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,i=this.fileCount>0,r=this.failedFiles.length>0,s=r&&!i,n=i&&!r&&this.alreadyExistedCount>=this.fileCount,a=n&&this.canLocate,l=this.fileCount-this.alreadyExistedCount;return o.dy`
      ${this.showMinimize?o.dy`<button class="minimize-btn" title=${this.t("minimizeAndContinue","Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>`:o.Ld}
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":r?"warning":n?"info":""}">
          ${s?o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:r?o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:n?o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>`:o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s?this.t("uploadFailed","Upload failed"):r?this.t("partiallyUploaded","Partially uploaded"):n?this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):this.t("uploadedSuccessfullyCount",{count:l,defaultValue_one:"{{count}} file uploaded successfully!",defaultValue_other:"{{count}} files uploaded successfully!"})}</div>
        <div class="subtitle">${s?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):r?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:l,failed:this.failedFiles.length}):n?this.t("alreadyInLibrarySubtitle",{count:this.alreadyExistedCount,defaultValue_one:"It\u2019s ready to use \u2014 nothing new to upload",defaultValue_other:"They\u2019re ready to use \u2014 nothing new to upload"}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?o.dy`
              <div class="thumbs">
                ${e.map((e=>o.dy`<img class="thumb" src=${e} alt="" />`))}
                ${t>0?o.dy`<div class="thumb-more">+${t}</div>`:o.Ld}
              </div>
            `:o.Ld}

        ${i&&!n?o.dy`<div class="summary">${this.t("uploadedSize","{{size}} uploaded",{size:br(this.totalSize)})}</div>`:o.Ld}

        ${this.alreadyExistedCount>0&&!n?o.dy`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:o.Ld}

        ${r?o.dy`
            <div class="failed-list">
              ${this.failedFiles.map((e=>o.dy`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label=${this.t("error","Error")}><title>${this.t("error","Error")}</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${e.name}</div>
                    <div class="failed-reason">${e.error}</div>
                  </div>
                  <button class="failed-retry" title=${this.t("retry","Retry")} @click=${()=>this._retryFile(e.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `))}
            </div>
          `:o.Ld}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${this.canLocate&&!a?this._locateButton(!1):o.Ld}
          ${i||r?o.dy`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:o.Ld}
          ${r?o.dy`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:o.Ld}
          ${a?o.dy`<button class="btn-ghost" @click=${this._primaryAction}>${this.primaryLabel}</button>${this._locateButton(!0)}`:o.dy`<button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>`}
        </div>
      </div>
    `}};rn.styles=[Qs,en,o.iv`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      position: relative;
      overflow-y: auto;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fadeUp 0.4s ease both;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #f0fdf4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: #22c55e;
      box-shadow: none;
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .icon.warning {
      background: #fffbeb;
      color: #f59e0b;
    }

    .icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 20px;
    }

    /* --- Thumbnail strip --- */
    .thumbs {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 14px;
    }

    .thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .thumb-more {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Summary chip --- */
    .summary {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-surface, #f8fafc);
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    /* --- Info banner (design-system "status-info" component) --- */
    .info-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      max-width: 400px;
      min-height: 36px;
      padding: 8px 16px;
      border-radius: 8px;
      /* Inset shadow draws the 1px border WITHOUT adding to the box height,
         so the banner stays exactly 36px tall (8 + 20 line + 8) — matching the
         Figma inside-stroke. A real border would add 2px → 38px. */
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: -8px;
      margin-bottom: 22px;
    }

    .info-note svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    .actions .btn-primary {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      box-shadow: 0 2px 10px rgba(34, 197, 94, 0.28);
    }

    .actions .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.38);
    }

    /* --- Failed files list --- */
    .failed-list {
      width: 100%;
      max-width: 400px;
      max-height: 200px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e8eaed);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
    }

    .failed-list::-webkit-scrollbar {
      width: 6px;
    }

    .failed-list::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0;
    }

    .failed-list::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 3px;
    }

    .failed-list::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
    }

    .failed-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--sfx-up-border, #f1f5f9);
      margin-right: 8px;
    }

    .failed-item:last-child {
      border-bottom: none;
    }

    .failed-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #ef4444;
      margin-top: 1px;
    }

    .failed-info {
      flex: 1;
      min-width: 0;
    }

    .failed-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .failed-reason {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.4;
    }

    .failed-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-top: -2px;
    }

    .failed-retry svg { width: 14px; height: 14px; }

    .failed-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .close-btn svg { width: 16px; height: 16px; }

    .close-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .minimize-btn {
      position: absolute;
      top: 12px;
      right: 56px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .minimize-btn svg { width: 16px; height: 16px; }

    .minimize-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .btn-retry-all {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: #fff;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .btn-retry-all:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      :host {
        padding: 16px 12px;
        align-items: flex-start;
      }
      .card {
        width: 100%;
        max-width: 100%;
        padding-top: 8px;
      }
      .icon { width: 56px; height: 56px; margin-bottom: 14px; }
      .icon svg { width: 26px; height: 26px; }
      .title { font-size: 18px; }
      .subtitle { font-size: 13px; max-width: 100%; padding: 0 8px; }
      .thumb, .thumb-more { width: 48px; height: 48px; }
      .failed-list { max-width: 100%; }

      /* Stack action buttons two-up on mobile so labels don't wrap. */
      .actions {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        padding: 0 8px;
        box-sizing: border-box;
      }
      .actions > button {
        flex: 1 1 calc(50% - 8px);
        min-width: 0;
        white-space: nowrap;
      }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 17px; }
      .subtitle { max-width: 90vw; padding: 0 4px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    /* Galaxy Z Fold / S8+ — extra narrow: tighten thumb grid so 5+
       thumbs don't force horizontal overflow. */
    @media (max-width: 380px) {
      .thumbs { gap: 4px; }
      .thumb, .thumb-more { width: 40px; height: 40px; }
      .failed-list { max-width: calc(100vw - 24px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];let sn=rn;on([(0,r.Cb)({attribute:!1})],sn.prototype,"t"),on([(0,r.Cb)({type:Number})],sn.prototype,"fileCount"),on([(0,r.Cb)({type:Number})],sn.prototype,"totalSize"),on([(0,r.Cb)({type:Array})],sn.prototype,"thumbnails"),on([(0,r.Cb)({type:String})],sn.prototype,"primaryLabel"),on([(0,r.Cb)({type:Array})],sn.prototype,"failedFiles"),on([(0,r.Cb)({type:Number})],sn.prototype,"alreadyExistedCount"),on([(0,r.Cb)({type:Boolean})],sn.prototype,"showMinimize"),on([(0,r.Cb)({type:Boolean})],sn.prototype,"canLocate"),on([(0,r.SB)()],sn.prototype,"_maxThumbs");var nn=Object.defineProperty,an=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&nn(t,i,s),s};const ln=class extends o.oi{constructor(){super(...arguments),this.t=je,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return"success"===this._filter?this.files.filter((e=>"complete"===e.status)):"failed"===this._filter?this.files.filter((e=>"failed"===e.status||"error"===e.status)):this.files}get _successCount(){return this.files.filter((e=>"complete"===e.status)).length}get _failedCount(){return this.files.filter((e=>"failed"===e.status||"error"===e.status)).length}render(){const e=this._filtered,t=this.files.length;return o.dy`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t("back","Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          ${this.t("back","Back")}
        </button>
        <span class="title">${this.t("lastUpload","Last upload")} <span class="count">— ${this.t("fileCount",{count:t,defaultValue_one:"{{count}} file",defaultValue_other:"{{count}} files"})}</span></span>
        <div class="filters">
          <button class="chip ${"all"===this._filter?"active":""}" @click=${this._setFilter("all")}>
            ${this.t("all","All")} (${t})
          </button>
          <button class="chip ${"success"===this._filter?"active":""}" @click=${this._setFilter("success")}>
            ✓ ${this.t("uploaded","Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount>0?o.dy`<button class="chip ${"failed"===this._filter?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:o.Ld}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${0===e.length?o.dy`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:o.dy`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};ln.styles=o.iv`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      position: relative;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .back-btn:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #0f172a);
      margin-right: 8px;
    }

    .count {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 400;
    }

    .filters {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .chip:hover {
      background: var(--sfx-up-surface, #f8fafc);
    }

    .chip.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-error, #dc2626);
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--sfx-up-error, #dc2626) 30%, transparent);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .clear-btn:hover {
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 8%, transparent);
    }

    .back-btn:focus-visible,
    .chip:focus-visible,
    .clear-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px 0 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .topbar { padding: 12px 16px; }
    }
  `;let dn=ln;an([(0,r.Cb)({attribute:!1})],dn.prototype,"t"),an([(0,r.Cb)({attribute:!1})],dn.prototype,"files"),an([(0,r.Cb)({type:Boolean})],dn.prototype,"showLocateButton"),an([(0,r.Cb)({type:Boolean})],dn.prototype,"showCopyCdnButton"),an([(0,r.SB)()],dn.prototype,"_filter"),customElements.define("sfx-last-upload-review",dn);var cn=Object.defineProperty,pn=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&cn(t,i,s),s};const un=class extends o.oi{constructor(){super(...arguments),this.t=je,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.requireMetadataFirst?this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){const e="uploading"===this.uploadState;return this.selectMode?this._renderSelectToolbar():o.dy`
      ${e?o.dy`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label=${this.t("uploadProgress","Upload progress")}
              >
                <div
                  class="progress-fill"
                  ${De({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:o.Ld}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&"idle"===this.uploadState?o.dy`
                <button
                  class=${this.requireMetadataFirst?"btn-primary":"btn-sec"}
                  @click=${this._fillMetadata}
                  aria-label=${this.t("fillMetadata","Fill Metadata")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t("fillMetadata","Fill Metadata")}</span>
                </button>
              `:o.Ld}
          ${this.showCheckSimilar&&"idle"===this.uploadState?o.dy`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t("checkSimilar","Check similar")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
                </button>
              `:o.Ld}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label=${this.t("clear","Clear")}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span class="btn-label">${this.t("clear","Clear")}</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label=${this.t("addMore","Add more")}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">${this.t("addMore","Add more")}</span>
          </button>
          ${this.failedCount>0?o.dy`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label=${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  <span class="btn-label">${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span>
                </button>
              `:o.Ld}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return o.dy`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck","Select images to check for similar assets")}</b>
            <span>${t>0?this.t("selectImagesHintMax","Pick up to {{max}}, then click Check",{max:t}):this.t("selectImagesHint","Pick one or more, then click Check")}</span>
          </div>
        </div>
        <div class="right">
          ${t>0?o.dy`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
              >${e}/${t}</span>`:o.Ld}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
          </button>
          <button class="btn-ghost" @click=${this._checkSimilarCancel} aria-label=${this.t("cancel","Cancel")}>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${0===e}
            aria-label=${this.t("checkSimilar","Check similar")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
          </button>
        </div>
      </div>
    `}_renderUploadButton(){const e="uploading"===this.uploadState,t="done"===this.uploadState,i=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),r=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return o.dy`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||0===this.fileCount&&!t}
        aria-label=${r}
      >
        ${e?o.dy`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?o.dy`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">${this.t("done","Done")}!</span>
            `:o.dy`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
              <span class="btn-label">${this.t("upload","Upload")}</span>
            `}
      </button>
    `}};un.styles=[Qs,en,o.iv`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--sfx-up-bg, #ffffff);
        flex-shrink: 0;
        box-shadow: none;
        position: relative;
        animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        container-type: inline-size;
        container-name: actions-bar;
      }

      /* Full-column-width divider above the actions bar.
       The bar sits inside .content which is capped at
       --sfx-up-content-max-width (1600px), so a plain :host border-top
       would leave visible gaps on ultra-wide viewports. Instead we
       draw the line as a pseudo-element on the first child and push
       it 100vw to each side — the outer .inline { overflow: hidden }
       clips it back to the column width. */
      :host > :first-child {
        position: relative;
      }

      :host > :first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100vw;
        right: -100vw;
        height: 1px;
        background: var(--sfx-up-border, #e2e8f0);
        pointer-events: none;
        z-index: 1;
      }

      @keyframes barSlideUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* --- Progress row --- */
      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px 0;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
      }

      .progress-track {
        flex: 1;
        height: 4px;
        background: var(--sfx-up-border, #e2e8f0);
        border-radius: 2px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--sfx-up-primary, #2563eb);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      .progress-label {
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        flex-shrink: 0;
      }

      /* --- Buttons row --- */
      .buttons-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .select-count {
        font-size: 13px;
        font-weight: 500;
        color: var(--sfx-up-text-secondary, #475569);
      }

      /* --- Always-on similarity selection toolbar --- */
      .sim-ico {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sim-ico svg { width: 16px; height: 16px; }

      .sim-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
      .sim-text b {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sim-text span {
        font-size: 12px;
        font-weight: 400;
        color: var(--sfx-up-text-muted, #64748b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--sfx-up-surface, #eef2ff);
        color: var(--sfx-up-primary, #2563eb);
        font-size: 13px;
        font-weight: 700;
      }
      .count-pill.full {
        background: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }

      .select-all {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-primary, #2563eb);
        padding: 0 6px;
        height: 28px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .select-all:hover { background: var(--sfx-up-primary-bg, #eff6ff); }

      /* --- Button overrides (base in shared-styles) --- */

      .btn-sec {
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        border: 1.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
      }

      .btn-sec:hover {
        background: var(--sfx-up-primary-bg, #dbeafe);
      }

      .btn-retry {
        background: var(--destructive-10, #fef2f2);
        color: var(--sfx-up-error, #dc2626);
        border: 1.5px solid var(--sfx-up-error, rgba(220, 38, 38, 0.2));
      }

      .btn-retry:hover {
        background: var(--destructive-10, #fee2e2);
        color: var(--destructive-foreground, #b91c1c);
        border-color: var(--sfx-up-error, rgba(220, 38, 38, 0.35));
      }

      .btn-primary {
        min-width: 110px;
      }

      .btn-primary.done-state {
        background: var(--sfx-up-success, #16a34a);
        box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(22, 163, 74, 0.28));
      }

      /* --- Spinner --- */
      .btn-spin {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spinRing 0.7s linear infinite;
      }

      /* --- Count --- */
      .count {
        font-size: 14px;
        font-weight: 700;
        color: var(--sfx-up-text, #1e293b);
      }

      .count span {
        font-weight: 400;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right .btn-ghost,
        .right .btn-sec,
        .right .btn-retry,
        .right .btn-primary {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .right .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
      }

      /* Very narrow: also collapse the left Fill Metadata pill. */
      @container actions-bar (max-width: 380px) {
        .left .btn-sec {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .left .btn-label {
          display: none;
        }
        .left svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `];let hn=un;pn([(0,r.Cb)({attribute:!1})],hn.prototype,"t"),pn([(0,r.Cb)({type:String})],hn.prototype,"uploadState"),pn([(0,r.Cb)({type:Number})],hn.prototype,"fileCount"),pn([(0,r.Cb)({type:Number})],hn.prototype,"totalSize"),pn([(0,r.Cb)({type:Number})],hn.prototype,"failedCount"),pn([(0,r.Cb)({type:Boolean})],hn.prototype,"showFillMetadata"),pn([(0,r.Cb)({type:Boolean})],hn.prototype,"requireMetadataFirst"),pn([(0,r.Cb)({type:Number})],hn.prototype,"completedCount"),pn([(0,r.Cb)({type:Number})],hn.prototype,"uploadProgress"),pn([(0,r.Cb)({type:Boolean})],hn.prototype,"showCheckSimilar"),pn([(0,r.Cb)({type:Boolean})],hn.prototype,"selectMode"),pn([(0,r.Cb)({type:Number})],hn.prototype,"selectedCount"),pn([(0,r.Cb)({type:Number})],hn.prototype,"maxSelection"),pn([(0,r.Cb)({type:Boolean})],hn.prototype,"allSelected");function fn(e,t){return i=>{if("Tab"!==i.key)return;const o=e();if(!o)return;const r=o.querySelector(t);if(!r)return;const s=Array.from(r.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));if(0===s.length)return;const n=s[0],a=s[s.length-1],l=o.activeElement;i.shiftKey?(l===n||!r.contains(l))&&(i.preventDefault(),a.focus()):(l===a||!r.contains(l))&&(i.preventDefault(),n.focus())}}var gn=Object.defineProperty,mn=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&gn(t,i,s),s};const vn=class extends o.oi{constructor(){super(...arguments),this.t=je,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=fn((()=>this.shadowRoot),".card"),this._onKeyDown=e=>{var t;"Escape"===e.key&&this._cancel(),"Enter"===e.key&&"INPUT"===(null==(t=e.target)?void 0:t.tagName)&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("#nameInput");t&&(t.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e)return void(this._error=this.t("pleaseEnterUrl","Please enter a URL"));try{new URL(e)}catch{return void(this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL"))}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{var e,t;null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector("#urlInput"))||t.focus()}))}render(){return o.dy`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">${this.t("importFromUrl","Import from URL")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">${this.t("fileUrl","File URL")}</label>
              <input
                id="urlInput"
                type="url"
                placeholder=${this.t("fileUrlPlaceholder","https://example.com/file.pdf")}
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput">${this.t("fileName","File name")} <span class="optional">(${this.t("optional","optional")})</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder","document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?o.dy`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};vn.styles=[Qs,en,o.iv`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1a1a1a);
      flex: 1;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-border-light, #f0f0f0);
      color: var(--sfx-up-text-muted, #888);
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e4e4e4);
      color: var(--sfx-up-text, #333);
    }

    .body {
      padding: 18px 20px 20px;
    }

    .field {
      margin-bottom: 14px;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #aaa);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    label .optional {
      color: var(--sfx-up-border, #ccc);
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #ebebeb);
      border-radius: 6px;
      padding: 0 14px;
      font-size: 14px;
      font-family: inherit;
      color: var(--sfx-up-text, #1a1a1a);
      background: var(--sfx-up-border-light, #fafafa);
      transition: border-color 0.15s, background 0.15s;
      outline: none;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    input::placeholder {
      color: var(--sfx-up-text-muted, #ccc);
    }

    .error {
      font-size: 12px;
      color: var(--sfx-up-error, #dc2626);
      margin-top: -6px;
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 18px;
    }



    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(18px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    input:focus-visible {
      outline: none;
    }

  `];let bn=vn;mn([(0,r.Cb)({attribute:!1})],bn.prototype,"t"),mn([(0,r.SB)()],bn.prototype,"_url"),mn([(0,r.SB)()],bn.prototype,"_name"),mn([(0,r.SB)()],bn.prototype,"_error");var xn=Object.defineProperty,yn=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&xn(t,i,s),s};const wn=class extends o.oi{constructor(){super(...arguments),this.t=je,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=fn((()=>this.shadowRoot),".card"),this._onKeyDown=e=>{"Escape"===e.key&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector("video"),o=null==(t=this.shadowRoot)?void 0:t.querySelector("canvas");i&&o&&(o.width=i.videoWidth,o.height=i.videoHeight,o.getContext("2d").drawImage(i,0,0),o.toBlob((e=>{e&&(this._captured=e,this._previewUrl=URL.createObjectURL(e),this._stopStream())}),"image/jpeg",.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=(new Date).toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;null==(e=this._stream)||e.getTracks().forEach((e=>e.stop())),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return o.dy`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">${this.t("camera","Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?o.dy`<div class="error">${this._error}</div>`:this._captured?o.dy`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:o.dy`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};wn.styles=[Qs,en,o.iv`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 520px;
      height: 520px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; min-height: 0; justify-content: center; }

    video, canvas {
      width: 100%; flex: 1; min-height: 0; border-radius: 12px;
      background: #000; object-fit: cover;
    }

    canvas { display: none; }

    .preview-img {
      width: 100%; max-height: 320px; border-radius: 12px;
      object-fit: contain; background: #000;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-capture {
      width: 52px; height: 52px; border-radius: 50%; padding: 0;
      background: var(--sfx-up-error, #dc2626); border: 4px solid var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626), 0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
      cursor: pointer; transition: all 0.15s;
    }
    .btn-capture:hover { background: var(--destructive-foreground, #b91c1c); transform: scale(1.05); }

    .close-btn:focus-visible,
    .btn-capture:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
  `];let _n=wn;yn([(0,r.Cb)({attribute:!1})],_n.prototype,"t"),yn([(0,r.SB)()],_n.prototype,"_stream"),yn([(0,r.SB)()],_n.prototype,"_error"),yn([(0,r.SB)()],_n.prototype,"_captured"),yn([(0,r.SB)()],_n.prototype,"_previewUrl");var kn=Object.defineProperty,Sn=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&kn(t,i,s),s};const $n=class extends o.oi{constructor(){super(...arguments),this.t=je,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=fn((()=>this.shadowRoot),".card"),this._onKeyDown=e=>{"Escape"===e.key&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",(()=>{this._stopRecording()})),this._recording=!0,await this.updateComplete;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=e=>{e.data.size>0&&this._chunks.push(e.data)},this._recorder.onstop=()=>{var e;const t=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=t,this._previewUrl=URL.createObjectURL(t),null==(e=this._stream)||e.getTracks().forEach((e=>e.stop())),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,"recording"===(null==(e=this._recorder)?void 0:e.state)&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=(new Date).toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;null==(e=this._recorder)||e.stop(),this._recorder=null,null==(t=this._stream)||t.getTracks().forEach((e=>e.stop())),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return o.dy`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 21h10"/>
              </svg>
            </div>
            <div class="title">${this.t("screenCast","Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?o.dy`<div class="error">${this._error}</div>`:this._recordedBlob?o.dy`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?o.dy`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:o.dy`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">${this.t("screenCastPrompt","Share your screen to record a video that will be added to your uploads.")}</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>${this.t("startRecording","Start recording")}</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};$n.styles=[Qs,en,o.iv`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 560px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; }

    video {
      width: 100%; max-height: 320px; border-radius: 12px;
      background: #000; object-fit: contain;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .status {
      font-size: 13px; color: var(--sfx-up-text-secondary, #475569);
      display: flex; align-items: center; gap: 8px;
    }

    .rec-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--sfx-up-error, #dc2626); animation: pulse 1s ease-in-out infinite;
    }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-danger {
      background: var(--sfx-up-error, #dc2626); color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
    }
    .btn-danger:hover { background: var(--destructive-foreground, #b91c1c); }

    .start-view {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 30px 20px; text-align: center;
    }

    .start-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex; align-items: center; justify-content: center;
    }

    .start-icon svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .start-text {
      font-size: 14px; color: var(--sfx-up-text-secondary, #475569); max-width: 300px;
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  `];let Cn=$n;Sn([(0,r.Cb)({attribute:!1})],Cn.prototype,"t"),Sn([(0,r.SB)()],Cn.prototype,"_stream"),Sn([(0,r.SB)()],Cn.prototype,"_recording"),Sn([(0,r.SB)()],Cn.prototype,"_error"),Sn([(0,r.SB)()],Cn.prototype,"_recordedBlob"),Sn([(0,r.SB)()],Cn.prototype,"_previewUrl");var Pn=Object.defineProperty,Un=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Pn(t,i,s),s};const Ln=class extends o.oi{constructor(){super(...arguments),this.t=je,this.duration=6e3,this._toasts=[],this._nextId=0}show(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout((()=>this._dismiss(i)),this.duration)}_dismiss(e){const t=this._toasts.findIndex((t=>t.id===e));if(-1===t)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout((()=>{this._toasts=this._toasts.filter((t=>t.id!==e))}),200)}_iconForType(e){return"error"===e?o.dy`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:"warning"===e?o.dy`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:o.dy`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return 0===this._toasts.length?o.dy``:o.dy`
      <div class="toast-stack">
        ${this._toasts.map((e=>o.dy`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button class="toast-close" @click=${()=>this._dismiss(e.id)} aria-label=${this.t("dismiss","Dismiss")}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `))}
      </div>
    `}};Ln.styles=o.iv`
    :host {
      display: block;
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
      font-family: var(--sfx-up-font, inherit);
    }

    .toast-stack {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      align-items: flex-end;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: 360px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: toast-in 0.25s ease forwards;
      word-break: break-word;
    }
    .toast.leaving {
      animation: toast-out 0.2s ease forwards;
    }

    .toast--error {
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    .toast--warning {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .toast--info {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-top: 1px;
    }

    .toast-msg {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.5;
      transition: opacity 0.12s;
    }
    .toast-close:hover {
      opacity: 1;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
  `;let zn=Ln;Un([(0,r.Cb)({attribute:!1})],zn.prototype,"t"),Un([(0,r.Cb)({type:Number})],zn.prototype,"duration"),Un([(0,r.SB)()],zn.prototype,"_toasts"),customElements.define("sfx-toast",zn);var Rn=Object.defineProperty,En=(e,t,i,o)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Rn(t,i,s),s};const Fn=new Set(["unsplash"]),On=10,Tn=["auto","mobile","tablet","desktop","hq","sample"],jn=["hls"],In={isTus:!1,tusUploadUrl:null,relativeFolder:""},Bn=new Set(["complete","failed","error","cancelled","rejected"]);var Mn;const Dn=(Mn=class extends o.oi{constructor(){var e;super(),e=this,this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="\u2014",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i})},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Dr,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(as(i)){const e=ls(i);if(!e)return;const r=""===o||null==o,s="position"===e?{position:r?void 0:Number(o)}:{ref:r?void 0:String(o)};return void this.updateFileProduct(t,s)}const r=this._store.getState().files.get(t);if(!r)return;const s=new Map(this._store.getState().files);s.set(t,{...r,meta:{...r.meta,[i]:o}}),this._store.setState({files:s}),this._applyDependencySetValuesPrefill(t)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var i;const o=null==(i=this.config)?void 0:i.transformRemoteThumbnail;if(!o)return e;try{return o(e,t)||e}catch(d){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",d),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;0===t.length&&i?this._showEmptyFolderToast():this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var t,o,r,s;const n=this._mergedSources.find((t=>t.id===e));if(null!=n&&n.onActivate)try{n.onActivate(this)}catch(a){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,a)}else if("device"!==e)if("url"!==e)if("camera"!==e)if("screen-cast"!==e){if(((null==(o=null==(t=this.config)?void 0:t.connectors)?void 0:o.providers)??[]).includes(e)){if("google-drive"===e&&null!=(s=null==(r=this.config)?void 0:r.connectors)&&s.googlePicker){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:e}=await i.e(735).then(i.bind(i,6735));customElements.define("sfx-google-picker-view",e)}}else if(Fn.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:e}=await i.e(287).then(i.bind(i,3287));customElements.define("sfx-search-provider-browser",e)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:e}=await i.e(990).then(i.bind(i,4990));customElements.define("sfx-provider-browser",e)}this._activeConnector=e}}else this._showScreenCastDialog=!0;else this._showCameraDialog=!0;else this._showUrlDialog=!0;else{const e=this.shadowRoot.querySelector("sfx-drop-zone");null==e||e.browse()}},this._onUrlSubmit=e=>{var t,i,o;this._showUrlDialog=!1;const{url:r,name:s}=e.detail,n=null==(t=this.config)?void 0:t.callbacks,a=Lr(s),l=a.startsWith("image/");if(_r(s))return;const d=this._store.getState();if([...d.files.values()].some((e=>e.name===s&&"rejected"!==e.status&&"cancelled"!==e.status)))return;const c=Fr({name:s,size:0,type:a},d.restrictions,d.files);if(c){const e={id:vr(),status:"rejected",file:null,remoteUrl:r,name:s,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...In};return Ve(this._store,e),this._dispatchPublic(Ko,{file:e,reason:c.message}),void(null==(i=null==n?void 0:n.onFileRejected)||i.call(n,e,c.message))}const p={id:vr(),status:"idle",file:null,remoteUrl:r,name:s,size:0,type:a,previewUrl:l?this._transformRemoteThumbnail(r,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...In};Ve(this._store,p),this._dispatchPublic(qo,{file:p}),null==(o=null==n?void 0:n.onFileAdded)||o.call(n,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var t,i,o;const r=this._store.getState().files.get(e.detail.fileId);r&&(this._previewFileId=r.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(pr,{file:r}),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onFilePreview)||o.call(i,r))},this._onFillMetadata=()=>{var e,t,i,o;const r=[...this._store.getState().files.values()].filter((e=>Mn._MODIFIABLE_STATUSES.has(e.status)));null!=(e=this.config)&&e.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(ur,{files:r}),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onFillMetadata)||o.call(i,r)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=On)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,On).map((e=>e.id))):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter((e=>this._similarSelectedIds.has(e.id)));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onSuccessCardLocate=()=>{const e=this._soleLocatableFile([...this._storeCtrl.state.files.values()]);e&&this._locateFile(e)},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var t,i,o;const r=e.detail.file,s=e.detail.cdnUrl;!r||!s||(this._dispatchPublic(gr,{file:r,cdnUrl:s}),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onFileCopyCdn)||o.call(i,r,s))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:r}of t){const e=i.get(o);e&&i.set(o,{...e,meta:{...e.meta,...r}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:r,taxonodes:s}of t){const e=i.get(r);if(!e||!Mn._MODIFIABLE_STATUSES.has(e.status))continue;const t={...e.taxonodes??{}};for(const[i,o]of Object.entries(s))null==o?delete t[i]:t[i]=o;o.set(r,{...e,taxonodes:t})}this._store.setState({files:o})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),null==(t=this._engine)||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;null==(t=this._engine)||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;null==(t=this._engine)||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),null==(e=this._engine)||e.retryAll()},this._onClearAll=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var i,o,r;const s=null==(i=e.config)?void 0:i.callbacks;e._clearSimilarRun(),e._similarResults=new Map,e._previewPanelTab="details",e._similarSelectMode=!1,e._similarSelectedIds=new Set,e._closeOnCompleteTimer&&(clearTimeout(e._closeOnCompleteTimer),e._closeOnCompleteTimer=null),t||null==(o=e._engine)||o.cancelAll();const n=[...e._store.getState().files.values()];for(const a of n)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),t||(e._dispatchPublic(Vo,{file:a}),null==(r=null==s?void 0:s.onFileRemoved)||r.call(s,a));e._revokeVideoBlobUrls();for(const a of e._rejectedTimers.values())clearTimeout(a);e._rejectedTimers.clear(),e._dimCache.clear(),e._previewFileId=null,e._fullscreenPreviewUrl=null,e._fullscreenVideoFile=null,e._lastEta=0,e._firedFolders.clear(),e._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var e;const t=this.shadowRoot.querySelector("sfx-drop-zone");if(t)return void t.browse();const i=this.shadowRoot.querySelector("sfx-file-list"),o=null==(e=null==i?void 0:i.shadowRoot)?void 0:e.querySelector('input[type="file"]');null==o||o.click()},this._onUploadStart=()=>{var e;"complete"!==this._phase?this._hasMetadataIssues||this.upload():!1!==(null==(e=this.config)?void 0:e.clearOnComplete)&&this._onClearAll()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter((e=>"complete"===e.status||"failed"===e.status||"error"===e.status));if(e.length>0)return this._reviewFiles=[...e].reverse(),void(this._isReviewing=!0);const t=this._lastUploadId;if(null==t)return;const i=No.load(t);!i||0===i.length||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;null!=e&&No.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var t,i,o,r;const s=null==(t=this.config)?void 0:t.callbacks,n=!1!==(null==(i=this.config)?void 0:i.preserveFolderStructure);for(const a of e.detail.files){if(_r(a.name))continue;const e=n?a.relativeFolder??"":"",t=this._store.getState();if([...t.files.values()].some((t=>t.name===a.name&&t.size===a.size&&t.relativeFolder===e&&"rejected"!==t.status&&"cancelled"!==t.status)))continue;const i=a.thumbnail?this._transformRemoteThumbnail(a.thumbnail,{source:"connector",providerId:a.provider}):null,l=Fr({name:a.name,size:a.size,type:a.mimeType},t.restrictions,t.files);if(l){const t={id:vr(),status:"rejected",file:null,remoteUrl:null,name:a.name,size:a.size,type:a.mimeType,previewUrl:i,duration:null,progress:0,speed:0,bytesUploaded:0,error:l.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:a,...In,relativeFolder:e};Ve(this._store,t),this._dispatchPublic(Ko,{file:t,reason:l.message}),null==(o=null==s?void 0:s.onFileRejected)||o.call(s,t,l.message);continue}const d={id:vr(),status:"idle",file:null,remoteUrl:null,name:a.name,size:a.size,type:a.mimeType,previewUrl:i,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:a,...In,relativeFolder:e};Ve(this._store,d),this._dispatchPublic(qo,{file:d}),null==(r=null==s?void 0:s.onFileAdded)||r.call(s,d)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t,i,o,r;this._dispatchPublic(cr,{}),null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onCompleteAction)||i.call(t),"modal"===((null==(o=this.config)?void 0:o.mode)??"modal")?this.close():!1!==(null==(r=this.config)?void 0:r.clearOnComplete)&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onCancel)||i.call(t),this._dispatchPublic(nr,{})},this._onSuccessCardClose=()=>{var e,t,i,o;"inline"===(null==(e=this.config)?void 0:e.mode)?(this._dispatchPublic(cr,{}),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onCompleteAction)||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,i,o;"uploading"===this._phase&&(null==(e=this._engine)||e.cancelAll()),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onCancel)||o.call(i),this._dispatchPublic(nr,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;null==(e=this._engine)||e.cancelAll(),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onCancel)||o.call(i),this._dispatchPublic(nr,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onMinimize)||i.call(t),this._dispatchFloatGeometryEvent(ar),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onRestore)||i.call(t),this._dispatchPublic(lr,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,"uploading"===this._phase&&(null==(e=this._engine)||e.cancelAll(),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onCancel)||o.call(i),this._dispatchPublic(nr,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&("uploading"===this._phase&&null!=(t=this.config)&&t.minimizeOnUpload?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout((()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null}),80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&Uo(t).then((e=>{let{files:t,hadDirectories:i}=e;0!==t.length?this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t,hadDirectories:i}})):i&&this._showEmptyFolderToast()}))},this._onKeyDown=e=>{var t,i;if("Escape"===e.key){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile)return void this._onFsClose();if(this._bulkMetadataOpen||this._isMinimized)return;const e=(null==(t=this.config)?void 0:t.mode)??"modal",o=(null==(i=this.config)?void 0:i.header)??("modal"!==e||"close");("close"===o||"back"===o)&&("modal"===e&&this._isOpen?this._onModalDismiss():"inline"===e&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var t;e.preventDefault(),this._isResizing=!0;const i=null==(t=this.shadowRoot)?void 0:t.querySelector(".preview-layout");null==i||i.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame((()=>{var e;this._splitRafId=0;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),r=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,r))}))},this._onSplitPointerUp=()=>{var e;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".preview-layout");null==t||t.classList.remove("resizing")},this._onFsToggleZoom=e=>{null==e||e.stopPropagation();const t=Mn._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=-1===i?1:(i+1)%t.length;this._fsZoom=t[o],1===this._fsZoom&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame((()=>{this._fsDragDidMove=!1}))},this._onFsTouchStart=e=>{if(this._fsZoom<=1||1!==e.touches.length)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||1!==e.touches.length)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{null==e||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=new Ne({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:je}),this._storeCtrl=new Ye(this,this._store)}get _lastUploadId(){var e,t;const i=null==(e=this.config)?void 0:e.lastUploadReview;if(!i)return null;if("string"==typeof i)return i;const o=null==(t=this.config)?void 0:t.auth;return o?o.airboxPuid?`${o.container}:${o.airboxPuid}`:o.container:null}get _metadataDefaultLanguage(){var e,t;const i=null==(e=this._metadataSchema)?void 0:e.regionalVariantsGroups;if(!i)return;const o=i.find((e=>e.type===hs));return(null==(t=null==o?void 0:o.variants.find(Boolean))?void 0:t.api_value)||void 0}get _effectiveRegionalFilters(){var e,t,i,o;const r=(null==(t=null==(e=this.config)?void 0:e.metadataConfig)?void 0:t.language)??(null==(i=this.config)?void 0:i.locale)??void 0;return{...ms(null==(o=this._metadataSchema)?void 0:o.regionalVariantsGroups,r),...this._regionalFilters}}get _activeLanguage(){var e,t,i;const o=((null==(e=this._metadataSchema)?void 0:e.regionalVariantsGroups)??[]).find((e=>e.type===hs)),r=this._effectiveRegionalFilters;return(o?r[o.uuid]:void 0)??(null==(i=null==(t=this.config)?void 0:t.metadataConfig)?void 0:i.language)}get _effectiveMetadataConfig(){var e;const t=null==(e=this.config)?void 0:e.metadataConfig;if(!t)return null;const i={...t.regionalFilters??{},...this._effectiveRegionalFilters},o=this._activeLanguage??t.language;return{...t,regionalFilters:i,language:o}}open(){var e,t,i,o,r,s,n,a,l;const d=this._isMinimized;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen?d&&(null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onRestore)||i.call(t),this._dispatchPublic(lr,{mode:"modal"}),this.requestUpdate()):(this._isOpen=!0,null==(s=null==(r=null==(o=this.config)?void 0:o.callbacks)?void 0:r.onOpen)||s.call(r),this._dispatchPublic(rr,{}),d&&(null==(l=null==(a=null==(n=this.config)?void 0:n.callbacks)?void 0:a.onRestore)||l.call(a),this._dispatchPublic(lr,{mode:"modal"})),this.requestUpdate())}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;"uploading"===this._phase&&(null==(e=this._engine)||e.cancelAll(),null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onCancel)||o.call(i),this._dispatchPublic(nr,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),!1!==(null==(e=this.config)?void 0:e.clearOnClose)&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onClose)||o.call(i),this._dispatchPublic(sr,{}),this.requestUpdate()}upload(){var e,t,i,o,r,s,n,a,l,d;if(this._ensureEngine(),!this._engine)return void console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");const c=[...this._store.getState().files.values()].filter((e=>"idle"===e.status||"queued"===e.status));if(null!=(t=null==(e=this.config)?void 0:e.callbacks)&&t.onBeforeUpload&&!1===this.config.callbacks.onBeforeUpload(c))return;const p=new CustomEvent(or,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:c}});if(!this.dispatchEvent(p))return;this._stripHiddenFieldsForUpload();const u=[...this._store.getState().files.values()].filter((e=>"idle"===e.status||"queued"===e.status));this._dispatchPublic(Yo,{files:u}),null==(r=null==(o=null==(i=this.config)?void 0:i.callbacks)?void 0:o.onUploadStarted)||r.call(o,u),this._engine.uploadAll(),null!=(s=this.config)&&s.minimizeOnUpload&&"inline"!==(null==(n=this.config)?void 0:n.mode)&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,null==(d=null==(l=null==(a=this.config)?void 0:a.callbacks)?void 0:l.onMinimize)||d.call(l),this._dispatchFloatGeometryEvent(ar),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const r of e){const e=t.get(r.id);e&&(i.set(r.id,{...e,...r}),o=!0)}o&&this._store.setState({files:i})}this._ensureEngine(),null==(t=this._engine)||t.uploadAll()}cancelUpload(){var e;null==(e=this._engine)||e.cancelAll()}pauseFile(e){var t;null==(t=this._engine)||t.pauseFile(e)}resumeFile(e){var t;null==(t=this._engine)||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,r=o.get(e);if(!r||!Mn._MODIFIABLE_STATUSES.has(r.status))return;const s=new Map(o);s.set(e,{...r,meta:null!=t?{...r.meta,...t}:r.meta,tags:i??r.tags}),this._store.setState({files:s})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:r,meta:s,tags:n}of e){const e=t.get(r);!e||!Mn._MODIFIABLE_STATUSES.has(e.status)||(i.set(r,{...e,meta:null!=s?{...e.meta,...s}:e.meta,tags:n??e.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const o=this._store.getState().files,r=o.get(e);if(!r||!Mn._MODIFIABLE_STATUSES.has(r.status))return;const s={...r.taxonodes??{}};null==i?delete s[t]:s[t]=i;const n=new Map(o);n.set(e,{...r,taxonodes:s}),this._store.setState({files:n})}updateFilesTaxonode(e,t,i){const o=this._store.getState().files,r=new Map(o);let s=!1;for(const n of e){const e=o.get(n);if(!e||!Mn._MODIFIABLE_STATUSES.has(e.status))continue;const a={...e.taxonodes??{}};null==i?delete a[t]:a[t]=i,r.set(n,{...e,taxonodes:a}),s=!0}s&&this._store.setState({files:r})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!Mn._MODIFIABLE_STATUSES.has(o.status))return;const r=new Map(i);r.set(e,{...o,product:it(o.product,t)}),this._store.setState({files:r})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:r,product:s}of e){const e=t.get(r);!e||!Mn._MODIFIABLE_STATUSES.has(e.status)||(i.set(r,{...e,product:it(e.product,s)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const e=this.config.uploadSettings;(!1===e||null!=e&&!1===e.enabled)&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const e=this._previewFileId,t=this._store.getState().files.get(e);t?this._getImageDimensions(t).then((t=>{this._previewFileId===e&&(this._previewDims=t?`${t.w} \xd7 ${t.h}`:"\u2014")})):this._previewDims="\u2014"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent="\n      [data-sfx-upload-float] .upload-float { position:fixed; bottom:calc(24px + var(--sfx-up-float-offset-y, 0px)); right:calc(24px + var(--sfx-up-float-offset-x, 0px)); z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; transition:bottom .25s ease, right .25s ease; }\n      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }\n      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }\n      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }\n      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }\n      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }\n      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }\n      [data-sfx-upload-float] .float-icon.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }\n      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }\n      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }\n      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }\n      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }\n      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }\n      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }\n      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }\n      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }\n      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }\n      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }\n      [data-sfx-upload-float] .float-progress-pct.done { color:#22c55e; }\n      [data-sfx-upload-float] .float-progress-pct.warn { color:#f59e0b; }\n      [data-sfx-upload-float] .float-progress-pct.error { color:#ef4444; }\n      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }\n      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }\n      [data-sfx-upload-float] .float-bar-fill.done { background:#22c55e; }\n      [data-sfx-upload-float] .float-bar-fill.warn { background:#f59e0b; }\n      [data-sfx-upload-float] .float-bar-fill.error { background:#ef4444; }\n      [data-sfx-upload-float] .float-items { max-height:200px; overflow-y:auto; }\n      [data-sfx-upload-float] .float-item { display:flex; align-items:center; gap:10px; padding:8px 14px; border-bottom:1px solid #f1f5f9; overflow:hidden; }\n      [data-sfx-upload-float] .float-item:last-child { border-bottom:none; }\n      [data-sfx-upload-float] .float-item-thumb { width:32px; height:32px; border-radius:6px; background:#f8fafc; display:flex; align-items:center; justify-content:center; color:#94a3b8; flex-shrink:0; }\n      [data-sfx-upload-float] .float-item-thumb svg { width:16px; height:16px; }\n      [data-sfx-upload-float] .float-item-info { flex:1; min-width:0; overflow:hidden; }\n      [data-sfx-upload-float] .float-item-name { font-size:12px; font-weight:500; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }\n      [data-sfx-upload-float] .float-item-size { font-size:11px; color:#94a3b8; }\n      [data-sfx-upload-float] .float-item-done { width:18px; height:18px; border-radius:50%; background:#f0fdf4; color:#22c55e; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n      [data-sfx-upload-float] .float-item-done svg { width:12px; height:12px; }\n      [data-sfx-upload-float] .float-item-done.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }\n      [data-sfx-upload-float] .float-item-done.info svg { width:14px; height:14px; }\n      [data-sfx-upload-float] .float-info-note { display:flex; align-items:center; gap:8px; margin:0 14px 10px; padding:6px 10px; border-radius:8px; box-shadow:inset 0 0 0 1px var(--sfx-up-info-border, rgba(0,144,228,0.20)); background:var(--sfx-up-info-bg, rgba(0,144,228,0.04)); color:var(--sfx-up-info-text, #024a71); font-size:12px; line-height:16px; }\n      [data-sfx-upload-float] .float-info-note svg { width:14px; height:14px; flex-shrink:0; color:var(--sfx-up-info, #0090e4); }\n      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }\n      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }\n      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }\n      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }\n      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }\n      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }\n      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }\n      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }\n      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }\n      [data-sfx-upload-float] .float-item-act { width:24px; height:24px; border:none; background:none; color:#64748b; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }\n      [data-sfx-upload-float] .float-item-act svg { width:14px; height:14px; }\n      [data-sfx-upload-float] .float-item-act:hover { background:#f1f5f9; color:#1e293b; }\n      [data-sfx-upload-float] .float-item-act.del:hover { color:#ef4444; }\n      [data-sfx-upload-float] .float-item-act.paused { color:#d97706; }\n      [data-sfx-upload-float] .float-item-act.paused:hover { color:#d97706; background:#fef3c7; }\n      [data-sfx-upload-float] .float-item-act.locate { color:#2563eb; }\n      [data-sfx-upload-float] .float-item-act.locate:hover { color:#1d4ed8; background:#eff6ff; }\n      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }\n      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }\n      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }\n      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }\n      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }\n      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }\n      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }\n      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }\n      [data-sfx-upload-float] .float-collapsed-icon.info { color:var(--sfx-up-info, #0090e4); }\n      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }\n      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }\n      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }\n      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }\n      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }\n      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }\n      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }\n      @keyframes sfxSpin { to{transform:rotate(360deg)} }\n    ",document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),(0,o.sY)(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame((()=>{this._dispatchPublic(dr,this._measureFloatGeometry())})))}else this._portalContainer&&((0,o.sY)(o.Ld,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe((()=>this._onStoreChange()));const e=this._lastUploadId;this._hasStoredReview=null!=e&&No.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver((()=>this._syncPortalOffsetVars())),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";return Re?(Re.language!==e&&(await Re.changeLanguage(e),Fe()),{i18n:Re,isNew:!1}):(Re=pe.createInstance(),await Re.use(Ue).init({lng:e,fallbackLng:"en",ns:[ze],defaultNS:ze,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`https://i18n-fastly.ultrafast.io/api/export/grid/f2/${Le}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var i;const o=JSON.parse(e),r=Array.isArray(t)?t[0]:t;return r&&null!=(i=o[r])&&i.__without_namespace?o[r].__without_namespace:o}}}),Re.on("languageChanged",Fe),Re.on("loaded",Fe),Fe(),{i18n:Re,isNew:!0})}(e||"en");i&&t.on("missingKey",((e,t,i,o,r,s)=>{const n=i.match(/_(?:zero|one|two|few|many|other)$/),a=n&&null!=s&&s[`defaultValue${n[0]}`]?String(s[`defaultValue${n[0]}`]):o;Oe.handleMissingKey(i,a,t)}));const o=(e,t,i)=>Ie(e,t,i);this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,r;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),null==(e=this._hostStyleObserver)||e.disconnect(),this._hostStyleObserver=null,null==(t=this._unsubStoreEvents)||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,null==(i=this._portalContainer)||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||null==(o=document.querySelector("style[data-sfx-upload-float-styles]"))||o.remove(),this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const s of this._store.getState().files.values())s.previewUrl&&URL.revokeObjectURL(s.previewUrl);null==(r=this._engine)||r.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||null!=e.forceName)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},null!=e.forceName&&(t.restrictions.maxNumberOfFiles=1)),null!=e.concurrency){const i=this._store.getState().queueConfig;t.queueConfig={...i,concurrency:e.concurrency}}if(null!=e.autoProceed){const i=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...i,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const e=i.defaults;void 0!==e.resize&&(this._setResize=e.resize),void 0!==e.maxWidth&&(this._setMaxW=e.maxWidth),void 0!==e.maxHeight&&(this._setMaxH=e.maxHeight),void 0!==e.transcode&&(this._setTranscode=e.transcode),void 0!==e.resolution&&(this._setResolution=e.resolution),void 0!==e.protocol&&(this._setProtocol=e.protocol),void 0!==e.resumable&&(this._setResumable=e.resumable)}const o=this._lastUploadId;this._hasStoredReview=null!=o&&No.exists(o),this._resolveAuthAndEngine(e),("inline"===e.mode||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var t,i,o,r;const s=e.auth;if("sass-key"===s.mode)return this._apiBase=Fo(s.container,e.apiDomain),this._authHeaders=Oo(s),this._ensureEngine(),null==(i=this._engine)||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:null==(t=e.connectors)?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),void this._preloadMetadataSchema(e);const n=++this._authResolveId;try{const t=await To(s,e.apiDomain);if(n!==this._authResolveId)return;this._apiBase=t.apiBase,this._authHeaders=t.headers,this._ensureEngine(),null==(r=this._engine)||r.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:null==(o=e.connectors)?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(a){if(n!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",a),this._showToast(this._formatAuthError(a))}}_formatAuthError(e){var t,i;const o=e instanceof Error?e.message:String(e);return null!=(i=null==(t=this.config)?void 0:t.auth)&&i.container?o.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:o.includes("HTTP 401")||o.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":o.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":o.includes("Failed to fetch")||o.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${o}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";var i;const o=null==(i=this.shadowRoot)?void 0:i.querySelector("sfx-toast");null==o||o.show(e,t)}_normalizeTusConfig(){var e,t,i,o;const r=null==(e=this.config)?void 0:e.uploadSettings,s=!!r&&!0===r.showResumableSwitcher,n=null==(t=this.config)?void 0:t.tusConfig;let a=!0===n?{}:n||void 0;if(s){if(!this._setResumable)return;a||(a={})}if(!a)return;const l=null==(o=null==(i=this.config)?void 0:i.connectors)?void 0:o.companionUrl;if(!l)return a;const d=l.replace(/\/+$/,"");return{...a,endpoint:a.endpoint??`${d}/files`,jsonBase:a.jsonBase??`${d}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(null==e)return null;let t=0;for(const i of this._storeCtrl.state.files.values())"rejected"!==i.status&&"cancelled"!==i.status&&t++;return Math.max(0,e-t)}get _allowMulti(){var e;if(null!=(null==(e=this.config)?void 0:e.forceName))return!1;const t=this._remainingSlots;return null===t||t>1}get _allowFolderUpload(){var e;return!1!==(null==(e=this.config)?void 0:e.preserveFolderStructure)&&this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return e=>{const o={},r=yr(e);if(this._setResize&&("image"===r||"pdf"===r)&&this._setMaxW>0&&this._setMaxH>0&&(o.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&"vid"===r&&(o.postprocess="transcode",o["video-resolution"]=this._setResolution,o.video_protocols=this._setProtocol),null!=t){const e="function"==typeof t?t():t;e&&(o.opt_force_name=e)}const s=null==i?void 0:i(e);return s&&Object.assign(o,s),Object.keys(o).length>0?o:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Ro(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:null==(t=null==(e=this.config)?void 0:e.connectors)?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(e,t)=>this._transformRemoteThumbnail(e,{source:"cdn-complete",urls:t})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const o=this._storeCtrl.state.t;try{const{fetchMetadataSchema:e,fetchDependencies:r,hasCachedSchema:s,hasCachedDependencies:n,canReachHub:a,HUB_HEADERS_HINT:l,createTagsAutocomplete:d,createTaxonomyService:c,createUltratagsService:p}=await i.e(288).then(i.bind(i,9288)),u=a(t),h=u||!!t.rawMetadata||s(t.projectUuid),f=u||n(t.projectUuid);if(!h)return this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig is set but no usable Hub auth is configured \u2014 skipping metadata schema and dependencies. ${l}`),this._showToast(o("metadataUnavailable","Metadata is unavailable \u2014 missing Hub session headers"),"warning")),this._metadataSchema=null,void(this._metadataDependencies=[]);let g;f?g=r(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch((e=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",e),[]))):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth \u2014 metadata dependency rules are disabled (the schema itself loads without the Hub). ${l}`)),g=Promise.resolve([]));const[m,v]=await Promise.all([e(this._apiBase,this._authHeaders,t.projectUuid,t),g]);this._metadataDependencies=v,this._metadataAutocomplete=d(this._apiBase,this._authHeaders),this._taxonomyService=c(this._apiBase,this._authHeaders),this._ultratagsService=p(this._apiBase,this._authHeaders),this._metadataSchema=m.productsEnabled?cs(m,this._storeCtrl.state.t):m;const b=this._metadataSchema.fields.filter((e=>Ps(e,t))).map((e=>e.key));this._dispatchPublic(hr,{schema:this._metadataSchema,requiredFieldKeys:b}),this._applyDependencySetValuesPrefill()}catch(x){console.error("[sfx-uploader] Failed to load metadata schema:",x),this._showToast(o("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||0===this._metadataDependencies.length)return;const t=this._metadataSchema,i=this._store.getState().files;let o=!1;const r=new Map(i),s=e?(()=>{const t=i.get(e);return t?[t]:[]})():i.values();for(const n of s){if(!Mn._MODIFIABLE_STATUSES.has(n.status))continue;const e=Qr({mime:n.type??"",meta:n.meta},t,this._metadataDependencies);if(0===e.size)continue;const i={};for(const o of t.fields){const t=e.get(o.ckey);void 0!==(null==t?void 0:t.setValue)&&(t.hidden||us(n.meta[o.key])&&(i[o.key]=es(o,t.setValue)))}0!==Object.keys(i).length&&(r.set(n.id,{...n,meta:{...n.meta,...i}}),o=!0)}o&&this._store.setState({files:r})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||0===this._metadataDependencies.length)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const o=new Map(t);for(const r of t.values()){if(!Mn._MODIFIABLE_STATUSES.has(r.status))continue;const t=Qr({mime:r.type??"",meta:r.meta},e,this._metadataDependencies),s=is(r.meta,e,t);s!==r.meta&&(o.set(r.id,{...r,meta:s}),i=!0)}i&&this._store.setState({files:o})}get _renameAllowed(){var e,t;return((null==(e=this.config)?void 0:e.allowFileRename)??!0)&&null==(null==(t=this.config)?void 0:t.forceName)}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const r=new Map(this._store.getState().files);r.set(e,{...o,name:i}),this._store.setState({files:r})}_previewMeta(e){var t;return null!=(t=this._metadataSchema)&&t.productsEnabled?{...e.meta,[os]:e.product.ref,[rs]:e.product.position}:e.meta}_resolvedSchemaFor(e){return this._metadataSchema&&0!==this._metadataDependencies.length?Qr({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies):null}get _metadataEnforcing(){var e;const t=null==(e=this.config)?void 0:e.metadataConfig;return!(!t||!this._metadataSchema)&&Ls(this._metadataSchema,t)}_firstMissingRequiredFieldKey(){var e;return this._metadataEnforcing&&this._metadataSchema?function(e,t,i,o){const r=Us(e);if(0===r.length)return null;const s=Rs(r,t,o);for(const n of t.fields)if(r.some((e=>{const t=s.get(e.id)??null;return!!zs(n,t,i)&&!Cs(e.meta[n.key])})))return n.key;return null}(this._store.getState().files,this._metadataSchema,null==(e=this.config)?void 0:e.metadataConfig,this._metadataDependencies):null}get _hasUnfilledRequiredMetadata(){return null!=this._firstMissingRequiredFieldKey()}_firstConflictedFieldKey(){return this._metadataSchema?function(e,t,i){if(!i||0===i.length)return null;const o=Us(e);if(0===o.length)return null;const r=Rs(o,t,i),s=new Map;for(const n of o){const e=r.get(n.id);if(!e||0===e.size)continue;const i={};for(const r of t.fields)r.key in n.meta&&(i[r.ckey]=n.meta[r.key]);const o=Ss(i,e);0!==o.length&&s.set(n.id,new Set(o.map((e=>e.ckey))))}if(0===s.size)return null;for(const n of t.fields)for(const e of s.values())if(e.has(n.ckey))return n.key;return null}(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return null!=this._firstConflictedFieldKey()}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var e;const t=this._isPillExpanded?"card":"pill",i=null==(e=this._portalContainer)?void 0:e.querySelector(".upload-float");if(!i)return{width:0,height:0,mode:t};const o=i.getBoundingClientRect();return{width:o.width,height:o.height,mode:t}}_dispatchFloatGeometryEvent(e){this.updateComplete.then((()=>{requestAnimationFrame((()=>{this._dispatchPublic(e,this._measureFloatGeometry())}))}))}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var e,t,i,o,r,s,n,a,l,d;const c=this._store.getState(),p=this._prevStoreState;if(this._prevStoreState=c,!p)return;c.isUploading&&!p.isUploading&&(this._lastEta=0,this._firedFolders.clear());const u=null==(e=this.config)?void 0:e.callbacks;for(const[h,f]of c.files){const e=p.files.get(h);if(e){if(e.status!==f.status)switch(f.status){case"uploading":"paused"===e.status&&(this._dispatchPublic(Qo,{file:f}),null==(t=null==u?void 0:u.onUploadResumed)||t.call(u,f));break;case"complete":f.response&&(this._dispatchPublic(Xo,{file:f,response:f.response}),null==(i=null==u?void 0:u.onUploadComplete)||i.call(u,f,f.response));break;case"error":case"failed":{const e=new Error(f.error??"Upload failed");this._dispatchPublic(Go,{file:f,error:e}),null==(o=null==u?void 0:u.onUploadError)||o.call(u,f,e);break}case"retrying":this._dispatchPublic(Jo,{file:f,attempt:f.retryCount}),null==(r=null==u?void 0:u.onUploadRetry)||r.call(u,f,f.retryCount);break;case"paused":this._dispatchPublic(Zo,{file:f}),null==(s=null==u?void 0:u.onUploadPaused)||s.call(u,f)}"uploading"===f.status&&e.progress!==f.progress&&(this._dispatchPublic(Wo,{file:f,progress:f.progress,speed:f.speed}),null==(n=null==u?void 0:u.onUploadProgress)||n.call(u,f,f.progress,f.speed)),f.relativeFolder&&e.status!==f.status&&Bn.has(f.status)&&!this._firedFolders.has(f.relativeFolder)&&this._maybeDispatchFolderComplete(f.relativeFolder,c,u)}else f.relativeFolder&&this._firedFolders.delete(f.relativeFolder)}if(c.totalProgress!==p.totalProgress||c.totalSpeed!==p.totalSpeed){const e=c.totalSpeed>0?(c.totalBytes-c.totalBytesUploaded)/c.totalSpeed:c.isUploading?this._lastEta:0;c.totalSpeed>0&&(this._lastEta=e),this._dispatchPublic(ir,{percentage:c.totalProgress,speed:c.totalSpeed,eta:e}),null==(a=null==u?void 0:u.onTotalProgress)||a.call(u,c.totalProgress,c.totalSpeed,e)}if(p.isUploading&&!c.isUploading){const e=[...c.files.values()];if(!e.some((e=>"cancelled"===e.status))){const t=e.filter((e=>"complete"===e.status)),i=e.filter((e=>"failed"===e.status||"error"===e.status));if(0===t.length&&0===i.length)return;const o=this._lastUploadId;if(null!=o){const e=[...t,...i];No.save(o,e),this._hasStoredReview=e.length>0}this._dispatchPublic(er,{successful:t,failed:i}),null==(l=null==u?void 0:u.onAllComplete)||l.call(u,t,i);const r=null==(d=this.config)?void 0:d.closeOnComplete;if(!1!==r&&null!=r){const e="number"==typeof r?r:1500;this._closeOnCompleteTimer=setTimeout((()=>{var e,t,i;this._closeOnCompleteTimer=null,"complete"===this._phase&&(this._dispatchPublic(cr,{}),null==(i=null==(t=null==(e=this.config)?void 0:e.callbacks)?void 0:t.onCompleteAction)||i.call(t),this.close())}),e)}}}}_maybeDispatchFolderComplete(e,t,i){var o;const r=[...t.files.values()].filter((t=>t.relativeFolder===e));if(0===r.length||r.some((e=>!Bn.has(e.status))))return;const s=r.filter((e=>"complete"===e.status)),n=r.filter((e=>"failed"===e.status||"error"===e.status));0===s.length&&0===n.length||(this._firedFolders.add(e),this._dispatchPublic(tr,{folder:e,successful:s,failed:n}),null==(o=null==i?void 0:i.onFolderComplete)||o.call(i,e,s,n))}get _mergedSources(){var e;const t=null==(e=this.config)?void 0:e.connectors;if(t===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=t,!t)return this._cachedSources=Dr.filter((e=>"url"!==e.id)),this._cachedSources;const i=t.providers.length>0?jr(t.providers):[],o=t.customSources??[],r=t.coreSources?new Set(t.coreSources):null,s=r?Dr.filter((e=>r.has(e.id))):Dr,n=t.companionUrl?s:s.filter((e=>"url"!==e.id)),a=n.filter((e=>"device"===e.id||"url"===e.id)),l=n.filter((e=>"device"!==e.id&&"url"!==e.id)),d=new Set,c=[];for(const p of[...a,...i,...l,...o])if(!d.has(p.id)){if(Mn._RESERVED_IDS.has(p.id)&&p.onActivate){console.warn(`[sfx-uploader] Custom source id "${p.id}" conflicts with a built-in source and was skipped.`);continue}d.add(p.id),c.push(p)}return this._cachedSources=c,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(0===t.length)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every((e=>i.has(e.status)))&&t.some((e=>"complete"===e.status||"failed"===e.status))?"complete":"ready"}_processIncomingFiles(e){var t,i,o,r,s;const n=null==(t=this.config)?void 0:t.callbacks;"complete"===this._phase&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const a=!1!==(null==(i=this.config)?void 0:i.preserveFolderStructure);let l=0,d=!1;for(const c of e){if(_r(c.name))continue;if(d){l++;continue}const e=a?Po(Co(c)):"",t=this._store.getState();if([...t.files.values()].some((t=>t.name===c.name&&t.size===c.size&&t.relativeFolder===e&&"rejected"!==t.status&&"cancelled"!==t.status)))continue;const i=c.type||Lr(c.name),p=Fr({name:c.name,size:c.size,type:i},t.restrictions,t.files);if(p){if(Er(p)){d=!0,l++;continue}const t=i.startsWith("image/")&&!zr(i)?URL.createObjectURL(c):null,s={id:vr(),status:"rejected",file:c,remoteUrl:null,name:c.name,size:c.size,type:i,previewUrl:t,duration:null,progress:0,speed:0,bytesUploaded:0,error:p.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...In,relativeFolder:e};Ve(this._store,s),this._dispatchPublic(Ko,{file:s,reason:p.message}),null==(o=null==n?void 0:n.onFileRejected)||o.call(n,s,p.message);const a=null==(r=this.config)?void 0:r.rejectedFileAutoRemoveDelay,u=!1===a||0===a||void 0===a?0:a;if(u>0){const e=s.id,t=setTimeout((()=>{this._rejectedTimers.delete(e);const t=this._store.getState().files.get(e);t&&"rejected"===t.status&&Ke(this._store,e)}),u);this._rejectedTimers.set(e,t)}continue}let u=null;i.startsWith("image/")&&!zr(i)&&(u=URL.createObjectURL(c));const h={id:vr(),status:"idle",file:c,remoteUrl:null,name:c.name,size:c.size,type:i,previewUrl:u,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...In,relativeFolder:e};if(Ve(this._store,h),this._dispatchPublic(qo,{file:h}),null==(s=null==n?void 0:n.onFileAdded)||s.call(n,h),c.type.startsWith("video/")){Rr(c).then((e=>{if(!e)return;const t=this._store.getState(),i=t.files.get(h.id);if(i){const o=new Map(t.files);o.set(h.id,{...i,previewUrl:e}),this._store.setState({files:o})}else URL.revokeObjectURL(e)}));const e=document.createElement("video");e.preload="metadata",e.src=URL.createObjectURL(c),e.onerror=()=>{URL.revokeObjectURL(e.src)},e.onloadedmetadata=()=>{const t=e.duration;if(URL.revokeObjectURL(e.src),!isFinite(t))return;const i=this._store.getState(),o=i.files.get(h.id);if(o){const e=new Map(i.files);e.set(h.id,{...o,duration:t}),this._store.setState({files:e})}}}}if(l>0){const e=this._storeCtrl.state.t,t=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(e("tooManyFilesSkipped",{count:l,max:t,defaultValue_one:"Skipped {{count}} file \u2014 limit is {{max}}",defaultValue_other:"Skipped {{count}} files \u2014 limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty \u2014 no files were added"),"info")}_removeFile(e){var t,i,o,r,s;const n=this._store.getState().files.get(e);if(!n)return;const a={...n};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===n.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===n.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),n.previewUrl&&URL.revokeObjectURL(n.previewUrl),n.file){const e=this._videoBlobUrls.get(n.file);e&&(URL.revokeObjectURL(e),this._videoBlobUrls.delete(n.file))}("uploading"===n.status||"queued"===n.status||"retrying"===n.status||"paused"===n.status)&&(null==(t=this._engine)||t.cancelFile(e)),Ke(this._store,e),null==(i=this._engine)||i.recompute(),this._dimCache.delete(e);const l=this._rejectedTimers.get(e);if(l&&(clearTimeout(l),this._rejectedTimers.delete(e)),this._previewFileId===e){const e=[...this._store.getState().files.values()];this._previewFileId=e.length>0?e[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(Vo,{file:a}),null==(s=null==(r=null==(o=this.config)?void 0:o.callbacks)?void 0:r.onFileRemoved)||s.call(r,a)}_similarImageFiles(){return[...this._store.getState().files.values()].filter((e=>"image"===yr(e)&&!zr(e.type)))}_similarUncheckedFiles(){return this._similarImageFiles().filter((e=>!this._similarResults.has(e.id)))}_similarityAuth(){var e,t,i;const o=null==(t=null==(e=this.config)?void 0:e.auth)?void 0:t.container,r=null==(i=this._authHeaders)?void 0:i["X-Filerobot-Key"];return o&&r?{container:o,sassKey:r}:null}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var t,i,o,r;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const s=this._similarityAuth();if(!s)return void console.error("[sfx-uploader] Similarity check requires resolved auth.");const n=Bo(null==(i=null==(t=this.config)?void 0:t.similarityCheck)?void 0:i.confidence),a=null==(r=null==(o=this.config)?void 0:o.similarityCheck)?void 0:r.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Do(e,{...s,threshold:n,endpoint:a}).then((t=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,t)})).catch((t=>{console.error("[sfx-uploader] Similarity check failed for",e.name,t),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])}))}_runSimilarityCheck(e){var t,i,o,r;if(this._clearSimilarRun(),!e.length)return;const s=this._similarityAuth();if(!s)return void console.error("[sfx-uploader] Similarity check requires resolved auth.");this._similarRunIds=e.map((e=>e.id));const n=Bo(null==(i=null==(t=this.config)?void 0:t.similarityCheck)?void 0:i.confidence),a=null==(r=null==(o=this.config)?void 0:o.similarityCheck)?void 0:r.endpoint,l=new AbortController;this._similarAbort=l;const d=[...e];let c=0,p=0;const u=e.length,h=()=>{if(!l.signal.aborted){if(!this._previewFileId){const t=e.find((e=>{var t;return((null==(t=this._similarResults.get(e.id))?void 0:t.length)??0)>0}));t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout((()=>this._clearSimilarRun()),1500)}},f=()=>{if(!l.signal.aborted)for(;c<3&&d.length>0;){const e=d.shift();c+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Do(e,{...s,threshold:n,endpoint:a,signal:l.signal}).then((t=>{l.signal.aborted||(this._similarMarkInactive(e.id),this._similarSetResults(e.id,t))})).catch((t=>{l.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",e.name,t),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[]))})).finally((()=>{l.signal.aborted||(c-=1,p+=1,p===u?h():f())}))}};f()}_clearSimilarRun(){var e;null==(e=this._similarAbort)||e.abort(),this._similarAbort=null,null!=this._similarDismissTimer&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter((t=>t!==e))),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),o=i>0?t.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_soleLocatableFile(e){var t;if(null==(t=this.config)||!t.showLocateButton)return null;const i=e.filter((e=>{var t,i;return"complete"===e.status&&!(null==(i=null==(t=e.response)?void 0:t.file)||!i.uuid)}));return 1===i.length?i[0]:null}_locateFile(e){var t,i,o;if(!e)return;const r=function(e,t){var i,o,r;const s=null==(i=null==t?void 0:t.getLocateUrl)?void 0:i.call(t,e);if(s)return s;const n=(null==t?void 0:t.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!n)return null;const a=null==(r=null==(o=e.response)?void 0:o.file)?void 0:r.uuid;return a?`${n.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(a))}`:null}(e,this.config??void 0),s=this.dispatchEvent(new CustomEvent(fr,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:r}})),n=null==(o=null==(i=null==(t=this.config)?void 0:t.callbacks)?void 0:i.onFileLocate)?void 0:o.call(i,e,r);this._onMinimize(),s&&!1!==n&&r&&window.location.assign(r)}render(){var e;const t=(null==(e=this.config)?void 0:e.mode)??"modal",i=[...this._storeCtrl.state.files.values()],r=this._storeCtrl.state.t;return"modal"===t?o.dy`
        ${this._isOpen&&!this._isMinimized?o.dy`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${r}></sfx-toast>
                </div>
              </div>
            `:o.Ld}
        ${this._renderFsOverlay()}
      `:o.dy`
      <div class="inline ${0===i.length?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${r}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return o.Ld;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex((e=>e.id===this._previewFileId));return o.dy`
      <div
        class="fs-overlay ${this._fsZoom>1?"zoomed":""} ${this._fsDragging?"panning":""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile?o.dy`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${e=>e.stopPropagation()}></video>`:o.dy`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${De(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${e=>e.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=Mn._FS_ZOOM_LEVELS[Mn._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}\xd7)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=Mn._FS_ZOOM_LEVELS[Mn._FS_ZOOM_LEVELS.length-1]?o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${e("close","Close")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${i<=0} @click=${e=>{e.stopPropagation(),this._navigateFs(-1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${i>=t.length-1} @click=${e=>{e.stopPropagation(),this._navigateFs(1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `}_renderInlineHeader(e){return o.dy`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?o.dy`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:o.Ld}
          ${e.title?o.dy`<h2 class="inline-header-title">${e.title}</h2>`:o.Ld}
        </div>
        ${e.description?o.dy`<div class="inline-header-desc">${e.description}</div>`:o.Ld}
      </div>
    `}_renderHeader(){var e,t,i,r,s,n;if("complete"===this._phase)return o.Ld;const a=this._storeCtrl.state.t,l=(null==(e=this.config)?void 0:e.mode)??"modal";if("uploading"===this._phase){const e=[...this._storeCtrl.state.files.values()].filter((e=>"rejected"!==e.status&&"cancelled"!==e.status)),t=e.length,i=e.filter((e=>"complete"===e.status)).length;return o.dy`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
            <div>
              <div class="float-title">
                ${a("uploadingFiles",{count:t,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${a("nOfNComplete","{{completed}} of {{total}} complete",{completed:i,total:t})}${this._lastEta>0?` \xb7 ${a("etaLeft","~{{eta}} left",{eta:xr(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if("inline"===l&&null!=(t=this.config)&&t.inlineHeader)return o.Ld;const d=(null==(i=this.config)?void 0:i.header)??("modal"!==l||"close");if(!1===d)return o.Ld;const c="modal"===l?this._onModalDismiss:this._onInlineDismiss,p="back"===d?o.dy`<button
            class="header-btn header-btn-back"
            aria-label=${a("backToAssetPicker","Back to Asset Picker")}
            @click=${c}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>`:o.Ld,u=null==(r=this.config)?void 0:r.uploadSettings,h=!1!==u&&(null==u||!1!==u.enabled),f=!1!==u&&null!=u&&!0===u.showResumableSwitcher,g=[...this._storeCtrl.state.files.values()],m=g.some((e=>"image"===yr(e)&&!zr(e.type))),v=g.some((e=>"pdf"===yr(e))),b=g.some((e=>"vid"===yr(e))),x=h&&(m||v||b||f)?o.dy`<button
            class="header-btn header-btn-settings ${this._showSettings?"on":""}"
            aria-label=${a("uploadSettings","Upload settings")}
            title=${a("uploadSettings","Upload settings")}
            @click=${()=>{this._showSettings=!this._showSettings}}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>`:o.Ld,y=null!=(n=null==(s=this._metadataSchema)?void 0:s.regionalVariantsGroups)&&n.length?o.dy`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:o.Ld,w="close"===d?o.dy`<button
            class="header-btn header-btn-close"
            aria-label=${a("close","Close")}
            @click=${c}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>`:o.Ld;return o.dy`
      <div class="header">
        ${p}
        ${"back"!==d?o.dy` <div class="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>`:o.Ld}
        <div class="header-title">${a("uploadFiles","Upload Files")}</div>
        ${y}
        ${x}
        ${w}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise((t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl})):Promise.resolve(null)}_renderUploadOverlay(e){var t;const i=this._storeCtrl.state,r=i.t,s=Math.round(i.totalProgress??0),n=e.filter((e=>"rejected"!==e.status&&"cancelled"!==e.status)),a=n.length,l=n.filter((e=>"complete"===e.status)).length,d=n.filter((e=>Eo(e.status))),c=[];return a>1&&c.push(r("nOfNComplete","{{completed}} of {{total}} complete",{completed:l,total:a})),this._lastEta>0&&c.push(r("etaLeft","~{{eta}} left",{eta:xr(this._lastEta)})),o.dy`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${s}%</div>
        <div class="upload-overlay-title">
          ${r("uploadingFiles",{count:a,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        ${c.length>0?o.dy`<div class="upload-overlay-subtitle">${c.join(" \xb7 ")}</div>`:o.Ld}
        ${a>1?o.dy`<div class="upload-overlay-bar">
              <div class="upload-overlay-bar-fill" ${De({width:`${s}%`})}></div>
            </div>`:o.Ld}
        ${d.length>0?this._renderOverlayFiles(d,r):o.Ld}
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${r("cancelUpload","Cancel upload")}
          </button>
          ${null!=(t=this.config)&&t.minimizeOnUpload?o.dy`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${r("minimizeAndContinue","Minimize & continue in background")}
              </button>`:o.Ld}
        </div>
      </div>
    `}_renderOverlayFiles(e,t){const i=[...e].reverse();return o.dy`
      <div class="upload-overlay-files">
        ${m(i,(e=>e.id),(e=>{const i="paused"===e.status,r="uploading"===e.status,s="queued"===e.status,n=Math.round(e.progress??0),a=i?t("paused","Paused"):s?t("queued","Queued"):`${n}%`;return o.dy`
            <div class="upload-overlay-file">
              <div class="upload-overlay-file-info">
                <div class="upload-overlay-file-name" title=${e.name}>${e.name}</div>
                <div class="upload-overlay-file-meta">
                  <div class="upload-overlay-file-bar">
                    <div
                      class="upload-overlay-file-bar-fill ${i||s?"muted":""}"
                      ${De({width:`${n}%`})}
                    ></div>
                  </div>
                  <div class="upload-overlay-file-pct">${a}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${r&&e.isTus?o.dy`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause","Pause")}
                        aria-label=${t("pauseUpload","Pause upload")}
                        @click=${()=>{var t;return null==(t=this._engine)?void 0:t.pauseFile(e.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:o.Ld}
                ${i?o.dy`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume","Resume")}
                        aria-label=${t("resumeUpload","Resume upload")}
                        @click=${()=>{var t;return null==(t=this._engine)?void 0:t.resumeFile(e.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:o.Ld}
                <button
                  class="upload-overlay-file-btn del"
                  title=${t("remove","Remove")}
                  aria-label=${t("removeFile","Remove file")}
                  @click=${()=>this._removeFile(e.id)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          `}))}
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,r=Math.round(t.totalProgress??0),s="complete"===this._phase,n=e.filter((e=>"complete"===e.status)).length,a=e.filter((e=>"failed"===e.status)).length,l=e.filter((e=>"complete"===e.status&&e.alreadyExisted)).length,d=n>0&&0===a&&l>=n,c=this._soleLocatableFile(e);return!1===this._isPillExpanded?o.dy`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?a>0?n>0?o.dy`<div class="float-collapsed-icon warn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>`:o.dy`<div class="float-collapsed-icon error">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>`:d?o.dy`<div class="float-collapsed-icon info">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>`:o.dy`<div class="float-collapsed-icon done">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>`:o.dy`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):d?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${s?o.Ld:o.dy`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${s&&c?o.dy`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(c)}
                >
                  ${He}
                </button>`:o.Ld}
            <button title=${i("openUploader","Open uploader")} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("expand","Expand")} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      `:o.dy`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${s?a>0?n>0?"warn":"error":d?"info":"done":""}"
            >
              ${s?a>0?n>0?o.dy`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>`:o.dy`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>`:d?o.dy`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>`:o.dy`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>`:o.dy`<svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                  </svg>`}
            </div>
            <div>
              <div class="float-title">
                ${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):d?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${s?d?i("alreadyInLibrarySubtitle",{count:l,defaultValue_one:"It\u2019s ready to use \u2014 nothing new to upload",defaultValue_other:"They\u2019re ready to use \u2014 nothing new to upload"}):`${i("filesUploaded",{count:n,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${a>0?`, ${i("nFailed","{{count}} failed",{count:a})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` \xb7 ${i("etaLeft","~{{eta}} left",{eta:xr(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${s&&c?o.dy`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(c)}
                >
                  ${He}
                </button>`:o.Ld}
            <button title=${i("expand","Expand")} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("collapse","Collapse")} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">${i("overallProgress","Overall progress")}</span>
            <span
              class="float-progress-pct ${s?a>0?n>0?"warn":"error":"done":""}"
              >${s?i("done","Done"):`${r}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${s?a>0?n>0?"warn":"error":"done":""}"
              ${De({width:`${s?100:r}%`})}
            ></div>
          </div>
        </div>
        ${s&&l>0&&!d?o.dy`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:o.Ld}
        <div class="float-items">
          ${m([...e].reverse(),(e=>e.id),(e=>{var t,r,s;const n="failed"===e.status||"error"===e.status;return o.dy`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${De(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${e.previewUrl?o.Ld:o.dy`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${e.name}</div>
                  <div class="float-item-size">${br(e.size)}</div>
                </div>
                <div class="float-item-status">
                  ${"complete"===e.status?o.dy`${null!=(t=this.config)&&t.showLocateButton&&null!=(s=null==(r=e.response)?void 0:r.file)&&s.uuid?o.dy`<button
                              class="float-item-act locate"
                              title=${i("locate","Locate")}
                              aria-label=${i("locate","Locate")}
                              @click=${()=>this._locateFile(e)}
                            >
                              ${He}
                            </button>`:o.Ld}
                        ${e.alreadyExisted?o.dy`<div
                              class="float-item-done info"
                              title=${i("alreadyUploaded","Already uploaded")}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                            </div>`:o.dy`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}`:n?o.dy` <div class="float-item-error-wrap">
                          <svg
                            class="float-item-error-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span class="float-item-tooltip"
                            >${e.error||i("uploadFailed","Upload failed")}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var t;this._ensureEngine(),null==(t=this._engine)||t.retryFile(e.id)}}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M21 2v6h-6" />
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                            <path d="M3 22v-6h6" />
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                          </svg>
                        </button>`:"paused"===e.status?o.dy`
                        <button
                          class="float-item-act paused"
                          title=${i("resume","Resume")}
                          aria-label=${i("resumeUpload","Resume upload")}
                          @click=${()=>{var t;return null==(t=this._engine)?void 0:t.resumeFile(e.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${i("remove","Remove")}
                          aria-label=${i("removeFile","Remove file")}
                          @click=${()=>this._removeFile(e.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:o.dy`
                        <div class="float-item-spinner"></div>
                        ${"uploading"===e.status&&e.isTus?o.dy`<button
                              class="float-item-act"
                              title=${i("pause","Pause")}
                              aria-label=${i("pauseUpload","Pause upload")}
                              @click=${()=>{var t;return null==(t=this._engine)?void 0:t.pauseFile(e.id)}}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>`:o.Ld}
                        ${"uploading"===e.status||"queued"===e.status||"retrying"===e.status?o.dy`<button
                              class="float-item-act del"
                              title=${i("remove","Remove")}
                              aria-label=${i("removeFile","Remove file")}
                              @click=${()=>this._removeFile(e.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>`:o.Ld}
                      `}
                </div>
              </div>
            `}))}
        </div>
      </div>
    `}_renderPreviewLayout(e){var t,i,r,s,n,a,l;if(0===e.length)return o.Ld;const d=this._storeCtrl.state.t,c=[...e].reverse(),p=c.find((e=>e.id===this._previewFileId))??c[0],u=(null==(t=p.name.split(".").pop())?void 0:t.toUpperCase())||"";new Date(p.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const h=c.reduce(((e,t)=>e+(t.size||0)),0),f=!(null==(r=null==(i=this.config)?void 0:i.similarityCheck)||!r.enabled),g=c.filter((e=>"image"===yr(e)&&!zr(e.type)&&!this._similarResults.has(e.id))).map((e=>e.id)),m=Math.min(g.length,On),v=m>0&&this._similarSelectedIds.size>=m,b=this._similarSelectedIds.size>=On,x=this._similarResults.get(p.id),y=void 0!==x,w=y?this._previewPanelTab:"details";return o.dy`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${De({flex:String(this._splitPct)})}>
          ${"inline"===(null==(s=this.config)?void 0:s.mode)&&null!=(n=this.config)&&n.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):o.Ld}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${c.length} ${1===c.length?"asset":"assets"} ·
              ${br(h)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${c}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Or(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showCheckSimilar=${f}
            .selectMode=${f}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${v}
            .selectionFull=${b}
            .maxSelection=${On}
            .previewOpen=${!0}
            .searchRunIds=${this._similarRunIds}
            .searchActiveIds=${this._similarActiveIds}
            .searchResults=${this._similarResults}
            .directory=${this._allowFolderUpload}
            ?drag-active=${this._bodyDragOver}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div
          class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" ${De({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():o.dy`
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${()=>{this._previewFileId=null}}
              aria-label=${d("backToFileList","Back to file list")}
              title=${d("back","Back")}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <span class="preview-header-name" title=${p.name}
              >${p.name}</span
            >
            <div class="preview-header-actions">
              ${p.previewUrl||p.type.startsWith("video/")&&p.file?o.dy`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=p.previewUrl,this._fullscreenVideoFile=p.type.startsWith("video/")&&p.file?p.file:null,this._fsZoom=1,requestAnimationFrame((()=>this.requestUpdate()))}}
                      title=${d("fullscreen","Fullscreen")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  `:o.Ld}
              <button
                @click=${()=>{this._previewFileId=null}}
                title=${d("close","Close")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${y?o.dy`
                <div class="preview-tabs" role="tablist">
                  <button
                    class="preview-tab ${"details"===w?"active":""}"
                    role="tab"
                    aria-selected=${"details"===w}
                    @click=${()=>{this._previewPanelTab="details"}}
                  >
                    ${d("details","Details")}
                  </button>
                  <button
                    class="preview-tab ${"similar"===w?"active":""}"
                    role="tab"
                    aria-selected=${"similar"===w}
                    @click=${()=>{this._previewPanelTab="similar"}}
                  >
                    <span>${d("similarTab","Similar")}</span>${x&&x.length>0?o.dy`<span class="preview-tab-count">${x.length}</span>`:o.Ld}
                  </button>
                </div>
              `:o.Ld}
          ${"similar"===w?this._renderSimilarPanel(p,x??[]):o.dy`
          <div class="preview-details-body">
          ${p.type.startsWith("video/")&&p.file?o.dy`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(p.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${0===c.indexOf(p)}
                    @click=${()=>this._navigatePreview(c,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${c.indexOf(p)===c.length-1}
                    @click=${()=>this._navigatePreview(c,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `:p.previewUrl?o.dy`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${p.previewUrl}
                      alt=${p.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${0===c.indexOf(p)}
                    @click=${()=>this._navigatePreview(c,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${c.indexOf(p)===c.length-1}
                    @click=${()=>this._navigatePreview(c,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `:o.dy`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${yr(p)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Cr(u)}
                      alt="${u?d("extFile","{{ext}} file",{ext:u}):d("file","File")}"
                      @error=${e=>{const t=e.target,i=Pr();!t.dataset.fallback&&t.src!==i&&(t.dataset.fallback="1",t.src=i)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${0===c.indexOf(p)}
                    @click=${()=>this._navigatePreview(c,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${c.indexOf(p)===c.length-1}
                    @click=${()=>this._navigatePreview(c,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `}
          ${this._metadataSchema&&null!=(a=this.config)&&a.metadataConfig?o.dy`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${u}${p.size?` \xb7 ${br(p.size)}`:""}${"\u2014"!==this._previewDims?` \xb7 ${this._previewDims}`:""}
                </div>
              </div>`:o.Ld}
          ${this._metadataSchema&&null!=(l=this.config)&&l.metadataConfig?o.dy`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                  @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${this._previewMeta(p)}
                    .config=${this._effectiveMetadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                    .taxonomyService=${this._taxonomyService}
                    .ultratags=${this._ultratagsService}
                    .defaultLanguage=${this._metadataDefaultLanguage}
                    .taxonodes=${p.taxonodes??null}
                    .resolvedSchema=${this._resolvedSchemaFor(p)}
                    .dependencies=${this._metadataDependencies}
                  ></sfx-metadata-form>
                </div>
              `:o.dy`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                    @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                  >
                    <span>${d("fileInfo","File info")}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div
                    class="preview-file-info-body ${this._fileInfoOpen?"open":""}"
                  >
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${d("fileName","File name")}</div>
                      <div class="preview-file-info-val">
                        ${p.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${d("type","Type")}</div>
                      <div class="preview-file-info-val">${u}</div>
                    </div>
                    ${p.size?o.dy`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${d("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${br(p.size)}
                            </div>
                          </div>
                        `:o.Ld}
                    ${"\u2014"!==this._previewDims?o.dy`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${d("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:o.Ld}
                  </div>
                </div>
              `}
          </div>
              `}
          `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return 0===t.length?o.dy`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:o.dy`
      <div class="psim-body">
        ${t.map((e=>{const t=Math.round(100*e.score);return o.dy`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${e.score>=.85?"high":""}">${t}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(e.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${e.url?o.dy`<img src=${e.url} alt="" />`:o.Ld}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(e)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(e)}</div>
              </div>
            </div>
          `}))}
      </div>
    `}_renderSettingsPanel(){var e;const t=this._storeCtrl.state.t,i=[...this._storeCtrl.state.files.values()],r=i.some((e=>"image"===yr(e)&&!zr(e.type))),s=i.some((e=>"pdf"===yr(e))),n=i.some((e=>"vid"===yr(e))),a=null==(e=this.config)?void 0:e.uploadSettings,l=!!a&&!0===a.showResumableSwitcher,d=e=>{switch(e){case"auto":return t("resolutionAuto","Auto");case"mobile":return t("resolutionMobile","Mobile");case"tablet":return t("resolutionTablet","Tablet");case"desktop":return t("resolutionDesktop","Desktop");case"hq":return t("resolutionHq","HQ");case"sample":return t("resolutionSample","Sample")}},c=e=>t=>{const i=parseInt(t.target.value,10);e(Number.isFinite(i)?i:0)};return o.dy`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name"
          >${t("uploadSettings","Upload settings")}</span
        >
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${t("close","Close")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="settings-body">
        ${r||s?o.dy`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
                ${t("imageSettings","Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${t("resizeImages","Resize Images")}</span>
                <span class="info-i" data-tip=${t("resizeImagesInfo","Scale down large images to the maximum dimensions below before uploading.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResize?"on":""}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${t("resizeImages","Resize Images")}
                  @click=${()=>{this._setResize=!this._setResize}}
                ></button>
              </div>
              <div class="sfields ${this._setResize?"":"dep-off"}">
                <div class="sfield">
                  <label>${t("maxWidth","Max Width")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${c((e=>this._setMaxW=e))}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${t("maxHeight","Max Height")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${c((e=>this._setMaxH=e))}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:o.Ld}

        ${n?o.dy`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                ${t("videoSettings","Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${t("transcodeVideo","Transcode video")}</span>
                <span class="info-i" data-tip=${t("transcodeVideoInfo","Re-encode videos into adaptive streaming formats for smoother playback.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setTranscode?"on":""}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${t("transcodeVideo","Transcode video")}
                  @click=${()=>{this._setTranscode=!this._setTranscode,this._setTranscode||(this._setResolutionOpen=!1)}}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode?"":"dep-off"} ${this._setResolutionOpen?"open":""}"
              >
                <label>${t("resolution","Resolution")}</label>
                <div
                  class="ssel"
                  @click=${()=>{this._setResolutionOpen=!this._setResolutionOpen}}
                >
                  <span>${d(this._setResolution)}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                ${this._setResolutionOpen&&this._setTranscode?o.dy`
                      <div class="smenu">
                        ${Tn.map((e=>o.dy`
                            <div
                              class="sopt ${e===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=e,this._setResolutionOpen=!1}}
                            >
                              ${d(e)}
                              ${e===this._setResolution?o.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:o.Ld}
                            </div>
                          `))}
                      </div>
                    `:o.Ld}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${t("protocols","Protocols")}</label>
                ${jn.map((e=>o.dy`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=e}}
                    >
                      <span class="sradio ${this._setProtocol===e?"on":""}"></span>
                      <span class="sradio-lbl">${(e=>{if("hls"===e)return t("protocolHls","HLS")})(e)}</span>
                    </div>
                  `))}
              </div>
            `:o.Ld}

        ${l?o.dy`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${t("resumeUploads","Resume uploads")}</span>
                <span class="info-i" data-tip=${t("resumeUploadsInfo","Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="sbeta" data-tip=${t("betaInfo","Beta functionality \u2014 you may experience performance issues in some cases")}>${t("beta","Beta")}</span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?"on":""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${t("resumeUploads","Resume uploads")}
                  @click=${()=>{var e;this._setResumable=!this._setResumable,null==(e=this._engine)||e.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:o.Ld}
      </div>
    `}_navigatePreview(e,t){var i;const o=e.findIndex((e=>e.id===this._previewFileId))+t;if(o>=0&&o<e.length){const t=null==(i=this.shadowRoot)?void 0:i.querySelector(".preview-image[controls]");t&&(t.pause(),t.removeAttribute("src"),t.load()),this._previewFileId=e[o].id}}_renderBody(){var e,t,i,r,s,n,a,l,d,c,p,u,h;const f=this._storeCtrl.state,g=f.t,m=[...f.files.values()],v=m.filter((e=>"idle"===e.status||"queued"===e.status||"error"===e.status||"failed"===e.status)),b=this._phase,x=Or(f.restrictions),y=m.length>0,w=!(null==(t=null==(e=this.config)?void 0:e.similarityCheck)||!t.enabled),_=m.filter((e=>"image"===yr(e)&&!zr(e.type)&&!this._similarResults.has(e.id))).map((e=>e.id)),k=Math.min(_.length,On),S=k>0&&this._similarSelectedIds.size>=k,$=this._similarSelectedIds.size>=On;return o.dy`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-locate=${this._onFileLocate}
        @file-copy-cdn=${this._onFileCopyCdn}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @require-metadata=${this._onRequireMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @check-similar-enter=${this._onCheckSimilarEnter}
        @check-similar-cancel=${this._onCheckSimilarCancel}
        @check-similar-run=${this._onCheckSimilarRun}
        @check-similar-single=${this._onCheckSimilarSingle}
        @similar-toggle=${this._onSimilarToggle}
        @similar-select-all=${this._onSimilarSelectAll}
        @check-similar-search-cancel=${this._onSimilarSearchCancel}
        @similar-open-results=${this._onSimilarOpenResults}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @primary-action=${this._onPrimaryAction}
        @connector-files-selected=${this._onConnectorFilesSelected}
        @connector-close=${this._onConnectorClose}
        @url-submit=${this._onUrlSubmit}
        @url-cancel=${this._onUrlCancel}
        @camera-capture=${this._onCameraCapture}
        @camera-cancel=${this._onCameraCancel}
        @screencast-capture=${this._onScreenCastCapture}
        @screencast-cancel=${this._onScreenCastCancel}
      >
        <div
          class="body ${y?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${y?this._onBodyDragEnter:o.Ld}
          @dragover=${y?this._onBodyDragOver:o.Ld}
          @dragleave=${y?this._onBodyDragLeave:o.Ld}
          @drop=${y?this._onBodyDrop:o.Ld}
        >
          ${"inline"!==(null==(i=this.config)?void 0:i.mode)||null==(r=this.config)||!r.inlineHeader||this._previewFileId||"uploading"===b||"complete"===b||this._isReviewing?o.Ld:this._renderInlineHeader(this.config.inlineHeader)}
          ${this._isReviewing?o.dy`
                <sfx-last-upload-review
                  .t=${g}
                  .files=${this._reviewFiles}
                  .showLocateButton=${(null==(s=this.config)?void 0:s.showLocateButton)??!1}
                  .showCopyCdnButton=${(null==(n=this.config)?void 0:n.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:"complete"===b?o.dy`
                <sfx-success-card
                  .t=${g}
                  .primaryLabel=${g("done","Done")}
                  .fileCount=${m.filter((e=>"complete"===e.status)).length}
                  .totalSize=${m.filter((e=>"complete"===e.status&&!e.alreadyExisted)).reduce(((e,t)=>e+(t.size||0)),0)}
                  .thumbnails=${m.filter((e=>"complete"===e.status&&e.previewUrl)).reverse().map((e=>e.previewUrl))}
                  .failedFiles=${m.filter((e=>"failed"===e.status)).map((e=>({id:e.id,name:e.name,error:e.error||"Upload failed"})))}
                  .alreadyExistedCount=${m.filter((e=>"complete"===e.status&&e.alreadyExisted)).length}
                  .showMinimize=${!(null==(a=this.config)||!a.minimizeOnUpload)&&"inline"!==(null==(l=this.config)?void 0:l.mode)}
                  .canLocate=${!!this._soleLocatableFile(m)}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                  @locate-file=${this._onSuccessCardLocate}
                ></sfx-success-card>
              `:"uploading"===b?this._renderUploadOverlay(m):o.dy`
                ${y?o.Ld:o.dy`<sfx-drop-zone
                        .t=${g}
                        .compact=${y}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${x}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${(null==(d=this.config)?void 0:d.sourcesLayout)??"pills"}
                        .mode=${(null==(c=this.config)?void 0:c.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?o.dy`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${g("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${g("viewLastUpload","View last upload")}
                          </button>`:o.Ld}`}
                ${y?this._previewFileId||this._showSettings?this._renderPreviewLayout(m):o.dy`
                        <div class="asset-count">
                          ${m.length}
                          ${1===m.length?"file":"files"} ·
                          ${br(m.reduce(((e,t)=>e+(t.size||0)),0))}
                        </div>
                        <sfx-file-list
                          .t=${g}
                          .files=${[...m].reverse()}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${x}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showCheckSimilar=${w}
                          .selectMode=${w}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${S}
                          .selectionFull=${$}
                          .maxSelection=${On}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:o.Ld}
              `}
        </div>

        ${y&&"complete"!==b&&"uploading"!==b?o.dy`
              <sfx-actions-bar
                .t=${g}
                .uploadState=${"idle"}
                .fileCount=${v.length}
                .totalSize=${v.reduce(((e,t)=>e+(t.size||0)),0)}
                .failedCount=${m.filter((e=>"failed"===e.status||"error"===e.status)).length}
                .completedCount=${m.filter((e=>"complete"===e.status)).length}
                .uploadProgress=${f.totalProgress??0}
                .showFillMetadata=${!!((null==(p=this.config)?void 0:p.showFillMetadata)??(null==(u=this.config)?void 0:u.metadataConfig))}
                .requireMetadataFirst=${this._hasMetadataIssues}
                .showCheckSimilar=${!1}
                .selectMode=${w&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${k}
                .allSelected=${S}
              ></sfx-actions-bar>
            `:o.Ld}
        ${this._showUrlDialog?o.dy`<sfx-url-dialog .t=${g}></sfx-url-dialog>`:o.Ld}
        ${this._showCameraDialog?o.dy`<sfx-camera-dialog .t=${g}></sfx-camera-dialog>`:o.Ld}
        ${this._showScreenCastDialog?o.dy`<sfx-screen-cast-dialog .t=${g}></sfx-screen-cast-dialog>`:o.Ld}
        ${this._activeConnector&&null!=(h=this.config)&&h.connectors?o.dy`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${"google-drive"===this._activeConnector&&this.config.connectors.googlePicker?o.dy`
                        <sfx-google-picker-view
                          .t=${g}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:Fn.has(this._activeConnector)?o.dy`
                          <sfx-search-provider-browser
                            .t=${g}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:o.dy`
                          <sfx-provider-browser
                            .t=${g}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-provider-browser>
                        `}
                </div>
              </div>
            `:o.Ld}
        ${this._bulkMetadataOpen&&this._metadataSchema?o.dy`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter((e=>Mn._MODIFIABLE_STATUSES.has(e.status)))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:o.Ld}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter((e=>e.previewUrl||e.type.startsWith("video/")&&e.file)).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex((e=>e.id===this._previewFileId));if(-1===i)return;const o=i+e;if(o>=0&&o<t.length){const e=t[o];this._fullscreenPreviewUrl=e.previewUrl,this._fullscreenVideoFile=e.type.startsWith("video/")&&e.file?e.file:null,this._previewFileId=e.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},Mn.styles=o.iv`
    :host {
      display: block;
      height: inherit;
      font-family: var(
        --sfx-up-font,
        "Inter",
        system-ui,
        -apple-system,
        sans-serif
      );
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: "Inter", system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-modal-max-width: 1100px;
      --sfx-up-bulk-modal-width: 980px;
      --sfx-up-bulk-modal-height: 82vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      overflow: hidden;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: var(--sfx-up-modal-max-width, 1100px);
      height: var(--sfx-up-max-height, 88vh);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      animation: modalIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* --- Header --- */
    .header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      background: var(--sfx-up-bg, #fff);
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      /* Lift the header (and its overflowing children, e.g. the regional
         settings dropdown) above the body. The body is position:relative,
         so without this its subtree — including the "View last upload" pill
         — would paint on top of the dropdown regardless of the dropdown's
         own z-index. */
      position: relative;
      z-index: 2;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .header-icon-done {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .header-icon svg {
      width: 16px;
      height: 16px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      flex: 1;
    }

    .header-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      /* Transparent by default — the filled background appears only on hover. */
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background 0.15s,
        color 0.15s;
      flex-shrink: 0;
    }

    .header-btn svg {
      width: 16px;
      height: 16px;
    }

    .header-btn:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .header-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .header-btn-back {
      margin-right: 12px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      width: 32px;
      height: 32px;
      position: relative;
    }

    .header-btn-back:hover {
      background: #dbeafe;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .header-btn-back::after {
      content: "Back to Asset Picker";
      position: absolute;
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: var(--sfx-up-text, #1e293b);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      padding: 6px 12px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }

    .header-btn-back:hover::after {
      opacity: 1;
    }

    .header-btn-close {
      /* 8px gap from the settings gear to its left (when present). The button
         group is right-aligned by .header-title's flex:1, not by an auto
         margin — so this fixed margin only adds the gap, keeping the close
         button flush to the right padding edge. */
      margin-left: 8px;
    }

    /* Regional-settings sits to the left of the gear; same 8px gap rule. */
    .header-regional {
      margin-right: 8px;
    }

    /* Settings gear sits just left of the close button (title's flex:1 pushes
       the button group to the right). No right margin so that in inline mode —
       where there is no close button — the gear lines up with the right padding
       edge, matching the preview panel's close button below it. The gap to the
       close button (when present) comes from .header-btn-close's margin-left. */
    .header-btn-settings {
      margin-right: 0;
    }
    /* Active (settings open): only the icon turns brand-blue — no persistent
       background fill. The fill still appears on hover, like every other icon. */
    .header-btn-settings.on {
      background: none;
      color: var(--sfx-up-primary, #2563eb);
    }
    .header-btn-settings.on:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* --- Responsive header buttons --- */
    @media (max-width: 768px) {
      .header-btn {
        width: 28px;
        height: 28px;
      }
      .header-btn svg {
        width: 14px;
        height: 14px;
      }
    }
    @media (max-width: 480px) {
      .header-btn {
        width: 26px;
        height: 26px;
      }
    }

    /* --- Content wrapper (holds body + actions bar) --- */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    /* --- Body --- */
    .body {
      flex: 1;
      overflow: hidden;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      gap: 4px;
      min-height: 0;
      min-width: 0;
      background: var(--sfx-up-bg, #fff);
      /* Establish a stacking context so descendants like the
         .last-upload-pill (z-index: 10) stay contained beneath the
         header (z-index: 2) instead of leaking into the modal-level
         stack and painting over the regional-settings dropdown. */
      position: relative;
      z-index: 0;
    }

    .file-grid-side {
      min-width: 0;
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    /* In preview mode, keep body blue but mask the preview side white */
    .body.body-drag-over.has-preview::after {
      display: none;
    }

    .body.body-drag-over .file-grid-side {
      position: relative;
    }

    .body.body-drag-over .file-grid-side::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.body-drag-over .file-grid-header {
      background: transparent;
    }

    .body.body-drag-over .preview-divider,
    .body.body-drag-over .preview-panel {
      background: var(--sfx-up-bg, #fff);
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files.has-preview {
      padding-right: 0;
    }

    @keyframes bodyReveal {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    /* "View last upload" pill — shown on the drop-zone screen when
       sessionStorage contains a previous batch */
    .last-upload-pill {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
    .last-upload-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    .last-upload-pill:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .last-upload-pill svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      --sfx-inline-pad: 24px;
      border: none;
      border-radius: 0;
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      height: 100%;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: none;
      animation: inlineIn 0.25s ease;
    }

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 24px;
    }
    .inline-header-top {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .inline-header-accent {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .inline-header-accent .accent-line {
      width: 32px;
      height: 3px;
      border-radius: 2px;
      background: var(--sfx-up-primary);
    }
    .inline-header-accent span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: var(--sfx-up-primary);
    }
    .inline-header-title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      letter-spacing: -0.4px;
      max-width: 770px;
    }
    .inline-header-desc {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #6b7280);
      line-height: 1.5;
      max-width: 770px;
    }

    .inline .content {
      max-width: var(--sfx-up-content-max-width, 1600px);
      align-self: center;
      width: 100%;
    }

    /* When the preview sidebar is open, let the layout use the full
       browser width so the panel sits flush against the right edge. */
    .inline .content:has(.has-preview) {
      max-width: none;
    }

    .inline.no-files .content {
      flex: 1;
      min-height: 0;
    }

    /* Inline: body fits within the remaining space after the header;
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1;
      overflow: hidden;
      padding: 0;
      min-height: 0;
    }
    .inline .body.has-files {
      flex: 1;
      overflow: hidden;
    }
    .inline .asset-count {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .file-grid-header {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .body > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
      --sfx-grid-pad-r: var(--sfx-inline-pad);
    }
    .inline .file-grid-side > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
    }

    /* --- Preview split layout --- */
    /* Modal grid view: bigger tiles (≈4 per row at the 1100px modal width) so
       the Details / Check similar buttons fit with their text labels instead of
       collapsing to icons (a tile must stay wider than the 208px icon cutoff in
       file-item.ts). Scoped to the non-preview modal grid only — inline mode and
       the preview split layout keep their own grid-min, and the file-list
       ≤768/≤440 column breakpoints override grid-template-columns entirely, so
       they're unaffected. */
    .modal-card .body > sfx-file-list {
      --sfx-up-grid-min: 220px;
    }

    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 68;
      min-width: 0;
      min-height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .preview-layout .file-grid-side::after {
      display: none;
    }

    .preview-layout sfx-file-list {
      padding-right: 6px;
      --sfx-scrollbar-w: 14px;
      --sfx-scrollbar-inset-left: 2px;
      --sfx-scrollbar-inset-right: 6px;
    }

    /* NOTE: scrollbar border-radius is hardcoded to 6px in sfx-file-list */

    .file-grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--sfx-up-bg, #fff);
    }

    .file-grid-header-text {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
    }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 0;
    }

    .preview-divider {
      width: 9px;
      flex-shrink: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-divider::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      /* Sit flush against the panel's left edge so the header's
         border-bottom continues from this line without a gap. */
      right: 0;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: "";
      width: 3px;
      height: 28px;
      border-radius: 2px;
      background: var(--sfx-up-border, #d0d7e2);
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 1;
    }

    .preview-divider:hover::after,
    .preview-layout.resizing .preview-divider::after {
      opacity: 1;
    }

    .preview-layout.resizing {
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-layout.resizing * {
      pointer-events: none;
    }

    .preview-layout.resizing .preview-divider {
      pointer-events: auto;
    }

    .preview-panel {
      flex: 32;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
    }

    .preview-panel::-webkit-scrollbar,
    .preview-details-body::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track,
    .preview-details-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb,
    .preview-details-body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover,
    .preview-details-body::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      /* Symmetric vertical padding so the row is evenly centered; right
         padding matches the main header's (24px) so the panel's close
         button lines up vertically with the header's close-all button. */
      padding: 12px 24px 12px 16px;
      flex-shrink: 0;
      box-sizing: border-box;
      min-height: 54px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }
    /* Settings panel only: right padding 16px so the close ✕ lines up with the
       toggles below it (settings-body padding is 16px). The file-preview header
       keeps 24px. */
    .preview-panel-header.settings-header {
      padding-right: 16px;
    }

    /* Mobile back-arrow — hidden by default, shown at <=768px to give
       a clear "return to file list" affordance on small screens.
       Use !important because .preview-panel-header button below has
       higher specificity and would otherwise force display: flex. */
    .preview-panel-header button.preview-back-btn {
      display: none;
    }
    @media (max-width: 768px) {
      .preview-panel-header button.preview-back-btn {
        display: inline-flex;
      }
    }

    .preview-header-actions {
      display: flex;
      align-items: center;
      /* 8px to match the header's gear↔close gap, so the second icon
         (fullscreen) lines up vertically with the header's gear. */
      gap: 8px;
      flex-shrink: 0;
    }

    .preview-header-name {
      flex: 1;
      min-width: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      font-family: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Mirror the main header's close-all button (.header-btn) so the panel's
       close button matches it exactly and aligns on the same vertical line. */
    .preview-panel-header button {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      /* Transparent by default — filled background appears only on hover. */
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition:
        background 0.15s,
        color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    /* --- Details / Similar tab switcher (preview side-panel) --- */
    .preview-tabs {
      display: flex;
      align-items: center;
      gap: 4px;
      /* Symmetric vertical padding so the row is evenly centered. */
      padding: 8px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
    }
    .preview-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      padding: 0 12px;
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      color: var(--sfx-up-text-muted, #5b6e82);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.15s, border-color 0.15s;
    }
    .preview-tab:hover {
      color: var(--sfx-up-text, #37414b);
    }
    .preview-tab.active {
      color: var(--sfx-up-primary, #2563eb);
      border-bottom-color: var(--sfx-up-primary, #2563eb);
    }
    .preview-tab-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Equal width + height so single-digit counts render as a perfect
         circle. Padding stays out of the way; for ≥4-digit counts the
         min-width grows but the radius keeps the ends rounded. */
      box-sizing: border-box;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      /* Filled chip: brand-blue background with white text. Stays the same
         on the active tab — only the underline and tab text colour change. */
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      line-height: 1;
    }

    /* --- Details tab body --- */
    /* Mirrors .psim-body's layout role: takes the remaining height in the
       .preview-panel flex column and scrolls internally, so the header +
       tabs stay pinned. Keeps Details and Similar behaviour identical.
       Scrollbar styling is shared with .preview-panel above. */
    .preview-details-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
    }

    /* --- Similar-assets panel body --- */
    /* Always exactly 2 cards per row, regardless of how many similar there are
       or how wide the panel is dragged — consistent, never a lone ballooned
       card or a single column. minmax(0, 1fr) lets columns shrink cleanly. */
    .psim-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 4px 16px 16px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: max-content;
      gap: 12px;
      align-content: start;
    }
    /* Identical to .tile in file-item.ts. */
    .psim-card {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }
    /* Identical to .preview in file-item.ts (checker bg + 16/10). */
    .psim-iw {
      position: relative;
      aspect-ratio: 16 / 10;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 10px 10px 0 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .psim-iw img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .psim-score {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 2;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .psim-score.high {
      color: var(--sfx-up-success, #15803d);
    }
    .psim-open {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 2;
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* Revealed on card hover (keyboard focus also reveals it). */
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
    .psim-card:hover .psim-open,
    .psim-open:focus-visible {
      opacity: 1;
      transform: scale(1);
    }
    .psim-open svg {
      width: 13px;
      height: 13px;
    }
    /* Identical to .info in file-item.ts. */
    .psim-foot {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }
    .psim-foot-name {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text, #111827);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .psim-foot-meta {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #5b6e82);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
    .psim-empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--sfx-up-text-muted, #94a3b8);
      padding: 40px;
      text-align: center;
    }
    .psim-empty-ic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .psim-empty-ic svg {
      width: 22px;
      height: 22px;
    }
    .psim-empty b {
      color: var(--sfx-up-text-secondary, #475569);
      font-size: 16px;
      font-weight: 500;
    }
    .psim-empty span {
      font-size: 14px;
    }

    /* --- Upload settings panel (global) --- */
    /* overflow:visible (not auto) so a first-row [data-tip] tooltip can extend
       above the row without being clipped — vertical scrolling, when the
       content is taller than the panel, is handled by the parent .preview-panel
       (which already scrolls). Horizontal overflow is bounded by the tooltip's
       own max-width (≤ row width), so nothing escapes the panel sideways. */
    .settings-body {
      flex: 1;
      min-height: 0;
      overflow: visible;
      padding: 8px 16px 16px 16px;
    }
    .sgroup-title {
      display: flex;
      align-items: center;
      gap: 8px;
      /* Design token: font-medium · 16/24, color main/foreground. */
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      margin: 12px 0 16px;
    }
    .sgroup-title-spaced {
      margin-top: 28px;
    }
    .sgroup-title svg {
      width: 20px;
      height: 20px;
      color: #8b9cae;
    }
    .srow {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      /* Positioning context for the [data-tip] tooltip so it centres inside the
         row (never wider than the row → never clipped by the panel edges). */
      position: relative;
    }
    .srow-spaced {
      margin-top: 24px;
    }
    .srow-lbl {
      font-size: 16px;
      color: var(--sfx-up-text, #1e293b);
    }
    .srow-spacer {
      flex: 1;
    }
    /* Info icon (circle-"i" SVG) — hover shows a styled tooltip (see [data-tip]
       below). Per design: 18.33×18.33, fill #8B9CAE. */
    .info-i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18.33px;
      height: 18.33px;
      color: #8b9cae;
      cursor: help;
      flex-shrink: 0;
    }
    .info-i svg {
      width: 100%;
      height: 100%;
    }
    /* "Beta" badge next to the Resume uploads label — per design-system specs
       (corner-radius-15, status-success-15 border, emerald-100 bg, spacers
       05/2 padding). Token fallbacks are hardcoded since those CSS vars aren't
       defined in this project. */
    .sbeta {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 24px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid rgba(0, 167, 82, 0.15);
      background: #d0fae5;
      color: #00a752;
      /* Design token: font-normal · 14/20. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      cursor: help;
      flex-shrink: 0;
    }
    /* Styled hover tooltip for any [data-tip] in the settings panel (info "i"
       chips and the Beta pill). Matches the design-system tooltip: light
       "main/secondary" surface, dark "main/foreground" text, shadow-sm — a
       plain rounded rectangle (no arrow). Wraps long text. Replaces the native
       title so it shows instantly and reads the same everywhere there's an info
       icon. */
    .settings-body [data-tip]::after {
      content: attr(data-tip);
      position: absolute;
      bottom: calc(100% + 8px);
      /* Anchored to the row (not the icon) and centred within it, capped at the
         row width — so it can never overflow the panel's left/right edges and
         get clipped by the scroll container. */
      left: 0;
      right: 0;
      margin-inline: auto;
      width: max-content;
      max-width: min(100%, 320px);
      white-space: normal;
      text-align: left;
      line-height: 1.5;
      background: var(--sfx-up-surface, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      font-size: 11.5px;
      font-weight: 500;
      font-style: normal;
      padding: 9px 12px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 60;
    }
    .settings-body [data-tip]:hover::after {
      opacity: 1;
      visibility: visible;
    }
    /* Switch toggle (matches the global brand primary). */
    .sw-toggle {
      width: 42px;
      height: 24px;
      border: none;
      padding: 0;
      border-radius: 999px;
      background: var(--sfx-up-border, #cbd5e1);
      position: relative;
      cursor: pointer;
      transition: background 0.15s;
      flex: 0 0 42px;
    }
    .sw-toggle::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: left 0.15s;
    }
    .sw-toggle.on {
      background: var(--sfx-up-primary, #2563eb);
    }
    .sw-toggle.on::after {
      left: 21px;
    }
    /* Dependent fields fade + disable when their parent toggle is off. */
    .dep-off {
      opacity: 0.45;
      pointer-events: none;
    }
    /* Input controls stay a fixed width, left-aligned (the toggles, by contrast,
       span the full width and pin to the right edge). */
    .sfields {
      display: flex;
      gap: 16px;
      margin: 4px 0;
      max-width: 520px;
    }
    .sfield {
      flex: 1;
      min-width: 0;
      position: relative;
    }
    .sfield-block {
      margin-bottom: 24px;
      max-width: 520px;
    }
    .sfield label {
      display: block;
      /* Design token: font-normal · 14/20, color main/secondary-foreground. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #475569);
      margin-bottom: 6px;
    }
    /* The Protocols label sits 16px above its radio list (matches the 16px gap
       between the radio rows); all other field labels use the 6px base above. */
    .sfield-radios label {
      margin-bottom: 16px;
    }
    .sinp {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      transition: border-color 0.12s;
    }
    .sinp:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sinp input {
      border: none;
      background: none;
      outline: none;
      font: inherit;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      width: 100%;
      min-width: 0;
    }
    .sinp .sfx {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 600;
    }
    .ssel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
      transition: border-color 0.12s;
    }
    .ssel svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.15s;
    }
    .sfield.open .ssel {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sfield.open .ssel svg {
      transform: rotate(180deg);
    }
    .smenu {
      position: absolute;
      left: 0;
      right: 0;
      margin-top: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      z-index: 10;
    }
    .sopt {
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--sfx-up-text, #1e293b);
    }
    .sopt:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
    }
    .sopt.cur {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }
    .sopt svg {
      width: 15px;
      height: 15px;
    }
    .sradio-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .sradio {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid var(--sfx-up-border, #cbd5e1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 20px;
      transition: border-color 0.12s;
    }
    .sradio.on {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sradio.on::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
    }
    .sradio-lbl {
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-doc-wrap {
      position: relative;
      height: 332px;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-doc-wrap.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-doc-wrap.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-doc-wrap.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-doc-wrap.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-doc-wrap.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-doc-wrap.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-doc-wrap.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-doc-wrap.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-doc-wrap.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-doc-wrap.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-doc-wrap.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-doc-wrap.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-doc-wrap.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

    .preview-doc-type-img {
      max-width: 120px;
      max-height: 120px;
      object-fit: contain;
    }

    .preview-img-wrap {
      position: relative;
      width: 420px;
      height: 332px;
      max-width: 100%;
      flex-shrink: 0;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--sfx-up-checker-bg);
      background-image: linear-gradient(
          45deg,
          var(--sfx-up-checker-tile) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }

    .preview-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border: none;
    }

    .preview-media-area {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: #fff;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
      color: var(--sfx-up-text, #374151);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 20px;
      height: 20px;
    }

    .preview-nav.prev {
      left: 10px;
    }
    .preview-nav.next {
      right: 10px;
    }

    .preview-nav:disabled {
      opacity: 0.35;
      cursor: default;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-nav:disabled:hover {
      transform: translateY(-50%);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-meta-list {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .preview-metadata {
      padding: 0 0 16px;
    }

    .preview-file-info {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- File info table (no-metadata fallback) --- */
    .preview-file-info-panel {
      padding: 0 16px;
    }

    .preview-file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
    }

    .preview-file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.2s ease;
    }

    .preview-file-info-header.open svg {
      transform: rotate(180deg);
    }

    .preview-file-info-body {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.25s ease;
    }

    .preview-file-info-body.open {
      max-height: 300px;
    }

    .preview-file-info-row {
      display: flex;
      align-items: baseline;
      padding: 10px 0;
    }

    .preview-file-info-key {
      width: 110px;
      flex-shrink: 0;
      font-size: 13px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-file-info-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* --- Upload overlay (in-modal) --- */
    .upload-overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 8px;
      padding: 32px 24px;
      position: relative;
      animation: fadeUp 0.3s ease both;
    }

    .upload-overlay-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid var(--sfx-up-border, #e2e8f0);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 8px;
    }

    .upload-overlay-percent {
      font-size: 40px;
      font-weight: 700;
      color: var(--sfx-up-primary, #2563eb);
      line-height: 1;
    }

    .upload-overlay-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-subtitle {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
    }

    .upload-overlay-bar {
      width: 240px;
      height: 6px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .upload-overlay-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .upload-overlay-minimize {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-minimize:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .upload-overlay-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .upload-overlay-cancel {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-cancel:hover {
      border-color: var(--sfx-up-error, #dc2626);
      color: var(--sfx-up-error, #dc2626);
    }

    /* --- Per-file controls inside the overlay --- */
    .upload-overlay-files {
      width: 100%;
      max-width: 520px;
      max-height: 240px;
      overflow-y: auto;
      margin: 0 0 16px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
    }

    .upload-overlay-file {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .upload-overlay-file:last-child {
      border-bottom: none;
    }

    .upload-overlay-file-info {
      flex: 1;
      min-width: 0;
    }

    .upload-overlay-file-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .upload-overlay-file-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .upload-overlay-file-bar {
      flex: 1;
      height: 3px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 2px;
      overflow: hidden;
    }

    .upload-overlay-file-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .upload-overlay-file-bar-fill.muted {
      background: var(--sfx-up-text-muted, #94a3b8);
    }

    .upload-overlay-file-pct {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      min-width: 32px;
      text-align: right;
    }

    .upload-overlay-file-actions {
      display: flex;
      gap: 4px;
      flex-shrink: 0;
    }

    .upload-overlay-file-btn {
      width: 26px;
      height: 26px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      padding: 0;
      transition: background 0.15s, color 0.15s;
    }

    .upload-overlay-file-btn:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-file-btn.del:hover {
      color: var(--sfx-up-error, #dc2626);
    }

    .upload-overlay-file-btn.paused {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn.paused:hover {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn svg {
      width: 14px;
      height: 14px;
    }

    .upload-header {
      justify-content: space-between;
    }

    .upload-header .float-actions button {
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .upload-header .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .upload-header .float-actions button svg {
      width: 16px;
      height: 16px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: calc(24px + var(--sfx-up-float-offset-y, 0px));
      right: calc(24px + var(--sfx-up-float-offset-x, 0px));
      z-index: 10000;
      width: 470px;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 2px 8px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      font-family: inherit;
      animation: floatSlideIn 0.3s ease both;
      transition: bottom 0.25s ease, right 0.25s ease;
    }

    .float-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .float-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-icon svg {
      width: 14px;
      height: 14px;
    }

    .float-icon.done {
      background: #f0fdf4;
      color: #22c55e;
    }

    .float-icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .float-icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
    }

    .float-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .float-subtitle {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-actions {
      display: flex;
      gap: 4px;
    }

    .float-actions button {
      width: 26px;
      height: 26px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .float-actions button svg {
      width: 14px;
      height: 14px;
    }

    .float-progress {
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-progress-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .float-progress-label {
      font-size: 12px;
      color: var(--sfx-up-text-secondary, #475569);
    }

    .float-progress-pct {
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
    }

    .float-progress-pct.done {
      color: #22c55e;
    }
    .float-progress-pct.warn {
      color: #f59e0b;
    }
    .float-progress-pct.error {
      color: #ef4444;
    }

    .float-bar {
      height: 4px;
      background: var(--sfx-up-border, #e8edf5);
      border-radius: 2px;
      overflow: hidden;
    }

    .float-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .float-bar-fill.done {
      background: #22c55e;
    }
    .float-bar-fill.warn {
      background: #f59e0b;
    }
    .float-bar-fill.error {
      background: #ef4444;
    }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child {
      border-bottom: none;
    }

    .float-item-thumb {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
    }

    .float-item-thumb svg {
      width: 16px;
      height: 16px;
    }

    .float-item-info {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .float-item-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .float-item-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-item-done {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #f0fdf4;
      color: #22c55e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-item-done svg {
      width: 12px;
      height: 12px;
    }

    .float-item-done.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
    }

    .float-item-done.info svg {
      width: 14px;
      height: 14px;
    }

    .float-info-note {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 14px 10px;
      padding: 6px 10px;
      border-radius: 8px;
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 12px;
      line-height: 16px;
    }

    .float-info-note svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
    }

    .float-item-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    .float-item-error-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .float-item-error-icon {
      width: 16px;
      height: 16px;
      color: #ef4444;
      flex-shrink: 0;
      cursor: pointer;
    }

    .float-item-tooltip {
      display: none;
      position: absolute;
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: #1e293b;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
      box-shadow:
        0 2px 12px rgba(0, 0, 0, 0.12),
        0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .float-item-error-wrap:hover .float-item-tooltip {
      display: block;
    }

    .float-item-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .float-item-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .float-item-retry svg {
      width: 16px;
      height: 16px;
    }

    .float-item-retry:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    @keyframes floatSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
        0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 760px;
      height: 78vh;
      max-height: 720px;
      min-height: 420px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes modalIn {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes inlineIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: var(--sfx-fs-z);
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s ease;
      cursor: zoom-in;
    }

    .fs-overlay.zoomed {
      cursor: grab;
      overflow: hidden;
    }

    .fs-overlay.zoomed.panning {
      cursor: grabbing;
    }

    .fs-overlay.zoomed .fs-img {
      max-width: none;
      max-height: none;
      width: auto;
      height: auto;
    }

    .fs-img {
      max-width: 92vw;
      max-height: 88vh;
      object-fit: contain;
      border-radius: 4px;
      user-select: none;
      -webkit-user-drag: none;
      transition: transform 0.25s ease;
    }

    .fs-overlay.panning .fs-img {
      transition: none;
    }

    .fs-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;
      z-index: var(--sfx-fs-controls-z);
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }

    .fs-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .fs-btn svg {
      width: 20px;
      height: 20px;
    }

    .fs-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--sfx-fs-controls-z);
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .fs-nav:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .fs-nav:disabled:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .fs-nav svg {
      width: 22px;
      height: 22px;
    }
    .fs-nav.prev {
      left: 20px;
    }
    .fs-nav.next {
      right: 20px;
    }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      padding: 6px 16px;
      border-radius: 8px;
      white-space: nowrap;
      z-index: 10001;
    }

    .preview-nav:focus-visible,
    .fs-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop {
        animation: none;
      }
      .modal-card {
        animation: none;
      }
      .inline {
        animation: none;
      }
      .fs-overlay {
        animation: none;
      }
      .body.has-files {
        animation: none;
      }
    }

    /* --- Responsive: Tablet & Mobile (≤ 768px) ---
       Take modal-card OUT of backdrop's flex centering and pin it
       directly to viewport. This bypasses any min-width:auto issues
       in the flex layout that were leaving content overflowing. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
      .inline {
        max-width: 100%;
        min-width: 0;
      }
      .connector-modal-backdrop {
        padding: 0;
        display: block;
      }
      .connector-modal {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-height: 0;
        border-radius: 0;
      }
      .header {
        padding: 12px 16px;
      }
      .header-icon {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      .header-icon svg {
        width: 14px;
        height: 14px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 16px;
      }
      .body.has-files {
        padding: 0 0 12px;
      }
      .body > sfx-file-list,
      .file-grid-side > sfx-file-list {
        --sfx-grid-pad-l: 12px;
        --sfx-grid-pad-r: 12px;
      }

      /* Mobile preview = fullscreen takeover. When a file is selected
         the file grid + divider get hidden and preview-panel fills the
         whole modal. Tapping close (X) in preview-header returns to
         the grid. */
      .preview-layout {
        flex-direction: column;
      }
      .preview-layout .file-grid-side,
      .preview-layout .preview-divider {
        display: none !important;
      }
      .preview-layout .preview-panel {
        flex: 1 1 100% !important;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        padding: 0;
      }

      .preview-topbar {
        padding: 8px 0;
      }

      .inline {
        --sfx-inline-pad: 16px;
        min-height: auto;
      }

      /* Bump fullscreen z-index stack on mobile: modal-card is now
         position:fixed which creates a new stacking context, so the
         overlay + controls must sit above it. */
      :host {
        --sfx-fs-z: 100000;
        --sfx-fs-controls-z: 100001;
      }

      /* Force fs-overlay to viewport-fill on mobile. Without these the
         shadow-DOM stacking + sibling modal-card was clipping it. */
      .fs-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
      }
      .fs-img {
        max-width: 92vw;
        max-height: 80vh;
      }
      /* Brighter, larger, tappable nav arrows + close toolbar on mobile.
         Default styling is too subtle (12% white) and gets lost over the
         dark overlay. */
      .fs-toolbar {
        top: 16px;
      }
      .fs-btn {
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-btn svg {
        width: 22px;
        height: 22px;
      }
      .fs-nav {
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-nav:disabled {
        opacity: 0.18;
        pointer-events: none;
      }
      .fs-nav svg {
        width: 24px;
        height: 24px;
      }
      .fs-nav.prev {
        left: 12px;
      }
      .fs-nav.next {
        right: 12px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) — tighter spacing on top of
       the fullscreen rules already applied at ≤768. */
    @media (max-width: 480px) {
      .header {
        padding: 10px 14px;
      }
      .header-icon {
        width: 26px;
        height: 26px;
        margin-right: 8px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 12px;
      }
      .body.has-files {
        padding: 0 0 8px;
      }

      .inline {
        --sfx-inline-pad: 12px;
        box-shadow: none;
      }
      .inline-header-title {
        font-size: 18px;
      }
    }

    /* --- Responsive: Landscape / short viewports (Nest Hub 1024×600,
       iPad mini landscape, laptops with address bar visible etc) ---
       Modal min-height 660 exceeds viewport; drop the min and expand the
       max so content gets every pixel available. Trim header/body padding
       so the available space is actually usable. */
    @media (max-height: 700px) {
      .modal-card {
        height: 96vh;
        max-height: 96vh;
      }
      .inline {
        min-height: auto;
      }
      .header {
        padding: 10px 20px;
      }
      .body {
        padding: 16px 20px;
      }
      /* Let the preview image scale down instead of forcing a
         340×240 crop — on a 1920×600 kiosk that hardcoded size
         looked tiny. Use a definite height so the inner image's
         max-height: 100% actually resolves; otherwise tall images
         (e.g. 52×984) render at intrinsic height and escape the
         panel. */
      .preview-img-wrap {
        width: min(420px, 60vw);
        height: min(280px, 55vh);
        max-width: 100%;
      }
    }
  `,Mn._FS_ZOOM_LEVELS=[1,2,3,4],Mn._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),Mn._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),Mn);En([(0,r.Cb)({attribute:!1})],Dn.prototype,"config"),En([(0,r.SB)()],Dn.prototype,"_isOpen"),En([(0,r.SB)()],Dn.prototype,"_activeConnector"),En([(0,r.SB)()],Dn.prototype,"_showUrlDialog"),En([(0,r.SB)()],Dn.prototype,"_showCameraDialog"),En([(0,r.SB)()],Dn.prototype,"_showScreenCastDialog"),En([(0,r.SB)()],Dn.prototype,"_similarSelectMode"),En([(0,r.SB)()],Dn.prototype,"_similarSelectedIds"),En([(0,r.SB)()],Dn.prototype,"_similarRunIds"),En([(0,r.SB)()],Dn.prototype,"_similarActiveIds"),En([(0,r.SB)()],Dn.prototype,"_similarResults"),En([(0,r.SB)()],Dn.prototype,"_previewPanelTab"),En([(0,r.SB)()],Dn.prototype,"_previewFileId"),En([(0,r.SB)()],Dn.prototype,"_previewDims"),En([(0,r.SB)()],Dn.prototype,"_fileInfoOpen"),En([(0,r.SB)()],Dn.prototype,"_splitPct"),En([(0,r.SB)()],Dn.prototype,"_showSettings"),En([(0,r.SB)()],Dn.prototype,"_setResize"),En([(0,r.SB)()],Dn.prototype,"_setMaxW"),En([(0,r.SB)()],Dn.prototype,"_setMaxH"),En([(0,r.SB)()],Dn.prototype,"_setTranscode"),En([(0,r.SB)()],Dn.prototype,"_setResolution"),En([(0,r.SB)()],Dn.prototype,"_setResolutionOpen"),En([(0,r.SB)()],Dn.prototype,"_setProtocol"),En([(0,r.SB)()],Dn.prototype,"_setResumable"),En([(0,r.SB)()],Dn.prototype,"_fullscreenPreviewUrl"),En([(0,r.SB)()],Dn.prototype,"_fullscreenVideoFile"),En([(0,r.SB)()],Dn.prototype,"_fsZoom"),En([(0,r.SB)()],Dn.prototype,"_bodyDragOver"),En([(0,r.SB)()],Dn.prototype,"_isMinimized"),En([(0,r.SB)()],Dn.prototype,"_isPillExpanded"),En([(0,r.SB)()],Dn.prototype,"_metadataSchema"),En([(0,r.SB)()],Dn.prototype,"_metadataDependencies"),En([(0,r.SB)()],Dn.prototype,"_regionalFilters"),En([(0,r.SB)()],Dn.prototype,"_bulkMetadataOpen"),En([(0,r.SB)()],Dn.prototype,"_bulkMetadataInitialFieldKey"),En([(0,r.SB)()],Dn.prototype,"_isReviewing"),En([(0,r.SB)()],Dn.prototype,"_reviewFiles"),En([(0,r.SB)()],Dn.prototype,"_hasStoredReview");let An=Dn},7346:(e,t,i)=>{i.d(t,{$:()=>s});var o=i(8556),r=i(8516);const s=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),e.type!==r.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[i]=t;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in i)i[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(i)}const r=e.element.classList;for(const o of this.st)o in i||(r.remove(o),this.st.delete(o));for(const o in i){const e=!!i[o];e===this.st.has(o)||this.nt?.has(o)||(e?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return o.Jb}})}}]);
//# sourceMappingURL=720.4a13cc39.chunk.js.map