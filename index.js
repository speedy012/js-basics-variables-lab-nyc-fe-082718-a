// Code your solution in this file!
let companyName = 'Scuber';
  it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('raises error if the companyName is changed', function () {
      expect(function () { companyName = 'Scuber' }).to.throw(TypeError);
    });
let mostProfitableNeighborhood = 'Chelsea';
let comapnayCeo = 'Susan Smith';