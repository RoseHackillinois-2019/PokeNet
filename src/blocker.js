var header = document.querySelector("#scheduler_id");

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
  console.log(tabs[0].url)
  if (tabs.length == 1) {
    // Is the tab in the currently focused window? If not, assume Chrome
    // is out of focus. Although we ask for the lastFocusedWindow, it's
    // possible for that window to go out of focus quickly. If we don't do
    // this, we risk counting time towards a tab while the user is outside of
    // Chrome altogether.
    var url = tabs[0].url;
    chrome.windows.get(tabs[0].windowId, function(win) {
      if (!win.focused) {
        url = null;
      }
      //self._sites.setCurrentFocus(url);
    });
  }
})

class Blocker 