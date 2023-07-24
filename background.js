/*
 * Given an array of tabs.Tab objects, open them in a new window of the specified mode.
 */
function openTabs(tabs, mode) {
    var tab_links = tabs.map(tab => tab.url);
    browser.windows.create({
        url: tab_links,
        incognito: mode,
    });
}

function toggleWindow(window) {
    console.log(window);
    mode = window.incognito;
    console.log(mode);
    openTabs(window.tabs, !mode);
}

function onError(e) {
    console.error(`Error: ${e}`);
}



function main() {
    browser.windows.getCurrent({ populate: true }).then(toggleWindow, onError);
}

browser.browserAction.onClicked.addListener(main);