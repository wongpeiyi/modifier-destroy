import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import defaultScenario from 'modifier-destroy/mirage/scenarios/default';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | foo', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function (assert) {
    defaultScenario(this.server);

    await visit('/');
  });
});
