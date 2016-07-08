// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cgfdb.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32674__delegate = function (x){
if(cljs.core.truth_(cgfdb.core.reload)){
return cljs.core.apply.call(null,cgfdb.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cgfdb.core/reload' is missing");
}
};
var G__32674 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32675__i = 0, G__32675__a = new Array(arguments.length -  0);
while (G__32675__i < G__32675__a.length) {G__32675__a[G__32675__i] = arguments[G__32675__i + 0]; ++G__32675__i;}
  x = new cljs.core.IndexedSeq(G__32675__a,0);
} 
return G__32674__delegate.call(this,x);};
G__32674.cljs$lang$maxFixedArity = 0;
G__32674.cljs$lang$applyTo = (function (arglist__32676){
var x = cljs.core.seq(arglist__32676);
return G__32674__delegate(x);
});
G__32674.cljs$core$IFn$_invoke$arity$variadic = G__32674__delegate;
return G__32674;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1467992833025