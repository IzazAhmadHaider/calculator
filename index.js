setInterval(() => {
    const d= new Date();
    htime=d.getHours(),d.hour12=true;
    mtime=d.getMinutes();
    stime=d.getSeconds();
    
    hrotate=30*htime + mtime/2;
    mrotate=6*mtime ;
    srotate=6*stime;

    hour.style.transform=`rotate(${hrotate}deg)`;
    minutes.style.transform=`rotate(${mrotate}deg)`;
    seconds.style.transform=`rotate(${srotate}deg)`;

  document.getElementById("digital").innerHTML=d.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', second: 'numeric', hour12: true })
}, 1000);