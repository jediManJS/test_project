$(document).ready(function() {

    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $("body").addClass("sticky-header");
        } else {
            $("body").removeClass("sticky-header");
        }
    });

    $(".message-text").on("keyup", function(){
        var charsLen = $(this).val().length;
        if (charsLen > 2000) {
            alert("Sorry maximum size 2000 characters :(");
            $(this).addClass("form-error");
        } else {
            $(this).removeClass("form-error");
            $('.count-chars').text(charsLen);
        }
    });

    var contactForm = $("#contactForm");

    contactForm.submit(function (event) {

        var getFields = $(this).find("input, select, textarea");
        console.log(getFields);

        var collectData = {
            email: 'vshvdbj@jshvh',
            name: 'sygydgvd',
            phone: '6237423874'
        };

        $.ajax({
            url: 'https://httpbin.org/post',
            method: 'POST',
            data: collectData
        }).done(function (response) {
            console.log("Done ", response);
        }).fail(function (error) {
            console.log("Error ", error)
        });

        event.preventDefault();
    });


    $(".dropdown-toggle").dropdown();

});