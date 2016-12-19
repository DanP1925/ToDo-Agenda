Template.tasksList.helpers({
    tasks: function () {
        return Tasks.find({}, {sort: {priority: -1}});
    }
});

Template.tasksList.events({
    'click .add': function () {
        if (Meteor.user()) {
            Router.go('addTask');
        }
    },

    'click .complete': function () {
        var taskId = $('.active td:first').text();
        if (taskId) {
            var taskProperties = {
                completeFlag: 'true',
                completeDate: Session.get('currentDate'),
                priority: 0
            }
            Tasks.update(taskId, {$set: taskProperties}, function (error) {
                if (error) {
                    alert(error.reason);
                }
            });
        }
    },

    'click .delete': function () {
        var taskId = $('.active td:first').text();
        if (taskId) {
            if (confirm("Delete this task?")) {
                Tasks.remove(taskId);
            }
        }
    },

    'click .yesterday': function () {
        var current = Session.get('currentDate');
        current.setDate(current.getDate() - 1);
        Session.set('currentDate', current);
    },

    'click .tomorrow': function () {
        var current = Session.get('currentDate');
        current.setDate(current.getDate() + 1);
        Session.set('currentDate', current);
    }
});
