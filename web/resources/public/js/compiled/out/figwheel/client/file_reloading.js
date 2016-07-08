// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21642__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21642__auto__){
return or__21642__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21642__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28522_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28522_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28527 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28528 = null;
var count__28529 = (0);
var i__28530 = (0);
while(true){
if((i__28530 < count__28529)){
var n = cljs.core._nth.call(null,chunk__28528,i__28530);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28531 = seq__28527;
var G__28532 = chunk__28528;
var G__28533 = count__28529;
var G__28534 = (i__28530 + (1));
seq__28527 = G__28531;
chunk__28528 = G__28532;
count__28529 = G__28533;
i__28530 = G__28534;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28527);
if(temp__4657__auto__){
var seq__28527__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28527__$1)){
var c__22453__auto__ = cljs.core.chunk_first.call(null,seq__28527__$1);
var G__28535 = cljs.core.chunk_rest.call(null,seq__28527__$1);
var G__28536 = c__22453__auto__;
var G__28537 = cljs.core.count.call(null,c__22453__auto__);
var G__28538 = (0);
seq__28527 = G__28535;
chunk__28528 = G__28536;
count__28529 = G__28537;
i__28530 = G__28538;
continue;
} else {
var n = cljs.core.first.call(null,seq__28527__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28539 = cljs.core.next.call(null,seq__28527__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28527 = G__28539;
chunk__28528 = G__28540;
count__28529 = G__28541;
i__28530 = G__28542;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28581_28588 = cljs.core.seq.call(null,deps);
var chunk__28582_28589 = null;
var count__28583_28590 = (0);
var i__28584_28591 = (0);
while(true){
if((i__28584_28591 < count__28583_28590)){
var dep_28592 = cljs.core._nth.call(null,chunk__28582_28589,i__28584_28591);
topo_sort_helper_STAR_.call(null,dep_28592,(depth + (1)),state);

var G__28593 = seq__28581_28588;
var G__28594 = chunk__28582_28589;
var G__28595 = count__28583_28590;
var G__28596 = (i__28584_28591 + (1));
seq__28581_28588 = G__28593;
chunk__28582_28589 = G__28594;
count__28583_28590 = G__28595;
i__28584_28591 = G__28596;
continue;
} else {
var temp__4657__auto___28597 = cljs.core.seq.call(null,seq__28581_28588);
if(temp__4657__auto___28597){
var seq__28581_28598__$1 = temp__4657__auto___28597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28581_28598__$1)){
var c__22453__auto___28599 = cljs.core.chunk_first.call(null,seq__28581_28598__$1);
var G__28600 = cljs.core.chunk_rest.call(null,seq__28581_28598__$1);
var G__28601 = c__22453__auto___28599;
var G__28602 = cljs.core.count.call(null,c__22453__auto___28599);
var G__28603 = (0);
seq__28581_28588 = G__28600;
chunk__28582_28589 = G__28601;
count__28583_28590 = G__28602;
i__28584_28591 = G__28603;
continue;
} else {
var dep_28604 = cljs.core.first.call(null,seq__28581_28598__$1);
topo_sort_helper_STAR_.call(null,dep_28604,(depth + (1)),state);

var G__28605 = cljs.core.next.call(null,seq__28581_28598__$1);
var G__28606 = null;
var G__28607 = (0);
var G__28608 = (0);
seq__28581_28588 = G__28605;
chunk__28582_28589 = G__28606;
count__28583_28590 = G__28607;
i__28584_28591 = G__28608;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28585){
var vec__28587 = p__28585;
var x = cljs.core.nth.call(null,vec__28587,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28587,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28587,x,xs,get_deps__$1){
return (function (p1__28543_SHARP_){
return clojure.set.difference.call(null,p1__28543_SHARP_,x);
});})(vec__28587,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28621 = cljs.core.seq.call(null,provides);
var chunk__28622 = null;
var count__28623 = (0);
var i__28624 = (0);
while(true){
if((i__28624 < count__28623)){
var prov = cljs.core._nth.call(null,chunk__28622,i__28624);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28625_28633 = cljs.core.seq.call(null,requires);
var chunk__28626_28634 = null;
var count__28627_28635 = (0);
var i__28628_28636 = (0);
while(true){
if((i__28628_28636 < count__28627_28635)){
var req_28637 = cljs.core._nth.call(null,chunk__28626_28634,i__28628_28636);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28637,prov);

var G__28638 = seq__28625_28633;
var G__28639 = chunk__28626_28634;
var G__28640 = count__28627_28635;
var G__28641 = (i__28628_28636 + (1));
seq__28625_28633 = G__28638;
chunk__28626_28634 = G__28639;
count__28627_28635 = G__28640;
i__28628_28636 = G__28641;
continue;
} else {
var temp__4657__auto___28642 = cljs.core.seq.call(null,seq__28625_28633);
if(temp__4657__auto___28642){
var seq__28625_28643__$1 = temp__4657__auto___28642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28625_28643__$1)){
var c__22453__auto___28644 = cljs.core.chunk_first.call(null,seq__28625_28643__$1);
var G__28645 = cljs.core.chunk_rest.call(null,seq__28625_28643__$1);
var G__28646 = c__22453__auto___28644;
var G__28647 = cljs.core.count.call(null,c__22453__auto___28644);
var G__28648 = (0);
seq__28625_28633 = G__28645;
chunk__28626_28634 = G__28646;
count__28627_28635 = G__28647;
i__28628_28636 = G__28648;
continue;
} else {
var req_28649 = cljs.core.first.call(null,seq__28625_28643__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28649,prov);

var G__28650 = cljs.core.next.call(null,seq__28625_28643__$1);
var G__28651 = null;
var G__28652 = (0);
var G__28653 = (0);
seq__28625_28633 = G__28650;
chunk__28626_28634 = G__28651;
count__28627_28635 = G__28652;
i__28628_28636 = G__28653;
continue;
}
} else {
}
}
break;
}

var G__28654 = seq__28621;
var G__28655 = chunk__28622;
var G__28656 = count__28623;
var G__28657 = (i__28624 + (1));
seq__28621 = G__28654;
chunk__28622 = G__28655;
count__28623 = G__28656;
i__28624 = G__28657;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28621);
if(temp__4657__auto__){
var seq__28621__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28621__$1)){
var c__22453__auto__ = cljs.core.chunk_first.call(null,seq__28621__$1);
var G__28658 = cljs.core.chunk_rest.call(null,seq__28621__$1);
var G__28659 = c__22453__auto__;
var G__28660 = cljs.core.count.call(null,c__22453__auto__);
var G__28661 = (0);
seq__28621 = G__28658;
chunk__28622 = G__28659;
count__28623 = G__28660;
i__28624 = G__28661;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28621__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28629_28662 = cljs.core.seq.call(null,requires);
var chunk__28630_28663 = null;
var count__28631_28664 = (0);
var i__28632_28665 = (0);
while(true){
if((i__28632_28665 < count__28631_28664)){
var req_28666 = cljs.core._nth.call(null,chunk__28630_28663,i__28632_28665);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28666,prov);

var G__28667 = seq__28629_28662;
var G__28668 = chunk__28630_28663;
var G__28669 = count__28631_28664;
var G__28670 = (i__28632_28665 + (1));
seq__28629_28662 = G__28667;
chunk__28630_28663 = G__28668;
count__28631_28664 = G__28669;
i__28632_28665 = G__28670;
continue;
} else {
var temp__4657__auto___28671__$1 = cljs.core.seq.call(null,seq__28629_28662);
if(temp__4657__auto___28671__$1){
var seq__28629_28672__$1 = temp__4657__auto___28671__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28672__$1)){
var c__22453__auto___28673 = cljs.core.chunk_first.call(null,seq__28629_28672__$1);
var G__28674 = cljs.core.chunk_rest.call(null,seq__28629_28672__$1);
var G__28675 = c__22453__auto___28673;
var G__28676 = cljs.core.count.call(null,c__22453__auto___28673);
var G__28677 = (0);
seq__28629_28662 = G__28674;
chunk__28630_28663 = G__28675;
count__28631_28664 = G__28676;
i__28632_28665 = G__28677;
continue;
} else {
var req_28678 = cljs.core.first.call(null,seq__28629_28672__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28678,prov);

var G__28679 = cljs.core.next.call(null,seq__28629_28672__$1);
var G__28680 = null;
var G__28681 = (0);
var G__28682 = (0);
seq__28629_28662 = G__28679;
chunk__28630_28663 = G__28680;
count__28631_28664 = G__28681;
i__28632_28665 = G__28682;
continue;
}
} else {
}
}
break;
}

