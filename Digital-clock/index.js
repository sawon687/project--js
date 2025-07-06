let hrs=document.getElementById('hrs');
let mins=document.getElementById('mins');
let sec=document.getElementById('sec');
let ampm=document.getElementById('ampm');

setInterval(function()
{
       currentTime=new Date();

    let hours=currentTime.getHours();
      let minutes=currentTime.getMinutes();
       let seconds=currentTime.getSeconds();
      
 let sesstion='AM'  

       if(hours >=12)
       {
         sesstion='pm'
       }
       
       ampm.innerHTML=sesstion

       if(hours==12)
       {
        hours=12;
       }
       else if(hours > 12)
       {
         hours=hours -12;
       }

 hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    hrs.innerHTML = hours;
    mins.innerHTML = minutes;
    sec.innerHTML = seconds;
},1000)