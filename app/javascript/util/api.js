const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = { 
    // Your code here
    "X-CSRF-Token": csrfToken,
    ...options.headers
    
  };
  return await fetch(url, options)
    .then(response => {
      if(response.ok){
        return response.json();
        
      } else {
        throw response
      }
    });
    // .then(res => console.log(res));
}

export const followUser = function(id) {
  return customFetch(`/users/${id}/follow`, {method: "POST"})
}

export const unfollowUser = function(id) {
  return customFetch(`/users/${id}/follow`, { method: "DELETE" })
}

export const fetchTweets = function(options = {}) {
  let queryParams = new URLSearchParams(options)
  return customFetch(`/tweets?${queryParams.toString()}`)
}
