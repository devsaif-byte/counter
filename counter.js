let countInit = 0;
const countVal = document.querySelector(".count");
const btns = document.querySelectorAll(".outline");
btns.forEach(function (btn) {
	btn.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;
		console.log(styles);
		if (styles.contains("decrease")) {
			countInit--;
		} else if (styles.contains("increase")) {
			countInit++;
		} else if (styles.contains("reset")) {
			countInit = 0;
		}
		if (countInit > 0) {
			countVal.style.color = "green";
		} else if (countInit < 0) {
			countVal.style.color = "red";
		} else {
			countVal.style.color = "#222";
		}
		countVal.textContent = countInit;
	});
});
