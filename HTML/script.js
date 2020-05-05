var screen_number = window.document.getElementById("screen_number");

screen_number.textContent = 0;

var previous_number = 0;

var previous_operation = 0;

var operation_selected = false;

var operation_recently_selected = false;

var equals_selected = false;


window.document.getElementById("n0").addEventListener("click", function () {
    numberButton(0)
});
window.document.getElementById("n1").addEventListener("click", function () {
    numberButton(1)
});
window.document.getElementById("n2").addEventListener("click", function () {
    numberButton(2)
});
window.document.getElementById("n3").addEventListener("click", function () {
    numberButton(3)
});
window.document.getElementById("n4").addEventListener("click", function () {
    numberButton(4)
});
window.document.getElementById("n5").addEventListener("click", function () {
    numberButton(5)
});
window.document.getElementById("n6").addEventListener("click", function () {
    numberButton(6)
});
window.document.getElementById("n7").addEventListener("click", function () {
    numberButton(7)
});
window.document.getElementById("n8").addEventListener("click", function () {
    numberButton(8)
});
window.document.getElementById("n9").addEventListener("click", function () {
    numberButton(9)
});


window.document.getElementById("op1").addEventListener("click", function () {
    operationButton(1)
});
window.document.getElementById("op2").addEventListener("click", function () {
    operationButton(2)
});
window.document.getElementById("op3").addEventListener("click", function () {
    operationButton(3)
});
window.document.getElementById("op4").addEventListener("click", function () {
    operationButton(4)
});

window.document.getElementById("op5").addEventListener("click", function () {
    setEsqualsSelected();
    equalsButton();
});


window.document.getElementById("clear_button").addEventListener("click", function () {

    screen_number.textContent = 0;
    previous_number = 0;
    operation_factor = 0;
    previous_operation = 0;
    operation_selected = false;
    operation_changed = false;
    operation_recently_selected = false;


});


function numberButton(n_) {

    //updateLog();

    if (operation_selected) {

        screen_number.textContent = n_;
        operation_selected = false;

    } else {

        if (screen_number.textContent.length <= 8) {
            if (!operation_selected) {
                screen_number.textContent = Number.parseFloat(screen_number.textContent) * 10 + n_;
            } else {
                previous_number = Number.parseFloat(screen_number.textContent);
                screen_number.textContent = n_;
            }
        }
    }

    operation_recently_selected = false;


}

function operationButton(n_) {

    //updateLog();

    if (!operation_recently_selected) {

        if (!equals_selected) {

            equalsButton();

        }

        operation_recently_selected = true;

        previous_number = Number.parseFloat(screen_number.textContent);

    }

    operation_changed = true;

    previous_operation = n_;

    equals_selected = false;


    operation_selected = true;




}

function setEsqualsSelected() {

    //updateLog();

    operation_recently_selected = true;

    equals_selected = true;

}

function equalsButton() {

    //updateLog();

    operation_selected = true;

    if (previous_operation != 0) {

        if (operation_changed) {
            operation_factor = Number.parseFloat(screen_number.textContent);
            operation_changed = false;

            if (previous_operation == 1) {
                if (Number.parseFloat(previous_number + Number.parseFloat(screen_number.textContent)).toString().length <= 9) {
                    screen_number.textContent = previous_number + Number.parseFloat(screen_number.textContent);
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 2) {
                if (Number.parseFloat(previous_number + Number.parseFloat(screen_number.textContent)).toString().length <= 9) {
                    screen_number.textContent = previous_number - Number.parseFloat(screen_number.textContent);
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 3) {
                if (Number.parseFloat(previous_number * Number.parseFloat(screen_number.textContent)).toString().length <= 9) {
                    screen_number.textContent = previous_number * Number.parseFloat(screen_number.textContent);
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 4) {
                if (Number.parseFloat(previous_number / Number.parseFloat(screen_number.textContent)).toString().length <= 9) {
                    screen_number.textContent = previous_number / Number.parseFloat(screen_number.textContent);
                } else {
                    screen_number.textContent = 999999999;
                }
            }

        } else {

            if (previous_operation == 1) {
                if (Number.parseFloat(Number.parseFloat(screen_number.textContent) + operation_factor).toString().length <= 9) {
                    screen_number.textContent = Number.parseFloat(screen_number.textContent) + operation_factor;
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 2) {
                if (Number.parseFloat(Number.parseFloat(screen_number.textContent) - operation_factor).toString().length <= 9) {
                    screen_number.textContent = Number.parseFloat(screen_number.textContent) - operation_factor;
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 3) {
                if (Number.parseFloat(Number.parseFloat(screen_number.textContent) * operation_factor).toString().length <= 9) {
                    screen_number.textContent = Number.parseFloat(screen_number.textContent) * operation_factor;
                } else {
                    screen_number.textContent = 999999999;
                }
            }
            if (previous_operation == 4) {
                if (Number.parseFloat(Number.parseFloat(screen_number.textContent) / operation_factor).toString().length <= 9) {
                    screen_number.textContent = Number.parseFloat(screen_number.textContent) / operation_factor;
                } else {
                    screen_number.textContent = 999999999;
                }
            }

        }


    }

    previous_number = Number.parseFloat(screen_number.textContent);
}

//---for debugging---
function updateLog(){
    window.document.getElementById("x1").textContent = "previous_number = " + previous_number;
    window.document.getElementById("x2").textContent = "previous_operation = " + previous_operation;
    window.document.getElementById("x3").textContent = "operation_selected = " + operation_selected;
}
