import Application from 'modifier-destroy/app';
import config from 'modifier-destroy/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
