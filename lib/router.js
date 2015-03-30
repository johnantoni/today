Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [Meteor.subscribe('tasks')];
  }
});

Router.map( function () {
  this.route('taskList', {
    path: ['/'],
    fastRender: false
  });
});
