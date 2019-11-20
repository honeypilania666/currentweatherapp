

$(document).ready(function(){
	$('#weather').hide();
	$('.short').hide();
	if (navigator.geolocation){
		var currentPosition = '';
		navigator.geolocation.getCurrentPosition(function(position){
			currentPosition = position;

			var latitude = currentPosition.coords.latitude;
			var longitude = currentPosition.coords.longitude;

			var url = 'http://api.weatherstack.com/current?access_key=45d57aed7636fb8e8c6886007352bdf0&units=m&query=';

			$.getJSON(url + latitude + ','+ longitude, function(data){
			
			var data = JSON.stringify(data);
			var json = JSON.parse(data);
			console.log(data)

			var country = json.location.country;
			var city = json.location.name;
			var state = json.location.region;

			var temp = json.current.temperature;

			var wind = json.current.wind_speed;
			var humidity = json.current.humidity;
			var time = json.location.localtime.split(' ')[1];

			var cloud = json.current.weather_descriptions[0];


			$('#weather').show();
			$('.short').show();
			$('#weather').html(city + ', '+ state + ', '+ country);

			if(cloud='Mist'){
				$('.grey-jumbo').css({
					backgroundImage: 'url(mist.jpg)'
				}) 
			}
			if(cloud='haze'){
				$('.grey-jumbo').css({
					backgroundImage: 'url(skyhaze.jpg)'
				}) 
			}
			if(cloud='rainy'){
				$('.grey-jumbo').css({
					backgroundImage: 'url(rainy.jpg)'
				}) 
			}
			if(cloud='sunny'){
				$('.grey-jumbo').css({
					backgroundImage: 'url(sunset.jpg)'
				}) 
			}
			
			
			


			$('#info1').html(time);
			$('#info2').html('Wind ' + wind + 'Kph');
			$('#info3').html(temp + ' <sup>o</sup>C');

			$('#info5').html(cloud);
			$('#info6').html('Humidity '+ humidity + ' %');
			})

		});
	}
});