console.log('in client.js');

$(document).ready(onReady);

function onReady(){
  console.log('doc ready');
  $('#add-song').on('click', addSong);
}

function addSong(){
  console.log('in add song');
  var songName= $('#song-name').val();
  console.log('songName-->',  songName);

  var objectToSend = {
    name: songName
  };

  $.ajax({
    method: 'POST',
    url: '/song',
    data: objectToSend,
    success: function(response){
      console.log(response);
    }
  });
}
