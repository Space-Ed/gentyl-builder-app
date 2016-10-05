import { test } from 'qunit';
import moduleForAcceptance from 'gentyl-builder/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | generic test');

test('visiting /generic-test', function(assert) {
  visit('/generic-test');

  andThen(function() {
    assert.equal(currentURL(), '/generic-test');
  });
});
