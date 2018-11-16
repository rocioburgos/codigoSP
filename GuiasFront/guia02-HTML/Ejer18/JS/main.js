"use strict";
function Click() {
    var voto = (document.getElementsByName("rdoVoto"));
    //me devulve un array, con losvalores del grupo de radio buttons
    for (var i = 0; i < voto.length; i++) {
        if (voto[i].checked) {
            console.log(voto[i].value);
        }
    }
}
//# sourceMappingURL=main.js.map