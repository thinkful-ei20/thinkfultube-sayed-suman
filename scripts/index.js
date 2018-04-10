'use strict';
const API_KEY = 'AIzaSyB67zJtiurAPJA3_l4k_dbafCQuTGautms';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part:'snippet',
    key:'AIzaSyCdh_TJQJq0K9yKItkB9vVKNHULiO0zbg4',
    q: `${searchTerm}`,    
  };    
  $.getJSON(BASE_URL, query,callback);
};

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  
};
//console.log(decorateResponse(mockData));
// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) { 
 console.log(video);

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {
  $('#YouTubeSearchForm').submit(function(event){
    console.log('got here - search form event ');
    event.preventDefault();
    fetchVideos($('#search-term').val(),generateVideoItemHtml);
    $('#search-term').val('');
  });  
};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  console.log('got here');
  handleFormSubmit();
});
// const mockData = {
//     {
//     "kind": "youtube#searchListResponse",
//     "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/fG5fs-DOcL94N3BfmZFXQdbeiCI\"",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "US",
//     "pageInfo": {
//      "totalResults": 1000000,
//      "resultsPerPage": 5
//     },
//     "items": [
//      {
//       "kind": "youtube#searchResult",
//       "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/kbuAuHHVy6cVsT18GPT6rS2I_zc\"",
//       "id": {
//        "kind": "youtube#video",
//        "videoId": "YYgc4r9U75M"
//       },
//       "snippet": {
//        "publishedAt": "2012-12-24T14:19:19.000Z",
//        "channelId": "UCcu2IWjpwnlV6F52hWI5CUw",
//        "title": "\"Suman Malagkit\"",
//        "description": "rice cake made from glutinous or sticky rice(malagkit) and wrapped in banana leaves....",
//        "thumbnails": {
//         "default": {
//          "url": "https://i.ytimg.com/vi/YYgc4r9U75M/default.jpg",
//          "width": 120,
//          "height": 90
//         },
//         "medium": {
//          "url": "https://i.ytimg.com/vi/YYgc4r9U75M/mqdefault.jpg",
//          "width": 320,
//          "height": 180
//         },
//         "high": {
//          "url": "https://i.ytimg.com/vi/YYgc4r9U75M/hqdefault.jpg",
//          "width": 480,
//          "height": 360
//         }
//        },
//        "channelTitle": "Nette Cooking",
//        "liveBroadcastContent": "none"
//       }
//      },
//      {
//       "kind": "youtube#searchResult",
//       "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/cReNcEioPC5DCIhDgmQwN4Re0qA\"",
//       "id": {
//        "kind": "youtube#video",
//        "videoId": "YXgLodBKiOI"
//       },
//       "snippet": {
//        "publishedAt": "2013-10-29T03:17:22.000Z",
//        "channelId": "UCFImY20zsnSkVWqNZMm0XDw",
//        "title": "Suman Malagkit Filipino Kakanin - rice cake",
//        "description": "Suman Malagkit is made of sticky rice, Coconut milk add white sugar according to your taste wrapped tightly banana leaf, then boiled, Suman is a delicious Filipino Kakanin.",
//        "thumbnails": {
//         "default": {
//          "url": "https://i.ytimg.com/vi/YXgLodBKiOI/default.jpg",
//          "width": 120,
//          "height": 90
//         },
//         "medium": {
//          "url": "https://i.ytimg.com/vi/YXgLodBKiOI/mqdefault.jpg",
//          "width": 320,
//          "height": 180
//         },
//         "high": {
//          "url": "https://i.ytimg.com/vi/YXgLodBKiOI/hqdefault.jpg",
//          "width": 480,
//          "height": 360
//         }
//        },
//        "channelTitle": "Loren sweety",
//        "liveBroadcastContent": "none"
//       }
//      },
//      {
//       "kind": "youtube#searchResult",
//       "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/xUykzDA61SpUlE47EZklwq0SiZg\"",
//       "id": {
//        "kind": "youtube#video",
//        "videoId": "iDQ_IbnwMGI"
//       },
//       "snippet": {
//        "publishedAt": "2016-02-23T04:39:44.000Z",
//        "channelId": "UCq8Qqa1rEbuIAKIp0zZJtzQ",
//        "title": "How to Make Homemade Suman | Yummy Ph",
//        "description": "You can make the classic Filipino rice cake using your rice cooker! Jazz it up by stuffing it with chocolate. This recipe makes about 6-7 pieces. Tip: Don't forget to pass the banana leaves...",
//        "thumbnails": {
//         "default": {
//          "url": "https://i.ytimg.com/vi/iDQ_IbnwMGI/default.jpg",
//          "width": 120,
//          "height": 90
//         },
//         "medium": {
//          "url": "https://i.ytimg.com/vi/iDQ_IbnwMGI/mqdefault.jpg",
//          "width": 320,
//          "height": 180
//         },
//         "high": {
//          "url": "https://i.ytimg.com/vi/iDQ_IbnwMGI/hqdefault.jpg",
//          "width": 480,
//          "height": 360
//         }
//        },
//        "channelTitle": "YUMMY Ph",
//        "liveBroadcastContent": "none"
//       }
//      },
//      {
//       "kind": "youtube#searchResult",
//       "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/2AF30GMtlgVjSFiJxnUfv73p55g\"",
//       "id": {
//        "kind": "youtube#video",
//        "videoId": "A70tjz96F3o"
//       },
//       "snippet": {
//        "publishedAt": "2015-08-07T14:10:25.000Z",
//        "channelId": "UCp9EDptTSpPFkSyqiKsLY2w",
//        "title": "How to make iBos or Suman (Glutinous Rice in Banana Leaves)",
//        "description": "TIP: Soak the rice for about 3-4 hours but not longer before cooking. It will lessen the cooking time. Glutinous Rice in Banana Leaves (iBos/Suman), a traditional Filipino delicacy. A friend...",
//        "thumbnails": {
//         "default": {
//          "url": "https://i.ytimg.com/vi/A70tjz96F3o/default.jpg",
//          "width": 120,
//          "height": 90
//         },
//         "medium": {
//          "url": "https://i.ytimg.com/vi/A70tjz96F3o/mqdefault.jpg",
//          "width": 320,
//          "height": 180
//         },
//         "high": {
//          "url": "https://i.ytimg.com/vi/A70tjz96F3o/hqdefault.jpg",
//          "width": 480,
//          "height": 360
//         }
//        },
//        "channelTitle": "Cooking, Gardening and Traveling with Luchelle",
//        "liveBroadcastContent": "none"
//       }
//      },
//      {
//       "kind": "youtube#searchResult",
//       "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/jF44MC54dlDXs3SrQ4YxnPn7htw\"",
//       "id": {
//        "kind": "youtube#video",
//        "videoId": "jcmGZDjuibM"
//       },
//       "snippet": {
//        "publishedAt": "2017-04-28T07:12:50.000Z",
//        "channelId": "UCRh-4WUJx8M86gUYL2pyKSQ",
//        "title": "Top 50 Songs Of Kabir Suman | টপ ৫০ কবীর সুমনের গান | One Stop Jukebox",
//        "description": "This jukebox presents Top 50 Bengali Hits of KABIR SUMAN, one of the very popular artiste among all contemporary singers of Bengal, for your listening pleasure. These songs are very popular...",
//        "thumbnails": {
//         "default": {
//          "url": "https://i.ytimg.com/vi/jcmGZDjuibM/default.jpg",
//          "width": 120,
//          "height": 90
//         },
//         "medium": {
//          "url": "https://i.ytimg.com/vi/jcmGZDjuibM/mqdefault.jpg",
//          "width": 320,
//          "height": 180
//         },
//         "high": {
//          "url": "https://i.ytimg.com/vi/jcmGZDjuibM/hqdefault.jpg",
//          "width": 480,
//          "height": 360
//         }
//        },
//        "channelTitle": "Saregama Bengali",
//        "liveBroadcastContent": "none"
//       }
//      }
//     ]    
// };