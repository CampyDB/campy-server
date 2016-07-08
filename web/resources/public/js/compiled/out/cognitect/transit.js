// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23046_23050 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23047_23051 = null;
var count__23048_23052 = (0);
var i__23049_23053 = (0);
while(true){
if((i__23049_23053 < count__23048_23052)){
var k_23054 = cljs.core._nth.call(null,chunk__23047_23051,i__23049_23053);
var v_23055 = (b[k_23054]);
(a[k_23054] = v_23055);

var G__23056 = seq__23046_23050;
var G__23057 = chunk__23047_23051;
var G__23058 = count__23048_23052;
var G__23059 = (i__23049_23053 + (1));
seq__23046_23050 = G__23056;
chunk__23047_23051 = G__23057;
count__23048_23052 = G__23058;
i__23049_23053 = G__23059;
continue;
} else {
var temp__4657__auto___23060 = cljs.core.seq.call(null,seq__23046_23050);
if(temp__4657__auto___23060){
var seq__23046_23061__$1 = temp__4657__auto___23060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23046_23061__$1)){
var c__22453__auto___23062 = cljs.core.chunk_first.call(null,seq__23046_23061__$1);
var G__23063 = cljs.core.chunk_rest.call(null,seq__23046_23061__$1);
var G__23064 = c__22453__auto___23062;
var G__23065 = cljs.core.count.call(null,c__22453__auto___23062);
var G__23066 = (0);
seq__23046_23050 = G__23063;
chunk__23047_23051 = G__23064;
count__23048_23052 = G__23065;
i__23049_23053 = G__23066;
continue;
} else {
var k_23067 = cljs.core.first.call(null,seq__23046_23061__$1);
var v_23068 = (b[k_23067]);
(a[k_23067] = v_23068);

var G__23069 = cljs.core.next.call(null,seq__23046_23061__$1);
var G__23070 = null;
var G__23071 = (0);
var G__23072 = (0);
seq__23046_23050 = G__23069;
chunk__23047_23051 = G__23070;
count__23048_23052 = G__23071;
i__23049_23053 = G__23072;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23073 = [];
var len__22712__auto___23076 = arguments.length;
var i__22713__auto___23077 = (0);
while(true){
if((i__22713__auto___23077 < len__22712__auto___23076)){
args23073.push((arguments[i__22713__auto___23077]));

var G__23078 = (i__22713__auto___23077 + (1));
i__22713__auto___23077 = G__23078;
continue;
} else {
}
break;
}

var G__23075 = args23073.length;
switch (G__23075) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23073.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23080 = (i + (2));
var G__23081 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23080;
ret = G__23081;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23082_23086 = cljs.core.seq.call(null,v);
var chunk__23083_23087 = null;
var count__23084_23088 = (0);
var i__23085_23089 = (0);
while(true){
if((i__23085_23089 < count__23084_23088)){
var x_23090 = cljs.core._nth.call(null,chunk__23083_23087,i__23085_23089);
ret.push(x_23090);

var G__23091 = seq__23082_23086;
var G__23092 = chunk__23083_23087;
var G__23093 = count__23084_23088;
var G__23094 = (i__23085_23089 + (1));
seq__23082_23086 = G__23091;
chunk__23083_23087 = G__23092;
count__23084_23088 = G__23093;
i__23085_23089 = G__23094;
continue;
} else {
var temp__4657__auto___23095 = cljs.core.seq.call(null,seq__23082_23086);
if(temp__4657__auto___23095){
var seq__23082_23096__$1 = temp__4657__auto___23095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23082_23096__$1)){
var c__22453__auto___23097 = cljs.core.chunk_first.call(null,seq__23082_23096__$1);
var G__23098 = cljs.core.chunk_rest.call(null,seq__23082_23096__$1);
var G__23099 = c__22453__auto___23097;
var G__23100 = cljs.core.count.call(null,c__22453__auto___23097);
var G__23101 = (0);
seq__23082_23086 = G__23098;
chunk__23083_23087 = G__23099;
count__23084_23088 = G__23100;
i__23085_23089 = G__23101;
continue;
} else {
var x_23102 = cljs.core.first.call(null,seq__23082_23096__$1);
ret.push(x_23102);

var G__23103 = cljs.core.next.call(null,seq__23082_23096__$1);
var G__23104 = null;
var G__23105 = (0);
var G__23106 = (0);
seq__23082_23086 = G__23103;
chunk__23083_23087 = G__23104;
count__23084_23088 = G__23105;
i__23085_23089 = G__23106;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23107_23111 = cljs.core.seq.call(null,v);
var chunk__23108_23112 = null;
var count__23109_23113 = (0);
var i__23110_23114 = (0);
while(true){
if((i__23110_23114 < count__23109_23113)){
var x_23115 = cljs.core._nth.call(null,chunk__23108_23112,i__23110_23114);
ret.push(x_23115);

var G__23116 = seq__23107_23111;
var G__23117 = chunk__23108_23112;
var G__23118 = count__23109_23113;
var G__23119 = (i__23110_23114 + (1));
seq__23107_23111 = G__23116;
chunk__23108_23112 = G__23117;
count__23109_23113 = G__23118;
i__23110_23114 = G__23119;
continue;
} else {
var temp__4657__auto___23120 = cljs.core.seq.call(null,seq__23107_23111);
if(temp__4657__auto___23120){
var seq__23107_23121__$1 = temp__4657__auto___23120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23107_23121__$1)){
var c__22453__auto___23122 = cljs.core.chunk_first.call(null,seq__23107_23121__$1);
var G__23123 = cljs.core.chunk_rest.call(null,seq__23107_23121__$1);
var G__23124 = c__22453__auto___23122;
var G__23125 = cljs.core.count.call(null,c__22453__auto___23122);
var G__23126 = (0);
seq__23107_23111 = G__23123;
chunk__23108_23112 = G__23124;
count__23109_23113 = G__23125;
i__23110_23114 = G__23126;
continue;
} else {
var x_23127 = cljs.core.first.call(null,seq__23107_23121__$1);
ret.push(x_23127);

var G__23128 = cljs.core.next.call(null,seq__23107_23121__$1);
var G__23129 = null;
var G__23130 = (0);
var G__23131 = (0);
seq__23107_23111 = G__23128;
chunk__23108_23112 = G__23129;
count__23109_23113 = G__23130;
i__23110_23114 = G__23131;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23132_23136 = cljs.core.seq.call(null,v);
var chunk__23133_23137 = null;
var count__23134_23138 = (0);
var i__23135_23139 = (0);
while(true){
if((i__23135_23139 < count__23134_23138)){
var x_23140 = cljs.core._nth.call(null,chunk__23133_23137,i__23135_23139);
ret.push(x_23140);

var G__23141 = seq__23132_23136;
var G__23142 = chunk__23133_23137;
var G__23143 = count__23134_23138;
var G__23144 = (i__23135_23139 + (1));
seq__23132_23136 = G__23141;
chunk__23133_23137 = G__23142;
count__23134_23138 = G__23143;
i__23135_23139 = G__23144;
continue;
} else {
var temp__4657__auto___23145 = cljs.core.seq.call(null,seq__23132_23136);
if(temp__4657__auto___23145){
var seq__23132_23146__$1 = temp__4657__auto___23145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23132_23146__$1)){
var c__22453__auto___23147 = cljs.core.chunk_first.call(null,seq__23132_23146__$1);
var G__23148 = cljs.core.chunk_rest.call(null,seq__23132_23146__$1);
var G__23149 = c__22453__auto___23147;
var G__23150 = cljs.core.count.call(null,c__22453__auto___23147);
var G__23151 = (0);
seq__23132_23136 = G__23148;
chunk__23133_23137 = G__23149;
count__23134_23138 = G__23150;
i__23135_23139 = G__23151;
continue;
} else {
var x_23152 = cljs.core.first.call(null,seq__23132_23146__$1);
ret.push(x_23152);

var G__23153 = cljs.core.next.call(null,seq__23132_23146__$1);
var G__23154 = null;
var G__23155 = (0);
var G__23156 = (0);
seq__23132_23136 = G__23153;
chunk__23133_23137 = G__23154;
count__23134_23138 = G__23155;
i__23135_23139 = G__23156;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23157 = [];
var len__22712__auto___23168 = arguments.length;
var i__22713__auto___23169 = (0);
while(true){
if((i__22713__auto___23169 < len__22712__auto___23168)){
args23157.push((arguments[i__22713__auto___23169]));

var G__23170 = (i__22713__auto___23169 + (1));
i__22713__auto___23169 = G__23170;
continue;
} else {
}
break;
}

var G__23159 = args23157.length;
switch (G__23159) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23157.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23160 = obj;
G__23160.push(kfn.call(null,k),vfn.call(null,v));

return G__23160;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23161 = cljs.core.clone.call(null,handlers);
x23161.forEach = ((function (x23161,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23162 = cljs.core.seq.call(null,coll);
var chunk__23163 = null;
var count__23164 = (0);
var i__23165 = (0);
while(true){
if((i__23165 < count__23164)){
var vec__23166 = cljs.core._nth.call(null,chunk__23163,i__23165);
var k = cljs.core.nth.call(null,vec__23166,(0),null);
var v = cljs.core.nth.call(null,vec__23166,(1),null);
f.call(null,v,k);

var G__23172 = seq__23162;
var G__23173 = chunk__23163;
var G__23174 = count__23164;
var G__23175 = (i__23165 + (1));
seq__23162 = G__23172;
chunk__23163 = G__23173;
count__23164 = G__23174;
i__23165 = G__23175;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23162);
if(temp__4657__auto__){
var seq__23162__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23162__$1)){
var c__22453__auto__ = cljs.core.chunk_first.call(null,seq__23162__$1);
var G__23176 = cljs.core.chunk_rest.call(null,seq__23162__$1);
var G__23177 = c__22453__auto__;
var G__23178 = cljs.core.count.call(null,c__22453__auto__);
var G__23179 = (0);
seq__23162 = G__23176;
chunk__23163 = G__23177;
count__23164 = G__23178;
i__23165 = G__23179;
continue;
} else {
var vec__23167 = cljs.core.first.call(null,seq__23162__$1);
var k = cljs.core.nth.call(null,vec__23167,(0),null);
var v = cljs.core.nth.call(null,vec__23167,(1),null);
f.call(null,v,k);

var G__23180 = cljs.core.next.call(null,seq__23162__$1);
var G__23181 = null;
var G__23182 = (0);
var G__23183 = (0);
seq__23162 = G__23180;
chunk__23163 = G__23181;
count__23164 = G__23182;
i__23165 = G__23183;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23161,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23161;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args23184 = [];
var len__22712__auto___23190 = arguments.length;
var i__22713__auto___23191 = (0);
while(true){
if((i__22713__auto___23191 < len__22712__auto___23190)){
args23184.push((arguments[i__22713__auto___23191]));

var G__23192 = (i__22713__auto___23191 + (1));
i__22713__auto___23191 = G__23192;
continue;
} else {
}
break;
}

var G__23186 = args23184.length;
switch (G__23186) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23184.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23187 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23188){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23188 = meta23188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23189,meta23188__$1){
var self__ = this;
var _23189__$1 = this;
return (new cognitect.transit.t_cognitect$transit23187(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23188__$1));
});

cognitect.transit.t_cognitect$transit23187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23189){
var self__ = this;
var _23189__$1 = this;
return self__.meta23188;
});

cognitect.transit.t_cognitect$transit23187.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23187.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23187.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23187.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23188","meta23188",-111341327,null)], null);
});

cognitect.transit.t_cognitect$transit23187.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23187.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23187";

cognitect.transit.t_cognitect$transit23187.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cognitect.transit/t_cognitect$transit23187");
});

cognitect.transit.__GT_t_cognitect$transit23187 = (function cognitect$transit$__GT_t_cognitect$transit23187(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23188){
return (new cognitect.transit.t_cognitect$transit23187(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23188));
});

}

return (new cognitect.transit.t_cognitect$transit23187(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__21642__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1467991925108