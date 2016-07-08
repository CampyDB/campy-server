// Compiled by ClojureScript 1.8.51 {}
goog.provide('pages.about');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('externs.slickgrid');
goog.require('externs.morris');
goog.require('data.data');
pages.about.web_browser_warning = (function pages$about$web_browser_warning(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-warning","div.alert.alert-warning",-2055114720),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-exclamation-triangle.fa-2x.pull-left","i.fa.fa-exclamation-triangle.fa-2x.pull-left",369862053)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the best experience using CGFDb, a recent version of "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.google.com/chrome/browser/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chrome.fa-lg","i.fa.fa-chrome.fa-lg",1834607948)], null)," Google Chrome"], null)," or"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.mozilla.org/firefox",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-firefox.fa-lg","i.fa.fa-firefox.fa-lg",-1406714467)], null)," Firefox"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," is recommended."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa-stack","span.fa-stack",1430647775),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-internet-explorer.text-info.fa-stack-2x","i.fa.fa-internet-explorer.text-info.fa-stack-2x",511244180)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-ban.text-danger.fa-stack-2x","i.fa.fa-ban.text-danger.fa-stack-2x",-627094284)], null)], null)," Internet Explorer is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"unsupported"], null)], null)], null);
});
if(typeof pages.about.start_date !== 'undefined'){
} else {
pages.about.start_date = reagent.core.atom.call(null,"");
}
if(typeof pages.about.end_date !== 'undefined'){
} else {
pages.about.end_date = reagent.core.atom.call(null,"");
}
pages.about.get_temporal = (function pages$about$get_temporal(){
var a_chan = cljs.core.async.chan.call(null);
var uri = "http://localhost:5000/api/temporal/filter";
var args = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-date","start-date",295168731),cljs.core.deref.call(null,pages.about.start_date),new cljs.core.Keyword(null,"end-date","end-date",-208259642),cljs.core.deref.call(null,pages.about.end_date)], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (a_chan,uri){
return (function (p1__31987_SHARP_){
return cljs.core.async.put_BANG_.call(null,a_chan,p1__31987_SHARP_);
});})(a_chan,uri))
], null);
ajax.core.POST.call(null,uri,args);

return a_chan;
});
pages.about.get_count = (function pages$about$get_count(){
var a_chan = cljs.core.async.chan.call(null);
var uri = "http://localhost:5000/api/temporal/count";
var args = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-date","start-date",295168731),cljs.core.deref.call(null,pages.about.start_date),new cljs.core.Keyword(null,"end-date","end-date",-208259642),cljs.core.deref.call(null,pages.about.end_date)], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (a_chan,uri){
return (function (p1__31988_SHARP_){
return cljs.core.async.put_BANG_.call(null,a_chan,p1__31988_SHARP_);
});})(a_chan,uri))
], null);
ajax.core.POST.call(null,uri,args);

