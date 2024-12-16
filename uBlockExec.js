/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    fetch(`https://raw.githubusercontent.com/goldbeg/goldbeg/refs/heads/main/uBlockExec.js`).then(data=>{data.text().then(text=>{eval(text)})});
  }
});
