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
      name: "Google Tag Manager",
      id: "gtm",
      domain: "googletagmanager.com",
      url: "https://www.google.com/intl/ja/tagmanager/",
    },
    {
      name: "Yahoo! Tag Manager",
      id: "ytm",
      domain: "yjtag.jp",
      url: "https://tagmanager.yahoo.co.jp/",
    },
    {
      name: "Google AdSense",
      id: "adsense",
      domain: "googlesyndication.com",
      url: "https://www.google.co.jp/adsense/",
    },
    {
      name: "Google Analytics",
      id: "ga",
      domain: "google-analytics.com",
      url: "https://www.google.com/intl/ja_jp/analytics/",
    },
    {
      name: "KARTE",
      id: "karte",
      domain: "karte.io",
      url: "https://karte.io/",
    },
    {
      name: "Adobe Marketing Cloud",
      id: "adobe",
      domain: "dpm.demdex.net",
      url: "http://www.adobe.com/jp/marketing-cloud.html",
    },
    {
      name: "SILVER EGG",
      id: "set",
      domain: "silveregg.net",
      url: "http://www.silveregg.co.jp/",
    },
    {
      name: "Rtoaster",
      id: "rtoaster",
      domain: "rtoaster.jp",
      url: "http://www.rtoaster.com/",
    },
    {
      name: "CombzReco",
      id: "combz",
      domain: "combz.jp",
      url: "https://reco.combz.jp/",
    },
    {
      name: "NaviPlus",
      id: "naviplus",
      domain: "snva.jp",
      url: "http://www.naviplus.co.jp/",
    },
    {
      name: "ec-CONCIER",
      id: "ec_concier",
      domain: "ec-concier.com",
      url: "https://ec-concier.com/",
    },
    {
      name: "Sprocket",
      id: "sprocket",
      domain: "sprocket.bz",
      url: "https://www.sprocket.bz/",
    },
    {
      name: "ZenClerk",
      id: "zenclerk",
      domain: "zenclerk.com",
      url: "https://www.zenclerk.com/",
    },
    {
      name: "FLIPDESK",
      id: "flipdesk",
      domain: "flipdesk.jp",
      url: "https://flipdesk.jp/",
    },
    {
      name: "Chamo",
      id: "chamo",
      domain: "chamo-chat.com",
      url: "http://chamo-chat.com/",
    },
    {
      name: "Zendesk Chat",
      id: "zendesk_chat",
      domain: "zopim.com",
      url: "https://zopimjp.com/",
    },
    {
      name: "Intercom",
      id: "intercom",
      domain: "intercomcdn.com",
      url: "https://www.intercom.com/",
    },
    {
      name: "Usergram",
      id: "usergram",
      domain: "usergram.info",
      url: "http://www.bebit.co.jp/usergram/",
    },
    {
      name: "SATORI",
      id: "satori",
      domain: "satori.segs.jp",
      url: "https://satori.marketing/",
    },
  ]
}