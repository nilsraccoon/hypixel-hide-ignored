// ==UserScript==
// @name         Hide Ignored Member Replies - Hypixel Forums
// @namespace    hypixel-hide-ignored
// @version      1.1
// @description  Hides posts and buttons related to ignored members on the Hypixel forums
// @author       racon sandwiches
// @match        https://hypixel.net/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  let settings = {
    hideQuotedPosts: GM_getValue("hideQuotedPosts", true),
  };

  function hideIgnoredContent() {
    document.querySelectorAll(".message--post").forEach((post) => {
      const directIgnoredNotice = post.querySelector(
        ".messageNotice--ignored:not(.bbCodeBlock .messageNotice--ignored)"
      );
      if (directIgnoredNotice) {
        post.style.display = "none";
        return;
      }

      const quotesWithIgnoredNotice = post.querySelectorAll(
        ".bbCodeBlock--quote .messageNotice--ignored"
      );

      if (quotesWithIgnoredNotice.length > 0) {
        if (settings.hideQuotedPosts) {
          post.style.display = "none";
        } else {
          post.style.display = "";
        }
      }
    });

    document
      .querySelectorAll(".showIgnoredLink.js-showIgnored")
      .forEach((button) => {
        button.style.display = "none";
      });
  }

  function toggleQuotedPosts() {
    settings.hideQuotedPosts = !settings.hideQuotedPosts;
    GM_setValue("hideQuotedPosts", settings.hideQuotedPosts);
    hideIgnoredContent();
    alert(
      `Hiding posts with quotes from ignored members is now ${
        settings.hideQuotedPosts ? "enabled" : "disabled"
      }`
    );
  }

  GM_registerMenuCommand(
    "Toggle: Hide posts with quotes from ignored members",
    toggleQuotedPosts
  );

  hideIgnoredContent();
  const observer = new MutationObserver(hideIgnoredContent);
  observer.observe(document.body, { childList: true, subtree: true });
})();
