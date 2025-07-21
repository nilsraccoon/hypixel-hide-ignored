(function () {
  "use strict";

  let settings = {};

  async function loadSettings() {
    const result = await browser.storage.sync.get(["hideQuotedPosts"]);
    settings = {
      hideQuotedPosts:
        result.hideQuotedPosts !== undefined ? result.hideQuotedPosts : true,
    };
  }

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

  loadSettings().then(() => {
    hideIgnoredContent();
    const observer = new MutationObserver(hideIgnoredContent);
    observer.observe(document.body, { childList: true, subtree: true });
  });

  browser.storage.onChanged.addListener((changes) => {
    if (changes.hideQuotedPosts) {
      settings.hideQuotedPosts = changes.hideQuotedPosts.newValue;
      hideIgnoredContent();
    }
  });
})();