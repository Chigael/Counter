const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
const header = document.querySelector(".header")

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", Performs);
});

function Performs(e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
        // if (count < 100){
        count++;
    // }
    } else if (styles.contains("decrease")) {
        // if (count >= 1) {
            count--;
        // }
    } else {
        count = 0;
    }

    if (count > 0) {
        value.style.color = "#1eae98";
        header.style.color = "#1eae98";
    }

    if (count < 0) {
        value.style.color = "#ea5e76";
        header.style.color = "#ea5e76";
    }

    if (count === 0) {
        value.style.color = "#22436c";
        header.style.color = "#22436c";
    }

    value.textContent = count;
}