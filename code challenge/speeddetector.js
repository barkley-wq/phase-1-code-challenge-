let excessDemerit = 12;
let nspeed = 70; 
function speedcheck(speed){
    if(speed <= nspeed){
        console.log("Ok")
    }else{
        let demerit = Math.floor((speed - 70 )/ 5)
        console.log(`You have ${demerit} demerit points.`);
        if(demerit > excessDemerit){
            console.log("License suspended")
        }
    }
}
