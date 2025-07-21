document.addEventListener('DOMContentLoaded', async () => {
  const hideQuotedPostsCheckbox = document.getElementById('hideQuotedPosts');
  
  const result = await browser.storage.sync.get(['hideQuotedPosts']);
  hideQuotedPostsCheckbox.checked = result.hideQuotedPosts !== undefined ? result.hideQuotedPosts : true;
  
  hideQuotedPostsCheckbox.addEventListener('change', async (e) => {
    await browser.storage.sync.set({
      hideQuotedPosts: e.target.checked
    });
    
    browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
      if (tabs[0]?.url?.includes('hypixel.net')) {
        browser.tabs.reload(tabs[0].id);
      }
    });
  });
});