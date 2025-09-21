import { create } from "./window.js";

const defaultApps = [
    "访达", "启动台", "Safari浏览器", "信息", "邮件", "地图", "照片", "FaceTime通话",
    "日历", "通讯录", "提醒事项", "备忘录", "无边记", "视频", "音乐", "App Store",
    "系统设置", "iPhone镜像", "hr", "废纸篓"
];

export const dock = document.getElementById("dock");

function init() {
    defaultApps.forEach((app, index) => {
        let container = document.createElement("div");
        container.classList.add("container");
        if (app != "hr") {
            let img = document.createElement("img");
            img.src = `assets/images/${app}.png`;
            container.appendChild(img);
            let light = document.createElement("div");
            light.classList.add("light");
            if (index == 0) {
                light.classList.add("on");
            }
            container.appendChild(light);

            img.addEventListener("mousedown", () => {
                img.style.filter = "brightness(0.5)";
            });
            img.addEventListener("mouseup", () => {
                img.style.filter = "brightness(1)";
                create("assets/apps/"+app+".html");
            });
        } else {
            let hr = document.createElement("hr");
            container.appendChild(hr);
        }
        dock.appendChild(container);
    })
}
init();