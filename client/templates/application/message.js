Template.message.helpers({
    title: function() {
        var routeName = Router.current().route.getName();
        if (routeName === 'tasksList'){
            return ' Daily To-Do List';
        } else if (routeName === 'addTask'){
            return ' New Task';
        } else if (routeName === 'taskPage'){
            return ' Task Details';
        } else if (routeName === 'monthlyView'){
            return ' Monthly Agenda';
        }
    }
});
