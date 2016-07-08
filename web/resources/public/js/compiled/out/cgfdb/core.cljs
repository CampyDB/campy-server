(ns cgfdb.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [reagent.core :as reagent]
   [pages.about :as about-page]
   [pages.temporal :as temporal-page]
   [cljs.core.async :refer [put! chan <! timeout]]
   [ajax.core :refer [GET POST]]
   [data.data :as data]
   ))
(defonce chart-data (atom []))
(enable-console-print!)
(defonce debug?
  ^boolean js/goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")
    ))

(defonce app-state
  (reagent/atom
   {:text "Hello, what is your name? "}))

(defn sidebar []
  [:div#sidebar-wrapper
   [:ul.sidebar-nav
    [:li.sidebar-brand>a {:href "#"} "csvDB"]
    [:li
     {:class (if (= @data/active-page :about-page) "active" "")} [:a {:href "#about-page"
                                                                 :data-toggle "tab"
                                                                 :on-click #(reset! data/active-page :about-page)} "Home"
                                                                 ]]
    [:li>a {:href "#"} "Search"]
    [:li
     {:class (if (= @data/active-page :temporal-page) "active" "")} [:a {:href "#temporal-page"
                                                                 :data-toggle "tab"
                                                                 :on-click #(reset! data/active-page :temporal-page)} "Temporal"
                                                             ]]]])

(defn menu-toggle-render []
  [:div.btn.btn-default "Toggle Menu"])

(defn menu-toggle-did-mount [this]
  (.click (js/$ (reagent/dom-node this))
          (fn [e]
            (.preventDefault e)
            (.toggleClass (js/$ "#wrapper") "toggled") ;#wrapper will be the id of a div in our home component
            )))

(defn menu-toggle []
  (reagent/create-class {:reagent-render menu-toggle-render
                         :component-did-mount menu-toggle-did-mount}))

(defn home []
  [:div#wrapper
   [sidebar]
   [:div.page-content-wrapper>div.container-fluid>div.row>div.col-lg-12
    [menu-toggle]
    [:br][:br]
    [:div.tab-content
     [:div.tab-pane {:id "about-page"
                     :class "active"}
     [about-page/about-page]]
     [:div.tab-pane {:id "temporal-page"
                     }
      [temporal-page/temporal-page]]]]])

(defn reload []
  (reagent/render [home app-state]
                  (.getElementById js/document "app")))

(defn render-app []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(render-app)