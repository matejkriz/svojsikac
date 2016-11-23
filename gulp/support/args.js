import yargs from 'yargs';

const args = yargs
  .alias('d', 'device')
  .alias('f', 'front')
  .alias('p', 'production')
  .alias('s', 'suite')
  .argv;

export default args;
