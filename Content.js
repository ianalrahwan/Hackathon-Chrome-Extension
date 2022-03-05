function hello() {
    const all_users = document.querySelectorAll('.sqdOP.yWX7d._8A5w5.ZIAjV');

    for (let user_ of all_users) {
        if (user_.querySelector('#added') === null) {
            var button = document.createElement("BUTTON");
            button.innerHTML = "<button id = added class='absolute bottom - 0 right - 0 rounded - md shadow m - 2'>&#128065</button>";
            user_.appendChild(button)
        }
    };
    // alert(`Stored ${all_users.length} usernames`);

};

var intervalID = setInterval(hello, 100);