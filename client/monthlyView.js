Template.monthlyView.helpers({
    mostImportantTask: function(){
        return Tasks.findOne({completeFlag: 'false'}, {sort: {priority: -1}});
    },

    formatCreatedDate: function(){
        return this.createdDate.toLocaleDateString();
    },

    formatDeadline: function(){
        return this.deadline.toLocaleDateString();
    }
})

Template.monthlyView.rendered=function() {
    $('#calendar').datepicker().on('changeDate', function (e) {
        $("#selectedDate").val(e.format());
    });
    $('#calendar').datepicker('setDate', new Date());
    $('#calendar').datepicker('update');
}