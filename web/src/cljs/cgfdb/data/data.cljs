(ns ^:figwheel-load data.data
  (:require
    [reagent.core :as reagent :refer [atom]]))
(defonce shared-data (atom []))
(defonce active-page (atom :about-page))