"use strict";
function Click() {
    var combo = document.getElementsByName("cb");
    for (var i = 0; i < combo.length; i++) {
        if (combo[i].checked) {
            console.log(combo[i].value);
        }
    }
}
//# sourceMappingURL=main.js.map