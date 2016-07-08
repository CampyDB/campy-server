// Compiled by ClojureScript 1.8.51 {}
goog.provide('externs.morris');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof externs.morris.morriscomponent !== 'undefined'){
} else {
externs.morris.morriscomponent = reagent.core.atom.call(null,"");
}
if(typeof externs.morris.donutcomponent !== 'undefined'){
} else {
externs.morris.donutcomponent = reagent.core.atom.call(null,"");
}
externs.morris.morris_line = (function externs$morris$morris_line(id,data){
return reagent.core.create_class.call(null,(function (){var render_BANG_ = (function externs$morris$morris_line_$_render_BANG_(){
cljs.core.print.call(null,"RENDER");

cljs.core.deref.call(null,data);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",-1094603544)], null);
});
var mounter_BANG_ = (function externs$morris$morris_line_$_mounter_BANG_(){
cljs.core.print.call(null,"MOUNTING");

return cljs.core.reset_BANG_.call(null,externs.morris.morriscomponent,Morris.Line(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",1974019749),"chart",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"xkey","xkey",1196724409),"date",new cljs.core.Keyword(null,"ykeys","ykeys",1489877962),cljs.core.list("count"),new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.list("count")], null))));
});
var update_BANG_ = (function externs$morris$morris_line_$_update_BANG_(){
cljs.core.print.call(null,"ATTEMPT UPDATE DATA WITH ",cljs.core.deref.call(null,data));

return cljs.core.deref.call(null,externs.morris.morriscomponent).setData(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data)));
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),render_BANG_,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mounter_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_BANG_], null);
})());
});
externs.morris.donut = (function externs$morris$donut(id,data){
return reagent.core.create_class.call(null,(function (){var render_BANG_ = (function externs$morris$donut_$_render_BANG_(){
cljs.core.deref.call(null,data);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#donut","div#donut",-887566509)], null);
});
var mounter_BANG_ = (function externs$morris$donut_$_mounter_BANG_(){
return cljs.core.reset_BANG_.call(null,externs.morris.donutcomponent,Morris.Donut(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),"donut",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,data)], null))));
});
var update_BANG_ = (function externs$morris$donut_$_update_BANG_(){
return cljs.core.deref.call(null,externs.morris.donutcomponent).setData(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data)));
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),render_BANG_,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mounter_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_BANG_], null);
})());
});

//# sourceMappingURL=morris.js.map?rel=1467991928992