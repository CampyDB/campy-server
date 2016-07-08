(ns ^:figwheel-load externs.d3
  (:require
    [reagent.core :as reagent :refer [atom]]))

(defonce d3component (atom ""))
(defn pie-chart [id data]
  (reagent/create-class
    (letfn [(render! []
              (deref data)
              [:div#chart])
            (mounter! []
              (reset! piecomponent (.-chart js/dimple))
              (.setBounds @piecomponent 20 20 460 360))
            (update! []
              (.setData @piecomponent (clj->js @data))
              (.addMeasureAxis @piecomponent "x"))]
      {:render               render!
       :component-did-mount  mounter!
       :component-did-update update!}))d)