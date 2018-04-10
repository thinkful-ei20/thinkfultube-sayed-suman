'use strict';
/* global store, api */

const generateListItem = function(video) {
  return `
    <li id='${video.id}'>
      <h2>${video.title}</h2>
      <img src='${video.thumbnail}'>
    </li>          
    `;
};

const videoList = (function () {
  const render = function() {
    let videosHtml = store.videos.map(video => {
      return generateListItem(video);
    });
    $('.results').html(videosHtml);
  };
  const decorateResponse = function(response) {
    return response.items.map(item => {
      const id = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;
  
      return {id, title, thumbnail};
    });
  };
  const handleFormSubmit = function() {
    $('#YouTubeSearchForm').submit(function(event){
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('#search-term');
      const query = queryTarget.val();
      $('#search-term').val('');
      api.fetchVideos(query, (response) => {
        let decRes = decorateResponse(response);
        store.setVideos(decRes);
        render();
      });
    });  
  };
  const bindEventListeners = function() {
    handleFormSubmit();
  }

  return {
    render,
    bindEventListeners
  };
}());