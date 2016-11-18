import wd from 'wd';
import 'colors';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const should = chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

export default should;
