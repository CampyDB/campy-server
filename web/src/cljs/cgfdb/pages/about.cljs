(ns ^:figwheel-load pages.about
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :refer [atom]]
    [cljs.core.async :refer [put! chan <! timeout]]
    [ajax.core :refer [GET POST]]
    [externs.slickgrid :as slickgrid]
    [externs.morris :as morris]
    [data.data :as data]
    ))

(defn web-browser-warning []
  [:div.alert.alert-warning
   [:i.fa.fa-exclamation-triangle.fa-2x.pull-left]
   [:p "For the best experience using CGFDb, a recent version of "]
   [:ul
    [:li
     [:a {:href   "https://www.google.com/chrome/browser/"
          :target "_blank"}
      [:i.fa.fa-chrome.fa-lg] " Google Chrome"] " or"]
    [:li
     [:a {:href   "https://www.mozilla.org/firefox"
          :target "_blank"}
      [:i.fa.fa-firefox.fa-lg] " Firefox"]]]
   [:p " is recommended."]
   [:p
    [:span.fa-stack
     [:i.fa.fa-internet-explorer.text-info.fa-stack-2x]
     [:i.fa.fa-ban.text-danger.fa-stack-2x]]
    " Internet Explorer is " [:strong "unsupported"]
    ]])

(defonce start-date (atom ""))
(defonce end-date (atom ""))

(defn get-temporal []
  (let [a-chan (chan)
    uri "http://localhost:5000/api/temporal/filter"
    args {:response-format :json
          :format          :json
          :params          {:start-date @start-date
                            :end-date @end-date}
          :keywords?       true
          :handler         #(put! a-chan %)
          }
         ]
  (POST uri args)
  a-chan))

(defn get-count []
  (let [a-chan (chan)
        uri "http://localhost:5000/api/temporal/count"
        args {:response-format :json
              :format          :json
              :params          {:start-date @start-date
                                :end-date @end-date}
              :keywords?       true
              :handler         #(put! a-chan %)
              }
        ]
    (POST uri args)
    a-chan))


(defn input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])


(defonce search-target (atom ""))
(defonce temporal-data (atom ""))
(defonce count-data (atom ""))

(def options  {:enableCellNavigation true
               :enableColumnReorder false
               })

(def columns  [{:id "isolate" :name "Isolate" :field "name" :width 200}
               {:id "date" :name "Date" :field "date" :width 150}
               {:id "month-bool" :name "Month Bool" :field "month-bool" :width 150}
               {:id "year-bool" :name "Year Bool" :field "year-bool" :width 150}]
  )

(def data (atom [{:title "test1" :duration "duration1" :percentComplete 12 :start "01/01/2009" :finish "01/02/2009" :effortDriven false}
           {:title "test2" :duration "duration2" :percentComplete 13 :start "02/01/2009" :finish "02/02/2009" :effortDriven false}]))

(def data2 (atom [{:title "test13" :duration "duration1" :percentComplete 12 :start "01/01/2009" :finish "01/02/2009" :effortDriven false}
           {:title "test2" :duration "duration2" :percentComplete 13 :start "02/01/2009" :finish "02/02/2009" :effortDriven false}]))

(defonce table-data (atom []))
(defonce prechart-data (atom []))
(defonce chart-data (atom []))
(defonce predonut-data (atom []))
(defonce donut-data (atom []))

(defn search-button []
  [:div
   [:input {:type "button" :value "Search!"
            :on-click #(go
                          (reset! prechart-data [])
                          (reset! predonut-data [])

                          (reset! count-data (<! (get-count)))

                          (reset! temporal-data (<! (get-temporal)))


                          (doseq [k (keys @temporal-data)] (do
                                                                 (reset! table-data
                                                                         (conj @table-data {:name (name k) :date (get-in (get @temporal-data k) [:date]) :month-bool (get-in (get @temporal-data k) [:month_bool]) :year_bool (get-in (get @temporal-data k) [:year_bool])}))))

                          (doseq [k (keys @count-data)] (do
                                                          (reset! predonut-data
                                                                  (conj @predonut-data {:label (name k) :value (get-in (get @count-data k) [:count]) }))
                                                          ))

                          (doseq [k (keys @count-data)] (do
                                                                 (reset! prechart-data
                                                                         (conj @prechart-data {:date (name k) :count (get-in (get @count-data k) [:count]) }))
                                                                 ))

                          (reset! donut-data @predonut-data)
                          (reset! data.data/shared-data @prechart-data)


                        )

            }]
   ])

(defn search-results []
 [:div "Found: " @temporal-data]
)

(defn d3viztest []
  [:div#dc-histogram-chart])

(defn about-page []
  [:div.row
   [:div.col-md-3
    [:div.well.well-sm
     [web-browser-warning]]
    ]
   [:div.col-md-8
    [:div.well.well-sm
     [:h4 "Search"]
     [:h5 "Start date"][input start-date][:h5 "End date"][input end-date][search-button]]
    [:div.well.well-sm
     [:div.row
      ;[:div.col-md-3 [morris/donut "donut" donut-data]]
      [:div.col-md-8 [morris/morris-line "morris-line" data/shared-data]]
       ]
     [slickgrid/slick-grid-table "test2" table-data columns options]]]])