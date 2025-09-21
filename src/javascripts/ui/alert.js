let newAlert;
let newAlertTitle;
let newAlertText;
let newAlertButton;

export function createAlert(icon, title, text, btn, command) {
    newAlert = document.createElement("c-messagebox");
    newAlert.iconpath = icon;
    newAlert.style.zIndex = 2048;
    newAlertTitle = document.createElement("p");
    newAlertTitle.setAttribute("slot", "title");
    newAlertTitle.innerHTML = title;
    newAlertText = document.createElement("p");
    newAlertText.setAttribute("slot", "text");
    newAlertText.innerHTML = text;
    newAlertButton = document.createElement("c-button");
    newAlertButton.setAttribute("slot", "button");
    newAlertButton.setAttribute("primary", "");
    newAlertButton.innerHTML = btn;
    if (command == "close") {
        newAlertButton.onclick = () => {
            newAlert.style.display = "none";
        }
    }
    newAlert.appendChild(newAlertTitle);
    newAlert.appendChild(newAlertText);
    newAlert.appendChild(newAlertButton);
    document.body.appendChild(newAlert);
}