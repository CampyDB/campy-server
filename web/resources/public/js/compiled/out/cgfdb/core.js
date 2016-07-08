// Compiled by ClojureScript 1.8.51 {}
goog.provide('cgfdb.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('pages.temporal');
goog.require('data.data');
goog.require('pages.about');
goog.require('cljs.core.async');
if(typeof cgfdb.core.chart_data !== 'undefined'){
} else {
cgfdb.core.chart_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cgfdb.core.debug_QMARK_ !== 'undefined'){
} else {
cgfdb.core.debug_QMARK_ = goog.DEBUG;
}
cgfdb.core.dev_setup = (function cgfdb$core$dev_setup(){
if(cljs.core.truth_(cgfdb.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
if(typeof cgfdb.core.app_state !== 'undefined'){
} else {
cgfdb.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
cgfdb.core.sidebar = (function cgfdb$core$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-wrapper","div#sidebar-wrapper",1043226224),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.sidebar-nav","ul.sidebar-nav",-2087471315),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.sidebar-brand>a","li.sidebar-brand>a",-1033961553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"csvDB"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,data.data.active_page),new cljs.core.Keyword(null,"about-page","about-page",476256482)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#about-page",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,data.data.active_page,new cljs.core.Keyword(null,"about-page","about-page",476256482));
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Search"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,data.data.active_page),new cljs.core.Keyword(null,"temporal-page","temporal-page",754940479)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#temporal-page",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,data.data.active_page,new cljs.core.Keyword(null,"temporal-page","temporal-page",754940479));
})], null),"Temporal"], null)], null)], null)], null);
});
cgfdb.core.menu_toggle_render = (function cgfdb$core$menu_toggle_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn-default","div.btn.btn-default",1437787971),"Toggle Menu"], null);
});
cgfdb.core.menu_toggle_did_mount = (function cgfdb$core$menu_toggle_did_mount(this$){
return $(reagent.core.dom_node.call(null,this$)).click((function (e){
e.preventDefault();

return $("#wrapper").toggleClass("toggled");
}));
});
cgfdb.core.menu_toggle = (function cgfdb$core$menu_toggle(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),cgfdb.core.menu_toggle_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cgfdb.core.menu_toggle_did_mount], null));
});
cgfdb.core.home = (function cgfdb$core$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapper","div#wrapper",220024300),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cgfdb.core.sidebar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-content-wrapper>div.container-fluid>div.row>div.col-lg-12","div.page-content-wrapper>div.container-fluid>div.row>div.col-lg-12",-1172234605),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cgfdb.core.menu_toggle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-content","div.tab-content",255119102),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-pane","div.tab-pane",931547190),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"about-page",new cljs.core.Keyword(null,"class","class",-2030961996),"active"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.about.about_page], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-pane","div.tab-pane",931547190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"temporal-page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.temporal.temporal_page], null)], null)], null)], null)], null);
});
cgfdb.core.reload = (function cgfdb$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cgfdb.core.home,cgfdb.core.app_state], null),document.getElementById("app"));
});
cgfdb.core.render_app = (function cgfdb$core$render_app(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cgfdb.core.home], null),document.getElementById("app"));
});
cgfdb.core.render_app.call(null);

//# sourceMappingURL=core.js.map?rel=1467992833001