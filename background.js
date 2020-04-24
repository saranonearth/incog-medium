chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
        chrome.tabs.query({
                active: true,
                currentWindow: true
            },
            ([currentTab]) => {
                const url = new URL(currentTab.url);
                var domain = url.hostname;
                if (domain === "medium.com") {
                    chrome.windows.create({
                        "url": currentTab.url,
                        "incognito": true
                    });
                }

            }
        );
    }
});