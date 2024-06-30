function speedcheck(speed) {
    const speedLimit = 70;
    const demeritPointsThreshold = 12;
    const demeritPointsPer5kmh = 1

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended");
        

    }
}

}