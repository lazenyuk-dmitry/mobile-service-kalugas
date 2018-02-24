$(document).ready(function () {
    /*============ styler form ==============*/

    /*======= End of styler form ============*/

    /*============ Events ==============*/

    /*======= End of Events ============*/
    /*============ Animate ==============*/
    new WOW().init();
    /*======= End of Animate ============*/

    /*============ MODAL ==============*/
    $('.js-simple-modal').magnificPopup({
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

    /*============ Send Form ==============*/
    // form validate
    var pattern = {
        name: /^[А-Яа-яЁёa-zA-Z\s]{1,40}$/u,
        email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        msg: /[\s\S\D\d]/iu,
        phone: /^[- +0-9()]{1,40}$/
    };
    function validInput(elem, pName){
        var valid = false;
        if( pattern[pName].test(elem.val()) ){
            elem.removeClass('error');
            valid = true;
        }
        else{
            elem.addClass('error');
        }
        return valid;
    }

    $('#vacancies-form').on('submit',function () {
        if(validInput($(this).children('[name="name"]'), 'name') * validInput($(this).children('[name="phone"]'), 'phone')){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: "send-script/vacancies-form.php", //путь до php фаила отправителя
                data: form_data,
                success: function() {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    $.magnificPopup.close();
                    $('#vacancies-form').trigger('reset');
                }
            });
        }
        return false;
    });
    $('#cooperation-form').on('submit',function () {
        if(validInput($(this).children('[name="name"]'), 'name') * validInput($(this).children('[name="phone"]'), 'phone')){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: "send-script/cooperation-form.php", //путь до php фаила отправителя
                data: form_data,
                success: function() {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    $.magnificPopup.close();
                    $('#cooperation-form').trigger('reset');
                }
            });
        }
        return false;
    });
    $('#order-form').on('submit',function () {
        if(validInput($(this).children('[name="name"]'), 'name') * validInput($(this).children('[name="phone"]'), 'phone')){
            var form_data =[];
            //json
            var chekedProblemArr = '';
            $('[name="problem"]').filter(':checked').each(function () {
                chekedProblemArr += $(this).val() +'<br>';
            });
            form_data.push({
                name: 'name',
                value: $(this).children('[name="name"]').val()
            },{
                name: 'phone',
                value: $(this).children('[name="phone"]').val()
            },{
                name: 'product',
                value: $('[name="product"]').filter(':checked').val()
            },{
                name: 'model',
                value: $('[name="model"]').filter(':checked').val()
            },{
                name: 'color',
                value: $('[name="color"]').filter(':checked').val()
            },{
                name: 'problem',
                value: chekedProblemArr
            },{
                name: 'totalPrice',
                value: $('.problem-form__price > span').html()
            });

            console.log(chekedProblemArr);
            $.ajax({
                type: "POST", //Метод отправки
                url: "send-script/problem-form.php", //путь до php фаила отправителя
                data: form_data,
                success: function() {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    $.magnificPopup.close();
                    $('#order-form').trigger('reset');
                }
            });
        }
        return false;
    })
    /*======= End of Send Form ============*/
});