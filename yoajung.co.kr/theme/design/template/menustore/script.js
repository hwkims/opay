$('#header').load("/header.html");
$('#footer').load("/footer.html");

var area0 = ["시/도","서울","인천","대전","광주","대구","울산","부산","경기","강원","충청도","충북","충남","전북","전남","경북","경남","제주도"];


$("select[name^=sido]").each(function() {
    $selsido = $(this);
    $.each(eval(area0), function() {
        $selsido.append("<option value='"+this+"'>"+this+"</option>");
    });
});
$('.header_menustore').addClass('on')

$(window).scroll(function(){
        var herecon = $(".con2").offset().top-10;
        var herecon2 = $(".con4").offset().top-10;
        if(herecon < $(document).scrollTop()  && herecon2 >= $(document).scrollTop()){
            $('.con1 .con7_mid_top_cate').removeClass('on')
            $(".con1 .con7_mid_top .con7_mid_top_cate:nth-child(1)").addClass('on')
        }
        else if(herecon2 < $(document).scrollTop() ){
            $('.con1 .con7_mid_top_cate').removeClass('on')
            $(".con1 .con7_mid_top .con7_mid_top_cate:nth-child(2)").addClass('on')
        }
        else{
            $('.con1 .con7_mid_top_cate').removeClass('on')
        }
})

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}    
let tlclick = gsap.timeline({
    defaults: { duration: 0.8, ease: "power1.out" },
});
tlclick.from(".con7_bottom_item_item", {
    yPercent:10,
    opacity:0,
},'< 30%')
$('#con7_bottom_2').hide();
$('#con7_bottom_3').hide();
$('.con7_mid_top_cate_item').on('click',function(){
    $('.con7_bottom_item_item').hide();

    $('#'+$(this).data('value')).show()
    tlclick.restart();
    $('.con7_mid_top_cate_item').removeClass('con7_mid_top_cate_on')

    $(this).addClass('con7_mid_top_cate_on')



})
$('.form_submit').on('click', function() {
    if ($('#tel12').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }
    if ($('.form_agree01').is(':checked')) {
        $.ajax({
            url: "/bbs/mail.php",
            type: "post",
            data: {
                name: $('#name2').val(),
                tel1: $('#tel12').val(),
                duration: $('#area2').val(),
                choice: $('#budget2').val(),
                form_index: $('#form_index').val(),
            }
        }).done(function(data) {
            alert("문의양식이 전송 되었습니다.")
            $('#name2').val('')
            $('#tel12').val('')
            $('#area2').val('')
            $('#budget2').val('')
            $('#form_index').val('')
        });}
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})

const swiper5 = new Swiper('.con7_mid_swiper_1 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
    autoplay: {
        delay: 1250,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 45
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

});

