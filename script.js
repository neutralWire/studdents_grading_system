// const d = new Date();
// let year=d.getFullYear();
// let month=d.getMonth();
// let date=d.getDate();
// let hours=d.getHours();
// let mins=d.getMinutes();
// let sec=d.getSeconds();
// let ms=d.getMilliseconds();
// let time=d.getTime();
// let day=d.getDay();
// document.write("Year: ",year,"<br>","Month: ",month+1,"<br>","Date: ",date,"<br>","Hours",hours,"<br>","Minutes: ",mins,"<br>","Seconds: ",sec,"<br>","Milliseconds: ",ms,"<br>","Time: ",time,"<br>","Day: ",day,"<br>");
let per=prompt("Enter your percentage: ");
let grade;
if(per>100){
    grade="Invalid Entry! Refresh again.";
}
else if(per<=100 && per>=80){
    grade="A";
}
else if(per<=79 && per>=60){
    grade="B";
}
else if(per<=59 && per>=40){
    grade="C";
}
else{
    grade="F";
}
document.write("Your grade is: ",grade);
