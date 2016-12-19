Meteor.publish('userTasks', function(){
    var currentUserId = this.userId;
    return Tasks.find({userId: currentUserId});
});