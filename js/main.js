// headings color changes
const headings = document.getElementsByTagName("h2")
for (const heading of headings) {
	heading.style.color = "lightblue"
}
//backpack sections bg color changes
const backPackSection = document.getElementById("backpack")
backPackSection.style.backgroundColor = "tomato"

//cards border radius 30px
const cards = document.getElementsByClassName("card")
for (const card of cards) {
	card.style.borderRadius = "30px"
}

//cards buy now button

const btns = document.getElementsByClassName("buy-now-btn")
// console.log(btns)
for (const btn of btns) {
	// console.log(btn.parentNode)
	btn.addEventListener("click", function (event) {
		event.target.style.display = "none"
	})
}

const submitBtn = document.getElementById("submit")
const inputForm = document.getElementById("email-field")
submitBtn.style.cursor = "not-allowed"

inputForm.addEventListener("keyup", function (e) {
	// console.log(e.target.value)
	if (e.target.value.includes("gmail")) {
		submitBtn.style.cursor = "pointer"
		submitBtn.removeAttribute("disabled")
	}
})
submitBtn.addEventListener("click", function () {
	inputForm.value = ""
	submitBtn.style.cursor = "not-allowed"
	submitBtn.setAttribute("disabled", true)

	alert("aponar mail grohon kora holo ! :D")
})
