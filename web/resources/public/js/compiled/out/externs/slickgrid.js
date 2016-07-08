// Compiled by ClojureScript 1.8.51 {}
goog.provide('externs.slickgrid');
goog.require('cljs.core');
goog.require('reagent.core');
externs.slickgrid.slickgridcomponent = reagent.core.atom.call(null,"");
externs.slickgrid.slick_grid_table = (function externs$slickgrid$slick_grid_table(id,data,columns,options){
return reagent.core.create_class.call(null,(function (){var render_BANG_ = (function externs$slickgrid$slick_grid_table_$_render_BANG_(){
cljs.core.deref.call(null,data);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slick-grid-container","div.slick-grid-container",-1356614805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"test2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)], null)], null);
});
var mounter_BANG_ = (function externs$slickgrid$slick_grid_table_$_mounter_BANG_(){
document.getElementById("test2").innerHTML = null;

return cljs.core.reset_BANG_.call(null,externs.slickgrid.slickgridcomponent,(new Slick.Grid("#test2",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data)),cljs.core.clj__GT_js.call(null,columns),cljs.core.clj__GT_js.call(null,options))));
});
var update_BANG_ = (function externs$slickgrid$slick_grid_table_$_update_BANG_(){
var newdata = cljs.core.deref.call(null,data);
cljs.core.deref.call(null,externs.slickgrid.slickgridcomponent).setData(cljs.core.clj__GT_js.call(null,newdata),true);

return cljs.core.deref.call(null,externs.slickgrid.slickgridcomponent).render();
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),render_BANG_,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mounter_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_BANG_], null);
})());
});

//# sourceMappingURL=slickgrid.js.map?rel=1467991929009