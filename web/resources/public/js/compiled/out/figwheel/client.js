// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31158 = [];
var len__22712__auto___31161 = arguments.length;
var i__22713__auto___31162 = (0);
while(true){
if((i__22713__auto___31162 < len__22712__auto___31161)){
args31158.push((arguments[i__22713__auto___31162]));

var G__31163 = (i__22713__auto___31162 + (1));
i__22713__auto___31162 = G__31163;
continue;
} else {
}
break;
}

var G__31160 = args31158.length;
switch (G__31160) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31158.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22719__auto__ = [];
var len__22712__auto___31166 = arguments.length;
var i__22713__auto___31167 = (0);
while(true){
if((i__22713__auto___31167 < len__22712__auto___31166)){
args__22719__auto__.push((arguments[i__22713__auto___31167]));

var G__31168 = (i__22713__auto___31167 + (1));
i__22713__auto___31167 = G__31168;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((0) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22720__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31165){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31165));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22719__auto__ = [];
var len__22712__auto___31170 = arguments.length;
var i__22713__auto___31171 = (0);
while(true){
if((i__22713__auto___31171 < len__22712__auto___31170)){
args__22719__auto__.push((arguments[i__22713__auto___31171]));

var G__31172 = (i__22713__auto___31171 + (1));
i__22713__auto___31171 = G__31172;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((0) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22720__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31169){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31169));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31173 = cljs.core._EQ_;
var expr__31174 = (function (){var or__21642__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31177){if((e31177 instanceof Error)){
var e = e31177;
return false;
} else {
throw e31177;

}
}})();
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31173.call(null,"true",expr__31174))){
return true;
} else {
if(cljs.core.truth_(pred__31173.call(null,"false",expr__31174))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31174)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31179){if((e31179 instanceof Error)){
var e = e31179;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31179;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31180){
var map__31183 = p__31180;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var message = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21642__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21630__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21630__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21630__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24931__auto___31345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___31345,ch){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___31345,ch){
return (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (7))){
var inst_31310 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31316_31346 = state_31314__$1;
(statearr_31316_31346[(2)] = inst_31310);

(statearr_31316_31346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (1))){
var state_31314__$1 = state_31314;
var statearr_31317_31347 = state_31314__$1;
(statearr_31317_31347[(2)] = null);

(statearr_31317_31347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (4))){
var inst_31267 = (state_31314[(7)]);
var inst_31267__$1 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31318 = state_31314;
(statearr_31318[(7)] = inst_31267__$1);

return statearr_31318;
})();
if(cljs.core.truth_(inst_31267__$1)){
var statearr_31319_31348 = state_31314__$1;
(statearr_31319_31348[(1)] = (5));

} else {
var statearr_31320_31349 = state_31314__$1;
(statearr_31320_31349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (15))){
var inst_31274 = (state_31314[(8)]);
var inst_31289 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31274);
var inst_31290 = cljs.core.first.call(null,inst_31289);
var inst_31291 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31290);
var inst_31292 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31291)].join('');
var inst_31293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31292);
var state_31314__$1 = state_31314;
var statearr_31321_31350 = state_31314__$1;
(statearr_31321_31350[(2)] = inst_31293);

