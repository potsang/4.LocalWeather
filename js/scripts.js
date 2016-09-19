var winter = "https://c4.staticflickr.com/9/8282/28752006035_a0795f8b4b_k.jpg";
var summer = "https://c1.staticflickr.com/9/8599/28646782432_957a26eba1_h.jpg";
var spring = "https://c4.staticflickr.com/9/8573/28752006915_9bf46ef9d1_h.jpg";
var fall = "https://c3.staticflickr.com/9/8573/28646782842_ca2982a32c_h.jpg";

var weatherIcon = [
  "https://c1.staticflickr.com/9/8784/28709240992_2fdf6667bd_t.jpg",
  "https://c1.staticflickr.com/9/8784/28709240992_2fdf6667bd_t.jpg",
  "https://c1.staticflickr.com/9/8784/28709240992_2fdf6667bd_t.jpg",
  "https://c6.staticflickr.com/9/8788/28199409933_bf464cfdf5_t.jpg",
  "https://c6.staticflickr.com/9/8788/28199409933_bf464cfdf5_t.jpg",
  "https://c8.staticflickr.com/9/8099/28814518895_459166c403_t.jpg",
  "https://c8.staticflickr.com/9/8099/28814518895_459166c403_t.jpg",
  "https://c1.staticflickr.com/9/8617/28529950680_2aff59fa36_t.jpg",
  "https://c1.staticflickr.com/9/8617/28529950680_2aff59fa36_t.jpg",
  "https://c5.staticflickr.com/9/8193/28782845516_51f6aeb6ea_t.jpg",
  "https://c5.staticflickr.com/9/8193/28782845516_51f6aeb6ea_t.jpg",
  "https://c2.staticflickr.com/9/8753/28814630145_67168301b7_t.jpg",
  "https://c2.staticflickr.com/9/8753/28814630145_67168301b7_t.jpg",
  "https://c5.staticflickr.com/9/8418/28782904276_bb4fe6bffb_t.jpg",
  "https://c1.staticflickr.com/9/8720/28709562072_04915e9567_t.jpg",
  "https://c5.staticflickr.com/9/8776/28782926796_88e94d5747_t.jpg",
  "https://c5.staticflickr.com/9/8776/28782926796_88e94d5747_t.jpg",
  "https://c8.staticflickr.com/9/8099/28814518895_459166c403_t.jpg",
  "https://c8.staticflickr.com/9/8099/28814518895_459166c403_t.jpg",
  "https://c8.staticflickr.com/9/8834/28199669583_374aaf489b_t.jpg",
  "https://c5.staticflickr.com/8/7793/28530152340_5840b441f5_t.jpg",
  "https://c8.staticflickr.com/9/8834/28199669583_374aaf489b_t.jpg",
  "https://c8.staticflickr.com/9/8834/28199669583_374aaf489b_t.jpg",
  "https://c2.staticflickr.com/9/8336/28199730193_67659894a6_t.jpg",
  "https://c2.staticflickr.com/9/8336/28199730193_67659894a6_t.jpg",
  "https://c5.staticflickr.com/9/8776/28782926796_88e94d5747_t.jpg",
  "https://c3.staticflickr.com/8/7610/28709720842_f9c39e2270_t.jpg",
  "https://c4.staticflickr.com/9/8848/28814841195_b957ec2dec_t.jpg",
  "https://c6.staticflickr.com/9/8774/28737996581_8c3c6ec57e_t.jpg",
  "https://c4.staticflickr.com/9/8848/28814841195_b957ec2dec_t.jpg",
  "https://c6.staticflickr.com/9/8774/28737996581_8c3c6ec57e_t.jpg",
  "https://c8.staticflickr.com/9/8358/28199817823_b85a8f795f_t.jpg",
  "https://c6.staticflickr.com/9/8775/28787202245_a408bbf142_t.jpg",
  "https://c6.staticflickr.com/9/8775/28787202245_a408bbf142_t.jpg",
  "https://c8.staticflickr.com/9/8767/28738080991_6e8100ed23_t.jpg",
  "https://c6.staticflickr.com/9/8788/28199409933_bf464cfdf5_t.jpg",
  "https://c6.staticflickr.com/9/8775/28787202245_a408bbf142_t.jpg",
  "https://c7.staticflickr.com/8/7529/28783216206_b74e7a513f_t.jpg",
  "https://c7.staticflickr.com/8/7529/28783216206_b74e7a513f_t.jpg",
  "https://c1.staticflickr.com/8/7751/28530454320_a94ef0c753_t.jpg",
  "https://c5.staticflickr.com/9/8193/28782845516_51f6aeb6ea_t.jpg",
  "https://c1.staticflickr.com/9/8720/28709562072_04915e9567_t.jpg",
  "https://c1.staticflickr.com/9/8720/28709562072_04915e9567_t.jpg",
  "https://c1.staticflickr.com/9/8720/28709562072_04915e9567_t.jpg",
  "https://c6.staticflickr.com/9/8774/28737996581_8c3c6ec57e_t.jpg",
  "https://c2.staticflickr.com/9/8723/28815069705_7783967da7_t.jpg",
  "https://c1.staticflickr.com/9/8720/28709562072_04915e9567_t.jpg",
  "https://c5.staticflickr.com/9/8680/28783355716_0fd2bc046f_t.jpg"
];

var iconNotAvailable = "https://c8.staticflickr.com/9/8782/28200140343_6fd8c04a46_t.jpg";

function getWeatherIcon(code) {
  if (code == 3200) {
    return iconNotAvailable;
  }

  return weatherIcon[code];
}

var tempUnit = "f";

function getBodyImageUrl(temp, unit) {
  if (unit == "c") {
    temp = (temp * 9 / 5) + 32;
  }

  if (temp <= 39) {
    return winter;
  } else if (temp > 39 && temp <= 65) {
    return spring;
  } else if (temp > 65 && temp <= 80) {
    return fall;
  } else {
    return summer;
  }
}

function loadWeatherWithCurrentLocation() {
  $.getJSON('https://freegeoip.net/json/') 
       .done (function(location)
       {
          var loc = location.latitude + "," + location.longitude;
          loadWeather(loc, tempUnit);
       });  
}

$(document).ready(function() {
  loadWeatherWithCurrentLocation();
  
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });

  $("#temp-btn").on("click", function() {
    if (tempUnit == "f")
      tempUnit = "c";
    else if (tempUnit == "c")
      tempUnit = "f";
    
    loadWeatherWithCurrentLocation();
  });
});

function loadWeather(loc, unit) {
  $.simpleWeather({
    location: loc,
    woeid: "",
    unit: unit,
    success: function(weather) {
      country = weather.country;
      region = weather.region;
      city = weather.city;
      temp = weather.temp;
      code = weather.code;
      currently = weather.currently;

      $("#location").text(city + "," + region + " " + country);
      $("#icon").attr("src", getWeatherIcon(code));
      $("#currently").text(currently);
      $("#temp").html(temp + "&deg;" + tempUnit.toUpperCase());
      $("body").css("background-image", "url(" + getBodyImageUrl(temp, tempUnit) + ")");
    },
    error: function(error) {
      $("#location").text(error);
    }
  });
}