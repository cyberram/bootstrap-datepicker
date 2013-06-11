module('Calendar Weeks', {
    setup: function(){
        this.input = $('<input type="text">')
            .appendTo('#qunit-fixture')
            .val('2013-01-14')
            .datepicker({
                format: 'yyyy-MM-dd',
                calendarWeeks: true
            })
            .focus(); // Activate for visibility checks
        this.dp = this.input.data('datepicker')
        this.widget = this.dp.widget;
    },
    teardown: function(){
        this.widget.remove();
    }
});

test('adds cw header column', function(){
    var target = this.widget.find('.datepicker-days thead th:first-child');
    ok(target.hasClass('cw'), 'First column heading is from cw column');
});

test('adds calendar week cells to each day row', function(){
    var target = this.widget.find('.datepicker-days tbody tr');

    expect(target.length);
    target.each(function(i){
        var t = $(this).children().first();
        ok(t.hasClass('cw'), "First column is cw column");
    });
});

test('displays correct calendar week', function(){
    var target = this.widget.find('.datepicker-days tbody tr');

    expect(target.length);
    target.each(function(i){
        var t = $(this).children().first();
        equal(t.text(), i+1, "Displays correct calendar weeks");
    });
});

test('it prepends column to switcher thead row', function(){
    var target = this.widget.find('.datepicker-days thead tr:first-child');
    equal(target.children().length, 4, 'first row has 4 columns');
    ok(target.children().first().hasClass('cw'), 'cw column is prepended');
});
