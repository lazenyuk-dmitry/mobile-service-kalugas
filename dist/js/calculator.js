$(document).ready(function () {
/*============ output list ==============*/
    var scrollTime = 1200;
// output priceList
    var prodBtn = $('[name="product"]');
    var modelBtn;
    var colorBtn;
    var prodName;
    function OutputModel() {
        $('.select-problem').removeClass('visible');
        $('.select-color').removeClass('visible');
        $('.problem-form__price-wrap').removeClass('visible');
        prodName = prodBtn.filter(':checked').val();
        var outputBox = $('.select-model__btn-group');
        outputBox.empty();
        for (var name in priceList[prodName].model){
            var elem = '<label class="btn select-model__btn">'+ name +'\n' +
                            '<input type="radio" name="model" value="'+ name +'"> </label>';
            outputBox.append(elem);
        }
        // img
        $('.problem-form__center-img').attr('src', priceList[prodName].img)

        checkedRadio('input[name="product"]');
        checkedRadio('input[name="model"]');
        $('input[name="product"]').on('change', function () {
            $('.select-model').addClass('visible');
            $('html, body').stop(true).animate({
                scrollTop: $(".select-model").offset().top -20
            }, scrollTime);
        });
        $('input[name="model"]').on('change', function () {
            $('.select-color').addClass('visible');
            $('html, body').stop(true).animate({
                scrollTop: $(".select-color").offset().top -20
            }, scrollTime);
        });
        $('.js-price-output').html('');
        modelBtn = $('[name="model"]');
        modelBtn.on('change', OutputColor);
        modelBtn.on('change', OutputProblem);
    }
    OutputModel();
    prodBtn.on('change', OutputModel);

//output color
    var modelName;
    function OutputColor() {
        $('.select-problem').removeClass('visible');
        $('.problem-form__price-wrap').removeClass('visible');
        modelName = modelBtn.filter(':checked').val();
        var outputBox = $('.select-color__btn-group');
        outputBox.empty();
        var arr = priceList[prodName].model[modelName].color;
        for (var name in arr){
             var elem = '<label class="btn select-color__btn">\n' +
                            '<i class="select-color__btn_circle" style="background-color: '+ arr[name].value +'"></i>\n' +
                                '<input type="radio" name="color" value="'+ arr[name].name +'">\n'+
                                    '<br>'+ arr[name].name +'</label>';

             outputBox.append(elem);
        }
        checkedRadio('input[name="color"]');
        $('input[name="color"]').on('change', function () {
            $('.select-problem').addClass('visible');
            $('html, body').stop(true).animate({
                scrollTop: $(".select-problem").offset().top -20
            }, scrollTime);
        });
        //colorBtn = $('[name="color"]');
        //colorBtn.on('change', OutputProblem);
    }

//output problem
    function OutputProblem() {
        modelName = modelBtn.filter(':checked').val();
        var outputBox = $('.checked-problem');
        outputBox.empty();
        var arr = priceList[prodName].model[modelName].price;
        for (var name in arr){
            if(arr[name][1] === 'Original'){
                var elem = '<label class="btn checked-problem__item">'+ arr[name][0] +'\n' +
                            '<span class="checked-problem__link">Original</span>'+
                                '<input type="checkbox" name="problem" value="'+ arr[name][0] +'" data-price="'+ arr[name][2] +'"></label>';
            }
            else{
                var elem = '<label class="btn checked-problem__item">'+ arr[name][0] +'\n' +
                    '<input type="checkbox" name="problem" value="'+  arr[name][0] +'" data-price="'+ arr[name][1] +'"></label>';
            }

            outputBox.append(elem);
        }
        checkedCheckbox('input[name="problem"]');
        $('input[name="problem"]').on('change', function () {
            $('.problem-form__price-wrap').addClass('visible');
            /// problem checked
            var priceTotal = 0;
            var countProblem = 0;
            $('input[name="problem"]').filter(':checked').each(function () {
                priceTotal += $(this).data('price');
                countProblem ++;
            });
            //scroll
            if(priceTotal === 0){
                $('.problem-form__price').css('display', 'none')
            }
            else{
                $('.problem-form__price').css('display', 'block')
            }
            if(countProblem !== 0 ){
                $('html, body').stop(true).animate({
                    scrollTop: $(".problem-form__price-wrap").offset().top -20
                }, scrollTime);
            }
            else{
                $('.problem-form__price-wrap').removeClass('visible');
            }

            $('.js-price-output').html(' от ' + priceTotal);
        });
    }
    /*======= End of output list ============*/
    function checkedRadio(elem) {
        $(elem).filter(":checked").parent('label').addClass('checked');
        $(elem).css('display', 'none');
        $(elem).on('click', function (e) {
            e.stopPropagation();
            $(elem).parent('label').removeClass('checked');
            $(this).parent('label').addClass('checked');
        })
    }
    function checkedCheckbox(elem) {
        $(elem).filter(":checked").parent('label').addClass('checked');
        $(elem).css('display', 'none');
        $(elem).on('click', function (e) {
            e.stopPropagation();
            $(this).parent('label').toggleClass('checked');
        })
    }
});
//# sourceMappingURL=maps/calculator.js.map
