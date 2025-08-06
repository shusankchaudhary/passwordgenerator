function createPassword() {
    const passwordBox = document.getElementById('password');
    const length = 12; //length of the password
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-{}[]:;,.<>?";

    // Ensure at least one of each type
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    const allChars = upper + lower + numbers + symbols;
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle password so required characters aren't always at the front
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById('password');
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
}
