Template.taskList.helpers({
  currentTasks: function () {
    return currentTasks(Meteor.user());
  },
  completedTasks: function () {
    return completedTasks(Meteor.user());
  }
});

Template.taskList.events({
  'submit #new-task' : function (e) {
    e.preventDefault();

    var task = {
      userId: Meteor.userId(),
      createdAt: new Date(),
      done: false,
      name: e.target.name.value,
    };
    Tasks.insert(task);
  }
});
