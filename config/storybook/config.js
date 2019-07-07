/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';
import '../../src/components/App/style.scss';

const req = require.context('../../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
