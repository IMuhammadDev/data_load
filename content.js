chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "scrape") {
        const productTitleElement = document.querySelector('#itemTitle');
        const productPriceElement = document.querySelector('#prcIsum');
        const productDescriptionElement = document.querySelector('#desc_ifr');

        const productTitle = productTitleElement ? productTitleElement.innerText : 'Title not found';
        const productPrice = productPriceElement ? productPriceElement.innerText : 'Price not found';
        let productDescription = 'Description not found';

        // Agar iFrame mavjud bo'lsa, uning ichidagi kontentni olishga harakat qilamiz
        if (productDescriptionElement && productDescriptionElement.contentWindow) {
            try {
                productDescription = productDescriptionElement.contentWindow.document.body.innerText;
            } catch (e) {
                console.error("iFrame content access error: ", e);
            }
        }

        // Suratlarnini URL manzillarini olish
        const imageElements = document.querySelectorAll('img[src*="s-l1600"]');
        const imageUrls = Array.from(imageElements).map(img => img.src);

        sendResponse({
            title: productTitle,
            price: productPrice,
            description: productDescription,
            images: imageUrls
        });
    }
});
