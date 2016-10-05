import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('graphical-node-builder', 'Integration | Component | graphical node builder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{graphical-node-builder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#graphical-node-builder}}
      template block text
    {{/graphical-node-builder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
