new Vue({
  el: "#container",
  data: {
    msg: ""
  },
  created: function() {
    // 各リクエスト完了時
    chrome.devtools.network.onRequestFinished.addListener((req) => {
      const url = req.request.url;
      if (url.indexOf("google-analytics.com") !== -1) {
        this.msg = "このサイトから、GoogleAnalyticsの香りがするでゲソ";
      }
    });
    // 画面更新/遷移時
    chrome.devtools.network.onNavigated.addListener((url) => {
        this.msg = "";
      }
    );
  },
  methods: { /* メソッド */ }
});
