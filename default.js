
var goToFigma = function() {
    var password = $('#password-field').val();
    var passhash = CryptoJS.MD5(password).toString();

    $.get(`${passhash}.txt`, function(data) {
        if (data.startsWith('https://')) {
            window.location.href = data;
        }
    }).fail(function() {
        $('#password-field').css({
            color: '#e74c3c'
        });
    });
};

$(document).on('keyup', '#password-field', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        goToFigma();
    } else {
        $('#password-field').css({
            color: 'rgba(0,0,0,.87)'
        });
    }
});


$(document).on('click', '.go-to-figma', function() {
    goToFigma();
});
