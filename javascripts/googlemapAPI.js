$(document).ready(function(){
  $(".maps").not(":first").hide();

  var latlng = new google.maps.LatLng(34.711843,135.498380);
  // Other options for the map, pretty much selfexplanatory
  var mapOptions = {
    zoom     : 18    , // 拡大比率
    center   : latlng, // 表示枠内の中心点
    mapTypeId: google.maps.MapTypeId.ROADMAP, // 表示タイプの指定
    scrollwheel: false  //スクロールでズームされるのを無効
  };

  var map = new google.maps.Map(document.querySelector(".maps"), mapOptions);

  $(".menu a").on("click",function(){
    var num = $(this).index(this);
    $(".maps.current").fadeOut(function(){
      $(".maps.current").removeClass("current");
      $(".maps").eq(num).addClass("current").fadeIn();
    });
  });
  
  
  // スタイルのカスタマイズ
  var styleOptions = [
    {
      featureType: 'all',
      elementType: 'all',
      stylers:[
        { hue: "#e0dcd1" }, // 色
        { lightness: -5 },　// 明度
        { saturation: -90 } // 彩度
      ]
    }
  ];
  
  var styleMapCompanyName = { name: '株式会社ラジカルオプティ' };
  var styleMapOptions = new google.maps.StyledMapType(styleOptions, styleMapCompanyName);
  map.mapTypes.set('sample', styleMapOptions);
  map.setMapTypeId('sample');
  

  var marker = new google.maps.Marker({
      position: { lat: 34.711843, lng: 135.498380},
      title: "popup-title",
      icon: "images/marker.png",
      map: map
  });
  
  
});