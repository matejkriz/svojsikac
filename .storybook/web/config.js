import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => (
  <div style={{margin:30}}>
    {story()}
  </div>
));

const req = require.context('../../src/browser', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
