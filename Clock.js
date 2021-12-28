// const now = new Date();
// console.log(now);
// console.log(typeof(now));


// console.log('get Full year :' ,now.getFullYear());
// console.log('get Full Month :' ,now.getUTCMonth());
// console.log('get Full Date :' ,now.getUTCDate());
// console.log('get Full Day :' ,now.getUTCDay());
// console.log('get Full Hour :' ,now.getUTCHours());
// console.log('get Full Minutes :' ,now.getUTCMinutes());
// console.log('get Full Seconds :' ,now.getUTCSeconds()); 

// //Timestamps

// console.log('Timestamps :' , now.getTime());

// //date string

// console.log(now.toDateString());
// console.log(now.toTimeString());

const clock = document.querySelector('.clock');
const tick = () => {
 const now = new Date();

 const h = now.getHours();
 const m = now.getMinutes();
 const s = now.getSeconds();

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;
clock.innerHTML = html;
};

setInterval(tick, 1000);