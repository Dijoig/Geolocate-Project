var $btn1 = $('#btn1');
var $btn2 = $('#btn2');
var $btn3 = $('#btn3');

$btn1.click(function () {
  
  $.ajax({
    url: 'php/geocodeAdress.php',
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#lat1').val(),
      lng: $('#lng1').val()
    },
    success: function(result) {
      console.log(result);
      
      if (result.status.name == 'ok') {
        $('#first').html(result['data']['street']);
        $('#second').html(result['data']['locality']);
        $('#third').html(result['data']['countryCode']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error, try other coordinates');
    }
    
  });
});



$btn2.click(function () {
  
  $.ajax({
    url: 'php/ocean.php',
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#lat2').val(),
      lng: $('#lng2').val()
    },
    success: function(result) {
      console.log(result);
      
      if (result.status.name == 'ok') {
        $('#first').html(result['data']['name']);
        $('#second').html(' ');
        $('#third').html(' ');
      }
    },
    
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error, try other coordinates');
    }
    
  });
});

$btn3.click(function () {
  
  $.ajax({
    url: 'php/placename.php',
    type: 'POST',
    dataType: 'json',
    data: {
      postalCode: $('#postal1').val(),
      country: $('#country1').val()
    },
    success: function(result) {
      console.log(result);
      
      if (result.status.name == 'ok') {
        $('#first').html(result['data'][0]['placeName']);
        $('#second').html(result['data'][1]['placeName']);
        $('#third').html(result['data'][2]['placeName']);
      }
    },
    
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error, try other country or postalcode');
    }
    
  });
});


