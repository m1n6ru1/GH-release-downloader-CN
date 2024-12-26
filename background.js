chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ghproxyDownload",
    title: "用Github Proxy下载",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ghproxyDownload" && info.linkUrl) {
    const proxyUrl = "https://ghproxy.net/";
    const originalUrl = info.linkUrl;
    const newUrl = proxyUrl + encodeURIComponent(originalUrl);
    chrome.tabs.create({ url: newUrl });
  }
});