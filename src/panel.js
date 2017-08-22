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
      this.tools.forEach((tool) => {
        if (url.indexOf(tool.domain) !== -1) {
          const el = document.getElementById(tool.id);
          el.classList.add("found");
        }
      });
    });
    // 画面更新/遷移時
    chrome.devtools.network.onNavigated.addListener((url) => {
      this.tools.forEach((tool) => {
        const el = document.getElementById(tool.id);
        el.classList.remove("found");
      });
    });
  },
  methods: { /* メソッド */ }
});

function _get_web_tools() {
  return [
    {
      name: "Google Analytics",
      id: "ga",
      domain: "google-analytics.com",
    },
    {
      name: "KARTE",
      id: "karte",
      domain: "karte.io",
    },
    {
      name: "Adobe Marketing Cloud",
      id: "adobe",
      domain: "dpm.demdex.net",
    },
    {
      name: "SILVER EGG",
      id: "set",
      domain: "silveregg.net",
    },
    {
      name: "Rtoaster",
      id: "rtoaster",
      domain: "rtoaster.jp",
    },
    {
      name: "CombzReco",
      id: "combz",
      domain: "combz.jp",
    },
    {
      name: "NaviPlus",
      id: "naviplus",
      domain: "snva.jp",
    },
    {
      name: "ec-CONCIER",
      id: "ec_concier",
      domain: "ec-concier.com",
    },
    {
      name: "Sprocket",
      id: "sprocket",
      domain: "sprocket.bz",
    },
    {
      name: "ZenClerk",
      id: "zenclerk",
      domain: "zenclerk.com",
    },
    {
      name: "FLIPDESK",
      id: "flipdesk",
      domain: "flipdesk.jp",
    },
    {
      name: "Chamo",
      id: "chamo",
      domain: "chamo-chat.com",
    },
    {
      name: "Zendesk Chat",
      id: "zendesk_chat",
      domain: "zopim",
    },
    {
      name: "Intercom",
      id: "intercom",
      domain: "intercomcdn.com",
    },
    {
      name: "Usergram",
      id: "usergram",
      domain: "usergram.info",
    },
    {
      name: "SATORI",
      id: "satori",
      domain: "satori.segs.jp",
    },
  ]
}