(statearr_31321_31350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (13))){
var inst_31298 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31322_31351 = state_31314__$1;
(statearr_31322_31351[(2)] = inst_31298);

(statearr_31322_31351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var state_31314__$1 = state_31314;
var statearr_31323_31352 = state_31314__$1;
(statearr_31323_31352[(2)] = null);

(statearr_31323_31352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (17))){
var inst_31296 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31324_31353 = state_31314__$1;
(statearr_31324_31353[(2)] = inst_31296);

(statearr_31324_31353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (3))){
var inst_31312 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31314__$1,inst_31312);
} else {
if((state_val_31315 === (12))){
var inst_31273 = (state_31314[(9)]);
var inst_31287 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31273,opts);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31287)){
var statearr_31325_31354 = state_31314__$1;
(statearr_31325_31354[(1)] = (15));

} else {
var statearr_31326_31355 = state_31314__$1;
(statearr_31326_31355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (2))){
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(4),ch);
} else {
if((state_val_31315 === (11))){
var inst_31274 = (state_31314[(8)]);
var inst_31279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31280 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31274);
var inst_31281 = cljs.core.async.timeout.call(null,(1000));
var inst_31282 = [inst_31280,inst_31281];
var inst_31283 = (new cljs.core.PersistentVector(null,2,(5),inst_31279,inst_31282,null));
var state_31314__$1 = state_31314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31314__$1,(14),inst_31283);
} else {
if((state_val_31315 === (9))){
var inst_31274 = (state_31314[(8)]);
var inst_31300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31274);
var inst_31302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31301);
var inst_31303 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31302)].join('');
var inst_31304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31303);
var state_31314__$1 = (function (){var statearr_31327 = state_31314;
(statearr_31327[(10)] = inst_31300);

return statearr_31327;
})();
var statearr_31328_31356 = state_31314__$1;
(statearr_31328_31356[(2)] = inst_31304);

(statearr_31328_31356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var inst_31267 = (state_31314[(7)]);
var inst_31269 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31270 = (new cljs.core.PersistentArrayMap(null,2,inst_31269,null));
var inst_31271 = (new cljs.core.PersistentHashSet(null,inst_31270,null));
var inst_31272 = figwheel.client.focus_msgs.call(null,inst_31271,inst_31267);
var inst_31273 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31272);
var inst_31274 = cljs.core.first.call(null,inst_31272);
var inst_31275 = figwheel.client.autoload_QMARK_.call(null);
var state_31314__$1 = (function (){var statearr_31329 = state_31314;
(statearr_31329[(8)] = inst_31274);

(statearr_31329[(9)] = inst_31273);

return statearr_31329;
})();
if(cljs.core.truth_(inst_31275)){
var statearr_31330_31357 = state_31314__$1;
(statearr_31330_31357[(1)] = (8));

} else {
var statearr_31331_31358 = state_31314__$1;
(statearr_31331_31358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (14))){
var inst_31285 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31332_31359 = state_31314__$1;
(statearr_31332_31359[(2)] = inst_31285);

(statearr_31332_31359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (16))){
var state_31314__$1 = state_31314;
var statearr_31333_31360 = state_31314__$1;
(statearr_31333_31360[(2)] = null);

(statearr_31333_31360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (10))){
var inst_31306 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31334 = state_31314;
(statearr_31334[(11)] = inst_31306);

return statearr_31334;
})();
var statearr_31335_31361 = state_31314__$1;
(statearr_31335_31361[(2)] = null);

