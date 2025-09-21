let appMenu = [
    "访达", "文件", "编辑", "显示", "前往", "窗口", "帮助"
];
let appControl = [
    "switch.2", "magnifyingglass", "wifi"
]

export const finderbar = document.getElementById("finderbar");

const appMenuContainer = document.createElement("div");
appMenuContainer.classList.add("left");
appMenuContainer.id = "left";
finderbar.appendChild(appMenuContainer);
const appControlContainer = document.createElement("div");
appControlContainer.classList.add("right");
appControlContainer.id = "right";
finderbar.appendChild(appControlContainer);

const logoMenu = document.createElement("p");
logoMenu.classList.add("logo");
logoMenu.innerHTML = "";
appMenuContainer.appendChild(logoMenu);
const timeControl = document.createElement("p");
timeControl.classList.add("time");
// timeControl.innerHTML = "4月12日 周六 18:26";
timeControl.innerHTML = "9月14日 周日";
const dateControl = document.createElement("p");
dateControl.classList.add("date");
dateControl.innerHTML = "13:20";
appControlContainer.appendChild(dateControl);
appControlContainer.appendChild(timeControl);

let openingMenu = null;

function updateMenu() {
    appMenu.forEach((menu, index) => {
        let nowMenu = document.createElement("p");
        nowMenu.innerHTML = menu;
        if (index == 0) {
            nowMenu.classList.add("appname");
        }
        appMenuContainer.appendChild(nowMenu);
    });
    resetMenuHandle();
}

function updateControl() {
    appControl.forEach((control) => {
        let nowControl = document.createElement("img");
        nowControl.src = `assets/images/${control}.svg`;
        appControlContainer.appendChild(nowControl);
    })
}

function resetMenuHandle() {
    let subMenus = document.querySelectorAll("div.menu");
    subMenus.forEach(subMenu => {
        if (document.querySelectorAll(".finderbar .left p")[1].innerHTML != subMenu.getAttribute("app")) {
            if (!subMenu.getAttribute("nomatchapp")) {
                console.log(subMenu.getAttribute("app"), "Not match");
                return;
            }
        }
        console.log(subMenu);
        let state = false;
        let parentMenu = document.querySelector(`#finderbar p.${subMenu.getAttribute("menu")}`);
        console.log(parentMenu);
        parentMenu.addEventListener("click", () => {
            if (state == false) {
                subMenu.classList.add("visible");
                parentMenu.classList.add("active");
                subMenu.style.left = `${parentMenu.offsetLeft}px`;
                subMenu.style.top = "25px";
                state = true;
                console.log(openingMenu)
                if (openingMenu != null) {
                    console.log("openingMenu is avaliable, closing...");
                    openingMenu.classList.remove("visible");
                }
                setTimeout(() => {
                    subMenu.style.transition = "opacity 0.15s ease";
                    openingMenu = subMenu;
                }, 50);
            } else {
                subMenu.classList.remove("visible");
                parentMenu.classList.remove("active");
                state = false;
                openingMenu = null;
                setTimeout(() => {
                    subMenu.style.transition = "none";
                }, 350);
            }
        });
    });
}

function updateTime() {
    const currentDateTime = new Date();
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    let day = currentDateTime.getDate();
    let month = currentDateTime.getMonth() + 1;
    const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let weekDay = days[currentDateTime.getDay()];
    day = day.toString();
    month = month.toString();
    timeControl.innerHTML = `${month} 月 ${day} 日 ${weekDay}`;
    dateControl.innerHTML = `${hours}:${minutes}`;
}

updateMenu();
updateControl();
updateTime();
setInterval(updateTime, 1000);
resetMenuHandle();