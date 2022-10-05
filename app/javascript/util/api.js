const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = { 
    // Your code here
    "X-CSRF-Token": csrfToken,
    ...options.headers
    
  };

  // options.headers.append("X-CSRF-Token", csrfToken)


  return await fetch(url, options);
}

export const followUser = function(id) {
  return customFetch(`/users/${id}/follow`, {method: "POST"})
}

export const unfollowUser = function(id) {
  return customFetch(`/users/${id}/follow`, { method: "DELETE" })
}
