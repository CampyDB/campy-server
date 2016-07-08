// Compiled by ClojureScript 1.8.51 {}
goog.provide('data.data');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof data.data.shared_data !== 'undefined'){
} else {
data.data.shared_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof data.data.active_page !== 'undefined'){
} else {
data.data.active_page = reagent.core.atom.call(null,new cljs.core.Keyword(null,"about-page","about-page",476256482));
}

//# sourceMappingURL=data.js.map?rel=1467991929014