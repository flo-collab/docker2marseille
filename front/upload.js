console.log("message_test")


$('#upload_button').click(function(evt) {
    evt.preventDefault();
    var form_data = new FormData($('#form_up')[0]);
    console.log('formData')
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/up/post_csv/',
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function(evt) {
            
            console.log('Success!');
            window.location.href = "http://localhost:8080/index.html";
        },
    });
});
