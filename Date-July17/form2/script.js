// $.validator.addMethod('strongpassword', function (value, element, args) {
//     return / (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
// }, 'It is not strong password');

$.validator.addMethod('strongpassword', function (value, element, args) {
    return this.optional( element ) || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
}, 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long');

$('#form').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        name: {
            required: true,
            minlength: 5,
        },
        gender: {
            required: true,
        },
        password: {
            required: true,
            strongpassword: true,
        },
        ['confirm-password']: {
            required: true,
            equalTo: '#exampleInputPassword1',
        }
    },
    messages: {
        name: {
            required: 'This field is required',
        },
        email: {
            required: 'This field is required',
            email: 'Enter a valid email',
        },
        password: {
            required: 'This field is required',
            // strongpassword: 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long',
        },
        gender: {
            required: 'Select your gender',
        },
        ['confirm-password']: {
            required: 'This field is required',
            equalTo: 'Password not matched',
        },

    }
});
