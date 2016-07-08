// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24976 = [];
var len__22712__auto___24982 = arguments.length;
var i__22713__auto___24983 = (0);
while(true){
if((i__22713__auto___24983 < len__22712__auto___24982)){
args24976.push((arguments[i__22713__auto___24983]));

var G__24984 = (i__22713__auto___24983 + (1));
i__22713__auto___24983 = G__24984;
continue;
} else {
}
break;
}

var G__24978 = args24976.length;
switch (G__24978) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24976.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24979 = (function (f,blockable,meta24980){
this.f = f;
this.blockable = blockable;
this.meta24980 = meta24980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24981,meta24980__$1){
var self__ = this;
var _24981__$1 = this;
return (new cljs.core.async.t_cljs$core$async24979(self__.f,self__.blockable,meta24980__$1));
});

cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24981){
var self__ = this;
var _24981__$1 = this;
return self__.meta24980;
});

cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24980","meta24980",1916389164,null)], null);
});

cljs.core.async.t_cljs$core$async24979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24979";

cljs.core.async.t_cljs$core$async24979.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async24979");
});

cljs.core.async.__GT_t_cljs$core$async24979 = (function cljs$core$async$__GT_t_cljs$core$async24979(f__$1,blockable__$1,meta24980){
return (new cljs.core.async.t_cljs$core$async24979(f__$1,blockable__$1,meta24980));
});

}

