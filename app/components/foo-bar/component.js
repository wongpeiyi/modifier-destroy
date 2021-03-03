import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FooBarComponent extends Component {
  get filteredUsers() {
    return this.args.users.filterBy('coaches.length');
  }

  @action
  performUpdate() {}
}
