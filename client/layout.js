Template.layout.helpers({
    currentDate: function () {
        if (Meteor.user()) {
            if (!Session.get('currentDate')) {
                var today= new Date();
                Session.set('currentDate', new Date(today.getFullYear(),today.getMonth(),today.getDate()));
            }

            var dayNames = [
                "Sunday", "Monday", "Tuesday",
                "Wednesday", "Thursday", "Friday", "Saturday"
            ];

            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];


            var dayName = Session.get('currentDate').getDay();
            var day = Session.get('currentDate').getDate();
            var month = Session.get('currentDate').getMonth();
            var year = Session.get('currentDate').getFullYear();

            return dayNames[dayName] + ' ' + day + ' ' + monthNames[month] + ' ' + year;
        }
    }
})