(statearr_31335_31361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (8))){
var inst_31273 = (state_31314[(9)]);
var inst_31277 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31273,opts);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31277)){
var statearr_31336_31362 = state_31314__$1;
(statearr_31336_31362[(1)] = (11));

} else {
var statearr_31337_31363 = state_31314__$1;
(statearr_31337_31363[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24931__auto___31345,ch))
;
return ((function (switch__24819__auto__,c__24931__auto___31345,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____0 = (function (){
var statearr_31341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31341[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__);

(statearr_31341[(1)] = (1));

return statearr_31341;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____1 = (function (state_31314){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_31314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e31342){if((e31342 instanceof Object)){
var ex__24823__auto__ = e31342;
var statearr_31343_31364 = state_31314;
(statearr_31343_31364[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31365 = state_31314;
state_31314 = G__31365;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24820__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___31345,ch))
})();
var state__24933__auto__ = (function (){var statearr_31344 = f__24932__auto__.call(null);
(statearr_31344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___31345);

return statearr_31344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___31345,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31366_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31366_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31369 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31369){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31368){if((e31368 instanceof Error)){
var e = e31368;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31369], null));
} else {
var e = e31368;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31369))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31370){
var map__31377 = p__31370;
var map__31377__$1 = ((((!((map__31377 == null)))?((((map__31377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31377):map__31377);
var opts = map__31377__$1;
var build_id = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31377,map__31377__$1,opts,build_id){
return (function (p__31379){
var vec__31380 = p__31379;
var map__31381 = cljs.core.nth.call(null,vec__31380,(0),null);
var map__31381__$1 = ((((!((map__31381 == null)))?((((map__31381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);
var msg = map__31381__$1;
var msg_name = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31380,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31380,map__31381,map__31381__$1,msg,msg_name,_,map__31377,map__31377__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31380,map__31381,map__31381__$1,msg,msg_name,_,map__31377,map__31377__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31377,map__31377__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31387){
var vec__31388 = p__31387;
var map__31389 = cljs.core.nth.call(null,vec__31388,(0),null);
var map__31389__$1 = ((((!((map__31389 == null)))?((((map__31389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31389):map__31389);
var msg = map__31389__$1;
var msg_name = cljs.core.get.call(null,map__31389__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31388,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31391){
var map__31401 = p__31391;
var map__31401__$1 = ((((!((map__31401 == null)))?((((map__31401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);
var on_compile_warning = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31401,map__31401__$1,on_compile_warning,on_compile_fail){
return (function (p__31403){
var vec__31404 = p__31403;
var map__31405 = cljs.core.nth.call(null,vec__31404,(0),null);
var map__31405__$1 = ((((!((map__31405 == null)))?((((map__31405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31405):map__31405);
var msg = map__31405__$1;
var msg_name = cljs.core.get.call(null,map__31405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31404,(1));
var pred__31407 = cljs.core._EQ_;
var expr__31408 = msg_name;
if(cljs.core.truth_(pred__31407.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31408))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31407.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31408))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31401,map__31401__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__,msg_hist,msg_names,msg){
return (function (state_31616){
var state_val_31617 = (state_31616[(1)]);
if((state_val_31617 === (7))){
var inst_31544 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31544)){
var statearr_31618_31664 = state_31616__$1;
(statearr_31618_31664[(1)] = (8));

} else {
var statearr_31619_31665 = state_31616__$1;
(statearr_31619_31665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (20))){
var inst_31610 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31620_31666 = state_31616__$1;
(statearr_31620_31666[(2)] = inst_31610);

(statearr_31620_31666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (27))){
var inst_31606 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31621_31667 = state_31616__$1;
(statearr_31621_31667[(2)] = inst_31606);

(statearr_31621_31667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (1))){
var inst_31537 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31537)){
var statearr_31622_31668 = state_31616__$1;
(statearr_31622_31668[(1)] = (2));

} else {
var statearr_31623_31669 = state_31616__$1;
(statearr_31623_31669[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (24))){
var inst_31608 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31624_31670 = state_31616__$1;
(statearr_31624_31670[(2)] = inst_31608);

(statearr_31624_31670[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (4))){
var inst_31614 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31616__$1,inst_31614);
} else {
if((state_val_31617 === (15))){
var inst_31612 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31625_31671 = state_31616__$1;
(statearr_31625_31671[(2)] = inst_31612);

(statearr_31625_31671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (21))){
var inst_31571 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31626_31672 = state_31616__$1;
(statearr_31626_31672[(2)] = inst_31571);

(statearr_31626_31672[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (31))){
var inst_31595 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31595)){
var statearr_31627_31673 = state_31616__$1;
(statearr_31627_31673[(1)] = (34));

} else {
var statearr_31628_31674 = state_31616__$1;
(statearr_31628_31674[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (32))){
var inst_31604 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31629_31675 = state_31616__$1;
(statearr_31629_31675[(2)] = inst_31604);

(statearr_31629_31675[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (33))){
var inst_31593 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31630_31676 = state_31616__$1;
(statearr_31630_31676[(2)] = inst_31593);

(statearr_31630_31676[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (13))){
var inst_31558 = figwheel.client.heads_up.clear.call(null);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(16),inst_31558);
} else {
if((state_val_31617 === (22))){
var inst_31575 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31576 = figwheel.client.heads_up.append_warning_message.call(null,inst_31575);
var state_31616__$1 = state_31616;
var statearr_31631_31677 = state_31616__$1;
(statearr_31631_31677[(2)] = inst_31576);

(statearr_31631_31677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (36))){
var inst_31602 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31632_31678 = state_31616__$1;
(statearr_31632_31678[(2)] = inst_31602);

(statearr_31632_31678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (29))){
var inst_31586 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31633_31679 = state_31616__$1;
(statearr_31633_31679[(2)] = inst_31586);

(statearr_31633_31679[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (6))){
var inst_31539 = (state_31616[(7)]);
var state_31616__$1 = state_31616;
var statearr_31634_31680 = state_31616__$1;
(statearr_31634_31680[(2)] = inst_31539);

(statearr_31634_31680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (28))){
var inst_31582 = (state_31616[(2)]);
var inst_31583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31584 = figwheel.client.heads_up.display_warning.call(null,inst_31583);
var state_31616__$1 = (function (){var statearr_31635 = state_31616;
(statearr_31635[(8)] = inst_31582);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(29),inst_31584);
} else {
if((state_val_31617 === (25))){
var inst_31580 = figwheel.client.heads_up.clear.call(null);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(28),inst_31580);
} else {
if((state_val_31617 === (34))){
var inst_31597 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(37),inst_31597);
} else {
if((state_val_31617 === (17))){
var inst_31564 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31636_31681 = state_31616__$1;
(statearr_31636_31681[(2)] = inst_31564);

(statearr_31636_31681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (3))){
var inst_31556 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31556)){
var statearr_31637_31682 = state_31616__$1;
(statearr_31637_31682[(1)] = (13));

} else {
var statearr_31638_31683 = state_31616__$1;
(statearr_31638_31683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (12))){
var inst_31552 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31639_31684 = state_31616__$1;
(statearr_31639_31684[(2)] = inst_31552);

(statearr_31639_31684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (2))){
var inst_31539 = (state_31616[(7)]);
var inst_31539__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31616__$1 = (function (){var statearr_31640 = state_31616;
(statearr_31640[(7)] = inst_31539__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31539__$1)){
var statearr_31641_31685 = state_31616__$1;
(statearr_31641_31685[(1)] = (5));

} else {
var statearr_31642_31686 = state_31616__$1;
(statearr_31642_31686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (23))){
var inst_31578 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31578)){
var statearr_31643_31687 = state_31616__$1;
(statearr_31643_31687[(1)] = (25));

} else {
var statearr_31644_31688 = state_31616__$1;
(statearr_31644_31688[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (35))){
var state_31616__$1 = state_31616;
var statearr_31645_31689 = state_31616__$1;
(statearr_31645_31689[(2)] = null);

(statearr_31645_31689[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (19))){
var inst_31573 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31573)){
var statearr_31646_31690 = state_31616__$1;
(statearr_31646_31690[(1)] = (22));

} else {
var statearr_31647_31691 = state_31616__$1;
(statearr_31647_31691[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (11))){
var inst_31548 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31648_31692 = state_31616__$1;
(statearr_31648_31692[(2)] = inst_31548);

(statearr_31648_31692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (9))){
var inst_31550 = figwheel.client.heads_up.clear.call(null);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(12),inst_31550);
} else {
if((state_val_31617 === (5))){
var inst_31541 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31616__$1 = state_31616;
var statearr_31649_31693 = state_31616__$1;
(statearr_31649_31693[(2)] = inst_31541);

(statearr_31649_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (14))){
var inst_31566 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31566)){
var statearr_31650_31694 = state_31616__$1;
(statearr_31650_31694[(1)] = (18));

} else {
var statearr_31651_31695 = state_31616__$1;
(statearr_31651_31695[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (26))){
var inst_31588 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31588)){
var statearr_31652_31696 = state_31616__$1;
(statearr_31652_31696[(1)] = (30));

} else {
var statearr_31653_31697 = state_31616__$1;
(statearr_31653_31697[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (16))){
var inst_31560 = (state_31616[(2)]);
var inst_31561 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31562 = figwheel.client.heads_up.display_exception.call(null,inst_31561);
var state_31616__$1 = (function (){var statearr_31654 = state_31616;
(statearr_31654[(9)] = inst_31560);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(17),inst_31562);
} else {
if((state_val_31617 === (30))){
var inst_31590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31591 = figwheel.client.heads_up.display_warning.call(null,inst_31590);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(33),inst_31591);
} else {
if((state_val_31617 === (10))){
var inst_31554 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31655_31698 = state_31616__$1;
(statearr_31655_31698[(2)] = inst_31554);

(statearr_31655_31698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (18))){
var inst_31568 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31569 = figwheel.client.heads_up.display_exception.call(null,inst_31568);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(21),inst_31569);
} else {
if((state_val_31617 === (37))){
var inst_31599 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31656_31699 = state_31616__$1;
(statearr_31656_31699[(2)] = inst_31599);

(statearr_31656_31699[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (8))){
var inst_31546 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(11),inst_31546);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24931__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24819__auto__,c__24931__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____0 = (function (){
var statearr_31660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31660[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__);

(statearr_31660[(1)] = (1));

return statearr_31660;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____1 = (function (state_31616){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_31616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e31661){if((e31661 instanceof Object)){
var ex__24823__auto__ = e31661;
var statearr_31662_31700 = state_31616;
(statearr_31662_31700[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31701 = state_31616;
state_31616 = G__31701;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__ = function(state_31616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____1.call(this,state_31616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__,msg_hist,msg_names,msg))
})();
var state__24933__auto__ = (function (){var statearr_31663 = f__24932__auto__.call(null);
(statearr_31663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__,msg_hist,msg_names,msg))
);

return c__24931__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24931__auto___31764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___31764,ch){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___31764,ch){
return (function (state_31747){
var state_val_31748 = (state_31747[(1)]);
if((state_val_31748 === (1))){
var state_31747__$1 = state_31747;
var statearr_31749_31765 = state_31747__$1;
(statearr_31749_31765[(2)] = null);

(statearr_31749_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (2))){
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31747__$1,(4),ch);
} else {
if((state_val_31748 === (3))){
var inst_31745 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31747__$1,inst_31745);
} else {
if((state_val_31748 === (4))){
var inst_31735 = (state_31747[(7)]);
var inst_31735__$1 = (state_31747[(2)]);
var state_31747__$1 = (function (){var statearr_31750 = state_31747;
(statearr_31750[(7)] = inst_31735__$1);

return statearr_31750;
})();
if(cljs.core.truth_(inst_31735__$1)){
var statearr_31751_31766 = state_31747__$1;
(statearr_31751_31766[(1)] = (5));

} else {
var statearr_31752_31767 = state_31747__$1;
(statearr_31752_31767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (5))){
var inst_31735 = (state_31747[(7)]);
var inst_31737 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31735);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31747__$1,(8),inst_31737);
} else {
if((state_val_31748 === (6))){
var state_31747__$1 = state_31747;
var statearr_31753_31768 = state_31747__$1;
(statearr_31753_31768[(2)] = null);

(statearr_31753_31768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (7))){
var inst_31743 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31754_31769 = state_31747__$1;
(statearr_31754_31769[(2)] = inst_31743);

(statearr_31754_31769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (8))){
var inst_31739 = (state_31747[(2)]);
var state_31747__$1 = (function (){var statearr_31755 = state_31747;
(statearr_31755[(8)] = inst_31739);

return statearr_31755;
})();
var statearr_31756_31770 = state_31747__$1;
(statearr_31756_31770[(2)] = null);

(statearr_31756_31770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24931__auto___31764,ch))
;
return ((function (switch__24819__auto__,c__24931__auto___31764,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24820__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24820__auto____0 = (function (){
var statearr_31760 = [null,null,null,null,null,null,null,null,null];
(statearr_31760[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24820__auto__);

(statearr_31760[(1)] = (1));

return statearr_31760;
});
var figwheel$client$heads_up_plugin_$_state_machine__24820__auto____1 = (function (state_31747){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_31747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e31761){if((e31761 instanceof Object)){
var ex__24823__auto__ = e31761;
var statearr_31762_31771 = state_31747;
(statearr_31762_31771[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31772 = state_31747;
state_31747 = G__31772;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24820__auto__ = function(state_31747){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24820__auto____1.call(this,state_31747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24820__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24820__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___31764,ch))
})();
var state__24933__auto__ = (function (){var statearr_31763 = f__24932__auto__.call(null);
(statearr_31763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___31764);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___31764,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_31793){
var state_val_31794 = (state_31793[(1)]);
if((state_val_31794 === (1))){
var inst_31788 = cljs.core.async.timeout.call(null,(3000));
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31793__$1,(2),inst_31788);
} else {
if((state_val_31794 === (2))){
var inst_31790 = (state_31793[(2)]);
var inst_31791 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31793__$1 = (function (){var statearr_31795 = state_31793;
(statearr_31795[(7)] = inst_31790);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31793__$1,inst_31791);
} else {
return null;
}
}
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____0 = (function (){
var statearr_31799 = [null,null,null,null,null,null,null,null];
(statearr_31799[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__);

(statearr_31799[(1)] = (1));

return statearr_31799;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____1 = (function (state_31793){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_31793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e31800){if((e31800 instanceof Object)){
var ex__24823__auto__ = e31800;
var statearr_31801_31803 = state_31793;
(statearr_31801_31803[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31804 = state_31793;
state_31793 = G__31804;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__ = function(state_31793){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____1.call(this,state_31793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24820__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_31802 = f__24932__auto__.call(null);
(statearr_31802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31827){
var state_val_31828 = (state_31827[(1)]);
if((state_val_31828 === (1))){
var inst_31821 = cljs.core.async.timeout.call(null,(2000));
var state_31827__$1 = state_31827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31827__$1,(2),inst_31821);
} else {
if((state_val_31828 === (2))){
var inst_31823 = (state_31827[(2)]);
var inst_31824 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31825 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31824);
var state_31827__$1 = (function (){var statearr_31829 = state_31827;
(statearr_31829[(7)] = inst_31823);

return statearr_31829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31827__$1,inst_31825);
} else {
return null;
}
}
});})(c__24931__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____0 = (function (){
var statearr_31833 = [null,null,null,null,null,null,null,null];
(statearr_31833[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__);

(statearr_31833[(1)] = (1));

return statearr_31833;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____1 = (function (state_31827){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_31827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e31834){if((e31834 instanceof Object)){
var ex__24823__auto__ = e31834;
var statearr_31835_31837 = state_31827;
(statearr_31835_31837[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31838 = state_31827;
state_31827 = G__31838;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__ = function(state_31827){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____1.call(this,state_31827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24933__auto__ = (function (){var statearr_31836 = f__24932__auto__.call(null);
(statearr_31836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__,figwheel_version,temp__4657__auto__))
);

return c__24931__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31839){
var map__31843 = p__31839;
var map__31843__$1 = ((((!((map__31843 == null)))?((((map__31843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);
var file = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31845 = "";
var G__31845__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31845),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31845);
var G__31845__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31845__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31845__$1);
if(cljs.core.truth_((function (){var and__21630__auto__ = line;
if(cljs.core.truth_(and__21630__auto__)){
return column;
} else {
return and__21630__auto__;
}
})())){
return [cljs.core.str(G__31845__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31845__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31846){
var map__31853 = p__31846;
var map__31853__$1 = ((((!((map__31853 == null)))?((((map__31853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31853):map__31853);
var ed = map__31853__$1;
var formatted_exception = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31855_31859 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31856_31860 = null;
var count__31857_31861 = (0);
var i__31858_31862 = (0);
while(true){
if((i__31858_31862 < count__31857_31861)){
var msg_31863 = cljs.core._nth.call(null,chunk__31856_31860,i__31858_31862);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31863);

var G__31864 = seq__31855_31859;
var G__31865 = chunk__31856_31860;
var G__31866 = count__31857_31861;
var G__31867 = (i__31858_31862 + (1));
seq__31855_31859 = G__31864;
chunk__31856_31860 = G__31865;
count__31857_31861 = G__31866;
i__31858_31862 = G__31867;
continue;
} else {
var temp__4657__auto___31868 = cljs.core.seq.call(null,seq__31855_31859);
if(temp__4657__auto___31868){
var seq__31855_31869__$1 = temp__4657__auto___31868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31855_31869__$1)){
var c__22453__auto___31870 = cljs.core.chunk_first.call(null,seq__31855_31869__$1);
var G__31871 = cljs.core.chunk_rest.call(null,seq__31855_31869__$1);
var G__31872 = c__22453__auto___31870;
var G__31873 = cljs.core.count.call(null,c__22453__auto___31870);
var G__31874 = (0);
seq__31855_31859 = G__31871;
chunk__31856_31860 = G__31872;
count__31857_31861 = G__31873;
i__31858_31862 = G__31874;
continue;
} else {
var msg_31875 = cljs.core.first.call(null,seq__31855_31869__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31875);

var G__31876 = cljs.core.next.call(null,seq__31855_31869__$1);
var G__31877 = null;
var G__31878 = (0);
var G__31879 = (0);
seq__31855_31859 = G__31876;
chunk__31856_31860 = G__31877;
count__31857_31861 = G__31878;
i__31858_31862 = G__31879;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31880){
var map__31883 = p__31880;
var map__31883__$1 = ((((!((map__31883 == null)))?((((map__31883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31883):map__31883);
var w = map__31883__$1;
var message = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21630__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21630__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21630__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31891 = cljs.core.seq.call(null,plugins);
var chunk__31892 = null;
var count__31893 = (0);
var i__31894 = (0);
while(true){
if((i__31894 < count__31893)){
var vec__31895 = cljs.core._nth.call(null,chunk__31892,i__31894);
var k = cljs.core.nth.call(null,vec__31895,(0),null);
var plugin = cljs.core.nth.call(null,vec__31895,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31897 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31891,chunk__31892,count__31893,i__31894,pl_31897,vec__31895,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31897.call(null,msg_hist);
});})(seq__31891,chunk__31892,count__31893,i__31894,pl_31897,vec__31895,k,plugin))
);
} else {
}

var G__31898 = seq__31891;
var G__31899 = chunk__31892;
var G__31900 = count__31893;
var G__31901 = (i__31894 + (1));
seq__31891 = G__31898;
chunk__31892 = G__31899;
count__31893 = G__31900;
i__31894 = G__31901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31891);
if(temp__4657__auto__){
var seq__31891__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31891__$1)){
var c__22453__auto__ = cljs.core.chunk_first.call(null,seq__31891__$1);
var G__31902 = cljs.core.chunk_rest.call(null,seq__31891__$1);
var G__31903 = c__22453__auto__;
var G__31904 = cljs.core.count.call(null,c__22453__auto__);
var G__31905 = (0);
seq__31891 = G__31902;
chunk__31892 = G__31903;
count__31893 = G__31904;
i__31894 = G__31905;
continue;
} else {
var vec__31896 = cljs.core.first.call(null,seq__31891__$1);
var k = cljs.core.nth.call(null,vec__31896,(0),null);
var plugin = cljs.core.nth.call(null,vec__31896,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31906 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31891,chunk__31892,count__31893,i__31894,pl_31906,vec__31896,k,plugin,seq__31891__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31906.call(null,msg_hist);
});})(seq__31891,chunk__31892,count__31893,i__31894,pl_31906,vec__31896,k,plugin,seq__31891__$1,temp__4657__auto__))
);
} else {
}

var G__31907 = cljs.core.next.call(null,seq__31891__$1);
var G__31908 = null;
var G__31909 = (0);
var G__31910 = (0);
seq__31891 = G__31907;
chunk__31892 = G__31908;
count__31893 = G__31909;
i__31894 = G__31910;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31911 = [];
var len__22712__auto___31918 = arguments.length;
var i__22713__auto___31919 = (0);
while(true){
if((i__22713__auto___31919 < len__22712__auto___31918)){
args31911.push((arguments[i__22713__auto___31919]));

var G__31920 = (i__22713__auto___31919 + (1));
i__22713__auto___31919 = G__31920;
continue;
} else {
}
break;
}

var G__31913 = args31911.length;
switch (G__31913) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31911.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31914_31922 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31915_31923 = null;
var count__31916_31924 = (0);
var i__31917_31925 = (0);
while(true){
if((i__31917_31925 < count__31916_31924)){
var msg_31926 = cljs.core._nth.call(null,chunk__31915_31923,i__31917_31925);
figwheel.client.socket.handle_incoming_message.call(null,msg_31926);

var G__31927 = seq__31914_31922;
var G__31928 = chunk__31915_31923;
var G__31929 = count__31916_31924;
var G__31930 = (i__31917_31925 + (1));
seq__31914_31922 = G__31927;
chunk__31915_31923 = G__31928;
count__31916_31924 = G__31929;
i__31917_31925 = G__31930;
continue;
} else {
var temp__4657__auto___31931 = cljs.core.seq.call(null,seq__31914_31922);
if(temp__4657__auto___31931){
var seq__31914_31932__$1 = temp__4657__auto___31931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31914_31932__$1)){
var c__22453__auto___31933 = cljs.core.chunk_first.call(null,seq__31914_31932__$1);
var G__31934 = cljs.core.chunk_rest.call(null,seq__31914_31932__$1);
var G__31935 = c__22453__auto___31933;
var G__31936 = cljs.core.count.call(null,c__22453__auto___31933);
var G__31937 = (0);
seq__31914_31922 = G__31934;
chunk__31915_31923 = G__31935;
count__31916_31924 = G__31936;
i__31917_31925 = G__31937;
continue;
} else {
var msg_31938 = cljs.core.first.call(null,seq__31914_31932__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31938);

var G__31939 = cljs.core.next.call(null,seq__31914_31932__$1);
var G__31940 = null;
var G__31941 = (0);
var G__31942 = (0);
seq__31914_31922 = G__31939;
chunk__31915_31923 = G__31940;
count__31916_31924 = G__31941;
i__31917_31925 = G__31942;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22719__auto__ = [];
var len__22712__auto___31947 = arguments.length;
var i__22713__auto___31948 = (0);
while(true){
if((i__22713__auto___31948 < len__22712__auto___31947)){
args__22719__auto__.push((arguments[i__22713__auto___31948]));

var G__31949 = (i__22713__auto___31948 + (1));
i__22713__auto___31948 = G__31949;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((0) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22720__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31944){
var map__31945 = p__31944;
var map__31945__$1 = ((((!((map__31945 == null)))?((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var opts = map__31945__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31943){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31943));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31951){if((e31951 instanceof Error)){
var e = e31951;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31951;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31955){
var map__31956 = p__31955;
var map__31956__$1 = ((((!((map__31956 == null)))?((((map__31956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31956):map__31956);
var msg_name = cljs.core.get.call(null,map__31956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467991933934