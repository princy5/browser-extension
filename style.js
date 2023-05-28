let myleads = [];
const inpulel = document.getElementById("inputel");
const inputbtn = document.getElementById("input-btn");
const ulel = document.getElementById("ulel");
const delel = document.getElementById("del");
const tabel = document.getElementById("tab");
let lfromlstorage = JSON.parse(localStorage.getItem("myleads"));

if (lfromlstorage) {
  myleads = lfromlstorage;
  render(myleads);
}

tabel.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true },
     function (tabs) {
    myleads.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    render(myleads);
  })
})

delel.addEventListener("dblclick", function () {
  localStorage.clear;
  myleads = [];
  render(myleads);
});

inputbtn.addEventListener("click", function () {
  myleads.push(inpulel.value);
  inpulel.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads));
  render(myleads);
});

function render(leads) {
  let listitems = "";
  for (i = 0; i < leads.length; i++) {
    listitems += `
    <li> 
    <a target= '_blank' href='${leads[i]}'> ${leads[i]}
      </a> 
    </li>`;
  }

  ulel.innerHTML = listitems;
}
