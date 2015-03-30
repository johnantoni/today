Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

stateClass = function (task) {
  if (task.done) {
    return 'taskCompleted'
  }
  else {
    return 'taskRemaining'
  }
};

currentTasks = function (user) {
  var userId = user && user._id;
  return Tasks.find({userId: userId, done: false}, {sort: {startDate: -1}});
};

completedTasks = function (user) {
  var userId = user && user._id;
  return Tasks.find({userId: userId, done: true}, {sort: {startDate: -1}});
};

Meteor.startup(function () {
});
