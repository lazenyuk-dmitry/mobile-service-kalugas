$(document).ready(function () {
    //$('input[type="radio"]').styler();
    /*============ styler form ==============*/
    function checkedParrent(elem) {
        $(elem).filter("[checked]").parent('label').addClass('checked');
        $(elem).css('display', 'none');
        $(elem).on('click', function (e) {
            e.stopImmediatePropagation();
            $(elem).parent('label').removeClass('checked');
            $(this).parent('label').addClass('checked');
        })
    }

    checkedParrent('input[name="product"]');
    checkedParrent('input[name="model"]');
    checkedParrent('input[name="color"]');
    checkedParrent('input[name="problem"]');
    /*======= End of styler form ============*/

});