$(window).on('load', function(){
    $('section > img').each(function() {
        var imageWidth = $('html').width()*$(this).prop('naturalWidth')/2020;    // Current image width
        var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

        var percent =(imageWidth/parentsWidth) *100
        $(this).css('width',percent+'%')

    });


    $('section div').each(function() {
        // if($(this).children('img:visible').length>1){
        //     var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/2020;    // Current image width
        //     var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산
        //     var percent =(imageWidth/parentsWidth) *100
        //     $(this).css('width',percent+'%')
        //
        // }
        if( $(this).children('img:visible').length==1 && $(this).children('video:visible').length==0 &&$(this).children('p:visible').length==0 &&$(this).children('iframe:visible').length==0){

            var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/2020;    // Current image width
            var windowWidth = 2020;    // pc 기준 2020px 으로 계산

            var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

            //div 안에 div 또 있을경우 퍼센트 보정 계산식
            var percent =(imageWidth/parentsWidth) *100
            // * (parentsWidth/windowWidth*100) / 100
            if($(this).css('display')!='flex'){
                $(this).css('width',percent+'%')
                $(this).css('display','flex')
                $(this).css('justify-content','center')
                $(this).css('align-items','center')
            }

            //image 가 reveal class 가지고 있을때는 이미지에 vw 값 넣어주기 (vw[viewport width] 는 절대값이라 windowWidth 로 계산)
            if($(this).children('img').hasClass('reveal')){
                percent  =(imageWidth/$('html').width()) *100
                $(this).children('img').css('width',percent+'vw')
                $(this).css('overflow','hidden')
            }else{
                $(this).children('img').css('width','100%')

            }
        }

    });




    let tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl.from(".main_top_2nd_p_1", {
        yPercent:-101,
    },'< 30%').from(".main_top_2nd_p_2", {
        yPercent:101,
    },'< 30%')


    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl2.from(".con2_top_img", {
        yPercent:101,
    },'< 30%')
    
    
    
        var randdom_1 = null;
    var acount =null;
    function viewmore(){
        randdom_1 = 'a'+Math.floor(Math.random() * 10001);
        

        $('.con7_bottom_item_1:visible').get().forEach(function(a){
            $(a).addClass(randdom_1)
            $(a).hide();
        })

        acount=8;
        for(var i=0; i< 8; i++){
            $($('.'+randdom_1)[i]).show();
        }    
        if($('.con7_bottom_item_1:visible').length==$('.'+randdom_1).length) $('.viewmore_1').hide()
        else $('.viewmore_1').show()
    }
    viewmore();
    $('.viewmore_1').on('click',function(){
        for(var i=acount; i< acount+4; i++){
        $($('.'+randdom_1)[i]).show();
        }
        acount+=4;
        if($('.con7_bottom_item_1:visible').length==$('.'+randdom_1).length) $('.viewmore_1').hide()
        else $('.viewmore_1').show()
        console.log(acount)
    })
    
    
    
    
            var randdom_2 = null;
    var acount_2 =null;
    function viewmore2(){
        randdom_2 = 'a'+Math.floor(Math.random() * 10001);
        

        $('.con7_bottom_item_2:visible').get().forEach(function(a){
            $(a).addClass(randdom_2)
            $(a).hide();
        })

        acount_2=8;
        for(var i=0; i< 8; i++){
            $($('.'+randdom_2)[i]).show();
        }    
        if($('.con7_bottom_item_2:visible').length==$('.'+randdom_2).length) $('.viewmore_2').hide()
        else $('.viewmore_2').show()
    }
    viewmore2();
    $('.viewmore_2').on('click',function(){
        for(var i=acount_2; i< acount_2+4; i++){
        $($('.'+randdom_2)[i]).show();
        }
        acount_2+=4;
        if($('.con7_bottom_item_2:visible').length==$('.'+randdom_2).length) $('.viewmore_2').hide()
        else $('.viewmore_2').show()
        console.log(acount_2)
    })
    
    
    
                var randdom_3 = null;
    var acount_3 =null;
    function viewmore3(){
        randdom_3 = 'a'+Math.floor(Math.random() * 10001);
        

        $('.con7_bottom_con_item_3:visible').get().forEach(function(a){
            $(a).addClass(randdom_3)
            $(a).hide();
        })

        acount_3=4;
        for(var i=0; i< 4; i++){
            $($('.'+randdom_3)[i]).show();
        }    
        if($('.con7_bottom_con_item_3:visible').length==$('.'+randdom_3).length) $('.viewmore_3').hide()
        else $('.viewmore_3').show()
    }
    viewmore3();
    $('.viewmore_3').on('click',function(){
        for(var i=acount_3; i< acount_3+4; i++){
        $($('.'+randdom_3)[i]).show();
        }
        acount_3+=4;
        if($('.con7_bottom_con_item_3:visible').length==$('.'+randdom_3).length) $('.viewmore_3').hide()
        else $('.viewmore_3').show()
        console.log(acount_3)
    })
    
    
    
                    var randdom_4 = null;
    var acount_4 =null;
    function viewmore4(){
        randdom_4 = 'a'+Math.floor(Math.random() * 10001);
        

        $('.con7_bottom_con_item_4:visible').get().forEach(function(a){
            $(a).addClass(randdom_4)
            $(a).hide();
        })

        acount_4=4;
        for(var i=0; i< 4; i++){
            $($('.'+randdom_4)[i]).show();
        }    
        if($('.con7_bottom_con_item_4:visible').length==$('.'+randdom_4).length) $('.viewmore_4').hide()
        else $('.viewmore_4').show()
    }
    viewmore4();
    $('.viewmore_4').on('click',function(){
        for(var i=acount_4; i< acount_4+4; i++){
        $($('.'+randdom_4)[i]).show();
        }
        acount_4+=4;
        if($('.con7_bottom_con_item_4:visible').length==$('.'+randdom_4).length) $('.viewmore_4').hide()
        else $('.viewmore_4').show()
        console.log(acount_4)
    })

    
    
    
    
    
    
    $('.con17_mid_map_search_top > div').on('click',function(){
    $('.con17_mid_map_search_top > div').removeClass('on2')
    $('.con17_mid_map_search_top > div').addClass('off2')
    $(this).addClass('on2')
    $(this).removeClass('off2')
    $('.con17_mid_map_search_mid > input').addClass('hide')
    $('.'+$(this).data('map')).removeClass('hide')

})


  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };
var infowindow = new kakao.maps.InfoWindow({
    zIndex: 1
});
  // 지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();



  var positions = [];
array.forEach(function(a){
     var posiObj =    {
              title: '',
              address:'',
    };    
    posiObj.title = a.wr_subject;
    posiObj.address = a.wr_4;
    positions.push(posiObj)
})

  var positions2 = [];
  // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
  var bounds = new kakao.maps.LatLngBounds(); //추가한 코드

  positions.forEach(function (position,index) {
         var posiObj =    {
                  title: '',
                  y: '',
                  x: '',
                  address:'',
                  marker:null,
        };
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(position.address, function(result, status) {
        posiObj.y = result[0].y;
        posiObj.x = result[0].x;
        posiObj.title = position.title;
        posiObj.address = position.address;
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var imageSrc = '/images/c_08.png', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(55, 65), // 마커이미지의 크기입니다
            imageOption = {
                offset: new kakao.maps.Point(27, 69)
            }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

          
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
            image: markerImage // 마커이미지 설정
        });
        marker.setMap(map); //추가한 코드
        posiObj.marker = marker;
        positions2.push(posiObj)
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.
          

        kakao.maps.event.addListener(marker, "click", function() {
            

            infowindow.close();
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
                '<div class="markerdesc" style="padding:5px;font-size:12px;">' + position.title + "</div>"
            );
            infowindow.open(map, marker);
        });
          
        setBounds(); //추가한 코드
      }
    });
  });
        const urlParams = new URL(location.href).searchParams;
