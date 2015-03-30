var task = {
  // endDate: function () {
  //   return ((POMODORO_LENGTH).minutesAfter(this.startDate));
  // },
  // remaining: function () {
  //   return this.endDate().getTime() - Date.now();
  // },
  // done: function () {
  //   return this.remaining() < 0;
  // },
};

Tasks = new Meteor.Collection("Tasks", {
  transform: function (doc) {
    return _.extend(Object.create(task), doc);
  }
});

var ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

Tasks.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});
