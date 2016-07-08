(ns ^:figwheel-load externs.dimple
  (:require
    [reagent.core :as reagent :refer [atom]]))

(defonce piecomponent (atom ""))
(def svg (.newSvg js/dimple (str "#pie") 590 400))
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
       :component-did-update update!})))