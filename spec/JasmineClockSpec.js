describe('Jasmine clock', function () {
    var timerCallback;
    beforeEach(() => {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('should work with fake clock', () => {
        setTimeout(function () {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.clock().tick(101);
        expect(timerCallback).toHaveBeenCalled();

    });



});
