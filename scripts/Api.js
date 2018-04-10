'use strict';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const api = (function(){
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part:'snippet',
      key:'AIzaSyCdh_TJQJq0K9yKItkB9vVKNHULiO0zbg4',
      q: `${searchTerm}`,    
    };  
    $.getJSON(BASE_URL, query,callback);
  };

  return {
    fetchVideos,
  };
  
}());

