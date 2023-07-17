$('#form').validate({
    rules : {
        name : {
            required : true,
        },
        email : {
            required : true,
            email : true,
        },
        age : {
            required : true,
            min : 1,
        },
        ['date-of-birth'] : {
            required : true,
        },
        ['phone-number'] : {
            required : true,
            minlength : 10,
            maxlength : 10,
            digits : true,
        }
    },
    messages : {
        name : {
            required : 'This field is required',
        },
        email : {
            required : 'Please Enter Email id',
            email : 'Enter a valid email id',
        },
        age : {
            min : 'Age must be grater then 1 year',
        },
        ['date-of-birth'] : {
            required : 'Please Enter your Date of Birth',
        },
        ['phone-number'] : {
            required : 'Please enter phone number',
            minlength : 'Phone number must contain 10 digits',
            maxlength : 'it does not accept more then 10 digits',
            digits : 'only enter digits (2324324)',
            
        }
    }
});