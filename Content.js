var people = ["kimkardashian", "ye", "marcusfilly", "universityhousinganddining"];

/*
The first digit indicates whether the user alters their photos.
The second digit indicates whether the user spreads nutritional misinformation.
Both follow the convention below:
0: Not altered
1: Crowd-source database confirmed
2: ML suspecting
*/
var flags_list = ["11", "01", "21", "01"];

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
                if (flags[0] == '1') {
                    button.style.backgroundColor = "#FF6961";
                }
                if (flags[0] == '2') {
                    button.style.backgroundColor = "yellow";
                }
                if (flags[1] == '1') {
                    button.style.backgroundColor = "#FF6961";
                }
                if (flags[1] == '2') {
                    button.style.backgroundColor = "yellow";
                }
            }
            user_.parentElement.parentElement.appendChild(button);

            button.onclick = function () {
                let index = people.indexOf(user_.innerHTML);
                if (index != -1) {
                    let flags = flags_list[index];
                    let added_flags = false;
                    let string_res = "";
                    if (flags[0] == '1') {
                        string_res = string_res + "This user is in our crowd-sourced database for altering photos";
                        added_flags = true;
                    }
                    if (flags[0] == '2') {
                        string_res = string_res + "This user is suspected to alter their photos";
                        added_flags = true;
                    }
                    if (flags[1] == '1') {
                        if (added_flags == true) {
                            string_res = string_res + " and is in our database for spreading nutritional misinformation.";
                        } else {
                            string_res = string_res + "" + "This user is our database for spreading nutritional misinformation";
                            added_flags = true;
                        }
                    }
                    if (flags[1] == '2') {
                        if (added_flags == true) {
                            string_res = string_res + " and is suspected to spread nutritional misinformation";
                        } else {
                            string_res = string_res + "" + "This user is suspected to spread nutritional misinformation";
                            added_flags = true;
                        }
                    }
                    window.alert(string_res);
                }
                // let temp = document.createElement("div");
                // temp.classList.add('modal');

                // let child = document.createElement('div');
                // child.classList.add('child');
                // child.innerHTML = "Hello"

                // temp.appendChild(child);
                // document.body.appendChild(temp);
            };
        }
    };
    // alert(`Stored ${all_users.length} usernames`);

};

var intervalID = setInterval(hello, 100);