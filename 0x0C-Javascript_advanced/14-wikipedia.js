function createElement (data) {
    const para = document.createElement('p');
    const node = document.createTextNode(data);
    para.appendChild(node);
    document.body.appendChild(para);
}

function queryWikipedia (callback) {
    const req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    req.onload = function () {
        const res = JSON.parse(req.responseText);
        const pages = res.query.pages;
        
        for (const i of Object.keys(pages)) {
            callback(pages[i].extract);
        }
    }
    req.send();
}

queryWikipedia(createElement);
