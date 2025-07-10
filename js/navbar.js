function showSidebar() {
    var element = document.getElementById("myDIV")
    element.classList.toggle("show")
    element.removeAttribute('inert')

}

function hideSidebar() {
    var element = document.getElementById("myDIV")
    element.classList.toggle("show")
    element.setAttribute('inert', '')
}