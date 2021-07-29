function validation() {
    var name = document.getElementById('universityName').value
    var address = document.getElementById('universityAddress').value
    var phone = document.getElementById('universityPhone').value

    var tokens = phone.split('-')

    for (var i = 0; i < tokens.length; i++) {
        if (isNaN(tokens[i])) {
            alert('Please use only numbers or hyphens!')
            $('#universityPhone').focus()
            return false
        }
    }

    var firstChar = address.trim().substring(0, 1)

    if (isNaN(firstChar)) {
        alert('Address should start with a number')
        $('#universityAddress').focus()
        return false
    }

    var pattern = /[a-z]/i
    if (!pattern.test(address)) {
        alert('Address should contain letters!')
        $('#universityAddress').focus()
        return false
    }
    return true
}

// const SERVER_URL = "http://dev.cs.smu.ca:8136"
const SERVER_URL = 'http://localhost:9000'
var data = []

$('#saveButton').click(function () {
    // validation();

    if (validation()) {
        var obj = {
            name: $('#universityName').val(),
            phone: $('#phoneNumber').val(),
            address: $('#address').val(),
        }
        console.log(obj)

        // $.post({
        //     traditional: true,
        //     url: SERVER_URL,
        //     contentType: 'application/json',
        //     data: JSON.stringify(obj),
        //     dataType: 'json',
        //     success: function (response) {
        //         alert('Successfully added!')
        //     },
        // })
    }
})