const name = urlParams.get('searchKeyword');
    if(name != null && name != undefined){
    $('#direct').val(name)
//    markerMove(name)
//    ps.keywordSearch("휴게소 " + $('#direct').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf(name)>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
//        markerMove(name)
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }    
    }

function markerMove(placeName){
    if((positions2.filter(a=>a.title.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.title.indexOf(placeName)>-1) != null)|| 
      (positions2.filter(a=>a.address.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.address.indexOf(placeName)>-1) != null)){
        
        
        
    var x = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].x
    var y = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].y
    var title = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].title
    var locPosition = new kakao.maps.LatLng(y, x)
    var marker = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].marker
    map.setCenter(locPosition);
        infowindow.close();

          
        infowindow.setContent('<div class="markerdesc" style="padding:5px;font-size:12px;">' + title + "</div>");
        infowindow.open(map, marker);
    }
}

function markerMovebyaddress(placeName){
    if(positions2.filter(a=>a.address.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.address.indexOf(placeName)>-1) != null ){
    var x = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].x
    var y = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].y
    var title = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].title
    var locPosition = new kakao.maps.LatLng(y, x)
    var marker = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].marker
    map.setCenter(locPosition);
        infowindow.close();

          
        infowindow.setContent('<div class="markerdesc" style="padding:5px;font-size:12px;">' + title + "</div>");
        infowindow.open(map, marker);
    }
}



  function setBounds() { //추가한 함수
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
  }


// 지도에 마커를 표시하는 함수입니다
    
$('.sido1').on('change',function(){
    if ($('.sido1').val() == '' || $('.sido1').val() == null || $('.sido1').val() == '시/도') {
        $('.con11_mid_right_bottom_item').show();
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
//    ps.keywordSearch("휴게소 " + $('#location').val(), placesSearchCB);
    $('.con11_mid_right_bottom_item').hide();
    $('.noshop').hide();
    $('.con11_mid_right_bottom_item').get().forEach(function(a){
        if($(a).attr('class').indexOf($('.sido1').val())>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
    
})
    

$('#direct').on('change', function() {
    if ($('#direct').val() == '' || $('#direct').val() == null) {
        $('.store').show();
        $('.noshop').hide();
        markerMove($('#direct').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
//    ps.keywordSearch("휴게소 " + $('#direct').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf($('#direct').val())>-1)$(a).show()
        else{$(a).hide()}
    })
    markerMove($('#direct').val())

    if ($('.store:visible').length == 0) {
        markerMove($('#direct').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
    
})

$('#location').on('change', function() {
    if ($('#location').val() == '' || $('#location').val() == null) {
        $('.store').show();
        $('.noshop').hide();
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
//    ps.keywordSearch("휴게소 " + $('#location').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf($('#location').val())>-1)$(a).show()
        else{$(a).hide()}
    })
    markerMovebyaddress($('#location').val())

    if ($('.store:visible').length == 0) {
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
    
})

})


