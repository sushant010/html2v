(self.webpackChunkekalakaar=self.webpackChunkekalakaar||[]).push([[125],{1801:function(e,n,t){var r,o=t(2122).default,a=t(6690).default,u=t(9728).default,l=t(6115).default,i=t(1655).default,c=t(6389).default,s=t(4704).default,f=Object.create,p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,m=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,h=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var o,a=s(y(n));try{var u=function(){var a=o.value;v.call(e,a)||a===t||p(e,a,{get:function(){return n[a]},enumerable:!(r=d(n,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)u()}catch(l){a.e(l)}finally{a.f()}}return e},b=function(e,n,t){return function(e,n,t){n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},k={};!function(e,n){for(var t in n)p(e,t,{get:n[t],enumerable:!0})}(k,{default:function(){return w}}),e.exports=(r=k,h(p({},"__esModule",{value:!0}),r));var P=function(e,n,t){return t=null!=e?f(m(e)):{},h(!n&&e&&e.__esModule?t:p(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),g=t(135),O=t(365),w=function(e){"use strict";i(t,e);var n=c(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),b(l(e),"callPlayer",g.callPlayer),b(l(e),"duration",null),b(l(e),"currentTime",null),b(l(e),"fractionLoaded",null),b(l(e),"mute",(function(){e.setVolume(0)})),b(l(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(l(e),"ref",(function(n){e.iframe=n})),e}return u(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,n){var t=this;(0,g.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(r){if(t.iframe){var a=r.Widget.Events,u=a.PLAY,l=a.PLAY_PROGRESS,i=a.PAUSE,c=a.FINISH,s=a.ERROR;n||(t.player=r.Widget(t.iframe),t.player.bind(u,t.props.onPlay),t.player.bind(i,(function(){t.duration-t.currentTime<.05||t.props.onPause()})),t.player.bind(l,(function(e){t.currentTime=e.currentPosition/1e3,t.fractionLoaded=e.loadedProgress})),t.player.bind(c,(function(){return t.props.onEnded()})),t.player.bind(s,(function(e){return t.props.onError(e)}))),t.player.load(e,o(o({},t.props.config.options),{},{callback:function(){t.player.getDuration((function(e){t.duration=e/1e3,t.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return P.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}]),t}(P.Component);b(w,"displayName","SoundCloud"),b(w,"canPlay",O.canPlay.soundcloud),b(w,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.d81fa90c.chunk.js.map