import init from '../helpers/setup';

init((driver) => {
  describe('Home BROWSER', () => {
    it('default text should be visible', () =>
      driver
        .elementByCss('.Heading')
        .text().should.eventually.equal('Actum'),
    );
  });
});
