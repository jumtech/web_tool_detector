new Vue({
  el: "#container",
  data: {
    tools: []
  },
  created: function() {
    const WEB_TOOLS = _get_web_tools();
    WEB_TOOLS.forEach((tool) => {
      this.tools.push(tool);
    });
    // 各リクエスト完了時
    chrome.devtools.network.onRequestFinished.addListener((req) => {
      const url = req.request.url;
      this.tools.forEach((tool, i) => {
        if (url.indexOf(tool.domain) !== -1) {
          const el = document.getElementById(tool.id);
          el.classList.add("found");
        }
      });
    });
    // 画面更新/遷移時
    chrome.devtools.network.onNavigated.addListener((url) => {
      }
    );
  },
  methods: { /* メソッド */ }
});

function _get_web_tools() {
  return [
    {
      id: "ga",
      name: "Google Analytics",
      domain: "google-analytics.com",
    },
  ]
}