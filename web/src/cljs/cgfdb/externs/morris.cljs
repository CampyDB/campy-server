(ns ^:figwheel-load externs.morris
  (:require
    [reagent.core :as reagent :refer [atom]]))

(defonce morriscomponent (atom ""))
(defonce donutcomponent (atom ""))
(defn morris-line [id data]
  (reagent/create-class
    (letfn [(render! []
              (print "RENDER")
              (deref data)
              [:div#chart])
            (mounter! []
              (print "MOUNTING")
              (reset! morriscomponent (.Line js/Morris (clj->js {:element "chart"
                                                                 :data    @data
                                                                 :xkey    "date"
                                                                 :ykeys   '("count")
                                                                 :labels  '("count")}))))
            (update! []
              (print "ATTEMPT UPDATE DATA WITH " @data)
              (.setData @morriscomponent (clj->js @data)))]
      {:render               render!
       :component-did-mount  mounter!
       :component-did-update update!})))

(defn donut [id data]
  (reagent/create-class
    (letfn [(render! []
              (deref data)
              [:div#donut])
            (mounter! []
              (reset! donutcomponent (.Donut js/Morris (clj->js {:element "donut"
                                                                 :data    @data
                                                        }))))
            (update! []
              (.setData @donutcomponent (clj->js @data)))]
      {:render               render!
       :component-did-mount  mounter!
       :component-did-update update!})))


