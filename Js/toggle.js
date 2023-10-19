const check = document.querySelector(".toggle");
const theme = document.querySelector(".theme");
const setLogo = document.querySelector(".head-logo img");
const toggleSwitch = document.querySelector(`.toggle input[type="checkbox"]`);
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    theme.classList.add("active-toggle")
    setLogo.classList.add("active-logo")
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    theme.classList.remove("active-toggle")
    setLogo.classList.remove("active-logo")
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

/*if(currentTheme){
  document.documentElement.setAttribute("data-theme",currentTheme)
}else{
  document.documentElement
  check.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("evento");
    theme.classList.toggle("active-theme");
  });
}*/
