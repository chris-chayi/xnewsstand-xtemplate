"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3289],{3289:(i,o,e)=>{e.r(o),e.d(o,{BrowserWeb:()=>r,Browser:()=>_});var t=e(8239),l=e(1278);class r extends l.Uw{constructor(){super(),this._lastWindow=null}open(s){var n=this;return(0,t.Z)(function*(){n._lastWindow=window.open(s.url,s.windowName||"_blank")})()}close(){var s=this;return(0,t.Z)(function*(){return new Promise((n,a)=>{null!=s._lastWindow?(s._lastWindow.close(),s._lastWindow=null,n()):a("No active window to close!")})})()}}const _=new r}}]);