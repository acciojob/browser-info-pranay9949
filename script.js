//your JS code here. If required.
let a=document.getElementById("browser-info");
let b=document.createElement("p")
b.append(`You are using ${navigator.userAgent} version  ${navigator.appName} ${navigator.appVersion}`);
a.append(b);