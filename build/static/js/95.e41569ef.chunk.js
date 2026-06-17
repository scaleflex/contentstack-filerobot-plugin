/*! For license information please see 95.e41569ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarketplace_app_boilerplate=self.webpackChunkmarketplace_app_boilerplate||[]).push([[95],{7967:(e,t,i)=>{i.d(t,{fl:()=>S,iv:()=>l,Ts:()=>k,Qu:()=>$});const s=globalThis,a=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const l=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];const a=1===e.length?e[0]:i.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(a,e,o)},d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),a=s.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=i.cssText,e.appendChild(t)}},c=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:g,getOwnPropertySymbols:f,getPrototypeOf:v}=Object,b=globalThis,m=b.trustedTypes,y=m?m.emptyScript:"",_=b.reactiveElementPolyfillSupport,x=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!p(e,t),w={attribute:!0,type:String,converter:k,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const o=s?.call(this);a?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...g(e),...f(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=s;const o=a.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4?arguments[4]:void 0;if(void 0!==e){const o=this.constructor;if(!1===s&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??$)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,i,s){let{useDefault:a,reflect:o,wrapped:r}=i;a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,_?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.1.2")},95:(e,t,i)=>{i.r(t);var s=i(6386),a=i(1272),o=i(7072);function r(e,t){for(var i=0;i<t.length;i++){const s=t[i];if("string"!=typeof s&&!Array.isArray(s))for(const t in s)if("default"!==t&&!(t in e)){const i=Object.getOwnPropertyDescriptor(s,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>s[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}class n{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying)return void(this._pendingState={...this._pendingState||{},...e});const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach((e=>e(this.state,t)))}finally{this._notifying=!1}if(this._pendingState){const e=this._pendingState;this._pendingState=null,this.setState(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}const l=e=>"string"==typeof e,d=()=>{let e,t;const i=new Promise(((i,s)=>{e=i,t=s}));return i.resolve=e,i.reject=t,i},c=e=>null==e?"":""+e,p=/###/g,h=e=>e&&e.indexOf("###")>-1?e.replace(p,"."):e,u=e=>!e||l(e),g=(e,t,i)=>{const s=l(t)?t.split("."):t;let a=0;for(;a<s.length-1;){if(u(e))return{};const t=h(s[a]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++a}return u(e)?{}:{obj:e,k:h(s[a])}},f=(e,t,i)=>{const{obj:s,k:a}=g(e,t,Object);if(void 0!==s||1===t.length)return void(s[a]=i);let o=t[t.length-1],r=t.slice(0,t.length-1),n=g(e,r,Object);for(;void 0===n.obj&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),n=g(e,r,Object),n&&n.obj&&typeof n.obj[`${n.k}.${o}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${o}`]=i},v=(e,t)=>{const{obj:i,k:s}=g(e,t);if(i)return i[s]},b=(e,t,i)=>{for(const s in t)"__proto__"!==s&&"constructor"!==s&&(s in e?l(e[s])||e[s]instanceof String||l(t[s])||t[s]instanceof String?i&&(e[s]=t[s]):b(e[s],t[s],i):e[s]=t[s]);return e},m=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _=e=>l(e)?e.replace(/[&<>"'\/]/g,(e=>y[e])):e;const x=[" ",",","?","!",";"],k=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}(20),$=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const s=t.split(i);let a=e;for(let o=0;o<s.length;){if(!a||"object"!=typeof a)return;let e,t="";for(let r=o;r<s.length;++r)if(r!==o&&(t+=i),t+=s[r],e=a[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&r<s.length-1)continue;o+=r-o+1;break}a=e}return a},w=e=>e&&e.replace("_","-"),S={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class C{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||S,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(l(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new C(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new C(this.logger,e)}}var F=new C;class A{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)})),this}off(e,t){if(this.observers[e]){if(!t)return void delete this.observers[e];this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach((e=>{let[t,s]=e;for(let a=0;a<s;a++)t(...i)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((t=>{let[s,a]=t;for(let o=0;o<a;o++)s.apply(s,[e,...i])}))}}class L extends A{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator,o=void 0!==s.ignoreJSONStructure?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let r;e.indexOf(".")>-1?r=e.split("."):(r=[e,t],i&&(Array.isArray(i)?r.push(...i):l(i)&&a?r.push(...i.split(a)):r.push(i)));const n=v(this.data,r);return!n&&!t&&!i&&e.indexOf(".")>-1&&(e=r[0],t=r[1],i=r.slice(2).join(".")),!n&&o&&l(i)?$(this.data&&this.data[e]&&this.data[e][t],i,a):n}addResource(e,t,i,s){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const o=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator;let r=[e,t];i&&(r=r.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(r=e.split("."),s=t,t=r[1]),this.addNamespaces(t),f(this.data,r,s),a.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const a in i)(l(i[a])||Array.isArray(i[a]))&&this.addResource(e,t,a,i[a],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,a){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},r=[e,t];e.indexOf(".")>-1&&(r=e.split("."),s=i,i=t,t=r[1]),this.addNamespaces(t);let n=v(this.data,r)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?b(n,i,a):n={...n,...i},f(this.data,r,n),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var E={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,s,a){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,i,s,a))})),t}};const O={};class M extends A{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,t,i)=>{e.forEach((e=>{t[e]&&(i[e]=t[e])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=F.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const i=this.resolve(e,t);return i&&void 0!==i.res}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let a=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,r=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,i)=>{t=t||"",i=i||"";const s=x.filter((e=>t.indexOf(e)<0&&i.indexOf(e)<0));if(0===s.length)return!0;const a=k.getRegExp(`(${s.map((e=>"?"===e?"\\?":e)).join("|")})`);let o=!a.test(e);if(!o){const t=e.indexOf(i);t>0&&!a.test(e.substring(0,t))&&(o=!0)}return o})(e,i,s);if(o&&!r){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:l(a)?[a]:a};const o=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(o[0])>-1)&&(a=o.shift()),e=o.join(s)}return{key:e,namespaces:l(a)?[a]:a}}translate(e,t,i){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t={...t}),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const s=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,a=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:o,namespaces:r}=this.extractFromKey(e[e.length-1],t),n=r[r.length-1],d=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase()){if(c){const e=t.nsSeparator||this.options.nsSeparator;return s?{res:`${n}${e}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:n,usedParams:this.getUsedParamsDetails(t)}:`${n}${e}${o}`}return s?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:n,usedParams:this.getUsedParamsDetails(t)}:o}const p=this.resolve(e,t);let h=p&&p.res;const u=p&&p.usedKey||o,g=p&&p.exactUsedKey||o,f=Object.prototype.toString.apply(h),v=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,m=!l(h)&&"boolean"!=typeof h&&"number"!=typeof h;if(!(b&&h&&m&&["[object Number]","[object Function]","[object RegExp]"].indexOf(f)<0)||l(v)&&Array.isArray(h))if(b&&l(v)&&Array.isArray(h))h=h.join(v),h&&(h=this.extendTranslation(h,e,t,i));else{let s=!1,r=!1;const c=void 0!==t.count&&!l(t.count),u=M.hasDefaultValue(t),g=c?this.pluralResolver.getSuffix(d,t.count,t):"",f=t.ordinal&&c?this.pluralResolver.getSuffix(d,t.count,{ordinal:!1}):"",v=c&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),b=v&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${g}`]||t[`defaultValue${f}`]||t.defaultValue;!this.isValidLookup(h)&&u&&(s=!0,h=b),this.isValidLookup(h)||(r=!0,h=o);const m=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&r?void 0:h,y=u&&b!==h&&this.options.updateMissing;if(r||s||y){if(this.logger.log(y?"updateKey":"missingKey",d,n,o,y?b:h),a){const e=this.resolve(o,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const i=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&i&&i[0])for(let t=0;t<i.length;t++)e.push(i[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const s=(e,i,s)=>{const a=u&&s!==h?s:m;this.options.missingKeyHandler?this.options.missingKeyHandler(e,n,i,a,y,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,n,i,a,y,t),this.emit("missingKey",e,n,i,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?e.forEach((e=>{const i=this.pluralResolver.getSuffixes(e,t);v&&t[`defaultValue${this.options.pluralSeparator}zero`]&&i.indexOf(`${this.options.pluralSeparator}zero`)<0&&i.push(`${this.options.pluralSeparator}zero`),i.forEach((i=>{s([e],o+i,t[`defaultValue${i}`]||b)}))})):s(e,o,b))}h=this.extendTranslation(h,e,t,p,i),r&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${n}:${o}`),(r||s)&&this.options.parseMissingKeyHandler&&(h="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${n}:${o}`:o,s?h:void 0):this.options.parseMissingKeyHandler(h))}else{if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(u,h,{...t,ns:r}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(p.res=e,p.usedParams=this.getUsedParamsDetails(t),p):e}if(a){const e=Array.isArray(h),i=e?[]:{},s=e?g:u;for(const o in h)if(Object.prototype.hasOwnProperty.call(h,o)){const e=`${s}${a}${o}`;i[o]=this.translate(e,{...t,joinArrays:!1,ns:r}),i[o]===e&&(i[o]=h[o])}h=i}}return s?(p.res=h,p.usedParams=this.getUsedParamsDetails(t),p):h}extendTranslation(e,t,i,s,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const r=l(e)&&(i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let n;if(r){const t=e.match(this.interpolator.nestingRegexp);n=t&&t.length}let d=i.replace&&!l(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,i.lng||this.language||s.usedLng,i),r){const t=e.match(this.interpolator.nestingRegexp);n<(t&&t.length)&&(i.nest=!1)}!i.lng&&"v1"!==this.options.compatibilityAPI&&s&&s.res&&(i.lng=this.language||s.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return a&&a[0]===s[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${s[0]} in key: ${t[0]}`),null):o.translate(...s,t)}),i)),i.interpolation&&this.interpolator.reset()}const r=i.postProcess||this.options.postProcess,n=l(r)?[r]:r;return null!=e&&n&&n.length&&!1!==i.applyPostProcessor&&(e=E.handle(n,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t,i,s,a,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l(e)&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const n=this.extractFromKey(e,r),d=n.key;i=d;let c=n.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const p=void 0!==r.count&&!l(r.count),h=p&&!r.ordinal&&0===r.count&&this.pluralResolver.shouldUseIntlApi(),u=void 0!==r.context&&(l(r.context)||"number"==typeof r.context)&&""!==r.context,g=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);c.forEach((e=>{this.isValidLookup(t)||(o=e,!O[`${g[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(o)&&(O[`${g[0]}-${e}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach((i=>{if(this.isValidLookup(t))return;a=i;const o=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(o,d,i,e,r);else{let e;p&&(e=this.pluralResolver.getSuffix(i,r.count,r));const t=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(o.push(d+e),r.ordinal&&0===e.indexOf(s)&&o.push(d+e.replace(s,this.options.pluralSeparator)),h&&o.push(d+t)),u){const i=`${d}${this.options.contextSeparator}${r.context}`;o.push(i),p&&(o.push(i+e),r.ordinal&&0===e.indexOf(s)&&o.push(i+e.replace(s,this.options.pluralSeparator)),h&&o.push(i+t))}}let n;for(;n=o.pop();)this.isValidLookup(t)||(s=n,t=this.getResource(i,e,n,r))})))}))})),{res:t,usedKey:i,exactUsedKey:s,usedLng:a,usedNS:o}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!l(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const e of t)delete s[e]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,12)&&void 0!==e[i])return!0;return!1}}const T=e=>e.charAt(0).toUpperCase()+e.slice(1);class P{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=F.create("languageUtils")}getScriptPartFromCode(e){if(!(e=w(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length||(t.pop(),"x"===t[t.length-1].toLowerCase())?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(!(e=w(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(l(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let t=Intl.getCanonicalLocales(e)[0];if(t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t)return t}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map((e=>e.toLowerCase())):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=T(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=T(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=T(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const i=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const i=this.getLanguagePartFromCode(e);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find((e=>e===i?e:e.indexOf("-")<0&&i.indexOf("-")<0||!(e.indexOf("-")>0&&i.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===i||0===e.indexOf(i)&&i.length>1)?void 0:e))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),l(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],a=e=>{e&&(this.isSupportedCode(e)?s.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return l(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):l(e)&&a(this.formatLanguageCode(e)),i.forEach((e=>{s.indexOf(e)<0&&a(this.formatLanguageCode(e))})),s}}let I=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],D={1:e=>+(e>1),2:e=>+(1!=e),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>1==e?0:e>=2&&e<=4?1:2,7:e=>1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>1==e?0:2==e?1:8!=e&&11!=e?2:3,9:e=>+(e>=2),10:e=>1==e?0:2==e?1:e<7?2:e<11?3:4,11:e=>1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(0!==e),14:e=>1==e?0:2==e?1:3==e?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:0!==e?1:2,17:e=>1==e||e%10==1&&e%100!=11?0:1,18:e=>0==e?0:1==e?1:2,19:e=>1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>1==e?0:0==e||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3};const z=["v1","v2","v3"],R=["v4"],j={zero:0,one:1,two:2,few:3,many:4,other:5};class N{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=F.create("pluralResolver"),(!this.options.compatibilityJSON||R.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const e={};return I.forEach((t=>{t.lngs.forEach((i=>{e[i]={numbers:t.nr,plurals:D[t.fc]}}))})),e})(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi()){const i=w("dev"===e?"en":e),s=t.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:i,type:s});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(i,{type:s})}catch{if(!e.match(/-|_/))return;const i=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(i,t)}return this.pluralRulesCache[a]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,i).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(((e,t)=>j[e]-j[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):i.numbers.map((i=>this.getSuffix(e,i,t))):[]}getSuffix(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=this.getRule(e,i);return s?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:this.getSuffixRetroCompatible(s,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let s=e.numbers[i];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===s?s="plural":1===s&&(s=""));const a=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return"v1"===this.options.compatibilityJSON?1===s?"":"number"==typeof s?`_plural_${s.toString()}`:a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!z.includes(this.options.compatibilityJSON)}}const B=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=((e,t,i)=>{const s=v(e,i);return void 0!==s?s:v(t,i)})(e,t,i);return!o&&a&&l(i)&&(o=$(e,i,s),void 0===o&&(o=$(t,i,s))),o},U=e=>e.replace(/\$/g,"$$$$");class K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=F.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:a,prefixEscaped:o,suffix:r,suffixEscaped:n,formatSeparator:l,unescapeSuffix:d,unescapePrefix:c,nestingPrefix:p,nestingPrefixEscaped:h,nestingSuffix:u,nestingSuffixEscaped:g,nestingOptionsSeparator:f,maxReplaces:v,alwaysFormat:b}=e.interpolation;this.escape=void 0!==t?t:_,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==s&&s,this.prefix=a?m(a):o||"{{",this.suffix=r?m(r):n||"}}",this.formatSeparator=l||",",this.unescapePrefix=d?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=p?m(p):h||m("$t("),this.nestingSuffix=u?m(u):g||m(")"),this.nestingOptionsSeparator=f||",",this.maxReplaces=v||1e3,this.alwaysFormat=void 0!==b&&b,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){let a,o,r;const n=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=e=>{if(e.indexOf(this.formatSeparator)<0){const a=B(t,n,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(a,void 0,i,{...s,...t,interpolationkey:e}):a}const a=e.split(this.formatSeparator),o=a.shift().trim(),r=a.join(this.formatSeparator).trim();return this.format(B(t,n,o,this.options.keySeparator,this.options.ignoreJSONStructure),r,i,{...s,...t,interpolationkey:o})};this.resetRegExp();const p=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,h=s&&s.interpolation&&void 0!==s.interpolation.skipOnVariables?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>U(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?U(this.escape(e)):U(e)}].forEach((t=>{for(r=0;a=t.regex.exec(e);){const i=a[1].trim();if(o=d(i),void 0===o)if("function"==typeof p){const t=p(e,a,s);o=l(t)?t:""}else if(s&&Object.prototype.hasOwnProperty.call(s,i))o="";else{if(h){o=a[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),o=""}else!l(o)&&!this.useRawValueToEscape&&(o=c(o));const n=t.safeValue(o);if(e=e.replace(a[0],n),h?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=a[0].length):t.regex.lastIndex=0,r++,r>=this.maxReplaces)break}})),e}nest(e,t){let i,s,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=(e,t)=>{const i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;const s=e.split(new RegExp(`${i}[ ]*{`));let o=`{${s[1]}`;e=s[0],o=this.interpolate(o,a);const r=o.match(/'/g),n=o.match(/"/g);(r&&r.length%2===0&&!n||n.length%2!==0)&&(o=o.replace(/'/g,'"'));try{a=JSON.parse(o),t&&(a={...t,...a})}catch(l){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,l),`${e}${i}${o}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,e};for(;i=this.nestingRegexp.exec(e);){let n=[];a={...o},a=a.replace&&!l(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=!1;if(-1!==i[0].indexOf(this.formatSeparator)&&!/{.*}/.test(i[1])){const e=i[1].split(this.formatSeparator).map((e=>e.trim()));i[1]=e.shift(),n=e,d=!0}if(s=t(r.call(this,i[1].trim(),a),a),s&&i[0]===e&&!l(s))return s;l(s)||(s=c(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),d&&(s=n.reduce(((e,t)=>this.format(e,t,o.lng,{...o,interpolationkey:i[1].trim()})),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const q=e=>{const t={};return(i,s,a)=>{let o=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(o={...o,[a.interpolationkey]:void 0});const r=s+JSON.stringify(o);let n=t[r];return n||(n=e(w(s),a),t[r]=n),n(i)}};class V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=F.create("formatter"),this.options=e,this.formats={number:q(((e,t)=>{const i=new Intl.NumberFormat(e,{...t});return e=>i.format(e)})),currency:q(((e,t)=>{const i=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>i.format(e)})),datetime:q(((e,t)=>{const i=new Intl.DateTimeFormat(e,{...t});return e=>i.format(e)})),relativetime:q(((e,t)=>{const i=new Intl.RelativeTimeFormat(e,{...t});return e=>i.format(e,t.range||"day")})),list:q(((e,t)=>{const i=new Intl.ListFormat(e,{...t});return e=>i.format(e)}))},this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=q(t)}format(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=t.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find((e=>e.indexOf(")")>-1))){const e=a.findIndex((e=>e.indexOf(")")>-1));a[0]=[a[0],...a.splice(1,e)].join(this.formatSeparator)}return a.reduce(((e,t)=>{const{formatName:a,formatOptions:o}=(e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const s=e.split("(");t=s[0].toLowerCase().trim();const a=s[1].substring(0,s[1].length-1);"currency"===t&&a.indexOf(":")<0?i.currency||(i.currency=a.trim()):"relativetime"===t&&a.indexOf(":")<0?i.range||(i.range=a.trim()):a.split(";").forEach((e=>{if(e){const[t,...s]=e.split(":"),a=s.join(":").trim().replace(/^'+|'+$/g,""),o=t.trim();i[o]||(i[o]=a),"false"===a&&(i[o]=!1),"true"===a&&(i[o]=!0),isNaN(a)||(i[o]=parseInt(a,10))}}))}return{formatName:t,formatOptions:i}})(t);if(this.formats[a]){let t=e;try{const r=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},n=r.locale||r.lng||s.locale||s.lng||i;t=this.formats[a](e,n,{...o,...s,...r})}catch(r){this.logger.warn(r)}return t}return this.logger.warn(`there was no format function for ${a}`),e}),e)}}class H extends A{constructor(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=F.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,s.backend,s)}queueLoad(e,t,i,s){const a={},o={},r={},n={};return e.forEach((e=>{let s=!0;t.forEach((t=>{const r=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[r]=2:this.state[r]<0||(1===this.state[r]?void 0===o[r]&&(o[r]=!0):(this.state[r]=1,s=!1,void 0===o[r]&&(o[r]=!0),void 0===a[r]&&(a[r]=!0),void 0===n[t]&&(n[t]=!0)))})),s||(r[e]=!0)})),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(r),toLoadNamespaces:Object.keys(n)}}loaded(e,t,i){const s=e.split("|"),a=s[0],o=s[1];t&&this.emit("failedLoading",a,o,t),!t&&i&&this.store.addResourceBundle(a,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const r={};this.queue.forEach((i=>{((e,t,i,s)=>{const{obj:a,k:o}=g(e,t,Object);a[o]=a[o]||[],a[o].push(i)})(i.loaded,[a],o),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(i,e),t&&i.errors.push(t),0===i.pendingCount&&!i.done&&(Object.keys(i.loaded).forEach((e=>{r[e]||(r[e]={});const t=i.loaded[e];t.length&&t.forEach((t=>{void 0===r[e][t]&&(r[e][t]=!0)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",r),this.queue=this.queue.filter((e=>!e.done))}read(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:a,callback:o});this.readingCalls++;const r=(r,n)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}r&&n&&s<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,i,s+1,2*a,o)}),a):o(r,n)},n=this.backend[i].bind(this.backend);if(2!==n.length)return n(e,t,r);try{const i=n(e,t);i&&"function"==typeof i.then?i.then((e=>r(null,e))).catch(r):r(null,i)}catch(l){r(l)}}prepareLoading(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();l(e)&&(e=this.languageUtils.toResolveHierarchy(e)),l(t)&&(t=[t]);const a=this.queueLoad(e,t,i,s);if(!a.toLoad.length)return a.pending.length||s(),null;a.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=e.split("|"),s=i[0],a=i[1];this.read(s,a,"read",void 0,void 0,((i,o)=>{i&&this.logger.warn(`${t}loading namespace ${a} for language ${s} failed`,i),!i&&o&&this.logger.log(`${t}loaded namespace ${a} for language ${s}`,o),this.loaded(e,i,o)}))}saveMissing(e,t,i,s,a){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=i&&""!==i){if(this.backend&&this.backend.create){const l={...o,isUpdate:a},d=this.backend.create.bind(this.backend);if(d.length<6)try{let a;a=5===d.length?d(e,t,i,s,l):d(e,t,i,s),a&&"function"==typeof a.then?a.then((e=>r(null,e))).catch(r):r(null,a)}catch(n){r(n)}else d(e,t,i,s,r,l)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const G=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),l(e[1])&&(t.defaultValue=e[1]),l(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach((e=>{t[e]=i[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Q=e=>(l(e.ns)&&(e.ns=[e.ns]),l(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),l(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),W=()=>{};class Y extends A{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Q(e),this.services={},this.logger=F,this.modules={external:[]},i=this,Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((e=>{"function"==typeof i[e]&&(i[e]=i[e].bind(i))})),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}var i}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof t&&(i=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&(l(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=G();this.options={...s,...this.options,...Q(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator);const a=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?F.init(a(this.modules.logger),this.options):F.init(null,this.options),this.modules.formatter?t=this.modules.formatter:typeof Intl<"u"&&(t=V);const i=new P(this.options);this.store=new L(this.options.resources,this.options);const o=this.services;o.logger=F,o.resourceStore=this.store,o.languageUtils=i,o.pluralResolver=new N(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),t&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(o.formatter=a(t),o.formatter.init(o,this.options),this.options.interpolation.format=o.formatter.format.bind(o.formatter)),o.interpolator=new K(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new H(a(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",(function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];e.emit(t,...s)})),this.modules.languageDetector&&(o.languageDetector=a(this.modules.languageDetector),o.languageDetector.init&&o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=a(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new M(this.services,this.options),this.translator.on("*",(function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];e.emit(t,...s)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,i||(i=W),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const o=d(),r=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(t),i(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?r():setTimeout(r,0),o}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;const i=l(e)?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],s=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>s(e))),this.options.preload&&this.options.preload.forEach((e=>s(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,i){const s=d();return"function"==typeof e&&(i=e,e=void 0),"function"==typeof t&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=W),this.services.backendConnector.reload(e,t,(e=>{s.resolve(),i(e)})),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&E.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=d();this.emit("languageChanging",e);const a=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},o=(e,o)=>{o?(a(o),this.translator.changeLanguage(o),this.isLanguageChangingTo=void 0,this.emit("languageChanged",o),this.logger.log("languageChanged",o)):this.isLanguageChangingTo=void 0,s.resolve((function(){return i.t(...arguments)})),t&&t(e,(function(){return i.t(...arguments)}))},r=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);const i=l(t)?t:this.services.languageUtils.getBestMatchFromCodes(t);i&&(this.language||a(i),this.translator.language||this.translator.changeLanguage(i),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(i)),this.loadResources(i,(e=>{o(e,i)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(e):r(this.services.languageDetector.detect()),s}getFixedT(e,t,i){var s=this;const a=function(e,t){let o;if("object"!=typeof t){for(var r=arguments.length,n=new Array(r>2?r-2:0),l=2;l<r;l++)n[l-2]=arguments[l];o=s.options.overloadTranslationOptionHandler([e,t].concat(n))}else o={...t};o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs,o.ns=o.ns||a.ns,""!==o.keyPrefix&&(o.keyPrefix=o.keyPrefix||i||a.keyPrefix);const d=s.options.keySeparator||".";let c;return c=o.keyPrefix&&Array.isArray(e)?e.map((e=>`${o.keyPrefix}${d}${e}`)):o.keyPrefix?`${o.keyPrefix}${d}${e}`:e,s.t(c,o)};return l(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=i,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const o=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||0===i||2===i};if(t.precheck){const e=t.precheck(this,o);if(void 0!==e)return e}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!s||o(a,e)))}loadNamespaces(e,t){const i=d();return this.options.ns?(l(e)&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=d();l(e)&&(e=[e]);const s=this.options.preload||[],a=e.filter((e=>s.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return a.length?(this.options.preload=s.concat(a),this.loadResources((e=>{i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new P(G());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new Y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},a=new Y(s);return(void 0!==e.debug||void 0!==e.prefix)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach((e=>{a[e]=this[e]})),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},i&&(a.store=new L(this.store.data,s),a.services.resourceStore=a.store),a.translator=new M(a.services,s),a.translator.on("*",(function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];a.emit(e,...i)})),a.init(s,t),a.translator.options=s,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const X=Y.createInstance();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(){return"function"==typeof XMLHttpRequest||"object"===(typeof XMLHttpRequest>"u"?"undefined":J(XMLHttpRequest))}X.createInstance=Y.createInstance,X.createInstance,X.dir,X.init,X.loadResources,X.reloadResources,X.use,X.changeLanguage,X.getFixedT,X.t,X.exists,X.setDefaultNamespace,X.hasLoadedNamespace,X.loadNamespaces,X.loadLanguages;var ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function te(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ie,se,ae={exports:{}},oe={exports:{}};function re(){return ie||(ie=1,function(e,t){var i,s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ee<"u"&&ee,a=function(){function e(){this.fetch=!1,this.DOMException=s.DOMException}return e.prototype=s,new e}();i=a,function(e){var t=typeof i<"u"&&i||typeof self<"u"&&self||typeof t<"u"&&t,s="URLSearchParams"in t,a="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch{return!1}}(),r="FormData"in t,n="ArrayBuffer"in t;if(n)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function g(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,i){e.onload=function(){t(e.result)},e.onerror=function(){i(e.error)}}))}function v(e){var t=new FileReader,i=f(t);return t.readAsArrayBuffer(e),i}function b(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:s&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n&&o&&function(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=b(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(e)||d(e))?this._bodyArrayBuffer=b(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?g(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(v)}),this.text=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,i=f(t);return t.readAsText(e),i}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),i=new Array(t.length),s=0;s<t.length;s++)i[s]=String.fromCharCode(t[s]);return i.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=c(e),t=p(t);var i=this.map[e];this.map[e]=i?i+", "+t:t},u.prototype.delete=function(e){delete this.map[c(e)]},u.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},u.prototype.set=function(e,t){this.map[c(e)]=p(t)},u.prototype.forEach=function(e,t){for(var i in this.map)this.map.hasOwnProperty(i)&&e.call(t,this.map[i],i,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,i){e.push(i)})),h(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,i){e.push([i,t])})),h(e)},a&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var i=(t=t||{}).body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!i&&null!=e._bodyInit&&(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new u(t.headers)),this.method=function(e){var t=e.toUpperCase();return y.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var i=e.split("="),s=i.shift().replace(/\+/g," "),a=i.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(a))}})),t}function k(e){var t=new u;return e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var i=e.split(":"),s=i.shift().trim();if(s){var a=i.join(":").trim();t.append(s,a)}})),t}function $(e,t){if(!(this instanceof $))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},m.call(_.prototype),m.call($.prototype),$.prototype.clone=function(){return new $(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},$.error=function(){var e=new $(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];$.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new $(null,{status:t,headers:{location:e}})},e.DOMException=t.DOMException;try{new e.DOMException}catch{e.DOMException=function(e,t){this.message=e,this.name=t;var i=Error(e);this.stack=i.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function S(i,s){return new Promise((function(a,r){var l=new _(i,s);if(l.signal&&l.signal.aborted)return r(new e.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function c(){d.abort()}d.onload=function(){var e={status:d.status,statusText:d.statusText,headers:k(d.getAllResponseHeaders()||"")};e.url="responseURL"in d?d.responseURL:e.headers.get("X-Request-URL");var t="response"in d?d.response:d.responseText;setTimeout((function(){a(new $(t,e))}),0)},d.onerror=function(){setTimeout((function(){r(new TypeError("Network request failed"))}),0)},d.ontimeout=function(){setTimeout((function(){r(new TypeError("Network request failed"))}),0)},d.onabort=function(){setTimeout((function(){r(new e.DOMException("Aborted","AbortError"))}),0)},d.open(l.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch{return e}}(l.url),!0),"include"===l.credentials?d.withCredentials=!0:"omit"===l.credentials&&(d.withCredentials=!1),"responseType"in d&&(o?d.responseType="blob":n&&l.headers.get("Content-Type")&&-1!==l.headers.get("Content-Type").indexOf("application/octet-stream")&&(d.responseType="arraybuffer")),!s||"object"!=typeof s.headers||s.headers instanceof u?l.headers.forEach((function(e,t){d.setRequestHeader(t,e)})):Object.getOwnPropertyNames(s.headers).forEach((function(e){d.setRequestHeader(e,p(s.headers[e]))})),l.signal&&(l.signal.addEventListener("abort",c),d.onreadystatechange=function(){4===d.readyState&&l.signal.removeEventListener("abort",c)}),d.send(typeof l._bodyInit>"u"?null:l._bodyInit)}))}S.polyfill=!0,t.fetch||(t.fetch=S,t.Headers=u,t.Request=_,t.Response=$),e.Headers=u,e.Request=_,e.Response=$,e.fetch=S}({}),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var o=s.fetch?s:a;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(oe,oe.exports)),oe.exports}var ne=(se||(se=1,function(e,t){var i="function"==typeof fetch?fetch:void 0;if(typeof ee<"u"&&ee.fetch?i=ee.fetch:typeof window<"u"&&window.fetch&&(i=window.fetch),typeof window>"u"){var s=i||re();s.default&&(s=s.default),t.default=s,e.exports=t.default}}(ae,ae.exports)),ae.exports);const le=te(ne),de=r({__proto__:null,default:le},[ne]);function ce(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function pe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(i),!0).forEach((function(t){he(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ce(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function he(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=ue(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=ue(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ue(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ge,fe,ve="function"==typeof fetch?fetch:void 0;typeof global<"u"&&global.fetch?ve=global.fetch:typeof window<"u"&&window.fetch&&(ve=window.fetch),Z()&&(typeof global<"u"&&global.XMLHttpRequest?ge=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(ge=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&(typeof global<"u"&&global.ActiveXObject?fe=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(fe=window.ActiveXObject)),!ve&&de&&!ge&&!fe&&(ve=le||de),"function"!=typeof ve&&(ve=void 0);var be=function(e,t){if(t&&"object"===ue(t)){var i="";for(var s in t)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(t[s]);if(!i)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+i.slice(1)}return e},me=function(e,t,i,s){var a=function(e){if(!e.ok)return i(e.statusText||"Error",{status:e.status});e.text().then((function(t){i(null,{status:e.status,data:t})})).catch(i)};if(s){var o=s(e,t);if(o instanceof Promise)return void o.then(a).catch(i)}"function"==typeof fetch?fetch(e,t).then(a).catch(i):ve(e,t).then(a).catch(i)},ye=!1,_e=function(e,t,i,s){return"function"==typeof i&&(s=i,i=void 0),s=s||function(){},ve&&0!==t.indexOf("file:")?function(e,t,i,s){e.queryStringParams&&(t=be(t,e.queryStringParams));var a=pe({},"function"==typeof e.customHeaders?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(a["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(a["Content-Type"]="application/json");var o="function"==typeof e.requestOptions?e.requestOptions(i):e.requestOptions,r=pe({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:a},ye?{}:o),n="function"==typeof e.alternateFetch&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{me(t,r,s,n)}catch(l){if(!o||0===Object.keys(o).length||!l.message||l.message.indexOf("not implemented")<0)return s(l);try{Object.keys(o).forEach((function(e){delete r[e]})),me(t,r,s,n),ye=!0}catch(d){s(d)}}}(e,t,i,s):Z()||"function"==typeof ActiveXObject?function(e,t,i,s){i&&"object"===ue(i)&&(i=be("",i).slice(1)),e.queryStringParams&&(t=be(t,e.queryStringParams));try{var a;(a=ge?new ge:new fe("MSXML2.XMLHTTP.3.0")).open(i?"POST":"GET",t,1),e.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.withCredentials=!!e.withCredentials,i&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.overrideMimeType&&a.overrideMimeType("application/json");var o=e.customHeaders;if(o="function"==typeof o?o():o)for(var r in o)a.setRequestHeader(r,o[r]);a.onreadystatechange=function(){a.readyState>3&&s(a.status>=400?a.statusText:null,{status:a.status,data:a.responseText})},a.send(i)}catch(n){console&&console.log(n)}}(e,t,i,s):void s(new Error("No fetch and no xhr implementation found!"))};function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ke(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function $e(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(i),!0).forEach((function(t){Se(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ke(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function we(e,t,i){return t&&function(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,Ce(s.key),s)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t,i){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ce(e){var t=function(e,t){if("object"!=xe(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=xe(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==xe(t)?t:t+""}var Fe=we((function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.services=t,this.options=i,this.allOptions=s,this.type="backend",this.init(t,i,s)}),[{key:"init",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.services=e,this.options=$e($e($e({},{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,i){return Se({},t,i||"")},parseLoadPayload:function(e,t){},request:_e,reloadInterval:!(typeof window<"u")&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}),this.options||{}),i),this.allOptions=s,this.services&&this.options.reloadInterval){var a=setInterval((function(){return t.reload()}),this.options.reloadInterval);"object"===xe(a)&&"function"==typeof a.unref&&a.unref()}}},{key:"readMulti",value:function(e,t,i){this._readAny(e,e,t,t,i)}},{key:"read",value:function(e,t,i){this._readAny([e],e,[t],t,i)}},{key:"_readAny",value:function(e,t,i,s,a){var o=this,r=this.options.loadPath;"function"==typeof this.options.loadPath&&(r=this.options.loadPath(e,i)),r=function(e){return function(e){return!!e&&"function"==typeof e.then}(e)?e:Promise.resolve(e)}(r),r.then((function(r){if(!r)return a(null,{});var n=o.services.interpolator.interpolate(r,{lng:e.join("+"),ns:i.join("+")});o.loadUrl(n,a,t,s)}))}},{key:"loadUrl",value:function(e,t,i,s){var a=this,o="string"==typeof i?[i]:i,r="string"==typeof s?[s]:s,n=this.options.parseLoadPayload(o,r);this.options.request(this.options,e,n,(function(o,r){if(r&&(r.status>=500&&r.status<600||!r.status))return t("failed loading "+e+"; status code: "+r.status,!0);if(r&&r.status>=400&&r.status<500)return t("failed loading "+e+"; status code: "+r.status,!1);if(!r&&o&&o.message){var n=o.message.toLowerCase();if(["failed","fetch","network","load"].find((function(e){return n.indexOf(e)>-1})))return t("failed loading "+e+": "+o.message,!0)}if(o)return t(o,!1);var l,d;try{l="string"==typeof r.data?a.options.parse(r.data,i,s):r.data}catch{d="failed parsing "+e+" to json"}if(d)return t(d,!1);t(null,l)}))}},{key:"create",value:function(e,t,i,s,a){var o=this;if(this.options.addPath){"string"==typeof e&&(e=[e]);var r=this.options.parsePayload(t,i,s),n=0,l=[],d=[];e.forEach((function(i){var s=o.options.addPath;"function"==typeof o.options.addPath&&(s=o.options.addPath(i,t));var c=o.services.interpolator.interpolate(s,{lng:i,ns:t});o.options.request(o.options,c,r,(function(t,i){n+=1,l.push(t),d.push(i),n===e.length&&"function"==typeof a&&a(l,d)}))}))}}},{key:"reload",value:function(){var e=this,t=this.services,i=t.backendConnector,s=t.languageUtils,a=t.logger,o=i.language;if(!o||"cimode"!==o.toLowerCase()){var r=[],n=function(e){s.toResolveHierarchy(e).forEach((function(e){r.indexOf(e)<0&&r.push(e)}))};n(o),this.allOptions.preload&&this.allOptions.preload.forEach((function(e){return n(e)})),r.forEach((function(t){e.allOptions.ns.forEach((function(e){i.read(t,e,"read",null,null,(function(s,o){s&&a.warn("loading namespace ".concat(e," for language ").concat(t," failed"),s),!s&&o&&a.log("loaded namespace ".concat(e," for language ").concat(t),o),i.loaded("".concat(t,"|").concat(e),s,o)}))}))}))}}}]);Fe.type="backend";const Ae="a656ff82-0270-46dc-8de8-c734318d841d",Le="asset-picker";let Ee=null;const Oe=new class{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&"true"===localStorage.getItem("apTranslationsMissingKeysEnabled"),this.enabled&&console.log("%c[asset-picker] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,s)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout((()=>this._renderCurl()),this.debounceDelay),Reflect.set(e,t,i,s))})}handleMissingKey(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Le;if(!this.enabled)return;const s=`${i}:${e}`;this._missingKeys[s]={value:t,ns:i}}_renderCurl(){console.group("[asset-picker] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`\ncurl 'https://neo.wordplex.io/api/import/request-translations' \\\n  --data-raw '{"grid_uuid":"${Ae}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map((e=>{let[t,{value:i,ns:s}]=e;return{key:s&&t.startsWith(`${s}:`)?t.slice(s.length+1):t,lang:"en",default:i}}))).replaceAll("'","'\\''")}}'\n    `),console.groupEnd()}};class Me{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe((()=>{this.host.requestUpdate()}))}hostDisconnected(){var e;null==(e=this.unsubscribe)||e.call(this)}}class Te{constructor(e,t){this.lastClickedIndex=-1,this.host=e,this.store=t,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return!0===(null==(e=this.store.getState().config)?void 0:e.folderSelection)}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,t,i,s){const a=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=t;n++){const e=o[n];e&&("extension"in(r=e)&&!("path"in r)?a.disabledAssetIds.has(e.uuid)||i.set(e.uuid,e):a.disabledFolderIds.has(e.uuid)||s.set(e.uuid,e))}var r}handleSelect(e,t,i){var s,a,o,r;const n=this.store.getState();if(n.disabledAssetIds.has(e.uuid))return;const l=new Map(n.selectedAssets);if(!((null==(s=n.config)?void 0:s.multiSelect)??1))return l.clear(),l.set(e.uuid,e),this.store.setState({selectedAssets:l,selectedFolders:new Map}),void(this.lastClickedIndex=t);if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const e=Math.min(this.lastClickedIndex,t),i=Math.max(this.lastClickedIndex,t),s=new Map(n.selectedFolders);this._applyRangeSelection(e,i,l,s);const o=null==(a=n.config)?void 0:a.maxSelections;if(o&&l.size+s.size>o)return;this.store.setState({selectedAssets:l,selectedFolders:s})}else{const e=Math.min(this.lastClickedIndex,t),i=Math.max(this.lastClickedIndex,t),s=n.assets;for(let t=e;t<=i;t++)s[t]&&!n.disabledAssetIds.has(s[t].uuid)&&l.set(s[t].uuid,s[t]);const a=null==(o=n.config)?void 0:o.maxSelections;if(a&&l.size>a)return;this.store.setState({selectedAssets:l})}else if(i.metaKey||i.ctrlKey){l.has(e.uuid)?l.delete(e.uuid):l.set(e.uuid,e);const t=null==(r=n.config)?void 0:r.maxSelections,i=l.size+(this._folderSelectionEnabled?n.selectedFolders.size:0);if(t&&i>t)return;this.store.setState({selectedAssets:l})}else l.clear(),l.set(e.uuid,e),this.store.setState({selectedAssets:l,selectedFolders:new Map});this.lastClickedIndex=t}handleFolderSelect(e,t,i){var s,a,o;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const n=new Map(r.selectedFolders);if(!((null==(s=r.config)?void 0:s.multiSelect)??1))return n.clear(),n.set(e.uuid,e),this.store.setState({selectedFolders:n,selectedAssets:new Map}),void(this.lastClickedIndex=t);if(i.shiftKey&&this.lastClickedIndex>=0){const e=Math.min(this.lastClickedIndex,t),i=Math.max(this.lastClickedIndex,t),s=new Map(r.selectedAssets);this._applyRangeSelection(e,i,s,n);const o=null==(a=r.config)?void 0:a.maxSelections;if(o&&s.size+n.size>o)return;this.store.setState({selectedAssets:s,selectedFolders:n})}else if(i.metaKey||i.ctrlKey){n.has(e.uuid)?n.delete(e.uuid):n.set(e.uuid,e);const t=null==(o=r.config)?void 0:o.maxSelections,i=n.size+r.selectedAssets.size;if(t&&i>t)return;this.store.setState({selectedFolders:n})}else n.clear(),n.set(e.uuid,e),this.store.setState({selectedFolders:n,selectedAssets:new Map});this.lastClickedIndex=t}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var t;const i=this.store.getState(),s=null==(t=i.config)?void 0:t.maxSelections,a=this._folderSelectionEnabled?i.selectedFolders.size:0,o=e.filter((e=>!i.disabledAssetIds.has(e.uuid))),r=new Map,n=s?Math.max(0,Math.min(o.length,s-a)):o.length;for(let l=0;l<n;l++)r.set(o[l].uuid,o[l]);return this.store.setState({selectedAssets:r}),this.lastClickedIndex=-1,r.size}selectAllFolders(e){var t;if(!this._folderSelectionEnabled)return;const i=this.store.getState(),s=null==(t=i.config)?void 0:t.maxSelections,a=e.filter((e=>!i.disabledFolderIds.has(e.uuid))),o=new Map,r=s?Math.max(0,Math.min(a.length,s-i.selectedAssets.size)):a.length;for(let n=0;n<r;n++)o.set(a[n].uuid,a[n]);this.store.setState({selectedFolders:o})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class Pe{constructor(e,t){this.host=e,this.onLoadMore=t,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,t){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver((e=>{var t;null!=(t=e[0])&&t.isIntersecting&&this.onLoadMore()}),{root:t??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Ie=40;class De{constructor(e,t){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=e=>this.onMouseDown(e),this.handleMouseMove=e=>this.onMouseMove(e),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=e=>e.preventDefault(),this.host=e,this.store=t,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some((e=>{if(!(e instanceof HTMLElement))return!1;if(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)return!0;const t=e.tagName.toLowerCase();return!!(t.startsWith("ap-asset-")||t.startsWith("ap-folder-")||e.classList.contains("check")||e.classList.contains("check-box"))}))}onMouseDown(e){var t;if(0!==e.button||this.isInteractiveTarget(e)||!((null==(t=this.store.getState().config)?void 0:t.multiSelect)??1))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var t;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),s=Math.abs(e.clientY-this.startClientY);if(i<5&&s<5)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),null==(t=window.getSelection())||t.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const t=this.container.getBoundingClientRect(),i=e.clientX-t.left+this.container.scrollLeft,s=e.clientY-t.top+this.container.scrollTop;let a=Math.min(this.startX,i),o=Math.min(this.startY,s),r=Math.abs(i-this.startX),n=Math.abs(s-this.startY);const l=this.container.scrollWidth,d=this.container.scrollHeight;a+r>l&&(r=l-a),o+n>d&&(n=d-o),a<0&&(r+=a,a=0),o<0&&(n+=o,o=0),this.rect={x:a,y:o,width:r,height:n},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight)return void this.stopAutoScroll();const t=this.container.getBoundingClientRect(),i=e.clientY-t.top,s=t.bottom-e.clientY,a=i<Ie||s<Ie;a&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame((()=>this.autoScrollTick())):a||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),t=this._lastMouseEvent,i=t.clientY-e.top,s=e.bottom-t.clientY;let a=0;i<Ie?a=-15*(1-i/Ie):s<Ie&&(a=15*(1-s/Ie)),0!==a&&(this.container.scrollTop+=a,this.updateMarqueeRect(t),this._scrollRAF=requestAnimationFrame((()=>this.autoScrollTick())))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],t=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const s=i.shadowRoot.querySelectorAll("[data-asset-uuid]");s.length>0&&e.push(...Array.from(s));const a=i.shadowRoot.querySelectorAll("[data-folder-uuid]");a.length>0&&t.push(...Array.from(a))}return 0===e.length&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),0===t.length&&t.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:t}}getCardRelativeRect(e){const t=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:t.left-i.left+this.container.scrollLeft,y:t.top-i.top+this.container.scrollTop,width:t.width,height:t.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var e,t;if(!this.container)return;const i=this.store.getState(),s=!0===(null==(e=i.config)?void 0:e.folderSelection),{assetCards:a,folderCards:o}=this.querySelectableElements(),r=new Map(this.preMarqueeSelection),n=s?new Map(this.preMarqueeFolderSelection):i.selectedFolders;a.forEach((e=>{const t=this.getCardRelativeRect(e),s=e.dataset.assetUuid;if(this.intersectsMarquee(t)&&!i.disabledAssetIds.has(s)){const e=i.assets.find((e=>e.uuid===s));e&&r.set(s,e)}})),s&&o.forEach((e=>{const t=this.getCardRelativeRect(e),s=e.dataset.folderUuid;if(this.intersectsMarquee(t)&&!i.disabledFolderIds.has(s)){const e=i.folders.find((e=>e.uuid===s));e&&n.set(s,e)}}));const l=null==(t=i.config)?void 0:t.maxSelections,d=r.size+(s?n.size:0);if(l&&d>l){const e=Array.from(r.entries()).slice(0,Math.max(0,l-n.size));this.store.setState({selectedAssets:new Map(e),...s?{selectedFolders:n}:{}})}else this.store.setState({selectedAssets:r,...s?{selectedFolders:n}:{}})}}class ze{constructor(e,t){this.auth=e;const i=e.projectToken;this.baseUrl=t||`https://api.filerobot.com/${i}/v5`,"sassKey"===e.mode&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if("securityTemplate"===this.auth.mode)return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:"securityTemplate"===this.auth.mode&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,t){const i=new URL(`${this.baseUrl}${e}`);t&&Object.entries(t).forEach((e=>{let[t,s]=e;null!=s&&(Array.isArray(s)?i.searchParams.set(t,s.join(",")):i.searchParams.set(t,String(s)))}));const s={};this._applyAuthHeaders(s);const a=new AbortController,o=setTimeout((()=>a.abort()),3e4);try{const e=await fetch(i.toString(),{headers:s,signal:a.signal});if(clearTimeout(o),!e.ok){let t=`API error: ${e.status} ${e.statusText}`;try{const i=await e.json();i.msg&&(t=`API error: ${e.status} - ${i.msg}`)}catch{}throw new Error(t)}const t=await e.json();if("error"===t.status)throw new Error(`API error: ${t.msg||"Unknown error"}`);return t}catch(r){throw clearTimeout(o),r instanceof DOMException&&"AbortError"===r.name?new Error("API request timed out"):r}}async post(e,t){const i=new URL(`${this.baseUrl}${e}`),s={"Content-Type":"application/json"};this._applyAuthHeaders(s);const a=new AbortController,o=setTimeout((()=>a.abort()),3e4);try{const e=await fetch(i.toString(),{method:"POST",headers:s,body:JSON.stringify(t),signal:a.signal});if(clearTimeout(o),!e.ok){let t=`API error: ${e.status} ${e.statusText}`;try{const i=await e.json();i.msg&&(t=`API error: ${e.status} - ${i.msg}`)}catch{}throw new Error(t)}const r=await e.json();if("error"===r.status)throw new Error(`API error: ${r.msg||"Unknown error"}`);return r}catch(r){throw clearTimeout(o),r instanceof DOMException&&"AbortError"===r.name?new Error("API request timed out"):r}}}const Re=["cdn_permalink"];async function je(e,t){const i=function(e){const t=e.fields??Re,i={offset:e.offset??0,limit:e.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:e.recursive??1};t.length>0&&(i.fields=t);const s=e.sort_by??"created_at",a=e.sort_direction??"desc";i.sort=`${{created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"}[s]||s}:${a}`,e.folder&&(i.folder=e.folder);const o=[];return e.search&&!e.with_ai&&o.push(e.search),e.q&&o.push(e.q),o.length>0&&(i.q=o.join(" ")),e.with_ai&&(i.with_ai=!0,e.ai_query&&(i.ai_query=e.ai_query),e.ai_lang&&(i.ai_lang=e.ai_lang)),e.collection_uuid&&(i.collection_uuid=e.collection_uuid),e.f64&&(i.f64=e.f64),i}(t);return e.request("/files",i)}async function Ne(e,t){const i={recursive:t.recursive??1};t.folder&&(i.folder=t.folder);const s=[];return t.search&&!t.with_ai&&s.push(t.search),t.q&&s.push(t.q),s.length>0&&(i.q=s.join(" ")),t.with_ai&&(i.with_ai=!0,t.ai_query&&(i.ai_query=t.ai_query),t.ai_lang&&(i.ai_lang=t.ai_lang)),t.collection_uuid&&(i.collection_uuid=t.collection_uuid),t.f64&&(i.f64=t.f64),e.request("/files/stats",i)}async function Be(e,t){const i={recursive:(null==t?void 0:t.recursive)??0,folder:(null==t?void 0:t.folderPath)??"/",limit:(null==t?void 0:t.limit)??1e3,offset:(null==t?void 0:t.offset)??0};null!=t&&t.q&&(i.q=t.q);const s=(null==t?void 0:t.sort_by)??"created_at",a=(null==t?void 0:t.sort_direction)??"asc";return i.sort=`${{created_at:"created_at",modified_at:"modified_at",name:"name"}[s]||s}:${a}`,await e.request("/folders",i)}async function Ue(e){return await e.request("/labels")}async function Ke(e){return e.request("/collections")}function qe(e){return e.filter((e=>!!e.name)).map((e=>({...e,children:qe(e.children??[])}))).filter((e=>{var t;return!(((null==(t=e.children)?void 0:t.length)??0)<1&&!e.filters)}))}async function Ve(e){return((await e.request("/tags")).tags||[]).map((e=>({...e,label:e.names.en||Object.values(e.names)[0]||""}))).filter((e=>e.label)).sort(((e,t)=>e.label.localeCompare(t.label)))}const He="DIR_CREATE";function Ge(e){var t,i;const s=null==(t=e.info)?void 0:t.playlists;if(null==s||!s.length)return null;const a=null==(i=s[0])?void 0:i.playlists;return null!=a&&a.length&&a[0]||null}function Qe(e){return(e.type??"").startsWith("image")}function We(e){var t,i;return(null==(t=e.info)?void 0:t.img_w)??(null==(i=e.info)?void 0:i.video_w)??0}function Ye(e){var t,i;return(null==(t=e.info)?void 0:t.img_h)??(null==(i=e.info)?void 0:i.video_h)??0}const Xe={excellent:90,good:75,fair:60},Je=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],Ze=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],et=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],tt={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},it=new Set([...new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function st(e){if(!e)return"other";const t={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return t[e]?t[e]:e.startsWith("image/")?"image":e.startsWith("video/")?"video":e.startsWith("audio/")?"audio":e.startsWith("application/pdf")||e.startsWith("text/")||e.startsWith("application/msword")||e.startsWith("application/vnd.")?"document":e.startsWith("application/zip")||e.startsWith("application/x-rar")||e.startsWith("application/x-7z")||e.startsWith("application/gzip")?"archive":e.startsWith("font/")?"font":"other"}function at(e){const t=(null==e?void 0:e.toLowerCase().replace(".",""))||"";return it.has(t)}const ot="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",rt={_default:ot+"GENERIC.svg?vh=9a518a",png:ot+"PNG.svg?vh=96cd9a",jpg:ot+"JPG.svg?vh=06e819",jpg2:ot+"JPG2.svg?vh=f0eb7f",jpeg:ot+"JPEG.svg?vh=6a65e9",gif:ot+"GIF.svg?vh=c3c2c3",bmp:ot+"BMP.svg?vh=d2243a",webp:ot+"WEBP.svg?vh=fedd74",svg:ot+"SVG.svg?vh=a15e46",tiff:ot+"TIFF.svg?vh=1f30c3",tif:ot+"TIF.svg?vh=b383c9",heic:ot+"HEIC.svg?vh=84adfe",avif:ot+"AVIF.svg?vh=536b30",ico:ot+"ICO.svg?vh=79063d",psd:ot+"PSD.svg?vh=be6140",psb:ot+"PSB.svg?vh=678646",ai:ot+"AI.svg?vh=84b254",dwg:ot+"DWG.svg?vh=971fb3",mp4:ot+"MP4.svg?vh=42f175",webm:ot+"WEBM.svg?vh=26a84a",avi:ot+"AVI.svg?vh=d22ba8",mpeg:ot+"MPEG.svg?vh=ba93bb",ogv:ot+"OGV.svg?vh=74d453","3gp":ot+"3GP.svg?vh=f0d388","3g2":ot+"3G2.svg?vh=04c652",swf:ot+"SWF.svg?vh=3955e2",fla:ot+"FLA.svg?vh=daf585",m3u8:ot+"M3U8.svg?vh=7d5e62",mp3:ot+"MP3.svg?vh=66bbef",wav:ot+"WAV.svg?vh=d7a7d5",aac:ot+"AAC.svg?vh=07f3f9",oga:ot+"OGA.svg?vh=a5c622",opus:ot+"OPUS.svg?vh=9548b1",weba:ot+"WEBA.svg?vh=4dcf70",mid:ot+"MID.svg?vh=3f0e29",midi:ot+"MIDI.svg?vh=9fedec",cda:ot+"CDA.svg?vh=85b83b",pdf:ot+"PDF.svg?vh=18c5f7",doc:ot+"DOC.svg?vh=d1b47c",docx:ot+"DOCX.svg?vh=1eb6b0",txt:ot+"TXT.svg?vh=307979",rtf:ot+"RTF.svg?vh=978c5f",xls:ot+"XLS.svg?vh=13b5f7",xlsx:ot+"XLSX.svg?vh=79d64a",ppt:ot+"PPT.svg?vh=4ee29b",pptx:ot+"PPTX.svg?vh=8b1568",csv:ot+"CSV.svg?vh=4add78",odt:ot+"ODT.svg?vh=940781",ods:ot+"ODS.svg?vh=9fbe9a",odp:ot+"ODP.svg?vh=bf892d",dbf:ot+"DBF.svg?vh=457bd4",vsd:ot+"VSD.svg?vh=8a9ccb",abw:ot+"ABW.svg?vh=313dc7",epub:ot+"EPUB.svg?vh=15263d",azw:ot+"AZW.svg?vh=a018b1",ics:ot+"ICS.svg?vh=909f63",ogx:ot+"OGX.svg?vh=f694d2",zip:ot+"ZIP.svg?vh=84f98b",rar:ot+"RAR.svg?vh=1d6423","7z":ot+"7Z.svg?vh=e007e5",tar:ot+"TAR.svg?vh=603aed",gz:ot+"GZ.svg?vh=de13f7",bz:ot+"BZ.svg?vh=0374ff",bz2:ot+"BZ2.svg?vh=e14294",arc:ot+"ARC.svg?vh=942fad",jar:ot+"JAR.svg?vh=149796",mpkg:ot+"MPKG.svg?vh=dea655",ttf:ot+"TTF.svg?vh=d2e2c1",otf:ot+"OTF.svg?vh=c904fd",woff:ot+"WOFF.svg?vh=4b8177",woff2:ot+"WOFF2.svg?vh=b532d3",eot:ot+"EOT.svg?vh=a54980",js:ot+"JS.svg?vh=524691",mjs:ot+"MJS.svg?vh=d57921",ts:ot+"TS.svg?vh=9af3ae",css:ot+"CSS.svg?vh=287863",html:ot+"HTML.svg?vh=fa7a87",htm:ot+"HTM.svg?vh=21323d",xhtml:ot+"XHTML.svg?vh=e6d6a9",xul:ot+"XUL.svg?vh=6c9c71",json:ot+"JSON.svg?vh=104c9e",jsonld:ot+"JSONLD.svg?vh=f30c0f",xml:ot+"XML.svg?vh=7f7194",php:ot+"PHP.svg?vh=503e36",sh:ot+"SH.svg?vh=3b820e",csh:ot+"CSH.svg?vh=08c0cc",exe:ot+"EXE.svg?vh=ccca53",iso:ot+"ISO.svg?vh=064b8f",bin:ot+"BIN.svg?vh=1e9618"};function nt(e){const t=(null==e?void 0:e.toLowerCase().replace(".",""))||"";return rt[t]||rt._default}function lt(){return rt._default}function dt(e){if(!e)return"";const t=e.split("/");return t.length>1?t[1]:t[0]}const ct=new Set(["png","svg","webp","gif","avif"]);function pt(e){const t=(null==e?void 0:e.toLowerCase().replace(".",""))||"";return ct.has(t)}const ht=new Set(["svg","svg+xml","png","pdf"]);function ut(e){return ht.has(dt(e).toLowerCase())}let gt=null;function ft(e,t){if(!e||!gt)return e;try{return gt(e,t)||e}catch(i){return console.warn("[asset-picker] transformRemoteThumbnail threw:",i),e}}function vt(e){var t;const i=e.info;return ft(xt((null==i?void 0:i.video_thumbnail)||(null==i?void 0:i.image_thumbnail)||(null==i?void 0:i.thumbnail)||(null==i?void 0:i.preview)||(null==(t=e.url)?void 0:t.cdn)||""),{source:"asset",asset:e})}function bt(e){const t=e.info,i=(null==t?void 0:t.video_thumbnail)||(null==t?void 0:t.image_thumbnail)||(null==t?void 0:t.thumbnail)||"";return i?ft(xt(i),{source:"video",asset:e}):""}function mt(e){var t,i;let s=xt((null==(t=e.url)?void 0:t.cdn)||(null==(i=e.url)?void 0:i.public)||"");return s?(s=s.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),ft(yt(s,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:e})):""}function yt(e,t){try{const i=new URL(e);for(const[e,s]of Object.entries(t))i.searchParams.set(e,s);return i.toString()}catch{return e}}const _t=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function xt(e,t){if(!e)return"";const i=e=>e.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(e.includes("assets.filerobot.com"))return i(e);const s=e.match(_t);if(s){const t=s[2];return i(e.replace(_t,`$1assets.filerobot.com/${t}/`))}if(t)try{const s=new URL(e);return i(`https://assets.filerobot.com/${t}${s.pathname}${s.search}`)}catch{}return e}function kt(e,t){const i=e.file_uri_cdn;if(!i)return"";let s=xt(i);const a=st(e.file_type),o=String(window.devicePixelRatio||1);let r;return"video"===a?r=yt(s,{w:t,dpr:o,force_format:"webp,jpeg"}):"application/pdf"===e.file_type||"pdf"===dt(e.file_type).toLowerCase()?(s=s.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),r=yt(s,{w:t,dpr:o,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):r=yt(s,{w:t,dpr:o}),ft(r,{source:"folder"})}function $t(e,t){const i={};return e.format&&(i.force_format=tt[e.format]),e.quality&&"png"!==e.format&&(i.q=String(Xe[e.quality])),e.width&&(i.w=String(e.width)),e.height&&(i.h=String(e.height)),(e.width||e.height)&&(i.org_if_sml="1",null!=t&&t.isMultiSelect?i.func="bound":!1===(null==t?void 0:t.isAspectLocked)&&(i.func="cover")),i}const wt={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},St="approval_status",Ct="task_approver",Ft="task_requester",At="task_duedate",Lt={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},Et={AND:"AND"},Ot={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Mt={[Ot.DATE]:"date_",[Ot.BOOLEAN]:"bool_",[Ot.NUMERIC]:"num_",[Ot.DECIMAL2]:"dec_",[Ot.ATTACHMENTS_ASSETS]:"attach_",[Ot.ATTACHMENT_URI]:"uri_",[Ot.SELECT_ONE]:"one_",[Ot.MULTI_SELECT]:"multi_",[Ot.SUPERTAGS]:"tags_",[Ot.TEXT]:"text_",[Ot.TEXT_AREA]:"area_",[Ot.GEO_POINT]:"geo_",[Ot.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Mt).map((e=>{let[t,i]=e;return[i,t]})));const Tt=Object.values(Mt),Pt={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},It={EMPTY:"empty",NOT_EMPTY:"non-empty"},Dt="empty",zt="non-empty",Rt="specific",jt="filters:pinned:",Nt="metadata:pinned:",Bt=[wt.DATE,wt.TYPE,wt.SIZE],Ut=Lt.IS,Kt="20",qt="1",Vt=[{key:wt.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:wt.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:wt.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:wt.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:wt.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:wt.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:wt.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:wt.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:wt.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],Ht=[{key:wt.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},...Vt,{key:wt.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"}],Gt={[wt.TYPE]:"Format",[wt.DATE]:"Date",[wt.SIZE]:"Size",[wt.LICENSE_EXPIRY]:"License expiry",[wt.TAGS]:"Tags",[wt.LABELS]:"Labels",[wt.PRODUCT_REF]:"Products",[wt.IMAGE]:"Image",[wt.COLOR]:"Color",[wt.METADATA]:"Metadata",[wt.APPROVAL]:"Approval",[St]:"Approval",[Ct]:"Approval",[Ft]:"Approval",[At]:"Approval"},Qt={...Object.fromEntries(Ht.map((e=>[e.key,e.labelKey]))),[St]:"filterApproval",[Ct]:"filterApproval",[Ft]:"filterApproval",[At]:"filterApproval"},Wt="image",Yt="video",Xt="audio",Jt="document",Zt="archive",ei="font",ti=[{value:Wt,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:Yt,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:Xt,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:Jt,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:Zt,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:"template_fdt",labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:ei,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:"other",labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],ii={[Wt]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[Yt]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[Xt]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[Jt]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[Zt]:["zip","rar","7z","tar","gz","bz2","xz"],[ei]:["ttf","otf","woff","woff2","eot"]},si={RESOLUTION:0,ORIENTATION:1,FACES:2},ai=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],oi=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],ri=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],ni=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],li=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],di=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],ci=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],pi=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],hi=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],ui=[{label:"Is",value:Lt.IS,labelKey:"operatorIs"},{label:"Contains",value:Lt.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],gi=[{label:"Is",value:Lt.IS,labelKey:"operatorIs"},{label:"Is not",value:Lt.IS_NOT,labelKey:"operatorIsNot"}],fi=[{label:"Is",value:Lt.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:Lt.IS,labelKey:"operatorContains"},{label:"Does not contain",value:Lt.IS_NOT,labelKey:"operatorDoesNotContain"}],vi=[{label:"Is",value:Lt.IS,labelKey:"operatorIs"},{label:"Greater than",value:Lt.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:Lt.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:Lt.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:Lt.RANGE,labelKey:"operatorBetween"}],bi=[{label:"Is",value:Lt.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:Lt.IS_NOT,labelKey:"operatorIsNot"}],mi=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],yi=[{label:"Empty",value:Dt,labelKey:"empty"},{label:"Not empty",value:zt,labelKey:"notEmpty"}],_i=[...yi,{label:"Specific",value:Rt,labelKey:"specific"}],xi=[{label:"Empty",value:Dt,labelKey:"empty"},{label:"Not empty",value:zt,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],ki={[Ot.DATE]:"calendar",[Ot.BOOLEAN]:"toggle-left",[Ot.NUMERIC]:"file-digit",[Ot.DECIMAL2]:"decimals-arrow-right",[Ot.ATTACHMENTS_ASSETS]:"paperclip",[Ot.ATTACHMENT_URI]:"link-2",[Ot.SELECT_ONE]:"circle-dot",[Ot.MULTI_SELECT]:"square-check",[Ot.SUPERTAGS]:"hash",[Ot.TEXT]:"text-initial",[Ot.TEXT_AREA]:"text-align-justify",[Ot.GEO_POINT]:"locate",[Ot.INTEGER_LIST]:"list-ordered"},$i={[Ot.TEXT]:"text",[Ot.TEXT_AREA]:"text",[Ot.NUMERIC]:"number",[Ot.DECIMAL2]:"number",[Ot.BOOLEAN]:"boolean",[Ot.SELECT_ONE]:"select-one",[Ot.MULTI_SELECT]:"multi-select",[Ot.SUPERTAGS]:"tags",[Ot.DATE]:"date",[Ot.GEO_POINT]:"geo",[Ot.ATTACHMENTS_ASSETS]:"attachment",[Ot.ATTACHMENT_URI]:"attachment",[Ot.INTEGER_LIST]:"attachment"};async function wi(e){var t;return((null==(t=(await e.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)?void 0:t.file_types)??[]).map((e=>({name:e.name,value:e.value,count:e.count,category:e.category??e.value.split("_")[0],label:Si(e.name)})))}function Si(e){const t=e.indexOf("\u203a");return(-1!==t?e.slice(t+1).trim():e).toUpperCase()}async function Ci(e){var t,i;const s=await e.request("/settings"),a=s.settings??s,o=(null==a?void 0:a.metadata)??s.metadata,r=((null==o?void 0:o.model)??[])[0],n=null==o?void 0:o.store,l=((null==n?void 0:n.regional_variants_groups)??[]).map((e=>({uuid:e.uuid,label:e.label??e.name??"",variants:(e.variants??[]).map((e=>({api_value:e.api_value??e.value??"",internal_unique_value:e.internal_unique_value??e.api_value??"",label:e.label??e.name??""})))}))).filter((e=>e.variants.length>1)),d={};for(const g of l)d[g.uuid]=(null==(t=g.variants[0])?void 0:t.api_value)??"";const c=(null==a?void 0:a.project_branding)??(null==(i=s.settings)?void 0:i.project_branding),p=null==c?void 0:c.brandColor;if(!r)return{fields:[],regionalVariantGroups:l,regionalFilters:d,brandColor:p};const h=r.groups??[],u=[];for(const g of h){const e=g.name||"";for(const t of g.fields??[]){const i=t.possible_values,s=null==i?void 0:i.map((e=>({api_value:e.api_value??e.value??"",internal_unique_value:e.internal_unique_value??e.api_value??"",label:e.label??e.name??e.api_value??""})));u.push({key:t.key??t.ckey,label:t.title??t.label??t.key??"",type:t.type??"text",slug:t.slug,ckey:t.ckey,possible_values:s,group:e,regionalVariantsGroupUuid:t.regional_variants_group_uuid})}}return{fields:u,regionalVariantGroups:l,regionalFilters:d,brandColor:p}}function Fi(e){return e.toLocaleDateString("en-CA")}function Ai(){return Fi(new Date)}function Li(e){const t=new Date;switch(e){case"today":return{from:Ai(),to:null};case"last_week":{const e=new Date(t);return e.setDate(e.getDate()-7),{from:Fi(e),to:null}}case"within_week":{const e=new Date(t);return e.setDate(e.getDate()+7),{from:Ai(),to:Fi(e)}}case"last_month":{const e=new Date(t);return e.setDate(e.getDate()-30),{from:Fi(e),to:null}}case"within_month":{const e=new Date(t);return e.setDate(e.getDate()+30),{from:Ai(),to:Fi(e)}}case"last_year":{const e=new Date(t);return e.setDate(e.getDate()-365),{from:Fi(e),to:null}}case"within_year":{const e=new Date(t);return e.setDate(e.getDate()+365),{from:Ai(),to:Fi(e)}}default:return null}}function Ei(e,t){return!!t&&("date"===t.type?function(e){return!(!e.kind&&!e.preset||"preset"===e.kind&&!e.preset||"between"===e.kind&&!e.from&&!e.to||"after"===e.kind&&!e.from||"before"===e.kind&&!e.to||"specific"===e.kind&&!e.from||e.from&&e.to&&new Date(e.from)>new Date(e.to))}(t):"string"!==t.type||function(e){return!(!e.values||!Array.isArray(e.values))&&e.values.filter(Boolean).length>0}(t))}function Oi(e,t){if("date"===t.type)return Mi(e,t);if(e===wt.IMAGE)return function(e){const t=[];if("object"==typeof e&&null!==e&&!Array.isArray(e)){const i=e,s=i.resolution,a=i.orientation,o=i.faces;return null!=s&&s.length&&t.push(`resolution:"${s.join(",")}"`),null!=a&&a.length&&t.push(`orientation:"${a.join(",")}"`),null!=o&&o.length&&t.push(`faces:"${o.join(",")}"`),t}const i=e,s=i[si.RESOLUTION],a=i[si.ORIENTATION],o=i[si.FACES];return s&&t.push(`resolution:"${s}"`),a&&t.push(`orientation:"${a}"`),o&&t.push(`faces:"${o}"`),t}(t);const i=t,{operator:s=Ut,values:a=[],logic:o}=i;if(0===a.length)return[];switch(e){case wt.SIZE:return function(e,t,i){return 0===t.length?[]:[`${e}:"${t.join(i)}"`]}(e,a,"..");case wt.FACES:return function(e,t,i){return 0===i.length?[]:[`${e}${t}"${i.join(",")}"`]}(e,s,a);case wt.TAGS:case wt.LABELS:return Ti(e,s,Ii(a),",",o);case wt.COLOR:return function(e,t,i){const s=[],a=Ti("color_search",e,t,",",i);return s.push(...a),s.push('color_operator:"AND"'),s}(s,a,o);case wt.TYPE:return function(e,t){if(0===e.length)return[];const i=new Set,s=[];for(const o of e){const e=ii[o];if(e)for(const t of e){const e=`${o}_${t}`;i.has(e)||(i.add(e),s.push(e))}else i.has(o)||(i.add(o),s.push(o))}const a=s.map((e=>`"${e}"`)).join(",");return[`type${t}${a}`]}(a,s);case wt.MIME_TYPE:return function(e,t,i,s){if(0===t.length)return[];const a=t.map((e=>`"${e}"`)).join(",");return[`${e}${i}${a}`]}(e,a,s);case wt.PRODUCT_REF:return Ti(e,"=%",a,",",o);default:return Ti(e,s,a,",",o)}}function Mi(e,t){const i=t.field||"created";if(t.kind===Pt.PRESET&&t.preset){if(t.preset===It.EMPTY)return[`${i}:"empty"`];if(t.preset===It.NOT_EMPTY)return[`${i}:"non-empty"`];const e=Li(t.preset);return e?null===e.to?[`${i}>"${e.from}"`]:[`${i}:"${e.from}..${e.to}"`]:[]}if(t.kind===Pt.AFTER&&t.from)return[`${i}:>"${t.from}"`];if(t.kind===Pt.BEFORE&&t.to)return[`${i}:<"${t.to}"`];if(t.kind===Pt.BETWEEN){if(t.from&&t.to)return[`${i}:"${t.from}..${t.to}"`];if(t.from&&!t.to)return[`${i}:>"${t.from}"`];if(!t.from&&t.to)return[`${i}:<"${t.to}"`]}return t.kind===Pt.SPECIFIC&&t.from?[`${i}:"${t.from}"`]:[]}function Ti(e,t,i,s,a){if(0===i.length)return[];if(a===Et.AND)return i.map((i=>`${e}${t}"${i}"`));const o=i.map((e=>`"${e}"`)).join(s);return[`${e}${t}${o}`]}function Pi(e,t){const i=function(e){for(const t of Tt)if(e.startsWith(t))return e.slice(t.length);return e}(e),s=function(e){return e.startsWith("date_")}(e);if("date"===t.type)return function(e,t,i){const s=Mi(0,t);return i&&0!==s.length?s.map((e=>{const t=e.search(/[^a-zA-Z0-9_]/);if(-1===t)return`"${e}"`;return`"${e.slice(0,t)}${e.slice(t).replace(/"/g,"")}"`})):s}(0,t,s);const a=t,{operator:o=Ut,values:r=[],logic:n,metadataType:l}=a;if(0===r.length)return[];if(1===r.length&&(r[0]===Dt||r[0]===zt)){return[`${i}${l===Ot.GEO_POINT?Lt.IS+"~":Lt.IS}"${r[0]}"`]}if((l===Ot.NUMERIC||l===Ot.DECIMAL2)&&o===Lt.RANGE)return[`${i}${Lt.IS}"${r.join('","')}"`];if(l===Ot.GEO_POINT){return Ti(i,o+"~",r.map((e=>{const t=e.indexOf("..");if(-1===t)return`(${e})`;return`(${e.slice(0,t)})${e.slice(t)}`})),",",n)}return Ti(i,o,r,",",n)}function Ii(e){return e.map((e=>e.replace(/#/g,"")))}const Di=new Set([wt.DATE,wt.LICENSE_EXPIRY,At]),zi={[wt.DATE]:"created",[wt.LICENSE_EXPIRY]:wt.LICENSE_EXPIRY,[At]:At};function Ri(e){if(!e)return{};const t={};for(const[i,s]of Object.entries(e))s&&(t[i]=ji(i,s));return t}function ji(e,t){return"string"===t.type||"date"===t.type?t:Di.has(e)?{type:"date",field:t.field??zi[e]??"created",kind:t.kind??null,preset:t.preset??null,from:t.from??null,to:t.to??null}:{type:"string",values:t.values,...void 0!==t.operator&&{operator:t.operator},...void 0!==t.logic&&{logic:t.logic}}}const Ni="sort-by",Bi="sort-order";function Ui(e,t){try{localStorage.setItem(Ni,e),localStorage.setItem(Bi,t)}catch{}}const Ki="ap-last-folder",qi="ap-last-view",Vi="ap-last-tab";function Hi(e,t){return t?`${e}:${t}`:e}function Gi(e,t){try{localStorage.setItem(Hi(Ki,t),e)}catch{}}function Qi(e){try{return localStorage.getItem(Hi(qi,e))}catch{return null}}function Wi(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Yi(e,t){const i=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!t){for(const t of i)e.style.removeProperty(t);return}const[s,a,o]=function(e){const t=e.replace("#",""),i=3===t.length?t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t;return[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255]}(t),[r,n,l]=function(e,t,i){const s=Wi(e),a=Wi(t),o=Wi(i),r=.4122214708*s+.5363325363*a+.0514459929*o,n=.2119034982*s+.6806995451*a+.1073969566*o,l=.0883024619*s+.2817188376*a+.6299787005*o,d=Math.cbrt(r),c=Math.cbrt(n),p=Math.cbrt(l),h=.2104542553*d+.793617785*c-.0040720468*p,u=1.9779984951*d-2.428592205*c+.4505937099*p,g=.0259040371*d+.7827717662*c-.808675766*p,f=Math.sqrt(u*u+g*g);let v=Math.atan2(g,u)*(180/Math.PI);return v<0&&(v+=360),[h,f,v]}(s,a,o),d=`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)})`,c=function(e){return e>.7}(r)?"#000":"#fff";e.style.setProperty("--ap-primary",d),e.style.setProperty("--ap-primary-foreground",c),e.style.setProperty("--ap-primary-10",`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.1)`),e.style.setProperty("--ap-primary-20",`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.2)`),e.style.setProperty("--ap-accent",`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.07)`),e.style.setProperty("--ap-accent-foreground",d),e.style.setProperty("--ap-ring",`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.7)`),e.style.setProperty("--ap-selection-bg",`oklch(${r.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.08)`)}const Xi=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],Ji=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...Xi],Zi=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],es=[{value:"name",labelKey:"sortName",label:"Name"}],ts=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],is=[{value:"name",labelKey:"sortName",label:"Name"}];var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,os=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?as(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ss(t,i,o),o};let rs=class extends s.oi{constructor(){super(...arguments),this.open=!1}updated(e){var t;super.updated(e),e.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():null!=(t=this.dialog)&&t.open&&this._animateClose())}_animateClose(){const e=this.dialog;if(e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void e.close();e.classList.add("closing"),e.addEventListener("animationend",(()=>{e.classList.remove("closing"),e.close()}),{once:!0})}}_handleBackdropClick(e){e.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return s.dy`
      <dialog
        @click=${this._handleBackdropClick}
        @cancel=${this._handleCancel}
      >
        <div class="modal-body">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    `}};rs.styles=s.iv`
    :host {
      display: contents;
    }
    dialog:not([open]) {
      display: none;
    }
    dialog {
      position: fixed;
      inset: 0;
      width: 100%;
      max-width: var(--ap-modal-max-width, 1200px);
      height: var(--ap-modal-height, 85vh);
      max-height: var(--ap-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--ap-modal-radius, 12px);
      box-shadow: var(--ap-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    dialog[open] {
      animation: ap-modal-in 200ms ease-out;
    }
    dialog.closing {
      animation: ap-modal-out 150ms ease-in forwards;
    }
    dialog::backdrop {
      background: var(--ap-modal-backdrop, rgba(0, 0, 0, 0.5));
      animation: ap-backdrop-in 200ms ease-out;
    }
    @keyframes ap-modal-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes ap-modal-out {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.95); }
    }
    @keyframes ap-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--ap-modal-max-height, 85vh);
      overflow: hidden;
    }
    .modal-header {
      flex-shrink: 0;
    }
    .modal-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .modal-footer {
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      dialog[open], dialog::backdrop, dialog.closing {
        animation: none;
      }
    }
  `,os([(0,a.Cb)({type:Boolean})],rs.prototype,"open",2),os([(0,a.IO)("dialog")],rs.prototype,"dialog",2),rs=os([(0,a.Mo)("ap-modal")],rs);const ns=s.iv`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var ls=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,cs=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ds(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ls(t,i,o),o};let ps=class extends s.oi{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(e,t)=>"string"==typeof t?t:e,this._open=!1,this._handleOutsideClick=e=>{this._open&&!e.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(e,t){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e,value:t},bubbles:!0,composed:!0}))}render(){const e=this.groups.length>0;return s.dy`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalSettings","Regional settings")}
        title=${this.t("regionalSettings","Regional settings")}
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${e?s.Ld:s.dy`
          <div class="empty-msg">
            ${this.t("noRegionalSettings","No regional settings configured")}
          </div>
        `}
        ${this.groups.map((e=>s.dy`
          <div class="group">
            <div class="group-label">${e.label}</div>
            ${e.variants.map((t=>{const i=this.selectedFilters[e.uuid]===t.api_value;return s.dy`
                <button
                  class="variant-option"
                  ?data-selected=${i}
                  @click=${()=>this._selectVariant(e.uuid,t.api_value)}
                >
                  <span class="variant-label">${t.label}</span>
                  <span class="check-mark">${i?s.dy`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                </button>
              `}))}
          </div>
        `))}
      </div>
    `}};ps.styles=s.iv`
    :host {
      position: relative;
      display: inline-block;
    }
    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .popover {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 220px;
      max-height: 320px;
      overflow-y: auto;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 0;
    }
    .popover.open {
      display: block;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .variant-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      padding: 6px 16px 6px 24px;
      border: none;
      background: none;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
    .empty-msg {
      padding: 12px;
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `,cs([(0,a.Cb)({type:Array})],ps.prototype,"groups",2),cs([(0,a.Cb)({type:Object})],ps.prototype,"selectedFilters",2),cs([(0,a.Cb)({attribute:!1})],ps.prototype,"t",2),cs([(0,a.SB)()],ps.prototype,"_open",2),ps=cs([(0,a.Mo)("ap-regional-settings")],ps);var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,gs=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?us(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&hs(t,i,o),o};const fs=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let vs=class extends s.oi{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(e,t)=>"string"==typeof t?t:e,this._localSearch="",this._debouncedSearch=function(e,t){let i;const s=function(){for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];clearTimeout(i),i=setTimeout((()=>e(...a)),t)};return s.cancel=()=>clearTimeout(i),s}((e=>{(0===e.length||e.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:e},bubbles:!0,composed:!0}))}),300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(e){e.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(e){const t=e.target.value;this._localSearch=t,this._debouncedSearch(t)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const e="grid"===this.viewMode?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:e},bubbles:!0,composed:!0}))}_handleTabChange(e){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:e.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(e){this.dispatchEvent(new CustomEvent("regional-change",{detail:e.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t:e}=this,t=fs.filter((e=>this.tabs.includes(e.value))).map((t=>({...t,label:e(t.labelKey,t.labelDefault)})));return s.dy`
      <div class="header-row">
        ${t.length>1?s.dy`<ap-dropdown
              .value=${this.activeTab}
              .options=${t}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`:s.Ld}
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?"folders"===this.activeTab?e("aiSearchFoldersPlaceholder","AI search folders and assets"):e("aiSearchAssetsPlaceholder","AI search assets"):"labels"!==this.activeTab||this.isInsideLabel?"collections"!==this.activeTab||this.isInsideCollection?"collections"===this.activeTab&&this.isInsideCollection&&!this.isInsideCollectionLeaf?e("searchCollectionFoldersPlaceholder","Search collection folders"):"folders"===this.activeTab?e("searchFoldersPlaceholder","Search folders and assets"):e("searchAssetsPlaceholder","Search assets"):e("searchCollectionsPlaceholder","Search collections"):e("searchLabelsPlaceholder","Search labels")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?s.dy`
              <button class="clear-btn" @click=${this._clearSearch} aria-label=${e("clearSearch","Clear search")}>
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            `:""}
            ${this.enableAISearch?s.dy`
              <button
                class="ai-toggle ${this.isAISearchActive?"active":""}"
                @click=${this._toggleAISearch}
                aria-label=${this.isAISearchActive?e("disableAISearch","Disable AI search"):e("enableAISearch","Enable AI search")}
                title=${this.isAISearchActive?e("aiSearchOn","AI search on"):e("aiSearchOff","AI search off")}
              >
                <ap-icon name="sparkles" .size=${12}></ap-icon>
                <span>AI</span>
              </button>
            `:""}
          </div>
        </div>
        <div class="actions">
          <ap-regional-settings
            .groups=${this.regionalGroups}
            .selectedFilters=${this.regionalFilters}
            .t=${e}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${"grid"===this.viewMode?e("switchToListView","Switch to list view"):e("switchToGridView","Switch to grid view")}
            title=${"grid"===this.viewMode?e("listView","List view"):e("gridView","Grid view")}
          >
            <ap-icon name=${"grid"===this.viewMode?"list":"layout-grid"} .size=${18}></ap-icon>
          </button>
          ${this.hideClose?s.Ld:s.dy`
            <div class="divider"></div>
            <button class="icon-btn icon-btn--muted" @click=${this._handleClose} aria-label=${e("close","Close")}>
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `}};vs.styles=[ns,s.iv`
    :host {
      display: block;
      padding: 16px 20px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-wrapper {
      flex: 1;
      min-width: 0;
      max-width: 548px;
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }
    input {
      width: 100%;
      height: 36px;
      box-sizing: border-box;
      padding: 0 34px 0 38px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }
    :host([ai-search]) input {
      padding-right: 90px;
    }
    .search-actions {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .clear-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .ai-toggle {
      display: flex;
      align-items: center;
      gap: 4px;
      height: 26px;
      padding: 0 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-size: 12px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
      white-space: nowrap;
    }
    .ai-toggle:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .ai-toggle.active {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: white;
      border-color: transparent;
    }
    .ai-toggle.active:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: white;
      border-color: transparent;
      opacity: 0.9;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .tab-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      padding: 0 4px;
      white-space: nowrap;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: auto;
    }
    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn--muted {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `],gs([(0,a.Cb)()],vs.prototype,"activeTab",2),gs([(0,a.Cb)({type:Array})],vs.prototype,"tabs",2),gs([(0,a.Cb)({type:Boolean})],vs.prototype,"isInsideLabel",2),gs([(0,a.Cb)({type:Boolean})],vs.prototype,"isInsideCollection",2),gs([(0,a.Cb)({type:Boolean})],vs.prototype,"isInsideCollectionLeaf",2),gs([(0,a.Cb)()],vs.prototype,"viewMode",2),gs([(0,a.Cb)()],vs.prototype,"searchQuery",2),gs([(0,a.Cb)({type:Array})],vs.prototype,"regionalGroups",2),gs([(0,a.Cb)({type:Object})],vs.prototype,"regionalFilters",2),gs([(0,a.Cb)({type:Boolean})],vs.prototype,"hideClose",2),gs([(0,a.Cb)({type:Boolean,reflect:!0,attribute:"ai-search"})],vs.prototype,"enableAISearch",2),gs([(0,a.Cb)({type:Boolean})],vs.prototype,"isAISearchActive",2),gs([(0,a.Cb)({attribute:!1})],vs.prototype,"t",2),gs([(0,a.SB)()],vs.prototype,"_localSearch",2),vs=gs([(0,a.Mo)("ap-header")],vs);var bs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,ys=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ms(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&bs(t,i,o),o};let _s=class extends s.oi{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(e){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:e},bubbles:!0,composed:!0}))}render(){return 0===this.items.length?s.dy``:s.dy`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map(((e,t)=>s.dy`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${t<this.items.length-1?s.dy`<button @click=${()=>this._navigate(e.uuid)}>${e.name}</button>`:s.dy`<span class="current">${e.name}</span>`}
          `))}
      </nav>
    `}};_s.styles=s.iv`
    :host {
      display: block;
      padding: 4px 20px 12px;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button {
      border: none;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button:first-child {
      margin-left: -6px;
    }
    button:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .current {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-weight: 500;
      padding: 4px 6px;
    }
    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `,ys([(0,a.Cb)({type:Array})],_s.prototype,"items",2),ys([(0,a.Cb)()],_s.prototype,"rootLabel",2),_s=ys([(0,a.Mo)("ap-breadcrumb")],_s);const xs=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`));class ks extends o.Xe{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==o.pX.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return s.Jb}update(e,t){let[i]=t;if(i===this._lastStyles)return s.Jb;this._lastStyles=i;const{style:a}=e.element,o=i??{};for(const s of this._appliedProps)(!(s in o)||null==o[s]||""===o[s])&&(a.removeProperty(xs(s)),this._appliedProps.delete(s));for(const[s,r]of Object.entries(o))null!=r&&""!==r?(a.setProperty(xs(s),r),this._appliedProps.add(s)):this._appliedProps.has(s)&&(a.removeProperty(xs(s)),this._appliedProps.delete(s));return s.Jb}}const $s=(0,o.XM)(ks);var ws=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Cs=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ss(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ws(t,i,o),o};let Fs=class extends s.oi{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?s.dy`
      <div class="popover">
        ${this.title?s.dy`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:s.dy``}};Fs.styles=s.iv`
    :host {
      display: block;
    }
    .popover {
      position: absolute;
      top: calc(100% + 4px);
      left: 20px;
      z-index: 50;
      width: 320px;
      max-height: 400px;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 12px;
    }
  `,Cs([(0,a.Cb)()],Fs.prototype,"title",2),Cs([(0,a.Cb)({type:Boolean})],Fs.prototype,"open",2),Fs=Cs([(0,a.Mo)("ap-filter-popover")],Fs);var As=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Es=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ls(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&As(t,i,o),o};function Os(e){var t;const i=new Map;for(const a of e){const e=a.category||a.value.split("_")[0];if(!i.has(e)){const t=ti.find((t=>t.value===e));i.set(e,{key:e,labelKey:(null==t?void 0:t.labelKey)||e,label:(null==t?void 0:t.label)||e.charAt(0).toUpperCase()+e.slice(1),icon:(null==t?void 0:t.icon)||"file",extensions:[],totalCount:0})}const s=i.get(e);s.extensions.push({value:a.value,label:a.label||(null==(t=a.value.split("_").pop())?void 0:t.toUpperCase())||a.value,count:a.count}),s.totalCount+=a.count}const s=ti.map((e=>e.value));return[...i.values()].sort(((e,t)=>{const i=s.indexOf(e.key),a=s.indexOf(t.key);return(-1===i?999:i)-(-1===a?999:a)}))}let Ms=class extends s.oi{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(e,t)=>"string"==typeof t?t:e,this._search="",this._expanded=new Set}_extValues(e){return e.extensions.map((e=>e.value))}_isGroupFullySelected(e){if(this.selected.includes(e.key))return!0;const t=this._extValues(e);return t.length>0&&t.every((e=>this.selected.includes(e)))}_isGroupPartial(e){if(this.selected.includes(e.key))return!1;const t=this._extValues(e),i=t.filter((e=>this.selected.includes(e))).length;return i>0&&i<t.length}_isExtSelected(e,t){return this.selected.includes(t)||this.selected.includes(e)}_toggleGroup(e){const t=this._extValues(e);let i;if(this._isGroupFullySelected(e)){const s=new Set([e.key,...t]);i=this.selected.filter((e=>!s.has(e)))}else{const s=new Set(t);i=this.selected.filter((e=>!s.has(e))),i.push(e.key)}this._emit(i)}_toggleExt(e,t){const i=this._extValues(t);let s=[...this.selected];s.includes(t.key)&&(s=s.filter((e=>e!==t.key)),s.push(...i)),s.includes(e)?s=s.filter((t=>t!==e)):(s.push(e),i.every((e=>s.includes(e)))&&(s=s.filter((e=>!i.includes(e))),s.push(t.key))),this._emit(s)}_clearAll(){this._emit([])}_emit(e){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.TYPE,values:e,operator:Lt.IS},bubbles:!0,composed:!0}))}_toggleExpand(e){const t=new Set(this._expanded);t.has(e)?t.delete(e):t.add(e),this._expanded=t}_filteredGroups(e){const t=this._search.toLowerCase().trim();return t?e.map((e=>{if(e.label.toLowerCase().includes(t)||e.key.toLowerCase().includes(t))return e;const i=e.extensions.filter((e=>e.label.toLowerCase().includes(t)||e.value.toLowerCase().includes(t)));return 0===i.length?null:{...e,extensions:i}})).filter((e=>null!==e)):e}_toggleCategory(e){const t=this.selected.includes(e)?this.selected.filter((t=>t!==e)):[...this.selected,e];this._emit(t)}updated(e){if(e.has("fileTypes")&&this.fileTypes.length>0){const e=Os(this.fileTypes),t=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&t.add(i.key);this._expanded=t}}render(){if(0===this.fileTypes.length)return this._renderFallback();const e=Os(this.fileTypes),t=this._filteredGroups(e),i=this.selected.length>0;return s.dy`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${e=>{this._search=e.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${i?s.dy`<button class="clear-btn" @click=${this._clearAll}>${this.t("clearAll","Clear all")}</button>`:s.Ld}
      </div>
      <div class="groups">
        ${0===t.length&&this._search.trim()?s.dy`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:t.map((e=>this._renderGroup(e)))}
      </div>
    `}_renderGroup(e){const t=this._expanded.has(e.key)||this._search.trim().length>0,i=this._isGroupFullySelected(e),a=this._isGroupPartial(e);return s.dy`
      <div
        class="group-header ${i||a?"selected":""}"
        @click=${()=>this._toggleExpand(e.key)}
      >
        <svg class="group-chevron ${t?"expanded":""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${e.icon} size="16"></ap-icon>
        <span class="group-label">${this.t(e.labelKey,e.label)}</span>
        <ap-checkbox
          ?checked=${i}
          ?indeterminate=${a}
          @click=${e=>e.stopPropagation()}
          @ap-toggle=${()=>this._toggleGroup(e)}
        ></ap-checkbox>
      </div>
      ${t?s.dy`
          <div class="extensions">
            ${e.extensions.map((t=>s.dy`
              <div
                class="ext-row"
                @click=${()=>this._toggleExt(t.value,e)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(t.value,e.key)}
                  @click=${e=>e.stopPropagation()}
                  @ap-toggle=${()=>this._toggleExt(t.value,e)}
                ></ap-checkbox>
                <span class="ext-label">${t.label}</span>
              </div>
            `))}
          </div>
        `:s.Ld}
    `}_renderFallback(){return s.dy`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${ti.map((e=>s.dy`
            <div
              class="option ${this.selected.includes(e.value)?"selected":""}"
              @click=${()=>this._toggleCategory(e.value)}
            >
              <ap-checkbox ?checked=${this.selected.includes(e.value)}></ap-checkbox>
              <ap-icon name=${e.icon} size="16"></ap-icon>
              <span class="option-label">${e.label}</span>
            </div>
          `))}
      </div>
    `}};Ms.styles=s.iv`
    :host {
      display: block;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--ap-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .groups {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .group-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .extensions {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-left: 22px;
    }

    .ext-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    /* Fallback flat list (no API data) */
    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `,Es([(0,a.Cb)({type:Array})],Ms.prototype,"selected",2),Es([(0,a.Cb)({type:Array})],Ms.prototype,"fileTypes",2),Es([(0,a.Cb)({attribute:!1})],Ms.prototype,"t",2),Es([(0,a.SB)()],Ms.prototype,"_search",2),Es([(0,a.SB)()],Ms.prototype,"_expanded",2),Ms=Es([(0,a.Mo)("ap-filter-type")],Ms);const Ts=s.iv`
  :host {
    display: block;
  }

  .filter-content {
    position: relative;
    padding: 0;
  }

  /* ── Clear all button ── */
  .clear-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 0;
    border: none;
    background: none;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-primary, oklch(0.578 0.198 268.129));
    cursor: pointer;
    opacity: 0.9;
  }
  .clear-btn:hover:not(:disabled) {
    opacity: 1;
    text-decoration: underline;
  }
  .clear-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  /* ── Section label ── */
  .section-label {
    display: block;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-weight: 400;
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 8px;
    cursor: default;
  }

  /* ── Section header (label + clear-btn row) ── */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .section-header .section-label {
    margin-bottom: 0;
  }
  .section-header .clear-btn {
    position: static;
  }

  /* ── Section spacing ── */
  .filter-section {
    position: relative;
    margin-bottom: 20px;
  }
  .filter-section:last-child {
    margin-bottom: 0;
  }

  /* ── Separator ── */
  .separator {
    height: 1px;
    background: var(--ap-border, oklch(92.86% 0.009 247.92));
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: oklch(0.97 0.01 245);
    border: 1px solid oklch(0.92 0.015 245);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--ap-info-foreground, oklch(0.391 0.091 241.289));
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert ap-icon {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--ap-info, oklch(0.632 0.161 245.564));
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }

  /* ── Date input: Lucide calendar icon ── */
  .filter-input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .filter-input[type="date"] {
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
    padding-right: 32px;
  }

  textarea.filter-input {
    min-height: 60px;
    resize: vertical;
  }

  /* ── Input label ── */
  .input-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 4px;
  }
  .input-label[aria-disabled="true"] {
    opacity: 0.5;
  }

  /* ── Grid layouts ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  /* ── Removable chip ── */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
    max-width: 200px;
  }
  .chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .chip-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: none;
    background: none;
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    margin-top: 4px;
  }

  /* ── Search input (flush with popover edges, like tags) ── */
  .search-wrapper {
    position: sticky;
    top: -10px;
    z-index: 2;
    background: var(--ap-card, oklch(1 0 0));
    margin: -10px -8px 10px;
  }
  .search-wrapper .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 32px;
    border: none;
    border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 0;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: transparent;
    outline: none;
  }
  .search-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }
  .search-clear {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
  }

  /* ── Options list (checkbox-based) ── */
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .options-list.short {
    max-height: none;
    overflow-y: visible;
  }
  .no-results {
    padding: 12px;
    text-align: center;
    font-size: var(--ap-font-size-sm, 0.875rem);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
  }
`;var Ps=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Ds=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Is(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ps(t,i,o),o};function zs(e){return e.toISOString().split("T")[0]}let Rs=class extends s.oi{constructor(){super(...arguments),this.filterKey=wt.DATE,this.t=(e,t)=>"string"==typeof t?t:e,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===wt.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?di:li).map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _fieldOptions(){return ni.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _todayStr(){return zs(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(e){return["before","after","between","specific"].includes(e)?e:"preset"}_selectField(e){this.field=e,this._dispatchChange()}_selectPreset(e){if(!e)return void this._clearAll();const t=this._kindFromValue(e);if(this.kind=t,this.preset=e,["before","after","between","specific"].includes(e))return this.from="",this.to="",void this.requestUpdate();const i=Li(e);i&&(this.from=i.from,this.to=i.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(e,t){const i=t.target.value,s=i?new Date(i+"T00:00:00").toISOString():"";if("from"===e?this.from=s:this.to=s,"specific"===this.preset&&"from"===e&&s){const e=new Date(i+"T23:59:59");this.to=e.toISOString()}"after"===this.preset&&"from"===e&&s&&(this.to=(new Date).toISOString()),"before"===this.preset&&"to"===e&&s&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?s.Ld:s.dy`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <ap-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @ap-change=${e=>this._selectField(e.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return s.dy`
      <div class="filter-section">
        <span class="section-label">${this.t("dateRange","Range")}</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${e=>this._selectPreset(e.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const e=this.preset;if(!["before","after","between","specific"].includes(e))return s.Ld;const t=this.from?zs(new Date(this.from)):"",i=this.to?zs(new Date(this.to)):"",a=this._todayStr;return"specific"===e?s.dy`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${a}
              .value=${t}
              @change=${e=>this._handleDateInput("from",e)}
            />
          </div>
        </div>
      `:"before"===e?s.dy`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${a}
              .value=${i}
              @change=${e=>this._handleDateInput("to",e)}
            />
          </div>
        </div>
      `:"after"===e?s.dy`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${a}
              .value=${t}
              @change=${e=>this._handleDateInput("from",e)}
            />
          </div>
        </div>
      `:s.dy`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i||a}
              .value=${t}
              @change=${e=>this._handleDateInput("from",e)}
            />
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              min=${t}
              max=${a}
              .value=${i}
              @change=${e=>this._handleDateInput("to",e)}
            />
          </div>
        </div>
      </div>
    `}render(){return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${()=>this._clearAll()}
        >${this.t("clearAll","Clear all")}</button>
        ${this._renderDateTypeSection()}
        ${this._renderRangeSection()}
        ${this._renderDateInputs()}
      </div>
    `}};Rs.styles=[Ts,s.iv`
    .date-inputs {
      margin-top: 4px;
    }
  `],Ds([(0,a.Cb)()],Rs.prototype,"filterKey",2),Ds([(0,a.Cb)({attribute:!1})],Rs.prototype,"t",2),Ds([(0,a.Cb)()],Rs.prototype,"field",2),Ds([(0,a.Cb)()],Rs.prototype,"kind",2),Ds([(0,a.Cb)()],Rs.prototype,"preset",2),Ds([(0,a.Cb)()],Rs.prototype,"from",2),Ds([(0,a.Cb)()],Rs.prototype,"to",2),Rs=Ds([(0,a.Mo)("ap-filter-date")],Rs);var js=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,Bs=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ns(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&js(t,i,o),o};let Us=class extends s.oi{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=wt.TAGS,this.t=(e,t)=>"string"==typeof t?t:e,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{var e;return null==(e=this._searchInput)?void 0:e.focus()}))}get _suggestedTags(){return this.tags.filter((e=>e.primary))}get _otherTags(){return this.tags.filter((e=>!e.primary))}get _atLimit(){return this.selected.length>=10}get _isSearching(){return this._search.trim().length>0}_toggle(e){const t=this.selected.includes(e);if(!t&&this._atLimit)return;const i=t?this.selected.filter((t=>t!==e)):[...this.selected,e];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:i,operator:Lt.IS},bubbles:!0,composed:!0}))}_remove(e){const t=this.selected.filter((t=>t!==e));this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:t,operator:Lt.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:Lt.IS},bubbles:!0,composed:!0}))}_onSearchInput(e){this._search=e.target.value}_clearSearch(){this._search=""}_getTagBySid(e){return this.tags.find((t=>t.sid===e))}_renderTagItem(e){const t=this.selected.includes(e.sid),i=!t&&this._atLimit;return s.dy`
      <div
        class="tag-item ${i?"disabled":""}"
        title=${i?"You can select up to 10 tags":s.Ld}
        @click=${()=>!i&&this._toggle(e.sid)}
      >
        <ap-checkbox ?checked=${t}></ap-checkbox>
        <span class="tag-name">${e.label}</span>
      </div>
    `}render(){const e=this._search.toLowerCase().trim();return s.dy`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?s.dy`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?s.dy`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((e=>{const t=this._getTagBySid(e);return t?s.dy`
                      <div class="chip">
                        <span class="chip-label">${t.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:s.Ld}))}
                </div>
              </div>
            `:s.Ld}

        ${this._isSearching?this._renderSearchResults(e):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?s.dy`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${10} tags.</span>
              </div>
            `:s.Ld}
      </div>
    `}_renderSearchResults(e){const t=t=>t.toLowerCase().includes(e),i=this._suggestedTags.filter((e=>t(e.label))).slice(0,50),a=this._otherTags.filter((e=>t(e.label))).slice(0,50);return 0===i.length&&0===a.length?s.dy`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:s.dy`
      ${i.length>0?s.dy`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>
                <button
                  class="clear-btn"
                  ?disabled=${0===this.selected.length}
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
              <div class="options-list short">
                ${i.map((e=>this._renderTagItem(e)))}
              </div>
            </div>
          `:s.Ld}

      ${a.length>0?s.dy`
            <div class="filter-section">
              <div class="section-header">
                ${0===i.length?s.dy`<span class="section-label">${this.t("allTags","All tags")}</span>
                    <button
                      class="clear-btn"
                      ?disabled=${0===this.selected.length}
                      @click=${this._clearAll}
                    >${this.t("clearAll","Clear all")}</button>`:s.dy`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${a.map((e=>this._renderTagItem(e)))}
              </div>
            </div>
          `:s.Ld}
    `}_renderSections(){if(0===this.tags.length)return s.dy`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const e=this._suggestedTags.filter((e=>!this.selected.includes(e.sid)));return s.dy`
      <div class="filter-section">
        ${e.length>0?s.dy`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:s.Ld}
        ${e.length>0?s.dy`
              <div class="options-list short">
                ${e.map((e=>this._renderTagItem(e)))}
              </div>
            `:s.Ld}
      </div>

      ${e.length>0?s.dy`<div class="separator"></div>`:s.Ld}

      <div class="hint-message">${this.t("findMoreTagsBySearch","Find more tags by using search")}</div>
    `}};Us.styles=[ns,Ts,s.iv`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .tag-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .tag-item.disabled:hover {
      background: none;
    }

    .tag-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 8px 0;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 1;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .tag-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .search-clear {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }
  `],Bs([(0,a.Cb)({type:Array})],Us.prototype,"tags",2),Bs([(0,a.Cb)({type:Array})],Us.prototype,"selected",2),Bs([(0,a.Cb)()],Us.prototype,"filterKey",2),Bs([(0,a.Cb)({attribute:!1})],Us.prototype,"t",2),Bs([(0,a.IO)(".tag-search")],Us.prototype,"_searchInput",2),Bs([(0,a.SB)()],Us.prototype,"_search",2),Us=Bs([(0,a.Mo)("ap-filter-tags")],Us);var Ks=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Vs=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?qs(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ks(t,i,o),o};let Hs=class extends s.oi{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(e,t)=>"string"==typeof t?t:e,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{var e;return null==(e=this._searchInput)?void 0:e.focus()}))}get _atLimit(){return this.selected.length>=10}get _isSearching(){return this._search.trim().length>0}_toggle(e){const t=this.selected.includes(e);if(!t&&this._atLimit)return;const i=t?this.selected.filter((t=>t!==e)):[...this.selected,e];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.LABELS,values:i,operator:Lt.IS},bubbles:!0,composed:!0}))}_remove(e){const t=this.selected.filter((t=>t!==e));this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.LABELS,values:t,operator:Lt.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.LABELS,values:[],operator:Lt.IS},bubbles:!0,composed:!0}))}_onSearchInput(e){this._search=e.target.value}_clearSearch(){this._search=""}_getLabelBySid(e){return this.labels.find((t=>t.sid===e))}_renderLabelItem(e){const t=this.selected.includes(e.sid),i=!t&&this._atLimit;return s.dy`
      <div
        class="label-item ${i?"disabled":""}"
        title=${i?this.t("labelsLimitTitle","You can select up to 10 labels",{count:10}):s.Ld}
        @click=${()=>!i&&this._toggle(e.sid)}
      >
        <ap-checkbox ?checked=${t}></ap-checkbox>
        <span class="label-icon" ${$s({color:e.color})}>
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
        <span class="label-name">${e.name}</span>
        <span class="count">${e.assets_count}</span>
      </div>
    `}render(){const e=this._search.toLowerCase().trim(),t=this.labels.filter((t=>t.name.toLowerCase().includes(e)));return s.dy`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchLabelsPlaceholder","Search labels")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?s.dy`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?s.dy`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((e=>{const t=this._getLabelBySid(e);return t?s.dy`
                      <div class="chip">
                        <span class="chip-icon" ${$s({color:t.color})}>
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
                        <span class="chip-label">${t.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:s.Ld}))}
                </div>
              </div>
            `:s.Ld}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">${this.t("allLabels","All labels")}</span>
            <button
              class="clear-btn"
              ?disabled=${0===this.selected.length}
              @click=${this._clearAll}
            >${this.t("clearAll","Clear all")}</button>
          </div>
          <div class="options-list">
            ${0===t.length?s.dy`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:t.map((e=>this._renderLabelItem(e)))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?s.dy`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>${this.t("labelsLimitAlert","You can select up to 10 labels.",{count:10})}</span>
              </div>
            `:s.Ld}
      </div>
    `}};Hs.styles=[Ts,s.iv`
    .label-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .label-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label-item.disabled:hover {
      background: none;
    }

    .label-icon {
      flex-shrink: 0;
      line-height: 0;
    }

    .label-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }

    .chip-icon {
      flex-shrink: 0;
      line-height: 0;
    }
  `],Vs([(0,a.Cb)({type:Array})],Hs.prototype,"labels",2),Vs([(0,a.Cb)({type:Array})],Hs.prototype,"selected",2),Vs([(0,a.Cb)({attribute:!1})],Hs.prototype,"t",2),Vs([(0,a.IO)(".search-input")],Hs.prototype,"_searchInput",2),Vs([(0,a.SB)()],Hs.prototype,"_search",2),Hs=Vs([(0,a.Mo)("ap-filter-labels")],Hs);var Gs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Ws=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Qs(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Gs(t,i,o),o};const Ys=/^#[0-9A-Fa-f]{6}$/;function Xs(e){const t=e.trim().split(/\s+/);return t.length<1||!Ys.test(t[0])?null:{hex:t[0],tolerance:t[1]||qt,coverage:t[3]||Kt}}let Js=class extends s.oi{constructor(){super(...arguments),this.values=[],this.t=(e,t)=>"string"==typeof t?t:e,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map((e=>e.hex)))}willUpdate(e){if(e.has("values")){const e=[];for(const t of this.values){const i=Xs(t);i&&e.push(i)}(!this._initialized||0===this.values.length&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some((e=>e.tolerance!==qt||e.coverage!==Kt))),this._initialized=!0)}}_selectColor(e){if(!Ys.test(e))return;const t=this._colors.findIndex((t=>t.hex.toLowerCase()===e.toLowerCase()));t>=0?this._removeColor(t):this._colors.length>=3||(this._colors=[...this._colors,{hex:e,tolerance:qt,coverage:Kt}],this._showPalette=!1,this._dispatchChange())}_removeColor(e){this._colors=this._colors.filter(((t,i)=>i!==e)),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(e,t){let i=t.target.value.trim();if(i.startsWith("#")||(i="#"+i),!Ys.test(i)||this._colors.some(((t,s)=>s!==e&&t.hex.toLowerCase()===i.toLowerCase())))return;const s=[...this._colors];s[e]={...s[e],hex:i},this._colors=s,this._dispatchChange()}_handleToleranceChange(e,t){const i=[...this._colors];i[e]={...i[e],tolerance:t.detail.value},this._colors=i,this._dispatchChange()}_handleCoverageInput(e,t){const i=t.target.value,s=parseInt(i,10);if(!isNaN(s)&&s>=1&&s<=100){const t=[...this._colors];t[e]={...t[e],coverage:String(s)},this._colors=t,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(0===this._colors.length)return void this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));const e=this._colors.map((e=>{const t=this._advanced?e.tolerance:qt,i=this._advanced?e.coverage:Kt;return`${e.hex} ${t} ${t} ${i}`}));this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:e,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const e=this._selectedHexes,t=this._colors.length>=3;return s.dy`
      <div class="palette">
        ${pi.map((i=>{const a=e.has(i),o=t&&!a;return s.dy`
              <button
                class="swatch ${a?"selected":""} ${o?"disabled":""}"
                ${$s({background:i,..."#ffffff"===i?{border:"1px solid #e4e4e7"}:{}})}
                @click=${()=>!o&&this._selectColor(i)}
                title=${i}
                ?disabled=${o}
              ></button>
            `}))}
      </div>
    `}_renderColorEntry(e,t){return this._advanced?s.dy`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${$s({background:e.hex})}></div>
            <input
              class="color-hex-input"
              type="text"
              .value=${e.hex}
              maxlength="7"
              @change=${e=>this._handleHexInput(t,e)}
            />
          </div>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("difference","Difference")}</span>
          <ap-dropdown
            .value=${e.tolerance}
            .options=${hi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
            @ap-change=${e=>this._handleToleranceChange(t,e)}
          ></ap-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("coverage","Coverage")}</span>
          <div class="coverage-wrap">
            <span class="coverage-unit">%</span>
            <input
              type="number"
              class="coverage-input"
              min="1"
              max="100"
              .value=${e.coverage}
              @change=${e=>this._handleCoverageInput(t,e)}
            />
          </div>
        </div>
        <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(t)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `:s.dy`
        <div class="color-row">
          <div class="color-swatch-small" ${$s({background:e.hex})}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${e.hex}
            maxlength="7"
            @change=${e=>this._handleHexInput(t,e)}
          />
          <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(t)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `}render(){const e=0===this._colors.length||this._showPalette,t=this._colors.length<3&&!this._showPalette;return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("colorLabel","Color")}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t("advanced","Advanced")}
          </label>
        </div>

        <div class="filter-section">
          ${e?this._renderPalette():s.Ld}
        </div>

        ${this._colors.length>0?s.dy`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map(((e,t)=>this._renderColorEntry(e,t)))}
            </div>
          </div>
        `:s.Ld}

        ${t?s.dy`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              ${this.t("addColor","Add color")}
            </button>
          </div>
        `:s.Ld}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span>
        </div>
      </div>
    `}};Js.styles=[ns,Ts,s.iv`
    /* ── Palette ── */
    .palette {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 12px;
      justify-items: center;
    }

    .swatch {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform 100ms;
      padding: 0;
    }

    .swatch:hover {
      transform: scale(1.15);
    }

    .swatch.selected {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }

    .swatch.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .swatch.disabled:hover {
      transform: none;
    }

    /* ── Advanced toggle (own row, pill-style) ── */
    .advanced-row {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    .advanced-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      user-select: none;
    }

    .toggle-track {
      position: relative;
      width: 32px;
      height: 18px;
      border-radius: 9px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      transition: background 150ms;
      flex-shrink: 0;
    }

    .toggle-track.on {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      transition: transform 150ms;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.15);
    }

    .toggle-track.on .toggle-thumb {
      transform: translateX(14px);
    }

    /* ── Selected colors list ── */
    .selected-colors {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* ── Color entry row (both modes) ── */
    .color-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .color-swatch-small {
      width: 36px;
      height: 36px;
      border-radius: var(--ap-radius-sm, 6px);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      flex-shrink: 0;
    }

    .color-hex-input {
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, oklch(1 0 0));
      min-width: 0;
    }

    .color-hex-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    /* Normal mode: hex input takes remaining space */
    .color-row:not(.advanced) .color-hex-input {
      flex: 1;
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    /* ── Advanced layout: full-width grid ── */
    .color-row.advanced {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr auto;
      align-items: end;
      gap: 8px;
    }

    .color-row.advanced .remove-btn {
      align-self: end;
      margin-bottom: 8px;
    }

    .adv-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .adv-field ap-dropdown {
      display: block;
      width: 100%;
    }

    .adv-field-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      line-height: 1;
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      height: 36px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
    }

    .coverage-wrap:focus-within {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .coverage-unit {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding-left: 8px;
      flex-shrink: 0;
      line-height: 36px;
    }

    .coverage-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 6px 0 2px;
      border: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      outline: none;
    }

    .coverage-input::-webkit-inner-spin-button,
    .coverage-input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .coverage-input {
      -moz-appearance: textfield;
    }

    /* ── Add color button ── */
    .add-color-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 0;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: opacity 150ms;
    }

    .add-color-btn:hover {
      opacity: 0.8;
    }
  `],Ws([(0,a.Cb)({type:Array})],Js.prototype,"values",2),Ws([(0,a.Cb)({attribute:!1})],Js.prototype,"t",2),Ws([(0,a.SB)()],Js.prototype,"_colors",2),Ws([(0,a.SB)()],Js.prototype,"_advanced",2),Ws([(0,a.SB)()],Js.prototype,"_showPalette",2),Ws([(0,a.SB)()],Js.prototype,"_initialized",2),Js=Ws([(0,a.Mo)("ap-filter-color")],Js);var Zs=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,ta=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ea(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Zs(t,i,o),o};const ia={KB:.001,MB:1,GB:1e3},sa=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let aa=class extends s.oi{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(e,t)=>"string"==typeof t?t:e,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(e){!this._initialized&&(e.has("min")||e.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return""!==this._minVal||""!==this._maxVal}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(e){this._unit=e.detail.value,this._emitChange()}_emitChange(){const e=ia[this._unit],t=""!==this._minVal?parseFloat((parseFloat(this._minVal)*e).toFixed(2)).toString():null,i=""!==this._maxVal?parseFloat((parseFloat(this._maxVal)*e).toFixed(2)).toString():null;let s;if(null!==t&&null!==i)s=`${t}..${i}`;else if(null!==t)s=`${t}..`;else{if(null===i)return void this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.SIZE,values:[],operator:Lt.RANGE},bubbles:!0,composed:!0}));s=`..${i}`}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.SIZE,values:[s],operator:Lt.RANGE},bubbles:!0,composed:!0}))}_onMinInput(e){this._minVal=e.target.value,this._emitChange()}_onMaxInput(e){this._maxVal=e.target.value,this._emitChange()}render(){return s.dy`
      <div class="filter-content">
        <span class="section-label">${this.t("sizeLabel","Size")}</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="size-grid">
          <div>
            <span class="input-label">${this.t("sizeFrom","From")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minVal}
              @change=${this._onMinInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeTo","To")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeUnit","Unit")}</span>
            <ap-dropdown
              .options=${sa}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};aa.styles=[Ts,s.iv`
      /* Hide number input spinners */
      .filter-input[type='number']::-webkit-inner-spin-button,
      .filter-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .filter-input[type='number'] {
        -moz-appearance: textfield;
      }
      .size-grid {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 12px;
      }
      .size-grid ap-dropdown {
        display: block;
        width: 100%;
      }
    `],ta([(0,a.Cb)({type:Number})],aa.prototype,"min",2),ta([(0,a.Cb)({type:Number})],aa.prototype,"max",2),ta([(0,a.Cb)({attribute:!1})],aa.prototype,"t",2),ta([(0,a.SB)()],aa.prototype,"_minVal",2),ta([(0,a.SB)()],aa.prototype,"_maxVal",2),ta([(0,a.SB)()],aa.prototype,"_unit",2),ta([(0,a.SB)()],aa.prototype,"_initialized",2),aa=ta([(0,a.Mo)("ap-filter-size")],aa);var oa=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,na=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ra(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&oa(t,i,o),o};const la={portrait:s.YP`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,landscape:s.YP`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,square:s.YP`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,panorama:s.YP`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`};let da=class extends s.oi{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(e,t)=>"string"==typeof t?t:e}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(e,t){return e.includes(t)?e.filter((e=>e!==t)):[...e,t]}_toggleResolution(e){this.selectedResolution=this._toggle(this.selectedResolution,e),this._dispatchChange()}_toggleOrientation(e){this.selectedOrientation=this._toggle(this.selectedOrientation,e),this._dispatchChange()}_toggleFaces(e){this.selectedFaces=this._toggle(this.selectedFaces,e),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${ai.map((e=>s.dy`
                <ap-checkbox
                  ?checked=${this.selectedResolution.includes(e.value)}
                  @ap-toggle=${()=>{this._toggleResolution(e.value)}}
                >${this.t(e.labelKey,e.label)}</ap-checkbox>
              `))}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageOrientation","Orientation")}</span>
          <div class="options-vertical">
            ${oi.map((e=>s.dy`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(e.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(e.value)}}
                ><span class="orientation-label">${la[e.value]}${this.t(e.labelKey,e.label)}</span></ap-checkbox>
              `))}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${ri.map((e=>s.dy`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(e.value)}
                  @ap-toggle=${()=>{this._toggleFaces(e.value)}}
                >${e.labelKey?this.t(e.labelKey,e.label):e.label}</ap-checkbox>
              `))}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("imageProcessingNotice","Some images might not have been processed, so they won't be displayed.")}</span>
        </div>
      </div>
    `}};da.styles=[Ts,s.iv`
    .options-horizontal {
      display: flex;
      gap: 28px;
    }
    .options-vertical {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .options-vertical ap-checkbox {
      --ap-checkbox-gap: 12px;
    }
    .orientation-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .orientation-label svg {
      flex-shrink: 0;
    }
  `],na([(0,a.Cb)({type:Array})],da.prototype,"selectedResolution",2),na([(0,a.Cb)({type:Array})],da.prototype,"selectedOrientation",2),na([(0,a.Cb)({type:Array})],da.prototype,"selectedFaces",2),na([(0,a.Cb)({attribute:!1})],da.prototype,"t",2),da=na([(0,a.Mo)("ap-filter-image")],da);var ca=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ha=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?pa(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ca(t,i,o),o};function ua(e){return`${Mt[e.type]||""}${e.key}`}let ga=class extends s.oi{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(e,t)=>"string"==typeof t?t:e,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return ui.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tNumberOperatorOptions(){return vi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tSingleSelectOperatorOptions(){return gi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tMultiSelectOperatorOptions(){return fi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tBooleanOptions(){return xi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tEmptyOptions(){return yi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}get _tEmptyAndSpecificOptions(){return _i.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._focusSearch()))}disconnectedCallback(){super.disconnectedCallback();for(const e of Object.values(this._tagDebounceTimers))clearTimeout(e)}_focusSearch(){const e=this.renderRoot.querySelector(".field-search, .search-input");null==e||e.focus()}get _atFieldLimit(){return this.visibleFields.length>=10}_getField(e){return this.fields.find((t=>ua(t)===e))}_getUIType(e){return $i[e.type]}_getApplied(e){return this.appliedMetadata[e]||this.appliedFilters[e]||{}}_isSpecialValue(e){return!(!e||1!==e.length)&&(e[0]===Dt||e[0]===zt)}_getContentMode(e){var t,i;const s=this._getApplied(e);return(null==(t=s.values)?void 0:t[0])===Dt?Dt:(null==(i=s.values)?void 0:i[0])===zt?zt:this._specificModeFields.has(e)||s.values&&s.values.length>0?Rt:""}_emitFilterChange(e,t,i){const s=ua(e);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:s,operator:t,values:i,metadataType:e.type},bubbles:!0,composed:!0}))}_emitFieldToggle(e,t){const i=ua(e);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:i,visible:t},bubbles:!0,composed:!0}))}_emitFieldSelect(e){const t=ua(e);!this.visibleFields.includes(t)&&this._atFieldLimit||(this.visibleFields.includes(t)||this._emitFieldToggle(e,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:t},bubbles:!0,composed:!0})))}_emitPin(e,t){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:e,pinned:t},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(e){if(this._atFieldLimit)return;const t=ua(e);this.visibleFields.includes(t)||this._emitFieldToggle(e,!0)}_removeField(e){this._emitFieldToggle(e,!1),this._emitFilterChange(e,void 0,[])}_toggleCollapse(e){const t=new Set(this._collapsedFields);t.has(e)?t.delete(e):t.add(e),this._collapsedFields=t}_onOperatorChange(e,t){const i=this._getApplied(ua(e)).values||[];this._emitFilterChange(e,t,i)}_onContentModeChange(e,t){const i=ua(e);if(t===Rt){const t=new Set(this._specificModeFields);t.add(i),this._specificModeFields=t;const s=this._getApplied(i);this._isSpecialValue(s.values)&&this._emitFilterChange(e,s.operator,[])}else{if(this._specificModeFields.has(i)){const e=new Set(this._specificModeFields);e.delete(i),this._specificModeFields=e}if(t)this._onEmptyOption(e,t);else{const t=this._getApplied(i);this._emitFilterChange(e,t.operator,[])}}}_clearFieldFilter(e){const t=ua(e);if(this._specificModeFields.has(t)){const e=new Set(this._specificModeFields);e.delete(t),this._specificModeFields=e}const{[t]:i,...s}=this._datePresets;this._datePresets=s;const{[t]:a,...o}=this._dateFroms;this._dateFroms=o;const{[t]:r,...n}=this._dateTos;this._dateTos=n;const{[t]:l,...d}=this._selectSearches;this._selectSearches=d;const{[t]:c,...p}=this._tagInputs;this._tagInputs=p,this._emitFilterChange(e,void 0,[])}_onTextInput(e,t){const i=t.target.value,s=this._getApplied(ua(e)).operator||ui[0].value;this._emitFilterChange(e,s,i?[i]:[])}_onNumberInput(e,t,i){const s=t.target.value,a=ua(e),o=this._getApplied(a),r=o.operator||vi[0].value,n=[...o.values||[]];0===i?n[0]=s:n[1]=s;const l=n.filter((e=>""!==e&&void 0!==e));if(l.length>0){const t=e.type===Ot.DECIMAL2;if(!l.every((e=>t?!isNaN(parseFloat(e)):/^-?\d+$/.test(e))))return}this._emitFilterChange(e,r,n)}_onBooleanSelect(e,t){var i;const s=this._getApplied(ua(e)),a=null==(i=s.values)?void 0:i[0];t&&a!==t?this._emitFilterChange(e,s.operator,[t]):this._emitFilterChange(e,void 0,[])}_onSelectOneToggle(e,t){const i=ua(e),s=this._getApplied(i),a=s.operator||gi[0].value,o=s.values||[];1===o.length&&o[0]===t?this._emitFilterChange(e,a,[]):this._emitFilterChange(e,a,[t])}_onMultiSelectToggle(e,t){const i=ua(e),s=this._getApplied(i),a=s.operator||fi[0].value,o=s.values||[],r=o.includes(t)?o.filter((e=>e!==t)):[...o,t];this._emitFilterChange(e,a,r)}_onTagKeydown(e,t){const i=ua(e);("Enter"===t.key||","===t.key)&&(t.preventDefault(),this._commitTagInput(e,i))}_onTagInput(e,t,i){const s=i.target.value;if(s.includes(",")){const i=s.replace(/,/g,"").trim();i&&(this._tagInputs={...this._tagInputs,[t]:i},this._commitTagInput(e,t))}else this._tagInputs={...this._tagInputs,[t]:s},this._fetchTagSuggestions(e,t,s.trim())}_selectTagSuggestion(e,t){const i=ua(e),s=this._getApplied(i),a=s.operator||gi[0].value,o=s.values||[];o.includes(t)||this._emitFilterChange(e,a,[...o,t]),this._tagInputs={...this._tagInputs,[i]:""},this._tagSuggestions={...this._tagSuggestions,[i]:[]}}_fetchTagSuggestions(e,t,i){if(this._tagDebounceTimers[t]&&clearTimeout(this._tagDebounceTimers[t]),!i||!this.apiClient)return this._tagSuggestions={...this._tagSuggestions,[t]:[]},void(this._tagLoading={...this._tagLoading,[t]:!1});this._tagDebounceTimers[t]=setTimeout((async()=>{this._tagLoading={...this._tagLoading,[t]:!0};try{const s=`_${e.ckey||e.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:i,meta_key:s});(this._tagInputs[t]||"").trim()===i&&(this._tagSuggestions={...this._tagSuggestions,[t]:(a.tags||[]).map((e=>e.tag))})}catch{this._tagSuggestions={...this._tagSuggestions,[t]:[]}}finally{this._tagLoading={...this._tagLoading,[t]:!1}}}),300)}_commitTagInput(e,t){const i=(this._tagInputs[t]||"").trim();if(!i)return;const s=this._getApplied(t),a=s.operator||gi[0].value,o=s.values||[];o.includes(i)||this._emitFilterChange(e,a,[...o,i]),this._tagInputs={...this._tagInputs,[t]:""},this._tagSuggestions={...this._tagSuggestions,[t]:[]}}_removeTag(e,t){const i=ua(e),s=this._getApplied(i),a=s.operator||gi[0].value,o=s.values||[];this._emitFilterChange(e,a,o.filter((e=>e!==t)))}_onTagOperatorChange(e,t){const i=ua(e),s=this._getApplied(i).values||[];this._emitFilterChange(e,t,s)}_onDatePreset(e,t){const i=ua(e);if(!t)return void this._clearFieldFilter(e);if(this._datePresets={...this._datePresets,[i]:t},["before","after","between"].includes(t))return this._dateFroms={...this._dateFroms,[i]:""},void(this._dateTos={...this._dateTos,[i]:""});if("empty"===t||"non-empty"===t)return void this._emitFilterChange(e,void 0,[t]);const s=new Date;let a="",o="";switch(t){case"today":{const e=new Date(s);e.setHours(0,0,0,0),a=e.toISOString(),o=s.toISOString();break}case"last_week":{const e=new Date(s),t=e.getDay();e.setDate(e.getDate()-(0===t?6:t-1)),e.setHours(0,0,0,0);const i=new Date(e);i.setDate(i.getDate()-7),a=i.toISOString(),o=e.toISOString();break}case"last_month":{const e=new Date(s.getFullYear(),s.getMonth(),1),t=new Date(e);t.setMonth(t.getMonth()-1),a=t.toISOString(),o=e.toISOString();break}case"last_year":{const e=new Date(s.getFullYear(),0,1),t=new Date(e);t.setFullYear(t.getFullYear()-1),a=t.toISOString(),o=e.toISOString();break}}a&&o&&(this._dateFroms={...this._dateFroms,[i]:a},this._dateTos={...this._dateTos,[i]:o},this._emitFilterChange(e,"..",[a,o]))}_onDateInput(e,t,i){const s=i.target.value,a=ua(e),o=this._datePresets[a]||"",r=s?new Date(s+"T00:00:00").toISOString():"";"from"===t?this._dateFroms={...this._dateFroms,[a]:r}:this._dateTos={...this._dateTos,[a]:r};let n=this._dateFroms[a]||"",l=this._dateTos[a]||"";"after"===o&&n&&(l=(new Date).toISOString(),this._dateTos={...this._dateTos,[a]:l}),"before"===o&&l&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:n}),n&&l&&this._emitFilterChange(e,"..",[n,l])}_onGeoLocationInput(e,t){var i;const s=t.target.value.trim(),a=ua(e),o=null==(i=this.shadowRoot)?void 0:i.querySelector(`[data-geo-radius="${a}"]`),r=(null==o?void 0:o.value)||"";if(!s)return void this._emitFilterChange(e,void 0,[]);const n=s.split(",").map((e=>e.trim()));if(2!==n.length||n.some((e=>isNaN(Number(e))||""===e)))return;const[l,d]=n;let c=`${l},${d}..${r||"0"}`;this._emitFilterChange(e,Lt.IS,[c])}_onGeoRadiusInput(e,t){var i;const s=t.target.value,a=ua(e),o=this._getApplied(a);if(null==(i=o.values)||!i[0])return;const r=o.values[0],[n]=r.split("..");let l=n;s&&(l+=`..${s}`),this._emitFilterChange(e,Lt.IS,[l])}_onEmptyOption(e,t){var i;const s=this._getApplied(ua(e)),a=null==(i=s.values)?void 0:i[0];t&&a!==t?this._emitFilterChange(e,s.operator,[t]):this._emitFilterChange(e,s.operator,[])}_getGroupedFields(e){const t=new Map;for(const i of e){const e=i.group||this.t("rootFields","Root fields");t.has(e)||t.set(e,[]),t.get(e).push(i)}return t}_renderFieldSelection(){const e=this._fieldSearch.toLowerCase(),t=this.fields.filter((t=>t.label.toLowerCase().includes(e))),i=this._getGroupedFields(t),a=(e,t)=>0===t.length?s.Ld:s.dy`
        <div class="field-group-label">${e}</div>
        ${t.map((e=>{const t=ua(e),i=this.visibleFields.includes(t),a=!i&&this._atFieldLimit;return s.dy`
            <div
              class="field-item ${i?"selected":""} ${a?"disabled":""}"
              @click=${()=>!a&&!i&&this._addField(e)}
            >
              ${i?s.dy`<ap-icon name="check" .size=${14}></ap-icon>`:s.dy`<ap-icon name=${ki[e.type]||"file-text"} .size=${14} ${$s({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>`}
              <span>${e.label}</span>
            </div>
          `}))}
      `;return s.dy`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title">${this.t("addMetadataField","Add metadata field")}</span>
          <button
            class="field-selection-close"
            @click=${this._closeFieldSelection}
          >
            <ap-icon name="close" .size=${16}></ap-icon>
          </button>
        </div>
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${e=>{this._fieldSearch=e.target.value}}
          />
        </div>
        <div class="field-list">
          ${0===t.length?s.dy`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:s.dy`${[...i.entries()].map((e=>{let[t,i]=e;return a(t,i)}))}`}
        </div>
      </div>
    `}_renderTextFilter(e){var t,i;const a=ua(e),o=this._getApplied(a),r=this._isSpecialValue(o.values)?"":(null==(t=o.values)?void 0:t[0])||"",n=this._getContentMode(a),l=n===Dt||n===zt,d=o.operator||ui[0].value,c=e.type===Ot.TEXT_AREA;return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!(null!=(i=o.values)&&i.length)&&!o.operator}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator","Operator")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${d}
            ?disabled=${l}
            @ap-change=${t=>this._onOperatorChange(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${n}
            @ap-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        ${n===Rt?s.dy`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${c?s.dy`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${t=>this._onTextInput(e,t)}
                      ></textarea>
                    `:s.dy`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${t=>this._onTextInput(e,t)}
                        @keydown=${e=>{"Enter"===e.key&&e.preventDefault()}}
                      />
                    `}
              </div>
            `:s.Ld}
      </div>
    `}_renderNumberFilter(e){var t,i,a;const o=ua(e),r=this._getApplied(o),n=r.operator||vi[0].value,l=this._isSpecialValue(r.values),d=this._getContentMode(o),c=d===Dt||d===zt,p=n===Lt.RANGE,h=n===Lt.GREATER_THAN_OR_EQUAL,u=n===Lt.LESS_THAN_OR_EQUAL,g=e.type===Ot.DECIMAL2,f=g?"0.01":"1",v=g?"0.00":"0",b=l?"":(null==(t=r.values)?void 0:t[0])||"",m=l?"":(null==(i=r.values)?void 0:i[1])||"",y=p||h||u,_=p||h||u?this.t("min","Min"):this.t("value","Value"),x=this.t("max","Max");return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!(null!=(a=r.values)&&a.length)&&!r.operator}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${n}
            ?disabled=${c}
            @ap-change=${t=>this._onOperatorChange(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${d}
            @ap-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        ${d===Rt?s.dy`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${u?"true":s.Ld}>${_}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${v}
                      .value=${b}
                      ?disabled=${u}
                      @change=${t=>this._onNumberInput(e,t,0)}
                    />
                  </div>
                  ${y?s.dy`
                        <div>
                          <span class="input-label" aria-disabled=${h?"true":s.Ld}>${x}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${v}
                            .value=${m}
                            ?disabled=${h}
                            @change=${t=>this._onNumberInput(e,t,1)}
                          />
                        </div>
                      `:s.Ld}
                </div>
              </div>
            `:s.Ld}
      </div>
    `}_renderBooleanFilter(e){var t,i;const a=this._getApplied(ua(e)),o=(null==(t=a.values)?void 0:t[0])||"";return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!(null!=(i=a.values)&&i.length)}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("value","Value")}</span>
          <ap-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${o}
            @ap-change=${t=>this._onBooleanSelect(e,t.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(e){const t=ua(e),i=this._getApplied(t),a=this._isSpecialValue(i.values),o=a?[]:i.values||[],r=e.possible_values||[],n=i.operator||gi[0].value,l=(this._selectSearches[t]||"").toLowerCase(),d=l.length>0,c=o.length>0||a,p=l?r.filter((e=>e.label.toLowerCase().includes(l))):r,h=o.length>=10;return s.dy`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[t]||""}
            @input=${e=>{this._selectSearches={...this._selectSearches,[t]:e.target.value}}}
          />
          ${d?s.dy`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[t]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        ${d?s.dy`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!c&&!i.operator}
                  @click=${()=>this._clearFieldFilter(e)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:s.dy`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!c&&!i.operator}
                    @click=${()=>this._clearFieldFilter(e)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${n}
                  @ap-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${o.length>0?s.dy`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(e)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${o.map((t=>{const i=r.find((e=>e.api_value===t));return s.dy`
                            <div class="chip">
                              <span class="chip-label">${(null==i?void 0:i.label)||t}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(e,t)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `}))}
                      </div>
                    </div>
                  `:s.Ld}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map((t=>{var a;return s.dy`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(e,t.value)}
                >
                  <ap-checkbox ?checked=${(null==(a=i.values)?void 0:a[0])===t.value}></ap-checkbox>
                  <span>${t.label}</span>
                </div>
              `}))}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${0===p.length?s.dy`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map((t=>{const i=o.includes(t.api_value),a=!i&&h;return s.dy`
                    <div
                      class="option-item ${a?"disabled":""}"
                      @click=${()=>!a&&this._onSelectOneToggle(e,t.api_value)}
                    >
                      <ap-checkbox ?checked=${i}></ap-checkbox>
                      <span>${t.label}</span>
                    </div>
                  `}))}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(e){const t=ua(e),i=this._getApplied(t),a=this._isSpecialValue(i.values),o=a?[]:i.values||[],r=e.possible_values||[],n=i.operator||fi[0].value,l=(this._selectSearches[t]||"").toLowerCase(),d=l.length>0,c=o.length>0||a,p=l?r.filter((e=>e.label.toLowerCase().includes(l))):r,h=o.length>=10;return s.dy`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[t]||""}
            @input=${e=>{this._selectSearches={...this._selectSearches,[t]:e.target.value}}}
          />
          ${d?s.dy`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[t]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        ${d?s.dy`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!c&&!i.operator}
                  @click=${()=>this._clearFieldFilter(e)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:s.dy`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!c&&!i.operator}
                    @click=${()=>this._clearFieldFilter(e)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${n}
                  @ap-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${o.length>0?s.dy`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(e)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${o.map((t=>{const i=r.find((e=>e.api_value===t));return s.dy`
                            <div class="chip">
                              <span class="chip-label">${(null==i?void 0:i.label)||t}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(e,t)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `}))}
                      </div>
                    </div>
                  `:s.Ld}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map((t=>{var a;return s.dy`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(e,t.value)}
                >
                  <ap-checkbox ?checked=${(null==(a=i.values)?void 0:a[0])===t.value}></ap-checkbox>
                  <span>${t.label}</span>
                </div>
              `}))}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${0===p.length?s.dy`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map((t=>{const i=o.includes(t.api_value),a=!i&&h;return s.dy`
                    <div
                      class="option-item ${a?"disabled":""}"
                      @click=${()=>!a&&this._onMultiSelectToggle(e,t.api_value)}
                    >
                      <ap-checkbox ?checked=${i}></ap-checkbox>
                      <span>${t.label}</span>
                    </div>
                  `}))}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(e){const t=ua(e),i=this._getApplied(t),a=this._isSpecialValue(i.values),o=a?[]:i.values||[],r=this._tagInputs[t]||"",n=i.operator||gi[0].value,l=o.length>0||a,d=this._tagSuggestions[t]||[],c=this._tagLoading[t]||!1,p=r.trim().length>0,h=o.length>=10;return s.dy`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${r}
            @input=${i=>this._onTagInput(e,t,i)}
            @keydown=${t=>this._onTagKeydown(e,t)}
          />
          ${p?s.dy`
                <button class="search-clear" @click=${()=>{this._tagInputs={...this._tagInputs,[t]:""},this._tagSuggestions={...this._tagSuggestions,[t]:[]}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        ${p?s.dy`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!l&&!i.operator}
                  @click=${()=>this._clearFieldFilter(e)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:s.dy`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition","Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!l&&!i.operator}
                    @click=${()=>this._clearFieldFilter(e)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${n}
                  ?disabled=${a}
                  @ap-change=${t=>this._onTagOperatorChange(e,t.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${o.length>0?s.dy`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(e)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${o.map((t=>s.dy`
                            <div class="chip">
                              <span class="chip-label">${t}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(e,t)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `))}
                      </div>
                    </div>
                  `:s.Ld}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions","All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map((t=>{var a;return s.dy`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(e,t.value)}
                      >
                        <ap-checkbox ?checked=${(null==(a=i.values)?void 0:a[0])===t.value}></ap-checkbox>
                        <span>${t.label}</span>
                      </div>
                    `}))}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${p?s.dy`
              <div class="filter-section">
                <div class="options-list">
                  ${c?s.dy`<div class="option-item disabled"><span>${this.t("loading","Loading...")}</span></div>`:d.length>0?d.map((t=>{const i=o.includes(t),a=!i&&h;return s.dy`
                              <div
                                class="option-item ${a?"disabled":""}"
                                @click=${()=>!a&&(i?this._removeTag(e,t):this._selectTagSuggestion(e,t))}
                              >
                                <ap-checkbox ?checked=${i}></ap-checkbox>
                                <span>${t}</span>
                              </div>
                            `})):s.dy`<div class="option-item disabled"><span>${this.t("noResults","No results")}</span></div>`}
                </div>
              </div>
            `:s.Ld}
      </div>
    `}_renderDateFilter(e){var t,i;const a=ua(e),o=this._datePresets[a]||"",r=this._getApplied(a),n=this._isSpecialValue(r.values)?(null==(t=r.values)?void 0:t[0])||"":o,l=this._dateFroms[a]?new Date(this._dateFroms[a]).toISOString().split("T")[0]:"",d=this._dateTos[a]?new Date(this._dateTos[a]).toISOString().split("T")[0]:"",c=["before","after","between"].includes(n);return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!n&&!(null!=(i=r.values)&&i.length)}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}]}
            .value=${"empty"===n||"non-empty"===n?n:""}
            @ap-change=${t=>this._onDatePreset(e,t.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${li.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
            .value=${"empty"!==n&&"non-empty"!==n?n:""}
            @ap-change=${t=>this._onDatePreset(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        ${c?s.dy`
              <div class="filter-section">
                <div class="grid-2">
                  ${"before"===n?s.dy`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${d}
                            @change=${t=>this._onDateInput(e,"to",t)}
                          />
                        </div>
                      `:"after"===n?s.dy`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${t=>this._onDateInput(e,"from",t)}
                            />
                          </div>
                        `:s.dy`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${t=>this._onDateInput(e,"from",t)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${d}
                              @change=${t=>this._onDateInput(e,"to",t)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:s.Ld}
      </div>
    `}_renderGeoFilter(e){var t,i;const a=ua(e),o=this._getApplied(a),r=this._isSpecialValue(o.values),n=this._getContentMode(a);let l="",d="";if(!r&&null!=(t=o.values)&&t[0]){const e=o.values[0],[t,i]=e.split("..");l=t||"",d=i||""}const c=l.length>0,p=l.split(",").map((e=>e.trim())),h=!c||2===p.length&&p.every((e=>!isNaN(Number(e))&&""!==e));return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!(null!=(i=o.values)&&i.length)}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${n}
            @ap-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></ap-radio-group>
        </div>

        ${n===Rt?s.dy`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${l}
                      @change=${t=>this._onGeoLocationInput(e,t)}
                    />
                    ${c&&!h?s.dy`<div class="error-text">${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}</div>`:s.Ld}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${a}
                      .value=${d}
                      @change=${t=>this._onGeoRadiusInput(e,t)}
                    />
                  </div>
                </div>
              </div>
            `:s.Ld}
      </div>
    `}_renderAttachmentFilter(e){var t,i;const a=this._getApplied(ua(e)),o=(null==(t=a.values)?void 0:t[0])||"";return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!(null!=(i=a.values)&&i.length)}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${o}
            @ap-change=${t=>this._onEmptyOption(e,t.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(e){const t=ua(e),i=this._getApplied(t),a=i.values||[],o=i.operator||Lt.IS;return s.dy`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${0===a.length}
          @click=${()=>this._clearFieldFilter(e)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${gi}
            .value=${o}
            @ap-change=${t=>this._emitFilterChange(e,t.detail.value,a)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${a.join(", ")}
            @change=${t=>{const i=t.target.value.split(",").map((e=>e.trim())).filter(Boolean);this._emitFilterChange(e,o,i)}}
          />
        </div>
      </div>
    `}_renderFieldControl(e){switch(this._getUIType(e)){case"text":return this._renderTextFilter(e);case"number":return this._renderNumberFilter(e);case"boolean":return this._renderBooleanFilter(e);case"select-one":return this._renderSelectOneFilter(e);case"multi-select":return this._renderMultiSelectFilter(e);case"tags":return this._renderTagsFilter(e);case"date":return this._renderDateFilter(e);case"geo":return this._renderGeoFilter(e);case"attachment":return e.type===Ot.INTEGER_LIST&&"face_matcher"===e.slug?this._renderFaceMatcherFilter(e):this._renderAttachmentFilter(e);default:return s.Ld}}_renderFieldSection(e){const t=this._getField(e);if(!t)return s.Ld;const i=this._collapsedFields.has(e);return s.dy`
      <div class="field-section">
        <div
          class="field-header"
          @click=${()=>this._toggleCollapse(e)}
        >
          <div class="field-header-left">
            <ap-icon
              class="chevron ${i?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></ap-icon>
            <ap-icon name=${ki[t.type]||"file-text"} .size=${14} ${$s({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
            <span>${t.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${e=>{e.stopPropagation(),this._removeField(t)}}
              title=${this.t("removeField","Remove field")}
            >
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${i?"collapsed":""}">
          ${this._renderFieldControl(t)}
        </div>
      </div>
    `}_renderSelectorMode(){const e=this._fieldSearch.toLowerCase(),t=this.fields.filter((t=>t.label.toLowerCase().includes(e))),i=this._getGroupedFields(t),a=(e,t)=>0===t.length?s.Ld:s.dy`
        <div class="field-group-label">${e}</div>
        ${t.map((e=>{const t=ua(e),i=this.visibleFields.includes(t),a=!!this.appliedMetadata[t]||!!this.appliedFilters[t],o=this.pinnedFields.includes(t),r=!i&&this._atFieldLimit;return s.dy`
            <div
              class="field-item ${a?"has-filter":""} ${r?"disabled":""}"
              @click=${()=>!r&&this._emitFieldSelect(e)}
            >
              <ap-icon name=${ki[e.type]||"file-text"} .size=${14} ${$s({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
              <span class="field-item-label">${e.label}</span>
              <button
                class="field-item-pin ${o?"pinned":""}"
                @click=${e=>{e.stopPropagation(),this._emitPin(t,!o)}}
                title=${o?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${a?s.dy`<ap-icon name="check" .size=${14}></ap-icon>`:s.Ld}
            </div>
          `}))}
      `;return s.dy`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${e=>{this._fieldSearch=e.target.value}}
          />
        </div>
        <div class="field-list">
          ${0===t.length?s.dy`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:s.dy`${[...i.entries()].map((e=>{let[t,i]=e;return a(t,i)}))}`}
        </div>
      </div>
    `}_renderFieldMode(){const e=this._getField(this.activeFieldKey);return e?this._renderFieldControl(e):s.dy`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`}render(){if("selector"===this.mode)return this._renderSelectorMode();if("field"===this.mode)return this._renderFieldMode();const e=this.visibleFields.length>0;return s.dy`
      ${this._showFieldSelection||!e?this._renderFieldSelection():s.Ld}

      ${e?s.dy`
            <div class="field-filters">
              ${this.visibleFields.map((e=>this._renderFieldSection(e)))}
            </div>

            ${this._showFieldSelection||this._atFieldLimit?s.Ld:s.dy`
                  <button
                    class="add-field-btn"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `}
          `:s.Ld}
    `}};ga.styles=[ns,Ts,s.iv`
    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
      margin-top: 8px;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-selection {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .selector-wrap {
      margin: 0;
    }

    .field-search-wrapper {
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .field-search-wrapper .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .field-search {
      width: 100%;
      height: 34px;
      padding: 0 20px 0 32px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-card, oklch(1 0 0));
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .field-list {
      padding: 12px 0;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px 6px 24px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .limit-note {
      padding: 8px 16px 8px 24px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .empty-msg {
      padding: 16px 16px 16px 24px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .field-body {
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-body.collapsed {
      display: none;
    }

    /* ── Tags input ─────────────────────────────────────── */

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      min-height: 36px;
      align-items: center;
    }

    .tag-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 9999px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .tag-chip-remove {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      padding: 0;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }

    .tag-chip-remove:hover {
      opacity: 1;
    }

    .tag-input {
      border: none;
      outline: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      flex: 1;
      min-width: 80px;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    /* ── Geo inputs ─────────────────────────────────────── */

    .geo-row {
      display: flex;
      gap: 12px;
    }

    .geo-location {
      flex: 2;
    }

    .geo-radius {
      flex: 1;
    }

    /* ── Select option items ────────────────────────────── */

    .option-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 150ms;
    }

    .option-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .option-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* ── Chevron ────────────────────────────────────────── */

    .chevron {
      transition: transform 150ms;
    }

    .chevron.expanded {
      transform: rotate(90deg);
    }

    /* ── Selector mode ─────────────────────────────────── */

    .field-item-label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .field-item-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      flex-shrink: 0;
    }

    .field-item-pin {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      opacity: 0;
      transition: all 150ms;
    }

    .field-item:hover .field-item-pin,
    .field-item-pin.pinned {
      opacity: 1;
    }

    .field-item-pin:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    .field-item-pin.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-item.has-filter {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
  `],ha([(0,a.Cb)({type:Array})],ga.prototype,"fields",2),ha([(0,a.Cb)({type:Object})],ga.prototype,"appliedFilters",2),ha([(0,a.Cb)({type:Array})],ga.prototype,"visibleFields",2),ha([(0,a.Cb)()],ga.prototype,"mode",2),ha([(0,a.Cb)()],ga.prototype,"activeFieldKey",2),ha([(0,a.Cb)({type:Array})],ga.prototype,"pinnedFields",2),ha([(0,a.Cb)({type:Object})],ga.prototype,"appliedMetadata",2),ha([(0,a.Cb)({attribute:!1})],ga.prototype,"apiClient",2),ha([(0,a.Cb)({attribute:!1})],ga.prototype,"t",2),ha([(0,a.SB)()],ga.prototype,"_showFieldSelection",2),ha([(0,a.SB)()],ga.prototype,"_fieldSearch",2),ha([(0,a.SB)()],ga.prototype,"_collapsedFields",2),ha([(0,a.SB)()],ga.prototype,"_tagInputs",2),ha([(0,a.SB)()],ga.prototype,"_tagSuggestions",2),ha([(0,a.SB)()],ga.prototype,"_tagLoading",2),ha([(0,a.SB)()],ga.prototype,"_datePresets",2),ha([(0,a.SB)()],ga.prototype,"_dateFroms",2),ha([(0,a.SB)()],ga.prototype,"_dateTos",2),ha([(0,a.SB)()],ga.prototype,"_specificModeFields",2),ha([(0,a.SB)()],ga.prototype,"_selectSearches",2),ga=ha([(0,a.Mo)("ap-filter-metadata")],ga);var fa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ba=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?va(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&fa(t,i,o),o};let ma=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.selectedStatus=[],this.statusOperator=":=",this.approverValues=[],this.approverOperator=Lt.IS_EXACT,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=Lt.IS_EXACT,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch=""}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every((e=>e===Dt||e===zt))}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _showApproverSection(){return this.approverUsers.length>0}get _showRequesterSection(){return this.requesterUsers.length>0}_toggleStatus(e){const t=this.selectedStatus.includes(e)?this.selectedStatus.filter((t=>t!==e)):[...this.selectedStatus,e];this._emitChange(St,t,this.statusOperator)}_handleStatusOperator(e){const t=e.detail.value;this._emitChange(St,this.selectedStatus,t)}_clearStatus(){this._emitChange(St,[],this.statusOperator)}_toggleApprover(e){const t=this.approverValues.includes(e)?this.approverValues.filter((t=>t!==e)):[...this.approverValues,e];this._emitChange(Ct,t,this.approverOperator)}_handleApproverOperator(e){const t=e.detail.value;this._emitChange(Ct,this.approverValues,t)}_clearApprover(){this._emitChange(Ct,[],this.approverOperator)}_onApproverSearchInput(e){this._approverSearch=e.target.value}_clearApproverSearch(){this._approverSearch=""}_toggleRequester(e){const t=this.requesterValues.includes(e)?this.requesterValues.filter((t=>t!==e)):[...this.requesterValues,e];this._emitChange(Ft,t,this.requesterOperator)}_handleRequesterOperator(e){const t=e.detail.value;this._emitChange(Ft,this.requesterValues,t)}_clearRequester(){this._emitChange(Ft,[],this.requesterOperator)}_onRequesterSearchInput(e){this._requesterSearch=e.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(e){return e===Pt.BEFORE||e===Pt.AFTER||e===Pt.BETWEEN||e===Pt.SPECIFIC?e:Pt.PRESET}_handleDueDatePreset(e){const t=e.detail.value;if(!t||this.dueDatePreset===t)return void this._clearDueDate();const i=this._kindFromDuedateValue(t);let s="",a="";if(i===Pt.PRESET){const e=Li(t);e&&(s=e.from,a=e.to??"")}this._emitDuedate({kind:i,preset:t,from:s,to:a})}_handleDueDateFrom(e){const t=e.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:t,to:this.dueDateTo})}_handleDueDateTo(e){const t=e.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:t})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(e){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:At,values:{field:At,kind:e.kind,preset:e.preset||null,from:e.from,to:e.to}},bubbles:!0,composed:!0}))}_emitChange(e,t,i){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:e,values:t,operator:i},bubbles:!0,composed:!0}))}_filterUsers(e,t){const i=t.trim().toLowerCase();return i?e.filter((e=>{var t;return e.name.toLowerCase().includes(i)||((null==(t=e.email)?void 0:t.toLowerCase().includes(i))??!1)})):e}_getInitials(e){const t=e.name||e.email||"";if(!t)return"?";const i=t.split(/\s+/).filter(Boolean);return 0===i.length?"?":1===i.length?i[0].slice(0,2).toUpperCase():(i[0][0]+i[i.length-1][0]).toUpperCase()}_renderStatusSection(){const e=this.selectedStatus.length>0;return s.dy`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!e}
          @click=${this._clearStatus}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${bi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${yi.map((e=>s.dy`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${this.t(e.labelKey,e.label)}</ap-checkbox>
            `))}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${mi.map((e=>s.dy`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <ap-icon name=${e.icon} .size=${16} ${$s({color:e.iconColor})}></ap-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </ap-checkbox>
            `))}
        </div>
      </div>
    `}_renderUserItem(e,t,i){return s.dy`
      <div class="user-item" @click=${i}>
        <ap-checkbox ?checked=${t}></ap-checkbox>
        <span class="user-avatar">
          ${e.avatarUrl?s.dy`<img src=${e.avatarUrl} alt="" />`:s.dy`<span>${this._getInitials(e)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${e.name}</span>
          ${e.email?s.dy`<span class="user-email">${e.email}</span>`:s.Ld}
        </span>
      </div>
    `}_renderUserSelectedChips(e,t,i){return 0===t.length?s.Ld:s.dy`
      <div class="chips-wrap">
        ${t.map((t=>{const a=e.find((e=>e.uuid===t));return a?s.dy`
            <div class="chip">
              <span class="user-chip-avatar">
                ${a.avatarUrl?s.dy`<img src=${a.avatarUrl} alt="" />`:s.dy`<span>${this._getInitials(a)}</span>`}
              </span>
              <span class="chip-label">${a.name}</span>
              <button class="chip-remove" @click=${()=>i(t)}>
                <ap-icon name="close" .size=${10}></ap-icon>
              </button>
            </div>
          `:s.Ld}))}
      </div>
    `}_renderUserPickerSection(e){const t=e.selectedValues.length>0,i=this._filterUsers(e.users,e.search);return s.dy`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${e.onClear}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${e.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${bi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
          .value=${e.operator}
          @ap-change=${e.onOperatorChange}
        ></ap-radio-group>

        ${this._renderUserSelectedChips(e.users,e.selectedValues,e.onToggle)}

        <div class="search-wrapper mt-12">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${e.searchPlaceholder}
            .value=${e.search}
            @input=${e.onSearchInput}
          />
          ${e.search?s.dy`
                <button class="search-clear" @click=${e.onSearchClear}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        <div class="options-list users-list">
          ${0===i.length?s.dy`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:i.map((t=>this._renderUserItem(t,e.selectedValues.includes(t.uuid),(()=>e.onToggle(t.uuid)))))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this.approverOperator,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:e=>this._handleApproverOperator(e),onSearchInput:e=>this._onApproverSearchInput(e),onSearchClear:()=>this._clearApproverSearch(),onToggle:e=>this._toggleApprover(e)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this.requesterOperator,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:e=>this._handleRequesterOperator(e),onSearchInput:e=>this._onRequesterSearchInput(e),onSearchClear:()=>this._clearRequesterSearch(),onToggle:e=>this._toggleRequester(e)})}_renderDueDateSection(){const e=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return s.dy`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!e}
          @click=${this._clearDueDate}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          clearable
          .options=${yi.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
          .value=${this.dueDatePreset===Dt||this.dueDatePreset===zt?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${ci.map((e=>({...e,label:this.t(e.labelKey,e.label)})))}
          .value=${this.dueDatePreset!==Dt&&this.dueDatePreset!==zt?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?s.dy`
            <div class="grid-2 mt-12">
              ${"before"!==this.dueDatePreset?s.dy`
                  <div class="date-input-col">
                    <span class="input-label">${this.t("startDate","Start date")}</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `:s.Ld}
              ${"after"!==this.dueDatePreset&&"specific"!==this.dueDatePreset?s.dy`
                  <div class="date-input-col">
                    <span class="input-label">${this.t("endDate","End date")}</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `:s.Ld}
            </div>
          `:s.Ld}
      </div>
    `}render(){return s.dy`
      <div class="filter-content">
        ${this._renderStatusSection()}
        ${this._showApproverSection?s.dy`<div class="separator"></div>${this._renderApproverSection()}`:s.Ld}
        ${this._showRequesterSection?s.dy`<div class="separator"></div>${this._renderRequesterSection()}`:s.Ld}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};ma.styles=[ns,Ts,s.iv`
    .options-list.short {
      max-height: none;
    }
    .date-input-col {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .date-input-col input[type="date"] {
      width: 100%;
    }
    .condition-label {
      font-weight: 500;
      margin-bottom: 8px;
    }
    .mt-12 {
      margin-top: 12px;
    }
    .status-icon-label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .users-list {
      max-height: 220px;
      overflow-y: auto;
      overscroll-behavior: contain;
    }
    .user-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .user-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      font-size: 0.75rem;
      font-weight: 500;
    }
    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .user-text {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    .user-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-email {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-chip-avatar {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      font-size: 0.625rem;
      font-weight: 500;
    }
    .user-chip-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `],ba([(0,a.Cb)({attribute:!1})],ma.prototype,"t",2),ba([(0,a.Cb)({type:Array})],ma.prototype,"selectedStatus",2),ba([(0,a.Cb)()],ma.prototype,"statusOperator",2),ba([(0,a.Cb)({type:Array})],ma.prototype,"approverValues",2),ba([(0,a.Cb)()],ma.prototype,"approverOperator",2),ba([(0,a.Cb)({type:Array})],ma.prototype,"approverUsers",2),ba([(0,a.Cb)({type:Array})],ma.prototype,"requesterValues",2),ba([(0,a.Cb)()],ma.prototype,"requesterOperator",2),ba([(0,a.Cb)({type:Array})],ma.prototype,"requesterUsers",2),ba([(0,a.Cb)()],ma.prototype,"dueDateKind",2),ba([(0,a.Cb)()],ma.prototype,"dueDatePreset",2),ba([(0,a.Cb)()],ma.prototype,"dueDateFrom",2),ba([(0,a.Cb)()],ma.prototype,"dueDateTo",2),ba([(0,a.SB)()],ma.prototype,"_approverSearch",2),ba([(0,a.SB)()],ma.prototype,"_requesterSearch",2),ma=ba([(0,a.Mo)("ap-filter-approval")],ma);var ya=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,xa=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?_a(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ya(t,i,o),o};let ka=class extends s.oi{constructor(){super(...arguments),this.selected=[],this.t=(e,t)=>"string"==typeof t?t:e,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{var e;return null==(e=this._searchInput)?void 0:e.focus()}))}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(e){const t=function(e){return e.filter((t=>t.toLowerCase().includes("*")||!e.some((e=>e.toLowerCase().includes("*")&&t.toLowerCase().startsWith(e.slice(0,-1).toLowerCase())))))}(e);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:wt.PRODUCT_REF,values:t,operator:Lt.IS},bubbles:!0,composed:!0}))}_toggle(e){const t=this.selected.includes(e)?this.selected.filter((t=>t!==e)):[...this.selected,e];this._emit(t)}_remove(e){this._emit(this.selected.filter((t=>t!==e)))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(e){const t=e.target.value;this._search=t,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout((()=>{const e=t.trim().toLowerCase();this._debouncedSearch=e,e?this._fetchProducts(e):(this._products=[],this._isLoading=!1)}),300)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(e){if(this.apiClient){this._isLoading=!0;try{const t=await this.apiClient.request("/products",{q:`reference~^${e}`});this._debouncedSearch===e&&(this._products=t.products??[])}catch{this._debouncedSearch===e&&(this._products=[])}finally{this._debouncedSearch===e&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(e){this._addListText=e.target.value}_onAddListKeydown(e){"Enter"===e.key&&!e.shiftKey&&e.stopPropagation()}_submitAddList(){const e=this._addListText.split("\n").map((e=>e.trim())).filter((e=>""!==e));if(e.length>0){const t=new Set(this.selected),i=[...this.selected,...e.filter((e=>!t.has(e)))];this._emit(i)}this._closeAddList()}_renderProductItem(e){const t=this.selected.includes(e);return s.dy`
      <div
        class="product-item"
        @click=${()=>this._toggle(e)}
      >
        <ap-checkbox ?checked=${t}></ap-checkbox>
        <span class="product-name">${e}</span>
      </div>
    `}render(){const e=0===this.selected.length;return s.dy`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t("searchProductRefsPlaceholder","Search product references")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?s.dy`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:s.Ld}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!e?s.dy`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:s.Ld}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?s.dy`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((e=>s.dy`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `))}
                </div>
              </div>
            `:s.Ld}

        <!-- Search results -->
        ${this._isSearching?s.dy`
              <div class="filter-section">
                <span class="section-label">${this.t("productReferences","Product references")}</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):s.Ld}
                  ${this._products.map((e=>{let{ref:t}=e;return this._renderProductItem(t)}))}
                </div>
              </div>
            `:s.Ld}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?s.Ld:s.dy`
              <div class="placeholder">
                ${e?s.dy`<ap-icon name="box" .size=${40} ${$s({color:"var(--ap-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}></ap-icon>`:s.Ld}
                <div class="placeholder-title">${this.t("findProductRef","Find product reference")}</div>
                <div class="placeholder-text">${this.t("productRefSearchHint","By using the search or pressing the button below to import the product references list.")}</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  ${this.t("addList","Add list")}
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?s.dy`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:s.Ld}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&0===this._products.length?s.dy`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:s.Ld}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?s.dy`
            <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}>
              <div class="dialog">
                <div class="dialog-header">${this.t("addProductRefsList","Add products references list")}</div>
                <div class="dialog-body">
                  <div class="info-alert" ${$s({"margin-top":"0"})}>
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span>
                  </div>
                  <label class="input-label" ${$s({"margin-bottom":"0","font-weight":"400",color:"var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89))"})}>${this.t("productReferences","Product references")}</label>
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t("productRefsTextareaPlaceholder","Enter product references separated by new lines")}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>${this.t("cancel","Cancel")}</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>${this.t("continue","Continue")}</button>
                </div>
              </div>
            </div>
          `:s.Ld}
    `}};ka.styles=[ns,Ts,s.iv`
    .product-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .product-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .product-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 2;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .product-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .product-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .search-clear {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 8px 20px;
      gap: 4px;
    }

    .placeholder-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .placeholder-text {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .add-list-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 14px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: background 150ms;
    }

    .add-list-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    /* Add list dialog overlay */
    .dialog-overlay {
      position: fixed;
      inset: 0;
      z-index: 1360;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog {
      background: var(--ap-card, oklch(1 0 0));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      width: 420px;
      max-width: 90vw;
      padding: 0;
    }

    .dialog-header {
      padding: 16px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      text-align: center;
    }

    .dialog-body {
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .dialog-body .info-alert {
      margin-bottom: 14px;
    }

    .dialog-textarea {
      width: 100%;
      min-height: 150px;
      max-height: 300px;
      padding: 8px 10px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      resize: vertical;
      outline: none;
    }

    .dialog-textarea:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .dialog-textarea::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .dialog-btn {
      padding: 8px 16px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      cursor: pointer;
      transition: background 150ms;
    }

    .dialog-btn-cancel {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .dialog-btn-cancel:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .dialog-btn-primary {
      border: none;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }

    .dialog-btn-primary:hover {
      opacity: 0.9;
    }

    .loading-skeleton {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }

    .skeleton-item {
      height: 32px;
      border-radius: var(--ap-radius-sm, 6px);
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton-item { animation: none; }
    }

    .wildcard-tooltip {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: 4px;
    }
  `],xa([(0,a.Cb)({type:Array})],ka.prototype,"selected",2),xa([(0,a.Cb)({attribute:!1})],ka.prototype,"apiClient",2),xa([(0,a.Cb)({attribute:!1})],ka.prototype,"t",2),xa([(0,a.IO)(".product-search")],ka.prototype,"_searchInput",2),xa([(0,a.SB)()],ka.prototype,"_search",2),xa([(0,a.SB)()],ka.prototype,"_debouncedSearch",2),xa([(0,a.SB)()],ka.prototype,"_products",2),xa([(0,a.SB)()],ka.prototype,"_isLoading",2),xa([(0,a.SB)()],ka.prototype,"_showAddList",2),xa([(0,a.SB)()],ka.prototype,"_addListText",2),ka=xa([(0,a.Mo)("ap-filter-product-ref")],ka);var $a=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Sa=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?wa(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&$a(t,i,o),o};let Ca=class extends s.oi{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=Xi,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.approverUsers=[],this.requesterUsers=[],this.t=(e,t)=>"string"==typeof t?t:e,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=e=>{const t=e.composedPath();if(this._externalTrigger&&t.some((e=>{var t;return e instanceof HTMLElement&&e.classList.contains("chip")&&(null==(t=e.closest)?void 0:t.call(e,"ap-filters-bar"))})))return;const i=this._openFilter&&t.some((e=>e instanceof HTMLElement&&(e.classList.contains("popover-anchor")||e.classList.contains("popover-panel")))),s=(this._showDropdown||this._showMetadataSelector)&&t.some((e=>e instanceof HTMLElement&&(e.classList.contains("dropdown-menu")||e.classList.contains("filter-dropdown")||e.classList.contains("metadata-selector-overlay"))));i||s||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(e){if((e.has("_openFilter")||e.has("_externalTrigger")||e.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&null!=this._externalLeft&&(e.has("_openFilter")||e.has("_externalLeft")||e.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const t=e.closest(".popover-anchor"),i=t?t.offsetWidth:this.offsetWidth,s=e.offsetWidth;this._externalLeft+s>i-8&&(e.style.left=`${Math.max(8,i-s-8)}px`)}}}_closeAllDropdowns(){var e;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,null==(e=this._sortDropdown)||e.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const e=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!e}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;if(t&&this._externalTrigger&&this._openFilter===e&&!this._openMetadataField)return void this.closeFilterPanel();const a="approval"===e&&this._isApprovalActive();if(!t&&!this._isFilterActive(e)&&!a)return this._showDropdown=!1,this._showMetadataSelector=!1,void this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:e},bubbles:!0,composed:!0}));this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=e,this._openMetadataField=null,this._externalTrigger=t,this._externalLeft=i??null,this._externalTop=s??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(e){this.dispatchEvent(new CustomEvent("sort-change",{detail:e.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const e="asc"===this.sortDirection?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:e},bubbles:!0,composed:!0}))}_isFilterActive(e){return e in this.filters.applied&&void 0!==this.filters.applied[e]}_isApprovalActive(){const e=this.filters.applied;return St in e||Ct in e||Ft in e||At in e}_handleFilterChange(e){e.stopPropagation();const{key:t,values:i,operator:s}=e.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:t,values:i,operator:s},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:e.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:e.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(e){e.stopPropagation(),this._openMetadataField=e.detail.fieldKey}_handleMetadataSelectorFieldSelect(e){var t;e.stopPropagation();const i=e.detail.fieldKey;this._showMetadataSelector=!1,this._showDropdown=!1,i in((null==(t=this.filters.metadata)?void 0:t.applied)||{})?(this._openFilter="metadata",this._openMetadataField=i):this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:i},bubbles:!0,composed:!0}))}_handleMetadataPin(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:e.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;t&&this._externalTrigger&&this._openMetadataField===e?this.closeFilterPanel():(this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=e,this._externalTrigger=t,this._externalLeft=i??null,this._externalTop=s??null)}_getMetadataFieldLabel(e){for(const t of this.metadataFields)if(`${Mt[t.type]||""}${t.key}`===e)return t.label;return e}_togglePin(e,t){t.stopPropagation();const i=this.pinnedFilters.includes(e);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:e,pinned:!i},bubbles:!0,composed:!0}))}_getFilterIcon(e){const t=Ht.find((t=>t.key===e));return(null==t?void 0:t.icon)||"filter"}_renderFilterContent(e){var t;const{t:i}=this,a=this.filters.applied;switch(e===St||e===Ct||e===Ft||e===At?"approval":e){case"type":{const e=a.type;return s.dy`<ap-filter-type
          .selected=${(null==e?void 0:e.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const e=a.tags;return s.dy`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(null==e?void 0:e.values)||[]}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const e=a.labels;return s.dy`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(null==e?void 0:e.values)||[]}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const e=a.color;return s.dy`<ap-filter-color
          .values=${(null==e?void 0:e.values)||[]}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const e=a.date;return s.dy`<ap-filter-date
          .filterKey=${"date"}
          .field=${(null==e?void 0:e.field)||"created"}
          .kind=${(null==e?void 0:e.kind)||null}
          .from=${(null==e?void 0:e.from)||""}
          .to=${(null==e?void 0:e.to)||""}
          .preset=${(null==e?void 0:e.preset)||""}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const e=a.asset_expiration;return s.dy`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(null==e?void 0:e.kind)||null}
          .from=${(null==e?void 0:e.from)||""}
          .to=${(null==e?void 0:e.to)||""}
          .preset=${(null==e?void 0:e.preset)||""}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const e=a.size,o=(null==(t=null==e?void 0:e.values)?void 0:t[0])||"",[r,n]=o.split(".."),l=r?parseFloat(r)/1e6:0,d=n?parseFloat(n)/1e6:0;return s.dy`<ap-filter-size
          .min=${l}
          .max=${d}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const e=a.image,t=e&&"resolution"in e?e:null;return s.dy`<ap-filter-image
          .selectedResolution=${(null==t?void 0:t.resolution)||[]}
          .selectedOrientation=${(null==t?void 0:t.orientation)||[]}
          .selectedFaces=${(null==t?void 0:t.faces)||[]}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const e=a.approval_status,t=a.task_approver,o=a.task_requester,r=a.task_duedate;return s.dy`<ap-filter-approval
          .selectedStatus=${(null==e?void 0:e.values)||[]}
          .statusOperator=${(null==e?void 0:e.operator)||":="}
          .approverValues=${(null==t?void 0:t.values)||[]}
          .approverOperator=${(null==t?void 0:t.operator)||":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(null==o?void 0:o.values)||[]}
          .requesterOperator=${(null==o?void 0:o.operator)||":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(null==r?void 0:r.kind)??null}
          .dueDatePreset=${(null==r?void 0:r.preset)||""}
          .dueDateFrom=${(null==r?void 0:r.from)||""}
          .dueDateTo=${(null==r?void 0:r.to)||""}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?s.dy`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            .t=${i}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:s.dy`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          .t=${i}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const e=a.product_ref;return s.dy`<ap-filter-product-ref
          .selected=${(null==e?void 0:e.values)||[]}
          .apiClient=${this.apiClient}
          .t=${i}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return s.Ld}}_renderFilterButton(e){const{t:t}=this,i="metadata"===e.key,a="approval"===e.key,o=i?Object.keys(this.filters.metadata.applied).length>0:a?this._isApprovalActive():this._isFilterActive(e.key),r=this.pinnedFilters.includes(e.key),n=s.dy`
      <button
        class="filter-btn ${o?"active":""} ${r?"pinned":""}"
        @click=${()=>i?this._toggleMetadataSelector():this.openFilterPanel(e.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${e.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${t(e.labelKey,e.label)}
        </span>
        ${i?s.dy`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:s.dy`
              <span
                class="pin-btn ${r?"pinned":""}"
                title=${r?t("unpinFilter","Unpin filter"):t("pinFilter","Pin filter")}
                @click=${t=>this._togglePin(e.key,t)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return i?s.dy`
      <div class="filter-btn-wrapper">
        ${n}
        ${this._showMetadataSelector?s.dy`
          <div class="metadata-selector-overlay">
            <ap-filter-metadata
              mode="selector"
              .fields=${this.metadataFields}
              .appliedMetadata=${this.filters.metadata.applied}
              .visibleFields=${this.filters.metadata.visible}
              .pinnedFields=${this.filters.metadata.pinned}
              .t=${this.t}
              @metadata-field-select=${this._handleMetadataSelectorFieldSelect}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
            ></ap-filter-metadata>
          </div>
        `:s.Ld}
      </div>
    `:n}render(){const{t:e}=this,t=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return s.dy`
      <div class="toolbar-row">
        ${this.isLoading?s.dy`<span class="count-skeleton"></span>`:s.dy`<span class="count">${this.countLabel||[this.totalFolderCount>0?e("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||0===this.totalFolderCount?e("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span>`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?s.dy`
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              ${e("filters","Filters")}
              ${t>0?s.dy`<span class="filter-count">${t}</span>`:s.dy`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?s.dy`
              <div class="dropdown-menu">
                ${Ht.filter((e=>!this.forcedFilterKeys.includes(e.key))).map((e=>this._renderFilterButton(e)))}
              </div>
            `:s.Ld}
          </div>
          `:s.Ld}
          <ap-dropdown
            variant="borderless"
            .label=${e("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map((t=>({...t,label:e(t.labelKey,t.label)})))}
            @ap-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></ap-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${"asc"===this.sortDirection?e("sortAscending","Sort ascending"):e("sortDescending","Sort descending")}
            title=${"asc"===this.sortDirection?e("ascending","Ascending"):e("descending","Descending")}
          >
            <ap-icon name=${"asc"===this.sortDirection?"sort-asc":"sort-desc"} .size=${18}></ap-icon>
          </button>
          ${this.showCreateFolder?s.dy`
            <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
              <ap-icon name="folder-plus" .size=${16}></ap-icon>
              New folder
            </button>
          `:s.Ld}
          ${this.showUpload?s.dy`
            <button class="upload-btn" @click=${this._handleUploadClick}>
              <ap-icon name="upload" .size=${16}></ap-icon>
              ${e("upload","Upload")}
            </button>
          `:s.Ld}
        </div>
      </div>
      ${this._openFilter?s.dy`
        <div class="popover-anchor ${this._externalTrigger?"external":""}" ${$s(this._externalTrigger&&null!=this._externalTop?{top:`${this._externalTop+4}px`}:null)}>
          ${this._externalTrigger?s.Ld:s.dy`
            <div class="anchor-tab">
              ${"metadata"===this._openFilter&&this._openMetadataField?s.dy`
                    <button class="anchor-back" @click=${e=>{e.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:s.dy`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${e(Qt[this._openFilter]??this._openFilter,Gt[this._openFilter]||this._openFilter)}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" ${$s(this._externalTrigger&&null!=this._externalLeft?{left:`${this._externalLeft}px`}:null)}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:s.Ld}
    `}};Ca.styles=s.iv`
    :host {
      display: block;
      padding: 8px 20px 6px;
    }
    .toolbar-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .count-skeleton { animation: none; }
    }
    .spacer {
      flex: 1;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 0;
      min-width: 0;
    }

    /* Filter dropdown trigger */
    .filter-dropdown {
      position: relative;
      display: inline-block;
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .add-btn ap-icon {
      transition: transform 200ms;
    }
    .add-btn.open ap-icon:last-child {
      transform: rotate(180deg);
    }
    .add-btn .filter-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 9px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1;
    }
    .dropdown-menu {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 480px;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      overscroll-behavior: contain;
    }
    .filter-btn-wrapper {
      position: relative;
      display: flex;
    }
    .filter-btn-wrapper .filter-btn {
      flex: 1;
    }
    .metadata-selector-overlay {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      width: 280px;
      max-height: 400px;
      overflow-y: auto;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      text-align: left;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .filter-btn.active:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn.pinned {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .filter-btn.pinned:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon,
    .filter-btn.pinned .filter-btn-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .pin-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      transition: all 150ms;
      opacity: 0;
    }
    .filter-btn:hover .pin-btn,
    .pin-btn.pinned {
      opacity: 1;
    }
    .pin-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: auto;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .upload-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 150ms;
    }
    .upload-btn:hover {
      opacity: 0.9;
    }
    .upload-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: 2px;
    }

    .new-folder-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: 1px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .new-folder-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .new-folder-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    /* Popover anchor row */
    .popover-anchor {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: flex;
      align-items: flex-start;
      padding: 0 20px;
      z-index: 50;
    }
    .anchor-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-bottom: 1px solid var(--ap-card, oklch(1 0 0));
      border-radius: 8px 8px 0 0;
      background: var(--ap-card, oklch(1 0 0));
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      position: relative;
      z-index: 51;
      margin-bottom: -1px;
    }
    .anchor-close {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .popover-panel {
      position: absolute;
      top: 100%;
      left: 20px;
      z-index: 50;
      width: 360px;
      max-height: 400px;
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: 0 8px 8px 8px;
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .popover-anchor.external {
      padding: 0;
      top: 0;
    }
    .popover-anchor.external .popover-panel {
      border-radius: 8px;
      top: 0;
    }
  `,Sa([(0,a.Cb)({type:Number})],Ca.prototype,"totalCount",2),Sa([(0,a.Cb)({type:Number})],Ca.prototype,"totalFolderCount",2),Sa([(0,a.Cb)({type:Boolean})],Ca.prototype,"isLoading",2),Sa([(0,a.Cb)({type:Boolean})],Ca.prototype,"showUpload",2),Sa([(0,a.Cb)({type:Boolean})],Ca.prototype,"showCreateFolder",2),Sa([(0,a.Cb)({type:Boolean})],Ca.prototype,"showFilters",2),Sa([(0,a.Cb)()],Ca.prototype,"countLabel",2),Sa([(0,a.Cb)()],Ca.prototype,"sortBy",2),Sa([(0,a.Cb)()],Ca.prototype,"sortDirection",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"sortOptions",2),Sa([(0,a.Cb)({type:Object})],Ca.prototype,"filters",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"labels",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"tags",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"fileTypes",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"metadataFields",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"pinnedFilters",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"forcedFilterKeys",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"approverUsers",2),Sa([(0,a.Cb)({type:Array})],Ca.prototype,"requesterUsers",2),Sa([(0,a.Cb)({attribute:!1})],Ca.prototype,"apiClient",2),Sa([(0,a.Cb)({attribute:!1})],Ca.prototype,"t",2),Sa([(0,a.IO)("ap-dropdown")],Ca.prototype,"_sortDropdown",2),Sa([(0,a.SB)()],Ca.prototype,"_showDropdown",2),Sa([(0,a.SB)()],Ca.prototype,"_showMetadataSelector",2),Sa([(0,a.SB)()],Ca.prototype,"_openFilter",2),Sa([(0,a.SB)()],Ca.prototype,"_openMetadataField",2),Sa([(0,a.SB)()],Ca.prototype,"_externalTrigger",2),Sa([(0,a.SB)()],Ca.prototype,"_externalLeft",2),Sa([(0,a.SB)()],Ca.prototype,"_externalTop",2),Ca=Sa([(0,a.Mo)("ap-content-toolbar")],Ca);var Fa=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,La=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Aa(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Fa(t,i,o),o};let Ea=class extends s.oi{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(e,t)=>"string"==typeof t?t:e}_mapTypeLabel(e){var t;const i=null==(t=ti.find((t=>t.value===e)))?void 0:t.label;if(i)return i;const s=e.indexOf("_");return-1!==s?e.slice(s+1).toUpperCase():e}_getSizeSummary(e){if(0===e.values.length)return"";const t=e.values[0],[i,s]=t.split(".."),a=i?parseFloat(i):null,o=s?parseFloat(s):null,r=e=>e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)} GB`:`${e} MB`;return null!==a&&null!==o?`${r(a)} \u2013 ${r(o)}`:null!==a?`> ${r(a)}`:null!==o?`< ${r(o)}`:""}_getFilterSummary(e,t){if("string"===e.type){const i=e;if(0===i.values.length)return"";if(t===wt.SIZE)return this._getSizeSummary(i);if(t===wt.COLOR){const e=i.values.map((e=>e.split(" ")[0])).filter(Boolean);return 0===e.length?"":1===e.length?e[0]:`${e[0]} +${e.length-1}`}const s=e=>e===Dt?this.t("empty","Empty"):e===zt?this.t("notEmpty","Not empty"):null,a=t===wt.TYPE?e=>s(e)??this._mapTypeLabel(e):t===wt.TAGS?e=>{var t;return s(e)??((null==(t=this.tags.find((t=>t.sid===e)))?void 0:t.label)||e)}:t===wt.LABELS?e=>{var t;return s(e)??((null==(t=this.labels.find((t=>t.sid===e)))?void 0:t.name)||e)}:t===Ct?e=>{var t;return s(e)??((null==(t=this.approverUsers.find((t=>t.uuid===e)))?void 0:t.name)||e)}:t===Ft?e=>{var t;return s(e)??((null==(t=this.requesterUsers.find((t=>t.uuid===e)))?void 0:t.name)||e)}:e=>s(e)??e;return 1===i.values.length?a(i.values[0]):`${a(i.values[0])} +${i.values.length-1}`}if("date"===e.type)return t===At?this._getDuedateSummary(e):this._getDateSummary(e);if("object"==typeof e&&"resolution"in e){const t=e,i=[...t.resolution,...t.orientation,...t.faces];return 0===i.length?"":1===i.length?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(e){const t=e=>e.split("T")[0],i=e.preset||"";if(i===Dt)return this.t("empty","Empty");if(i===zt)return this.t("notEmpty","Not empty");if("preset"===e.kind){const e=ci.find((e=>e.value===i));return e?this.t(e.labelKey,e.label):i}if("between"===e.kind){if(e.from&&e.to)return`${t(e.from)} \u2013 ${t(e.to)}`;if(e.from)return`${this.t("afterDate","After date")}: ${t(e.from)}`;if(e.to)return`${this.t("beforeDate","Before date")}: ${t(e.to)}`}return"after"===e.kind&&e.from?`${this.t("afterDate","After date")}: ${t(e.from)}`:"before"===e.kind&&e.to?`${this.t("beforeDate","Before date")}: ${t(e.to)}`:"specific"===e.kind&&e.from?t(e.from):""}_getDateSummary(e){const t=ni.find((t=>t.value===e.field)),i=t?this.t(t.labelKey,t.label):"",s=[...li,...di],a=e.preset?s.find((t=>t.value===e.preset)):null,o=a?this.t(a.labelKey,a.label):e.preset||"",r=e=>{try{return e.split("T")[0]}catch{return e}};let n="";switch(e.kind){case"preset":default:n=o;break;case"before":n=e.to?`${this.t("beforeDate","Before date")}: ${r(e.to)}`:o;break;case"after":n=e.from?`${this.t("afterDate","After date")}: ${r(e.from)}`:o;break;case"between":e.from&&e.to?n=`${r(e.from)} \u2013 ${r(e.to)}`:e.from?n=`${this.t("afterDate","After date")}: ${r(e.from)}`:e.to&&(n=`${this.t("beforeDate","Before date")}: ${r(e.to)}`);break;case"specific":n=e.from?r(e.from):""}return n?i?`${i}: ${n}`:n:""}_getFilterIcon(e){var t,i;return e===St||e===Ct||e===Ft||e===At?(null==(t=Ht.find((e=>e.key===wt.APPROVAL)))?void 0:t.icon)||"filter":(null==(i=Ht.find((t=>t.key===e)))?void 0:i.icon)||"filter"}_getMetadataLabel(e){const t=this._stripMetadataPrefix(e),i=this.metadataFields.find((e=>e.key===t));return(null==i?void 0:i.label)||t}_getMetadataIcon(e){const t=this._stripMetadataPrefix(e),i=this.metadataFields.find((e=>e.key===t));return i&&ki[i.type]||"file-text"}_stripMetadataPrefix(e){for(const t of Tt)if(e.startsWith(t))return e.slice(t.length);return e}_removeFilter(e){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:e},bubbles:!0,composed:!0}))}_removeMetadataFilter(e){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(e,t){const i=t.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:e,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(e,t){const i=t.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:e,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(e,t){const{t:i}=this,a=this._getFilterSummary(t,e),o="date"===t.type;return s.dy`
      <span class="chip forced">
        ${(o||e===wt.TYPE||e===wt.SIZE)&&a?s.dy`<span class="chip-label">${a}</span>`:s.dy`
              <span class="chip-label">${i(Qt[e]??e,Gt[e]||e)}</span>
              ${a?s.dy`<span class="chip-summary">${a}</span>`:s.Ld}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(e,t){const{t:i}=this;if(!t)return s.dy`
        <span class="chip pinned-empty ${e===this.activeFilter?"active":""}" @click=${t=>this._openFilter(e,t)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(e)} .size=${16}></ap-icon></span>
          <span class="chip-label">${i(Qt[e]??e,Gt[e]||e)}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const a=this._getFilterSummary(t,e),o="date"===t.type;return s.dy`
      <span class="chip ${e===this.activeFilter?"active":""}" @click=${t=>this._openFilter(e,t)}>
        ${(o||e===wt.TYPE||e===wt.SIZE)&&a?s.dy`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(e)} .size=${16}></ap-icon></span>
              <span class="chip-label">${a}</span>`:s.dy`
              <span class="chip-label">${i(Qt[e]??e,Gt[e]||e)}</span>
              ${a?s.dy`<span class="chip-summary">${a}</span>`:s.Ld}
            `}
        <button class="chip-remove" @click=${t=>{t.stopPropagation(),this._removeFilter(e)}} title=${i("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}_renderMetadataChip(e,t){if(!t){const t=this._getMetadataLabel(e),i=this._getMetadataIcon(e);return s.dy`
        <span class="chip pinned-empty ${e===this.activeMetadataField?"active":""}" @click=${t=>this._openMetadataFilter(e,t)}>
          <span class="chip-icon"><ap-icon name=${i} .size=${16}></ap-icon></span>
          <span class="chip-label">${t}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `}const i=this._getFilterSummary(t),a=this._getMetadataLabel(e),o=this._getMetadataIcon(e);return s.dy`
      <span class="chip ${e===this.activeMetadataField?"active":""}" @click=${t=>this._openMetadataFilter(e,t)}>
        <span class="chip-icon"><ap-icon name=${o} .size=${16}></ap-icon></span>
        <span class="chip-label">${a}</span>
        ${i?s.dy`<span class="chip-summary">${i}</span>`:s.Ld}
        <button class="chip-remove" @click=${t=>{t.stopPropagation(),this._removeMetadataFilter(e)}} title=${this.t("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}render(){const e=Ri(this.forcedFilters),t=new Set(Object.keys(e)),i=Object.keys(this.appliedFilters).filter((e=>!t.has(e))),a=Object.keys(this.appliedMetadata),o=new Set(this.pinnedFilters),r=new Set(this.pinnedMetadataFields),n=this.pinnedFilters.filter((e=>!t.has(e))),l=i.filter((e=>!o.has(e))),d=a.filter((e=>!r.has(e))),c=this.pendingFilter&&!o.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),p=this.pendingMetadataField&&!r.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),h=i.length+a.length>0;return t.size+n.length+this.pinnedMetadataFields.length+l.length+d.length+(c?1:0)+(p?1:0)===0?s.Ld:s.dy`
      <div class="chips-row">
        <div class="chips">
          ${[...t].map((t=>this._renderForcedChip(t,e[t])))}
          ${n.map((e=>this._renderFilterChip(e,this.appliedFilters[e])))}
          ${this.pinnedMetadataFields.map((e=>this._renderMetadataChip(e,this.appliedMetadata[e])))}
          ${l.map((e=>this._renderFilterChip(e,this.appliedFilters[e])))}
          ${c?s.dy`
            <span class="chip pinned-empty active pending" @click=${e=>this._openFilter(this.pendingFilter,e)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this.t(Qt[this.pendingFilter]??this.pendingFilter,Gt[this.pendingFilter]||this.pendingFilter)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:s.Ld}
          ${d.map((e=>this._renderMetadataChip(e,this.appliedMetadata[e])))}
          ${p?s.dy`
            <span class="chip pinned-empty active pending" @click=${e=>this._openMetadataFilter(this.pendingMetadataField,e)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:s.Ld}
          ${h?s.dy`<button class="clear-all" @click=${this._clearAll}>${this.t("clearFilters","Clear filters")}</button>`:s.Ld}
        </div>
      </div>
    `}};Ea.styles=s.iv`
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    .chips-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px 16px;
    }
    .chips {
      display: flex;
      align-items: center;
      gap: 12px;
      overflow-x: auto;
      scrollbar-width: none;
      min-width: 0;
      flex: 1;
    }
    .chips::-webkit-scrollbar {
      display: none;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 12px;
      border: 1px solid var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip-label {
      font-weight: 500;
    }
    .chip-summary {
      opacity: 0.8;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chip-remove {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
      border-radius: 4px;
      margin-left: 4px;
    }
    .chip-remove:hover {
      opacity: 1;
    }
    .clear-all {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 34px;
      padding: 0 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .chip-lock {
      display: flex;
      align-items: center;
      color: inherit;
      opacity: 0.6;
      margin-left: 4px;
    }
    .chip.pinned-empty {
      height: 32px;
      padding: 0 12px;
      gap: 6px;
      border-style: solid;
      border-radius: 6px;
      background: transparent;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `,La([(0,a.Cb)({type:Object})],Ea.prototype,"appliedFilters",2),La([(0,a.Cb)({type:Object})],Ea.prototype,"appliedMetadata",2),La([(0,a.Cb)({type:Object})],Ea.prototype,"forcedFilters",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"metadataFields",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"pinnedFilters",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"pinnedMetadataFields",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"tags",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"labels",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"approverUsers",2),La([(0,a.Cb)({type:Array})],Ea.prototype,"requesterUsers",2),La([(0,a.Cb)()],Ea.prototype,"activeFilter",2),La([(0,a.Cb)()],Ea.prototype,"activeMetadataField",2),La([(0,a.Cb)()],Ea.prototype,"pendingFilter",2),La([(0,a.Cb)()],Ea.prototype,"pendingMetadataField",2),La([(0,a.Cb)({attribute:!1})],Ea.prototype,"t",2),Ea=La([(0,a.Mo)("ap-filters-bar")],Ea);var Oa=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Ta=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ma(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Oa(t,i,o),o};let Pa=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(e){if(e.has("assets")){const t=e.get("assets");t&&this.assets.length>t.length?this._prevCount=t.length:this._prevCount=0}}render(){const e="large"===this.gridSize?"280px":"220px";return s.dy`
      <div class="grid" role="list" aria-label="Assets" ${$s({"--ap-grid-min-col":String(e)})}>
        ${this.folders.map(((e,t)=>s.dy`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${t}
              data-folder-uuid=${e.uuid}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:e.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `))}
        ${this.assets.map(((e,t)=>{const i=t>=this._prevCount?Math.min(t-this._prevCount,20):Math.min(t,20);return s.dy`
              <ap-asset-card
                .asset=${e}
                .t=${this.t}
                .index=${this.folderSelectable?this.folders.length+t:t}
                ?selected=${this.selectedIds.includes(e.uuid)}
                ?disabled=${this.disabledAssetIds.includes(e.uuid)}
                .multiSelect=${this.multiSelect}
                ${$s({"--ap-stagger-index":String(i)})}
                data-asset-uuid=${e.uuid}
                @asset-select=${e=>this.dispatchEvent(new CustomEvent("asset-select",{detail:e.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${e=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:e.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${e=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:e.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `}))}
        ${this.isLoading?Array.from({length:6},(()=>s.dy`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`)):s.Ld}
      </div>
    `}};Pa.styles=s.iv`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .ghost-thumb {
      aspect-ratio: 6/4;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-info {
      padding: 10px 12px;
    }
    .ghost-line {
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-name {
      height: 14px;
      width: 70%;
    }
    .ghost-meta {
      height: 12px;
      width: 50%;
      margin-top: 6px;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-thumb, .ghost-line { animation: none; }
    }
  `,Ta([(0,a.Cb)({attribute:!1})],Pa.prototype,"t",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"assets",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"folders",2),Ta([(0,a.Cb)({type:Object})],Pa.prototype,"folderPreviews",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"selectedIds",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"selectedFolderIds",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"disabledAssetIds",2),Ta([(0,a.Cb)({type:Array})],Pa.prototype,"disabledFolderIds",2),Ta([(0,a.Cb)({type:Boolean})],Pa.prototype,"isLoading",2),Ta([(0,a.Cb)({type:Boolean})],Pa.prototype,"multiSelect",2),Ta([(0,a.Cb)({type:Boolean})],Pa.prototype,"folderSelectable",2),Ta([(0,a.Cb)({type:String})],Pa.prototype,"gridSize",2),Pa=Ta([(0,a.Mo)("ap-grid-view")],Pa);var Ia=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,za=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Da(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ia(t,i,o),o};let Ra=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver((e=>{var t;const i=(null==(t=e[0])?void 0:t.contentRect.width)??0,s=i<550?2:i<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)})),this._resizeObserver.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._resizeObserver)||e.disconnect()}_getGridColumns(e){const t=[];return e&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this._compactLevel<2&&t.push("100px"),this._compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}get _allVisibleSelected(){if(0===this.assets.length&&0===this.folders.length||0===this.selectedIds.length&&0===this.selectedFolderIds.length)return!1;const e=new Set(this.selectedIds),t=0===this.assets.length||this.assets.every((t=>e.has(t.uuid)));if(!this.folderSelectable)return t&&this.assets.length>0;const i=new Set(this.selectedFolderIds),s=0===this.folders.length||this.folders.every((e=>i.has(e.uuid)));return t&&s}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const e=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,t=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&t>=e?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const e=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,t=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,i=this._allVisibleSelected&&t>=e;return s.dy`
      <div class="list-header" ${$s({"grid-template-columns":this._getGridColumns(this.multiSelect)})} role="row" aria-label="Column headers">
        ${this.multiSelect?s.dy`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${i?"checked":t>0?"indeterminate":""}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`:s.Ld}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?s.dy`<span>${this.t("size","Size")}</span>`:s.Ld}
        ${this._compactLevel<1?s.dy`<span>${this.t("date","Date")}</span>`:s.Ld}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map(((e,t)=>s.dy`
            <ap-folder-row
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${t}
              data-folder-uuid=${e.uuid}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:e.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `))}
        ${this.assets.map(((e,t)=>s.dy`
            <ap-asset-row
              .asset=${e}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+t:t}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${e.uuid}
              @asset-select=${e=>this.dispatchEvent(new CustomEvent("asset-select",{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${e=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${e=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:e.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `))}
        ${this.isLoading?Array.from({length:5},((e,t)=>s.dy`
                <div class="ghost-row" ${$s({"grid-template-columns":this._getGridColumns(this.multiSelect)})}>
                  ${this.multiSelect?s.dy`<div class="ghost-el ghost-check"></div>`:s.Ld}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${$s({width:["70%","55%","80%","45%","65%"][t]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?s.dy`<div class="ghost-el ghost-size"></div>`:s.Ld}
                  ${this._compactLevel<1?s.dy`<div class="ghost-el ghost-date"></div>`:s.Ld}
                  <div></div>
                </div>
              `)):s.Ld}
      </div>
    `}};function ja(e){if(0===e)return"0 B";const t=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,t)).toFixed(0===t?0:1)} ${["B","KB","MB","GB","TB"][t]}`}function Na(e){if(!e)return"\u2014";const t=new Date(e);return isNaN(t.getTime())?"\u2014":t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Ba(e,t){return e&&t?`${e} x ${t}`:""}Ra.styles=s.iv`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .header-check-box.checked .header-check-icon.check {
      display: block;
    }
    .header-check-box.indeterminate .header-check-icon.dash {
      display: block;
    }
    .list-body {
      display: flex;
      flex-direction: column;
    }
    .ghost-row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check { width: 22px; height: 22px; }
    .ghost-thumb { width: 40px; height: 40px; }
    .ghost-name { height: 14px; border-radius: 4px; }
    .ghost-type { height: 12px; width: 40px; }
    .ghost-size { height: 12px; width: 48px; }
    .ghost-date { height: 12px; width: 72px; }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el { animation: none; }
    }
  `,za([(0,a.Cb)({attribute:!1})],Ra.prototype,"t",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"assets",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"folders",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"selectedIds",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"selectedFolderIds",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"disabledAssetIds",2),za([(0,a.Cb)({type:Array})],Ra.prototype,"disabledFolderIds",2),za([(0,a.Cb)({type:Boolean})],Ra.prototype,"isLoading",2),za([(0,a.Cb)({type:Boolean})],Ra.prototype,"multiSelect",2),za([(0,a.Cb)({type:Boolean})],Ra.prototype,"folderSelectable",2),za([(0,a.Cb)({type:Number})],Ra.prototype,"totalCount",2),za([(0,a.Cb)({type:Boolean})],Ra.prototype,"isSelectingAll",2),za([(0,a.Cb)({type:Object})],Ra.prototype,"folderPreviews",2),za([(0,a.SB)()],Ra.prototype,"_compactLevel",2),Ra=za([(0,a.Mo)("ap-list-view")],Ra);var Ua=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,qa=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ka(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ua(t,i,o),o};let Va=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(e){e.stopPropagation(),e.composedPath().some((e=>e instanceof HTMLElement&&(e.classList.contains("check")||e.classList.contains("check-box"))))?this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0})):this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:e},bubbles:!0}))}_handlePreview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),s=Math.floor(e%60),a=e=>String(e).padStart(2,"0");return t>0?`${t}:${a(i)}:${a(s)}`:`${a(i)}:${a(s)}`}_handleQuickSelect(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var e,t,i,a,o,r,n,l;const d=this.asset;if(!d)return s.dy``;const c="video"===st(d.type),p="pdf"===(null==(e=d.extension)?void 0:e.toLowerCase()),h=!!(null!=(t=d.info)&&t.thumbnail||null!=(i=d.info)&&i.image_thumbnail||null!=(a=d.info)&&a.preview),u=at(d.extension||"")||h;let g="";c?g=bt(d):p?g=mt(d):u&&(g=vt(d));const f=nt(d.extension||""),v=pt(d.extension||"");return s.dy`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${v&&g?"chess":""}">
          ${g?s.dy`<img
                src=${g}
                alt=${d.name}
                loading="lazy"
                class="thumb-img ${v?"transparent-asset":""}"
                @error=${e=>{const t=e.target,i=lt();t.src!==f&&t.src!==i?(t.src=f,t.classList.add("icon-fallback")):t.src!==i&&(t.src=i)}}
              />`:s.dy`<img
                src=${f}
                alt=${d.name}
                class="thumb-img icon-fallback"
                @error=${e=>{const t=e.target,i=lt();t.src!==i&&(t.src=i)}}
              />`}
          ${c&&null!=((null==(o=d.info)?void 0:o.video_duration)??(null==(r=d.info)?void 0:r.duration))?s.dy`<span class="duration">${this._formatDuration(d.info.video_duration??d.info.duration)}</span>`:s.Ld}
          <div class="overlay">
            <button class="overlay-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")}>
              <ap-icon name="preview" .size=${16}></ap-icon>
              ${this.t("preview","Preview")}
            </button>
            <button class="overlay-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")}>
              <ap-icon name="select" .size=${16}></ap-icon>
              ${this.t("select","Select")}
            </button>
          </div>
          ${this.multiSelect?s.dy`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          `:s.Ld}
        </div>
        <div class="info">
          <div class="name" title=${d.name}>${d.name}</div>
          <div class="meta">${null==(n=d.extension)?void 0:n.toUpperCase()}${(()=>{var e,t,i,s;const a=Ba((null==(e=d.info)?void 0:e.img_w)||(null==(t=d.info)?void 0:t.video_w),(null==(i=d.info)?void 0:i.img_h)||(null==(s=d.info)?void 0:s.video_h));return a?` \xb7 ${a}`:""})()} · ${ja((null==(l=d.size)?void 0:l.bytes)||0)}</div>
        </div>
      </div>
    `}};Va.styles=s.iv`
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card {
      position: relative;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      animation: none;
    }
    :host([disabled]) .overlay-btn {
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb-img.transparent-asset {
      padding: 12px;
    }
    .thumb-img.icon-fallback {
      width: auto;
      height: auto;
      max-width: 100px;
      max-height: 100%;
      padding: 16px;
      object-fit: scale-down;
    }
    .overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 150ms;
    }
    .card:hover .overlay {
      opacity: 1;
    }
    .overlay-btn {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 20px;
      min-width: 120px;
      border: none;
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-card, rgba(255, 255, 255, 0.9));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border: 1px solid var(--ap-border, transparent);
      cursor: pointer;
      transition: transform 100ms;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }
    .overlay-btn:hover {
      transform: scale(1.05);
    }
    .overlay-btn.select-btn {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .info {
      padding: 10px 12px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 10;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
    .thumbnail.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 16px 16px;
    }
    .type-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .duration {
      position: absolute;
      bottom: 8px;
      right: 12px;
      z-index: 1;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: 0.6875rem;
      font-weight: 500;
      line-height: 1.2;
      font-variant-numeric: tabular-nums;
    }
    @media (prefers-reduced-motion: reduce) {
      :host { animation: none; }
      .overlay { transition: none; }
    }
  `,qa([(0,a.Cb)({attribute:!1})],Va.prototype,"t",2),qa([(0,a.Cb)({type:Object})],Va.prototype,"asset",2),qa([(0,a.Cb)({type:Number})],Va.prototype,"index",2),qa([(0,a.Cb)({type:Boolean,reflect:!0})],Va.prototype,"selected",2),qa([(0,a.Cb)({type:Boolean,reflect:!0})],Va.prototype,"disabled",2),qa([(0,a.Cb)({type:Boolean})],Va.prototype,"multiSelect",2),Va=qa([(0,a.Mo)("ap-asset-card")],Va);var Ha=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,Qa=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ga(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ha(t,i,o),o};let Wa=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const e=[];return this.multiSelect&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this.compactLevel<2&&e.push("100px"),this.compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}_handleSelect(e){e.composedPath().some((e=>e instanceof HTMLElement&&(e.classList.contains("check")||e.classList.contains("check-box"))))?this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0})):this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:e},bubbles:!0}))}_handlePreview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var e,t,i,a,o,r;const n=this.asset;if(!n)return s.dy``;const l="video"===st(n.type),d="pdf"===(null==(e=n.extension)?void 0:e.toLowerCase()),c=!!(null!=(t=n.info)&&t.thumbnail||null!=(i=n.info)&&i.image_thumbnail||null!=(a=n.info)&&a.preview),p=at(n.extension||"")||c;let h="";l?h=bt(n):d?h=mt(n):p&&(h=vt(n));const u=nt(n.extension||""),g=pt(n.extension||"");return s.dy`
      <div class="row" ${$s({"grid-template-columns":this._getGridColumns()})} @click=${this._handleSelect}>
        ${this.multiSelect?s.dy`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:s.Ld}
        <div class="thumb ${g&&h?"chess":""}">
          ${h?s.dy`<img
                src=${h}
                alt=${n.name}
                class="${g?"transparent-asset":""}"
                loading="lazy"
                @error=${e=>{const t=e.target,i=lt();t.src!==u&&t.src!==i?(t.src=u,t.classList.add("icon-fallback")):t.src!==i&&(t.src=i)}}
              />`:s.dy`<img
                src=${u}
                alt=${n.name}
                class="icon-fallback"
                @error=${e=>{const t=e.target,i=lt();t.src!==i&&(t.src=i)}}
              />`}
        </div>
        <div class="name" title=${n.name}>${n.name}</div>
        <div class="type">${null==(o=n.extension)?void 0:o.toUpperCase()}</div>
        ${this.compactLevel<2?s.dy`<div class="desc">${ja((null==(r=n.size)?void 0:r.bytes)||0)}</div>`:s.Ld}
        ${this.compactLevel<1?s.dy`<div class="date">${Na(n.created_at||"")}</div>`:s.Ld}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")} title=${this.t("select","Select")}>
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")} title=${this.t("preview","Preview")}>
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};Wa.styles=s.iv`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb img.transparent-asset {
      padding: 4px;
    }
    .thumb img.icon-fallback {
      object-fit: scale-down;
      padding: 4px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc, .date {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .actions {
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 100ms;
    }
    .row:hover .actions {
      opacity: 1;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 4px;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn.select-btn {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 12px 12px;
    }
    .check {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `,Qa([(0,a.Cb)({attribute:!1})],Wa.prototype,"t",2),Qa([(0,a.Cb)({type:Object})],Wa.prototype,"asset",2),Qa([(0,a.Cb)({type:Number})],Wa.prototype,"index",2),Qa([(0,a.Cb)({type:Boolean,reflect:!0})],Wa.prototype,"selected",2),Qa([(0,a.Cb)({type:Boolean,reflect:!0})],Wa.prototype,"disabled",2),Qa([(0,a.Cb)({type:Boolean})],Wa.prototype,"multiSelect",2),Qa([(0,a.Cb)({type:Number})],Wa.prototype,"compactLevel",2),Wa=Qa([(0,a.Mo)("ap-asset-row")],Wa);var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Ja=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Xa(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ya(t,i,o),o};let Za=class extends s.oi{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(e){if(this.selectable)return e.composedPath().some((e=>e instanceof HTMLElement&&(e.classList.contains("check")||e.classList.contains("check-box"))))?(e.stopPropagation(),void this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0,composed:!0}))):void this._handleOpen();this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(e){return kt(e,"200")}_renderPreviewImg(e){const t=ut(e.file_type),i=this._getPreviewUrl(e),a=nt(dt(e.file_type)),o=lt();return s.dy`<div class="preview-slot ${t?"icon-bg":""}">
      <img
        class="preview-img ${t?"icon-mode":""}"
        src="${i||a}"
        alt=""
        loading="lazy"
        @error=${e=>{const t=e.target,i=t.parentElement;t.src!==a&&t.src!==o?(t.src=a,t.classList.add("icon-mode"),null==i||i.classList.add("icon-bg")):t.src!==o&&(t.src=o,t.classList.add("icon-mode"),null==i||i.classList.add("icon-bg"))}}
        @load=${e=>{const t=e.target,i=t.parentElement;t.src.includes("assets/file-types")&&(t.classList.add("icon-mode"),null==i||i.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(0===this.previews.length)return s.dy`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;const e=this.previews.slice(0,3);return 1===e.length?s.dy`<div class="preview-left">${this._renderPreviewImg(e[0])}</div>`:s.dy`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(e[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(e[1])}</div>
          ${e[2]?s.dy`<div class="preview-right-item">${this._renderPreviewImg(e[2])}</div>`:s.Ld}
        </div>
      </div>
    `}render(){var e,t;const i=this.folder;if(!i)return s.dy``;const a=(null==(e=i.count)?void 0:e.files_direct)??0,o=((null==(t=i.count)?void 0:t.files_recursive)??0)-a;return s.dy`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable&&this.multiSelect?s.dy`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:s.Ld}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${i.name}>${i.name}</div>
            <div class="counts">
              <span>${a} asset${1!==a?"s":""}</span>
              ${o>0?s.dy`<span>${o} sub-asset${1!==o?"s":""}</span>`:s.Ld}
            </div>
          </div>
        </div>
      </div>
    `}};Za.styles=[ns,s.iv`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      transition: filter 150ms;
    }
    :host([selected]) .card {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)));
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      opacity: 0;
      transition: opacity 150ms;
      pointer-events: none;
    }
    .card:hover {
      filter: drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    :host([selected]) .card:hover {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .card:hover .preview-overlay {
      opacity: 1;
    }
    .card-content {
      position: relative;
      z-index: 1;
      padding: 12% 3.5% 12px;
      display: flex;
      flex-direction: column;
    }
    .preview-container {
      position: relative;
      aspect-ratio: 16/9;
      display: flex;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-grid {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 6px;
    }
    .preview-left {
      flex: 1;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-right {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .preview-right-item {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-left > .preview-slot,
    .preview-right-item > .preview-slot {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-slot {
      display: flex;
      position: relative;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .preview-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 8px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-radius: 4px;
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .info {
      flex-shrink: 0;
      padding-top: 8px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 3;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `],Ja([(0,a.Cb)({type:Object})],Za.prototype,"folder",2),Ja([(0,a.Cb)({type:Array})],Za.prototype,"previews",2),Ja([(0,a.Cb)({type:Boolean,reflect:!0})],Za.prototype,"selected",2),Ja([(0,a.Cb)({type:Boolean,reflect:!0})],Za.prototype,"disabled",2),Ja([(0,a.Cb)({type:Boolean})],Za.prototype,"selectable",2),Ja([(0,a.Cb)({type:Boolean})],Za.prototype,"multiSelect",2),Ja([(0,a.Cb)({type:Number})],Za.prototype,"index",2),Za=Ja([(0,a.Mo)("ap-folder-card")],Za);var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,io=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?to(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&eo(t,i,o),o};let so=class extends s.oi{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const e=[];return this.multiSelect&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this.compactLevel<2&&e.push("100px"),this.compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}_renderPreviewImg(e){const t=ut(e.file_type),i=kt(e,"80"),a=nt(dt(e.file_type)),o=lt();return s.dy`<div class="preview-slot ${t?"icon-bg":""}"><img
      class="preview-img ${t?"icon-mode":""}"
      src="${i||a}"
      alt=""
      loading="lazy"
      @error=${e=>{const t=e.target,i=t.parentElement;t.src!==a&&t.src!==o?(t.src=a,t.classList.add("icon-mode"),null==i||i.classList.add("icon-bg")):t.src!==o&&(t.src=o,t.classList.add("icon-mode"),null==i||i.classList.add("icon-bg"))}}
    /></div>`}_renderThumb(){const e=s.dy`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `,t=this.previews.slice(0,2);return s.dy`
      ${e}
      <div class="preview-area">
        ${t.length>0?t.map((e=>this._renderPreviewImg(e))):s.dy`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`}
      </div>
    `}_handleClick(e){if(this.selectable)return e.composedPath().some((e=>e instanceof HTMLElement&&(e.classList.contains("check")||e.classList.contains("check-box"))))?(e.stopPropagation(),void this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0,composed:!0}))):void this._handleOpen();this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,t;const i=this.folder;return i?s.dy`
      <div class="row" ${$s({"grid-template-columns":this._getGridColumns()})} @click=${this._handleClick}>
        ${this.multiSelect?this.selectable?s.dy`
              <div class="check">
                <div class="check-box">
                  <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:s.dy`<div></div>`:s.Ld}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${i.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?s.dy`<div class="meta">${(null==(e=i.count)?void 0:e.files_recursive)??(null==(t=i.count)?void 0:t.files_direct)??0} items</div>`:s.Ld}
        ${this.compactLevel<1?s.dy`<div class="meta">${Na(i.modified_at||i.updated_at||"")}</div>`:s.Ld}
        <div></div>
      </div>
    `:s.dy``}};so.styles=s.iv`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 36px;
      position: relative;
      flex-shrink: 0;
    }
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .preview-area {
      position: absolute;
      top: 30%;
      left: 4%;
      right: 4%;
      bottom: 8%;
      overflow: hidden;
      border-radius: 1.5px;
      display: flex;
      gap: 1px;
    }
    .preview-slot {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 2px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .check {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `,io([(0,a.Cb)({type:Object})],so.prototype,"folder",2),io([(0,a.Cb)({type:Array})],so.prototype,"previews",2),io([(0,a.Cb)({type:Boolean,reflect:!0})],so.prototype,"selected",2),io([(0,a.Cb)({type:Boolean,reflect:!0})],so.prototype,"disabled",2),io([(0,a.Cb)({type:Boolean})],so.prototype,"selectable",2),io([(0,a.Cb)({type:Boolean})],so.prototype,"multiSelect",2),io([(0,a.Cb)({type:Number})],so.prototype,"index",2),io([(0,a.Cb)({type:Number})],so.prototype,"compactLevel",2),so=io([(0,a.Mo)("ap-folder-row")],so);var ao=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,ro=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?oo(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ao(t,i,o),o};let no=class extends s.oi{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const e=this.label;if(!e)return s.dy``;const t=e.assets_count??0,i=e.color||"#94a3b8";return s.dy`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" ${$s({background:`color-mix(in srgb, ${i} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${18} ${$s({color:i})}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
          <div class="count">${t} asset${1!==t?"s":""}</div>
        </div>
      </div>
    `}};no.styles=[ns,s.iv`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: box-shadow 150ms, border-color 150ms, background 150ms;
      background: var(--ap-card, oklch(1 0 0));
      overflow: hidden;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 2px;
    }
  `],ro([(0,a.Cb)({type:Object})],no.prototype,"label",2),ro([(0,a.Cb)({type:Number})],no.prototype,"index",2),no=ro([(0,a.Mo)("ap-label-card")],no);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,po=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?co(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&lo(t,i,o),o};let ho=class extends s.oi{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const e=this.label;if(!e)return s.dy``;const t=e.assets_count??0,i=e.color||"#94a3b8";return s.dy`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" ${$s({background:`color-mix(in srgb, ${i} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${16} ${$s({color:i})}></ap-icon>
        </div>
        <div class="name" title=${e.name}>${e.name}</div>
        <div class="count">${t} asset${1!==t?"s":""}</div>
      </div>
    `}};ho.styles=s.iv`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `,po([(0,a.Cb)({type:Object})],ho.prototype,"label",2),po([(0,a.Cb)({type:Number})],ho.prototype,"index",2),ho=po([(0,a.Mo)("ap-label-row")],ho);var uo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,fo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?go(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&uo(t,i,o),o};let vo=class extends s.oi{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(e){e.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const e=this.collection;return e?s.dy`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.title}>${e.title}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:s.dy``}};vo.styles=[ns,s.iv`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .card:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(
        135deg,
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `],fo([(0,a.Cb)({type:Object})],vo.prototype,"collection",2),fo([(0,a.Cb)({type:Number})],vo.prototype,"index",2),vo=fo([(0,a.Mo)("ap-collection-card")],vo);var bo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,yo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?mo(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&bo(t,i,o),o};let _o=class extends s.oi{constructor(){super(...arguments),this.index=0}_formatDate(e){if(!e)return"";try{return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const e=this.collection;return e?s.dy`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${e.title}>${e.title}</div>
        <div class="date">${this._formatDate(e.updated_at)}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:s.dy``}};_o.styles=s.iv`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(
        135deg,
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      text-align: right;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `,yo([(0,a.Cb)({type:Object})],_o.prototype,"collection",2),yo([(0,a.Cb)({type:Number})],_o.prototype,"index",2),_o=yo([(0,a.Mo)("ap-collection-row")],_o);var xo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,$o=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ko(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&xo(t,i,o),o};let wo=class extends s.oi{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(e){e.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const e=this.folder;return e?s.dy`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:s.dy``}};wo.styles=[ns,s.iv`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .card:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `],$o([(0,a.Cb)({type:Object})],wo.prototype,"folder",2),$o([(0,a.Cb)({type:Number})],wo.prototype,"index",2),wo=$o([(0,a.Mo)("ap-collection-folder-card")],wo);var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,Fo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Co(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&So(t,i,o),o};let Ao=class extends s.oi{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const e=this.folder;return e?s.dy`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${e.name}>${e.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:s.dy``}};Ao.styles=s.iv`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `,Fo([(0,a.Cb)({type:Object})],Ao.prototype,"folder",2),Fo([(0,a.Cb)({type:Number})],Ao.prototype,"index",2),Ao=Fo([(0,a.Mo)("ap-collection-folder-row")],Ao);var Lo=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,Oo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Eo(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Lo(t,i,o),o};let Mo=class extends s.oi{constructor(){super(...arguments),this.t=(e,t)=>"string"==typeof t?t:e,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if("grid"===this.variant){const e="large"===this.gridSize?"280px":"220px";return s.dy`
        <div class="grid-skeleton" ${$s({"--ap-grid-min-col":String(e)})}>
          ${Array.from({length:18},(()=>s.dy`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`))}
        </div>
      `}const e=[];this.multiSelect&&e.push("32px"),e.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const t=e.join(" "),i=s.dy`
      <div class="row-skel" ${$s({"grid-template-columns":t})}>
        ${this.multiSelect?s.dy`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name row-skel-folder-name"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=e=>s.dy`
      <div class="row-skel" ${$s({"grid-template-columns":t})}>
        ${this.multiSelect?s.dy`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${$s({width:e})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,o=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],r=12-this.folderCount;return s.dy`
      <div class="list-header" ${$s({"grid-template-columns":t})}>
        ${this.multiSelect?s.dy`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},(()=>i))}
      ${Array.from({length:r},((e,t)=>a(o[t%o.length])))}
    `}};Mo.styles=s.iv`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--ap-radius, 8px);
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .grid-skeleton {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .card-skel-thumb {
      aspect-ratio: 6/4;
    }
    .card-skel-info {
      padding: 10px 12px;
    }
    .card-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .card-skel-meta {
      height: 12px;
      width: 50%;
      border-radius: 4px;
      margin-top: 6px;
    }
    .row-skel {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .row-skel-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .row-skel-check {
      width: 22px;
      height: 22px;
      border-radius: 4px;
    }
    .row-skel-thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .row-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .row-skel-folder-name {
      width: 55%;
    }
    .row-skel-type {
      height: 12px;
      width: 40px;
      border-radius: 4px;
    }
    .row-skel-size {
      height: 12px;
      width: 48px;
      border-radius: 4px;
    }
    .row-skel-date {
      height: 12px;
      width: 72px;
      border-radius: 4px;
    }
    .row-skel-folder-thumb {
      width: 40px;
      height: 36px;
      position: relative;
    }
    .row-skel-folder-thumb svg {
      width: 100%;
      height: 100%;
    }
    .row-skel-folder-thumb svg path {
      fill: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--ap-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `,Oo([(0,a.Cb)({attribute:!1})],Mo.prototype,"t",2),Oo([(0,a.Cb)({reflect:!0})],Mo.prototype,"variant",2),Oo([(0,a.Cb)({type:String})],Mo.prototype,"gridSize",2),Oo([(0,a.Cb)({type:Boolean})],Mo.prototype,"multiSelect",2),Oo([(0,a.Cb)({type:Number})],Mo.prototype,"folderCount",2),Mo=Oo([(0,a.Mo)("ap-skeleton")],Mo);var To=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Io=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Po(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&To(t,i,o),o};let Do=class extends s.oi{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(e,t)=>"string"==typeof t?t:e,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(e){if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;const t=e.composedPath()[0];if(!t)return;const i=t.tagName;"INPUT"===i||"TEXTAREA"===i||"SELECT"===i||"radio"===t.getAttribute("role")||"listbox"===t.getAttribute("role")||t.isContentEditable||(e.preventDefault(),"ArrowLeft"===e.key?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(e){if(super.updated(e),e.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=st(this.asset.type);"video"===e&&this._setupHls(this.asset),"image"!==e&&"video"!==e&&(this._previewLoading=!1)}}async _setupHls(e){var t,s;const a=Ge(e);if(!a||(await this.updateComplete,(null==(t=this.asset)?void 0:t.uuid)!==e.uuid))return;const o=this._videoEl;if(o){if(o.canPlayType("application/vnd.apple.mpegurl"))return void(o.src=a);try{const{default:t}=await i.e(588).then(i.bind(i,588));if(!t.isSupported()||(null==(s=this.asset)?void 0:s.uuid)!==e.uuid||!this.isConnected)return;const r=new t;this._hls=r,r.loadSource(a),r.attachMedia(o),r.on(t.Events.ERROR,((t,i)=>{var s;i.fatal&&(this._destroyHls(),o.src=(null==(s=e.url)?void 0:s.cdn)||"")}))}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var e;null==(e=document.exitFullscreen)||e.call(document)}_fullscreen(){var e,t,i,s,a,o;"pdf"===(null==(t=null==(e=this.asset)?void 0:e.extension)?void 0:t.toLowerCase())&&null!=(s=null==(i=this.asset)?void 0:i.url)&&s.cdn?window.open(this.asset.url.cdn,"_blank","noopener"):(this._fsImageLoaded=!1,null==(o=null==(a=this.previewArea)?void 0:a.requestFullscreen)||o.call(a))}_select(){if(!this.asset)return;if(!this.multiSelect)return void this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));const e=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:e,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return this.asset&&0!==this.assets.length?this.assets.findIndex((e=>e.uuid===this.asset.uuid)):-1}_navigateTo(e){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:e},bubbles:!0,composed:!0}))}_supportsFullscreen(e){const t=st(e.type);return"image"===t||"video"===t||"audio"===t}_findNavTarget(e,t){const i=1===t?this.assets.length:-1;for(let s=e+t;s!==i;s+=t)if(!this._isFullscreen||this._supportsFullscreen(this.assets[s]))return s;return-1}_prev(){const e=this._getCurrentIndex();if(e<=0)return;const t=this._findNavTarget(e,-1);t>=0&&this._navigateTo(this.assets[t])}_next(){const e=this._getCurrentIndex();if(e<0||e>=this.assets.length-1)return;const t=this._findNavTarget(e,1);t>=0&&this._navigateTo(this.assets[t])}_getFullscreenImageUrl(e){var t,i;const s=null==(t=e.url)?void 0:t.cdn;if(!s)return vt(e)||"";const a={source:"asset",asset:e};if("svg"===(null==(i=e.extension)?void 0:i.toLowerCase()))return ft(s,a);return ft(yt(xt(s,this.containerToken),{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),a)}_getBlurDimensions(e){var t,i;const s=null==(t=e.info)?void 0:t.img_w,a=null==(i=e.info)?void 0:i.img_h;if(!s||!a)return{width:"100vw",height:"100vh"};const o=window.innerWidth,r=window.innerHeight,n=Math.min(o/s,r/a,1);return{width:`${Math.round(s*n)}px`,height:`${Math.round(a*n)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(e){if(!e)return[];if(Array.isArray(e))return this._parseTagArray(e);const t=Object.values(e);if(t.length>0&&Array.isArray(t[0])){const e=t.flat(),i=new Set;return e.filter((e=>!(!e.label||i.has(e.sid))&&(i.add(e.sid),!0)))}return t.map((e=>({label:e.label,sid:e.sid}))).filter((e=>e.label))}_parseTagArray(e){return e.map((e=>{if("string"==typeof e)return{label:e,sid:e};const t=e;return{label:t.label||Object.values(t.names||{})[0]||"",sid:t.sid||""}})).filter((e=>e.label))}_applyTagFilter(e){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:wt.TAGS,values:[e],operator:Lt.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(e){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:wt.LABELS,values:[e],operator:Lt.IS},bubbles:!0,composed:!0}))}_toggleSection(e){const t=new Set(this._openSections);t.has(e)?t.delete(e):t.add(e),this._openSections=t}_renderFileInfoSection(e){const t=this._getFileInfoRows(e);if(0===t.length)return s.Ld;const i=this._openSections.has("file-info");return s.dy`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${i?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>${this.t("fileInfo","File info")}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${i?"open":""}">
          ${t.map((e=>s.dy`
            <div class="meta-row">
              <span class="meta-label" title=${e.label}>${e.label}</span>
              <span class="meta-value" title=${e.value}>${e.value}</span>
            </div>
          `))}
          ${this._renderTagsRow(e)}
          ${this._renderLabelsRow(e)}
        </div>
      </div>
    `}_renderAccordion(e,t,i){if(0===i.length)return s.Ld;const a=this._openSections.has(e);return s.dy`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${a?"true":"false"}
          @click=${()=>this._toggleSection(e)}
        >
          <span>${t}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${a?"open":""}">
          ${i.map((e=>s.dy`
            <div class="meta-row">
              <span class="meta-label" title=${e.label}>${e.label}</span>
              <span class="meta-value" title=${e.value}>${e.value}</span>
            </div>
          `))}
        </div>
      </div>
    `}_getFileInfoRows(e){var t,i,s,a,o,r;const n=[];return n.push({label:this.t("fileName","File name"),value:e.name}),e.extension&&n.push({label:this.t("fileType","Type"),value:e.extension.toUpperCase()}),null!=(t=e.size)&&t.bytes&&n.push({label:this.t("fileSize","Size"),value:ja(e.size.bytes)}),null!=(i=e.info)&&i.img_w&&n.push({label:this.t("dimensions","Dimensions"),value:Ba(e.info.img_w,e.info.img_h)}),null!=(s=e.info)&&s.video_w&&n.push({label:this.t("videoResolution","Video resolution"),value:`${e.info.video_w} x ${e.info.video_h}`}),null!=((null==(a=e.info)?void 0:a.video_duration)??(null==(o=e.info)?void 0:o.duration))&&n.push({label:this.t("duration","Duration"),value:`${Math.round(e.info.video_duration??e.info.duration)}s`}),null!=(r=e.info)&&r.color_space&&n.push({label:this.t("colorSpace","Color space"),value:e.info.color_space}),e.created_at&&n.push({label:this.t("created","Created"),value:Na(e.created_at)}),e.modified_at&&n.push({label:this.t("modified","Modified"),value:Na(e.modified_at)}),n}_buildFieldMap(){const e=new Map;for(const t of this.metadataFields)e.set(t.key,t),t.ckey&&e.set(t.ckey,t),t.slug&&e.set(t.slug,t);return e}_resolveSlug(e,t){var i;if(null==(i=t.possible_values)||!i.length||!e.startsWith("@"))return e;const s=t.possible_values.find((t=>t.internal_unique_value===e||t.api_value===e));return(null==s?void 0:s.label)??e}_resolveFieldValue(e,t){var i;if(null==e||""===e)return"";if(t.regionalVariantsGroupUuid&&"object"==typeof e&&null!==e&&!Array.isArray(e)){const i=this.regionalFilters[t.regionalVariantsGroupUuid];if(i){const s=e[i];if(null!=s&&""!==s)return this._resolveFieldValue(s,{...t,regionalVariantsGroupUuid:void 0})}return""}if(null!=(i=t.possible_values)&&i.length)return Array.isArray(e)?e.map((e=>this._resolveSlug(String(e),t))).filter(Boolean).join(", "):this._resolveSlug(String(e),t);if(Array.isArray(e))return e.join(", ");if("object"==typeof e){const t=JSON.stringify(e);return"{}"===t||"[]"===t?"":t}return String(e)}_getAllMetadataRows(e){var t,i,s,a;const o=[],r=this._buildFieldMap(),n=new Set;if(this.metadataFields.length>0){const a=e;for(const r of this.metadataFields){const l=a[r.key]??(null==(i=null==(t=e.info)?void 0:t.metadata)?void 0:i[r.key])??(null==(s=e.meta)?void 0:s[r.key]),d=this._resolveFieldValue(l,r);if(!d)continue;n.add(r.key),r.slug&&n.add(r.slug);const c=d.length>50;o.push({label:r.label,value:d,wrap:c})}}if(e.meta)for(const[d,c]of Object.entries(e.meta)){if(n.has(d)||null==c||""===c)continue;const e=r.get(d);if(e){const t=this._resolveFieldValue(c,e);if(!t)continue;n.add(d);const i=t.length>50;o.push({label:e.label,value:t,wrap:i})}else{const e="object"==typeof c?JSON.stringify(c):String(c);if(!e||"{}"===e||"[]"===e)continue;n.add(d);const t=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),i=e.length>50;o.push({label:t,value:e,wrap:i})}}const l=null==(a=e.info)?void 0:a.metadata;if(l&&"object"==typeof l)for(const[d,c]of Object.entries(l)){if(n.has(d)||null==c||""===c)continue;const e=r.get(d);if(e){const t=this._resolveFieldValue(c,e);if(!t)continue;n.add(d);const i=t.length>50;o.push({label:e.label,value:t,wrap:i})}else{const e="object"==typeof c?JSON.stringify(c):String(c);if(!e||"{}"===e||"[]"===e)continue;n.add(d);const t=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),i=e.length>50;o.push({label:t,value:e,wrap:i})}}return o}_getAssetLabels(e){return e.labels&&0!==e.labels.length?e.labels.map((e=>this.labels.find((t=>t.sid===e||t.uuid===e)))).filter((e=>!!e)):[]}_renderLabelsRow(e){const t=this._getAssetLabels(e);return 0===t.length?s.Ld:s.dy`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${t.map((e=>s.dy`
            <ap-badge class="tag-link" ${$s({"--ap-muted":`${e.color}22`,"--ap-muted-foreground":e.color})} @click=${()=>this._applyLabelFilter(e.sid||e.uuid)}>
              <span class="label-content">
                <ap-icon name="tag" .size=${12} ${$s({color:e.color})}></ap-icon>
                ${e.name}
              </span>
            </ap-badge>
          `))}
        </div>
      </div>
    `}_renderTagsRow(e){const t=this._getTagEntries(e.tags);return 0===t.length?s.Ld:s.dy`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${t.map((e=>s.dy`
            <ap-badge class="tag-link" @click=${()=>this._applyTagFilter(e.sid)}>${e.label}</ap-badge>
          `))}
        </div>
      </div>
    `}render(){var e,t,i,a,o,r,n,l;const d=this.asset;if(!d)return s.Ld;const c=st(d.type),p="image"===c,h="video"===c,u="audio"===c,g="pdf"===(null==(e=d.extension)?void 0:e.toLowerCase()),f=nt(d.extension||""),v=pt(d.extension||""),b="svg"===(null==(t=d.extension)?void 0:t.toLowerCase()),m=vt(d),y=p?b?ft((null==(i=d.url)?void 0:i.cdn)||"",{source:"asset",asset:d}):m||ft(xt((null==(a=d.url)?void 0:a.cdn)||"",this.containerToken),{source:"asset",asset:d}):"",_=p?this._getFullscreenImageUrl(d):"",x=p&&!b?this._getBlurDimensions(d):null,k=h&&(null==(o=d.url)?void 0:o.cdn)||"",$=h?ft((null==(r=d.info)?void 0:r.video_thumbnail)||(null==(n=d.info)?void 0:n.preview)||"",{source:"video",asset:d}):"",w=g&&!p?mt(d):"",S=this._getCurrentIndex(),C=S>0&&this._findNavTarget(S,-1)>=0,F=S>=0&&this._findNavTarget(S,1)>=0,A=this.assets.length>1;return s.dy`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${d.name}>${d.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!p&&!h&&!u&&!g} aria-label=${this.t("fullscreen","Fullscreen")} title=${this.t("fullscreen","Fullscreen")}>
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label=${this.t("select","Select")} title=${this.t("selectAsset","Select the asset")}>
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${p&&v?"chess":""}">
          ${A?s.dy`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!C} aria-label=${this.t("previous","Previous")}>
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!F} aria-label=${this.t("next","Next")}>
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:s.Ld}
          ${this._isFullscreen?s.dy`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label=${this.t("exitFullscreen","Exit fullscreen")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          `:s.Ld}
          ${this._previewLoading?s.dy`<div class="preview-loading"><div class="spinner"></div></div>`:s.Ld}
          ${p?s.dy`
            <img
              src=${y}
              alt=${d.name}
              @load=${e=>{e.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${e=>{const t=e.target;this._previewLoading=!1,t.src!==f&&(t.src=f,t.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${b?s.Ld:s.dy`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${y}
                  alt=""
                  ${$s({width:x.width,height:x.height})}
                />
              `}
              <img
                class="fs-full ${b||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?_:""}
                alt=${d.name}
                ${$s(b?{width:"100vw",height:"100vh"}:null)}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:s.Ld}
          ${h?s.dy`<video src=${k} poster=${$||s.Ld} controls controlsList="nofullscreen" @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:s.Ld}
          ${u?s.dy`<audio src=${(null==(l=d.url)?void 0:l.cdn)||""} controls></audio>`:s.Ld}
          ${g&&!p?s.dy`
            <img
              src=${w||f}
              alt=${d.name}
              class=${w?"":"icon-fallback"}
              @error=${e=>{const t=e.target;t.src!==f&&(t.src=f,t.classList.add("icon-fallback"))}}
            />
          `:s.Ld}
          ${p||h||u||g?s.Ld:s.dy`<img src=${f} alt=${d.name} class="icon-fallback" />`}
        </div>

        ${this._renderFileInfoSection(d)}
        ${this.showMetadata?s.dy`
          ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(d))}
        `:s.Ld}
      </div>
    `}};Do.styles=s.iv`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--ap-background, oklch(1 0 0));
      border-left: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      display: flex;
      flex-direction: column;
      animation: ap-panel-in 300ms ease-out;
      overflow-y: auto;
      user-select: none;
    }
    @keyframes ap-panel-in {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      height: 50px;
      min-height: 50px;
      padding: 0 16px;
    }
    .panel-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .header-divider {
      width: 1px;
      height: 16px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      margin: 0 2px;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      min-height: 300px;
      height: 300px;
      flex-shrink: 0;
      overflow: hidden;
    }
    .preview-loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: 50%;
      animation: ap-spin 0.6s linear infinite;
    }
    @keyframes ap-spin {
      to { transform: rotate(360deg); }
    }
    .preview-area img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: var(--ap-radius-sm, 6px);
      -webkit-user-drag: none;
      pointer-events: none;
    }
    .preview-area.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 16px 16px;
    }
    .preview-area img.icon-fallback {
      object-fit: scale-down;
      padding: 16px;
      max-width: 100px;
    }
    .preview-area video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    /* Fullscreen styles */
    .preview-area:fullscreen {
      background: #000;
      padding: 0;
    }
    .preview-area:fullscreen .fs-wrapper {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur {
      position: absolute;
      inset: 0;
      margin: auto;
      object-fit: contain;
      filter: blur(8px);
      overflow: hidden;
      clip-path: inset(0);
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur.hidden {
      opacity: 0;
      pointer-events: none;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full {
      position: relative;
      z-index: 1;
      max-width: 100vw;
      max-height: 100vh;
      object-fit: contain;
      border-radius: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full.loaded {
      opacity: 1;
    }
    /* Hide panel img in fullscreen, show fs-wrapper instead */
    .preview-area:fullscreen > img { display: none; }
    .fs-wrapper { display: none; }
    .preview-area:fullscreen .fs-wrapper { display: flex; }
    .preview-area:fullscreen img {
      max-height: 100vh;
      max-width: 100vw;
      border-radius: 0;
    }
    .preview-area:fullscreen video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .preview-area:fullscreen .nav-btn {
      background: rgba(0,0,0,0.5);
      color: #fff;
      width: 40px;
      height: 40px;
    }
    .preview-area:fullscreen .nav-btn:hover:not(:disabled) {
      background: rgba(0,0,0,0.7);
    }
    .fs-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: rgba(0,0,0,0.5);
      color: #fff;
      cursor: pointer;
      z-index: 3;
    }
    .fs-close-btn:hover {
      background: rgba(0,0,0,0.7);
    }
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .nav-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .nav-btn.prev { left: 8px; }
    .nav-btn.next { right: 8px; }
    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .meta-row--col {
      flex-direction: column;
      gap: 6px;
    }
    .label-content {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .tag-link {
      cursor: pointer;
      transition: opacity 150ms;
    }
    .tag-link:hover {
      opacity: 0.75;
    }
    /* Accordion styles */
    .accordion-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .accordion-trigger[aria-expanded="true"] .accordion-chevron {
      transform: rotate(180deg);
    }
    .accordion-content {
      display: none;
      padding: 0 16px 12px;
    }
    .accordion-content.open {
      display: block;
    }
    .meta-row {
      display: flex;
      gap: 12px;
      padding: 6px 0;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel { animation: none; }
      .accordion-chevron { transition: none; }
    }
  `,Io([(0,a.Cb)({type:Object})],Do.prototype,"asset",2),Io([(0,a.Cb)({type:Array})],Do.prototype,"assets",2),Io([(0,a.Cb)({type:Array})],Do.prototype,"selectedIds",2),Io([(0,a.Cb)()],Do.prototype,"containerToken",2),Io([(0,a.Cb)({type:Boolean})],Do.prototype,"showMetadata",2),Io([(0,a.Cb)({type:Array})],Do.prototype,"metadataFields",2),Io([(0,a.Cb)({type:Array})],Do.prototype,"labels",2),Io([(0,a.Cb)({type:Object})],Do.prototype,"regionalFilters",2),Io([(0,a.Cb)({type:Boolean})],Do.prototype,"multiSelect",2),Io([(0,a.Cb)({attribute:!1})],Do.prototype,"t",2),Io([(0,a.IO)(".preview-area")],Do.prototype,"previewArea",2),Io([(0,a.IO)("video")],Do.prototype,"_videoEl",2),Io([(0,a.SB)()],Do.prototype,"_isFullscreen",2),Io([(0,a.SB)()],Do.prototype,"_fsImageLoaded",2),Io([(0,a.SB)()],Do.prototype,"_previewLoading",2),Io([(0,a.SB)()],Do.prototype,"_openSections",2),Do=Io([(0,a.Mo)("ap-preview-panel")],Do);var zo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,jo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ro(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&zo(t,i,o),o};const No={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let Bo=class extends s.oi{constructor(){super(...arguments),this.name="",this.size=20}render(){const e=No[this.name];if(!e)return s.Ld;const t="string"==typeof e?s.YP`<path d=${e}></path>`:e.map((e=>{const{tag:t,attrs:i}=e;return"circle"===t?s.YP`<circle cx=${i.cx} cy=${i.cy} r=${i.r} fill=${i.fill??"none"}></circle>`:"rect"===t?s.YP`<rect width=${i.width} height=${i.height} x=${i.x} y=${i.y} rx=${i.rx??"0"} ry=${i.ry??"0"}></rect>`:s.YP`<path d=${i.d}></path>`}));return s.dy`
      <svg
        ${$s({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${t}
      </svg>
    `}};Bo.styles=[s.iv`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `],jo([(0,a.Cb)()],Bo.prototype,"name",2),jo([(0,a.Cb)({type:Number})],Bo.prototype,"size",2),Bo=jo([(0,a.Mo)("ap-icon")],Bo);var Uo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,qo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Ko(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Uo(t,i,o),o};let Vo=class extends s.oi{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(e,t)=>"string"==typeof t?t:e}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t:e}=this,t=this.selectedAssets.length,i=this.selectedFolders.length;if(0===i)return e("assetsSelected",{count:t,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(0===t)return e("foldersSelected",{count:i,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const s=e("foldersCount",{count:i,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),a=e("assetsCount",{count:t,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return e("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:s,assets:a})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const e=this._selectScope;return"assets"===e?this.selectedAssets.length<this.totalCount:"folders"===e?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const e=this._selectScope;return"assets"===e?this.totalCount:"folders"===e?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const e=this.selectedAssets.length>0,t=this.selectedFolders.length>0;return e&&!t?"assets":t&&!e?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return 0===this._totalSelected?s.Ld:s.dy`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?s.dy`
          <span class="divider"></span>
          <span class="select-label">Select:</span>
          ${this._canSelectMore()?s.dy`<button
                class="bar-btn"
                ?disabled=${this.isSelectingAll}
                @click=${this._selectAll}
              ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):"assets"===this._selectScope?this.t("selectAllAssets","Select all assets"):"folders"===this._selectScope?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}</button>`:s.Ld}
          <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>${this.t("deselectAll","Deselect all")}</button>
          ${this.maxSelections&&this._totalSelected>=this.maxSelections?s.dy`<span class="limit-notice">${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span>`:s.Ld}
        `:s.Ld}
        <div class="spacer"></div>
        ${this.showTransform?s.dy`
          <button class="btn-confirm btn-transform" @click=${this._transform}>${this.t("transform","Transform")}</button>
        `:s.Ld}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Vo.styles=s.iv`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--ap-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-primary-foreground, oklch(1 0 0));
      white-space: nowrap;
    }
    .divider {
      width: 1px;
      height: 20px;
      background: oklch(1 0 0 / 0.3);
      margin: 0 16px;
      flex-shrink: 0;
    }
    .select-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--ap-radius-sm, 6px);
      transition: background 100ms;
    }
    .bar-btn:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .bar-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .limit-notice {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--ap-primary-foreground, oklch(1 0 0));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .btn-transform {
      margin-right: 8px;
      border-color: oklch(1 0 0 / 0.5);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `,qo([(0,a.Cb)({type:Array})],Vo.prototype,"selectedAssets",2),qo([(0,a.Cb)({type:Array})],Vo.prototype,"selectedFolders",2),qo([(0,a.Cb)({type:Number})],Vo.prototype,"totalCount",2),qo([(0,a.Cb)({type:Number})],Vo.prototype,"totalFolderCount",2),qo([(0,a.Cb)({type:Boolean})],Vo.prototype,"isSelectingAll",2),qo([(0,a.Cb)({type:Boolean})],Vo.prototype,"multiSelect",2),qo([(0,a.Cb)({type:Number})],Vo.prototype,"maxSelections",2),qo([(0,a.Cb)({type:Boolean})],Vo.prototype,"showTransform",2),qo([(0,a.Cb)({attribute:!1})],Vo.prototype,"t",2),Vo=qo([(0,a.Mo)("ap-selection-bar")],Vo);var Ho=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Qo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Go(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Ho(t,i,o),o};let Wo=class extends s.oi{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?s.Ld:s.dy`
      <div
        class="marquee"
        ${$s({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Wo.styles=s.iv`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .marquee {
      position: absolute;
      border: 2px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      border-radius: 2px;
    }
  `,Qo([(0,a.Cb)({type:Boolean})],Wo.prototype,"active",2),Qo([(0,a.Cb)({type:Object})],Wo.prototype,"rect",2),Wo=Qo([(0,a.Mo)("ap-marquee-overlay")],Wo);var Yo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Jo=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Xo(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Yo(t,i,o),o};let Zo=class extends s.oi{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=e=>{const t=this.options.filter((e=>!this.disabled&&!e.disabled));if(0===t.length)return;const i=t.findIndex((e=>e.value===this.value));let s=null;switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),s=i<0?0:(i+1)%t.length;break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),s=i<0?t.length-1:(i-1+t.length)%t.length;break;case" ":case"Enter":return e.preventDefault(),void(i>=0?this._select(t[i]):t.length>0&&this._select(t[0]));default:return}null!==s&&this._select(t[s])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return s.dy`
      ${this.options.map((e=>s.dy`
          <div
            class="option"
            role="radio"
            aria-checked=${e.value===this.value}
            aria-disabled=${this.disabled||e.disabled?"true":s.Ld}
            @click=${()=>this._select(e)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${e.icon?s.dy`<ap-icon name=${e.icon} .size=${16}></ap-icon>`:s.Ld}
            <span class="label">${e.label}</span>
          </div>
        `))}
    `}_select(e){if(this.disabled||e.disabled)return;const t=this.clearable&&e.value===this.value?"":e.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}};Zo.styles=[ns,s.iv`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      :host([direction="horizontal"]) {
        flex-direction: row;
        gap: 16px;
      }
      :host([columns="2"]) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 2px 0;
      }
      .option[aria-disabled="true"] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      .radio {
        width: 18px;
        height: 18px;
        min-width: 18px;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option:hover .radio {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .option[aria-checked="true"] .radio {
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-checked="true"] .radio .dot {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .label {
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        user-select: none;
      }
    `],Jo([(0,a.Cb)()],Zo.prototype,"value",2),Jo([(0,a.Cb)({type:Array})],Zo.prototype,"options",2),Jo([(0,a.Cb)({type:Boolean})],Zo.prototype,"disabled",2),Jo([(0,a.Cb)({type:Boolean})],Zo.prototype,"clearable",2),Jo([(0,a.Cb)({reflect:!0})],Zo.prototype,"direction",2),Jo([(0,a.Cb)({reflect:!0})],Zo.prototype,"columns",2),Zo=Jo([(0,a.Mo)("ap-radio-group")],Zo);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ir=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?tr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&er(t,i,o),o};let sr=class extends s.oi{constructor(){super(...arguments),this.size=24}render(){return s.dy`<div class="spinner" ${$s({width:`${this.size}px`,height:`${this.size}px`})}></div>`}};sr.styles=[s.iv`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `],ir([(0,a.Cb)({type:Number})],sr.prototype,"size",2),sr=ir([(0,a.Mo)("ap-spinner")],sr);var ar=Object.defineProperty,or=Object.getOwnPropertyDescriptor,rr=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?or(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ar(t,i,o),o};let nr=class extends s.oi{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(e,t)=>"string"==typeof t?t:e,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(e){this._mode=e.detail.value}render(){const e=this.folders.length;return s.dy`
      <div class="backdrop" @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}>
        <div class="dialog">
          <div class="title">${this.t("addFolderContents","Add folder contents")}</div>
          <div class="description">
            ${this.t("folderResolveDescription","You selected {{count}} folder(s). How would you like to add the assets?",{count:e})}
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:this.t("directAssetsOnly","Direct assets only")},{value:"recursive",label:this.t("allAssetsIncludingSubfolders","All assets (including subfolders)")}]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>${this.t("cancel","Cancel")}</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?s.dy`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> ${this.t("loading","Loading...")}</span>`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};nr.styles=[ns,s.iv`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .options {
      margin-bottom: 24px;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .btn-primary .loading-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `],rr([(0,a.Cb)({type:Array})],nr.prototype,"folders",2),rr([(0,a.Cb)({type:Boolean})],nr.prototype,"loading",2),rr([(0,a.Cb)({attribute:!1})],nr.prototype,"t",2),rr([(0,a.SB)()],nr.prototype,"_mode",2),nr=rr([(0,a.Mo)("ap-folder-resolve-dialog")],nr);var lr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,cr=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?dr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&lr(t,i,o),o};let pr=class extends s.oi{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=e=>{e.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const e=this.options.find((e=>e.value===this.value)),t="ap-dropdown-menu";return s.dy`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${t}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${null!=e&&e.icon?s.dy`<ap-icon name=${e.icon} .size=${16}></ap-icon>`:s.Ld}
        ${this.label?s.dy`<span class="label">${this.label}${e?": ":""}</span>`:s.Ld}${e?e.label:""}
        ${this.clearable&&e?s.dy`<span class="clear-trigger" @click=${this._clear}><ap-icon name="close" .size=${12}></ap-icon></span>`:s.dy`<ap-icon name="chevron-down" .size=${14}></ap-icon>`}
      </button>
      ${this._open?s.dy`
        <div
          id=${t}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          ${$s({["below"===this._menuPosition?"top":"bottom"]:`${"below"===this._menuPosition?this._menuTop:this._menuBottom}px`,["align-left"===this._menuAlign?"left":"right"]:`${"align-left"===this._menuAlign?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map(((e,t)=>s.dy`
              <button
                class="option ${t===this._focusedIndex?"focused":""}"
                role="option"
                aria-selected=${e.value===this.value}
                @click=${()=>this._select(e.value)}
                @mouseenter=${()=>{this._focusedIndex=t}}
              >
                <span class="option-label">
                  ${e.icon?s.dy`<ap-icon name=${e.icon} .size=${16}></ap-icon>`:s.Ld}
                  ${e.label}
                </span>
                ${e.value===this.value?s.dy`<ap-icon name="check" .size=${14}></ap-icon>`:s.Ld}
              </button>
            `))}
        </div>
      `:s.Ld}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex((e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then((()=>this._focusCurrentOption()))):document.removeEventListener("click",this._handleOutsideClick)}_clear(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(e){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}_updateMenuPosition(){const e=this.getBoundingClientRect();this._menuWidth=e.width;const t=window.innerHeight-e.bottom,i=e.top,s=Math.min(36*this.options.length+8,300);this._menuPosition=t<s&&i>t?"above":"below","below"===this._menuPosition?this._menuTop=e.bottom+4:this._menuBottom=window.innerHeight-e.top+4;const a=window.innerWidth-e.left;this._menuAlign=a<200?"align-right":"align-left","align-left"===this._menuAlign?this._menuLeft=e.left:this._menuRight=window.innerWidth-e.right}_handleTriggerKeydown(e){"ArrowDown"===e.key||"ArrowUp"===e.key||"Enter"===e.key||" "===e.key?(e.preventDefault(),this._open||(this._open=!0,this._focusedIndex="ArrowUp"===e.key?this.options.length-1:Math.max(0,this.options.findIndex((e=>e.value===this.value))),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then((()=>this._focusCurrentOption())))):"Escape"===e.key&&this._open&&(e.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(e){var t,i,s,a;switch(e.key){case"ArrowDown":e.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":e.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":e.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),null==(i=null==(t=this.shadowRoot)?void 0:t.querySelector(".trigger"))||i.focus());break;case"Escape":e.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),null==(a=null==(s=this.shadowRoot)?void 0:s.querySelector(".trigger"))||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":e.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":e.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption()}}_focusCurrentOption(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};pr.styles=[ns,s.iv`
      :host {
        position: relative;
        display: inline-block;
      }
      .trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        height: 36px;
        padding: 0 12px;
        box-sizing: border-box;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, oklch(1 0 0));
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant="borderless"]) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.below { bottom: auto; }
      .menu.above { top: auto; }
      .menu.align-left { right: auto; }
      .menu.align-right { left: auto; }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 6px 12px;
        justify-content: space-between;
        border: none;
        background: none;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover, .option.focused {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .option-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option[aria-selected="true"] {
        background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-selected="true"] > ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .trigger .label {
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .clear-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 -4px 0 auto;
        border: none;
        background: none;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .clear-trigger:hover {
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .clear-trigger ap-icon {
        color: inherit;
      }
      .trigger ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: auto;
      }
      .option ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option[aria-selected="true"] ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `],cr([(0,a.Cb)()],pr.prototype,"value",2),cr([(0,a.Cb)()],pr.prototype,"label",2),cr([(0,a.Cb)({reflect:!0})],pr.prototype,"variant",2),cr([(0,a.Cb)({type:Boolean})],pr.prototype,"clearable",2),cr([(0,a.Cb)({type:Array})],pr.prototype,"options",2),cr([(0,a.SB)()],pr.prototype,"_open",2),cr([(0,a.SB)()],pr.prototype,"_focusedIndex",2),cr([(0,a.SB)()],pr.prototype,"_menuPosition",2),cr([(0,a.SB)()],pr.prototype,"_menuAlign",2),cr([(0,a.SB)()],pr.prototype,"_menuTop",2),cr([(0,a.SB)()],pr.prototype,"_menuBottom",2),cr([(0,a.SB)()],pr.prototype,"_menuLeft",2),cr([(0,a.SB)()],pr.prototype,"_menuRight",2),cr([(0,a.SB)()],pr.prototype,"_menuWidth",2),pr=cr([(0,a.Mo)("ap-dropdown")],pr);var hr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,gr=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?ur(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&hr(t,i,o),o};const fr=["webp","jpeg","png","gif"];let vr=class extends s.oi{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(e,t)=>"string"==typeof t?t:e,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const e=this.assets.find((e=>Qe(e)));if(!e)return 1.5;const t=We(e),i=Ye(e);return t&&i?t/i:1.5}get _isDirty(){return this._format!==this._defaultFormat||"excellent"!==this._quality||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(e){e.has("assets")&&this._initDefaults()}_initDefaults(){const e=this.assets.find((e=>Qe(e)));if(this._defaultFormat=function(e){const t=(e??"").toLowerCase();return fr.includes(t)?t:"jpeg"}(null==e?void 0:e.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(e){const t=We(e),i=Ye(e);this._defaultWidth=t||void 0,this._defaultHeight=i||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(e){this._format=e.detail.value}_handleQualityChange(e){this._quality=e.detail.value}_handleWidthInput(e){const t=e.target.value,i=parseInt(t,10),s=""===t||isNaN(i)||i<=0?void 0:i;this._width=s,this._activePreset="",this._lockAspect&&s&&(this._height=Math.round(s/this._ratio))}_handleHeightInput(e){const t=e.target.value,i=parseInt(t,10),s=""===t||isNaN(i)||i<=0?void 0:i;this._height=s,this._activePreset="",this._lockAspect&&s&&(this._width=Math.round(s*this._ratio))}_handleMaxSizeInput(e){const t=e.target.value,i=parseInt(t,10),s=""===t||isNaN(i)||i<=0?void 0:i;this._width=s,this._height=s,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(e){this._activePreset=e.value,"original"===e.value?(this._width=this._defaultWidth,this._height=this._defaultHeight):e.width&&(this._width=e.width,this._height=Math.round(e.width/this._ratio))}_handleApply(){const e={format:this._format,quality:"png"!==this._format?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:e,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(e){e.target===e.currentTarget&&this._handleClose()}render(){const e="png"===this._format;return s.dy`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t("exportOptions","Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close","Close")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t("format","Format")}</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${Je}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${e?s.Ld:s.dy`
            <div class="section">
              <span class="section-label">${this.t("quality","Quality")}</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${Ze}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          `}

          <div class="section">
            <span class="section-label">${this.t("size","Size")}</span>
            ${this.isMultiSelect?s.dy`
              <div class="input-group half-width">
                <span class="input-label">${this.t("maxSize","Max Size")}</span>
                <div class="input-wrapper">
                  <input
                    type="number"
                    min="1"
                    .value=${null!=this._width?String(this._width):""}
                    placeholder="Original"
                    @input=${this._handleMaxSizeInput}
                  />
                  <span class="input-suffix">px</span>
                </div>
              </div>
            `:s.dy`
              <div class="dimensions-row">
                <div class="input-group">
                  <span class="input-label">${this.t("width","Width")}</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${null!=this._width?String(this._width):""}
                      @input=${this._handleWidthInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
                <button
                  class="lock-btn ${this._lockAspect?"locked":""}"
                  @click=${this._toggleLock}
                  title=${this._lockAspect?this.t("unlockAspectRatio","Unlock aspect ratio"):this.t("lockAspectRatio","Lock aspect ratio")}
                >
                  <ap-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></ap-icon>
                </button>
                <div class="input-group">
                  <span class="input-label">${this.t("height","Height")}</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${null!=this._height?String(this._height):""}
                      @input=${this._handleHeightInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
              </div>
            `}
            <div class="presets-row">
              ${et.map((e=>s.dy`
                <button
                  class="preset-btn ${this._activePreset===e.value?"active":""}"
                  @click=${()=>this._handlePreset(e)}
                >${e.label}</button>
              `))}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>${this.applyExportLabel??this.t("applyAndExport","Apply & Export")}</button>
          </div>
        </div>
      </div>
    `}};vr.styles=[ns,s.iv`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      margin-bottom: 20px;
      margin-left: -32px;
      margin-right: -32px;
      padding-left: 32px;
      padding-right: 32px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 100ms, background 100ms;
    }
    .close-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .section {
      margin-bottom: 16px;
    }
    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
      display: block;
    }
    .dimensions-row {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
    .input-group {
      flex: 1;
      min-width: 0;
    }
    .input-group.half-width {
      flex: none;
      width: 50%;
    }
    .input-label {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 4px;
      display: block;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
      background: var(--ap-background, oklch(1 0 0));
    }
    .input-wrapper input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      padding: 8px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      -moz-appearance: textfield;
    }
    .input-wrapper input::-webkit-inner-spin-button,
    .input-wrapper input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .input-wrapper input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .input-suffix {
      padding: 0 10px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      user-select: none;
    }
    .lock-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 36px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      transition: color 100ms;
    }
    .lock-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .lock-btn.locked {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .presets-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .preset-btn {
      padding: 4px 10px;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      transition: color 100ms, background 100ms;
    }
    .preset-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .preset-btn.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 24px;
      margin-left: -32px;
      margin-right: -32px;
      padding: 20px 32px 0;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms, opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    ap-dropdown {
      display: block;
      width: 100%;
    }
  `],gr([(0,a.Cb)({type:Array})],vr.prototype,"assets",2),gr([(0,a.Cb)({type:Boolean})],vr.prototype,"isMultiSelect",2),gr([(0,a.Cb)({attribute:!1})],vr.prototype,"t",2),gr([(0,a.Cb)({attribute:!1})],vr.prototype,"exportOriginalLabel",2),gr([(0,a.Cb)({attribute:!1})],vr.prototype,"applyExportLabel",2),gr([(0,a.SB)()],vr.prototype,"_format",2),gr([(0,a.SB)()],vr.prototype,"_quality",2),gr([(0,a.SB)()],vr.prototype,"_width",2),gr([(0,a.SB)()],vr.prototype,"_height",2),gr([(0,a.SB)()],vr.prototype,"_lockAspect",2),gr([(0,a.SB)()],vr.prototype,"_activePreset",2),vr=gr([(0,a.Mo)("ap-transformation-dialog")],vr);var br=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,yr=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?mr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&br(t,i,o),o};let _r=class extends s.oi{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(e){const t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return s.dy`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};_r.styles=[s.iv`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 16px;
        height: 16px;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      :host(:hover) .box {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([checked]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .check {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
      }
      :host([checked]) .check {
        display: block;
      }
      :host([indeterminate]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .dash {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
      }
      :host([indeterminate]:not([checked])) .dash {
        display: block;
      }
      :host([indeterminate]:not([checked])) .check {
        display: none;
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
      .label {
        margin-left: var(--ap-checkbox-gap, 8px);
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        display: inline-flex;
        align-items: center;
      }
      .label[hidden] {
        display: none;
      }
    `],yr([(0,a.Cb)({type:Boolean,reflect:!0})],_r.prototype,"checked",2),yr([(0,a.Cb)({type:Boolean,reflect:!0})],_r.prototype,"indeterminate",2),yr([(0,a.Cb)({type:Boolean,reflect:!0})],_r.prototype,"disabled",2),_r=yr([(0,a.Mo)("ap-checkbox")],_r);var xr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,$r=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?kr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&xr(t,i,o),o};let wr=class extends s.oi{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=e=>{this.open&&!e.composedPath().includes(this)&&(this.open=!1)}}render(){return s.dy`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};wr.styles=[s.iv`
      :host {
        position: relative;
        display: inline-block;
      }
      .content {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 50;
        min-width: 200px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.open {
        display: block;
      }
    `],$r([(0,a.SB)()],wr.prototype,"open",2),wr=$r([(0,a.Mo)("ap-popover")],wr);var Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Fr=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Cr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Sr(t,i,o),o};let Ar=class extends s.oi{constructor(){super(...arguments),this.variant="default"}render(){return s.dy`<span class="badge"><slot></slot></span>`}};Ar.styles=[s.iv`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 9999px;
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      :host([variant="primary"]) .badge {
        background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `],Fr([(0,a.Cb)({reflect:!0})],Ar.prototype,"variant",2),Ar=Fr([(0,a.Mo)("ap-badge")],Ar);var Lr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Or=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Er(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Lr(t,i,o),o};let Mr=class extends s.oi{constructor(){super(...arguments),this.text=""}render(){return s.dy`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};Mr.styles=[s.iv`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tip {
        display: none;
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 4px 8px;
        font-size: 0.75rem;
        background: var(--ap-foreground, oklch(0.37 0.022 248.413));
        color: var(--ap-background, oklch(1 0 0));
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      :host(:hover) .tip {
        display: block;
      }
    `],Or([(0,a.Cb)()],Mr.prototype,"text",2),Mr=Or([(0,a.Mo)("ap-tooltip")],Mr);var Tr=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,Ir=(e,t,i,s)=>{for(var a,o=s>1?void 0:s?Pr(t,i):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Tr(t,i,o),o};const Dr=/[/\\\x00-\x1f]/;let zr=class extends s.oi{constructor(){super(...arguments),this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1,this._handleDocKeyDown=e=>{"Escape"===e.key&&(e.preventDefault(),this._handleCancel())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame((()=>{var e;return null==(e=this._input)?void 0:e.focus()}))}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),super.disconnectedCallback()}updated(e){e.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_handleInput(e){this._name=e.target.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_canSubmit(){return!this.loading&&this._name.trim().length>0}_handleConfirm(){if(!this._canSubmit())return;const e=this._name.trim(),t=function(e){return Dr.test(e)?'Folder name can\'t contain "/" or "\\".':"."===e||".."===e?'Folder name can\'t be "." or "..".':null}(e);t?this._localError=t:this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(e){e.target===e.currentTarget&&this._handleCancel()}_handleKeyDown(e){"Enter"===e.key&&(e.preventDefault(),this._handleConfirm())}render(){const e=this.currentFolderPath||"/",t=this._localError??(this._apiErrorDismissed?null:this.error);return s.dy`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="ap-cf-title">
          <div class="title" id="ap-cf-title">Create folder</div>
          <div class="description">In <code>${e}</code></div>

          <input
            type="text"
            placeholder="Folder name"
            .value=${this._name}
            ?disabled=${this.loading}
            @input=${this._handleInput}
            @keydown=${this._handleKeyDown}
            aria-label="Folder name"
            aria-invalid=${t?"true":"false"}
          />
          ${t?s.dy`<div class="error" role="alert">${t}</div>`:s.Ld}

          <div class="actions">
            <button class="btn" @click=${this._handleCancel}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${!this._canSubmit()}>
              ${this.loading?s.dy`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Creating...</span>`:"Create"}
            </button>
          </div>
        </div>
      </div>
    `}};zr.styles=[ns,s.iv`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ap-cf-backdrop-in 150ms ease-out;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 24px 28px 20px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      animation: ap-cf-dialog-in 180ms ease-out;
    }
    @keyframes ap-cf-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes ap-cf-dialog-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    @media (prefers-reduced-motion: reduce) {
      .backdrop, .dialog { animation: none; }
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 6px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 16px;
      line-height: 1.5;
      word-break: break-all;
      overflow-wrap: anywhere;
    }
    .description code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    input {
      width: 100%;
      box-sizing: border-box;
      height: 36px;
      padding: 0 12px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .error {
      font-size: 0.8125rem;
      color: var(--ap-destructive, oklch(0.577 0.245 27.325));
      margin: 6px 0 0;
      line-height: 1.25rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 16px;
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .btn-primary .loading-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `],Ir([(0,a.Cb)()],zr.prototype,"currentFolderPath",2),Ir([(0,a.Cb)({type:Boolean})],zr.prototype,"loading",2),Ir([(0,a.Cb)()],zr.prototype,"error",2),Ir([(0,a.SB)()],zr.prototype,"_name",2),Ir([(0,a.SB)()],zr.prototype,"_localError",2),Ir([(0,a.SB)()],zr.prototype,"_apiErrorDismissed",2),Ir([(0,a.IO)("input")],zr.prototype,"_input",2),zr=Ir([(0,a.Mo)("ap-create-folder-dialog")],zr);var Rr=Object.defineProperty,jr=(e,t,i,s)=>{for(var a,o=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(o=a(t,i,o)||o);return o&&Rr(t,i,o),o};const Nr=class extends s.oi{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var t;null==(t=this.config)||!t.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,1===this._dragCounter&&(this._isDragOver=!0))},this._onDragOver=e=>{var t;null==(t=this.config)||!t.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var t;null==(t=this.config)||!t.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var t,i;if(null==(t=this.config)||!t.uploader||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from((null==(i=e.dataTransfer)?void 0:i.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=new n({t:(e,t,i)=>{const s=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,((e,i)=>String(t[i]??"")));if("string"==typeof t)return s(t,i??{});if("object"==typeof t&&null!==t){const i=t,a=i.count;return s(String(void 0!==a?(1===a?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??e:i.defaultValue??e),i)}return e},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1}),this.storeCtrl=new Me(this,this.store),this.selectionCtrl=new Te(this,this.store),this.infiniteScrollCtrl=new Pe(this,(()=>this._loadMore())),this.marqueeCtrl=new De(this,this.store)}get _isInline(){var e;return"inline"===(null==(e=this.config)?void 0:e.displayMode)}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const t=this.renderRoot.querySelector("#sentinel");if(t&&t!==this._lastSentinel){this._lastSentinel=t;const e=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(t,e)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const t={folderSelection:!0,...e};var i;this._initFailed=!1,this.store.setState({disabledAssetIds:new Set(t.disabledAssetIds??[]),disabledFolderIds:new Set(t.disabledFolderIds??[])}),i=t.transformRemoteThumbnail,gt=i??null,this._normalizedForcedFilters=Ri(t.forcedFilters),this._initPromise=this._doInit(t).catch((()=>{this._initFailed=!0})),this._initI18n(t.locale),this.toggleAttribute("inline","inline"===t.displayMode),"inline"===t.displayMode&&!this.store.getState().isOpen&&this.open()}async _initI18n(e){try{const{i18n:t,isNew:i}=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";return Ee?(Ee.language!==e&&await Ee.changeLanguage(e),{i18n:Ee,isNew:!1}):(Ee=X.createInstance(),await Ee.use(Fe).init({lng:e,fallbackLng:"en",ns:[Le],defaultNS:Le,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`https://i18n-fastly.ultrafast.io/api/export/grid/f2/${Ae}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var i;const s=JSON.parse(e),a=Array.isArray(t)?t[0]:t;return a&&null!=(i=s[a])&&i.__without_namespace?s[a].__without_namespace:s}}}),{i18n:Ee,isNew:!0})}(e||"en");i&&t.on("missingKey",((e,t,i,s,a,o)=>{const r=i.match(/_(?:zero|one|two|few|many|other)$/),n=r&&null!=o&&o[`defaultValue${r[0]}`]?String(o[`defaultValue${r[0]}`]):s;Oe.handleMissingKey(i,n,t)}));const s=(e,i,s)=>"string"==typeof i?t.t(e,i,s??{}):t.t(e,i??{});this.store.setState({t:s})}catch{}}async _doInit(e){const t=function(){try{return{sortBy:localStorage.getItem(Ni),sortDirection:localStorage.getItem(Bi)}}catch{return{sortBy:null,sortDirection:null}}}(),i=t.sortBy??e.defaultSortBy??"created_at",s=t.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Qi(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:s}),this.apiClient=new ze(e.auth,e.apiBase);try{if("securityTemplate"===e.auth.mode){const{key:e,permissions:t}=await async function(e){const t=e.getSecurityTemplateKey();if(!t)throw new Error("Security template key is required for SASS key exchange");const i=await e.request(`/key/${t}`);return{key:i.key,permissions:i.permissions??[]}}(this.apiClient);this.apiClient.setSassKey(e),this.store.setState({sassKey:e,permissions:t})}const[t,i,s,a,o]=await Promise.allSettled([Ci(this.apiClient),Ue(this.apiClient),Ve(this.apiClient),wi(this.apiClient),Ke(this.apiClient)]),r={};if("fulfilled"===t.status){const{fields:e,regionalVariantGroups:i,regionalFilters:s,brandColor:a}=t.value;r.metadataFields=e,r.regionalVariantGroups=i,r.regionalFilters=s,a&&(r.brandColor=a)}"fulfilled"===i.status&&(r.labels=i.value.labels||[]),"fulfilled"===s.status&&(r.tags=s.value),"fulfilled"===o.status&&(r.collections=o.value.collections||[]),"fulfilled"===a.status&&(r.fileTypes=a.value);const{pinnedFilters:n,pinnedMetadata:l}=function(e){const t=localStorage.getItem(jt+e),i=localStorage.getItem(Nt+e);let s,a;try{s=t?JSON.parse(t):[...Bt]}catch{s=[...Bt]}try{a=i?JSON.parse(i):[]}catch{a=[]}return{pinnedFilters:s,pinnedMetadata:a}}(e.auth.projectToken??null),d=this.store.getState().filters;r.filters={...d,pinned:n,visible:[...n],metadata:{...d.metadata,pinned:l,visible:[...l]}},this.store.setState(r);const c=e.brandColor||r.brandColor||this.store.getState().brandColor;c&&(r.brandColor||this.store.setState({brandColor:c}),Yi(this,c))}catch(a){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a,context:"init"},bubbles:!0,composed:!0})),a}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():(this._uploaderImportPromise||(this._uploaderImportPromise=i.e(720).then(i.bind(i,3720)).then((()=>{}),(e=>{throw this._uploaderImportPromise=null,e}))),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,t=e.uploader,i=this.store.getState();let s;return s="securityTemplate"===e.auth.mode?{mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:{mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:s,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:t.restrictions,concurrency:t.concurrency,autoProceed:t.autoProceed,showFillMetadata:t.showFillMetadata,connectors:t.connectors,sourcesLayout:t.sourcesLayout,header:t.header??"back",clearOnClose:t.clearOnClose,clearOnComplete:t.clearOnComplete,closeOnComplete:t.closeOnComplete,rejectedFileAutoRemoveDelay:t.rejectedFileAutoRemoveDelay,lastUploadReview:t.lastUploadReview,showLocateButton:t.showLocateButton,showCopyCdnButton:t.showCopyCdnButton,getLocateUrl:t.getLocateUrl,minimizeOnUpload:t.minimizeOnUpload,metadataConfig:t.metadataConfig,tusConfig:t.tusConfig,locale:t.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var t;if(null==(t=this.config)||!t.uploader||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(s){return void this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:s instanceof Error?s:new Error(String(s)),context:"uploader-load"},bubbles:!0,composed:!0}))}this._uploaderEl=document.createElement("sfx-uploader");const i=this._uploaderEl;i.addEventListener("sfx-all-complete",(()=>{this.store.getState().isOpen&&this._loadData()})),i.addEventListener("sfx-complete-action",(()=>{this._closeUploader()})),i.addEventListener("sfx-cancel",(()=>{this._closeUploader()})),this._isUploaderOpen=!0,await this.updateComplete,i.config=this._buildUploaderConfig(),await i.updateComplete,null!=e&&e.length&&i.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var t,i;return!(null==(i=null==(t=e.dataTransfer)?void 0:t.types)||!i.includes("Files"))}async open(){var e,t,i,s,a,o,r,n;const l=this.store.getState(),d=new Set(Object.keys(this._normalizedForcedFilters)),c={},p=Ri(null==(e=this.config)?void 0:e.defaultFilters);for(const[v,b]of Object.entries(p))d.has(v)||(c[v]=b);const h=Object.keys(c),u=(null==(t=this.config)?void 0:t.tabs)??["assets","folders"],g=null!=(i=this.config)&&i.rememberLastTab?function(e){try{const t=localStorage.getItem(Hi(Vi,e));return"assets"===t||"folders"===t||"labels"===t||"collections"===t?t:null}catch{return null}}(this.config.auth.projectToken):null,f=(g&&u.includes(g)?g:null)??(null!=(s=this.config)&&s.defaultTab&&u.includes(this.config.defaultTab)?this.config.defaultTab:null)??(null!=(a=this.config)&&a.initialFolderPath&&u.includes("folders")?"folders":null)??u[0]??"assets";this.store.setState({isOpen:!0,activeTab:f,searchQuery:"",isAISearchActive:!(null==(o=this.config)||!o.enableAISearch||null==(r=this.config)||!r.defaultAISearch),filters:{metadata:{pinned:l.filters.metadata.pinned,visible:[...l.filters.metadata.pinned],applied:{}},pinned:l.filters.pinned,visible:[...new Set([...l.filters.pinned,...h])],applied:c},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(f),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(f),(null==(n=this.config)?void 0:n.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),(!this._initPromise||(await this._initPromise,!this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;null==(e=this.renderRoot.querySelector(".main-content"))||e.scrollTo({top:0})}async _loadData(){var e,t,i,s,a,o,r,n,l,d,c,p,h,u,g,f,v,b,m,y,_,x,k,$,w,S,C,F,A,L,E,O,M,T,P,I,D,z,R,j,N,B,U;if(!this.apiClient)return;const K=++this._loadId,q=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const V=q.activeTab;if("assets"===V){const p=this._buildSearchNotation(),h=q.currentFolderPath||"/",u=q.isAISearchActive&&!!q.searchQuery,g=je(this.apiClient,{fields:null==(e=this.config)?void 0:e.apiFields,folder:h,offset:0,limit:q.limit,sort_by:q.sortBy,sort_direction:q.sortDirection,search:q.searchQuery||void 0,q:p||void 0,recursive:1,...u&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(t=q.config)?void 0:t.locale)??"en"}}),f=Ne(this.apiClient,{folder:h,q:p||void 0,search:q.searchQuery||void 0,recursive:1,...u&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(i=q.config)?void 0:i.locale)??"en"}}).catch((()=>null)),[v,b]=await Promise.all([g,f]);if(K!==this._loadId)return;const m=(null==(s=v.files)?void 0:s.length)??0,y=m>=q.limit,_=(null==(a=null==b?void 0:b.stats)?void 0:a.approx_files_count)??(null==(o=null==b?void 0:b.info)?void 0:o.total_files_count)??(null==(r=v.info)?void 0:r.total_files_count)??(null==(l=null==(n=v.base)?void 0:n.count)?void 0:l.files_recursive)??(null==(c=null==(d=v.base)?void 0:d.count)?void 0:c.files_direct)??m;this.store.setState({assets:v.files||[],folders:[],totalCount:_,totalFolderCount:0,offset:0,hasMore:y,isLoading:!1})}else if("folders"===V){const e=this._buildSearchNotation(),t=q.currentFolderPath||"/",[i,s,a]=await Promise.all([Be(this.apiClient,{folderPath:q.currentFolderPath,q:q.searchQuery||void 0,recursive:q.searchQuery?1:0,sort_by:q.sortBy,sort_direction:q.sortDirection}),je(this.apiClient,{fields:null==(p=this.config)?void 0:p.apiFields,folder:t,offset:0,limit:q.limit,sort_by:q.sortBy,sort_direction:q.sortDirection,search:q.searchQuery||void 0,q:e||void 0,recursive:0,...q.isAISearchActive&&q.searchQuery&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(h=q.config)?void 0:h.locale)??"en"}}),Ne(this.apiClient,{folder:t,q:e||void 0,search:q.searchQuery||void 0,recursive:0,...q.isAISearchActive&&q.searchQuery&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(u=q.config)?void 0:u.locale)??"en"}}).catch((()=>null))]);if(K!==this._loadId)return;const o=i.folders||[];let r={};if(o.length>0)try{r=await async function(e,t){return 0===t.length?{}:(await e.post("/folders/previews",{folders:t})).folders||{}}(this.apiClient,o.map((e=>e.uuid)))}catch{}if(K!==this._loadId)return;const n=(null==(g=s.files)?void 0:g.length)??0,l=n>=q.limit,d=(null==(f=null==a?void 0:a.stats)?void 0:f.approx_files_count)??(null==(v=null==a?void 0:a.info)?void 0:v.total_files_count)??(null==(b=s.info)?void 0:b.total_files_count)??(null==(y=null==(m=s.base)?void 0:m.count)?void 0:y.files_direct)??n;this.store.setState({assets:s.files||[],folders:o,folderPreviews:r,totalCount:d,totalFolderCount:i.total??o.length,offset:0,hasMore:l,isLoading:!1})}else if("labels"===V){if(!q.activeLabelUuid)return void this.store.setState({assets:[],folders:[],totalCount:q.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});const e=q.labels.find((e=>e.uuid===q.activeLabelUuid));if(!e)return void this.store.setState({isLoading:!1});const t=e.sid.replace("#",""),i=this._buildSearchNotation(),s=`labels:${t}${i?" "+i:""}`,a=q.isAISearchActive&&!!q.searchQuery,o=je(this.apiClient,{fields:null==(_=this.config)?void 0:_.apiFields,folder:"/",offset:0,limit:q.limit,sort_by:q.sortBy,sort_direction:q.sortDirection,search:q.searchQuery||void 0,q:s,recursive:1,...a&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(x=q.config)?void 0:x.locale)??"en"}}),r=Ne(this.apiClient,{folder:"/",q:s,search:q.searchQuery||void 0,recursive:1,...a&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(k=q.config)?void 0:k.locale)??"en"}}).catch((()=>null)),[n,l]=await Promise.all([o,r]);if(K!==this._loadId)return;const d=(null==($=n.files)?void 0:$.length)??0,c=d>=q.limit,p=(null==(w=null==l?void 0:l.stats)?void 0:w.approx_files_count)??(null==(S=null==l?void 0:l.info)?void 0:S.total_files_count)??(null==(C=n.info)?void 0:C.total_files_count)??(null==(A=null==(F=n.base)?void 0:F.count)?void 0:A.files_recursive)??(null==(E=null==(L=n.base)?void 0:L.count)?void 0:E.files_direct)??d;this.store.setState({assets:n.files||[],folders:[],totalCount:p,totalFolderCount:0,offset:0,hasMore:c,isLoading:!1})}else if("collections"===V){if(!q.activeCollectionUuid)return void this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});const e=q.activeCollectionFolder;if(!e||null!=(O=e.children)&&O.length)return void this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});const t=q.activeCollectionUuid,i=e.filters||void 0,s=this._buildSearchNotation(),a=q.isAISearchActive&&!!q.searchQuery,o=je(this.apiClient,{fields:null==(M=this.config)?void 0:M.apiFields,offset:0,limit:q.limit,sort_by:q.sortBy,sort_direction:q.sortDirection,search:q.searchQuery||void 0,q:s||void 0,recursive:1,collection_uuid:t,f64:i,...a&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(T=q.config)?void 0:T.locale)??"en"}}),r=Ne(this.apiClient,{q:s||void 0,search:q.searchQuery||void 0,recursive:1,collection_uuid:t,f64:i,...a&&{with_ai:!0,ai_query:q.searchQuery,ai_lang:(null==(P=q.config)?void 0:P.locale)??"en"}}).catch((()=>null)),[n,l]=await Promise.all([o,r]);if(K!==this._loadId)return;const d=(null==(I=n.files)?void 0:I.length)??0,c=d>=q.limit,p=(null==(D=null==l?void 0:l.stats)?void 0:D.approx_files_count)??(null==(z=null==l?void 0:l.info)?void 0:z.total_files_count)??(null==(R=n.info)?void 0:R.total_files_count)??(null==(N=null==(j=n.base)?void 0:j.count)?void 0:N.files_recursive)??(null==(U=null==(B=n.base)?void 0:B.count)?void 0:U.files_direct)??d;this.store.setState({assets:n.files||[],folders:[],totalCount:p,totalFolderCount:0,offset:0,hasMore:c,isLoading:!1})}}catch(V){if(K!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:V,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var e,t,i;const s=this.store.getState();if(s.isLoading||!s.hasMore||!this.apiClient||"labels"===s.activeTab&&!s.activeLabelUuid||"collections"===s.activeTab&&(!s.activeCollectionFolder||null!=(e=s.activeCollectionFolder.children)&&e.length))return;const a=++this._loadMoreId,o=s.offset+s.limit;this.store.setState({isLoading:!0});try{const e=this._buildSearchNotation();let r,n,l=e||void 0,d=s.currentFolderPath||"/",c="folders"===s.activeTab?0:1;if("labels"===s.activeTab&&s.activeLabelUuid){const t=s.labels.find((e=>e.uuid===s.activeLabelUuid));t&&(l=`labels:${t.sid.replace("#","")}${e?" "+e:""}`),d="/",c=1}"collections"===s.activeTab&&s.activeCollectionFolder&&(r=s.activeCollectionUuid||void 0,n=s.activeCollectionFolder.filters||void 0,d="",c=1);const p=await je(this.apiClient,{fields:null==(t=this.config)?void 0:t.apiFields,...d?{folder:d}:{},offset:o,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:l,recursive:c,...r&&{collection_uuid:r},...n&&{f64:n},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:(null==(i=s.config)?void 0:i.locale)??"en"}});if(a!==this._loadMoreId)return;const h=this.store.getState().assets,u=p.files||[],g=u.length>=s.limit,f=[...h,...u];this.store.setState({assets:f,offset:o,hasMore:g,isLoading:!1})}catch{if(a!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120;this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout((()=>{this._loadDataTimer=null,this._loadData()}),e)}_handleCancel(e){var t,i;this.close(),null==(i=null==(t=this.config)?void 0:t.onCancel)||i.call(t),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var t;const i=this.store.getState();if("labels"===i.activeTab&&!i.activeLabelUuid)return void this.store.setState({searchQuery:e.detail.value});if("collections"===i.activeTab&&(!i.activeCollectionFolder||null!=(t=i.activeCollectionFolder.children)&&t.length))return void this.store.setState({searchQuery:e.detail.value});const s={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};i.isAISearchActive&&e.detail.value&&(s.sortBy="relevance"),this.store.setState(s),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var t;const i=e.detail.active,s=this.store.getState(),a={isAISearchActive:i};s.searchQuery&&(i?a.sortBy="relevance":"relevance"===s.sortBy&&(a.sortBy=(null==(t=this.config)?void 0:t.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),s.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var t;const i=e.detail.mode;this.store.setState({viewMode:i}),null!=(t=this.config)&&t.rememberLastView&&function(e,t){try{localStorage.setItem(Hi(qi,t),e)}catch{}}(i,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:t,value:i}=e.detail,s=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...s,[t]:i}})}_handleSortChange(e){const t=e.detail.value,i=this.store.getState();this.store.setState({sortBy:t,offset:0,assets:[],folders:[]}),Ui(t,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const t=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:t,offset:0,assets:[],folders:[]}),Ui(i.sortBy,t),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var t,i;const s=e.detail.tab;null!=(t=this.config)&&t.rememberLastTab&&function(e,t){try{localStorage.setItem(Hi(Vi,t),e)}catch{}}(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:(null==(i=this.config)?void 0:i.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var e;const t=null==(e=this.config)?void 0:e.transformations;return"object"==typeof t?t:void 0}_handleQuickSelect(e){var t;const i=e.detail.asset;if(null!=(t=this.config)&&t.transformations&&Qe(i))return this._transformAssets=[i],this._transformFolders=[],void(this._transformOpen=!0);this._emitSelect([i])}_emitSelect(e,t){var i,s;const a={assets:e};null!=t&&t.length&&(a.folders=t),null==(s=null==(i=this.config)?void 0:i.onSelect)||s.call(i,e,null!=t&&t.length?t:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:a,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var t;const i=e.detail.folder,s=this.store.getState(),a=i.path||`${s.currentFolderPath}${i.name}/`;null!=(t=this.config)&&t.rememberLastFolder&&Gi(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:i.uuid,currentFolderPath:a,breadcrumb:[...s.breadcrumb,{uuid:i.uuid,name:i.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var t,i;const s=e.detail.uuid,a=this.store.getState();if("labels"===a.activeTab)return this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),void this._loadData();if("collections"===a.activeTab){if(this._selectAllId++,!s)return this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),void this.selectionCtrl.resetRange();if(s===a.activeCollectionUuid)return this.store.setState({activeCollectionFolder:null,breadcrumb:[a.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),void this.selectionCtrl.resetRange();const e=this._findCollectionFolder(a.activeCollectionFolders,s);if(e){const t=a.breadcrumb.findIndex((e=>e.uuid===s)),i=a.breadcrumb.slice(0,t+1);this.store.setState({activeCollectionFolder:e,breadcrumb:i,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const o=s?a.breadcrumb.findIndex((e=>e.uuid===s)):-1,r=s?a.breadcrumb.slice(0,o+1):[],n=r.length>0?r[r.length-1].path:(null==(t=this.config)?void 0:t.rootFolderPath)||"/";null!=(i=this.config)&&i.rememberLastFolder&&Gi(n,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:n,breadcrumb:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const t=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:t.uuid,breadcrumb:[{uuid:t.uuid,name:t.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const t=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:t.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:t.uuid,name:t.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const e=await async function(e,t){return e.request(`/collections/${t}/folders`)}(this.apiClient,t.uuid),i=qe(e.folders||[]);this.store.setState({activeCollectionFolders:i,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var t;const i=e.detail.folder,s=this.store.getState(),a=i.path.split(" -> ").filter(Boolean),o=[{uuid:s.activeCollectionUuid,name:(null==(t=s.breadcrumb[0])?void 0:t.name)||"Collection",path:""}];let r="";for(const n of a)r=r?`${r} -> ${n}`:n,o.push({uuid:r,name:n,path:r});this._selectAllId++,this.store.setState({activeCollectionFolder:i,breadcrumb:o,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,t){for(const i of e){if(i.path===t)return i;if(i.children){const e=this._findCollectionFolder(i.children,t);if(e)return e}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var t,i,s;return"folders"===e&&(null==(t=this.config)?void 0:t.rememberLastFolder)&&function(e){try{return localStorage.getItem(Hi(Ki,e))}catch{return null}}(this.config.auth.projectToken)||(null==(i=this.config)?void 0:i.initialFolderPath)||(null==(s=this.config)?void 0:s.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,t){if(!e||e===t||"/"===e)return[];const i=(e.startsWith(t)?e.slice(t.length):e.replace(/^\//,"")).split("/").filter(Boolean),s=[];let a=t.endsWith("/")?t:t+"/";for(const o of i)a+=o+"/",s.push({uuid:a,name:o,path:a});return s}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var t,i;const s=e.detail.assets,a=e.detail.folders||[];a.length>0&&!1!==(null==(t=this.config)?void 0:t.folderSelection)&&"assets"===(null==(i=this.config)?void 0:i.folderSelectionMode)?this._folderResolveOpen=!0:this._emitSelect(s,a.length?a:void 0)}_handleSelectionTransform(e){var t,i;const s=e.detail.assets,a=e.detail.folders||[];if(a.length>0&&!1!==(null==(t=this.config)?void 0:t.folderSelection)&&"assets"===(null==(i=this.config)?void 0:i.folderSelectionMode))return this._transformAfterResolve=!0,void(this._folderResolveOpen=!0);0!==s.filter(Qe).length?(this._transformAssets=s,this._transformFolders=a,this._transformOpen=!0):this._emitSelect(s,a.length?a:void 0)}async _handleFolderResolveConfirm(e){var t;const i=e.detail.mode,s=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const e=await Promise.all(s.map((e=>{var t;return je(this.apiClient,{fields:null==(t=this.config)?void 0:t.apiFields,folder:e.path,recursive:"recursive"===i?1:0,limit:1e4})}))),o=[];for(const t of e)o.push(...t.files);const r=[...a],n=new Set(r.map((e=>e.uuid)));for(const t of o)n.has(t.uuid)||(r.push(t),n.add(t.uuid));const l=null==(t=this.config)?void 0:t.maxSelections,d=l?r.slice(0,l):r;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve)return this._transformAfterResolve=!1,this._transformAssets=d,this._transformFolders=[],void(this._transformOpen=!0);this._emitSelect(d)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const t=e.detail.params,i=e.detail.isAspectLocked??!0,s=this._transformAssets,a=this._transformFolders,o=s.length>1,r=$t(t,{isMultiSelect:o,isAspectLocked:i}),n=s.map((e=>{var i,s;if(!Qe(e))return e;const a=null==(i=e.url)?void 0:i.cdn,o=null==(s=e.url)?void 0:s.permalink,n={cdn:a?yt(a,r):""};return o&&(n.permalink_cdn=yt(o,r)),{...e,transformation:{params:t,url:n}}}));this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(n,a.length?a:void 0)}_handleTransformSkip(){const e=this._transformAssets,t=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,t.length?t:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const t=e.detail.name;if(!t||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await async function(e,t,i){const s=i.replace(/\/+$/,""),a=s?`${s}/${t}`:`/${t}`,o=await e.post("/folders",{name:a});if("success"!==o.status)throw new Error(o.msg||"Failed to create folder")}(this.apiClient,t,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(s){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(s))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const t=(null==e?void 0:e.message)??"";if(/timed out/i.test(t))return"Request timed out. Please try again.";const i=t.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return t||"Failed to create folder. Please try again."}async _handleSelectAll(e){var t,i,s;const a=this.store.getState();if(a.isSelectingAll||!this.apiClient||!((null==(t=a.config)?void 0:t.multiSelect)??1))return;const o=(null==(i=null==e?void 0:e.detail)?void 0:i.scope)??"all",r="assets"!==o&&!1!==(null==(s=this.config)?void 0:s.folderSelection)&&a.folders.length>0;if("folders"===o)return void(r&&this.selectionCtrl.selectAllFolders(a.folders));if(a.assets.length>=a.totalCount)return r&&this.selectionCtrl.selectAllFolders(a.folders),void this.selectionCtrl.selectAll(a.assets);const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const e=this._buildSearchNotation();let t=a.currentFolderPath||"/";const i=a.limit,s=a.assets,o=a.totalCount;let l,d,c="folders"===a.activeTab?0:1,p=e||void 0;if("labels"===a.activeTab&&a.activeLabelUuid){const i=a.labels.find((e=>e.uuid===a.activeLabelUuid));i&&(p=`labels:${i.sid.replace("#","")}${e?" "+e:""}`),t="/",c=1}"collections"===a.activeTab&&a.activeCollectionFolder&&(l=a.activeCollectionUuid||void 0,d=a.activeCollectionFolder.filters||void 0,t="",c=1);const h=[];for(let a=s.length;a<o;a+=i)h.push(a);const u=4,g=[];for(let r=0;r<h.length;r+=u){if(n!==this._selectAllId)return;const e=h.slice(r,r+u),s=await Promise.all(e.map((e=>{var s,o;return je(this.apiClient,{fields:null==(s=this.config)?void 0:s.apiFields,...t?{folder:t}:{},offset:e,limit:i,sort_by:a.sortBy,sort_direction:a.sortDirection,search:a.searchQuery||void 0,q:p,recursive:c,...l&&{collection_uuid:l},...d&&{f64:d},...a.isAISearchActive&&a.searchQuery&&{with_ai:!0,ai_query:a.searchQuery,ai_lang:(null==(o=a.config)?void 0:o.locale)??"en"}})})));if(n!==this._selectAllId)return;for(const t of s)t.files&&g.push(...t.files)}if(n!==this._selectAllId)return;const f=new Set(s.map((e=>e.uuid))),v=g.filter((e=>!f.has(e.uuid)&&(f.add(e.uuid),!0))),b=[...s,...v];this.store.setState({assets:b,offset:Math.max(0,b.length-i),hasMore:!1,isSelectingAll:!1}),r&&this.selectionCtrl.selectAllFolders(a.folders),this.selectionCtrl.selectAll(b)}catch(l){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:l,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const t=new Map(this.store.getState().selectedAssets);t.delete(e.detail.uuid),this.store.setState({selectedAssets:t})}_isDateFilterKey(e){return e===wt.DATE||e===wt.LICENSE_EXPIRY||e===At}_handleFilterUpdate(e){const{key:t,values:i,operator:s}=e.detail,a={...this.store.getState().filters};let o=""===i||null===i||void 0===i||Array.isArray(i)&&0===i.length||"object"==typeof i&&!Array.isArray(i)&&Object.values(i).every((e=>null==e||""===e||Array.isArray(e)&&0===e.length));if(!o&&this._isDateFilterKey(t)&&"object"==typeof i&&!Array.isArray(i)){const{kind:e,preset:t,from:s,to:a}=i;o=!e&&!t&&!s&&!a}if(o){const e={...a.applied};delete e[t],a.applied=e,a.pinned.includes(t)||(a.visible=a.visible.filter((e=>e!==t)))}else{const e={...a.applied};this._isDateFilterKey(t)&&"object"==typeof i&&!Array.isArray(i)?e[t]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:t!==wt.IMAGE||"object"!=typeof i||Array.isArray(i)?e[t]={type:"string",values:Array.isArray(i)?i:[i],operator:s||":"}:e[t]=i,a.applied=e,a.visible.includes(t)||(a.visible=[...a.visible,t])}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData();const r=t===St||t===Ct||t===Ft||t===At;if(this._pendingFilter===t||this._pendingFilter===wt.APPROVAL&&r){this._pendingFilter=null;const e=this.renderRoot.querySelector("ap-filters-bar");e&&(e.pendingFilter=null)}}_handleFilterOpen(e){const t=e.detail.key,i=e.detail.chipRect,s=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const e=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(e){const t=e.getBoundingClientRect();a=i.left-t.left,o=i.bottom-t.top}}null==s||s.openFilterPanel(t,!0,a,o)}_handleMetadataFilterOpen(e){const{fieldKey:t,chipRect:i}=e.detail,s=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const e=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(e){const t=e.getBoundingClientRect();a=i.left-t.left,o=i.bottom-t.top}}null==s||s.openMetadataFieldPanel(t,!0,a,o)}_handleFilterPanelChange(e){const t=this.renderRoot.querySelector("ap-filters-bar");t&&(t.activeFilter=e.detail.key,t.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,t&&(t.pendingFilter=null,t.pendingMetadataField=null))}async _handleFilterPending(e){var t,i,s;const{key:a,metadataFieldKey:o}=e.detail,r=this.renderRoot.querySelector("ap-filters-bar"),n=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!n)return;o?(this._pendingMetadataField=o,r.pendingMetadataField=o):a&&(this._pendingFilter=a,r.pendingFilter=a),await r.updateComplete;let l=r.renderRoot.querySelector(".chip.pending");if(!l){const e=r.renderRoot.querySelectorAll(".chip.pinned-empty"),n=o?null==(t=r._getMetadataLabel)?void 0:t.call(r,o):void 0;for(const t of e){const e=null==(s=null==(i=t.querySelector(".chip-label"))?void 0:i.textContent)?void 0:s.trim();if(o&&e===n){l=t;break}if(a&&e===(Gt[a]||a)){l=t;break}}}if(!l)return;const d=l.getBoundingClientRect(),c=this.renderRoot.querySelector(".toolbar-filters-wrapper"),p=null==c?void 0:c.getBoundingClientRect(),h=p?d.left-p.left:d.left,u=p?d.bottom-p.top:void 0;o?n.openMetadataFieldPanel(o,!0,h,u):a&&n.openFilterPanel(a,!0,h,u)}_handleFilterRemove(e){var t;const i=e.detail.key;if(i in((null==(t=this.config)?void 0:t.forcedFilters)??{}))return;const s={...this.store.getState().filters},a={...s.applied};delete a[i],s.applied=a,s.pinned.includes(i)||(s.visible=s.visible.filter((e=>e!==i))),this.store.setState({filters:s,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:t,operator:i,values:s,metadataType:a}=e.detail,o={...this.store.getState().filters},r={...o.metadata},n={...r.applied};if(!s||Array.isArray(s)&&0===s.length?(delete n[t],r.applied=n,r.pinned.includes(t)||(r.visible=r.visible.filter((e=>e!==t)))):(n[t]={type:"string",values:Array.isArray(s)?s:[s],operator:i||":",metadataType:a},r.applied=n,r.visible.includes(t)||(r.visible=[...r.visible,t])),o.metadata=r,this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===t){this._pendingMetadataField=null;const e=this.renderRoot.querySelector("ap-filters-bar");e&&(e.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:t,visible:i}=e.detail,s={...this.store.getState().filters},a={...s.metadata};i?a.visible.includes(t)||(a.visible=[...a.visible,t]):a.visible=a.visible.filter((e=>e!==t)),s.metadata=a,this.store.setState({filters:s})}_handleMetadataFilterRemove(e){const{fieldKey:t}=e.detail,i={...this.store.getState().filters},s={...i.metadata},a={...s.applied};delete a[t],s.applied=a,s.pinned.includes(t)||(s.visible=s.visible.filter((e=>e!==t))),i.metadata=s,this.store.setState({filters:i,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var t,i;const{key:s,pinned:a}=e.detail,o={...this.store.getState().filters};a?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter((e=>e!==s)),s in o.applied||(o.visible=o.visible.filter((e=>e!==s)))),this.store.setState({filters:o});!function(e,t){localStorage.setItem(jt+e,JSON.stringify(t))}((null==(i=null==(t=this.store.getState().config)?void 0:t.auth)?void 0:i.projectToken)??null,o.pinned)}_handleMetadataPin(e){var t,i;const{fieldKey:s,pinned:a}=e.detail,o={...this.store.getState().filters},r={...o.metadata};a?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter((e=>e!==s)),s in r.applied||(r.visible=r.visible.filter((e=>e!==s)))),o.metadata=r,this.store.setState({filters:o});!function(e,t){localStorage.setItem(Nt+e,JSON.stringify(t))}((null==(i=null==(t=this.store.getState().config)?void 0:t.auth)?void 0:i.projectToken)??null,r.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const t=this.renderRoot.querySelector("ap-filters-bar");t&&(t.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const t=e.detail.key,i={...this.store.getState().filters};i.visible=i.visible.filter((e=>e!==t)),this.store.setState({filters:i})}_handleMetadataFieldDeactivate(e){const{fieldKey:t}=e.detail,i={...this.store.getState().filters},s={...i.metadata};s.visible=s.visible.filter((e=>e!==t)),i.metadata=s,this.store.setState({filters:i})}_handleFiltersSet(e){var t;const{applied:i,metadata:s}=e.detail,a={...this.store.getState().filters},o=new Set(Object.keys((null==(t=this.config)?void 0:t.forcedFilters)??{})),r={...i};for(const l of o)delete r[l];a.applied=r;const n=Object.keys(i);if(a.visible=[...new Set([...a.pinned,...n])],s){const e={...a.metadata};e.applied=s.applied;const t=Object.keys(s.applied);e.visible=[...new Set([...e.pinned,...t])],a.metadata=e}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var e;const t=this.storeCtrl.state;if("labels"===t.activeTab&&!t.activeLabelUuid)return es;if("collections"===t.activeTab){if(!t.activeCollectionUuid)return ts;if(!t.activeCollectionFolder||null!=(e=t.activeCollectionFolder.children)&&e.length)return is}return t.searchQuery?Ji:"folders"===t.activeTab?Zi:Xi}_buildSearchNotation(){const e=this.store.getState();return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[];for(const[s,a]of Object.entries(e)){if(!a||!Ei(0,a))continue;const e=Oi(s,a);i.push(...e)}for(const[s,a]of Object.entries(t)){if(!a||!Ei(0,a))continue;const e=Pi(s,a);i.push(...e)}return function(e){const t=[],i=[],s=[];for(const a of e)a.startsWith("type:")||a.startsWith("type=")?t.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?i.push(a):s.push(a);if(t.length>0&&i.length>0){const e=[...t,...i].join(" , ");s.push(e)}else s.push(...t,...i);return s}(i)}({...this._normalizedForcedFilters,...e.filters.applied},e.filters.metadata.applied).join(" ")}render(){var e,t,i,a,o,r,n,l,d,c,p,h,u,g,f,v,b,m,y,_,x,k,$,w,S,C,F,A;const L=this.storeCtrl.state,E=L.t,O=Array.from(L.selectedAssets.keys()),M=Array.from(L.selectedFolders.keys()),T=(null==(e=this.config)?void 0:e.disabledAssetIds)??[],P=(null==(t=this.config)?void 0:t.disabledFolderIds)??[],I=this.selectionCtrl.getSelectedAssets(),D=this.selectionCtrl.getSelectedFolders(),z=!1!==(null==(i=this.config)?void 0:i.folderSelection),R=s.dy`
      <ap-header
        .activeTab=${L.activeTab}
        .tabs=${(null==(a=this.config)?void 0:a.tabs)??["assets","folders"]}
        .isInsideLabel=${"labels"===L.activeTab&&!!L.activeLabelUuid}
        .isInsideCollection=${"collections"===L.activeTab&&!!L.activeCollectionUuid}
        .isInsideCollectionLeaf=${"collections"===L.activeTab&&!!L.activeCollectionFolder&&!(null!=(o=L.activeCollectionFolder.children)&&o.length)}
        .viewMode=${L.viewMode}
        .searchQuery=${L.searchQuery}
        .enableAISearch=${!(null==(r=this.config)||!r.enableAISearch)}
        .isAISearchActive=${L.isAISearchActive}
        .regionalGroups=${L.regionalVariantGroups}
        .regionalFilters=${L.regionalFilters}
        .hideClose=${this._isInline}
        .t=${E}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${()=>this._handleCancel("close-button")}
      ></ap-header>
    `,j=!(null==(n=this.config)||!n.uploader),N=!0===(null==(l=this.config)?void 0:l.folderCreation),B="sassKey"===(null==(d=this.config)?void 0:d.auth.mode),U="folders"===L.activeTab,K=N&&U&&(B||function(e,t){return!!e&&e.includes(t)}(L.permissions,He)),q=s.dy`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?s.dy`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              ${E("dropFilesToUpload","Drop files to upload")}
            </div>
          </div>
        `:s.Ld}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${null!=(c=this.config)&&c.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${L.isLoading}
              .totalCount=${L.totalCount}
              .totalFolderCount=${L.totalFolderCount}
              .showUpload=${j}
              .showCreateFolder=${K}
              .showFilters=${!("labels"===L.activeTab&&!L.activeLabelUuid)&&!("collections"===L.activeTab&&(!L.activeCollectionFolder||null!=(p=L.activeCollectionFolder.children)&&p.length))}
              .countLabel=${"labels"!==L.activeTab||L.activeLabelUuid?"collections"!==L.activeTab||L.activeCollectionUuid?"collections"===L.activeTab&&L.activeCollectionUuid&&(!L.activeCollectionFolder||null!=(h=L.activeCollectionFolder.children)&&h.length)?E("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"":E("collectionCount",{count:L.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):E("labelCount",{count:L.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"})}
              .sortBy=${L.sortBy}
              .sortDirection=${L.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${L.filters}
              .labels=${L.labels}
              .tags=${L.tags}
              .fileTypes=${L.fileTypes}
              .metadataFields=${L.metadataFields}
              .pinnedFilters=${L.filters.pinned}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .approverUsers=${(null==(u=this.config)?void 0:u.approverUsers)??[]}
              .requesterUsers=${(null==(g=this.config)?void 0:g.requesterUsers)??[]}
              .t=${E}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @filter-pin=${this._handleFilterPin}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
              @filter-panel-change=${this._handleFilterPanelChange}
              @filter-pending=${this._handleFilterPending}
              @upload-click=${this._handleUploadClick}
              @create-folder-click=${this._openCreateFolderDialog}
            ></ap-content-toolbar>

            ${"labels"===L.activeTab&&!L.activeLabelUuid||"collections"===L.activeTab&&(!L.activeCollectionFolder||null!=(f=L.activeCollectionFolder.children)&&f.length)?s.Ld:s.dy`
            <ap-filters-bar
              .appliedFilters=${L.filters.applied}
              .appliedMetadata=${L.filters.metadata.applied}
              .metadataFields=${L.metadataFields}
              .tags=${L.tags}
              .labels=${L.labels}
              .approverUsers=${(null==(v=this.config)?void 0:v.approverUsers)??[]}
              .requesterUsers=${(null==(b=this.config)?void 0:b.requesterUsers)??[]}
              .pinnedFilters=${L.filters.pinned}
              .pinnedMetadataFields=${L.filters.metadata.pinned}
              .forcedFilters=${(null==(m=this.config)?void 0:m.forcedFilters)??{}}
              .t=${E}
              @filter-remove=${this._handleFilterRemove}
              @filter-deactivate=${this._handleFilterDeactivate}
              @filter-open=${this._handleFilterOpen}
              @metadata-filter-open=${this._handleMetadataFilterOpen}
              @metadata-filter-remove=${this._handleMetadataFilterRemove}
              @metadata-field-deactivate=${this._handleMetadataFieldDeactivate}
              @metadata-pin=${this._handleMetadataPin}
              @filters-clear-all=${this._handleFiltersClearAll}
              @filters-set=${this._handleFiltersSet}
            ></ap-filters-bar>
            `}

            ${L.breadcrumb.length>0?s.dy`<ap-breadcrumb
                  .items=${L.breadcrumb}
                  .rootLabel=${"labels"===L.activeTab?E("tabLabels","Labels"):"collections"===L.activeTab?E("tabCollections","Collections"):E("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:s.Ld}
          </div>

          ${!L.isLoading||0!==L.assets.length||0!==L.folders.length||"labels"===L.activeTab&&!L.activeLabelUuid||"collections"===L.activeTab&&(!L.activeCollectionFolder||null!=(y=L.activeCollectionFolder.children)&&y.length)?this._renderContent(L,O,M,z,T,P):s.dy`<ap-skeleton .variant=${L.viewMode} .gridSize=${(null==(_=this.config)?void 0:_.gridSize)??"normal"} .multiSelect=${!1!==(null==(x=this.config)?void 0:x.multiSelect)} .folderCount=${2} .t=${E}></ap-skeleton>`}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen?s.dy`
            <ap-folder-resolve-dialog
              .folders=${D}
              .loading=${L.isResolvingFolders}
              .t=${E}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          `:s.Ld}
          ${this._transformOpen?s.dy`
            <ap-transformation-dialog
              .assets=${this._transformAssets}
              .isMultiSelect=${this._transformAssets.length>1}
              .t=${E}
              .exportOriginalLabel=${null==(k=this._transformationsConfig)?void 0:k.exportOriginalLabel}
              .applyExportLabel=${null==($=this._transformationsConfig)?void 0:$.applyExportLabel}
              @transform-confirm=${this._handleTransformConfirm}
              @transform-skip=${this._handleTransformSkip}
              @transform-cancel=${this._handleTransformCancel}
            ></ap-transformation-dialog>
          `:s.Ld}
          ${this._createFolderOpen?s.dy`
            <ap-create-folder-dialog
              .currentFolderPath=${L.currentFolderPath}
              .loading=${this._isCreatingFolder}
              .error=${this._createFolderError}
              @create-folder-confirm=${this._handleCreateFolderConfirm}
              @create-folder-cancel=${this._handleCreateFolderCancel}
            ></ap-create-folder-dialog>
          `:s.Ld}
        </div>

        ${L.isPreviewOpen&&L.previewAsset?s.dy`<ap-preview-panel
              .asset=${L.previewAsset}
              .assets=${L.assets}
              .selectedIds=${O}
              .containerToken=${L.projectToken}
              .showMetadata=${!1!==(null==(w=this.config)?void 0:w.showMetadata)}
              .metadataFields=${L.metadataFields}
              .labels=${L.labels}
              .regionalFilters=${L.regionalFilters}
              .multiSelect=${(null==(S=this.config)?void 0:S.multiSelect)??!0}
              .t=${E}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:s.Ld}
      </div>
    `,V=s.dy`
      <ap-selection-bar
        .selectedAssets=${I}
        .selectedFolders=${D}
        .totalCount=${L.totalCount}
        .totalFolderCount=${L.totalFolderCount}
        .isSelectingAll=${L.isSelectingAll}
        .multiSelect=${(null==(C=this.config)?void 0:C.multiSelect)??!0}
        .maxSelections=${null==(F=this.config)?void 0:F.maxSelections}
        .showTransform=${!(null==(A=this.config)||!A.transformations)&&I.some(Qe)}
        .t=${E}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,H=this._isUploaderOpen?s.dy`
      <div class="uploader-overlay">
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    `:s.Ld;return this._isInline?L.isOpen?s.dy`
        <div class="ap-inline">
          ${this._isUploaderOpen?H:s.dy`
            <div class="inline-header">${R}</div>
            <div class="inline-content">${q}</div>
            <div class="inline-footer">${V}</div>
          `}
        </div>
      `:s.Ld:s.dy`
      <ap-modal
        ?open=${L.isOpen}
        @ap-cancel=${e=>this._handleCancel(e.detail.reason)}
      >
        ${this._isUploaderOpen?H:s.dy`
          <div slot="header">${R}</div>
          ${q}
          <div slot="footer">${V}</div>
        `}
      </ap-modal>
    `}_renderContent(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];var n,l,d,c,p,h,u,g,f,v,b,m,y;const _=e.t;if("assets"===e.activeTab)return e.isLoading||0!==e.assets.length?"grid"===e.viewMode?s.dy`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${_}
            .selectedIds=${t}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${r}
            .isLoading=${e.isLoading}
            .multiSelect=${(null==(n=this.config)?void 0:n.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${(null==(l=this.config)?void 0:l.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:s.dy`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${_}
          .selectedIds=${t}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${r}
          .isLoading=${e.isLoading}
          .multiSelect=${(null==(d=this.config)?void 0:d.multiSelect)??!0}
          .folderSelectable=${a}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:s.dy`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">${_("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">${_("noAssetsFoundDesc","Try adjusting your search or filters")}</div>
          </div>
        `;if("folders"===e.activeTab)return e.isLoading||0!==e.folders.length||0!==e.assets.length?"grid"===e.viewMode?s.dy`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${_}
            .selectedIds=${t}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${r}
            .isLoading=${e.isLoading}
            .multiSelect=${(null==(c=this.config)?void 0:c.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${(null==(p=this.config)?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:s.dy`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${_}
          .selectedIds=${t}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${r}
          .isLoading=${e.isLoading}
          .multiSelect=${(null==(h=this.config)?void 0:h.multiSelect)??!0}
          .folderSelectable=${a}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:s.dy`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${_("emptyFolder","This folder is empty")}</div>
            <div class="empty-desc">${_("emptyFolderDesc","No folders or files found here")}</div>
          </div>
        `;if("labels"===e.activeTab){if(!e.activeLabelUuid){let t=e.labels;if(e.searchQuery){const i=e.searchQuery.toLowerCase();t=e.labels.filter((e=>e.name.toLowerCase().includes(i)))}const i="asc"===e.sortDirection?1:-1;return t=[...t].sort(((e,t)=>i*e.name.localeCompare(t.name))),0===t.length?s.dy`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?_("noLabelsMatchSearch","No labels match your search"):_("noLabelsFound","No labels found")}</div>
              <div class="empty-desc">${e.searchQuery?_("tryDifferentSearch","Try a different search term"):_("labelsWillAppear","Labels will appear here once created")}</div>
            </div>
          `:"grid"===e.viewMode?s.dy`
            <div class="labels-grid">
              ${t.map(((e,t)=>s.dy`
                <ap-label-card .label=${e} .index=${t} @label-open=${this._handleLabelOpen}></ap-label-card>
              `))}
            </div>
          `:s.dy`
          <div class="labels-list">
            ${t.map(((e,t)=>s.dy`
              <ap-label-row .label=${e} .index=${t} @label-open=${this._handleLabelOpen}></ap-label-row>
            `))}
          </div>
        `}return e.isLoading||0!==e.assets.length?"grid"===e.viewMode?s.dy`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${_}
            .selectedIds=${t}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${r}
            .isLoading=${e.isLoading}
            .multiSelect=${(null==(u=this.config)?void 0:u.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${(null==(g=this.config)?void 0:g.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:s.dy`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${_}
          .selectedIds=${t}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${r}
          .isLoading=${e.isLoading}
          .multiSelect=${(null==(f=this.config)?void 0:f.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:s.dy`
          <div class="empty-state">
            <ap-icon name="tag" .size=${48}></ap-icon>
            <div class="empty-title">${_("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">${_("noAssetsInLabelDesc","Assets added to this label will appear here")}</div>
          </div>
        `}if("collections"===e.activeTab){if(!e.activeCollectionUuid){let t=e.collections;if(e.searchQuery){const i=e.searchQuery.toLowerCase();t=e.collections.filter((e=>e.title.toLowerCase().includes(i)))}const i="asc"===e.sortDirection?1:-1;return t="created_at"===e.sortBy?[...t].sort(((e,t)=>i*(new Date(e.created_at).getTime()-new Date(t.created_at).getTime()))):"updated_at"===e.sortBy?[...t].sort(((e,t)=>i*(new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime()))):[...t].sort(((e,t)=>i*e.title.localeCompare(t.title))),0===t.length?s.dy`
            <div class="empty-state">
              <ap-icon name="layout-grid" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?_("noCollectionsMatchSearch","No collections match your search"):_("noCollectionsFound","No collections found")}</div>
              <div class="empty-desc">${e.searchQuery?_("tryDifferentSearch","Try a different search term"):_("collectionsWillAppear","Collections will appear here once created")}</div>
            </div>
          `:"grid"===e.viewMode?s.dy`
            <div class="collections-grid">
              ${t.map(((e,t)=>s.dy`
                <ap-collection-card .collection=${e} .index=${t} @collection-open=${this._handleCollectionOpen}></ap-collection-card>
              `))}
            </div>
          `:s.dy`
          <div class="collections-list">
            ${t.map(((e,t)=>s.dy`
              <ap-collection-row .collection=${e} .index=${t} @collection-open=${this._handleCollectionOpen}></ap-collection-row>
            `))}
          </div>
        `}if(e.isLoadingCollectionFolders)return s.dy`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const a=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||((null==(v=e.activeCollectionFolder.children)?void 0:v.length)??0)>0){let t=a;if(e.searchQuery){const i=e.searchQuery.toLowerCase();t=a.filter((e=>e.name.toLowerCase().includes(i)))}const i="asc"===e.sortDirection?1:-1;return t=[...t].sort(((e,t)=>i*e.name.localeCompare(t.name))),0===t.length?s.dy`
            <div class="empty-state">
              <ap-icon name="folder" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?_("noFoldersMatchSearch","No folders match your search"):_("noFoldersInCollection","No folders in this collection")}</div>
              <div class="empty-desc">${e.searchQuery?_("tryDifferentSearch","Try a different search term"):_("collectionFoldersWillAppear","Collection folders will appear here")}</div>
            </div>
          `:"grid"===e.viewMode?s.dy`
            <div class="collection-folders-grid">
              ${t.map(((e,t)=>s.dy`
                <ap-collection-folder-card .folder=${e} .index=${t} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-card>
              `))}
            </div>
          `:s.dy`
          <div class="collection-folders-list">
            ${t.map(((e,t)=>s.dy`
              <ap-collection-folder-row .folder=${e} .index=${t} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-row>
            `))}
          </div>
        `}return e.isLoading||0!==e.assets.length?"grid"===e.viewMode?s.dy`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${_}
            .selectedIds=${t}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${r}
            .isLoading=${e.isLoading}
            .multiSelect=${(null==(b=this.config)?void 0:b.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${(null==(m=this.config)?void 0:m.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:s.dy`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${_}
          .selectedIds=${t}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${r}
          .isLoading=${e.isLoading}
          .multiSelect=${(null==(y=this.config)?void 0:y.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:s.dy`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${_("noAssetsInCollectionFolder","No assets in this collection folder")}</div>
            <div class="empty-desc">${_("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}</div>
          </div>
        `}return s.Ld}};Nr.styles=[s.iv`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--ap-inline-height, 600px);
      }
      .content-area {
        position: relative;
        flex: 1;
        display: flex;
        overflow: hidden;
        min-height: 0;
      }
      .main-content {
        position: relative;
        flex: 1;
        min-width: 0;
        overflow-y: auto;
      }
      .toolbar-filters-wrapper {
        position: relative;
        z-index: 10;
      }
      .toolbar-filters-wrapper.sticky {
        position: sticky;
        top: 0;
        z-index: 20;
        background: var(--ap-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--ap-font-size-sm, 0.875rem);
      }
      .labels-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 0 20px 16px;
      }
      .labels-list {
        padding: 0 20px 16px;
      }
      .collections-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collections-list {
        padding: 0 20px 16px;
      }
      .collection-folders-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collection-folders-list {
        padding: 0 20px 16px;
      }
      .loading-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
      }
      .ap-inline {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--ap-background, oklch(1 0 0));
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .ap-inline .inline-header {
        flex-shrink: 0;
      }
      .ap-inline .inline-content {
        flex: 1;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .ap-inline .inline-footer {
        flex-shrink: 0;
      }

      /* Upload drop zone overlay */
      .drop-zone-overlay {
        position: absolute;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--ap-primary, oklch(0.65 0.19 258));
        border-radius: var(--ap-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--ap-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay { animation: none; }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--ap-background, oklch(1 0 0));
        animation: uploader-slide-in 250ms ease-out;
      }
      @keyframes uploader-slide-in {
        from { transform: translateX(100%); }
        to   { transform: translateX(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay { animation: none; }
      }
      .uploader-body {
        flex: 1;
        overflow: hidden;
        min-height: 0;
      }
      .uploader-body sfx-uploader {
        display: block;
        width: 100%;
        height: 100%;
      }
    `];let Br=Nr;jr([(0,a.SB)()],Br.prototype,"_isDragOver"),jr([(0,a.SB)()],Br.prototype,"_isUploaderOpen"),jr([(0,a.SB)()],Br.prototype,"_folderResolveOpen"),jr([(0,a.SB)()],Br.prototype,"_transformOpen"),jr([(0,a.SB)()],Br.prototype,"_createFolderOpen"),jr([(0,a.SB)()],Br.prototype,"_isCreatingFolder"),jr([(0,a.SB)()],Br.prototype,"_createFolderError"),jr([(0,a.Cb)({type:Object})],Br.prototype,"config"),typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",Br)},8516:(e,t,i)=>{i.d(t,{XM:()=>a,Xe:()=>o,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return{_$litDirective$:e,values:i}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8556:(e,t,i)=>{i.d(t,{Jb:()=>C,Ld:()=>F,YP:()=>S,_$LH:()=>B,dy:()=>w,sY:()=>K});const s=globalThis,a=s.trustedTypes,o=a?a.createPolicy("lit-html",{createHTML:e=>e}):void 0,r="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+n,d=`<${l}>`,c=document,p=()=>c.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,u=Array.isArray,g=e=>u(e)||"function"==typeof e?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,m=/>/g,y=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,x=/"/g,k=/^(?:script|style|textarea|title)$/i,$=e=>function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return{_$litType$:e,strings:t,values:s}},w=$(1),S=$(2),C=($(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),A=new WeakMap,L=c.createTreeWalker(c,129);function E(e,t){if(!u(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const O=(e,t)=>{const i=e.length-1,s=[];let a,o=2===t?"<svg>":3===t?"<math>":"",l=v;for(let c=0;c<i;c++){const t=e[c];let i,p,h=-1,u=0;for(;u<t.length&&(l.lastIndex=u,p=l.exec(t),null!==p);)u=l.lastIndex,l===v?"!--"===p[1]?l=b:void 0!==p[1]?l=m:void 0!==p[2]?(k.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=y):void 0!==p[3]&&(l=y):l===y?">"===p[0]?(l=a??v,h=-1):void 0===p[1]?h=-2:(h=l.lastIndex-p[2].length,i=p[1],l=void 0===p[3]?y:'"'===p[3]?x:_):l===x||l===_?l=y:l===b||l===m?l=v:(l=y,a=void 0);const g=l===y&&e[c+1].startsWith("/>")?" ":"";o+=l===v?t+d:h>=0?(s.push(i),t.slice(0,h)+r+t.slice(h)+n+g):t+n+(-2===h?c:g)}return[E(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class M{constructor(e,t){let i,{strings:s,_$litType$:o}=e;this.parts=[];let d=0,c=0;const h=s.length-1,u=this.parts,[g,f]=O(s,o);if(this.el=M.createElement(g,t),L.currentNode=this.el.content,2===o||3===o){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=L.nextNode())&&u.length<h;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(r)){const t=f[c++],s=i.getAttribute(e).split(n),a=/([.?@])?(.*)/.exec(t);u.push({type:1,index:d,name:a[2],strings:s,ctor:"."===a[1]?z:"?"===a[1]?R:"@"===a[1]?j:D}),i.removeAttribute(e)}else e.startsWith(n)&&(u.push({type:6,index:d}),i.removeAttribute(e));if(k.test(i.tagName)){const e=i.textContent.split(n),t=e.length-1;if(t>0){i.textContent=a?a.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],p()),L.nextNode(),u.push({type:2,index:++d});i.append(e[t],p())}}}else if(8===i.nodeType)if(i.data===l)u.push({type:2,index:d});else{let e=-1;for(;-1!==(e=i.data.indexOf(n,e+1));)u.push({type:7,index:d}),e+=n.length-1}d++}}static createElement(e,t){const i=c.createElement("template");return i.innerHTML=e,i}}function T(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,s=arguments.length>3?arguments[3]:void 0;if(t===C)return t;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const o=h(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(t=T(e,a._$AS(e,t.values),a,s)),t}class P{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??c).importNode(t,!0);L.currentNode=s;let a=L.nextNode(),o=0,r=0,n=i[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new I(a,a.nextSibling,this,e):1===n.type?t=new n.ctor(a,n.name,n.strings,this,e):6===n.type&&(t=new N(a,this,e)),this._$AV.push(t),n=i[++r]}o!==n?.index&&(a=L.nextNode(),o++)}return L.currentNode=c,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=T(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),h(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==C&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(c.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=M.createElement(E(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new P(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new M(e)),t}k(e){u(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new I(this.O(p()),this.O(p()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;const a=this.strings;let o=!1;if(void 0===a)e=T(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const s=e;let r,n;for(e=a[0],r=0;r<a.length-1;r++)n=T(this,s[i+r],t,r),n===C&&(n=this._$AH[r]),o||=!h(n)||n!==this._$AH[r],n===F?e=F:e!==F&&(e+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!s&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class z extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class R extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class j extends D{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e){if((e=T(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0)??F)===C)return;const t=this._$AH,i=e===F&&t!==F||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,s=e!==F&&(t===F||i);i&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class N{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const B={M:r,P:n,A:l,C:1,L:O,R:P,D:g,V:T,I:I,H:D,N:R,U:j,B:z,F:N},U=s.litHtmlPolyfillSupport;U?.(M,I),(s.litHtmlVersions??=[]).push("3.3.3");const K=(e,t,i)=>{const s=i?.renderBefore??t;let a=s._$litPart$;if(void 0===a){const e=i?.renderBefore??null;s._$litPart$=a=new I(t.insertBefore(p(),e),e,void 0,i??{})}return a._$AI(e),a}},1272:(e,t,i)=>{i.d(t,{Mo:()=>s,Cb:()=>n,IO:()=>c,SB:()=>l});const s=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};var a=i(7967);const o={attribute:!0,type:String,converter:a.Ts,reflect:!1,hasChanged:a.Qu},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{kind:s,metadata:a}=i;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];t.call(this,i),this.requestUpdate(s,a,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function n(e){return(t,i)=>"object"==typeof i?r(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function l(e){return n({...e,state:!0,attribute:!1})}const d=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function c(e,t){return(i,s,a)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?i:a??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return d(i,s,{get(){let i=e.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return d(i,s,{get(){return o(this)}})}}},7072:(e,t,i)=>{i.d(t,{XM:()=>s.XM,Xe:()=>s.Xe,pX:()=>s.pX});var s=i(8516)},6386:(e,t,i)=>{i.d(t,{oi:()=>r,iv:()=>s.iv,dy:()=>a.dy,Jb:()=>a.Jb,Ld:()=>a.Ld,sY:()=>a.sY,YP:()=>a.YP});var s=i(7967),a=i(8556);const o=globalThis;class r extends s.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,a.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return a.Jb}}r._$litElement$=!0,r.finalized=!0,o.litElementHydrateSupport?.({LitElement:r});const n=o.litElementPolyfillSupport;n?.({LitElement:r});(o.litElementVersions??=[]).push("4.2.2")}}]);
//# sourceMappingURL=95.e41569ef.chunk.js.map