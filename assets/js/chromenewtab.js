chrome.storage.sync.get(["stickyID"], function(data) {
  var stickyID = data.stickyID;
    if (!!stickyID) {
        console.log("found: ", stickyID);
        window.location.href = "index.html#/sticky/" + stickyID;
    } else {
        console.log("not found!");
        var stickyID = prompt("Please enter the stickyID to use for your newtab");
        console.log("got input: " + stickyID);
        chrome.storage.sync.set({
            stickyID: stickyID
        });
        window.location.href = "index.html#/sticky/" + stickyID;
    }
});
