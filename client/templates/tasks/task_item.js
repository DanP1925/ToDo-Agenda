Template.taskItem.helpers({
    isCreatedBefore: function () {
        var createdTime = this.createdDate.getTime();
        var currentTime = Session.get('currentDate').getTime();
        return createdTime <= currentTime;
    },

    isBeforeDeadline: function () {
        if (this.deadline == null) {
            return true;
        } else {
            var deadlineTime = this.deadline.getTime();
            var currentTime = Session.get('currentDate').getTime();
            return deadlineTime >= currentTime;
        }
    },

    isntCompleted: function () {
        if (this.completeFlag === 'false') {
            return true;
        } else {
            if (this.completeDate !== null) {
                var completeTime = this.completeDate.getTime();
                var currentTime = Session.get('currentDate').getTime();
                return completeTime === currentTime;
            }
            return false;
        }
    },

    bgcolor: function() {
        if (this.priority == 5){
            return "#C34A2C";
        } else if (this.priority == 4){
            return "orange";
        } else if (this.priority == 3){
            return "#EDE275";
        } else if (this.priority == 2){
            return "#9ACD32";
        } else if (this.priority == 1){
            return "green";
        } else{
            return "gray";
        }
    },

    formatDeadline: function() {
        return this.deadline.toLocaleDateString();
    }
});

Template.taskItem.events({
    'click .clickable-row': function (e) {
        $('.clickable-row').removeClass('active');
        $(e.currentTarget).addClass('active');
    },

    'dblclick .active': function (e) {
        var taskId = $('.active td:first').text();
        taskRoute = '/tasks/' + taskId;
        Router.go(taskRoute);
    }
});

