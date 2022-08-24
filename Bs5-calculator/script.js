function val1() {
    document.getElementById('result').value += ("7")
}
function val2(params) {
    document.getElementById('result').value += ("8")
}
function val3(params) {
    document.getElementById('result').value += ("9")
}
function answer(params) {
    document.getElementById('result').value = eval(document.getElementById('result').value)
}