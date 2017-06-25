describe('spies', function () {
    var foo;
    var bar;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, 'setBar');
        foo.setBar(123);
    });


    it('should track spy', function () {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it('should track spy with value', function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
    });

    it('should return spy value', function () {
        spyOn(foo, 'getBar').and.returnValue(456);
        expect(foo.getBar()).toBe(456);

    });

    it('should return value from fake function', function () {
        spyOn(foo, 'getBar').and.callFake(function () {
            return 946;
        });

        expect(foo.getBar()).toBe(946);

    });


});
