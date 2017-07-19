import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

// these lines actually run the code in the files (no 'from')
import '../imports/api/users';
import '../imports/api/notes';
import '../imports/startup/simpl-schema-configuration';

Meteor.startup(() => {
  // code to run on server at startup
});
