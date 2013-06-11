module('Mouse Navigation (All)', {
    setup: function(){
        this.input = $('<input type="text">')
                        .appendTo('#qunit-fixture')
                        .datepicker({format: "dd-mm-yyyy"})
                        .focus(); // Activate for visibility checks
        this.dp = this.input.data('datepicker')
        this.widget = this.dp.widget;
    },
    teardown: function(){
        this.widget.remove();
    }
});

test('Clicking datepicker should not hide datepicker', function(){
    ok(this.widget.is(':visible'), 'Widget is visible');
    this.widget.trigger('mousedown');
    ok(this.widget.is(':visible'), 'Widget is still visible');
});

test('Clicking outside datepicker should hide datepicker', function(){
    var $otherelement = $('<div />');
    $('body').append($otherelement);

    ok(this.widget.is(':visible'), 'Widget is visible');
    this.input.trigger('click');
    ok(this.widget.is(':visible'), 'Widget is still visible');

    $otherelement.trigger('mousedown');
    ok(this.widget.is(':not(:visible)'), 'Widget is hidden');

    $otherelement.remove();
});