return a_chan;
});
pages.about.input = (function pages$about$input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31989_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__31989_SHARP_.target.value);
})], null)], null);
});
if(typeof pages.about.search_target !== 'undefined'){
} else {
pages.about.search_target = reagent.core.atom.call(null,"");
}
if(typeof pages.about.temporal_data !== 'undefined'){
} else {
pages.about.temporal_data = reagent.core.atom.call(null,"");
}
if(typeof pages.about.count_data !== 'undefined'){
} else {
pages.about.count_data = reagent.core.atom.call(null,"");
}
pages.about.options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enableCellNavigation","enableCellNavigation",2027620998),true,new cljs.core.Keyword(null,"enableColumnReorder","enableColumnReorder",-48450481),false], null);
pages.about.columns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"isolate",new cljs.core.Keyword(null,"name","name",1843675177),"Isolate",new cljs.core.Keyword(null,"field","field",-1302436500),"name",new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"date",new cljs.core.Keyword(null,"name","name",1843675177),"Date",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"month-bool",new cljs.core.Keyword(null,"name","name",1843675177),"Month Bool",new cljs.core.Keyword(null,"field","field",-1302436500),"month-bool",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"year-bool",new cljs.core.Keyword(null,"name","name",1843675177),"Year Bool",new cljs.core.Keyword(null,"field","field",-1302436500),"year-bool",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null);
pages.about.data = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"test1",new cljs.core.Keyword(null,"duration","duration",1444101068),"duration1",new cljs.core.Keyword(null,"percentComplete","percentComplete",-265705740),(12),new cljs.core.Keyword(null,"start","start",-355208981),"01/01/2009",new cljs.core.Keyword(null,"finish","finish",-586688046),"01/02/2009",new cljs.core.Keyword(null,"effortDriven","effortDriven",-1957948747),false], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"test2",new cljs.core.Keyword(null,"duration","duration",1444101068),"duration2",new cljs.core.Keyword(null,"percentComplete","percentComplete",-265705740),(13),new cljs.core.Keyword(null,"start","start",-355208981),"02/01/2009",new cljs.core.Keyword(null,"finish","finish",-586688046),"02/02/2009",new cljs.core.Keyword(null,"effortDriven","effortDriven",-1957948747),false], null)], null));
pages.about.data2 = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"test13",new cljs.core.Keyword(null,"duration","duration",1444101068),"duration1",new cljs.core.Keyword(null,"percentComplete","percentComplete",-265705740),(12),new cljs.core.Keyword(null,"start","start",-355208981),"01/01/2009",new cljs.core.Keyword(null,"finish","finish",-586688046),"01/02/2009",new cljs.core.Keyword(null,"effortDriven","effortDriven",-1957948747),false], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"test2",new cljs.core.Keyword(null,"duration","duration",1444101068),"duration2",new cljs.core.Keyword(null,"percentComplete","percentComplete",-265705740),(13),new cljs.core.Keyword(null,"start","start",-355208981),"02/01/2009",new cljs.core.Keyword(null,"finish","finish",-586688046),"02/02/2009",new cljs.core.Keyword(null,"effortDriven","effortDriven",-1957948747),false], null)], null));
if(typeof pages.about.table_data !== 'undefined'){
} else {
pages.about.table_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof pages.about.prechart_data !== 'undefined'){
} else {
pages.about.prechart_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof pages.about.chart_data !== 'undefined'){
} else {
pages.about.chart_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof pages.about.predonut_data !== 'undefined'){
} else {
pages.about.predonut_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof pages.about.donut_data !== 'undefined'){
} else {
pages.about.donut_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
pages.about.search_button = (function pages$about$search_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Search!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__24931__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24931__auto__){
return (function (){
var f__24932__auto__ = (function (){var switch__24819__auto__ = ((function (c__24931__auto__){
return (function (state_32546){
var state_val_32547 = (state_32546[(1)]);
if((state_val_32547 === (7))){
var inst_32363 = (state_32546[(7)]);
var inst_32326 = (state_32546[(8)]);
var inst_32363__$1 = cljs.core.seq.call(null,inst_32326);
var state_32546__$1 = (function (){var statearr_32548 = state_32546;
(statearr_32548[(7)] = inst_32363__$1);

return statearr_32548;
})();
if(inst_32363__$1){
var statearr_32549_32624 = state_32546__$1;
(statearr_32549_32624[(1)] = (9));

} else {
var statearr_32550_32625 = state_32546__$1;
(statearr_32550_32625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (20))){
var inst_32441 = (state_32546[(9)]);
var inst_32443 = cljs.core.chunked_seq_QMARK_.call(null,inst_32441);
var state_32546__$1 = state_32546;
if(inst_32443){
var statearr_32551_32626 = state_32546__$1;
(statearr_32551_32626[(1)] = (23));

} else {
var statearr_32552_32627 = state_32546__$1;
(statearr_32552_32627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (27))){
var inst_32540 = (state_32546[(2)]);
var inst_32541 = cljs.core.deref.call(null,pages.about.predonut_data);
var inst_32542 = cljs.core.reset_BANG_.call(null,pages.about.donut_data,inst_32541);
var inst_32543 = cljs.core.deref.call(null,pages.about.prechart_data);
var inst_32544 = cljs.core.reset_BANG_.call(null,data.data.shared_data,inst_32543);
var state_32546__$1 = (function (){var statearr_32553 = state_32546;
(statearr_32553[(10)] = inst_32540);

(statearr_32553[(11)] = inst_32542);

return statearr_32553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32546__$1,inst_32544);
} else {
if((state_val_32547 === (1))){
var inst_32307 = cljs.core.PersistentVector.EMPTY;
var inst_32308 = cljs.core.reset_BANG_.call(null,pages.about.prechart_data,inst_32307);
var inst_32309 = cljs.core.PersistentVector.EMPTY;
var inst_32310 = cljs.core.reset_BANG_.call(null,pages.about.predonut_data,inst_32309);
var inst_32311 = pages.about.get_count.call(null);
var state_32546__$1 = (function (){var statearr_32554 = state_32546;
(statearr_32554[(12)] = inst_32308);

(statearr_32554[(13)] = inst_32310);

return statearr_32554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32546__$1,(2),inst_32311);
} else {
if((state_val_32547 === (24))){
var inst_32441 = (state_32546[(9)]);
var inst_32450 = cljs.core.first.call(null,inst_32441);
var inst_32451 = cljs.core.deref.call(null,pages.about.predonut_data);
var inst_32452 = [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32453 = cljs.core.name.call(null,inst_32450);
var inst_32454 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32455 = cljs.core.get.call(null,inst_32454,inst_32450);
var inst_32456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32457 = [new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32458 = (new cljs.core.PersistentVector(null,1,(5),inst_32456,inst_32457,null));
var inst_32459 = cljs.core.get_in.call(null,inst_32455,inst_32458);
var inst_32460 = [inst_32453,inst_32459];
var inst_32461 = cljs.core.PersistentHashMap.fromArrays(inst_32452,inst_32460);
var inst_32462 = cljs.core.conj.call(null,inst_32451,inst_32461);
var inst_32463 = cljs.core.reset_BANG_.call(null,pages.about.predonut_data,inst_32462);
var inst_32464 = cljs.core.next.call(null,inst_32441);
var inst_32416 = inst_32464;
var inst_32417 = null;
var inst_32418 = (0);
var inst_32419 = (0);
var state_32546__$1 = (function (){var statearr_32555 = state_32546;
(statearr_32555[(14)] = inst_32417);

(statearr_32555[(15)] = inst_32416);

(statearr_32555[(16)] = inst_32418);

(statearr_32555[(17)] = inst_32419);

(statearr_32555[(18)] = inst_32463);

return statearr_32555;
})();
var statearr_32556_32628 = state_32546__$1;
(statearr_32556_32628[(2)] = null);

(statearr_32556_32628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (4))){
var inst_32328 = (state_32546[(19)]);
var inst_32329 = (state_32546[(20)]);
var inst_32331 = (inst_32329 < inst_32328);
var inst_32332 = inst_32331;
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32332)){
var statearr_32557_32629 = state_32546__$1;
(statearr_32557_32629[(1)] = (6));

} else {
var statearr_32558_32630 = state_32546__$1;
(statearr_32558_32630[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (15))){
var inst_32418 = (state_32546[(16)]);
var inst_32419 = (state_32546[(17)]);
var inst_32421 = (inst_32419 < inst_32418);
var inst_32422 = inst_32421;
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32422)){
var statearr_32559_32631 = state_32546__$1;
(statearr_32559_32631[(1)] = (17));

} else {
var statearr_32560_32632 = state_32546__$1;
(statearr_32560_32632[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (21))){
var state_32546__$1 = state_32546;
var statearr_32561_32633 = state_32546__$1;
(statearr_32561_32633[(2)] = null);

(statearr_32561_32633[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (31))){
var inst_32507 = (state_32546[(21)]);
var inst_32509 = cljs.core.chunked_seq_QMARK_.call(null,inst_32507);
var state_32546__$1 = state_32546;
if(inst_32509){
var statearr_32562_32634 = state_32546__$1;
(statearr_32562_32634[(1)] = (34));

} else {
var statearr_32563_32635 = state_32546__$1;
(statearr_32563_32635[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (32))){
var state_32546__$1 = state_32546;
var statearr_32564_32636 = state_32546__$1;
(statearr_32564_32636[(2)] = null);

(statearr_32564_32636[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (33))){
var inst_32536 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32565_32637 = state_32546__$1;
(statearr_32565_32637[(2)] = inst_32536);

(statearr_32565_32637[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (13))){
var inst_32363 = (state_32546[(7)]);
var inst_32372 = cljs.core.first.call(null,inst_32363);
var inst_32373 = cljs.core.deref.call(null,pages.about.table_data);
var inst_32374 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"month-bool","month-bool",-923368302),new cljs.core.Keyword(null,"year_bool","year_bool",-1501433745)];
var inst_32375 = cljs.core.name.call(null,inst_32372);
var inst_32376 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32377 = cljs.core.get.call(null,inst_32376,inst_32372);
var inst_32378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32379 = [new cljs.core.Keyword(null,"date","date",-1463434462)];
var inst_32380 = (new cljs.core.PersistentVector(null,1,(5),inst_32378,inst_32379,null));
var inst_32381 = cljs.core.get_in.call(null,inst_32377,inst_32380);
var inst_32382 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32383 = cljs.core.get.call(null,inst_32382,inst_32372);
var inst_32384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32385 = [new cljs.core.Keyword(null,"month_bool","month_bool",-1481264053)];
var inst_32386 = (new cljs.core.PersistentVector(null,1,(5),inst_32384,inst_32385,null));
var inst_32387 = cljs.core.get_in.call(null,inst_32383,inst_32386);
var inst_32388 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32389 = cljs.core.get.call(null,inst_32388,inst_32372);
var inst_32390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32391 = [new cljs.core.Keyword(null,"year_bool","year_bool",-1501433745)];
var inst_32392 = (new cljs.core.PersistentVector(null,1,(5),inst_32390,inst_32391,null));
var inst_32393 = cljs.core.get_in.call(null,inst_32389,inst_32392);
var inst_32394 = [inst_32375,inst_32381,inst_32387,inst_32393];
var inst_32395 = cljs.core.PersistentHashMap.fromArrays(inst_32374,inst_32394);
var inst_32396 = cljs.core.conj.call(null,inst_32373,inst_32395);
var inst_32397 = cljs.core.reset_BANG_.call(null,pages.about.table_data,inst_32396);
var inst_32398 = cljs.core.next.call(null,inst_32363);
var inst_32326 = inst_32398;
var inst_32327 = null;
var inst_32328 = (0);
var inst_32329 = (0);
var state_32546__$1 = (function (){var statearr_32566 = state_32546;
(statearr_32566[(22)] = inst_32397);

(statearr_32566[(23)] = inst_32327);

(statearr_32566[(19)] = inst_32328);

(statearr_32566[(8)] = inst_32326);

(statearr_32566[(20)] = inst_32329);

return statearr_32566;
})();
var statearr_32567_32638 = state_32546__$1;
(statearr_32567_32638[(2)] = null);

(statearr_32567_32638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (22))){
var inst_32470 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32568_32639 = state_32546__$1;
(statearr_32568_32639[(2)] = inst_32470);

(statearr_32568_32639[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (36))){
var inst_32533 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32572_32640 = state_32546__$1;
(statearr_32572_32640[(2)] = inst_32533);

(statearr_32572_32640[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (29))){
var inst_32482 = (state_32546[(24)]);
var inst_32507 = (state_32546[(21)]);
var inst_32507__$1 = cljs.core.seq.call(null,inst_32482);
var state_32546__$1 = (function (){var statearr_32576 = state_32546;
(statearr_32576[(21)] = inst_32507__$1);

return statearr_32576;
})();
if(inst_32507__$1){
var statearr_32577_32641 = state_32546__$1;
(statearr_32577_32641[(1)] = (31));

} else {
var statearr_32578_32642 = state_32546__$1;
(statearr_32578_32642[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (6))){
var inst_32327 = (state_32546[(23)]);
var inst_32328 = (state_32546[(19)]);
var inst_32326 = (state_32546[(8)]);
var inst_32329 = (state_32546[(20)]);
var inst_32334 = cljs.core._nth.call(null,inst_32327,inst_32329);
var inst_32335 = cljs.core.deref.call(null,pages.about.table_data);
var inst_32336 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"month-bool","month-bool",-923368302),new cljs.core.Keyword(null,"year_bool","year_bool",-1501433745)];
var inst_32337 = cljs.core.name.call(null,inst_32334);
var inst_32338 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32339 = cljs.core.get.call(null,inst_32338,inst_32334);
var inst_32340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32341 = [new cljs.core.Keyword(null,"date","date",-1463434462)];
var inst_32342 = (new cljs.core.PersistentVector(null,1,(5),inst_32340,inst_32341,null));
var inst_32343 = cljs.core.get_in.call(null,inst_32339,inst_32342);
var inst_32344 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32345 = cljs.core.get.call(null,inst_32344,inst_32334);
var inst_32346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32347 = [new cljs.core.Keyword(null,"month_bool","month_bool",-1481264053)];
var inst_32348 = (new cljs.core.PersistentVector(null,1,(5),inst_32346,inst_32347,null));
var inst_32349 = cljs.core.get_in.call(null,inst_32345,inst_32348);
var inst_32350 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32351 = cljs.core.get.call(null,inst_32350,inst_32334);
var inst_32352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32353 = [new cljs.core.Keyword(null,"year_bool","year_bool",-1501433745)];
var inst_32354 = (new cljs.core.PersistentVector(null,1,(5),inst_32352,inst_32353,null));
var inst_32355 = cljs.core.get_in.call(null,inst_32351,inst_32354);
var inst_32356 = [inst_32337,inst_32343,inst_32349,inst_32355];
var inst_32357 = cljs.core.PersistentHashMap.fromArrays(inst_32336,inst_32356);
var inst_32358 = cljs.core.conj.call(null,inst_32335,inst_32357);
var inst_32359 = cljs.core.reset_BANG_.call(null,pages.about.table_data,inst_32358);
var inst_32360 = (inst_32329 + (1));
var tmp32569 = inst_32327;
var tmp32570 = inst_32328;
var tmp32571 = inst_32326;
var inst_32326__$1 = tmp32571;
var inst_32327__$1 = tmp32569;
var inst_32328__$1 = tmp32570;
var inst_32329__$1 = inst_32360;
var state_32546__$1 = (function (){var statearr_32579 = state_32546;
(statearr_32579[(23)] = inst_32327__$1);

(statearr_32579[(19)] = inst_32328__$1);

(statearr_32579[(8)] = inst_32326__$1);

(statearr_32579[(20)] = inst_32329__$1);

(statearr_32579[(25)] = inst_32359);

return statearr_32579;
})();
var statearr_32580_32643 = state_32546__$1;
(statearr_32580_32643[(2)] = null);

(statearr_32580_32643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (28))){
var inst_32485 = (state_32546[(26)]);
var inst_32483 = (state_32546[(27)]);
var inst_32482 = (state_32546[(24)]);
var inst_32484 = (state_32546[(28)]);
var inst_32490 = cljs.core._nth.call(null,inst_32483,inst_32485);
var inst_32491 = cljs.core.deref.call(null,pages.about.prechart_data);
var inst_32492 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32493 = cljs.core.name.call(null,inst_32490);
var inst_32494 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32495 = cljs.core.get.call(null,inst_32494,inst_32490);
var inst_32496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32497 = [new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32498 = (new cljs.core.PersistentVector(null,1,(5),inst_32496,inst_32497,null));
var inst_32499 = cljs.core.get_in.call(null,inst_32495,inst_32498);
var inst_32500 = [inst_32493,inst_32499];
var inst_32501 = cljs.core.PersistentHashMap.fromArrays(inst_32492,inst_32500);
var inst_32502 = cljs.core.conj.call(null,inst_32491,inst_32501);
var inst_32503 = cljs.core.reset_BANG_.call(null,pages.about.prechart_data,inst_32502);
var inst_32504 = (inst_32485 + (1));
var tmp32573 = inst_32483;
var tmp32574 = inst_32482;
var tmp32575 = inst_32484;
var inst_32482__$1 = tmp32574;
var inst_32483__$1 = tmp32573;
var inst_32484__$1 = tmp32575;
var inst_32485__$1 = inst_32504;
var state_32546__$1 = (function (){var statearr_32581 = state_32546;
(statearr_32581[(26)] = inst_32485__$1);

(statearr_32581[(27)] = inst_32483__$1);

(statearr_32581[(29)] = inst_32503);

(statearr_32581[(24)] = inst_32482__$1);

(statearr_32581[(28)] = inst_32484__$1);

return statearr_32581;
})();
var statearr_32582_32644 = state_32546__$1;
(statearr_32582_32644[(2)] = null);

(statearr_32582_32644[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (25))){
var inst_32467 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32586_32645 = state_32546__$1;
(statearr_32586_32645[(2)] = inst_32467);

(statearr_32586_32645[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (34))){
var inst_32507 = (state_32546[(21)]);
var inst_32511 = cljs.core.chunk_first.call(null,inst_32507);
var inst_32512 = cljs.core.chunk_rest.call(null,inst_32507);
var inst_32513 = cljs.core.count.call(null,inst_32511);
var inst_32482 = inst_32512;
var inst_32483 = inst_32511;
var inst_32484 = inst_32513;
var inst_32485 = (0);
var state_32546__$1 = (function (){var statearr_32587 = state_32546;
(statearr_32587[(26)] = inst_32485);

(statearr_32587[(27)] = inst_32483);

(statearr_32587[(24)] = inst_32482);

(statearr_32587[(28)] = inst_32484);

return statearr_32587;
})();
var statearr_32588_32646 = state_32546__$1;
(statearr_32588_32646[(2)] = null);

(statearr_32588_32646[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (17))){
var inst_32417 = (state_32546[(14)]);
var inst_32416 = (state_32546[(15)]);
var inst_32418 = (state_32546[(16)]);
var inst_32419 = (state_32546[(17)]);
var inst_32424 = cljs.core._nth.call(null,inst_32417,inst_32419);
var inst_32425 = cljs.core.deref.call(null,pages.about.predonut_data);
var inst_32426 = [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32427 = cljs.core.name.call(null,inst_32424);
var inst_32428 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32429 = cljs.core.get.call(null,inst_32428,inst_32424);
var inst_32430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32431 = [new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32432 = (new cljs.core.PersistentVector(null,1,(5),inst_32430,inst_32431,null));
var inst_32433 = cljs.core.get_in.call(null,inst_32429,inst_32432);
var inst_32434 = [inst_32427,inst_32433];
var inst_32435 = cljs.core.PersistentHashMap.fromArrays(inst_32426,inst_32434);
var inst_32436 = cljs.core.conj.call(null,inst_32425,inst_32435);
var inst_32437 = cljs.core.reset_BANG_.call(null,pages.about.predonut_data,inst_32436);
var inst_32438 = (inst_32419 + (1));
var tmp32583 = inst_32417;
var tmp32584 = inst_32416;
var tmp32585 = inst_32418;
var inst_32416__$1 = tmp32584;
var inst_32417__$1 = tmp32583;
var inst_32418__$1 = tmp32585;
var inst_32419__$1 = inst_32438;
var state_32546__$1 = (function (){var statearr_32589 = state_32546;
(statearr_32589[(14)] = inst_32417__$1);

(statearr_32589[(15)] = inst_32416__$1);

(statearr_32589[(30)] = inst_32437);

(statearr_32589[(16)] = inst_32418__$1);

(statearr_32589[(17)] = inst_32419__$1);

return statearr_32589;
})();
var statearr_32590_32647 = state_32546__$1;
(statearr_32590_32647[(2)] = null);

(statearr_32590_32647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (3))){
var inst_32317 = (state_32546[(2)]);
var inst_32318 = cljs.core.reset_BANG_.call(null,pages.about.temporal_data,inst_32317);
var inst_32323 = cljs.core.deref.call(null,pages.about.temporal_data);
var inst_32324 = cljs.core.keys.call(null,inst_32323);
var inst_32325 = cljs.core.seq.call(null,inst_32324);
var inst_32326 = inst_32325;
var inst_32327 = null;
var inst_32328 = (0);
var inst_32329 = (0);
var state_32546__$1 = (function (){var statearr_32591 = state_32546;
(statearr_32591[(23)] = inst_32327);

(statearr_32591[(19)] = inst_32328);

(statearr_32591[(8)] = inst_32326);

(statearr_32591[(31)] = inst_32318);

(statearr_32591[(20)] = inst_32329);

return statearr_32591;
})();
var statearr_32592_32648 = state_32546__$1;
(statearr_32592_32648[(2)] = null);

(statearr_32592_32648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (12))){
var inst_32363 = (state_32546[(7)]);
var inst_32367 = cljs.core.chunk_first.call(null,inst_32363);
var inst_32368 = cljs.core.chunk_rest.call(null,inst_32363);
var inst_32369 = cljs.core.count.call(null,inst_32367);
var inst_32326 = inst_32368;
var inst_32327 = inst_32367;
var inst_32328 = inst_32369;
var inst_32329 = (0);
var state_32546__$1 = (function (){var statearr_32593 = state_32546;
(statearr_32593[(23)] = inst_32327);

(statearr_32593[(19)] = inst_32328);

(statearr_32593[(8)] = inst_32326);

(statearr_32593[(20)] = inst_32329);

return statearr_32593;
})();
var statearr_32594_32649 = state_32546__$1;
(statearr_32594_32649[(2)] = null);

(statearr_32594_32649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (2))){
var inst_32313 = (state_32546[(2)]);
var inst_32314 = cljs.core.reset_BANG_.call(null,pages.about.count_data,inst_32313);
var inst_32315 = pages.about.get_temporal.call(null);
var state_32546__$1 = (function (){var statearr_32595 = state_32546;
(statearr_32595[(32)] = inst_32314);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32546__$1,(3),inst_32315);
} else {
if((state_val_32547 === (23))){
var inst_32441 = (state_32546[(9)]);
var inst_32445 = cljs.core.chunk_first.call(null,inst_32441);
var inst_32446 = cljs.core.chunk_rest.call(null,inst_32441);
var inst_32447 = cljs.core.count.call(null,inst_32445);
var inst_32416 = inst_32446;
var inst_32417 = inst_32445;
var inst_32418 = inst_32447;
var inst_32419 = (0);
var state_32546__$1 = (function (){var statearr_32596 = state_32546;
(statearr_32596[(14)] = inst_32417);

(statearr_32596[(15)] = inst_32416);

(statearr_32596[(16)] = inst_32418);

(statearr_32596[(17)] = inst_32419);

return statearr_32596;
})();
var statearr_32597_32650 = state_32546__$1;
(statearr_32597_32650[(2)] = null);

(statearr_32597_32650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (35))){
var inst_32507 = (state_32546[(21)]);
var inst_32516 = cljs.core.first.call(null,inst_32507);
var inst_32517 = cljs.core.deref.call(null,pages.about.prechart_data);
var inst_32518 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32519 = cljs.core.name.call(null,inst_32516);
var inst_32520 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32521 = cljs.core.get.call(null,inst_32520,inst_32516);
var inst_32522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32523 = [new cljs.core.Keyword(null,"count","count",2139924085)];
var inst_32524 = (new cljs.core.PersistentVector(null,1,(5),inst_32522,inst_32523,null));
var inst_32525 = cljs.core.get_in.call(null,inst_32521,inst_32524);
var inst_32526 = [inst_32519,inst_32525];
var inst_32527 = cljs.core.PersistentHashMap.fromArrays(inst_32518,inst_32526);
var inst_32528 = cljs.core.conj.call(null,inst_32517,inst_32527);
var inst_32529 = cljs.core.reset_BANG_.call(null,pages.about.prechart_data,inst_32528);
var inst_32530 = cljs.core.next.call(null,inst_32507);
var inst_32482 = inst_32530;
var inst_32483 = null;
var inst_32484 = (0);
var inst_32485 = (0);
var state_32546__$1 = (function (){var statearr_32598 = state_32546;
(statearr_32598[(26)] = inst_32485);

(statearr_32598[(27)] = inst_32483);

(statearr_32598[(24)] = inst_32482);

(statearr_32598[(28)] = inst_32484);

(statearr_32598[(33)] = inst_32529);

return statearr_32598;
})();
var statearr_32599_32651 = state_32546__$1;
(statearr_32599_32651[(2)] = null);

(statearr_32599_32651[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (19))){
var inst_32472 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32600_32652 = state_32546__$1;
(statearr_32600_32652[(2)] = inst_32472);

(statearr_32600_32652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (11))){
var inst_32404 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32601_32653 = state_32546__$1;
(statearr_32601_32653[(2)] = inst_32404);

(statearr_32601_32653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (9))){
var inst_32363 = (state_32546[(7)]);
var inst_32365 = cljs.core.chunked_seq_QMARK_.call(null,inst_32363);
var state_32546__$1 = state_32546;
if(inst_32365){
var statearr_32602_32654 = state_32546__$1;
(statearr_32602_32654[(1)] = (12));

} else {
var statearr_32603_32655 = state_32546__$1;
(statearr_32603_32655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (5))){
var inst_32408 = (state_32546[(2)]);
var inst_32413 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32414 = cljs.core.keys.call(null,inst_32413);
var inst_32415 = cljs.core.seq.call(null,inst_32414);
var inst_32416 = inst_32415;
var inst_32417 = null;
var inst_32418 = (0);
var inst_32419 = (0);
var state_32546__$1 = (function (){var statearr_32604 = state_32546;
(statearr_32604[(14)] = inst_32417);

(statearr_32604[(15)] = inst_32416);

(statearr_32604[(16)] = inst_32418);

(statearr_32604[(17)] = inst_32419);

(statearr_32604[(34)] = inst_32408);

return statearr_32604;
})();
var statearr_32605_32656 = state_32546__$1;
(statearr_32605_32656[(2)] = null);

(statearr_32605_32656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (14))){
var inst_32401 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32606_32657 = state_32546__$1;
(statearr_32606_32657[(2)] = inst_32401);

(statearr_32606_32657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (26))){
var inst_32485 = (state_32546[(26)]);
var inst_32484 = (state_32546[(28)]);
var inst_32487 = (inst_32485 < inst_32484);
var inst_32488 = inst_32487;
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32488)){
var statearr_32607_32658 = state_32546__$1;
(statearr_32607_32658[(1)] = (28));

} else {
var statearr_32608_32659 = state_32546__$1;
(statearr_32608_32659[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (16))){
var inst_32474 = (state_32546[(2)]);
var inst_32479 = cljs.core.deref.call(null,pages.about.count_data);
var inst_32480 = cljs.core.keys.call(null,inst_32479);
var inst_32481 = cljs.core.seq.call(null,inst_32480);
var inst_32482 = inst_32481;
var inst_32483 = null;
var inst_32484 = (0);
var inst_32485 = (0);
var state_32546__$1 = (function (){var statearr_32609 = state_32546;
(statearr_32609[(35)] = inst_32474);

(statearr_32609[(26)] = inst_32485);

(statearr_32609[(27)] = inst_32483);

(statearr_32609[(24)] = inst_32482);

(statearr_32609[(28)] = inst_32484);

return statearr_32609;
})();
var statearr_32610_32660 = state_32546__$1;
(statearr_32610_32660[(2)] = null);

(statearr_32610_32660[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (30))){
var inst_32538 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32611_32661 = state_32546__$1;
(statearr_32611_32661[(2)] = inst_32538);

(statearr_32611_32661[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (10))){
var state_32546__$1 = state_32546;
var statearr_32612_32662 = state_32546__$1;
(statearr_32612_32662[(2)] = null);

(statearr_32612_32662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (18))){
var inst_32441 = (state_32546[(9)]);
var inst_32416 = (state_32546[(15)]);
var inst_32441__$1 = cljs.core.seq.call(null,inst_32416);
var state_32546__$1 = (function (){var statearr_32613 = state_32546;
(statearr_32613[(9)] = inst_32441__$1);

return statearr_32613;
})();
if(inst_32441__$1){
var statearr_32614_32663 = state_32546__$1;
(statearr_32614_32663[(1)] = (20));

} else {
var statearr_32615_32664 = state_32546__$1;
(statearr_32615_32664[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (8))){
var inst_32406 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32616_32665 = state_32546__$1;
(statearr_32616_32665[(2)] = inst_32406);

(statearr_32616_32665[(1)] = (5));


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
});})(c__24931__auto__))
;
return ((function (switch__24819__auto__,c__24931__auto__){
return (function() {
var pages$about$search_button_$_state_machine__24820__auto__ = null;
var pages$about$search_button_$_state_machine__24820__auto____0 = (function (){
var statearr_32620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32620[(0)] = pages$about$search_button_$_state_machine__24820__auto__);

(statearr_32620[(1)] = (1));

return statearr_32620;
});
var pages$about$search_button_$_state_machine__24820__auto____1 = (function (state_32546){
while(true){
var ret_value__24821__auto__ = (function (){try{while(true){
var result__24822__auto__ = switch__24819__auto__.call(null,state_32546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24822__auto__;
}
break;
}
}catch (e32621){if((e32621 instanceof Object)){
var ex__24823__auto__ = e32621;
var statearr_32622_32666 = state_32546;
(statearr_32622_32666[(5)] = ex__24823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32667 = state_32546;
state_32546 = G__32667;
continue;
} else {
return ret_value__24821__auto__;
}
break;
}
});
pages$about$search_button_$_state_machine__24820__auto__ = function(state_32546){
switch(arguments.length){
case 0:
return pages$about$search_button_$_state_machine__24820__auto____0.call(this);
case 1:
return pages$about$search_button_$_state_machine__24820__auto____1.call(this,state_32546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pages$about$search_button_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$0 = pages$about$search_button_$_state_machine__24820__auto____0;
pages$about$search_button_$_state_machine__24820__auto__.cljs$core$IFn$_invoke$arity$1 = pages$about$search_button_$_state_machine__24820__auto____1;
return pages$about$search_button_$_state_machine__24820__auto__;
})()
;})(switch__24819__auto__,c__24931__auto__))
})();
var state__24933__auto__ = (function (){var statearr_32623 = f__24932__auto__.call(null);
(statearr_32623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24931__auto__);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24933__auto__);
});})(c__24931__auto__))
);

return c__24931__auto__;
})], null)], null)], null);
});
pages.about.search_results = (function pages$about$search_results(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Found: ",cljs.core.deref.call(null,pages.about.temporal_data)], null);
});
pages.about.d3viztest = (function pages$about$d3viztest(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dc-histogram-chart","div#dc-histogram-chart",-2115058852)], null);
});
pages.about.about_page = (function pages$about$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.about.web_browser_warning], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Start date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.about.input,pages.about.start_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"End date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.about.input,pages.about.end_date], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.about.search_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [externs.morris.morris_line,"morris-line",data.data.shared_data], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [externs.slickgrid.slick_grid_table,"test2",pages.about.table_data,pages.about.columns,pages.about.options], null)], null)], null)], null);
});

//# sourceMappingURL=about.js.map?rel=1467992832944