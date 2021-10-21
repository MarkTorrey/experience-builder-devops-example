System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(e,t){var i={},s={},r={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){r.WidgetPlaceholder=e.WidgetPlaceholder}],execute:function(){e((()=>{var e={63489:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.226.054a.496.496 0 00-.451 0L.25 4.942a.446.446 0 00.025.813L9.8 9.958a.497.497 0 00.4 0l9.524-4.203a.446.446 0 00.025-.813L10.226.054zM10 9.044L1.542 5.313 10 .97l8.458 4.34L10 9.046z" fill="#000"></path><path d="M.676 10.04a.493.493 0 00-.632.216c-.11.22-.006.482.232.585L10 15l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 00-.632-.215L10 14.029.676 10.041z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M.676 15.04a.493.493 0 00-.632.216c-.11.22-.006.482.232.585L10 20l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 00-.632-.215L10 19.029.676 15.041zM10 19.03l.2.085h-.4l.2-.086z" fill="#000"></path></svg>'},74645:e=>{"use strict";e.exports=s},1810:e=>{"use strict";e.exports=i},21835:e=>{"use strict";e.exports=r}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(a),o.d(a,{LoadStatus:()=>d,default:()=>g});var e=o(1810),t=o(74645),i=o(21835);function s(t,i){let s,r;i.setVisibility&&i.useMapWidget?(s="block",r=""):(s="none",r="unset");const o=t.surfaces[1].bg,a=t.surfaces[1].bg;return e.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      /*background-color: ${t.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${o};

      .esri-layer-list__item-label:focus {
        outline: ${r};
      }

      .esri-layer-list__item-toggle {
        display: ${s};
      }

      .esri-layer-list {
        background-color: ${o};
      }

      .esri-layer-list__item {
        background-color: ${a};
      }

      /* .esri-layer-list {
        background-color: ${t.colors.palette.light[100]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${t.colors.palette.light[100]};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${t.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${t.colors.black}
      }


      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${t.colors.palette.light[200]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item-action:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${t.colors.palette.light[500]};
      } */
    }
  `}class r{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class n extends r{constructor(e,i){super(),this.isValid=e=>!e.parent&&!(!this.useMapWidget()||!this.widget.props.config.goto),this.execute=e=>{this.widget.viewFromMapWidget&&t.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=i,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class c extends r{constructor(e,t,i){super(),this.isValid=e=>!e.parent&&!(!this.useMapWidget()||!this.widget.props.config.opacity),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=i?"increaseOpacity":"decreaseOpacity",this.title=t,this.className=i?"esri-icon-up":"esri-icon-down",this.group=1,this.widget=e,this.isIncreaseOpacity=i}}class l extends r{constructor(e,t){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=e=>{window.open(e.layer.url)},this.id="information",this.title=t,this.className="esri-icon-description",this.group=3,this.widget=e}}var d,h=o(63489),u=o.n(h),p=function(e,t,i,s){return new(i||(i=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function n(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,n)}c((s=s.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(d||(d={}));class g extends e.React.PureComponent{constructor(e){super(e),this.defineLayerListActions=e=>{const t=e.item,i={};t.actionsSections=[],this.layerListActions.forEach((e=>{if(e.isValid(t)){let t=i[e.group];t||(t=[],i[e.group]=t),t.push({id:e.id,title:e.title,className:e.className})}})),Object.entries(i).sort(((e,t)=>Number(e[0])-Number(t[0]))).forEach((([e,i])=>{t.actionsSections.push(i)}))},this.onLayerListActionsTriggered=e=>{const t=e.action,i=e.item;this.layerListActions.find((e=>e.id===t.id)).execute(i)},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:t,viewFromMapWidgetId:e.id})):this.destoryLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,viewFromMapWidgetId:null,loadStatus:d.Pending},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}componentDidMount(){}componentDidUpdate(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}createView(){return p(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDatatSource()}))}createViewByDatatSource(){return p(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then((()=>p(this,void 0,void 0,(function*(){return this.dataSource.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>this.createWebMapView(this.MapView,e,t))):this.dataSource.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>this.createSceneView(this.SceneView,e,t))):Promise.reject()}))))}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return p(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===t.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()}))}destoryLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}createLayerList(e){let i;return i=this.LayerList?Promise.resolve():(0,t.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e=>{[this.LayerList]=e})),i.then((()=>{const t=document&&document.createElement("div");t.className="jimu-widget",this.refs.layerListContainer.appendChild(t),this.destoryLayerList(),this.layerList=new this.LayerList({view:e,listItemCreatedFunction:this.defineLayerListActions,container:t}),this.configLayerList(),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new n(this,this.props.intl.formatMessage({id:"goto",defaultMessage:"Zoom to"})),new c(this,this.props.intl.formatMessage({id:"increaseOpacity",defaultMessage:"Increase opacity"}),!0),new c(this,this.props.intl.formatMessage({id:"decreaseOpacity",defaultMessage:"Decrease opacity"}),!1),new l(this,this.props.intl.formatMessage({id:"information",defaultMessage:"Details"}))]}configLayerList(){this.props.config.setVisibility&&this.props.config.useMapWidget||(this.layerList._toggleVisibility=function(){})}renderLayerList(){return p(this,void 0,void 0,(function*(){return yield this.createView().then((e=>this.createLayerList(e))).then((()=>{this.setState({loadStatus:d.Fulfilled})})).catch((e=>console.error(e)))}))}syncRenderer(e){this.renderPromise=new Promise(((t,i)=>{e.then((()=>{this.renderLayerList().then((()=>{t(null)})).catch((()=>i()))}))}))}render(){var r;const o=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],a=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=o,this.currentUseDataSourceId=a&&a.dataSourceId;let n=null;this.props.config.useMapWidget?n=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(r=this.props.useMapWidgetIds)||void 0===r?void 0:r[0],onActiveViewChange:this.onActiveViewChange}):a&&(n=(0,e.jsx)(e.DataSourceComponent,{useDataSource:a,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let c=null;if(this.props.config.useMapWidget?o:a){let t=null;this.state.loadStatus===d.Pending&&(t=(0,e.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"})),c=(0,e.jsx)("div",{className:"widget-layerlist"},t,(0,e.jsx)("div",{ref:"layerListContainer"}),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},n))}else this.destoryLayerList(),c=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(i.WidgetPlaceholder,{icon:u(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:"Map Layers"}),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},c)}}})(),a})())}}}));