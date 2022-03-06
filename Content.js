var people = ["kimkardashian", "ye", "marcusfilly", "universityhousinganddining"];

/*
The first digit indicates whether the user alters their photos.
The second digit indicates whether the user spreads nutritional misinformation.
Both follow the convention below:
0: Not altered
1: Crowd-source database confirmed
2: ML suspecting
*/
var flags_list = ["10", "01", "21", "01"];

// CO_ -> implies community flagged, ML_ -> computer flagged
// ImageEdit: Known to edit their photos
// Lang: Nutritional misinfo


function hello() {
    const all_users = document.querySelectorAll('.sqdOP.yWX7d._8A5w5.ZIAjV');

    for (let user_ of all_users) {
        if ((user_.parentElement.parentElement.querySelector('#added') === null) && (!user_.querySelector('._7UhW9.PIoXz.qyrsm.KV-D4.uL8Hv'))) {
            var button = document.createElement("BUTTON");
            button.style.backgroundColor = "white";
            button.innerHTML = "&#129528";
            button.style.marginLeft = "1rem";
            button.id = "added"
            button.style.borderColor = "grey"
            button.style.borderRadius = "20px"
            let index = people.indexOf(user_.innerHTML);
            if (index != -1) {
                let flags = flags_list[index];
                let added_flags = false;
                if (flags[0] == '1') {
                    button.style.backgroundColor = "#FF6961";
                    added_flags = true;
                }
                if (flags[0] == '2') {
                    button.style.backgroundColor = "yellow";
                    added_flags = true;
                }
                if (flags[1] == '1') {
                    if (added_flags == true) {
                        user_.innerHTML = user_.innerHTML + ", " + "CO_Lang";
                    } else {
                        user_.innerHTML = user_.innerHTML + " | " + "CO_Lang";
                        added_flags = true;
                    }
                }
                if (flags[1] == '2') {
                    if (added_flags == true) {
                        user_.innerHTML = user_.innerHTML + ", " + "ML_Lang";
                    } else {
                        user_.innerHTML = user_.innerHTML + ", " + "ML_Lang";
                        added_flags = true;
                    }
                }
            }
            user_.parentElement.parentElement.appendChild(button)
        }
    };
    // alert(`Stored ${all_users.length} usernames`);

};

var intervalID = setInterval(hello, 100);