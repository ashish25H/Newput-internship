$('#myform').validate({
    rules: {
        ['first-name']: {
            required: true,
        },
        ['last-name']: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        url: {
            required: true,
            url: true,
        },
        message: {
            required: true,
            minlength: 10,
        }
    },
    messages: {
        ['first-name']: {
            required: 'This field is required',
        },
        ['last-name']: {
            required: 'This field is required',
        },
        email: {
            email: true,
        },
        url: {
            required: 'This field is required',
            url: 'Enter a valid URL',
        },
        message: {
            minlength: 'Please enter at least 10 words',
        }
    }
});
