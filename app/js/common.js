$(document).ready(function () {
    /*============ styler form ==============*/

    /*======= End of styler form ============*/

    /*============ Events ==============*/

    /*======= End of Events ============*/
    /*============ Animate ==============*/
    new WOW().init();
    /*======= End of Animate ============*/

    /*============ MODAL ==============*/
    $('.problem-form__order').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: false,
        closeOnBgClick: true,
        showCloseBtn: false
    });
    $('.modal-close').on('click', function (e) {
        e.stopPropagation();
        $.magnificPopup.close();
    });
    /*======= End of MODAL ============*/

    /*======== Preloader ========*/
    function preloaderHid() {
        document.querySelector('body').style.overflow = 'auto';
        $('.preloader').css('display', 'none')
    }
    setTimeout(preloaderHid, 100);
});