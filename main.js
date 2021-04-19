function get_paragraph_1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push = document.getElementById("parrel_input_box_" + i).value;
        document.getElementById("show_paragraph1").innerHTML = inputs.join(". ");

    }
}

function get_paragraph_2() {
    var inputs = [];
    for (var i = 11; i <= 16; i++) {
        inputs.push = document.getElementById("parrel_input_box_" + i).value;
        document.getElementById("show_paragraph2").innerHTML = inputs.join(". ");

    }
}