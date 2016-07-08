(ns ^:figwheel-load externs.slickgrid
(:require
    [reagent.core :as reagent :refer [atom]]))

(def slickgridcomponent (atom ""))

(defn slick-grid-table [id data columns options]
           (reagent/create-class
              (letfn [(render! []
                               (deref data)
                               [:div.slick-grid-container {:id "test2" :style {:height 600}}])
                      (mounter! []
                                (set! (.-innerHTML (.getElementById js/document "test2")))
                                (reset! slickgridcomponent (new js/Slick.Grid "#test2" (clj->js @data) (clj->js columns) (clj->js options))))

                      (update! []
                               (let [newdata @data]
                                (.setData @slickgridcomponent (clj->js newdata) true)
                                (.render @slickgridcomponent)))]
                {:render               render!
                 :component-did-mount  mounter!
                 :component-did-update update!}))
  )



