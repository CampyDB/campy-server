(defproject cgfdb "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [reagent "0.5.1"]
                 [org.clojure/core.async "0.2.371"]
                 [cljs-ajax "0.5.5"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.1.3"][lein-figwheel "0.5.4-3"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles
  {:dev
   {:dependencies []

    :plugins      [[lein-figwheel "0.5.4-3"]]
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "cgfdb.core/reload"}
     :compiler     {:main                 cgfdb.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :externs ["externs.js"
                              ;"resources/public/js/jquery-1.7.min.js"
                              "resources/public/js/jquery.event.drag-2.2.js"
                              "resources/public/js/slick.core.js"
                              "resources/public/js/slick.grid.js"
                              "resources/public/js/raphael.js"
                              "resources/public/js/timeseries.js"
                              ]}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main          cgfdb.core
                    :output-to     "resources/public/js/compiled/app.js"
                    :optimizations :none
                    :closure-defines {goog.DEBUG false}
                    :pretty-print  false}}

    ]})
