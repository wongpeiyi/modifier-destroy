import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FooBarComponent extends Component {
  @tracked foo;

  get filteredUsers() {
    return this.args.users.filterBy('coaches.length');
  }
}
