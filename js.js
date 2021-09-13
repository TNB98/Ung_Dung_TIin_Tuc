 //Lấy tin mới
 $(document).ready(function () {
    fetch('https://gnews.io/api/v4/search?q=example&token=015b87f7d0d1602e669bc18c8952e890&max=10&page=5&lang=en')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < 5; i++) {
                var b = data.articles[i];
                var a = "<div class=\"row\"> <img src =\"" + b.image + "\" class=\"col-12 col-md-3\"> <div class=\"col-12 col-md-9\"><div class=\"a-link\"><a href=\"" + b.url + "\" target=\"_blank\"><p class=\"link-url\">" + b.url + "</p></a></div> <p>" + b.publishedAt + "</p   <p>" + b.content + "</p> </div ></div > ";
                $("#show").append(a);
            }
            console.log(data);
        });
});

//Bắn ra màn hình tìm kiếm và reset hiển thị các tin tìm đc
$(document).ready(function () {
    $("#seach").click(function () {
        $(".back-drop").fadeToggle();
        $(".drop").fadeToggle();
    });
    $(".close").click(function () {
        $(".back-drop").fadeToggle();
        $(".drop").fadeToggle();
    });
    $("#tim").click(function () {
        $(".back-drop").fadeToggle();
        $(".drop").fadeToggle();
        tim();
    });
    function tim() {
        $("#show").empty("*");
        fetch('https://gnews.io/api/v4/search?q=' + $("#timKiem").val() + '&token=015b87f7d0d1602e669bc18c8952e890&max=5')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (var i = 0; i < 5; i++) {
                    var b = data.articles[i];
                    var a = "<div class=\"row\"> <img src =\"" + b.image + "\" class=\"col-3\"> <div class=\"col-9\"><a href=\"" + b.url + "\" target=\"_blank\"><p>" + b.url + "</p></a> <p>" + b.publishedAt + "</p   <p>" + b.content + "</p> </div ></div > ";
                    $("#show").append(a);
                }
                console.log(data);
            });
    }
});

