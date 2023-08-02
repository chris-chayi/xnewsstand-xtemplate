"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[439],{439:(w,u,c)=>{c.r(u),c.d(u,{super_tab:()=>p,super_tabs:()=>m,super_tabs_container:()=>x});var o=c(8239),s=c(3320),a=c(7638);let p=(()=>{class h{constructor(t){(0,s.r)(this,t)}componentDidLoad(){this.checkIonContent()}componentDidUpdate(){this.checkIonContent()}checkIonContent(){if("boolean"!=typeof this.noScroll){const t=this.el.querySelector("ion-content");t&&t.parentElement===this.el&&(this.noScroll=!0)}}getRootScrollableEl(){var t=this;return(0,o.Z)(function*(){if(!t.noScroll&&t.el.scrollHeight>t.el.clientHeight)return t.el;const e=t.el.querySelector("ion-content");return e?e.getScrollElement():t.noScroll?null:t.el})()}render(){return(0,s.h)("slot",null)}get el(){return(0,s.g)(this)}}return h.style=":host{height:var(--super-tab-height, 100%);position:relative;display:block;overflow-x:hidden;overflow-y:auto;contain:size style;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width, 100vw);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host[noScroll]{overflow-y:hidden}ion-nav,ion-content{height:100%;max-height:100%;position:absolute}ion-nav>.ion-page,ion-content>.ion-page{position:absolute}",h})(),m=(()=>{class h{constructor(t){(0,s.r)(this,t),this.activeTabIndex=0,this._config=a.D,this.initAttempts=0,this.initPromise=new Promise(e=>{this.initPromiseResolve=e}),this.tabChange=(0,s.c)(this,"tabChange",7)}setConfig(t){var e=this;return(0,o.Z)(function*(){e._config=Object.assign(Object.assign({},a.D),t)})()}propagateConfig(){this.container&&(this.container.config=this._config),this.toolbar&&(this.toolbar.config=this._config)}selectTab(t,e=!0,i=!0){var n=this;return(0,o.Z)(function*(){n.debug("selectTab",t,e),yield n.initPromise;const r=n.activeTabIndex;n.container&&(yield n.container.setActiveTabIndex(t,!0,e)),n.toolbar&&(yield n.toolbar.setActiveTab(t,!0,e)),i&&n.emitTabChangeEvent(t,r),n.activeTabIndex=r})()}onConfigChange(t){var e=this;return(0,o.Z)(function*(){yield e.setConfig(t)})()}onWindowResize(){this.debug("onWindowResize"),this.toolbar&&this.toolbar.setSelectedTab(this.activeTabIndex),this.container.reindexTabs()}componentWillLoad(){var t=this;return(0,o.Z)(function*(){t.config&&(yield t.setConfig(t.config))})()}componentDidLoad(){this.debug("componentDidLoad"),this.indexChildren(),this.container&&this.container.setActiveTabIndex(this.activeTabIndex,!0,!1),this.toolbar&&this.toolbar.setActiveTab(this.activeTabIndex,!0,!1),this.el.shadowRoot.addEventListener("slotchange",this.onSlotchange.bind(this)),requestAnimationFrame(()=>{this.initComponent()})}initComponent(){if(!this.container){if(++this.initAttempts<=1e3)return void requestAnimationFrame(()=>{this.initComponent()});this.debug("container still doesn't exists after 1000 frames")}this.container&&this.container.setActiveTabIndex(this.activeTabIndex,!0,!1),this.toolbar&&this.toolbar.setActiveTab(this.activeTabIndex,!0),this.propagateConfig(),this.setupEventListeners(),this.initPromiseResolve()}setupEventListeners(){var t=this;return(0,o.Z)(function*(){t.container?(yield t.container.componentOnReady(),t.el.addEventListener("selectedTabIndexChange",t.onContainerSelectedTabChange.bind(t)),t.el.addEventListener("activeTabIndexChange",t.onContainerActiveTabChange.bind(t))):t.debug("setupEventListeners: container does not exist"),t.toolbar?(yield t.toolbar.componentOnReady(),t.el.addEventListener("buttonClick",t.onToolbarButtonClick.bind(t))):t.debug("setupEventListeners: toolbar does not exist")})()}onContainerSelectedTabChange(t){var e=this;return(0,o.Z)(function*(){e.debug("onContainerSelectedTabChange called with: ",t),e.toolbar&&(yield e.toolbar.setSelectedTab(t.detail))})()}emitTabChangeEvent(t,e){"number"!=typeof t||t<0||(("number"!=typeof e||e<0)&&(e=this.activeTabIndex),this.tabChange.emit({changed:t!==e,index:t}))}onContainerActiveTabChange(t){this.debug("onContainerActiveTabChange",t);const e=t.detail;this.emitTabChangeEvent(e),this.activeTabIndex=e,this.toolbar&&this.toolbar.setActiveTab(e,!0,!0)}onToolbarButtonClick(t){this.debug("onToolbarButtonClick",t);const{index:e}=t.detail;this.container&&this.container.setActiveTabIndex(e,!0,!0),this.emitTabChangeEvent(e),this.activeTabIndex=e}indexChildren(){this.debug("indexChildren");const t=this.el.querySelector("super-tabs-container"),e=this.el.querySelector("super-tabs-toolbar");t&&this.container!==t&&(this.container=t),e&&this.toolbar!==e&&(this.toolbar=e),this.propagateConfig()}onSlotchange(){var t=this;return(0,o.Z)(function*(){t.indexChildren(),t.selectTab(t.activeTabIndex,!0,!1)})()}debug(...t){(0,a.d)(this._config,"tabs",t)}render(){return(0,s.h)(s.H,null,(0,s.h)("slot",{name:"top"}),(0,s.h)("slot",null),(0,s.h)("slot",{name:"bottom"}))}get el(){return(0,s.g)(this)}static get watchers(){return{config:["onConfigChange"]}}}return h.style=":host{height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased;-ms-touch-action:none;touch-action:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}",h})(),x=(()=>{class h{constructor(t){(0,s.r)(this,t),this.swipeEnabled=!0,this.autoScrollTop=!1,this.tabs=[],this.isDragging=!1,this.leftThreshold=0,this.rightThreshold=0,this.scrollWidth=0,this.width=0,this.activeTabIndexChange=(0,s.c)(this,"activeTabIndexChange",7),this.selectedTabIndexChange=(0,s.c)(this,"selectedTabIndexChange",7),this.queue=(0,s.d)(this,"queue")}componentDidLoad(){var t=this;return(0,o.Z)(function*(){t.debug("componentDidLoad"),t.updateWidth(),yield t.indexTabs(),t.slot=t.el.shadowRoot.querySelector("slot"),t.slot.addEventListener("slotchange",t.onSlotChange.bind(t))})()}onSlotChange(){var t=this;return(0,o.Z)(function*(){t.debug("onSlotChange",t.tabs.length),t.updateWidth(),t.indexTabs()})()}componentDidRender(){var t=this;return(0,o.Z)(function*(){t.updateWidth()})()}reindexTabs(){var t=this;return(0,o.Z)(function*(){t.updateWidth(),yield t.indexTabs()})()}moveContainerByIndex(t,e){const i=this.indexToPosition(t);return 0===i&&t>0?Promise.resolve():this.moveContainer(i,e)}moveContainer(t,e){return e?(0,a.s)(this.el,t,0,this.config.nativeSmoothScroll,this.config.transitionDuration):this.el.scroll(t,0),Promise.resolve()}setActiveTabIndex(t,e=!0,i=!0){var n=this;return(0,o.Z)(function*(){if(n.debug("setActiveTabIndex",t),n._activeTabIndex===t){if(!n.autoScrollTop)return;n.scrollToTop()}e&&n.moveContainerByIndex(t,i),n.updateActiveTabIndex(t,!1)})()}scrollToTop(){var t=this;return(0,o.Z)(function*(){if(void 0===t._activeTabIndex||void 0===t.tabs)return void t.debug("scrollToTop","activeTabIndex or tabs was undefined",t._activeTabIndex,t.tabs);const e=t.tabs[t._activeTabIndex];if(!e)return void t.debug("Current active tab was undefined in scrollToTop");const i=yield e.getRootScrollableEl();i?(0,a.s)(i,0,0,t.config.nativeSmoothScroll,t.config.transitionDuration):t.debug("scrollToTop","couldnt find a scrollable element")})()}updateActiveTabIndex(t,e=!0){this.debug("updateActiveTabIndex",t,e,this._activeTabIndex),this._activeTabIndex=t,e&&this.activeTabIndexChange.emit(this._activeTabIndex)}updateSelectedTabIndex(t){t!==this._selectedTabIndex&&(this._selectedTabIndex=t,this.selectedTabIndexChange.emit(this._selectedTabIndex))}onTouchStart(t){var e=this;return(0,o.Z)(function*(){if(!e.swipeEnabled)return;if(e.config.avoidElements){let r=!1,l=t.target;if(l)do{if("function"==typeof l.getAttribute&&l.getAttribute("avoid-super-tabs"))return;l=l.parentElement}while(l&&!r)}const i=(0,a.p)(t);e.updateWidth(),i.x<e.leftThreshold||i.x>e.width-e.rightThreshold||(e.config.shortSwipeDuration>0&&(e.initialTimestamp=(0,a.a)()),e.initialCoords=i,e.lastPosX=i.x)})()}onClick(t){var e=this;return(0,o.Z)(function*(){e.isDragging&&(t.stopImmediatePropagation(),t.preventDefault())})()}onTouchMove(t){var e=this;return(0,o.Z)(function*(){if(!e.swipeEnabled||!e.initialCoords||"number"!=typeof e.lastPosX)return;const i=(0,a.p)(t);if(!e.isDragging){if(!(0,a.c)(i,e.initialCoords,e.config))return void(Math.abs(i.y-e.initialCoords.y)>100&&(e.initialCoords=void 0,e.lastPosX=void 0));e.isDragging=!0}e.config.allowElementScroll||t.stopImmediatePropagation();const n=e.lastPosX-i.x;if(0===n)return;const r=Math.max(0,Math.min(e.scrollWidth-e.width,e.el.scrollLeft+n));if(Math.floor(r)===Math.floor(e.el.scrollLeft))return;const l=Math.round(100*e.positionToIndex(r))/100;e.updateSelectedTabIndex(l),e.lastPosX=i.x,e.el.scroll(r,0)})()}onTouchEnd(t){var e=this;return(0,o.Z)(function*(){if(!e.swipeEnabled||!e.isDragging)return;const i=(0,a.p)(t),n=(0,a.a)()-e.initialTimestamp,r=e.config.shortSwipeDuration>0&&n<=e.config.shortSwipeDuration,l=i.x-e.initialCoords.x;let d=e.calcSelectedTab();const C=Math.round(d);r&&C===e._activeTabIndex&&(d+=l>0?-1:1),d=e.normalizeSelectedTab(d),e.updateActiveTabIndex(d),e.moveContainerByIndex(d,!0),e.isDragging=!1,e.initialCoords=void 0,e.lastPosX=void 0})()}updateWidth(){const t=this.el.getBoundingClientRect();this.width=Math.round(1e4*t.width)/1e4}indexTabs(){var t=this;return(0,o.Z)(function*(){if(0===t.width)return void requestAnimationFrame(()=>{t.updateWidth(),t.indexTabs()});const e=Array.from(t.el.querySelectorAll("super-tab"));if(t.scrollWidth=t.width*e.length,t.debug("indexTab",t.scrollWidth,t.width),yield Promise.all(e.map(i=>i.componentOnReady())),t.tabs=e,t.ready&&"number"==typeof t._activeTabIndex&&t.moveContainerByIndex(t._activeTabIndex,!0),t.config)switch(t.config.sideMenu){case"both":t.rightThreshold=t.leftThreshold=t.config.sideMenuThreshold||0;break;case"left":t.leftThreshold=t.config.sideMenuThreshold||0;break;case"right":t.rightThreshold=t.config.sideMenuThreshold||0}void 0!==t._activeTabIndex&&t.moveContainerByIndex(t._activeTabIndex,!1).then(()=>{t.ready=!0})})()}calcSelectedTab(){const t=Math.max(0,Math.min(this.scrollWidth-this.width,this.el.scrollLeft));return this.positionToIndex(t)}positionToIndex(t){return t/this.width}indexToPosition(t){return Math.round(t*this.width*1e4)/1e4}normalizeSelectedTab(t){const e=Math.max(0,Math.min(this.scrollWidth-this.width,this.indexToPosition(t)));return Math.round(e/this.width)}debug(...t){(0,a.d)(this.config,"container",t)}render(){return(0,s.h)("slot",null)}get el(){return(0,s.g)(this)}}return h.style=":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--super-tab-width, 100vw);height:var(--super-tab-height, 100%);overflow:hidden;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-ms-touch-action:pan-y;touch-action:pan-y;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}",h})()}}]);