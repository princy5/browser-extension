let myleads = []; //array as to store all the input values
const inpulel = document.getElementById("inputel");  //DOM
const inputbtn = document.getElementById("input-btn");
const tabel = document.getElementById("tab");
const delel = document.getElementById("del");
const ulel = document.getElementById("ulel");
let lfromlstorage = JSON.parse(localStorage.getItem("myleads"));

if (lfromlstorage) {
  myleads = lfromlstorage;
  render(myleads);
}

// till now,code tends to restore the application state upon page reload or revisit.
//next

// when button to store current url is clicked
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
    <a target= '_blank' href='${leads[i]}'> ${leads[i]} </a> 
    </li>`;
  }

  ulel.innerHTML = listitems;  //displaying list items
}




