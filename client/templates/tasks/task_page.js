Template.taskPage.helpers({
    formatCreatedDate: function(){
        return this.createdDate.toLocaleDateString();
    },

    formatDeadline: function(){
        return this.deadline.toLocaleDateString();
    }
})

Template.taskPage.events({
    'click .back': function () {
        Router.go('tasksList');
    }
});
