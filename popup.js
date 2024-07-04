document.getElementById('scrapeButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, function (response) {
            if (response) {
                document.getElementById('result').textContent = JSON.stringify(response, null, 2);
            } else {
                document.getElementById('result').textContent = 'No response received. Make sure you are on a valid product page.';
            }
        });
    });
});