return (new cljs.core.async.t_cljs$core$async24979(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24988 = [];
var len__22712__auto___24991 = arguments.length;
var i__22713__auto___24992 = (0);
while(true){
if((i__22713__auto___24992 < len__22712__auto___24991)){
args24988.push((arguments[i__22713__auto___24992]));

var G__24993 = (i__22713__auto___24992 + (1));
i__22713__auto___24992 = G__24993;
continue;
} else {
}
break;
}

var G__24990 = args24988.length;
switch (G__24990) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24988.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24995 = [];
var len__22712__auto___24998 = arguments.length;
var i__22713__auto___24999 = (0);
while(true){
if((i__22713__auto___24999 < len__22712__auto___24998)){
args24995.push((arguments[i__22713__auto___24999]));

var G__25000 = (i__22713__auto___24999 + (1));
i__22713__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var G__24997 = args24995.length;
switch (G__24997) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24995.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25002 = [];
var len__22712__auto___25005 = arguments.length;
var i__22713__auto___25006 = (0);
while(true){
if((i__22713__auto___25006 < len__22712__auto___25005)){
args25002.push((arguments[i__22713__auto___25006]));

var G__25007 = (i__22713__auto___25006 + (1));
i__22713__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var G__25004 = args25002.length;
switch (G__25004) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25002.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25009 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25009);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25009,ret){
return (function (){
return fn1.call(null,val_25009);
});})(val_25009,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25010 = [];
var len__22712__auto___25013 = arguments.length;
var i__22713__auto___25014 = (0);
while(true){
if((i__22713__auto___25014 < len__22712__auto___25013)){
args25010.push((arguments[i__22713__auto___25014]));

var G__25015 = (i__22713__auto___25014 + (1));
i__22713__auto___25014 = G__25015;
continue;
} else {
}
break;
}

var G__25012 = args25010.length;
switch (G__25012) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25010.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22557__auto___25017 = n;
var x_25018 = (0);
while(true){
if((x_25018 < n__22557__auto___25017)){
(a[x_25018] = (0));

var G__25019 = (x_25018 + (1));
x_25018 = G__25019;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25020 = (i + (1));
i = G__25020;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25024 = (function (alt_flag,flag,meta25025){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25025 = meta25025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25026,meta25025__$1){
var self__ = this;
var _25026__$1 = this;
return (new cljs.core.async.t_cljs$core$async25024(self__.alt_flag,self__.flag,meta25025__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25026){
var self__ = this;
var _25026__$1 = this;
return self__.meta25025;
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25025","meta25025",1083225772,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25024";

cljs.core.async.t_cljs$core$async25024.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async25024");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25024 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25024(alt_flag__$1,flag__$1,meta25025){
return (new cljs.core.async.t_cljs$core$async25024(alt_flag__$1,flag__$1,meta25025));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25024(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25030 = (function (alt_handler,flag,cb,meta25031){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25031 = meta25031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25032,meta25031__$1){
var self__ = this;
var _25032__$1 = this;
return (new cljs.core.async.t_cljs$core$async25030(self__.alt_handler,self__.flag,self__.cb,meta25031__$1));
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25032){
var self__ = this;
var _25032__$1 = this;
return self__.meta25031;
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25031","meta25031",-687827493,null)], null);
});

cljs.core.async.t_cljs$core$async25030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25030";

cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async25030");
});

cljs.core.async.__GT_t_cljs$core$async25030 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25030(alt_handler__$1,flag__$1,cb__$1,meta25031){
return (new cljs.core.async.t_cljs$core$async25030(alt_handler__$1,flag__$1,cb__$1,meta25031));
});

}

return (new cljs.core.async.t_cljs$core$async25030(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25033_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25034_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25034_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21642__auto__ = wport;
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25035 = (i + (1));
i = G__25035;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21642__auto__ = ret;
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21630__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21630__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21630__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22719__auto__ = [];
var len__22712__auto___25041 = arguments.length;
var i__22713__auto___25042 = (0);
while(true){
if((i__22713__auto___25042 < len__22712__auto___25041)){
args__22719__auto__.push((arguments[i__22713__auto___25042]));

var G__25043 = (i__22713__auto___25042 + (1));
i__22713__auto___25042 = G__25043;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((1) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22720__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25038){
var map__25039 = p__25038;
var map__25039__$1 = ((((!((map__25039 == null)))?((((map__25039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25039):map__25039);
var opts = map__25039__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25036){
var G__25037 = cljs.core.first.call(null,seq25036);
var seq25036__$1 = cljs.core.next.call(null,seq25036);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25037,seq25036__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25044 = [];
var len__22712__auto___25094 = arguments.length;
var i__22713__auto___25095 = (0);
while(true){
if((i__22713__auto___25095 < len__22712__auto___25094)){
args25044.push((arguments[i__22713__auto___25095]));

var G__25096 = (i__22713__auto___25095 + (1));
i__22713__auto___25095 = G__25096;
continue;
} else {
}
break;
}

var G__25046 = args25044.length;
switch (G__25046) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25044.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24931__auto___25098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___25098){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___25098){
return (function (state_25070){
var state_val_25071 = (state_25070[(1)]);
if((state_val_25071 === (7))){
var inst_25066 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25072_25099 = state_25070__$1;
(statearr_25072_25099[(2)] = inst_25066);

(statearr_25072_25099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (1))){
var state_25070__$1 = state_25070;
var statearr_25073_25100 = state_25070__$1;
(statearr_25073_25100[(2)] = null);

(statearr_25073_25100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (4))){
var inst_25049 = (state_25070[(7)]);
var inst_25049__$1 = (state_25070[(2)]);
var inst_25050 = (inst_25049__$1 == null);
var state_25070__$1 = (function (){var statearr_25074 = state_25070;
(statearr_25074[(7)] = inst_25049__$1);

return statearr_25074;
})();
if(cljs.core.truth_(inst_25050)){
var statearr_25075_25101 = state_25070__$1;
(statearr_25075_25101[(1)] = (5));

} else {
var statearr_25076_25102 = state_25070__$1;
(statearr_25076_25102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (13))){
var state_25070__$1 = state_25070;
var statearr_25077_25103 = state_25070__$1;
(statearr_25077_25103[(2)] = null);

(statearr_25077_25103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (6))){
var inst_25049 = (state_25070[(7)]);
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25070__$1,(11),to,inst_25049);
} else {
if((state_val_25071 === (3))){
var inst_25068 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25070__$1,inst_25068);
} else {
if((state_val_25071 === (12))){
var state_25070__$1 = state_25070;
var statearr_25078_25104 = state_25070__$1;
(statearr_25078_25104[(2)] = null);

(statearr_25078_25104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (2))){
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25070__$1,(4),from);
} else {
if((state_val_25071 === (11))){
var inst_25059 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
if(cljs.core.truth_(inst_25059)){
var statearr_25079_25105 = state_25070__$1;
(statearr_25079_25105[(1)] = (12));

} else {
var statearr_25080_25106 = state_25070__$1;
(statearr_25080_25106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (9))){
var state_25070__$1 = state_25070;
var statearr_25081_25107 = state_25070__$1;
(statearr_25081_25107[(2)] = null);

(statearr_25081_25107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (5))){
var state_25070__$1 = state_25070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25082_25108 = state_25070__$1;
(statearr_25082_25108[(1)] = (8));

} else {
var statearr_25083_25109 = state_25070__$1;
(statearr_25083_25109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (14))){
var inst_25064 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25084_25110 = state_25070__$1;
(statearr_25084_25110[(2)] = inst_25064);

(statearr_25084_25110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (10))){
var inst_25056 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25085_25111 = state_25070__$1;
(statearr_25085_25111[(2)] = inst_25056);

(statearr_25085_25111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (8))){
var inst_25053 = cljs.core.async.close_BANG_.call(null,to);
var state_25070__$1 = state_25070;
var statearr_25086_25112 = state_25070__$1;
(statearr_25086_25112[(2)] = inst_25053);

(statearr_25086_25112[(1)] = (10));


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
});})(c__24931__auto___25098))
;
return ((function (switch__24819__auto__,c__24931__auto___25098){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_25090 = [null,null,null,null,null,null,null,null];
(statearr_25090[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_25090[(1)] = (1));

return statearr_25090;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_25070){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25091){if((e25091 instanceof Object)){
var ex__24823__auto__ = e25091;
var statearr_25092_25113 = state_25070;
(statearr_25092_25113[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25114 = state_25070;
state_25070 = G__25114;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_25070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_25070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___25098))
})();
var state__24933__auto__ = (function (){var statearr_25093 = f__24932__auto__.call(null);
(statearr_25093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25098);

return statearr_25093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___25098))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25298){
var vec__25299 = p__25298;
var v = cljs.core.nth.call(null,vec__25299,(0),null);
var p = cljs.core.nth.call(null,vec__25299,(1),null);
var job = vec__25299;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24931__auto___25481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results){
return (function (state_25304){
var state_val_25305 = (state_25304[(1)]);
if((state_val_25305 === (1))){
var state_25304__$1 = state_25304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25304__$1,(2),res,v);
} else {
if((state_val_25305 === (2))){
var inst_25301 = (state_25304[(2)]);
var inst_25302 = cljs.core.async.close_BANG_.call(null,res);
var state_25304__$1 = (function (){var statearr_25306 = state_25304;
(statearr_25306[(7)] = inst_25301);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25304__$1,inst_25302);
} else {
return null;
}
}
});})(c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results))
;
return ((function (switch__24819__auto__,c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_25310 = [null,null,null,null,null,null,null,null];
(statearr_25310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__);

(statearr_25310[(1)] = (1));

return statearr_25310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1 = (function (state_25304){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25311){if((e25311 instanceof Object)){
var ex__24823__auto__ = e25311;
var statearr_25312_25482 = state_25304;
(statearr_25312_25482[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25483 = state_25304;
state_25304 = G__25483;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = function(state_25304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1.call(this,state_25304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results))
})();
var state__24933__auto__ = (function (){var statearr_25313 = f__24932__auto__.call(null);
(statearr_25313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25481);

return statearr_25313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___25481,res,vec__25299,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25314){
var vec__25315 = p__25314;
var v = cljs.core.nth.call(null,vec__25315,(0),null);
var p = cljs.core.nth.call(null,vec__25315,(1),null);
var job = vec__25315;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22557__auto___25484 = n;
var __25485 = (0);
while(true){
if((__25485 < n__22557__auto___25484)){
var G__25316_25486 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25316_25486) {
case "compute":
var c__24931__auto___25488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25485,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (__25485,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function (state_25329){
var state_val_25330 = (state_25329[(1)]);
if((state_val_25330 === (1))){
var state_25329__$1 = state_25329;
var statearr_25331_25489 = state_25329__$1;
(statearr_25331_25489[(2)] = null);

(statearr_25331_25489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (2))){
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25329__$1,(4),jobs);
} else {
if((state_val_25330 === (3))){
var inst_25327 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25329__$1,inst_25327);
} else {
if((state_val_25330 === (4))){
var inst_25319 = (state_25329[(2)]);
var inst_25320 = process.call(null,inst_25319);
var state_25329__$1 = state_25329;
if(cljs.core.truth_(inst_25320)){
var statearr_25332_25490 = state_25329__$1;
(statearr_25332_25490[(1)] = (5));

} else {
var statearr_25333_25491 = state_25329__$1;
(statearr_25333_25491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (5))){
var state_25329__$1 = state_25329;
var statearr_25334_25492 = state_25329__$1;
(statearr_25334_25492[(2)] = null);

(statearr_25334_25492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (6))){
var state_25329__$1 = state_25329;
var statearr_25335_25493 = state_25329__$1;
(statearr_25335_25493[(2)] = null);

(statearr_25335_25493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (7))){
var inst_25325 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25336_25494 = state_25329__$1;
(statearr_25336_25494[(2)] = inst_25325);

(statearr_25336_25494[(1)] = (3));


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
});})(__25485,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
;
return ((function (__25485,switch__24819__auto__,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_25340 = [null,null,null,null,null,null,null];
(statearr_25340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__);

(statearr_25340[(1)] = (1));

return statearr_25340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1 = (function (state_25329){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25341){if((e25341 instanceof Object)){
var ex__24823__auto__ = e25341;
var statearr_25342_25495 = state_25329;
(statearr_25342_25495[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25496 = state_25329;
state_25329 = G__25496;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__;
})()
;})(__25485,switch__24819__auto__,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
})();
var state__24933__auto__ = (function (){var statearr_25343 = f__24932__auto__.call(null);
(statearr_25343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25488);

return statearr_25343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(__25485,c__24931__auto___25488,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
);


break;
case "async":
var c__24931__auto___25497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25485,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (__25485,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function (state_25356){
var state_val_25357 = (state_25356[(1)]);
if((state_val_25357 === (1))){
var state_25356__$1 = state_25356;
var statearr_25358_25498 = state_25356__$1;
(statearr_25358_25498[(2)] = null);

(statearr_25358_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (2))){
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25356__$1,(4),jobs);
} else {
if((state_val_25357 === (3))){
var inst_25354 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25356__$1,inst_25354);
} else {
if((state_val_25357 === (4))){
var inst_25346 = (state_25356[(2)]);
var inst_25347 = async.call(null,inst_25346);
var state_25356__$1 = state_25356;
if(cljs.core.truth_(inst_25347)){
var statearr_25359_25499 = state_25356__$1;
(statearr_25359_25499[(1)] = (5));

} else {
var statearr_25360_25500 = state_25356__$1;
(statearr_25360_25500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (5))){
var state_25356__$1 = state_25356;
var statearr_25361_25501 = state_25356__$1;
(statearr_25361_25501[(2)] = null);

(statearr_25361_25501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (6))){
var state_25356__$1 = state_25356;
var statearr_25362_25502 = state_25356__$1;
(statearr_25362_25502[(2)] = null);

(statearr_25362_25502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (7))){
var inst_25352 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25363_25503 = state_25356__$1;
(statearr_25363_25503[(2)] = inst_25352);

(statearr_25363_25503[(1)] = (3));


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
});})(__25485,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
;
return ((function (__25485,switch__24819__auto__,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_25367 = [null,null,null,null,null,null,null];
(statearr_25367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__);

(statearr_25367[(1)] = (1));

return statearr_25367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1 = (function (state_25356){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25368){if((e25368 instanceof Object)){
var ex__24823__auto__ = e25368;
var statearr_25369_25504 = state_25356;
(statearr_25369_25504[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25505 = state_25356;
state_25356 = G__25505;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = function(state_25356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1.call(this,state_25356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__;
})()
;})(__25485,switch__24819__auto__,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
})();
var state__24933__auto__ = (function (){var statearr_25370 = f__24932__auto__.call(null);
(statearr_25370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25497);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(__25485,c__24931__auto___25497,G__25316_25486,n__22557__auto___25484,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25506 = (__25485 + (1));
__25485 = G__25506;
continue;
} else {
}
break;
}

var c__24931__auto___25507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___25507,jobs,results,process,async){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___25507,jobs,results,process,async){
return (function (state_25392){
var state_val_25393 = (state_25392[(1)]);
if((state_val_25393 === (1))){
var state_25392__$1 = state_25392;
var statearr_25394_25508 = state_25392__$1;
(statearr_25394_25508[(2)] = null);

(statearr_25394_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25393 === (2))){
var state_25392__$1 = state_25392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25392__$1,(4),from);
} else {
if((state_val_25393 === (3))){
var inst_25390 = (state_25392[(2)]);
var state_25392__$1 = state_25392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25392__$1,inst_25390);
} else {
if((state_val_25393 === (4))){
var inst_25373 = (state_25392[(7)]);
var inst_25373__$1 = (state_25392[(2)]);
var inst_25374 = (inst_25373__$1 == null);
var state_25392__$1 = (function (){var statearr_25395 = state_25392;
(statearr_25395[(7)] = inst_25373__$1);

return statearr_25395;
})();
if(cljs.core.truth_(inst_25374)){
var statearr_25396_25509 = state_25392__$1;
(statearr_25396_25509[(1)] = (5));

} else {
var statearr_25397_25510 = state_25392__$1;
(statearr_25397_25510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25393 === (5))){
var inst_25376 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25392__$1 = state_25392;
var statearr_25398_25511 = state_25392__$1;
(statearr_25398_25511[(2)] = inst_25376);

(statearr_25398_25511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25393 === (6))){
var inst_25378 = (state_25392[(8)]);
var inst_25373 = (state_25392[(7)]);
var inst_25378__$1 = cljs.core.async.chan.call(null,(1));
var inst_25379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25380 = [inst_25373,inst_25378__$1];
var inst_25381 = (new cljs.core.PersistentVector(null,2,(5),inst_25379,inst_25380,null));
var state_25392__$1 = (function (){var statearr_25399 = state_25392;
(statearr_25399[(8)] = inst_25378__$1);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25392__$1,(8),jobs,inst_25381);
} else {
if((state_val_25393 === (7))){
var inst_25388 = (state_25392[(2)]);
var state_25392__$1 = state_25392;
var statearr_25400_25512 = state_25392__$1;
(statearr_25400_25512[(2)] = inst_25388);

(statearr_25400_25512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25393 === (8))){
var inst_25378 = (state_25392[(8)]);
var inst_25383 = (state_25392[(2)]);
var state_25392__$1 = (function (){var statearr_25401 = state_25392;
(statearr_25401[(9)] = inst_25383);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25392__$1,(9),results,inst_25378);
} else {
if((state_val_25393 === (9))){
var inst_25385 = (state_25392[(2)]);
var state_25392__$1 = (function (){var statearr_25402 = state_25392;
(statearr_25402[(10)] = inst_25385);

return statearr_25402;
})();
var statearr_25403_25513 = state_25392__$1;
(statearr_25403_25513[(2)] = null);

(statearr_25403_25513[(1)] = (2));


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
});})(c__24931__auto___25507,jobs,results,process,async))
;
return ((function (switch__24819__auto__,c__24931__auto___25507,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_25407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__);

(statearr_25407[(1)] = (1));

return statearr_25407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1 = (function (state_25392){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25408){if((e25408 instanceof Object)){
var ex__24823__auto__ = e25408;
var statearr_25409_25514 = state_25392;
(statearr_25409_25514[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25515 = state_25392;
state_25392 = G__25515;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = function(state_25392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1.call(this,state_25392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___25507,jobs,results,process,async))
})();
var state__24933__auto__ = (function (){var statearr_25410 = f__24932__auto__.call(null);
(statearr_25410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25507);

return statearr_25410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___25507,jobs,results,process,async))
);


var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__,jobs,results,process,async){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__,jobs,results,process,async){
return (function (state_25448){
var state_val_25449 = (state_25448[(1)]);
if((state_val_25449 === (7))){
var inst_25444 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25450_25516 = state_25448__$1;
(statearr_25450_25516[(2)] = inst_25444);

(statearr_25450_25516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (20))){
var state_25448__$1 = state_25448;
var statearr_25451_25517 = state_25448__$1;
(statearr_25451_25517[(2)] = null);

(statearr_25451_25517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (1))){
var state_25448__$1 = state_25448;
var statearr_25452_25518 = state_25448__$1;
(statearr_25452_25518[(2)] = null);

(statearr_25452_25518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (4))){
var inst_25413 = (state_25448[(7)]);
var inst_25413__$1 = (state_25448[(2)]);
var inst_25414 = (inst_25413__$1 == null);
var state_25448__$1 = (function (){var statearr_25453 = state_25448;
(statearr_25453[(7)] = inst_25413__$1);

return statearr_25453;
})();
if(cljs.core.truth_(inst_25414)){
var statearr_25454_25519 = state_25448__$1;
(statearr_25454_25519[(1)] = (5));

} else {
var statearr_25455_25520 = state_25448__$1;
(statearr_25455_25520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (15))){
var inst_25426 = (state_25448[(8)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25448__$1,(18),to,inst_25426);
} else {
if((state_val_25449 === (21))){
var inst_25439 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25456_25521 = state_25448__$1;
(statearr_25456_25521[(2)] = inst_25439);

(statearr_25456_25521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (13))){
var inst_25441 = (state_25448[(2)]);
var state_25448__$1 = (function (){var statearr_25457 = state_25448;
(statearr_25457[(9)] = inst_25441);

return statearr_25457;
})();
var statearr_25458_25522 = state_25448__$1;
(statearr_25458_25522[(2)] = null);

(statearr_25458_25522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (6))){
var inst_25413 = (state_25448[(7)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25448__$1,(11),inst_25413);
} else {
if((state_val_25449 === (17))){
var inst_25434 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25434)){
var statearr_25459_25523 = state_25448__$1;
(statearr_25459_25523[(1)] = (19));

} else {
var statearr_25460_25524 = state_25448__$1;
(statearr_25460_25524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (3))){
var inst_25446 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25448__$1,inst_25446);
} else {
if((state_val_25449 === (12))){
var inst_25423 = (state_25448[(10)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25448__$1,(14),inst_25423);
} else {
if((state_val_25449 === (2))){
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25448__$1,(4),results);
} else {
if((state_val_25449 === (19))){
var state_25448__$1 = state_25448;
var statearr_25461_25525 = state_25448__$1;
(statearr_25461_25525[(2)] = null);

(statearr_25461_25525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (11))){
var inst_25423 = (state_25448[(2)]);
var state_25448__$1 = (function (){var statearr_25462 = state_25448;
(statearr_25462[(10)] = inst_25423);

return statearr_25462;
})();
var statearr_25463_25526 = state_25448__$1;
(statearr_25463_25526[(2)] = null);

(statearr_25463_25526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (9))){
var state_25448__$1 = state_25448;
var statearr_25464_25527 = state_25448__$1;
(statearr_25464_25527[(2)] = null);

(statearr_25464_25527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (5))){
var state_25448__$1 = state_25448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25465_25528 = state_25448__$1;
(statearr_25465_25528[(1)] = (8));

} else {
var statearr_25466_25529 = state_25448__$1;
(statearr_25466_25529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (14))){
var inst_25428 = (state_25448[(11)]);
var inst_25426 = (state_25448[(8)]);
var inst_25426__$1 = (state_25448[(2)]);
var inst_25427 = (inst_25426__$1 == null);
var inst_25428__$1 = cljs.core.not.call(null,inst_25427);
var state_25448__$1 = (function (){var statearr_25467 = state_25448;
(statearr_25467[(11)] = inst_25428__$1);

(statearr_25467[(8)] = inst_25426__$1);

return statearr_25467;
})();
if(inst_25428__$1){
var statearr_25468_25530 = state_25448__$1;
(statearr_25468_25530[(1)] = (15));

} else {
var statearr_25469_25531 = state_25448__$1;
(statearr_25469_25531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (16))){
var inst_25428 = (state_25448[(11)]);
var state_25448__$1 = state_25448;
var statearr_25470_25532 = state_25448__$1;
(statearr_25470_25532[(2)] = inst_25428);

(statearr_25470_25532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (10))){
var inst_25420 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25471_25533 = state_25448__$1;
(statearr_25471_25533[(2)] = inst_25420);

(statearr_25471_25533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (18))){
var inst_25431 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25472_25534 = state_25448__$1;
(statearr_25472_25534[(2)] = inst_25431);

(statearr_25472_25534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (8))){
var inst_25417 = cljs.core.async.close_BANG_.call(null,to);
var state_25448__$1 = state_25448;
var statearr_25473_25535 = state_25448__$1;
(statearr_25473_25535[(2)] = inst_25417);

(statearr_25473_25535[(1)] = (10));


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
});})(c__24931__auto__,jobs,results,process,async))
;
return ((function (switch__24819__auto__,c__24931__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_25477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__);

(statearr_25477[(1)] = (1));

return statearr_25477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1 = (function (state_25448){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25478){if((e25478 instanceof Object)){
var ex__24823__auto__ = e25478;
var statearr_25479_25536 = state_25448;
(statearr_25479_25536[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25448;
state_25448 = G__25537;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__ = function(state_25448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1.call(this,state_25448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__,jobs,results,process,async))
})();
var state__24933__auto__ = (function (){var statearr_25480 = f__24932__auto__.call(null);
(statearr_25480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_25480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__,jobs,results,process,async))
);

return c__24931__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25538 = [];
var len__22712__auto___25541 = arguments.length;
var i__22713__auto___25542 = (0);
while(true){
if((i__22713__auto___25542 < len__22712__auto___25541)){
args25538.push((arguments[i__22713__auto___25542]));

var G__25543 = (i__22713__auto___25542 + (1));
i__22713__auto___25542 = G__25543;
continue;
} else {
}
break;
}

var G__25540 = args25538.length;
switch (G__25540) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25538.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25545 = [];
var len__22712__auto___25548 = arguments.length;
var i__22713__auto___25549 = (0);
while(true){
if((i__22713__auto___25549 < len__22712__auto___25548)){
args25545.push((arguments[i__22713__auto___25549]));

var G__25550 = (i__22713__auto___25549 + (1));
i__22713__auto___25549 = G__25550;
continue;
} else {
}
break;
}

var G__25547 = args25545.length;
switch (G__25547) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25545.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25552 = [];
var len__22712__auto___25605 = arguments.length;
var i__22713__auto___25606 = (0);
while(true){
if((i__22713__auto___25606 < len__22712__auto___25605)){
args25552.push((arguments[i__22713__auto___25606]));

var G__25607 = (i__22713__auto___25606 + (1));
i__22713__auto___25606 = G__25607;
continue;
} else {
}
break;
}

var G__25554 = args25552.length;
switch (G__25554) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25552.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24931__auto___25609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___25609,tc,fc){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___25609,tc,fc){
return (function (state_25580){
var state_val_25581 = (state_25580[(1)]);
if((state_val_25581 === (7))){
var inst_25576 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
var statearr_25582_25610 = state_25580__$1;
(statearr_25582_25610[(2)] = inst_25576);

(statearr_25582_25610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (1))){
var state_25580__$1 = state_25580;
var statearr_25583_25611 = state_25580__$1;
(statearr_25583_25611[(2)] = null);

(statearr_25583_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (4))){
var inst_25557 = (state_25580[(7)]);
var inst_25557__$1 = (state_25580[(2)]);
var inst_25558 = (inst_25557__$1 == null);
var state_25580__$1 = (function (){var statearr_25584 = state_25580;
(statearr_25584[(7)] = inst_25557__$1);

return statearr_25584;
})();
if(cljs.core.truth_(inst_25558)){
var statearr_25585_25612 = state_25580__$1;
(statearr_25585_25612[(1)] = (5));

} else {
var statearr_25586_25613 = state_25580__$1;
(statearr_25586_25613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (13))){
var state_25580__$1 = state_25580;
var statearr_25587_25614 = state_25580__$1;
(statearr_25587_25614[(2)] = null);

(statearr_25587_25614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (6))){
var inst_25557 = (state_25580[(7)]);
var inst_25563 = p.call(null,inst_25557);
var state_25580__$1 = state_25580;
if(cljs.core.truth_(inst_25563)){
var statearr_25588_25615 = state_25580__$1;
(statearr_25588_25615[(1)] = (9));

} else {
var statearr_25589_25616 = state_25580__$1;
(statearr_25589_25616[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (3))){
var inst_25578 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25580__$1,inst_25578);
} else {
if((state_val_25581 === (12))){
var state_25580__$1 = state_25580;
var statearr_25590_25617 = state_25580__$1;
(statearr_25590_25617[(2)] = null);

(statearr_25590_25617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (2))){
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25580__$1,(4),ch);
} else {
if((state_val_25581 === (11))){
var inst_25557 = (state_25580[(7)]);
var inst_25567 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25580__$1,(8),inst_25567,inst_25557);
} else {
if((state_val_25581 === (9))){
var state_25580__$1 = state_25580;
var statearr_25591_25618 = state_25580__$1;
(statearr_25591_25618[(2)] = tc);

(statearr_25591_25618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (5))){
var inst_25560 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25561 = cljs.core.async.close_BANG_.call(null,fc);
var state_25580__$1 = (function (){var statearr_25592 = state_25580;
(statearr_25592[(8)] = inst_25560);

return statearr_25592;
})();
var statearr_25593_25619 = state_25580__$1;
(statearr_25593_25619[(2)] = inst_25561);

(statearr_25593_25619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (14))){
var inst_25574 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
var statearr_25594_25620 = state_25580__$1;
(statearr_25594_25620[(2)] = inst_25574);

(statearr_25594_25620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (10))){
var state_25580__$1 = state_25580;
var statearr_25595_25621 = state_25580__$1;
(statearr_25595_25621[(2)] = fc);

(statearr_25595_25621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (8))){
var inst_25569 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
if(cljs.core.truth_(inst_25569)){
var statearr_25596_25622 = state_25580__$1;
(statearr_25596_25622[(1)] = (12));

} else {
var statearr_25597_25623 = state_25580__$1;
(statearr_25597_25623[(1)] = (13));

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
});})(c__24931__auto___25609,tc,fc))
;
return ((function (switch__24819__auto__,c__24931__auto___25609,tc,fc){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null,null,null];
(statearr_25601[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_25580){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__24823__auto__ = e25602;
var statearr_25603_25624 = state_25580;
(statearr_25603_25624[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25625 = state_25580;
state_25580 = G__25625;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_25580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_25580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___25609,tc,fc))
})();
var state__24933__auto__ = (function (){var statearr_25604 = f__24932__auto__.call(null);
(statearr_25604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___25609);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___25609,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_25689){
var state_val_25690 = (state_25689[(1)]);
if((state_val_25690 === (7))){
var inst_25685 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25691_25712 = state_25689__$1;
(statearr_25691_25712[(2)] = inst_25685);

(statearr_25691_25712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (1))){
var inst_25669 = init;
var state_25689__$1 = (function (){var statearr_25692 = state_25689;
(statearr_25692[(7)] = inst_25669);

return statearr_25692;
})();
var statearr_25693_25713 = state_25689__$1;
(statearr_25693_25713[(2)] = null);

(statearr_25693_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (4))){
var inst_25672 = (state_25689[(8)]);
var inst_25672__$1 = (state_25689[(2)]);
var inst_25673 = (inst_25672__$1 == null);
var state_25689__$1 = (function (){var statearr_25694 = state_25689;
(statearr_25694[(8)] = inst_25672__$1);

return statearr_25694;
})();
if(cljs.core.truth_(inst_25673)){
var statearr_25695_25714 = state_25689__$1;
(statearr_25695_25714[(1)] = (5));

} else {
var statearr_25696_25715 = state_25689__$1;
(statearr_25696_25715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (6))){
var inst_25669 = (state_25689[(7)]);
var inst_25676 = (state_25689[(9)]);
var inst_25672 = (state_25689[(8)]);
var inst_25676__$1 = f.call(null,inst_25669,inst_25672);
var inst_25677 = cljs.core.reduced_QMARK_.call(null,inst_25676__$1);
var state_25689__$1 = (function (){var statearr_25697 = state_25689;
(statearr_25697[(9)] = inst_25676__$1);

return statearr_25697;
})();
if(inst_25677){
var statearr_25698_25716 = state_25689__$1;
(statearr_25698_25716[(1)] = (8));

} else {
var statearr_25699_25717 = state_25689__$1;
(statearr_25699_25717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (3))){
var inst_25687 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25689__$1,inst_25687);
} else {
if((state_val_25690 === (2))){
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25689__$1,(4),ch);
} else {
if((state_val_25690 === (9))){
var inst_25676 = (state_25689[(9)]);
var inst_25669 = inst_25676;
var state_25689__$1 = (function (){var statearr_25700 = state_25689;
(statearr_25700[(7)] = inst_25669);

return statearr_25700;
})();
var statearr_25701_25718 = state_25689__$1;
(statearr_25701_25718[(2)] = null);

(statearr_25701_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (5))){
var inst_25669 = (state_25689[(7)]);
var state_25689__$1 = state_25689;
var statearr_25702_25719 = state_25689__$1;
(statearr_25702_25719[(2)] = inst_25669);

(statearr_25702_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (10))){
var inst_25683 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25703_25720 = state_25689__$1;
(statearr_25703_25720[(2)] = inst_25683);

(statearr_25703_25720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (8))){
var inst_25676 = (state_25689[(9)]);
var inst_25679 = cljs.core.deref.call(null,inst_25676);
var state_25689__$1 = state_25689;
var statearr_25704_25721 = state_25689__$1;
(statearr_25704_25721[(2)] = inst_25679);

(statearr_25704_25721[(1)] = (10));


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
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24820__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24820__auto____0 = (function (){
var statearr_25708 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25708[(0)] = cljs$core$async$reduce_$_state_machine__24820__auto__);

(statearr_25708[(1)] = (1));

return statearr_25708;
});
var cljs$core$async$reduce_$_state_machine__24820__auto____1 = (function (state_25689){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25709){if((e25709 instanceof Object)){
var ex__24823__auto__ = e25709;
var statearr_25710_25722 = state_25689;
(statearr_25710_25722[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25689;
state_25689 = G__25723;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24820__auto__ = function(state_25689){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24820__auto____1.call(this,state_25689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24820__auto____0;
cljs$core$async$reduce_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24820__auto____1;
return cljs$core$async$reduce_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_25711 = f__24932__auto__.call(null);
(statearr_25711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25724 = [];
var len__22712__auto___25776 = arguments.length;
var i__22713__auto___25777 = (0);
while(true){
if((i__22713__auto___25777 < len__22712__auto___25776)){
args25724.push((arguments[i__22713__auto___25777]));

var G__25778 = (i__22713__auto___25777 + (1));
i__22713__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var G__25726 = args25724.length;
switch (G__25726) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25724.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (7))){
var inst_25733 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25753_25780 = state_25751__$1;
(statearr_25753_25780[(2)] = inst_25733);

(statearr_25753_25780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (1))){
var inst_25727 = cljs.core.seq.call(null,coll);
var inst_25728 = inst_25727;
var state_25751__$1 = (function (){var statearr_25754 = state_25751;
(statearr_25754[(7)] = inst_25728);

return statearr_25754;
})();
var statearr_25755_25781 = state_25751__$1;
(statearr_25755_25781[(2)] = null);

(statearr_25755_25781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (4))){
var inst_25728 = (state_25751[(7)]);
var inst_25731 = cljs.core.first.call(null,inst_25728);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(7),ch,inst_25731);
} else {
if((state_val_25752 === (13))){
var inst_25745 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25756_25782 = state_25751__$1;
(statearr_25756_25782[(2)] = inst_25745);

(statearr_25756_25782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (6))){
var inst_25736 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
if(cljs.core.truth_(inst_25736)){
var statearr_25757_25783 = state_25751__$1;
(statearr_25757_25783[(1)] = (8));

} else {
var statearr_25758_25784 = state_25751__$1;
(statearr_25758_25784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (3))){
var inst_25749 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else {
if((state_val_25752 === (12))){
var state_25751__$1 = state_25751;
var statearr_25759_25785 = state_25751__$1;
(statearr_25759_25785[(2)] = null);

(statearr_25759_25785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (2))){
var inst_25728 = (state_25751[(7)]);
var state_25751__$1 = state_25751;
if(cljs.core.truth_(inst_25728)){
var statearr_25760_25786 = state_25751__$1;
(statearr_25760_25786[(1)] = (4));

} else {
var statearr_25761_25787 = state_25751__$1;
(statearr_25761_25787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (11))){
var inst_25742 = cljs.core.async.close_BANG_.call(null,ch);
var state_25751__$1 = state_25751;
var statearr_25762_25788 = state_25751__$1;
(statearr_25762_25788[(2)] = inst_25742);

(statearr_25762_25788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (9))){
var state_25751__$1 = state_25751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25763_25789 = state_25751__$1;
(statearr_25763_25789[(1)] = (11));

} else {
var statearr_25764_25790 = state_25751__$1;
(statearr_25764_25790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (5))){
var inst_25728 = (state_25751[(7)]);
var state_25751__$1 = state_25751;
var statearr_25765_25791 = state_25751__$1;
(statearr_25765_25791[(2)] = inst_25728);

(statearr_25765_25791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (10))){
var inst_25747 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25766_25792 = state_25751__$1;
(statearr_25766_25792[(2)] = inst_25747);

(statearr_25766_25792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (8))){
var inst_25728 = (state_25751[(7)]);
var inst_25738 = cljs.core.next.call(null,inst_25728);
var inst_25728__$1 = inst_25738;
var state_25751__$1 = (function (){var statearr_25767 = state_25751;
(statearr_25767[(7)] = inst_25728__$1);

return statearr_25767;
})();
var statearr_25768_25793 = state_25751__$1;
(statearr_25768_25793[(2)] = null);

(statearr_25768_25793[(1)] = (2));


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
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_25772 = [null,null,null,null,null,null,null,null];
(statearr_25772[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_25772[(1)] = (1));

return statearr_25772;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_25751){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_25751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object)){
var ex__24823__auto__ = e25773;
var statearr_25774_25794 = state_25751;
(statearr_25774_25794[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25795 = state_25751;
state_25751 = G__25795;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_25775 = f__24932__auto__.call(null);
(statearr_25775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22305__auto__ = (((_ == null))?null:_);
var m__22306__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,_);
} else {
var m__22306__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22306__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,ch);
} else {
var m__22306__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m);
} else {
var m__22306__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26017 = (function (mult,ch,cs,meta26018){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26018 = meta26018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26019,meta26018__$1){
var self__ = this;
var _26019__$1 = this;
return (new cljs.core.async.t_cljs$core$async26017(self__.mult,self__.ch,self__.cs,meta26018__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26019){
var self__ = this;
var _26019__$1 = this;
return self__.meta26018;
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26018","meta26018",-1339974691,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26017";

cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async26017");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26017 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26017(mult__$1,ch__$1,cs__$1,meta26018){
return (new cljs.core.async.t_cljs$core$async26017(mult__$1,ch__$1,cs__$1,meta26018));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26017(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24931__auto___26238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___26238,cs,m,dchan,dctr,done){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___26238,cs,m,dchan,dctr,done){
return (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (7))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26152_26239 = state_26150__$1;
(statearr_26152_26239[(2)] = inst_26146);

(statearr_26152_26239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (20))){
var inst_26051 = (state_26150[(7)]);
var inst_26061 = cljs.core.first.call(null,inst_26051);
var inst_26062 = cljs.core.nth.call(null,inst_26061,(0),null);
var inst_26063 = cljs.core.nth.call(null,inst_26061,(1),null);
var state_26150__$1 = (function (){var statearr_26153 = state_26150;
(statearr_26153[(8)] = inst_26062);

return statearr_26153;
})();
if(cljs.core.truth_(inst_26063)){
var statearr_26154_26240 = state_26150__$1;
(statearr_26154_26240[(1)] = (22));

} else {
var statearr_26155_26241 = state_26150__$1;
(statearr_26155_26241[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (27))){
var inst_26091 = (state_26150[(9)]);
var inst_26098 = (state_26150[(10)]);
var inst_26022 = (state_26150[(11)]);
var inst_26093 = (state_26150[(12)]);
var inst_26098__$1 = cljs.core._nth.call(null,inst_26091,inst_26093);
var inst_26099 = cljs.core.async.put_BANG_.call(null,inst_26098__$1,inst_26022,done);
var state_26150__$1 = (function (){var statearr_26156 = state_26150;
(statearr_26156[(10)] = inst_26098__$1);

return statearr_26156;
})();
if(cljs.core.truth_(inst_26099)){
var statearr_26157_26242 = state_26150__$1;
(statearr_26157_26242[(1)] = (30));

} else {
var statearr_26158_26243 = state_26150__$1;
(statearr_26158_26243[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (1))){
var state_26150__$1 = state_26150;
var statearr_26159_26244 = state_26150__$1;
(statearr_26159_26244[(2)] = null);

(statearr_26159_26244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (24))){
var inst_26051 = (state_26150[(7)]);
var inst_26068 = (state_26150[(2)]);
var inst_26069 = cljs.core.next.call(null,inst_26051);
var inst_26031 = inst_26069;
var inst_26032 = null;
var inst_26033 = (0);
var inst_26034 = (0);
var state_26150__$1 = (function (){var statearr_26160 = state_26150;
(statearr_26160[(13)] = inst_26031);

(statearr_26160[(14)] = inst_26068);

(statearr_26160[(15)] = inst_26032);

(statearr_26160[(16)] = inst_26034);

(statearr_26160[(17)] = inst_26033);

return statearr_26160;
})();
var statearr_26161_26245 = state_26150__$1;
(statearr_26161_26245[(2)] = null);

(statearr_26161_26245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (39))){
var state_26150__$1 = state_26150;
var statearr_26165_26246 = state_26150__$1;
(statearr_26165_26246[(2)] = null);

(statearr_26165_26246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (4))){
var inst_26022 = (state_26150[(11)]);
var inst_26022__$1 = (state_26150[(2)]);
var inst_26023 = (inst_26022__$1 == null);
var state_26150__$1 = (function (){var statearr_26166 = state_26150;
(statearr_26166[(11)] = inst_26022__$1);

return statearr_26166;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26167_26247 = state_26150__$1;
(statearr_26167_26247[(1)] = (5));

} else {
var statearr_26168_26248 = state_26150__$1;
(statearr_26168_26248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (15))){
var inst_26031 = (state_26150[(13)]);
var inst_26032 = (state_26150[(15)]);
var inst_26034 = (state_26150[(16)]);
var inst_26033 = (state_26150[(17)]);
var inst_26047 = (state_26150[(2)]);
var inst_26048 = (inst_26034 + (1));
var tmp26162 = inst_26031;
var tmp26163 = inst_26032;
var tmp26164 = inst_26033;
var inst_26031__$1 = tmp26162;
var inst_26032__$1 = tmp26163;
var inst_26033__$1 = tmp26164;
var inst_26034__$1 = inst_26048;
var state_26150__$1 = (function (){var statearr_26169 = state_26150;
(statearr_26169[(13)] = inst_26031__$1);

(statearr_26169[(15)] = inst_26032__$1);

(statearr_26169[(18)] = inst_26047);

(statearr_26169[(16)] = inst_26034__$1);

(statearr_26169[(17)] = inst_26033__$1);

return statearr_26169;
})();
var statearr_26170_26249 = state_26150__$1;
(statearr_26170_26249[(2)] = null);

(statearr_26170_26249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (21))){
var inst_26072 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26174_26250 = state_26150__$1;
(statearr_26174_26250[(2)] = inst_26072);

(statearr_26174_26250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (31))){
var inst_26098 = (state_26150[(10)]);
var inst_26102 = done.call(null,null);
var inst_26103 = cljs.core.async.untap_STAR_.call(null,m,inst_26098);
var state_26150__$1 = (function (){var statearr_26175 = state_26150;
(statearr_26175[(19)] = inst_26102);

return statearr_26175;
})();
var statearr_26176_26251 = state_26150__$1;
(statearr_26176_26251[(2)] = inst_26103);

(statearr_26176_26251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (32))){
var inst_26091 = (state_26150[(9)]);
var inst_26090 = (state_26150[(20)]);
var inst_26093 = (state_26150[(12)]);
var inst_26092 = (state_26150[(21)]);
var inst_26105 = (state_26150[(2)]);
var inst_26106 = (inst_26093 + (1));
var tmp26171 = inst_26091;
var tmp26172 = inst_26090;
var tmp26173 = inst_26092;
var inst_26090__$1 = tmp26172;
var inst_26091__$1 = tmp26171;
var inst_26092__$1 = tmp26173;
var inst_26093__$1 = inst_26106;
var state_26150__$1 = (function (){var statearr_26177 = state_26150;
(statearr_26177[(9)] = inst_26091__$1);

(statearr_26177[(20)] = inst_26090__$1);

(statearr_26177[(22)] = inst_26105);

(statearr_26177[(12)] = inst_26093__$1);

(statearr_26177[(21)] = inst_26092__$1);

return statearr_26177;
})();
var statearr_26178_26252 = state_26150__$1;
(statearr_26178_26252[(2)] = null);

(statearr_26178_26252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (40))){
var inst_26118 = (state_26150[(23)]);
var inst_26122 = done.call(null,null);
var inst_26123 = cljs.core.async.untap_STAR_.call(null,m,inst_26118);
var state_26150__$1 = (function (){var statearr_26179 = state_26150;
(statearr_26179[(24)] = inst_26122);

return statearr_26179;
})();
var statearr_26180_26253 = state_26150__$1;
(statearr_26180_26253[(2)] = inst_26123);

(statearr_26180_26253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (33))){
var inst_26109 = (state_26150[(25)]);
var inst_26111 = cljs.core.chunked_seq_QMARK_.call(null,inst_26109);
var state_26150__$1 = state_26150;
if(inst_26111){
var statearr_26181_26254 = state_26150__$1;
(statearr_26181_26254[(1)] = (36));

} else {
var statearr_26182_26255 = state_26150__$1;
(statearr_26182_26255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (13))){
var inst_26041 = (state_26150[(26)]);
var inst_26044 = cljs.core.async.close_BANG_.call(null,inst_26041);
var state_26150__$1 = state_26150;
var statearr_26183_26256 = state_26150__$1;
(statearr_26183_26256[(2)] = inst_26044);

(statearr_26183_26256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (22))){
var inst_26062 = (state_26150[(8)]);
var inst_26065 = cljs.core.async.close_BANG_.call(null,inst_26062);
var state_26150__$1 = state_26150;
var statearr_26184_26257 = state_26150__$1;
(statearr_26184_26257[(2)] = inst_26065);

(statearr_26184_26257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (36))){
var inst_26109 = (state_26150[(25)]);
var inst_26113 = cljs.core.chunk_first.call(null,inst_26109);
var inst_26114 = cljs.core.chunk_rest.call(null,inst_26109);
var inst_26115 = cljs.core.count.call(null,inst_26113);
var inst_26090 = inst_26114;
var inst_26091 = inst_26113;
var inst_26092 = inst_26115;
var inst_26093 = (0);
var state_26150__$1 = (function (){var statearr_26185 = state_26150;
(statearr_26185[(9)] = inst_26091);

(statearr_26185[(20)] = inst_26090);

(statearr_26185[(12)] = inst_26093);

(statearr_26185[(21)] = inst_26092);

return statearr_26185;
})();
var statearr_26186_26258 = state_26150__$1;
(statearr_26186_26258[(2)] = null);

(statearr_26186_26258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (41))){
var inst_26109 = (state_26150[(25)]);
var inst_26125 = (state_26150[(2)]);
var inst_26126 = cljs.core.next.call(null,inst_26109);
var inst_26090 = inst_26126;
var inst_26091 = null;
var inst_26092 = (0);
var inst_26093 = (0);
var state_26150__$1 = (function (){var statearr_26187 = state_26150;
(statearr_26187[(9)] = inst_26091);

(statearr_26187[(20)] = inst_26090);

(statearr_26187[(12)] = inst_26093);

(statearr_26187[(27)] = inst_26125);

(statearr_26187[(21)] = inst_26092);

return statearr_26187;
})();
var statearr_26188_26259 = state_26150__$1;
(statearr_26188_26259[(2)] = null);

(statearr_26188_26259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (43))){
var state_26150__$1 = state_26150;
var statearr_26189_26260 = state_26150__$1;
(statearr_26189_26260[(2)] = null);

(statearr_26189_26260[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (29))){
var inst_26134 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26190_26261 = state_26150__$1;
(statearr_26190_26261[(2)] = inst_26134);

(statearr_26190_26261[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (44))){
var inst_26143 = (state_26150[(2)]);
var state_26150__$1 = (function (){var statearr_26191 = state_26150;
(statearr_26191[(28)] = inst_26143);

return statearr_26191;
})();
var statearr_26192_26262 = state_26150__$1;
(statearr_26192_26262[(2)] = null);

(statearr_26192_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (6))){
var inst_26082 = (state_26150[(29)]);
var inst_26081 = cljs.core.deref.call(null,cs);
var inst_26082__$1 = cljs.core.keys.call(null,inst_26081);
var inst_26083 = cljs.core.count.call(null,inst_26082__$1);
var inst_26084 = cljs.core.reset_BANG_.call(null,dctr,inst_26083);
var inst_26089 = cljs.core.seq.call(null,inst_26082__$1);
var inst_26090 = inst_26089;
var inst_26091 = null;
var inst_26092 = (0);
var inst_26093 = (0);
var state_26150__$1 = (function (){var statearr_26193 = state_26150;
(statearr_26193[(9)] = inst_26091);

(statearr_26193[(20)] = inst_26090);

(statearr_26193[(29)] = inst_26082__$1);

(statearr_26193[(30)] = inst_26084);

(statearr_26193[(12)] = inst_26093);

(statearr_26193[(21)] = inst_26092);

return statearr_26193;
})();
var statearr_26194_26263 = state_26150__$1;
(statearr_26194_26263[(2)] = null);

(statearr_26194_26263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (28))){
var inst_26090 = (state_26150[(20)]);
var inst_26109 = (state_26150[(25)]);
var inst_26109__$1 = cljs.core.seq.call(null,inst_26090);
var state_26150__$1 = (function (){var statearr_26195 = state_26150;
(statearr_26195[(25)] = inst_26109__$1);

return statearr_26195;
})();
if(inst_26109__$1){
var statearr_26196_26264 = state_26150__$1;
(statearr_26196_26264[(1)] = (33));

} else {
var statearr_26197_26265 = state_26150__$1;
(statearr_26197_26265[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (25))){
var inst_26093 = (state_26150[(12)]);
var inst_26092 = (state_26150[(21)]);
var inst_26095 = (inst_26093 < inst_26092);
var inst_26096 = inst_26095;
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26096)){
var statearr_26198_26266 = state_26150__$1;
(statearr_26198_26266[(1)] = (27));

} else {
var statearr_26199_26267 = state_26150__$1;
(statearr_26199_26267[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (34))){
var state_26150__$1 = state_26150;
var statearr_26200_26268 = state_26150__$1;
(statearr_26200_26268[(2)] = null);

(statearr_26200_26268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (17))){
var state_26150__$1 = state_26150;
var statearr_26201_26269 = state_26150__$1;
(statearr_26201_26269[(2)] = null);

(statearr_26201_26269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (12))){
var inst_26077 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26202_26270 = state_26150__$1;
(statearr_26202_26270[(2)] = inst_26077);

(statearr_26202_26270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (2))){
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26150__$1,(4),ch);
} else {
if((state_val_26151 === (23))){
var state_26150__$1 = state_26150;
var statearr_26203_26271 = state_26150__$1;
(statearr_26203_26271[(2)] = null);

(statearr_26203_26271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (35))){
var inst_26132 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26204_26272 = state_26150__$1;
(statearr_26204_26272[(2)] = inst_26132);

(statearr_26204_26272[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (19))){
var inst_26051 = (state_26150[(7)]);
var inst_26055 = cljs.core.chunk_first.call(null,inst_26051);
var inst_26056 = cljs.core.chunk_rest.call(null,inst_26051);
var inst_26057 = cljs.core.count.call(null,inst_26055);
var inst_26031 = inst_26056;
var inst_26032 = inst_26055;
var inst_26033 = inst_26057;
var inst_26034 = (0);
var state_26150__$1 = (function (){var statearr_26205 = state_26150;
(statearr_26205[(13)] = inst_26031);

(statearr_26205[(15)] = inst_26032);

(statearr_26205[(16)] = inst_26034);

(statearr_26205[(17)] = inst_26033);

return statearr_26205;
})();
var statearr_26206_26273 = state_26150__$1;
(statearr_26206_26273[(2)] = null);

(statearr_26206_26273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (11))){
var inst_26051 = (state_26150[(7)]);
var inst_26031 = (state_26150[(13)]);
var inst_26051__$1 = cljs.core.seq.call(null,inst_26031);
var state_26150__$1 = (function (){var statearr_26207 = state_26150;
(statearr_26207[(7)] = inst_26051__$1);

return statearr_26207;
})();
if(inst_26051__$1){
var statearr_26208_26274 = state_26150__$1;
(statearr_26208_26274[(1)] = (16));

} else {
var statearr_26209_26275 = state_26150__$1;
(statearr_26209_26275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (9))){
var inst_26079 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26210_26276 = state_26150__$1;
(statearr_26210_26276[(2)] = inst_26079);

(statearr_26210_26276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (5))){
var inst_26029 = cljs.core.deref.call(null,cs);
var inst_26030 = cljs.core.seq.call(null,inst_26029);
var inst_26031 = inst_26030;
var inst_26032 = null;
var inst_26033 = (0);
var inst_26034 = (0);
var state_26150__$1 = (function (){var statearr_26211 = state_26150;
(statearr_26211[(13)] = inst_26031);

(statearr_26211[(15)] = inst_26032);

(statearr_26211[(16)] = inst_26034);

(statearr_26211[(17)] = inst_26033);

return statearr_26211;
})();
var statearr_26212_26277 = state_26150__$1;
(statearr_26212_26277[(2)] = null);

(statearr_26212_26277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (14))){
var state_26150__$1 = state_26150;
var statearr_26213_26278 = state_26150__$1;
(statearr_26213_26278[(2)] = null);

(statearr_26213_26278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (45))){
var inst_26140 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26214_26279 = state_26150__$1;
(statearr_26214_26279[(2)] = inst_26140);

(statearr_26214_26279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (26))){
var inst_26082 = (state_26150[(29)]);
var inst_26136 = (state_26150[(2)]);
var inst_26137 = cljs.core.seq.call(null,inst_26082);
var state_26150__$1 = (function (){var statearr_26215 = state_26150;
(statearr_26215[(31)] = inst_26136);

return statearr_26215;
})();
if(inst_26137){
var statearr_26216_26280 = state_26150__$1;
(statearr_26216_26280[(1)] = (42));

} else {
var statearr_26217_26281 = state_26150__$1;
(statearr_26217_26281[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (16))){
var inst_26051 = (state_26150[(7)]);
var inst_26053 = cljs.core.chunked_seq_QMARK_.call(null,inst_26051);
var state_26150__$1 = state_26150;
if(inst_26053){
var statearr_26218_26282 = state_26150__$1;
(statearr_26218_26282[(1)] = (19));

} else {
var statearr_26219_26283 = state_26150__$1;
(statearr_26219_26283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (38))){
var inst_26129 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26220_26284 = state_26150__$1;
(statearr_26220_26284[(2)] = inst_26129);

(statearr_26220_26284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (30))){
var state_26150__$1 = state_26150;
var statearr_26221_26285 = state_26150__$1;
(statearr_26221_26285[(2)] = null);

(statearr_26221_26285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (10))){
var inst_26032 = (state_26150[(15)]);
var inst_26034 = (state_26150[(16)]);
var inst_26040 = cljs.core._nth.call(null,inst_26032,inst_26034);
var inst_26041 = cljs.core.nth.call(null,inst_26040,(0),null);
var inst_26042 = cljs.core.nth.call(null,inst_26040,(1),null);
var state_26150__$1 = (function (){var statearr_26222 = state_26150;
(statearr_26222[(26)] = inst_26041);

return statearr_26222;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26223_26286 = state_26150__$1;
(statearr_26223_26286[(1)] = (13));

} else {
var statearr_26224_26287 = state_26150__$1;
(statearr_26224_26287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (18))){
var inst_26075 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26225_26288 = state_26150__$1;
(statearr_26225_26288[(2)] = inst_26075);

(statearr_26225_26288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (42))){
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26150__$1,(45),dchan);
} else {
if((state_val_26151 === (37))){
var inst_26022 = (state_26150[(11)]);
var inst_26118 = (state_26150[(23)]);
var inst_26109 = (state_26150[(25)]);
var inst_26118__$1 = cljs.core.first.call(null,inst_26109);
var inst_26119 = cljs.core.async.put_BANG_.call(null,inst_26118__$1,inst_26022,done);
var state_26150__$1 = (function (){var statearr_26226 = state_26150;
(statearr_26226[(23)] = inst_26118__$1);

return statearr_26226;
})();
if(cljs.core.truth_(inst_26119)){
var statearr_26227_26289 = state_26150__$1;
(statearr_26227_26289[(1)] = (39));

} else {
var statearr_26228_26290 = state_26150__$1;
(statearr_26228_26290[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (8))){
var inst_26034 = (state_26150[(16)]);
var inst_26033 = (state_26150[(17)]);
var inst_26036 = (inst_26034 < inst_26033);
var inst_26037 = inst_26036;
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26037)){
var statearr_26229_26291 = state_26150__$1;
(statearr_26229_26291[(1)] = (10));

} else {
var statearr_26230_26292 = state_26150__$1;
(statearr_26230_26292[(1)] = (11));

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
});})(c__24931__auto___26238,cs,m,dchan,dctr,done))
;
return ((function (switch__24819__auto__,c__24931__auto___26238,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24820__auto__ = null;
var cljs$core$async$mult_$_state_machine__24820__auto____0 = (function (){
var statearr_26234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26234[(0)] = cljs$core$async$mult_$_state_machine__24820__auto__);

(statearr_26234[(1)] = (1));

return statearr_26234;
});
var cljs$core$async$mult_$_state_machine__24820__auto____1 = (function (state_26150){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_26150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e26235){if((e26235 instanceof Object)){
var ex__24823__auto__ = e26235;
var statearr_26236_26293 = state_26150;
(statearr_26236_26293[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26294 = state_26150;
state_26150 = G__26294;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24820__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24820__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24820__auto____0;
cljs$core$async$mult_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24820__auto____1;
return cljs$core$async$mult_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___26238,cs,m,dchan,dctr,done))
})();
var state__24933__auto__ = (function (){var statearr_26237 = f__24932__auto__.call(null);
(statearr_26237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___26238);

return statearr_26237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___26238,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26295 = [];
var len__22712__auto___26298 = arguments.length;
var i__22713__auto___26299 = (0);
while(true){
if((i__22713__auto___26299 < len__22712__auto___26298)){
args26295.push((arguments[i__22713__auto___26299]));

var G__26300 = (i__22713__auto___26299 + (1));
i__22713__auto___26299 = G__26300;
continue;
} else {
}
break;
}

var G__26297 = args26295.length;
switch (G__26297) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26295.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,ch);
} else {
var m__22306__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,ch);
} else {
var m__22306__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m);
} else {
var m__22306__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,state_map);
} else {
var m__22306__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22305__auto__ = (((m == null))?null:m);
var m__22306__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,m,mode);
} else {
var m__22306__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22719__auto__ = [];
var len__22712__auto___26312 = arguments.length;
var i__22713__auto___26313 = (0);
while(true){
if((i__22713__auto___26313 < len__22712__auto___26312)){
args__22719__auto__.push((arguments[i__22713__auto___26313]));

var G__26314 = (i__22713__auto___26313 + (1));
i__22713__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((3) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22720__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26306){
var map__26307 = p__26306;
var map__26307__$1 = ((((!((map__26307 == null)))?((((map__26307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26307):map__26307);
var opts = map__26307__$1;
var statearr_26309_26315 = state;
(statearr_26309_26315[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26307,map__26307__$1,opts){
return (function (val){
var statearr_26310_26316 = state;
(statearr_26310_26316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26307,map__26307__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26311_26317 = state;
(statearr_26311_26317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26302){
var G__26303 = cljs.core.first.call(null,seq26302);
var seq26302__$1 = cljs.core.next.call(null,seq26302);
var G__26304 = cljs.core.first.call(null,seq26302__$1);
var seq26302__$2 = cljs.core.next.call(null,seq26302__$1);
var G__26305 = cljs.core.first.call(null,seq26302__$2);
var seq26302__$3 = cljs.core.next.call(null,seq26302__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26303,G__26304,G__26305,seq26302__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26481 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26482){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26482 = meta26482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26483,meta26482__$1){
var self__ = this;
var _26483__$1 = this;
return (new cljs.core.async.t_cljs$core$async26481(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26482__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26483){
var self__ = this;
var _26483__$1 = this;
return self__.meta26482;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26482","meta26482",-844745187,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26481";

cljs.core.async.t_cljs$core$async26481.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async26481");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26481 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26481(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26482){
return (new cljs.core.async.t_cljs$core$async26481(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26482));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26481(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24931__auto___26644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26581){
var state_val_26582 = (state_26581[(1)]);
if((state_val_26582 === (7))){
var inst_26499 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26583_26645 = state_26581__$1;
(statearr_26583_26645[(2)] = inst_26499);

(statearr_26583_26645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (20))){
var inst_26511 = (state_26581[(7)]);
var state_26581__$1 = state_26581;
var statearr_26584_26646 = state_26581__$1;
(statearr_26584_26646[(2)] = inst_26511);

(statearr_26584_26646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (27))){
var state_26581__$1 = state_26581;
var statearr_26585_26647 = state_26581__$1;
(statearr_26585_26647[(2)] = null);

(statearr_26585_26647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (1))){
var inst_26487 = (state_26581[(8)]);
var inst_26487__$1 = calc_state.call(null);
var inst_26489 = (inst_26487__$1 == null);
var inst_26490 = cljs.core.not.call(null,inst_26489);
var state_26581__$1 = (function (){var statearr_26586 = state_26581;
(statearr_26586[(8)] = inst_26487__$1);

return statearr_26586;
})();
if(inst_26490){
var statearr_26587_26648 = state_26581__$1;
(statearr_26587_26648[(1)] = (2));

} else {
var statearr_26588_26649 = state_26581__$1;
(statearr_26588_26649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (24))){
var inst_26534 = (state_26581[(9)]);
var inst_26555 = (state_26581[(10)]);
var inst_26541 = (state_26581[(11)]);
var inst_26555__$1 = inst_26534.call(null,inst_26541);
var state_26581__$1 = (function (){var statearr_26589 = state_26581;
(statearr_26589[(10)] = inst_26555__$1);

return statearr_26589;
})();
if(cljs.core.truth_(inst_26555__$1)){
var statearr_26590_26650 = state_26581__$1;
(statearr_26590_26650[(1)] = (29));

} else {
var statearr_26591_26651 = state_26581__$1;
(statearr_26591_26651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (4))){
var inst_26502 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26502)){
var statearr_26592_26652 = state_26581__$1;
(statearr_26592_26652[(1)] = (8));

} else {
var statearr_26593_26653 = state_26581__$1;
(statearr_26593_26653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (15))){
var inst_26528 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26528)){
var statearr_26594_26654 = state_26581__$1;
(statearr_26594_26654[(1)] = (19));

} else {
var statearr_26595_26655 = state_26581__$1;
(statearr_26595_26655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (21))){
var inst_26533 = (state_26581[(12)]);
var inst_26533__$1 = (state_26581[(2)]);
var inst_26534 = cljs.core.get.call(null,inst_26533__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26535 = cljs.core.get.call(null,inst_26533__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26536 = cljs.core.get.call(null,inst_26533__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26581__$1 = (function (){var statearr_26596 = state_26581;
(statearr_26596[(12)] = inst_26533__$1);

(statearr_26596[(9)] = inst_26534);

(statearr_26596[(13)] = inst_26535);

return statearr_26596;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26581__$1,(22),inst_26536);
} else {
if((state_val_26582 === (31))){
var inst_26563 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26563)){
var statearr_26597_26656 = state_26581__$1;
(statearr_26597_26656[(1)] = (32));

} else {
var statearr_26598_26657 = state_26581__$1;
(statearr_26598_26657[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (32))){
var inst_26540 = (state_26581[(14)]);
var state_26581__$1 = state_26581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26581__$1,(35),out,inst_26540);
} else {
if((state_val_26582 === (33))){
var inst_26533 = (state_26581[(12)]);
var inst_26511 = inst_26533;
var state_26581__$1 = (function (){var statearr_26599 = state_26581;
(statearr_26599[(7)] = inst_26511);

return statearr_26599;
})();
var statearr_26600_26658 = state_26581__$1;
(statearr_26600_26658[(2)] = null);

(statearr_26600_26658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (13))){
var inst_26511 = (state_26581[(7)]);
var inst_26518 = inst_26511.cljs$lang$protocol_mask$partition0$;
var inst_26519 = (inst_26518 & (64));
var inst_26520 = inst_26511.cljs$core$ISeq$;
var inst_26521 = (inst_26519) || (inst_26520);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26521)){
var statearr_26601_26659 = state_26581__$1;
(statearr_26601_26659[(1)] = (16));

} else {
var statearr_26602_26660 = state_26581__$1;
(statearr_26602_26660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (22))){
var inst_26540 = (state_26581[(14)]);
var inst_26541 = (state_26581[(11)]);
var inst_26539 = (state_26581[(2)]);
var inst_26540__$1 = cljs.core.nth.call(null,inst_26539,(0),null);
var inst_26541__$1 = cljs.core.nth.call(null,inst_26539,(1),null);
var inst_26542 = (inst_26540__$1 == null);
var inst_26543 = cljs.core._EQ_.call(null,inst_26541__$1,change);
var inst_26544 = (inst_26542) || (inst_26543);
var state_26581__$1 = (function (){var statearr_26603 = state_26581;
(statearr_26603[(14)] = inst_26540__$1);

(statearr_26603[(11)] = inst_26541__$1);

return statearr_26603;
})();
if(cljs.core.truth_(inst_26544)){
var statearr_26604_26661 = state_26581__$1;
(statearr_26604_26661[(1)] = (23));

} else {
var statearr_26605_26662 = state_26581__$1;
(statearr_26605_26662[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (36))){
var inst_26533 = (state_26581[(12)]);
var inst_26511 = inst_26533;
var state_26581__$1 = (function (){var statearr_26606 = state_26581;
(statearr_26606[(7)] = inst_26511);

return statearr_26606;
})();
var statearr_26607_26663 = state_26581__$1;
(statearr_26607_26663[(2)] = null);

(statearr_26607_26663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (29))){
var inst_26555 = (state_26581[(10)]);
var state_26581__$1 = state_26581;
var statearr_26608_26664 = state_26581__$1;
(statearr_26608_26664[(2)] = inst_26555);

(statearr_26608_26664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (6))){
var state_26581__$1 = state_26581;
var statearr_26609_26665 = state_26581__$1;
(statearr_26609_26665[(2)] = false);

(statearr_26609_26665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (28))){
var inst_26551 = (state_26581[(2)]);
var inst_26552 = calc_state.call(null);
var inst_26511 = inst_26552;
var state_26581__$1 = (function (){var statearr_26610 = state_26581;
(statearr_26610[(15)] = inst_26551);

(statearr_26610[(7)] = inst_26511);

return statearr_26610;
})();
var statearr_26611_26666 = state_26581__$1;
(statearr_26611_26666[(2)] = null);

(statearr_26611_26666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (25))){
var inst_26577 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26612_26667 = state_26581__$1;
(statearr_26612_26667[(2)] = inst_26577);

(statearr_26612_26667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (34))){
var inst_26575 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26613_26668 = state_26581__$1;
(statearr_26613_26668[(2)] = inst_26575);

(statearr_26613_26668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (17))){
var state_26581__$1 = state_26581;
var statearr_26614_26669 = state_26581__$1;
(statearr_26614_26669[(2)] = false);

(statearr_26614_26669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (3))){
var state_26581__$1 = state_26581;
var statearr_26615_26670 = state_26581__$1;
(statearr_26615_26670[(2)] = false);

(statearr_26615_26670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (12))){
var inst_26579 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26581__$1,inst_26579);
} else {
if((state_val_26582 === (2))){
var inst_26487 = (state_26581[(8)]);
var inst_26492 = inst_26487.cljs$lang$protocol_mask$partition0$;
var inst_26493 = (inst_26492 & (64));
var inst_26494 = inst_26487.cljs$core$ISeq$;
var inst_26495 = (inst_26493) || (inst_26494);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26495)){
var statearr_26616_26671 = state_26581__$1;
(statearr_26616_26671[(1)] = (5));

} else {
var statearr_26617_26672 = state_26581__$1;
(statearr_26617_26672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (23))){
var inst_26540 = (state_26581[(14)]);
var inst_26546 = (inst_26540 == null);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26546)){
var statearr_26618_26673 = state_26581__$1;
(statearr_26618_26673[(1)] = (26));

} else {
var statearr_26619_26674 = state_26581__$1;
(statearr_26619_26674[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (35))){
var inst_26566 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
if(cljs.core.truth_(inst_26566)){
var statearr_26620_26675 = state_26581__$1;
(statearr_26620_26675[(1)] = (36));

} else {
var statearr_26621_26676 = state_26581__$1;
(statearr_26621_26676[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (19))){
var inst_26511 = (state_26581[(7)]);
var inst_26530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26511);
var state_26581__$1 = state_26581;
var statearr_26622_26677 = state_26581__$1;
(statearr_26622_26677[(2)] = inst_26530);

(statearr_26622_26677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (11))){
var inst_26511 = (state_26581[(7)]);
var inst_26515 = (inst_26511 == null);
var inst_26516 = cljs.core.not.call(null,inst_26515);
var state_26581__$1 = state_26581;
if(inst_26516){
var statearr_26623_26678 = state_26581__$1;
(statearr_26623_26678[(1)] = (13));

} else {
var statearr_26624_26679 = state_26581__$1;
(statearr_26624_26679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (9))){
var inst_26487 = (state_26581[(8)]);
var state_26581__$1 = state_26581;
var statearr_26625_26680 = state_26581__$1;
(statearr_26625_26680[(2)] = inst_26487);

(statearr_26625_26680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (5))){
var state_26581__$1 = state_26581;
var statearr_26626_26681 = state_26581__$1;
(statearr_26626_26681[(2)] = true);

(statearr_26626_26681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (14))){
var state_26581__$1 = state_26581;
var statearr_26627_26682 = state_26581__$1;
(statearr_26627_26682[(2)] = false);

(statearr_26627_26682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (26))){
var inst_26541 = (state_26581[(11)]);
var inst_26548 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26541);
var state_26581__$1 = state_26581;
var statearr_26628_26683 = state_26581__$1;
(statearr_26628_26683[(2)] = inst_26548);

(statearr_26628_26683[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (16))){
var state_26581__$1 = state_26581;
var statearr_26629_26684 = state_26581__$1;
(statearr_26629_26684[(2)] = true);

(statearr_26629_26684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (38))){
var inst_26571 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26630_26685 = state_26581__$1;
(statearr_26630_26685[(2)] = inst_26571);

(statearr_26630_26685[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (30))){
var inst_26534 = (state_26581[(9)]);
var inst_26535 = (state_26581[(13)]);
var inst_26541 = (state_26581[(11)]);
var inst_26558 = cljs.core.empty_QMARK_.call(null,inst_26534);
var inst_26559 = inst_26535.call(null,inst_26541);
var inst_26560 = cljs.core.not.call(null,inst_26559);
var inst_26561 = (inst_26558) && (inst_26560);
var state_26581__$1 = state_26581;
var statearr_26631_26686 = state_26581__$1;
(statearr_26631_26686[(2)] = inst_26561);

(statearr_26631_26686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (10))){
var inst_26487 = (state_26581[(8)]);
var inst_26507 = (state_26581[(2)]);
var inst_26508 = cljs.core.get.call(null,inst_26507,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26509 = cljs.core.get.call(null,inst_26507,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26510 = cljs.core.get.call(null,inst_26507,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26511 = inst_26487;
var state_26581__$1 = (function (){var statearr_26632 = state_26581;
(statearr_26632[(16)] = inst_26510);

(statearr_26632[(7)] = inst_26511);

(statearr_26632[(17)] = inst_26509);

(statearr_26632[(18)] = inst_26508);

return statearr_26632;
})();
var statearr_26633_26687 = state_26581__$1;
(statearr_26633_26687[(2)] = null);

(statearr_26633_26687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (18))){
var inst_26525 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26634_26688 = state_26581__$1;
(statearr_26634_26688[(2)] = inst_26525);

(statearr_26634_26688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (37))){
var state_26581__$1 = state_26581;
var statearr_26635_26689 = state_26581__$1;
(statearr_26635_26689[(2)] = null);

(statearr_26635_26689[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (8))){
var inst_26487 = (state_26581[(8)]);
var inst_26504 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26487);
var state_26581__$1 = state_26581;
var statearr_26636_26690 = state_26581__$1;
(statearr_26636_26690[(2)] = inst_26504);

(statearr_26636_26690[(1)] = (10));


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
});})(c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24819__auto__,c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24820__auto__ = null;
var cljs$core$async$mix_$_state_machine__24820__auto____0 = (function (){
var statearr_26640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26640[(0)] = cljs$core$async$mix_$_state_machine__24820__auto__);

(statearr_26640[(1)] = (1));

return statearr_26640;
});
var cljs$core$async$mix_$_state_machine__24820__auto____1 = (function (state_26581){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_26581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e26641){if((e26641 instanceof Object)){
var ex__24823__auto__ = e26641;
var statearr_26642_26691 = state_26581;
(statearr_26642_26691[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26692 = state_26581;
state_26581 = G__26692;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24820__auto__ = function(state_26581){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24820__auto____1.call(this,state_26581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24820__auto____0;
cljs$core$async$mix_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24820__auto____1;
return cljs$core$async$mix_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24933__auto__ = (function (){var statearr_26643 = f__24932__auto__.call(null);
(statearr_26643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___26644);

return statearr_26643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___26644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22305__auto__ = (((p == null))?null:p);
var m__22306__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22306__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22305__auto__ = (((p == null))?null:p);
var m__22306__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,p,v,ch);
} else {
var m__22306__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26693 = [];
var len__22712__auto___26696 = arguments.length;
var i__22713__auto___26697 = (0);
while(true){
if((i__22713__auto___26697 < len__22712__auto___26696)){
args26693.push((arguments[i__22713__auto___26697]));

var G__26698 = (i__22713__auto___26697 + (1));
i__22713__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var G__26695 = args26693.length;
switch (G__26695) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26693.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22305__auto__ = (((p == null))?null:p);
var m__22306__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,p);
} else {
var m__22306__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22305__auto__ = (((p == null))?null:p);
var m__22306__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22305__auto__)]);
if(!((m__22306__auto__ == null))){
return m__22306__auto__.call(null,p,v);
} else {
var m__22306__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22306__auto____$1 == null))){
return m__22306__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26701 = [];
var len__22712__auto___26826 = arguments.length;
var i__22713__auto___26827 = (0);
while(true){
if((i__22713__auto___26827 < len__22712__auto___26826)){
args26701.push((arguments[i__22713__auto___26827]));

var G__26828 = (i__22713__auto___26827 + (1));
i__22713__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var G__26703 = args26701.length;
switch (G__26703) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26701.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21642__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21642__auto__,mults){
return (function (p1__26700_SHARP_){
if(cljs.core.truth_(p1__26700_SHARP_.call(null,topic))){
return p1__26700_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26700_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21642__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26704 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26705){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26705 = meta26705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26706,meta26705__$1){
var self__ = this;
var _26706__$1 = this;
return (new cljs.core.async.t_cljs$core$async26704(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26705__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26706){
var self__ = this;
var _26706__$1 = this;
return self__.meta26705;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26705","meta26705",1613058670,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26704";

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async26704");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26704 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26705){
return (new cljs.core.async.t_cljs$core$async26704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26705));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26704(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24931__auto___26830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___26830,mults,ensure_mult,p){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___26830,mults,ensure_mult,p){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (7))){
var inst_26774 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26780_26831 = state_26778__$1;
(statearr_26780_26831[(2)] = inst_26774);

(statearr_26780_26831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (20))){
var state_26778__$1 = state_26778;
var statearr_26781_26832 = state_26778__$1;
(statearr_26781_26832[(2)] = null);

(statearr_26781_26832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (1))){
var state_26778__$1 = state_26778;
var statearr_26782_26833 = state_26778__$1;
(statearr_26782_26833[(2)] = null);

(statearr_26782_26833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (24))){
var inst_26757 = (state_26778[(7)]);
var inst_26766 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26757);
var state_26778__$1 = state_26778;
var statearr_26783_26834 = state_26778__$1;
(statearr_26783_26834[(2)] = inst_26766);

(statearr_26783_26834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (4))){
var inst_26709 = (state_26778[(8)]);
var inst_26709__$1 = (state_26778[(2)]);
var inst_26710 = (inst_26709__$1 == null);
var state_26778__$1 = (function (){var statearr_26784 = state_26778;
(statearr_26784[(8)] = inst_26709__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26710)){
var statearr_26785_26835 = state_26778__$1;
(statearr_26785_26835[(1)] = (5));

} else {
var statearr_26786_26836 = state_26778__$1;
(statearr_26786_26836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (15))){
var inst_26751 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26787_26837 = state_26778__$1;
(statearr_26787_26837[(2)] = inst_26751);

(statearr_26787_26837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (21))){
var inst_26771 = (state_26778[(2)]);
var state_26778__$1 = (function (){var statearr_26788 = state_26778;
(statearr_26788[(9)] = inst_26771);

return statearr_26788;
})();
var statearr_26789_26838 = state_26778__$1;
(statearr_26789_26838[(2)] = null);

(statearr_26789_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (13))){
var inst_26733 = (state_26778[(10)]);
var inst_26735 = cljs.core.chunked_seq_QMARK_.call(null,inst_26733);
var state_26778__$1 = state_26778;
if(inst_26735){
var statearr_26790_26839 = state_26778__$1;
(statearr_26790_26839[(1)] = (16));

} else {
var statearr_26791_26840 = state_26778__$1;
(statearr_26791_26840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (22))){
var inst_26763 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26763)){
var statearr_26792_26841 = state_26778__$1;
(statearr_26792_26841[(1)] = (23));

} else {
var statearr_26793_26842 = state_26778__$1;
(statearr_26793_26842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (6))){
var inst_26759 = (state_26778[(11)]);
var inst_26709 = (state_26778[(8)]);
var inst_26757 = (state_26778[(7)]);
var inst_26757__$1 = topic_fn.call(null,inst_26709);
var inst_26758 = cljs.core.deref.call(null,mults);
var inst_26759__$1 = cljs.core.get.call(null,inst_26758,inst_26757__$1);
var state_26778__$1 = (function (){var statearr_26794 = state_26778;
(statearr_26794[(11)] = inst_26759__$1);

(statearr_26794[(7)] = inst_26757__$1);

return statearr_26794;
})();
if(cljs.core.truth_(inst_26759__$1)){
var statearr_26795_26843 = state_26778__$1;
(statearr_26795_26843[(1)] = (19));

} else {
var statearr_26796_26844 = state_26778__$1;
(statearr_26796_26844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (25))){
var inst_26768 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26797_26845 = state_26778__$1;
(statearr_26797_26845[(2)] = inst_26768);

(statearr_26797_26845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (17))){
var inst_26733 = (state_26778[(10)]);
var inst_26742 = cljs.core.first.call(null,inst_26733);
var inst_26743 = cljs.core.async.muxch_STAR_.call(null,inst_26742);
var inst_26744 = cljs.core.async.close_BANG_.call(null,inst_26743);
var inst_26745 = cljs.core.next.call(null,inst_26733);
var inst_26719 = inst_26745;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26778__$1 = (function (){var statearr_26798 = state_26778;
(statearr_26798[(12)] = inst_26722);

(statearr_26798[(13)] = inst_26719);

(statearr_26798[(14)] = inst_26744);

(statearr_26798[(15)] = inst_26721);

(statearr_26798[(16)] = inst_26720);

return statearr_26798;
})();
var statearr_26799_26846 = state_26778__$1;
(statearr_26799_26846[(2)] = null);

(statearr_26799_26846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (3))){
var inst_26776 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
if((state_val_26779 === (12))){
var inst_26753 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26800_26847 = state_26778__$1;
(statearr_26800_26847[(2)] = inst_26753);

(statearr_26800_26847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (2))){
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(4),ch);
} else {
if((state_val_26779 === (23))){
var state_26778__$1 = state_26778;
var statearr_26801_26848 = state_26778__$1;
(statearr_26801_26848[(2)] = null);

(statearr_26801_26848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (19))){
var inst_26759 = (state_26778[(11)]);
var inst_26709 = (state_26778[(8)]);
var inst_26761 = cljs.core.async.muxch_STAR_.call(null,inst_26759);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26778__$1,(22),inst_26761,inst_26709);
} else {
if((state_val_26779 === (11))){
var inst_26733 = (state_26778[(10)]);
var inst_26719 = (state_26778[(13)]);
var inst_26733__$1 = cljs.core.seq.call(null,inst_26719);
var state_26778__$1 = (function (){var statearr_26802 = state_26778;
(statearr_26802[(10)] = inst_26733__$1);

return statearr_26802;
})();
if(inst_26733__$1){
var statearr_26803_26849 = state_26778__$1;
(statearr_26803_26849[(1)] = (13));

} else {
var statearr_26804_26850 = state_26778__$1;
(statearr_26804_26850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (9))){
var inst_26755 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26805_26851 = state_26778__$1;
(statearr_26805_26851[(2)] = inst_26755);

(statearr_26805_26851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (5))){
var inst_26716 = cljs.core.deref.call(null,mults);
var inst_26717 = cljs.core.vals.call(null,inst_26716);
var inst_26718 = cljs.core.seq.call(null,inst_26717);
var inst_26719 = inst_26718;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26778__$1 = (function (){var statearr_26806 = state_26778;
(statearr_26806[(12)] = inst_26722);

(statearr_26806[(13)] = inst_26719);

(statearr_26806[(15)] = inst_26721);

(statearr_26806[(16)] = inst_26720);

return statearr_26806;
})();
var statearr_26807_26852 = state_26778__$1;
(statearr_26807_26852[(2)] = null);

(statearr_26807_26852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (14))){
var state_26778__$1 = state_26778;
var statearr_26811_26853 = state_26778__$1;
(statearr_26811_26853[(2)] = null);

(statearr_26811_26853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (16))){
var inst_26733 = (state_26778[(10)]);
var inst_26737 = cljs.core.chunk_first.call(null,inst_26733);
var inst_26738 = cljs.core.chunk_rest.call(null,inst_26733);
var inst_26739 = cljs.core.count.call(null,inst_26737);
var inst_26719 = inst_26738;
var inst_26720 = inst_26737;
var inst_26721 = inst_26739;
var inst_26722 = (0);
var state_26778__$1 = (function (){var statearr_26812 = state_26778;
(statearr_26812[(12)] = inst_26722);

(statearr_26812[(13)] = inst_26719);

(statearr_26812[(15)] = inst_26721);

(statearr_26812[(16)] = inst_26720);

return statearr_26812;
})();
var statearr_26813_26854 = state_26778__$1;
(statearr_26813_26854[(2)] = null);

(statearr_26813_26854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (10))){
var inst_26722 = (state_26778[(12)]);
var inst_26719 = (state_26778[(13)]);
var inst_26721 = (state_26778[(15)]);
var inst_26720 = (state_26778[(16)]);
var inst_26727 = cljs.core._nth.call(null,inst_26720,inst_26722);
var inst_26728 = cljs.core.async.muxch_STAR_.call(null,inst_26727);
var inst_26729 = cljs.core.async.close_BANG_.call(null,inst_26728);
var inst_26730 = (inst_26722 + (1));
var tmp26808 = inst_26719;
var tmp26809 = inst_26721;
var tmp26810 = inst_26720;
var inst_26719__$1 = tmp26808;
var inst_26720__$1 = tmp26810;
var inst_26721__$1 = tmp26809;
var inst_26722__$1 = inst_26730;
var state_26778__$1 = (function (){var statearr_26814 = state_26778;
(statearr_26814[(12)] = inst_26722__$1);

(statearr_26814[(17)] = inst_26729);

(statearr_26814[(13)] = inst_26719__$1);

(statearr_26814[(15)] = inst_26721__$1);

(statearr_26814[(16)] = inst_26720__$1);

return statearr_26814;
})();
var statearr_26815_26855 = state_26778__$1;
(statearr_26815_26855[(2)] = null);

(statearr_26815_26855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (18))){
var inst_26748 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26816_26856 = state_26778__$1;
(statearr_26816_26856[(2)] = inst_26748);

(statearr_26816_26856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (8))){
var inst_26722 = (state_26778[(12)]);
var inst_26721 = (state_26778[(15)]);
var inst_26724 = (inst_26722 < inst_26721);
var inst_26725 = inst_26724;
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26725)){
var statearr_26817_26857 = state_26778__$1;
(statearr_26817_26857[(1)] = (10));

} else {
var statearr_26818_26858 = state_26778__$1;
(statearr_26818_26858[(1)] = (11));

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
});})(c__24931__auto___26830,mults,ensure_mult,p))
;
return ((function (switch__24819__auto__,c__24931__auto___26830,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26822[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_26778){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__24823__auto__ = e26823;
var statearr_26824_26859 = state_26778;
(statearr_26824_26859[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26778;
state_26778 = G__26860;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___26830,mults,ensure_mult,p))
})();
var state__24933__auto__ = (function (){var statearr_26825 = f__24932__auto__.call(null);
(statearr_26825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___26830);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___26830,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26861 = [];
var len__22712__auto___26864 = arguments.length;
var i__22713__auto___26865 = (0);
while(true){
if((i__22713__auto___26865 < len__22712__auto___26864)){
args26861.push((arguments[i__22713__auto___26865]));

var G__26866 = (i__22713__auto___26865 + (1));
i__22713__auto___26865 = G__26866;
continue;
} else {
}
break;
}

var G__26863 = args26861.length;
switch (G__26863) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26861.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26868 = [];
var len__22712__auto___26871 = arguments.length;
var i__22713__auto___26872 = (0);
while(true){
if((i__22713__auto___26872 < len__22712__auto___26871)){
args26868.push((arguments[i__22713__auto___26872]));

var G__26873 = (i__22713__auto___26872 + (1));
i__22713__auto___26872 = G__26873;
continue;
} else {
}
break;
}

var G__26870 = args26868.length;
switch (G__26870) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26868.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26875 = [];
var len__22712__auto___26946 = arguments.length;
var i__22713__auto___26947 = (0);
while(true){
if((i__22713__auto___26947 < len__22712__auto___26946)){
args26875.push((arguments[i__22713__auto___26947]));

var G__26948 = (i__22713__auto___26947 + (1));
i__22713__auto___26947 = G__26948;
continue;
} else {
}
break;
}

var G__26877 = args26875.length;
switch (G__26877) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26875.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24931__auto___26950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26916){
var state_val_26917 = (state_26916[(1)]);
if((state_val_26917 === (7))){
var state_26916__$1 = state_26916;
var statearr_26918_26951 = state_26916__$1;
(statearr_26918_26951[(2)] = null);

(statearr_26918_26951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (1))){
var state_26916__$1 = state_26916;
var statearr_26919_26952 = state_26916__$1;
(statearr_26919_26952[(2)] = null);

(statearr_26919_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (4))){
var inst_26880 = (state_26916[(7)]);
var inst_26882 = (inst_26880 < cnt);
var state_26916__$1 = state_26916;
if(cljs.core.truth_(inst_26882)){
var statearr_26920_26953 = state_26916__$1;
(statearr_26920_26953[(1)] = (6));

} else {
var statearr_26921_26954 = state_26916__$1;
(statearr_26921_26954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (15))){
var inst_26912 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26922_26955 = state_26916__$1;
(statearr_26922_26955[(2)] = inst_26912);

(statearr_26922_26955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (13))){
var inst_26905 = cljs.core.async.close_BANG_.call(null,out);
var state_26916__$1 = state_26916;
var statearr_26923_26956 = state_26916__$1;
(statearr_26923_26956[(2)] = inst_26905);

(statearr_26923_26956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (6))){
var state_26916__$1 = state_26916;
var statearr_26924_26957 = state_26916__$1;
(statearr_26924_26957[(2)] = null);

(statearr_26924_26957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (3))){
var inst_26914 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26916__$1,inst_26914);
} else {
if((state_val_26917 === (12))){
var inst_26902 = (state_26916[(8)]);
var inst_26902__$1 = (state_26916[(2)]);
var inst_26903 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26902__$1);
var state_26916__$1 = (function (){var statearr_26925 = state_26916;
(statearr_26925[(8)] = inst_26902__$1);

return statearr_26925;
})();
if(cljs.core.truth_(inst_26903)){
var statearr_26926_26958 = state_26916__$1;
(statearr_26926_26958[(1)] = (13));

} else {
var statearr_26927_26959 = state_26916__$1;
(statearr_26927_26959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (2))){
var inst_26879 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26880 = (0);
var state_26916__$1 = (function (){var statearr_26928 = state_26916;
(statearr_26928[(9)] = inst_26879);

(statearr_26928[(7)] = inst_26880);

return statearr_26928;
})();
var statearr_26929_26960 = state_26916__$1;
(statearr_26929_26960[(2)] = null);

(statearr_26929_26960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (11))){
var inst_26880 = (state_26916[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26916,(10),Object,null,(9));
var inst_26889 = chs__$1.call(null,inst_26880);
var inst_26890 = done.call(null,inst_26880);
var inst_26891 = cljs.core.async.take_BANG_.call(null,inst_26889,inst_26890);
var state_26916__$1 = state_26916;
var statearr_26930_26961 = state_26916__$1;
(statearr_26930_26961[(2)] = inst_26891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (9))){
var inst_26880 = (state_26916[(7)]);
var inst_26893 = (state_26916[(2)]);
var inst_26894 = (inst_26880 + (1));
var inst_26880__$1 = inst_26894;
var state_26916__$1 = (function (){var statearr_26931 = state_26916;
(statearr_26931[(10)] = inst_26893);

(statearr_26931[(7)] = inst_26880__$1);

return statearr_26931;
})();
var statearr_26932_26962 = state_26916__$1;
(statearr_26932_26962[(2)] = null);

(statearr_26932_26962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (5))){
var inst_26900 = (state_26916[(2)]);
var state_26916__$1 = (function (){var statearr_26933 = state_26916;
(statearr_26933[(11)] = inst_26900);

return statearr_26933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26916__$1,(12),dchan);
} else {
if((state_val_26917 === (14))){
var inst_26902 = (state_26916[(8)]);
var inst_26907 = cljs.core.apply.call(null,f,inst_26902);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(16),out,inst_26907);
} else {
if((state_val_26917 === (16))){
var inst_26909 = (state_26916[(2)]);
var state_26916__$1 = (function (){var statearr_26934 = state_26916;
(statearr_26934[(12)] = inst_26909);

return statearr_26934;
})();
var statearr_26935_26963 = state_26916__$1;
(statearr_26935_26963[(2)] = null);

(statearr_26935_26963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (10))){
var inst_26884 = (state_26916[(2)]);
var inst_26885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26916__$1 = (function (){var statearr_26936 = state_26916;
(statearr_26936[(13)] = inst_26884);

return statearr_26936;
})();
var statearr_26937_26964 = state_26916__$1;
(statearr_26937_26964[(2)] = inst_26885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (8))){
var inst_26898 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26938_26965 = state_26916__$1;
(statearr_26938_26965[(2)] = inst_26898);

(statearr_26938_26965[(1)] = (5));


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
});})(c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24819__auto__,c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_26942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26942[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_26942[(1)] = (1));

return statearr_26942;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_26916){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_26916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e26943){if((e26943 instanceof Object)){
var ex__24823__auto__ = e26943;
var statearr_26944_26966 = state_26916;
(statearr_26944_26966[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26916;
state_26916 = G__26967;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_26916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_26916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24933__auto__ = (function (){var statearr_26945 = f__24932__auto__.call(null);
(statearr_26945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___26950);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___26950,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26969 = [];
var len__22712__auto___27025 = arguments.length;
var i__22713__auto___27026 = (0);
while(true){
if((i__22713__auto___27026 < len__22712__auto___27025)){
args26969.push((arguments[i__22713__auto___27026]));

var G__27027 = (i__22713__auto___27026 + (1));
i__22713__auto___27026 = G__27027;
continue;
} else {
}
break;
}

var G__26971 = args26969.length;
switch (G__26971) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26969.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27029,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27029,out){
return (function (state_27001){
var state_val_27002 = (state_27001[(1)]);
if((state_val_27002 === (7))){
var inst_26981 = (state_27001[(7)]);
var inst_26980 = (state_27001[(8)]);
var inst_26980__$1 = (state_27001[(2)]);
var inst_26981__$1 = cljs.core.nth.call(null,inst_26980__$1,(0),null);
var inst_26982 = cljs.core.nth.call(null,inst_26980__$1,(1),null);
var inst_26983 = (inst_26981__$1 == null);
var state_27001__$1 = (function (){var statearr_27003 = state_27001;
(statearr_27003[(9)] = inst_26982);

(statearr_27003[(7)] = inst_26981__$1);

(statearr_27003[(8)] = inst_26980__$1);

return statearr_27003;
})();
if(cljs.core.truth_(inst_26983)){
var statearr_27004_27030 = state_27001__$1;
(statearr_27004_27030[(1)] = (8));

} else {
var statearr_27005_27031 = state_27001__$1;
(statearr_27005_27031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (1))){
var inst_26972 = cljs.core.vec.call(null,chs);
var inst_26973 = inst_26972;
var state_27001__$1 = (function (){var statearr_27006 = state_27001;
(statearr_27006[(10)] = inst_26973);

return statearr_27006;
})();
var statearr_27007_27032 = state_27001__$1;
(statearr_27007_27032[(2)] = null);

(statearr_27007_27032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (4))){
var inst_26973 = (state_27001[(10)]);
var state_27001__$1 = state_27001;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27001__$1,(7),inst_26973);
} else {
if((state_val_27002 === (6))){
var inst_26997 = (state_27001[(2)]);
var state_27001__$1 = state_27001;
var statearr_27008_27033 = state_27001__$1;
(statearr_27008_27033[(2)] = inst_26997);

(statearr_27008_27033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (3))){
var inst_26999 = (state_27001[(2)]);
var state_27001__$1 = state_27001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27001__$1,inst_26999);
} else {
if((state_val_27002 === (2))){
var inst_26973 = (state_27001[(10)]);
var inst_26975 = cljs.core.count.call(null,inst_26973);
var inst_26976 = (inst_26975 > (0));
var state_27001__$1 = state_27001;
if(cljs.core.truth_(inst_26976)){
var statearr_27010_27034 = state_27001__$1;
(statearr_27010_27034[(1)] = (4));

} else {
var statearr_27011_27035 = state_27001__$1;
(statearr_27011_27035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (11))){
var inst_26973 = (state_27001[(10)]);
var inst_26990 = (state_27001[(2)]);
var tmp27009 = inst_26973;
var inst_26973__$1 = tmp27009;
var state_27001__$1 = (function (){var statearr_27012 = state_27001;
(statearr_27012[(11)] = inst_26990);

(statearr_27012[(10)] = inst_26973__$1);

return statearr_27012;
})();
var statearr_27013_27036 = state_27001__$1;
(statearr_27013_27036[(2)] = null);

(statearr_27013_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (9))){
var inst_26981 = (state_27001[(7)]);
var state_27001__$1 = state_27001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27001__$1,(11),out,inst_26981);
} else {
if((state_val_27002 === (5))){
var inst_26995 = cljs.core.async.close_BANG_.call(null,out);
var state_27001__$1 = state_27001;
var statearr_27014_27037 = state_27001__$1;
(statearr_27014_27037[(2)] = inst_26995);

(statearr_27014_27037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (10))){
var inst_26993 = (state_27001[(2)]);
var state_27001__$1 = state_27001;
var statearr_27015_27038 = state_27001__$1;
(statearr_27015_27038[(2)] = inst_26993);

(statearr_27015_27038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27002 === (8))){
var inst_26982 = (state_27001[(9)]);
var inst_26973 = (state_27001[(10)]);
var inst_26981 = (state_27001[(7)]);
var inst_26980 = (state_27001[(8)]);
var inst_26985 = (function (){var cs = inst_26973;
var vec__26978 = inst_26980;
var v = inst_26981;
var c = inst_26982;
return ((function (cs,vec__26978,v,c,inst_26982,inst_26973,inst_26981,inst_26980,state_val_27002,c__24931__auto___27029,out){
return (function (p1__26968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26968_SHARP_);
});
;})(cs,vec__26978,v,c,inst_26982,inst_26973,inst_26981,inst_26980,state_val_27002,c__24931__auto___27029,out))
})();
var inst_26986 = cljs.core.filterv.call(null,inst_26985,inst_26973);
var inst_26973__$1 = inst_26986;
var state_27001__$1 = (function (){var statearr_27016 = state_27001;
(statearr_27016[(10)] = inst_26973__$1);

return statearr_27016;
})();
var statearr_27017_27039 = state_27001__$1;
(statearr_27017_27039[(2)] = null);

(statearr_27017_27039[(1)] = (2));


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
});})(c__24931__auto___27029,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27029,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27021 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27021[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27021[(1)] = (1));

return statearr_27021;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27001){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27022){if((e27022 instanceof Object)){
var ex__24823__auto__ = e27022;
var statearr_27023_27040 = state_27001;
(statearr_27023_27040[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27041 = state_27001;
state_27001 = G__27041;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27029,out))
})();
var state__24933__auto__ = (function (){var statearr_27024 = f__24932__auto__.call(null);
(statearr_27024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27029);

return statearr_27024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27029,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27042 = [];
var len__22712__auto___27091 = arguments.length;
var i__22713__auto___27092 = (0);
while(true){
if((i__22713__auto___27092 < len__22712__auto___27091)){
args27042.push((arguments[i__22713__auto___27092]));

var G__27093 = (i__22713__auto___27092 + (1));
i__22713__auto___27092 = G__27093;
continue;
} else {
}
break;
}

var G__27044 = args27042.length;
switch (G__27044) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27042.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27095,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27095,out){
return (function (state_27068){
var state_val_27069 = (state_27068[(1)]);
if((state_val_27069 === (7))){
var inst_27050 = (state_27068[(7)]);
var inst_27050__$1 = (state_27068[(2)]);
var inst_27051 = (inst_27050__$1 == null);
var inst_27052 = cljs.core.not.call(null,inst_27051);
var state_27068__$1 = (function (){var statearr_27070 = state_27068;
(statearr_27070[(7)] = inst_27050__$1);

return statearr_27070;
})();
if(inst_27052){
var statearr_27071_27096 = state_27068__$1;
(statearr_27071_27096[(1)] = (8));

} else {
var statearr_27072_27097 = state_27068__$1;
(statearr_27072_27097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (1))){
var inst_27045 = (0);
var state_27068__$1 = (function (){var statearr_27073 = state_27068;
(statearr_27073[(8)] = inst_27045);

return statearr_27073;
})();
var statearr_27074_27098 = state_27068__$1;
(statearr_27074_27098[(2)] = null);

(statearr_27074_27098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (4))){
var state_27068__$1 = state_27068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27068__$1,(7),ch);
} else {
if((state_val_27069 === (6))){
var inst_27063 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
var statearr_27075_27099 = state_27068__$1;
(statearr_27075_27099[(2)] = inst_27063);

(statearr_27075_27099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (3))){
var inst_27065 = (state_27068[(2)]);
var inst_27066 = cljs.core.async.close_BANG_.call(null,out);
var state_27068__$1 = (function (){var statearr_27076 = state_27068;
(statearr_27076[(9)] = inst_27065);

return statearr_27076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27068__$1,inst_27066);
} else {
if((state_val_27069 === (2))){
var inst_27045 = (state_27068[(8)]);
var inst_27047 = (inst_27045 < n);
var state_27068__$1 = state_27068;
if(cljs.core.truth_(inst_27047)){
var statearr_27077_27100 = state_27068__$1;
(statearr_27077_27100[(1)] = (4));

} else {
var statearr_27078_27101 = state_27068__$1;
(statearr_27078_27101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (11))){
var inst_27045 = (state_27068[(8)]);
var inst_27055 = (state_27068[(2)]);
var inst_27056 = (inst_27045 + (1));
var inst_27045__$1 = inst_27056;
var state_27068__$1 = (function (){var statearr_27079 = state_27068;
(statearr_27079[(10)] = inst_27055);

(statearr_27079[(8)] = inst_27045__$1);

return statearr_27079;
})();
var statearr_27080_27102 = state_27068__$1;
(statearr_27080_27102[(2)] = null);

(statearr_27080_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (9))){
var state_27068__$1 = state_27068;
var statearr_27081_27103 = state_27068__$1;
(statearr_27081_27103[(2)] = null);

(statearr_27081_27103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (5))){
var state_27068__$1 = state_27068;
var statearr_27082_27104 = state_27068__$1;
(statearr_27082_27104[(2)] = null);

(statearr_27082_27104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (10))){
var inst_27060 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
var statearr_27083_27105 = state_27068__$1;
(statearr_27083_27105[(2)] = inst_27060);

(statearr_27083_27105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (8))){
var inst_27050 = (state_27068[(7)]);
var state_27068__$1 = state_27068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27068__$1,(11),out,inst_27050);
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
});})(c__24931__auto___27095,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27095,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27087[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27087[(1)] = (1));

return statearr_27087;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27068){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27088){if((e27088 instanceof Object)){
var ex__24823__auto__ = e27088;
var statearr_27089_27106 = state_27068;
(statearr_27089_27106[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27107 = state_27068;
state_27068 = G__27107;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27095,out))
})();
var state__24933__auto__ = (function (){var statearr_27090 = f__24932__auto__.call(null);
(statearr_27090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27095);

return statearr_27090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27095,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27115 = (function (map_LT_,f,ch,meta27116){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27116 = meta27116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27117,meta27116__$1){
var self__ = this;
var _27117__$1 = this;
return (new cljs.core.async.t_cljs$core$async27115(self__.map_LT_,self__.f,self__.ch,meta27116__$1));
});

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27117){
var self__ = this;
var _27117__$1 = this;
return self__.meta27116;
});

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27118 = (function (map_LT_,f,ch,meta27116,_,fn1,meta27119){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27116 = meta27116;
this._ = _;
this.fn1 = fn1;
this.meta27119 = meta27119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27120,meta27119__$1){
var self__ = this;
var _27120__$1 = this;
return (new cljs.core.async.t_cljs$core$async27118(self__.map_LT_,self__.f,self__.ch,self__.meta27116,self__._,self__.fn1,meta27119__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27120){
var self__ = this;
var _27120__$1 = this;
return self__.meta27119;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27108_SHARP_){
return f1.call(null,(((p1__27108_SHARP_ == null))?null:self__.f.call(null,p1__27108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27116","meta27116",1085713416,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27115","cljs.core.async/t_cljs$core$async27115",221069387,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27119","meta27119",1287588702,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27118";

cljs.core.async.t_cljs$core$async27118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async27118");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27118 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27118(map_LT___$1,f__$1,ch__$1,meta27116__$1,___$2,fn1__$1,meta27119){
return (new cljs.core.async.t_cljs$core$async27118(map_LT___$1,f__$1,ch__$1,meta27116__$1,___$2,fn1__$1,meta27119));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27118(self__.map_LT_,self__.f,self__.ch,self__.meta27116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21630__auto__ = ret;
if(cljs.core.truth_(and__21630__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21630__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27116","meta27116",1085713416,null)], null);
});

cljs.core.async.t_cljs$core$async27115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27115";

cljs.core.async.t_cljs$core$async27115.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async27115");
});

cljs.core.async.__GT_t_cljs$core$async27115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27115(map_LT___$1,f__$1,ch__$1,meta27116){
return (new cljs.core.async.t_cljs$core$async27115(map_LT___$1,f__$1,ch__$1,meta27116));
});

}

return (new cljs.core.async.t_cljs$core$async27115(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27124 = (function (map_GT_,f,ch,meta27125){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27125 = meta27125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27126,meta27125__$1){
var self__ = this;
var _27126__$1 = this;
return (new cljs.core.async.t_cljs$core$async27124(self__.map_GT_,self__.f,self__.ch,meta27125__$1));
});

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27126){
var self__ = this;
var _27126__$1 = this;
return self__.meta27125;
});

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27125","meta27125",-276627823,null)], null);
});

cljs.core.async.t_cljs$core$async27124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27124";

cljs.core.async.t_cljs$core$async27124.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async27124");
});

cljs.core.async.__GT_t_cljs$core$async27124 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27124(map_GT___$1,f__$1,ch__$1,meta27125){
return (new cljs.core.async.t_cljs$core$async27124(map_GT___$1,f__$1,ch__$1,meta27125));
});

}

return (new cljs.core.async.t_cljs$core$async27124(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27130 = (function (filter_GT_,p,ch,meta27131){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27131 = meta27131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27132,meta27131__$1){
var self__ = this;
var _27132__$1 = this;
return (new cljs.core.async.t_cljs$core$async27130(self__.filter_GT_,self__.p,self__.ch,meta27131__$1));
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27132){
var self__ = this;
var _27132__$1 = this;
return self__.meta27131;
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27131","meta27131",1660109521,null)], null);
});

cljs.core.async.t_cljs$core$async27130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27130";

cljs.core.async.t_cljs$core$async27130.cljs$lang$ctorPrWriter = (function (this__22248__auto__,writer__22249__auto__,opt__22250__auto__){
return cljs.core._write.call(null,writer__22249__auto__,"cljs.core.async/t_cljs$core$async27130");
});

cljs.core.async.__GT_t_cljs$core$async27130 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27130(filter_GT___$1,p__$1,ch__$1,meta27131){
return (new cljs.core.async.t_cljs$core$async27130(filter_GT___$1,p__$1,ch__$1,meta27131));
});

}

return (new cljs.core.async.t_cljs$core$async27130(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27133 = [];
var len__22712__auto___27177 = arguments.length;
var i__22713__auto___27178 = (0);
while(true){
if((i__22713__auto___27178 < len__22712__auto___27177)){
args27133.push((arguments[i__22713__auto___27178]));

var G__27179 = (i__22713__auto___27178 + (1));
i__22713__auto___27178 = G__27179;
continue;
} else {
}
break;
}

var G__27135 = args27133.length;
switch (G__27135) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27133.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27181,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27181,out){
return (function (state_27156){
var state_val_27157 = (state_27156[(1)]);
if((state_val_27157 === (7))){
var inst_27152 = (state_27156[(2)]);
var state_27156__$1 = state_27156;
var statearr_27158_27182 = state_27156__$1;
(statearr_27158_27182[(2)] = inst_27152);

(statearr_27158_27182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (1))){
var state_27156__$1 = state_27156;
var statearr_27159_27183 = state_27156__$1;
(statearr_27159_27183[(2)] = null);

(statearr_27159_27183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (4))){
var inst_27138 = (state_27156[(7)]);
var inst_27138__$1 = (state_27156[(2)]);
var inst_27139 = (inst_27138__$1 == null);
var state_27156__$1 = (function (){var statearr_27160 = state_27156;
(statearr_27160[(7)] = inst_27138__$1);

return statearr_27160;
})();
if(cljs.core.truth_(inst_27139)){
var statearr_27161_27184 = state_27156__$1;
(statearr_27161_27184[(1)] = (5));

} else {
var statearr_27162_27185 = state_27156__$1;
(statearr_27162_27185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (6))){
var inst_27138 = (state_27156[(7)]);
var inst_27143 = p.call(null,inst_27138);
var state_27156__$1 = state_27156;
if(cljs.core.truth_(inst_27143)){
var statearr_27163_27186 = state_27156__$1;
(statearr_27163_27186[(1)] = (8));

} else {
var statearr_27164_27187 = state_27156__$1;
(statearr_27164_27187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (3))){
var inst_27154 = (state_27156[(2)]);
var state_27156__$1 = state_27156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27156__$1,inst_27154);
} else {
if((state_val_27157 === (2))){
var state_27156__$1 = state_27156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27156__$1,(4),ch);
} else {
if((state_val_27157 === (11))){
var inst_27146 = (state_27156[(2)]);
var state_27156__$1 = state_27156;
var statearr_27165_27188 = state_27156__$1;
(statearr_27165_27188[(2)] = inst_27146);

(statearr_27165_27188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (9))){
var state_27156__$1 = state_27156;
var statearr_27166_27189 = state_27156__$1;
(statearr_27166_27189[(2)] = null);

(statearr_27166_27189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (5))){
var inst_27141 = cljs.core.async.close_BANG_.call(null,out);
var state_27156__$1 = state_27156;
var statearr_27167_27190 = state_27156__$1;
(statearr_27167_27190[(2)] = inst_27141);

(statearr_27167_27190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (10))){
var inst_27149 = (state_27156[(2)]);
var state_27156__$1 = (function (){var statearr_27168 = state_27156;
(statearr_27168[(8)] = inst_27149);

return statearr_27168;
})();
var statearr_27169_27191 = state_27156__$1;
(statearr_27169_27191[(2)] = null);

(statearr_27169_27191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27157 === (8))){
var inst_27138 = (state_27156[(7)]);
var state_27156__$1 = state_27156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27156__$1,(11),out,inst_27138);
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
});})(c__24931__auto___27181,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27181,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27173 = [null,null,null,null,null,null,null,null,null];
(statearr_27173[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27173[(1)] = (1));

return statearr_27173;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27156){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27174){if((e27174 instanceof Object)){
var ex__24823__auto__ = e27174;
var statearr_27175_27192 = state_27156;
(statearr_27175_27192[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27193 = state_27156;
state_27156 = G__27193;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27181,out))
})();
var state__24933__auto__ = (function (){var statearr_27176 = f__24932__auto__.call(null);
(statearr_27176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27181);

return statearr_27176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27181,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27194 = [];
var len__22712__auto___27197 = arguments.length;
var i__22713__auto___27198 = (0);
while(true){
if((i__22713__auto___27198 < len__22712__auto___27197)){
args27194.push((arguments[i__22713__auto___27198]));

var G__27199 = (i__22713__auto___27198 + (1));
i__22713__auto___27198 = G__27199;
continue;
} else {
}
break;
}

var G__27196 = args27194.length;
switch (G__27196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27194.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_27366){
var state_val_27367 = (state_27366[(1)]);
if((state_val_27367 === (7))){
var inst_27362 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
var statearr_27368_27409 = state_27366__$1;
(statearr_27368_27409[(2)] = inst_27362);

(statearr_27368_27409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (20))){
var inst_27332 = (state_27366[(7)]);
var inst_27343 = (state_27366[(2)]);
var inst_27344 = cljs.core.next.call(null,inst_27332);
var inst_27318 = inst_27344;
var inst_27319 = null;
var inst_27320 = (0);
var inst_27321 = (0);
var state_27366__$1 = (function (){var statearr_27369 = state_27366;
(statearr_27369[(8)] = inst_27320);

(statearr_27369[(9)] = inst_27318);

(statearr_27369[(10)] = inst_27343);

(statearr_27369[(11)] = inst_27319);

(statearr_27369[(12)] = inst_27321);

return statearr_27369;
})();
var statearr_27370_27410 = state_27366__$1;
(statearr_27370_27410[(2)] = null);

(statearr_27370_27410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (1))){
var state_27366__$1 = state_27366;
var statearr_27371_27411 = state_27366__$1;
(statearr_27371_27411[(2)] = null);

(statearr_27371_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (4))){
var inst_27307 = (state_27366[(13)]);
var inst_27307__$1 = (state_27366[(2)]);
var inst_27308 = (inst_27307__$1 == null);
var state_27366__$1 = (function (){var statearr_27372 = state_27366;
(statearr_27372[(13)] = inst_27307__$1);

return statearr_27372;
})();
if(cljs.core.truth_(inst_27308)){
var statearr_27373_27412 = state_27366__$1;
(statearr_27373_27412[(1)] = (5));

} else {
var statearr_27374_27413 = state_27366__$1;
(statearr_27374_27413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (15))){
var state_27366__$1 = state_27366;
var statearr_27378_27414 = state_27366__$1;
(statearr_27378_27414[(2)] = null);

(statearr_27378_27414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (21))){
var state_27366__$1 = state_27366;
var statearr_27379_27415 = state_27366__$1;
(statearr_27379_27415[(2)] = null);

(statearr_27379_27415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (13))){
var inst_27320 = (state_27366[(8)]);
var inst_27318 = (state_27366[(9)]);
var inst_27319 = (state_27366[(11)]);
var inst_27321 = (state_27366[(12)]);
var inst_27328 = (state_27366[(2)]);
var inst_27329 = (inst_27321 + (1));
var tmp27375 = inst_27320;
var tmp27376 = inst_27318;
var tmp27377 = inst_27319;
var inst_27318__$1 = tmp27376;
var inst_27319__$1 = tmp27377;
var inst_27320__$1 = tmp27375;
var inst_27321__$1 = inst_27329;
var state_27366__$1 = (function (){var statearr_27380 = state_27366;
(statearr_27380[(8)] = inst_27320__$1);

(statearr_27380[(14)] = inst_27328);

(statearr_27380[(9)] = inst_27318__$1);

(statearr_27380[(11)] = inst_27319__$1);

(statearr_27380[(12)] = inst_27321__$1);

return statearr_27380;
})();
var statearr_27381_27416 = state_27366__$1;
(statearr_27381_27416[(2)] = null);

(statearr_27381_27416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (22))){
var state_27366__$1 = state_27366;
var statearr_27382_27417 = state_27366__$1;
(statearr_27382_27417[(2)] = null);

(statearr_27382_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (6))){
var inst_27307 = (state_27366[(13)]);
var inst_27316 = f.call(null,inst_27307);
var inst_27317 = cljs.core.seq.call(null,inst_27316);
var inst_27318 = inst_27317;
var inst_27319 = null;
var inst_27320 = (0);
var inst_27321 = (0);
var state_27366__$1 = (function (){var statearr_27383 = state_27366;
(statearr_27383[(8)] = inst_27320);

(statearr_27383[(9)] = inst_27318);

(statearr_27383[(11)] = inst_27319);

(statearr_27383[(12)] = inst_27321);

return statearr_27383;
})();
var statearr_27384_27418 = state_27366__$1;
(statearr_27384_27418[(2)] = null);

(statearr_27384_27418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (17))){
var inst_27332 = (state_27366[(7)]);
var inst_27336 = cljs.core.chunk_first.call(null,inst_27332);
var inst_27337 = cljs.core.chunk_rest.call(null,inst_27332);
var inst_27338 = cljs.core.count.call(null,inst_27336);
var inst_27318 = inst_27337;
var inst_27319 = inst_27336;
var inst_27320 = inst_27338;
var inst_27321 = (0);
var state_27366__$1 = (function (){var statearr_27385 = state_27366;
(statearr_27385[(8)] = inst_27320);

(statearr_27385[(9)] = inst_27318);

(statearr_27385[(11)] = inst_27319);

(statearr_27385[(12)] = inst_27321);

return statearr_27385;
})();
var statearr_27386_27419 = state_27366__$1;
(statearr_27386_27419[(2)] = null);

(statearr_27386_27419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (3))){
var inst_27364 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27366__$1,inst_27364);
} else {
if((state_val_27367 === (12))){
var inst_27352 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
var statearr_27387_27420 = state_27366__$1;
(statearr_27387_27420[(2)] = inst_27352);

(statearr_27387_27420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (2))){
var state_27366__$1 = state_27366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27366__$1,(4),in$);
} else {
if((state_val_27367 === (23))){
var inst_27360 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
var statearr_27388_27421 = state_27366__$1;
(statearr_27388_27421[(2)] = inst_27360);

(statearr_27388_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (19))){
var inst_27347 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
var statearr_27389_27422 = state_27366__$1;
(statearr_27389_27422[(2)] = inst_27347);

(statearr_27389_27422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (11))){
var inst_27318 = (state_27366[(9)]);
var inst_27332 = (state_27366[(7)]);
var inst_27332__$1 = cljs.core.seq.call(null,inst_27318);
var state_27366__$1 = (function (){var statearr_27390 = state_27366;
(statearr_27390[(7)] = inst_27332__$1);

return statearr_27390;
})();
if(inst_27332__$1){
var statearr_27391_27423 = state_27366__$1;
(statearr_27391_27423[(1)] = (14));

} else {
var statearr_27392_27424 = state_27366__$1;
(statearr_27392_27424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (9))){
var inst_27354 = (state_27366[(2)]);
var inst_27355 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27366__$1 = (function (){var statearr_27393 = state_27366;
(statearr_27393[(15)] = inst_27354);

return statearr_27393;
})();
if(cljs.core.truth_(inst_27355)){
var statearr_27394_27425 = state_27366__$1;
(statearr_27394_27425[(1)] = (21));

} else {
var statearr_27395_27426 = state_27366__$1;
(statearr_27395_27426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (5))){
var inst_27310 = cljs.core.async.close_BANG_.call(null,out);
var state_27366__$1 = state_27366;
var statearr_27396_27427 = state_27366__$1;
(statearr_27396_27427[(2)] = inst_27310);

(statearr_27396_27427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (14))){
var inst_27332 = (state_27366[(7)]);
var inst_27334 = cljs.core.chunked_seq_QMARK_.call(null,inst_27332);
var state_27366__$1 = state_27366;
if(inst_27334){
var statearr_27397_27428 = state_27366__$1;
(statearr_27397_27428[(1)] = (17));

} else {
var statearr_27398_27429 = state_27366__$1;
(statearr_27398_27429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (16))){
var inst_27350 = (state_27366[(2)]);
var state_27366__$1 = state_27366;
var statearr_27399_27430 = state_27366__$1;
(statearr_27399_27430[(2)] = inst_27350);

(statearr_27399_27430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27367 === (10))){
var inst_27319 = (state_27366[(11)]);
var inst_27321 = (state_27366[(12)]);
var inst_27326 = cljs.core._nth.call(null,inst_27319,inst_27321);
var state_27366__$1 = state_27366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27366__$1,(13),out,inst_27326);
} else {
if((state_val_27367 === (18))){
var inst_27332 = (state_27366[(7)]);
var inst_27341 = cljs.core.first.call(null,inst_27332);
var state_27366__$1 = state_27366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27366__$1,(20),out,inst_27341);
} else {
if((state_val_27367 === (8))){
var inst_27320 = (state_27366[(8)]);
var inst_27321 = (state_27366[(12)]);
var inst_27323 = (inst_27321 < inst_27320);
var inst_27324 = inst_27323;
var state_27366__$1 = state_27366;
if(cljs.core.truth_(inst_27324)){
var statearr_27400_27431 = state_27366__$1;
(statearr_27400_27431[(1)] = (10));

} else {
var statearr_27401_27432 = state_27366__$1;
(statearr_27401_27432[(1)] = (11));

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
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____0 = (function (){
var statearr_27405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27405[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__);

(statearr_27405[(1)] = (1));

return statearr_27405;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____1 = (function (state_27366){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27406){if((e27406 instanceof Object)){
var ex__24823__auto__ = e27406;
var statearr_27407_27433 = state_27366;
(statearr_27407_27433[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27434 = state_27366;
state_27366 = G__27434;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__ = function(state_27366){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____1.call(this,state_27366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24820__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_27408 = f__24932__auto__.call(null);
(statearr_27408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_27408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27435 = [];
var len__22712__auto___27438 = arguments.length;
var i__22713__auto___27439 = (0);
while(true){
if((i__22713__auto___27439 < len__22712__auto___27438)){
args27435.push((arguments[i__22713__auto___27439]));

var G__27440 = (i__22713__auto___27439 + (1));
i__22713__auto___27439 = G__27440;
continue;
} else {
}
break;
}

var G__27437 = args27435.length;
switch (G__27437) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27435.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27442 = [];
var len__22712__auto___27445 = arguments.length;
var i__22713__auto___27446 = (0);
while(true){
if((i__22713__auto___27446 < len__22712__auto___27445)){
args27442.push((arguments[i__22713__auto___27446]));

var G__27447 = (i__22713__auto___27446 + (1));
i__22713__auto___27446 = G__27447;
continue;
} else {
}
break;
}

var G__27444 = args27442.length;
switch (G__27444) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27442.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27449 = [];
var len__22712__auto___27500 = arguments.length;
var i__22713__auto___27501 = (0);
while(true){
if((i__22713__auto___27501 < len__22712__auto___27500)){
args27449.push((arguments[i__22713__auto___27501]));

var G__27502 = (i__22713__auto___27501 + (1));
i__22713__auto___27501 = G__27502;
continue;
} else {
}
break;
}

var G__27451 = args27449.length;
switch (G__27451) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27449.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27504,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27504,out){
return (function (state_27475){
var state_val_27476 = (state_27475[(1)]);
if((state_val_27476 === (7))){
var inst_27470 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27477_27505 = state_27475__$1;
(statearr_27477_27505[(2)] = inst_27470);

(statearr_27477_27505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (1))){
var inst_27452 = null;
var state_27475__$1 = (function (){var statearr_27478 = state_27475;
(statearr_27478[(7)] = inst_27452);

return statearr_27478;
})();
var statearr_27479_27506 = state_27475__$1;
(statearr_27479_27506[(2)] = null);

(statearr_27479_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (4))){
var inst_27455 = (state_27475[(8)]);
var inst_27455__$1 = (state_27475[(2)]);
var inst_27456 = (inst_27455__$1 == null);
var inst_27457 = cljs.core.not.call(null,inst_27456);
var state_27475__$1 = (function (){var statearr_27480 = state_27475;
(statearr_27480[(8)] = inst_27455__$1);

return statearr_27480;
})();
if(inst_27457){
var statearr_27481_27507 = state_27475__$1;
(statearr_27481_27507[(1)] = (5));

} else {
var statearr_27482_27508 = state_27475__$1;
(statearr_27482_27508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (6))){
var state_27475__$1 = state_27475;
var statearr_27483_27509 = state_27475__$1;
(statearr_27483_27509[(2)] = null);

(statearr_27483_27509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (3))){
var inst_27472 = (state_27475[(2)]);
var inst_27473 = cljs.core.async.close_BANG_.call(null,out);
var state_27475__$1 = (function (){var statearr_27484 = state_27475;
(statearr_27484[(9)] = inst_27472);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27475__$1,inst_27473);
} else {
if((state_val_27476 === (2))){
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27475__$1,(4),ch);
} else {
if((state_val_27476 === (11))){
var inst_27455 = (state_27475[(8)]);
var inst_27464 = (state_27475[(2)]);
var inst_27452 = inst_27455;
var state_27475__$1 = (function (){var statearr_27485 = state_27475;
(statearr_27485[(7)] = inst_27452);

(statearr_27485[(10)] = inst_27464);

return statearr_27485;
})();
var statearr_27486_27510 = state_27475__$1;
(statearr_27486_27510[(2)] = null);

(statearr_27486_27510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (9))){
var inst_27455 = (state_27475[(8)]);
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27475__$1,(11),out,inst_27455);
} else {
if((state_val_27476 === (5))){
var inst_27455 = (state_27475[(8)]);
var inst_27452 = (state_27475[(7)]);
var inst_27459 = cljs.core._EQ_.call(null,inst_27455,inst_27452);
var state_27475__$1 = state_27475;
if(inst_27459){
var statearr_27488_27511 = state_27475__$1;
(statearr_27488_27511[(1)] = (8));

} else {
var statearr_27489_27512 = state_27475__$1;
(statearr_27489_27512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (10))){
var inst_27467 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27490_27513 = state_27475__$1;
(statearr_27490_27513[(2)] = inst_27467);

(statearr_27490_27513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (8))){
var inst_27452 = (state_27475[(7)]);
var tmp27487 = inst_27452;
var inst_27452__$1 = tmp27487;
var state_27475__$1 = (function (){var statearr_27491 = state_27475;
(statearr_27491[(7)] = inst_27452__$1);

return statearr_27491;
})();
var statearr_27492_27514 = state_27475__$1;
(statearr_27492_27514[(2)] = null);

(statearr_27492_27514[(1)] = (2));


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
});})(c__24931__auto___27504,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27504,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27496[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27496[(1)] = (1));

return statearr_27496;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27475){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27497){if((e27497 instanceof Object)){
var ex__24823__auto__ = e27497;
var statearr_27498_27515 = state_27475;
(statearr_27498_27515[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27516 = state_27475;
state_27475 = G__27516;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27504,out))
})();
var state__24933__auto__ = (function (){var statearr_27499 = f__24932__auto__.call(null);
(statearr_27499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27504);

return statearr_27499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27504,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27517 = [];
var len__22712__auto___27587 = arguments.length;
var i__22713__auto___27588 = (0);
while(true){
if((i__22713__auto___27588 < len__22712__auto___27587)){
args27517.push((arguments[i__22713__auto___27588]));

var G__27589 = (i__22713__auto___27588 + (1));
i__22713__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var G__27519 = args27517.length;
switch (G__27519) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27517.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27591,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27591,out){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (7))){
var inst_27553 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27559_27592 = state_27557__$1;
(statearr_27559_27592[(2)] = inst_27553);

(statearr_27559_27592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (1))){
var inst_27520 = (new Array(n));
var inst_27521 = inst_27520;
var inst_27522 = (0);
var state_27557__$1 = (function (){var statearr_27560 = state_27557;
(statearr_27560[(7)] = inst_27522);

(statearr_27560[(8)] = inst_27521);

return statearr_27560;
})();
var statearr_27561_27593 = state_27557__$1;
(statearr_27561_27593[(2)] = null);

(statearr_27561_27593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (4))){
var inst_27525 = (state_27557[(9)]);
var inst_27525__$1 = (state_27557[(2)]);
var inst_27526 = (inst_27525__$1 == null);
var inst_27527 = cljs.core.not.call(null,inst_27526);
var state_27557__$1 = (function (){var statearr_27562 = state_27557;
(statearr_27562[(9)] = inst_27525__$1);

return statearr_27562;
})();
if(inst_27527){
var statearr_27563_27594 = state_27557__$1;
(statearr_27563_27594[(1)] = (5));

} else {
var statearr_27564_27595 = state_27557__$1;
(statearr_27564_27595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (15))){
var inst_27547 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27565_27596 = state_27557__$1;
(statearr_27565_27596[(2)] = inst_27547);

(statearr_27565_27596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (13))){
var state_27557__$1 = state_27557;
var statearr_27566_27597 = state_27557__$1;
(statearr_27566_27597[(2)] = null);

(statearr_27566_27597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (6))){
var inst_27522 = (state_27557[(7)]);
var inst_27543 = (inst_27522 > (0));
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27543)){
var statearr_27567_27598 = state_27557__$1;
(statearr_27567_27598[(1)] = (12));

} else {
var statearr_27568_27599 = state_27557__$1;
(statearr_27568_27599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (3))){
var inst_27555 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (12))){
var inst_27521 = (state_27557[(8)]);
var inst_27545 = cljs.core.vec.call(null,inst_27521);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(15),out,inst_27545);
} else {
if((state_val_27558 === (2))){
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(4),ch);
} else {
if((state_val_27558 === (11))){
var inst_27537 = (state_27557[(2)]);
var inst_27538 = (new Array(n));
var inst_27521 = inst_27538;
var inst_27522 = (0);
var state_27557__$1 = (function (){var statearr_27569 = state_27557;
(statearr_27569[(7)] = inst_27522);

(statearr_27569[(8)] = inst_27521);

(statearr_27569[(10)] = inst_27537);

return statearr_27569;
})();
var statearr_27570_27600 = state_27557__$1;
(statearr_27570_27600[(2)] = null);

(statearr_27570_27600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (9))){
var inst_27521 = (state_27557[(8)]);
var inst_27535 = cljs.core.vec.call(null,inst_27521);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(11),out,inst_27535);
} else {
if((state_val_27558 === (5))){
var inst_27522 = (state_27557[(7)]);
var inst_27521 = (state_27557[(8)]);
var inst_27530 = (state_27557[(11)]);
var inst_27525 = (state_27557[(9)]);
var inst_27529 = (inst_27521[inst_27522] = inst_27525);
var inst_27530__$1 = (inst_27522 + (1));
var inst_27531 = (inst_27530__$1 < n);
var state_27557__$1 = (function (){var statearr_27571 = state_27557;
(statearr_27571[(12)] = inst_27529);

(statearr_27571[(11)] = inst_27530__$1);

return statearr_27571;
})();
if(cljs.core.truth_(inst_27531)){
var statearr_27572_27601 = state_27557__$1;
(statearr_27572_27601[(1)] = (8));

} else {
var statearr_27573_27602 = state_27557__$1;
(statearr_27573_27602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (14))){
var inst_27550 = (state_27557[(2)]);
var inst_27551 = cljs.core.async.close_BANG_.call(null,out);
var state_27557__$1 = (function (){var statearr_27575 = state_27557;
(statearr_27575[(13)] = inst_27550);

return statearr_27575;
})();
var statearr_27576_27603 = state_27557__$1;
(statearr_27576_27603[(2)] = inst_27551);

(statearr_27576_27603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (10))){
var inst_27541 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27577_27604 = state_27557__$1;
(statearr_27577_27604[(2)] = inst_27541);

(statearr_27577_27604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (8))){
var inst_27521 = (state_27557[(8)]);
var inst_27530 = (state_27557[(11)]);
var tmp27574 = inst_27521;
var inst_27521__$1 = tmp27574;
var inst_27522 = inst_27530;
var state_27557__$1 = (function (){var statearr_27578 = state_27557;
(statearr_27578[(7)] = inst_27522);

(statearr_27578[(8)] = inst_27521__$1);

return statearr_27578;
})();
var statearr_27579_27605 = state_27557__$1;
(statearr_27579_27605[(2)] = null);

(statearr_27579_27605[(1)] = (2));


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
});})(c__24931__auto___27591,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27591,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27583[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27583[(1)] = (1));

return statearr_27583;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27557){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27584){if((e27584 instanceof Object)){
var ex__24823__auto__ = e27584;
var statearr_27585_27606 = state_27557;
(statearr_27585_27606[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27607 = state_27557;
state_27557 = G__27607;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27591,out))
})();
var state__24933__auto__ = (function (){var statearr_27586 = f__24932__auto__.call(null);
(statearr_27586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27591);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27591,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27608 = [];
var len__22712__auto___27682 = arguments.length;
var i__22713__auto___27683 = (0);
while(true){
if((i__22713__auto___27683 < len__22712__auto___27682)){
args27608.push((arguments[i__22713__auto___27683]));

var G__27684 = (i__22713__auto___27683 + (1));
i__22713__auto___27683 = G__27684;
continue;
} else {
}
break;
}

var G__27610 = args27608.length;
switch (G__27610) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27608.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24931__auto___27686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto___27686,out){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto___27686,out){
return (function (state_27652){
var state_val_27653 = (state_27652[(1)]);
if((state_val_27653 === (7))){
var inst_27648 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27654_27687 = state_27652__$1;
(statearr_27654_27687[(2)] = inst_27648);

(statearr_27654_27687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (1))){
var inst_27611 = [];
var inst_27612 = inst_27611;
var inst_27613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27652__$1 = (function (){var statearr_27655 = state_27652;
(statearr_27655[(7)] = inst_27612);

(statearr_27655[(8)] = inst_27613);

return statearr_27655;
})();
var statearr_27656_27688 = state_27652__$1;
(statearr_27656_27688[(2)] = null);

(statearr_27656_27688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (4))){
var inst_27616 = (state_27652[(9)]);
var inst_27616__$1 = (state_27652[(2)]);
var inst_27617 = (inst_27616__$1 == null);
var inst_27618 = cljs.core.not.call(null,inst_27617);
var state_27652__$1 = (function (){var statearr_27657 = state_27652;
(statearr_27657[(9)] = inst_27616__$1);

return statearr_27657;
})();
if(inst_27618){
var statearr_27658_27689 = state_27652__$1;
(statearr_27658_27689[(1)] = (5));

} else {
var statearr_27659_27690 = state_27652__$1;
(statearr_27659_27690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (15))){
var inst_27642 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27660_27691 = state_27652__$1;
(statearr_27660_27691[(2)] = inst_27642);

(statearr_27660_27691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (13))){
var state_27652__$1 = state_27652;
var statearr_27661_27692 = state_27652__$1;
(statearr_27661_27692[(2)] = null);

(statearr_27661_27692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (6))){
var inst_27612 = (state_27652[(7)]);
var inst_27637 = inst_27612.length;
var inst_27638 = (inst_27637 > (0));
var state_27652__$1 = state_27652;
if(cljs.core.truth_(inst_27638)){
var statearr_27662_27693 = state_27652__$1;
(statearr_27662_27693[(1)] = (12));

} else {
var statearr_27663_27694 = state_27652__$1;
(statearr_27663_27694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (3))){
var inst_27650 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27652__$1,inst_27650);
} else {
if((state_val_27653 === (12))){
var inst_27612 = (state_27652[(7)]);
var inst_27640 = cljs.core.vec.call(null,inst_27612);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27652__$1,(15),out,inst_27640);
} else {
if((state_val_27653 === (2))){
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27652__$1,(4),ch);
} else {
if((state_val_27653 === (11))){
var inst_27620 = (state_27652[(10)]);
var inst_27616 = (state_27652[(9)]);
var inst_27630 = (state_27652[(2)]);
var inst_27631 = [];
var inst_27632 = inst_27631.push(inst_27616);
var inst_27612 = inst_27631;
var inst_27613 = inst_27620;
var state_27652__$1 = (function (){var statearr_27664 = state_27652;
(statearr_27664[(7)] = inst_27612);

(statearr_27664[(11)] = inst_27632);

(statearr_27664[(8)] = inst_27613);

(statearr_27664[(12)] = inst_27630);

return statearr_27664;
})();
var statearr_27665_27695 = state_27652__$1;
(statearr_27665_27695[(2)] = null);

(statearr_27665_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (9))){
var inst_27612 = (state_27652[(7)]);
var inst_27628 = cljs.core.vec.call(null,inst_27612);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27652__$1,(11),out,inst_27628);
} else {
if((state_val_27653 === (5))){
var inst_27613 = (state_27652[(8)]);
var inst_27620 = (state_27652[(10)]);
var inst_27616 = (state_27652[(9)]);
var inst_27620__$1 = f.call(null,inst_27616);
var inst_27621 = cljs.core._EQ_.call(null,inst_27620__$1,inst_27613);
var inst_27622 = cljs.core.keyword_identical_QMARK_.call(null,inst_27613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27623 = (inst_27621) || (inst_27622);
var state_27652__$1 = (function (){var statearr_27666 = state_27652;
(statearr_27666[(10)] = inst_27620__$1);

return statearr_27666;
})();
if(cljs.core.truth_(inst_27623)){
var statearr_27667_27696 = state_27652__$1;
(statearr_27667_27696[(1)] = (8));

} else {
var statearr_27668_27697 = state_27652__$1;
(statearr_27668_27697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (14))){
var inst_27645 = (state_27652[(2)]);
var inst_27646 = cljs.core.async.close_BANG_.call(null,out);
var state_27652__$1 = (function (){var statearr_27670 = state_27652;
(statearr_27670[(13)] = inst_27645);

return statearr_27670;
})();
var statearr_27671_27698 = state_27652__$1;
(statearr_27671_27698[(2)] = inst_27646);

(statearr_27671_27698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (10))){
var inst_27635 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27672_27699 = state_27652__$1;
(statearr_27672_27699[(2)] = inst_27635);

(statearr_27672_27699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (8))){
var inst_27612 = (state_27652[(7)]);
var inst_27620 = (state_27652[(10)]);
var inst_27616 = (state_27652[(9)]);
var inst_27625 = inst_27612.push(inst_27616);
var tmp27669 = inst_27612;
var inst_27612__$1 = tmp27669;
var inst_27613 = inst_27620;
var state_27652__$1 = (function (){var statearr_27673 = state_27652;
(statearr_27673[(7)] = inst_27612__$1);

(statearr_27673[(8)] = inst_27613);

(statearr_27673[(14)] = inst_27625);

return statearr_27673;
})();
var statearr_27674_27700 = state_27652__$1;
(statearr_27674_27700[(2)] = null);

(statearr_27674_27700[(1)] = (2));


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
});})(c__24931__auto___27686,out))
;
return ((function (switch__24819__auto__,c__24931__auto___27686,out){
return (function() {
var cljs$core$async$state_machine__24820__auto__ = null;
var cljs$core$async$state_machine__24820__auto____0 = (function (){
var statearr_27678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27678[(0)] = cljs$core$async$state_machine__24820__auto__);

(statearr_27678[(1)] = (1));

return statearr_27678;
});
var cljs$core$async$state_machine__24820__auto____1 = (function (state_27652){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_27652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e27679){if((e27679 instanceof Object)){
var ex__24823__auto__ = e27679;
var statearr_27680_27701 = state_27652;
(statearr_27680_27701[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27702 = state_27652;
state_27652 = G__27702;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
cljs$core$async$state_machine__24820__auto__ = function(state_27652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24820__auto____1.call(this,state_27652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24820__auto____0;
cljs$core$async$state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24820__auto____1;
return cljs$core$async$state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto___27686,out))
})();
var state__24933__auto__ = (function (){var statearr_27681 = f__24932__auto__.call(null);
(statearr_27681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto___27686);

return statearr_27681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto___27686,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1467991928801