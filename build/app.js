var contactForm = $("#contactForm");

contactForm.submit(function (event) {

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