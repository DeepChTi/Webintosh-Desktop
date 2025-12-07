let apps = [
    "App Store", "Safari浏览器", "邮件", "通讯录", "日历", "提醒事项", "备忘录",
    "FaceTime通话", "信息", "地图", "查找", "Photo Booth", "照片", "音乐",
    "博客", "视频", "语音备忘录", "天气", "股市", "图书", "时钟",
    "计算器", "无边记", "家庭", "Siri", "iPhone镜像", "密码", "系统设置",
    "其他"
];
const containers = document.querySelector(".launchpad .containers");

function init() {
    apps.forEach(app => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        img.addEventListener("error", () => {
            img.src = `./assets/icons/noicon.svg`;
        });

        img.src = `./assets/icons/${app}.svg`;
        p.textContent = app;
        div.classList.add("container");
        div.appendChild(img);
        div.appendChild(p);
        containers.appendChild(div);
    });
}

init();
//666 依旧逆天码字速度