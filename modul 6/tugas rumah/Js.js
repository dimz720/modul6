function validateForm() {
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var website = document.getElementById('website').value;

    var namePattern = /^[a-zA-Z\s]+$/;
    var usernamePattern = /^[a-zA-Z0-9_]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var robotCheckbox = document.getElementById('robot');
    var robotError = document.getElementById('robot-error');


    var error = "";

    if (!namePattern.test(name)) {
        error += "Nama hanya boleh berisi huruf dan spasi.\n";
    }

    if (!usernamePattern.test(username)) {
        error += "Username hanya boleh berisi huruf, angka, dan garis bawah.\n";
    }

    if (!emailPattern.test(email)) {
        error += "Format email tidak valid.\n";
    }

    if (!phone.match(/^\d+$/)) {
        error += "No Telepon hanya boleh berisi angka.\n";
    }

    if (gender === "") {
        error += "Jenis Kelamin harus dipilih.\n";
    }

    if (!website.match(/^(http|https):\/\/[^ "]+$/)) {
        error += "Format Alamat Website tidak valid.\n";
    }

    

    if (error !== "") {
        document.getElementById('error').innerText = error;
        return false;
    }

    return true;
}