var G__28683 = cljs.core.next.call(null,seq__28621__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28621 = G__28683;
chunk__28622 = G__28684;
count__28623 = G__28685;
i__28624 = G__28686;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28691_28695 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28692_28696 = null;
var count__28693_28697 = (0);
var i__28694_28698 = (0);
while(true){
if((i__28694_28698 < count__28693_28697)){
var ns_28699 = cljs.core._nth.call(null,chunk__28692_28696,i__28694_28698);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28699);

var G__28700 = seq__28691_28695;
var G__28701 = chunk__28692_28696;
var G__28702 = count__28693_28697;
var G__28703 = (i__28694_28698 + (1));
seq__28691_28695 = G__28700;
chunk__28692_28696 = G__28701;
count__28693_28697 = G__28702;
i__28694_28698 = G__28703;
continue;
} else {
var temp__4657__auto___28704 = cljs.core.seq.call(null,seq__28691_28695);
if(temp__4657__auto___28704){
var seq__28691_28705__$1 = temp__4657__auto___28704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28691_28705__$1)){
var c__22453__auto___28706 = cljs.core.chunk_first.call(null,seq__28691_28705__$1);
var G__28707 = cljs.core.chunk_rest.call(null,seq__28691_28705__$1);
var G__28708 = c__22453__auto___28706;
var G__28709 = cljs.core.count.call(null,c__22453__auto___28706);
var G__28710 = (0);
seq__28691_28695 = G__28707;
chunk__28692_28696 = G__28708;
count__28693_28697 = G__28709;
i__28694_28698 = G__28710;
continue;
} else {
var ns_28711 = cljs.core.first.call(null,seq__28691_28705__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28711);

var G__28712 = cljs.core.next.call(null,seq__28691_28705__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28691_28695 = G__28712;
chunk__28692_28696 = G__28713;
count__28693_28697 = G__28714;
i__28694_28698 = G__28715;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21642__auto__ = goog.require__;
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28716__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28717__i = 0, G__28717__a = new Array(arguments.length -  0);
while (G__28717__i < G__28717__a.length) {G__28717__a[G__28717__i] = arguments[G__28717__i + 0]; ++G__28717__i;}
  args = new cljs.core.IndexedSeq(G__28717__a,0);
} 
return G__28716__delegate.call(this,args);};
G__28716.cljs$lang$maxFixedArity = 0;
G__28716.cljs$lang$applyTo = (function (arglist__28718){
var args = cljs.core.seq(arglist__28718);
return G__28716__delegate(args);
});
G__28716.cljs$core$IFn$_invoke$arity$variadic = G__28716__delegate;
return G__28716;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28720 = cljs.core._EQ_;
var expr__28721 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28720.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28721))){
var path_parts = ((function (pred__28720,expr__28721){
return (function (p1__28719_SHARP_){
return clojure.string.split.call(null,p1__28719_SHARP_,/[\/\\]/);
});})(pred__28720,expr__28721))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28720,expr__28721){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28723){if((e28723 instanceof Error)){
var e = e28723;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28723;

}
}})());
});
;})(path_parts,sep,root,pred__28720,expr__28721))
} else {
if(cljs.core.truth_(pred__28720.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28721))){
return ((function (pred__28720,expr__28721){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28720,expr__28721){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28720,expr__28721))
);

return deferred.addErrback(((function (deferred,pred__28720,expr__28721){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28720,expr__28721))
);
});
;})(pred__28720,expr__28721))
} else {
return ((function (pred__28720,expr__28721){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28720,expr__28721))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28724,callback){
var map__28727 = p__28724;
var map__28727__$1 = ((((!((map__28727 == null)))?((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var file_msg = map__28727__$1;
var request_url = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28727,map__28727__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28727,map__28727__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_28751){
var state_val_28752 = (state_28751[(1)]);
if((state_val_28752 === (7))){
var inst_28747 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28753_28773 = state_28751__$1;
(statearr_28753_28773[(2)] = inst_28747);

(statearr_28753_28773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (1))){
var state_28751__$1 = state_28751;
var statearr_28754_28774 = state_28751__$1;
(statearr_28754_28774[(2)] = null);

(statearr_28754_28774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (4))){
var inst_28731 = (state_28751[(7)]);
var inst_28731__$1 = (state_28751[(2)]);
var state_28751__$1 = (function (){var statearr_28755 = state_28751;
(statearr_28755[(7)] = inst_28731__$1);

return statearr_28755;
})();
if(cljs.core.truth_(inst_28731__$1)){
var statearr_28756_28775 = state_28751__$1;
(statearr_28756_28775[(1)] = (5));

} else {
var statearr_28757_28776 = state_28751__$1;
(statearr_28757_28776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (6))){
var state_28751__$1 = state_28751;
var statearr_28758_28777 = state_28751__$1;
(statearr_28758_28777[(2)] = null);

(statearr_28758_28777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (3))){
var inst_28749 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28751__$1,inst_28749);
} else {
if((state_val_28752 === (2))){
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28752 === (11))){
var inst_28743 = (state_28751[(2)]);
var state_28751__$1 = (function (){var statearr_28759 = state_28751;
(statearr_28759[(8)] = inst_28743);

return statearr_28759;
})();
var statearr_28760_28778 = state_28751__$1;
(statearr_28760_28778[(2)] = null);

(statearr_28760_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (9))){
var inst_28735 = (state_28751[(9)]);
var inst_28737 = (state_28751[(10)]);
var inst_28739 = inst_28737.call(null,inst_28735);
var state_28751__$1 = state_28751;
var statearr_28761_28779 = state_28751__$1;
(statearr_28761_28779[(2)] = inst_28739);

(statearr_28761_28779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (5))){
var inst_28731 = (state_28751[(7)]);
var inst_28733 = figwheel.client.file_reloading.blocking_load.call(null,inst_28731);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(8),inst_28733);
} else {
if((state_val_28752 === (10))){
var inst_28735 = (state_28751[(9)]);
var inst_28741 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28735);
var state_28751__$1 = state_28751;
var statearr_28762_28780 = state_28751__$1;
(statearr_28762_28780[(2)] = inst_28741);

(statearr_28762_28780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (8))){
var inst_28731 = (state_28751[(7)]);
var inst_28737 = (state_28751[(10)]);
var inst_28735 = (state_28751[(2)]);
var inst_28736 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28737__$1 = cljs.core.get.call(null,inst_28736,inst_28731);
var state_28751__$1 = (function (){var statearr_28763 = state_28751;
(statearr_28763[(9)] = inst_28735);

(statearr_28763[(10)] = inst_28737__$1);

return statearr_28763;
})();
if(cljs.core.truth_(inst_28737__$1)){
var statearr_28764_28781 = state_28751__$1;
(statearr_28764_28781[(1)] = (9));

} else {
var statearr_28765_28782 = state_28751__$1;
(statearr_28765_28782[(1)] = (10));

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
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24820__auto__ = null;
var figwheel$client$file_reloading$state_machine__24820__auto____0 = (function (){
var statearr_28769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28769[(0)] = figwheel$client$file_reloading$state_machine__24820__auto__);

(statearr_28769[(1)] = (1));

return statearr_28769;
});
var figwheel$client$file_reloading$state_machine__24820__auto____1 = (function (state_28751){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_28751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e28770){if((e28770 instanceof Object)){
var ex__24823__auto__ = e28770;
var statearr_28771_28783 = state_28751;
(statearr_28771_28783[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28784 = state_28751;
state_28751 = G__28784;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24820__auto__ = function(state_28751){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24820__auto____1.call(this,state_28751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24820__auto____0;
figwheel$client$file_reloading$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24820__auto____1;
return figwheel$client$file_reloading$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_28772 = f__24932__auto__.call(null);
(statearr_28772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28785,callback){
var map__28788 = p__28785;
var map__28788__$1 = ((((!((map__28788 == null)))?((((map__28788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28788):map__28788);
var file_msg = map__28788__$1;
var namespace = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28788,map__28788__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28788,map__28788__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28790){
var map__28793 = p__28790;
var map__28793__$1 = ((((!((map__28793 == null)))?((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var file_msg = map__28793__$1;
var namespace = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21630__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21630__auto__){
var or__21642__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
var or__21642__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21642__auto____$1)){
return or__21642__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21630__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28795,callback){
var map__28798 = p__28795;
var map__28798__$1 = ((((!((map__28798 == null)))?((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
var file_msg = map__28798__$1;
var request_url = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24931__auto___28886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___28886,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___28886,out){
return (function (state_28868){
var state_val_28869 = (state_28868[(1)]);
if((state_val_28869 === (1))){
var inst_28846 = cljs.core.nth.call(null,files,(0),null);
var inst_28847 = cljs.core.nthnext.call(null,files,(1));
var inst_28848 = files;
var state_28868__$1 = (function (){var statearr_28870 = state_28868;
(statearr_28870[(7)] = inst_28848);

(statearr_28870[(8)] = inst_28847);

(statearr_28870[(9)] = inst_28846);

return statearr_28870;
})();
var statearr_28871_28887 = state_28868__$1;
(statearr_28871_28887[(2)] = null);

(statearr_28871_28887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (2))){
var inst_28848 = (state_28868[(7)]);
var inst_28851 = (state_28868[(10)]);
var inst_28851__$1 = cljs.core.nth.call(null,inst_28848,(0),null);
var inst_28852 = cljs.core.nthnext.call(null,inst_28848,(1));
var inst_28853 = (inst_28851__$1 == null);
var inst_28854 = cljs.core.not.call(null,inst_28853);
var state_28868__$1 = (function (){var statearr_28872 = state_28868;
(statearr_28872[(11)] = inst_28852);

(statearr_28872[(10)] = inst_28851__$1);

return statearr_28872;
})();
if(inst_28854){
var statearr_28873_28888 = state_28868__$1;
(statearr_28873_28888[(1)] = (4));

} else {
var statearr_28874_28889 = state_28868__$1;
(statearr_28874_28889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (3))){
var inst_28866 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28868__$1,inst_28866);
} else {
if((state_val_28869 === (4))){
var inst_28851 = (state_28868[(10)]);
var inst_28856 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28851);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28868__$1,(7),inst_28856);
} else {
if((state_val_28869 === (5))){
var inst_28862 = cljs.core.async.close_BANG_.call(null,out);
var state_28868__$1 = state_28868;
var statearr_28875_28890 = state_28868__$1;
(statearr_28875_28890[(2)] = inst_28862);

(statearr_28875_28890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (6))){
var inst_28864 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28876_28891 = state_28868__$1;
(statearr_28876_28891[(2)] = inst_28864);

(statearr_28876_28891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (7))){
var inst_28852 = (state_28868[(11)]);
var inst_28858 = (state_28868[(2)]);
var inst_28859 = cljs.core.async.put_BANG_.call(null,out,inst_28858);
var inst_28848 = inst_28852;
var state_28868__$1 = (function (){var statearr_28877 = state_28868;
(statearr_28877[(7)] = inst_28848);

(statearr_28877[(12)] = inst_28859);

return statearr_28877;
})();
var statearr_28878_28892 = state_28868__$1;
(statearr_28878_28892[(2)] = null);

(statearr_28878_28892[(1)] = (2));


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
});})(c__24931__auto___28886,out))
;
return ((function (switch__24819__auto__,c__24931__auto___28886,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____0 = (function (){
var statearr_28882 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28882[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__);

(statearr_28882[(1)] = (1));

return statearr_28882;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____1 = (function (state_28868){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_28868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e28883){if((e28883 instanceof Object)){
var ex__24823__auto__ = e28883;
var statearr_28884_28893 = state_28868;
(statearr_28884_28893[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28894 = state_28868;
state_28868 = G__28894;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___28886,out))
})();
var state__24933__auto__ = (function (){var statearr_28885 = f__24932__auto__.call(null);
(statearr_28885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___28886);

return statearr_28885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___28886,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28895,opts){
var map__28899 = p__28895;
var map__28899__$1 = ((((!((map__28899 == null)))?((((map__28899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28899):map__28899);
var eval_body__$1 = cljs.core.get.call(null,map__28899__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21630__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21630__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21630__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28901){var e = e28901;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28902_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28902_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28907){
var vec__28908 = p__28907;
var k = cljs.core.nth.call(null,vec__28908,(0),null);
var v = cljs.core.nth.call(null,vec__28908,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28909){
var vec__28910 = p__28909;
var k = cljs.core.nth.call(null,vec__28910,(0),null);
var v = cljs.core.nth.call(null,vec__28910,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28914,p__28915){
var map__29162 = p__28914;
var map__29162__$1 = ((((!((map__29162 == null)))?((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var opts = map__29162__$1;
var before_jsload = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29163 = p__28915;
var map__29163__$1 = ((((!((map__29163 == null)))?((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var msg = map__29163__$1;
var files = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (7))){
var inst_29178 = (state_29316[(7)]);
var inst_29180 = (state_29316[(8)]);
var inst_29177 = (state_29316[(9)]);
var inst_29179 = (state_29316[(10)]);
var inst_29185 = cljs.core._nth.call(null,inst_29178,inst_29180);
var inst_29186 = figwheel.client.file_reloading.eval_body.call(null,inst_29185,opts);
var inst_29187 = (inst_29180 + (1));
var tmp29318 = inst_29178;
var tmp29319 = inst_29177;
var tmp29320 = inst_29179;
var inst_29177__$1 = tmp29319;
var inst_29178__$1 = tmp29318;
var inst_29179__$1 = tmp29320;
var inst_29180__$1 = inst_29187;
var state_29316__$1 = (function (){var statearr_29321 = state_29316;
(statearr_29321[(7)] = inst_29178__$1);

(statearr_29321[(8)] = inst_29180__$1);

(statearr_29321[(9)] = inst_29177__$1);

(statearr_29321[(11)] = inst_29186);

(statearr_29321[(10)] = inst_29179__$1);

return statearr_29321;
})();
var statearr_29322_29408 = state_29316__$1;
(statearr_29322_29408[(2)] = null);

(statearr_29322_29408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (20))){
var inst_29220 = (state_29316[(12)]);
var inst_29228 = figwheel.client.file_reloading.sort_files.call(null,inst_29220);
var state_29316__$1 = state_29316;
var statearr_29323_29409 = state_29316__$1;
(statearr_29323_29409[(2)] = inst_29228);

(statearr_29323_29409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (27))){
var state_29316__$1 = state_29316;
var statearr_29324_29410 = state_29316__$1;
(statearr_29324_29410[(2)] = null);

(statearr_29324_29410[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (1))){
var inst_29169 = (state_29316[(13)]);
var inst_29166 = before_jsload.call(null,files);
var inst_29167 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29168 = (function (){return ((function (inst_29169,inst_29166,inst_29167,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28911_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28911_SHARP_);
});
;})(inst_29169,inst_29166,inst_29167,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29169__$1 = cljs.core.filter.call(null,inst_29168,files);
var inst_29170 = cljs.core.not_empty.call(null,inst_29169__$1);
var state_29316__$1 = (function (){var statearr_29325 = state_29316;
(statearr_29325[(14)] = inst_29167);

(statearr_29325[(15)] = inst_29166);

(statearr_29325[(13)] = inst_29169__$1);

return statearr_29325;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29326_29411 = state_29316__$1;
(statearr_29326_29411[(1)] = (2));

} else {
var statearr_29327_29412 = state_29316__$1;
(statearr_29327_29412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (24))){
var state_29316__$1 = state_29316;
var statearr_29328_29413 = state_29316__$1;
(statearr_29328_29413[(2)] = null);

(statearr_29328_29413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (39))){
var inst_29270 = (state_29316[(16)]);
var state_29316__$1 = state_29316;
var statearr_29329_29414 = state_29316__$1;
(statearr_29329_29414[(2)] = inst_29270);

(statearr_29329_29414[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (46))){
var inst_29311 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29330_29415 = state_29316__$1;
(statearr_29330_29415[(2)] = inst_29311);

(statearr_29330_29415[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (4))){
var inst_29214 = (state_29316[(2)]);
var inst_29215 = cljs.core.List.EMPTY;
var inst_29216 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29215);
var inst_29217 = (function (){return ((function (inst_29214,inst_29215,inst_29216,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28912_SHARP_){
var and__21630__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28912_SHARP_);
if(cljs.core.truth_(and__21630__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28912_SHARP_));
} else {
return and__21630__auto__;
}
});
;})(inst_29214,inst_29215,inst_29216,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29218 = cljs.core.filter.call(null,inst_29217,files);
var inst_29219 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29220 = cljs.core.concat.call(null,inst_29218,inst_29219);
var state_29316__$1 = (function (){var statearr_29331 = state_29316;
(statearr_29331[(12)] = inst_29220);

(statearr_29331[(17)] = inst_29216);

(statearr_29331[(18)] = inst_29214);

return statearr_29331;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29332_29416 = state_29316__$1;
(statearr_29332_29416[(1)] = (16));

} else {
var statearr_29333_29417 = state_29316__$1;
(statearr_29333_29417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (15))){
var inst_29204 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29334_29418 = state_29316__$1;
(statearr_29334_29418[(2)] = inst_29204);

(statearr_29334_29418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (21))){
var inst_29230 = (state_29316[(19)]);
var inst_29230__$1 = (state_29316[(2)]);
var inst_29231 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29230__$1);
var state_29316__$1 = (function (){var statearr_29335 = state_29316;
(statearr_29335[(19)] = inst_29230__$1);

return statearr_29335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(22),inst_29231);
} else {
if((state_val_29317 === (31))){
var inst_29314 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (32))){
var inst_29270 = (state_29316[(16)]);
var inst_29275 = inst_29270.cljs$lang$protocol_mask$partition0$;
var inst_29276 = (inst_29275 & (64));
var inst_29277 = inst_29270.cljs$core$ISeq$;
var inst_29278 = (inst_29276) || (inst_29277);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29278)){
var statearr_29336_29419 = state_29316__$1;
(statearr_29336_29419[(1)] = (35));

} else {
var statearr_29337_29420 = state_29316__$1;
(statearr_29337_29420[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (40))){
var inst_29291 = (state_29316[(20)]);
var inst_29290 = (state_29316[(2)]);
var inst_29291__$1 = cljs.core.get.call(null,inst_29290,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29292 = cljs.core.get.call(null,inst_29290,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29293 = cljs.core.not_empty.call(null,inst_29291__$1);
var state_29316__$1 = (function (){var statearr_29338 = state_29316;
(statearr_29338[(21)] = inst_29292);

(statearr_29338[(20)] = inst_29291__$1);

return statearr_29338;
})();
if(cljs.core.truth_(inst_29293)){
var statearr_29339_29421 = state_29316__$1;
(statearr_29339_29421[(1)] = (41));

} else {
var statearr_29340_29422 = state_29316__$1;
(statearr_29340_29422[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (33))){
var state_29316__$1 = state_29316;
var statearr_29341_29423 = state_29316__$1;
(statearr_29341_29423[(2)] = false);

(statearr_29341_29423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (13))){
var inst_29190 = (state_29316[(22)]);
var inst_29194 = cljs.core.chunk_first.call(null,inst_29190);
var inst_29195 = cljs.core.chunk_rest.call(null,inst_29190);
var inst_29196 = cljs.core.count.call(null,inst_29194);
var inst_29177 = inst_29195;
var inst_29178 = inst_29194;
var inst_29179 = inst_29196;
var inst_29180 = (0);
var state_29316__$1 = (function (){var statearr_29342 = state_29316;
(statearr_29342[(7)] = inst_29178);

(statearr_29342[(8)] = inst_29180);

(statearr_29342[(9)] = inst_29177);

(statearr_29342[(10)] = inst_29179);

return statearr_29342;
})();
var statearr_29343_29424 = state_29316__$1;
(statearr_29343_29424[(2)] = null);

(statearr_29343_29424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (22))){
var inst_29233 = (state_29316[(23)]);
var inst_29230 = (state_29316[(19)]);
var inst_29234 = (state_29316[(24)]);
var inst_29238 = (state_29316[(25)]);
var inst_29233__$1 = (state_29316[(2)]);
var inst_29234__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29233__$1);
var inst_29235 = (function (){var all_files = inst_29230;
var res_SINGLEQUOTE_ = inst_29233__$1;
var res = inst_29234__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29233,inst_29230,inst_29234,inst_29238,inst_29233__$1,inst_29234__$1,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28913_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28913_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29233,inst_29230,inst_29234,inst_29238,inst_29233__$1,inst_29234__$1,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29236 = cljs.core.filter.call(null,inst_29235,inst_29233__$1);
var inst_29237 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29237);
var inst_29239 = cljs.core.not_empty.call(null,inst_29238__$1);
var state_29316__$1 = (function (){var statearr_29344 = state_29316;
(statearr_29344[(23)] = inst_29233__$1);

(statearr_29344[(24)] = inst_29234__$1);

(statearr_29344[(26)] = inst_29236);

(statearr_29344[(25)] = inst_29238__$1);

return statearr_29344;
})();
if(cljs.core.truth_(inst_29239)){
var statearr_29345_29425 = state_29316__$1;
(statearr_29345_29425[(1)] = (23));

} else {
var statearr_29346_29426 = state_29316__$1;
(statearr_29346_29426[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (36))){
var state_29316__$1 = state_29316;
var statearr_29347_29427 = state_29316__$1;
(statearr_29347_29427[(2)] = false);

(statearr_29347_29427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (41))){
var inst_29291 = (state_29316[(20)]);
var inst_29295 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29296 = cljs.core.map.call(null,inst_29295,inst_29291);
var inst_29297 = cljs.core.pr_str.call(null,inst_29296);
var inst_29298 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29297)].join('');
var inst_29299 = figwheel.client.utils.log.call(null,inst_29298);
var state_29316__$1 = state_29316;
var statearr_29348_29428 = state_29316__$1;
(statearr_29348_29428[(2)] = inst_29299);

(statearr_29348_29428[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (43))){
var inst_29292 = (state_29316[(21)]);
var inst_29302 = (state_29316[(2)]);
var inst_29303 = cljs.core.not_empty.call(null,inst_29292);
var state_29316__$1 = (function (){var statearr_29349 = state_29316;
(statearr_29349[(27)] = inst_29302);

return statearr_29349;
})();
if(cljs.core.truth_(inst_29303)){
var statearr_29350_29429 = state_29316__$1;
(statearr_29350_29429[(1)] = (44));

} else {
var statearr_29351_29430 = state_29316__$1;
(statearr_29351_29430[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (29))){
var inst_29233 = (state_29316[(23)]);
var inst_29230 = (state_29316[(19)]);
var inst_29234 = (state_29316[(24)]);
var inst_29270 = (state_29316[(16)]);
var inst_29236 = (state_29316[(26)]);
var inst_29238 = (state_29316[(25)]);
var inst_29266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29269 = (function (){var all_files = inst_29230;
var res_SINGLEQUOTE_ = inst_29233;
var res = inst_29234;
var files_not_loaded = inst_29236;
var dependencies_that_loaded = inst_29238;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29270,inst_29236,inst_29238,inst_29266,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29268){
var map__29352 = p__29268;
var map__29352__$1 = ((((!((map__29352 == null)))?((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var namespace = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29270,inst_29236,inst_29238,inst_29266,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29270__$1 = cljs.core.group_by.call(null,inst_29269,inst_29236);
var inst_29272 = (inst_29270__$1 == null);
var inst_29273 = cljs.core.not.call(null,inst_29272);
var state_29316__$1 = (function (){var statearr_29354 = state_29316;
(statearr_29354[(28)] = inst_29266);

(statearr_29354[(16)] = inst_29270__$1);

return statearr_29354;
})();
if(inst_29273){
var statearr_29355_29431 = state_29316__$1;
(statearr_29355_29431[(1)] = (32));

} else {
var statearr_29356_29432 = state_29316__$1;
(statearr_29356_29432[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (44))){
var inst_29292 = (state_29316[(21)]);
var inst_29305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29292);
var inst_29306 = cljs.core.pr_str.call(null,inst_29305);
var inst_29307 = [cljs.core.str("not required: "),cljs.core.str(inst_29306)].join('');
var inst_29308 = figwheel.client.utils.log.call(null,inst_29307);
var state_29316__$1 = state_29316;
var statearr_29357_29433 = state_29316__$1;
(statearr_29357_29433[(2)] = inst_29308);

(statearr_29357_29433[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (6))){
var inst_29211 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29358_29434 = state_29316__$1;
(statearr_29358_29434[(2)] = inst_29211);

(statearr_29358_29434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (28))){
var inst_29236 = (state_29316[(26)]);
var inst_29263 = (state_29316[(2)]);
var inst_29264 = cljs.core.not_empty.call(null,inst_29236);
var state_29316__$1 = (function (){var statearr_29359 = state_29316;
(statearr_29359[(29)] = inst_29263);

return statearr_29359;
})();
if(cljs.core.truth_(inst_29264)){
var statearr_29360_29435 = state_29316__$1;
(statearr_29360_29435[(1)] = (29));

} else {
var statearr_29361_29436 = state_29316__$1;
(statearr_29361_29436[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (25))){
var inst_29234 = (state_29316[(24)]);
var inst_29250 = (state_29316[(2)]);
var inst_29251 = cljs.core.not_empty.call(null,inst_29234);
var state_29316__$1 = (function (){var statearr_29362 = state_29316;
(statearr_29362[(30)] = inst_29250);

return statearr_29362;
})();
if(cljs.core.truth_(inst_29251)){
var statearr_29363_29437 = state_29316__$1;
(statearr_29363_29437[(1)] = (26));

} else {
var statearr_29364_29438 = state_29316__$1;
(statearr_29364_29438[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (34))){
var inst_29285 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29285)){
var statearr_29365_29439 = state_29316__$1;
(statearr_29365_29439[(1)] = (38));

} else {
var statearr_29366_29440 = state_29316__$1;
(statearr_29366_29440[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (17))){
var state_29316__$1 = state_29316;
var statearr_29367_29441 = state_29316__$1;
(statearr_29367_29441[(2)] = recompile_dependents);

(statearr_29367_29441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (3))){
var state_29316__$1 = state_29316;
var statearr_29368_29442 = state_29316__$1;
(statearr_29368_29442[(2)] = null);

(statearr_29368_29442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (12))){
var inst_29207 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29369_29443 = state_29316__$1;
(statearr_29369_29443[(2)] = inst_29207);

(statearr_29369_29443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (2))){
var inst_29169 = (state_29316[(13)]);
var inst_29176 = cljs.core.seq.call(null,inst_29169);
var inst_29177 = inst_29176;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29316__$1 = (function (){var statearr_29370 = state_29316;
(statearr_29370[(7)] = inst_29178);

(statearr_29370[(8)] = inst_29180);

(statearr_29370[(9)] = inst_29177);

(statearr_29370[(10)] = inst_29179);

return statearr_29370;
})();
var statearr_29371_29444 = state_29316__$1;
(statearr_29371_29444[(2)] = null);

(statearr_29371_29444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (23))){
var inst_29233 = (state_29316[(23)]);
var inst_29230 = (state_29316[(19)]);
var inst_29234 = (state_29316[(24)]);
var inst_29236 = (state_29316[(26)]);
var inst_29238 = (state_29316[(25)]);
var inst_29241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29243 = (function (){var all_files = inst_29230;
var res_SINGLEQUOTE_ = inst_29233;
var res = inst_29234;
var files_not_loaded = inst_29236;
var dependencies_that_loaded = inst_29238;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29241,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29242){
var map__29372 = p__29242;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var request_url = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29241,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29244 = cljs.core.reverse.call(null,inst_29238);
var inst_29245 = cljs.core.map.call(null,inst_29243,inst_29244);
var inst_29246 = cljs.core.pr_str.call(null,inst_29245);
var inst_29247 = figwheel.client.utils.log.call(null,inst_29246);
var state_29316__$1 = (function (){var statearr_29374 = state_29316;
(statearr_29374[(31)] = inst_29241);

return statearr_29374;
})();
var statearr_29375_29445 = state_29316__$1;
(statearr_29375_29445[(2)] = inst_29247);

(statearr_29375_29445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (35))){
var state_29316__$1 = state_29316;
var statearr_29376_29446 = state_29316__$1;
(statearr_29376_29446[(2)] = true);

(statearr_29376_29446[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (19))){
var inst_29220 = (state_29316[(12)]);
var inst_29226 = figwheel.client.file_reloading.expand_files.call(null,inst_29220);
var state_29316__$1 = state_29316;
var statearr_29377_29447 = state_29316__$1;
(statearr_29377_29447[(2)] = inst_29226);

(statearr_29377_29447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (11))){
var state_29316__$1 = state_29316;
var statearr_29378_29448 = state_29316__$1;
(statearr_29378_29448[(2)] = null);

(statearr_29378_29448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (9))){
var inst_29209 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29379_29449 = state_29316__$1;
(statearr_29379_29449[(2)] = inst_29209);

(statearr_29379_29449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (5))){
var inst_29180 = (state_29316[(8)]);
var inst_29179 = (state_29316[(10)]);
var inst_29182 = (inst_29180 < inst_29179);
var inst_29183 = inst_29182;
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29183)){
var statearr_29380_29450 = state_29316__$1;
(statearr_29380_29450[(1)] = (7));

} else {
var statearr_29381_29451 = state_29316__$1;
(statearr_29381_29451[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (14))){
var inst_29190 = (state_29316[(22)]);
var inst_29199 = cljs.core.first.call(null,inst_29190);
var inst_29200 = figwheel.client.file_reloading.eval_body.call(null,inst_29199,opts);
var inst_29201 = cljs.core.next.call(null,inst_29190);
var inst_29177 = inst_29201;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29316__$1 = (function (){var statearr_29382 = state_29316;
(statearr_29382[(7)] = inst_29178);

(statearr_29382[(8)] = inst_29180);

(statearr_29382[(9)] = inst_29177);

(statearr_29382[(32)] = inst_29200);

(statearr_29382[(10)] = inst_29179);

return statearr_29382;
})();
var statearr_29383_29452 = state_29316__$1;
(statearr_29383_29452[(2)] = null);

(statearr_29383_29452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (45))){
var state_29316__$1 = state_29316;
var statearr_29384_29453 = state_29316__$1;
(statearr_29384_29453[(2)] = null);

(statearr_29384_29453[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (26))){
var inst_29233 = (state_29316[(23)]);
var inst_29230 = (state_29316[(19)]);
var inst_29234 = (state_29316[(24)]);
var inst_29236 = (state_29316[(26)]);
var inst_29238 = (state_29316[(25)]);
var inst_29253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29255 = (function (){var all_files = inst_29230;
var res_SINGLEQUOTE_ = inst_29233;
var res = inst_29234;
var files_not_loaded = inst_29236;
var dependencies_that_loaded = inst_29238;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29253,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29254){
var map__29385 = p__29254;
var map__29385__$1 = ((((!((map__29385 == null)))?((((map__29385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385):map__29385);
var namespace = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29253,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29256 = cljs.core.map.call(null,inst_29255,inst_29234);
var inst_29257 = cljs.core.pr_str.call(null,inst_29256);
var inst_29258 = figwheel.client.utils.log.call(null,inst_29257);
var inst_29259 = (function (){var all_files = inst_29230;
var res_SINGLEQUOTE_ = inst_29233;
var res = inst_29234;
var files_not_loaded = inst_29236;
var dependencies_that_loaded = inst_29238;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29253,inst_29255,inst_29256,inst_29257,inst_29258,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29233,inst_29230,inst_29234,inst_29236,inst_29238,inst_29253,inst_29255,inst_29256,inst_29257,inst_29258,state_val_29317,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29260 = setTimeout(inst_29259,(10));
var state_29316__$1 = (function (){var statearr_29387 = state_29316;
(statearr_29387[(33)] = inst_29258);

(statearr_29387[(34)] = inst_29253);

return statearr_29387;
})();
var statearr_29388_29454 = state_29316__$1;
(statearr_29388_29454[(2)] = inst_29260);

(statearr_29388_29454[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (16))){
var state_29316__$1 = state_29316;
var statearr_29389_29455 = state_29316__$1;
(statearr_29389_29455[(2)] = reload_dependents);

(statearr_29389_29455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (38))){
var inst_29270 = (state_29316[(16)]);
var inst_29287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29270);
var state_29316__$1 = state_29316;
var statearr_29390_29456 = state_29316__$1;
(statearr_29390_29456[(2)] = inst_29287);

(statearr_29390_29456[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (30))){
var state_29316__$1 = state_29316;
var statearr_29391_29457 = state_29316__$1;
(statearr_29391_29457[(2)] = null);

(statearr_29391_29457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (10))){
var inst_29190 = (state_29316[(22)]);
var inst_29192 = cljs.core.chunked_seq_QMARK_.call(null,inst_29190);
var state_29316__$1 = state_29316;
if(inst_29192){
var statearr_29392_29458 = state_29316__$1;
(statearr_29392_29458[(1)] = (13));

} else {
var statearr_29393_29459 = state_29316__$1;
(statearr_29393_29459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (18))){
var inst_29224 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29224)){
var statearr_29394_29460 = state_29316__$1;
(statearr_29394_29460[(1)] = (19));

} else {
var statearr_29395_29461 = state_29316__$1;
(statearr_29395_29461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (42))){
var state_29316__$1 = state_29316;
var statearr_29396_29462 = state_29316__$1;
(statearr_29396_29462[(2)] = null);

(statearr_29396_29462[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (37))){
var inst_29282 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29397_29463 = state_29316__$1;
(statearr_29397_29463[(2)] = inst_29282);

(statearr_29397_29463[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (8))){
var inst_29177 = (state_29316[(9)]);
var inst_29190 = (state_29316[(22)]);
var inst_29190__$1 = cljs.core.seq.call(null,inst_29177);
var state_29316__$1 = (function (){var statearr_29398 = state_29316;
(statearr_29398[(22)] = inst_29190__$1);

return statearr_29398;
})();
if(inst_29190__$1){
var statearr_29399_29464 = state_29316__$1;
(statearr_29399_29464[(1)] = (10));

} else {
var statearr_29400_29465 = state_29316__$1;
(statearr_29400_29465[(1)] = (11));

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
});})(c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24819__auto__,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____0 = (function (){
var statearr_29404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29404[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__);

(statearr_29404[(1)] = (1));

return statearr_29404;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____1 = (function (state_29316){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_29316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e29405){if((e29405 instanceof Object)){
var ex__24823__auto__ = e29405;
var statearr_29406_29466 = state_29316;
(statearr_29406_29466[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29467 = state_29316;
state_29316 = G__29467;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24933__auto__ = (function (){var statearr_29407 = f__24932__auto__.call(null);
(statearr_29407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__,map__29162,map__29162__$1,opts,before_jsload,on_jsload,reload_dependents,map__29163,map__29163__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24931__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29470,link){
var map__29473 = p__29470;
var map__29473__$1 = ((((!((map__29473 == null)))?((((map__29473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);
var file = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29473,map__29473__$1,file){
return (function (p1__29468_SHARP_,p2__29469_SHARP_){
if(cljs.core._EQ_.call(null,p1__29468_SHARP_,p2__29469_SHARP_)){
return p1__29468_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29473,map__29473__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29479){
var map__29480 = p__29479;
var map__29480__$1 = ((((!((map__29480 == null)))?((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var match_length = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29475_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29475_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29482 = [];
var len__22712__auto___29485 = arguments.length;
var i__22713__auto___29486 = (0);
while(true){
if((i__22713__auto___29486 < len__22712__auto___29485)){
args29482.push((arguments[i__22713__auto___29486]));

var G__29487 = (i__22713__auto___29486 + (1));
i__22713__auto___29486 = G__29487;
continue;
} else {
}
break;
}

var G__29484 = args29482.length;
switch (G__29484) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29482.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29489_SHARP_,p2__29490_SHARP_){
return cljs.core.assoc.call(null,p1__29489_SHARP_,cljs.core.get.call(null,p2__29490_SHARP_,key),p2__29490_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29491){
var map__29494 = p__29491;
var map__29494__$1 = ((((!((map__29494 == null)))?((((map__29494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29494):map__29494);
var f_data = map__29494__$1;
var file = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29496,files_msg){
var map__29503 = p__29496;
var map__29503__$1 = ((((!((map__29503 == null)))?((((map__29503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29503):map__29503);
var opts = map__29503__$1;
var on_cssload = cljs.core.get.call(null,map__29503__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29505_29509 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29506_29510 = null;
var count__29507_29511 = (0);
var i__29508_29512 = (0);
while(true){
if((i__29508_29512 < count__29507_29511)){
var f_29513 = cljs.core._nth.call(null,chunk__29506_29510,i__29508_29512);
figwheel.client.file_reloading.reload_css_file.call(null,f_29513);

var G__29514 = seq__29505_29509;
var G__29515 = chunk__29506_29510;
var G__29516 = count__29507_29511;
var G__29517 = (i__29508_29512 + (1));
seq__29505_29509 = G__29514;
chunk__29506_29510 = G__29515;
count__29507_29511 = G__29516;
i__29508_29512 = G__29517;
continue;
} else {
var temp__4657__auto___29518 = cljs.core.seq.call(null,seq__29505_29509);
if(temp__4657__auto___29518){
var seq__29505_29519__$1 = temp__4657__auto___29518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29505_29519__$1)){
var c__22453__auto___29520 = cljs.core.chunk_first.call(null,seq__29505_29519__$1);
var G__29521 = cljs.core.chunk_rest.call(null,seq__29505_29519__$1);
var G__29522 = c__22453__auto___29520;
var G__29523 = cljs.core.count.call(null,c__22453__auto___29520);
var G__29524 = (0);
seq__29505_29509 = G__29521;
chunk__29506_29510 = G__29522;
count__29507_29511 = G__29523;
i__29508_29512 = G__29524;
continue;
} else {
var f_29525 = cljs.core.first.call(null,seq__29505_29519__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29525);

var G__29526 = cljs.core.next.call(null,seq__29505_29519__$1);
var G__29527 = null;
var G__29528 = (0);
var G__29529 = (0);
seq__29505_29509 = G__29526;
chunk__29506_29510 = G__29527;
count__29507_29511 = G__29528;
i__29508_29512 = G__29529;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29503,map__29503__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29503,map__29503__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467991930106