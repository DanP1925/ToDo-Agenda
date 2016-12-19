Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('userTasks');
    }
});

Router.route('/', {name: 'tasksList'});

Router.route('/addTask', {name: 'addTask'});

Router.route('/tasks/:_id', {
    name: 'taskPage',
    data: function () {
        return Tasks.findOne(this.params._id);
    }
});

Router.route('/monthlyView', {name: 'monthlyView'});

Router.onBeforeAction('dataNotFound', {only: 'taskPage'});