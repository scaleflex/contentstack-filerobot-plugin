"use strict";(self.webpackChunkmarketplace_app_boilerplate=self.webpackChunkmarketplace_app_boilerplate||[]).push([[287],{3287:(e,t,r)=>{r.d(t,{SfxSearchProviderBrowser:()=>l});var i=r(6386),s=r(1272),o=r(5648),a=Object.defineProperty,n=(e,t,r,i)=>{for(var s,o=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(o=s(t,r,o)||o);return o&&a(t,r,o),o};const d=class extends i.oi{constructor(){super(...arguments),this.t=o.w,this.provider="unsplash",this.companionUrl="",this.transformThumbnail=e=>e,this.multi=!0,this.maxSelect=null,this._loading=!1,this._loadingMore=!1,this._items=[],this._selectedIds=new Set,this._error=null,this._searchQuery="",this._nextPageQuery=null,this._searched=!1,this._onResultsScroll=e=>{if(!this._nextPageQuery||this._loadingMore)return;const t=e.target;t.scrollHeight-t.scrollTop-t.clientHeight<200&&this._onLoadMore()},this._onSearchInput=e=>{this._searchQuery=e.target.value},this._onSearchKeydown=e=>{"Enter"===e.key&&this._doSearch()},this._onAddSelected=()=>{const e=this._items.filter((e=>this._selectedIds.has(e.id))).map((e=>({companionUrl:this.companionUrl,provider:this.provider,token:"",requestPath:e.requestPath,fileId:e.id,name:e.name||e.id,mimeType:e.mimeType,size:e.size,thumbnail:e.thumbnail})));this.dispatchEvent(new CustomEvent("connector-files-selected",{detail:{files:e},bubbles:!0,composed:!0}))},this._onClose=()=>{this.dispatchEvent(new CustomEvent("connector-close",{bubbles:!0,composed:!0}))}}get _providerLabel(){var e;return(null==(e=(0,o.o)([this.provider])[0])?void 0:e.label)??this.provider}async _doSearch(){const e=this._searchQuery.trim();if(e){this._loading=!0,this._error=null,this._items=[],this._selectedIds=new Set,this._nextPageQuery=null,this._searched=!0;try{const t=await(0,o.x)(this.companionUrl,this.provider,e),r=new Set;this._items=t.items.filter((e=>!r.has(e.id)&&(r.add(e.id),!0))),this._nextPageQuery=t.nextPageQuery}catch(t){this._error=t instanceof Error?t.message:this.t("searchFailed","Search failed")}finally{this._loading=!1}}}async _onLoadMore(){if(this._nextPageQuery&&!this._loadingMore){this._loadingMore=!0;try{const e=await(0,o.x)(this.companionUrl,this.provider,this._searchQuery.trim(),this._nextPageQuery),t=new Set(this._items.map((e=>e.id))),r=e.items.filter((e=>!t.has(e.id)));this._items=[...this._items,...r],this._nextPageQuery=e.nextPageQuery}catch{}finally{this._loadingMore=!1}}}_toggleSelect(e){if(!this.multi)return void(this._selectedIds=this._selectedIds.has(e.id)?new Set:new Set([e.id]));const t=null!==this.maxSelect&&this._selectedIds.size>=this.maxSelect,r=new Set(this._selectedIds);r.has(e.id)?r.delete(e.id):t||r.add(e.id),this._selectedIds=r}render(){return i.dy`
      ${this._renderHeader()}
      ${this._renderSearchBar()}
      ${this._loading?this._renderLoading():this._error?this._renderError():this._renderResults()}
    `}_renderHeader(){return i.dy`
      <div class="browser-header">
        <button
          class="back-btn"
          @click=${this._onClose}
          title=${this.t("close","Close")}
          aria-label=${this.t("close","Close")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="browser-title">${this._providerLabel}</span>
      </div>
    `}_renderSearchBar(){return i.dy`
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder=${this.t("searchForImages","Search for images")}
          .value=${this._searchQuery}
          @input=${this._onSearchInput}
          @keydown=${this._onSearchKeydown}
        />
        <button
          class="search-btn"
          ?disabled=${!this._searchQuery.trim()||this._loading}
          @click=${()=>this._doSearch()}
        >
          ${this.t("search","Search")}
        </button>
      </div>
    `}_renderLoading(){return i.dy`
      <div class="loading">
        <div class="spinner"></div>
      </div>
    `}_renderError(){return i.dy`
      <div class="error-view">
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${()=>this._doSearch()}>${this.t("retry","Retry")}</button>
      </div>
    `}_renderResults(){const e=this._selectedIds.size;return this._searched?0===this._items.length?i.dy`
        <div class="empty-state">
          <div class="empty-text">${this.t("noSearchResults","No results found")}</div>
        </div>
      `:i.dy`
      <div class="results" @scroll=${this._onResultsScroll}>
        <div class="results-grid">
          ${(()=>{const e=null!==this.maxSelect&&this._selectedIds.size>=this.maxSelect;return this._items.map((t=>{var r;const s=this._selectedIds.has(t.id);return i.dy`
              <div
                class="result-item ${s?"selected":""} ${!s&&e?"disabled":""}"
                @click=${()=>this._toggleSelect(t)}
              >
                ${t.thumbnail?i.dy`<img src=${this.transformThumbnail(t.thumbnail)} alt=${t.name} loading="lazy" referrerpolicy="no-referrer" />`:i.Ld}
                <div class="check">
                  ${s?i.dy`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>`:i.Ld}
                </div>
                ${null!=(r=t.author)&&r.name?i.dy`<div class="author">${t.author.name}</div>`:i.Ld}
              </div>
            `}))})()}
        </div>
        ${this._loadingMore?i.dy`<div class="loading loading-more"><div class="spinner"></div></div>`:i.Ld}
      </div>

      ${this._items.length>0?i.dy`
            <div class="browser-footer">
              <span class="selected-count">
                ${e>0?this.t("imagesSelected",{count:e,defaultValue_one:"{{count}} image selected",defaultValue_other:"{{count}} images selected"}):this.t("selectImagesToAdd","Select images to add")}
              </span>
              <button
                class="add-btn"
                ?disabled=${0===e}
                @click=${this._onAddSelected}
              >
                ${this.t("addImages",{count:e>0?e:0,defaultValue_one:"Add {{count}} image",defaultValue_other:"Add {{count}} images"})}
              </button>
            </div>
          `:i.Ld}
    `:i.dy`
        <div class="empty-state">
          <div class="empty-text">${this.t("enterSearchHint","Enter text to search for images")}</div>
        </div>
      `}};d.styles=i.iv`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      min-height: 0;
      height: 100%;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
    }

    .browser-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .back-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: none;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .back-btn:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 18px;
      height: 18px;
    }

    .browser-title {
      font-size: 14px;
      font-weight: 600;
      flex: 1;
    }

    /* --- Search bar --- */
    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .search-input {
      flex: 1;
      height: 36px;
      padding: 0 12px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      border-radius: 9px;
      font-family: inherit;
      font-size: 13px;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-bg, #fff);
      outline: none;
      transition: border-color 0.15s;
    }

    .search-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .search-input::placeholder {
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .search-btn {
      height: 36px;
      padding: 0 16px;
      border: none;
      border-radius: 9px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      flex-shrink: 0;
    }

    .search-btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .search-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* --- Results grid --- */
    .results {
      flex: 1;
      overflow-y: auto;
      padding: 8px 12px;
      min-height: 0;
    }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 8px;
    }

    .result-item {
      position: relative;
      aspect-ratio: 1;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.15s;
    }

    .result-item.selected {
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .result-item.disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    }

    .result-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .result-item .check {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 22px;
      height: 22px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .result-item:hover .check,
    .result-item.selected .check {
      opacity: 1;
    }

    .result-item.selected .check {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .check svg {
      width: 14px;
      height: 14px;
    }

    .result-item .author {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 4px 8px;
      background: linear-gradient(transparent, rgba(0,0,0,0.5));
      font-size: 10px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .result-item:hover .author {
      opacity: 1;
    }

    /* --- Footer --- */
    .browser-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .selected-count {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      font-weight: 500;
    }

    .add-btn {
      height: 36px;
      padding: 0 20px;
      border: none;
      border-radius: 9px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    }

    .add-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    .add-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* --- States --- */
    .loading, .error-view, .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 40px 24px;
      text-align: center;
    }

    .loading.loading-more {
      flex: none;
      padding: 16px 0;
    }

    .spinner {
      width: 28px;
      height: 28px;
      border: 3px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .error-text {
      font-size: 14px;
      color: var(--sfx-up-error, #dc2626);
    }

    .retry-btn {
      height: 34px;
      padding: 0 16px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
    }

    .retry-btn:hover {
      background: var(--sfx-up-border-light, #f8faff);
      border-color: var(--sfx-up-border, #d1dff0);
    }

    .empty-text {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .load-more-btn {
      display: block;
      margin: 12px auto;
      padding: 8px 20px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      transition: all 0.15s;
    }

    .load-more-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation: none; }
    }
  `;let l=d;n([(0,s.Cb)({attribute:!1})],l.prototype,"t"),n([(0,s.Cb)({type:String})],l.prototype,"provider"),n([(0,s.Cb)({type:String})],l.prototype,"companionUrl"),n([(0,s.Cb)({attribute:!1})],l.prototype,"transformThumbnail"),n([(0,s.Cb)({type:Boolean})],l.prototype,"multi"),n([(0,s.Cb)({type:Number})],l.prototype,"maxSelect"),n([(0,s.SB)()],l.prototype,"_loading"),n([(0,s.SB)()],l.prototype,"_loadingMore"),n([(0,s.SB)()],l.prototype,"_items"),n([(0,s.SB)()],l.prototype,"_selectedIds"),n([(0,s.SB)()],l.prototype,"_error"),n([(0,s.SB)()],l.prototype,"_searchQuery"),n([(0,s.SB)()],l.prototype,"_nextPageQuery"),n([(0,s.SB)()],l.prototype,"_searched")}}]);
//# sourceMappingURL=287.577af041.chunk.js.map