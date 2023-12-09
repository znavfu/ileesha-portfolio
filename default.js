
var goToFigma = function() {
    var password = $('#password-field').val();
    var passhash = CryptoJS.MD5(password).toString();

    $.get(`${passhash}.txt`, function(data) {
        if (data.startsWith('https://')) {
            window.location.href = data;
        }
    });
};

$(document).on('keyup', '#password-field', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        goToFigma();
    }
});


$(document).on('click', '.go-to-figma', function() {
    goToFigma();
});
