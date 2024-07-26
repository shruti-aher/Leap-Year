
let year=parseInt(prompt("enter the year"));
function leapYear(){
    if(year%4===0){
        if(year%100!==0){
            if(year%400==0){
                document.write("leap year");
            }else{
                document.write("Not a leap year");
            }

        }else{
            document.write("leap year");
        }

    }else {
        document.write("Not a leap year");
    }
}
