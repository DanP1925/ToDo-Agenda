Template.viewButtons.events({
    'click .dailyView': function () {
        Router.go('tasksList');
    },

    'click .monthlyView': function () {
        Router.go('monthlyView');
    },
});
