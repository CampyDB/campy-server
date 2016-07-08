// Compiled by ClojureScript 1.8.51 {}
goog.provide('externs.d3');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof externs.d3.d3component !== 'undefined'){
} else {
externs.d3.d3component = reagent.core.atom.call(null,"");
}
externs.d3.pie_chart = (function externs$d3$pie_chart(id,data__$1){
reagent.core.create_class.call(null,(function (){var render_BANG_ = (function externs$d3$pie_chart_$_render_BANG_(){
cljs.core.deref.call(null,data__$1);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",-1094603544)], null);
});
var mounter_BANG_ = (function externs$d3$pie_chart_$_mounter_BANG_(){
cljs.core.reset_BANG_.call(null,externs.d3.piecomponent,dimple.chart);

return cljs.core.deref.call(null,externs.d3.piecomponent).setBounds((20),(20),(460),(360));
});
var update_BANG_ = (function externs$d3$pie_chart_$_update_BANG_(){
cljs.core.deref.call(null,externs.d3.piecomponent).setData(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data__$1)));

return cljs.core.deref.call(null,externs.d3.piecomponent).addMeasureAxis("x");
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),render_BANG_,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mounter_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_BANG_], null);
})());

return externs.d3.d;
});

//# sourceMappingURL=d3.js.map?rel=1467991929356