module('Inline', {
    setup: function(){
        this.component = $('<div data-date="12-02-2012"></div>')
                        .appendTo('#qunit-fixture')
                        .datepicker({format: "dd-MM-yyyy"});
        this.dp = this.component.data('datepicker')
        this.widget = this.dp.widget;
    },
    teardown: function(){
        this.widget.remove();
    }
});


test('Picker gets date/viewDate from data-date attr', function(){
    datesEqual(this.dp.date, UTCDate(2012, 1, 12));
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 12));
});


test('Not visible after init', function(){
    ok(!this.widget.is(':visible'));
});

test('update', function(){
    this.dp.update('13-03-2012')
    datesEqual(this.dp.date, UTCDate(2012, 2, 13));
});
