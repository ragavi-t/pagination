let body = document.getElementsByTagName("body");

let content = document.createElement("div");
content.setAttribute("class", "contentDetails");
document.body.append(content);

let displayContent = document.createElement("div");
displayContent.setAttribute("class", "contentCard");
content.append(displayContent);


let pagenationDiv = document.createElement("div");
pagenationDiv.setAttribute("class", "pagenationContainer");
content.append(pagenationDiv);

//XML http request.
let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json",
  true
);
request.send();
request.onload = function () {
  let rawData = request.response;
  let data = JSON.parse(rawData);

  //Previous button.
  let previous = document.createElement("button");
  previous.setAttribute("class", "previous");
  previous.innerHTML = "<<";
  pagenationDiv.append(previous);

  var prevButton = document.querySelector(".previous");
  prevButton.addEventListener("click", () => {
    for (let i = 1; i < 6; i++) {
      let selecBwd = document.querySelector(`.button${i}`);
      let forValue = +selecBwd.getAttribute("for");
      if (forValue > 5) {
        let value = forValue - 5;
        selecBwd.setAttribute("for", value);
        selecBwd.innerHTML = value;
      }
    }
  });

  let displayId = document.createElement("p");
  displayId.setAttribute("class", "dataId");
  displayId.setAttribute("for", "1");
  displayContent.append(displayId);
  displayId.innerText = `Id : ${data[0].id}`;

  let displayName = document.createElement("p");
  displayName.setAttribute("class", "dataName");
  displayName.setAttribute("for", "1");
  displayContent.append(displayName);
  displayName.innerText = `Name : ${data[0].name}`;

  let displayEmail = document.createElement("p");
  displayEmail.setAttribute("class", "dataEmail");
  displayEmail.setAttribute("for", "1");
  displayContent.append(displayEmail);
  displayEmail.innerText = `Email : ${data[0].email}`;

  //button1
  let button1 = document.createElement("button");
  button1.setAttribute("class", "button1");
  button1.setAttribute("for", "1");
  button1.innerHTML = "1";
  pagenationDiv.append(button1);

  let loadData1 = document.querySelector(".button1");
  loadData1.addEventListener("click",()=>{
    let colorValue1 = Math.floor(Math.random()*255);
    let colorValue2 = Math.floor(Math.random()*255);
    let colorValue3 = Math.floor(Math.random()*255);
    displayContent.style.backgroundColor=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5)`;
    displayContent.style.border=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5) solid 5px`;
    let forValue = +button1.getAttribute("for");
    displayId.innerText = `Id : ${data[forValue-1].id}`;
    displayName.innerText = `Name : ${data[forValue-1].name}`;
    displayEmail.innerText = `Email : ${data[forValue-1].email}`;
  })
//button2
  let button2 = document.createElement("button");
  button2.setAttribute("class", "button2");
  button2.setAttribute("for", "2");
  button2.innerHTML = "2";
  pagenationDiv.append(button2);

  let loadData2 = document.querySelector(".button2");
  loadData2.addEventListener("click",()=>{
    let colorValue1 = Math.floor(Math.random()*255);
    let colorValue2 = Math.floor(Math.random()*255);
    let colorValue3 = Math.floor(Math.random()*255);
    displayContent.style.backgroundColor=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5)`;
    displayContent.style.border=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5) solid 5px`;
    let forValue = +button2.getAttribute("for");
    displayId.innerText = `Id : ${data[forValue-1].id}`;
    displayName.innerText = `Name : ${data[forValue-1].name}`;
    displayEmail.innerText = `Email : ${data[forValue-1].email}`;
  })
//button3
  let button3 = document.createElement("button");
  button3.setAttribute("class", "button3");
  button3.setAttribute("for", "3");
  button3.innerHTML="3";
  pagenationDiv.append(button3);

  let loadData3 = document.querySelector(".button3");
  loadData3.addEventListener("click",()=>{
    let colorValue1 = Math.floor(Math.random()*255);
    let colorValue2 = Math.floor(Math.random()*255);
    let colorValue3 = Math.floor(Math.random()*255);
    displayContent.style.backgroundColor=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5)`;
    displayContent.style.border=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5) solid 5px`;
    let forValue = +button3.getAttribute("for");
    displayId.innerText = `Id : ${data[forValue-1].id}`;
    displayName.innerText = `Name : ${data[forValue-1].name}`;
    displayEmail.innerText = `Email : ${data[forValue-1].email}`;
  })
//button4
  let button4 = document.createElement("button");
  button4.setAttribute("class", "button4");
  button4.setAttribute("for", "4");
  button4.innerHTML = "4";
  pagenationDiv.append(button4);

  let loadData4 = document.querySelector(".button4");
  loadData4.addEventListener("click",()=>{
    let colorValue1 = Math.floor(Math.random()*255);
    let colorValue2 = Math.floor(Math.random()*255);
    let colorValue3 = Math.floor(Math.random()*255);
    displayContent.style.backgroundColor=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5)`;
    displayContent.style.border=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5) solid 5px`;
    let forValue = +button4.getAttribute("for");
    displayId.innerText = `Id : ${data[forValue-1].id}`;
    displayName.innerText = `Name : ${data[forValue-1].name}`;
    displayEmail.innerText = `Email : ${data[forValue-1].email}`;
  })
//button5
  let button5 = document.createElement("button");
  button5.setAttribute("class", "button5");
  button5.setAttribute("for", "5");
  button5.innerHTML = "5";
  pagenationDiv.append(button5);
  
  let loadData5 = document.querySelector(".button5");
  loadData5.addEventListener("click",()=>{
    let colorValue1 = Math.floor(Math.random()*255);
    let colorValue2 = Math.floor(Math.random()*255);
    let colorValue3 = Math.floor(Math.random()*255);
    displayContent.style.backgroundColor=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5)`;
    displayContent.style.border=`rgba(${colorValue1},${colorValue2},${colorValue3},0.5) solid 5px`;
    let forValue = +button5.getAttribute("for");
    displayId.innerText = `Id : ${data[forValue-1].id}`;
    displayName.innerText = `Name : ${data[forValue-1].name}`;
    displayEmail.innerText = `Email : ${data[forValue-1].email}`;
  })

//Next button
  let next = document.createElement("button");
  next.setAttribute("class", "next");
  next.innerHTML = ">>";
  pagenationDiv.append(next);

  var nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", () => {
    for (let i = 1; i < 6; i++) {
      let selecFwd = document.querySelector(`.button${i}`);
      let forValue = +selecFwd.getAttribute("for");
      if (forValue <= 95) {
        let value = forValue + 5;
        selecFwd.setAttribute("for", value);
        selecFwd.innerHTML = value;
      }
    }
  });
};