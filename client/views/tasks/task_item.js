Template.taskItem.helpers({
  stateClass : function() {
    return stateClass(this);
  }
});

Template.taskItem.events({
  'click .done' : function (e) {
    Tasks.update(this._id, {$set: {done: true}});
  },
  'click .delete' : function (e) {
    Tasks.remove(this._id);
  }
});
