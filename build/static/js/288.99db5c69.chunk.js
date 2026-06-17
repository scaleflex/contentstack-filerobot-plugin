"use strict";(self.webpackChunkmarketplace_app_boilerplate=self.webpackChunkmarketplace_app_boilerplate||[]).push([[288],{9288:(e,t,i)=>{i.d(t,{HUB_HEADERS_HINT:()=>d,canReachHub:()=>f,createTagsAutocomplete:()=>P,createTaxonomyService:()=>M,createUltratagsService:()=>U,fetchDependencies:()=>L,fetchMetadataSchema:()=>m,hasCachedDependencies:()=>S,hasCachedSchema:()=>x});var o=i(5648),s=i(6386),r=i(1272),n=i(7346);function a(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=(null==t?void 0:t.language)??"en",s=e.model??[],r=e.store??{},n=s.find((e=>"FILES"===e.applies_to));let a=(null==n?void 0:n.groups)??[];if(Array.isArray(null==t?void 0:t.fields)){const e=new Set(t.fields);a=a.map((t=>({...t,fields:t.fields.filter((t=>e.has(t.ckey)))}))).filter((e=>e.fields.length>0))}a=a.map((e=>({...e,fields:e.fields.filter((e=>!e.hide))}))).filter((e=>e.fields.length>0));const l=a.flatMap((e=>e.fields)),d=new Map(l.map((e=>[e.key,e])));return{groups:a,fields:l,fieldsByKey:d,forceFillingOnUpload:"boolean"==typeof r.force_filling_metadata_on_upload?r.force_filling_metadata_on_upload:void 0,regionalVariantsGroups:r.regional_variants_groups??[],language:o,productsEnabled:i}}const l="https://hub.scaleflex.com/api",d="The Hub API uses session-based auth (not the Filerobot SASS key); pass metadataConfig.hubHeaders with x-company-token, x-project-token and x-session-token. If the session token arrives asynchronously, assign a new config object once it is available \u2014 in-place mutation is not detected.",c=e=>e.replace(/\/+$/,"");function u(e){return!e||c(e)===l}function p(e){const t=null==e?void 0:e.hubHeaders;return t&&Object.keys(t).length>0?t:void 0}function h(e){return Object.keys(e).some((e=>"x-session-token"===e.toLowerCase()))}function f(e){return!!p(e)||!u(null==e?void 0:e.hubApiBase)}const g=new Map,v=new Map;function x(e){return g.has(e)}async function m(e,t,i,o){if(null!=o&&o.rawMetadata)return a(o.rawMetadata,o,!0===o.productsEnabled);const s=g.get(i);if(s)return s;const r=v.get(i);if(r)return r;const n=async function(e,t,i){var o,s,r,n,c;const f=(null==i?void 0:i.hubApiBase)??l,g=`${f}/project/${encodeURIComponent(t)}`,v=p(i)??e;if(u(f)&&!h(v))throw new Error(`Cannot fetch the metadata schema: no Hub session headers. ${d}`);const x=await fetch(g,{headers:v});if(!x.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${x.status})`);const m=await x.json(),b=(null==(s=null==(o=m.data)?void 0:o.project)?void 0:s.data)??(null==(r=m.project)?void 0:r.data);if(null==b||!b.metadata)throw new Error("No metadata in project response");const y=(null==i?void 0:i.productsEnabled)??!0===(null==(c=null==(n=null==b?void 0:b.airstore)?void 0:n.ui)?void 0:c.products_enabled);return a(b.metadata,i,y)}(t,i,o);v.set(i,n);try{const e=await n;return g.set(i,e),e}finally{v.delete(i)}}const b=new Set(["image","video","audio","document","archive","design_template"]);function y(e){if(!e||Array.isArray(e))return[];const t=e.format_mimetypes;return Array.isArray(t)?t.filter((e=>b.has(e))):[]}function _(e){const t={type:e.dep_action_type,targetCkey:e.dep_action_target_metadata_or_group_sys_key,targetFieldType:e.dep_action_target_metadata_field_type_key};return"allow_values"===e.dep_action_type&&(t.allowedValues=e.dep_action_target_field_allowed_values_sys_keys??[]),"set_values"===e.dep_action_type&&(t.setValues=e.dep_action_target_field_set_values_sys_keys??e.dep_action_target_field_allowed_set_sys_keys??[]),t}function w(e){const t=e.dep_metadata_trigger_values_sys_keys??e.dep_metadata_trigger_values??[];return{uuid:e.dep_uuid,name:e.dep_name,description:e.dep_description,active:e.dep_active,formatMimetypes:y(e.dep_scope),triggerCkey:e.dep_metadata_trigger_sys_key,triggerFieldType:e.dep_metadata_trigger_field_type_key,triggerCondition:e.dep_metadata_trigger_condition_key,triggerValues:t,actions:(e.dep_actions??[]).map(_)}}function k(e){if(e.length<=1)return!0;const t=e[0];if("string"==typeof t)return e.every((e=>e===t));const i=new Set(t);return e.every((e=>{if(!Array.isArray(e)||e.length!==t.length)return!1;for(const t of e)if(!i.has(t))return!1;return!0}))}const $=new Map,C=new Map;function S(e){return $.has(e)}async function L(e,t,i){const o=$.get(e);if(o)return o;const s=C.get(e);if(s)return s;const r=async function(e,t){const i=(null==t?void 0:t.hubApiBase)??l,o=`${i}/metadata/dependencies`,s=p(t)??e;if(u(i)&&!h(s))throw new Error(`Cannot fetch metadata dependencies: no Hub session headers. ${d}`);const r=await fetch(o,{headers:s});if(!r.ok)throw new Error(`Failed to fetch metadata dependencies (HTTP ${r.status})`);const n=await r.json();return function(e){if(!e)return[];const t=Array.isArray(e)?e:e.dependencies;return Array.isArray(t)?t.filter((e=>null==e?void 0:e.dep_active)).map(w):[]}(n)}(t,i);C.set(e,r);try{const t=await r;return $.set(e,t),t}finally{C.delete(e)}}const E=300,I="regvar:api",T="upsert",A=e=>`~${e.toUpperCase()}`,O=(e,t,i)=>{var o,s,r;const n=null==(o=e.i18n)?void 0:o[t];if(n)return{value:n,isFallback:!1,sourceLang:t};const a=null==(s=e.i18n)?void 0:s[A(t)];if(a)return{value:a,isFallback:!0,sourceLang:A(t)};const l=((e,t)=>{if(e&&t)return e[t]??e[A(t)]})(e.i18n,i);if(l){return{value:l,isFallback:!0,sourceLang:null!=(r=e.i18n)&&r[i]?i:A(i)}}return{value:"",isFallback:!1,sourceLang:null}},F=e=>("string"==typeof e?e:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),B=e=>{const t=[],i=new Map,o=(e,o)=>{if("string"==typeof e){if(!e||i.has(e))return;return i.set(e,t.length),void t.push({slug:e})}if(!e||"object"!=typeof e)return;const s=e,r=(e=>e.sid||e.slug||"")(s);if(!r)return;const n=i.get(r),a=void 0!==n?{...t[n]}:{};s.slug&&(a.slug=s.slug),s.sid&&(a.sid=s.sid),s.uuid&&(a.uuid=s.uuid);const l={...a.i18n,...s.i18n||{}};o&&s.label&&(l[o]=s.label),Object.keys(l).length>0&&(a.i18n=l),void 0!==n?t[n]=a:(i.set(r,t.length),s.slug&&s.slug!==r&&i.set(s.slug,t.length),t.push(a))};if(Array.isArray(e))for(const s of e)o(s);else if(e&&"object"==typeof e){const t=e;for(const[e,i]of Object.entries(t))if(Array.isArray(i))for(const t of i)o(t,e)}return t},R=e=>"string"==typeof e?[e]:e&&"object"==typeof e?[e.sid,e.slug,e.uuid].filter(Boolean):[],D=(e,t,i)=>{if(i){const i=new Set(t.flatMap(R));return e.filter((e=>!R(e).some((e=>i.has(e)))))}const o=new Set(e.flatMap(R)),s=t.filter((e=>!R(e).some((e=>o.has(e)))));return[...e,...s]};function z(e,t,i){let o=t;switch(e.regional_variants_group_uuid&&null!=o&&"object"==typeof o&&!Array.isArray(o)&&(o=o[i??"en"]),e.type){case"geopoint":return function(e){if("string"==typeof e){const t=/\(([^)]+)\)/.exec(e);if(t){const e=t[1].split(",");if(2===e.length)return{latitude:e[0].trim(),longitude:e[1].trim()}}}return{latitude:"",longitude:""}}(o);case"boolean":return!0===o?"true":!1===o?"false":"null";case"date":return o?new Date(o):null;case"decimal2":return null!=o?String(o):"";case"tags":return Array.isArray(o)?o.map((e=>"string"==typeof e?{value:e,label:e}:e)):[];case"ultratags":return B(t);case"multi-select":return o||[];default:return o??""}}function q(e,t,i,o){var s;let r;switch(e.type){case"geopoint":{const e=t;r=e&&""!==e.latitude&&null!=e.latitude&&""!==e.longitude&&null!=e.longitude?`(${e.latitude},${e.longitude})`:null;break}case"boolean":r="true"===t||"false"!==t&&null;break;case"date":if(t){const e=t instanceof Date?t:new Date(t);r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}else r=null;break;case"tags":r=Array.isArray(t)?t.map((e=>(null==e?void 0:e.label)??"")):[];break;case"ultratags":r=Array.isArray(t)?t.map((e=>"string"==typeof e?e:e.slug)).filter((e=>!!e)):[];break;case"select-one":r=""===t?null:t;break;case"numeric":{if(""===t||null==t){r=null;break}const e=Number(t);r=Number.isFinite(e)?Math.round(e):null;break}case"decimal2":{if(""===t||null==t){r=null;break}const e=Number(t);r=Number.isFinite(e)?e:null;break}default:r=t}if(e.regional_variants_group_uuid&&"ultratags"!==e.type){const t=o??"en";return{...(null==(s=null==i?void 0:i.meta)?void 0:s[e.key])??{},[t]:r}}return r}function P(e,t){const i=e.replace(/\/$/,"");let o=null,s=null,r=!1;return{search(e,n,a){o&&clearTimeout(o),s&&s.abort(),r=!1,n.trim()?o=setTimeout((async()=>{var o;s=new AbortController;try{const l=`${i}/v5/metadata/autocomplete?q=${encodeURIComponent(n.trim())}&meta_key=_${encodeURIComponent(e)}&limit=20`,d=await fetch(l,{headers:t,signal:s.signal});if(r)return;if(!d.ok)return void a([]);const c=await d.json();if(r)return;const u=(null==(o=c.data)?void 0:o.tags)??c.tags??[];a(u.map((e=>({sid:e.sid||void 0,value:e.tag||e.value||e.label||"",label:e.tag||e.label||e.value||""}))))}catch{r||a([])}}),200):a([])},cancel(){r=!0,o&&clearTimeout(o),s&&s.abort()}}}const j={base_node:null,nodes:[]};function M(e,t){const i=e.replace(/\/$/,"");let o=null,s=null,r=!1,n=null,a=null;return{fetchTaxonomies:()=>a||(a=(async()=>{var e;const o=`${i}/v5/taxonomies`;try{const i=await fetch(o,{headers:t});if(!i.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${i.status}`),[];const s=await i.json(),r=(null==s?void 0:s.taxonomies)??(null==(e=null==s?void 0:s.data)?void 0:e.taxonomies)??(null==s?void 0:s.data)??s;return Array.isArray(r)?r:(console.warn("[sfx-uploader] /v5/taxonomies returned unexpected shape",s),[])}catch(s){return console.warn("[sfx-uploader] /v5/taxonomies request failed",s),[]}})(),a.then((e=>{0===e.length&&(a=null)}),(()=>{a=null})),a),async fetchNodes(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;n&&n.abort(),n=new AbortController;try{const r=new URLSearchParams;o&&r.set("base",o),r.set("limit",String(s));const a=`${i}/v5/taxonomy/${encodeURIComponent(e)}/nodes?${r.toString()}`,l=await fetch(a,{headers:t,signal:n.signal});if(!l.ok)return j;const d=await l.json(),c=(null==d?void 0:d.data)??d;return{base_node:(null==c?void 0:c.base_node)??null,nodes:Array.isArray(null==c?void 0:c.nodes)?c.nodes:[]}}catch{return j}},autocomplete(e,n,a){o&&clearTimeout(o),s&&s.abort(),r=!1,n.trim()?o=setTimeout((async()=>{var o;s=new AbortController;try{const l=`${i}/v5/metadata/autocomplete?q=${encodeURIComponent(n.trim())}&meta_key=_${encodeURIComponent(e)}`,d=await fetch(l,{headers:t,signal:s.signal});if(r)return;if(!d.ok)return void a([]);const c=await d.json();if(r)return;const u=(null==(o=null==c?void 0:c.data)?void 0:o.tags)??(null==c?void 0:c.tags)??[];a(u.map((e=>({tag:String(e.tag??e.path??""),path:String(e.path??e.tag??""),suid:String(e.suid??""),uuid:String(e.uuid??""),approx_count:"number"==typeof e.approx_count?e.approx_count:void 0}))))}catch{r||a([])}}),200):a([])},cancel(){r=!0,o&&clearTimeout(o),s&&s.abort(),n&&n.abort()}}}const N="/v5/meta/ultratags",V=(e,t)=>{const i=new URLSearchParams;t.meta&&i.set("meta",t.meta),t.q&&i.set("q",t.q),t.sort&&i.set("sort",t.sort),"number"==typeof t.limit&&i.set("limit",String(t.limit)),t.after&&i.set("after",t.after),t.format&&i.set("format",t.format),t.lang&&i.set("lang",t.lang);const o=i.toString();return`${e}${N}${o?`?${o}`:""}`},K=(e,t)=>{const i=new URLSearchParams;t.format&&i.set("format",t.format),t.lang&&i.set("lang",t.lang);const o=i.toString();return`${e}${N}${o?`?${o}`:""}`};function U(e,t){let i=null,o=null;const s=()=>{i&&(clearTimeout(i),i=null),o&&(o.abort(),o=null)};return{list:r=>(s(),new Promise(((s,n)=>{i=setTimeout((async()=>{i=null,o=new AbortController;try{const i=V(e,r),a=await fetch(i,{method:"GET",headers:t,signal:o.signal});if(!a.ok)return void n(new Error(`ultratags list failed: HTTP ${a.status}`));const l=await a.json();s(l)}catch(a){n(a)}}),E)}))),async getBySids(i){if(!i.sids||0===i.sids.length)return{items:[],stats:{count:0,total_count:0}};const o=K(e,i),s=await fetch(o,{method:"QUERY",headers:{...t,"Content-Type":"application/json"},body:JSON.stringify({ultratags_sids:i.sids})});if(!s.ok)throw new Error(`ultratags getBySids failed: HTTP ${s.status}`);return await s.json()},async create(i){const o=`${e}${N}`,s=await fetch(o,{method:"POST",headers:{...t,"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok)throw new Error(`ultratags create failed: HTTP ${s.status}`);return await s.json()},cancel(){s()}}}var H=Object.defineProperty,Y=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&H(t,i,r),r};const G=s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7" cy="7" r="4.5"/><line x1="13.5" y1="13.5" x2="10.5" y2="10.5"/>
</svg>`,J=s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
</svg>`,Q=s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 6 8 2 12 6"/><polyline points="4 10 8 14 12 10"/>
</svg>`,W=s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 3 8 7 12 3"/><polyline points="4 9 8 13 12 9"/>
</svg>`,X=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){"Escape"===e.key&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return 0!==e.length&&e.every((e=>this._collapsed.has(e)))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||0===this.resolvedSchema.size)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=(0,o.J)(e,this.resolvedSchema);return new Map(t.map((e=>[e.ckey,e])))}_buildDependencyNames(){return 0===this.dependencies.length?new Map:new Map(this.dependencies.map((e=>[e.uuid,e.name])))}_visibleFieldsFor(e,t){var i;const s=this.resolvedSchema;if(s&&e.ckey&&null!=(i=s.get(e.ckey))&&i.hidden)return[];let r=s?e.fields.filter((t=>!(0,o.K)(t,e,s))):e.fields;return t&&!e.name.toLowerCase().includes(t)&&(r=r.filter((e=>e.title.toLowerCase().includes(t)))),r}_renderFilter(e,t,i){if(this.hideFilter)return s.Ld;if(!this.schema||0===this.schema.fields.length)return s.Ld;const r=this._filterQuery,n=this._isAllCollapsed(t),a=n?(0,o.L)("expandAll","Expand all"):(0,o.L)("collapseAll","Collapse all");return s.dy`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${G}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${(0,o.L)("searchFields","Search fields...")}
            .value=${r}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${(0,o.L)("searchMetadataFields","Search metadata fields")}
          />
          ${r?s.dy`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${(0,o.L)("clearSearch","Clear search")}
                aria-label=${(0,o.L)("clearSearch","Clear search")}
                type="button"
              >${J}</button>`:s.Ld}
        </div>
        ${e?s.dy`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?(0,o.L)("disabledWhileSearching","Disabled while searching"):a}
              aria-label=${n?(0,o.L)("expandAllGroups","Expand all groups"):(0,o.L)("collapseAllGroups","Collapse all groups")}
              type="button"
            >${n?W:Q}</button>`:s.Ld}
      </div>
    `}_renderGroup(e,t,i,o,r){const n=!!r||!this._collapsed.has(e.uuid);return s.dy`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${n}>
          <span>${e.name}</span>
          <svg class="chevron ${n?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${n?s.dy`
              <div class="group-content">
                ${t.map((e=>{var t,r,n;return s.dy`
                    <sfx-metadata-field
                      .field=${e}
                      .value=${this.meta[e.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${(null==(t=this.taxonodes)?void 0:t[e.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${(null==(r=this.schema)?void 0:r.regionalVariantsGroups)??[]}
                      .resolvedState=${(null==(n=this.resolvedSchema)?void 0:n.get(e.ckey))??null}
                      .conflict=${i.get(e.ckey)??null}
                      .dependencyNames=${o}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `}))}
              </div>
            `:s.Ld}
      </div>
    `}render(){if(!this.schema||0===this.schema.groups.length)return s.dy`<div class="empty" role="status" aria-live="polite">${(0,o.L)("noMetadataFieldsConfigured","No metadata fields configured")}</div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),r=i.toLowerCase(),n=""!==r,a=[];for(const o of this.schema.groups){const e=this._visibleFieldsFor(o,r);0!==e.length&&a.push({group:o,fields:e})}const l=a.map((e=>e.group.uuid)),d=this.schema.groups.length>1&&(n||a.length>0),c=this._renderFilter(d,l,n);if(0===a.length){const e=n?(0,o.L)("noFieldsMatch",'No fields match "{{query}}"',{query:i}):(0,o.L)("allMetadataFieldsHidden","All metadata fields are currently hidden");return s.dy`
        ${c}
        <div class="empty" role="status" aria-live="polite">${e}</div>
      `}return s.dy`
      ${c}
      ${a.map((i=>{let{group:o,fields:s}=i;return this._renderGroup(o,s,e,t,n)}))}
    `}};X.styles=s.iv`
    :host { display: block; }

    .form-filter {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px 12px;
    }
    .filter-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
      height: 36px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
    }
    .filter-input-wrap:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow:
        0 0 0 2px var(--sfx-up-bg, #fff),
        0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    }
    .filter-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 100%;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .filter-icon svg {
      width: 16px;
      height: 16px;
    }
    .filter-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 4px 0 0;
      border: none;
      background: transparent;
      outline: none;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
    }
    .filter-input::placeholder {
      color: var(--sfx-up-text-muted, #94a3b8);
      opacity: 1;
    }
    .filter-clear {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-right: 4px;
      flex-shrink: 0;
      border-radius: 6px;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .filter-clear:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-clear:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 1px;
    }
    .filter-clear svg {
      width: 12px;
      height: 12px;
    }
    .filter-collapse {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
      box-sizing: border-box;
    }
    .filter-collapse:hover:not(:disabled) {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-collapse:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .filter-collapse:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .filter-collapse svg {
      width: 16px;
      height: 16px;
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      box-sizing: border-box;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      transition: background-color 0.12s ease;
    }
    .group-header:hover {
      background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
    }
    .group-header:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
      border-radius: 4px;
    }

    .chevron {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    .group-content {
      padding: 0 16px 8px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;let Z=X;Y([(0,r.Cb)({attribute:!1})],Z.prototype,"schema"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"meta"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"config"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"autocomplete"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"taxonomyService"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"ultratags"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"defaultLanguage"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"taxonodes"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"resolvedSchema"),Y([(0,r.Cb)({attribute:!1})],Z.prototype,"dependencies"),Y([(0,r.Cb)({type:Boolean})],Z.prototype,"disabled"),Y([(0,r.Cb)({type:Boolean,attribute:"hide-filter"})],Z.prototype,"hideFilter"),Y([(0,r.SB)()],Z.prototype,"_collapsed"),Y([(0,r.SB)()],Z.prototype,"_filterQuery"),customElements.define("sfx-metadata-form",Z);const ee=s.iv`
  input, textarea, select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder, textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,te=s.iv`
  :host { display: block; position: relative; }

  .trigger {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .trigger-clear {
    all: unset;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
  }
  .trigger-clear:hover {
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #f1f5f9);
  }
  .trigger-chevron {
    margin-left: auto;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
    pointer-events: none;
  }
  .trigger-chevron svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .trigger-chevron.open {
    transform: rotate(180deg);
  }
  .trigger:focus-visible {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline: none;
  }
  .placeholder,
  .trigger-value {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 10;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  .search {
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    font-size: 13px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .option {
    padding: 8px 10px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
  }
  .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
`,ie=s.iv`
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-size: 12px;
    color: var(--sfx-up-text, #1e293b);
    line-height: 1.4;
  }
  .chip-x {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
  }
  .chip-x:hover { color: var(--sfx-up-error, #dc2626); }
`;s.iv`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
  }

  .panel-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }

  .panel-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: background 0.15s ease, color 0.15s ease;
    flex-shrink: 0;
  }
  .panel-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .panel-close:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  .progress-bar {
    flex-shrink: 0;
    padding: 8px 16px;
    border-bottom: 1px solid var(--sfx-up-border-light, #f8faff);
  }
  .progress-label {
    font-size: 12px;
    color: var(--sfx-up-text-secondary, #64748b);
    margin-bottom: 4px;
  }
  .progress-track {
    height: 3px;
    border-radius: 2px;
    background: var(--sfx-up-border-light, #f8faff);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sfx-up-primary, #2563eb);
    transition: width 0.25s ease;
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0 24px;
  }

  .panel-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .panel-footer .spacer { flex: 1; }

  .panel-footer .page-counter {
    font-size: 12px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* Shared button styles */
  .btn,
  .btn-ghost,
  .btn-primary {
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
  .btn-primary svg {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;const oe=s.iv`
  :host { display: block; }

  .field-row {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
  }

  /* Textarea rows: label should top-align with the first line of text */
  .field-row--top {
    align-items: flex-start;
  }
  .field-row--top .field-label {
    padding-top: 6px;
  }

  .field-label {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 144px;
    flex-shrink: 0;
  }
  .field-label-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
  }
  /* Dependency-conflict marker. Surfaces when the field's current value
     violates an allow_values or set_values rule. The native title attribute
     is used as the tooltip so we don't need a separate popover element. */
  .field-conflict {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    color: var(--sfx-up-warning, #f59e0b);
    flex-shrink: 0;
    cursor: help;
  }
  .field-conflict svg {
    width: 14px;
    height: 14px;
  }
  .field-hint {
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: help;
    flex-shrink: 0;
  }
  .field-hint svg {
    width: 12px;
    height: 12px;
  }

  .field-content {
    flex: 1;
    min-width: 0;
  }

  .field-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* Per-field regional-variants hint, e.g. "Languages: English". Mirrors
     admin v5's useFieldRegionalVariantHint description text. */
  .field-regional-hint {
    font-size: 11px;
    color: var(--sfx-up-text-muted, #94a3b8);
    margin-top: 4px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Mobile: stack label above the input full-width. The fixed 144px
     label column gets crushed on narrow viewports. */
  @media (max-width: 768px) {
    .field-row,
    .field-row--top {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
      padding: 10px 0;
    }
    .field-row--top .field-label {
      padding-top: 0;
    }
    .field-label {
      width: auto;
    }
  }
`;var se=Object.defineProperty,re=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&se(t,i,r),r};const ne=class extends s.oi{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return!(null==(e=this.resolvedState)||!e.required)||(0,o.M)(this.field,this.config??void 0)}_conflictTooltip(){var e,t;const i=this.conflict;if(!i)return"";const o=e=>{var t,i,o;return(null==(o=null==(i=null==(t=this.field)?void 0:t.possible_values)?void 0:i.find((t=>t.internal_unique_value===e)))?void 0:o.label)??e},s=null==(e=this.resolvedState)?void 0:e.allowedValues,r=null==(t=this.resolvedState)?void 0:t.setValue;let n;if(n="allow_values"===i.kind&&s?`Current value is no longer allowed. Allowed: ${s.map(o).join(", ")}`:"set_values"===i.kind&&void 0!==r?`Value should be: ${(Array.isArray(r)?r:[r]).map(o).join(", ")}`:"Value conflicts with a dependency rule",i.dependencyUuids.length>0&&this.dependencyNames.size>0){const e=i.dependencyUuids.map((e=>this.dependencyNames.get(e))).filter((e=>!!e));if(e.length>0){n+=`\nControlled by ${1===e.length?"dependency":"dependencies"}: ${e.join(", ")}`}}return n}_onFieldBlur(e){const{key:t,value:i}=e.detail,s=(0,o.N)(this.field,i,this.config??void 0);if(s)return void(this._error=s);this._error=null;const r={meta:{[this.field.key]:this.value}},n=(0,o.O)(this.field,this.config),a=q(this.field,i,r,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var i,r;const n=this.disabled;if((0,o.Q)(e))return s.dy`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const a=(null==(i=this.resolvedState)?void 0:i.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":default:return s.dy`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-text-field>`;case"textarea":return s.dy`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-textarea-field>`;case"select-one":return s.dy`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${a} ?disabled=${n}></sfx-meta-select-field>`;case"multi-select":return s.dy`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${a} ?disabled=${n}></sfx-meta-multi-select-field>`;case"tags":return s.dy`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${n}></sfx-meta-tags-field>`;case"ultratags":return s.dy`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${null==(r=this.config)?void 0:r.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${n}></sfx-meta-ultratags-field>`;case"taxonomy-node":return s.dy`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${n}></sfx-meta-taxonomy-node-field>`;case"boolean":return s.dy`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return s.dy`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-number-field>`;case"date":return s.dy`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-date-field>`;case"geopoint":return s.dy`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${n}></sfx-meta-geo-point-field>`}}render(){var e,t;const i=this.field;if(!i)return s.Ld;const r=(0,o.O)(i,this.config),n=z(i,this.value,r),a=(0,o.R)(i,this.regionalVariantsGroups,null==(e=this.config)?void 0:e.regionalFilters,null==(t=this.config)?void 0:t.language),l="textarea"===i.type?"field-row field-row--top":"field-row",d=this.conflict?this._conflictTooltip():"";return s.dy`
      <div class=${l} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${i.key}">
          <span class="field-label-text">${i.title}</span>
          ${this._isRequired?s.dy`<span class="field-required" aria-hidden="true">*</span>`:s.Ld}
          ${this.conflict?s.dy`<span class="field-conflict" role="img" aria-label=${d} title=${d}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2 L14 13 L2 13 Z"/>
                  <line x1="8" y1="6.5" x2="8" y2="9.5"/>
                  <circle cx="8" cy="11.25" r="0.4" fill="currentColor"/>
                </svg>
              </span>`:s.Ld}
        </div>
        <div class="field-content">
          ${this._renderField(i,n)}
          ${a?s.dy`<div class="field-regional-hint" title=${a}>${a}</div>`:s.Ld}
          ${this._error?s.dy`<div class="field-error" id="error-${i.key}" role="alert">${this._error}</div>`:s.Ld}
        </div>
      </div>
    `}};ne.styles=[oe];let ae=ne;re([(0,r.Cb)({attribute:!1})],ae.prototype,"field"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"value"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"config"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"autocomplete"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"taxonomyService"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"taxonomyEntry"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"ultratags"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"defaultLanguage"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"ultratagsRestrictToItems"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"regionalVariantsGroups"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"resolvedState"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"conflict"),re([(0,r.Cb)({attribute:!1})],ae.prototype,"dependencyNames"),re([(0,r.Cb)({type:Boolean})],ae.prototype,"disabled"),re([(0,r.SB)()],ae.prototype,"_error"),customElements.define("sfx-metadata-field",ae);var le=Object.defineProperty,de=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&le(t,i,r),r};class ce extends s.oi{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new o.I(this)}_selectPlaceholder(e){var t;const i=(null==(t=this.field)?void 0:t.title)??"";return i?(0,o.L)("selectFieldPlaceholder","Select {{field}}",{field:i.toLowerCase()}):e??(0,o.L)("selectAnOption","Select an option")}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...void 0!==t?{value:t}:{}},bubbles:!0,composed:!0}))}}de([(0,r.Cb)({attribute:!1})],ce.prototype,"field"),de([(0,r.Cb)({attribute:!1})],ce.prototype,"value"),de([(0,r.Cb)({type:Boolean})],ce.prototype,"disabled");const ue=class extends ce{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){"Escape"===e.key&&this._emit("field-escape")}render(){var e,t;const i=(null==(e=this.field)?void 0:e.title)??"",o=i?`Enter ${i.toLowerCase()}`:"";return s.dy`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${(null==(t=this.field)?void 0:t.placeholder)||o}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};ue.styles=[ee];let pe=ue;customElements.define("sfx-meta-text-field",pe);const he=class extends ce{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){"Escape"===e.key&&this._emit("field-escape")}render(){var e,t;const i=(null==(e=this.field)?void 0:e.title)??"",o=i?`Enter ${i.toLowerCase()}`:"";return s.dy`
      <textarea
        .value=${this.value??""}
        placeholder=${(null==(t=this.field)?void 0:t.placeholder)||o}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};he.styles=[ee,s.iv`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let fe=he;customElements.define("sfx-meta-textarea-field",fe);var ge=Object.defineProperty,ve=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&ge(t,i,r),r};const xe=class extends ce{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return((null==(e=this.field)?void 0:e.possible_values)??[]).map((e=>({id:e.internal_unique_value,label:e.label,value:e.internal_unique_value})))}get _selectableOptions(){const e=this.allowedValues;if(null===e)return this._options;const t=new Set(e);return this._options.filter((e=>t.has(e.value)))}get _filtered(){const e=this._search.toLowerCase();return this._selectableOptions.filter((t=>t.label.toLowerCase().includes(e)))}get _selectedLabel(){var e;return(null==(e=this._options.find((e=>e.value===this.value)))?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const e=this._filtered.findIndex((e=>e.value===this.value));this._activeIndex=e>=0?e:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".search"))||e.focus(),this._scrollActive()}))}_closeAndSubmit(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".trigger"))||e.focus()}))}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".option.active"))||e.scrollIntoView({block:"nearest"})}))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var t;if("Escape"===e.key)return this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),void(null==(t=this.renderRoot.querySelector(".trigger"))||t.focus());if(!this._open)return void(("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._openDropdown()));const i=this._filtered;if(i.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,i.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=i.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<i.length&&(e.preventDefault(),this._onSelect(i[this._activeIndex],!0))}}render(){var e;const t=this._selectPlaceholder();return s.dy`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?s.dy`<span class="trigger-value">${this._selectedLabel}</span>`:s.dy`<span class="placeholder">${(null==(e=this.field)?void 0:e.placeholder)||t}</span>`}
        ${this._selectedLabel&&!this.disabled?s.dy`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${(0,o.L)("clear","Clear")}
            @click=${this._clear}
            @keydown=${e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._clear(e))}}>&times;</span>
        `:s.Ld}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?s.dy`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${(0,o.L)("search","Search")}
            aria-label=${(0,o.L)("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length?this._filtered.map(((e,t)=>s.dy`
                <div class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
                  role="option" aria-selected=${e.value===this.value}
                  @mousedown=${t=>{t.preventDefault(),this._onSelect(e)}}
                  @mouseenter=${()=>{this._activeIndex=t}}>
                  ${e.label}
                </div>`)):s.dy`<div class="empty">${(0,o.L)("noOptions","No options")}</div>`}
        </div>
      `:s.Ld}
    `}};xe.styles=[te];let me=xe;ve([(0,r.Cb)({attribute:!1})],me.prototype,"allowedValues"),ve([(0,r.SB)()],me.prototype,"_open"),ve([(0,r.SB)()],me.prototype,"_search"),ve([(0,r.SB)()],me.prototype,"_activeIndex"),customElements.define("sfx-meta-select-field",me);var be=Object.defineProperty,ye=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&be(t,i,r),r};const _e=class extends ce{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return((null==(e=this.field)?void 0:e.possible_values)??[]).map((e=>({id:e.internal_unique_value,label:e.label,value:e.internal_unique_value})))}get _selectableOptions(){const e=this.allowedValues;if(null===e)return this._options;const t=new Set(e);return this._options.filter((e=>t.has(e.value)))}get _filtered(){const e=this._search.toLowerCase();return this._selectableOptions.filter((t=>t.label.toLowerCase().includes(e)))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".search"))||e.focus()}))}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter((t=>t!==e.value)):[...t,e.value];this.value=i,this._emit("field-change",i)}_remove(e){const t=this._selected.filter((t=>t!==e));this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._selectableOptions.map((e=>e.value));this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".option.active"))||e.scrollIntoView({block:"nearest"})}))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var t;if("Escape"===e.key)return this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),void(null==(t=this.renderRoot.querySelector(".trigger"))||t.focus());if(!this._open)return void(("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._openDropdown()));if("Backspace"===e.key&&!this._search&&this._selected.length>0)return void this._remove(this._selected[this._selected.length-1]);const i=this._filtered;if(i.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,i.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=i.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<i.length&&(e.preventDefault(),this._toggle(i[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<i.length&&!this._search&&(e.preventDefault(),this._toggle(i[this._activeIndex]))}}_labelFor(e){var t;return(null==(t=this._options.find((t=>t.value===e)))?void 0:t.label)??e}render(){var e;const t=this._selected,i=this._selectPlaceholder();return s.dy`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${t.length?t.map((e=>s.dy`
              <span class="chip">
                ${this._labelFor(e)}
                <button class="chip-x" aria-label=${(0,o.L)("removeItem","Remove {{item}}",{item:this._labelFor(e)})} @click=${t=>{t.stopPropagation(),this._remove(e)}}>&times;</button>
              </span>`)):s.dy`<span class="placeholder">${(null==(e=this.field)?void 0:e.placeholder)||i}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?s.dy`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${(0,o.L)("search","Search")}
            aria-label=${(0,o.L)("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length?this._filtered.map(((e,i)=>s.dy`
                  <div class="option ${i===this._activeIndex?"active":""}" role="option" aria-selected=${t.includes(e.value)}
                    @mousedown=${t=>{t.preventDefault(),this._toggle(e)}}
                    @mouseenter=${()=>{this._activeIndex=i}}>
                    <span class="check ${t.includes(e.value)?"checked":""}">
                      ${t.includes(e.value)?"\u2713":""}
                    </span>
                    ${e.label}
                  </div>`)):s.dy`<div class="empty">${(0,o.L)("noOptions","No options")}</div>`}
          </div>
          ${this._options.length>0?s.dy`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${e=>{e.preventDefault(),this._selectAll()}}>${(0,o.L)("selectAll","Select all")}</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${e=>{e.preventDefault(),this._clearAll()}}>${(0,o.L)("clearAll","Clear all")}</button>
            </div>
          `:s.Ld}
        </div>
      `:s.Ld}
    `}};_e.styles=[te,ie,s.iv`
      .trigger {
        min-height: 36px;
        height: auto;
        padding: 4px 8px;
        flex-wrap: wrap;
        gap: 4px;
      }
      .check {
        width: 16px;
        height: 16px;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 11px;
      }
      .check.checked {
        background: var(--sfx-up-primary, #2563eb);
        border-color: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }
      .option { display: flex; align-items: center; gap: 8px; }
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 340px;
      }
      .dropdown .search {
        flex-shrink: 0;
        min-height: 34px;
      }
      .options-list {
        flex: 1;
        overflow-y: auto;
      }
      .bulk-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
        flex-shrink: 0;
      }
      .bulk-btn {
        all: unset;
        font-size: 12px;
        font-weight: 500;
        color: var(--sfx-up-primary, #2563eb);
        cursor: pointer;
      }
      .bulk-btn:hover {
        text-decoration: underline;
      }
      .bulk-btn--muted {
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let we=_e;function ke(e,t){var i,o;return(null==(i=e.label)?void 0:i.trim().toLowerCase())===(null==(o=t.label)?void 0:o.trim().toLowerCase())}function $e(e){return e.trim().replace(/\s+/g," ")}function Ce(e){return $e(e).replace(/\s/g,"-")}function Se(e){return{label:$e(e),value:Ce(e)}}ye([(0,r.Cb)({attribute:!1})],we.prototype,"allowedValues"),ye([(0,r.SB)()],we.prototype,"_open"),ye([(0,r.SB)()],we.prototype,"_search"),ye([(0,r.SB)()],we.prototype,"_activeIndex"),customElements.define("sfx-meta-multi-select-field",we);var Le=Object.defineProperty,Ee=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Le(t,i,r),r};const Ie=class extends ce{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),null==(e=this.autocomplete)||e.cancel()}_onInput(e){var t,i,o;const s=e.target.value;if(this._query=s,this._dropdownOpen=!0,this._activeIndex=-1,!s.trim()||null==(t=this.field)||!t.ckey)return this._results=[],this._loading=!1,void(null==(i=this.autocomplete)||i.cancel());this._loading=!0,null==(o=this.autocomplete)||o.search(this.field.ckey,s,(e=>{this._results=e,this._loading=!1}))}_addTag(e){if(this._tags.some((t=>ke(t,e))))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".input"))||e.focus()}))}_removeTag(e){const t=this._tags.filter((t=>!ke(t,e)));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout((()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))}),150)}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".option.active"))||e.scrollIntoView({block:"nearest"})}))}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if("Escape"===e.key)return this._dropdownOpen=!1,this._activeIndex=-1,void this._emit("field-escape");if("Backspace"===e.key&&!this._query&&this._tags.length)return void this._removeTag(this._tags[this._tags.length-1]);if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),0!==t||"Enter"===e.key)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const t=this._suggestions;this._activeIndex>=0&&this._activeIndex<t.length?this._addTag(t[this._activeIndex]):this._activeIndex===t.length&&this._canCreate||-1===this._activeIndex&&this._canCreate?this._addTag(Se(this._query)):-1===this._activeIndex&&t.length&&this._addTag(t[0]);break}}}get _suggestions(){var e;const t=this._query.toLowerCase().trim(),i=this._tags,o=((null==(e=this.field)?void 0:e.possible_values)??[]).map((e=>({value:e.api_value||e.internal_unique_value,label:e.label}))).filter((e=>!i.some((t=>ke(t,e))))).filter((e=>!t||e.label.toLowerCase().includes(t))),s=this._results.filter((e=>!i.some((t=>ke(t,e)))&&!o.some((t=>ke(t,e)))));return[...o,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=Se(e);return!this._tags.some((e=>ke(e,t)))&&!this._suggestions.some((e=>ke(e,t)))}render(){var e,t;const i=this._tags,r=this._suggestions,n=r.length;return s.dy`
      <div class="container" @click=${()=>{var e;return null==(e=this.renderRoot.querySelector(".input"))?void 0:e.focus()}}>
        ${i.map((e=>s.dy`
          <span class="chip">
            ${e.label}
            <button class="chip-x" aria-label=${(0,o.L)("removeItem","Remove {{item}}",{item:e.label})} @click=${t=>{t.stopPropagation(),this._removeTag(e)}}>&times;</button>
          </span>`))}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${(null==(e=this.field)?void 0:e.title)??(0,o.L)("tags","Tags")}
          placeholder=${i.length?"":(null==(t=this.field)?void 0:t.placeholder)||(0,o.L)("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||r.length)?s.dy`
        <div class="dropdown" role="listbox">
          ${this._loading?s.dy`<div class="loading">${(0,o.L)("loading","Loading")}</div>`:s.Ld}
          ${r.map(((e,t)=>s.dy`
            <div class="option ${t===this._activeIndex?"active":""}" role="option"
              @mousedown=${t=>{t.preventDefault(),this._addTag(e)}}
              @mouseenter=${()=>{this._activeIndex=t}}>
              ${e.label}
            </div>`))}
          ${this._canCreate?s.dy`
            <div class="option create ${n===this._activeIndex?"active":""}"
              @mousedown=${e=>{e.preventDefault(),this._addTag(Se(this._query))}}
              @mouseenter=${()=>{this._activeIndex=n}}>
              ${(0,o.L)("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
            </div>`:s.Ld}
          ${this._loading||r.length||this._canCreate?s.Ld:s.dy`<div class="empty">${(0,o.L)("noResults","No results")}</div>`}
        </div>
      `:s.Ld}
    `}};Ie.styles=[ie,s.iv`
      :host { display: block; position: relative; }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading, .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let Te=Ie;Ee([(0,r.Cb)({attribute:!1})],Te.prototype,"autocomplete"),Ee([(0,r.SB)()],Te.prototype,"_query"),Ee([(0,r.SB)()],Te.prototype,"_results"),Ee([(0,r.SB)()],Te.prototype,"_loading"),Ee([(0,r.SB)()],Te.prototype,"_dropdownOpen"),Ee([(0,r.SB)()],Te.prototype,"_activeIndex"),customElements.define("sfx-meta-tags-field",Te);var Ae=Object.defineProperty,Oe=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Ae(t,i,r),r};const Fe=()=>[{label:(0,o.L)("booleanTrue","True"),value:"true"},{label:(0,o.L)("booleanFalse","False"),value:"false"}],Be=class extends ce{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var e;if(null==this.value)return"";const t=String(this.value);return(null==(e=Fe().find((e=>e.value===t)))?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=null==this.value?"":String(this.value);this._activeIndex=Math.max(Fe().findIndex((t=>t.value===e)),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".dropdown"))||e.focus()}))}_closeAndSubmit(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".trigger"))||e.focus()}))}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".option.active"))||e.scrollIntoView({block:"nearest"})}))}_onKeydown(e){var t;if("Escape"===e.key)return this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),void(null==(t=this.renderRoot.querySelector(".trigger"))||t.focus());if(this._open)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,Fe().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=Fe().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<Fe().length&&(e.preventDefault(),this._onSelect(Fe()[this._activeIndex],!0))}else("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._openDropdown())}render(){var e;const t=null==this.value?"":String(this.value),i=this._selectPlaceholder();return s.dy`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?s.dy`<span class="trigger-value">${this._currentLabel}</span>`:s.dy`<span class="placeholder">${(null==(e=this.field)?void 0:e.placeholder)||i}</span>`}
        ${this._currentLabel&&!this.disabled?s.dy`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${(0,o.L)("clear","Clear")}
            @click=${this._clear}
            @keydown=${e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._clear(e))}}>&times;</span>
        `:s.Ld}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?s.dy`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${Fe().map(((e,i)=>s.dy`
            <div class="option ${e.value===t?"selected":""} ${i===this._activeIndex?"active":""}"
              role="option" aria-selected=${e.value===t}
              @mousedown=${t=>{t.preventDefault(),this._onSelect(e)}}
              @mouseenter=${()=>{this._activeIndex=i}}>
              ${e.label}
            </div>`))}
        </div>
      `:s.Ld}
    `}};Be.styles=[te];let Re=Be;Oe([(0,r.SB)()],Re.prototype,"_open"),Oe([(0,r.SB)()],Re.prototype,"_activeIndex"),customElements.define("sfx-meta-boolean-field",Re);const De=class extends ce{get _step(){var e;return"decimal2"===(null==(e=this.field)?void 0:e.type)?"0.01":"1"}get _inputMode(){var e;return"decimal2"===(null==(e=this.field)?void 0:e.type)?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){"Escape"!==e.key?("e"===e.key||"E"===e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault():this._emit("field-escape")}render(){var e;return s.dy`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value??"")}
        placeholder=${(null==(e=this.field)?void 0:e.placeholder)??""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};De.styles=[ee];let ze=De;customElements.define("sfx-meta-number-field",ze);const qe=class extends ce{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){"Escape"===e.key&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return s.dy`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?s.dy`<span class="date-placeholder">${(0,o.L)("pickADate","Pick a date")}</span>`:s.Ld}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};qe.styles=[ee,s.iv`
      .date-wrap {
        position: relative;
        width: 100%;
      }

      .date-wrap input[type='date'] {
        padding-right: 32px;
        color: var(--sfx-up-text, #1e293b);
      }

      /* Hide native calendar indicator but keep it clickable across the field */
      .date-wrap input[type='date']::-webkit-calendar-picker-indicator {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      /* Empty state: hide the native dd/mm/yyyy text so the placeholder shows */
      .date-wrap input[type='date'].is-empty::-webkit-datetime-edit {
        opacity: 0;
      }

      .date-placeholder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      }

      /* Firefox doesn't support ::-webkit-datetime-edit so it can't hide
         the native placeholder — hide the custom one to avoid overlap. */
      @supports (-moz-appearance: none) {
        .date-placeholder {
          display: none;
        }
      }

      .date-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
      }

      .date-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    `];let Pe=qe;customElements.define("sfx-meta-date-field",Pe);const je=class extends ce{get _geo(){const e=this.value;return{latitude:(null==e?void 0:e.latitude)??"",longitude:(null==e?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,o={...this._geo,[e]:i};this.value=o,this._emit("field-change",o)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){"Escape"===e.key&&this._emit("field-escape")}render(){const e=this._geo;return s.dy`
      <div class="grid">
        <div>
          <label>${(0,o.L)("latitude","Latitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${e=>this._onInput("latitude",e)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>${(0,o.L)("longitude","Longitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${e=>this._onInput("longitude",e)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `}};je.styles=[ee,s.iv`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 4px;
      }
    `];let Me=je;customElements.define("sfx-meta-geo-point-field",Me);var Ne=Object.defineProperty,Ve=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Ne(t,i,r),r};const Ke={uuid:"__root__",name:"",ltree:""},Ue=class extends ce{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[Ke],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var e,t;const i=(null==(t=null==(e=this.field)?void 0:e.model)?void 0:t.parameters)??void 0;return null==i?void 0:i.taxonomy_suid}async _resolveTaxonomyUuid(){var e,t,i;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const o=this._taxonomySuid;if(!o||!this.taxonomyService)return null;const s=await this.taxonomyService.fetchTaxonomies(),r=s.find((e=>e.suid===o));return r?(this._resolvedTaxonomyUuid=r.uuid,this._taxonomyResolutionFailed=!1,r.uuid):(console.warn(`[sfx-uploader] taxonomy '${o}' not found in catalogue. Field "${(null==(e=this.field)?void 0:e.ckey)??(null==(t=this.field)?void 0:t.key)}" model:`,null==(i=this.field)?void 0:i.model,"Available taxonomies:",s.map((e=>({suid:e.suid,uuid:e.uuid,name:e.name})))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return"string"==typeof this.value?this.value:""}get _displayPath(){var e,t;return null!=(e=this.entry)&&e.path?this.entry.path:null!=(t=this.entry)&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),null==(e=this.taxonomyService)||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".search"))||e.focus()})))}_seedDrillStackFromEntry(){const e=this.entry;if(null==e||!e.lineage)return[Ke];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[Ke];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[\u203a>]\s*/).filter(Boolean):[]).slice(0,-1),s=[Ke];let r="";for(let n=0;n<i.length;n++)r=r?`${r}.${i[n]}`:i[n],s.push({uuid:`__seed_${r}`,name:o[n]??i[n],ltree:r});return s}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),null==(e=this.taxonomyService)||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t)return this._currentNodes=[],void(this._loading=!1);const i=this._drillStack[this._drillStack.length-1].ltree,o=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=o.nodes,this._loading=!1;const s=this._selectedScalar,r=s?this._currentNodes.findIndex((e=>e.uuid===s||e.slug===s)):-1;this._activeIndex=r,r>=0&&this._scrollActive()}_onSearchInput(e){var t;const i=e.target.value;if(this._query=i,this._activeIndex=-1,!i.trim()||!this.taxonomyService)return this._searchResults=[],this._loading=!1,void(null==(t=this.taxonomyService)||t.cancel());this._loading=!0;const o=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,i,(e=>{o===this._searchSeq&&(this._searchResults=e,this._loading=!1)}))}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const t=[...this._drillStack.filter((e=>e.uuid!==Ke.uuid)).map((e=>e.name)),e.name].filter(Boolean).join(" \u203a ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:t||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[\u203a>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))||e.scrollIntoView({block:"nearest"})}))}_onKeydown(e){var t,i;if("Escape"===e.key)return this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),null==(t=this.taxonomyService)||t.cancel(),this._emit("field-escape"),void(null==(i=this.renderRoot.querySelector(".trigger"))||i.focus());const o=this._navigableCount;if(this._activeIndex>=o&&(this._activeIndex=Math.max(o-1,-1)),"ArrowDown"===e.key)return e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,o-1),void this._scrollActive();if("ArrowUp"===e.key)return e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),void this._scrollActive();if("ArrowRight"!==e.key||this._isSearchMode)if("ArrowLeft"!==e.key||this._isSearchMode){if("Enter"===e.key){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const e=this._searchResults[this._activeIndex];e&&this._selectAutocomplete(e)}else{const e=this._currentNodes[this._activeIndex];e&&this._selectTreeNode(e)}}}else this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));else if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const t=this._currentNodes[this._activeIndex];t.children.count_direct>0&&(e.preventDefault(),this._drillInto(t))}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?s.Ld:s.dy`
      <div class="breadcrumb">
        ${e.map(((t,i)=>{const r=i===e.length-1,n=t.uuid===Ke.uuid?(0,o.L)("rootNode","Root"):t.name;return s.dy`
            ${i>0?s.dy`<span class="crumb-sep">›</span>`:s.Ld}
            <button class="crumb ${r?"current":""}" type="button"
              ?disabled=${r}
              @click=${()=>!r&&this._jumpToCrumb(i)}>
              ${n}
            </button>
          `}))}
      </div>
    `}_renderTree(){if(this._loading&&0===this._currentNodes.length)return s.dy`<div class="empty">${(0,o.L)("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return s.dy`<div class="empty">${(0,o.L)("taxonomyNotFound","Taxonomy not found")}</div>`;if(0===this._currentNodes.length)return s.dy`<div class="empty">${(0,o.L)("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return s.dy`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map(((t,i)=>{const r=t.children.count_direct>0,n=!!e&&(e===t.uuid||e===t.slug);return s.dy`
            <div class="tree-row ${i===this._activeIndex?"active":""} ${n?"selected":""}"
              role="option" aria-selected=${n}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>r?this._drillInto(t):this._selectTreeNode(t)}>
              <span class="tree-radio ${n?"checked":""}" role="button"
                aria-label=${(0,o.L)("selectNode","Select {{node}}",{node:t.name})}
                @click=${e=>{e.stopPropagation(),this._selectTreeNode(t)}}></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${r?s.dy`<span class="tree-count" aria-hidden="true">(${t.children.count_direct})</span>`:s.Ld}
              <span class="tree-chevron ${r?"":"hidden"}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `}))}
      </div>
    `}_renderSearch(){return this._loading&&0===this._searchResults.length?s.dy`<div class="empty">${(0,o.L)("loading","Loading")}</div>`:0===this._searchResults.length?s.dy`<div class="empty">${(0,o.L)("noResults","No results")}</div>`:s.dy`
      <div class="scroll" role="listbox">
        ${this._searchResults.map(((e,t)=>s.dy`
          <div class="ac-row ${t===this._activeIndex?"active":""}"
            role="option"
            @mouseenter=${()=>{this._activeIndex=t}}
            @click=${()=>this._selectAutocomplete(e)}>
            <span class="ac-tag">${e.tag}</span>
            ${e.path&&e.path!==e.tag?s.dy`<span class="ac-path">${e.path}</span>`:s.Ld}
          </div>
        `))}
      </div>
    `}render(){var e;if(!this._taxonomySuid)return s.dy`<div class="misconfigured" role="alert">${(0,o.L)("missingTaxonomyConfig","Field is missing taxonomy config")}</div>`;const t=this._selectPlaceholder((0,o.L)("selectANode","Select a node")),i=this._displayPath,r=!!i;return s.dy`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${e=>{!this._open&&("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._openDropdown())}}>
        ${r?s.dy`<span class="trigger-value" title=${i}>${i}</span>`:s.dy`<span class="placeholder">${(null==(e=this.field)?void 0:e.placeholder)||t}</span>`}
        ${r&&!this.disabled?s.dy`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${(0,o.L)("clear","Clear")}
            @click=${this._clear}
            @keydown=${e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._clear(e))}}>&times;</span>
        `:s.Ld}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?s.dy`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label=${(0,o.L)("searchTaxonomy","Search taxonomy")}
            placeholder=${(0,o.L)("search","Search")}
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${this._isSearchMode?s.Ld:this._renderBreadcrumb()}
          ${this._isSearchMode?this._renderSearch():this._renderTree()}
        </div>
      `:s.Ld}
    `}};Ue.styles=[te,s.iv`
      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2px;
        padding: 8px 10px;
        border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .crumb {
        background: none;
        border: none;
        padding: 2px 4px;
        font-family: inherit;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
        cursor: pointer;
        border-radius: 4px;
      }
      .crumb:hover { background: var(--sfx-up-hover, #f1f5f9); }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover { background: none; }
      .crumb-sep { color: var(--sfx-up-text-muted, #94a3b8); user-select: none; }

      .tree-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        font-size: 14px;
        color: var(--sfx-up-text, #1e293b);
        cursor: pointer;
      }
      .tree-row:hover,
      .tree-row.active { background: var(--sfx-up-hover, #f1f5f9); }
      .tree-row.selected {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }
      .tree-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tree-count {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 13px;
      }
      .tree-radio {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      .tree-radio.checked {
        border-color: var(--sfx-up-primary, #2563eb);
      }
      .tree-radio.checked::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--sfx-up-primary, #2563eb);
      }
      .tree-chevron {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .tree-chevron svg { width: 100%; height: 100%; display: block; }
      .tree-chevron.hidden { visibility: hidden; }

      .ac-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .ac-row:hover,
      .ac-row.active { background: var(--sfx-up-hover, #f1f5f9); }
      .ac-tag {
        font-weight: 500;
      }
      .ac-path {
        font-size: 11px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .dropdown.taxo {
        max-height: 320px;
        display: flex;
        flex-direction: column;
      }
      .dropdown.taxo > .search,
      .dropdown.taxo > .breadcrumb {
        flex-shrink: 0;
      }
      .scroll {
        overflow-y: auto;
      }

      .misconfigured {
        padding: 8px 10px;
        border: 1px dashed var(--sfx-up-error, #dc2626);
        border-radius: 6px;
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
      }
    `];let He=Ue;Ve([(0,r.Cb)({attribute:!1})],He.prototype,"taxonomyService"),Ve([(0,r.Cb)({attribute:!1})],He.prototype,"entry"),Ve([(0,r.SB)()],He.prototype,"_open"),Ve([(0,r.SB)()],He.prototype,"_query"),Ve([(0,r.SB)()],He.prototype,"_drillStack"),Ve([(0,r.SB)()],He.prototype,"_currentNodes"),Ve([(0,r.SB)()],He.prototype,"_searchResults"),Ve([(0,r.SB)()],He.prototype,"_loading"),Ve([(0,r.SB)()],He.prototype,"_activeIndex"),Ve([(0,r.SB)()],He.prototype,"_resolvedTaxonomyUuid"),Ve([(0,r.SB)()],He.prototype,"_taxonomyResolutionFailed"),customElements.define("sfx-meta-taxonomy-node-field",He);var Ye=Object.defineProperty,Ge=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Ye(t,i,r),r};const Je=class extends ce{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map((e=>{return"string"==typeof e?"string"==typeof(t=e)&&t.startsWith("#ut")?{sid:e}:{slug:e}:e;var t})):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),null==(e=this.ultratags)||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(0===t.length)return;const i=[];for(const o of t)o.sid&&!o.i18n&&!this._enrichmentAttempted.has(o.sid)&&i.push(o.sid);if(0!==i.length){for(const e of i)this._enrichmentAttempted.add(e);try{const o=(e=>{const t={},i={};for(const o of e||[])o.sid&&(t[o.sid]=o),o.slug&&(i[o.slug]=o);return{bySid:t,bySlug:i}})((await e.getBySids({sids:i,format:I})).items||[]),s=((e,t)=>e.map((e=>{const i=e.sid&&t.bySid[e.sid]||e.slug&&t.bySlug[e.slug]||void 0;return i?{slug:e.slug||i.slug,sid:e.sid||i.sid,uuid:e.uuid||i.uuid,i18n:{...i.i18n||{},...e.i18n||{}}}:e})))(t,o);this.value=s}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return O(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map((e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n}))):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=(this._isRestricted?this._restrictedEntries:this._results).filter((t=>!(t=>!!t.uuid&&e.has(t.uuid)||!!t.sid&&e.has(t.sid)||e.has(t.slug))(t))).map((e=>({entry:e,label:O(e,this._currentLang,this._defaultLang).value||e.slug})));if(this._isRestricted){const e=this._query.trim().toLowerCase();return e?t.filter((t=>t.label.toLowerCase().includes(e))):t}return t}get _isSearching(){return this._query.trim().length>=2}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=F(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some((t=>t.label.toLowerCase()===e.toLowerCase())))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var t,i;const o=e.target.value;if(this._query=o,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted)return void(this._loading=!1);if(!this._isSearching||null==(t=this.field)||!t.key)return this._results=[],this._loading=!1,void(null==(i=this.ultratags)||i.cancel());const s=this.ultratags;if(!s)return;const r=o.trim().toLowerCase();this._loading=!0,s.list({meta:this.field.key,q:r,limit:50,format:I}).then((e=>{this._query.trim().toLowerCase()===r&&(this._results=e.items||[],this._loading=!1)})).catch((()=>{this._query.trim().toLowerCase()===r&&(this._results=[],this._loading=!1)}))}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".input"))||e.focus()}))}async _createFromQuery(){var e,t;const i=this._query.trim();if(!i)return;const o=this.ultratags;if(!o||null==(e=this.field)||!e.key)return;const s=F(i);if(!s)return;const r=this._currentLang;try{const e=await o.create({meta:this.field.key,mode:T,items:[{slug:s,i18n:{[r]:i}}]}),n=null==(t=null==e?void 0:e.output)?void 0:t[0],a={slug:(null==n?void 0:n.slug)||s,sid:null==n?void 0:n.sid,uuid:null==n?void 0:n.uuid,i18n:(null==n?void 0:n.i18n)||{[r]:i}};if(this._entryAlreadySelected({uuid:a.uuid||"",sid:a.sid,slug:a.slug||s}))return;const l=[...this._items,a];this.value=l,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",l),this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".input"))||e.focus()}))}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter((t=>!((e,t)=>!!(t.uuid&&e.uuid===t.uuid||t.sid&&e.sid===t.sid||t.slug&&e.slug===t.slug))(t,e)));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout((()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))}),150)}_scrollActive(){this.updateComplete.then((()=>{var e;null==(e=this.renderRoot.querySelector(".option.active"))||e.scrollIntoView({block:"nearest"})}))}_onKeydown(e){if("Escape"===e.key)return this._dropdownOpen=!1,this._activeIndex=-1,void this._emit("field-escape");if("Backspace"===e.key&&!this._query&&this._items.length)return void this._removeItem(this._items[this._items.length-1]);if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),0!==t||"Enter"===e.key)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const t=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<t.length?this._addEntry(t[this._activeIndex].entry):this._activeIndex===t.length&&this._canCreate||-1===this._activeIndex&&this._canCreate?this._createFromQuery():-1===this._activeIndex&&t.length&&this._addEntry(t[0].entry);break}}}render(){var e,t;const i=this._items,r=this._dropdownOptions,n=r.length,a=this._query.trim(),l=(null==(e=this.field)?void 0:e.placeholder)||(this._isRestricted?(0,o.L)("searchTagsToRemove","Search tags to remove"):(0,o.L)("addCustomTags","Add custom tags"));return s.dy`
      <div class="container" @click=${()=>{var e;return null==(e=this.renderRoot.querySelector(".input"))?void 0:e.focus()}}>
        ${i.map((e=>{const t=this._labelForItem(e);return e.uuid||e.sid||e.slug,s.dy`
            <span class="chip" title=${t}>
              ${t}
              <button class="chip-x" aria-label=${(0,o.L)("removeItem","Remove {{item}}",{item:t})}
                @click=${t=>{t.stopPropagation(),this._removeItem(e)}}>&times;</button>
            </span>`}))}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${(null==(t=this.field)?void 0:t.title)??(0,o.L)("customTags","Custom tags")}
          placeholder=${i.length?"":l}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen?s.dy`
        <div class="dropdown" role="listbox">
          ${this._isRestricted||this._isSearching?s.Ld:s.dy`<div class="hint">${(0,o.L)("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:2})}</div>`}
          ${!this._isRestricted&&this._isSearching&&this._loading?s.dy`<div class="loading">${(0,o.L)("loading","Loading")}</div>`:s.Ld}
          ${this._isRestricted||this._isSearching&&!this._loading?r.map(((e,t)=>s.dy`
                <div class="option ${t===this._activeIndex?"active":""}" role="option"
                  @mousedown=${t=>{t.preventDefault(),this._addEntry(e.entry)}}
                  @mouseenter=${()=>{this._activeIndex=t}}>
                  ${e.label}
                </div>`)):s.Ld}
          ${(this._isRestricted||this._isSearching&&!this._loading)&&0===r.length&&!this._canCreate?s.dy`<div class="empty">${(0,o.L)("noResults","No results")}</div>`:s.Ld}
          ${this._canCreate?s.dy`
              <div class="option create ${n===this._activeIndex?"active":""}"
                @mousedown=${e=>{e.preventDefault(),this._createFromQuery()}}
                @mouseenter=${()=>{this._activeIndex=n}}>
                ${(0,o.L)("createTag","Create '{{tag}}'",{tag:a})}
              </div>`:s.Ld}
        </div>
      `:s.Ld}
    `}};Je.styles=[ie,s.iv`
      :host { display: block; position: relative; }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 240px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
        border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      }
      .option .label-fallback {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 12px;
        margin-left: 6px;
      }

      .loading, .empty, .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let Qe=Je;Ge([(0,r.Cb)({attribute:!1})],Qe.prototype,"ultratags"),Ge([(0,r.Cb)({attribute:!1})],Qe.prototype,"language"),Ge([(0,r.Cb)({attribute:!1})],Qe.prototype,"defaultLanguage"),Ge([(0,r.Cb)({attribute:!1})],Qe.prototype,"restrictToItems"),Ge([(0,r.SB)()],Qe.prototype,"_query"),Ge([(0,r.SB)()],Qe.prototype,"_results"),Ge([(0,r.SB)()],Qe.prototype,"_loading"),Ge([(0,r.SB)()],Qe.prototype,"_dropdownOpen"),Ge([(0,r.SB)()],Qe.prototype,"_activeIndex"),customElements.define("sfx-meta-ultratags-field",Qe);const We=()=>(0,o.L)("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Xe=s.dy`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${s.YP`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,Ze=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this)}render(){const e=We();return s.dy`
      <div
        class="unsupported"
        title=${e}
        aria-label=${e}
        aria-disabled="true"
        role="note"
      >
        ${Xe}
        <span class="unsupported-text" aria-hidden="true">${(0,o.L)("notEditableDuringUpload","Not editable during upload")}</span>
      </div>
    `}};Ze.styles=s.iv`
    :host { display: block; }
    .unsupported {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      border: 1px dashed var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-surface, #f8fafc);
      box-sizing: border-box;
      cursor: not-allowed;
      user-select: none;
    }
    .unsupported svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .unsupported-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;let et=Ze;customElements.define("sfx-meta-unsupported-field",et);var tt=Object.defineProperty,it=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&tt(t,i,r),r};const ot=class extends s.oi{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if((0,o.Q)(e))return s.dy`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":default:return s.dy`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return s.dy`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return s.dy`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return s.dy`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return s.dy`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"ultratags":return s.dy`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}></sfx-meta-ultratags-field>`;case"taxonomy-node":return s.dy`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${i}></sfx-meta-taxonomy-node-field>`;case"boolean":return s.dy`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return s.dy`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return s.dy`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return s.dy`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`}}};ot.styles=s.iv`
    :host { display: block; }
  `;let st=ot;it([(0,r.Cb)({attribute:!1})],st.prototype,"field"),it([(0,r.Cb)({attribute:!1})],st.prototype,"value"),it([(0,r.Cb)({attribute:!1})],st.prototype,"autocomplete"),it([(0,r.Cb)({attribute:!1})],st.prototype,"taxonomyService"),it([(0,r.Cb)({attribute:!1})],st.prototype,"taxonomyEntry"),it([(0,r.Cb)({attribute:!1})],st.prototype,"ultratags"),it([(0,r.Cb)({attribute:!1})],st.prototype,"language"),it([(0,r.Cb)({attribute:!1})],st.prototype,"defaultLanguage"),it([(0,r.Cb)({attribute:!1})],st.prototype,"ultratagsRestrictToItems"),it([(0,r.Cb)({attribute:!1})],st.prototype,"allowedValues"),it([(0,r.Cb)({type:Boolean})],st.prototype,"disabled"),customElements.define("sfx-metadata-field-edit",st);var rt=Object.defineProperty,nt=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&rt(t,i,r),r};const at=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.taxonomyEntry=null}_formatValue(){var e,t,i,o;const s=this.value,r=null==(e=this.field)?void 0:e.type;switch(r){case"boolean":return"true"===s?"True":"false"===s?"False":"";case"date":return s?s instanceof Date?s.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"string"==typeof s&&s.length>0?s:"":"";case"numeric":case"decimal2":{if(null==s||""===s)return"";const e=Number(s);return Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:"decimal2"===r?2:0}):String(s)}case"select-one":{if(null==s||""===s)return"";const e=null==(t=this.field.possible_values)?void 0:t.find((e=>e.internal_unique_value===s||e.api_value===s));return(null==e?void 0:e.label)??String(s)}case"multi-select":return Array.isArray(s)&&0!==s.length?s.map((e=>{var t;const i=null==(t=this.field.possible_values)?void 0:t.find((t=>t.internal_unique_value===e||t.api_value===e));return(null==i?void 0:i.label)??String(e)})).join(", "):"";case"tags":return Array.isArray(s)&&0!==s.length?s.map((e=>e.label||e.value)).join(", "):"";case"ultratags":{if(!Array.isArray(s)||0===s.length)return"";const e=this.language||"en",t=this.defaultLanguage||e;return s.map((i=>"string"==typeof i?i:O({i18n:i.i18n,slug:i.slug||""},e,t).value||i.slug||i.sid||"")).filter(Boolean).join(", ")}case"taxonomy-node":return null!=(i=this.taxonomyEntry)&&i.path?this.taxonomyEntry.path:null!=(o=this.taxonomyEntry)&&o.name?this.taxonomyEntry.name:null==s||""===s?"":String(s);case"geopoint":{const e=s;return e&&""!==e.latitude&&null!=e.latitude&&""!==e.longitude&&null!=e.longitude?`(${e.latitude}, ${e.longitude})`:""}case"attachment-uri":return!s||"string"==typeof s&&0===s.length?"":String(s);default:return null==s||""===s?"":String(s)}}render(){var e;if(this.field&&(0,o.Q)(this.field))return s.dy`
        <div class="value empty" title=${We()}>
          ${(0,o.L)("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const t=this._formatValue(),i=""===t;return"attachment-uri"!==(null==(e=this.field)?void 0:e.type)||i?s.dy`
      <div class="value ${i?"empty":""}">${i?"\u2014":t}</div>
    `:s.dy`
        <div class="value">
          <a class="link" href=${t} target="_blank" rel="noopener noreferrer"
            @click=${e=>e.stopPropagation()}
          >${t}</a>
        </div>
      `}};at.styles=s.iv`
    :host { display: block; }
    .value {
      min-height: 28px;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
      word-break: break-word;
      line-height: 1.4;
    }
    .empty {
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .link {
      color: var(--sfx-up-primary, #2563eb);
      text-decoration: none;
      max-width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link:hover {
      text-decoration: underline;
    }
  `;let lt=at;nt([(0,r.Cb)({attribute:!1})],lt.prototype,"field"),nt([(0,r.Cb)({attribute:!1})],lt.prototype,"value"),nt([(0,r.Cb)({attribute:!1})],lt.prototype,"taxonomyEntry"),nt([(0,r.Cb)({attribute:!1})],lt.prototype,"language"),nt([(0,r.Cb)({attribute:!1})],lt.prototype,"defaultLanguage"),customElements.define("sfx-metadata-field-view",lt);var dt=Object.defineProperty,ct=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&dt(t,i,r),r};const ut=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter((e=>{var t;return(null==(t=null==e?void 0:e.variants)?void 0:t.length)>1}))}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const o of t.variants)e.push({groupUuid:t.uuid,value:o.api_value,label:o.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const e=this._options.findIndex((e=>this.selectedFilters[e.groupUuid]===e.value));this._activeIndex=e>=0?e:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then((()=>this._scrollActive()))}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&"function"==typeof e.scrollIntoView&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if("Escape"===e.key&&this._open)return e.stopPropagation(),void this._close();if(!this._open)return void(("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),this._openDropdown()));const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]))}}_triggerSummary(e){var t;const i=this._filteredGroups;if(0===i.length)return e;const o=[];for(const s of i){const e=this.selectedFilters[s.uuid]??(null==(t=s.variants[0])?void 0:t.api_value),r=s.variants.find((t=>t.api_value===e));r&&o.push(1===i.length?r.label:`${s.label}: ${r.label}`)}return o.length?o.join(", "):e}render(){if(0===this._filteredGroups.length)return s.Ld;const e=this._options,t=(0,o.L)("regionalSettings","Regional settings"),i=this._triggerSummary(t);return s.dy`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${t} \u2014 ${i}`}
        title=${i}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </span>
        <span class="trigger-label">${t}</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      ${this._open?s.dy`
            <div class="dropdown" role="listbox" aria-label=${t}>
              ${e.map(((e,t)=>this._renderOption(e,t,e.value===this.selectedFilters[e.groupUuid])))}
            </div>
          `:s.Ld}
    `}_renderOption(e,t,i){const o=this._activeIndex===t;return s.dy`
      ${e.isGroupStart?s.dy`<div class="group-header">${e.groupLabel}</div>`:s.Ld}
      <div
        class="option ${i?"selected":""} ${o?"active":""}"
        role="option"
        aria-selected=${i}
        @mouseenter=${()=>{this._activeIndex=t}}
        @click=${()=>this._onSelect(e)}
      >
        <span class="option-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>${e.label}</span>
      </div>
    `}};ut.styles=[te,s.iv`
      :host {
        display: inline-block;
        position: relative;
      }

      /* Borderless trigger — Globe icon + "Regional settings" label +
         chevron. Sits beside the other header buttons but is wider because
         the label needs room. Filled background only on hover. */
      .trigger {
        /* Use min-height — not a fixed height — so descenders (g, j, p, y)
           in the label aren't clipped at the bottom. Line-height stays
           normal so the line box can fit the full glyph + descender. */
        min-height: 30px;
        padding: 4px 10px;
        border: none;
        border-radius: 8px;
        background: none;
        color: var(--sfx-up-text-secondary, #64748b);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.15s, color 0.15s;
      }
      .trigger:hover {
        background: var(--sfx-up-border, #e2e8f0);
        color: var(--sfx-up-text, #1e293b);
      }
      .trigger:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        box-shadow: none;
      }
      .trigger-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        display: block;
        color: inherit;
      }
      .trigger-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-label {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trigger-chevron {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .trigger-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-chevron.open { transform: rotate(180deg); }

      .dropdown {
        right: 0;
        left: auto;
        min-width: 220px;
        max-height: 320px;
      }
      .group-header {
        padding: 8px 10px 4px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option-check {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-primary, #2563eb);
        opacity: 0;
      }
      .option.selected .option-check {
        opacity: 1;
      }
      .option-check svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      /* Responsive — at narrow widths collapse to the icon only so the
         label doesn't crowd the close button. */
      @media (max-width: 768px) {
        .trigger { height: 28px; padding: 0 6px; gap: 4px; font-size: 12px; }
        .trigger-icon { width: 16px; height: 16px; }
      }
      @media (max-width: 480px) {
        .trigger { padding: 0 6px; }
        .trigger-label { display: none; }
        .trigger-chevron { display: none; }
      }
    `];let pt=ut;ct([(0,r.Cb)({attribute:!1})],pt.prototype,"groups"),ct([(0,r.Cb)({attribute:!1})],pt.prototype,"selectedFilters"),ct([(0,r.SB)()],pt.prototype,"_open"),ct([(0,r.SB)()],pt.prototype,"_activeIndex"),customElements.define("sfx-regional-settings",pt);const ht=new Set(["multi-select","tags","ultratags"]),ft=new Set(["text","textarea","attachment-uri"]);function gt(e,t){return"DELETE"!==e||(ht.has(t)||ft.has(t))}function vt(e,t,i,o,s){const r=s??"en",n=!!e.regional_variants_group_uuid,a=q(e,i,{meta:{[e.key]:t}},s),l=e=>n&&null!==e&&"object"==typeof e&&!Array.isArray(e),d=function(e,t,i,o){const s=ht.has(o),r=ft.has(o);switch(e){case"SET":default:return i;case"ADD":if(s){const e=Array.isArray(t)?t:[],s=Array.isArray(i)?i:[];if(0===s.length)return e;if("ultratags"===o)return D(e,s,!1);if("tags"===o){const t=new Set(e.map((e=>e))),i=[...e];for(const e of s){const o="string"==typeof e?e:String(e);t.has(o)||(t.add(o),i.push(o))}return i}const r=new Set(e.map((e=>JSON.stringify(e)))),n=[...e];for(const t of s){const e=JSON.stringify(t);r.has(e)||(r.add(e),n.push(t))}return n}if(r){const e="string"==typeof i?i:"";if(!e)return t??"";const o="string"==typeof t?t:"";return o?`${o} ${e}`:e}return i;case"DELETE":if(s){const e=Array.isArray(t)?t:[],s=Array.isArray(i)?i:[];if(0===s.length)return e;if("ultratags"===o)return D(e,s,!0);if("tags"===o){const t=new Set(s.map((e=>"string"==typeof e?e:String(e))));return e.filter((e=>!t.has("string"==typeof e?e:String(e))))}const r=new Set(s.map((e=>JSON.stringify(e))));return e.filter((e=>!r.has(JSON.stringify(e))))}if(r){const e="string"==typeof i?i:"";return e?("string"==typeof t?t:"").replaceAll(e,"").replace(/\s{2,}/g," ").trim():""}return"geopoint"===o?{latitude:"",longitude:""}:null}}(o,l(t)?t[r]:t,l(a)?a[r]:a,e.type);return n?{...l(t)?t:{},[r]:d}:d}const xt=s.iv`
  .fm-checkbox {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 3px;
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.12s ease, border-color 0.12s ease;
    flex-shrink: 0;
  }
  .fm-checkbox:hover {
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked,
  .fm-checkbox:indeterminate {
    background: var(--sfx-up-primary, #2563eb);
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,mt=s.iv`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  .fm-overlay {
    position: fixed;
    inset: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.5);
  }

  /* ---- Confirm discard dialog ---- */
  .fm-confirm-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border-radius: 14px;
  }
  .fm-confirm {
    background: var(--sfx-up-bg, #fff);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 24px;
    max-width: 340px;
    width: 100%;
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    margin: 0 0 20px;
    line-height: 1.5;
  }
  .fm-confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .fm-modal {
    width: var(--sfx-up-bulk-modal-width, 980px);
    max-width: calc(100vw - 40px);
    height: var(--sfx-up-bulk-modal-height, 82vh);
    max-height: calc(100vh - 40px);
    background: var(--sfx-up-bg, #fff);
    border-radius: 14px;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Top bar ---- */
  .fm-topbar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-topbar-title {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fm-topbar-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: background 0.15s ease, color 0.15s ease;
    flex-shrink: 0;
  }
  .fm-topbar-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }

  /* Regional-settings sits to the left of the close button — same 8px gap
     rule as the main header. */
  .fm-topbar-regional {
    margin-right: 8px;
  }

  /* ---- Body ---- */
  .fm-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .fm-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Table header ---- */
  .fm-table-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    border-left: 3px solid transparent;
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    flex-shrink: 0;
  }
  .fm-th-check { width: 20px; flex-shrink: 0; }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover { color: var(--sfx-up-text-secondary, #64748b); }
  .fm-th-size { width: 70px; flex-shrink: 0; text-align: left; }
  .fm-th-field { flex: 1; min-width: 0; }

  .fm-sort-arrow {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-left: 4px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Table body (scrollable) ---- */
  .fm-table-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  .fm-table-body::-webkit-scrollbar {
    width: 10px;
  }
  .fm-table-body::-webkit-scrollbar-track {
    background: transparent;
  }
  .fm-table-body::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  .fm-table-body::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  /* ---- Footer ---- */
  .fm-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-footer .spacer { flex: 1; }

  /* ---- Shared buttons ---- */
  .btn-ghost,
  .btn-primary,
  .btn-back {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
    /* Anchor the footer's right edge so Cancel doesn't visibly jump when the
       label flips between "Save" (~60px) and "Next required: <title>" (up to
       320px). The min-width accommodates short labels comfortably without
       forcing extra padding when not needed. */
    min-width: 120px;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  /* "Next required: <field>" variant of the primary button.
     Cap the label width so a long field title can't push the button beyond the
     footer; the field title is allowed to ellipsize, while the trailing arrow
     stays pinned and visible. */
  .btn-primary--next {
    max-width: 320px;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-arrow {
    flex-shrink: 0;
  }
  .btn-back {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    padding: 0 8px;
  }
  .btn-back:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }

  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  /* ---- Empty state ---- */
  .fm-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  /* ---- Mobile / tablet responsive ----
     At <=768px the bulk modal goes fullscreen and restacks: sidebar
     on top as a horizontal scroll bar, table header is hidden (rows
     carry their own labels via stacked layout), footer buttons wrap. */
  @media (max-width: 768px) {
    .fm-overlay {
      padding: 0;
    }
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0;
    }
    .fm-topbar {
      padding: 10px 14px;
    }
    .fm-body {
      flex-direction: column;
    }
    .fm-table-header {
      display: none;
    }
    .fm-th-name,
    .fm-th-size {
      width: auto;
    }
    .fm-footer {
      padding: 10px 12px;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 12px;
      font-size: 13px;
    }
    .fm-footer .btn-primary {
      /* Tighter anchor on mobile so Save doesn't visually dominate at small
         viewports. The footer also wraps below ~360px which keeps everything
         reachable. */
      min-width: 88px;
    }
    .fm-footer .btn-primary--next {
      /* Squeeze the "Next required" button further on mobile so it still
         fits beside Cancel + Back when the field title is long. */
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .fm-topbar-title {
      font-size: 13px;
    }
    .fm-footer {
      padding: 8px 10px;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 10px;
      font-size: 12px;
      height: 34px;
    }
  }

  ${xt}
`,bt=s.iv`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 12px 0;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  :host::-webkit-scrollbar {
    width: 10px;
  }
  :host::-webkit-scrollbar-track {
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  :host::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  .group-label {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px 6px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition: background-color 0.12s ease, color 0.12s ease;
  }
  .group-label:first-child {
    margin-top: 0;
  }
  .group-label:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .group-label-text {
    flex: 1;
  }
  .group-chevron {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    transition: transform 0.18s ease;
  }
  .group-chevron.open {
    transform: rotate(180deg);
  }

  .field-item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 8px 12px 8px 32px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
    transition: background 0.12s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }
  .field-item:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .field-item.active {
    background: var(--sfx-up-primary-bg, #eff6ff);
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .field-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.55;
  }
  .field-icon svg {
    width: 16px;
    height: 16px;
  }
  .field-item.active .field-icon {
    opacity: 0.85;
  }

  .field-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .field-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }

  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
    flex-shrink: 0;
  }
  /* Required field currently has at least one modifiable file missing a value —
     amplify (rather than mute its peers) so the user can correlate the footer's
     "Next required: <field>" button with the sidebar entry it points at. */
  .field-required.unmet {
    font-weight: 800;
    font-size: 16px;
    line-height: 1;
    /* The bigger asterisk has more visual weight above the baseline; pull it
       up a hair so the row keeps the same optical center. */
    margin-top: -1px;
  }

  /* ---- Mobile: sidebar becomes a horizontal scrollable tab bar on top,
     since the modal stacks vertically below 768px. Hide group labels and
     flatten all fields into one row. ---- */
  @media (max-width: 768px) {
    :host {
      width: 100%;
      max-height: 56px;
      min-height: 56px;
      border-right: none;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    :host::-webkit-scrollbar {
      height: 4px;
    }
    .group-label {
      display: none;
    }
    .field-item {
      height: 40px;
      padding: 8px 14px;
      width: auto;
      flex-shrink: 0;
      border-radius: 999px;
      margin: 0 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
      font-size: 13px;
    }
    .field-item.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }
    .field-name {
      overflow: visible;
      text-overflow: unset;
    }
  }
`,yt=s.iv`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .op-bar {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 24px;
    flex-shrink: 0;
  }

  /* Stacked field (label on top, control below) */
  .op-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }
  .op-field--operation {
    width: 200px;
    flex-shrink: 0;
  }
  .op-field--value {
    flex: 1;
    min-width: 0;
  }
  .op-field-label {
    font-size: 12px;
    font-weight: 400;
    color: var(--sfx-up-text-muted, #94a3b8);
    line-height: 1;
  }

  /* Operation dropdown */
  .op-dropdown-wrap {
    position: relative;
    width: 100%;
  }
  .op-trigger {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    background: var(--sfx-up-bg, #fff);
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
  }
  .op-trigger--static {
    cursor: default;
  }
  .op-trigger-label {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .op-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
  }
  .op-trigger.open .op-chevron {
    transform: rotate(180deg);
  }
  .op-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .op-option {
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
    font-family: inherit;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }
  .op-option:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .op-option.active {
    color: var(--sfx-up-primary, #2563eb);
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-weight: 500;
  }

  /* Value input area */
  .op-value {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .op-value > sfx-metadata-field-edit {
    flex: 1;
    min-width: 0;
  }


  /* Apply button — align with the TOP of the input column so it sits
     next to the control (not the bottom of multi-line textareas). The
     op-bar row uses align-items: flex-start, so this sits at the top. */
  .btn-apply {
    height: 36px;
    align-self: flex-start;
    margin-top: 18px; /* tuned to line up with input top edge */
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    background: var(--sfx-up-primary, #2563eb);
    color: #fff;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }
  .btn-apply:hover:not(:disabled) {
    background: var(--sfx-up-primary-hover, #1d4ed8);
  }
  .btn-apply:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* Unsupported field notice (rendered in place of op-bar controls). */
  .op-unsupported {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    border: 1px dashed var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    background: var(--sfx-up-surface, #f8fafc);
    font-size: 13px;
    line-height: 1.4;
    flex: 1;
    min-width: 0;
  }
  .op-unsupported svg {
    width: 16px;
    height: 16px;
    margin-top: 1px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
  .op-unsupported-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .op-unsupported-title {
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
  }
  .op-unsupported-msg {
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Mobile: stack op-field rows vertically so the operation
     dropdown, value input, and Apply button each get full width. ---- */
  @media (max-width: 768px) {
    .op-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 12px 14px;
    }
    .op-field--operation {
      width: 100%;
    }
    .btn-apply {
      align-self: stretch;
      margin-top: 0;
      height: 38px;
      font-size: 14px;
    }
  }
`,_t=s.iv`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border-left: 3px solid transparent;
  }

  .row-check { width: 20px; flex-shrink: 0; }

  .row-thumb {
    width: 52px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 6px;
    object-fit: cover;
    background: var(--sfx-up-border-light, #f1f5f9);
  }
  .row-thumb-fallback {
    object-fit: contain;
    padding: 2px;
    box-sizing: border-box;
  }

  .row-name {
    width: 180px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
  }

  .row-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  .row-field {
    flex: 1;
    min-width: 0;
    position: relative;
  }
  .row-field-edit {
    min-width: 0;
  }

  .row-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* ---- Mobile: stack row contents vertically. Top row has
     checkbox + thumb + name, then size below name, and the field
     editor spans the full row width underneath. ---- */
  @media (max-width: 768px) {
    .row {
      flex-wrap: wrap;
      padding: 10px 14px;
      gap: 10px;
    }
    .row-name {
      flex: 1;
      width: auto;
      min-width: 0;
    }
    .row-size {
      width: auto;
      font-size: 12px;
    }
    .row-field {
      flex-basis: 100%;
      margin-left: 32px;
    }
  }

  @media (max-width: 440px) {
    .row {
      padding: 10px 12px;
    }
    .row-thumb {
      width: 44px;
      height: 32px;
    }
    .row-field {
      margin-left: 0;
    }
  }

  ${xt}
`,wt=s.iv`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .diff-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    min-height: 28px;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* ---- Chips (array diff) ---- */
  .diff-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  .diff-chip--kept {
    background: var(--sfx-up-border-light, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .diff-chip--empty {
    opacity: 0.5;
  }
  .diff-chip--added {
    background: #dcfce7;
    color: #166534;
    font-weight: 500;
  }
  .diff-chip--removed {
    background: #fee2e2;
    color: #991b1b;
  }
  .diff-chip--removed s {
    text-decoration: line-through;
  }

  /* ---- Scalar diff ---- */
  .diff-old {
    color: #991b1b;
  }
  .diff-old s {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .diff-arrow {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 13px;
    flex-shrink: 0;
  }
  .diff-new {
    color: #166534;
    font-weight: 500;
  }
  .diff-scalar-text {
    font-size: 14px;
  }

  /* ---- Accessibility ---- */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,kt=s.iv`
  :host {
    display: block;
  }
`;var $t=Object.defineProperty,Ct=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&$t(t,i,r),r};const St=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._originalFiles=new Map,this._onKeyDown=async e=>{if("Escape"===e.key)return this._confirmVisible?(e.stopPropagation(),void this._onConfirmCancel()):void(e.composedPath().some((e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement))||await this._confirmDiscardPending()&&this._emitClose())},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,null==(e=this._confirmResolve)||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,null==(e=this._confirmResolve)||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var t,i;if("Tab"!==e.key)return;const o=null==(t=this.shadowRoot)?void 0:t.querySelector(".fm-confirm");if(!o)return;const s=o.querySelectorAll("button");if(0===s.length)return;const r=s[0],n=s[s.length-1],a=null==(i=this.shadowRoot)?void 0:i.activeElement;e.shiftKey&&a===r?(e.preventDefault(),n.focus()):!e.shiftKey&&a===n&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,s=this._activeField;!(0,o.V)(i)||s&&!gt(t,s.type)?this._pendingOp={operation:t,value:i}:this._pendingOp=null},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:s,taxonomyEntry:r}=e.detail,n=(0,o.O)(t,this.config),a=[];for(const o of this._selected){const e=this._staged.get(o),r=vt(t,null!=e&&e.has(t.key)?e.get(t.key):this._originalValue(o,t.key)??null,s,i,n);a.push([o,t.key,r])}this._setStagedBulk(a),"taxonomy-node"===t.type&&void 0!==r&&this._setStagedTaxonodeBulk(this._selected,t.key,r)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:o}=e.detail;this._setStagedTaxonodeSingle(t,i,o)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map((e=>e.id)))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(null!=this._missingRequiredFieldKey||!await this._confirmDiscardPending())return;const e=[],t=[];for(const[s,r]of this._staged){if(!this._originalFiles.get(s))continue;const i={},n={};for(const[e,t]of r){const r=this._originalValue(s,e);if(JSON.stringify(t)!==JSON.stringify(r))if((0,o.W)(e)){const i=(0,o.$)(e);if(!i)continue;const s=""===t||null==t;"position"===i?n.position=s?void 0:Number(t):n.ref=s?void 0:String(t)}else i[e]=t}Object.keys(i).length>0&&e.push({fileId:s,meta:i}),Object.keys(n).length>0&&t.push({fileId:s,product:n})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0}));const i=[];for(const[o,s]of this._stagedTaxonodes){const e=this._originalFiles.get(o);if(!e)continue;const t=e.taxonodes??{},r={};for(const[i,o]of s){const e=t[i]??null;JSON.stringify(o??null)!==JSON.stringify(e??null)&&(r[i]=o??null)}Object.keys(r).length>0&&i.push({fileId:o,taxonodes:r})}i.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:i},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),null==(e=this._confirmResolve)||e.call(this,!1),this._confirmResolve=null}_initStaged(){var e,t;const i=new Map,s=new Map,r=new Set,n=new Map,a=!0===(null==(e=this.schema)?void 0:e.productsEnabled);for(const d of this.files){const e=new Map;if(d.meta)for(const[t,i]of Object.entries(d.meta))e.set(t,i);if(a){const t=d.product;void 0!==t.ref&&e.set(o.X,t.ref),void 0!==t.position&&e.set(o.Y,t.position)}i.set(d.id,e),d.taxonodes&&s.set(d.id,new Map(Object.entries(d.taxonodes))),r.add(d.id),n.set(d.id,d)}this._staged=i,this._stagedTaxonodes=s,this._selected=r,this._originalFiles=n;const l=this.initialFieldKey;l&&null!=(t=this.schema)&&t.fieldsByKey.has(l)?this._activeFieldKey=l:this.schema&&this.schema.fields.length>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,i){const o=new Map(this._staged),s=new Map(o.get(e)??new Map);s.set(t,i),o.set(e,s),this._staged=o}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,o,s]of e){const e=new Map(t.get(i)??new Map);e.set(o,s),t.set(i,e)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const o=new Map(this._stagedTaxonodes);for(const s of e){const e=new Map(o.get(s)??new Map);e.set(t,i),o.set(s,e)}this._stagedTaxonodes=o}_setStagedTaxonodeSingle(e,t,i){const o=new Map(this._stagedTaxonodes),s=new Map(o.get(e)??new Map);s.set(t,i),o.set(e,s),this._stagedTaxonodes=o}get _activeField(){var e,t;return null==(t=null==(e=this.schema)?void 0:e.fieldsByKey)?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var e,t;const i=this._activeField;if(!i||"ultratags"!==i.type)return[];let o=[];for(const s of this._selected){const r=this._originalFiles.get(s),n=null==(e=this._staged.get(s))?void 0:e.get(i.key),a=void 0!==n?n:null==(t=null==r?void 0:r.meta)?void 0:t[i.key],l=B(a);l.length&&(o=D(o,l,!1))}return o.filter((e=>"string"!=typeof e))}_originalValue(e,t){var i,s;const r=this._originalFiles.get(e);if(r){if((0,o.W)(t)){const e=(0,o.$)(t);return e?null==(i=r.product)?void 0:i[e]:void 0}return null==(s=r.meta)?void 0:s[t]}}_refreshMissingRequired(){const e=this.schema&&this.config&&(0,o.Z)(this.schema,this.config)?(0,o._)(this._staged,this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let t=null;if(this.schema&&e.size>0)for(const o of this.schema.fields)if(e.has(o.key)){t=o.key;break}t!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=t);const i=this._missingRequiredKeys;let s=i.size!==e.size;if(!s)for(const o of e)if(!i.has(o)){s=!0;break}s&&(this._missingRequiredKeys=e)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),o={...t.meta};if(i)for(const[e,t]of i)o[e]=t;e.push({id:t.id,mime:t.type??"",meta:o})}return e}_recomputeResolvedSchemas(){if(!this.schema||0===this.dependencies.length)return this._cachedBulkResolved=new Map,void(this._cachedPerFileResolved=new Map);this._cachedBulkResolved=function(e,t,i){if(0===e.length||0===i.length)return new Map;const s=e.map((e=>(0,o.H)({mime:e.mime,meta:e.meta},t,i))),r=new Map,n=new Set;for(const o of s)for(const e of o.keys())n.add(e);for(const o of n){const t=s.map((e=>e.get(o))),i=t.every((e=>!0===(null==e?void 0:e.hidden))),n=t.some((e=>!0===(null==e?void 0:e.required)));let a,l;if(t.every((e=>Array.isArray(null==e?void 0:e.allowedValues)))){let e;for(const i of t){const t=i.allowedValues;if(e=void 0===e?[...t]:e.filter((e=>t.includes(e))),0===e.length)break}a=e}const d=t.map((e=>null==e?void 0:e.setValue)).filter((e=>void 0!==e));d.length===e.length&&k(d)&&(l=d[0]);const c=new Set;for(const e of t)if(e)for(const t of e.contributingDependencyUuids)c.add(t);const u={hidden:i,required:n,contributingDependencyUuids:[...c]};void 0!==a&&(u.allowedValues=a),void 0!==l&&(u.setValue=l),r.set(o,u)}return r}(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[e,t]of i)s[e]=t;e.set(t.id,(0,o.H)({mime:t.type??"",meta:s},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var e,t;if(!this.schema||0===this._cachedBulkResolved.size)return;const i=null==(e=this.schema.fieldsByKey)?void 0:e.get(this._activeFieldKey);if(!i||null==(t=this._cachedBulkResolved.get(i.ckey))||!t.hidden)return;const o=this.schema.fields.find((e=>{var t;return!(null!=(t=this._cachedBulkResolved.get(e.ckey))&&t.hidden)}));o&&o.key!==this._activeFieldKey&&(this._activeFieldKey=o.key)}get _filledFields(){var e;const t=new Set;for(const i of(null==(e=this.schema)?void 0:e.fields)??[])for(const[e,s]of this._staged){const r=s.get(i.key),n=this._originalValue(e,i.key);if(void 0!==r&&!(0,o.V)(r)&&JSON.stringify(r)!==JSON.stringify(n)){t.add(i.key);break}}return t}get _hasPendingValue(){return null!=this._pendingOp&&!(0,o.V)(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise((e=>{this._confirmResolve=e,this._confirmVisible=!0})):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies"))&&this._refreshMissingRequired(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden())}updated(e){var t;null==(t=super.updated)||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame((()=>{var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".fm-confirm .btn-ghost");null==t||t.focus()}))}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort(((e,t)=>{const i=e.name.localeCompare(t.name)||e.id.localeCompare(t.id);return this._sortAsc?i:-i})),e}render(){var e,t,i,r,a;if(null==(t=null==(e=this.schema)?void 0:e.fields)||!t.length)return s.dy`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${e=>e.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">${(0,o.L)("fillMultipleAssets","Fill multiple assets")}</span>
              <button class="fm-topbar-close" @click=${this._onClose} title=${(0,o.L)("close","Close")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">${(0,o.L)("noMetadataFieldsConfigured","No metadata fields configured")}</div>
          </div>
        </div>
      `;const l=this._activeField,d=this._sortedFiles,c=this._selected.size===this.files.length&&this.files.length>0,u=this._selected.size>0&&!c,p=this._missingRequiredFieldKey,h=this._cachedBulkResolved,f=this._cachedPerFileResolved,g=null==l?void 0:l.ckey,v=g?h.get(g):void 0,x=p?(null==(i=this.schema.fieldsByKey.get(p))?void 0:i.title)||p:"",m=null!=p&&this._activeFieldKey===p,b=null!=p&&!m;return s.dy`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${e=>e.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${(0,o.L)("fillMultipleAssets","Fill multiple assets")}</span>
            ${null!=(r=this.schema.regionalVariantsGroups)&&r.length?s.dy`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${(null==(a=this.config)?void 0:a.regionalFilters)??{}}
                ></sfx-regional-settings>`:s.Ld}
            <button class="fm-topbar-close" @click=${this._onClose} title=${(0,o.L)("close","Close")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFields}
              .missingRequiredKeys=${this._missingRequiredKeys}
              .config=${this.config}
              .bulkResolvedSchema=${h}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${l?s.dy`
                    <sfx-bulk-meta-op-bar
                      .field=${l}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      .allowedValues=${(null==v?void 0:v.allowedValues)??null}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `:s.Ld}

              <!-- Table header -->
              <div class="fm-table-header">
                <div class="fm-th-check">
                  <input
                    type="checkbox"
                    class="fm-checkbox"
                    .checked=${c}
                    .indeterminate=${u}
                    @change=${this._onSelectAll}
                  />
                </div>
                <div class="fm-th-name" @click=${this._onSortToggle}>
                  ${(0,o.L)("name","Name")}
                  <span class="fm-sort-arrow">${this._sortAsc?"\u2191":"\u2193"}</span>
                </div>
                <div class="fm-th-size">${(0,o.L)("size","Size")}</div>
                <div class="fm-th-field">${(null==l?void 0:l.title)??""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${l?s.dy`
                      <sfx-bulk-meta-table
                        .files=${d}
                        .field=${l}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        .perFileResolved=${f}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    `:s.Ld}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 ${(0,o.L)("back","Back")}
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>${(0,o.L)("cancel","Cancel")}</button>
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${(0,n.$)({"btn-primary":!0,"btn-primary--next":b})}
              @click=${b?this._onJumpToNextRequired:this._onSave}
              ?disabled=${m}
              title=${b?(0,o.L)("jumpToField","Jump to {{field}}",{field:x}):""}
            >
              ${b?s.dy`<span class="btn-primary-label">${(0,o.L)("nextRequired","Next required: {{field}}",{field:x})}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:(0,o.L)("save","Save")}
            </button>
          </div>

          ${this._confirmVisible?s.dy`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${e=>e.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">${(0,o.L)("discardBulkChanges","You have unapplied bulk changes. Discard them?")}</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>${(0,o.L)("cancel","Cancel")}</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>${(0,o.L)("discard","Discard")}</button>
                </div>
              </div>
            </div>
          `:s.Ld}
        </div>
      </div>
    `}};St.styles=[mt];let Lt=St;Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"schema"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"files"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"config"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"autocomplete"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"taxonomyService"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"ultratags"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"defaultLanguage"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"initialFieldKey"),Ct([(0,r.Cb)({attribute:!1})],Lt.prototype,"dependencies"),Ct([(0,r.SB)()],Lt.prototype,"_activeFieldKey"),Ct([(0,r.SB)()],Lt.prototype,"_staged"),Ct([(0,r.SB)()],Lt.prototype,"_stagedTaxonodes"),Ct([(0,r.SB)()],Lt.prototype,"_selected"),Ct([(0,r.SB)()],Lt.prototype,"_sortAsc"),Ct([(0,r.SB)()],Lt.prototype,"_pendingOp"),Ct([(0,r.SB)()],Lt.prototype,"_confirmVisible"),Ct([(0,r.SB)()],Lt.prototype,"_missingRequiredFieldKey"),Ct([(0,r.SB)()],Lt.prototype,"_missingRequiredKeys"),customElements.define("sfx-bulk-metadata-modal",Lt);const Et={text:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${s.YP`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${s.YP`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${s.YP`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":s.dy`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${s.YP`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};var It=Object.defineProperty,Tt=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&It(t,i,r),r};const At=class extends s.oi{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){var t,i;return!(null==(i=null==(t=this.bulkResolvedSchema)?void 0:t.get(e.ckey))||!i.required)||(0,o.M)(e,this.config??void 0)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var t,i;if(null==(t=super.updated)||t.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const o=null==(i=this.renderRoot)?void 0:i.querySelector(".field-item.active");null==o||o.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return s.Ld;const e=this.bulkResolvedSchema;return s.dy`
      ${this.schema.groups.map((t=>{var i;const r=this._isNarrow||!this._collapsed.has(t.uuid);if(e&&t.ckey&&null!=(i=e.get(t.ckey))&&i.hidden)return s.Ld;const a=e?t.fields.filter((i=>!(0,o.K)(i,t,e))):t.fields;return 0===a.length?s.Ld:s.dy`
          <button
            class="group-label"
            @click=${()=>this._toggleGroup(t.uuid)}
            aria-expanded=${r}
          >
            <span class="group-label-text">${t.name}</span>
            <svg class="group-chevron ${r?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${r?a.map((e=>{return s.dy`
                  <button
                    class="field-item ${this.activeFieldKey===e.key?"active":""}"
                    @click=${()=>this._onFieldClick(e.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${t=e.type,Et[t]??Et.text}</span>
                    <span class="field-name">${e.title}</span>
                    ${this.filledFields.has(e.key)?s.dy`<span class="field-dot"></span>`:s.Ld}
                    ${this._isRequired(e)?s.dy`<span
                          class=${(0,n.$)({"field-required":!0,unmet:this.missingRequiredKeys.has(e.key)})}
                          aria-hidden="true"
                        >*</span>`:s.Ld}
                  </button>
                `;var t})):s.Ld}
        `}))}
    `}};At.styles=[bt];let Ot=At;Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"schema"),Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"activeFieldKey"),Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"filledFields"),Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"missingRequiredKeys"),Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"config"),Tt([(0,r.Cb)({attribute:!1})],Ot.prototype,"bulkResolvedSchema"),Tt([(0,r.SB)()],Ot.prototype,"_collapsed"),Tt([(0,r.SB)()],Ot.prototype,"_isNarrow"),customElements.define("sfx-bulk-meta-sidebar",Ot);var Ft,Bt=Object.defineProperty,Rt=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Bt(t,i,r),r};const Dt=((Ft=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");t&&(e.composedPath().includes(t)||(this._opDropdownOpen=!1))},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var t;if("Enter"!==e.key)return;const i=null==(t=this.field)?void 0:t.type;if(!i||!Ft._ENTER_APPLY_TYPES.has(i))return;const o=e.composedPath().find((e=>e instanceof HTMLElement));if("TEXTAREA"===(null==o?void 0:o.tagName))return;e.preventDefault();const s=e.composedPath().find((e=>e instanceof HTMLInputElement));s&&void 0!==s.value&&(this._value=s.value),this._onApply()}}get _availableOps(){return this.field?(e=this.field.type,(0,o.T)(e)?[]:ht.has(e)?[{key:"SET",label:(0,o.L)("bulkOpSet","Set")},{key:"ADD",label:(0,o.L)("bulkOpAddTo","Add to")},{key:"DELETE",label:(0,o.L)("bulkOpRemoveFrom","Remove from")}]:ft.has(e)?[{key:"SET",label:(0,o.L)("bulkOpSet","Set")},{key:"ADD",label:(0,o.L)("bulkOpAppend","Append")},{key:"DELETE",label:(0,o.L)("bulkOpRemove","Remove")}]:[{key:"SET",label:(0,o.L)("bulkOpSet","Set")},{key:"DELETE",label:(0,o.L)("bulkOpClear","Clear")}]):[];var e}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;default:return""}}get _effectiveValue(){var e;return this._value??Ft._emptyValueForType(null==(e=this.field)?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:"taxonomy-node"===(null==(e=this.field)?void 0:e.type)?"DELETE"===this._operation?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,"DELETE"===this._operation&&!gt(this._operation,null==(t=this.field)?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return 0===this.selectedCount||("DELETE"===this._operation?(ht.has(null==(e=this.field)?void 0:e.type)||!!ft.has(null==(t=this.field)?void 0:t.type))&&(0,o.V)(this._value):(0,o.V)(this._value))}render(){var e;if(!this.field)return s.Ld;if((0,o.Q)(this.field)){const e=We();return s.dy`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${e}">
            ${Xe}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${e}</span>
            </div>
          </div>
        </div>
      `}const t=this._availableOps,i=t.length>1,r=t.find((e=>e.key===this._operation));return s.dy`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">${(0,o.L)("operation","Operation")}</span>
          ${i?s.dy`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(null==r?void 0:r.label)??(0,o.L)("bulkOpSet","Set")}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen?s.dy`
                        <div class="op-menu">
                          ${t.map((e=>s.dy`
                              <button
                                class="op-option ${e.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(e.key)}
                              >
                                ${e.label}
                              </button>
                            `))}
                        </div>
                      `:s.Ld}
                </div>
              `:s.dy`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(null==r?void 0:r.label)??(0,o.L)("bulkOpOverwrite","Overwrite")}</span>
                </div>
              `}
        </div>

        ${gt(this._operation,this.field.type)?s.dy`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @taxonomy-entry-change=${this._onTaxonomyEntryChange}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                    .taxonomyService=${this.taxonomyService}
                    .taxonomyEntry=${this._pendingTaxonode}
                    .ultratags=${this.ultratags}
                    .language=${null==(e=this.config)?void 0:e.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${"ultratags"===this.field.type&&"DELETE"===this._operation?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:s.Ld}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}}).styles=[yt],Ft._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),Ft);Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"field"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"autocomplete"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"taxonomyService"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"ultratags"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"defaultLanguage"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"ultratagsPresentOnSelection"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"config"),Rt([(0,r.Cb)({type:Number})],Dt.prototype,"selectedCount"),Rt([(0,r.Cb)({attribute:!1})],Dt.prototype,"allowedValues"),Rt([(0,r.SB)()],Dt.prototype,"_operation"),Rt([(0,r.SB)()],Dt.prototype,"_value"),Rt([(0,r.SB)()],Dt.prototype,"_pendingTaxonode"),Rt([(0,r.SB)()],Dt.prototype,"_opDropdownOpen");let zt=Dt;customElements.define("sfx-bulk-meta-op-bar",zt);var qt=Object.defineProperty,Pt=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&qt(t,i,r),r};const jt=class extends s.oi{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map}_getEffectiveValue(e){const t=this.staged.get(e.id);return null!=t&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}_getTaxonodeEntry(e){var t;const i=this.stagedTaxonodes.get(e.id);return null!=i&&i.has(this.field.key)?i.get(this.field.key)??null:(null==(t=e.taxonodes)?void 0:t[this.field.key])??null}render(){return s.dy`
      ${this.files.map((e=>{const t=this.perFileResolved.get(e.id),i=null==t?void 0:t.get(this.field.ckey),o=(null==i?void 0:i.allowedValues)??null;return s.dy`
          <sfx-bulk-meta-row
            .file=${e}
            .field=${this.field}
            .value=${this._getEffectiveValue(e)}
            .taxonomyEntry=${this._getTaxonodeEntry(e)}
            .selected=${this.selected.has(e.id)}
            .pendingOp=${this.pendingOp}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
            .taxonomyService=${this.taxonomyService}
            .ultratags=${this.ultratags}
            .defaultLanguage=${this.defaultLanguage}
            .allowedValues=${o}
          ></sfx-bulk-meta-row>
        `}))}
    `}};jt.styles=[kt];let Mt=jt;Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"files"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"field"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"staged"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"stagedTaxonodes"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"selected"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"pendingOp"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"config"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"autocomplete"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"taxonomyService"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"ultratags"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"defaultLanguage"),Pt([(0,r.Cb)({attribute:!1})],Mt.prototype,"perFileResolved"),customElements.define("sfx-bulk-meta-table",Mt);var Nt=Object.defineProperty,Vt=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Nt(t,i,r),r};const Kt=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this._error=null,this._onFieldBlur=e=>{e.stopPropagation();const{value:t}=e.detail,i=(0,o.N)(this.field,t,this.config??void 0);if(i)return void(this._error=i);this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},r=q(this.field,t,s,(0,o.O)(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return e&&this.field?vt(this.field,this.value,e.value,e.operation,(0,o.O)(this.field,this.config)):this.value}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var e,t;const i=this.file;return s.dy`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${i.previewUrl?s.dy`<img class="row-thumb" src=${i.previewUrl} alt="" />`:s.dy`<img class="row-thumb row-thumb-fallback"
              src=${(0,o.a0)(this._getExtension(i.name))}
              alt=${(0,o.L)("extFile","{{ext}} file",{ext:this._getExtension(i.name)})}
              @error=${e=>{const t=e.target,i=(0,o.a1)();!t.dataset.fallback&&t.src!==i&&(t.dataset.fallback="1",t.src=i)}}
            />`}

        <div class="row-name" title=${i.name}>${i.name}</div>
        <div class="row-size">${i.size?(0,o.a2)(i.size):"\u2014"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.pendingOp&&this.selected?s.dy`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${(null==(e=this.file.taxonodes)?void 0:e[this.field.key])??null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:s.dy`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${z(this.field,this.value,(0,o.O)(this.field,this.config))}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                  .ultratags=${this.ultratags}
                  .language=${null==(t=this.config)?void 0:t.language}
                  .defaultLanguage=${this.defaultLanguage}
                  .allowedValues=${this.allowedValues}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?s.dy`<div class="row-error" role="alert">${this._error}</div>`:s.Ld}`}
        </div>
      </div>
    `}};Kt.styles=[_t];let Ut=Kt;Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"file"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"field"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"value"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"taxonomyEntry"),Vt([(0,r.Cb)({type:Boolean})],Ut.prototype,"selected"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"pendingOp"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"config"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"autocomplete"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"taxonomyService"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"ultratags"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"defaultLanguage"),Vt([(0,r.Cb)({attribute:!1})],Ut.prototype,"allowedValues"),Vt([(0,r.SB)()],Ut.prototype,"_error"),customElements.define("sfx-bulk-meta-row",Ut);const Ht=new Set(["multi-select","tags","ultratags"]);function Yt(e,t,i){return!t.regional_variants_group_uuid||null==e||"object"!=typeof e||Array.isArray(e)?e:e[i??"en"]}function Gt(e){return Array.isArray(e)?e:[]}function Jt(e){return!!(null==e||""===e||Array.isArray(e)&&0===e.length)||"object"==typeof e&&!Array.isArray(e)&&!Object.values(e).some((e=>null!=e&&""!==e))}function Qt(e,t){var i;const o=null==(i=e.possible_values)?void 0:i.find((e=>e.internal_unique_value===t||e.api_value===t));return(null==o?void 0:o.label)??String(t)}function Wt(e,t){if(null==t||""===t)return"";switch(e.type){case"boolean":return!0===t?"True":!1===t?"False":"None";case"date":if("string"!=typeof t||0===t.length)return"";try{return new Date(t+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return t}case"numeric":{const e=Number(t);return Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:0}):String(t)}case"decimal2":{const e=Number(t);return Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:2}):String(t)}case"select-one":return Qt(e,String(t));case"geopoint":if("object"==typeof t&&null!==t&&!Array.isArray(t)){const e=t;return e.latitude||e.longitude?`(${e.latitude??""}, ${e.longitude??""})`:""}if("string"==typeof t){const e=t.match(/^\((.+),(.+)\)$/);if(e)return`(${e[1].trim()}, ${e[2].trim()})`}return String(t);default:return String(t)}}function Xt(e,t){const i=e.map((e=>"string"==typeof e?e:String(e))),o=t.map((e=>"string"==typeof e?e:String(e))),s=new Set(i),r=new Set(o),n=[];for(const a of o)n.push({label:a,state:s.has(a)?"kept":"added"});for(const a of i)r.has(a)||n.push({label:a,state:"removed"});return n}function Zt(e,t,i){const o=B(e),s=B(t),r=i||"en",n=e=>e.sid||e.slug||e.uuid||"",a=e=>O({i18n:e.i18n,slug:e.slug||""},r,r).value||e.slug||e.sid||"",l=new Set(o.map(n).filter(Boolean)),d=new Set(s.map(n).filter(Boolean)),c=[];for(const u of s){const e=n(u);c.push({label:a(u),state:l.has(e)?"kept":"added"})}for(const u of o){const e=n(u);d.has(e)||c.push({label:a(u),state:"removed"})}return c}function ei(e,t,i){const o=new Set(e.map((e=>JSON.stringify(e)))),s=new Set(t.map((e=>JSON.stringify(e)))),r=[];for(const n of t){const e=JSON.stringify(n),t="string"==typeof n?Qt(i,n):String(n);r.push({label:t,state:o.has(e)?"kept":"added"})}for(const n of e){const e=JSON.stringify(n);if(!s.has(e)){const e="string"==typeof n?Qt(i,n):String(n);r.push({label:e,state:"removed"})}}return r}var ti=Object.defineProperty,ii=(e,t,i,o)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&ti(t,i,r),r};const oi=class extends s.oi{constructor(){super(...arguments),this._i18nController=new o.I(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:(0,o.L)("added","Added"),removed:(0,o.L)("removed","Removed"),kept:(0,o.L)("kept","Kept")};return s.dy`
      <div class="diff-wrap" aria-label=${(0,o.L)("bulkOperationPreview","Bulk operation preview")}>
        ${0===e.items.length?s.dy`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`:e.items.map((e=>s.dy`
                <span
                  class="diff-chip diff-chip--${e.state}"
                  aria-label="${t[e.state]??e.state}: ${e.label}"
                >
                  ${"removed"===e.state?s.dy`<s>${e.label}</s>`:e.label}
                </span>
              `))}
      </div>
    `}_renderScalarDiff(e){const t=(0,o.L)("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?(0,o.L)("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?(0,o.L)("emptyValue","empty"):e.newDisplay});return s.dy`
      <div class="diff-wrap diff-scalar-text" aria-label=${(0,o.L)("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${t}</span>
        ${e.newEmpty?s.Ld:s.dy`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var e,t;const i=(null==(e=this.newTaxonomyEntry)?void 0:e.path)??"",r=(null==(t=this.oldTaxonomyEntry)?void 0:t.path)??"",n=!r,a=!i,l=(0,o.L)("willChangeFromTo","Will change from {{from}} to {{to}}",{from:n?(0,o.L)("emptyValue","empty"):r,to:a?(0,o.L)("emptyValue","empty"):i});return s.dy`
      <div class="diff-wrap diff-scalar-text" aria-label=${(0,o.L)("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${l}</span>
        ${a?s.Ld:s.dy`<span class="diff-new" aria-hidden="true">${i}</span>`}
      </div>
    `}render(){if(!this.field)return s.Ld;if("taxonomy-node"===this.field.type)return this._renderTaxonomyScalar();const e=function(e,t,i,s){const r=(0,o.O)(e,s),n=null==s?void 0:s.language,a=Yt(t,e,r),l=Yt(i,e,r);if(Ht.has(e.type)){if("ultratags"===e.type)return{kind:"array",items:Zt(t,i,n)};const o=Gt(a),s=Gt(l);return"tags"===e.type?{kind:"array",items:Xt(o,s)}:{kind:"array",items:ei(o,s,e)}}return{kind:"scalar",oldDisplay:Wt(e,a),newDisplay:Wt(e,l),oldEmpty:Jt(a),newEmpty:Jt(l)}}(this.field,this.oldValue,this.newValue,this.config);return"array"===e.kind?this._renderArrayDiff(e):this._renderScalarDiff(e)}};oi.styles=[wt];let si=oi;ii([(0,r.Cb)({attribute:!1})],si.prototype,"field"),ii([(0,r.Cb)({attribute:!1})],si.prototype,"oldValue"),ii([(0,r.Cb)({attribute:!1})],si.prototype,"newValue"),ii([(0,r.Cb)({attribute:!1})],si.prototype,"oldTaxonomyEntry"),ii([(0,r.Cb)({attribute:!1})],si.prototype,"newTaxonomyEntry"),ii([(0,r.Cb)({attribute:!1})],si.prototype,"config"),customElements.define("sfx-bulk-meta-diff-view",si)}}]);
//# sourceMappingURL=288.99db5c69.chunk.js.map