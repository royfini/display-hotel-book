const myComponent = document.querySelector("rf-date-range-picker");

myComponent.addEventListener("book", (event) => {
  let data = event.detail;
  let url = `?check_availability=${data.guests}&check_in=${data.firstDate}&check_out=${data.lastDate}`;
  window.open(`https://royfini.github.io/display-hotel/${url}`)
});
