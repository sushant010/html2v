(self.webpackChunkekalakaar=self.webpackChunkekalakaar||[]).push([[664],{8275:(e,t,a)=>{var r,n=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of o(t))c.call(e,n)||n===a||l(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},u=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>b}),e.exports=(r=d,p(l({},"__esModule",{value:!0}),r));var h=((e,t,a)=>(a=null!=e?n(s(e)):{},p(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(2791));const m="64px",g={};class b extends h.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:a}=this.props;e.url===t&&e.light===a||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:a,oEmbedUrl:r}=e;if(!h.default.isValidElement(a))if("string"!==typeof a){if(!g[t])return this.setState({image:null}),window.fetch(r.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const a=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:a}),g[t]=a}}));this.setState({image:g[t]})}else this.setState({image:a})}render(){const{light:e,onClick:t,playIcon:a,previewTabIndex:r}=this.props,{image:n}=this.state,l=h.default.isValidElement(e),i={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:n&&!l?"url(".concat(n,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...i},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...i},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=h.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:r,onKeyPress:this.handleKeyPress},l?e:null,a||s)}}}}]);
//# sourceMappingURL=reactPlayerPreview.98440455.chunk.js.map