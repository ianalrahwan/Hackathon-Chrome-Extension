function hello() {
    const all_users = document.querySelectorAll('.sqdOP.yWX7d._8A5w5.ZIAjV');

    for (let user_ of all_users) {
        user_.innerHTML = "<i>we stored this username</i>"
    };
    // alert(`Stored ${all_users.length} usernames`);

};

var intervalID = setInterval(hello, 100);