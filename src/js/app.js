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

        var jsonObj = {};

        $(getFields).each(function() {

            var id = $(this).attr("id");
            var fieldValue = $(this).val();

            jsonObj[id] = fieldValue;
        });
        var jsonData = JSON.stringify(jsonObj);

        $.ajax({
            url: 'https://httpbin.org/post',
            method: 'POST',
            data: jsonData
        }).done(function (response) {
            console.log("Done: ", response);
            contactForm.trigger("reset");
            alert("Contact Form submitted!!! Thank you.");
        }).fail(function (error) {
            console.log("Error: ", error)
        });

        event.preventDefault();
    });


    $(".dropdown-toggle").dropdown();

});