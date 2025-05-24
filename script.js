const dtElements = document.querySelectorAll("dt");

dtElements.forEach(ele => {
    ele.addEventListener("click", () => {
        const ddId = ele.getAttribute("aria-controls");
        const ddElement = document.getElementById(ddId);
        const ddAroowIcon = ele.querySelectorAll("i")[0];

        ddElement.classList.toggle("hidden");
        ddAroowIcon.classList.toggle("-rotate-180")
    })
})

const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
    navDialog.classList.toggle("hidden");
}


let topBtn = document.querySelector(".top");

window.onscroll = function() {
    if( scrollY >= 700 ) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
}

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}