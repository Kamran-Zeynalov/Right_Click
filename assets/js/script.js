let lastContext;
let divOut;

let arr = [
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-eye'></i>Prewiev",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-maximize'></i>Open with <i class='fa-solid fa-chevron-right' style='float:right; margin-right:20px; margin-top:5px; font-size:12px'></i> <hr style = 'margin-top:7px;'> ",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-user-plus'></i>Share",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-link'></i>Get Link",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-sharp fa-solid fa-plus'></i>Add to workspace <i class='fa-solid fa-chevron-right' style='float:right; margin-right:20px; margin-top:5px; font-size:12px'></i> <hr style = 'margin-top:7px;'></i>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-folder'></i>Show file location",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-brands fa-google-drive'></i>Add shortcut to Drive",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-file-export'></i>Move to",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-star'></i>Add to Started",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-pen-to-square'></i>Rename <hr style = 'margin-top:7px;'>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-closed-captioning'></i>View caption tracks",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-clock-rotate-left'></i>Manage version",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-copy'></i>Make a copy",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-circle-exclamation'></i>Report abuse",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-download'></i>Download <hr style = 'margin-top:7px;'>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-trash-can'></i>Move a Trush",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-thumbs-down'></i>Not a helpful suggestion",
];
window.oncontextmenu = function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  lastContext ? lastContext.remove() : "null";
  div.className = "context";
  div.style.width = "290px";
  div.style.backgroundColor = "white";
  div.style.boxShadow = "2px 2px 20px 2px lightgray";
  div.style.borderRadius = "10px";
  div.style.position = "fixed";
  div.style.top = `${event.clientY}px`;
  div.style.left = `${event.clientX}px`;
  document.body.prepend(div);
  lastContext = div;

  let ul = document.createElement("ul");
  div.append(ul);

  ul.style.listStyle = "none";
  ul.style.margin = "0";
  ul.style.padding = "0";
  for (i = 0; i <= arr.length - 1; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    li.style.cursor = "pointer";
    li.style.marginTop = "5px";
    li.style.marginBottom = "5px";
    li.style.paddingTop = "5px";
    li.style.paddingBottom = "5px";
    li.style.color = "rgb(92, 92, 92)";
    li.style.height = "20px";
    li.onmouseover = function () {
      li.style.backgroundColor = "rgb(223, 223, 223)";
    };
    li.onmouseout = function () {
      li.style.backgroundColor = "white";
    };
    ul.appendChild(li);
  }

  ul.firstChild.onclick = function () {
    document.body.style.height = "80vh";
    let div = document.createElement("div");
    divOut ? divOut.remove() : "null";
    div.style.width = "600px";
    div.style.height = "300px";
    div.style.backgroundColor = "rgba(11, 10, 120, 0.384)";
    div.style.borderRadius = "10px";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.marginTop = "80px";

    document.body.append(div);
    divOut = div;

    let inp = document.createElement("input");
    inp.style.width = "250px";
    inp.style.height = "40px";
    inp.style.backgroundColor = "white";
    inp.style.border = "none";
    inp.style.borderRadius = "10px";
    inp.style.boxShadow = "5px 5px 20px 5px rgba(255, 0, 0, 0.384)";

    inp.onkeydown = function (e) {
      let color = inp.value;
      if (e.keyCode == 13) {
        document.body.style.backgroundColor = color;
        inp.value = " ";
      }
    };
    div.append(inp);
  };
};

window.onclick = function () {
  lastContext ? lastContext.remove() : "null";
};
