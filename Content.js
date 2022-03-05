var people = ["kim", "ye", "ggu.food", "universityhousinganddining"];
// 1 represents Community Flag, 5 computer flag, "abc": a:Image Edited b: Loaded Language c: Extra
var flags_list = ["100", "010", "510", "010"];



// CO_ -> implies community flagged, ML_ -> computer flagged
// ImageEdit: Known to edit their photos
// Lang: Flagged to use loaded language

function hello() {
    const all_users = document.querySelectorAll('.sqdOP.yWX7d._8A5w5.ZIAjV');

    for (let user_ of all_users) {
        let index = people.indexOf(user_.innerHTML);
        if(index != -1){
            let flags = flags_list[index];
            let added_flags = false;
            if(flags[0] == '1'){
                user_.innerHTML = user_.innerHTML + " | " + "CO_ImageEdit";
                added_flags = true;
            }
            if(flags[0] == '5'){
                user_.innerHTML = user_.innerHTML + " | " + "ML_ImageEdit";
                added_flags = true;
            }
            if(flags[1] == '1'){
                if(added_flags == true){
                    user_.innerHTML = user_.innerHTML + ", " + "CO_Lang";
                }else{
                    user_.innerHTML = user_.innerHTML + " | " + "CO_Lang";
                    added_flags = true;
                }
            }
            if(flags[1] == '5'){
                if(added_flags == true){
                    user_.innerHTML = user_.innerHTML + ", " + "ML_Lang";
                }else{
                    user_.innerHTML = user_.innerHTML + ", " + "ML_Lang";
                    added_flags = true;
                }
            }

            if(flags[2] == '1'){
                if(added_flags == true){
                    user_.innerHTML = user_.innerHTML + ", " + "CO_Extra";
                }else{
                    user_.innerHTML = user_.innerHTML + " | " + "CO_Extra";
                    added_flags = true;
                }
            }
            if(flags[2] == '5'){
                if(added_flags == true){
                    user_.innerHTML = user_.innerHTML + ", " + "ML_Extra";
                }else{
                    user_.innerHTML = user_.innerHTML + ", " + "ML_Extra";
                    added_flags = true;
                }
            }
        }
    };
    // alert(`Stored ${all_users.length} usernames`);

};

var intervalID = setInterval(hello, 100);