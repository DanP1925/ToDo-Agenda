Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',

    extraSignupFields: [{
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function (value, errorFunction) {
            if (!value) {
                errorFunction("Please write your first name");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
        validate: function (value, errorFunction) {
            if (!value) {
                errorFunction("Please writer your last name");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'gender',
        showFieldLabel: false,
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',
        data: [{
            id: 1,
            label: 'Male',
            value: 'm',
            checked: 'checked'
        }, {
            id: 2,
            label: 'Female',
            value: 'f'
        }],
        visible: true
    }]
});