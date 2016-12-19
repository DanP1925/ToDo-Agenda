Template.addTask.events({
    'click .back': function(){
        Router.go('tasksList');
    },

    'submit form': function(e){
        e.preventDefault();

        var createdMonthErr = $(e.target).find('[name=createdDate]').val().substring(0,2);
        var createdMonth = parseInt(createdMonthErr,10)-1;
        var createdDay = $(e.target).find('[name=createdDate]').val().substring(3,5);
        var createdYear = $(e.target).find('[name=createdDate]').val().substring(6);
        var createdOn = new Date(createdYear,createdMonth,createdDay);

        if ($(e.target).find('[name=deadline]').val()){
            var deadlineMonthErr = $(e.target).find('[name=deadline]').val().substring(0,2);
            var deadlineMonth = parseInt(deadlineMonthErr,10)-1;
            var deadlineDay = $(e.target).find('[name=deadline]').val().substring(3,5);
            var deadlineYear = $(e.target).find('[name=deadline]').val().substring(6);
            var deadlineOn = new Date(deadlineYear,deadlineMonth,deadlineDay);
        } else {
            var deadlineOn = null;
        }

        var task = {
            userId: Meteor.user()._id,
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val(),
            createdDate: createdOn,
            deadline: deadlineOn,
            priority: $(e.target).find('[name=priority]').val(),
            completeFlag: 'false',
            completeDate: null
        };

        Tasks.insert(task);
        Router.go('tasksList');
    }
});

Template.addTask.rendered=function() {
    $('#createdDate').datepicker('setDate', new Date());
    $('#createdDate').datepicker('update');
    $('#deadline').datepicker();
};