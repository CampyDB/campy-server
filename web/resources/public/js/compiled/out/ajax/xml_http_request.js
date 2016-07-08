// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23004,handler){
var map__23005 = p__23004;
var map__23005__$1 = ((((!((map__23005 == null)))?((((map__23005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23005):map__23005);
var uri = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23005,map__23005__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23003_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23003_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23005,map__23005__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___23013 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___23013)){
var response_type_23014 = temp__4657__auto___23013;
this$__$1.responseType = cljs.core.name.call(null,response_type_23014);
} else {
}

var seq__23007_23015 = cljs.core.seq.call(null,headers);
var chunk__23008_23016 = null;
var count__23009_23017 = (0);
var i__23010_23018 = (0);
while(true){
if((i__23010_23018 < count__23009_23017)){
var vec__23011_23019 = cljs.core._nth.call(null,chunk__23008_23016,i__23010_23018);
var k_23020 = cljs.core.nth.call(null,vec__23011_23019,(0),null);
var v_23021 = cljs.core.nth.call(null,vec__23011_23019,(1),null);
this$__$1.setRequestHeader(k_23020,v_23021);

var G__23022 = seq__23007_23015;
var G__23023 = chunk__23008_23016;
var G__23024 = count__23009_23017;
var G__23025 = (i__23010_23018 + (1));
seq__23007_23015 = G__23022;
chunk__23008_23016 = G__23023;
count__23009_23017 = G__23024;
i__23010_23018 = G__23025;
continue;
} else {
var temp__4657__auto___23026 = cljs.core.seq.call(null,seq__23007_23015);
if(temp__4657__auto___23026){
var seq__23007_23027__$1 = temp__4657__auto___23026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23007_23027__$1)){
var c__22453__auto___23028 = cljs.core.chunk_first.call(null,seq__23007_23027__$1);
var G__23029 = cljs.core.chunk_rest.call(null,seq__23007_23027__$1);
var G__23030 = c__22453__auto___23028;
var G__23031 = cljs.core.count.call(null,c__22453__auto___23028);
var G__23032 = (0);
seq__23007_23015 = G__23029;
chunk__23008_23016 = G__23030;
count__23009_23017 = G__23031;
i__23010_23018 = G__23032;
continue;
} else {
var vec__23012_23033 = cljs.core.first.call(null,seq__23007_23027__$1);
var k_23034 = cljs.core.nth.call(null,vec__23012_23033,(0),null);
var v_23035 = cljs.core.nth.call(null,vec__23012_23033,(1),null);
this$__$1.setRequestHeader(k_23034,v_23035);

var G__23036 = cljs.core.next.call(null,seq__23007_23027__$1);
var G__23037 = null;
var G__23038 = (0);
var G__23039 = (0);
seq__23007_23015 = G__23036;
chunk__23008_23016 = G__23037;
count__23009_23017 = G__23038;
i__23010_23018 = G__23039;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21642__auto__ = body;
if(cljs.core.truth_(or__21642__auto__)){
return or__21642__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1467991924906