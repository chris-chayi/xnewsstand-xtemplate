"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[481],{481:(_,t,e)=>{e.r(t),e.d(t,{ShareWeb:()=>n});var r=e(8239),s=e(1278);class n extends s.Uw{share(a){var i=this;return(0,r.Z)(function*(){if("undefined"==typeof navigator||!navigator.share)throw i.unavailable("Share API not available in this browser");return yield navigator.share({title:a.title,text:a.text,url:a.url}),{}})()}}}}]);