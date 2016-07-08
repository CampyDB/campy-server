(ns figwheel.connect (:require [cgfdb.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/cgfdb.core.reload (apply js/cgfdb.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'cgfdb.core/reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

