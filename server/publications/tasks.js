Meteor.publish("tasks", function (){
  return Tasks.find({}, {sort: {startDate: -1}});
});
