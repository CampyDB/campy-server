// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29546_29560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29547_29561 = null;
var count__29548_29562 = (0);
var i__29549_29563 = (0);
while(true){
if((i__29549_29563 < count__29548_29562)){
var f_29564 = cljs.core._nth.call(null,chunk__29547_29561,i__29549_29563);
cljs.core.println.call(null,"  ",f_29564);

var G__29565 = seq__29546_29560;
var G__29566 = chunk__29547_29561;
var G__29567 = count__29548_29562;
var G__29568 = (i__29549_29563 + (1));
seq__29546_29560 = G__29565;
chunk__29547_29561 = G__29566;
count__29548_29562 = G__29567;
i__29549_29563 = G__29568;
continue;
} else {
var temp__4657__auto___29569 = cljs.core.seq.call(null,seq__29546_29560);
if(temp__4657__auto___29569){
var seq__29546_29570__$1 = temp__4657__auto___29569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29546_29570__$1)){
var c__22453__auto___29571 = cljs.core.chunk_first.call(null,seq__29546_29570__$1);
var G__29572 = cljs.core.chunk_rest.call(null,seq__29546_29570__$1);
var G__29573 = c__22453__auto___29571;
var G__29574 = cljs.core.count.call(null,c__22453__auto___29571);
var G__29575 = (0);
seq__29546_29560 = G__29572;
chunk__29547_29561 = G__29573;
count__29548_29562 = G__29574;
i__29549_29563 = G__29575;
continue;
} else {
var f_29576 = cljs.core.first.call(null,seq__29546_29570__$1);
cljs.core.println.call(null,"  ",f_29576);

var G__29577 = cljs.core.next.call(null,seq__29546_29570__$1);
var G__29578 = null;
var G__29579 = (0);
var G__29580 = (0);
seq__29546_29560 = G__29577;
chunk__29547_29561 = G__29578;
count__29548_29562 = G__29579;
i__29549_29563 = G__29580;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29581 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21642__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29581);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29581)))?cljs.core.second.call(null,arglists_29581):arglists_29581));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29550 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29551 = null;
var count__29552 = (0);
var i__29553 = (0);
while(true){
if((i__29553 < count__29552)){
var vec__29554 = cljs.core._nth.call(null,chunk__29551,i__29553);
var name = cljs.core.nth.call(null,vec__29554,(0),null);
var map__29555 = cljs.core.nth.call(null,vec__29554,(1),null);
var map__29555__$1 = ((((!((map__29555 == null)))?((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);
var doc = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29582 = seq__29550;
var G__29583 = chunk__29551;
var G__29584 = count__29552;
var G__29585 = (i__29553 + (1));
seq__29550 = G__29582;
chunk__29551 = G__29583;
count__29552 = G__29584;
i__29553 = G__29585;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29550);
if(temp__4657__auto__){
var seq__29550__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29550__$1)){
var c__22453__auto__ = cljs.core.chunk_first.call(null,seq__29550__$1);
var G__29586 = cljs.core.chunk_rest.call(null,seq__29550__$1);
var G__29587 = c__22453__auto__;
var G__29588 = cljs.core.count.call(null,c__22453__auto__);
var G__29589 = (0);
seq__29550 = G__29586;
chunk__29551 = G__29587;
count__29552 = G__29588;
i__29553 = G__29589;
continue;
} else {
var vec__29557 = cljs.core.first.call(null,seq__29550__$1);
var name = cljs.core.nth.call(null,vec__29557,(0),null);
var map__29558 = cljs.core.nth.call(null,vec__29557,(1),null);
var map__29558__$1 = ((((!((map__29558 == null)))?((((map__29558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29558):map__29558);
var doc = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29590 = cljs.core.next.call(null,seq__29550__$1);
var G__29591 = null;
var G__29592 = (0);
var G__29593 = (0);
seq__29550 = G__29590;
chunk__29551 = G__29591;
count__29552 = G__29592;
i__29553 = G__29593;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467991930201