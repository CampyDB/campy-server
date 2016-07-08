(ns ^:figwheel-load pages.temporal
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :refer [atom]]
    [cljs.core.async :refer [put! chan <! timeout]]
    [ajax.core :refer [GET POST]]
    [externs.slickgrid :as slickgrid]
    [externs.morris :as morris]
    [pages.about :as about-page]
    [data.data :as data]
    ))

(defn temporal-page []
  (print data/active-page)
      [:div.row
       [:div.col-md-8
        [:div.well.well-sm
         [:h1 "Temporal Visualizations"]]
           [:br]
           [:div#dc-histogram-chart]
           [:div#dc-time-chart]
           [:div#chart-ring-year]
           [:div#day-of-week-chart]
           [:div#dc-table-graph]
           (def temporal (new js/TemporalVisualization))
     ]])