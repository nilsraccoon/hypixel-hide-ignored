document.addEventListener('DOMContentLoaded', async () => {
  const hideQuotedPostsCheckbox = document.getElementById('hideQuotedPosts');
  
  const result = await chrome.storage.sync.get(['hideQuotedPosts']);
  hideQuotedPostsCheckbox.checked = result.hideQuotedPosts !== undefined ? result.hideQuotedPosts : true;
  
  hideQuotedPostsCheckbox.addEventListener('change', async (e) => {
    await chrome.storage.sync.set({
      hideQuotedPosts: e.target.checked
    });
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]?.url?.includes('hypixel.net')) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });
});