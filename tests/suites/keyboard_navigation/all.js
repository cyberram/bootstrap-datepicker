module('Keyboard Navigation (All)', {
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

test('TAB hides picker', function(){
    var target;

    ok(this.widget.is(':visible'), 'Picker is visible');

    this.input.trigger({
        type: 'keydown',
        keyCode: 9
    });

    ok(this.widget.is(':not(:visible)'), 'Picker is hidden');
});
